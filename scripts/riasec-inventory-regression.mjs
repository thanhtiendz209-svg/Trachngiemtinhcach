#!/usr/bin/env node
/** Browser checks for the revised 60-item inventory and saved-state compatibility. */
import assert from "node:assert/strict";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { chromium } from "playwright";
import { checkedUrl } from "./browser-guard.mjs";

const base = checkedUrl(process.argv[2] || "http://127.0.0.1:8081/");
const origin = new URL(base).origin;
const out = "/workspace/screenshots";
const version = "riasec-60-v2";
const progressKey = "lumina-progress-riasec";
const resultKey = "lumina-result-riasec";
const notice = "Câu 37 đã cập nhật. Bạn cần trả lời lại câu này; các câu khác được giữ.";
const revisedQuestion = "Tôi thích thử nghiệm những cách thể hiện khác nhau để tạo ra sản phẩm mang dấu ấn riêng.";
const source = JSON.parse(readFileSync(new URL("../data/quiz-sources/riasec-60-v2.json", import.meta.url), "utf8"));
assert.equal(source.version, version);
assert.equal(source.questions.length, 60);
assert.equal(source.questions[36].text, revisedQuestion);
assert.equal(source.questions[36].group, "A");
const report = { revision: process.env.SITE_REVISION || "local", target: origin, version, checks: [], results: {}, pageErrors: [], consoleErrors: [] };
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

async function visible(locator) {
  await locator.first().waitFor({ state: "visible", timeout: 20000 });
}

async function ready(page) {
  await page.waitForLoadState("networkidle", { timeout: 30000 });
  await page.waitForFunction(() => [...document.querySelectorAll("button")].some((button) =>
    Object.keys(button).some((key) => key.startsWith("__reactProps$") && typeof button[key]?.onClick === "function"),
  ), null, { timeout: 20000 });
}

async function navigate(page, path = "/trac-nghiem/riasec") {
  activePage = page;
  const response = await page.goto(`${origin}${path}`, { waitUntil: "domcontentloaded" });
  assert.equal(response.status(), 200);
  await ready(page);
  if (path === "/trac-nghiem/riasec") {
    assert.equal(await page.locator('meta[name="riasec-question-set-version"]').getAttribute("content"), version);
  }
}

async function reload(page) {
  await page.reload({ waitUntil: "domcontentloaded" });
  await ready(page);
}

async function question(page, number) {
  await visible(page.getByText(`Câu ${String(number).padStart(2, "0")} / 60`, { exact: true }));
}

async function capture(page, name, focus = page.locator("h1")) {
  await visible(focus);
  await focus.scrollIntoViewIfNeeded();
  await focus.evaluate((element) => window.scrollTo({ top: element.getBoundingClientRect().top + scrollY - 96, behavior: "instant" }));
  await focus.evaluate((element) => new Promise((resolve, reject) => {
    const deadline = performance.now() + 10000;
    const poll = () => {
      let current = element;
      let painted = true;
      while (current instanceof HTMLElement) {
        const style = getComputedStyle(current);
        if (Number(style.opacity) < 0.99 || style.visibility === "hidden") painted = false;
        current = current.parentElement;
      }
      if (painted) return requestAnimationFrame(() => requestAnimationFrame(resolve));
      if (performance.now() > deadline) return reject(new Error("Question/result did not finish revealing"));
      requestAnimationFrame(poll);
    };
    poll();
  }));
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `${name}: no horizontal overflow`);
  await page.screenshot({ path: `${out}/riasec-inventory-${name}.png` });
}

async function stored(page, key = progressKey) {
  return page.evaluate((name) => JSON.parse(localStorage.getItem(name)), key);
}

async function putProgress(page, progress) {
  await page.evaluate(({ key, value }) => localStorage.setItem(key, JSON.stringify(value)), { key: progressKey, value: progress });
}

async function resume(page, number) {
  await visible(page.getByRole("heading", { name: "Tiếp tục bài đang làm dở?", exact: true }));
  await page.getByRole("button", { name: "Tiếp tục", exact: true }).click();
  await question(page, number);
}

async function withPage(viewportName, initial, run) {
  const context = await browser.newContext({
    viewport: viewportName === "mobile" ? { width: 390, height: 844 } : { width: 1280, height: 900 },
    reducedMotion: "reduce",
    ...(viewportName === "mobile" ? { isMobile: true, hasTouch: true } : {}),
  });
  await context.addInitScript(({ siteOrigin, values }) => {
    if (location.origin !== siteOrigin || sessionStorage.getItem("inventory-qa-seeded")) return;
    localStorage.clear();
    for (const [key, value] of Object.entries(values)) localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem("inventory-qa-seeded", "1");
  }, { siteOrigin: origin, values: initial });
  const page = await context.newPage();
  activePage = page;
  page.setDefaultTimeout(15000);
  page.on("pageerror", (error) => report.pageErrors.push(String(error)));
  page.on("console", (message) => { if (message.type() === "error") report.consoleErrors.push({ text: message.text(), url: message.location().url }); });
  try {
    await run(page);
  } catch (error) {
    await page.screenshot({ path: `${out}/riasec-inventory-failure-${viewportName}.png` }).catch(() => {});
    throw error;
  } finally { await context.close(); }
}

function progress(answers, index, questionSetVersion = version) {
  return { quizId: "riasec", answers, index, updatedAt: "2026-11-01T10:00:00.000Z", ...(questionSetVersion === null ? {} : { questionSetVersion }) };
}

const legacyResult = {
  quizId: "riasec", kind: "riasec", completedAt: "2026-10-01T10:00:00.000Z", answers: Array(60).fill(0),
  riasec: { code: "CAR", scores: { R: 10, I: 10, A: 18, S: 10, E: 10, C: 33 }, maxScores: { R: 50, I: 50, A: 45, S: 50, E: 50, C: 55 } },
};

try {
  let cliReady = false;
  for (let attempt = 1; attempt <= 2; attempt++) {
    const result = spawnSync("agent-browser", ["--session", "riasec-inventory", "open", base], { encoding: "utf8", timeout: 15000 });
    if (result.status === 0) { cliReady = true; break; }
    console.log(`agent-browser attempt ${attempt} unavailable: ${result.error?.code || result.status}`);
  }
  if (cliReady) {
    const smoke = spawnSync("agent-browser", ["--session", "riasec-inventory", "batch", "--bail"], {
      input: JSON.stringify([["eval", "if (!document.querySelector('h1')?.textContent.trim()) throw Error('Site is blank')"], ["screenshot", `${out}/riasec-inventory-interactive.png`]]),
      encoding: "utf8", timeout: 20000,
    });
    assert.equal(smoke.status, 0, smoke.stderr || smoke.stdout);
    spawnSync("agent-browser", ["--session", "riasec-inventory", "close"], { timeout: 10000 });
  } else report.browserFallback = "Playwright after two unavailable agent-browser attempts";
  browser = await chromium.launch({ headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });

  for (const viewportName of ["desktop", "mobile"]) {
    await check(`${viewportName}: sixty items, revised question 37, labels, current resume and A-only scoring`, async () => {
      await withPage(viewportName, {}, async (page) => {
        await navigate(page);
        await visible(page.getByRole("button", { name: "Bắt đầu", exact: true }));
        assert.match(await page.locator("article li").first().textContent(), /^60 câu/);
        await page.getByRole("button", { name: "Bắt đầu", exact: true }).click();
        await question(page, 1);
        const options = page.locator("button.option-card");
        assert.deepEqual(await options.locator(":scope > span:last-child").allTextContents(), source.labels);

        const initial = Array(60).fill(0);
        initial[36] = -1;
        await putProgress(page, progress(initial, 36));
        await reload(page);
        assert.equal(await page.getByText(notice, { exact: true }).count(), 0);
        await resume(page, 37);
        await visible(page.getByRole("heading", { name: revisedQuestion, exact: true }));
        assert.deepEqual(await options.locator(":scope > span:last-child").allTextContents(), source.labels);
        await capture(page, `question37-${viewportName}`);
        await options.nth(4).click();
        await question(page, 38);
        const expectedAnswers = Array(60).fill(0);
        expectedAnswers[36] = 4;
        await page.waitForFunction(({ key, expected }) => {
          const saved = JSON.parse(localStorage.getItem(key));
          return saved?.index === 37 && JSON.stringify(saved.answers) === JSON.stringify(expected);
        }, { key: progressKey, expected: expectedAnswers });
        await reload(page);
        assert.equal(await page.getByText(notice, { exact: true }).count(), 0);
        await resume(page, 38);
        const resumed = await stored(page);
        assert.equal(resumed.questionSetVersion, version);
        assert.equal(resumed.index, 37);
        assert.deepEqual(resumed.answers, expectedAnswers);

        await putProgress(page, progress(expectedAnswers, 59));
        await reload(page);
        await resume(page, 60);
        await page.getByRole("button", { name: "Xem kết quả", exact: true }).click();
        await page.waitForURL("**/ket-qua/riasec", { timeout: 20000 });
        await ready(page);
        const result = await stored(page, resultKey);
        assert.equal(result.questionSetVersion, version);
        assert.deepEqual(result.answers, expectedAnswers);
        const oracleScores = Object.fromEntries(Object.entries(source.groups).map(([group, numbers]) => {
          assert.equal(numbers.length, 10);
          return [group, numbers.reduce((sum, number) => sum + expectedAnswers[number - 1] + 1, 0)];
        }));
        assert.deepEqual(oracleScores, { R: 10, I: 10, A: 14, S: 10, E: 10, C: 10 });
        assert.deepEqual(result.riasec.scores, oracleScores);
        assert.deepEqual(result.riasec.maxScores, { R: 50, I: 50, A: 50, S: 50, E: 50, C: 50 });
        assert.equal(result.riasec.code, "ARI");
        assert.equal(await stored(page), null);
        await visible(page.getByRole("heading", { name: "Mã RIASEC: ARI", exact: true }));
        await capture(page, `result-${viewportName}`, page.getByRole("heading", { name: "Mã RIASEC: ARI", exact: true }));
        report.results[viewportName] = { scores: oracleScores, maxima: result.riasec.maxScores, code: result.riasec.code, refreshedProgressPreserved: true };
      });
    });

    await check(`${viewportName}: legacy progress clears only question 37 and cannot finish with it blank`, async () => {
      const answers = Array.from({ length: 60 }, (_, index) => index % 5);
      const legacyProgress = progress(answers, 59, null);
      await withPage(viewportName, { [progressKey]: legacyProgress, [resultKey]: legacyResult, "lumina-last-result": legacyResult }, async (page) => {
        await navigate(page);
        await visible(page.getByText(notice, { exact: true }));
        assert.deepEqual(await stored(page), legacyProgress, "Opening the gate does not overwrite saved progress");
        await capture(page, `migration-${viewportName}`);
        await resume(page, 37);
        const expected = [...answers];
        expected[36] = -1;
        await page.waitForFunction(({ key, wanted }) => JSON.parse(localStorage.getItem(key))?.questionSetVersion === wanted, { key: progressKey, wanted: version });
        const migrated = await stored(page);
        assert.equal(migrated.index, 36);
        assert.deepEqual(migrated.answers, expected, "All other 59 answers retain their original values");
        assert.equal(migrated.questionSetVersion, version);
        await putProgress(page, { ...migrated, index: 59 });
        await reload(page);
        await resume(page, 60);
        await page.getByRole("button", { name: "Xem kết quả", exact: true }).click();
        await question(page, 37);
        await visible(page.getByRole("alert"));
        assert.equal((await page.getByRole("alert").textContent()).trim(), "Hãy trả lời đầy đủ các câu hỏi trước khi xem kết quả.");
        assert.equal(new URL(page.url()).pathname, "/trac-nghiem/riasec");
        assert.equal(await page.getByRole("heading", { name: "Đang phân tích kết quả của bạn…", exact: true }).count(), 0);
        assert.deepEqual(await stored(page, resultKey), legacyResult, "A rejected finish must not overwrite the old completed result");
      });
    });
  }

  await check("old completed results retain answers, scores and the original 45/55 maxima", async () => {
    for (const explicitMax of [true, false]) {
      const result = structuredClone(legacyResult);
      if (!explicitMax) delete result.riasec.maxScores;
      await withPage("desktop", { [resultKey]: result, "lumina-last-result": result }, async (page) => {
        await navigate(page, "/ket-qua/riasec");
        await visible(page.getByRole("heading", { name: "Mã RIASEC: CAR", exact: true }));
        await visible(page.getByText("18/45", { exact: true }));
        await visible(page.getByText("33/55", { exact: true }));
        await capture(page, explicitMax ? "legacy-explicit-scale" : "legacy-inferred-scale", page.getByRole("heading", { name: "Mã RIASEC: CAR", exact: true }));
        for (const path of ["/ho-so", "/huong-nghiep"]) {
          await navigate(page, path);
          await visible(page.locator("h1"));
        }
        assert.deepEqual(await stored(page, resultKey), result, "Reading an old result does not rescore or rewrite it");
        assert.deepEqual(await stored(page, "lumina-last-result"), result);
      });
    }
  });

  await check("unknown question-set versions are rejected instead of being silently resumed", async () => {
    const unsupported = progress(Array(60).fill(4), 59, "riasec-60-v99");
    await withPage("desktop", { [progressKey]: unsupported }, async (page) => {
      await navigate(page);
      await visible(page.getByRole("button", { name: "Bắt đầu", exact: true }));
      assert.equal(await page.getByRole("heading", { name: "Tiếp tục bài đang làm dở?", exact: true }).count(), 0);
      await page.getByRole("button", { name: "Bắt đầu", exact: true }).click();
      await question(page, 1);
      await page.waitForFunction(({ key, wanted }) => JSON.parse(localStorage.getItem(key))?.questionSetVersion === wanted, { key: progressKey, wanted: version });
      const fresh = await stored(page);
      assert.equal(fresh.index, 0);
      assert.deepEqual(fresh.answers, Array(60).fill(-1));
      assert.equal(await page.locator("button.option-card.is-on").count(), 0);
    });
  });
  assert.deepEqual(report.pageErrors, [], "No uncaught browser errors");
  assert.deepEqual(report.consoleErrors, [], "No unexpected browser console errors");
} catch (error) {
  report.error = String(error?.stack || error);
  if (activePage && !activePage.isClosed()) await activePage.screenshot({ path: `${out}/riasec-inventory-failure.png` }).catch(() => {});
  process.exitCode = 1;
} finally {
  await browser?.close();
  writeFileSync(`${out}/riasec-inventory-regression.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}
