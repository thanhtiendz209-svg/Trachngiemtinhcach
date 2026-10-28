import { getPersonality } from "@/data/personalities";
import { questionsFor } from "@/data/questions";
import { getQuiz } from "@/data/quizzes";
import { RIASEC_MAP } from "@/data/riasec";
import { RIASEC_GROUP_MAX } from "@/data/riasec-questions";
import type { Question, QuizResult } from "@/data/types";
import { RIASEC_KEYS, riasecFromScores } from "./riasec";
import { pct } from "./utils";

export function tally(questions: Question[], answers: number[]) {
  const scores: Record<string, number> = {};
  questions.forEach((q, i) => {
    const opt = q.options[answers[i] ?? -1];
    if (!opt) return;
    for (const [k, v] of Object.entries(opt.scores)) {
      scores[k] = (scores[k] ?? 0) + v;
    }
  });
  return scores;
}

function pick(scores: Record<string, number>, a: string, b: string) {
  return (scores[a] ?? 0) >= (scores[b] ?? 0) ? a : b;
}

export function mbtiFromScores(scores: Record<string, number>) {
  const type = `${pick(scores, "E", "I")}${pick(scores, "S", "N")}${pick(scores, "T", "F")}${pick(scores, "J", "P")}`;
  return {
    type,
    axes: {
      energy: pct(scores.E ?? 0, (scores.E ?? 0) + (scores.I ?? 0)),
      sensing: pct(scores.S ?? 0, (scores.S ?? 0) + (scores.N ?? 0)),
      thinking: pct(scores.T ?? 0, (scores.T ?? 0) + (scores.F ?? 0)),
      judging: pct(scores.J ?? 0, (scores.J ?? 0) + (scores.P ?? 0)),
    },
  };
}

export function maxRiasecFromQuestions(questions: Question[], prefixed = false) {
  const max: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  for (const q of questions) {
    for (const k of RIASEC_KEYS) {
      const key = prefixed ? `r${k}` : k;
      const m = Math.max(0, ...q.options.map((o) => o.scores[key] ?? 0));
      max[k] += m;
    }
  }
  return max;
}

export function scoreQuiz(quizId: string, answers: number[]): QuizResult | null {
  const quiz = getQuiz(quizId);
  const questions = questionsFor(quizId);
  if (!quiz || questions.length === 0) return null;
  const scores = tally(questions, answers);
  const base: QuizResult = {
    quizId,
    kind: quiz.kind,
    completedAt: new Date().toISOString(),
    answers,
  };

  if (quiz.kind === "mbti") {
    const m = mbtiFromScores(scores);
    return { ...base, mbti: m.type, axes: m.axes };
  }
  if (quiz.kind === "riasec") {
    return { ...base, riasec: riasecFromScores(scores, false, RIASEC_GROUP_MAX) };
  }
  if (quiz.kind === "interest") {
    return { ...base, riasec: riasecFromScores(scores, false, maxRiasecFromQuestions(questions, false)) };
  }
  if (quiz.kind === "bigfive") {
    return { ...base, bigfive: bigfiveFromScores(scores) };
  }
  const m = mbtiFromScores(scores);
  return {
    ...base,
    mbti: m.type,
    axes: m.axes,
    riasec: riasecFromScores(scores, true, maxRiasecFromQuestions(questions, true)),
  };
}

export function bigfiveFromScores(scores: Record<string, number>) {
  const keys = ["O", "C", "E", "A", "N"] as const;
  const out: Record<string, number> = {};
  for (const k of keys) {
    const v = scores[k] ?? 12;
    out[k] = Math.round(((v - 4) / 16) * 100);
    out[k] = Math.min(96, Math.max(8, out[k]));
  }
  return out;
}

export function resultTitle(result: QuizResult) {
  if (result.kind === "riasec" && result.riasec) {
    return `Mã RIASEC ${result.riasec.code}`;
  }
  if (result.mbti) {
    const p = getPersonality(result.mbti);
    return p ? `Bạn thuộc nhóm ${result.mbti}` : `Nhóm ${result.mbti}`;
  }
  if (result.riasec) {
    return `Mã RIASEC ${result.riasec.code}`;
  }
  if (result.bigfive) return "Hồ sơ Big Five của bạn";
  return "Hồ sơ của bạn";
}

export function resultSubtitle(result: QuizResult) {
  if (result.kind === "riasec" && result.riasec) {
    const top = result.riasec.code[0] ?? "I";
    const t = RIASEC_MAP[top];
    return t ? `${t.name} nổi bật · ${result.riasec.code}` : result.riasec.code;
  }
  if (result.mbti) {
    const p = getPersonality(result.mbti);
    return p?.name ?? result.mbti;
  }
  if (result.riasec) return `Mã ${result.riasec.code}`;
  return "Chân dung tham khảo";
}
