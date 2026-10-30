import { useDeferredValue, useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { MAJOR_GROUPS } from "@/data/majors";
import { UNIVERSITIES } from "@/data/universities";
import type { RiasecScores } from "@/data/types";
import { MISSING_DATA } from "@/lib/riasec";
import {
  FIT_BANDS,
  SCORE_BANDS,
  TUITION_BANDS,
  createUniversitySearchIndex,
  rankUniversities,
  uniqueAdmissionMethods,
  universityMajorNames,
  type FitBand,
  type ScoreBand,
  type TuitionBand,
} from "@/lib/university";
import { cn } from "@/lib/utils";
import { UniversityCard } from "./UniversityCard";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-11 rounded-full px-3.5 text-sm font-medium transition-[background-color,color] duration-150",
        active ? "bg-navy text-paper" : "bg-mist text-muted hover:text-navy",
      )}
    >
      {children}
    </button>
  );
}

function FilterRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-azure">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function UniversityExplorer({
  riasec,
  heading = "Khám phá trường Đại học",
  compact = false,
}: {
  riasec?: RiasecScores | null;
  heading?: string;
  compact?: boolean;
}) {
  const [q, setQ] = useState("");
  const deferredQuery = useDeferredValue(q);
  const [region, setRegion] = useState("Tất cả");
  const [provinceNew, setProvinceNew] = useState("Tất cả");
  const [provinceOld, setProvinceOld] = useState("Tất cả");
  const [tuition, setTuition] = useState<TuitionBand>("Tất cả");
  const [fitMin, setFitMin] = useState<FitBand>("Tất cả");
  const [groupId, setGroupId] = useState("all");
  const [major, setMajor] = useState("all");
  const [score, setScore] = useState<ScoreBand>("Tất cả");
  const [method, setMethod] = useState("Tất cả");
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const { hasTuition, hasScores, methods } = useMemo(
    () => ({
      hasTuition: UNIVERSITIES.some((u) => u.tuition),
      hasScores: UNIVERSITIES.some((u) =>
        (u.admissions2026?.thptValues.length ?? 0) > 0 ||
        u.programs.some((program) => program.thptValue != null && Number.isFinite(program.thptValue) && program.thptValue >= 0 && program.thptValue <= 30),
      ),
      methods: uniqueAdmissionMethods(UNIVERSITIES),
    }),
    [],
  );
  const searchIndex = useMemo(() => createUniversitySearchIndex(UNIVERSITIES), []);
  const applyTuition = hasTuition && tuition !== "Tất cả";
  const applyScore = hasScores && score !== "Tất cả";
  const applyMethod = methods.length > 0 && method !== "Tất cả";

  const majorNames = useMemo(() => universityMajorNames(UNIVERSITIES), []);
  const regions = useMemo(
    () => ["Miền Bắc", "Miền Trung", "Miền Nam", "Chưa xác định"].filter((name) => UNIVERSITIES.some((u) => u.region === name)),
    [],
  );
  const provinceCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const uni of UNIVERSITIES) counts.set(uni.provinceNew, (counts.get(uni.provinceNew) ?? 0) + 1);
    return counts;
  }, []);
  const popularProvinces = useMemo(
    () => [...provinceCounts.entries()].filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1]).map(([name]) => name),
    [provinceCounts],
  );
  const provincesNew = useMemo(
    () => [...provinceCounts.keys()].sort((a, b) => a.localeCompare(b, "vi")),
    [provinceCounts],
  );
  const provincesOld = useMemo(
    () => [...new Set(UNIVERSITIES.map((u) => u.provinceOld))].sort((a, b) => a.localeCompare(b, "vi")),
    [],
  );

  const ranked = useMemo(
    () =>
      rankUniversities({
        universities: UNIVERSITIES,
        searchIndex,
        query: deferredQuery,
        location: "Tất cả",
        region,
        provinceNew,
        provinceOld,
        popularProvinces,
        tuition,
        fitMin,
        groupId,
        major,
        score,
        method,
        riasec,
        applyTuition,
        applyScore,
        applyMethod,
      }),
    [deferredQuery, searchIndex, region, provinceNew, provinceOld, popularProvinces, tuition, fitMin, groupId, major, score, method, riasec, applyTuition, applyScore, applyMethod],
  );

  const pageSize = compact ? 6 : 12;
  const visible = showAll ? ranked : ranked.slice(0, pageSize);
  const activeCount = [
    q.trim() ? 1 : 0,
    region !== "Tất cả" ? 1 : 0,
    provinceNew !== "Tất cả" ? 1 : 0,
    provinceOld !== "Tất cả" ? 1 : 0,
    tuition !== "Tất cả" ? 1 : 0,
    fitMin !== "Tất cả" ? 1 : 0,
    groupId !== "all" ? 1 : 0,
    major !== "all" ? 1 : 0,
    score !== "Tất cả" ? 1 : 0,
    method !== "Tất cả" ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  function reset() {
    setQ("");
    setRegion("Tất cả");
    setProvinceNew("Tất cả");
    setProvinceOld("Tất cả");
    setTuition("Tất cả");
    setFitMin("Tất cả");
    setGroupId("all");
    setMajor("all");
    setScore("Tất cả");
    setMethod("Tất cả");
  }

  return (
    <section id="bo-loc-truong" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-12 pt-2 sm:px-6 sm:pt-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">Bộ lọc trường</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-navy">{heading}</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        {UNIVERSITIES.length} trường/học viện theo miền, tỉnh và ngành hệ chính quy. Điểm, phương thức, thang điểm và nguồn xem tại trang riêng của từng trường. Một số danh sách ngành chỉ mang tính tiêu biểu.
        {!hasTuition ? <> Học phí: {MISSING_DATA}.</> : null}
      </p>
      {riasec ? (
        <p className="mt-2 text-sm text-navy">
          Đang ưu tiên trường gần mã <span className="font-display font-semibold">{riasec.code}</span>.
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted">
          Chưa có kết quả RIASEC — vẫn xem và lọc toàn bộ trường.{" "}
          <Link to="/trac-nghiem/$quizId" params={{ quizId: "riasec" }} className="font-medium text-azure hover:underline">
            Làm trắc nghiệm RIASEC
          </Link>{" "}
          để xếp theo mức phù hợp.
        </p>
      )}

      <div className="mt-5 rounded-[24px] bg-card p-4 shadow-border sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <SlidersHorizontal className="size-4 text-azure" />
          <p className="font-display text-base font-semibold text-navy">Bộ lọc</p>
          {activeCount ? (
            <span className="whitespace-nowrap rounded-full bg-ice px-2.5 py-1 text-xs font-medium text-azure">
              {activeCount} điều kiện
            </span>
          ) : null}
          <button
            type="button"
            className="ml-auto min-h-11 text-sm font-medium text-azure sm:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Thu gọn" : "Mở bộ lọc"}
          </button>
        </div>

        <label className="relative mt-4 block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm trường..."
            aria-label="Tìm trường"
            className="h-12 w-full rounded-[16px] bg-mist pl-10 pr-4 text-sm text-navy outline-none placeholder:text-muted focus:shadow-border"
          />
        </label>

        <div className={cn("mt-4 space-y-4", open ? "block" : "hidden sm:block")}>
          <FilterRow label="Miền">
            <Chip active={region === "Tất cả"} onClick={() => setRegion("Tất cả")}>
              Tất cả
            </Chip>
            {regions.map((name) => (
              <Chip key={name} active={region === name} onClick={() => setRegion(name)}>
                {name}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Tỉnh phổ biến">
            <Chip active={provinceNew === "Tất cả"} onClick={() => setProvinceNew("Tất cả")}>
              Tất cả
            </Chip>
            {popularProvinces.map((name) => (
              <Chip key={name} active={provinceNew === name} onClick={() => setProvinceNew(name)}>
                {name}
              </Chip>
            ))}
            <Chip active={provinceNew === "Tỉnh khác"} onClick={() => setProvinceNew("Tỉnh khác")}>
              Tỉnh khác
            </Chip>
          </FilterRow>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-azure">
                Tỉnh/TP mới
              </span>
              <select
                value={provinceNew === "Tỉnh khác" || provincesNew.includes(provinceNew) ? provinceNew : "Tất cả"}
                onChange={(e) => setProvinceNew(e.target.value)}
                className="h-12 w-full rounded-[16px] bg-mist px-3 text-sm text-navy outline-none focus:shadow-border"
              >
                <option value="Tất cả">Tất cả</option>
                <option value="Tỉnh khác">Tỉnh khác</option>
                {provincesNew.map((name) => (
                  <option key={name} value={name}>
                    {name} ({provinceCounts.get(name)})
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-azure">
                Tỉnh/TP cũ
              </span>
              <select
                value={provinceOld}
                onChange={(e) => setProvinceOld(e.target.value)}
                className="h-12 w-full rounded-[16px] bg-mist px-3 text-sm text-navy outline-none focus:shadow-border"
              >
                <option value="Tất cả">Tất cả</option>
                {provincesOld.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <FilterRow label="Học phí">
            {TUITION_BANDS.map((t) => (
              <Chip key={t} active={tuition === t} onClick={() => setTuition(t)}>
                {t}
              </Chip>
            ))}
          </FilterRow>
          {tuition !== "Tất cả" && !hasTuition ? (
            <p className="text-xs text-muted">Học phí: {MISSING_DATA} — bộ lọc khoảng học phí chưa áp dụng được.</p>
          ) : null}

          <FilterRow label="Điểm trúng tuyển THPT /30">
            {SCORE_BANDS.map((s) => (
              <Chip key={s} active={score === s} onClick={() => setScore(s)}>
                {s}
              </Chip>
            ))}
          </FilterRow>
          <p className="text-xs leading-relaxed text-muted">Lọc trường có ít nhất một ngành thuộc khoảng điểm trúng tuyển THPT thang 30 đã chọn. Không gộp điểm sàn, phương thức khác hoặc ước tính; xem điểm của từng ngành trên trang trường.</p>
          {score !== "Tất cả" && !hasScores ? (
            <p className="text-xs text-muted">
              Điểm trúng tuyển THPT thang 30: {MISSING_DATA} — bộ lọc điểm chưa áp dụng được.
            </p>
          ) : null}

          {riasec ? (
            <FilterRow label="Mức phù hợp RIASEC">
              {FIT_BANDS.map((f) => (
                <Chip key={f} active={fitMin === f} onClick={() => setFitMin(f)}>
                  {f === "Tất cả" ? "Tất cả" : f}
                </Chip>
              ))}
            </FilterRow>
          ) : null}

          <FilterRow label="Nhóm ngành">
            <Chip
              active={groupId === "all"}
              onClick={() => {
                setGroupId("all");
                setMajor("all");
              }}
            >
              Tất cả
            </Chip>
            {MAJOR_GROUPS.map((g) => (
              <Chip
                key={g.id}
                active={groupId === g.id}
                onClick={() => {
                  setGroupId(g.id);
                  setMajor("all");
                }}
              >
                {g.name}
              </Chip>
            ))}
          </FilterRow>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-azure">Ngành</span>
              <select
                value={major}
                onChange={(e) => {
                  const next = e.target.value;
                  setMajor(next);
                  if (next !== "all") {
                    const g = MAJOR_GROUPS.find((x) => x.examples.includes(next));
                    if (g) setGroupId(g.id);
                  }
                }}
                className="h-12 w-full rounded-[16px] bg-mist px-3 text-sm text-navy outline-none focus:shadow-border"
              >
                <option value="all">Tất cả ngành</option>
                {majorNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-azure">
                Phương thức xét tuyển
              </span>
              {methods.length ? (
                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="h-12 w-full rounded-[16px] bg-mist px-3 text-sm text-navy outline-none focus:shadow-border"
                >
                  <option value="Tất cả">Tất cả</option>
                  {methods.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              ) : (
                <p className="flex h-12 items-center rounded-[16px] bg-mist px-3 text-sm text-muted">
                  {MISSING_DATA}
                </p>
              )}
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-sm text-muted" role="status" aria-live="polite">
              {ranked.length} trường khớp bộ lọc
            </p>
            <button
              type="button"
              onClick={reset}
              disabled={activeCount === 0}
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-azure disabled:opacity-40"
            >
              <RotateCcw className="size-3.5" />
              Xóa bộ lọc
            </button>
          </div>
        </div>
      </div>

      {ranked.length === 0 ? (
        <p className="mt-6 rounded-[20px] bg-ice px-4 py-6 text-sm text-muted">
          Không có trường khớp bộ lọc. Thử nới khu vực hoặc xóa từ khóa.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2" aria-busy={q !== deferredQuery}>
          {visible.map(({ uni, fit, majors }) => (
            <UniversityCard key={uni.id} uni={uni} fit={fit} suggestedMajors={majors} />
          ))}
        </div>
      )}

      {ranked.length > pageSize ? (
        <button
          type="button"
          className="mt-6 min-h-11 text-sm font-medium text-azure hover:underline"
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? "Thu gọn" : `Xem tất cả ${ranked.length} trường`}
        </button>
      ) : null}
    </section>
  );
}

