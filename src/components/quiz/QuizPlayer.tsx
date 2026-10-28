import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { questionsFor } from "@/data/questions";
import type { QuizMeta, QuizResult } from "@/data/types";
import { scoreQuiz } from "@/lib/quiz-engine";
import { clearProgress, loadProgress, loadResult, saveProgress, saveResult } from "@/lib/storage";
import { cn } from "@/lib/utils";
import { AnalysisScreen } from "./AnalysisScreen";

export function QuizPlayer({ quiz }: { quiz: QuizMeta }) {
  const questions = useMemo(() => questionsFor(quiz.id), [quiz.id]);
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(() => Array(questions.length).fill(-1));
  const [dir, setDir] = useState<"next" | "back">("next");
  const [phase, setPhase] = useState<"gate" | "intro" | "quiz" | "analyzing">("quiz");
  const [savedResult, setSavedResult] = useState<QuizResult | null>(null);
  const [error, setError] = useState("");
  const [animKey, setAnimKey] = useState(0);
  const autoRef = useRef<number>(0);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const saved = loadProgress(quiz.id);
    const existing = loadResult(quiz.id);
    setSavedResult(existing);
    const partial = Boolean(saved && saved.answers.length === questions.length && saved.answers.some((a) => a >= 0));
    if (partial && saved) {
      setAnswers(saved.answers);
      setIndex(Math.min(saved.index, questions.length - 1));
      setPhase("gate");
    } else if (existing) {
      setAnswers(Array(questions.length).fill(-1));
      setIndex(0);
      setPhase("gate");
    } else {
      setAnswers(Array(questions.length).fill(-1));
      setIndex(0);
      setPhase("intro");
    }
    setReady(true);
    return () => window.clearTimeout(autoRef.current);
  }, [quiz.id, questions.length]);

  useEffect(() => {
    if (!ready || phase !== "quiz") return;
    saveProgress({
      quizId: quiz.id,
      index,
      answers,
      updatedAt: new Date().toISOString(),
    });
  }, [answers, index, quiz.id, ready, phase]);

  const q = questions[index];
  const selected = answers[index] ?? -1;
  const pct = Math.round((answers.filter((a) => a >= 0).length / questions.length) * 100);
  const last = index === questions.length - 1;
  const answeredCount = answers.filter((a) => a >= 0).length;

  const go = useCallback((nextIndex: number, d: "next" | "back") => {
    window.clearTimeout(autoRef.current);
    setDir(d);
    setAnimKey((k) => k + 1);
    setIndex(nextIndex);
    setError("");
  }, []);

  const choose = (optIndex: number) => {
    setError("");
    const i = indexRef.current;
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = optIndex;
      return next;
    });
    if (i >= questions.length - 1) return;
    window.clearTimeout(autoRef.current);
    autoRef.current = window.setTimeout(() => {
      go(i + 1, "next");
    }, 420);
  };

  const continueNext = () => {
    window.clearTimeout(autoRef.current);
    if ((answers[index] ?? -1) < 0) {
      setError("Hãy chọn một đáp án trước khi tiếp tục.");
      return;
    }
    if (last) {
      setPhase("analyzing");
      return;
    }
    go(index + 1, "next");
  };

  const finish = useCallback(() => {
    const result = scoreQuiz(quiz.id, answers);
    if (!result) return;
    saveResult(result);
    void navigate({ to: "/ket-qua/$quizId", params: { quizId: quiz.id } });
  }, [answers, navigate, quiz.id]);

  const startFresh = () => {
    window.clearTimeout(autoRef.current);
    clearProgress(quiz.id);
    setAnswers(Array(questions.length).fill(-1));
    setIndex(0);
    setAnimKey((k) => k + 1);
    setDir("next");
    setPhase("intro");
    setError("");
  };

  useEffect(() => {
    if (phase !== "quiz") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      const n = Number(e.key);
      if (n >= 1 && n <= 9 && q && n <= q.options.length) {
        e.preventDefault();
        choose(n - 1);
      }
      if (e.key === "Enter" || e.key === "ArrowRight") {
        e.preventDefault();
        continueNext();
      }
      if (e.key === "ArrowLeft" && indexRef.current > 0) {
        e.preventDefault();
        go(indexRef.current - 1, "back");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!ready) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="skeleton h-3 w-full rounded-full" />
        <div className="skeleton mt-8 h-40 rounded-[24px]" />
      </div>
    );
  }

  if (phase === "gate") {
    const resuming = answeredCount > 0;
    return (
      <div className="flex min-h-dvh flex-col bg-paper">
        <header className="border-b border-line px-4 py-3">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <Logo />
            <Link to="/trac-nghiem" className="text-sm font-medium text-muted hover:text-navy">
              Thoát
            </Link>
          </div>
        </header>
        <div className="mx-auto flex w-full max-w-lg flex-1 items-center px-4 py-12">
          <div className="w-full rounded-[28px] bg-card p-6 shadow-border sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">Trắc nghiệm {quiz.name}</p>
            <h1 className="mt-2 font-display text-2xl font-semibold text-navy">
              {resuming ? "Tiếp tục bài đang làm dở?" : "Bạn đã có một hồ sơ rồi"}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {resuming
                ? `Bạn đang ở câu ${String(Math.min(index + 1, questions.length)).padStart(2, "0")} / ${questions.length}. Câu trả lời trước đó vẫn được giữ.`
                : "Làm lại sẽ tạo hồ sơ mới trên thiết bị này. Hồ sơ cũ vẫn xem được cho đến khi bạn hoàn thành bài mới."}
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {resuming ? (
                <Button onClick={() => setPhase("quiz")} className="w-full">
                  Tiếp tục
                  <ArrowRight className="size-4" />
                </Button>
              ) : null}
              {savedResult ? (
                <Button asChild variant={resuming ? "secondary" : "primary"} className="w-full">
                  <Link to="/ket-qua/$quizId" params={{ quizId: quiz.id }}>
                    Xem kết quả đã lưu
                  </Link>
                </Button>
              ) : null}
              <Button variant="secondary" onClick={startFresh} className="w-full">
                <RotateCcw className="size-4" />
                Làm lại từ đầu
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "intro") {
    return (
      <div className="flex min-h-dvh flex-col bg-paper">
        <header className="border-b border-line px-4 py-3">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <Logo />
            <Link to="/trac-nghiem" className="text-sm font-medium text-muted hover:text-navy">
              Thoát
            </Link>
          </div>
        </header>
        <div className="mx-auto flex w-full max-w-2xl flex-1 items-center px-4 py-10">
          <article className="w-full overflow-hidden rounded-[28px] bg-card shadow-border">
            <img src={quiz.image} alt="" loading="lazy" decoding="async" className="aspect-[16/8] w-full object-cover" />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">Trắc nghiệm {quiz.name}</p>
              <h1 className="mt-2 font-display text-2xl font-semibold text-navy">{quiz.tagline}</h1>
              <p className="mt-3 text-sm leading-relaxed text-muted">{quiz.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink">
                <li>{quiz.questionCount} câu · {quiz.duration}</li>
                <li>Một câu một nhịp — có thể quay lại</li>
                <li>Tiến độ lưu trên máy bạn, không cần tài khoản</li>
              </ul>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button onClick={() => setPhase("quiz")} className="w-full sm:w-auto">
                  Bắt đầu
                  <ArrowRight className="size-4" />
                </Button>
                <Button asChild variant="secondary" className="w-full sm:w-auto">
                  <Link to="/trac-nghiem">Chọn bài khác</Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  if (phase === "analyzing") {
    return (
      <div className="min-h-dvh bg-paper">
        <header className="border-b border-line px-4 py-3">
          <Logo />
        </header>
        <AnalysisScreen onDone={finish} />
      </div>
    );
  }

  if (!q) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="font-display text-2xl font-semibold text-navy">Không tải được câu hỏi</h1>
        <Button asChild className="mt-6">
          <Link to="/trac-nghiem">Về thư viện</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <header className="border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Logo />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={startFresh}
              className="hidden text-sm font-medium text-muted transition-colors duration-150 hover:text-navy sm:inline"
            >
              Làm lại
            </button>
            <Link
              to="/trac-nghiem"
              className="text-sm font-medium text-muted transition-colors duration-150 hover:text-navy"
            >
              Thoát
            </Link>
          </div>
        </div>
      </header>
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">Trắc nghiệm {quiz.name}</p>
        <div className="mt-3 flex items-end justify-between gap-3">
          <p className="font-display text-sm font-semibold tabular-nums text-navy">
            Câu {String(index + 1).padStart(2, "0")} / {questions.length}
          </p>
          <p className="text-sm tabular-nums text-muted">{pct}%</p>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-ice">
          <div
            className="progress-bar h-full rounded-full bg-gradient-to-r from-azure to-cyan"
            style={{
              width: `${Math.max(6, ((index + (selected >= 0 ? 1 : 0)) / questions.length) * 100)}%`,
            }}
          />
        </div>

        <div key={animKey} className={cn("mt-8", dir === "next" ? "q-enter-next" : "q-enter-back")}>
          <article className="rounded-[28px] bg-card p-5 shadow-border sm:p-8">
            <p className="text-xs font-semibold tabular-nums text-cyan">{String(index + 1).padStart(2, "0")}</p>
            <h1 className="mt-2 font-display text-2xl font-semibold leading-snug text-navy sm:text-[1.75rem]">
              {q.text}
            </h1>
            {q.hint ? <p className="mt-2 text-sm text-muted">{q.hint}</p> : null}
            <div className="mt-6 grid gap-3">
              {q.options.map((opt, i) => {
                const on = selected === i;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => choose(i)}
                    className={cn("option-card flex min-h-14 items-start gap-3 rounded-[18px] border px-4 py-3.5 text-left", on && "is-on")}
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border text-[11px] font-semibold tabular-nums transition-[background-color,border-color,color] duration-150",
                        on ? "border-azure bg-azure text-paper" : "border-line text-muted",
                      )}
                    >
                      {on ? <Check className="size-3.5" strokeWidth={3} /> : i + 1}
                    </span>
                    <span className="text-[0.95rem] leading-snug text-ink">{opt.label}</span>
                  </button>
                );
              })}
            </div>
            {error ? (
              <p className="mt-4 text-sm text-danger" role="alert">
                {error}
              </p>
            ) : (
              <p className="mt-4 text-xs text-muted">Phím 1–{q.options.length} để chọn · Enter để tiếp tục</p>
            )}
          </article>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <Button variant="secondary" onClick={() => go(index - 1, "back")} disabled={index === 0} className="min-w-28">
            <ArrowLeft className="size-4" />
            Quay lại
          </Button>
          <Button onClick={continueNext} className="min-w-32">
            {last ? "Xem kết quả" : "Tiếp tục"}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
