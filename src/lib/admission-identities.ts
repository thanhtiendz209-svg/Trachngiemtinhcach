import type {
  AdmissionProgramRow,
  AdmissionSourceRecord,
  UniversityAdmissionsDocument,
} from "../data/university-admissions-types.ts";
import { matchesAdmissionFloorCell } from "./admission-facts.ts";

export interface CanonicalProgram {
  id: string;
  offeringId: string;
  schoolId: string;
  /** A deterministic original label; all imported labels remain on the source rows. */
  code: string;
  name: string;
  origin: string;
  /** Exact source-code scope for this program; empty means the source scope is unknown. */
  sourceSchoolCodes: string[];
  rowIds: string[];
  /** Distinct Excel references, not combined admission scores. */
  sourceRows: number[];
}

export interface SchoolAdmissionIndex {
  schoolId: string;
  year: number;
  /** Mã trường trong nguồn; aliases are not asserted to be official school identifiers. */
  sourceSchoolCodes: string[];
  programs: CanonicalProgram[];
  byRowId: ReadonlyMap<string, CanonicalProgram>;
}

const indexes = new WeakMap<UniversityAdmissionsDocument, SchoolAdmissionIndex>();

/** No accent stripping, punctuation removal, fuzzy matching or inferred abbreviations. */
function normalized(value: string): string {
  return value.normalize("NFC").replace(/\s+/gu, " ").trim().toLowerCase();
}

function compare(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

function requireText(value: unknown, field: string, empty = false): asserts value is string {
  if (typeof value !== "string" || (!empty && normalized(value).length === 0)) {
    throw new Error(`Invalid admissions identity: ${field}`);
  }
}

function requireInteger(value: unknown, field: string, min = 1): asserts value is number {
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < min) {
    throw new Error(`Invalid admissions identity: ${field}`);
  }
}

// Encoding the entire JSON tuple preserves its component boundaries. Unlike a slug
// or hash, this cannot collide when a code/name/origin contains a separator.
function tupleId(kind: string, tuple: Array<string | number | string[] | null>): string {
  return `${kind}:${encodeURIComponent(JSON.stringify(tuple))}`;
}

function validateSources(document: UniversityAdmissionsDocument): Map<number, AdmissionSourceRecord> {
  const sources = new Map<number, AdmissionSourceRecord>();
  const sourceIds = new Set<number>();
  for (const source of document.sources) {
    if (!source || typeof source !== "object") throw new Error("Invalid admissions source record");
    requireInteger(source.row, "source.row", 2);
    requireInteger(source.id, "source.id");
    if (sources.has(source.row) || sourceIds.has(source.id)) throw new Error("Duplicate admissions source record");
    // This importer records the Excel header as row 1, separately from its source ID.
    if (source.row !== source.id + 1) throw new Error("Invalid admissions Excel source reference");
    requireText(source.schoolCode, "source.schoolCode");
    requireText(source.code, "source.code");
    requireText(source.name, "source.name");
    if (source.year !== document.year) throw new Error("Admissions source year does not match its school document");
    sources.set(source.row, source);
    sourceIds.add(source.id);
  }
  return sources;
}

function validateProgram(
  program: AdmissionProgramRow,
  document: UniversityAdmissionsDocument,
  sources: ReadonlyMap<number, AdmissionSourceRecord>,
  seenRowIds: Set<string>,
  referencedSources: Set<number>,
): void {
  if (!program || typeof program !== "object") throw new Error("Invalid admissions program row");
  requireText(program.id, "program.id");
  if (!program.id.startsWith(`${document.schoolId}-row-`) ||
    !/^\d+$/.test(program.id.slice(`${document.schoolId}-row-`.length))) {
    throw new Error("Admissions program row does not belong to its school document");
  }
  if (seenRowIds.has(program.id)) throw new Error("Duplicate admissions program row ID");
  seenRowIds.add(program.id);
  requireText(program.code, "program.code");
  requireText(program.name, "program.name");
  requireText(program.origin, "program.origin", true);
  if (!Array.isArray(program.sourceRows)) throw new Error("Invalid admissions program source references");
  const seen = new Set<number>();
  for (const row of program.sourceRows) {
    requireInteger(row, "program.sourceRows", 2);
    if (seen.has(row)) throw new Error("Duplicate source reference within an admissions program row");
    seen.add(row);
    const source = sources.get(row);
    if (!source) throw new Error("Admissions source reference is outside its school document");
    if (normalized(source.code) !== normalized(program.code)) {
      throw new Error("Admissions source code does not match its program row");
    }
    referencedSources.add(row);
  }
}

/** Supplemental floors are evidence, never inputs to canonical program identity. */
function validateFloorReferences(
  document: UniversityAdmissionsDocument,
  originalSources: ReadonlyMap<number, AdmissionSourceRecord>,
): void {
  if (document.floorSources !== undefined && !Array.isArray(document.floorSources)) {
    throw new Error("Invalid admissions floor sources");
  }
  const floors = new Map<number, AdmissionSourceRecord>();
  const ids = new Set([...originalSources.values()].map((source) => source.id));
  const schoolAliases = new Set(document.sources.map((source) => source.schoolCode));
  for (const source of document.floorSources ?? []) {
    if (!source || typeof source !== "object") throw new Error("Invalid admissions floor source");
    requireInteger(source.row, "floor.row", 2);
    requireInteger(source.id, "floor.id");
    if (originalSources.has(source.row) || floors.has(source.row) || ids.has(source.id)) {
      throw new Error("Duplicate admissions floor source record");
    }
    if (source.row !== source.id + 1) throw new Error("Invalid admissions floor Excel reference");
    requireText(source.schoolCode, "floor.schoolCode");
    requireText(source.code, "floor.code");
    requireText(source.method, "floor.method");
    requireText(source.scale, "floor.scale");
    if (source.kind !== "Điểm sàn" || source.year !== document.year) {
      throw new Error("Admissions floor kind or year does not match its school document");
    }
    if (schoolAliases.size && !schoolAliases.has(source.schoolCode)) {
      throw new Error("Admissions floor source code is outside its school document");
    }
    floors.set(source.row, source);
    ids.add(source.id);
  }
  const referenced = new Set<number>();
  for (const program of document.programs) {
    if (program.floorSourceRefs !== undefined && !Array.isArray(program.floorSourceRefs)) {
      throw new Error("Invalid admissions floor references");
    }
    const rowAliases = new Set(program.sourceRows.map((row) => originalSources.get(row)!.schoolCode));
    const allowedAliases = rowAliases.size ? rowAliases : schoolAliases;
    const seen = new Set<string>();
    for (const reference of program.floorSourceRefs ?? []) {
      if (!reference || typeof reference !== "object" ||
        !["program", "school"].includes(reference.scope) ||
        !Array.isArray(reference.sourceRows) || reference.sourceRows.length === 0) {
        throw new Error("Invalid admissions floor reference scope");
      }
      requireText(reference.column, "floorReference.column");
      if (!Array.isArray(program.columns)) throw new Error("Missing admissions floor column");
      const columns = program.columns.filter((column) => column.label === reference.column);
      if (columns.length !== 1) throw new Error("Missing or ambiguous admissions floor column");
      for (const row of reference.sourceRows) {
        requireInteger(row, "floorReference.sourceRows", 2);
        const key = JSON.stringify([reference.column, reference.scope, row]);
        if (seen.has(key)) throw new Error("Duplicate admissions floor reference");
        seen.add(key);
        const source = floors.get(row);
        if (!source) throw new Error("Admissions floor reference is outside its school document");
        if (allowedAliases.size && !allowedAliases.has(source.schoolCode)) {
          throw new Error("Admissions floor reference belongs to another source-school scope");
        }
        if (reference.scope === "school" ? source.code !== "*" :
          source.code === "*" || normalized(source.code) !== normalized(program.code)) {
          throw new Error("Admissions floor source does not match its explicit code scope");
        }
        if (!matchesAdmissionFloorCell(columns[0], source, document.year)) {
          throw new Error("Admissions floor source does not match its column value, method or scale");
        }
        referenced.add(row);
      }
    }
  }
  if (referenced.size !== floors.size) throw new Error("Unreferenced admissions floor source record");
}

/**
 * Identity is school + code + name + origin + exact source-school-code scope;
 * an annual offering additionally includes year. Source aliases may indicate
 * distinct campuses, so they must not be silently merged. Empty scope is
 * explicitly unknown. Imported rows, point values and provenance are never rewritten.
 * Documents are treated as immutable after loading; only a valid document is cached.
 */
export function getSchoolAdmissionIndex(document: UniversityAdmissionsDocument): SchoolAdmissionIndex {
  const cached = indexes.get(document);
  if (cached) return cached;
  if (!document || typeof document !== "object" || document.version !== 1 ||
    !Array.isArray(document.programs) || !Array.isArray(document.sources)) {
    throw new Error("Invalid admissions school document");
  }
  requireText(document.schoolId, "schoolId");
  if (!/^uni-\d+$/.test(document.schoolId)) throw new Error("Invalid admissions school scope");
  requireInteger(document.year, "year");
  const sources = validateSources(document);
  const rows = new Set<string>();
  const referencedSources = new Set<number>();
  const groups = new Map<string, { rows: AdmissionProgramRow[]; sourceSchoolCodes: string[] }>();
  for (const program of document.programs) {
    validateProgram(program, document, sources, rows, referencedSources);
    // Only original sourceRows define identity. Supplemental floor/source links
    // must not change a program ID when more evidence is imported later.
    const sourceSchoolCodes = [...new Set(program.sourceRows.map((row) => sources.get(row)!.schoolCode))].sort(compare);
    const id = tupleId("program", [document.schoolId, normalized(program.code), normalized(program.name), normalized(program.origin), sourceSchoolCodes.length ? sourceSchoolCodes : null]);
    const group = groups.get(id);
    if (group) group.rows.push(program);
    else groups.set(id, { rows: [program], sourceSchoolCodes });
  }
  if (referencedSources.size !== sources.size) throw new Error("Unreferenced admissions source record");
  validateFloorReferences(document, sources);

  const byRowId = new Map<string, CanonicalProgram>();
  const programs: CanonicalProgram[] = [];
  for (const [id, group] of [...groups].sort(([a], [b]) => compare(a, b))) {
    const ordered = [...group.rows].sort((a, b) => compare(a.id, b.id));
    const representative = ordered[0];
    const program: CanonicalProgram = {
      id,
      offeringId: tupleId("offering", [document.schoolId, document.year, normalized(representative.code), normalized(representative.name), normalized(representative.origin), group.sourceSchoolCodes.length ? group.sourceSchoolCodes : null]),
      schoolId: document.schoolId,
      code: representative.code,
      name: representative.name,
      origin: representative.origin,
      sourceSchoolCodes: group.sourceSchoolCodes,
      rowIds: ordered.map((row) => row.id),
      sourceRows: [...new Set(ordered.flatMap((row) => row.sourceRows))].sort((a, b) => a - b),
    };
    programs.push(program);
    for (const row of ordered) byRowId.set(row.id, program);
  }
  const index: SchoolAdmissionIndex = {
    schoolId: document.schoolId,
    year: document.year,
    sourceSchoolCodes: [...new Set(document.sources.map((source) => source.schoolCode))].sort(compare),
    programs,
    byRowId,
  };
  indexes.set(document, index);
  return index;
}
