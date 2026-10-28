import { Reveal } from "@/components/shared/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Chọn bài test",
    body: "MBTI, RIASEC, Big Five hoặc hồ sơ tổng hợp — chọn nhịp bạn muốn đi.",
  },
  {
    n: "02",
    title: "Trả lời từng câu",
    body: "Một câu một nhịp, có thể quay lại. Tiến độ được giữ trên máy bạn.",
  },
  {
    n: "03",
    title: "Đọc kết quả theo lớp",
    body: "Không dồn hết một lúc. Kéo xuống để mở điểm mạnh, cách nghĩ, gợi ý nghề.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Cách hoạt động</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-navy">Ba bước, không vội</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={80 + i * 100}>
            <article className="rounded-[24px] bg-card p-6 shadow-border">
              <p className="font-display text-sm font-semibold tabular-nums text-cyan">{s.n}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
