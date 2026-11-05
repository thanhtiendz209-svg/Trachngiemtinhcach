import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import type { QuizProgress, QuizResult } from "@/data/types";

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
const { prepareQuizProgress, preserveStoredRiasecScale } = await import("./quiz-progress.ts");
const { RIASEC_GROUP_MAX } = await import("../data/riasec-questions.ts");
aliases.deregister();

const CURRENT_VERSION = "riasec-60-v2";
const LEGACY_VERSION = "riasec-60-v1";
const LEGACY_MAX = { R: 50, I: 50, A: 45, S: 50, E: 50, C: 55 };
const CURRENT_MAX = { R: 50, I: 50, A: 50, S: 50, E: 50, C: 50 };

type StoredProgress = QuizProgress & { questionSetVersion?: string };
type StoredResult = QuizResult & { questionSetVersion?: string };

function progress(fields: Partial<StoredProgress> = {}): StoredProgress {
  return {
    quizId: "riasec",
    index: 59,
    answers: Array.from({ length: 60 }, (_, index) => index % 5),
    updatedAt: "2026-11-04T08:00:00Z",
    ...fields,
  };
}

function result(fields: Partial<StoredResult> = {}): StoredResult {
  return {
    quizId: "riasec",
    kind: "riasec",
    completedAt: "2026-11-03T08:00:00Z",
    answers: Array.from({ length: 60 }, (_, index) => index % 5),
    riasec: {
      code: "CIA",
      scores: { R: 20, I: 35, A: 32, S: 25, E: 30, C: 44 },
    },
    ...fields,
  };
}

describe("saved RIASEC question-set progress", () => {
  it("preserves null and unrelated quiz progress", () => {
    assert.deepEqual(prepareQuizProgress(null), { progress: null });
    for (const quizId of ["mbti", "bigfive"]) {
      const saved = progress({ quizId, answers: [0, -1, 1], index: 1 });
      const prepared = prepareQuizProgress(saved);
      assert.equal(prepared.progress, saved);
      assert.equal(prepared.updatedQuestion, undefined);
    }
  });

  it("keeps valid current progress by identity, including every answer boundary", () => {
    const saved = progress({ questionSetVersion: CURRENT_VERSION });
    saved.answers[0] = -1;
    saved.answers[59] = 4;
    Object.freeze(saved.answers);
    Object.freeze(saved);
    const prepared = prepareQuizProgress(saved);
    assert.equal(prepared.progress, saved);
    assert.equal(prepared.updatedQuestion, undefined);
    assert.equal(prepareQuizProgress(prepared.progress).progress, saved);
  });

  it("resets only the changed legacy question and returns to it when needed", () => {
    for (const oldIndex of [0, 35, 36, 59]) {
      for (const oldAnswer of [0, 1, 2, 3, 4]) {
        const saved = progress({ index: oldIndex });
        saved.answers[36] = oldAnswer;
        const snapshot = structuredClone(saved);
        Object.freeze(saved.answers);
        Object.freeze(saved);
        const prepared = prepareQuizProgress(saved);
        assert.ok(prepared.progress);
        assert.notEqual(prepared.progress, saved);
        assert.notEqual(prepared.progress.answers, saved.answers);
        assert.equal(prepared.progress.questionSetVersion, CURRENT_VERSION);
        assert.equal(prepared.progress.index, Math.min(oldIndex, 36));
        assert.equal(prepared.updatedQuestion, 37);
        assert.equal(prepared.progress.answers[36], -1);
        assert.equal(prepared.progress.updatedAt, saved.updatedAt);
        for (let index = 0; index < 60; index++) {
          if (index !== 36) assert.equal(prepared.progress.answers[index], snapshot.answers[index], `Answer ${index + 1}`);
        }
        assert.deepEqual(saved, snapshot, "Migration must not mutate saved browser data");
        const again = prepareQuizProgress(prepared.progress);
        assert.equal(again.progress, prepared.progress);
        assert.equal(again.updatedQuestion, undefined);
      }
    }
  });

  it("stamps unanswered legacy progress without moving its current position", () => {
    const saved = progress({ index: 59 });
    saved.answers[36] = -1;
    const snapshot = structuredClone(saved);
    const prepared = prepareQuizProgress(saved);
    assert.ok(prepared.progress);
    assert.equal(prepared.progress.questionSetVersion, CURRENT_VERSION);
    assert.equal(prepared.progress.index, 59);
    assert.deepEqual(prepared.progress.answers, saved.answers);
    assert.equal(prepared.updatedQuestion, undefined);
    assert.deepEqual(saved, snapshot);
    assert.equal(prepareQuizProgress(prepared.progress).progress, prepared.progress);
  });

  it("rejects unsupported versions and incompatible answer lengths", () => {
    const incompatible = [
      progress({ questionSetVersion: "riasec-60-v99" }),
      progress({ questionSetVersion: "riasec-60-v1" }),
      progress({ answers: [] }),
      progress({ answers: Array(59).fill(0) }),
      progress({ answers: Array(61).fill(0) }),
    ];
    for (const saved of incompatible) {
      assert.deepEqual(prepareQuizProgress(saved), { progress: null });
    }
  });

  it("rejects sparse, nonarray or invalid answer values before either migration path", () => {
    const sparse = Array<number>(60);
    sparse[0] = 0;
    const answers: unknown[] = [sparse, undefined, null, { length: 60 }];
    for (const invalid of [-2, 5, 0.5, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, undefined, null, "2"]) {
      const values: unknown[] = Array(60).fill(0);
      values[36] = invalid;
      answers.push(values);
    }
    for (const questionSetVersion of [undefined, CURRENT_VERSION]) {
      for (const invalid of answers) {
        const saved = { ...progress({ questionSetVersion }), answers: invalid } as unknown as QuizProgress;
        assert.deepEqual(prepareQuizProgress(saved), { progress: null });
      }
    }
  });

  it("rejects an invalid saved index even when all sixty answers are valid", () => {
    for (const questionSetVersion of [undefined, CURRENT_VERSION]) {
      for (const index of [-1, 60, 1.5, Number.NaN, Number.POSITIVE_INFINITY, undefined, null, "36"]) {
        const saved = { ...progress({ questionSetVersion }), index } as unknown as QuizProgress;
        assert.deepEqual(prepareQuizProgress(saved), { progress: null });
      }
    }
  });
});

describe("persisted RIASEC score scales", () => {
  it("pins unversioned sixty-answer results to their original unequal group maxima", () => {
    const saved = result();
    const snapshot = structuredClone(saved);
    Object.freeze(saved.answers);
    Object.freeze(saved.riasec!.scores);
    Object.freeze(saved.riasec);
    Object.freeze(saved);
    const restored = preserveStoredRiasecScale(saved);
    assert.ok(restored?.riasec);
    assert.notEqual(restored, saved);
    assert.notEqual(restored.riasec, saved.riasec);
    assert.equal(restored.questionSetVersion, LEGACY_VERSION);
    assert.deepEqual(restored.riasec.maxScores, LEGACY_MAX);
    assert.deepEqual({ ...restored, riasec: { ...restored.riasec, maxScores: undefined }, questionSetVersion: undefined },
      { ...saved, riasec: { ...saved.riasec, maxScores: undefined }, questionSetVersion: undefined });
    assert.deepEqual(saved, snapshot, "Loading must never recalculate or overwrite historical answers and scores");
    assert.equal(preserveStoredRiasecScale(restored), restored);
  });

  it("snapshots the current scale for current-version results missing their maxima", () => {
    const saved = result({ questionSetVersion: CURRENT_VERSION });
    const restored = preserveStoredRiasecScale(saved);
    assert.ok(restored?.riasec);
    assert.equal(restored.questionSetVersion, CURRENT_VERSION);
    assert.deepEqual(restored.riasec.maxScores, CURRENT_MAX);
    assert.notEqual(restored.riasec.maxScores, RIASEC_GROUP_MAX, "Each stored result must own its scale snapshot");
    assert.deepEqual(restored.answers, saved.answers);
    assert.deepEqual(restored.riasec.scores, saved.riasec!.scores);
    assert.equal(restored.riasec.code, saved.riasec!.code);
    assert.equal(preserveStoredRiasecScale(restored), restored);
  });

  it("always respects explicit saved maxima, including partial or empty records", () => {
    const savedMaxima: Array<Record<string, number>> = [LEGACY_MAX, CURRENT_MAX, { A: 12 }, {}, { R: 0, A: Number.NaN }];
    for (const maxScores of savedMaxima) {
      for (const questionSetVersion of [undefined, CURRENT_VERSION, "riasec-60-v99"]) {
        const saved = result({ questionSetVersion });
        saved.riasec!.maxScores = maxScores;
        assert.equal(preserveStoredRiasecScale(saved), saved);
        assert.equal(saved.riasec!.maxScores, maxScores);
      }
    }
  });

  it("leaves unrelated, unknown or incompatible saved results untouched", () => {
    assert.equal(preserveStoredRiasecScale(null), null);
    const unchanged = [
      result({ kind: "mbti", mbti: "INTJ" }),
      result({ kind: "bigfive", bigfive: { O: 80 } }),
      result({ quizId: "mbti" }),
      result({ quizId: "bigfive" }),
      result({ questionSetVersion: "riasec-60-v99" }),
      result({ answers: Array(59).fill(0) }),
      result({ answers: Array(61).fill(0) }),
      result({ riasec: undefined }),
      { ...result(), answers: { length: 60 } } as unknown as QuizResult,
      { ...result(), answers: undefined } as unknown as QuizResult,
    ];
    for (const saved of unchanged) assert.equal(preserveStoredRiasecScale(saved), saved);
  });
});
