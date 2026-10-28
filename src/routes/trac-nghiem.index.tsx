import { createFileRoute } from "@tanstack/react-router";
import { QuizPicker } from "@/components/home/QuizPicker";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";

export const Route = createFileRoute("/trac-nghiem/")({ component: QuizzesPage });

function QuizzesPage() {
  return (
    <SiteShell>
      <div className="hero-wash">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Thư viện test</p>
            <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-navy">
              Chọn bài trắc nghiệm phù hợp với bạn
            </h1>
            <p className="mt-3 max-w-xl text-muted">
              Từng câu một, có thể quay lại, kết quả lưu trên thiết bị. Không cần tài khoản.
            </p>
          </Reveal>
        </div>
      </div>
      <QuizPicker heading="Năm bài, một nhịp khám phá" />
    </SiteShell>
  );
}
