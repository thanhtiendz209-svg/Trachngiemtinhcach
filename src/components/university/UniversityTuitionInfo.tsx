import { WalletCards } from "lucide-react";
import type { SchoolTuition } from "@/data/school-tuition-2026";
import { cn } from "@/lib/utils";

const annualFormatter = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 6 });
const moneyFormatter = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 });
const MISSING = "Chưa có dữ liệu";

function annualAmount(value: number | null | undefined) {
  return value != null && Number.isFinite(value) && value > 0
    ? `${annualFormatter.format(value / 1_000_000)} triệu đồng/năm`
    : MISSING;
}

function creditAmount(value: number | null | undefined) {
  return value != null && Number.isFinite(value) && value > 0
    ? `${moneyFormatter.format(value)} đồng/tín chỉ`
    : MISSING;
}

function TuitionValue({ label, value }: { label: string; value: string }) {
  const missing = value === MISSING;
  return (
    <div className="min-w-0">
      <p className="text-xs font-medium text-muted">{label}</p>
      <p className={cn("mt-1 break-words text-sm font-semibold leading-snug", missing ? "text-muted" : "text-azure")}>
        {value}
      </p>
    </div>
  );
}

function TuitionStat({ label, value }: { label: string; value: string }) {
  const missing = value === MISSING;
  return (
    <div className="min-w-0 rounded-2xl border border-azure/15 bg-card p-3 shadow-sm">
      <p className="text-xs font-semibold text-navy">{label}</p>
      <p className={cn("mt-2 break-words font-display text-base font-semibold leading-snug", missing ? "text-muted" : "text-azure")}>
        {value}
      </p>
    </div>
  );
}

/** Shared highlighted tuition panel for university list cards and detail pages. */
export function UniversityTuitionInfo({
  tuition,
  compact = false,
}: {
  tuition: SchoolTuition | null;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-[20px] border-2 border-azure/25 bg-ice shadow-border",
        compact ? "p-3" : "p-4 sm:p-5",
      )}
      aria-label="Học phí chương trình tiêu chuẩn 2026–2027"
    >
      <div className="flex items-center gap-2 rounded-xl bg-navy px-3 py-2.5 text-paper">
        <WalletCards className="size-5 shrink-0 text-paper" aria-hidden="true" />
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold sm:text-base">Học phí 2026–2027</p>
          <p className="text-[11px] font-medium text-paper/80">Chương trình tiêu chuẩn</p>
        </div>
      </div>

      <div className={cn("mt-3 grid gap-2.5", compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3")}>
        <div className="min-w-0 rounded-2xl border border-azure/15 bg-card p-3 shadow-sm">
          <p className="text-xs font-semibold text-navy">Học phí mỗi năm</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <TuitionValue label="Thấp nhất" value={annualAmount(tuition?.min)} />
            <TuitionValue label="Cao nhất" value={annualAmount(tuition?.max)} />
          </div>
        </div>
        <TuitionStat label="Giá trung bình 1 tín chỉ" value={creditAmount(tuition?.credit)} />
        <TuitionStat label="Q2 (trung vị)" value={annualAmount(tuition?.median)} />
      </div>
    </section>
  );
}
