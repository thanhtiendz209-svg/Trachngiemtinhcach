import { Link } from "@tanstack/react-router";
import { TypeImage } from "@/components/art/TypePortrait";
import { TypeCard } from "@/components/personality/TypeCard";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { compatibleIds } from "@/data/compat";
import { PERSONALITIES, getPersonality } from "@/data/personalities";
import type { PersonalityType } from "@/data/types";

export function TypeDetail({ type }: { type: PersonalityType }) {
  const related = PERSONALITIES.filter((p) => p.group === type.group && p.id !== type.id);
  const compatible = compatibleIds(type.id)
    .map((id) => getPersonality(id))
    .filter((p): p is PersonalityType => Boolean(p));

  return (
    <article>
      <section className="hero-wash">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] shadow-border-hover">
              <TypeImage
                id={type.id}
                src={type.image}
                alt={`${type.id} ${type.name}`}
                priority
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal delay={80}>
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-azure">{type.id}</p>
              <h1 className="mt-2 font-display text-4xl font-semibold text-navy">{type.name}</h1>
              <p className="mt-2 text-lg text-azure">{type.slogan}</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 leading-relaxed text-muted">{type.description}</p>
            </Reveal>
            <Reveal delay={280} className="mt-6 flex flex-wrap gap-2">
              {type.highlights.map((h) => (
                <span key={h} className="rounded-full bg-card px-3 py-1.5 text-sm shadow-border">
                  {h}
                </span>
              ))}
            </Reveal>
            <Reveal delay={340} className="mt-6 no-print">
              <Button asChild>
                <Link to="/trac-nghiem/$quizId" params={{ quizId: "mbti" }}>
                  Làm trắc nghiệm MBTI
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-navy">Điểm nổi bật</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {type.highlights.map((h, i) => (
            <Reveal key={h} delay={70 + i * 70}>
              <article className="rounded-[20px] bg-card p-5 shadow-border">
                <p className="font-display text-sm font-semibold tabular-nums text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-medium text-navy">{h}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist py-12">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
          {[
            ["Cách bạn thường suy nghĩ", type.thinking],
            ["Cách bạn tương tác", type.interacting],
            ["Cách bạn ra quyết định", type.deciding],
            ["Cách bạn học tập", type.learning],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="h-full rounded-[24px] bg-card p-6 shadow-border">
                <h2 className="font-display text-lg font-semibold text-navy">{t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6">
        <Reveal>
          <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
            <h2 className="font-display text-xl font-semibold text-navy">Điểm mạnh</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {type.strengths.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                  {s}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
            <h2 className="font-display text-xl font-semibold text-navy">Điểm cần lưu ý</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {type.improvements.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-azure" />
                  {s}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={40}>
          <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
            <h2 className="font-display text-xl font-semibold text-navy">Môi trường phù hợp</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{type.environment}</p>
          </article>
        </Reveal>
        <Reveal delay={120}>
          <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
            <h2 className="font-display text-xl font-semibold text-navy">Nhóm nghề tham khảo</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {type.careers.map((c) => (
                <span key={c} className="rounded-full bg-ice px-3 py-1.5 text-sm text-navy">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">{type.note}</p>
          </article>
        </Reveal>
      </section>

      {compatible.length ? (
        <section className="bg-mist py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-navy">Nhóm hay cộng hưởng</h2>
              <p className="mt-2 text-sm text-muted">Gợi ý làm việc / học tập cùng — không phải ‘định mệnh’.</p>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {compatible.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <TypeCard type={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-navy">Cùng nhóm với {type.id}</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((o, i) => (
            <Reveal key={o.id} delay={i * 50}>
              <TypeCard type={o} />
            </Reveal>
          ))}
        </div>
        <Button asChild variant="ghost" className="mt-6 px-0">
          <Link to="/nhom-tinh-cach">Đóng · Về lưới 16 nhóm</Link>
        </Button>
      </section>
    </article>
  );
}
