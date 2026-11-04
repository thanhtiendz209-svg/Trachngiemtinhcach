#!/usr/bin/env node
/** Focused browser QA for the public 120-profile RIASEC library. */
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { chromium } from "playwright";
import { checkedUrl } from "./browser-guard.mjs";

const base = checkedUrl(process.argv[2] || "http://127.0.0.1:8081/");
const origin = new URL(base).origin;
const libraryPath = "/nhom-tinh-cach?tab=riasec#ho-so-riasec";
const out = "/workspace/screenshots";
const letters = ["R", "I", "A", "S", "E", "C"];
const expectedCodes = letters.flatMap((a) => letters.filter((b) => b !== a)
  .flatMap((b) => letters.filter((c) => c !== a && c !== b).map((c) => a + b + c))).sort();
const titles = {
  RIA: "Người khám phá, thực hành và sáng tạo",
  IRA: "Người phân tích, thực hành và sáng tạo",
};
const report = {
  revision: process.env.SITE_REVISION || "local",
  target: origin,
  checks: [],
  profileCodes: [],
  firstLetterCounts: {},
  pageErrors: [],
  consoleErrors: [],
  assetErrors: [],
  expectedNotFoundErrors: [],
};
mkdirSync(out, { recursive: true });
let browser;
let activePage;

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

function expectedNotFound(url) {
  try {
    const parsed = new URL(url);
    return parsed.origin === origin && /^\/nhom-tinh-cach\/riasec\/(RRA|RIB)\/?$/.test(parsed.pathname);
  } catch { return false; }
}

function observe(page) {
  page.on("pageerror", (error) => report.pageErrors.push(String(error)));
  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const entry = { text: message.text(), url: message.location().url || "" };
    // Invalid profile routes intentionally return HTTP 404 with a friendly UI.
    if (expectedNotFound(entry.url) && /Failed to load resource.*404/.test(entry.text)) {
      report.expectedNotFoundErrors.push(entry);
    } else report.consoleErrors.push(entry);
  });
  page.on("response", (response) => {
    if (response.status() < 400 || new URL(response.url()).origin !== origin) return;
    if (response.status() === 404 && expectedNotFound(response.url())) return;
    report.assetErrors.push({ url: response.url(), status: response.status() });
  });
  page.on("requestfailed", (request) => {
    const error = request.failure()?.errorText || "Request failed";
    if (new URL(request.url()).origin === origin && !/ERR_ABORTED/.test(error)) {
      report.assetErrors.push({ url: request.url(), error });
    }
  });
}

async function visible(locator) {
  await locator.first().waitFor({ state: "visible", timeout: 20000 });
}

async function ready(page) {
  await page.waitForLoadState("networkidle", { timeout: 30000 });
  await page.waitForFunction(() => [...document.querySelectorAll("button")].some((button) =>
    Object.keys(button).some((key) => key.startsWith("__reactProps$") && typeof button[key]?.onClick === "function"),
  ), null, { timeout: 20000 });
}

async function navigate(page, path) {
  activePage = page;
  const response = await page.goto(new URL(path, origin).href, { waitUntil: "domcontentloaded" });
  await ready(page);
  return response;
}

async function painted(locator) {
  await visible(locator);
  await locator.evaluate((element) => new Promise((resolve, reject) => {
    const deadline = performance.now() + 10000;
    const poll = () => {
      let ancestor = element;
      let opaque = true;
      while (ancestor instanceof HTMLElement) {
        const style = getComputedStyle(ancestor);
        if (Number(style.opacity) < 0.99 || style.visibility === "hidden" || style.display === "none") opaque = false;
        ancestor = ancestor.parentElement;
      }
      if (opaque) return requestAnimationFrame(() => requestAnimationFrame(resolve));
      if (performance.now() >= deadline) return reject(new Error("Visible content did not finish revealing"));
      requestAnimationFrame(poll);
    };
    poll();
  }));
}

async function capture(page, name, focus) {
  activePage = page;
  if (focus) {
    await focus.scrollIntoViewIfNeeded();
    await focus.evaluate((element) => window.scrollTo({ top: element.getBoundingClientRect().top + scrollY - 96, behavior: "instant" }));
    await painted(focus);
  }
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `${name}: no horizontal overflow`);
  await page.screenshot({ path: `${out}/riasec-profiles-${name}.png` });
}

async function codes(gallery) {
  return gallery.locator("[data-riasec-profile]").evaluateAll((cards) => cards.map((card) => card.getAttribute("data-riasec-profile")));
}

async function waitCodes(gallery, expected) {
  await gallery.evaluate((element, wanted) => new Promise((resolve, reject) => {
    const deadline = performance.now() + 10000;
    const poll = () => {
      const actual = [...element.querySelectorAll("[data-riasec-profile]")].map((card) => card.getAttribute("data-riasec-profile"));
      if (JSON.stringify(actual) === JSON.stringify(wanted)) return resolve(true);
      if (performance.now() >= deadline) return reject(new Error(`Expected profiles ${wanted.join(",")}; got ${actual.join(",")}`));
      requestAnimationFrame(poll);
    };
    poll();
  }), expected);
}

async function collectPages(gallery) {
  const found = [];
  for (let number = 1; number <= 10; number++) {
    await visible(gallery.locator("[data-riasec-profile]"));
    const current = await codes(gallery);
    assert.ok(current.length > 0 && current.length <= 12, "A profile page contains at most twelve cards");
    assert.equal(new Set(current).size, current.length);
    found.push(...current);
    const next = gallery.getByRole("button", { name: "Trang hồ sơ tiếp theo", exact: true });
    if (await next.isDisabled()) return found;
    assert.ok(number < 10, "The complete library fits in ten pages");
    await next.click();
    await gallery.evaluate((element, previous) => new Promise((resolve, reject) => {
      const deadline = performance.now() + 10000;
      const poll = () => {
        const first = element.querySelector("[data-riasec-profile]")?.getAttribute("data-riasec-profile");
        if (first && first !== previous) return resolve(true);
        if (performance.now() >= deadline) return reject(new Error("Profile pagination did not advance"));
        requestAnimationFrame(poll);
      };
      poll();
    }), current[0]);
  }
  throw new Error("Profile pagination exceeded its bound");
}

async function loadedArt(scope, code) {
  const illustration = scope.locator(`[data-riasec-combination="${code}"]`).first();
  await visible(illustration);
  await illustration.scrollIntoViewIfNeeded();
  await painted(illustration);
  await illustration.evaluate((element) => new Promise((resolve, reject) => {
    const deadline = performance.now() + 10000;
    const poll = () => {
      const images = [...element.querySelectorAll("img")];
      if (images.length === 3 && images.every((image) => image.complete && image.naturalWidth > 0)) return resolve(true);
      if (performance.now() >= deadline) return reject(new Error("The three animated RIASEC SVGs did not load"));
      requestAnimationFrame(poll);
    };
    poll();
  }));
  const positions = await illustration.locator("[data-riasec-position]").evaluateAll((items) => items.map((item) => ({
    rank: Number(item.getAttribute("data-riasec-position")),
    filename: new URL(item.querySelector("img").src).pathname.split("/").pop(),
  })));
  assert.deepEqual(positions, [2, 1, 3].map((rank) => ({ rank, filename: `${code[rank - 1]}.svg` })), "The first profile letter remains the dominant center illustration");
}

async function detail(page, code, name) {
  const article = page.locator(`[data-riasec-profile-detail="${code}"]`);
  await visible(article);
  await visible(article.getByRole("heading", { level: 1, name: titles[code], exact: true }));
  assert.ok((await article.textContent()).includes(code));
  for (const heading of ["Chân dung sở thích", "Ba xu hướng trong hồ sơ", "Điểm mạnh", "Điểm cần lưu ý", "Môi trường và cách học", "Nhóm nghề tham khảo", "Hướng phát triển", "Cùng ba nhóm, khác thứ tự"]) {
    await visible(article.getByRole("heading", { name: heading, exact: true }));
  }
  const order = await article.locator("[data-riasec-profile-letter]").evaluateAll((items) => items.map((item) => ({
    letter: item.getAttribute("data-riasec-profile-letter"), rank: Number(item.getAttribute("data-riasec-rank")),
  })));
  assert.deepEqual(order, code.split("").map((letter, index) => ({ letter, rank: index + 1 })));
  const related = await article.locator("[data-riasec-related]").evaluateAll((links) => links.map((link) => ({
    code: link.getAttribute("data-riasec-related"), path: new URL(link.href).pathname,
  })));
  const sameLetters = expectedCodes.filter((other) => other !== code && other.split("").every((letter) => code.includes(letter)));
  assert.deepEqual(related.map((item) => item.code).sort(), sameLetters);
  for (const item of related) assert.equal(item.path, `/nhom-tinh-cach/riasec/${item.code}`);
  assert.equal(/\d+(?:[.,]\d+)?\s*%/.test(await article.textContent()), false, "A public profile must not invent a personal confidence or fit percentage");
  await loadedArt(article, code);
  await capture(page, name, article.getByRole("heading", { level: 1 }));
  return article;
}

try {
  let cliReady = false;
  for (let attempt = 1; attempt <= 2; attempt++) {
    const probe = spawnSync("agent-browser", ["--session", "riasec-profiles", "open", base], { encoding: "utf8", timeout: 15000 });
    if (probe.status === 0) { cliReady = true; break; }
    console.log(`agent-browser attempt ${attempt} unavailable: ${probe.error?.code || probe.status}`);
  }
  if (cliReady) {
    const smoke = spawnSync("agent-browser", ["--session", "riasec-profiles", "batch", "--bail"], {
      input: JSON.stringify([["eval", "if (!document.querySelector('h1')?.textContent.trim()) throw Error('Site is blank')"], ["screenshot", `${out}/riasec-profiles-interactive-home.png`]]),
      encoding: "utf8", timeout: 20000,
    });
    assert.equal(smoke.status, 0, smoke.stderr || smoke.stdout);
    spawnSync("agent-browser", ["--session", "riasec-profiles", "close"], { timeout: 10000 });
  } else report.browserFallback = "Playwright after two unavailable agent-browser attempts";

  browser = await chromium.launch({ headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
  for (const [viewportName, viewport] of Object.entries({ desktop: { width: 1280, height: 900 }, mobile: { width: 390, height: 844 } })) {
    const context = await browser.newContext({ viewport, reducedMotion: "reduce", ...(viewportName === "mobile" ? { isMobile: true, hasTouch: true } : {}) });
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    observe(page);
    activePage = page;
    try {
      await check(`${viewportName}: existing MBTI and six RIASEC cards keep the library in the RIASEC tab`, async () => {
        assert.equal((await navigate(page, "/nhom-tinh-cach")).status(), 200);
        const mbti = page.getByRole("tab", { name: "Nhóm MBTI", exact: true });
        const riasec = page.getByRole("tab", { name: "Nhóm RIASEC", exact: true });
        await visible(mbti);
        assert.equal(await mbti.getAttribute("aria-selected"), "true");
        assert.equal(await page.locator("#ho-so-riasec").count(), 0);
        const mbtiCount = await page.locator('a[href^="/nhom-tinh-cach/"]').evaluateAll((links) => links.filter((link) => link.closest("article") && /^\/nhom-tinh-cach\/[EI][SN][TF][JP]\/?$/.test(new URL(link.href).pathname)).length);
        assert.equal(mbtiCount, 16);
        await riasec.click();
        const gallery = page.locator("#ho-so-riasec");
        await visible(gallery.getByRole("heading", { name: "120 hồ sơ RIASEC kết hợp", exact: true }));
        assert.equal(await riasec.getAttribute("aria-selected"), "true");
        const origins = page.locator('[data-personality-cards="origin"]');
        assert.equal(await origins.locator("article").count(), 6);
        assert.equal(await origins.evaluate((element) => Boolean(element.compareDocumentPosition(document.querySelector("#ho-so-riasec")) & Node.DOCUMENT_POSITION_FOLLOWING)), true, "The profile library follows the six existing origin-group cards");
        await capture(page, `library-${viewportName}`, gallery.getByRole("heading", { name: "120 hồ sơ RIASEC kết hợp", exact: true }));
        await mbti.click();
        await gallery.waitFor({ state: "detached" });
        assert.equal(await page.locator('[data-personality-cards="mbti"] article').count(), 16);
        await riasec.click();
        await visible(gallery.getByRole("heading", { name: "120 hồ sơ RIASEC kết hợp", exact: true }));
      });

      const gallery = page.locator("#ho-so-riasec");
      const search = gallery.getByRole("searchbox", { name: "Tìm hồ sơ RIASEC", exact: true });
      const filters = gallery.getByRole("group", { name: "Lọc theo nhóm RIASEC đứng đầu", exact: true });
      await check(`${viewportName}: exact code, accent-insensitive title, empty state and reset work`, async () => {
        for (const code of ["RIA", "IRA"]) {
          await search.fill(code);
          await waitCodes(gallery, [code]);
          const card = gallery.locator(`[data-riasec-profile="${code}"]`);
          await visible(card.getByRole("heading", { name: titles[code], exact: true }));
          assert.equal(await card.getByRole("link", { name: "Xem hồ sơ", exact: true }).getAttribute("href"), `/nhom-tinh-cach/riasec/${code}`);
          await loadedArt(card, code);
        }
        await search.fill("nguoi kham pha thuc hanh va sang tao");
        await waitCodes(gallery, ["RIA"]);
        await search.fill("zzzz-no-riasec-profile-98341");
        await waitCodes(gallery, []);
        const reset = gallery.getByRole("button", { name: "Xóa tìm kiếm và bộ lọc", exact: true });
        await visible(reset);
        await reset.click();
        await page.waitForFunction(() => document.querySelectorAll("#ho-so-riasec [data-riasec-profile]").length === 12);
        assert.equal(await search.inputValue(), "");
        assert.equal(await filters.getByRole("button", { name: "Tất cả", exact: true }).getAttribute("aria-pressed"), "true");
      });

      if (viewportName === "desktop") {
        await check("desktop: all 120 unique permutations and all six twenty-profile filters stay reachable", async () => {
          const all = await collectPages(gallery);
          assert.deepEqual([...all].sort(), expectedCodes);
          assert.equal(new Set(all).size, 120);
          report.profileCodes = all;
          for (const letter of letters) {
            await filters.getByRole("button", { name: new RegExp(`^${letter} · `) }).click();
            await page.waitForFunction((first) => {
              const cards = [...document.querySelectorAll("#ho-so-riasec [data-riasec-profile]")];
              return cards.length === 12 && cards.every((card) => card.getAttribute("data-riasec-profile").startsWith(first));
            }, letter);
            const filtered = await collectPages(gallery);
            assert.deepEqual([...filtered].sort(), expectedCodes.filter((code) => code.startsWith(letter)));
            report.firstLetterCounts[letter] = filtered.length;
          }
          await filters.getByRole("button", { name: "Tất cả", exact: true }).click();
          await page.waitForFunction(() => document.querySelectorAll("#ho-so-riasec [data-riasec-profile]").length === 12);
        });
      }

      await check(`${viewportName}: profile navigation, refresh, order and return restore the RIASEC tab`, async () => {
        await search.fill("RIA");
        await waitCodes(gallery, ["RIA"]);
        await gallery.locator('[data-riasec-profile="RIA"]').getByRole("link", { name: "Xem hồ sơ", exact: true }).click();
        await page.waitForURL("**/nhom-tinh-cach/riasec/RIA");
        await ready(page);
        await detail(page, "RIA", `ria-detail-${viewportName}`);
        await page.reload({ waitUntil: "domcontentloaded" });
        await ready(page);
        const article = await detail(page, "RIA", `ria-refresh-${viewportName}`);
        const back = article.getByRole("link", { name: "Về thư viện RIASEC", exact: true });
        const backUrl = new URL(await back.getAttribute("href"), origin);
        assert.equal(backUrl.pathname.replace(/\/$/, ""), "/nhom-tinh-cach");
        assert.equal(backUrl.searchParams.get("tab"), "riasec");
        assert.equal(backUrl.hash, "#ho-so-riasec");
        await back.click();
        await page.waitForURL((url) => url.searchParams.get("tab") === "riasec" && url.hash === "#ho-so-riasec");
        await visible(page.locator("#ho-so-riasec").getByRole("heading", { name: "120 hồ sơ RIASEC kết hợp", exact: true }));
        assert.equal(await page.getByRole("tab", { name: "Nhóm RIASEC", exact: true }).getAttribute("aria-selected"), "true");
        await capture(page, `return-${viewportName}`, page.locator("#ho-so-riasec").getByRole("heading", { name: "120 hồ sơ RIASEC kết hợp", exact: true }));
        await navigate(page, "/nhom-tinh-cach/riasec/IRA");
        await detail(page, "IRA", `ira-detail-${viewportName}`);
      });

      if (viewportName === "desktop") {
        await check("desktop: lowercase codes resolve and invalid profiles show the friendly not-found page", async () => {
          assert.equal((await navigate(page, "/nhom-tinh-cach/riasec/ria")).status(), 200);
          await detail(page, "RIA", "ria-lowercase-desktop");
          for (const code of ["RRA", "RIB"]) {
            const response = await navigate(page, `/nhom-tinh-cach/riasec/${code}`);
            assert.equal(response.status(), 404);
            await visible(page.getByRole("heading", { name: "Không có hồ sơ RIASEC này", exact: true }));
            assert.equal(await page.locator("[data-riasec-profile-detail]").count(), 0);
            await visible(page.getByRole("link", { name: "Về thư viện RIASEC", exact: true }));
          }
          await capture(page, "invalid-desktop", page.getByRole("heading", { level: 1 }));
        });
      }
      await navigate(page, libraryPath);
      await visible(page.locator("#ho-so-riasec"));
      assert.equal(await page.getByRole("tab", { name: "Nhóm RIASEC", exact: true }).getAttribute("aria-selected"), "true", "A direct library URL selects the correct tab");
    } finally { await context.close(); }
  }
  assert.deepEqual(report.pageErrors, [], "No uncaught browser errors");
  assert.deepEqual(report.consoleErrors, [], "No unexpected browser console errors");
  assert.deepEqual(report.assetErrors, [], "No failed application assets or requests");
} catch (error) {
  report.error = String(error?.stack || error);
  if (activePage && !activePage.isClosed()) await activePage.screenshot({ path: `${out}/riasec-profiles-failure.png` }).catch(() => {});
  process.exitCode = 1;
} finally {
  await browser?.close();
  writeFileSync(`${out}/riasec-profiles-regression.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}
