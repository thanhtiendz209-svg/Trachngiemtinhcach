import { Link } from "@tanstack/react-router";
import { CAREER_ICONS } from "@/components/career/career-icons";
import { TypeCard } from "@/components/personality/TypeCard";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { getPersonality } from "@/data/personalities";
import { getRiasec } from "@/data/riasec";
import type { CareerField } from "@/data/types";
import { careerMatch, CAREER_MATCH_NOTE, CURRENT_CAREER_PROFILE_NOTE } from "@/lib/career-profile";
import { useMergedProfile } from "@/lib/use-quiz-status";

export function CareerDetail({ career }: { career: CareerField }) {
  const profile = useMergedProfile();
  const match = careerMatch(career, profile);
  const Icon = CAREER_ICONS[career.icon];
  const types = career.types.map((id) => getPersonality(id)).filter(Boolean);

  return (
    <article data-career-id={career.id} data-career-match={match ?? undefined}>
      <section className="hero-wash">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="grid aspect-[5/4] place-items-center rounded-[28px] bg-navy text-cyan-soft shadow-border-hover">
              <div className="text-center">
                <Icon className="mx-auto size-16" />
                <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.18em]">Ngành tham khảo</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal delay={80}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Hướng nghiệp</p>
              <h1 className="mt-2 font-display text-4xl font-semibold text-navy">{career.name}</h1>
              <p className="mt-3 max-w-xl text-muted">{career.description}</p>
            </Reveal>
            {match != null ? (
              <Reveal delay={160} className="mt-5">
                <p className="text-sm text-muted">Mức tương đồng về sở thích từ hồ sơ hiện tại</p>
                <p className="font-display text-3xl font-semibold tabular-nums text-azure">{match}%</p>
                <div className="mt-2 h-2 max-w-xs overflow-hidden rounded-full bg-ice">
                  <div className="bar-fill h-full bg-cyan" style={{ width: `${match}%` }} />
                </div>
                <p className="mt-2 text-xs text-muted">{CURRENT_CAREER_PROFILE_NOTE} {CAREER_MATCH_NOTE}</p>
              </Reveal>
            ) : (
              <Reveal delay={160} className="mt-5">
                <Button asChild>
                  <Link to="/trac-nghiem">Làm trắc nghiệm để xem mức phù hợp</Link>
                </Button>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6">
        <Reveal>
          <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
            <h2 className="font-display text-xl font-semibold text-navy">Vai trò hay gặp</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {career.roles.map((r) => (
                <span key={r} className="rounded-full bg-ice px-3 py-1.5 text-sm text-navy">
                  {r}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
            <h2 className="font-display text-xl font-semibold text-navy">Năng lực nên luyện</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {career.skills.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                  {s}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={40}>
          <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
            <h2 className="font-display text-xl font-semibold text-navy">Hướng học</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{career.study}</p>
          </article>
        </Reveal>
        <Reveal delay={120}>
          <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
            <h2 className="font-display text-xl font-semibold text-navy">Môi trường</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{career.environment}</p>
            <p className="mt-4 text-sm text-navy">{career.note}</p>
          </article>
        </Reveal>
      </section>

      <section className="bg-mist py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy">Nhóm Holland hay xuất hiện</h2>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {career.riasec.map((id, i) => {
              const t = getRiasec(id);
              if (!t) return null;
              return (
                <Reveal key={id} delay={i * 60}>
                  <article className="overflow-hidden rounded-[20px] bg-card shadow-border">
                    <img src={t.image} alt="" loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
                    <div className="p-4">
                      <p className="font-display font-semibold text-azure">
                        {t.id} · {t.name}
                      </p>
                      <p className="mt-1 text-sm text-muted">{t.summary}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-navy">Nhóm tính cách hay gặp</h2>
          <p className="mt-2 text-sm text-muted">Gợi ý — không phải điều kiện vào ngành.</p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {types.slice(0, 6).map((t, i) =>
            t ? (
              <Reveal key={t.id} delay={i * 40}>
                <TypeCard type={t} />
              </Reveal>
            ) : null,
          )}
        </div>
        <Reveal className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/trac-nghiem">Làm trắc nghiệm</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/huong-nghiep">Khám phá ngành khác</Link>
          </Button>
        </Reveal>
      </section>
    </article>
  );
}
