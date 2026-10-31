import type {
  AdmissionCell,
  AdmissionProgramRow,
  AdmissionSourceRecord,
  UniversityAdmissionsDocument,
} from "../data/university-admissions-types.ts";

export type WorkbookFactKind = "Điểm sàn" | "Trúng tuyển" | "Giá trị trong bảng";

export interface WorkbookAdmissionFact {
  id: string;
  label: string;
  value: AdmissionCell;
  method: string | null;
  /** Exact scale annotation, including weighted/converted qualifications. */
  scale: string | null;
  /** Only an explicit numeric scale suffix; never inferred from a score. */
  numericScale: number | null;
  kind: WorkbookFactKind;
  year: number;
  classification: "Giá trị trong bảng";
  floorSources: Array<{ scope: "program" | "school"; source: AdmissionSourceRecord }>;
  provenance: {
    sourceFile: string;
    sheet: string;
    programRowId: string;
    programRow: number | null;
    column: string;
    columnIndex: number;
  };
}

export interface ProgramAdmissionFacts {
  floors: WorkbookAdmissionFact[];
  cutoffs: WorkbookAdmissionFact[];
  residual: WorkbookAdmissionFact[];
}

export interface AdmissionFloorSummary {
  method: string;
  scale: string;
  year: number;
  min: number;
  max: number;
  /** Imported cells, including distinct combination rows; not a program count. */
  count: number;
}

const METHOD_LABELS: Readonly<Record<string, string>> = {
  THPT: "Điểm thi THPT",
  "Học bạ": "Điểm học bạ",
  "ĐGNL V-ACT": "Điểm ĐGNL V-ACT",
  "ĐGNL HSA": "Điểm ĐGNL HSA",
  "ĐGTD TSA": "Điểm ĐGTD TSA",
  "V-SAT": "Điểm Đánh giá đầu vào V-SAT",
  "ĐGNL SPT": "Điểm ĐGNL SPT",
  "ĐGNL H-SCA": "Điểm ĐGNL H-SCA",
  "ĐGNL QDA": "Điểm ĐGNL QDA",
  CCQT: "Chứng chỉ quốc tế",
  "Bài thi riêng": "Điểm thi riêng",
  "Ưu tiên/Thẳng": "ƯTXT, XT thẳng",
  Khác: "Khác",
};

function normalized(value: string) {
  return value.normalize("NFC").replace(/\s+/gu, " ").trim();
}

function methodLabel(value: string) {
  const label = normalized(value).replace(/^KH:\s*/u, "");
  return METHOD_LABELS[label] ?? label;
}

function finiteNumber(value: AdmissionCell): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function columnMetadata(label: string): {
  kind: WorkbookFactKind;
  method: string | null;
  scale: string | null;
  numericScale: number | null;
} | null {
  // Estimate cells belong to another product view and must not become facts.
  if (/ước\s*(lượng|tính)/iu.test(label)) return null;
  const [first = "", ...remaining] = label.split(/\r?\n/u);
  const title = normalized(first);
  const floor = title.startsWith("Sàn ");
  const rawMethod = floor ? title.slice(4) : title;
  const isMethod = floor || rawMethod.startsWith("KH:") || Object.hasOwn(METHOD_LABELS, rawMethod);
  if (!isMethod) {
    return { kind: "Giá trị trong bảng", method: null, scale: null, numericScale: null };
  }
  const suffix = normalized(remaining.join(" "));
  const scale = suffix.startsWith("/") ? suffix.slice(1).trim()
    : suffix === "Thang: xem nguồn" ? "Theo nguồn"
    : suffix === "Quy đổi: xem nguồn" ? "Quy đổi theo nguồn"
    : suffix || null;
  const numeric = scale?.match(/^(\d+(?:\.\d+)?)(?=\s|$)/u);
  return {
    kind: floor ? "Điểm sàn" : "Trúng tuyển",
    method: methodLabel(rawMethod),
    scale,
    numericScale: numeric ? Number(numeric[1]) : null,
  };
}

function matchesLinkedCutoff(fact: WorkbookAdmissionFact, source: AdmissionSourceRecord) {
  // Equal-looking numbers in other methods, scales, kinds or years are not evidence.
  // Only scalar numbers are compared: never parse strings such as "20–24" or "25".
  return fact.kind === "Trúng tuyển" && finiteNumber(fact.value) && finiteNumber(source.value) &&
    fact.method !== null && fact.scale !== null &&
    normalized(source.kind) === fact.kind && source.year === fact.year &&
    methodLabel(source.method) === fact.method && normalized(source.scale) === fact.scale &&
    source.value === fact.value;
}

/** Exact floor-cell evidence matching, shared with the document identity validator. */
export function matchesAdmissionFloorCell(
  column: { label: string; value: AdmissionCell },
  source: AdmissionSourceRecord,
  year: number,
): boolean {
  const metadata = columnMetadata(column.label);
  return metadata?.kind === "Điểm sàn" && metadata.method !== null && metadata.scale !== null &&
    finiteNumber(column.value) && finiteNumber(source.value) && source.value === column.value &&
    source.year === year && normalized(source.kind) === "Điểm sàn" &&
    methodLabel(source.method) === metadata.method && normalized(source.scale) === metadata.scale;
}

/**
 * Retain factual worksheet cells independently of linked cutoff records. Original
 * source records are never changed, merged, or used as a floor's provenance.
 */
export function getProgramAdmissionFacts(
  document: UniversityAdmissionsDocument,
  program: AdmissionProgramRow,
  linkedSources?: readonly AdmissionSourceRecord[],
): ProgramAdmissionFacts {
  const rows = new Set(program.sourceRows);
  const sources = linkedSources ?? document.sources.filter((source) => rows.has(source.row));
  const floorSources = new Map(document.floorSources?.map((source) => [source.row, source]));
  const result: ProgramAdmissionFacts = { floors: [], cutoffs: [], residual: [] };
  program.columns.forEach((column, columnIndex) => {
    const metadata = columnMetadata(column.label);
    if (!metadata || column.value == null || column.value === "") return;
    const row = program.id.match(/-row-(\d+)$/u);
    const fact: WorkbookAdmissionFact = {
      id: `${program.id}-column-${columnIndex}`,
      label: column.label,
      value: column.value,
      ...metadata,
      year: document.year,
      classification: "Giá trị trong bảng",
      floorSources: [],
      provenance: {
        sourceFile: document.sourceFile,
        sheet: document.sheet,
        programRowId: program.id,
        programRow: row ? Number(row[1]) : null,
        column: column.label,
        columnIndex,
      },
    };
    if (fact.kind === "Điểm sàn") {
      for (const ref of program.floorSourceRefs ?? []) {
        if (ref.column !== column.label) continue;
        for (const sourceRow of ref.sourceRows) {
          const source = floorSources.get(sourceRow);
          if (!source || !matchesAdmissionFloorCell(column, source, document.year)) continue;
          const codeMatches = ref.scope === "school" ? normalized(source.code) === "*"
            : normalized(source.code).toLowerCase() === normalized(program.code).toLowerCase();
          if (codeMatches) fact.floorSources.push({ scope: ref.scope, source });
        }
      }
      result.floors.push(fact);
    }
    else if (fact.kind === "Trúng tuyển") {
      if (!sources.some((source) => rows.has(source.row) && matchesLinkedCutoff(fact, source))) {
        result.cutoffs.push(fact);
      }
    } else result.residual.push(fact);
  });
  return result;
}

/** School-card ranges compare only finite floor values with the same explicit scale. */
export function summarizeAdmissionFloors(document: UniversityAdmissionsDocument): AdmissionFloorSummary[] {
  const summaries = new Map<string, AdmissionFloorSummary>();
  for (const program of document.programs) {
    for (const column of program.columns) {
      const metadata = columnMetadata(column.label);
      if (metadata?.kind !== "Điểm sàn" || !metadata.method || !metadata.scale ||
        metadata.numericScale === null || !finiteNumber(column.value)) continue;
      const key = JSON.stringify([metadata.method, metadata.scale, document.year]);
      const summary = summaries.get(key);
      if (summary) {
        summary.min = Math.min(summary.min, column.value);
        summary.max = Math.max(summary.max, column.value);
        summary.count += 1;
      } else {
        summaries.set(key, {
          method: metadata.method,
          scale: metadata.scale,
          year: document.year,
          min: column.value,
          max: column.value,
          count: 1,
        });
      }
    }
  }
  return [...summaries.values()].sort((a, b) =>
    a.method.localeCompare(b.method, "vi") || a.scale.localeCompare(b.scale, "vi") || a.year - b.year,
  );
}
