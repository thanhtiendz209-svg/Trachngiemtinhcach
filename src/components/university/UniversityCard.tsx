import { memo, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ExternalLink, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADMISSION_FLOOR_SUMMARIES } from "@/data/admission-floor-summaries";
import type { University } from "@/data/types";
import { FIT_NOTE, MISSING_DATA } from "@/lib/riasec";
import { admissionHrefs } from "@/lib/university";
import { cn } from "@/lib/utils";

const scoreFormat = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 2 });

function scoreRange(min: number, max: number) {
  return min === max ? scoreFormat.format(min) : `${scoreFormat.format(min)}–${scoreFormat.format(max)}`;
}

function Initials({ text }: { text: string }) {
  const letters = text.replace(/[^A-Za-z0-9]/g, "").slice(0, 3).toUpperCase() || "U";
  return (
    <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-ice font-display text-sm font-semibold text-navy">
      {letters}
    </span>
  );
}

export function UniversityLogo({ uni, className }: { uni: University; className?: string }) {
  const [failed, setFailed] = useState(!uni.logo);
  if (failed) return <Initials text={uni.shortName || uni.name} />;
  return (
    <img
      src={uni.logo}
      alt=""
      className={cn("size-12 shrink-0 rounded-[14px] bg-ice object-contain p-1.5", className)}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export const UniversityCard = memo(function UniversityCard({
  uni,
  fit,
  suggestedMajors,
}: {
  uni: University;
  fit?: number | null;
  suggestedMajors?: string[];
}) {
  const majors = suggestedMajors?.length ? suggestedMajors : uni.majors;
  const [openMajors, setOpenMajors] = useState(false);
  const shown = openMajors ? majors : majors.slice(0, 4);
  const codes = useMemo(() => new Map(uni.majorItems.map((item) => [item.name, item.code])), [uni.majorItems]);
  const links = useMemo(
    () => admissionHrefs(uni.admissionsText || uni.admissionsUrl),
    [uni.admissionsText, uni.admissionsUrl],
  );
  const tuition = uni.tuition;
  const scores = uni.admissionScores;
  const admissions = uni.admissions2026;
  const thptRange = useMemo(() => {
    const values = admissions?.thptValues ?? [];
    return values.length ? scoreRange(Math.min(...values), Math.max(...values)) : null;
  }, [admissions]);
  const floors = ADMISSION_FLOOR_SUMMARIES[uni.id] ?? [];

  return (
    <article className="flex h-full flex-col rounded-[24px] bg-card p-5 shadow-border [content-visibility:auto] [contain-intrinsic-size:auto_280px]">
      <div className="flex items-start gap-3">
        <UniversityLogo uni={uni} />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-semibold leading-snug text-navy">{uni.name}</h3>
          <p className="mt-1 text-xs font-medium text-azure">
            {uni.shortName} · {uni.region} · {uni.provinceNew}
            {uni.provinceOld && uni.provinceOld !== uni.provinceNew ? ` · cũ: ${uni.provinceOld}` : ""}
          </p>
        </div>
        {fit != null ? (
          <span className="shrink-0 rounded-full bg-ice px-2.5 py-1 font-display text-sm font-semibold tabular-nums text-azure">
            {fit}%
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-xs text-muted">{uni.category}</p>

      <div className="mt-3 space-y-2 text-sm">
        <p>
          <span className="font-medium text-navy">Ngành chính quy: </span>
          <span className="text-muted">
            {shown.length
              ? shown.map((name) => (codes.get(name) ? `${name} (${codes.get(name)})` : name)).join(" · ")
              : MISSING_DATA}
          </span>
          {uni.representative ? <span className="text-muted"> — danh sách tiêu biểu, chưa phải toàn bộ ngành.</span> : null}
        </p>
        {majors.length > 4 ? (
          <button type="button" className="text-xs font-medium text-azure" onClick={() => setOpenMajors((v) => !v)}>
            {openMajors ? "Thu gọn ngành" : `Xem đủ ${majors.length} ngành`}
          </button>
        ) : majors.length ? (
          <p className="text-xs text-muted">{majors.length} ngành</p>
        ) : null}
        {fit != null ? (
          <p>
            <span className="font-medium text-navy">Phù hợp về sở thích: </span>
            <span className="tabular-nums text-azure">{fit}%</span>
          </p>
        ) : null}
        {admissions ? (
          <>
            <p>
              <span className="font-medium text-navy">Điểm trúng tuyển THPT /30 ({admissions.year}): </span>
              <span className="text-muted">{thptRange ?? "Chưa có điểm trúng tuyển THPT thang 30 trong nguồn"}</span>
            </p>
            {floors.length ? (
              <p className="text-xs leading-relaxed text-muted">
                <span className="font-medium text-navy">Điểm sàn trong bảng, tách riêng: </span>
                {floors.map((range) => `${range.method}: ${scoreRange(range.min, range.max)} (thang ${range.scale}, ${range.year})`).join(" · ")}
              </p>
            ) : null}
            <p className="text-xs leading-relaxed text-muted">
              {admissions.programCount} dòng chương trình · {admissions.sourceRecordCount} bản ghi nguồn.
              {" "}Xem phương thức, thang điểm, điều kiện và nguồn tại trang của trường.
            </p>
          </>
        ) : (
          <p>
            <span className="font-medium text-navy">Điểm chuẩn tham khảo: </span>
            <span className="text-muted">{scores[0] ? `${scores[0].year ?? "Chưa rõ năm"}: ${scores[0].score}` : MISSING_DATA}</span>
          </p>
        )}
        <p>
          <span className="font-medium text-navy">Học phí: </span>
          <span className="text-muted">
            {tuition ? `${tuition.year}: ${tuition.note}` : MISSING_DATA}
          </span>
        </p>
        {uni.admissionMethods.length ? (
          <p>
            <span className="font-medium text-navy">Phương thức: </span>
            <span className="text-muted">{uni.admissionMethods.join(" · ")}</span>
          </p>
        ) : null}
      </div>

      {fit != null ? (
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ice">
          <div className="bar-fill h-full bg-cyan" style={{ width: `${fit}%` }} />
        </div>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        <Button asChild size="sm" className="min-h-11">
          <Link to="/truong-dai-hoc/$universityId" params={{ universityId: uni.id }}>
            Xem ngành &amp; điểm
          </Link>
        </Button>
        {uni.website ? (
          <Button asChild variant="secondary" size="sm" className="min-h-11">
            <a href={uni.website} target="_blank" rel="noreferrer">
              Trang trường
              <ExternalLink className="size-3.5" />
            </a>
          </Button>
        ) : (
          <span className="text-xs text-muted">{MISSING_DATA}</span>
        )}
        {links.length ? (
          links.map((href) => (
            <Button key={href} asChild variant="ghost" size="sm" className="min-h-11">
              <a href={href} target="_blank" rel="noreferrer">
                <GraduationCap className="size-3.5" />
                {links.length > 1 ? href.replace(/^https?:\/\//, "").replace(/\/$/, "") : "Trang tuyển sinh"}
              </a>
            </Button>
          ))
        ) : null}
        {uni.admissionsText && (links.length !== 1 || uni.admissionsText.includes("hoặc")) ? (
          <p className="w-full text-xs leading-relaxed text-muted">Tuyển sinh: {uni.admissionsText}</p>
        ) : null}
        {!links.length && !uni.admissionsText ? (
          <span className="self-center text-xs text-muted">Tuyển sinh: {MISSING_DATA}</span>
        ) : null}
      </div>
      {fit != null ? <p className="mt-3 text-[11px] leading-relaxed text-muted">{FIT_NOTE}</p> : null}
    </article>
  );
});

