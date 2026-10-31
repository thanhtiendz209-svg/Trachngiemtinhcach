import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { NotFoundPage } from "@/components/shared/NotFound";
import { Button } from "@/components/ui/button";
import { UniversityAdmissionsPanel } from "@/components/university/UniversityAdmissions";
import { UNIVERSITIES } from "@/data/universities";

export const Route = createFileRoute("/truong-dai-hoc/$universityId")({
  validateSearch: (search: Record<string, unknown>): { nganh?: string } => ({
    nganh: typeof search.nganh === "string" && search.nganh.trim().length <= 120
      ? search.nganh.normalize("NFC").trim() || undefined
      : undefined,
  }),
  head: () => ({ meta: [{ title: "Ngành và điểm tuyển sinh 2026 | Lumina" }] }),
  component: UniversityPage,
});

function UniversityPage() {
  const { universityId } = Route.useParams();
  const { nganh } = Route.useSearch();
  const university = UNIVERSITIES.find((item) => item.id === universityId);
  useEffect(() => {
    if (university) document.title = `${university.name} – Ngành & điểm tuyển sinh 2026 | Lumina`;
  }, [university]);
  if (!university) return <NotFoundPage />;
  return (
    <SiteShell>
      <div className="hero-wash">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <Link to="/truong-dai-hoc" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-azure"><ArrowLeft className="size-4" />Tất cả trường</Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-azure">{university.region} · {university.provinceNew}</p>
          <h1 className="mt-2 max-w-4xl font-display text-3xl font-semibold leading-snug text-navy sm:text-4xl">{university.name}</h1>
          <p className="mt-3 max-w-3xl text-muted">Ngành đào tạo và dữ liệu tuyển sinh năm 2026, giữ riêng phương thức, tổ hợp, thang điểm và điều kiện. Nguồn được ghi theo từng ngành để bạn đối chiếu.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {university.website ? <Button asChild variant="secondary"><a href={university.website} target="_blank" rel="noreferrer">Trang trường<ExternalLink className="size-4" /></a></Button> : null}
            <span className="inline-flex min-h-11 items-center text-sm text-muted">Dữ liệu năm 2026 · Cập nhật {university.admissions2026?.updatedAt ?? university.lastUpdated}</span>
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12" aria-label="Chi tiết ngành và điểm tuyển sinh">
        <details className="mb-6 rounded-2xl bg-card p-4 shadow-border sm:p-5">
          <summary className="min-h-11 cursor-pointer font-display text-lg font-semibold text-navy">Danh mục ngành & chương trình ({university.majorItems.length})</summary>
          <p className="mb-4 mt-2 text-sm text-muted">Chọn mã ngành để xem điểm. Các tên ngành cũ được giữ để đối chiếu.</p>
          <ul className="grid gap-3 text-sm sm:grid-cols-2">
            {university.majorItems.map((major) => <li key={`${major.code}-${major.name}`} className="min-w-0 rounded-xl bg-mist p-3">{major.code ? <Link to="/truong-dai-hoc/$universityId" params={{ universityId }} search={{ nganh: major.code }} className="inline-flex min-h-11 items-center font-semibold text-azure underline underline-offset-4">{major.code}</Link> : <span className="font-semibold text-muted">Chưa có mã</span>}<span className="mt-1 block break-words text-navy">{major.name}</span></li>)}
          </ul>
        </details>
        <UniversityAdmissionsPanel key={university.id} schoolId={university.id} initialProgramCode={nganh} />
      </section>
    </SiteShell>
  );
}
