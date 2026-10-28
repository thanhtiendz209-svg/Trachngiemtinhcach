import { Link } from "@tanstack/react-router";
import { Copy, Printer, Share2 } from "lucide-react";
import { toast } from "sonner";
import { TypeImage } from "@/components/art/TypePortrait";
import { CAREER_ICONS } from "@/components/career/career-icons";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { bigfiveBand, bigfiveCopy, BIGFIVE_TRAITS } from "@/data/bigfive";
import { CAREERS, careerMatch } from "@/data/careers";
import { getPersonality } from "@/data/personalities";
import { getRiasec } from "@/data/riasec";
import { getRiasecCombination } from "@/lib/riasec";
import type { QuizResult } from "@/data/types";
import { resultSubtitle, resultTitle } from "@/lib/quiz-engine";
import { AxisBars } from "./AxisBars";
import { RadialStats } from "./RadialStats";
import { RiasecResult } from "./RiasecResult";

function copyProfile(result: QuizResult) {
  const person = result.mbti ? getPersonality(result.mbti) : undefined;
  const holland = result.riasec ? getRiasec(result.riasec.code[0] ?? "") : undefined;
  const lines = [
    resultTitle(result),
    resultSubtitle(result),
    person?.summary ?? holland?.summary ?? "",
    result.riasec ? `Holland: ${result.riasec.code}` : "",
    "Kết quả mang tính tham khảo — Lumina.",
  ].filter(Boolean);
  void navigator.clipboard.writeText(lines.join("\n")).then(
    () => toast.success("Đã sao chép hồ sơ"),
    () => toast.error("Không sao chép được. Hãy thử lại."),
  );
}

async function shareProfile(result: QuizResult) {
  const title = resultTitle(result);
  const text = `${title} — ${resultSubtitle(result)}`;
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url: window.location.href });
      return;
    }
  } catch {
    /* cancelled */
    return;
  }
  copyProfile(result);
}

export function ResultView({ result }: { result: QuizResult }) {
  const person = result.mbti ? getPersonality(result.mbti) : undefined;
  const topHolland = result.riasec ? getRiasec(result.riasec.code[0] ?? "") : undefined;
  const combo = result.riasec ? getRiasecCombination(result.riasec.code) : undefined;
  const careers = CAREERS.map((c) => ({
    ...c,
    match: careerMatch(c, result.mbti, result.riasec?.code, result.riasec?.scores),
  })).sort((a, b) => b.match - a.match);
  const heroImg = person?.image ?? topHolland?.image ?? (result.bigfive ? "/illustrations/quiz-bigfive.webp" : undefined);
  const heroAlt = person ? `${person.id} ${person.name}` : (topHolland?.name ?? "Hồ sơ");
  const heroSummary =
    person?.summary ??
    combo?.overview ??
    topHolland?.summary ??
    "Đây là chân dung tham khảo dựa trên câu trả lời của bạn. Dùng để soi, không phải để đóng khung.";

  return (
    <div>
      <section className="hero-wash">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] shadow-border-hover">
              {person ? (
                <TypeImage id={person.id} src={person.image} alt={heroAlt} priority className="aspect-square w-full object-cover" />
              ) : heroImg ? (
                <img src={heroImg} alt={heroAlt} fetchPriority="high" decoding="async" className="aspect-square w-full object-cover" />
              ) : (
                <div className="grid aspect-square place-items-center bg-ice font-display text-4xl text-navy">BF</div>
              )}
            </div>
          </Reveal>
          <div>
            <Reveal delay={120}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">Kết quả</p>
              <h1 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">{resultTitle(result)}</h1>
              <p className="mt-2 font-display text-xl text-azure">{resultSubtitle(result)}</p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 max-w-xl text-muted">{heroSummary}</p>
              {person ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {person.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-card px-3 py-1.5 text-sm text-navy shadow-border">
                      {h}
                    </span>
                  ))}
                </div>
              ) : topHolland ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {topHolland.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-card px-3 py-1.5 text-sm text-navy shadow-border">
                      {h}
                    </span>
                  ))}
                </div>
              ) : null}
            </Reveal>
            <Reveal delay={360} className="mt-6 flex flex-wrap gap-3 no-print">
              {person ? (
                <Button asChild>
                  <Link to="/nhom-tinh-cach/$typeId" params={{ typeId: person.id }}>
                    Xem chi tiết nhóm
                  </Link>
                </Button>
              ) : null}
              <Button asChild variant="secondary">
                <Link to="/trac-nghiem/$quizId" params={{ quizId: result.quizId }}>
                  Làm lại bài test
                </Link>
              </Button>
              <Button variant="ghost" type="button" onClick={() => copyProfile(result)}>
                <Copy className="size-4" />
                Sao chép
              </Button>
              <Button variant="ghost" type="button" onClick={() => void shareProfile(result)}>
                <Share2 className="size-4" />
                Chia sẻ
              </Button>
              <Button variant="ghost" type="button" onClick={() => window.print()}>
                <Printer className="size-4" />
                In
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {result.axes ? <RadialStats axes={result.axes} /> : null}
      {result.axes ? <AxisBars axes={result.axes} /> : null}

      {person ? (
        <>
          <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-navy">Điểm nổi bật</h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {person.highlights.map((h, i) => (
                <Reveal key={h} delay={80 + i * 70}>
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
                ["Cách bạn thường suy nghĩ", person.thinking],
                ["Cách bạn tương tác", person.interacting],
                ["Cách bạn ra quyết định", person.deciding],
                ["Cách bạn học tập", person.learning],
              ].map(([t, b], i) => (
                <Reveal key={t} delay={i * 80}>
                  <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
                    <h3 className="font-display text-lg font-semibold text-navy">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{b}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6">
            <Reveal>
              <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
                <h2 className="font-display text-xl font-semibold text-navy">Điểm mạnh</h2>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {person.strengths.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="h-full rounded-[24px] bg-card p-6 shadow-border">
                <h2 className="font-display text-xl font-semibold text-navy">Điểm cần cải thiện</h2>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {person.improvements.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-azure" />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </section>
        </>
      ) : null}

      {result.riasec ? <RiasecResult riasec={result.riasec} /> : null}

      {result.bigfive ? (
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy">Năm chiều Big Five</h2>
            <p className="mt-2 text-sm text-muted">Không có chiều nào tốt hơn — chỉ khác cách bạn vận hành.</p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {BIGFIVE_TRAITS.map((t, i) => {
              const v = result.bigfive?.[t.id] ?? 50;
              const band = bigfiveBand(v);
              const label = band === "high" ? "Cao" : band === "low" ? "Thấp" : "Trung bình";
              return (
                <Reveal key={t.id} delay={i * 60}>
                  <article className="h-full rounded-[24px] bg-card p-5 shadow-border">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-semibold text-navy">{t.name}</h3>
                      <span className="rounded-full bg-ice px-2.5 py-1 text-xs font-semibold tabular-nums text-azure">
                        {v}% · {label}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted">{t.axis}</p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-ice">
                      <div className="bar-fill h-full rounded-full bg-azure" style={{ width: `${v}%` }} />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{bigfiveCopy(t.id, v)}</p>
                    <p className="mt-2 text-xs text-navy">{t.note}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>
      ) : null}

      {!result.riasec ? (
      <section className="bg-mist py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy">Nhóm nghề có thể phù hợp</h2>
            <p className="mt-2 text-sm text-muted">
              Mức phù hợp là ước lượng tham khảo, không phải kết luận nghề nghiệp.
            </p>
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
                    <h3 className="mt-3 font-display font-semibold text-navy">{c.name}</h3>
                    <p className="mt-2 text-sm text-muted">{c.description}</p>
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
        </div>
      </section>
      ) : null}
    </div>
  );
}
