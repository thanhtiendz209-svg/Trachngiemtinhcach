import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ResultView } from "@/components/result/ResultView";
import { Button } from "@/components/ui/button";
import type { QuizResult } from "@/data/types";
import { loadResult } from "@/lib/storage";

export const Route = createFileRoute("/ket-qua/$quizId")({
  component: ResultRoute,
});

function ResultRoute() {
  const { quizId } = Route.useParams();
  const [result, setResult] = useState<QuizResult | null | undefined>(undefined);

  useEffect(() => {
    setResult(loadResult(quizId));
  }, [quizId]);

  if (result === undefined) {
    return (
      <SiteShell>
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="skeleton h-48 rounded-[28px]" />
        </div>
      </SiteShell>
    );
  }

  if (!result) {
    return (
      <SiteShell>
        <div className="mx-auto max-w-lg px-4 py-24 text-center">
          <h1 className="font-display text-2xl font-semibold text-navy">Chưa có kết quả</h1>
          <p className="mt-2 text-muted">Hãy hoàn thành bài test để xem hồ sơ.</p>
          <Button asChild className="mt-6">
            <Link to="/trac-nghiem/$quizId" params={{ quizId }}>
              Làm trắc nghiệm
            </Link>
          </Button>
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <ResultView result={result} />
    </SiteShell>
  );
}
