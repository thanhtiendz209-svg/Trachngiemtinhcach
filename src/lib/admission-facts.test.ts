import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { describe, it } from "node:test";
import type { AdmissionCell, AdmissionProgramRow, AdmissionSourceRecord, UniversityAdmissionsDocument } from "../data/university-admissions-types.ts";
import { getProgramAdmissionFacts, matchesAdmissionFloorCell, summarizeAdmissionFloors } from "./admission-facts.ts";

function source(overrides: Partial<AdmissionSourceRecord> = {}): AdmissionSourceRecord {
  return {
    row: 2, id: 1, schoolCode: "SCHOOL", code: "A", name: "Ngành A",
    method: "Điểm thi THPT", combinations: "A00", scale: "30", year: 2026,
    value: 25.5, condition: "Điều kiện nguồn", classification: "Ngữ liệu tham khảo",
    url: "https://example.test/cutoff", kind: "Trúng tuyển", originalUrl: "https://example.test/original",
    ...overrides,
  };
}

function fixture(columns: Array<{ label: string; value: AdmissionCell }>, sources: AdmissionSourceRecord[] = []): UniversityAdmissionsDocument {
  const program: AdmissionProgramRow = {
    id: "uni-001-row-16", code: "A", name: "Ngành A", combinations: "A00",
    origin: "Tiêu chuẩn", originalCode: "A", originalName: "Ngành A", matchStatus: "Khớp",
    conditions: "Điều kiện chương trình", sourceStatus: "Tham khảo", sourceRows: sources.map((item) => item.row), columns,
  };
  return {
    version: 1, year: 2026, schoolId: "uni-001", schoolName: "Trường A",
    sourceFile: "workbook.xlsx", sheet: "SCHOOL", updatedAt: "2026-10-31", notice: "Tệp người dùng cung cấp",
    programs: [program], sources, estimates: { headers: [], rows: [] },
    assumptions: { notice: "Giả định", headers: [], rows: [] }, verification: { headers: [], rows: [] },
  };
}

describe("worksheet facts stay separate from linked cutoffs", () => {
  it("retains a floor beside an identical-valued cutoff with workbook provenance", () => {
    const document = fixture([{ label: "Sàn THPT\n/30", value: 25.5 }, { label: "THPT\n/30", value: 25.5 }], [source()]);
    const facts = getProgramAdmissionFacts(document, document.programs[0]);
    assert.equal(facts.floors.length, 1);
    assert.equal(facts.cutoffs.length, 0);
    assert.deepEqual(facts.floors[0].provenance, {
      sourceFile: "workbook.xlsx", sheet: "SCHOOL", programRowId: "uni-001-row-16",
      programRow: 16, column: "Sàn THPT\n/30", columnIndex: 0,
    });
    assert.equal(facts.floors[0].classification, "Giá trị trong bảng");
    assert.deepEqual(facts.floors[0].floorSources, []);
  });

  it("retains source-less 16.5 as a floor on its explicit scale", () => {
    const document = fixture([{ label: "Sàn THPT\n/30", value: 16.5 }]);
    const floor = getProgramAdmissionFacts(document, document.programs[0]).floors[0];
    assert.equal(floor.value, 16.5);
    assert.equal(floor.kind, "Điểm sàn");
    assert.equal(floor.scale, "30");
    assert.equal(floor.method, "Điểm thi THPT");
  });

  it("suppresses only strictly matched cutoff cells, never conflicting source records", () => {
    const sources = [source(), source({ row: 3, id: 2, value: 27, condition: "Điều kiện khác" })];
    const document = fixture([{ label: "THPT\n/30", value: 25.5 }], sources);
    const before = JSON.stringify(document);
    assert.equal(getProgramAdmissionFacts(document, document.programs[0]).cutoffs.length, 0);
    assert.equal(JSON.stringify(document), before);
    assert.deepEqual(document.sources.map((item) => [item.value, item.condition]), [[25.5, "Điều kiện nguồn"], [27, "Điều kiện khác"]]);
    document.programs[0].columns[0].value = 26;
    assert.equal(getProgramAdmissionFacts(document, document.programs[0]).cutoffs[0].value, 26);
  });

  it("keeps unmatched methods, kinds, years and weighted scales instead of inferring equivalence", () => {
    for (const difference of [
      { method: "THPT + CCNN" }, { kind: "Điểm sàn" }, { year: 2025 },
      { scale: "40 (môn hệ số)" }, { scale: "30 quy đổi" },
    ]) {
      const document = fixture([{ label: "THPT\n/30", value: 25.5 }], [source(difference)]);
      assert.equal(getProgramAdmissionFacts(document, document.programs[0]).cutoffs.length, 1);
    }
    const weighted = fixture([{ label: "THPT\n/40 (môn hệ số)", value: 35 }], [source({ value: 35, scale: "40" })]);
    assert.equal(getProgramAdmissionFacts(weighted, weighted.programs[0]).cutoffs[0].scale, "40 (môn hệ số)");
  });

  it("does not parse score strings or invent a numeric unknown scale", () => {
    const document = fixture([
      { label: "THPT\n/30", value: "25.5" },
      { label: "Sàn THPT\n/30", value: "18–22" },
      { label: "THPT\nThang: xem nguồn", value: 25.5 },
      { label: "ĐGNL HSA\nQuy đổi: xem nguồn", value: 20 },
    ], [source()]);
    const facts = getProgramAdmissionFacts(document, document.programs[0]);
    assert.equal(facts.cutoffs.length, 3);
    assert.equal(facts.cutoffs[0].value, "25.5");
    assert.equal(facts.cutoffs[1].scale, "Theo nguồn");
    assert.equal(facts.cutoffs[1].numericScale, null);
    assert.equal(facts.cutoffs[2].scale, "Quy đổi theo nguồn");
    assert.equal(facts.cutoffs[2].numericScale, null);
    assert.equal(facts.floors[0].value, "18–22");
    assert.deepEqual(summarizeAdmissionFloors(document), []);
  });

  it("retains residual factual values and excludes every estimate column", () => {
    const document = fixture([
      { label: "Khoảng điểm trường 2026\nTheo phương thức / thang", value: "THPT: 20–24 (/30)" },
      { label: "Chỉ số mới\n/100", value: 70 },
      { label: "THPT ước lượng /30", value: 18 },
      { label: "Chi tiết ước tính", value: "Không phải điểm công bố" },
    ]);
    const facts = getProgramAdmissionFacts(document, document.programs[0]);
    assert.deepEqual(facts.residual.map((item) => item.value), ["THPT: 20–24 (/30)", 70]);
    assert.ok(facts.residual.every((item) => item.kind === "Giá trị trong bảng" && item.method === null));
    assert.equal(facts.cutoffs.length + facts.floors.length, 0);
  });

  it("ignores a matching source that is not linked to the imported program row", () => {
    const document = fixture([{ label: "THPT\n/30", value: 25.5 }], [source()]);
    document.programs[0].sourceRows = [];
    assert.equal(getProgramAdmissionFacts(document, document.programs[0], document.sources).cutoffs.length, 1);
  });
});

describe("floor evidence keeps scope and exact original provenance", () => {
  it("attaches all explicit matching program and school-wide floor records", () => {
    const document = fixture([{ label: "Sàn THPT\n/30", value: 22 }], [source({ value: 22 })]);
    document.floorSources = [
      source({ row: 101, id: 100, value: 22, kind: "Điểm sàn", method: "THPT", url: "https://example.test/program-floor", classification: "Nguồn chương trình", condition: "Điều kiện riêng" }),
      source({ row: 102, id: 101, code: "*", value: 22, kind: "Điểm sàn", method: "THPT", url: "https://example.test/school-floor", classification: "Nguồn trường", condition: "Điều kiện toàn trường" }),
    ];
    document.programs[0].floorSourceRefs = [
      { column: "Sàn THPT\n/30", sourceRows: [101], scope: "program" },
      { column: "Sàn THPT\n/30", sourceRows: [102], scope: "school" },
    ];
    const floor = getProgramAdmissionFacts(document, document.programs[0]).floors[0];
    assert.deepEqual(floor.floorSources.map(({ scope, source: item }) => [scope, item.url, item.condition, item.classification]), [
      ["program", "https://example.test/program-floor", "Điều kiện riêng", "Nguồn chương trình"],
      ["school", "https://example.test/school-floor", "Điều kiện toàn trường", "Nguồn trường"],
    ]);
    assert.ok(floor.floorSources.every(({ source: item }) => item.url !== document.sources[0].url));
    assert.equal(floor.classification, "Giá trị trong bảng");
  });

  it("does not attach a cutoff URL, wrong source value or unrelated program code", () => {
    const document = fixture([{ label: "Sàn THPT\n/30", value: 22 }]);
    document.floorSources = [source({ value: 22 }), source({ row: 3, id: 2, kind: "Điểm sàn", value: 23 }), source({ row: 4, id: 3, kind: "Điểm sàn", value: 22, code: "B" })];
    document.programs[0].floorSourceRefs = [{ column: "Sàn THPT\n/30", sourceRows: [2, 3, 4], scope: "program" }];
    assert.deepEqual(getProgramAdmissionFacts(document, document.programs[0]).floors[0].floorSources, []);
  });

  it("shares a strict numeric method/scale/kind/year matcher with validation", () => {
    const column = { label: "Sàn THPT\n/30", value: 22 };
    const evidence = source({ kind: "Điểm sàn", method: "THPT", value: 22 });
    assert.equal(matchesAdmissionFloorCell(column, evidence, 2026), true);
    for (const difference of [{ scale: "100" }, { method: "THPT + CCNN" }, { kind: "Trúng tuyển" }, { year: 2025 }, { value: "22" }]) {
      assert.equal(matchesAdmissionFloorCell(column, { ...evidence, ...difference }, 2026), false);
    }
  });
});

describe("school-card floor summaries", () => {
  it("keeps different methods, scales and conversions in separate ranges", () => {
    const document = fixture([
      { label: "Sàn THPT\n/30", value: 18 }, { label: "Sàn THPT\n/30", value: 22 },
      { label: "Sàn ĐGNL HSA\n/150", value: 80 }, { label: "Sàn ĐGNL HSA\n/30 quy đổi", value: 20 },
      { label: "Sàn THPT\nThang: xem nguồn", value: 25 }, { label: "THPT\n/30", value: 29 },
      { label: "Sàn THPT\n/30", value: "18–22" },
    ]);
    const summary = summarizeAdmissionFloors(document);
    assert.equal(summary.length, 3);
    assert.deepEqual(summary.find((item) => item.method === "Điểm thi THPT"), { method: "Điểm thi THPT", scale: "30", year: 2026, min: 18, max: 22, count: 2 });
    assert.deepEqual(summary.filter((item) => item.method === "Điểm ĐGNL HSA").map((item) => item.scale).sort(), ["150", "30 quy đổi"]);
  });

  it("covers every imported floor cell without changing original cutoff records", () => {
    let floors = 0;
    let unmatchedCutoffs = 0;
    let residual = 0;
    let linkedFloors = 0;
    const directory = new URL("../../public/admissions/2026/", import.meta.url);
    for (const name of readdirSync(directory).filter((entry) => /^uni-\d+\.json$/u.test(entry))) {
      const document: UniversityAdmissionsDocument = JSON.parse(readFileSync(new URL(name, directory), "utf8"));
      const original = JSON.stringify(document.sources);
      for (const program of document.programs) {
        const facts = getProgramAdmissionFacts(document, program);
        floors += facts.floors.length;
        unmatchedCutoffs += facts.cutoffs.length;
        residual += facts.residual.length;
        linkedFloors += facts.floors.filter((fact) => fact.floorSources.length > 0).length;
        assert.ok([...facts.floors, ...facts.cutoffs, ...facts.residual].every((fact) => !/ước\s*(lượng|tính)/iu.test(fact.label)));
      }
      assert.equal(JSON.stringify(document.sources), original);
      assert.equal(summarizeAdmissionFloors(document).reduce((sum, item) => sum + item.count, 0), document.programs.flatMap((program) => program.columns).filter((column) => column.label.startsWith("Sàn ") && typeof column.value === "number").length);
    }
    assert.equal(floors, 2120);
    assert.equal(linkedFloors, 2120);
    assert.equal(unmatchedCutoffs, 0);
    assert.equal(residual, 7419);
  });
});
