import { RIASEC_GROUP_MAX, RIASEC_QUESTION_SET_VERSION } from "@/data/riasec-questions";
import type { QuizProgress, QuizResult } from "@/data/types";

const RIASEC_QUESTION_COUNT = 60;
const UPDATED_QUESTION_INDEX = 36;
const LEGACY_RIASEC_GROUP_MAX = { R: 50, I: 50, A: 45, S: 50, E: 50, C: 55 };

/** Preserve unchanged answers while asking the updated item again. */
export function prepareQuizProgress(progress: QuizProgress | null): {
  progress: QuizProgress | null;
  updatedQuestion?: number;
} {
  if (!progress || progress.quizId !== "riasec") return { progress };
  if (
    !Array.isArray(progress.answers) ||
    progress.answers.length !== RIASEC_QUESTION_COUNT ||
    !Array.from(progress.answers).every((answer) => Number.isInteger(answer) && answer >= -1 && answer <= 4) ||
    !Number.isInteger(progress.index) || progress.index < 0 || progress.index >= RIASEC_QUESTION_COUNT
  ) return { progress: null };
  if (progress.questionSetVersion === RIASEC_QUESTION_SET_VERSION) return { progress };
  if (progress.questionSetVersion !== undefined) return { progress: null };

  const answers = [...progress.answers];
  const updated = answers[UPDATED_QUESTION_INDEX] >= 0;
  if (updated) answers[UPDATED_QUESTION_INDEX] = -1;
  return {
    progress: {
      ...progress,
      answers,
      index: updated ? Math.min(progress.index, UPDATED_QUESTION_INDEX) : progress.index,
      questionSetVersion: RIASEC_QUESTION_SET_VERSION,
    },
    ...(updated ? { updatedQuestion: UPDATED_QUESTION_INDEX + 1 } : {}),
  };
}

/** Attach the original scale to a saved result; never score its answers again. */
export function preserveStoredRiasecScale(result: QuizResult | null): QuizResult | null {
  if (
    !result || result.quizId !== "riasec" || result.kind !== "riasec" ||
    !Array.isArray(result.answers) || result.answers.length !== RIASEC_QUESTION_COUNT ||
    !result.riasec || result.riasec.maxScores !== undefined
  ) return result;
  const legacy = result.questionSetVersion === undefined;
  if (!legacy && result.questionSetVersion !== RIASEC_QUESTION_SET_VERSION) return result;
  return {
    ...result,
    questionSetVersion: legacy ? "riasec-60-v1" : RIASEC_QUESTION_SET_VERSION,
    riasec: {
      ...result.riasec,
      maxScores: { ...(legacy ? LEGACY_RIASEC_GROUP_MAX : RIASEC_GROUP_MAX) },
    },
  };
}
