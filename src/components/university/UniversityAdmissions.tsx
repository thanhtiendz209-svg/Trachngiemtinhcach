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
import { getSchoolAdmissionIndex, type CanonicalProgram } from "@/lib/admission-identities";
import { getProgramAdmissionFacts, type WorkbookAdmissionFact } from "@/lib/admission-facts";
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

const SourceRecord = memo(function SourceRecord({ source, floorScope }: {
  source: AdmissionSourceRecord;
  floorScope?: "program" | "school";
}) {
  return (
    <article className="rounded-xl border border-line p-3 sm:p-4" data-source-row={floorScope ? undefined : source.row} data-floor-source-row={floorScope ? source.row : undefined} data-floor-scope={floorScope}>
      {floorScope ? <p className="mb-3 text-xs font-semibold leading-relaxed text-azure">{floorScope === "school" ? "Áp dụng chung toàn trường (mã *)" : "Theo mã chương trình"} · {source.schoolCode} · {source.code}</p> : null}
      <Fields compact columns={[
        { label: "Điểm tham khảo", value: source.value, prominent: true },
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

const WorkbookFact = memo(function WorkbookFact({ fact }: { fact: WorkbookAdmissionFact }) {
  return (
    <article className="rounded-xl border border-line p-3 sm:p-4" data-workbook-fact={fact.id} data-workbook-column={fact.label} data-admission-kind={fact.kind} data-fact-kind={fact.kind} data-fact-scale={fact.scale ?? undefined}>
      <p className="mb-3 whitespace-pre-line text-xs font-semibold text-azure">{fact.label}</p>
      {!fact.floorSources.length ? <Fields compact columns={[
        { label: "Giá trị trong bảng", value: fact.value, prominent: true },
        { label: "Thang điểm", value: fact.scale ?? "Chưa xác định" },
        ...(fact.method ? [{ label: "Phương thức", value: fact.method, wide: true }] : []),
        { label: "Loại dữ liệu", value: fact.kind },
        { label: "Năm", value: fact.year },
      ]} /> : null}
      {fact.floorSources.length ? <div className="space-y-3">{fact.floorSources.map(({ source, scope }, index) => <SourceRecord key={`${source.row}-${scope}-${index}`} source={source} floorScope={scope} />)}</div> : null}
      <details className="mt-2 text-xs text-muted">
        <summary className="min-h-11 cursor-pointer py-3 font-medium text-azure">Đối chiếu ô trong bảng</summary>
        <p className="break-words leading-relaxed">{fact.classification} · {fact.provenance.sourceFile} · sheet {fact.provenance.sheet} · dòng {fact.provenance.programRow ?? fact.provenance.programRowId} · cột “{fact.provenance.column.replace(/\s+/gu, " ")}”.</p>
      </details>
    </article>
  );
});

const ProgramDetails = memo(function ProgramDetails({ program, sourceMap, document, canonical }: {
  program: AdmissionProgramRow;
  sourceMap: Map<number, AdmissionSourceRecord>;
  document: UniversityAdmissionsDocument;
  canonical?: CanonicalProgram;
}) {
  const [expanded, setExpanded] = useState(false);
  const [sourcePage, setSourcePage] = useState(1);
  const sources = useMemo(
    () => program.sourceRows.map((row) => sourceMap.get(row)).filter((source): source is AdmissionSourceRecord => source !== undefined),
    [program.sourceRows, sourceMap],
  );
  const visibleSources = sources.slice((sourcePage - 1) * PAGE_SIZE, sourcePage * PAGE_SIZE);
  const facts = useMemo(() => getProgramAdmissionFacts(document, program, sources), [document, program, sources]);
  const cutoffSources = visibleSources.filter((source) => source.kind.trim() === "Trúng tuyển");
  const floorSources = visibleSources.filter((source) => /^(Điểm sàn|Sàn)$/u.test(source.kind.trim()));
  const otherSources = visibleSources.filter((source) => !cutoffSources.includes(source) && !floorSources.includes(source));
  return (
    <details className="rounded-2xl bg-card shadow-border" onToggle={(event) => setExpanded(event.currentTarget.open)} data-program-id={program.id} data-program-code={program.code} data-program-key={canonical?.id} data-offering-id={canonical?.offeringId}>
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
              {cutoffSources.length || facts.cutoffs.length ? (
                <section className="mb-5" aria-label="Điểm trúng tuyển" data-admission-section="cutoffs">
                  <h4 className="mb-3 text-sm font-semibold text-navy">Điểm trúng tuyển</h4>
                  <div className="grid gap-3 lg:grid-cols-2">
                    {cutoffSources.map((source) => <SourceRecord key={source.row} source={source} />)}
                    {facts.cutoffs.map((fact) => <WorkbookFact key={fact.id} fact={fact} />)}
                  </div>
                </section>
              ) : null}
              {floorSources.length || facts.floors.length ? (
                <section className="mb-5" aria-label="Điểm sàn" data-admission-section="floors">
                  <h4 className="mb-3 text-sm font-semibold text-navy">Điểm sàn</h4>
                  <div className="grid gap-3 lg:grid-cols-2">
                    {floorSources.map((source) => <SourceRecord key={source.row} source={source} />)}
                    {facts.floors.map((fact) => <WorkbookFact key={fact.id} fact={fact} />)}
                  </div>
                </section>
              ) : null}
              {otherSources.length ? (
                <section className="mb-5" aria-label="Bản ghi nguồn khác">
                  <h4 className="mb-3 text-sm font-semibold text-navy">Bản ghi nguồn khác</h4>
                  <div className="grid gap-3 lg:grid-cols-2">{otherSources.map((source) => <SourceRecord key={source.row} source={source} />)}</div>
                </section>
              ) : null}
              {facts.residual.length ? (
                <details className="mb-4">
                  <summary className="min-h-11 cursor-pointer py-3 text-sm font-medium text-azure">Giá trị khác trong bảng</summary>
                  <div className="grid gap-3 lg:grid-cols-2">{facts.residual.map((fact) => <WorkbookFact key={fact.id} fact={fact} />)}</div>
                </details>
              ) : null}
              {!sources.length && !facts.cutoffs.length && !facts.floors.length && !facts.residual.length ? <p className="text-sm text-muted">Chưa có điểm tham khảo cho ngành này.</p> : null}
              <Pagination page={sourcePage} count={sources.length} label="nguồn" onChange={setSourcePage} />
            </div>
          </details>
        </div>
      ) : null}
    </details>
  );
});

function normalizedProgramCode(value: string) {
  return value.normalize("NFC").replace(/\s+/gu, " ").trim().toLowerCase();
}

function SourcesView({ document, initialProgramCode = "" }: {
  document: UniversityAdmissionsDocument;
  initialProgramCode?: string;
}) {
  const [query, setQuery] = useState(initialProgramCode);
  const deferredQuery = useDeferredValue(query);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setQuery(initialProgramCode);
    setPage(1);
  }, [initialProgramCode]);
  const sourceMap = useMemo(() => new Map(document.sources.map((source) => [source.row, source])), [document.sources]);
  const admissionIndex = useMemo(() => getSchoolAdmissionIndex(document), [document]);
  const searchIndex = useMemo(() => document.programs.map((program) => {
    const sources = program.sourceRows.map((row) => sourceMap.get(row));
    return [program, [program.code, program.name, program.combinations, program.origin, program.originalCode,
      program.originalName, program.matchStatus, program.conditions, program.sourceStatus,
      ...sources.flatMap((source) => source ? [source.method, source.scale, source.year, source.value, source.condition, source.classification, source.kind] : [])].join(" ").toLocaleLowerCase("vi")] as const;
  }), [document.programs, sourceMap]);
  const programs = useMemo(() => {
    const normalized = deferredQuery.trim().toLocaleLowerCase("vi");
    if (normalizedProgramCode(initialProgramCode) && normalizedProgramCode(deferredQuery) === normalizedProgramCode(initialProgramCode)) {
      return document.programs.filter((program) => normalizedProgramCode(program.code) === normalizedProgramCode(initialProgramCode));
    }
    return normalized ? searchIndex.filter(([, text]) => text.includes(normalized)).map(([program]) => program) : document.programs;
  }, [deferredQuery, document.programs, initialProgramCode, searchIndex]);
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
        {visible.map((program) => <ProgramDetails key={program.id} program={program} sourceMap={sourceMap} document={document} canonical={admissionIndex.byRowId.get(program.id)} />)}
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

function AdmissionsContent({ document, initialProgramCode }: {
  document: UniversityAdmissionsDocument;
  initialProgramCode?: string;
}) {
  const [view, setView] = useState<"source" | "assumptions">("source");
  useEffect(() => { setView("source"); }, [initialProgramCode]);
  const viewId = useId();
  const inputs = useMemo(() => {
    const columns = document.assumptions.headers.flatMap((header, index) => {
      const label = header.replace(/\s+/g, " ").trim();
      return /^(giả định bạn nhập\s*\/\s*30|ghi chú)$/iu.test(label) ? [] : [index];
    });
    return {
      headers: columns.map((index) => document.assumptions.headers[index]),
      rows: document.assumptions.rows.map((row) => columns.map((index) => row[index] ?? null)),
    };
  }, [document.assumptions]);
  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Chọn nhóm dữ liệu tuyển sinh">
        {([
          ["source", "Ngành và Điểm"],
          ["assumptions", "Đầu và đối chiếu"],
        ] as const).map(([id, title]) => (
          <Button key={id} type="button" size="sm" variant={view === id ? "primary" : "secondary"} className="min-h-11 font-semibold" aria-pressed={view === id} aria-controls={viewId} onClick={() => setView(id)}>{title}</Button>
        ))}
      </div>
      <div id={viewId}>
        {view === "source" ? <SourcesView document={document} initialProgramCode={initialProgramCode} /> : null}
        {view === "assumptions" ? (
          <section aria-label="Đầu và đối chiếu" data-admissions-view="assumptions">
            <h3 className="mb-3 font-display text-lg font-semibold text-navy">Đầu vào và giả định</h3>
            <RawRows headers={inputs.headers} rows={inputs.rows} label="giả định" searchable />
            <h3 className="mb-3 mt-6 font-display text-lg font-semibold text-navy">Các dòng cần đối chiếu</h3>
            <RawRows headers={document.verification.headers} rows={document.verification.rows} label="đối chiếu" searchable />
          </section>
        ) : null}
      </div>
    </>
  );
}

/** Reused by school pages; mounting it is the explicit request for one school's JSON. */
export function UniversityAdmissionsPanel({ schoolId, initialProgramCode }: {
  schoolId: string;
  initialProgramCode?: string;
}) {
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

  return document?.schoolId === schoolId ? <AdmissionsContent key={schoolId} document={document} initialProgramCode={initialProgramCode} /> : error?.schoolId === schoolId ? (
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
              <Dialog.Description className="mt-1 text-sm text-muted">Ngành, điểm tham khảo và đối chiếu</Dialog.Description>
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
