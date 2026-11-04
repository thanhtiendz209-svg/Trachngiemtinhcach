import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, Compass } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { RIASEC_MAP } from "@/data/riasec";
import type { RiasecCombination } from "@/data/types";
import { RIASEC_PROFILES } from "@/lib/riasec-profiles";
import { RiasecCodeIllustration } from "./RiasecCodeIllustration";

const RANK_LABELS = ["Xu hướng chính", "Xu hướng hỗ trợ", "Xu hướng bổ sung"];

export function RiasecProfileDetail({ profile }: { profile: RiasecCombination }) {
  const components = profile.code.split("").map((letter) => RIASEC_MAP[letter]);
  const related = RIASEC_PROFILES.filter(
    (item) =>
      item.code !== profile.code && [...item.code].every((letter) => profile.code.includes(letter)),
  );

  return (
    <article data-riasec-profile-detail={profile.code}>
      <div className="hero-wash">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14">
          <Link
            to="/nhom-tinh-cach"
            search={{ tab: "riasec" }}
            hash="ho-so-riasec"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-azure hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Về thư viện RIASEC
          </Link>
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div className="overflow-hidden rounded-[28px] bg-card shadow-border-hover">
                <RiasecCodeIllustration code={profile.code} priority />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
                Hồ sơ RIASEC kết hợp
              </p>
              <p className="mt-3 font-display text-4xl font-semibold tracking-[0.18em] text-navy sm:text-5xl">
                {profile.code}
              </p>
              <h1 className="mt-4 font-display text-2xl font-semibold leading-snug text-navy sm:text-3xl">
                {profile.title}
              </h1>
              <p className="mt-3 text-lg italic leading-relaxed text-azure">{profile.quote}</p>
              <div className="mt-5 flex flex-wrap gap-2" aria-label="Thứ tự ba nhóm sở thích">
                {components.map((type, index) => (
                  <span
                    key={type.id}
                    className="rounded-full bg-card px-3 py-2 text-sm text-navy shadow-border"
                  >
                    <span className="font-semibold text-azure">
                      {index + 1}. {type.id}
                    </span>{" "}
                    · {type.name}
                  </span>
                ))}
              </div>
              <Button asChild className="mt-6">
                <Link to="/trac-nghiem/$quizId" params={{ quizId: "riasec" }}>
                  Tìm mã RIASEC của bạn
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
            Hiểu sự kết hợp
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-navy">Chân dung sở thích</h2>
          <p className="mt-4 max-w-4xl whitespace-pre-line leading-relaxed text-muted">
            {profile.overview}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Hồ sơ mô tả xu hướng sở thích nghề nghiệp; hãy đối chiếu với trải nghiệm, năng lực và
            điều kiện thực tế của bạn.
          </p>
        </Reveal>
      </section>

      <section className="bg-mist py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Ba xu hướng trong hồ sơ
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              Chữ đầu thể hiện xu hướng chính. Hai chữ tiếp theo bổ sung cách bạn tiếp cận hoạt
              động, con người và công việc. Đổi thứ tự sẽ thay đổi trọng tâm của hồ sơ.
            </p>
          </Reveal>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {components.map((type, index) => {
              const facet = profile.facets?.find((item) => item.letter === type.id);
              return (
                <li
                  key={type.id}
                  className="rounded-[24px] bg-card p-5 shadow-border"
                  data-riasec-profile-letter={type.id}
                  data-riasec-rank={index + 1}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-azure">
                    {index + 1} · {RANK_LABELS[index]}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy">
                    {type.id} · {type.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {facet?.description ?? type.summary}
                  </p>
                  {facet ? (
                    <dl className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                      <div>
                        <dt className="font-semibold text-navy">Thế mạnh</dt>
                        <dd className="mt-1">{facet.strength}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy">Điểm cần lưu ý</dt>
                        <dd className="mt-1">{facet.caution}</dd>
                      </div>
                    </dl>
                  ) : null}
                  <Link
                    to="/nhom-tinh-cach/$typeId"
                    params={{ typeId: type.id }}
                    className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-azure hover:underline"
                  >
                    Tìm hiểu nhóm {type.id}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2">
        {(
          [
            ["Điểm mạnh", profile.strengths],
            ["Điểm cần lưu ý", profile.improvements],
          ] as const
        ).map(([title, points]) => (
          <div key={title} className="rounded-[24px] bg-card p-5 shadow-border sm:p-6">
            <h2 className="font-display text-xl font-semibold text-navy">{title}</h2>
            {title === "Điểm mạnh" && profile.strengthsIntroduction ? (
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted">
                {profile.strengthsIntroduction}
              </p>
            ) : null}
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {points.map((point, index) => (
                <li key={`${title}-${index}`} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-azure"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-mist py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Môi trường và cách học
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Dùng ba góc nhìn dưới đây để chọn một hoạt động học tập hoặc trải nghiệm nghề phù hợp
              với bạn.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {components.map((type) => (
              <div key={type.id} className="rounded-[24px] bg-card p-5 shadow-border">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {type.id} · {type.name}
                </h3>
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-azure">
                  <Compass className="size-4" aria-hidden="true" />
                  Môi trường
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{type.environment}</p>
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-azure">
                  <BookOpen className="size-4" aria-hidden="true" />
                  Cách học
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{type.learning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">Nhóm nghề tham khảo</h2>
          {profile.careersIntroduction ? (
            <p className="mt-4 text-sm leading-relaxed text-muted">{profile.careersIntroduction}</p>
          ) : null}
          <ul className="mt-5 flex flex-wrap gap-2">
            {profile.careers.map((career, index) => (
              <li
                key={`${career}-${index}`}
                className="rounded-xl bg-ice px-3 py-2 text-sm leading-relaxed text-navy"
              >
                {career}
              </li>
            ))}
          </ul>
          {profile.careersNote ? (
            <p className="mt-4 text-sm leading-relaxed text-muted">{profile.careersNote}</p>
          ) : null}
          <Button asChild variant="secondary" className="mt-5">
            <Link to="/huong-nghiep">
              Khám phá nghề và trường
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="rounded-[24px] bg-card p-5 shadow-border sm:p-6">
          <h2 className="font-display text-2xl font-semibold text-navy">Hướng phát triển</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{profile.advice}</p>
          {profile.source === "document" ? (
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Nguồn hồ sơ {profile.code}: {profile.sourceDocument}
            </p>
          ) : null}
        </div>
      </section>

      <section className="border-t border-line bg-mist py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Cùng ba nhóm, khác thứ tự
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            So sánh các mã dưới đây để thấy cách thay đổi nhóm đứng đầu làm trọng tâm sở thích khác
            đi.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.code}
                to="/nhom-tinh-cach/riasec/$code"
                params={{ code: item.code }}
                data-riasec-related={item.code}
                className="flex min-h-20 items-start gap-4 rounded-2xl bg-card p-4 text-left shadow-border transition-shadow hover:shadow-border-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-azure"
              >
                <span className="rounded-xl bg-ice px-3 py-2 font-display font-semibold tracking-wide text-azure">
                  {item.code}
                </span>
                <span className="min-w-0 flex-1 text-sm leading-relaxed text-navy">
                  {item.title}
                </span>
                <ArrowRight className="mt-2 size-4 shrink-0 text-azure" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <Button asChild variant="ghost" className="mt-6">
            <Link to="/nhom-tinh-cach" search={{ tab: "riasec" }} hash="ho-so-riasec">
              Khám phá 120 hồ sơ
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
