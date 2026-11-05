import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { registerHooks } from "node:module";

const sourceRoot = new URL("../", import.meta.url);
const aliases = registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(new URL(`${specifier.slice(2)}.ts`, sourceRoot).href, context);
    }
    if (specifier.startsWith(".") && context.parentURL?.startsWith(sourceRoot.href) && !/\.[a-z]+$/i.test(specifier)) {
      return nextResolve(`${specifier}.ts`, context);
    }
    return nextResolve(specifier, context);
  },
});
const { loadResult, loadLastResult, loadMergedProfile, hasPartialProgress } = await import("./storage.ts");
aliases.deregister();

function withBrowser(run: (saved: Map<string, string>) => void) {
  const saved = new Map<string, string>();
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const originalStorage = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  Object.defineProperty(globalThis, "window", { configurable: true, value: {} });
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => saved.get(key) ?? null,
      setItem: (key: string, value: string) => saved.set(key, value),
      removeItem: (key: string) => saved.delete(key),
    },
  });
  try { run(saved); } finally {
    if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
    else Reflect.deleteProperty(globalThis, "window");
    if (originalStorage) Object.defineProperty(globalThis, "localStorage", originalStorage);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
}

const oldResult = {
  quizId: "riasec", kind: "riasec", completedAt: "2026-11-03T09:00:00Z",
  answers: Array(60).fill(4),
  riasec: { code: "CRI", scores: { R: 50, I: 50, A: 45, S: 50, E: 50, C: 55 } },
};
const oldMax = { R: 50, I: 50, A: 45, S: 50, E: 50, C: 55 };

describe("stored inventories across the RIASEC question update", () => {
  it("uses historical scales consistently for saved results, latest result and the merged profile without overwriting browser data", () => withBrowser((saved) => {
    const raw = JSON.stringify(oldResult);
    saved.set("lumina-result-riasec", raw);
    saved.set("lumina-last-result", raw);
    for (const result of [loadResult("riasec"), loadLastResult()]) {
      assert.equal(result?.questionSetVersion, "riasec-60-v1");
      assert.equal(result?.riasec?.code, "CRI");
      assert.deepEqual(result?.riasec?.scores, oldResult.riasec.scores);
      assert.deepEqual(result?.riasec?.maxScores, oldMax);
    }
    const merged = loadMergedProfile();
    assert.deepEqual(merged.riasec?.scores, oldResult.riasec.scores);
    assert.deepEqual(merged.riasec?.maxScores, oldMax);
    assert.equal(saved.get("lumina-result-riasec"), raw);
    assert.equal(saved.get("lumina-last-result"), raw);
  }));

  it("preserves explicit historical scales and leaves other quiz results intact", () => withBrowser((saved) => {
    const explicit = { ...oldResult, riasec: { ...oldResult.riasec, maxScores: oldMax } };
    const mbti = { quizId: "mbti", kind: "mbti", completedAt: oldResult.completedAt, answers: [0], mbti: "INTJ" };
    saved.set("lumina-result-riasec", JSON.stringify(explicit));
    saved.set("lumina-result-mbti", JSON.stringify(mbti));
    assert.deepEqual(loadResult("riasec"), explicit);
    assert.deepEqual(loadResult("mbti"), mbti);
  }));

  it("shows resumable progress only for compatible answers and does not rewrite the saved question-37 answer before the user resumes", () => withBrowser((saved) => {
    const progress = { quizId: "riasec", index: 59, answers: Array(60).fill(0), updatedAt: oldResult.completedAt };
    const raw = JSON.stringify(progress);
    saved.set("lumina-progress-riasec", raw);
    assert.equal(hasPartialProgress("riasec"), true);
    assert.equal(saved.get("lumina-progress-riasec"), raw);
    saved.set("lumina-progress-riasec", JSON.stringify({ ...progress, questionSetVersion: "future-inventory" }));
    assert.equal(hasPartialProgress("riasec"), false);
    saved.set("lumina-progress-riasec", JSON.stringify({ ...progress, questionSetVersion: "riasec-60-v2" }));
    assert.equal(hasPartialProgress("riasec"), true);
    saved.set("lumina-progress-bigfive", JSON.stringify({ quizId: "bigfive", index: 1, answers: [0, -1] }));
    assert.equal(hasPartialProgress("bigfive"), true);
  }));
});
