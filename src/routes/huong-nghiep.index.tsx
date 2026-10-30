import { Link, createFileRoute } from "@tanstack/react-router";
import { CAREER_ICONS } from "@/components/career/career-icons";
import { HollandStrip } from "@/components/home/HollandStrip";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { UniversityExplorer } from "@/components/university/UniversityExplorer";
import { CAREERS, careerMatch } from "@/data/careers";
import { RIASEC_TYPES } from "@/data/riasec";
import { UNIVERSITY_DISCLAIMER } from "@/lib/riasec";
import { useMergedProfile } from "@/lib/use-quiz-status";

export const Route = createFileRoute("/huong-nghiep/")({ component: CareerPage });

function CareerPage() {
  const profile = useMergedProfile();
  const riasec = profile?.riasec;
  const list = CAREERS.map((c) => ({
    ...c,
    match: profile ? careerMatch(c, profile.mbti, riasec?.code, riasec?.scores) : null,
  })).sort((a, b) => (b.match ?? 0) - (a.match ?? 0));

  return (
    <SiteShell>
      <div className="hero-wash">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Hướng nghiệp</p>
            <h1 className="mt-2 max-w-2xl font-display text-3xl font-semibold text-navy sm:text-4xl">
              Khám phá trường Đại học & hướng đi phù hợp
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              Lọc 126 trường theo khu vực, ngành và mức phù hợp RIASEC — rồi xem gợi ý nghề như bản đồ, không như
              lệnh.
            </p>
            <Button asChild variant="secondary" className="mt-5">
              <Link to="/truong-dai-hoc">Tra cứu ngành & điểm của từng trường</Link>
            </Button>
          </Reveal>
        </div>
      </div>

      <UniversityExplorer
        riasec={riasec}
        heading="Khám phá trường Đại học"
      />

      <section id="nganh-nghe" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-navy">Gợi ý ngành nghề</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">{UNIVERSITY_DISCLAIMER}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {list.map((c, i) => {
            const Icon = CAREER_ICONS[c.icon];
            return (
              <Reveal key={c.id} delay={i * 40}>
                <article className="flex h-full flex-col rounded-[24px] bg-card p-6 shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-[14px] bg-ice text-navy">
                      <Icon className="size-5" />
                    </span>
                    {c.match != null ? (
                      <span className="font-display text-sm font-semibold tabular-nums text-azure">{c.match}%</span>
                    ) : null}
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold text-navy">{c.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
                  {c.match != null ? (
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ice">
                      <div className="bar-fill h-full bg-cyan" style={{ width: `${c.match}%` }} />
                    </div>
                  ) : null}
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-azure">Nhóm hay xuất hiện</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.types.map((t) => (
                      <Link
                        key={t}
                        to="/nhom-tinh-cach/$typeId"
                        params={{ typeId: t }}
                        className="rounded-full bg-ice px-2.5 py-1 text-xs font-medium text-navy"
                      >
                        {t}
                      </Link>
                    ))}
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
      <div className="sr-only">
        {RIASEC_TYPES.map((t) => (
          <span key={t.id} id={t.id}>
            {t.name}
          </span>
        ))}
      </div>
      <HollandStrip />
    </SiteShell>
  );
}

