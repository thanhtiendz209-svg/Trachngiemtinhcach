import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { UNIVERSITIES } from "../data/universities.ts";
import type { UniversityAdmissionsDocument } from "../data/university-admissions-types.ts";

const records = UNIVERSITIES.map((uni) => {
  const summary = uni.admissions2026;
  assert.ok(summary, `Missing admissions summary for ${uni.id}`);
  const document = JSON.parse(
    readFileSync(new URL(`../../public${summary.file}`, import.meta.url), "utf8"),
  ) as UniversityAdmissionsDocument;
  return { uni, summary, document };
});

describe("2026 admissions workbook source mapping", () => {
  it("keeps all school documents, program rows, source rows and separate estimates", () => {
    assert.equal(records.length, 126);
    assert.equal(records.reduce((total, { document }) => total + document.programs.length, 0), 7868);
    assert.equal(records.reduce((total, { document }) => total + document.sources.length, 0), 17825);
    assert.equal(records.reduce((total, { document }) => total + document.estimates.rows.length, 0), 1692);
    assert.equal(records.reduce((total, { document }) => total + document.verification.rows.length, 0), 57);
    const sourceRows = records.flatMap(({ document }) => document.sources.map((source) => source.row));
    assert.equal(new Set(sourceRows).size, 17825, "Excel source rows must not be lost or assigned twice");
  });

  it("links every program reference to an Excel row in the same school's source document", () => {
    for (const { uni, summary, document } of records) {
      assert.equal(document.version, 1, uni.id);
      assert.equal(document.year, 2026, uni.id);
      assert.equal(document.schoolId, uni.id, uni.id);
      assert.equal(document.schoolName, uni.name, uni.id);
      assert.equal(document.sheet, summary.sheet, uni.id);
      assert.equal(document.updatedAt, summary.updatedAt, uni.id);
      assert.equal(document.programs.length, summary.programCount, uni.id);
      assert.equal(document.sources.length, summary.sourceRecordCount, uni.id);
      assert.equal(document.estimates.rows.length, summary.estimateCount, uni.id);
      const sources = new Set(document.sources.map((source) => source.row));
      for (const program of document.programs) {
        for (const row of program.sourceRows) {
          assert.ok(Number.isInteger(row) && sources.has(row), `${uni.id} ${program.id}: source Excel row ${row}`);
        }
      }
    }
  });

  it("uses only published pure-THPT cutoffs with an explicit 30-point scale in score summaries", () => {
    for (const { uni, summary, document } of records) {
      const actual = document.sources.filter((source) =>
        source.kind.trim() === "Trúng tuyển" &&
        ["Điểm thi THPT", "THPT"].includes(source.method.trim()) &&
        source.scale.trim() === "30" &&
        typeof source.value === "number" && Number.isFinite(source.value) &&
        source.value >= 0 && source.value <= 30,
      ).map((source) => source.value as number);
      const expected = [...new Set(actual)].sort((a, b) => a - b);
      assert.deepEqual(summary.thptValues, expected, `${uni.id}: exclude floors, estimates, mixed methods and other scales`);
    }
    const mixedOnly = records.find(({ uni }) => uni.id === "uni-126");
    assert.ok(mixedOnly);
    assert.ok(mixedOnly.document.sources.some((source) => source.method === "THPT + ĐGNL CA" && source.scale === "30"));
    assert.deepEqual(mixedOnly.summary.thptValues, [], "Combined admission scores are not pure THPT scores");
  });

  it("keeps HUST CH1's supplied 25.5 cutoff linked to Excel row 28, distinct from source ID 27", () => {
    const hust = records.find(({ uni }) => uni.id === "uni-001");
    assert.ok(hust);
    const source = hust.document.sources.find((record) => record.row === 28);
    assert.ok(source);
    assert.deepEqual(
      [source.id, source.schoolCode, source.code, source.method, source.scale, source.year, source.value, source.kind],
      [27, "BKA", "CH1", "Điểm thi THPT", "30", 2026, 25.5, "Trúng tuyển"],
    );
    assert.equal(source.classification, "Ngữ liệu tham khảo: Tuyensinh247");
    assert.equal(source.url, "https://diemthi.tuyensinh247.com/diem-chuan/dai-hoc-bach-khoa-ha-noi-BKA.html");
    assert.equal(source.originalUrl, source.url);
    const program = hust.document.programs.find((record) => record.code === "CH1");
    assert.ok(program);
    assert.ok(program.sourceRows.includes(28));
    assert.equal(program.columns.find((column) => column.label === "THPT\n/30")?.value, 25.5);
    assert.ok(hust.summary.thptValues.includes(25.5));
  });
});
