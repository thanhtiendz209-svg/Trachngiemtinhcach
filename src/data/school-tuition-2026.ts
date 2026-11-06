import type { University } from "./types";

/** 2026–2027, chương trình tiêu chuẩn. Số tiền tuyệt đối bằng VNĐ.
 * Dữ liệu: 126_truong_va_nganh_ke_hoach_hoc_phi.xlsm.
 * DTU: đã sửa thứ tự thấp nhất 27 triệu, cao nhất 94 triệu theo yêu cầu.
 * Mỗi mục: [thấp nhất/năm, cao nhất/năm, trung bình/tín chỉ, Q2 trung vị/năm].
 * null = không có dữ liệu, không được tự suy diễn. Số 0 trong file nguồn không đủ để kết luận miễn học phí: hiển thị là thiếu dữ liệu.
 */
export type TuitionTuple = readonly [number | null, number | null, number | null, number | null];
const TUITION_BY_SHEET: Record<string, TuitionTuple> = {
  "HUST": [
    28000000,
    40000000,
    null,
    null
  ],
  "NEU": [
    20000000,
    28000000,
    880000,
    null
  ],
  "FTU": [
    28000000,
    32000000,
    null,
    null
  ],
  "TMU": [
    25750000,
    30690000,
    null,
    null
  ],
  "HLU": [
    29400000,
    29400000,
    null,
    null
  ],
  "VNU-HUS": [
    19100000,
    40000000,
    null,
    30000000
  ],
  "VNU-UET": [
    38000000,
    44000000,
    null,
    null
  ],
  "VNU-UEB": [
    48000000,
    48000000,
    null,
    48000000
  ],
  "VNU-USSH": [
    19100000,
    35000000,
    null,
    null
  ],
  "VNU-ULIS": [
    31000000,
    42000000,
    null,
    null
  ],
  "VNU-UED": [
    17900000,
    19100000,
    null,
    null
  ],
  "HUCE": [
    18500000,
    35000000,
    587500,
    null
  ],
  "HAU": [
    15200000,
    18500000,
    null,
    null
  ],
  "TLU": [
    null,
    null,
    530000,
    null
  ],
  "HUMG": [
    null,
    null,
    555240,
    null
  ],
  "EPU": [
    null,
    null,
    705000,
    null
  ],
  "HaUI": [
    25000000,
    31000000,
    null,
    null
  ],
  "PTIT": [
    35900000,
    40700000,
    null,
    null
  ],
  "KMA": [
    null,
    null,
    595000,
    null
  ],
  "HV Tài chính (AOF)": [
    22000000,
    35000000,
    null,
    null
  ],
  "HV Ngân hàng (BA)": [
    27800000,
    29400000,
    null,
    null
  ],
  "HV Ngoại giao (DAV)": [
    47750000,
    52000000,
    null,
    null
  ],
  "HMU": [
    19100000,
    70000000,
    null,
    null
  ],
  "HUP": [
    28000000,
    58000000,
    null,
    null
  ],
  "HUPH": [
    21010000,
    38570000,
    null,
    null
  ],
  "HUC": [
    19100000,
    25500000,
    null,
    null
  ],
  "HOU": [
    23700000,
    25300000,
    null,
    null
  ],
  "ULSA": [
    null,
    null,
    591750,
    null
  ],
  "UTC": [
    24000000,
    25600000,
    null,
    null
  ],
  "USTH": [
    59000000,
    105000000,
    null,
    null
  ],
  "Phenikaa": [
    28000000,
    128000000,
    null,
    null
  ],
  "Thăng Long": [
    35100000,
    54000000,
    null,
    null
  ],
  "CMC": [
    37422000,
    44226000,
    null,
    40824000
  ],
  "Đại Nam": [
    38700000,
    99000000,
    null,
    null
  ],
  "HUBT": [
    14600000,
    99840000,
    null,
    null
  ],
  "Việt - Hung (VIU)": [
    17900000,
    20900000,
    null,
    null
  ],
  "TUEBA": [
    15560000,
    16320000,
    494000,
    null
  ],
  "ICTU": [
    15000000,
    30000000,
    null,
    null
  ],
  "TNUT": [
    null,
    null,
    630000,
    null
  ],
  "TUAF": [
    18000000,
    21900000,
    null,
    null
  ],
  "TUMP": [
    43000000,
    59000000,
    null,
    43000000
  ],
  "TNUE": [
    17900000,
    17900000,
    null,
    null
  ],
  "ĐH Hải Phòng": [
    19910000,
    19910000,
    null,
    null
  ],
  "VMU": [
    19000000,
    24000000,
    null,
    null
  ],
  "KT Y tế Hải Dương": [
    29260000,
    47890000,
    null,
    null
  ],
  "UTEHY": [
    21500000,
    24500000,
    null,
    null
  ],
  "ĐH Vinh": [
    null,
    null,
    460000,
    null
  ],
  "DUT": [
    26750000,
    32000000,
    null,
    null
  ],
  "DUE": [
    29500000,
    29500000,
    null,
    null
  ],
  "ĐHSP Đà Nẵng": [
    17900000,
    24000000,
    null,
    null
  ],
  "Y Dược ĐH Đà Nẵng": [
    null,
    null,
    785680,
    null
  ],
  "UFL ĐH Đà Nẵng": [
    24800000,
    26700000,
    null,
    null
  ],
  "DTU": [
    27000000,
    94000000,
    null,
    null
  ],
  "ĐH Đông Á": [
    null,
    null,
    817779,
    null
  ],
  "HUSC": [
    15400000,
    19700000,
    null,
    null
  ],
  "HCE": [
    21600000,
    28000000,
    null,
    24800000
  ],
  "HUL": [
    18000000,
    18000000,
    null,
    18000000
  ],
  "ĐHSP Huế": [
    17900000,
    20900000,
    null,
    null
  ],
  "Y Dược Huế": [
    29850000,
    59985000,
    1428636,
    37660000
  ],
  "Nghệ thuật Huế": [
    null,
    null,
    541167,
    null
  ],
  "Du lịch Huế": [
    null,
    16500000,
    null,
    null
  ],
  "Nông Lâm Huế": [
    null,
    null,
    576002,
    null
  ],
  "NTU": [
    10000000,
    14000000,
    null,
    null
  ],
  "QNU": [
    20750000,
    25000000,
    null,
    null
  ],
  "DLU": [
    17900000,
    26600000,
    null,
    null
  ],
  "ĐH Tây Nguyên": [
    null,
    null,
    561108,
    null
  ],
  "ĐH Hồng Đức": [
    13057000,
    15191000,
    null,
    null
  ],
  "HCMUT": [
    31500000,
    31500000,
    null,
    null
  ],
  "HCMUS": [
    32600000,
    40500000,
    null,
    38600000
  ],
  "UIT": [
    41800000,
    41800000,
    null,
    41800000
  ],
  "UEL": [
    35800000,
    35800000,
    null,
    35800000
  ],
  "IU (HCMIU)": [
    50000000,
    60000000,
    null,
    null
  ],
  "USSH TP.HCM": [
    16000000,
    37000000,
    null,
    null
  ],
  "UEH": [
    null,
    null,
    1250000,
    null
  ],
  "TDTU": [
    31260000,
    68460000,
    null,
    36590000
  ],
  "HCMUE": [
    17900000,
    25080000,
    null,
    null
  ],
  "HCMUTE": [
    32500000,
    40000000,
    null,
    null
  ],
  "IUH": [
    33700000,
    58900000,
    null,
    null
  ],
  "HUIT": [
    null,
    null,
    1225000,
    null
  ],
  "UTH": [
    null,
    null,
    515000,
    null
  ],
  "OU": [
    26500000,
    32000000,
    null,
    null
  ],
  "UFM": [
    30000000,
    30000000,
    null,
    null
  ],
  "HUB": [
    25900000,
    29800000,
    null,
    25900000
  ],
  "ULAW": [
    44750000,
    53100000,
    null,
    null
  ],
  "UAH": [
    null,
    null,
    1070909,
    null
  ],
  "Mỹ thuật TP.HCM": [
    15200000,
    15200000,
    null,
    null
  ],
  "Văn hóa TP.HCM": [
    19910000,
    19910000,
    null,
    null
  ],
  "UMP": [
    30000000,
    90000000,
    null,
    null
  ],
  "PNT": [
    47000000,
    81000000,
    null,
    null
  ],
  "NLU": [
    null,
    null,
    635833,
    null
  ],
  "HCMUNRE": [
    23000000,
    29600000,
    null,
    null
  ],
  "HUTECH": [
    66000000,
    160000000,
    null,
    null
  ],
  "UEF": [
    80000000,
    88000000,
    null,
    null
  ],
  "Hoa Sen": [
    45000000,
    85000000,
    null,
    null
  ],
  "NTT": [
    null,
    183000000,
    null,
    null
  ],
  "Văn Lang": [
    65000000,
    72000000,
    null,
    null
  ],
  "Lạc Hồng": [
    36000000,
    51000000,
    null,
    38000000
  ],
  "VGU": [
    87400000,
    93200000,
    null,
    87400000
  ],
  "Thủ Dầu Một": [
    25650000,
    31350000,
    null,
    null
  ],
  "CTU": [
    27380000,
    33400000,
    null,
    null
  ],
  "MTA": [
    0,
    0,
    null,
    0
  ],
  "HV Quân y": [
    0,
    0,
    null,
    0
  ],
  "HV KH Quân sự": [
    0,
    0,
    null,
    0
  ],
  "HV Biên phòng": [
    0,
    0,
    null,
    0
  ],
  "HV Hậu cần": [
    0,
    0,
    null,
    0
  ],
  "HV PK-KQ": [
    0,
    0,
    null,
    0
  ],
  "HV Hải quân": [
    0,
    0,
    null,
    0
  ],
  "SQ Chính trị": [
    0,
    0,
    null,
    0
  ],
  "SQ Lục quân 1": [
    0,
    0,
    null,
    0
  ],
  "SQ Lục quân 2": [
    0,
    0,
    null,
    0
  ],
  "SQ Đặc công": [
    0,
    0,
    null,
    0
  ],
  "SQ Phòng hóa": [
    0,
    0,
    null,
    0
  ],
  "SQ Pháo binh": [
    0,
    0,
    null,
    0
  ],
  "SQ Công binh": [
    0,
    0,
    null,
    0
  ],
  "SQ Tăng thiết giáp": [
    0,
    0,
    null,
    0
  ],
  "SQ Thông tin": [
    0,
    0,
    null,
    0
  ],
  "SQ Không quân": [
    0,
    0,
    null,
    0
  ],
  "SQ KT Quân sự": [
    0,
    0,
    null,
    0
  ],
  "HV An ninh ND": [
    0,
    0,
    null,
    0
  ],
  "HV Cảnh sát ND": [
    0,
    0,
    null,
    0
  ],
  "HV Chính trị CAND": [
    0,
    0,
    null,
    0
  ],
  "HV KT-CN An ninh": [
    0,
    0,
    null,
    0
  ],
  "ĐH An ninh ND": [
    0,
    0,
    null,
    0
  ],
  "ĐH Cảnh sát ND": [
    0,
    0,
    null,
    0
  ],
  "ĐH PCCC": [
    0,
    0,
    null,
    0
  ],
  "HV Quốc tế (AIS)": [
    0,
    0,
    null,
    0
  ]
};

export interface SchoolTuition {
  min: number | null;
  max: number | null;
  credit: number | null;
  median: number | null;
}

/** Chỉ hiển thị số tiền được nhập rõ ràng (> 0); số 0/không hợp lệ là dữ liệu thiếu. */
function cleanMoney(value: number | null): number | null {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
}

export function getSchoolTuition(university: Pick<University, "admissions2026">): SchoolTuition | null {
  const tuple = TUITION_BY_SHEET[university.admissions2026?.sheet ?? ""];
  if (!tuple) return null;
  return { min: cleanMoney(tuple[0]), max: cleanMoney(tuple[1]), credit: cleanMoney(tuple[2]), median: cleanMoney(tuple[3]) };
}

export const TUITION_SCHOOL_COUNT = Object.keys(TUITION_BY_SHEET).length;
