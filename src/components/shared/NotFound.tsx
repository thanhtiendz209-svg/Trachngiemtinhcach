import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Không tìm thấy</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-navy">Trang này không có trên bản đồ</h1>
        <p className="mt-3 text-muted">Liên kết có thể đã đổi. Quay về trang chủ hoặc chọn một bài test.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/">Trang chủ</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/trac-nghiem">Trắc nghiệm</Link>
          </Button>
        </div>
      </div>
    </SiteShell>
  );
}
