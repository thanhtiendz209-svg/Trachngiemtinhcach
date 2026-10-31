export type AdmissionCell = string | number | boolean | null;

export interface AdmissionSourceRecord {
  /** Excel row in “Dữ liệu nguồn 2026”; distinct from the source's own ID. */
  row: number;
  id: number;
  schoolCode: string;
  code: string;
  name: string;
  method: string;
  combinations: string;
  scale: string;
  year: number;
  value: AdmissionCell;
  condition: string;
  classification: string;
  url: string;
  kind: string;
  originalUrl: string;
}

export interface AdmissionProgramRow {
  id: string;
  code: string;
  name: string;
  combinations: string;
  origin: string;
  originalCode: string;
  originalName: string;
  matchStatus: string;
  conditions: string;
  sourceStatus: string;
  sourceRows: number[];
  /** Exact workbook floor sources; school scope is explicitly marked, never inferred as a program cutoff. */
  floorSourceRefs?: Array<{ column: string; sourceRows: number[]; scope: "program" | "school" }>;
  /** Exact labelled cells, retaining different methods, scales and estimates. */
  columns: Array<{ label: string; value: AdmissionCell }>;
}

export interface AdmissionRange {
  method: string;
  scale: string;
  kind: string;
  min: number;
  max: number;
  count: number;
}

export interface UniversityAdmissionsSummary {
  year: number;
  updatedAt: string;
  file: string;
  sheet: string;
  programCount: number;
  sourceRecordCount: number;
  estimateCount: number;
  /** Published admission cutoffs only: THPT, explicitly on a 30-point scale. */
  thptValues: number[];
  methods: string[];
  ranges: AdmissionRange[];
  notice: string;
}

export interface UniversityAdmissionsDocument {
  version: 1;
  year: number;
  schoolId: string;
  schoolName: string;
  sourceFile: string;
  sheet: string;
  updatedAt: string;
  notice: string;
  programs: AdmissionProgramRow[];
  sources: AdmissionSourceRecord[];
  /** Floor records from the supplied source worksheet, kept separate from admission cutoffs. */
  floorSources?: AdmissionSourceRecord[];
  /** Header and values are preserved from the separate scenario worksheet. */
  estimates: { headers: string[]; rows: AdmissionCell[][] };
  assumptions: { notice: string; headers: string[]; rows: AdmissionCell[][] };
  verification: { headers: string[]; rows: AdmissionCell[][] };
}
