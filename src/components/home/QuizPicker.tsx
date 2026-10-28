import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Compass, Heart, Layers, Map, Sparkles } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { QUIZZES } from "@/data/quizzes";
import { useAllQuizStatus } from "@/lib/use-quiz-status";
import { cn } from "@/lib/utils";

const ICONS = {
  compass: Compass,
  layers: Layers,
  spark: Sparkles,
  heart: Heart,
  map: Map,
};

export function QuizPicker({ heading = "Chọn bài trắc nghiệm phù hợp với bạn" }: { heading?: string }) {
  const status = useAllQuizStatus();

  return (
    <section className="bg-mist/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Bài test</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold text-navy">{heading}</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Làm từng câu một, lưu tiến độ trên máy bạn, xem lại kết quả bất cứ lúc nào.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {QUIZZES.map((q, i) => {
            const Icon = ICONS[q.icon];
            const st = status[q.id];
            const featured = q.id === "combined";
            return (
              <Reveal
                key={q.id}
                delay={70 + i * 70}
                as="article"
                className={featured ? "md:col-span-2" : undefined}
              >
                <article
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-[24px] bg-card shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover",
                    featured && "md:flex-row",
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden bg-ice",
                      featured ? "aspect-[16/10] md:aspect-auto md:w-[46%]" : "aspect-[16/10]",
                    )}
                  >
                    <img
                      src={q.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 grid size-10 place-items-center rounded-[14px] bg-card/95 text-navy shadow-border">
                      <Icon className="size-4" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-xl font-semibold text-navy">{q.name}</h3>
                    <p className="mt-1 text-sm text-azure">{q.tagline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{q.description}</p>
                    <p className="mt-3 flex flex-wrap gap-3 text-xs font-medium text-muted">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3.5" /> {q.duration}
                      </span>
                      <span>{q.questionCount} câu hỏi</span>
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      <Button asChild variant="primary" className="w-full sm:w-auto">
                        <Link to="/trac-nghiem/$quizId" params={{ quizId: q.id }}>
                          {st?.progress ? "Tiếp tục" : "Bắt đầu"}
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                      {st?.result ? (
                        <Button asChild variant="secondary" className="w-full sm:w-auto">
                          <Link to="/ket-qua/$quizId" params={{ quizId: q.id }}>
                            Xem kết quả
                          </Link>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
