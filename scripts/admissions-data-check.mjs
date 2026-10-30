#!/usr/bin/env node
/** Integrity checks for the imported workbook; no network or app runtime needed. */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const expected = {
  schools: 126,
  programRows: 7868,
  sourceRows: 17825,
  estimates: 1692,
  verification: 57,
  majorItems: 4139,
  originalMajorItems: 1769,
  workbookSha256: "3ed7b403407ee8c1d37c83fddaf76189ef5f7927b22b307d4992c05a76e8b437",
};
const unchangedQuizFiles = {
  "src/data/questions.ts": "9bdd247277c15d8f7afcc5db320e302cef8054d432141fbc3d97f597a15ac6a6",
  "src/data/riasec-questions.ts": "071d0788dc0c3d8fb560a1a4bc50240021cfa74893e88eb232be9336f9a6be9b",
  "src/data/bigfive.ts": "47b2ee39c3da49e6108979db4a1b8e0c94ade4daf3ac650db18d2b1efbe400fe",
  "src/lib/quiz-engine.ts": "4389354e89fa4d322de693b7f93bb1ca1b23c989dacac48d423e578931d66fe7",
};

function universitiesAt(path) {
  const source = readFileSync(path, "utf8");
  const match = source.match(/export const UNIVERSITIES\s*=\s*(\[[\s\S]*\])\s+as University\[\]/);
  assert.ok(match, `University source must contain a JSON-backed array: ${path}`);
  return JSON.parse(match[1]);
}

function numeric(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function label(value) {
  return String(value ?? "").normalize("NFC").replace(/\s+/gu, " ").trim();
}

function cutoff(source) {
  return ["Điểm thi THPT", "THPT"].includes(source.method)
    && source.scale === "30" && source.kind === "Trúng tuyển"
    && numeric(source.value) && source.value >= 0 && source.value <= 30;
}

const universities = universitiesAt(join(root, "src/data/universities.ts"));
const ids = Array.from({ length: expected.schools }, (_, index) => `uni-${String(index + 1).padStart(3, "0")}`);
assert.deepEqual(universities.map((school) => school.id).sort(), ids, "Keep all original school IDs exactly once");
const files = readdirSync(join(root, "public/admissions/2026")).filter((file) => file.endsWith(".json")).sort();
assert.deepEqual(files, ids.map((id) => `${id}.json`), "One detail JSON per school, without missing or extra schools");
const totals = { schools: universities.length, programRows: 0, sourceRows: 0, estimates: 0, verification: 0, majorItems: 0 };
const globalSources = new Set();
const documents = new Map();

for (const school of universities) {
  const document = JSON.parse(readFileSync(join(root, `public/admissions/2026/${school.id}.json`), "utf8"));
  const summary = school.admissions2026;
  documents.set(school.id, document);
  assert.equal(document.version, 1, school.id);
  assert.equal(document.year, 2026, school.id);
  assert.equal(document.schoolId, school.id, "JSON must belong to the requested school ID");
  assert.equal(document.schoolName, school.name, "School labels must match their data");
  assert.ok(document.sourceFile.endsWith(".xlsx"), `${school.id}: preserve workbook filename`);
  assert.ok(document.notice.length > 50, `${school.id}: keep source/estimate caveats`);
  assert.ok(summary, `${school.id}: missing lightweight summary`);
  assert.equal(summary.file, `/admissions/2026/${school.id}.json`);
  assert.equal(summary.year, 2026);
  assert.equal(summary.sheet, document.sheet);
  assert.equal(summary.programCount, document.programs.length);
  assert.equal(summary.sourceRecordCount, document.sources.length);
  assert.equal(summary.estimateCount, document.estimates.rows.length);

  const sourceMap = new Map();
  for (const source of document.sources) {
    assert.ok(Number.isInteger(source.row) && source.row >= 2, `${school.id}: invalid Excel row`);
    assert.equal(source.row, source.id + 1, `${school.id}: Excel row is not the source's own ID`);
    assert.equal(source.year, 2026);
    assert.ok(!sourceMap.has(source.row), `${school.id}: duplicate Excel row ${source.row}`);
    assert.ok(!globalSources.has(source.row), `Source Excel row ${source.row} assigned to multiple schools`);
    assert.ok(source.schoolCode && source.code, `${school.id}: missing source code`);
    assert.ok(source.method && source.scale && source.kind, `${school.id}: preserve method, scale and kind`);
    sourceMap.set(source.row, source);
    globalSources.add(source.row);
  }

  const programIds = new Set();
  const referenced = new Set();
  for (const program of document.programs) {
    assert.match(program.id, new RegExp(`^${school.id}-row-\\d+$`));
    assert.ok(!programIds.has(program.id), `${school.id}: duplicate program row ${program.id}`);
    programIds.add(program.id);
    assert.ok(program.code && program.name, `${program.id}: keep code and name`);
    assert.ok(Array.isArray(program.columns), `${program.id}: keep labelled raw cells`);
    assert.equal(new Set(program.sourceRows).size, program.sourceRows.length, `${program.id}: repeated source reference`);
    for (const row of program.sourceRows) {
      const source = sourceMap.get(row);
      assert.ok(source, `${program.id}: unresolved source Excel row ${row}`);
      assert.equal(source.code, program.code, `${program.id}: source code ${source.code} does not match ${program.code}`);
      referenced.add(row);
    }
    for (const column of program.columns) assert.ok(column.label, `${program.id}: unlabeled source/estimate cell`);
  }
  assert.deepEqual([...referenced].sort((a, b) => a - b), [...sourceMap.keys()].sort((a, b) => a - b), `${school.id}: orphan source records`);
  const thptValues = [...new Set(document.sources.filter(cutoff).map((source) => source.value))].sort((a, b) => a - b);
  assert.deepEqual(summary.thptValues, thptValues, `${school.id}: cutoff summary must exclude floors, mixed methods and estimates`);
  assert.deepEqual([...summary.methods].sort(), [...new Set(document.sources.map((source) => source.method))].sort());
  for (const range of summary.ranges) {
    const values = document.sources.filter((source) => source.method === range.method && source.scale === range.scale && source.kind === range.kind && numeric(source.value)).map((source) => source.value);
    assert.equal(range.count, values.length, `${school.id}: range count must preserve method/scale/kind`);
    assert.equal(range.min, Math.min(...values));
    assert.equal(range.max, Math.max(...values));
  }

  assert.ok(Array.isArray(document.estimates.headers) && Array.isArray(document.estimates.rows));
  assert.ok(document.assumptions.notice.includes("giả định"), `${school.id}: keep assumptions separate and explicit`);
  for (const row of document.estimates.rows) {
    assert.equal(row.length, document.estimates.headers.length, `${school.id}: estimate columns changed`);
    assert.ok(document.sources.some((source) => source.schoolCode === label(row[0]) && source.code === label(row[1]) && label(source.name) === label(row[2])), `${school.id}: estimate assigned to the wrong school/code/name`);
  }
  assert.equal(document.verification.headers.length, 6, `${school.id}: preserve verification headers`);
  totals.programRows += document.programs.length;
  totals.sourceRows += document.sources.length;
  totals.estimates += document.estimates.rows.length;
  totals.verification += document.verification.rows.length;
  totals.majorItems += school.majorItems.length;
}

for (const [key, value] of Object.entries(totals)) assert.equal(value, expected[key], `Unexpected ${key} total`);
assert.equal(globalSources.size, expected.sourceRows, "Distinct Excel rows must account for all referenced source records");
const hust = documents.get("uni-001");
const ch1 = hust.programs.find((program) => program.id === "uni-001-row-16");
assert.equal(ch1?.code, "CH1");
assert.deepEqual(ch1.sourceRows, [28, 111, 179, 247], "Use Excel row references, not source IDs");
assert.ok(hust.sources.some((source) => source.row === 28 && source.code === "CH1" && cutoff(source) && source.value === 25.5), "HUST CH1 cutoff must remain 25.5/30");
assert.ok(documents.get("uni-002").programs.some((program) => program.code === "7310101_2" && program.name === "Kinh tế và quản lý đô thị"), "Keep newly imported NEU programs");

let preservedOriginalMajorItems = null;
if (process.env.ADMISSIONS_BASELINE_UNIVERSITIES) {
  const baseline = universitiesAt(process.env.ADMISSIONS_BASELINE_UNIVERSITIES);
  preservedOriginalMajorItems = 0;
  for (const oldSchool of baseline) {
    const school = universities.find((entry) => entry.id === oldSchool.id);
    assert.ok(school, `Missing original school ${oldSchool.id}`);
    const pairs = new Set(school.majorItems.map((item) => JSON.stringify([item.code, item.name])));
    for (const item of oldSchool.majorItems) {
      assert.ok(pairs.has(JSON.stringify([item.code, item.name])), `${school.id}: original major removed ${item.code} ${item.name}`);
      preservedOriginalMajorItems++;
    }
    assert.deepEqual(school.focusRiasec, oldSchool.focusRiasec, `${school.id}: unchanged career-matching signal`);
    assert.equal(school.category, oldSchool.category, `${school.id}: unchanged school category`);
  }
  assert.equal(preservedOriginalMajorItems, expected.originalMajorItems);
}

for (const [file, hash] of Object.entries(unchangedQuizFiles)) {
  assert.equal(createHash("sha256").update(readFileSync(join(root, file))).digest("hex"), hash, `${file}: original questions/scoring changed`);
}
const importReport = JSON.parse(readFileSync(join(root, "data/import-reports/admissions-2026.json"), "utf8"));
assert.equal(importReport.sourceSha256, expected.workbookSha256);
assert.equal(importReport.programRows, totals.programRows);
assert.equal(importReport.distinctReferencedSourceExcelRows, globalSources.size);
assert.equal(importReport.estimateRows, totals.estimates);
assert.equal(importReport.verificationRows, totals.verification);
assert.deepEqual(importReport.unmappedEstimates, []);
const result = { ok: true, ...totals, distinctSourceExcelRows: globalSources.size, preservedOriginalMajorItems, unchangedQuizFiles: Object.keys(unchangedQuizFiles), workbookSha256: expected.workbookSha256 };
if (process.env.ADMISSIONS_CHECK_REPORT) writeFileSync(process.env.ADMISSIONS_CHECK_REPORT, JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
