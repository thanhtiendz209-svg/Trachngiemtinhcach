import { QUIZZES } from "@/data/quizzes";
import type { QuizProgress, QuizResult } from "@/data/types";
import { mergeQuizResults } from "./career-profile";

const PROGRESS = (id: string) => `lumina-progress-${id}`;
const RESULT = (id: string) => `lumina-result-${id}`;
const LAST = "lumina-last-result";
export const QUIZ_RESULTS_CHANGED = "lumina-results-changed";

function read<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota */
  }
}

function remove(key: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch {
    /* Storage can be unavailable in private or restricted browser contexts. */
  }
}

export function loadProgress(quizId: string) {
  return read<QuizProgress>(PROGRESS(quizId));
}

export function saveProgress(progress: QuizProgress) {
  write(PROGRESS(progress.quizId), progress);
}

export function clearProgress(quizId: string) {
  remove(PROGRESS(quizId));
}

export function loadResult(quizId: string) {
  return read<QuizResult>(RESULT(quizId));
}

export function saveResult(result: QuizResult) {
  write(RESULT(result.quizId), result);
  write(LAST, result);
  clearProgress(result.quizId);
  if (typeof window !== "undefined") window.dispatchEvent(new Event(QUIZ_RESULTS_CHANGED));
}

export function loadLastResult() {
  return read<QuizResult>(LAST);
}

export function hasPartialProgress(quizId: string) {
  const p = loadProgress(quizId);
  if (!p) return false;
  return p.answers.some((a) => a >= 0);
}

export function loadAllResults() {
  return QUIZZES.map((q) => loadResult(q.id)).filter((r): r is QuizResult => Boolean(r));
}

export function loadMergedProfile() {
  return mergeQuizResults(loadAllResults());
}

