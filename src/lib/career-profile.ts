import type { CareerField, QuizResult, RiasecScores } from "@/data/types";
import { RIASEC_GROUP_MAX } from "@/data/riasec-questions";
import { RIASEC_KEYS, riasecFitPercent } from "./riasec";

export interface CareerProfile {
  mbti?: string;
  riasec?: RiasecScores;
}

export const CAREER_MATCH_NOTE =
  "Mức tương đồng về sở thích, không phải đánh giá năng lực hoặc khả năng trúng tuyển.";
export const CURRENT_CAREER_PROFILE_NOTE =
  "Dùng kết quả MBTI/RIASEC mới nhất đã lưu trong hồ sơ hiện tại.";
export const RESULT_CAREER_PROFILE_NOTE =
  "Gợi ý dựa trên kết quả bài test này; trang chi tiết nghề dùng hồ sơ hiện tại đã lưu.";

function validMbti(value: string | undefined) {
  const type = typeof value === "string" ? value.trim().toUpperCase() : "";
  return /^[EI][SN][TF][JP]$/.test(type) ? type : undefined;
}

function usableRiasec(value: RiasecScores | undefined): RiasecScores | undefined {
  if (!value?.scores) return undefined;
  const scores: Record<string, number> = {};
  const maxScores: Record<string, number> = {};
  let positive = false;
  for (const key of RIASEC_KEYS) {
    const score = value.scores[key];
    const max = (value.maxScores ?? RIASEC_GROUP_MAX)[key] ?? 50;
    const valid = Number.isFinite(score) && score >= 0 && Number.isFinite(max) && max > 0;
    scores[key] = valid ? score : 0;
    maxScores[key] = Number.isFinite(max) && max > 0 ? max : 50;
    if (valid && score > 0) positive = true;
  }
  return positive ? { ...value, scores, maxScores } : undefined;
}

export function careerProfileFromResult(result?: CareerProfile | null): CareerProfile {
  return { mbti: validMbti(result?.mbti), riasec: usableRiasec(result?.riasec) };
}

export function hasCareerProfile(profile?: CareerProfile | null) {
  const usable = careerProfileFromResult(profile);
  return Boolean(usable.mbti || usable.riasec);
}

/** One scoring entrypoint for career lists, details and contextual result views. */
export function careerMatch(career: CareerField, profile?: CareerProfile | null): number | null {
  const usable = careerProfileFromResult(profile);
  if (usable.riasec) {
    const fit = riasecFitPercent(usable.riasec.scores, career.riasec, usable.riasec.maxScores);
    const bonus = usable.mbti && career.types.includes(usable.mbti) ? 4 : 0;
    return Math.min(96, Math.max(8, fit + bonus));
  }
  if (!usable.mbti) return null;
  const score = 42 + (career.types.includes(usable.mbti) ? 28 : 0);
  return Math.min(94, Math.max(38, score));
}

export function rankCareerMatches(careers: readonly CareerField[], profile?: CareerProfile | null) {
  return careers.map((career) => ({ ...career, match: careerMatch(career, profile) }))
    .sort((a, b) => (b.match ?? -1) - (a.match ?? -1));
}

function completedTime(result: QuizResult) {
  const time = Date.parse(result.completedAt);
  return Number.isFinite(time) ? time : Number.NEGATIVE_INFINITY;
}

function latestResult(results: readonly QuizResult[], priority: QuizResult["kind"][], usable: (result: QuizResult) => boolean) {
  return results.filter((result) => priority.includes(result.kind) && usable(result)).sort((a, b) => {
    const aTime = completedTime(a);
    const bTime = completedTime(b);
    if (aTime !== bTime) return aTime > bTime ? -1 : 1;
    return priority.indexOf(a.kind) - priority.indexOf(b.kind) || a.quizId.localeCompare(b.quizId);
  })[0];
}

/**
 * Each dimension uses its newest usable saved result. At equal completion times,
 * prefer the dedicated inventory: RIASEC > interest > combined; MBTI > combined.
 * Invalid dates are oldest. Big Five does not replace either career dimension.
 * MBTI axes always come from the same selected result as the MBTI type.
 */
export function mergeQuizResults(results: readonly QuizResult[]) {
  const mbti = latestResult(results, ["mbti", "combined"], (result) => Boolean(validMbti(result.mbti)));
  const riasec = latestResult(results, ["riasec", "interest", "combined"], (result) => Boolean(usableRiasec(result.riasec)));
  const bigfive = latestResult(results, ["bigfive"], (result) => Boolean(result.bigfive));
  return {
    all: [...results],
    mbti: validMbti(mbti?.mbti),
    axes: mbti?.axes,
    riasec: usableRiasec(riasec?.riasec),
    bigfive: bigfive?.bigfive,
    sources: { mbti, riasec, bigfive },
  };
}
