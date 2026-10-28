import { Reveal } from "@/components/shared/Reveal";

const AXES = [
  { key: "energy" as const, left: "Hướng nội", right: "Hướng ngoại", leftCode: "I", rightCode: "E" },
  { key: "sensing" as const, left: "Trực giác", right: "Giác quan", leftCode: "N", rightCode: "S" },
  { key: "thinking" as const, left: "Cảm xúc", right: "Lý trí", leftCode: "F", rightCode: "T" },
  { key: "judging" as const, left: "Linh hoạt", right: "Nguyên tắc", leftCode: "P", rightCode: "J" },
];

export function AxisBars({
  axes,
}: {
  axes: { energy: number; sensing: number; thinking: number; judging: number };
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
      <Reveal>
        <h2 className="font-display text-xl font-semibold text-navy">Hai cực chi tiết</h2>
        <p className="mt-2 text-sm text-muted">Điểm đánh dấu là chỗ bạn nghiêng trên mỗi trục.</p>
      </Reveal>
      <div className="mt-6 space-y-5">
        {AXES.map((a, i) => {
          const rightPct = axes[a.key];
          return (
            <Reveal key={a.key} delay={80 + i * 80}>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-muted">
                    {a.left} <span className="font-display font-semibold text-navy">{a.leftCode}</span>
                  </span>
                  <span className="text-muted">
                    <span className="font-display font-semibold text-navy">{a.rightCode}</span> {a.right}
                  </span>
                </div>
                <div className="relative h-3 rounded-full bg-ice">
                  <div
                    className="bar-fill absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan/50 to-azure/80"
                    style={{ width: `${rightPct}%`, animationDelay: `${i * 80}ms` }}
                  />
                  <span
                    className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy shadow-border"
                    style={{ left: `${rightPct}%` }}
                  />
                </div>
                <p className="mt-1 text-right text-xs tabular-nums text-muted">{rightPct}% {a.rightCode}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
