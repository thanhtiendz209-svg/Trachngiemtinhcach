import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { summarizeAdmissionFloors } from "../src/lib/admission-facts.ts";

const directory = new URL("../public/admissions/2026/", import.meta.url);
const output = new URL("../src/data/admission-floor-summaries.ts", import.meta.url);
const schools = {};
let cells = 0;
for (const name of readdirSync(directory).filter((entry) => /^uni-\d+\.json$/u.test(entry)).sort()) {
  const document = JSON.parse(readFileSync(new URL(name, directory), "utf8"));
  if (name !== `${document.schoolId}.json`) throw new Error(`School ID mismatch in ${name}`);
  if (Object.hasOwn(schools, document.schoolId)) throw new Error(`Duplicate school ${document.schoolId}`);
  const summary = summarizeAdmissionFloors(document);
  cells += summary.reduce((sum, range) => sum + range.count, 0);
  schools[document.schoolId] = summary;
}

const content = `// Generated from unchanged per-school JSON. Do not edit by hand.\n// Regenerate: node --experimental-strip-types scripts/generate-admission-floor-summaries.mjs\nimport type { AdmissionFloorSummary } from "../lib/admission-facts";\n\nexport const ADMISSION_FLOOR_SUMMARIES: Readonly<Record<string, readonly AdmissionFloorSummary[]>> = ${JSON.stringify(schools, null, 2)};\n`;
if (process.argv.includes("--check")) {
  if (readFileSync(output, "utf8") !== content) {
    throw new Error(`Stale floor summaries: regenerate ${fileURLToPath(output)}`);
  }
} else {
  writeFileSync(output, content);
}
console.log(JSON.stringify({ schools: Object.keys(schools).length, floorCells: cells, check: process.argv.includes("--check") }));
