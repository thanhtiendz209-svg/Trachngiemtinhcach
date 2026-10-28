import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";
import { Button } from "@/components/ui/button";
import { getQuiz } from "@/data/quizzes";

export const Route = createFileRoute("/trac-nghiem/$quizId")({
  component: QuizRoute,
});

function QuizRoute() {
  const { quizId } = Route.useParams();
  const quiz = getQuiz(quizId);
  if (!quiz) {
    return (
      <SiteShell>
        <div className="mx-auto max-w-lg px-4 py-24 text-center">
          <h1 className="font-display text-2xl font-semibold text-navy">Không tìm thấy bài test</h1>
          <p className="mt-2 text-muted">Liên kết có thể đã đổi. Chọn lại từ thư viện nhé.</p>
          <Button asChild className="mt-6">
            <Link to="/trac-nghiem">Về thư viện trắc nghiệm</Link>
          </Button>
        </div>
      </SiteShell>
    );
  }
  return <QuizPlayer key={quiz.id} quiz={quiz} />;
}

