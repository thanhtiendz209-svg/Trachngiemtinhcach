import { useEffect, useState } from "react";

const LINES = [
  "Đang tổng hợp câu trả lời…",
  "Đang phân tích xu hướng tính cách…",
  "Đang xác định nhóm nổi bật…",
  "Đang xây dựng hồ sơ của bạn…",
];

const FLOAT = ["INFP", "ENTJ", "ISFJ", "ESTP", "INTJ", "ENFP"];

export function AnalysisScreen({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const t0 = Date.now();
    const total = 4200;
    const id = window.setInterval(() => {
      const p = Math.min(100, Math.round(((Date.now() - t0) / total) * 100));
      setPct(p);
      setLine(Math.min(3, Math.floor(p / 25)));
      if (p >= 100) {
        window.clearInterval(id);
        window.setTimeout(onDone, 280);
      }
    }, 50);
    return () => window.clearInterval(id);
  }, [onDone]);

  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="pointer-events-none absolute inset-0 hero-wash opacity-80" />
      <div className="relative grid size-28 place-items-center">
        <svg viewBox="0 0 96 96" className="absolute inset-0 size-28 -rotate-90">
          <circle cx="48" cy="48" r="40" fill="none" className="stroke-ice" strokeWidth="6" />
          <circle
            cx="48"
            cy="48"
            r="40"
            fill="none"
            className="stroke-cyan"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 40}
            strokeDashoffset={2 * Math.PI * 40 * (1 - pct / 100)}
          />
        </svg>
        <span className="font-display text-xl font-semibold tabular-nums text-navy">{pct}%</span>
      </div>
      <h1 className="relative mt-8 font-display text-2xl font-semibold text-navy sm:text-3xl">
        Đang phân tích kết quả của bạn…
      </h1>
      <p className="relative mt-3 min-h-6 text-muted" aria-live="polite">
        {LINES[line]}
      </p>
      <div className="relative mt-10 flex max-w-md flex-wrap justify-center gap-3">
        {FLOAT.map((id, i) => (
          <span
            key={id}
            className="float-slow rounded-full bg-card px-3 py-1.5 font-display text-xs font-semibold text-navy shadow-border"
            style={{ animationDelay: `${i * 0.35}s` }}
          >
            {id}
          </span>
        ))}
      </div>
    </div>
  );
}
