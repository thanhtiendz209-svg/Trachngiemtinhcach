import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { UniversityExplorer } from "@/components/university/UniversityExplorer";
import { useMergedProfile } from "@/lib/use-quiz-status";

export const Route = createFileRoute("/truong-dai-hoc/")({
  head: () => ({ meta: [{ title: "Trường đại học và điểm tuyển sinh 2026 | Lumina" }] }),
  component: UniversitiesPage,
});

function UniversitiesPage() {
  const profile = useMergedProfile();
  return (
    <SiteShell>
      <div className="hero-wash">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-azure">Tra cứu trường và ngành</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">126 trường đại học & học viện</h1>
          <p className="mt-3 max-w-2xl text-muted">Xem ngành đào tạo, điểm trúng tuyển, điểm sàn và nguồn đối chiếu trong trang riêng của từng trường.</p>
        </div>
      </div>
      <UniversityExplorer riasec={profile?.riasec} />
    </SiteShell>
  );
}
