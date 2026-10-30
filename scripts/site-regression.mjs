#!/usr/bin/env node
/** Browser regressions for the existing app, plus comparable before/after metrics. */
import assert from "node:assert/strict";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { chromium } from "playwright";
import { checkedUrl } from "./browser-guard.mjs";

const base = checkedUrl(process.argv[2] || "http://127.0.0.1:8081/");
const origin = new URL(base).origin;
const out = "/workspace/screenshots";
const expectFixes = process.env.SITE_EXPECT_FIXES !== "0";
const admissions2026 = process.env.SITE_ADMISSIONS_2026 === "1";
const admissionsUniversities = admissions2026 ? JSON.parse(readFileSync(new URL("../src/data/universities.ts", import.meta.url), "utf8")
  .match(/export const UNIVERSITIES\s*=\s*(\[[\s\S]*\])\s+as University\[\]/)[1]) : [];
const report = {
  revision: process.env.SITE_REVISION || "local",
  checks: [],
  metrics: {},
  quizResults: {},
  universityResults: {},
  admissionsResults: {},
  pageErrors: [],
};
mkdirSync(out, { recursive: true });

// Hosted CI does not include the project's interactive browser CLI. Try the
// documented tool twice before selecting the project's Playwright fallback.
let cliReady = false;
for (let attempt = 1; attempt <= 2; attempt++) {
  const probe = spawnSync("agent-browser", ["--session", "site-regression", "open", base], {
    encoding: "utf8",
    timeout: 15000,
  });
  if (probe.status === 0) {
    cliReady = true;
    break;
  }
  console.log(`agent-browser attempt ${attempt} unavailable: ${probe.error?.code || probe.status}`);
}
if (cliReady) {
  const smoke = spawnSync("agent-browser", ["--session", "site-regression", "batch", "--bail"], {
    input: JSON.stringify([
      ["eval", "if (!document.querySelector('h1')?.textContent.trim()) throw Error('Home page is blank')"],
      ["screenshot", `${out}/interactive-home.png`],
    ]),
    encoding: "utf8",
    timeout: 20000,
  });
  assert.equal(smoke.status, 0, smoke.stderr || smoke.stdout);
  spawnSync("agent-browser", ["--session", "site-regression", "close"], { timeout: 10000 });
} else {
  report.browserFallback = "Playwright after two unavailable agent-browser attempts";
  console.log(report.browserFallback);
}

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

async function check(name, run) {
  try {
    await run();
    report.checks.push({ name, passed: true });
    console.log(`PASS ${name}`);
  } catch (error) {
    report.checks.push({ name, passed: false, error: String(error?.stack || error) });
    throw error;
  }
}

async function visible(locator) {
  await locator.first().waitFor({ state: "visible", timeout: 20000 });
}

async function ready(page) {
  // SSR content can be visible while its client modules are still loading.
  // This runner targets the production preview, which has no HMR connection.
  await page.waitForLoadState("networkidle", { timeout: 30000 });
  await page.waitForFunction(() => [...document.querySelectorAll("button")].some((button) =>
    Object.keys(button).some((key) => key.startsWith("__reactProps$") && typeof button[key]?.onClick === "function"),
  ), null, { timeout: 20000 });
}

async function navigate(page, url) {
  const response = await page.goto(url, { waitUntil: "domcontentloaded" });
  await ready(page);
  return response;
}

async function question(page, number) {
  await visible(page.getByText(new RegExp(`^Câu ${String(number).padStart(2, "0")} /`)));
}

function observeErrors(page) {
  page.on("pageerror", (error) => report.pageErrors.push(String(error)));
}

async function metrics(page) {
  return page.evaluate((siteOrigin) => {
    const scripts = performance.getEntriesByType("resource").filter((entry) => {
      const resource = new URL(entry.name);
      // modulepreload is reported as initiatorType=link, but transfers JS too.
      return resource.origin === siteOrigin && /\.m?js$/.test(resource.pathname);
    });
    return {
      localScriptDecodedBytes: scripts.reduce((sum, entry) => sum + entry.decodedBodySize, 0),
      localScriptTransferBytes: scripts.reduce((sum, entry) => sum + entry.transferSize, 0),
      localScriptRequests: scripts.length,
      longTaskCount: (window.__siteLongTasks || []).length,
      longTaskDurationMs: (window.__siteLongTasks || []).reduce((sum, value) => sum + value, 0),
    };
  }, origin);
}

async function fields(locator) {
  return locator.locator("dt").evaluateAll((elements) => Object.fromEntries(elements.map((element) => [element.textContent.trim(), element.parentElement.querySelector("dd")?.textContent.trim()])));
}

async function paginate(scope, rowSelector, keyAttribute, nextLabel) {
  const found = [];
  for (let pageNumber = 0; pageNumber < 150; pageNumber++) {
    const rows = scope.locator(rowSelector);
    const keys = await rows.evaluateAll((elements, attribute) => elements.map((element) => element.getAttribute(attribute)), keyAttribute);
    assert.ok(keys.length > 0 && keys.length <= 12, `Expected a bounded page of ${rowSelector}`);
    found.push(...keys);
    const next = scope.getByRole("button", { name: nextLabel, exact: true });
    if (!await next.count() || await next.isDisabled()) return found;
    const first = keys[0];
    await next.click();
    await rows.first().evaluate((element, { attribute, previous }) => new Promise((resolve, reject) => {
      const start = performance.now();
      const poll = () => {
        if (element.getAttribute(attribute) !== previous || !element.isConnected) return resolve(true);
        if (performance.now() - start > 10000) return reject(new Error("Pagination did not change rows"));
        requestAnimationFrame(poll);
      };
      poll();
    }), { attribute: keyAttribute, previous: first });
    // A locator resolves the new row after keyed React elements are replaced.
    await rows.first().waitFor({ state: "attached" });
  }
  throw new Error("Pagination exceeded its expected bound");
}

let page;
try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await context.addInitScript(() => {
    performance.setResourceTimingBufferSize(2000);
    window.__siteLongTasks = [];
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) window.__siteLongTasks.push(entry.duration);
      }).observe({ type: "longtask", buffered: true });
    } catch { /* Optional browser performance API. */ }
  });
  page = await context.newPage();
  const admissionsRequests = [];
  page.on("request", (request) => {
    if (/\/admissions\/2026\/uni-\d+\.json(?:$|\?)/.test(request.url())) admissionsRequests.push(new URL(request.url()).pathname);
  });
  observeErrors(page);
  page.setDefaultTimeout(15000);

  await check("home renders without horizontal overflow", async () => {
    const response = await navigate(page, base);
    assert.equal(response.status(), 200);
    await visible(page.locator("h1"));
    await page.waitForTimeout(700);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    report.metrics.home = await metrics(page);
    await page.screenshot({ path: `${out}/home-desktop.png` });
    if (expectFixes) {
      const header = page.locator("header").first();
      const initialHeight = (await header.boundingBox()).height;
      await page.evaluate(() => window.scrollTo({ top: 650, behavior: "instant" }));
      await page.waitForTimeout(150);
      assert.ok(Math.abs((await header.boundingBox()).height - initialHeight) < 1, "scrolling must not change the header layout height");
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    }
  });

  await check("university search, filters, expansion and reset preserve results", async () => {
    await navigate(page, `${origin}/huong-nghiep`);
    const explorer = page.locator("#bo-loc-truong");
    const search = explorer.getByRole("textbox", { name: "Tìm trường" });
    await visible(search);
    await explorer.locator("article").first().scrollIntoViewIfNeeded();
    await visible(explorer.locator("article h3"));
    assert.equal(await explorer.locator("article").count(), 12);
    report.metrics.universityInitial = await metrics(page);

    await explorer.getByRole("button", { name: /^Xem tất cả 126 trường$/ }).click();
    await page.waitForFunction(() => document.querySelectorAll("#bo-loc-truong article").length === 126);
    report.universityResults.all = await explorer.locator("article h3").allTextContents();
    await search.fill("Bách khoa");
    await page.waitForFunction(() => {
      const cards = document.querySelectorAll("#bo-loc-truong article");
      return cards.length > 0 && cards.length < 126 && [...cards].every((card) => /bách khoa/i.test(card.textContent));
    });
    report.universityResults.search = await explorer.locator("article h3").allTextContents();
    await search.fill("zzzz-no-university-98341");
    await visible(explorer.getByText("Không có trường khớp bộ lọc.", { exact: false }));
    assert.equal(await explorer.locator("article").count(), 0);
    await explorer.getByRole("button", { name: "Xóa bộ lọc", exact: true }).click();
    await page.waitForFunction(() => document.querySelectorAll("#bo-loc-truong article").length === 126);
    await explorer.getByRole("button", { name: "Miền Nam", exact: true }).click();
    await page.waitForFunction(() => {
      const cards = document.querySelectorAll("#bo-loc-truong article");
      return cards.length > 0 && cards.length < 126 && [...cards].every((card) => card.textContent.includes("Miền Nam"));
    });
    report.universityResults.south = await explorer.locator("article h3").allTextContents();
    await explorer.getByRole("button", { name: "Xóa bộ lọc", exact: true }).click();
    await page.waitForFunction(() => document.querySelectorAll("#bo-loc-truong article").length === 126);
    if (admissions2026) {
      for (const band of ["20–24", "Trên 27"]) {
        const expectedIds = admissionsUniversities.filter((school) => school.admissions2026.thptValues.some((value) => band === "20–24" ? value >= 20 && value < 24 : value > 27)).map((school) => school.id).sort();
        await explorer.getByRole("button", { name: band, exact: true }).click();
        await page.waitForFunction((count) => document.querySelectorAll("#bo-loc-truong article").length === count, expectedIds.length);
        const actualIds = await explorer.locator('article a[href^="/truong-dai-hoc/uni-"]').evaluateAll((links) => links.map((link) => new URL(link.href).pathname.split("/").pop()).sort());
        assert.deepEqual(actualIds, expectedIds, "THPT score filters must exclude floors and estimates");
        report.admissionsResults[`filter-${band}`] = actualIds;
        await explorer.getByRole("button", { name: "Xóa bộ lọc", exact: true }).click();
        await page.waitForFunction(() => document.querySelectorAll("#bo-loc-truong article").length === 126);
      }
    }
    report.metrics.universityAfterFilters = await metrics(page);
    await page.screenshot({ path: `${out}/university-desktop.png` });
  });

  if (admissions2026) {
    await check("school listing loads no admissions JSON before entering a school", async () => {
      assert.deepEqual(admissionsRequests, []);
      await navigate(page, `${origin}/truong-dai-hoc`);
      await visible(page.getByRole("heading", { name: "126 trường đại học & học viện", exact: true }));
      const explorer = page.locator("#bo-loc-truong");
      await visible(explorer.getByRole("textbox", { name: "Tìm trường" }));
      assert.deepEqual(admissionsRequests, [], "Listing and filters must not eagerly fetch all school detail files");
      await explorer.getByRole("textbox", { name: "Tìm trường" }).fill("HUST");
      await page.waitForFunction(() => document.querySelectorAll("#bo-loc-truong article").length === 1);
      const detail = explorer.getByRole("link", { name: "Xem ngành & điểm", exact: true });
      assert.equal(await detail.getAttribute("href"), "/truong-dai-hoc/uni-001");
      await detail.click();
      await page.waitForURL("**/truong-dai-hoc/uni-001");
      await ready(page);
      await visible(page.getByRole("textbox", { name: "Tìm ngành hoặc mã ngành", exact: true }));
      assert.ok(admissionsRequests.includes("/admissions/2026/uni-001.json"));
      assert.ok(admissionsRequests.every((path) => path === "/admissions/2026/uni-001.json"), "Entering one school loads that school only");
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
      await page.screenshot({ path: `${out}/school-hust-page-desktop.png` });
    });

    await check("HUST source pagination, CH1 cutoff and separate estimates retain every row", async () => {
      const document = await page.request.get(`${origin}/admissions/2026/uni-001.json`).then((response) => response.json());
      const sourceView = page.getByRole("region", { name: "Ngành và dữ liệu nguồn", exact: true });
      const ids = await paginate(sourceView, "details[data-program-id]", "data-program-id", "Trang ngành sau");
      assert.deepEqual(ids, document.programs.map((program) => program.id), "Every program row, including repeated codes/variants, remains reachable");
      assert.equal(new Set(ids).size, document.programs.length);
      report.admissionsResults.hustPrograms = ids.length;
      await sourceView.getByRole("textbox", { name: "Tìm ngành hoặc mã ngành", exact: true }).fill("CH1");
      const program = sourceView.locator('[data-program-id="uni-001-row-16"]');
      await program.locator(":scope > summary").click();
      const thpt = program.locator('[data-source-row="28"]');
      await visible(thpt);
      const thptFields = await fields(thpt);
      assert.equal(thptFields["Phương thức"], "Điểm thi THPT");
      assert.equal(thptFields["Thang điểm"], "30");
      assert.equal(Number(thptFields["Giá trị trong nguồn"]), 25.5);
      assert.equal(thptFields["Loại dữ liệu"], "Trúng tuyển");
      assert.match(thptFields["Phân loại"], /tham khảo/);
      assert.match(await thpt.getByRole("link", { name: "Xem nguồn", exact: true }).getAttribute("href"), /^https:\/\//);
      const tsa = await fields(program.locator('[data-source-row="111"]'));
      assert.equal(tsa["Thang điểm"], "100");
      assert.equal(Number(tsa["Giá trị trong nguồn"]), 58.81);
      await program.getByText("Các ô dữ liệu nguyên văn trong bảng", { exact: true }).click();
      assert.equal((await program.locator("dt").allTextContents()).filter((label) => /ước lượng|ước tính/i.test(label)).length, 0, "Estimate-labelled cells must not be mixed into source facts");
      await thpt.scrollIntoViewIfNeeded();
      await page.screenshot({ path: `${out}/school-hust-source-desktop.png` });
      await page.getByRole("button", { name: "Kịch bản ước tính", exact: true }).click();
      const estimates = page.locator('[data-admissions-view="estimates"]');
      await visible(estimates.getByRole("heading", { name: "Ước tính theo giả định, không phải điểm trúng tuyển công bố", exact: true }));
      assert.equal(await page.getByRole("button", { name: "Dữ liệu nguồn", exact: true }).getAttribute("aria-pressed"), "false");
      assert.equal(await sourceView.count(), 0);
      await estimates.getByRole("textbox", { name: "Tìm ước lượng trong bảng", exact: true }).fill("CH1");
      const estimateRow = estimates.locator("details").filter({ has: page.locator("summary", { hasText: /^CH1\b/ }) }).first();
      await estimateRow.locator(":scope > summary").click();
      await visible(estimateRow.getByText("THPT ước lượng /30", { exact: true }));
      await visible(estimateRow.getByText("Chưa đủ công thức/đầu vào", { exact: true }));
      await page.getByRole("button", { name: "Giả định & đối chiếu", exact: true }).click();
      await visible(page.getByRole("heading", { name: "Đầu vào và giả định", exact: true }));
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
      await page.reload({ waitUntil: "domcontentloaded" });
      await ready(page);
      await visible(page.getByRole("heading", { name: document.schoolName, exact: true }));
      await visible(page.getByRole("textbox", { name: "Tìm ngành hoặc mã ngành", exact: true }));
    });

    await check("new NEU programs keep their source method, scale and points", async () => {
      await navigate(page, `${origin}/truong-dai-hoc/uni-002`);
      await page.getByRole("textbox", { name: "Tìm ngành hoặc mã ngành", exact: true }).fill("7310101_2");
      const program = page.locator('[data-program-id="uni-002-row-128"]');
      await program.locator(":scope > summary").click();
      await visible(program.getByText("Bổ sung từ nguồn tuyển sinh 2026", { exact: true }));
      const source = program.locator('[data-source-row="10247"]');
      await visible(source);
      const values = await fields(source);
      assert.equal(values["Phương thức"], "Điểm thi THPT");
      assert.equal(values["Thang điểm"], "30");
      assert.equal(Number(values["Giá trị trong nguồn"]), 25.9);
      report.admissionsResults.neuNewProgram = { code: "7310101_2", point: 25.9, scale: "30" };
      await source.scrollIntoViewIfNeeded();
      await page.screenshot({ path: `${out}/school-neu-new-program-desktop.png` });
    });

    await check("source facts spanning multiple pages stay reachable", async () => {
      await navigate(page, `${origin}/truong-dai-hoc/uni-003`);
      await page.getByRole("textbox", { name: "Tìm ngành hoặc mã ngành", exact: true }).fill("NTHCN18");
      const program = page.locator('[data-program-id="uni-003-row-95"]');
      await program.locator(":scope > summary").click();
      await visible(program.locator("[data-source-row]"));
      const rows = await paginate(program, "[data-source-row]", "data-source-row", "Trang nguồn sau");
      const document = await page.request.get(`${origin}/admissions/2026/uni-003.json`).then((response) => response.json());
      assert.deepEqual(rows.map(Number), document.programs.find((entry) => entry.id === "uni-003-row-95").sourceRows);
      report.admissionsResults.ftuSources = rows.length;
    });

    await check("all HCMUT estimate scenarios stay separate, paginated and unclamped", async () => {
      await navigate(page, `${origin}/truong-dai-hoc/uni-068`);
      await page.getByRole("button", { name: "Kịch bản ước tính", exact: true }).click();
      const estimates = page.locator('[data-admissions-view="estimates"]');
      await visible(estimates.getByRole("heading", { name: "Ước tính theo giả định, không phải điểm trúng tuyển công bố", exact: true }));
      const scenarios = estimates.locator('[data-raw-kind="ước tính"]');
      const rows = await paginate(scenarios, "details[data-raw-row]", "data-raw-row", "Trang ước tính sau");
      const document = await page.request.get(`${origin}/admissions/2026/uni-068.json`).then((response) => response.json());
      assert.deepEqual(rows.map(Number), document.estimates.rows.map((_, index) => index), "Every estimate row remains reachable exactly once");
      report.admissionsResults.hcmutEstimates = rows.length;
      await scenarios.getByRole("textbox", { name: "Tìm ước tính", exact: true }).fill("Tài nguyên và Môi trường");
      const outside = scenarios.locator('[data-raw-row="47"]');
      await outside.locator(":scope > summary").click();
      await visible(outside.getByText("Cảnh báo: có giá trị ngoài thang điểm — giữ nguyên để đối chiếu", { exact: true }));
      const values = await fields(outside);
      assert.ok(Number(values["THPT cần /30"]) > 30, "Preserve out-of-range estimates with warnings rather than clamping them to a cutoff");
      await outside.scrollIntoViewIfNeeded();
      await page.screenshot({ path: `${out}/school-hcmut-estimate-desktop.png` });
    });

    await check("unknown school IDs show a friendly page without fetching invented data", async () => {
      const requestsBefore = admissionsRequests.length;
      await navigate(page, `${origin}/truong-dai-hoc/uni-999`);
      await visible(page.getByRole("heading", { name: "Trang này không có trên bản đồ", exact: true }));
      assert.equal(admissionsRequests.length, requestsBefore);
    });
  }

  for (const quizId of ["riasec", "bigfive", "mbti", "interest", "combined"]) {
    await check(`${quizId}: answering, back, resume, scoring, result and restart`, async () => {
      await navigate(page, `${origin}/trac-nghiem/${quizId}`);
      const start = page.getByRole("button", { name: "Bắt đầu", exact: true });
      await visible(start);
      const countText = await page.locator("article li").first().textContent();
      const count = Number(countText.match(/(\d+) câu/)[1]);
      assert.ok(count > 0);
      await start.click();
      await question(page, 1);
      await page.getByRole("button", { name: "Tiếp tục", exact: true }).click();
      await visible(page.getByRole("alert"));
      await question(page, 1);
      const options = page.locator("button.option-card");
      const selectedIndex = Math.min(2, await options.count() - 1);
      await options.nth(selectedIndex).click();
      await question(page, 2);
      await page.getByRole("button", { name: "Quay lại", exact: true }).click();
      await question(page, 1);
      assert.equal(await options.nth(selectedIndex).getAttribute("class").then((text) => text.includes("is-on")), true);

      if (expectFixes) {
        await page.evaluate(() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "1", code: "Digit1", repeat: true, bubbles: true })));
        await page.waitForTimeout(500);
        await question(page, 1);
        const stored = await page.evaluate((id) => JSON.parse(localStorage.getItem(`lumina-progress-${id}`)), quizId);
        assert.equal(stored.answers[0], selectedIndex, "holding a key must not replace the chosen answer");
      }

      await page.getByRole("link", { name: "Thoát", exact: true }).click();
      await navigate(page, `${origin}/trac-nghiem/${quizId}`);
      await visible(page.getByRole("heading", { name: "Tiếp tục bài đang làm dở?", exact: true }));
      await page.getByRole("button", { name: "Tiếp tục", exact: true }).click();
      await question(page, 1);

      // Start from a valid saved final question to test every scoring path
      // without hundreds of redundant clicks through unchanged questions.
      await page.evaluate(({ id, size }) => {
        localStorage.setItem(`lumina-progress-${id}`, JSON.stringify({
          quizId: id,
          index: size - 1,
          answers: Array(size).fill(0),
          updatedAt: "2026-01-01T00:00:00.000Z",
        }));
      }, { id: quizId, size: count });
      await page.reload({ waitUntil: "domcontentloaded" });
      await ready(page);
      await visible(page.getByRole("button", { name: "Tiếp tục", exact: true }));
      await page.getByRole("button", { name: "Tiếp tục", exact: true }).click();
      await question(page, count);
      await page.getByRole("button", { name: "Xem kết quả", exact: true }).click();
      await page.waitForURL(`**/ket-qua/${quizId}`, { timeout: 15000 });
      await ready(page);
      await visible(page.getByRole("button", { name: "Sao chép", exact: true }));
      await visible(page.getByRole("button", { name: "Chia sẻ", exact: true }));
      await visible(page.getByRole("button", { name: "In", exact: true }));
      const saved = await page.evaluate((id) => ({
        result: JSON.parse(localStorage.getItem(`lumina-result-${id}`)),
        progress: localStorage.getItem(`lumina-progress-${id}`),
      }), quizId);
      assert.equal(saved.result.quizId, quizId);
      assert.deepEqual(saved.result.answers, Array(count).fill(0));
      assert.equal(saved.progress, null);
      delete saved.result.completedAt;
      report.quizResults[quizId] = saved.result;
      if (quizId === "riasec") await page.screenshot({ path: `${out}/result-riasec-desktop.png` });

      await navigate(page, `${origin}/trac-nghiem/${quizId}`);
      await visible(page.getByRole("heading", { name: "Bạn đã có một hồ sơ rồi", exact: true }));
      await visible(page.getByRole("link", { name: "Xem kết quả đã lưu", exact: true }));
      if (expectFixes) {
        await page.evaluate(() => {
          window.__originalRemoveItem = Storage.prototype.removeItem;
          Storage.prototype.removeItem = () => { throw new DOMException("Storage blocked", "SecurityError"); };
        });
      }
      await page.getByRole("button", { name: "Làm lại từ đầu", exact: true }).click();
      await visible(page.getByRole("button", { name: "Bắt đầu", exact: true }));
      if (expectFixes) await page.evaluate(() => { Storage.prototype.removeItem = window.__originalRemoveItem; });
      assert.ok(await page.evaluate((id) => localStorage.getItem(`lumina-result-${id}`), quizId), "restart preserves the previous saved result");
    });
  }

  await check("merged profile preserves all five results", async () => {
    await navigate(page, `${origin}/ho-so`);
    await visible(page.getByRole("heading", { name: "Hồ sơ hướng nghiệp của bạn", exact: true }));
    await visible(page.getByText("Đã có kết quả", { exact: true }));
    assert.equal(await page.getByText("Đã có kết quả", { exact: true }).count(), 5);
  });

  await check("mobile navigation, university search and reduced motion render", async () => {
    const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: "reduce" });
    const mobilePage = await mobile.newPage();
    observeErrors(mobilePage);
    await navigate(mobilePage, base);
    await visible(mobilePage.locator("h1"));
    if (expectFixes) {
      assert.equal(await mobilePage.locator('nav[aria-label="Mobile"]').evaluate((nav) => Boolean(nav.closest("[inert]"))), true, "closed mobile links must be inert");
      await mobilePage.getByRole("button", { name: "Mở menu", exact: true }).click();
      await mobilePage.keyboard.press("Escape");
      await visible(mobilePage.getByRole("button", { name: "Mở menu", exact: true }));
      await mobilePage.getByRole("button", { name: "Mở menu", exact: true }).click();
      await mobilePage.setViewportSize({ width: 1280, height: 800 });
      await mobilePage.waitForFunction(() => document.body.style.overflow !== "hidden");
      assert.equal(await mobilePage.locator('button[aria-expanded]').first().getAttribute("aria-expanded"), "false", "desktop resize closes the mobile menu");
      await mobilePage.setViewportSize({ width: 390, height: 844 });
    }
    await mobilePage.getByRole("button", { name: "Mở menu", exact: true }).click();
    await mobilePage.getByRole("navigation", { name: "Mobile", exact: true }).getByRole("link", { name: "Hướng nghiệp", exact: true }).click();
    const explorer = mobilePage.locator("#bo-loc-truong");
    await visible(explorer.getByRole("textbox", { name: "Tìm trường" }));
    await explorer.getByRole("button", { name: "Thu gọn", exact: true }).click();
    await explorer.getByRole("button", { name: "Mở bộ lọc", exact: true }).click();
    await visible(explorer.getByRole("button", { name: "Miền Bắc", exact: true }));
    assert.equal(await mobilePage.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    await mobilePage.screenshot({ path: `${out}/university-mobile.png` });
    if (admissions2026) {
      await explorer.getByRole("textbox", { name: "Tìm trường" }).fill("HUST");
      await mobilePage.waitForFunction(() => document.querySelectorAll("#bo-loc-truong article").length === 1);
      await explorer.getByRole("link", { name: "Xem ngành & điểm", exact: true }).click();
      await mobilePage.waitForURL("**/truong-dai-hoc/uni-001");
      await ready(mobilePage);
      await mobilePage.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
      await mobilePage.screenshot({ path: `${out}/school-hust-page-mobile.png` });
      await mobilePage.getByRole("textbox", { name: "Tìm ngành hoặc mã ngành", exact: true }).fill("CH1");
      const program = mobilePage.locator('[data-program-id="uni-001-row-16"]');
      await program.locator(":scope > summary").click();
      await visible(program.locator('[data-source-row="28"]'));
      await program.locator('[data-source-row="28"]').scrollIntoViewIfNeeded();
      assert.equal(await mobilePage.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, "Source fields fit a mobile screen");
      await mobilePage.screenshot({ path: `${out}/school-hust-source-mobile.png` });
      await navigate(mobilePage, `${origin}/truong-dai-hoc/uni-068`);
      await mobilePage.getByRole("button", { name: "Kịch bản ước tính", exact: true }).click();
      const scenarios = mobilePage.locator('[data-admissions-view="estimates"] [data-raw-kind="ước tính"]');
      await scenarios.getByRole("textbox", { name: "Tìm ước tính", exact: true }).fill("Tài nguyên và Môi trường");
      const estimate = scenarios.locator('[data-raw-row="47"]');
      await estimate.locator(":scope > summary").click();
      await visible(estimate.getByText("Cảnh báo: có giá trị ngoài thang điểm — giữ nguyên để đối chiếu", { exact: true }));
      await estimate.scrollIntoViewIfNeeded();
      assert.equal(await mobilePage.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, "Estimate fields and long source URLs fit a mobile screen");
      await mobilePage.screenshot({ path: `${out}/school-hcmut-estimate-mobile.png` });
    }
    await navigate(mobilePage, base);
    await visible(mobilePage.locator("h1"));
    await mobilePage.screenshot({ path: `${out}/home-mobile-reduced-motion.png` });
    if (expectFixes) {
      await mobilePage.setViewportSize({ width: 844, height: 320 });
      await mobilePage.getByRole("button", { name: "Mở menu", exact: true }).click();
      const lastLink = mobilePage.locator("#mobile-navigation").getByRole("link", { name: "Làm trắc nghiệm", exact: true });
      await lastLink.scrollIntoViewIfNeeded();
      const bounds = await lastLink.boundingBox();
      assert.ok(bounds.y >= 76 && bounds.y + bounds.height <= 321, "landscape mobile menu can scroll to its last link");
      await mobilePage.keyboard.press("Escape");
    }
    await mobile.close();
  });

  if (expectFixes) {
    await check("content remains visible without IntersectionObserver", async () => {
      const fallbackContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
      await fallbackContext.addInitScript(() => { delete window.IntersectionObserver; });
      const fallbackPage = await fallbackContext.newPage();
      observeErrors(fallbackPage);
      await navigate(fallbackPage, base);
      await visible(fallbackPage.locator("h1"));
      await fallbackPage.waitForFunction(() => [...document.querySelectorAll(".reveal")].every((element) => getComputedStyle(element).opacity === "1"));
      await fallbackPage.screenshot({ path: `${out}/home-mobile-observer-fallback.png` });
      await fallbackContext.close();
    });
  }

  assert.deepEqual(report.pageErrors, [], "no uncaught browser errors");
} catch (error) {
  report.error = String(error?.stack || error);
  if (page) await page.screenshot({ path: `${out}/regression-failure.png`, fullPage: false }).catch(() => {});
  process.exitCode = 1;
} finally {
  await browser.close();
  writeFileSync(`${out}/site-regression.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}
