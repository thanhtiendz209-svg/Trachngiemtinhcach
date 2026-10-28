#!/usr/bin/env node
/** Browser regressions for the existing app, plus comparable before/after metrics. */
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { chromium } from "playwright";
import { checkedUrl } from "./browser-guard.mjs";

const base = checkedUrl(process.argv[2] || "http://127.0.0.1:8081/");
const origin = new URL(base).origin;
const out = "/workspace/screenshots";
const expectFixes = process.env.SITE_EXPECT_FIXES !== "0";
const report = {
  revision: process.env.SITE_REVISION || "local",
  checks: [],
  metrics: {},
  quizResults: {},
  universityResults: {},
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

async function question(page, number) {
  await visible(page.getByText(new RegExp(`^Câu ${String(number).padStart(2, "0")} /`)));
}

function observeErrors(page) {
  page.on("pageerror", (error) => report.pageErrors.push(String(error)));
}

async function metrics(page) {
  return page.evaluate((siteOrigin) => {
    const scripts = performance.getEntriesByType("resource")
      .filter((entry) => entry.initiatorType === "script" && entry.name.startsWith(siteOrigin));
    return {
      localScriptDecodedBytes: scripts.reduce((sum, entry) => sum + entry.decodedBodySize, 0),
      localScriptTransferBytes: scripts.reduce((sum, entry) => sum + entry.transferSize, 0),
      localScriptRequests: scripts.length,
      longTaskCount: (window.__siteLongTasks || []).length,
      longTaskDurationMs: (window.__siteLongTasks || []).reduce((sum, value) => sum + value, 0),
    };
  }, origin);
}

let page;
try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await context.addInitScript(() => {
    window.__siteLongTasks = [];
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) window.__siteLongTasks.push(entry.duration);
      }).observe({ type: "longtask", buffered: true });
    } catch { /* Optional browser performance API. */ }
  });
  page = await context.newPage();
  observeErrors(page);
  page.setDefaultTimeout(15000);

  await check("home renders without horizontal overflow", async () => {
    const response = await page.goto(base, { waitUntil: "domcontentloaded" });
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
    await page.goto(`${origin}/huong-nghiep`, { waitUntil: "domcontentloaded" });
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
    report.metrics.universityAfterFilters = await metrics(page);
    await page.screenshot({ path: `${out}/university-desktop.png` });
  });

  for (const quizId of ["riasec", "bigfive", "mbti", "interest", "combined"]) {
    await check(`${quizId}: answering, back, resume, scoring, result and restart`, async () => {
      await page.goto(`${origin}/trac-nghiem/${quizId}`, { waitUntil: "domcontentloaded" });
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
      await page.goto(`${origin}/trac-nghiem/${quizId}`, { waitUntil: "domcontentloaded" });
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
      await visible(page.getByRole("button", { name: "Tiếp tục", exact: true }));
      await page.getByRole("button", { name: "Tiếp tục", exact: true }).click();
      await question(page, count);
      await page.getByRole("button", { name: "Xem kết quả", exact: true }).click();
      await page.waitForURL(`**/ket-qua/${quizId}`, { timeout: 15000 });
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

      await page.goto(`${origin}/trac-nghiem/${quizId}`, { waitUntil: "domcontentloaded" });
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
    await page.goto(`${origin}/ho-so`, { waitUntil: "domcontentloaded" });
    await visible(page.getByRole("heading", { name: "Hồ sơ hướng nghiệp của bạn", exact: true }));
    await visible(page.getByText("Đã có kết quả", { exact: true }));
    assert.equal(await page.getByText("Đã có kết quả", { exact: true }).count(), 5);
  });

  await check("mobile navigation, university search and reduced motion render", async () => {
    const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: "reduce" });
    const mobilePage = await mobile.newPage();
    observeErrors(mobilePage);
    await mobilePage.goto(base, { waitUntil: "domcontentloaded" });
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
    await mobilePage.goto(base, { waitUntil: "domcontentloaded" });
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
      await fallbackPage.goto(base, { waitUntil: "domcontentloaded" });
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
