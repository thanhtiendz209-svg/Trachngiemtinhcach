import { Compass, Sparkles, Target, UserRound } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const CARDS = [
  {
    icon: UserRound,
    title: "Hiểu bản thân",
    body: "Nhìn ra cách bạn nạp năng lượng, nghĩ, quyết và sống — bằng ngôn ngữ đời thường.",
  },
  {
    icon: Sparkles,
    title: "Khám phá điểm mạnh",
    body: "Không phải danh sách khen. Là thứ bạn làm tự nhiên khi không ai nhắc.",
  },
  {
    icon: Compass,
    title: "Khám phá sở thích",
    body: "Việc nào làm bạn thấy sống, không chỉ việc nào nghe ‘hợp thời’.",
  },
  {
    icon: Target,
    title: "Định hướng nghề nghiệp",
    body: "Gợi ý nhóm ngành để tham khảo — bạn vẫn là người chọn hướng đi.",
  },
];

export function IntroCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Vì sao Lumina</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold text-navy">
          Một hành trình, nhiều lớp hiểu
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={80 + i * 90} as="article">
            <div className="group h-full rounded-[24px] bg-card p-5 shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover">
              <span className="grid size-11 place-items-center rounded-[14px] bg-ice text-azure">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
