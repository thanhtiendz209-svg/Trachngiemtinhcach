import { memo, useDeferredValue, useEffect, useId, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type {
  AdmissionCell,
  AdmissionProgramRow,
  AdmissionSourceRecord,
  UniversityAdmissionsDocument,
} from "@/data/university-admissions-types";
import { loadUniversityAdmissions } from "@/lib/university-admissions";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 12;

export interface UniversityAdmissionsProps {
  schoolId: string;
  schoolName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  restoreFocus: () => void;
}

function cellText(value: AdmissionCell | undefined) {
  return value == null || value === "" ? "Chưa có dữ liệu" : String(value);
}

function isEstimateColumn(label: string) {
  return /ước\s*(lượng|tính)/i.test(label);
}

function SourceLink({ value, label }: { value: string; label: string }) {
  const urls = value.match(/https?:\/\/[^\s<>]+/g) ?? [];
  if (!urls.length) return value ? <span className="break-words">{value}</span> : null;
  return (
    <span className="flex flex-wrap gap-x-4 gap-y-1">
      {urls.map((url, index) => (
        <a key={`${url}-${index}`} href={url} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 break-all font-medium text-azure underline underline-offset-4">
          {label}{urls.length > 1 ? ` ${index + 1}` : ""}
          <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
        </a>
      ))}
    </span>
  );
}

function Fields({ columns, compact = false }: {
  columns: Array<{ label: string; value: AdmissionCell; wide?: boolean; prominent?: boolean }>;
  compact?: boolean;
}) {
  return (
    <dl className={cn("grid min-w-0 text-sm", compact ? "grid-cols-2 gap-x-4 gap-y-3" : "gap-3 sm:grid-cols-2")}>
      {columns.map(({ label, value, wide, prominent }, index) => (
        <div key={`${label}-${index}`} className={cn("min-w-0", compact ? wide && "col-span-2" : "rounded-xl bg-mist px-3 py-2.5")}>
          <dt className="whitespace-pre-line text-xs font-medium text-azure">{label || `Cột ${index + 1}`}</dt>
          <dd className={cn("mt-1 whitespace-pre-line break-words text-navy", prominent && "text-xl font-semibold tabular-nums")}>
            {cellText(value)}
            {typeof value === "string" && /https?:\/\//.test(value)
              ? <SourceLink value={value} label="Xem nguồn" />
              : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Pagination({ page, count, label, onChange }: {
  page: number;
  count: number;
  label: string;
  onChange: (page: number) => void;
}) {
  const pages = Math.max(1, Math.ceil(count / PAGE_SIZE));
  if (pages <= 1) return null;
  return (
    <nav aria-label={`Phân trang ${label}`} className="mt-4 flex flex-wrap items-center justify-between gap-2">
      <Button type="button" variant="secondary" size="sm" disabled={page <= 1} aria-label={`Trang ${label} trước`} onClick={() => onChange(page - 1)}>Trước</Button>
      <p className="text-sm tabular-nums text-muted" role="status">Trang {page}/{pages} · {count} dòng</p>
      <Button type="button" variant="secondary" size="sm" disabled={page >= pages} aria-label={`Trang ${label} sau`} onClick={() => onChange(page + 1)}>Sau</Button>
    </nav>
  );
}

const SourceRecord = memo(function SourceRecord({ source }: { source: AdmissionSourceRecord }) {
  return (
    <article className="rounded-xl border border-line p-3 sm:p-4" data-source-row={source.row}>
      <Fields compact columns={[
        { label: "Giá trị trong nguồn", value: source.value, prominent: true },
        { label: "Thang điểm", value: source.scale },
        { label: "Phương thức", value: source.method, wide: true },
        ...(source.combinations ? [{ label: "Tổ hợp môn", value: source.combinations, wide: true }] : []),
        { label: "Loại dữ liệu", value: source.kind },
        { label: "Năm", value: source.year },
        ...(source.condition ? [{ label: "Điều kiện", value: source.condition, wide: true }] : []),
        { label: "Phân loại", value: source.classification, wide: true },
      ]} />
      <div className="mt-2 flex flex-wrap gap-x-4 text-sm">
        <SourceLink value={source.url} label="Xem nguồn" />
        {source.originalUrl && source.originalUrl !== source.url ? <SourceLink value={source.originalUrl} label="Nguồn gốc" /> : null}
      </div>
    </article>
  );
});

const ProgramDetails = memo(function ProgramDetails({ program, sourceMap }: {
  program: AdmissionProgramRow;
  sourceMap: Map<number, AdmissionSourceRecord>;
}) {
  const [expanded, setExpanded] = useState(false);
  const [sourcePage, setSourcePage] = useState(1);
  const sources = useMemo(
    () => program.sourceRows.map((row) => sourceMap.get(row)).filter((source): source is AdmissionSourceRecord => source !== undefined),
    [program.sourceRows, sourceMap],
  );
  const visibleSources = sources.slice((sourcePage - 1) * PAGE_SIZE, sourcePage * PAGE_SIZE);
  const sourceColumns = useMemo(() => program.columns.filter((column) => !isEstimateColumn(column.label)), [program.columns]);
  return (
    <details className="rounded-2xl bg-card shadow-border" onToggle={(event) => setExpanded(event.currentTarget.open)} data-program-id={program.id} data-program-code={program.code}>
      <summary className="min-h-11 cursor-pointer rounded-2xl p-4 text-sm text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-azure">
        <span className="font-semibold">{program.code || "Chưa có mã"} · {program.name}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted">{program.combinations || "Chưa có tổ hợp"}</span>
      </summary>
      {expanded ? (
        <div className="border-t border-line p-3 sm:p-4">
          <details open data-reference-points>
            <summary className="min-h-11 cursor-pointer rounded-xl bg-azure px-4 py-3 text-sm font-semibold text-paper shadow-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure">Điểm tham khảo</summary>
            <div className="pt-3">
              {program.conditions ? <p className="mb-3 text-xs leading-relaxed text-muted">Điều kiện: {program.conditions}</p> : null}
              {sources.length ? <div className="grid gap-3 lg:grid-cols-2">{visibleSources.map((source) => <SourceRecord key={source.row} source={source} />)}</div> : <Fields columns={sourceColumns} />}
              {!sources.length && !sourceColumns.length ? <p className="text-sm text-muted">Chưa có điểm tham khảo cho ngành này.</p> : null}
              <Pagination page={sourcePage} count={sources.length} label="nguồn" onChange={setSourcePage} />
            </div>
          </details>
        </div>
      ) : null}
    </details>
  );
});

function SourcesView({ document }: { document: UniversityAdmissionsDocument }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [page, setPage] = useState(1);
  const sourceMap = useMemo(() => new Map(document.sources.map((source) => [source.row, source])), [document.sources]);
  const searchIndex = useMemo(() => document.programs.map((program) => {
    const sources = program.sourceRows.map((row) => sourceMap.get(row));
    return [program, [program.code, program.name, program.combinations, program.origin, program.originalCode,
      program.originalName, program.matchStatus, program.conditions, program.sourceStatus,
      ...sources.flatMap((source) => source ? [source.method, source.scale, source.year, source.value, source.condition, source.classification, source.kind] : [])].join(" ").toLocaleLowerCase("vi")] as const;
  }), [document.programs, sourceMap]);
  const programs = useMemo(() => {
    const normalized = deferredQuery.trim().toLocaleLowerCase("vi");
    return normalized ? searchIndex.filter(([, text]) => text.includes(normalized)).map(([program]) => program) : document.programs;
  }, [deferredQuery, document.programs, searchIndex]);
  const safePage = Math.min(page, Math.max(1, Math.ceil(programs.length / PAGE_SIZE)));
  const visible = programs.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  return (
    <section aria-label="Ngành và dữ liệu nguồn">
      <label className="relative mb-3 block">
        <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <input className="h-12 w-full rounded-2xl bg-mist pl-10 pr-4 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-azure" aria-label="Tìm ngành hoặc mã ngành" placeholder="Tìm ngành, mã, tổ hợp hoặc phương thức..." value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} />
      </label>
      <p className="mb-4 text-sm text-muted" role="status">{programs.length} ngành / chương trình</p>
      <div className="space-y-3" aria-busy={query !== deferredQuery}>
        {visible.map((program) => <ProgramDetails key={program.id} program={program} sourceMap={sourceMap} />)}
      </div>
      {!programs.length ? <p className="rounded-2xl bg-ice p-4 text-sm text-muted">Không có ngành khớp từ khóa. Thử mã xét tuyển hoặc xóa từ khóa.</p> : null}
      <Pagination page={safePage} count={programs.length} label="ngành" onChange={setPage} />
    </section>
  );
}

function rowTitle(headers: string[], row: AdmissionCell[], index: number) {
  const relevant = headers.map((header, column) => /mã xét tuyển|tên chương trình|tên ngành|tổ hợp|nhánh công thức/i.test(header) ? row[column] : null).filter((value) => value != null && value !== "");
  return relevant.length ? relevant.map(cellText).join(" · ") : `Dòng ${index + 1} · ${cellText(row[0])}`;
}

function RawRows({ headers, rows, label, searchable = false }: {
  headers: string[];
  rows: AdmissionCell[][];
  label: string;
  searchable?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const deferredQuery = useDeferredValue(query);
  const indexedRows = useMemo(() => rows.map((row, index) => ({ row, index, text: row.map((value) => value == null ? "" : String(value)).join(" ").toLocaleLowerCase("vi") })), [rows]);
  const filtered = useMemo(() => {
    const normalized = deferredQuery.trim().toLocaleLowerCase("vi");
    return normalized ? indexedRows.filter(({ text }) => text.includes(normalized)) : indexedRows;
  }, [deferredQuery, indexedRows]);
  const safePage = Math.min(page, Math.max(1, Math.ceil(filtered.length / PAGE_SIZE)));
  return (
    <div data-raw-kind={label}>
      {searchable ? <input aria-label={`Tìm ${label}`} placeholder="Tìm mã, ngành, tổ hợp hoặc điều kiện..." className="mb-3 h-12 w-full rounded-2xl bg-mist px-4 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-azure" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} /> : null}
      <p className="mb-3 text-sm text-muted" role="status">{filtered.length} dòng {label}</p>
      <div className="space-y-3" aria-busy={query !== deferredQuery}>
        {filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE).map(({ row, index }) => {
          const outsideScale = row.some((value) => typeof value === "string" && /ngoài thang|vượt thang|không khả thi/i.test(value));
          return (
            <details key={index} data-raw-row={index} className="rounded-2xl bg-card shadow-border">
              <summary className="min-h-11 cursor-pointer p-4 text-sm font-medium text-navy">
                {rowTitle(headers, row, index)}
                {outsideScale ? <span className="mt-1 block text-xs font-semibold text-azure">Cảnh báo: có giá trị ngoài thang điểm — giữ nguyên để đối chiếu</span> : null}
              </summary>
              <div className="border-t border-line p-4"><Fields columns={Array.from({ length: Math.max(headers.length, row.length) }, (_, column) => ({ label: headers[column] || `Cột ${column + 1}`, value: row[column] ?? null }))} /></div>
            </details>
          );
        })}
      </div>
      {!filtered.length ? <p className="rounded-2xl bg-ice p-4 text-sm text-muted">Không có dòng {label} khớp trong tệp của trường này.</p> : null}
      <Pagination page={safePage} count={filtered.length} label={label} onChange={setPage} />
    </div>
  );
}

function AdmissionsContent({ document }: { document: UniversityAdmissionsDocument }) {
  const [view, setView] = useState<"source" | "estimates">("source");
  const viewId = useId();
  const programEstimates = useMemo(() => {
    const programs = document.programs.filter((program) => program.columns.some((column) => isEstimateColumn(column.label)));
    const labels = [...new Set(programs.flatMap((program) => program.columns.filter((column) => isEstimateColumn(column.label)).map((column) => column.label)))];
    return {
      headers: ["Mã xét tuyển", "Tên chương trình", "Tổ hợp", ...labels],
      rows: programs.map((program): AdmissionCell[] => [program.code, program.name, program.combinations, ...labels.map((label) => program.columns.find((column) => column.label === label)?.value ?? null)]),
    };
  }, [document.programs]);
  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Chọn nhóm dữ liệu tuyển sinh">
        {([
          ["source", "Ngành và Điểm"],
          ["estimates", "Điểm giả định"],
        ] as const).map(([id, title]) => (
          <Button key={id} type="button" size="sm" variant={view === id ? "primary" : "secondary"} className="min-h-11 font-semibold" aria-pressed={view === id} aria-controls={viewId} onClick={() => setView(id)}>{title}</Button>
        ))}
      </div>
      <div id={viewId}>
        {view === "source" ? <SourcesView document={document} /> : null}
        {view === "estimates" ? (
          <section aria-label="Điểm giả định" data-admissions-view="estimates">
            <h3 className="mb-2 font-display text-lg font-semibold text-navy">Điểm giả định</h3>
            <p className="mb-4 text-sm text-muted">Điểm ước lượng theo giả định, không phải điểm trúng tuyển công bố.</p>
            <RawRows headers={document.estimates.headers} rows={document.estimates.rows} label="ước tính" searchable />
            <h3 className="mb-3 mt-8 font-display text-lg font-semibold text-navy">Điểm giả định theo ngành</h3>
            <RawRows headers={programEstimates.headers} rows={programEstimates.rows} label="ước lượng trong bảng" searchable />
            <details className="mt-6 rounded-2xl border border-line p-4">
              <summary className="min-h-11 cursor-pointer font-medium text-azure">Đầu vào và đối chiếu</summary>
              <div className="pt-3">
                <h3 className="mb-3 font-display text-lg font-semibold text-navy">Đầu vào và giả định</h3>
                <RawRows headers={document.assumptions.headers} rows={document.assumptions.rows} label="giả định" searchable />
                <h3 className="mb-3 mt-6 font-display text-lg font-semibold text-navy">Các dòng cần đối chiếu</h3>
                <RawRows headers={document.verification.headers} rows={document.verification.rows} label="đối chiếu" searchable />
              </div>
            </details>
          </section>
        ) : null}
      </div>
    </>
  );
}

/** Reused by school pages; mounting it is the explicit request for one school's JSON. */
export function UniversityAdmissionsPanel({ schoolId }: { schoolId: string }) {
  const [document, setDocument] = useState<UniversityAdmissionsDocument | null>(null);
  const [error, setError] = useState<{ schoolId: string; message: string } | null>(null);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    setError(null);
    setDocument(null);
    void loadUniversityAdmissions(schoolId).then(
      (value) => { if (active) setDocument(value); },
      (reason: unknown) => {
        if (active) setError({
          schoolId,
          message: reason instanceof Error && /thử lại|Không xác định/.test(reason.message)
            ? reason.message
            : "Chưa tải được dữ liệu tuyển sinh. Bạn có thể thử lại.",
        });
      },
    );
    return () => { active = false; };
  }, [attempt, schoolId]);

  return document?.schoolId === schoolId ? <AdmissionsContent key={schoolId} document={document} /> : error?.schoolId === schoolId ? (
    <div role="alert" className="rounded-2xl bg-ice p-5 text-sm text-navy">
      <p>{error.message}</p>
      <Button type="button" variant="secondary" size="sm" className="mt-3" onClick={() => setAttempt((value) => value + 1)}>Thử tải lại</Button>
    </div>
  ) : <p role="status" className="py-10 text-center text-sm text-muted">Đang tải dữ liệu tuyển sinh của trường...</p>;
}

export function UniversityAdmissions({ schoolId, schoolName, open, onOpenChange, restoreFocus }: UniversityAdmissionsProps) {

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/40" />
        <Dialog.Content className={cn("fixed inset-0 z-50 m-auto flex h-dvh w-full max-w-5xl flex-col bg-paper text-ink shadow-border-hover", "sm:inset-4 sm:h-auto sm:max-h-[calc(100dvh-2rem)] sm:rounded-3xl")} onCloseAutoFocus={(event) => { event.preventDefault(); restoreFocus(); }}>
          <div className="flex shrink-0 items-start gap-3 border-b border-line px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1">
              <Dialog.Title className="font-display text-lg font-semibold leading-snug text-navy sm:text-xl">{schoolName}</Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-muted">Ngành, điểm tham khảo và điểm giả định</Dialog.Description>
            </div>
            <Dialog.Close asChild><button type="button" aria-label="Đóng chi tiết tuyển sinh" className="grid size-11 shrink-0 place-items-center rounded-xl text-navy hover:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-azure"><X className="size-5" aria-hidden="true" /></button></Dialog.Close>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6">
            {open ? <UniversityAdmissionsPanel schoolId={schoolId} /> : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
