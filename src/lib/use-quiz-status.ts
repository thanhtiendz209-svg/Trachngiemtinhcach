import { useEffect, useState } from "react";
import { QUIZZES } from "@/data/quizzes";
import type { QuizResult } from "@/data/types";
import { hasPartialProgress, loadLastResult, loadMergedProfile, loadProgress, loadResult } from "./storage";

export function useLastResult() {
  const [result, setResult] = useState<QuizResult | null>(null);
  useEffect(() => {
    setResult(loadLastResult());
  }, []);
  return result;
}

export function useMergedProfile() {
  const [profile, setProfile] = useState<ReturnType<typeof loadMergedProfile> | null>(null);
  useEffect(() => {
    setProfile(loadMergedProfile());
  }, []);
  return profile;
}

export function useAllQuizStatus() {
  const [map, setMap] = useState<
    Record<string, { progress: boolean; result: boolean; index: number; answered: number }>
  >({});

  useEffect(() => {
    const next: typeof map = {};
    for (const q of QUIZZES) {
      const p = loadProgress(q.id);
      const r = loadResult(q.id);
      next[q.id] = {
        progress: hasPartialProgress(q.id),
        result: Boolean(r),
        index: p?.index ?? 0,
        answered: p?.answers.filter((a) => a >= 0).length ?? 0,
      };
    }
    setMap(next);
  }, []);

  return map;
}
