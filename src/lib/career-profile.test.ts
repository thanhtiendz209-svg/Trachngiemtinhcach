import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import type { QuizKind, QuizResult, RiasecScores } from "@/data/types";

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
const { careerMatch, careerProfileFromResult, hasCareerProfile, mergeQuizResults, rankCareerMatches } =
  await import("./career-profile.ts");
const { CAREERS } = await import("../data/careers.ts");
aliases.deregister();

const preferences: RiasecScores = {
  code: "AIR",
  scores: { R: 10, I: 20, A: 30, S: 5, E: 10, C: 15 },
  maxScores: { R: 50, I: 50, A: 45, S: 50, E: 50, C: 55 },
};

function result(kind: QuizKind, completedAt: string, fields: Partial<QuizResult> = {}): QuizResult {
  return { quizId: kind, kind, completedAt, answers: [0], ...fields };
}

describe("shared career matching", () => {
  it("does not fabricate match percentages without MBTI or a usable preference vector", () => {
    const bigfive = result("bigfive", "2026-10-31T10:00:00Z", { bigfive: { O: 80, C: 60, E: 40, A: 70, N: 50 } });
    const unusable = [
      undefined,
      null,
      {},
      careerProfileFromResult(bigfive),
      { riasec: { code: "RIA", scores: {} } },
      { riasec: { code: "RIA", scores: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 } } },
      { riasec: { code: "RIA", scores: { R: Number.NaN, I: Number.POSITIVE_INFINITY, A: -1 } } },
      { riasec: { code: "RIA", scores: { R: 10, I: 10 }, maxScores: { R: 0, I: Number.NaN } } },
      { mbti: "INVALID" },
    ];
    for (const profile of unusable) {
      assert.equal(hasCareerProfile(profile), false);
      for (const career of CAREERS) assert.equal(careerMatch(career, profile), null);
    }
  });

  it("preserves usable MBTI recommendations even when a RIASEC vector is invalid", () => {
    const career = { ...CAREERS[0], types: ["INTJ"] };
    assert.equal(hasCareerProfile({ mbti: "INTJ" }), true);
    assert.equal(careerMatch(career, { mbti: "INTJ" }), 70);
    assert.equal(careerMatch(career, { mbti: "ENFP" }), 42);
    assert.equal(careerMatch(career, { mbti: "INTJ", riasec: { code: "RIA", scores: {} } }), 70);
  });

  it("honors each numeric maximum instead of treating different inventories as the same scale", () => {
    const ratios = { R: 0.2, I: 0.6, A: 0.8, S: 0.1, E: 0.3, C: 0.4 };
    const maxima = { R: 20, I: 100, A: 45, S: 10, E: 60, C: 55 };
    const normalized: RiasecScores = { code: "AIR", scores: ratios, maxScores: { R: 1, I: 1, A: 1, S: 1, E: 1, C: 1 } };
    const scaled: RiasecScores = {
      code: "AIR",
      scores: Object.fromEntries(Object.entries(ratios).map(([key, value]) => [key, value * maxima[key as keyof typeof maxima]])),
      maxScores: maxima,
    };
    for (const career of CAREERS) {
      assert.equal(careerMatch(career, { riasec: scaled }), careerMatch(career, { riasec: normalized }), career.id);
    }
    assert.ok(CAREERS.some((career) =>
      careerMatch(career, { riasec: scaled }) !== careerMatch(career, { riasec: { ...scaled, maxScores: undefined } }),
    ), "Fixture must expose the former missing-maxScores bug");
  });

  it("preserves the original MBTI bonus and preference-score cap", () => {
    const career = { ...CAREERS[0], types: ["INTJ"] };
    const preferenceOnly = careerMatch(career, { riasec: preferences });
    assert.notEqual(preferenceOnly, null);
    assert.equal(careerMatch(career, { mbti: "INTJ", riasec: preferences }), Math.min(96, preferenceOnly! + 4));
  });

  it("gives list rows and career details exactly the same score for the shared current profile", () => {
    const profile = mergeQuizResults([
      result("mbti", "2026-10-30T09:00:00Z", { mbti: "INTJ" }),
      result("riasec", "2026-10-31T09:00:00Z", { riasec: preferences }),
    ]);
    const original = structuredClone(CAREERS);
    const ranked = rankCareerMatches(CAREERS, profile);
    assert.equal(ranked.length, CAREERS.length);
    for (const row of ranked) {
      const detail = CAREERS.find((career) => career.id === row.id);
      assert.ok(detail);
      assert.equal(row.match, careerMatch(detail, profile), row.id);
      assert.ok(row.match != null && Number.isFinite(row.match));
    }
    assert.deepEqual(CAREERS, original, "Ranking must not reorder or modify the career catalog");
    assert.ok(ranked.every((row, index) => index === 0 || (ranked[index - 1].match ?? 0) >= (row.match ?? 0)));
  });

  it("keeps generic career cards without percentages when only Big Five is available", () => {
    const profile = mergeQuizResults([result("bigfive", "2026-10-31T10:00:00Z", { bigfive: { O: 80 } })]);
    const rows = rankCareerMatches(CAREERS, profile);
    assert.deepEqual(rows.map((row) => row.id), CAREERS.map((career) => career.id));
    assert.ok(rows.every((row) => row.match === null));
  });
});

describe("deterministic current quiz profile", () => {
  it("selects the newest relevant results independently instead of letting the last Big Five overwrite them", () => {
    const axes = { energy: 71, sensing: 22, thinking: 33, judging: 44 };
    const latestInterest = { ...preferences, code: "SEC", scores: { R: 1, I: 2, A: 3, S: 18, E: 17, C: 16 } };
    const input = [
      result("bigfive", "2026-10-31T12:00:00Z", { bigfive: { O: 80 } }),
      result("riasec", "2026-10-25T10:00:00Z", { riasec: preferences }),
      result("combined", "2026-10-29T10:00:00Z", { mbti: "ENFP", axes, riasec: preferences }),
      result("mbti", "2026-10-26T10:00:00Z", { mbti: "INTJ" }),
      result("interest", "2026-10-30T10:00:00Z", { riasec: latestInterest }),
    ];
    const original = structuredClone(input);
    const profile = mergeQuizResults(input);
    assert.equal(profile.mbti, "ENFP");
    assert.deepEqual(profile.axes, axes);
    assert.deepEqual(profile.riasec, latestInterest);
    assert.deepEqual(profile.bigfive, { O: 80 });
    assert.equal(profile.sources.mbti?.quizId, "combined");
    assert.equal(profile.sources.riasec?.quizId, "interest");
    assert.equal(profile.sources.bigfive?.quizId, "bigfive");
    assert.deepEqual(input, original, "Merging must not mutate stored results");
    const reversed = mergeQuizResults([...input].reverse());
    assert.equal(reversed.mbti, profile.mbti);
    assert.deepEqual(reversed.riasec, profile.riasec);
    assert.equal(reversed.sources.mbti?.quizId, profile.sources.mbti?.quizId);
    assert.equal(reversed.sources.riasec?.quizId, profile.sources.riasec?.quizId);
  });

  it("uses documented dedicated-inventory priority only when timestamps tie", () => {
    const at = "2026-10-31T10:00:00Z";
    const official = { ...preferences, code: "RIC" };
    const input = [
      result("combined", at, { mbti: "ENFP", riasec: { ...preferences, code: "AIR" } }),
      result("interest", at, { riasec: { ...preferences, code: "SEC" } }),
      result("riasec", at, { riasec: official }),
      result("mbti", at, { mbti: "INTJ" }),
    ];
    for (const ordered of [input, [...input].reverse()]) {
      const profile = mergeQuizResults(ordered);
      assert.equal(profile.mbti, "INTJ");
      assert.deepEqual(profile.riasec, official);
      assert.equal(profile.sources.mbti?.quizId, "mbti");
      assert.equal(profile.sources.riasec?.quizId, "riasec");
    }
  });

  it("prefers interest to combined on a RIASEC timestamp tie without a dedicated Holland result", () => {
    const profile = mergeQuizResults([
      result("combined", "2026-10-31T10:00:00Z", { riasec: { ...preferences, code: "AIR" } }),
      result("interest", "2026-10-31T10:00:00Z", { riasec: { ...preferences, code: "SEC" } }),
    ]);
    assert.equal(profile.sources.riasec?.quizId, "interest");
  });

  it("ranks an invalid date behind a valid relevant result", () => {
    const profile = mergeQuizResults([
      result("riasec", "not-a-date", { riasec: preferences }),
      result("interest", "2026-01-01T00:00:00Z", { riasec: { ...preferences, code: "SEC" } }),
    ]);
    assert.equal(profile.sources.riasec?.quizId, "interest");
  });

  it("does not attach axes from an older MBTI result to a newer different personality type", () => {
    const profile = mergeQuizResults([
      result("mbti", "2026-10-30T10:00:00Z", { mbti: "INTJ", axes: { energy: 10, sensing: 20, thinking: 90, judging: 80 } }),
      result("combined", "2026-10-31T10:00:00Z", { mbti: "ENFP" }),
    ]);
    assert.equal(profile.mbti, "ENFP");
    assert.equal(profile.axes, undefined);
  });

  it("ignores a newer unusable RIASEC vector while retaining the latest usable saved preference result", () => {
    const profile = mergeQuizResults([
      result("riasec", "2026-10-31T10:00:00Z", { riasec: { code: "RIA", scores: {} } }),
      result("interest", "2026-10-30T10:00:00Z", { riasec: preferences }),
    ]);
    assert.equal(profile.sources.riasec?.quizId, "interest");
    assert.equal(hasCareerProfile(profile), true);
  });

  it("keeps a historical result's recommendations separate from the current merged profile", () => {
    const older = result("mbti", "2026-10-30T10:00:00Z", { mbti: "INTJ" });
    const current = mergeQuizResults([older, result("combined", "2026-10-31T10:00:00Z", { mbti: "ENFP" })]);
    const historical = careerProfileFromResult(older);
    assert.equal(historical.mbti, "INTJ");
    assert.equal(current.mbti, "ENFP");
    assert.ok(CAREERS.some((career) => careerMatch(career, historical) !== careerMatch(career, current)));
  });
});
