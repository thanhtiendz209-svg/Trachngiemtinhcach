#!/usr/bin/env python3
"""Attach exact workbook floor provenance without changing admission values.

Requires openpyxl. Usage:
  python3 scripts/enrich-admission-floors-2026.py workbook.xlsx [--check]

Only floorSources and floorSourceRefs are added to the existing school JSON.
The report records the supplied workbook's SHA256. --check performs the same
derivation and verifies both generated metadata and the report without writing.
"""

from __future__ import annotations

import argparse
from collections import Counter, defaultdict
from datetime import date, datetime
import hashlib
import json
import math
from pathlib import Path

import openpyxl

YEAR = 2026
SOURCE_SHEET = "Dữ liệu nguồn 2026"
SCHOOL_SHEET = "Danh sách 126 trường"
REPORT_PATH = "data/import-reports/admission-floor-provenance-stage1.json"
FLOOR_HEADERS = {
    "Sàn THPT\n/30": ("THPT", "30"),
    "Sàn Học bạ\n/30": ("Học bạ", "30"),
    "Sàn ĐGNL HSA\n/150": ("ĐGNL HSA", "150"),
    "Sàn ĐGNL V-ACT\n/1200": ("ĐGNL V-ACT", "1200"),
    "Sàn ĐGTD TSA\n/100": ("ĐGTD TSA", "100"),
    "Sàn ĐGNL HSA\n/30 quy đổi": ("ĐGNL HSA", "30 quy đổi"),
    "Sàn ĐGTD TSA\n/30 quy đổi": ("ĐGTD TSA", "30 quy đổi"),
    "Sàn V-SAT\n/30 quy đổi": ("V-SAT", "30 quy đổi"),
    "Sàn Kết hợp\n/100": ("Kết hợp", "100"),
    "Sàn V-SAT\n/450": ("V-SAT", "450"),
}


def text(value):
    return "" if value is None else str(value).strip()


def numeric(value):
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)


def cell(value):
    if value is None or isinstance(value, (str, bool, int)):
        return value
    if isinstance(value, float):
        return value if math.isfinite(value) else None
    if isinstance(value, (date, datetime)):
        return value.isoformat()
    return str(value)


def compact(value):
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"), allow_nan=False) + "\n"


def rows(sheet):
    # The supplied workbook has no cached worksheet dimensions.
    return [[cell(value) for value in row] for row in sheet.iter_rows(values_only=True)]


def refs(value):
    result = []
    for item in text(value).split(","):
        if not item.strip():
            continue
        if not item.strip().isdigit():
            raise ValueError(f"Invalid Excel source row {item!r}")
        result.append(int(item.strip()))
    return sorted(set(result))


def source_record(excel_row, row):
    if len(row) < 14 or not numeric(row[0]):
        raise ValueError(f"Invalid source at Excel row {excel_row}")
    return {
        "row": excel_row, "id": int(row[0]), "schoolCode": text(row[1]),
        "code": text(row[2]), "name": text(row[3]), "method": text(row[4]),
        "combinations": text(row[5]), "scale": text(row[6]), "year": int(row[7]),
        "value": row[8], "condition": text(row[9]), "classification": text(row[10]),
        "url": text(row[11]), "kind": text(row[12]), "originalUrl": text(row[13]),
    }


def without_enrichment(document):
    clean = {key: value for key, value in document.items() if key != "floorSources"}
    clean["programs"] = [
        {key: value for key, value in program.items() if key != "floorSourceRefs"}
        for program in document["programs"]
    ]
    return clean


def enrich(workbook_path, root, check):
    workbook_bytes = workbook_path.read_bytes()
    workbook = openpyxl.load_workbook(workbook_path, read_only=True, data_only=True)
    source_rows = rows(workbook[SOURCE_SHEET])
    source_by_row = {
        excel_row: source_record(excel_row, row)
        for excel_row, row in enumerate(source_rows[1:], 2)
        if row and numeric(row[0])
    }
    index_rows = [row for row in rows(workbook[SCHOOL_SHEET])[1:] if row and numeric(row[0])]
    if len(index_rows) != 126:
        raise ValueError("Expected exactly 126 indexed schools")

    floor_index = defaultdict(list)
    for source in source_by_row.values():
        if source["kind"] == "Điểm sàn":
            if source["year"] != YEAR or not numeric(source["value"]):
                raise ValueError(f"Invalid floor year/value at Excel row {source['row']}")
            floor_index[(source["schoolCode"], source["code"], source["method"], source["scale"], source["value"])].append(source)

    counts = Counter()
    label_counts = Counter()
    scopes = Counter()
    ambiguities = []
    fallback_rows = []
    per_school = []
    pending = []
    used_floor_rows = set()
    source_code_owners = defaultdict(set)

    for metadata in index_rows:
        school_id = f"uni-{int(metadata[0]):03d}"
        path = root / f"public/admissions/2026/{school_id}.json"
        original = json.loads(path.read_text(encoding="utf-8"))
        if original["schoolId"] != school_id or original["schoolName"] != text(metadata[1]):
            raise ValueError(f"Exact indexed school name/ID mismatch: {school_id}")
        sheet_name = text(metadata[6])
        if original["sheet"] != sheet_name or original["sourceFile"] != workbook_path.name:
            raise ValueError(f"Workbook provenance mismatch: {school_id}")
        if original["version"] != 1 or original["year"] != YEAR:
            raise ValueError(f"Unexpected document version/year: {school_id}")

        # The exact workbook index selects the sheet. Its explicit source row
        # references establish school aliases, including source-less programs.
        school_rows = rows(workbook[sheet_name])
        headers = [text(value) for value in school_rows[9]]
        source_ref_column = headers.index("Dòng nguồn để đối chiếu")
        school_aliases = set()
        workbook_programs = {}
        for excel_row, row in enumerate(school_rows[10:], 11):
            if not row or not numeric(row[0]):
                continue
            row_refs = refs(row[source_ref_column] if source_ref_column < len(row) else None)
            for ref in row_refs:
                source = source_by_row[ref]
                if source["code"] != text(row[1]):
                    raise ValueError(f"Indexed source code mismatch: {school_id} row {excel_row}")
                school_aliases.add(source["schoolCode"])
            workbook_programs[f"{school_id}-row-{excel_row}"] = (row, row_refs)
        if not school_aliases:
            raise ValueError(f"No explicitly indexed source-school alias: {school_id}")
        for alias in school_aliases:
            source_code_owners[alias].add(school_id)
        if len(workbook_programs) != len(original["programs"]):
            raise ValueError(f"Program count changed: {school_id}")

        original_sources = {source["row"]: source for source in original["sources"]}
        for source in original["sources"]:
            if source_by_row.get(source["row"]) != source:
                raise ValueError(f"Existing source differs from workbook: {school_id} row {source['row']}")
        if {source["schoolCode"] for source in original["sources"]} != school_aliases:
            raise ValueError(f"Indexed source alias mismatch: {school_id}")

        document = without_enrichment(original)
        school_floor_rows = set()
        school_counts = Counter()
        for program in document["programs"]:
            if program["id"] not in workbook_programs:
                raise ValueError(f"Program row provenance missing: {program['id']}")
            raw_row, workbook_refs = workbook_programs[program["id"]]
            if program["sourceRows"] != workbook_refs or program["code"] != text(raw_row[1]) or program["name"] != text(raw_row[2]):
                raise ValueError(f"Program code/name/reference mismatch: {program['id']}")
            aliases = {original_sources[ref]["schoolCode"] for ref in program["sourceRows"]}
            if not aliases:
                aliases = school_aliases
            floor_refs = []
            for column in program["columns"]:
                label, value = column["label"], column["value"]
                if not label.startswith("Sàn "):
                    continue
                if label not in FLOOR_HEADERS or not numeric(value):
                    raise ValueError(f"Unexpected floor label/value: {program['id']} {label!r}")
                raw_column = headers.index(label)
                if raw_row[raw_column] != value:
                    raise ValueError(f"Raw workbook floor differs: {program['id']} {label!r}")
                method, scale = FLOOR_HEADERS[label]
                matches = [source for alias in sorted(aliases) for source in floor_index[(alias, program["code"], method, scale, value)]]
                scope = "program"
                if not matches:
                    matches = [source for alias in sorted(aliases) for source in floor_index[(alias, "*", method, scale, value)]]
                    scope = "school"
                if not matches:
                    raise ValueError(f"No exact floor source: {program['id']} {label!r} {value!r}")
                matching_rows = sorted({source["row"] for source in matches})
                floor_refs.append({"column": label, "sourceRows": matching_rows, "scope": scope})
                school_floor_rows.update(matching_rows)
                counts["floorCells"] += 1
                label_counts[label] += 1
                scopes[scope] += 1
                school_counts[scope] += 1
                if not program["sourceRows"]:
                    fallback_rows.append({"schoolId": school_id, "programId": program["id"], "column": label,
                                          "schoolCodeAliases": sorted(aliases), "sourceRows": matching_rows})
                if len(matching_rows) > 1:
                    ambiguities.append({"schoolId": school_id, "programId": program["id"], "column": label,
                                        "scope": scope, "sourceRows": matching_rows,
                                        "conditions": list(dict.fromkeys(source["condition"] for source in matches)),
                                        "resolution": "Preserved every exact matching record; no source was selected."})
            if floor_refs:
                program["floorSourceRefs"] = floor_refs
                counts["programsWithFloorRefs"] += 1

        if school_floor_rows:
            document["floorSources"] = [source_by_row[row] for row in sorted(school_floor_rows)]
            counts["schoolsWithFloorSources"] += 1
        if without_enrichment(document) != without_enrichment(original):
            raise ValueError(f"Enrichment changed original data: {school_id}")
        used_floor_rows.update(school_floor_rows)
        counts["schools"] += 1
        counts["programs"] += len(document["programs"])
        counts["unchangedCutoffSourceRecords"] += len(document["sources"])
        per_school.append({"schoolId": school_id, "floorSources": len(school_floor_rows),
                           "floorCells": sum(school_counts.values()), "programScopeCells": school_counts["program"],
                           "schoolScopeCells": school_counts["school"], "sourceCodeAliases": sorted(school_aliases)})
        pending.append((path, document))

    workbook.close()
    if any(len(owners) != 1 for owners in source_code_owners.values()):
        raise ValueError("A source-school alias has multiple indexed owners")
    if counts["floorCells"] != 2120 or counts["unchangedCutoffSourceRecords"] != 17825:
        raise ValueError("Unexpected original floor/source counts")
    counts["uniqueFloorSourceRecords"] = len(used_floor_rows)
    counts["multipleMatchingRecordCells"] = len(ambiguities)
    counts["sourceLessProgramFloorCells"] = len(fallback_rows)
    report = {
        "version": 1, "year": YEAR,
        "sourceWorkbook": {"file": workbook_path.name, "sha256": hashlib.sha256(workbook_bytes).hexdigest(),
                           "sourceSheet": SOURCE_SHEET, "schoolIndexSheet": SCHOOL_SHEET},
        "counts": dict(counts), "matchScopes": dict(scopes), "floorHeaders": dict(label_counts),
        "sourceLessProgramMatches": fallback_rows, "ambiguousMatches": ambiguities, "schools": per_school,
        "assertions": {"allOriginalDataPreserved": True, "allFloorValuesAlreadyPresent": True,
                       "allFloorSourceKindsExact": "Điểm sàn", "allFloorSourceYears": YEAR,
                       "allReferencesUseExcelRowNumbers": True, "allMatchingSourcesRetained": True,
                       "allSchoolAliasesFromExactIndexedReferences": True,
                       "noOriginalSourceArraysOrCountsChanged": True},
    }
    pending.append((root / REPORT_PATH, report))
    # Derive and validate every document before writing any of them.
    if check:
        different = [str(path.relative_to(root)) for path, value in pending
                     if not path.exists() or path.read_text(encoding="utf-8") != compact(value)]
        if different:
            raise ValueError("Generated floor provenance differs: " + ", ".join(different))
    else:
        for path, value in pending:
            path.parent.mkdir(parents=True, exist_ok=True)
            output = compact(value)
            if not path.exists() or path.read_text(encoding="utf-8") != output:
                temporary = path.with_suffix(path.suffix + ".floor-provenance.tmp")
                temporary.write_text(output, encoding="utf-8")
                temporary.replace(path)
    print(compact({"check": check, "sourceWorkbook": report["sourceWorkbook"], "counts": dict(counts),
                   "matchScopes": dict(scopes), "report": REPORT_PATH}).strip())


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("workbook", type=Path)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    enrich(args.workbook.resolve(), args.root.resolve(), args.check)


if __name__ == "__main__":
    main()
