#!/usr/bin/env python3
"""Import the supplied 2026 workbook without inventing or converting scores.

Requires openpyxl. Usage: python3 scripts/import-admissions-2026.py workbook.xlsx
Detailed records are emitted per school under public/admissions/2026 so they do
not become part of the initial application JavaScript bundle.
"""

from __future__ import annotations

import argparse
from collections import defaultdict
from datetime import date, datetime
import hashlib
import json
import math
from pathlib import Path
import re

import openpyxl

YEAR = 2026
UPDATED_AT = "2026-10-30"
PURE_THPT_METHODS = {"Điểm thi THPT", "THPT"}
NOTICE = (
    "Dữ liệu năm 2026 được chép từ tệp Excel do người dùng cung cấp. "
    "Giữ riêng điểm trúng tuyển, điểm sàn, phương thức, thang điểm và điều kiện đối tượng. "
    "Các dòng ghi ngữ liệu tham khảo chưa được coi là xác minh chính thức độc lập. "
    "Ước lượng dùng giả định, không phải điểm trúng tuyển công bố hoặc xác suất đỗ."
)
DATA_NOTE = (
    "Đã bổ sung dữ liệu tuyển sinh 2026 từ Excel, giữ nguyên ngành cũ và thêm chương trình mới. "
    "Điểm trúng tuyển, điểm sàn và ước lượng được tách riêng; đọc đúng phương thức, thang điểm và nguồn."
)


def cell(value):
    if value is None or isinstance(value, (str, bool, int)):
        return value
    if isinstance(value, float):
        return value if math.isfinite(value) else None
    if isinstance(value, (date, datetime)):
        return value.isoformat()
    return str(value)


def text(value):
    return "" if value is None else str(value).strip()


def number(value):
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)


def compact(value):
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"), allow_nan=False)


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(compact(value) + "\n", encoding="utf-8")


def read_universities(path):
    source = path.read_text(encoding="utf-8")
    marker = "export const UNIVERSITIES = "
    start = source.index(marker) + len(marker)
    match = re.search(r"\s+as University\[\];", source[start:])
    if not match:
        raise ValueError("University data must remain a generated JSON literal")
    return json.loads(source[start:start + match.start()])


def row_refs(value):
    refs = []
    for part in text(value).split(","):
        part = part.strip()
        if not part:
            continue
        if not part.isdigit():
            raise ValueError(f"Invalid source worksheet row: {part!r}")
        refs.append(int(part))
    return sorted(set(refs))


def get(row, index):
    return row[index] if index < len(row) else None


def worksheet_rows(sheet):
    # The workbook was exported without dimensions; max_row/max_column are None.
    return [[cell(value) for value in row] for row in sheet.iter_rows(values_only=True)]


def source_record(excel_row, row):
    if len(row) < 14 or not number(row[0]):
        raise ValueError(f"Missing source at worksheet row {excel_row}")
    return {
        "row": excel_row, "id": int(row[0]), "schoolCode": text(row[1]),
        "code": text(row[2]), "name": text(row[3]), "method": text(row[4]),
        "combinations": text(row[5]), "scale": text(row[6]), "year": int(row[7]),
        "value": row[8], "condition": text(row[9]), "classification": text(row[10]),
        "url": text(row[11]), "kind": text(row[12]), "originalUrl": text(row[13]),
    }


def build_ranges(sources):
    grouped = defaultdict(list)
    for source in sources:
        value = source["value"]
        if number(value):
            grouped[(source["method"], source["scale"], source["kind"])].append(value)
    return [
        {"method": method, "scale": scale, "kind": kind,
         "min": min(values), "max": max(values), "count": len(values)}
        for (method, scale, kind), values in sorted(grouped.items())
    ]


def fmt(value):
    return format(value, ".15g")


def verification_section(log):
    title = "DỮ LIỆU GỐC CẦN XÁC MINH / NGOÀI PHẠM VI"
    for index, row in enumerate(log):
        if row and row[0] == title:
            headers = [text(value) for value in row]
            result = []
            for entry in log[index + 1:]:
                if not entry or not any(value is not None for value in entry):
                    break
                result.append(entry)
            return headers, result
    raise ValueError("Verification section is missing")


def import_workbook(workbook_path, root):
    source_path = root / "src/data/universities.ts"
    universities = read_universities(source_path)
    before_pairs = {u["id"]: [(m["code"], m["name"]) for m in u["majorItems"]] for u in universities}
    before_majors = {u["id"]: list(u["majors"]) for u in universities}
    before_signals = {u["id"]: (u["category"], list(u["focusRiasec"])) for u in universities}
    by_id = {u["id"]: u for u in universities}
    if len(universities) != 126 or len(by_id) != 126:
        raise ValueError("Expected exactly 126 distinct website school IDs")

    workbook = openpyxl.load_workbook(workbook_path, read_only=True, data_only=True)
    sheets = {sheet.title: worksheet_rows(sheet) for sheet in workbook}
    workbook.close()
    school_meta = [row for row in sheets["Danh sách 126 trường"][1:] if row and number(row[0])]
    if len(school_meta) != 126:
        raise ValueError("Expected 126 schools in workbook index")
    source_sheet = sheets["Dữ liệu nguồn 2026"]
    sources_by_row = {
        excel_row: source_record(excel_row, row)
        for excel_row, row in enumerate(source_sheet[1:], 2)
        if row and number(row[0])
    }
    verify_headers, verification = verification_section(sheets["Nhật ký cập nhật"])
    assumption_sheet = sheets["Giả định 2026"]
    assumptions = {
        "notice": text(get(assumption_sheet[3], 0)),
        "headers": [text(value) for value in assumption_sheet[5]],
        "rows": [row for row in assumption_sheet[6:] if any(value is not None for value in row)],
    }
    estimate_sheet = sheets["Ước lượng 2026"]
    estimate_headers = [text(value) for value in estimate_sheet[5]]
    estimate_rows = [row for row in estimate_sheet[6:] if row and text(row[0])]

    documents = {}
    meta_by_sheet = {}
    tuple_owners = defaultdict(set)
    pair_owners = defaultdict(set)
    code_owners = defaultdict(set)
    for meta in school_meta:
        school_id = f"uni-{int(meta[0]):03d}"
        university = by_id.get(school_id)
        if university is None or university["name"] != text(meta[1]):
            raise ValueError(f"School name/ID mismatch: {school_id}: {meta[1]!r}")
        sheet_name = text(meta[6])
        meta_by_sheet[sheet_name] = meta
        rows = sheets[sheet_name]
        headers = [text(value) for value in rows[9]]
        expected = ["STT", "Mã xét tuyển 2026", "Tên ngành / chương trình đối chiếu 2026"]
        if headers[:3] != expected:
            raise ValueError(f"Unexpected program headers: {sheet_name}")
        idx = {header: index for index, header in enumerate(headers)}
        for label in ["Mã ngành gốc", "Tên ngành gốc", "Đối chiếu ngành", "Điều kiện / ghi chú điểm", "Trạng thái nguồn", "Dòng nguồn để đối chiếu"]:
            if label not in idx:
                raise ValueError(f"Missing header {label}: {sheet_name}")
        programs = []
        source_rows = set()
        pairs = {(m["code"], m["name"]) for m in university["majorItems"]}
        names = set(university["majors"])
        for excel_row, row in enumerate(rows[10:], 11):
            if not row or not number(row[0]):
                continue
            code, name = text(get(row, 1)), text(get(row, 2))
            refs = row_refs(get(row, idx["Dòng nguồn để đối chiếu"]))
            for ref in refs:
                source = sources_by_row.get(ref)
                if source is None or source["code"] != code or source["year"] != YEAR:
                    raise ValueError(f"Source reference/code/year mismatch: {sheet_name}!{excel_row}, ref {ref}")
                source_rows.add(ref)
            program = {
                "id": f"{school_id}-row-{excel_row}", "code": code, "name": name,
                "combinations": text(get(row, 3)), "origin": text(get(row, 4)),
                "originalCode": text(get(row, idx["Mã ngành gốc"])),
                "originalName": text(get(row, idx["Tên ngành gốc"])),
                "matchStatus": text(get(row, idx["Đối chiếu ngành"])),
                "conditions": text(get(row, idx["Điều kiện / ghi chú điểm"])),
                "sourceStatus": text(get(row, idx["Trạng thái nguồn"])),
                "sourceRows": refs,
                "columns": [
                    {"label": headers[index], "value": get(row, index)}
                    for index in range(5, idx["Mã ngành gốc"])
                    if get(row, index) is not None and get(row, index) != ""
                ],
            }
            programs.append(program)
            if (code, name) not in pairs:
                university["majorItems"].append({"code": code, "name": name})
                pairs.add((code, name))
            if name not in names:
                university["majors"].append(name)
                names.add(name)
        sources = [sources_by_row[row] for row in sorted(source_rows)]
        for source in sources:
            tuple_owners[(source["schoolCode"], source["code"], source["name"])].add(school_id)
            pair_owners[(source["schoolCode"], source["code"])].add(school_id)
            code_owners[source["schoolCode"]].add(school_id)
        documents[school_id] = {
            "version": 1, "year": YEAR, "schoolId": school_id, "schoolName": university["name"],
            "sourceFile": workbook_path.name, "sheet": sheet_name, "updatedAt": UPDATED_AT,
            "notice": NOTICE, "programs": programs, "sources": sources,
            "estimates": {"headers": estimate_headers, "rows": []},
            "assumptions": assumptions,
            "verification": {"headers": verify_headers, "rows": [row for row in verification if text(row[0]) == sheet_name]},
        }
        if sheet_name == "HV Quốc tế (AIS)":
            # The workbook explicitly retracts the old ais.edu.vn identity.
            for field in ["website", "admissionsUrl", "admissionsText", "logo"]:
                university[field] = ""
            correction = "Học viện Quốc tế thuộc Bộ Công an; địa chỉ ais.edu.vn trong dữ liệu cũ chưa đúng. Hai ngành Quản trị kinh doanh và Quốc tế học cũ được giữ để đối chiếu, chưa xác minh tuyển sinh 2026."
            if correction not in university["dataNote"]:
                university["dataNote"] = (university["dataNote"].rstrip() + " " + correction).strip()

    ambiguous_estimates = []
    estimate_fallbacks = []
    for excel_row, row in enumerate(estimate_sheet[6:], 7):
        if not row or not text(row[0]):
            continue
        school_code, code, name = text(get(row, 0)), text(get(row, 1)), text(get(row, 2))
        owners = tuple_owners.get((school_code, code, name), set())
        strategy = "name+code"
        if not owners:
            owners = pair_owners.get((school_code, code), set())
            strategy = "code"
        if not owners:
            owners = code_owners.get(school_code, set())
            strategy = "schoolCode"
        if len(owners) != 1:
            ambiguous_estimates.append({"row": excel_row, "schoolCode": school_code, "code": code, "name": name, "owners": sorted(owners)})
            continue
        school_id = next(iter(owners))
        documents[school_id]["estimates"]["rows"].append(row)
        if strategy != "name+code":
            estimate_fallbacks.append({"row": excel_row, "schoolId": school_id, "strategy": strategy})

    if ambiguous_estimates:
        raise ValueError("Ambiguous/unmapped estimates: " + compact(ambiguous_estimates))
    if sum(len(doc["estimates"]["rows"]) for doc in documents.values()) != len(estimate_rows):
        raise ValueError("Not all estimate rows were preserved")
    if sum(len(doc["verification"]["rows"]) for doc in documents.values()) != len(verification):
        raise ValueError("Not all verification rows were preserved")

    per_school = []
    for university in universities:
        school_id = university["id"]
        document = documents[school_id]
        ranges = build_ranges(document["sources"])
        thpt_values = sorted({
            source["value"] for source in document["sources"]
            if source["kind"] == "Trúng tuyển" and source["method"] in PURE_THPT_METHODS
            and source["scale"] == "30" and number(source["value"]) and 0 <= source["value"] <= 30
        })
        methods = sorted({source["method"] for source in document["sources"] if source["method"]})
        university["admissionScores"] = [
            {"year": YEAR, "score": (fmt(r["min"]) if r["min"] == r["max"] else f'{fmt(r["min"])}–{fmt(r["max"])}') + f' ({r["scale"]})',
             "method": f'{r["method"]} · {r["kind"]}'}
            for r in ranges
        ]
        university["admissionMethods"] = methods
        university["lastUpdated"] = UPDATED_AT
        university["admissions2026"] = {
            "year": YEAR, "updatedAt": UPDATED_AT, "file": f"/admissions/2026/{school_id}.json",
            "sheet": document["sheet"], "programCount": len(document["programs"]),
            "sourceRecordCount": len(document["sources"]), "estimateCount": len(document["estimates"]["rows"]),
            "thptValues": thpt_values, "methods": methods, "ranges": ranges, "notice": NOTICE,
        }
        if DATA_NOTE not in university["dataNote"]:
            university["dataNote"] = (university["dataNote"].rstrip() + " " + DATA_NOTE).strip()
        if not set(before_pairs[school_id]).issubset({(m["code"], m["name"]) for m in university["majorItems"]}):
            raise ValueError(f"An existing major was lost: {school_id}")
        if not set(before_majors[school_id]).issubset(university["majors"]):
            raise ValueError(f"An existing major label was lost: {school_id}")
        if before_signals[school_id] != (university["category"], university["focusRiasec"]):
            raise ValueError(f"RIASEC/category changed: {school_id}")
        if university["tuition"] is not None:
            raise ValueError(f"Unexpected tuition change: {school_id}")
        write_json(root / "public/admissions/2026" / f"{school_id}.json", document)
        per_school.append({
            "id": school_id, "sheet": document["sheet"], "programRows": len(document["programs"]),
            "sourceRecords": len(document["sources"]), "estimates": len(document["estimates"]["rows"]),
            "verificationRows": len(document["verification"]["rows"]), "majorItems": len(university["majorItems"]),
            "thpt30Values": len(thpt_values),
        })

    comment = (
        'import type { University } from "./types";\n\n'
        '/** Generated by scripts/import-admissions-2026.py.\n'
        ' * Existing school IDs, legacy majors and RIASEC signals are preserved.\n'
        ' * Published scores, floors and scenario estimates retain their methods/scales.\n'
        ' * Detailed workbook records are fetched separately per school.\n'
        ' */\nexport const UNIVERSITIES = '
    )
    source_path.write_text(comment + compact(universities) + ' as University[];\n', encoding="utf-8")
    report = {
        "version": 1, "year": YEAR, "updatedAt": UPDATED_AT, "sourceFile": workbook_path.name,
        "sourceSha256": hashlib.sha256(workbook_path.read_bytes()).hexdigest(),
        "schools": len(documents), "programRows": sum(len(d["programs"]) for d in documents.values()),
        "distinctReferencedSourceExcelRows": len({s["row"] for d in documents.values() for s in d["sources"]}),
        "rawSourceRecords": len(sources_by_row), "estimateRows": len(estimate_rows),
        "verificationRows": len(verification), "originalWorkbookMajorCount": 1769,
        "totalMajorItems": sum(len(u["majorItems"]) for u in universities),
        "preservationAssertions": {"allInputMajorsRetained": True, "schoolIdsNamesMatched": True, "sourceCodesMatched": True, "riasecSignalsUnchanged": True},
        "estimateFallbacks": estimate_fallbacks, "unmappedEstimates": ambiguous_estimates,
        "perSchool": sorted(per_school, key=lambda item: item["id"]),
    }
    write_json(root / "data/import-reports/admissions-2026.json", report)
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("workbook", type=Path)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    report = import_workbook(args.workbook.resolve(), args.root.resolve())
    print(compact({key: value for key, value in report.items() if key not in {"perSchool", "estimateFallbacks"}}))


if __name__ == "__main__":
    main()
