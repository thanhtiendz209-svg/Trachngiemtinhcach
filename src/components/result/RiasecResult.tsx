import { Link } from "@tanstack/react-router";
import { CAREER_ICONS } from "@/components/career/career-icons";
import { Reveal } from "@/components/shared/Reveal";
import { UniversityExplorer } from "@/components/university/UniversityExplorer";
import { Button } from "@/components/ui/button";
import { CAREERS, careerMatch } from "@/data/careers";
import { getRiasec } from "@/data/riasec";
import { RIASEC_GROUP_MAX } from "@/data/riasec-questions";
import type { RiasecScores } from "@/data/types";
import {
  FIT_NOTE,
  RIASEC_DISCLAIMER,
  RIASEC_KEYS,
  UNIVERSITY_DISCLAIMER,
  getRiasecCombination,
  rankRiasec,
} from "@/lib/riasec";

export function RiasecResult({ riasec, showUniversity = true }: { riasec: RiasecScores; showUniversity?: boolean }) {
  const combo = getRiasecCombination(riasec.code);
  const ranked = rankRiasec(riasec.scores);
  const top3 = ranked.slice(0, 3);
  const careers = CAREERS.map((c) => ({
    ...c,
    match: careerMatch(c, undefined, riasec.code, riasec.scores),
  })).sort((a, b) => b.match - a.match);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">Mã RIASEC</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy">{riasec.code}</h2>
          <p className="mt-2 font-display text-lg text-azure">{combo.title}</p>
          {combo.source === "fallback" ? (
            <p className="mt-2 rounded-[16px] bg-ice px-4 py-3 text-sm text-muted">
              Nội dung tổ hợp {riasec.code} chưa có trong tài liệu Batch — đang dùng fallback từ ba nhóm thành phần.
            </p>
          ) : null}
        </Reveal>

        <div className="mt-8">
          <h3 className="font-display text-xl font-semibold text-navy">Điểm 6 nhóm</h3>
          <div className="mt-4 space-y-3">
            {RIASEC_KEYS.map((id, i) => {
              const t = getRiasec(id);
              const v = riasec.scores[id] ?? 0;
              const max = riasec.maxScores?.[id] ?? RIASEC_GROUP_MAX[id] ?? 50;
              const w = Math.round((v / Math.max(1, max)) * 100);
              return (
                <Reveal key={id} delay={i * 40}>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-navy">
                        {id} · {t?.name}
                      </span>
                      <span className="tabular-nums text-muted">
                        {v}/{max}
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-ice">
                      <div className="bar-fill h-full rounded-full bg-cyan" style={{ width: `${w}%` }} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold text-navy">Top 3 nhóm</h3>
          <p className="mt-1 text-sm text-muted">
            Kết quả: <span className="font-display font-semibold text-navy">{riasec.code}</span>
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {top3.map((letter, i) => {
              const t = getRiasec(letter);
              const v = riasec.scores[letter] ?? 0;
              const max = riasec.maxScores?.[letter] ?? 50;
              return (
                <Reveal key={letter} delay={i * 80}>
                  <article className="overflow-hidden rounded-[20px] bg-card shadow-border">
                    {t?.image ? <img src={t.image} alt="" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover" /> : null}
                    <div className="p-5">
                      <p className="font-display text-2xl font-semibold text-azure">{letter}</p>
                      <h4 className="mt-1 font-semibold text-navy">{t?.name}</h4>
                      <p className="mt-1 text-sm tabular-nums text-muted">
                        {v}/{max}
                      </p>
                      <p className="mt-1 text-sm text-muted">{t?.summary}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">Câu nói đặc trưng</p>
            <blockquote className="mt-3 font-display text-2xl font-semibold leading-snug text-navy">
              “{combo.quote}”
            </blockquote>
          </Reveal>
          <Reveal delay={80} className="mt-8">
            <h3 className="font-display text-xl font-semibold text-navy">Tổng quan tính cách</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">{combo.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6">
        <Reveal>
          <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
            <h3 className="font-display text-xl font-semibold text-navy">Điểm mạnh</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {combo.strengths.map((s) => (
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
            <h3 className="font-display text-xl font-semibold text-navy">Điểm cần phát triển</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {combo.improvements.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-azure" />
                  {s}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </section>

      <section className="bg-mist py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h3 className="font-display text-xl font-semibold text-navy">Định hướng nghề nghiệp</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{combo.advice}</p>
          </Reveal>
          <div className="mt-5 flex flex-wrap gap-2">
            {combo.careers.map((c) => (
              <span key={c} className="rounded-full bg-card px-3 py-1.5 text-sm text-navy shadow-border">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <h3 className="font-display text-xl font-semibold text-navy">Gợi ý ngành</h3>
          <p className="mt-2 text-sm text-muted">{FIT_NOTE}</p>
        </Reveal>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {careers.slice(0, 6).map((c, i) => {
            const Icon = CAREER_ICONS[c.icon];
            return (
              <Reveal key={c.id} delay={i * 50}>
                <article className="flex h-full flex-col rounded-[20px] bg-card p-5 shadow-border">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-10 place-items-center rounded-[12px] bg-ice text-navy">
                      <Icon className="size-4" />
                    </span>
                    <span className="font-display text-sm font-semibold tabular-nums text-azure">{c.match}%</span>
                  </div>
                  <h4 className="mt-3 font-display font-semibold text-navy">{c.name}</h4>
                  <p className="mt-2 text-sm text-muted">{c.description}</p>
                  <p className="mt-2 text-xs text-muted">Phù hợp về sở thích: {c.match}%</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ice">
                    <div className="bar-fill h-full bg-cyan" style={{ width: `${c.match}%` }} />
                  </div>
                  <Button asChild variant="ghost" className="mt-auto justify-start px-0">
                    <Link to="/huong-nghiep/$careerId" params={{ careerId: c.id }}>
                      Xem thêm
                    </Link>
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {showUniversity ? (
        <div className="bg-mist">
          <UniversityExplorer
            riasec={riasec}
            heading="Gợi ý trường Đại học & ngành phù hợp với tính cách"
            compact
          />
        </div>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <p className="text-sm leading-relaxed text-muted">{RIASEC_DISCLAIMER}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{UNIVERSITY_DISCLAIMER}</p>
      </section>
    </>
  );
}
