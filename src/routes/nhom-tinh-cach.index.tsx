import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { TypeGrid } from "@/components/personality/TypeGrid";
import { Reveal } from "@/components/shared/Reveal";

export const Route = createFileRoute("/nhom-tinh-cach/")({
  validateSearch: (search: Record<string, unknown>): { tab?: "mbti" | "riasec" } => ({
    tab: search.tab === "riasec" ? "riasec" : search.tab === "mbti" ? "mbti" : undefined,
  }),
  component: TypesPage,
});

function TypesPage() {
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <SiteShell>
      <div className="hero-wash">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
              Thư viện nhóm
            </p>
            <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-navy">
              16 nhóm MBTI & 6 nhóm RIASEC
            </h1>
            <p className="mt-3 max-w-xl text-muted">
              Lọc theo nhóm, mở chi tiết, đối chiếu với kết quả test của bạn.
            </p>
          </Reveal>
        </div>
      </div>
      <TypeGrid
        activeTab={tab === "riasec" ? "origin" : "mbti"}
        onTabChange={(next) => {
          void navigate({ search: { tab: next === "origin" ? "riasec" : "mbti" }, replace: true });
        }}
      />
    </SiteShell>
  );
}
