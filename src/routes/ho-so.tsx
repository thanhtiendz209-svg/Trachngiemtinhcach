import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ResultView } from "@/components/result/ResultView";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { QUIZZES } from "@/data/quizzes";
import type { QuizResult } from "@/data/types";
import { useMergedProfile } from "@/lib/use-quiz-status";

export const Route = createFileRoute("/ho-so")({ component: ProfilePage });

function ProfilePage() {
  const profile = useMergedProfile();
  const ready = profile !== null;
  const all = profile?.all ?? [];
  const merged = useMemo<QuizResult | null>(() => {
    if (profile && (profile.mbti || profile.riasec || profile.bigfive)) {
      const latest = profile.all.filter((result) => Number.isFinite(Date.parse(result.completedAt)))
        .sort((a, b) => Date.parse(b.completedAt) - Date.parse(a.completedAt))[0];
      return {
        quizId: "combined",
        kind: "combined",
        completedAt: latest?.completedAt ?? new Date().toISOString(),
        mbti: profile.mbti,
        axes: profile.axes,
        riasec: profile.riasec,
        bigfive: profile.bigfive,
        answers: [],
      };
    }
    return null;
  }, [profile]);

  return (
    <SiteShell>
      <div className="hero-wash">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Hồ sơ</p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-navy">Hồ sơ hướng nghiệp của bạn</h1>
            <p className="mt-3 max-w-xl text-muted">
              Gộp kết quả các bài đã làm trên thiết bị này. Làm thêm bài để hồ sơ dày hơn.
            </p>
          </Reveal>
        </div>
      </div>

      {!ready ? (
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="skeleton h-40 rounded-[24px]" />
        </div>
      ) : (
        <>
          <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {QUIZZES.map((q) => {
                const done = all.find((r) => r.quizId === q.id);
                return (
                  <Link
                    key={q.id}
                    to={done ? "/ket-qua/$quizId" : "/trac-nghiem/$quizId"}
                    params={{ quizId: q.id }}
                    className="rounded-[20px] bg-card p-4 shadow-border transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover"
                  >
                    <p className="font-display font-semibold text-navy">{q.name}</p>
                    <p className="mt-1 text-xs text-muted">{done ? "Đã có kết quả" : "Chưa làm"}</p>
                  </Link>
                );
              })}
            </div>
          </section>
          {merged ? (
            <ResultView result={merged} profileContext="current" />
          ) : (
            <div className="mx-auto max-w-lg px-4 py-16 text-center">
              <h2 className="font-display text-2xl font-semibold text-navy">Chưa có hồ sơ</h2>
              <p className="mt-2 text-muted">Hoàn thành một bài test để dựng chân dung đầu tiên.</p>
              <Button asChild className="mt-6">
                <Link to="/trac-nghiem">Chọn bài trắc nghiệm</Link>
              </Button>
            </div>
          )}
        </>
      )}
    </SiteShell>
  );
}
