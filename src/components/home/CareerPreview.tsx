import { Link } from "@tanstack/react-router";
import { CAREER_ICONS } from "@/components/career/career-icons";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { CAREERS } from "@/data/careers";

export function CareerPreview() {
  return (
    <section className="bg-navy py-16 text-paper sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-soft">Hướng đi</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Khám phá hướng đi phù hợp</h2>
          <p className="mt-3 max-w-2xl text-cyan-soft/90">
            Đây là gợi ý tham khảo — không phải lời khẳng định một nghề là “chắc chắn phù hợp”.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {CAREERS.map((c, i) => {
            const Icon = CAREER_ICONS[c.icon];
            return (
              <Reveal key={c.id} delay={50 + i * 40}>
                <Link
                  to="/huong-nghiep/$careerId"
                  params={{ careerId: c.id }}
                  className="block h-full rounded-[20px] bg-white/8 p-4 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/12"
                >
                  <Icon className="size-5 text-cyan-soft" />
                  <h3 className="mt-3 font-display font-semibold">{c.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-paper/70">{c.description}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-8" delay={200}>
          <Button asChild variant="cyan">
            <Link to="/huong-nghiep" hash="bo-loc-truong">
              Khám phá trường Đại học
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
