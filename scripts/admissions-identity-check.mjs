#!/usr/bin/env node
/** Exact identity/provenance audit; never rewrites imported data or infers official codes. */
import assert from "node:assert/strict";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { UNIVERSITIES } from "../src/data/universities.ts";
import { getSchoolAdmissionIndex } from "../src/lib/admission-identities.ts";

const root = new URL("../", import.meta.url);
const directory = new URL("public/admissions/2026/", root);
const normalized = (value) => value.normalize("NFC").replace(/\s+/gu, " ").trim().toLowerCase();
const schoolMap = new Map(UNIVERSITIES.map((school) => [school.id, school]));
const schools = [];
const aliases = new Map();
const globalSourceRows = new Set();
const globalFloorRows = new Set();
const globalProgramIds = new Set();
const programCodeVariants = [];
const unresolvedSourceScopes = [];
const catalogueComparisons = [];
const matchStatusCounts = {};
const totals = {
  schools: 0,
  importedProgramRows: 0,
  mappedProgramRows: 0,
  canonicalPrograms: 0,
  sourceRecords: 0,
  distinctSourceRows: 0,
  floorSourceRecords: 0,
  distinctFloorSourceRows: 0,
  programRowsWithFloorEvidence: 0,
  floorReferenceEntries: 0,
  floorSourceLinks: 0,
  sourceSchoolCodeAliases: 0,
  schoolsWithMultipleSourceCodes: 0,
  codesWithMultipleProgramIdentities: 0,
  programLabelsWithMultipleSourceCodeScopes: 0,
  canonicalProgramsWithUnknownSourceScope: 0,
  exactCatalogueCodeAndName: 0,
  catalogueCodeWithDifferentName: 0,
  noExactCatalogueCode: 0,
};

const files = readdirSync(directory).filter((file) => file.endsWith(".json")).sort();
assert.equal(files.length, UNIVERSITIES.length, "Every school must have exactly one document");
for (const file of files) {
  const document = JSON.parse(readFileSync(new URL(file, directory), "utf8"));
  assert.equal(file, `${document.schoolId}.json`, "Document must match its school-scoped URL");
  const school = schoolMap.get(document.schoolId);
  assert.ok(school, `Unknown school ${document.schoolId}`);
  assert.equal(document.schoolName, school.name, "School name must match the catalogue");
  assert.equal(document.year, 2026);
  const index = getSchoolAdmissionIndex(document);
  assert.equal(index.byRowId.size, document.programs.length);
  const rows = new Map(document.programs.map((row) => [row.id, row]));
  const byCode = new Map();
  const byLabel = new Map();
  for (const program of index.programs) {
    assert.ok(!globalProgramIds.has(program.id), "Canonical program identity collision");
    globalProgramIds.add(program.id);
    const key = normalized(program.code);
    if (!byCode.has(key)) byCode.set(key, []);
    byCode.get(key).push(program);
    const labelKey = JSON.stringify([key, normalized(program.name), normalized(program.origin)]);
    if (!byLabel.has(labelKey)) byLabel.set(labelKey, []);
    byLabel.get(labelKey).push(program);
    if (program.sourceSchoolCodes.length === 0) totals.canonicalProgramsWithUnknownSourceScope += 1;
    const candidates = school.majorItems.filter((item) => normalized(item.code) === key);
    if (candidates.some((item) => normalized(item.name) === normalized(program.name))) {
      totals.exactCatalogueCodeAndName += 1;
    } else {
      const classification = candidates.length ? "same-code-different-name" : "no-exact-code";
      if (candidates.length) totals.catalogueCodeWithDifferentName += 1;
      else totals.noExactCatalogueCode += 1;
      const originalAliases = [...new Map(program.rowIds.map((id) => {
        const row = rows.get(id);
        const label = { code: row.originalCode, name: row.originalName };
        return [JSON.stringify(label), label];
      })).values()];
      catalogueComparisons.push({
        schoolId: school.id,
        programId: program.id,
        code: program.code,
        name: program.name,
        origin: program.origin,
        classification,
        originalCatalogueAliases: originalAliases,
        sameCodeCatalogueLabels: candidates.map(({ code, name }) => ({ code, name })),
      });
    }
  }
  for (const [code, programs] of byCode) {
    if (programs.length > 1) programCodeVariants.push({ schoolId: school.id, normalizedCode: code, programs });
  }
  for (const programs of byLabel.values()) {
    if (programs.length > 1) unresolvedSourceScopes.push({
      schoolId: school.id,
      code: programs[0].code,
      name: programs[0].name,
      origin: programs[0].origin,
      note: "Identical program labels have different raw source-school-code scopes. Kept separate until campus/feed equivalence is verified.",
      scopes: programs.map(({ id, sourceSchoolCodes, rowIds }) => ({ programId: id, sourceSchoolCodes, rowIds })),
    });
  }
  for (const source of document.sources) {
    assert.ok(!globalSourceRows.has(source.row), `Source Excel row assigned to more than one school: ${source.row}`);
    globalSourceRows.add(source.row);
  }
  for (const source of document.floorSources ?? []) {
    assert.ok(!globalFloorRows.has(source.row), `Floor Excel row assigned to more than one school: ${source.row}`);
    globalFloorRows.add(source.row);
  }
  for (const alias of index.sourceSchoolCodes) {
    if (!aliases.has(alias)) aliases.set(alias, []);
    aliases.get(alias).push(school.id);
  }
  for (const row of document.programs) matchStatusCounts[row.matchStatus] = (matchStatusCounts[row.matchStatus] ?? 0) + 1;
  schools.push({
    schoolId: school.id,
    schoolName: school.name,
    year: index.year,
    sourceSchoolCodes: index.sourceSchoolCodes,
    programRows: document.programs.length,
    canonicalPrograms: index.programs.length,
    sourceRecords: document.sources.length,
    floorSourceRecords: document.floorSources?.length ?? 0,
  });
  totals.importedProgramRows += document.programs.length;
  totals.mappedProgramRows += index.byRowId.size;
  totals.canonicalPrograms += index.programs.length;
  totals.sourceRecords += document.sources.length;
  totals.floorSourceRecords += document.floorSources?.length ?? 0;
  for (const row of document.programs) {
    if (row.floorSourceRefs?.length) totals.programRowsWithFloorEvidence += 1;
    for (const reference of row.floorSourceRefs ?? []) {
      totals.floorReferenceEntries += 1;
      totals.floorSourceLinks += reference.sourceRows.length;
    }
  }
  totals.sourceSchoolCodeAliases += index.sourceSchoolCodes.length;
  if (index.sourceSchoolCodes.length > 1) totals.schoolsWithMultipleSourceCodes += 1;
}
totals.schools = schools.length;
totals.distinctSourceRows = globalSourceRows.size;
totals.distinctFloorSourceRows = globalFloorRows.size;
for (const row of globalFloorRows) assert.ok(!globalSourceRows.has(row), `Floor row also used as a cutoff source: ${row}`);
totals.codesWithMultipleProgramIdentities = programCodeVariants.length;
totals.programLabelsWithMultipleSourceCodeScopes = unresolvedSourceScopes.length;
assert.equal(totals.importedProgramRows, 7868);
assert.equal(totals.mappedProgramRows, 7868);
assert.equal(totals.sourceRecords, 17825);
assert.equal(totals.canonicalPrograms, globalProgramIds.size);

const report = {
  version: 1,
  stage: 1,
  year: 2026,
  policy: {
    canonicalIdentity: "Encoded tuple: schoolId + NFC/whitespace/case-normalized code + name + origin + exact sorted raw source-school-code scope (null means unknown)",
    annualOfferingIdentity: "Same tuple with year added",
    floorProvenance: "Optional floorSources/floorSourceRefs are validated separately by year, exact value/method/scale, source-school scope and program-or-school code. They never enter the identity tuple or change the original cutoff source count",
    sourceSchoolCodes: "Mã trường trong nguồn; retain every campus/source alias; potentially distinct scopes are not merged or asserted to identify the same campus/institution",
    preservation: "Imported row IDs, raw labels, columns, individual point values, Excel references and public school URLs are unchanged",
    catalogueComparison: "Exact normalized code/name comparison only. Differences are reported for review and are never silently assigned or fuzzy-merged",
    updatePolicy: "Run this audit again after any source import; generated report has no time-dependent fields",
  },
  totals,
  schools,
  sourceSchoolCodeAliases: schools.filter((school) => school.sourceSchoolCodes.length > 1),
  sourceAliasesSharedAcrossSchools: [...aliases].filter(([, ids]) => ids.length > 1).map(([code, schoolIds]) => ({ code, schoolIds })),
  matchStatusCounts,
  programCodeVariants,
  unresolvedSourceScopes,
  unresolvedCatalogueComparisons: catalogueComparisons,
};
const output = new URL("data/import-reports/admissions-identities-stage1.json", root);
const serialized = `${JSON.stringify(report, null, 2)}\n`;
if (process.argv.includes("--write-report")) {
  writeFileSync(output, serialized);
} else {
  assert.equal(readFileSync(output, "utf8"), serialized, "Identity report is stale; run check:admission-identities -- --write-report");
}
console.log(JSON.stringify({ ok: true, totals, unresolvedCatalogueComparisons: catalogueComparisons.length, report: fileURLToPath(output) }, null, 2));
