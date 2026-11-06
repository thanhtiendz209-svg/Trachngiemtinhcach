import type { SchoolTuition } from "@/data/school-tuition-2026";

const million = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 6 });
const vietnamDong = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 });

function annual(value: number) {
  return value === 0 ? "0 đồng/năm" : `${million.format(value / 1_000_000)} triệu đồng/năm`;
}

export function UniversityTuitionInfo({ tuition }: { tuition: SchoolTuition | null }) {
  if (!tuition) return null;
  const { min, max, credit, median } = tuition;
  return (
    <div className="space-y-1.5 text-sm leading-relaxed" aria-label="Học phí chương trình tiêu chuẩn 2026–2027">
      {min != null && max != null ? (
        <p><span className="font-medium text-navy">Học phí (thấp nhất – cao nhất): </span><span className="text-muted">{min === max ? annual(min) : `${million.format(min / 1_000_000)}–${million.format(max / 1_000_000)} triệu đồng/năm`}</span></p>
      ) : min != null ? (
        <p><span className="font-medium text-navy">Học phí thấp nhất: </span><span className="text-muted">{annual(min)}</span></p>
      ) : max != null ? (
        <p><span className="font-medium text-navy">Học phí cao nhất: </span><span className="text-muted">{annual(max)}</span></p>
      ) : null}
      {credit != null ? <p><span className="font-medium text-navy">Trung bình/tín chỉ: </span><span className="text-muted">{vietnamDong.format(credit)} đồng/tín chỉ</span></p> : null}
      {median != null ? <p><span className="font-medium text-navy">Q2 (trung vị): </span><span className="text-muted">{annual(median)}</span></p> : null}
    </div>
  );
}
