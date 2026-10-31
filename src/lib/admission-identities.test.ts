import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { describe, it } from "node:test";
import type { UniversityAdmissionsDocument } from "../data/university-admissions-types.ts";
import { getSchoolAdmissionIndex } from "./admission-identities.ts";
import { loadUniversityAdmissions } from "./university-admissions.ts";

const directory = new URL("../../public/admissions/2026/", import.meta.url);
const documents = readdirSync(directory).filter((file) => file.endsWith(".json")).sort().map((file) =>
  JSON.parse(readFileSync(new URL(file, directory), "utf8")) as UniversityAdmissionsDocument,
);

function fixture(schoolId = "uni-901", year = 2026): UniversityAdmissionsDocument {
  const document = structuredClone(documents[0]);
  document.schoolId = schoolId;
  document.year = year;
  document.programs = [{ ...document.programs[0], id: `${schoolId}-row-11`, code: "7480201", name: "Công nghệ thông tin", origin: "Tiêu chuẩn", sourceRows: [2] }];
  document.sources = [{ ...document.sources[0], row: 2, id: 1, schoolCode: "SRC", code: "7480201", year }];
  delete document.floorSources;
  delete document.programs[0].floorSourceRefs;
  return document;
}

function floorFixture(): UniversityAdmissionsDocument {
  const document = fixture();
  document.programs[0].columns.push({ label: "Sàn THPT\n/30", value: 18 });
  document.floorSources = [{ ...document.sources[0], row: 4, id: 3, kind: "Điểm sàn", method: "THPT", scale: "30", value: 18 }];
  document.programs[0].floorSourceRefs = [{ column: "Sàn THPT\n/30", sourceRows: [4], scope: "program" }];
  return document;
}

describe("school-scoped admissions identities", () => {
  it("scopes identical codes to their school and keeps annual offerings distinct", () => {
    const first = getSchoolAdmissionIndex(fixture());
    const otherSchool = getSchoolAdmissionIndex(fixture("uni-902"));
    const nextYear = getSchoolAdmissionIndex(fixture("uni-901", 2027));
    assert.notEqual(first.programs[0].id, otherSchool.programs[0].id);
    assert.equal(first.programs[0].id, nextYear.programs[0].id);
    assert.notEqual(first.programs[0].offeringId, nextYear.programs[0].offeringId);
  });

  it("does not merge same-code/name programs under potentially different campus or source-code scopes", () => {
    const document = fixture();
    document.programs.push({ ...document.programs[0], id: "uni-901-row-12", sourceRows: [3] });
    document.sources.push({ ...document.sources[0], row: 3, id: 2, schoolCode: "SRC-CAMPUS-2" });
    const index = getSchoolAdmissionIndex(document);
    const first = index.byRowId.get("uni-901-row-11")!;
    const second = index.byRowId.get("uni-901-row-12")!;
    assert.notEqual(first.id, second.id);
    assert.notEqual(first.offeringId, second.offeringId);
    assert.deepEqual(first.sourceSchoolCodes, ["SRC"]);
    assert.deepEqual(second.sourceSchoolCodes, ["SRC-CAMPUS-2"]);
  });

  it("sorts a row's full source-code scope and distinguishes an explicitly unknown scope", () => {
    const document = fixture();
    document.sources.push({ ...document.sources[0], row: 3, id: 2, schoolCode: "SRC-2" });
    document.programs[0].sourceRows = [2, 3];
    document.programs.push(
      { ...document.programs[0], id: "uni-901-row-12", sourceRows: [3, 2] },
      { ...document.programs[0], id: "uni-901-row-13", sourceRows: [] },
    );
    const index = getSchoolAdmissionIndex(document);
    assert.equal(index.byRowId.get("uni-901-row-11"), index.byRowId.get("uni-901-row-12"));
    assert.deepEqual(index.byRowId.get("uni-901-row-11")?.sourceSchoolCodes, ["SRC", "SRC-2"]);
    const unknown = index.byRowId.get("uni-901-row-13")!;
    assert.deepEqual(unknown.sourceSchoolCodes, []);
    assert.notEqual(unknown.id, index.byRowId.get("uni-901-row-11")?.id);
    assert.equal(JSON.parse(decodeURIComponent(unknown.id.slice("program:".length))).at(-1), null);
  });

  it("preserves names, accents, punctuation and program origins instead of merging by code", () => {
    const document = fixture();
    const original = document.programs[0];
    document.programs.push(
      { ...original, id: "uni-901-row-12", name: "Khoa học máy tính" },
      { ...original, id: "uni-901-row-13", origin: "Chương trình tiên tiến" },
      { ...original, id: "uni-901-row-14", name: "Cong nghe thong tin" },
      { ...original, id: "uni-901-row-15", name: "Công nghệ thông tin!" },
    );
    const index = getSchoolAdmissionIndex(document);
    assert.equal(index.programs.length, 5);
    assert.equal(new Set(index.programs.map((program) => program.id)).size, 5);
    assert.equal(index.byRowId.get("uni-901-row-13")?.origin, "Chương trình tiên tiến");
  });

  it("normalizes only NFC, whitespace and case while retaining every original row and score", () => {
    const document = fixture();
    const original = document.programs[0];
    document.programs.push({ ...original, id: "uni-901-row-12", code: " 7480201 ", name: " CÔNG\tNGHỆ  THÔNG TIN ".normalize("NFD"), origin: " TIÊU  CHUẨN ", sourceRows: [3] });
    document.sources.push({ ...document.sources[0], row: 3, id: 2, value: 29 });
    const before = structuredClone(document);
    const index = getSchoolAdmissionIndex(document);
    assert.equal(index.programs.length, 1);
    assert.deepEqual(index.programs[0].rowIds, ["uni-901-row-11", "uni-901-row-12"]);
    assert.deepEqual(index.programs[0].sourceRows, [2, 3]);
    assert.equal(index.byRowId.get("uni-901-row-11"), index.byRowId.get("uni-901-row-12"));
    assert.deepEqual(document, before, "Identity indexing must not rewrite labels, columns or source values");
    assert.equal(getSchoolAdmissionIndex(document), index, "Repeated renders share one validated index");
  });

  it("uses an encoded tuple so separator characters cannot cause identity collisions", () => {
    const document = fixture();
    document.sources = [];
    document.programs = [
      { ...document.programs[0], code: "A|B", name: "C", sourceRows: [] },
      { ...document.programs[0], id: "uni-901-row-12", code: "A", name: "B|C", sourceRows: [] },
    ];
    const [first, second] = getSchoolAdmissionIndex(document).programs;
    assert.notEqual(first.id, second.id);
  });

  it("keeps identities and reference lists stable when imported arrays are reordered", () => {
    const document = structuredClone(documents.find((item) => item.schoolId === "uni-044")!);
    const reordered = structuredClone(document);
    reordered.programs.reverse();
    reordered.sources.reverse();
    for (const row of reordered.programs) row.sourceRows.reverse();
    assert.deepEqual(getSchoolAdmissionIndex(document).programs, getSchoolAdmissionIndex(reordered).programs);
  });

  it("does not derive canonical or offering IDs from Excel row numbers", () => {
    const document = fixture();
    const renumbered = structuredClone(document);
    renumbered.programs[0].id = "uni-901-row-700";
    renumbered.programs[0].sourceRows = [900];
    renumbered.sources[0].row = 900;
    renumbered.sources[0].id = 899;
    const first = getSchoolAdmissionIndex(document).programs[0];
    const moved = getSchoolAdmissionIndex(renumbered).programs[0];
    assert.equal(moved.id, first.id);
    assert.equal(moved.offeringId, first.offeringId);
    assert.deepEqual(moved.rowIds, ["uni-901-row-700"]);
    assert.deepEqual(moved.sourceRows, [900]);
  });

  it("maps all 7,868 imported rows and preserves every distinct source reference", () => {
    assert.equal(documents.length, 126);
    let rowCount = 0;
    let programCount = 0;
    let sourceCount = 0;
    const allIds = new Set<string>();
    for (const document of documents) {
      const index = getSchoolAdmissionIndex(document);
      assert.equal(index.byRowId.size, document.programs.length, document.schoolId);
      for (const row of document.programs) {
        const program = index.byRowId.get(row.id);
        assert.ok(program, `${document.schoolId}: lost ${row.id}`);
        assert.ok(program.rowIds.includes(row.id));
        for (const reference of row.sourceRows) assert.ok(program.sourceRows.includes(reference));
      }
      assert.deepEqual(
        [...new Set(index.programs.flatMap((program) => program.sourceRows))].sort((a, b) => a - b),
        document.sources.map((source) => source.row).sort((a, b) => a - b),
      );
      for (const program of index.programs) {
        assert.ok(!allIds.has(program.id), `Cross-school collision: ${program.id}`);
        allIds.add(program.id);
      }
      rowCount += index.byRowId.size;
      programCount += index.programs.length;
      sourceCount += document.sources.length;
    }
    assert.equal(rowCount, 7868);
    assert.equal(programCount, allIds.size);
    assert.ok(programCount < rowCount, "Repeated imported rows share identity only within the same exact source scope");
    assert.equal(sourceCount, 17825);
  });

  it("retains all campus/source school-code aliases without choosing an official identifier", () => {
    const ptit = documents.find((document) => document.schoolId === "uni-018")!;
    assert.deepEqual(getSchoolAdmissionIndex(ptit).sourceSchoolCodes, ["BVH", "BVS"]);
    assert.equal(documents.filter((document) => getSchoolAdmissionIndex(document).sourceSchoolCodes.length > 1).length, 7);
  });

  it("rejects duplicate IDs, invalid provenance, other years/codes and references outside a school", () => {
    const invalid: Array<[string, (document: UniversityAdmissionsDocument) => void]> = [
      ["duplicate program ID", (document) => document.programs.push({ ...document.programs[0] })],
      ["duplicate source row", (document) => document.sources.push({ ...document.sources[0] })],
      ["duplicate source ID", (document) => document.sources.push({ ...document.sources[0], row: 3 })],
      ["duplicate row reference", (document) => document.programs[0].sourceRows.push(2)],
      ["source outside document", (document) => document.programs[0].sourceRows.push(99999)],
      ["different code", (document) => { document.sources[0].code = "7480202"; }],
      ["different year", (document) => { document.sources[0].year = 2025; }],
      ["other-school row ID", (document) => { document.programs[0].id = "uni-902-row-11"; }],
      ["invalid source ID/Excel row relationship", (document) => { document.sources[0].id = 77; }],
      ["unreferenced source", (document) => { document.programs[0].sourceRows = []; }],
    ];
    for (const [label, mutate] of invalid) {
      const document = fixture();
      mutate(document);
      assert.throws(() => getSchoolAdmissionIndex(document), label);
    }
  });

  it("does not cache an invalid document", () => {
    const document = fixture();
    document.sources[0].year = 2025;
    assert.throws(() => getSchoolAdmissionIndex(document));
    document.sources[0].year = 2026;
    assert.equal(getSchoolAdmissionIndex(document).byRowId.size, 1);
  });

  it("keeps floor provenance and distinct conditions without changing identity", () => {
    const plain = fixture();
    const document = floorFixture();
    document.floorSources!.push({ ...document.floorSources![0], row: 5, id: 4, condition: "Điều kiện khác" });
    document.programs[0].floorSourceRefs![0].sourceRows.push(5);
    const before = structuredClone(document);
    const original = getSchoolAdmissionIndex(plain).programs[0];
    const enriched = getSchoolAdmissionIndex(document).programs[0];
    assert.equal(enriched.id, original.id);
    assert.equal(enriched.offeringId, original.offeringId);
    assert.deepEqual(enriched.sourceRows, [2], "Floor evidence does not replace original identity/provenance rows");
    assert.deepEqual(document, before);
  });

  it("accepts explicitly school-wide floors for source-less rows using known document aliases", () => {
    const document = floorFixture();
    document.programs.push({ ...document.programs[0], id: "uni-901-row-12", sourceRows: [] });
    document.programs[0].floorSourceRefs = [];
    document.floorSources![0].code = "*";
    document.programs[1].floorSourceRefs = [{ column: "Sàn THPT\n/30", sourceRows: [4], scope: "school" }];
    const index = getSchoolAdmissionIndex(document);
    assert.deepEqual(index.byRowId.get("uni-901-row-12")?.sourceSchoolCodes, [], "Supplemental floors must not invent an original source scope");
  });

  it("rejects invalid floor IDs, references, campus scopes, cutoff kinds and mismatched cells", () => {
    const invalid: Array<[string, (document: UniversityAdmissionsDocument) => void]> = [
      ["duplicate floor source", (document) => document.floorSources!.push({ ...document.floorSources![0] })],
      ["overlap original source row", (document) => { document.floorSources![0].row = 2; document.floorSources![0].id = 1; }],
      ["wrong year", (document) => { document.floorSources![0].year = 2025; }],
      ["cutoff is not a floor", (document) => { document.floorSources![0].kind = "Trúng tuyển"; }],
      ["unknown document source-school alias", (document) => { document.floorSources![0].schoolCode = "OTHER"; }],
      ["outside floor sources", (document) => { document.programs[0].floorSourceRefs![0].sourceRows = [9999]; }],
      ["missing floor source collection", (document) => { delete document.floorSources; }],
      ["invalid scope label", (document) => { document.programs[0].floorSourceRefs![0].scope = "campus" as "program"; }],
      ["wrong program code", (document) => { document.floorSources![0].code = "7480202"; }],
      ["program reference cannot use school wildcard", (document) => { document.floorSources![0].code = "*"; }],
      ["school reference must use wildcard", (document) => { document.programs[0].floorSourceRefs![0].scope = "school"; }],
      ["missing column", (document) => { document.programs[0].floorSourceRefs![0].column = "Sàn THPT\n/100"; }],
      ["value mismatch", (document) => { document.floorSources![0].value = 19; }],
      ["method mismatch", (document) => { document.floorSources![0].method = "Học bạ"; }],
      ["scale mismatch", (document) => { document.floorSources![0].scale = "30 quy đổi"; }],
      ["duplicate reference", (document) => document.programs[0].floorSourceRefs![0].sourceRows.push(4)],
      ["orphan floor record", (document) => { document.programs[0].floorSourceRefs = []; }],
      ["other campus even when known in document", (document) => {
        document.sources.push({ ...document.sources[0], row: 3, id: 2, schoolCode: "SRC-2" });
        document.programs.push({ ...document.programs[0], id: "uni-901-row-12", sourceRows: [3], floorSourceRefs: [] });
        document.floorSources![0].schoolCode = "SRC-2";
      }],
    ];
    for (const [label, mutate] of invalid) {
      const document = floorFixture();
      mutate(document);
      assert.throws(() => getSchoolAdmissionIndex(document), label);
    }
  });
});

describe("admissions loader integrity boundary", () => {
  it("rejects wrong school/year and broken references before caching, then allows a valid retry", async () => {
    const originalFetch = globalThis.fetch;
    try {
      const schoolId = "uni-991";
      let payload = fixture("uni-992");
      let calls = 0;
      globalThis.fetch = async () => {
        calls += 1;
        return new Response(JSON.stringify(payload), { headers: { "Content-Type": "application/json" } });
      };
      await assert.rejects(loadUniversityAdmissions(schoolId), /Dữ liệu tuyển sinh chưa sẵn sàng/);
      payload = fixture(schoolId, 2025);
      await assert.rejects(loadUniversityAdmissions(schoolId), /Dữ liệu tuyển sinh chưa sẵn sàng/);
      payload = fixture(schoolId);
      payload.programs[0].sourceRows = [99999];
      await assert.rejects(loadUniversityAdmissions(schoolId), /Dữ liệu tuyển sinh chưa sẵn sàng/);
      payload = floorFixture();
      payload.schoolId = schoolId;
      payload.programs[0].id = `${schoolId}-row-11`;
      payload.floorSources![0].kind = "Trúng tuyển";
      await assert.rejects(loadUniversityAdmissions(schoolId), /Dữ liệu tuyển sinh chưa sẵn sàng/);
      payload = fixture(schoolId);
      const document = await loadUniversityAdmissions(schoolId);
      assert.equal(getSchoolAdmissionIndex(document).byRowId.size, 1);
      assert.equal(await loadUniversityAdmissions(schoolId), document);
      assert.equal(calls, 5, "Invalid responses are not cached; valid responses are cached");
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
});
