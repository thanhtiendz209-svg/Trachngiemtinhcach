import { Reveal } from "@/components/shared/Reveal";

const ITEMS = [
  { key: "energy" as const, label: "Năng lượng", left: "Hướng nội", right: "Hướng ngoại", leftCode: "I", rightCode: "E" },
  { key: "sensing" as const, label: "Nhận thức", left: "Trực giác", right: "Giác quan", leftCode: "N", rightCode: "S" },
  { key: "thinking" as const, label: "Ra quyết định", left: "Cảm xúc", right: "Lý trí", leftCode: "F", rightCode: "T" },
  { key: "judging" as const, label: "Phong cách sống", left: "Linh hoạt", right: "Nguyên tắc", leftCode: "P", rightCode: "J" },
];

function Ring({ value, code }: { value: number; code: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);
  return (
    <div className="relative mx-auto size-[5.5rem]">
      <svg viewBox="0 0 88 88" className="size-[5.5rem] -rotate-90">
        <circle cx="44" cy="44" r={r} fill="none" className="stroke-ice" strokeWidth="8" />
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          className="ring-draw stroke-azure"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ ["--ring" as string]: String(c) }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="font-display text-lg font-semibold leading-none text-navy">{code}</p>
        <p className="mt-1 text-[11px] tabular-nums text-muted">{value}%</p>
      </div>
    </div>
  );
}

export function RadialStats({
  axes,
}: {
  axes: { energy: number; sensing: number; thinking: number; judging: number };
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Reveal>
        <h2 className="font-display text-2xl font-semibold text-navy">Các chỉ số</h2>
        <p className="mt-2 text-sm text-muted">Mức nghiêng về từng cực — không phải điểm tốt hay xấu.</p>
      </Reveal>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {ITEMS.map((item, i) => {
          const right = axes[item.key];
          const useRight = right >= 50;
          const value = useRight ? right : 100 - right;
          const code = useRight ? item.rightCode : item.leftCode;
          const pole = useRight ? item.right : item.left;
          return (
            <Reveal key={item.key} delay={80 + i * 80}>
              <article className="rounded-[24px] bg-card px-3 py-5 text-center shadow-border">
                <Ring value={value} code={code} />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-azure">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-navy">{pole}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
