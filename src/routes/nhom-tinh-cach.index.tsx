import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { TypeGrid } from "@/components/personality/TypeGrid";
import { Reveal } from "@/components/shared/Reveal";

export const Route = createFileRoute("/nhom-tinh-cach/")({
  component: TypesPage,
});

function TypesPage() {
  return (
    <SiteShell>
      <div className="hero-wash">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Thư viện nhóm</p>
            <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-navy">
              Mười sáu cách nhìn thế giới
            </h1>
            <p className="mt-3 max-w-xl text-muted">
              Lọc theo nhóm, mở chi tiết, đối chiếu với kết quả test của bạn.
            </p>
          </Reveal>
        </div>
      </div>
      <TypeGrid />
    </SiteShell>
  );
}
