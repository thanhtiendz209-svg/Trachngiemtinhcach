import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ExternalLink, f as Search, p as RotateCcw, u as SlidersHorizontal, w as GraduationCap } from "../_libs/lucide-react.mjs";
import { S as cn, b as Button } from "./router-Cg7OUugg.mjs";
import { d as riasecFitPercent, n as MISSING_DATA, t as FIT_NOTE } from "./riasec-BIz0WNyr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/UniversityExplorer-DqnWuFVW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Major groups used for RIASEC matching and filters.
*  Example phrases come from the combination Word files (career bullets).
*/
var MAJOR_GROUPS = [
	{
		id: "thuc-te",
		name: "Nhóm thực tế - kỹ thuật",
		riasec: [
			"R",
			"I",
			"C"
		],
		examples: [
			"Kỹ thuật viên y tế",
			"Vật lý trị liệu - Phục hồi chức năng",
			"Quản lý kỹ thuật - sản xuất",
			"Quản lý dự án xây dựng",
			"Kiểm định - đo lường chất lượng",
			"Trắc địa - Bản đồ",
			"An toàn lao động",
			"Bảo trì hệ thống kỹ thuật"
		]
	},
	{
		id: "nghien-cuu",
		name: "Nhóm nghiên cứu - khoa học",
		riasec: [
			"I",
			"R",
			"A"
		],
		examples: [
			"Nghiên cứu và phát triển (R&D) kỹ thuật",
			"Công nghệ vật liệu",
			"Kỹ thuật y sinh",
			"Robot học",
			"Khoa học máy tính ứng dụng",
			"Y khoa",
			"Y tế công cộng",
			"Khoa học dữ liệu kỹ thuật"
		]
	},
	{
		id: "sang-tao",
		name: "Nhóm sáng tạo - thiết kế",
		riasec: [
			"A",
			"R",
			"S"
		],
		examples: [
			"Thiết kế sản phẩm",
			"Kiến trúc",
			"Thiết kế công nghiệp",
			"Thiết kế đồ họa 3D - Game",
			"Giáo viên mỹ thuật - kỹ năng",
			"Trị liệu nghệ thuật",
			"Thiết kế trải nghiệm giáo dục",
			"Multimedia kỹ thuật"
		]
	},
	{
		id: "xa-hoi",
		name: "Nhóm xã hội - giáo dục",
		riasec: [
			"S",
			"A",
			"C"
		],
		examples: [
			"Giáo dục",
			"Đào tạo kỹ năng",
			"Điều dưỡng",
			"Công tác xã hội",
			"Tâm lý học ứng dụng thực hành",
			"Huấn luyện viên thể thao",
			"Y tế cộng đồng",
			"Điều phối dự án"
		]
	},
	{
		id: "quan-ly",
		name: "Nhóm quản lý - kinh doanh",
		riasec: [
			"E",
			"C",
			"S"
		],
		examples: [
			"Quản lý",
			"Kinh doanh vật tư kỹ thuật",
			"Quản trị chuỗi cung ứng",
			"Tư vấn kỹ thuật",
			"Khởi nghiệp công nghệ",
			"Marketing sản phẩm sáng tạo",
			"Quản lý dự án thiết kế",
			"Điều phối sản xuất"
		]
	},
	{
		id: "nghiep-vu",
		name: "Nhóm nghiệp vụ - vận hành",
		riasec: [
			"C",
			"E",
			"I"
		],
		examples: [
			"Quản trị hồ sơ",
			"Quản lý chất lượng (QA/QC)",
			"Logistics",
			"Phân tích dữ liệu kỹ thuật",
			"Kiểm toán nội bộ chiến lược",
			"Quản lý dữ liệu doanh nghiệp",
			"Hành chính giáo dục",
			"Điều phối dịch vụ kỹ thuật"
		]
	}
];
Object.fromEntries(MAJOR_GROUPS.map((m) => [m.id, m]));
/** 126 schools from 126_truong_TrangChu_va_TrangTuyenSinh.docx.
*  Majors, tuition and admission scores from the later compiled score file were removed
*  (that file is on hold — do not invent replacements). Cards show "Chưa có dữ liệu".
*  `location` is taken from the official name or the .edu.vn host.
*  `category` / `focusRiasec` are name-derived signals for RIASEC matching, not an official catalog.
*/
var UNIVERSITIES = [
	{
		"id": "uni-001",
		"name": "Đại học Bách khoa Hà Nội (HUST)",
		"shortName": "HUST",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hust.edu.vn&sz=128",
		"website": "https://hust.edu.vn/",
		"admissionsUrl": "https://ts.hust.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-002",
		"name": "Đại học Kinh tế Quốc dân (NEU)",
		"shortName": "NEU",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=neu.edu.vn&sz=128",
		"website": "https://neu.edu.vn/",
		"admissionsUrl": "https://daotao.neu.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-003",
		"name": "Đại học Ngoại thương (FTU)",
		"shortName": "FTU",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=ftu.edu.vn&sz=128",
		"website": "https://ftu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ftu.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-004",
		"name": "Đại học Thương mại (TMU)",
		"shortName": "TMU",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=tmu.edu.vn&sz=128",
		"website": "https://tmu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.tmu.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-005",
		"name": "Trường Đại học Luật Hà Nội (HLU)",
		"shortName": "HLU",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hlu.edu.vn&sz=128",
		"website": "https://hlu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hlu.edu.vn/",
		"category": "Luật",
		"focusRiasec": [
			"E",
			"C",
			"S"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-006",
		"name": "Trường Đại học Khoa học Tự nhiên - ĐHQG Hà Nội (VNU-HUS)",
		"shortName": "VNU-HUS",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hus.vnu.edu.vn&sz=128",
		"website": "https://hus.vnu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hus.vnu.edu.vn/",
		"category": "Khoa học",
		"focusRiasec": [
			"I",
			"R",
			"A"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-007",
		"name": "Trường Đại học Công nghệ - ĐHQG Hà Nội (VNU-UET)",
		"shortName": "VNU-UET",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=uet.vnu.edu.vn&sz=128",
		"website": "https://uet.vnu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.uet.vnu.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-008",
		"name": "Trường Đại học Kinh tế - ĐHQG Hà Nội (VNU-UEB)",
		"shortName": "VNU-UEB",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=ueb.vnu.edu.vn&sz=128",
		"website": "https://ueb.vnu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ueb.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-009",
		"name": "Trường Đại học Khoa học Xã hội và Nhân văn - ĐHQG Hà Nội (VNU-USSH)",
		"shortName": "VNU-USSH",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=ussh.vnu.edu.vn&sz=128",
		"website": "https://ussh.vnu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ussh.edu.vn/",
		"category": "Xã hội - Nhân văn",
		"focusRiasec": [
			"S",
			"A",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-010",
		"name": "Trường Đại học Ngoại ngữ - ĐHQG Hà Nội (VNU-ULIS)",
		"shortName": "VNU-ULIS",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=ulis.vnu.edu.vn&sz=128",
		"website": "https://ulis.vnu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ulis.vnu.edu.vn/",
		"category": "Ngoại ngữ",
		"focusRiasec": [
			"A",
			"S",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-011",
		"name": "Trường Đại học Giáo dục - ĐHQG Hà Nội (VNU-UED)",
		"shortName": "VNU-UED",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=education.vnu.edu.vn&sz=128",
		"website": "https://education.vnu.edu.vn/",
		"admissionsUrl": "https://education.vnu.edu.vn/",
		"category": "Sư phạm",
		"focusRiasec": [
			"S",
			"A",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-012",
		"name": "Đại học Xây dựng Hà Nội (HUCE)",
		"shortName": "HUCE",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=huce.edu.vn&sz=128",
		"website": "https://huce.edu.vn/",
		"admissionsUrl": "https://tuyensinh.huce.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-013",
		"name": "Trường Đại học Kiến trúc Hà Nội (HAU)",
		"shortName": "HAU",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hau.edu.vn&sz=128",
		"website": "https://hau.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hau.edu.vn/",
		"category": "Nghệ thuật",
		"focusRiasec": [
			"A",
			"R",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-014",
		"name": "Trường Đại học Thủy lợi (TLU)",
		"shortName": "TLU",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=tlu.edu.vn&sz=128",
		"website": "https://tlu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.tlu.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-015",
		"name": "Trường Đại học Mỏ - Địa chất (HUMG)",
		"shortName": "HUMG",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=humg.edu.vn&sz=128",
		"website": "https://humg.edu.vn/",
		"admissionsUrl": "https://tuyensinh.humg.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-016",
		"name": "Đại học Điện lực (EPU)",
		"shortName": "EPU",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=epu.edu.vn&sz=128",
		"website": "https://epu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.epu.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-017",
		"name": "Trường Đại học Công nghiệp Hà Nội (HaUI)",
		"shortName": "HaUI",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=haui.edu.vn&sz=128",
		"website": "https://haui.edu.vn/",
		"admissionsUrl": "https://tuyensinh.haui.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-018",
		"name": "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
		"shortName": "PTIT",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=ptit.edu.vn&sz=128",
		"website": "https://ptit.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ptit.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-019",
		"name": "Học viện Kỹ thuật Mật mã (KMA)",
		"shortName": "KMA",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=actvn.edu.vn&sz=128",
		"website": "https://actvn.edu.vn/",
		"admissionsUrl": "https://tuyensinh.actvn.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-020",
		"name": "Học viện Tài chính (AOF)",
		"shortName": "AOF",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hvtc.edu.vn&sz=128",
		"website": "https://hvtc.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hvtc.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-021",
		"name": "Học viện Ngân hàng (BA)",
		"shortName": "BA",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hvnh.edu.vn&sz=128",
		"website": "https://hvnh.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hvnh.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-022",
		"name": "Học viện Ngoại giao (DAV)",
		"shortName": "DAV",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=dav.edu.vn&sz=128",
		"website": "https://dav.edu.vn/",
		"admissionsUrl": "https://tuyensinh.dav.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-023",
		"name": "Đại học Y Hà Nội (HMU)",
		"shortName": "HMU",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hmu.edu.vn&sz=128",
		"website": "https://hmu.edu.vn/",
		"admissionsUrl": "https://hmu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-024",
		"name": "Đại học Dược Hà Nội (HUP)",
		"shortName": "HUP",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hup.edu.vn&sz=128",
		"website": "https://hup.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hup.edu.vn/",
		"category": "Y Dược",
		"focusRiasec": [
			"I",
			"S",
			"R"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-025",
		"name": "Đại học Y tế Công cộng (HUPH)",
		"shortName": "HUPH",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=huph.edu.vn&sz=128",
		"website": "https://huph.edu.vn/",
		"admissionsUrl": "https://tuyensinh.huph.edu.vn/",
		"category": "Y Dược",
		"focusRiasec": [
			"I",
			"S",
			"R"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-026",
		"name": "Trường Đại học Văn hóa Hà Nội (HUC)",
		"shortName": "HUC",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=huc.edu.vn&sz=128",
		"website": "https://huc.edu.vn/",
		"admissionsUrl": "https://tuyensinh.huc.edu.vn/",
		"category": "Xã hội - Nhân văn",
		"focusRiasec": [
			"S",
			"A",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-027",
		"name": "Trường Đại học Mở Hà Nội (HOU)",
		"shortName": "HOU",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hou.edu.vn&sz=128",
		"website": "https://hou.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hou.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-028",
		"name": "Trường Đại học Lao động - Xã hội (ULSA)",
		"shortName": "ULSA",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=ulsa.edu.vn&sz=128",
		"website": "https://ulsa.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ulsa.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-029",
		"name": "Trường Đại học Giao thông Vận tải (UTC)",
		"shortName": "UTC",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=utc.edu.vn&sz=128",
		"website": "https://utc.edu.vn/",
		"admissionsUrl": "https://tuyensinh.utc.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-030",
		"name": "Trường Đại học Khoa học và Công nghệ Hà Nội (USTH)",
		"shortName": "USTH",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=usth.edu.vn&sz=128",
		"website": "https://usth.edu.vn/",
		"admissionsUrl": "https://tuyensinh.usth.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-031",
		"name": "Trường Đại học Phenikaa",
		"shortName": "P",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=phenikaa-uni.edu.vn&sz=128",
		"website": "https://phenikaa-uni.edu.vn/",
		"admissionsUrl": "https://tuyensinh.phenikaa-uni.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-032",
		"name": "Trường Đại học Thăng Long",
		"shortName": "TL",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=thanglong.edu.vn&sz=128",
		"website": "https://thanglong.edu.vn/",
		"admissionsUrl": "https://tuyensinh.thanglong.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-033",
		"name": "Trường Đại học CMC",
		"shortName": "C",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=cmc-u.edu.vn&sz=128",
		"website": "https://cmc-u.edu.vn/",
		"admissionsUrl": "https://tuyensinh.cmc-u.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-034",
		"name": "Trường Đại học Đại Nam",
		"shortName": "N",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=dainam.edu.vn&sz=128",
		"website": "https://dainam.edu.vn/",
		"admissionsUrl": "https://tuyensinh.dainam.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-035",
		"name": "Trường Đại học Kinh doanh và Công nghệ Hà Nội (HUBT)",
		"shortName": "HUBT",
		"location": "Hà Nội",
		"logo": "https://www.google.com/s2/favicons?domain=hubt.edu.vn&sz=128",
		"website": "https://hubt.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hubt.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-036",
		"name": "Trường Đại học Công nghiệp Việt - Hung",
		"shortName": "CVH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=viu.edu.vn&sz=128",
		"website": "https://viu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.viu.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-037",
		"name": "Trường Đại học Kinh tế và Quản trị Kinh doanh - ĐH Thái Nguyên (TUEBA)",
		"shortName": "TUEBA",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=tueba.edu.vn&sz=128",
		"website": "https://tueba.edu.vn/",
		"admissionsUrl": "https://tuyensinh.tueba.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-038",
		"name": "Trường Đại học Công nghệ Thông tin và Truyền thông - ĐH Thái Nguyên (ICTU)",
		"shortName": "ICTU",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=ictu.edu.vn&sz=128",
		"website": "https://ictu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ictu.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-039",
		"name": "Trường Đại học Kỹ thuật Công nghiệp - ĐH Thái Nguyên (TNUT)",
		"shortName": "TNUT",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=tnut.edu.vn&sz=128",
		"website": "https://tnut.edu.vn/",
		"admissionsUrl": "https://tuyensinh.tnut.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-040",
		"name": "Trường Đại học Nông Lâm - ĐH Thái Nguyên (TUAF)",
		"shortName": "TUAF",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=tuaf.edu.vn&sz=128",
		"website": "https://tuaf.edu.vn/",
		"admissionsUrl": "https://tuyensinh.tuaf.edu.vn/",
		"category": "Nông Lâm",
		"focusRiasec": [
			"R",
			"I",
			"S"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-041",
		"name": "Trường Đại học Y - Dược - ĐH Thái Nguyên (TUMP)",
		"shortName": "TUMP",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=tump.edu.vn&sz=128",
		"website": "https://tump.edu.vn/",
		"admissionsUrl": "https://tuyensinh.tump.edu.vn/",
		"category": "Y Dược",
		"focusRiasec": [
			"I",
			"S",
			"R"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-042",
		"name": "Trường Đại học Sư phạm - ĐH Thái Nguyên (TNUE)",
		"shortName": "TNUE",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=tnue.edu.vn&sz=128",
		"website": "https://tnue.edu.vn/",
		"admissionsUrl": "https://tuyensinh.tnue.edu.vn/",
		"category": "Sư phạm",
		"focusRiasec": [
			"S",
			"A",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-043",
		"name": "Trường Đại học Hải Phòng",
		"shortName": "HP",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=dhhp.edu.vn&sz=128",
		"website": "https://dhhp.edu.vn/",
		"admissionsUrl": "https://tuyensinh.dhhp.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-044",
		"name": "Đại học Hàng hải Việt Nam (VMU)",
		"shortName": "VMU",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=vimaru.edu.vn&sz=128",
		"website": "https://vimaru.edu.vn/",
		"admissionsUrl": "https://tuyensinh.vimaru.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-045",
		"name": "Trường Đại học Kỹ thuật Y tế Hải Dương",
		"shortName": "KYHD",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hmt.edu.vn&sz=128",
		"website": "https://hmt.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hmt.edu.vn/",
		"category": "Y Dược",
		"focusRiasec": [
			"I",
			"S",
			"R"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-046",
		"name": "Trường Đại học Sư phạm Kỹ thuật Hưng Yên (UTEHY)",
		"shortName": "UTEHY",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=utehy.edu.vn&sz=128",
		"website": "https://utehy.edu.vn/",
		"admissionsUrl": "https://tuyensinh.utehy.edu.vn/",
		"category": "Sư phạm",
		"focusRiasec": [
			"S",
			"A",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-047",
		"name": "Trường Đại học Vinh",
		"shortName": "V",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=vinhuni.edu.vn&sz=128",
		"website": "https://vinhuni.edu.vn/",
		"admissionsUrl": "https://tuyensinh.vinhuni.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-048",
		"name": "Trường Đại học Bách khoa - Đại học Đà Nẵng (DUT)",
		"shortName": "DUT",
		"location": "Đà Nẵng",
		"logo": "https://www.google.com/s2/favicons?domain=dut.udn.vn&sz=128",
		"website": "https://dut.udn.vn/",
		"admissionsUrl": "https://tuyensinh.dut.udn.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-049",
		"name": "Trường Đại học Kinh tế - Đại học Đà Nẵng (DUE)",
		"shortName": "DUE",
		"location": "Đà Nẵng",
		"logo": "https://www.google.com/s2/favicons?domain=due.udn.vn&sz=128",
		"website": "https://due.udn.vn/",
		"admissionsUrl": "https://tuyensinh.due.udn.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-050",
		"name": "Trường Đại học Sư phạm - Đại học Đà Nẵng",
		"shortName": "SĐN",
		"location": "Đà Nẵng",
		"logo": "https://www.google.com/s2/favicons?domain=ued.udn.vn&sz=128",
		"website": "https://ued.udn.vn/",
		"admissionsUrl": "https://tuyensinh.ued.udn.vn/",
		"category": "Sư phạm",
		"focusRiasec": [
			"S",
			"A",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-051",
		"name": "Trường Đại học Y Dược - Đại học Đà Nẵng",
		"shortName": "YDĐN",
		"location": "Đà Nẵng",
		"logo": "https://www.google.com/s2/favicons?domain=ump.udn.vn&sz=128",
		"website": "https://ump.udn.vn/",
		"admissionsUrl": "https://tuyensinh.ump.udn.vn/",
		"category": "Y Dược",
		"focusRiasec": [
			"I",
			"S",
			"R"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-052",
		"name": "Trường Đại học Ngoại ngữ - Đại học Đà Nẵng",
		"shortName": "NĐN",
		"location": "Đà Nẵng",
		"logo": "https://www.google.com/s2/favicons?domain=ufl.udn.vn&sz=128",
		"website": "https://ufl.udn.vn/",
		"admissionsUrl": "https://tuyensinh.ufl.udn.vn/",
		"category": "Ngoại ngữ",
		"focusRiasec": [
			"A",
			"S",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-053",
		"name": "Trường Đại học Duy Tân (DTU)",
		"shortName": "DTU",
		"location": "Đà Nẵng",
		"logo": "https://www.google.com/s2/favicons?domain=duytan.edu.vn&sz=128",
		"website": "https://duytan.edu.vn/",
		"admissionsUrl": "https://tuyensinh.duytan.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-054",
		"name": "Trường Đại học Đông Á",
		"shortName": "ĐÁ",
		"location": "Đà Nẵng",
		"logo": "https://www.google.com/s2/favicons?domain=donga.edu.vn&sz=128",
		"website": "https://donga.edu.vn/",
		"admissionsUrl": "https://tuyensinh.donga.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-055",
		"name": "Trường Đại học Khoa học - Đại học Huế",
		"shortName": "KH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=husc.edu.vn&sz=128",
		"website": "https://husc.edu.vn/",
		"admissionsUrl": "https://tuyensinh.husc.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-056",
		"name": "Trường Đại học Kinh tế - Đại học Huế",
		"shortName": "KH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hce.edu.vn&sz=128",
		"website": "https://hce.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hce.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-057",
		"name": "Trường Đại học Luật - Đại học Huế",
		"shortName": "LH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hul.edu.vn&sz=128",
		"website": "https://hul.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hul.edu.vn/",
		"category": "Luật",
		"focusRiasec": [
			"E",
			"C",
			"S"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-058",
		"name": "Trường Đại học Sư phạm - Đại học Huế",
		"shortName": "SH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=dhsphue.edu.vn&sz=128",
		"website": "https://dhsphue.edu.vn/",
		"admissionsUrl": "https://tuyensinh.dhsphue.edu.vn/",
		"category": "Sư phạm",
		"focusRiasec": [
			"S",
			"A",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-059",
		"name": "Trường Đại học Y - Dược - Đại học Huế",
		"shortName": "YDH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=huemed-univ.edu.vn&sz=128",
		"website": "https://huemed-univ.edu.vn/",
		"admissionsUrl": "https://tuyensinh.huemed-univ.edu.vn/",
		"category": "Y Dược",
		"focusRiasec": [
			"I",
			"S",
			"R"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-060",
		"name": "Trường Đại học Nghệ thuật - Đại học Huế",
		"shortName": "NH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hufa.edu.vn&sz=128",
		"website": "https://hufa.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hufa.edu.vn/",
		"category": "Nghệ thuật",
		"focusRiasec": [
			"A",
			"R",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-061",
		"name": "Trường Du lịch - Đại học Huế",
		"shortName": "DH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=huht.edu.vn&sz=128",
		"website": "https://huht.edu.vn/",
		"admissionsUrl": "https://tuyensinh.huht.edu.vn/",
		"category": "Du lịch",
		"focusRiasec": [
			"E",
			"S",
			"A"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-062",
		"name": "Trường Đại học Nông Lâm - Đại học Huế",
		"shortName": "NLH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=huaf.edu.vn&sz=128",
		"website": "https://huaf.edu.vn/",
		"admissionsUrl": "https://tuyensinh.huaf.edu.vn/",
		"category": "Nông Lâm",
		"focusRiasec": [
			"R",
			"I",
			"S"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-063",
		"name": "Trường Đại học Nha Trang",
		"shortName": "NT",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=ntu.edu.vn&sz=128",
		"website": "https://ntu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ntu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-064",
		"name": "Trường Đại học Quy Nhơn",
		"shortName": "QN",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=qnu.edu.vn&sz=128",
		"website": "https://qnu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.qnu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-065",
		"name": "Trường Đại học Đà Lạt",
		"shortName": "ĐL",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=dlu.edu.vn&sz=128",
		"website": "https://dlu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.dlu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-066",
		"name": "Trường Đại học Tây Nguyên",
		"shortName": "TN",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=ttn.edu.vn&sz=128",
		"website": "https://ttn.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ttn.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-067",
		"name": "Trường Đại học Hồng Đức",
		"shortName": "HĐ",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hdu.edu.vn&sz=128",
		"website": "https://hdu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hdu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-068",
		"name": "Trường Đại học Bách khoa - ĐHQG TP.HCM (HCMUT)",
		"shortName": "HCMUT",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmut.edu.vn&sz=128",
		"website": "https://hcmut.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmut.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-069",
		"name": "Trường Đại học Khoa học Tự nhiên - ĐHQG TP.HCM (HCMUS)",
		"shortName": "HCMUS",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmus.edu.vn&sz=128",
		"website": "https://hcmus.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmus.edu.vn/",
		"category": "Khoa học",
		"focusRiasec": [
			"I",
			"R",
			"A"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-070",
		"name": "Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM (UIT)",
		"shortName": "UIT",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=uit.edu.vn&sz=128",
		"website": "https://uit.edu.vn/",
		"admissionsUrl": "https://tuyensinh.uit.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-071",
		"name": "Trường Đại học Kinh tế - Luật - ĐHQG TP.HCM (UEL)",
		"shortName": "UEL",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=uel.edu.vn&sz=128",
		"website": "https://uel.edu.vn/",
		"admissionsUrl": "https://tuyensinh.uel.edu.vn/",
		"category": "Luật",
		"focusRiasec": [
			"E",
			"C",
			"S"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-072",
		"name": "Trường Đại học Quốc tế - ĐHQG TP.HCM (IU)",
		"shortName": "IU",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmiu.edu.vn&sz=128",
		"website": "https://hcmiu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmiu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-073",
		"name": "Trường Đại học Khoa học Xã hội và Nhân văn - ĐHQG TP.HCM",
		"shortName": "KXNĐT",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmussh.edu.vn&sz=128",
		"website": "https://hcmussh.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmussh.edu.vn/",
		"category": "Xã hội - Nhân văn",
		"focusRiasec": [
			"S",
			"A",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-074",
		"name": "Đại học Kinh tế TP.HCM (UEH)",
		"shortName": "UEH",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=ueh.edu.vn&sz=128",
		"website": "https://ueh.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ueh.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-075",
		"name": "Trường Đại học Tôn Đức Thắng (TDTU)",
		"shortName": "TDTU",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=tdtu.edu.vn&sz=128",
		"website": "https://tdtu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.tdtu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-076",
		"name": "Trường Đại học Sư phạm TP.HCM (HCMUE)",
		"shortName": "HCMUE",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmue.edu.vn&sz=128",
		"website": "https://hcmue.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmue.edu.vn/",
		"category": "Sư phạm",
		"focusRiasec": [
			"S",
			"A",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-077",
		"name": "Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)",
		"shortName": "HCMUTE",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmute.edu.vn&sz=128",
		"website": "https://hcmute.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmute.edu.vn/",
		"category": "Sư phạm",
		"focusRiasec": [
			"S",
			"A",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-078",
		"name": "Trường Đại học Công nghiệp TP.HCM (IUH)",
		"shortName": "IUH",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=iuh.edu.vn&sz=128",
		"website": "https://iuh.edu.vn/",
		"admissionsUrl": "https://tuyensinh.iuh.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-079",
		"name": "Trường Đại học Công Thương TP.HCM (HUIT)",
		"shortName": "HUIT",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=huit.edu.vn&sz=128",
		"website": "https://huit.edu.vn/",
		"admissionsUrl": "https://tuyensinh.huit.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-080",
		"name": "Trường Đại học Giao thông vận tải TP.HCM (UTH)",
		"shortName": "UTH",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=ut.edu.vn&sz=128",
		"website": "https://ut.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ut.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-081",
		"name": "Trường Đại học Mở TP.HCM (OU)",
		"shortName": "OU",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=ou.edu.vn&sz=128",
		"website": "https://ou.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ou.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-082",
		"name": "Trường Đại học Tài chính - Marketing (UFM)",
		"shortName": "UFM",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=ufm.edu.vn&sz=128",
		"website": "https://ufm.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ufm.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-083",
		"name": "Trường Đại học Ngân hàng TP.HCM (HUB)",
		"shortName": "HUB",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hub.edu.vn&sz=128",
		"website": "https://hub.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hub.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-084",
		"name": "Đại học Luật TP.HCM (ULAW)",
		"shortName": "ULAW",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmulaw.edu.vn&sz=128",
		"website": "https://hcmulaw.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmulaw.edu.vn/",
		"category": "Luật",
		"focusRiasec": [
			"E",
			"C",
			"S"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-085",
		"name": "Trường Đại học Kiến trúc TP.HCM (UAH)",
		"shortName": "UAH",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=uah.edu.vn&sz=128",
		"website": "https://uah.edu.vn/",
		"admissionsUrl": "https://tuyensinh.uah.edu.vn/",
		"category": "Nghệ thuật",
		"focusRiasec": [
			"A",
			"R",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-086",
		"name": "Trường Đại học Mỹ thuật TP.HCM",
		"shortName": "MT",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hufa.edu.vn&sz=128",
		"website": "https://hufa.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hufa.edu.vn/",
		"category": "Nghệ thuật",
		"focusRiasec": [
			"A",
			"R",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-087",
		"name": "Trường Đại học Văn hóa TP.HCM",
		"shortName": "VT",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmuc.edu.vn&sz=128",
		"website": "https://hcmuc.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmuc.edu.vn/",
		"category": "Xã hội - Nhân văn",
		"focusRiasec": [
			"S",
			"A",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-088",
		"name": "Đại học Y Dược TP.HCM (UMP)",
		"shortName": "UMP",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=ump.edu.vn&sz=128",
		"website": "https://ump.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ump.edu.vn/",
		"category": "Y Dược",
		"focusRiasec": [
			"I",
			"S",
			"R"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-089",
		"name": "Trường Đại học Y khoa Phạm Ngọc Thạch",
		"shortName": "YPNT",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=pnt.edu.vn&sz=128",
		"website": "https://pnt.edu.vn/",
		"admissionsUrl": "https://tuyensinh.pnt.edu.vn/",
		"category": "Y Dược",
		"focusRiasec": [
			"I",
			"S",
			"R"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-090",
		"name": "Trường Đại học Nông Lâm TP.HCM (NLU)",
		"shortName": "NLU",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmuaf.edu.vn&sz=128",
		"website": "https://hcmuaf.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmuaf.edu.vn/",
		"category": "Nông Lâm",
		"focusRiasec": [
			"R",
			"I",
			"S"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-091",
		"name": "Trường Đại học Tài nguyên và Môi trường TP.HCM",
		"shortName": "TMT",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hcmunre.edu.vn&sz=128",
		"website": "https://hcmunre.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hcmunre.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-092",
		"name": "Trường Đại học Công nghệ TP.HCM (HUTECH)",
		"shortName": "HUTECH",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hutech.edu.vn&sz=128",
		"website": "https://hutech.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hutech.edu.vn/",
		"category": "Kỹ thuật",
		"focusRiasec": [
			"R",
			"I",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-093",
		"name": "Trường Đại học Kinh tế - Tài chính TP.HCM (UEF)",
		"shortName": "UEF",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=uef.edu.vn&sz=128",
		"website": "https://uef.edu.vn/",
		"admissionsUrl": "https://tuyensinh.uef.edu.vn/",
		"category": "Kinh tế",
		"focusRiasec": [
			"E",
			"C",
			"I"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-094",
		"name": "Trường Đại học Hoa Sen",
		"shortName": "HS",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=hoasen.edu.vn&sz=128",
		"website": "https://hoasen.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hoasen.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-095",
		"name": "Trường Đại học Nguyễn Tất Thành",
		"shortName": "NTT",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=ntt.edu.vn&sz=128",
		"website": "https://ntt.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ntt.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-096",
		"name": "Trường Đại học Văn Lang",
		"shortName": "VL",
		"location": "TP.HCM",
		"logo": "https://www.google.com/s2/favicons?domain=vanlanguni.edu.vn&sz=128",
		"website": "https://vanlanguni.edu.vn/",
		"admissionsUrl": "https://tuyensinh.vanlanguni.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-097",
		"name": "Trường Đại học Lạc Hồng",
		"shortName": "LH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=lhu.edu.vn&sz=128",
		"website": "https://lhu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.lhu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-098",
		"name": "Trường Đại học Việt - Đức (VGU)",
		"shortName": "VGU",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=vgu.edu.vn&sz=128",
		"website": "https://vgu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.vgu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-099",
		"name": "Trường Đại học Thủ Dầu Một",
		"shortName": "TDM",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=tdmu.edu.vn&sz=128",
		"website": "https://tdmu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.tdmu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-100",
		"name": "Trường Đại học Cần Thơ (CTU)",
		"shortName": "CTU",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=ctu.edu.vn&sz=128",
		"website": "https://ctu.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ctu.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-101",
		"name": "Học viện Kỹ thuật Quân sự (MTA)",
		"shortName": "MTA",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=mta.edu.vn&sz=128",
		"website": "https://mta.edu.vn/",
		"admissionsUrl": "https://mta.edu.vn/",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-102",
		"name": "Học viện Quân y",
		"shortName": "Q",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hvqy.edu.vn&sz=128",
		"website": "https://hvqy.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hvqy.edu.vn/",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-103",
		"name": "Học viện Khoa học Quân sự",
		"shortName": "KQ",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hocvienkhoahocquan.su.edu.vn&sz=128",
		"website": "https://hocvienkhoahocquan.su.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-104",
		"name": "Học viện Biên phòng",
		"shortName": "B",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hocvienbienphong.edu.vn&sz=128",
		"website": "https://hocvienbienphong.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-105",
		"name": "Học viện Hậu cần",
		"shortName": "H",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hocvienhaucan.edu.vn&sz=128",
		"website": "https://hocvienhaucan.edu.vn/",
		"admissionsUrl": "",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-106",
		"name": "Học viện Phòng không - Không quân",
		"shortName": "PK",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hocvienpkkq.edu.vn&sz=128",
		"website": "https://hocvienpkkq.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-107",
		"name": "Học viện Hải quân",
		"shortName": "H",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hocvienhaiquan.edu.vn&sz=128",
		"website": "https://hocvienhaiquan.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-108",
		"name": "Trường Đại học Chính trị (Trường Sĩ quan Chính trị)",
		"shortName": "CSC",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hocvienchinhtri.edu.vn&sz=128",
		"website": "https://hocvienchinhtri.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-109",
		"name": "Trường Sĩ quan Lục quân 1",
		"shortName": "SL",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=truongsq1.edu.vn&sz=128",
		"website": "https://truongsq1.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-110",
		"name": "Trường Sĩ quan Lục quân 2 (Đại học Nguyễn Huệ)",
		"shortName": "SLNH",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=daihocnguyenHue.edu.vn&sz=128",
		"website": "https://daihocnguyenHue.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-111",
		"name": "Trường Sĩ quan Đặc công",
		"shortName": "SĐ",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=truongdaccong.edu.vn&sz=128",
		"website": "https://truongdaccong.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-112",
		"name": "Trường Sĩ quan Phòng hóa",
		"shortName": "SP",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=truongphonghoa.edu.vn&sz=128",
		"website": "https://truongphonghoa.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-113",
		"name": "Trường Sĩ quan Pháo binh",
		"shortName": "SP",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=truongphaobinh.edu.vn&sz=128",
		"website": "https://truongphaobinh.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-114",
		"name": "Trường Sĩ quan Công binh",
		"shortName": "SC",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=truongcongbinh.edu.vn&sz=128",
		"website": "https://truongcongbinh.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-115",
		"name": "Trường Sĩ quan Tăng thiết giáp",
		"shortName": "ST",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=truongttg.edu.vn&sz=128",
		"website": "https://truongttg.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-116",
		"name": "Trường Sĩ quan Thông tin (Đại học Thông tin liên lạc)",
		"shortName": "STT",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=truongthongtin.edu.vn&sz=128",
		"website": "https://truongthongtin.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-117",
		"name": "Trường Sĩ quan Không quân",
		"shortName": "SK",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=truongkhongquan.edu.vn&sz=128",
		"website": "https://truongkhongquan.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-118",
		"name": "Trường Sĩ quan Kỹ thuật Quân sự (Đại học Trần Đại Nghĩa)",
		"shortName": "SKQTN",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=trandainghia.edu.vn&sz=128",
		"website": "https://trandainghia.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-119",
		"name": "Học viện An ninh nhân dân",
		"shortName": "A",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hvanninh.edu.vn&sz=128",
		"website": "https://hvanninh.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hvanninh.edu.vn/",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-120",
		"name": "Học viện Cảnh sát nhân dân",
		"shortName": "C",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hvcsnd.edu.vn&sz=128",
		"website": "https://hvcsnd.edu.vn/",
		"admissionsUrl": "https://tuyensinh.hvcsnd.edu.vn/",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-121",
		"name": "Học viện Chính trị Công an nhân dân",
		"shortName": "CC",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hocvienchinhtricand.edu.vn&sz=128",
		"website": "https://hocvienchinhtricand.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-122",
		"name": "Học viện Kỹ thuật và Công nghệ An ninh",
		"shortName": "KCA",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=hocvienkythuatanninh.edu.vn&sz=128",
		"website": "https://hocvienkythuatanninh.edu.vn/",
		"admissionsUrl": "",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-123",
		"name": "Trường Đại học An ninh nhân dân",
		"shortName": "A",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=dhanninh.edu.vn&sz=128",
		"website": "https://dhanninh.edu.vn/",
		"admissionsUrl": "https://tuyensinh.dhanninh.edu.vn/",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-124",
		"name": "Trường Đại học Cảnh sát nhân dân",
		"shortName": "C",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=dhcsnd.edu.vn&sz=128",
		"website": "https://dhcsnd.edu.vn/",
		"admissionsUrl": "https://tuyensinh.dhcsnd.edu.vn/",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-125",
		"name": "Trường Đại học Phòng cháy chữa cháy",
		"shortName": "P",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=daihocpccc.edu.vn&sz=128",
		"website": "https://daihocpccc.edu.vn/",
		"admissionsUrl": "https://tuyensinh.daihocpccc.edu.vn/",
		"category": "Quân sự - Công an",
		"focusRiasec": [
			"R",
			"C",
			"E"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	},
	{
		"id": "uni-126",
		"name": "Học viện Quốc tế (AIS)",
		"shortName": "AIS",
		"location": "Khác",
		"logo": "https://www.google.com/s2/favicons?domain=ais.edu.vn&sz=128",
		"website": "https://ais.edu.vn/",
		"admissionsUrl": "https://tuyensinh.ais.edu.vn/",
		"category": "Đa ngành",
		"focusRiasec": [
			"I",
			"E",
			"C"
		],
		"majors": [],
		"programs": [],
		"tuition": null,
		"admissionScores": [],
		"admissionMethods": [],
		"lastUpdated": null
	}
];
var LOCATIONS = [
	"Tất cả",
	"Hà Nội",
	"TP.HCM",
	"Đà Nẵng",
	"Khác"
];
var TUITION_BANDS = [
	"Tất cả",
	"Dưới 20 triệu",
	"20–40 triệu",
	"40–60 triệu",
	"Trên 60 triệu"
];
var FIT_BANDS = [
	"Tất cả",
	"≥80%",
	"≥70%",
	"≥60%"
];
var SCORE_BANDS = [
	"Tất cả",
	"Dưới 20",
	"20–24",
	"24–27",
	"Trên 27"
];
function groupCategoryLabel(id) {
	if (id === "thuc-te") return "Kỹ thuật";
	if (id === "nghien-cuu") return "Khoa học";
	if (id === "sang-tao") return "Nghệ thuật";
	if (id === "xa-hoi") return "Sư phạm";
	if (id === "quan-ly") return "Kinh tế";
	if (id === "nghiep-vu") return "Kinh tế";
	return "";
}
function matchesMajorGroup(uni, groupId) {
	const group = MAJOR_GROUPS.find((g) => g.id === groupId);
	if (!group) return true;
	if (uni.category === "Đa ngành") return true;
	return uni.focusRiasec.filter((l) => group.riasec.includes(l)).length >= 2 || uni.category === groupCategoryLabel(group.id);
}
function tuitionRanges(uni) {
	const ranges = [];
	for (const program of uni.programs) {
		if (program.tuitionMin == null || program.tuitionMax == null) continue;
		ranges.push([program.tuitionMin, program.tuitionMax]);
	}
	if (!ranges.length && uni.tuition?.amount != null) ranges.push([uni.tuition.amount, uni.tuition.amount]);
	return ranges;
}
function tuitionInBand(uni, band) {
	if (band === "Tất cả") return true;
	const ranges = tuitionRanges(uni);
	if (!ranges.length) return false;
	return ranges.some(([min, max]) => {
		if (band === "Dưới 20 triệu") return min < 20;
		if (band === "20–40 triệu") return max >= 20 && min < 40;
		if (band === "40–60 triệu") return max >= 40 && min < 60;
		return max >= 60;
	});
}
function scoreInBand(uni, band) {
	if (band === "Tất cả") return true;
	const values = uni.programs.map((p) => p.thptValue).filter((n) => n != null);
	if (!values.length) return false;
	return values.some((n) => {
		if (band === "Dưới 20") return n < 20;
		if (band === "20–24") return n >= 20 && n < 24;
		if (band === "24–27") return n >= 24 && n <= 27;
		return n > 27;
	});
}
function fitMinValue(band) {
	if (band === "≥80%") return 80;
	if (band === "≥70%") return 70;
	if (band === "≥60%") return 60;
	return 0;
}
function rankUniversities(opts) {
	const query = opts.query.trim().toLowerCase();
	const group = MAJOR_GROUPS.find((g) => g.id === opts.groupId);
	const majorGroup = opts.major !== "all" ? MAJOR_GROUPS.find((g) => g.examples.includes(opts.major)) ?? group : group;
	const listed = new Set(opts.universities.flatMap((u) => u.majors));
	return opts.universities.map((uni) => {
		const profile = majorGroup ? majorGroup.riasec : uni.focusRiasec;
		return {
			uni,
			fit: opts.riasec ? riasecFitPercent(opts.riasec.scores, profile, opts.riasec.maxScores) : null,
			majors: opts.major !== "all" && uni.majors.includes(opts.major) ? [opts.major, ...uni.majors.filter((name) => name !== opts.major)] : uni.majors
		};
	}).filter(({ uni, fit }) => {
		if (query && !`${uni.name} ${uni.shortName} ${uni.category} ${uni.location} ${uni.majors.join(" ")}`.toLowerCase().includes(query)) return false;
		if (opts.location !== "Tất cả" && uni.location !== opts.location) return false;
		if (opts.major !== "all" && listed.has(opts.major) && !uni.majors.includes(opts.major)) return false;
		if (majorGroup && !matchesMajorGroup(uni, majorGroup.id)) return false;
		if (opts.applyTuition && !tuitionInBand(uni, opts.tuition)) return false;
		if (opts.applyScore && !scoreInBand(uni, opts.score)) return false;
		if (opts.applyMethod && opts.method !== "Tất cả") {
			if (!uni.admissionMethods.includes(opts.method)) return false;
		}
		if (opts.fitMin !== "Tất cả") {
			const min = fitMinValue(opts.fitMin);
			if (fit == null || fit < min) return false;
		}
		return true;
	}).sort((a, b) => (b.fit ?? 0) - (a.fit ?? 0) || a.uni.name.localeCompare(b.uni.name, "vi"));
}
function uniqueAdmissionMethods(universities) {
	return [...new Set(universities.flatMap((u) => u.admissionMethods))].sort((a, b) => a.localeCompare(b, "vi"));
}
var ALL_MAJOR_EXAMPLES = [...new Set(MAJOR_GROUPS.flatMap((g) => g.examples))];
function Initials({ text }) {
	const letters = text.replace(/[^A-Za-z0-9]/g, "").slice(0, 3).toUpperCase() || "U";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid size-12 shrink-0 place-items-center rounded-[14px] bg-ice font-display text-sm font-semibold text-navy",
		children: letters
	});
}
function UniversityLogo({ uni, className }) {
	const [failed, setFailed] = (0, import_react.useState)(!uni.logo);
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Initials, { text: uni.shortName || uni.name });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: uni.logo,
		alt: "",
		className: cn("size-12 shrink-0 rounded-[14px] bg-ice object-contain p-1.5", className),
		onError: () => setFailed(true)
	});
}
function UniversityCard({ uni, fit, suggestedMajors }) {
	const majors = suggestedMajors?.length ? suggestedMajors : uni.majors;
	const tuition = uni.tuition;
	const scores = uni.admissionScores;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col rounded-[24px] bg-card p-5 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UniversityLogo, { uni }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold leading-snug text-navy",
							children: uni.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs font-medium text-azure",
							children: [
								uni.shortName,
								" · ",
								uni.location
							]
						})]
					}),
					fit != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 rounded-full bg-ice px-2.5 py-1 font-display text-sm font-semibold tabular-nums text-azure",
						children: [fit, "%"]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				children: uni.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-navy",
						children: "Ngành phù hợp: "
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: majors.length ? majors.slice(0, 3).join(" · ") : MISSING_DATA
					})] }),
					fit != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-navy",
						children: "Phù hợp về sở thích: "
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums text-azure",
						children: [fit, "%"]
					})] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-navy",
						children: "Điểm chuẩn tham khảo: "
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: scores[0] ? `${scores[0].year}: ${scores[0].score}` : MISSING_DATA
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-navy",
						children: "Học phí: "
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: tuition ? `${tuition.year}: ${tuition.note}` : MISSING_DATA
					})] }),
					uni.admissionMethods.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-navy",
						children: "Phương thức: "
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: uni.admissionMethods.join(" · ")
					})] }) : null
				]
			}),
			fit != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-1.5 overflow-hidden rounded-full bg-ice",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bar-fill h-full bg-cyan",
					style: { width: `${fit}%` }
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-wrap gap-2 pt-4",
				children: [uni.website ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "secondary",
					size: "sm",
					className: "min-h-11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: uni.website,
						target: "_blank",
						rel: "noreferrer",
						children: ["Trang trường", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: MISSING_DATA
				}), uni.admissionsUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					size: "sm",
					className: "min-h-11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: uni.admissionsUrl,
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-3.5" }), "Trang tuyển sinh"]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "self-center text-xs text-muted",
					children: ["Tuyển sinh: ", MISSING_DATA]
				})]
			}),
			fit != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] leading-relaxed text-muted",
				children: FIT_NOTE
			}) : null
		]
	});
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("min-h-11 rounded-full px-3.5 text-sm font-medium transition-[background-color,color] duration-150", active ? "bg-navy text-paper" : "bg-mist text-muted hover:text-navy"),
		children
	});
}
function FilterRow({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-azure",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children
	})] });
}
function UniversityExplorer({ riasec, heading = "Khám phá trường Đại học", compact = false }) {
	const [q, setQ] = (0, import_react.useState)("");
	const [location, setLocation] = (0, import_react.useState)("Tất cả");
	const [tuition, setTuition] = (0, import_react.useState)("Tất cả");
	const [fitMin, setFitMin] = (0, import_react.useState)("Tất cả");
	const [groupId, setGroupId] = (0, import_react.useState)("all");
	const [major, setMajor] = (0, import_react.useState)("all");
	const [score, setScore] = (0, import_react.useState)("Tất cả");
	const [method, setMethod] = (0, import_react.useState)("Tất cả");
	const [open, setOpen] = (0, import_react.useState)(true);
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const hasTuition = UNIVERSITIES.some((u) => u.tuition);
	const hasScores = UNIVERSITIES.some((u) => u.admissionScores.length > 0);
	const methods = uniqueAdmissionMethods(UNIVERSITIES);
	const applyTuition = hasTuition && tuition !== "Tất cả";
	const applyScore = hasScores && score !== "Tất cả";
	const applyMethod = methods.length > 0 && method !== "Tất cả";
	const ranked = (0, import_react.useMemo)(() => rankUniversities({
		universities: UNIVERSITIES,
		query: q,
		location,
		tuition,
		fitMin,
		groupId,
		major,
		score,
		method,
		riasec,
		applyTuition,
		applyScore,
		applyMethod
	}), [
		q,
		location,
		tuition,
		fitMin,
		groupId,
		major,
		score,
		method,
		riasec,
		applyTuition,
		applyScore,
		applyMethod
	]);
	const pageSize = compact ? 6 : 12;
	const visible = showAll ? ranked : ranked.slice(0, pageSize);
	const activeCount = [
		q.trim() ? 1 : 0,
		location !== "Tất cả" ? 1 : 0,
		tuition !== "Tất cả" ? 1 : 0,
		fitMin !== "Tất cả" ? 1 : 0,
		groupId !== "all" ? 1 : 0,
		major !== "all" ? 1 : 0,
		score !== "Tất cả" ? 1 : 0,
		method !== "Tất cả" ? 1 : 0
	].reduce((a, b) => a + b, 0);
	function reset() {
		setQ("");
		setLocation("Tất cả");
		setTuition("Tất cả");
		setFitMin("Tất cả");
		setGroupId("all");
		setMajor("all");
		setScore("Tất cả");
		setMethod("Tất cả");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "bo-loc-truong",
		className: "mx-auto max-w-6xl scroll-mt-24 px-4 pb-12 pt-2 sm:px-6 sm:pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.16em] text-azure",
				children: "Bộ lọc trường"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl font-semibold text-navy",
				children: heading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: [
					UNIVERSITIES.length,
					" trường/học viện từ nguồn trang chủ và trang tuyển sinh chính thức. Học phí, điểm chuẩn và ngành đào tạo: ",
					MISSING_DATA,
					" nếu chưa có trong tài liệu."
				]
			}),
			riasec ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-navy",
				children: [
					"Đang ưu tiên trường gần mã ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-semibold",
						children: riasec.code
					}),
					"."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					"Chưa có kết quả RIASEC — vẫn xem và lọc toàn bộ trường.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/trac-nghiem/$quizId",
						params: { quizId: "riasec" },
						className: "font-medium text-azure hover:underline",
						children: "Làm trắc nghiệm RIASEC"
					}),
					" ",
					"để xếp theo mức phù hợp."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-[24px] bg-card p-4 shadow-border sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4 text-azure" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-semibold text-navy",
								children: "Bộ lọc"
							}),
							activeCount ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "whitespace-nowrap rounded-full bg-ice px-2.5 py-1 text-xs font-medium text-azure",
								children: [activeCount, " điều kiện"]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "ml-auto min-h-11 text-sm font-medium text-azure sm:hidden",
								onClick: () => setOpen((v) => !v),
								children: open ? "Thu gọn" : "Mở bộ lọc"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative mt-4 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Tìm trường...",
							"aria-label": "Tìm trường",
							className: "h-12 w-full rounded-[16px] bg-mist pl-10 pr-4 text-sm text-navy outline-none placeholder:text-muted focus:shadow-border"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("mt-4 space-y-4", open ? "block" : "hidden sm:block"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
								label: "Khu vực",
								children: LOCATIONS.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: location === loc,
									onClick: () => setLocation(loc),
									children: loc === "Tất cả" ? "Tất cả" : loc
								}, loc))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
								label: "Học phí",
								children: TUITION_BANDS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: tuition === t,
									onClick: () => setTuition(t),
									children: t
								}, t))
							}),
							tuition !== "Tất cả" && !hasTuition ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									"Học phí: ",
									MISSING_DATA,
									" — bộ lọc khoảng học phí chưa áp dụng được."
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
								label: "Điểm chuẩn",
								children: SCORE_BANDS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: score === s,
									onClick: () => setScore(s),
									children: s
								}, s))
							}),
							score !== "Tất cả" && !hasScores ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									"Điểm chuẩn: ",
									MISSING_DATA,
									" — bộ lọc điểm chuẩn chưa áp dụng được."
								]
							}) : null,
							riasec ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
								label: "Mức phù hợp RIASEC",
								children: FIT_BANDS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: fitMin === f,
									onClick: () => setFitMin(f),
									children: f === "Tất cả" ? "Tất cả" : f
								}, f))
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterRow, {
								label: "Nhóm ngành",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: groupId === "all",
									onClick: () => {
										setGroupId("all");
										setMajor("all");
									},
									children: "Tất cả"
								}), MAJOR_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: groupId === g.id,
									onClick: () => {
										setGroupId(g.id);
										setMajor("all");
									},
									children: g.name
								}, g.id))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-azure",
											children: "Ngành"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: major,
											onChange: (e) => {
												const next = e.target.value;
												setMajor(next);
												if (next !== "all") {
													const g = MAJOR_GROUPS.find((x) => x.examples.includes(next));
													if (g) setGroupId(g.id);
												}
											},
											className: "h-12 w-full rounded-[16px] bg-mist px-3 text-sm text-navy outline-none focus:shadow-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "all",
												children: "Tất cả ngành"
											}), ALL_MAJOR_EXAMPLES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: m,
												children: m
											}, m))]
										}),
										major !== "all" && !UNIVERSITIES.some((u) => u.majors.includes(major)) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-xs text-muted",
											children: [
												"Danh sách ngành theo trường: ",
												MISSING_DATA,
												". Chọn ngành chỉ thu hẹp theo nhóm sở thích, không loại trường."
											]
										}) : null
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-azure",
										children: "Phương thức xét tuyển"
									}), methods.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: method,
										onChange: (e) => setMethod(e.target.value),
										className: "h-12 w-full rounded-[16px] bg-mist px-3 text-sm text-navy outline-none focus:shadow-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Tất cả",
											children: "Tất cả"
										}), methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: m,
											children: m
										}, m))]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "flex h-12 items-center rounded-[16px] bg-mist px-3 text-sm text-muted",
										children: MISSING_DATA
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [ranked.length, " trường khớp bộ lọc"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: reset,
									disabled: activeCount === 0,
									className: "inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-azure disabled:opacity-40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "Xóa bộ lọc"]
								})]
							})
						]
					})
				]
			}),
			ranked.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 rounded-[20px] bg-ice px-4 py-6 text-sm text-muted",
				children: "Không có trường khớp bộ lọc. Thử nới khu vực hoặc xóa từ khóa."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: visible.map(({ uni, fit, majors }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UniversityCard, {
					uni,
					fit,
					suggestedMajors: majors
				}, uni.id))
			}),
			ranked.length > pageSize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-6 min-h-11 text-sm font-medium text-azure hover:underline",
				onClick: () => setShowAll((v) => !v),
				children: showAll ? "Thu gọn" : `Xem tất cả ${ranked.length} trường`
			}) : null
		]
	});
}
//#endregion
export { UniversityExplorer as t };
