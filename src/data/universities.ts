import type { University } from "./types";

/** 126 schools and regular majors from 126_truong_Mien_Tinh_Truong_Nganh_updated_2.xlsx.
 *  Names, region, old/new province, links, major codes and notes are copied from that file.
 *  Tuition and admission scores are not in the file, so those fields stay empty.
 *  category / focusRiasec stay as the previous name-based RIASEC signal.
 */
export const UNIVERSITIES = [
  {
    "id": "uni-001",
    "name": "Đại học Bách khoa Hà Nội (HUST)",
    "shortName": "HUST",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hust.edu.vn&sz=128",
    "website": "https://hust.edu.vn/",
    "admissionsUrl": "https://ts.hust.edu.vn/",
    "admissionsText": "https://ts.hust.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Kỹ thuật Thực phẩm (CT tiên tiến)",
      "Kỹ thuật sinh học (CT tiên tiến)",
      "Kỹ thuật Sinh học",
      "Kỹ thuật Thực phẩm",
      "Kỹ thuật Hóa dược (CT tiên tiến)",
      "Kỹ thuật Hoá học",
      "Hoá học",
      "Công nghệ giáo dục",
      "Quản lý giáo dục",
      "Hệ thống điện và năng lượng tái tạo (CT tiên tiến)",
      "Kỹ thuật Điều khiển – Tự động hoá (CT tiên tiến)",
      "Tin học công nghiệp và Tự động hóa (Chương trình Việt – Pháp PFIEV)",
      "Kỹ thuật Điện",
      "Kỹ thuật Điều khiển – Tự động hoá",
      "Phân tích kinh doanh (CT tiên tiến)",
      "Logistics và Quản lý chuỗi cung ứng (CT tiên tiến)",
      "Quản lý năng lượng",
      "Quản lý công nghiệp",
      "Quản trị kinh doanh",
      "Kế toán",
      "Tài chính – Ngân hàng",
      "Truyền thông số và Kỹ thuật đa phương tiện (CT tiên tiến)",
      "Kỹ thuật Điện tử – Viễn thông (CT tiên tiến)",
      "Kỹ thuật Y sinh (CT tiên tiến)",
      "Hệ thống nhúng thông minh và IoT (CT tiên tiến)",
      "Điện tử – Viễn thông – hợp tác với ĐH Leibniz Hannover (Đức)",
      "Kỹ thuật Điện tử – Viễn thông",
      "Kỹ thuật Y sinh",
      "Kỹ thuật Môi trường",
      "Quản lý Tài nguyên và Môi trường",
      "Tiếng Anh KHKT và Công nghệ",
      "Tiếng Anh chuyên nghiệp quốc tế",
      "Tiếng Trung KHKT và Công nghệ",
      "Tiếng Hàn Khoa học và Công nghệ (mới)",
      "Kỹ thuật Nhiệt",
      "Khoa học dữ liệu và Trí tuệ nhân tạo (CT tiên tiến)",
      "An toàn không gian số – Cyber Security (CT Tiên tiến)",
      "Công nghệ thông tin (Việt – Nhật)",
      "Công nghệ thông tin (Global ICT)",
      "Công nghệ thông tin (Việt – Pháp)",
      "CNTT: Khoa học Máy tính",
      "CNTT: Kỹ thuật Máy tính",
      "Kỹ thuật Cơ điện tử (CT tiên tiến)",
      "Cơ khí – Chế tạo máy – hợp tác với ĐH Griffith (Úc)",
      "Cơ điện tử – hợp tác với ĐH Leibniz Hannover (Đức)",
      "Cơ điện tử – hợp tác với ĐH Công nghệ Nagaoka (Nhật Bản)",
      "Kỹ thuật Cơ điện tử",
      "Kỹ thuật Cơ khí",
      "Toán – Tin",
      "Hệ thống thông tin quản lý",
      "Khoa học và kỹ thuật vật liệu (CT tiên tiến)",
      "Kỹ thuật Vật liệu",
      "Kỹ thuật Vi điện tử và Công nghệ nano",
      "Công nghệ vật liệu Polyme và Compozit",
      "Kỹ thuật in",
      "Vật lý kỹ thuật",
      "Kỹ thuật hạt nhân",
      "Vật lý Y khoa",
      "Kỹ thuật Ô tô (CT tiên tiến)",
      "Cơ khí hàng không (Chương trình Việt – Pháp PFIEV)",
      "Kỹ thuật Ô tô",
      "Kỹ thuật Cơ khí động lực",
      "Kỹ thuật Hàng không",
      "Quản trị kinh doanh – hợp tác với ĐH Troy (Hoa Kỳ)",
      "Khoa học máy tính – hợp tác với ĐH Troy (Hoa Kỳ)",
      "Công nghệ Dệt – May"
    ],
    "majorItems": [
      {
        "code": "BF-E12",
        "name": "Kỹ thuật Thực phẩm (CT tiên tiến)"
      },
      {
        "code": "BF-E19",
        "name": "Kỹ thuật sinh học (CT tiên tiến)"
      },
      {
        "code": "BF1",
        "name": "Kỹ thuật Sinh học"
      },
      {
        "code": "BF2",
        "name": "Kỹ thuật Thực phẩm"
      },
      {
        "code": "CH-E11",
        "name": "Kỹ thuật Hóa dược (CT tiên tiến)"
      },
      {
        "code": "CH1",
        "name": "Kỹ thuật Hoá học"
      },
      {
        "code": "CH2",
        "name": "Hoá học"
      },
      {
        "code": "ED2",
        "name": "Công nghệ giáo dục"
      },
      {
        "code": "ED3",
        "name": "Quản lý giáo dục"
      },
      {
        "code": "EE-E18",
        "name": "Hệ thống điện và năng lượng tái tạo (CT tiên tiến)"
      },
      {
        "code": "EE-E8",
        "name": "Kỹ thuật Điều khiển – Tự động hoá (CT tiên tiến)"
      },
      {
        "code": "EE-EP",
        "name": "Tin học công nghiệp và Tự động hóa (Chương trình Việt – Pháp PFIEV)"
      },
      {
        "code": "EE1",
        "name": "Kỹ thuật Điện"
      },
      {
        "code": "EE2",
        "name": "Kỹ thuật Điều khiển – Tự động hoá"
      },
      {
        "code": "EM-E13",
        "name": "Phân tích kinh doanh (CT tiên tiến)"
      },
      {
        "code": "EM-E14",
        "name": "Logistics và Quản lý chuỗi cung ứng (CT tiên tiến)"
      },
      {
        "code": "EM1",
        "name": "Quản lý năng lượng"
      },
      {
        "code": "EM2",
        "name": "Quản lý công nghiệp"
      },
      {
        "code": "EM3",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "EM4",
        "name": "Kế toán"
      },
      {
        "code": "EM5",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "ET-E16",
        "name": "Truyền thông số và Kỹ thuật đa phương tiện (CT tiên tiến)"
      },
      {
        "code": "ET-E4",
        "name": "Kỹ thuật Điện tử – Viễn thông (CT tiên tiến)"
      },
      {
        "code": "ET-E5",
        "name": "Kỹ thuật Y sinh (CT tiên tiến)"
      },
      {
        "code": "ET-E9",
        "name": "Hệ thống nhúng thông minh và IoT (CT tiên tiến)"
      },
      {
        "code": "ET-LUH",
        "name": "Điện tử – Viễn thông – hợp tác với ĐH Leibniz Hannover (Đức)"
      },
      {
        "code": "ET1",
        "name": "Kỹ thuật Điện tử – Viễn thông"
      },
      {
        "code": "ET2",
        "name": "Kỹ thuật Y sinh"
      },
      {
        "code": "EV1",
        "name": "Kỹ thuật Môi trường"
      },
      {
        "code": "EV2",
        "name": "Quản lý Tài nguyên và Môi trường"
      },
      {
        "code": "FL1",
        "name": "Tiếng Anh KHKT và Công nghệ"
      },
      {
        "code": "FL2",
        "name": "Tiếng Anh chuyên nghiệp quốc tế"
      },
      {
        "code": "FL3",
        "name": "Tiếng Trung KHKT và Công nghệ"
      },
      {
        "code": "FL4",
        "name": "Tiếng Hàn Khoa học và Công nghệ (mới)"
      },
      {
        "code": "HE1",
        "name": "Kỹ thuật Nhiệt"
      },
      {
        "code": "IT-E10",
        "name": "Khoa học dữ liệu và Trí tuệ nhân tạo (CT tiên tiến)"
      },
      {
        "code": "IT-E15",
        "name": "An toàn không gian số – Cyber Security (CT Tiên tiến)"
      },
      {
        "code": "IT-E6",
        "name": "Công nghệ thông tin (Việt – Nhật)"
      },
      {
        "code": "IT-E7",
        "name": "Công nghệ thông tin (Global ICT)"
      },
      {
        "code": "IT-EP",
        "name": "Công nghệ thông tin (Việt – Pháp)"
      },
      {
        "code": "IT1",
        "name": "CNTT: Khoa học Máy tính"
      },
      {
        "code": "IT2",
        "name": "CNTT: Kỹ thuật Máy tính"
      },
      {
        "code": "ME-E1",
        "name": "Kỹ thuật Cơ điện tử (CT tiên tiến)"
      },
      {
        "code": "ME-GU",
        "name": "Cơ khí – Chế tạo máy – hợp tác với ĐH Griffith (Úc)"
      },
      {
        "code": "ME-LUH",
        "name": "Cơ điện tử – hợp tác với ĐH Leibniz Hannover (Đức)"
      },
      {
        "code": "ME-NUT",
        "name": "Cơ điện tử – hợp tác với ĐH Công nghệ Nagaoka (Nhật Bản)"
      },
      {
        "code": "ME1",
        "name": "Kỹ thuật Cơ điện tử"
      },
      {
        "code": "ME2",
        "name": "Kỹ thuật Cơ khí"
      },
      {
        "code": "MI1",
        "name": "Toán – Tin"
      },
      {
        "code": "MI2",
        "name": "Hệ thống thông tin quản lý"
      },
      {
        "code": "MS-E3",
        "name": "Khoa học và kỹ thuật vật liệu (CT tiên tiến)"
      },
      {
        "code": "MS1",
        "name": "Kỹ thuật Vật liệu"
      },
      {
        "code": "MS2",
        "name": "Kỹ thuật Vi điện tử và Công nghệ nano"
      },
      {
        "code": "MS3",
        "name": "Công nghệ vật liệu Polyme và Compozit"
      },
      {
        "code": "MS5",
        "name": "Kỹ thuật in"
      },
      {
        "code": "PH1",
        "name": "Vật lý kỹ thuật"
      },
      {
        "code": "PH2",
        "name": "Kỹ thuật hạt nhân"
      },
      {
        "code": "PH3",
        "name": "Vật lý Y khoa"
      },
      {
        "code": "TE-E2",
        "name": "Kỹ thuật Ô tô (CT tiên tiến)"
      },
      {
        "code": "TE-EP",
        "name": "Cơ khí hàng không (Chương trình Việt – Pháp PFIEV)"
      },
      {
        "code": "TE1",
        "name": "Kỹ thuật Ô tô"
      },
      {
        "code": "TE2",
        "name": "Kỹ thuật Cơ khí động lực"
      },
      {
        "code": "TE3",
        "name": "Kỹ thuật Hàng không"
      },
      {
        "code": "TROY-BA",
        "name": "Quản trị kinh doanh – hợp tác với ĐH Troy (Hoa Kỳ)"
      },
      {
        "code": "TROY-IT",
        "name": "Khoa học máy tính – hợp tác với ĐH Troy (Hoa Kỳ)"
      },
      {
        "code": "TX1",
        "name": "Công nghệ Dệt – May"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách chương trình đào tạo đại học chính quy 2026 (xét theo điểm thi THPT). Nguồn: huongnghiep.hocmai.vn/de-an/dai-hoc-bach-khoa-ha-noi (65 chương trình); FL4 lấy thêm từ diemthi.tuyensinh247.com. Trường công bố 68 chương trình, còn thiếu 2 chương trình chưa xác định. Mã là mã chương trình do trường quy định.",
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
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=neu.edu.vn&sz=128",
    "website": "https://neu.edu.vn/",
    "admissionsUrl": "",
    "admissionsText": "https://daotao.neu.edu.vn/ hoặc https://xtkh.neu.edu.vn",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Ngôn ngữ Anh",
      "Kinh tế",
      "Kinh tế đầu tư",
      "Kinh tế phát triển",
      "Kinh tế quốc tế",
      "Thống kê kinh tế",
      "Toán kinh tế",
      "Quan hệ công chúng",
      "Quản trị kinh doanh",
      "Marketing",
      "Bất động sản",
      "Kinh doanh quốc tế",
      "Kinh doanh thương mại",
      "Thương mại điện tử",
      "Tài chính – Ngân hàng",
      "Bảo hiểm",
      "Kế toán",
      "Kiểm toán",
      "Khoa học quản lý",
      "Quản lý công",
      "Quản trị nhân lực",
      "Hệ thống thông tin quản lý",
      "Quản lý dự án",
      "Khoa học máy tính",
      "Công nghệ thông tin",
      "An toàn thông tin",
      "Hệ thống thông tin",
      "Luật",
      "Luật kinh tế",
      "Luật thương mại quốc tế",
      "Logistics và Quản lý chuỗi cung ứng",
      "Quản trị khách sạn",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Quản lý tài nguyên và môi trường",
      "Quản lý đất đai",
      "Kinh tế nông nghiệp",
      "Kinh doanh nông nghiệp",
      "Kinh tế tài nguyên thiên nhiên",
      "Quan hệ lao động"
    ],
    "majorItems": [
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310104",
        "name": "Kinh tế đầu tư"
      },
      {
        "code": "7310105",
        "name": "Kinh tế phát triển"
      },
      {
        "code": "7310106",
        "name": "Kinh tế quốc tế"
      },
      {
        "code": "7310107",
        "name": "Thống kê kinh tế"
      },
      {
        "code": "7310108",
        "name": "Toán kinh tế"
      },
      {
        "code": "7320108",
        "name": "Quan hệ công chúng"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340116",
        "name": "Bất động sản"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340121",
        "name": "Kinh doanh thương mại"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340204",
        "name": "Bảo hiểm"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7340401",
        "name": "Khoa học quản lý"
      },
      {
        "code": "7340403",
        "name": "Quản lý công"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7340405",
        "name": "Hệ thống thông tin quản lý"
      },
      {
        "code": "7340409",
        "name": "Quản lý dự án"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7480104",
        "name": "Hệ thống thông tin"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7380109",
        "name": "Luật thương mại quốc tế"
      },
      {
        "code": "7510605",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7850101",
        "name": "Quản lý tài nguyên và môi trường"
      },
      {
        "code": "7850103",
        "name": "Quản lý đất đai"
      },
      {
        "code": "7620115",
        "name": "Kinh tế nông nghiệp"
      },
      {
        "code": "7620114",
        "name": "Kinh doanh nông nghiệp"
      },
      {
        "code": "7850102",
        "name": "Kinh tế tài nguyên thiên nhiên"
      },
      {
        "code": "7340408",
        "name": "Quan hệ lao động"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/chương trình chính quy 2025-2026 (các mã chính). Nguồn tổng hợp từ daotao.neu.edu.vn, kenhtuyensinh.vn, thuvienphapluat.vn. Trường có ~88 mã CTĐT (gồm tiếng Anh, CLC, POHE, tiên tiến); liệt kê các mã ngành cốt lõi. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-003",
    "name": "Đại học Ngoại thương (FTU)",
    "shortName": "FTU",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=ftu.edu.vn&sz=128",
    "website": "https://ftu.edu.vn/",
    "admissionsUrl": "",
    "admissionsText": "https://tuyensinh.ftu.edu.vn/ hoặc https://thongtintuyensinh.ftu.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Luật (Luật thương mại quốc tế - TC)",
      "Luật Thương mại quốc tế",
      "Kinh tế (Kinh tế đối ngoại - TC/CLC/TT)",
      "Kinh tế quốc tế",
      "Kinh doanh quốc tế (TC/CLC/TT i-Hons)",
      "Quản trị kinh doanh (TC/CLC/TT)",
      "Tài chính – Ngân hàng (TC/CLC/TT)",
      "Kế toán – Kiểm toán (TC)",
      "Quản trị khách sạn",
      "Logistics và Quản lý chuỗi cung ứng",
      "Khoa học máy tính / Khoa học dữ liệu / AI (CT mới 2026)",
      "Marketing / Truyền thông Marketing",
      "Quản trị nguồn nhân lực",
      "Thương mại điện tử / Thương mại số"
    ],
    "majorItems": [
      {
        "code": "7380101",
        "name": "Luật (Luật thương mại quốc tế - TC)"
      },
      {
        "code": "7380109",
        "name": "Luật Thương mại quốc tế"
      },
      {
        "code": "7310101",
        "name": "Kinh tế (Kinh tế đối ngoại - TC/CLC/TT)"
      },
      {
        "code": "7310106",
        "name": "Kinh tế quốc tế"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế (TC/CLC/TT i-Hons)"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh (TC/CLC/TT)"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng (TC/CLC/TT)"
      },
      {
        "code": "7340301",
        "name": "Kế toán – Kiểm toán (TC)"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7510605",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính / Khoa học dữ liệu / AI (CT mới 2026)"
      },
      {
        "code": "7340115",
        "name": "Marketing / Truyền thông Marketing"
      },
      {
        "code": "7340404",
        "name": "Quản trị nguồn nhân lực"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử / Thương mại số"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/chương trình chính quy 2026 (Hà Nội + các CT chính). Nguồn: thongtintuyensinh.ftu.edu.vn, diemthi.tuyensinh247.com, các báo cáo điểm chuẩn 2026. Trường có nhiều CT (TC, CLC, TT, ĐHNNQT) thuộc các ngành trên. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-004",
    "name": "Đại học Thương mại (TMU)",
    "shortName": "TMU",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=tmu.edu.vn&sz=128",
    "website": "https://tmu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.tmu.edu.vn/",
    "admissionsText": "https://tuyensinh.tmu.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Quản trị kinh doanh (Quản trị kinh doanh)",
      "Quản trị kinh doanh (Quản trị kinh doanh - IPOP)",
      "Quản trị kinh doanh (Khởi nghiệp và phát triển kinh doanh)",
      "Quản trị khách sạn (Quản trị khách sạn)",
      "Quản trị khách sạn (Quản trị khách sạn - IPOP)",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Marketing (Marketing Thương mại)",
      "Marketing (Marketing thương mại - IPOP)",
      "Marketing (Marketing số)",
      "Marketing (Quản trị Thương hiệu)",
      "Marketing (Quản trị thương hiệu - IPOP)",
      "Kế toán (Kế toán doanh nghiệp)",
      "Kế toán (Kế toán tích hợp ICAEW CFAB - IPOP)",
      "Kế toán (Kế toán công)",
      "Kiểm toán (Kiểm toán)",
      "Logistics và Quản lý chuỗi cung ứng",
      "Logistics và Quản lý chuỗi cung ứng (Logistics và Xuất nhập khẩu - IPOP)",
      "Kinh doanh quốc tế (Thương mại quốc tế)",
      "Kinh doanh quốc tế (Thương mại quốc tế - IPOP)",
      "Kinh tế quốc tế",
      "Kinh tế (Quản lý kinh tế)",
      "Tài chính - Ngân hàng (Tài chính - Ngân hàng thương mại)",
      "Tài chính - Ngân hàng (Tài chính công)",
      "Thương mại điện tử (Quản trị thương mại điện tử)",
      "Thương mại điện tử (Kinh doanh số)",
      "Ngôn ngữ Anh (Tiếng Anh thương mại)",
      "Khoa học máy tính (Ứng dụng trí tuệ nhân tạo trong kinh doanh)"
    ],
    "majorItems": [
      {
        "code": "TM01",
        "name": "Quản trị kinh doanh (Quản trị kinh doanh)"
      },
      {
        "code": "TM02",
        "name": "Quản trị kinh doanh (Quản trị kinh doanh - IPOP)"
      },
      {
        "code": "TM03",
        "name": "Quản trị kinh doanh (Khởi nghiệp và phát triển kinh doanh)"
      },
      {
        "code": "TM04",
        "name": "Quản trị khách sạn (Quản trị khách sạn)"
      },
      {
        "code": "TM05",
        "name": "Quản trị khách sạn (Quản trị khách sạn - IPOP)"
      },
      {
        "code": "TM06",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "TM07",
        "name": "Marketing (Marketing Thương mại)"
      },
      {
        "code": "TM08",
        "name": "Marketing (Marketing thương mại - IPOP)"
      },
      {
        "code": "TM09",
        "name": "Marketing (Marketing số)"
      },
      {
        "code": "TM10",
        "name": "Marketing (Quản trị Thương hiệu)"
      },
      {
        "code": "TM11",
        "name": "Marketing (Quản trị thương hiệu - IPOP)"
      },
      {
        "code": "TM12",
        "name": "Kế toán (Kế toán doanh nghiệp)"
      },
      {
        "code": "TM13",
        "name": "Kế toán (Kế toán tích hợp ICAEW CFAB - IPOP)"
      },
      {
        "code": "TM14",
        "name": "Kế toán (Kế toán công)"
      },
      {
        "code": "TM15",
        "name": "Kiểm toán (Kiểm toán)"
      },
      {
        "code": "TM17",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      },
      {
        "code": "TM18",
        "name": "Logistics và Quản lý chuỗi cung ứng (Logistics và Xuất nhập khẩu - IPOP)"
      },
      {
        "code": "TM19",
        "name": "Kinh doanh quốc tế (Thương mại quốc tế)"
      },
      {
        "code": "TM20",
        "name": "Kinh doanh quốc tế (Thương mại quốc tế - IPOP)"
      },
      {
        "code": "TM21",
        "name": "Kinh tế quốc tế"
      },
      {
        "code": "TM22",
        "name": "Kinh tế (Quản lý kinh tế)"
      },
      {
        "code": "TM24",
        "name": "Tài chính - Ngân hàng (Tài chính - Ngân hàng thương mại)"
      },
      {
        "code": "TM26",
        "name": "Tài chính - Ngân hàng (Tài chính công)"
      },
      {
        "code": "TM28",
        "name": "Thương mại điện tử (Quản trị thương mại điện tử)"
      },
      {
        "code": "TM30",
        "name": "Thương mại điện tử (Kinh doanh số)"
      },
      {
        "code": "TM33",
        "name": "Ngôn ngữ Anh (Tiếng Anh thương mại)"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính (Ứng dụng trí tuệ nhân tạo trong kinh doanh)"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/chương trình chính quy 2026. Nguồn: tuyensinh.tmu.edu.vn (danh mục ngành 2026). Có các chương trình IPOP, chuẩn. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-005",
    "name": "Trường Đại học Luật Hà Nội (HLU)",
    "shortName": "HLU",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hlu.edu.vn&sz=128",
    "website": "https://hlu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hlu.edu.vn/",
    "admissionsText": "https://tuyensinh.hlu.edu.vn/",
    "category": "Luật",
    "focusRiasec": [
      "E",
      "C",
      "S"
    ],
    "majors": [
      "Luật",
      "Luật Kinh tế",
      "Luật Thương mại quốc tế",
      "Ngôn ngữ Anh",
      "Luật (Phân hiệu Đắk Lắk)"
    ],
    "majorItems": [
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7380107",
        "name": "Luật Kinh tế"
      },
      {
        "code": "7380109",
        "name": "Luật Thương mại quốc tế"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7380101PH",
        "name": "Luật (Phân hiệu Đắk Lắk)"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành đào tạo đại học chính quy 2025 (Khóa 50). Nguồn: Quyết định 1650/QĐ-ĐHLHN ngày 12/6/2025 và tuyensinh.hlu.edu.vn. Cập nhật 10/2026. Năm 2026 dự kiến tương tự.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-006",
    "name": "Trường Đại học Khoa học Tự nhiên - ĐHQG Hà Nội (VNU-HUS)",
    "shortName": "VNU-HUS",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hus.vnu.edu.vn&sz=128",
    "website": "https://hus.vnu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hus.vnu.edu.vn/",
    "admissionsText": "https://tuyensinh.hus.vnu.edu.vn/",
    "category": "Khoa học",
    "focusRiasec": [
      "I",
      "R",
      "A"
    ],
    "majors": [
      "Toán học",
      "Toán tin",
      "Vật lý học",
      "Khoa học vật liệu",
      "Công nghệ kỹ thuật hạt nhân",
      "Hóa học",
      "Công nghệ kỹ thuật hóa học",
      "Sinh học",
      "Công nghệ sinh học",
      "Địa lý tự nhiên",
      "Quản lý đất đai",
      "Khoa học môi trường",
      "Công nghệ kỹ thuật môi trường",
      "Khí tượng và khí hậu học",
      "Hải dương học",
      "Địa chất học",
      "Quản lý tài nguyên và môi trường",
      "Hóa dược",
      "Sinh dược học",
      "Môi trường, sức khỏe và an toàn",
      "Khoa học thông tin địa không gian",
      "Tài nguyên và môi trường nước",
      "Khoa học dữ liệu",
      "Kỹ thuật điện tử và tin học",
      "Quản lý phát triển đô thị và bất động sản",
      "Khoa học và công nghệ thực phẩm",
      "Khoa học máy tính và thông tin"
    ],
    "majorItems": [
      {
        "code": "QHT01",
        "name": "Toán học"
      },
      {
        "code": "QHT02",
        "name": "Toán tin"
      },
      {
        "code": "QHT03",
        "name": "Vật lý học"
      },
      {
        "code": "QHT04",
        "name": "Khoa học vật liệu"
      },
      {
        "code": "QHT05",
        "name": "Công nghệ kỹ thuật hạt nhân"
      },
      {
        "code": "QHT06",
        "name": "Hóa học"
      },
      {
        "code": "QHT07",
        "name": "Công nghệ kỹ thuật hóa học"
      },
      {
        "code": "QHT08",
        "name": "Sinh học"
      },
      {
        "code": "QHT09",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "QHT10",
        "name": "Địa lý tự nhiên"
      },
      {
        "code": "QHT12",
        "name": "Quản lý đất đai"
      },
      {
        "code": "QHT13",
        "name": "Khoa học môi trường"
      },
      {
        "code": "QHT15",
        "name": "Công nghệ kỹ thuật môi trường"
      },
      {
        "code": "QHT16",
        "name": "Khí tượng và khí hậu học"
      },
      {
        "code": "QHT17",
        "name": "Hải dương học"
      },
      {
        "code": "QHT18",
        "name": "Địa chất học"
      },
      {
        "code": "QHT20",
        "name": "Quản lý tài nguyên và môi trường"
      },
      {
        "code": "QHT43",
        "name": "Hóa dược"
      },
      {
        "code": "QHT81",
        "name": "Sinh dược học"
      },
      {
        "code": "QHT82",
        "name": "Môi trường, sức khỏe và an toàn"
      },
      {
        "code": "QHT91",
        "name": "Khoa học thông tin địa không gian"
      },
      {
        "code": "QHT92",
        "name": "Tài nguyên và môi trường nước"
      },
      {
        "code": "QHT93",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "QHT94",
        "name": "Kỹ thuật điện tử và tin học"
      },
      {
        "code": "QHT95",
        "name": "Quản lý phát triển đô thị và bất động sản"
      },
      {
        "code": "QHT96",
        "name": "Khoa học và công nghệ thực phẩm"
      },
      {
        "code": "QHT98",
        "name": "Khoa học máy tính và thông tin"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/CTĐT chính quy 2026. Nguồn: tuyensinh.hus.vnu.edu.vn (điểm chuẩn 2026) và các nguồn chính thức ĐHQGHN. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-007",
    "name": "Trường Đại học Công nghệ - ĐHQG Hà Nội (VNU-UET)",
    "shortName": "VNU-UET",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=uet.vnu.edu.vn&sz=128",
    "website": "https://uet.vnu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.uet.vnu.edu.vn/",
    "admissionsText": "https://tuyensinh.uet.vnu.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Công nghệ thông tin",
      "Kỹ thuật máy tính",
      "Vật lý kỹ thuật",
      "Cơ kỹ thuật",
      "Công nghệ kỹ thuật xây dựng",
      "Kỹ thuật cơ điện tử",
      "Kỹ thuật không gian / Công nghệ hàng không vũ trụ",
      "Khoa học máy tính",
      "Kỹ thuật điện tử – viễn thông",
      "Công nghệ nông nghiệp",
      "Kỹ thuật điều khiển và tự động hoá",
      "Trí tuệ nhân tạo",
      "Kỹ thuật năng lượng",
      "Hệ thống thông tin",
      "Mạng máy tính và truyền thông dữ liệu",
      "Kỹ thuật Robot",
      "Thiết kế công nghiệp và Đồ họa",
      "Kỹ thuật vật liệu / Công nghệ vật liệu",
      "Khoa học dữ liệu",
      "Công nghệ sinh học"
    ],
    "majorItems": [
      {
        "code": "CN1",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "CN2",
        "name": "Kỹ thuật máy tính"
      },
      {
        "code": "CN3",
        "name": "Vật lý kỹ thuật"
      },
      {
        "code": "CN4",
        "name": "Cơ kỹ thuật"
      },
      {
        "code": "CN5",
        "name": "Công nghệ kỹ thuật xây dựng"
      },
      {
        "code": "CN6",
        "name": "Kỹ thuật cơ điện tử"
      },
      {
        "code": "CN7",
        "name": "Kỹ thuật không gian / Công nghệ hàng không vũ trụ"
      },
      {
        "code": "CN8",
        "name": "Khoa học máy tính"
      },
      {
        "code": "CN9",
        "name": "Kỹ thuật điện tử – viễn thông"
      },
      {
        "code": "CN10",
        "name": "Công nghệ nông nghiệp"
      },
      {
        "code": "CN11",
        "name": "Kỹ thuật điều khiển và tự động hoá"
      },
      {
        "code": "CN12",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "CN13",
        "name": "Kỹ thuật năng lượng"
      },
      {
        "code": "CN14",
        "name": "Hệ thống thông tin"
      },
      {
        "code": "CN15",
        "name": "Mạng máy tính và truyền thông dữ liệu"
      },
      {
        "code": "CN17",
        "name": "Kỹ thuật Robot"
      },
      {
        "code": "CN18",
        "name": "Thiết kế công nghiệp và Đồ họa"
      },
      {
        "code": "CN19",
        "name": "Kỹ thuật vật liệu / Công nghệ vật liệu"
      },
      {
        "code": "CN20",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "CN21",
        "name": "Công nghệ sinh học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: uet.vnu.edu.vn (điểm chuẩn 2026 và danh mục ngành). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-008",
    "name": "Trường Đại học Kinh tế - ĐHQG Hà Nội (VNU-UEB)",
    "shortName": "VNU-UEB",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=ueb.vnu.edu.vn&sz=128",
    "website": "https://ueb.vnu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ueb.edu.vn/",
    "admissionsText": "https://tuyensinh.ueb.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Kinh tế",
      "Kinh tế phát triển",
      "Kinh tế quốc tế",
      "Quản trị kinh doanh",
      "Tài chính – Ngân hàng",
      "Kế toán",
      "Quản trị kinh doanh (ĐH Troy - Hoa Kỳ)",
      "Quản trị kinh doanh (ĐH St. Francis - Hoa Kỳ)"
    ],
    "majorItems": [
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310105",
        "name": "Kinh tế phát triển"
      },
      {
        "code": "7310106",
        "name": "Kinh tế quốc tế"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340101.68",
        "name": "Quản trị kinh doanh (ĐH Troy - Hoa Kỳ)"
      },
      {
        "code": "7340101.98",
        "name": "Quản trị kinh doanh (ĐH St. Francis - Hoa Kỳ)"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án tuyển sinh UEB 2026, diemthi.tuyensinh247.com. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-009",
    "name": "Trường Đại học Khoa học Xã hội và Nhân văn - ĐHQG Hà Nội (VNU-USSH)",
    "shortName": "VNU-USSH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=ussh.vnu.edu.vn&sz=128",
    "website": "https://ussh.vnu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ussh.edu.vn/",
    "admissionsText": "https://tuyensinh.ussh.edu.vn/",
    "category": "Xã hội - Nhân văn",
    "focusRiasec": [
      "S",
      "A",
      "I"
    ],
    "majors": [
      "Báo chí",
      "Chính trị học",
      "Công tác xã hội",
      "Điện ảnh và nghệ thuật đại chúng",
      "Đông Nam Á học",
      "Đông phương học",
      "Hán Nôm",
      "Hàn Quốc học",
      "Khoa học quản lý",
      "Lịch sử",
      "Lưu trữ học",
      "Ngôn ngữ học",
      "Nhân học",
      "Nhật Bản học",
      "Quan hệ công chúng",
      "Quản lý thông tin",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Quản trị khách sạn",
      "Quản trị văn phòng",
      "Quốc tế học",
      "Tâm lý học",
      "Thông tin - Thư viện",
      "Tôn giáo học",
      "Triết học",
      "Văn hóa học",
      "Văn học",
      "Việt Nam học",
      "Xã hội học"
    ],
    "majorItems": [
      {
        "code": "QHX01",
        "name": "Báo chí"
      },
      {
        "code": "QHX02",
        "name": "Chính trị học"
      },
      {
        "code": "QHX03",
        "name": "Công tác xã hội"
      },
      {
        "code": "QHX04",
        "name": "Điện ảnh và nghệ thuật đại chúng"
      },
      {
        "code": "QHX05",
        "name": "Đông Nam Á học"
      },
      {
        "code": "QHX06",
        "name": "Đông phương học"
      },
      {
        "code": "QHX07",
        "name": "Hán Nôm"
      },
      {
        "code": "QHX08",
        "name": "Hàn Quốc học"
      },
      {
        "code": "QHX09",
        "name": "Khoa học quản lý"
      },
      {
        "code": "QHX10",
        "name": "Lịch sử"
      },
      {
        "code": "QHX11",
        "name": "Lưu trữ học"
      },
      {
        "code": "QHX12",
        "name": "Ngôn ngữ học"
      },
      {
        "code": "QHX13",
        "name": "Nhân học"
      },
      {
        "code": "QHX14",
        "name": "Nhật Bản học"
      },
      {
        "code": "QHX15",
        "name": "Quan hệ công chúng"
      },
      {
        "code": "QHX16",
        "name": "Quản lý thông tin"
      },
      {
        "code": "QHX17",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "QHX18",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "QHX19",
        "name": "Quản trị văn phòng"
      },
      {
        "code": "QHX20",
        "name": "Quốc tế học"
      },
      {
        "code": "QHX21",
        "name": "Tâm lý học"
      },
      {
        "code": "QHX22",
        "name": "Thông tin - Thư viện"
      },
      {
        "code": "QHX23",
        "name": "Tôn giáo học"
      },
      {
        "code": "QHX24",
        "name": "Triết học"
      },
      {
        "code": "QHX25",
        "name": "Văn hóa học"
      },
      {
        "code": "QHX26",
        "name": "Văn học"
      },
      {
        "code": "QHX27",
        "name": "Việt Nam học"
      },
      {
        "code": "QHX28",
        "name": "Xã hội học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: điểm chuẩn 2026 và danh mục ngành USSH. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-010",
    "name": "Trường Đại học Ngoại ngữ - ĐHQG Hà Nội (VNU-ULIS)",
    "shortName": "VNU-ULIS",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=ulis.vnu.edu.vn&sz=128",
    "website": "https://ulis.vnu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ulis.vnu.edu.vn/",
    "admissionsText": "https://tuyensinh.ulis.vnu.edu.vn/",
    "category": "Ngoại ngữ",
    "focusRiasec": [
      "A",
      "S",
      "C"
    ],
    "majors": [
      "Sư phạm tiếng Anh",
      "Sư phạm tiếng Trung Quốc",
      "Sư phạm tiếng Đức",
      "Sư phạm tiếng Nhật",
      "Sư phạm tiếng Hàn Quốc",
      "Tiếng Việt và Văn hóa Việt Nam",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Nga",
      "Ngôn ngữ Pháp",
      "Ngôn ngữ Trung Quốc",
      "Ngôn ngữ Đức",
      "Ngôn ngữ Nhật",
      "Ngôn ngữ Hàn Quốc",
      "Ngôn ngữ Ả Rập",
      "Kinh tế",
      "Truyền thông quốc tế"
    ],
    "majorItems": [
      {
        "code": "7140231",
        "name": "Sư phạm tiếng Anh"
      },
      {
        "code": "7140234",
        "name": "Sư phạm tiếng Trung Quốc"
      },
      {
        "code": "7140235",
        "name": "Sư phạm tiếng Đức"
      },
      {
        "code": "7140236",
        "name": "Sư phạm tiếng Nhật"
      },
      {
        "code": "7140237",
        "name": "Sư phạm tiếng Hàn Quốc"
      },
      {
        "code": "7220101",
        "name": "Tiếng Việt và Văn hóa Việt Nam"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220202",
        "name": "Ngôn ngữ Nga"
      },
      {
        "code": "7220203",
        "name": "Ngôn ngữ Pháp"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7220205",
        "name": "Ngôn ngữ Đức"
      },
      {
        "code": "7220209",
        "name": "Ngôn ngữ Nhật"
      },
      {
        "code": "7220210",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "7220211",
        "name": "Ngôn ngữ Ả Rập"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7320107",
        "name": "Truyền thông quốc tế"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: đề án ULIS và các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-011",
    "name": "Trường Đại học Giáo dục - ĐHQG Hà Nội (VNU-UED)",
    "shortName": "VNU-UED",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=education.vnu.edu.vn&sz=128",
    "website": "https://education.vnu.edu.vn/",
    "admissionsUrl": "https://education.vnu.edu.vn/",
    "admissionsText": "https://education.vnu.edu.vn/",
    "category": "Sư phạm",
    "focusRiasec": [
      "S",
      "A",
      "C"
    ],
    "majors": [
      "Sư phạm Toán học",
      "Sư phạm Vật lí",
      "Sư phạm Hóa học",
      "Sư phạm Sinh học",
      "Sư phạm Khoa học Tự nhiên",
      "Sư phạm Ngữ văn",
      "Sư phạm Lịch sử",
      "Sư phạm Lịch sử - Địa lý",
      "Giáo dục Mầm non",
      "Giáo dục Tiểu học",
      "Khoa học giáo dục",
      "Quản trị chất lượng giáo dục",
      "Quản trị công nghệ giáo dục",
      "Quản trị trường học",
      "Tâm lý học",
      "Tham vấn học đường"
    ],
    "majorItems": [
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140211",
        "name": "Sư phạm Vật lí"
      },
      {
        "code": "7140212",
        "name": "Sư phạm Hóa học"
      },
      {
        "code": "7140213",
        "name": "Sư phạm Sinh học"
      },
      {
        "code": "7140247",
        "name": "Sư phạm Khoa học Tự nhiên"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140218",
        "name": "Sư phạm Lịch sử"
      },
      {
        "code": "7140249",
        "name": "Sư phạm Lịch sử - Địa lý"
      },
      {
        "code": "7140201",
        "name": "Giáo dục Mầm non"
      },
      {
        "code": "7140202",
        "name": "Giáo dục Tiểu học"
      },
      {
        "code": "7140102",
        "name": "Khoa học giáo dục"
      },
      {
        "code": "7140103",
        "name": "Quản trị chất lượng giáo dục"
      },
      {
        "code": "7140116",
        "name": "Quản trị công nghệ giáo dục"
      },
      {
        "code": "7140117",
        "name": "Quản trị trường học"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      },
      {
        "code": "7310402",
        "name": "Tham vấn học đường"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh UED/ĐHQGHN. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-012",
    "name": "Đại học Xây dựng Hà Nội (HUCE)",
    "shortName": "HUCE",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=huce.edu.vn&sz=128",
    "website": "https://huce.edu.vn/",
    "admissionsUrl": "https://tuyensinh.huce.edu.vn/",
    "admissionsText": "https://tuyensinh.huce.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Kiến trúc",
      "Kiến trúc / Kiến trúc công nghệ",
      "Kiến trúc cảnh quan",
      "Kiến trúc nội thất",
      "Quy hoạch vùng và đô thị",
      "Mỹ thuật đô thị",
      "Kỹ thuật xây dựng",
      "Kỹ thuật xây dựng / Xây dựng dân dụng và công nghiệp",
      "Kỹ thuật xây dựng / Hệ thống kỹ thuật trong công trình",
      "Kỹ thuật xây dựng / Tin học xây dựng",
      "Kỹ thuật xây dựng / Kỹ thuật công trình biển",
      "Kỹ thuật xây dựng công trình thủy",
      "Kỹ thuật xây dựng công trình Giao thông / Xây dựng Cầu đường",
      "Kỹ thuật xây dựng công trình giao thông / Đường sắt tốc độ cao và đường sắt đô thị",
      "Kỹ thuật Cấp thoát nước / Kỹ thuật nước - Môi trường nước",
      "Kinh tế xây dựng",
      "Quản lý xây dựng / Kinh tế và quản lý đô thị",
      "Quản lý xây dựng / Kinh tế và quản lý bất động sản",
      "Quản lý xây dựng / Quản lý hạ tầng, đất đai đô thị",
      "Quản lý xây dựng / Kiểm toán đầu tư xây dựng",
      "Công nghệ kỹ thuật xây dựng",
      "Công nghệ kỹ thuật vật liệu xây dựng",
      "Logistics và Quản lý chuỗi cung ứng",
      "Kỹ thuật cơ điện tử",
      "Kỹ thuật điện",
      "Kỹ thuật điều khiển và tự động hóa",
      "Kỹ thuật vật liệu",
      "Kỹ thuật Môi trường",
      "Quản lý dự án",
      "Nghệ thuật và thiết kế"
    ],
    "majorItems": [
      {
        "code": "XDA01",
        "name": "Kiến trúc"
      },
      {
        "code": "XDA02",
        "name": "Kiến trúc / Kiến trúc công nghệ"
      },
      {
        "code": "XDA03",
        "name": "Kiến trúc cảnh quan"
      },
      {
        "code": "XDA04",
        "name": "Kiến trúc nội thất"
      },
      {
        "code": "XDA05",
        "name": "Quy hoạch vùng và đô thị"
      },
      {
        "code": "XDA06",
        "name": "Mỹ thuật đô thị"
      },
      {
        "code": "XDA07",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "XDA08",
        "name": "Kỹ thuật xây dựng / Xây dựng dân dụng và công nghiệp"
      },
      {
        "code": "XDA09",
        "name": "Kỹ thuật xây dựng / Hệ thống kỹ thuật trong công trình"
      },
      {
        "code": "XDA10",
        "name": "Kỹ thuật xây dựng / Tin học xây dựng"
      },
      {
        "code": "XDA11",
        "name": "Kỹ thuật xây dựng / Kỹ thuật công trình biển"
      },
      {
        "code": "XDA12",
        "name": "Kỹ thuật xây dựng công trình thủy"
      },
      {
        "code": "XDA13",
        "name": "Kỹ thuật xây dựng công trình Giao thông / Xây dựng Cầu đường"
      },
      {
        "code": "XDA14",
        "name": "Kỹ thuật xây dựng công trình giao thông / Đường sắt tốc độ cao và đường sắt đô thị"
      },
      {
        "code": "XDA15",
        "name": "Kỹ thuật Cấp thoát nước / Kỹ thuật nước - Môi trường nước"
      },
      {
        "code": "XDA16",
        "name": "Kinh tế xây dựng"
      },
      {
        "code": "XDA17",
        "name": "Quản lý xây dựng / Kinh tế và quản lý đô thị"
      },
      {
        "code": "XDA18",
        "name": "Quản lý xây dựng / Kinh tế và quản lý bất động sản"
      },
      {
        "code": "XDA19",
        "name": "Quản lý xây dựng / Quản lý hạ tầng, đất đai đô thị"
      },
      {
        "code": "XDA20",
        "name": "Quản lý xây dựng / Kiểm toán đầu tư xây dựng"
      },
      {
        "code": "XDA21",
        "name": "Công nghệ kỹ thuật xây dựng"
      },
      {
        "code": "XDA22",
        "name": "Công nghệ kỹ thuật vật liệu xây dựng"
      },
      {
        "code": "XDA23",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      },
      {
        "code": "XDA35",
        "name": "Kỹ thuật cơ điện tử"
      },
      {
        "code": "XDA36",
        "name": "Kỹ thuật điện"
      },
      {
        "code": "XDA37",
        "name": "Kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "XDA38",
        "name": "Kỹ thuật vật liệu"
      },
      {
        "code": "XDA39",
        "name": "Kỹ thuật Môi trường"
      },
      {
        "code": "XDA40",
        "name": "Quản lý dự án"
      },
      {
        "code": "XDA41",
        "name": "Nghệ thuật và thiết kế"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/chuyên ngành chính quy 2026 (từ bảng điểm chuẩn). Nguồn: thông báo điểm chuẩn HUCE 2026. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-013",
    "name": "Trường Đại học Kiến trúc Hà Nội (HAU)",
    "shortName": "HAU",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hau.edu.vn&sz=128",
    "website": "https://hau.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hau.edu.vn/",
    "admissionsText": "https://tuyensinh.hau.edu.vn/",
    "category": "Nghệ thuật",
    "focusRiasec": [
      "A",
      "R",
      "C"
    ],
    "majors": [
      "Kiến trúc",
      "Kiến trúc (Chương trình tiên tiến)",
      "Kiến trúc cảnh quan",
      "Quy hoạch vùng và đô thị",
      "Quy hoạch vùng và đô thị (Thiết kế đô thị)",
      "Điêu khắc",
      "Mỹ thuật đô thị",
      "Kỹ thuật cơ sở hạ tầng (Hạ tầng đô thị)",
      "Kỹ thuật cơ sở hạ tầng (Môi trường đô thị)",
      "Kỹ thuật cơ sở hạ tầng (Công nghệ cơ điện công trình)",
      "Kỹ thuật cấp thoát nước",
      "Thiết kế đồ họa",
      "Nghệ thuật số",
      "Thiết kế thời trang",
      "Thiết kế nội thất",
      "Kỹ thuật xây dựng (Xây dựng dân dụng và công nghiệp)",
      "Kỹ thuật xây dựng (Xây dựng công trình ngầm đô thị)",
      "Kỹ thuật xây dựng (Quản lý dự án xây dựng)",
      "Công nghệ kỹ thuật vật liệu xây dựng",
      "Kinh tế xây dựng",
      "Quản lý xây dựng",
      "Quản lý xây dựng (Quản lý bất động sản)",
      "Quản lý xây dựng (Quản lý vận tải và Logistics)",
      "Công nghệ thông tin",
      "Công nghệ thông tin (Công nghệ đa phương tiện)",
      "Công nghệ game",
      "Kinh tế đầu tư",
      "Kinh tế phát triển"
    ],
    "majorItems": [
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7580101_1",
        "name": "Kiến trúc (Chương trình tiên tiến)"
      },
      {
        "code": "7580102",
        "name": "Kiến trúc cảnh quan"
      },
      {
        "code": "7580105",
        "name": "Quy hoạch vùng và đô thị"
      },
      {
        "code": "7580105_1",
        "name": "Quy hoạch vùng và đô thị (Thiết kế đô thị)"
      },
      {
        "code": "7210105",
        "name": "Điêu khắc"
      },
      {
        "code": "7210105_1",
        "name": "Mỹ thuật đô thị"
      },
      {
        "code": "7580210",
        "name": "Kỹ thuật cơ sở hạ tầng (Hạ tầng đô thị)"
      },
      {
        "code": "7580210_1",
        "name": "Kỹ thuật cơ sở hạ tầng (Môi trường đô thị)"
      },
      {
        "code": "7580210_2",
        "name": "Kỹ thuật cơ sở hạ tầng (Công nghệ cơ điện công trình)"
      },
      {
        "code": "7580213",
        "name": "Kỹ thuật cấp thoát nước"
      },
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      },
      {
        "code": "7210403_1",
        "name": "Nghệ thuật số"
      },
      {
        "code": "7210404",
        "name": "Thiết kế thời trang"
      },
      {
        "code": "7580108",
        "name": "Thiết kế nội thất"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng (Xây dựng dân dụng và công nghiệp)"
      },
      {
        "code": "7580201_1",
        "name": "Kỹ thuật xây dựng (Xây dựng công trình ngầm đô thị)"
      },
      {
        "code": "7580201_2",
        "name": "Kỹ thuật xây dựng (Quản lý dự án xây dựng)"
      },
      {
        "code": "7510105",
        "name": "Công nghệ kỹ thuật vật liệu xây dựng"
      },
      {
        "code": "7580301",
        "name": "Kinh tế xây dựng"
      },
      {
        "code": "7580302",
        "name": "Quản lý xây dựng"
      },
      {
        "code": "7580302_1",
        "name": "Quản lý xây dựng (Quản lý bất động sản)"
      },
      {
        "code": "7580302_2",
        "name": "Quản lý xây dựng (Quản lý vận tải và Logistics)"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480201_1",
        "name": "Công nghệ thông tin (Công nghệ đa phương tiện)"
      },
      {
        "code": "7480201_2",
        "name": "Công nghệ game"
      },
      {
        "code": "7310104",
        "name": "Kinh tế đầu tư"
      },
      {
        "code": "7310105",
        "name": "Kinh tế phát triển"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/chuyên ngành chính quy 2026. Nguồn: thông báo điểm chuẩn HAU 2026 và danh mục ngành. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-014",
    "name": "Trường Đại học Thủy lợi (TLU)",
    "shortName": "TLU",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=tlu.edu.vn&sz=128",
    "website": "https://tlu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.tlu.edu.vn/",
    "admissionsText": "https://tuyensinh.tlu.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Kỹ thuật xây dựng công trình thủy",
      "Kỹ thuật tài nguyên nước",
      "Tài nguyên nước và môi trường (Thủy văn học)",
      "Kỹ thuật xây dựng dân dụng và công nghiệp",
      "Kỹ thuật cơ khí",
      "Công nghệ thông tin",
      "Kỹ thuật cấp thoát nước",
      "Kỹ thuật môi trường",
      "Kỹ thuật cơ sở hạ tầng",
      "Công nghệ kỹ thuật xây dựng",
      "Kỹ thuật điện",
      "Kỹ thuật xây dựng công trình giao thông",
      "Quản lý xây dựng",
      "Hệ thống thông tin",
      "Kỹ thuật phần mềm",
      "Kỹ thuật hóa học",
      "Công nghệ sinh học",
      "Kỹ thuật cơ điện tử",
      "Kỹ thuật điều khiển và tự động hóa",
      "Kỹ thuật Ô tô",
      "Kỹ thuật điện tử - viễn thông",
      "Trí tuệ nhân tạo và khoa học dữ liệu",
      "An ninh mạng",
      "Kỹ thuật Robot và Điều khiển thông minh",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Luật",
      "Luật kinh tế",
      "Kinh tế",
      "Quản trị kinh doanh",
      "Kế toán",
      "Kinh tế xây dựng",
      "Thương mại điện tử",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Logistics và quản lý chuỗi cung ứng",
      "Tài chính – Ngân hàng",
      "Kiểm toán",
      "Kinh tế số"
    ],
    "majorItems": [
      {
        "code": "TLA101",
        "name": "Kỹ thuật xây dựng công trình thủy"
      },
      {
        "code": "TLA102",
        "name": "Kỹ thuật tài nguyên nước"
      },
      {
        "code": "TLA103",
        "name": "Tài nguyên nước và môi trường (Thủy văn học)"
      },
      {
        "code": "TLA104",
        "name": "Kỹ thuật xây dựng dân dụng và công nghiệp"
      },
      {
        "code": "TLA105",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "TLA106",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "TLA107",
        "name": "Kỹ thuật cấp thoát nước"
      },
      {
        "code": "TLA109",
        "name": "Kỹ thuật môi trường"
      },
      {
        "code": "TLA110",
        "name": "Kỹ thuật cơ sở hạ tầng"
      },
      {
        "code": "TLA111",
        "name": "Công nghệ kỹ thuật xây dựng"
      },
      {
        "code": "TLA112",
        "name": "Kỹ thuật điện"
      },
      {
        "code": "TLA113",
        "name": "Kỹ thuật xây dựng công trình giao thông"
      },
      {
        "code": "TLA114",
        "name": "Quản lý xây dựng"
      },
      {
        "code": "TLA116",
        "name": "Hệ thống thông tin"
      },
      {
        "code": "TLA117",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "TLA118",
        "name": "Kỹ thuật hóa học"
      },
      {
        "code": "TLA119",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "TLA120",
        "name": "Kỹ thuật cơ điện tử"
      },
      {
        "code": "TLA121",
        "name": "Kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "TLA123",
        "name": "Kỹ thuật Ô tô"
      },
      {
        "code": "TLA124",
        "name": "Kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "TLA126",
        "name": "Trí tuệ nhân tạo và khoa học dữ liệu"
      },
      {
        "code": "TLA127",
        "name": "An ninh mạng"
      },
      {
        "code": "TLA128",
        "name": "Kỹ thuật Robot và Điều khiển thông minh"
      },
      {
        "code": "TLA203",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "TLA204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "TLA301",
        "name": "Luật"
      },
      {
        "code": "TLA302",
        "name": "Luật kinh tế"
      },
      {
        "code": "TLA401",
        "name": "Kinh tế"
      },
      {
        "code": "TLA402",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "TLA403",
        "name": "Kế toán"
      },
      {
        "code": "TLA404",
        "name": "Kinh tế xây dựng"
      },
      {
        "code": "TLA405",
        "name": "Thương mại điện tử"
      },
      {
        "code": "TLA406",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "TLA407",
        "name": "Logistics và quản lý chuỗi cung ứng"
      },
      {
        "code": "TLA408",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "TLA409",
        "name": "Kiểm toán"
      },
      {
        "code": "TLA410",
        "name": "Kinh tế số"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án và danh mục ngành TLU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-015",
    "name": "Trường Đại học Mỏ - Địa chất (HUMG)",
    "shortName": "HUMG",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=humg.edu.vn&sz=128",
    "website": "https://humg.edu.vn/",
    "admissionsUrl": "https://tuyensinh.humg.edu.vn/",
    "admissionsText": "https://tuyensinh.humg.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Địa chất học",
      "Quản lý và phân tích dữ liệu khoa học trái đất",
      "Khoa học dữ liệu",
      "Công nghệ thông tin",
      "Địa tin học",
      "Công nghệ kỹ thuật hóa học",
      "Kỹ thuật cơ khí",
      "Kỹ thuật Robot",
      "Kỹ thuật cơ điện tử",
      "Kỹ thuật điện",
      "Kỹ thuật điều khiển và tự động hóa",
      "Kỹ thuật hóa học (CT tiên tiến)",
      "Kỹ thuật vật liệu",
      "Kỹ thuật môi trường",
      "Kỹ thuật địa chất",
      "Kỹ thuật địa vật lý",
      "Kỹ thuật trắc địa - bản đồ",
      "Đá quý, đá mỹ nghệ",
      "Kỹ thuật mỏ",
      "Kỹ thuật dầu khí",
      "Kỹ thuật khí thiên nhiên",
      "Công nghệ số trong thăm dò và khai thác tài nguyên",
      "Kỹ thuật tuyển khoáng",
      "Địa kỹ thuật xây dựng",
      "Kỹ thuật tài nguyên nước",
      "Quản lý phát triển đô thị và bất động sản",
      "Quản lý đất đai",
      "An toàn, vệ sinh lao động",
      "Du lịch địa chất",
      "Quản trị kinh doanh",
      "Tài chính - Ngân hàng",
      "Kế toán",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc"
    ],
    "majorItems": [
      {
        "code": "7440201",
        "name": "Địa chất học"
      },
      {
        "code": "7440229",
        "name": "Quản lý và phân tích dữ liệu khoa học trái đất"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480206",
        "name": "Địa tin học"
      },
      {
        "code": "7510401",
        "name": "Công nghệ kỹ thuật hóa học"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "7520107",
        "name": "Kỹ thuật Robot"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật cơ điện tử"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật điện"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7520301",
        "name": "Kỹ thuật hóa học (CT tiên tiến)"
      },
      {
        "code": "7520309",
        "name": "Kỹ thuật vật liệu"
      },
      {
        "code": "7520320",
        "name": "Kỹ thuật môi trường"
      },
      {
        "code": "7520501",
        "name": "Kỹ thuật địa chất"
      },
      {
        "code": "7520502",
        "name": "Kỹ thuật địa vật lý"
      },
      {
        "code": "7520503",
        "name": "Kỹ thuật trắc địa - bản đồ"
      },
      {
        "code": "7520505",
        "name": "Đá quý, đá mỹ nghệ"
      },
      {
        "code": "7520601",
        "name": "Kỹ thuật mỏ"
      },
      {
        "code": "7520604",
        "name": "Kỹ thuật dầu khí"
      },
      {
        "code": "7520605",
        "name": "Kỹ thuật khí thiên nhiên"
      },
      {
        "code": "7520606",
        "name": "Công nghệ số trong thăm dò và khai thác tài nguyên"
      },
      {
        "code": "7520607",
        "name": "Kỹ thuật tuyển khoáng"
      },
      {
        "code": "7580211",
        "name": "Địa kỹ thuật xây dựng"
      },
      {
        "code": "7580212",
        "name": "Kỹ thuật tài nguyên nước"
      },
      {
        "code": "7580109",
        "name": "Quản lý phát triển đô thị và bất động sản"
      },
      {
        "code": "7850103",
        "name": "Quản lý đất đai"
      },
      {
        "code": "7850202",
        "name": "An toàn, vệ sinh lao động"
      },
      {
        "code": "7810105",
        "name": "Du lịch địa chất"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: danh mục ngành HUMG. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-016",
    "name": "Đại học Điện lực (EPU)",
    "shortName": "EPU",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=epu.edu.vn&sz=128",
    "website": "https://epu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.epu.edu.vn/",
    "admissionsText": "https://tuyensinh.epu.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật điều khiển và tự động hoá",
      "Công nghệ kỹ thuật điện tử - viễn thông",
      "Công nghệ thông tin",
      "Trí tuệ nhân tạo",
      "Kỹ thuật máy tính",
      "Công nghệ kỹ thuật cơ điện tử",
      "Công nghệ kỹ thuật cơ khí",
      "Công nghệ kỹ thuật ô tô",
      "Kỹ thuật nhiệt",
      "Kỹ thuật Robot",
      "Quản trị kinh doanh",
      "Marketing",
      "Thương mại điện tử",
      "Tài chính - Ngân hàng",
      "Kế toán",
      "Kiểm toán",
      "Quản lý công nghiệp",
      "Logistics và Quản lý chuỗi cung ứng",
      "Quản trị dịch vụ Du lịch và Lữ hành",
      "Quản trị khách sạn",
      "Khoa học dữ liệu",
      "Ngôn ngữ Anh"
    ],
    "majorItems": [
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hoá"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7480106",
        "name": "Kỹ thuật máy tính"
      },
      {
        "code": "7510203",
        "name": "Công nghệ kỹ thuật cơ điện tử"
      },
      {
        "code": "7510201",
        "name": "Công nghệ kỹ thuật cơ khí"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7520115",
        "name": "Kỹ thuật nhiệt"
      },
      {
        "code": "7520107",
        "name": "Kỹ thuật Robot"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7510601",
        "name": "Quản lý công nghiệp"
      },
      {
        "code": "7510605",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ Du lịch và Lữ hành"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: các trang tuyển sinh EPU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-017",
    "name": "Trường Đại học Công nghiệp Hà Nội (HaUI)",
    "shortName": "HaUI",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=haui.edu.vn&sz=128",
    "website": "https://haui.edu.vn/",
    "admissionsUrl": "https://tuyensinh.haui.edu.vn/",
    "admissionsText": "https://tuyensinh.haui.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Thiết kế thời trang",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Ngôn ngữ Trung Quốc (LK2+2 với ĐHKHKT Quảng Tây)",
      "Ngôn ngữ Nhật",
      "Ngôn ngữ Hàn Quốc",
      "Ngôn ngữ học",
      "Kinh tế đầu tư",
      "Trung Quốc học",
      "Quản trị kinh doanh",
      "Phân tích dữ liệu kinh doanh",
      "Quản trị kinh doanh (CTĐT bằng Tiếng Anh)",
      "Marketing",
      "Tài chính – Ngân hàng",
      "Tài chính – Ngân hàng (CTĐT bằng Tiếng Anh)",
      "Kế toán",
      "Kế toán (CTĐT bằng tiếng Anh)",
      "Kiểm toán",
      "Quản trị nhân lực",
      "Quản trị văn phòng",
      "Công nghệ sinh học",
      "Khoa học máy tính",
      "Trí tuệ nhân tạo",
      "Khoa học máy tính (CTĐT bằng tiếng Anh)",
      "Mạng máy tính và truyền thông dữ liệu",
      "Kỹ thuật phần mềm",
      "Hệ thống thông tin",
      "Công nghệ kỹ thuật máy tính",
      "Vi mạch bán dẫn",
      "Công nghệ thông tin",
      "Công nghệ đa phương tiện",
      "Công nghệ thông tin (CTĐT bằng tiếng Anh)",
      "An toàn thông tin",
      "Công nghệ kỹ thuật cơ khí",
      "Công nghệ kỹ thuật khuôn mẫu",
      "Thiết kế cơ khí và kiểu dáng công nghiệp",
      "Công nghệ kỹ thuật cơ khí (CTĐT bằng tiếng Anh)",
      "Công nghệ kỹ thuật cơ điện tử",
      "Robot và trí tuệ nhân tạo",
      "Công nghệ kỹ thuật cơ điện tử ô tô",
      "Công nghệ kỹ thuật cơ điện tử (CTĐT bằng tiếng Anh)",
      "Công nghệ kỹ thuật ô tô",
      "Công nghệ kỹ thuật ô tô (CTĐT bằng tiếng Anh)",
      "Công nghệ kỹ thuật nhiệt",
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật điện, điện tử (CTĐT bằng tiếng Anh)",
      "Công nghệ kỹ thuật điện tử – viễn thông",
      "Công nghệ kỹ thuật điện tử y sinh",
      "Công nghệ kỹ thuật điện tử – viễn thông (CTĐT bằng tiếng Anh)",
      "Công nghệ kỹ thuật điều khiển và tự động hóa",
      "Kỹ thuật sản xuất thông minh",
      "Công nghệ kỹ thuật hóa học",
      "Công nghệ vật liệu",
      "Công nghệ kỹ thuật môi trường",
      "Logistics và quản lý chuỗi cung ứng",
      "Năng lượng tái tạo",
      "Kỹ thuật cơ khí động lực",
      "Kỹ thuật hệ thống công nghiệp",
      "Công nghệ thực phẩm",
      "Công nghệ vật liệu dệt, may",
      "Công nghệ dệt, may",
      "Hóa dược",
      "Du lịch",
      "Du lịch (CTĐT bằng tiếng Anh)",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Quản trị dịch vụ du lịch và lữ hành (CTĐT bằng tiếng Anh)",
      "Quản trị khách sạn",
      "Quản trị khách sạn (CTĐT bằng tiếng Anh)",
      "Quản trị nhà hàng và dịch vụ ăn uống",
      "Quản trị nhà hàng và dịch vụ ăn uống (CTĐT bằng tiếng Anh)"
    ],
    "majorItems": [
      {
        "code": "7210404",
        "name": "Thiết kế thời trang"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7220204LK",
        "name": "Ngôn ngữ Trung Quốc (LK2+2 với ĐHKHKT Quảng Tây)"
      },
      {
        "code": "7220209",
        "name": "Ngôn ngữ Nhật"
      },
      {
        "code": "7220210",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "7229020",
        "name": "Ngôn ngữ học"
      },
      {
        "code": "7310104",
        "name": "Kinh tế đầu tư"
      },
      {
        "code": "7310612",
        "name": "Trung Quốc học"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "73401012",
        "name": "Phân tích dữ liệu kinh doanh"
      },
      {
        "code": "7340101TA",
        "name": "Quản trị kinh doanh (CTĐT bằng Tiếng Anh)"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340201TA",
        "name": "Tài chính – Ngân hàng (CTĐT bằng Tiếng Anh)"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340301TA",
        "name": "Kế toán (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7340406",
        "name": "Quản trị văn phòng"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "74801012",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7480101TA",
        "name": "Khoa học máy tính (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7480102",
        "name": "Mạng máy tính và truyền thông dữ liệu"
      },
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480104",
        "name": "Hệ thống thông tin"
      },
      {
        "code": "7480108",
        "name": "Công nghệ kỹ thuật máy tính"
      },
      {
        "code": "74801081",
        "name": "Vi mạch bán dẫn"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "74802012",
        "name": "Công nghệ đa phương tiện"
      },
      {
        "code": "7480201TA",
        "name": "Công nghệ thông tin (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "74802021",
        "name": "An toàn thông tin"
      },
      {
        "code": "7510201",
        "name": "Công nghệ kỹ thuật cơ khí"
      },
      {
        "code": "75102012",
        "name": "Công nghệ kỹ thuật khuôn mẫu"
      },
      {
        "code": "75102013",
        "name": "Thiết kế cơ khí và kiểu dáng công nghiệp"
      },
      {
        "code": "7510201TA",
        "name": "Công nghệ kỹ thuật cơ khí (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7510203",
        "name": "Công nghệ kỹ thuật cơ điện tử"
      },
      {
        "code": "75102032",
        "name": "Robot và trí tuệ nhân tạo"
      },
      {
        "code": "75102033",
        "name": "Công nghệ kỹ thuật cơ điện tử ô tô"
      },
      {
        "code": "7510203TA",
        "name": "Công nghệ kỹ thuật cơ điện tử (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7510205TA",
        "name": "Công nghệ kỹ thuật ô tô (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7510206",
        "name": "Công nghệ kỹ thuật nhiệt"
      },
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510301TA",
        "name": "Công nghệ kỹ thuật điện, điện tử (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử – viễn thông"
      },
      {
        "code": "75103021",
        "name": "Công nghệ kỹ thuật điện tử y sinh"
      },
      {
        "code": "7510302TA",
        "name": "Công nghệ kỹ thuật điện tử – viễn thông (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "75103031",
        "name": "Kỹ thuật sản xuất thông minh"
      },
      {
        "code": "7510401",
        "name": "Công nghệ kỹ thuật hóa học"
      },
      {
        "code": "7510402",
        "name": "Công nghệ vật liệu"
      },
      {
        "code": "7510406",
        "name": "Công nghệ kỹ thuật môi trường"
      },
      {
        "code": "7510605",
        "name": "Logistics và quản lý chuỗi cung ứng"
      },
      {
        "code": "75190071",
        "name": "Năng lượng tái tạo"
      },
      {
        "code": "7520116",
        "name": "Kỹ thuật cơ khí động lực"
      },
      {
        "code": "7520118",
        "name": "Kỹ thuật hệ thống công nghiệp"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7540203",
        "name": "Công nghệ vật liệu dệt, may"
      },
      {
        "code": "7540204",
        "name": "Công nghệ dệt, may"
      },
      {
        "code": "7720203",
        "name": "Hóa dược"
      },
      {
        "code": "7810101",
        "name": "Du lịch"
      },
      {
        "code": "7810101TA",
        "name": "Du lịch (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7810103TA",
        "name": "Quản trị dịch vụ du lịch và lữ hành (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7810201TA",
        "name": "Quản trị khách sạn (CTĐT bằng tiếng Anh)"
      },
      {
        "code": "7810202",
        "name": "Quản trị nhà hàng và dịch vụ ăn uống"
      },
      {
        "code": "7810202TA",
        "name": "Quản trị nhà hàng và dịch vụ ăn uống (CTĐT bằng tiếng Anh)"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/chương trình đào tạo đại học chính quy 2026 (theo bảng xét tuyển kết hợp). Nguồn: huongnghiep.hocmai.vn/de-an/truong-dai-hoc-cong-nghiep-ha-noi. Trường công bố 71 ngành/chương trình, nguồn liệt kê 70 -> còn thiếu 1 chương trình chưa xác định.",
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
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=ptit.edu.vn&sz=128",
    "website": "https://ptit.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ptit.edu.vn/",
    "admissionsText": "https://tuyensinh.ptit.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Kỹ thuật Điện tử viễn thông",
      "Trí tuệ nhân tạo vạn vật (AIoT)",
      "Kỹ thuật Điều khiển và tự động hóa",
      "Công nghệ Kỹ thuật Điện, điện tử",
      "Công nghệ vi mạch bán dẫn",
      "Công nghệ thông tin",
      "Trí tuệ nhân tạo",
      "An toàn thông tin",
      "Khoa học máy tính / Khoa học dữ liệu",
      "Kỹ thuật dữ liệu",
      "Công nghệ Internet vạn vật (IoT)",
      "Quản trị kinh doanh",
      "Marketing",
      "Kế toán",
      "Tài chính - Ngân hàng / Công nghệ tài chính",
      "Truyền thông đa phương tiện",
      "Công nghệ đa phương tiện"
    ],
    "majorItems": [
      {
        "code": "7520207",
        "name": "Kỹ thuật Điện tử viễn thông"
      },
      {
        "code": "7520207AT",
        "name": "Trí tuệ nhân tạo vạn vật (AIoT)"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật Điều khiển và tự động hóa"
      },
      {
        "code": "7510301",
        "name": "Công nghệ Kỹ thuật Điện, điện tử"
      },
      {
        "code": "7510301VM",
        "name": "Công nghệ vi mạch bán dẫn"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính / Khoa học dữ liệu"
      },
      {
        "code": "7480102",
        "name": "Kỹ thuật dữ liệu"
      },
      {
        "code": "7520208",
        "name": "Công nghệ Internet vạn vật (IoT)"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng / Công nghệ tài chính"
      },
      {
        "code": "7320104",
        "name": "Truyền thông đa phương tiện"
      },
      {
        "code": "7329001",
        "name": "Công nghệ đa phương tiện"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/chương trình chính quy 2026 (cơ sở Hà Nội). Nguồn: ptit.edu.vn và các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-019",
    "name": "Học viện Kỹ thuật Mật mã (KMA)",
    "shortName": "KMA",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=actvn.edu.vn&sz=128",
    "website": "https://actvn.edu.vn/",
    "admissionsUrl": "https://tuyensinh.actvn.edu.vn/",
    "admissionsText": "https://tuyensinh.actvn.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Công nghệ thông tin",
      "An toàn thông tin",
      "Kỹ thuật Điện tử – Viễn thông"
    ],
    "majorItems": [
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật Điện tử – Viễn thông"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026 (3 ngành chính). Nguồn: actvn.edu.vn và các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-020",
    "name": "Học viện Tài chính (AOF)",
    "shortName": "AOF",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hvtc.edu.vn&sz=128",
    "website": "https://hvtc.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hvtc.edu.vn/",
    "admissionsText": "https://tuyensinh.hvtc.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Ngôn ngữ Anh (Tiếng Anh tài chính kế toán)",
      "Kinh tế và quản lý nguồn lực tài chính",
      "Kinh tế chính trị - tài chính",
      "Kinh tế đầu tư",
      "Toán tài chính",
      "Quản trị doanh nghiệp / Quản trị kinh doanh",
      "Marketing",
      "Thẩm định giá và kinh doanh bất động sản",
      "Kinh doanh quốc tế",
      "Tài chính - Ngân hàng (các chuyên ngành)",
      "Tài chính bảo hiểm",
      "Kế toán (doanh nghiệp, công)",
      "Kiểm toán"
    ],
    "majorItems": [
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh (Tiếng Anh tài chính kế toán)"
      },
      {
        "code": "7310101",
        "name": "Kinh tế và quản lý nguồn lực tài chính"
      },
      {
        "code": "7310102",
        "name": "Kinh tế chính trị - tài chính"
      },
      {
        "code": "7310104",
        "name": "Kinh tế đầu tư"
      },
      {
        "code": "7310108",
        "name": "Toán tài chính"
      },
      {
        "code": "7340101",
        "name": "Quản trị doanh nghiệp / Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340116",
        "name": "Thẩm định giá và kinh doanh bất động sản"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng (các chuyên ngành)"
      },
      {
        "code": "7340204",
        "name": "Tài chính bảo hiểm"
      },
      {
        "code": "7340301",
        "name": "Kế toán (doanh nghiệp, công)"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: các trang tuyển sinh HV Tài chính. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-021",
    "name": "Học viện Ngân hàng (BA)",
    "shortName": "BA",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hvnh.edu.vn&sz=128",
    "website": "https://hvnh.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hvnh.edu.vn/",
    "admissionsText": "https://tuyensinh.hvnh.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Kế toán (Chất lượng cao)",
      "Kế toán",
      "Kế toán (Liên kết ĐH Sunderland)",
      "Kiểm toán",
      "Kiểm toán (Chất lượng cao)",
      "Kế toán (Định hướng Nhật Bản)",
      "Ngân hàng (Chất lượng cao)",
      "Ngân hàng",
      "Ngân hàng số",
      "Tài chính-Ngân hàng (Liên kết Sunderland)",
      "Ngân hàng và Tài chính quốc tế (CLC)",
      "Ngân hàng trung ương và chính sách công (CLC)",
      "Quản trị kinh doanh (CLC)",
      "Quản trị kinh doanh",
      "Quản trị du lịch",
      "Marketing",
      "Tài chính",
      "Công nghệ tài chính",
      "Ngôn ngữ Anh Tài chính - Ngân hàng",
      "Kinh tế đầu tư",
      "Khoa học dữ liệu trong kinh tế và kinh doanh"
    ],
    "majorItems": [
      {
        "code": "ACT01",
        "name": "Kế toán (Chất lượng cao)"
      },
      {
        "code": "ACT02",
        "name": "Kế toán"
      },
      {
        "code": "ACT03",
        "name": "Kế toán (Liên kết ĐH Sunderland)"
      },
      {
        "code": "ACT04",
        "name": "Kiểm toán"
      },
      {
        "code": "ACT05",
        "name": "Kiểm toán (Chất lượng cao)"
      },
      {
        "code": "ACT06",
        "name": "Kế toán (Định hướng Nhật Bản)"
      },
      {
        "code": "BANK01",
        "name": "Ngân hàng (Chất lượng cao)"
      },
      {
        "code": "BANK02",
        "name": "Ngân hàng"
      },
      {
        "code": "BANK03",
        "name": "Ngân hàng số"
      },
      {
        "code": "BANK04",
        "name": "Tài chính-Ngân hàng (Liên kết Sunderland)"
      },
      {
        "code": "BANK06",
        "name": "Ngân hàng và Tài chính quốc tế (CLC)"
      },
      {
        "code": "BANK07",
        "name": "Ngân hàng trung ương và chính sách công (CLC)"
      },
      {
        "code": "BUS01",
        "name": "Quản trị kinh doanh (CLC)"
      },
      {
        "code": "BUS02",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "BUS03",
        "name": "Quản trị du lịch"
      },
      {
        "code": "BUS07",
        "name": "Marketing"
      },
      {
        "code": "FIN02",
        "name": "Tài chính"
      },
      {
        "code": "FIN03",
        "name": "Công nghệ tài chính"
      },
      {
        "code": "FL01",
        "name": "Ngôn ngữ Anh Tài chính - Ngân hàng"
      },
      {
        "code": "ECON01",
        "name": "Kinh tế đầu tư"
      },
      {
        "code": "DS01",
        "name": "Khoa học dữ liệu trong kinh tế và kinh doanh"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/chương trình chính quy 2026. Nguồn: các trang tuyển sinh HV Ngân hàng. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-022",
    "name": "Học viện Ngoại giao (DAV)",
    "shortName": "DAV",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=dav.edu.vn&sz=128",
    "website": "https://dav.edu.vn/",
    "admissionsUrl": "https://tuyensinh.dav.edu.vn/",
    "admissionsText": "https://tuyensinh.dav.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Quan hệ quốc tế",
      "Ngôn ngữ Anh",
      "Kinh tế quốc tế",
      "Luật quốc tế",
      "Truyền thông quốc tế",
      "Kinh doanh quốc tế",
      "Luật thương mại quốc tế",
      "Hàn Quốc học",
      "Hoa Kỳ học",
      "Nhật Bản học",
      "Trung Quốc học"
    ],
    "majorItems": [
      {
        "code": "HQT01",
        "name": "Quan hệ quốc tế"
      },
      {
        "code": "HQT02",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "HQT03",
        "name": "Kinh tế quốc tế"
      },
      {
        "code": "HQT04",
        "name": "Luật quốc tế"
      },
      {
        "code": "HQT05",
        "name": "Truyền thông quốc tế"
      },
      {
        "code": "HQT06",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "HQT07",
        "name": "Luật thương mại quốc tế"
      },
      {
        "code": "HQT08",
        "name": "Hàn Quốc học"
      },
      {
        "code": "HQT09",
        "name": "Hoa Kỳ học"
      },
      {
        "code": "HQT10",
        "name": "Nhật Bản học"
      },
      {
        "code": "HQT11",
        "name": "Trung Quốc học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: điểm chuẩn và danh mục DAV. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-023",
    "name": "Đại học Y Hà Nội (HMU)",
    "shortName": "HMU",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hmu.edu.vn&sz=128",
    "website": "https://hmu.edu.vn/",
    "admissionsUrl": "https://hmu.edu.vn/",
    "admissionsText": "https://hmu.edu.vn/ (mục Tuyển sinh)",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Y khoa",
      "Y khoa (Phân hiệu Thanh Hóa)",
      "Răng-Hàm-Mặt",
      "Y học cổ truyền",
      "Y học dự phòng",
      "Điều dưỡng (Chương trình tiên tiến)",
      "Điều dưỡng (Phân hiệu Thanh Hóa)",
      "Hộ sinh",
      "Kỹ thuật phục hình răng",
      "Kỹ thuật xét nghiệm y học",
      "Kỹ thuật hình ảnh y học",
      "Kỹ thuật phục hồi chức năng",
      "Khúc xạ nhãn khoa",
      "Dinh dưỡng",
      "Y tế công cộng",
      "Tâm lý học",
      "Công tác xã hội"
    ],
    "majorItems": [
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7720101YHT",
        "name": "Y khoa (Phân hiệu Thanh Hóa)"
      },
      {
        "code": "7720501",
        "name": "Răng-Hàm-Mặt"
      },
      {
        "code": "7720115",
        "name": "Y học cổ truyền"
      },
      {
        "code": "7720110",
        "name": "Y học dự phòng"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng (Chương trình tiên tiến)"
      },
      {
        "code": "7720301YHT",
        "name": "Điều dưỡng (Phân hiệu Thanh Hóa)"
      },
      {
        "code": "7720302",
        "name": "Hộ sinh"
      },
      {
        "code": "7720502",
        "name": "Kỹ thuật phục hình răng"
      },
      {
        "code": "7720601",
        "name": "Kỹ thuật xét nghiệm y học"
      },
      {
        "code": "7720602",
        "name": "Kỹ thuật hình ảnh y học"
      },
      {
        "code": "7720603",
        "name": "Kỹ thuật phục hồi chức năng"
      },
      {
        "code": "7720609",
        "name": "Khúc xạ nhãn khoa"
      },
      {
        "code": "7720401",
        "name": "Dinh dưỡng"
      },
      {
        "code": "7720701",
        "name": "Y tế công cộng"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      },
      {
        "code": "7760101",
        "name": "Công tác xã hội"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án và điểm chuẩn HMU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-024",
    "name": "Đại học Dược Hà Nội (HUP)",
    "shortName": "HUP",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hup.edu.vn&sz=128",
    "website": "https://hup.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hup.edu.vn/",
    "admissionsText": "https://tuyensinh.hup.edu.vn/",
    "category": "Y Dược",
    "focusRiasec": [
      "I",
      "S",
      "R"
    ],
    "majors": [
      "Dược học",
      "Hóa dược",
      "Hóa học",
      "Công nghệ sinh học"
    ],
    "majorItems": [
      {
        "code": "7720201",
        "name": "Dược học"
      },
      {
        "code": "7720203",
        "name": "Hóa dược"
      },
      {
        "code": "7440112",
        "name": "Hóa học"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: đề án HUP. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-025",
    "name": "Đại học Y tế Công cộng (HUPH)",
    "shortName": "HUPH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=huph.edu.vn&sz=128",
    "website": "https://huph.edu.vn/",
    "admissionsUrl": "https://tuyensinh.huph.edu.vn/",
    "admissionsText": "https://tuyensinh.huph.edu.vn/",
    "category": "Y Dược",
    "focusRiasec": [
      "I",
      "S",
      "R"
    ],
    "majors": [
      "Khoa học dữ liệu",
      "Dinh dưỡng",
      "Kỹ thuật xét nghiệm y học",
      "Kỹ thuật phục hồi chức năng",
      "Y tế công cộng",
      "Công tác xã hội"
    ],
    "majorItems": [
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7720401",
        "name": "Dinh dưỡng"
      },
      {
        "code": "7720601",
        "name": "Kỹ thuật xét nghiệm y học"
      },
      {
        "code": "7720603",
        "name": "Kỹ thuật phục hồi chức năng"
      },
      {
        "code": "7720701",
        "name": "Y tế công cộng"
      },
      {
        "code": "7760101",
        "name": "Công tác xã hội"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh HUPH. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-026",
    "name": "Trường Đại học Văn hóa Hà Nội (HUC)",
    "shortName": "HUC",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=huc.edu.vn&sz=128",
    "website": "https://huc.edu.vn/",
    "admissionsUrl": "https://tuyensinh.huc.edu.vn/",
    "admissionsText": "https://tuyensinh.huc.edu.vn/",
    "category": "Xã hội - Nhân văn",
    "focusRiasec": [
      "S",
      "A",
      "I"
    ],
    "majors": [
      "Sáng tác văn học",
      "Ngôn ngữ Anh",
      "Nghiên cứu văn hóa",
      "Văn hóa truyền thông",
      "Văn hóa đối ngoại",
      "Phát triển công nghiệp văn hóa",
      "Quản lý di sản văn hóa",
      "Tổ chức hoạt động nghệ thuật",
      "Tổ chức sự kiện văn hóa",
      "Báo chí",
      "Quản trị thư viện",
      "Thư viện và thiết bị trường học",
      "Quản lý thông tin",
      "Bảo tàng học",
      "Kinh doanh xuất bản phẩm",
      "Luật",
      "Văn hóa du lịch",
      "Lữ hành, hướng dẫn du lịch",
      "Hướng dẫn du lịch quốc tế",
      "Quản trị kinh doanh du lịch",
      "Quản trị du lịch cộng đồng"
    ],
    "majorItems": [
      {
        "code": "7220110",
        "name": "Sáng tác văn học"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7229040A",
        "name": "Nghiên cứu văn hóa"
      },
      {
        "code": "7229040B",
        "name": "Văn hóa truyền thông"
      },
      {
        "code": "7229040C",
        "name": "Văn hóa đối ngoại"
      },
      {
        "code": "7229042A",
        "name": "Phát triển công nghiệp văn hóa"
      },
      {
        "code": "7229042B",
        "name": "Quản lý di sản văn hóa"
      },
      {
        "code": "7229042C",
        "name": "Tổ chức hoạt động nghệ thuật"
      },
      {
        "code": "7229042D",
        "name": "Tổ chức sự kiện văn hóa"
      },
      {
        "code": "7320101",
        "name": "Báo chí"
      },
      {
        "code": "7320201A",
        "name": "Quản trị thư viện"
      },
      {
        "code": "7320201B",
        "name": "Thư viện và thiết bị trường học"
      },
      {
        "code": "7320205",
        "name": "Quản lý thông tin"
      },
      {
        "code": "7320305",
        "name": "Bảo tàng học"
      },
      {
        "code": "7320402",
        "name": "Kinh doanh xuất bản phẩm"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7810101A",
        "name": "Văn hóa du lịch"
      },
      {
        "code": "7810101B",
        "name": "Lữ hành, hướng dẫn du lịch"
      },
      {
        "code": "7810101C",
        "name": "Hướng dẫn du lịch quốc tế"
      },
      {
        "code": "7810103A",
        "name": "Quản trị kinh doanh du lịch"
      },
      {
        "code": "7810103B",
        "name": "Quản trị du lịch cộng đồng"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành/chuyên ngành chính quy 2026. Nguồn: các trang tuyển sinh HUC. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-027",
    "name": "Trường Đại học Mở Hà Nội (HOU)",
    "shortName": "HOU",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hou.edu.vn&sz=128",
    "website": "https://hou.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hou.edu.vn/",
    "admissionsText": "https://tuyensinh.hou.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Thiết kế đồ họa",
      "Thiết kế thời trang",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Quản trị kinh doanh",
      "Thương mại điện tử",
      "Tài chính - Ngân hàng",
      "Bảo hiểm",
      "Kế toán",
      "Luật",
      "Luật kinh tế",
      "Luật quốc tế",
      "Công nghệ sinh học",
      "Kỹ thuật máy tính",
      "Công nghệ thông tin",
      "Công nghệ kỹ thuật điện tử - viễn thông",
      "Công nghệ kỹ thuật điều khiển và tự động hóa",
      "Công nghệ thực phẩm",
      "Kiến trúc",
      "Thiết kế nội thất",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Quản trị khách sạn"
    ],
    "majorItems": [
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      },
      {
        "code": "7210404",
        "name": "Thiết kế thời trang"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340204",
        "name": "Bảo hiểm"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7380108",
        "name": "Luật quốc tế"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7480106",
        "name": "Kỹ thuật máy tính"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7580108",
        "name": "Thiết kế nội thất"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh HOU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-028",
    "name": "Trường Đại học Lao động - Xã hội (ULSA)",
    "shortName": "ULSA",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=ulsa.edu.vn&sz=128",
    "website": "https://ulsa.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ulsa.edu.vn/",
    "admissionsText": "https://tuyensinh.ulsa.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Ngôn ngữ Anh",
      "Kinh tế",
      "Tâm lý học",
      "Quản trị kinh doanh",
      "Tài chính - Ngân hàng",
      "Bảo hiểm",
      "Bảo hiểm - Tài chính",
      "Kế toán",
      "Kiểm toán",
      "Quản trị nhân lực",
      "Hệ thống thông tin quản lý",
      "Luật kinh tế",
      "Công nghệ thông tin",
      "Công tác xã hội",
      "Quản trị dịch vụ du lịch và Lữ hành"
    ],
    "majorItems": [
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340204",
        "name": "Bảo hiểm"
      },
      {
        "code": "7340207",
        "name": "Bảo hiểm - Tài chính"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7340405",
        "name": "Hệ thống thông tin quản lý"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7760101",
        "name": "Công tác xã hội"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và Lữ hành"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: các trang tuyển sinh ULSA. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-029",
    "name": "Trường Đại học Giao thông Vận tải (UTC)",
    "shortName": "UTC",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=utc.edu.vn&sz=128",
    "website": "https://utc.edu.vn/",
    "admissionsUrl": "https://tuyensinh.utc.edu.vn/",
    "admissionsText": "https://tuyensinh.utc.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Ngôn ngữ Anh",
      "Toán ứng dụng",
      "Kinh tế",
      "Quản trị kinh doanh",
      "Tài chính - Ngân hàng",
      "Kế toán",
      "Logistics và Quản lý chuỗi cung ứng",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Khai thác vận tải",
      "Kinh tế vận tải",
      "Kinh tế xây dựng",
      "Quản lý xây dựng",
      "Khoa học máy tính",
      "Công nghệ thông tin",
      "Trí tuệ nhân tạo",
      "Kỹ thuật máy tính",
      "An toàn thông tin",
      "Kỹ thuật cơ khí",
      "Kỹ thuật cơ điện tử",
      "Kỹ thuật nhiệt",
      "Kỹ thuật cơ khí động lực",
      "Kỹ thuật ô tô",
      "Kỹ thuật điện",
      "Kỹ thuật điện tử - viễn thông",
      "Kỹ thuật điều khiển và tự động hóa",
      "Kỹ thuật robot",
      "Kỹ thuật môi trường",
      "Kiến trúc",
      "Kỹ thuật xây dựng",
      "Kỹ thuật xây dựng công trình giao thông",
      "Kỹ thuật cơ sở hạ tầng"
    ],
    "majorItems": [
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7460112",
        "name": "Toán ứng dụng"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7510605",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7840101",
        "name": "Khai thác vận tải"
      },
      {
        "code": "7840104",
        "name": "Kinh tế vận tải"
      },
      {
        "code": "7580301",
        "name": "Kinh tế xây dựng"
      },
      {
        "code": "7580302",
        "name": "Quản lý xây dựng"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7480106",
        "name": "Kỹ thuật máy tính"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật cơ điện tử"
      },
      {
        "code": "7520115",
        "name": "Kỹ thuật nhiệt"
      },
      {
        "code": "7520116",
        "name": "Kỹ thuật cơ khí động lực"
      },
      {
        "code": "7520130",
        "name": "Kỹ thuật ô tô"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật điện"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7520107",
        "name": "Kỹ thuật robot"
      },
      {
        "code": "7520320",
        "name": "Kỹ thuật môi trường"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7580205",
        "name": "Kỹ thuật xây dựng công trình giao thông"
      },
      {
        "code": "7580210",
        "name": "Kỹ thuật cơ sở hạ tầng"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh UTC. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-030",
    "name": "Trường Đại học Khoa học và Công nghệ Hà Nội (USTH)",
    "shortName": "USTH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=usth.edu.vn&sz=128",
    "website": "https://usth.edu.vn/",
    "admissionsUrl": "https://tuyensinh.usth.edu.vn/",
    "admissionsText": "https://tuyensinh.usth.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Công nghệ sinh học – Phát triển thuốc",
      "Hóa học",
      "Khoa học vật liệu tiên tiến và Công nghệ Nano",
      "Khoa học Môi trường Ứng dụng",
      "Khoa học dữ liệu",
      "Toán ứng dụng",
      "Công nghệ thông tin – Truyền thông",
      "An toàn thông tin",
      "Công nghệ Kỹ thuật Cơ điện tử",
      "Kỹ thuật Hàng không",
      "Khoa học Vũ trụ và Công nghệ Vệ tinh",
      "Kỹ thuật ô tô",
      "Kỹ thuật điện và Năng lượng tái tạo",
      "Công nghệ vi mạch bán dẫn",
      "Khoa học và Công nghệ thực phẩm",
      "Khoa học và Công nghệ y khoa",
      "Dược học"
    ],
    "majorItems": [
      {
        "code": "7420201",
        "name": "Công nghệ sinh học – Phát triển thuốc"
      },
      {
        "code": "7440112",
        "name": "Hóa học"
      },
      {
        "code": "7440122",
        "name": "Khoa học vật liệu tiên tiến và Công nghệ Nano"
      },
      {
        "code": "7440301",
        "name": "Khoa học Môi trường Ứng dụng"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7460112",
        "name": "Toán ứng dụng"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin – Truyền thông"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7510203",
        "name": "Công nghệ Kỹ thuật Cơ điện tử"
      },
      {
        "code": "7520120",
        "name": "Kỹ thuật Hàng không"
      },
      {
        "code": "7520121",
        "name": "Khoa học Vũ trụ và Công nghệ Vệ tinh"
      },
      {
        "code": "7520130",
        "name": "Kỹ thuật ô tô"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật điện và Năng lượng tái tạo"
      },
      {
        "code": "7520401",
        "name": "Công nghệ vi mạch bán dẫn"
      },
      {
        "code": "7540101",
        "name": "Khoa học và Công nghệ thực phẩm"
      },
      {
        "code": "7720601",
        "name": "Khoa học và Công nghệ y khoa"
      },
      {
        "code": "7720201",
        "name": "Dược học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: tuyensinh.usth.edu.vn. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-031",
    "name": "Trường Đại học Phenikaa",
    "shortName": "Phenikaa",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=phenikaa-uni.edu.vn&sz=128",
    "website": "https://phenikaa-uni.edu.vn/",
    "admissionsUrl": "https://tuyensinh.phenikaa-uni.edu.vn/",
    "admissionsText": "https://tuyensinh.phenikaa-uni.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Công nghệ sinh học",
      "Khoa học y sinh",
      "Kỹ thuật hóa học",
      "Răng - Hàm - Mặt",
      "Kỹ thuật điều khiển và tự động hóa",
      "Kỹ thuật điều khiển và tự động hóa (Robot và AI)",
      "Kỹ thuật y sinh (Điện tử y sinh)",
      "Quản trị kinh doanh",
      "Kế toán",
      "Tài chính – ngân hàng",
      "Quản trị nhân lực",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Hàn Quốc",
      "Ngôn ngữ Trung Quốc",
      "Ngôn ngữ Nhật",
      "Du lịch"
    ],
    "majorItems": [
      {
        "code": "BIO1",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "BMS",
        "name": "Khoa học y sinh"
      },
      {
        "code": "CHE1",
        "name": "Kỹ thuật hóa học"
      },
      {
        "code": "DEN1",
        "name": "Răng - Hàm - Mặt"
      },
      {
        "code": "EEE1",
        "name": "Kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "EEE-AI",
        "name": "Kỹ thuật điều khiển và tự động hóa (Robot và AI)"
      },
      {
        "code": "EEE2",
        "name": "Kỹ thuật y sinh (Điện tử y sinh)"
      },
      {
        "code": "FBE1",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "FBE2",
        "name": "Kế toán"
      },
      {
        "code": "FBE3",
        "name": "Tài chính – ngân hàng"
      },
      {
        "code": "FBE4",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "FLE1",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "FLK1",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "FLC1",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "FLJ1",
        "name": "Ngôn ngữ Nhật"
      },
      {
        "code": "FTS1",
        "name": "Du lịch"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách một số ngành chính quy tiêu biểu 2025-2026 (trường có nhiều chương trình). Nguồn: các trang tuyển sinh Phenikaa. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-032",
    "name": "Trường Đại học Thăng Long",
    "shortName": "TL",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=thanglong.edu.vn&sz=128",
    "website": "https://thanglong.edu.vn/",
    "admissionsUrl": "https://tuyensinh.thanglong.edu.vn/",
    "admissionsText": "https://tuyensinh.thanglong.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Thanh nhạc",
      "Thiết kế đồ họa",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Ngôn ngữ Nhật",
      "Ngôn ngữ Hàn Quốc",
      "Kinh tế quốc tế",
      "Việt Nam học",
      "Truyền thông đa phương tiện",
      "Quản trị kinh doanh",
      "Marketing",
      "Thương mại điện tử",
      "Tài chính – Ngân hàng",
      "Kế toán",
      "Luật kinh tế",
      "Khoa học máy tính",
      "Công nghệ thông tin",
      "Trí tuệ nhân tạo",
      "Logistics và quản lý chuỗi cung ứng",
      "Điều dưỡng",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Quản trị khách sạn"
    ],
    "majorItems": [
      {
        "code": "7210205",
        "name": "Thanh nhạc"
      },
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7220209",
        "name": "Ngôn ngữ Nhật"
      },
      {
        "code": "7220210",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "7310106",
        "name": "Kinh tế quốc tế"
      },
      {
        "code": "7310630",
        "name": "Việt Nam học"
      },
      {
        "code": "7320104",
        "name": "Truyền thông đa phương tiện"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480207",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7510605",
        "name": "Logistics và quản lý chuỗi cung ứng"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án và các trang tuyển sinh Thăng Long. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-033",
    "name": "Trường Đại học CMC",
    "shortName": "CMC",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=cmc-u.edu.vn&sz=128",
    "website": "https://cmc-u.edu.vn/",
    "admissionsUrl": "https://tuyensinh.cmc-u.edu.vn/",
    "admissionsText": "https://tuyensinh.cmc-u.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Trí tuệ nhân tạo",
      "Quản trị Kinh doanh",
      "Ngôn ngữ Trung Quốc",
      "Khoa học Máy tính",
      "Thương mại điện tử",
      "Công nghệ kỹ thuật Điện tử – Viễn thông",
      "Đồ họa game",
      "Thiết kế Đồ họa",
      "Công nghệ Thông tin",
      "Tiếng Nhật thương mại",
      "Ngôn ngữ Hàn Quốc",
      "Logistics & Quản lý chuỗi cung ứng",
      "Digital Marketing",
      "Kỹ thuật phần mềm"
    ],
    "majorItems": [
      {
        "code": "AI",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "BA",
        "name": "Quản trị Kinh doanh"
      },
      {
        "code": "CL",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "CS",
        "name": "Khoa học Máy tính"
      },
      {
        "code": "EC",
        "name": "Thương mại điện tử"
      },
      {
        "code": "ET",
        "name": "Công nghệ kỹ thuật Điện tử – Viễn thông"
      },
      {
        "code": "GA",
        "name": "Đồ họa game"
      },
      {
        "code": "GD",
        "name": "Thiết kế Đồ họa"
      },
      {
        "code": "IT",
        "name": "Công nghệ Thông tin"
      },
      {
        "code": "JL",
        "name": "Tiếng Nhật thương mại"
      },
      {
        "code": "KL",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "LS",
        "name": "Logistics & Quản lý chuỗi cung ứng"
      },
      {
        "code": "MK",
        "name": "Digital Marketing"
      },
      {
        "code": "SE",
        "name": "Kỹ thuật phần mềm"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: các trang tuyển sinh CMC. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-034",
    "name": "Trường Đại học Đại Nam",
    "shortName": "DNU",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=dainam.edu.vn&sz=128",
    "website": "https://dainam.edu.vn/",
    "admissionsUrl": "https://tuyensinh.dainam.edu.vn/",
    "admissionsText": "https://tuyensinh.dainam.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Y khoa",
      "Dược học",
      "Điều dưỡng",
      "Công nghệ thông tin",
      "Khoa học máy tính",
      "Hệ thống thông tin",
      "Công nghệ kỹ thuật ô tô",
      "Công nghệ kỹ thuật điện - điện tử",
      "Công nghệ kỹ thuật cơ điện tử",
      "Kiến trúc",
      "Kỹ thuật xây dựng",
      "Kinh tế xây dựng",
      "Quản trị kinh doanh",
      "Quản trị nhân lực",
      "Marketing",
      "Kinh doanh quốc tế",
      "Thương mại điện tử",
      "Kinh tế",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Ngôn ngữ Nhật",
      "Ngôn ngữ Hàn Quốc",
      "Truyền thông đa phương tiện",
      "Quan hệ công chúng",
      "Tâm lý học",
      "Luật"
    ],
    "majorItems": [
      {
        "code": "Y khoa",
        "name": "Y khoa"
      },
      {
        "code": "Dược học",
        "name": "Dược học"
      },
      {
        "code": "Điều dưỡng",
        "name": "Điều dưỡng"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480104",
        "name": "Hệ thống thông tin"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện - điện tử"
      },
      {
        "code": "7510203",
        "name": "Công nghệ kỹ thuật cơ điện tử"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7580301",
        "name": "Kinh tế xây dựng"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7220209",
        "name": "Ngôn ngữ Nhật"
      },
      {
        "code": "7220210",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "7320104",
        "name": "Truyền thông đa phương tiện"
      },
      {
        "code": "7320108",
        "name": "Quan hệ công chúng"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      },
      {
        "code": "7380101",
        "name": "Luật"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: dainam.edu.vn. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-035",
    "name": "Trường Đại học Kinh doanh và Công nghệ Hà Nội (HUBT)",
    "shortName": "HUBT",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hubt.edu.vn&sz=128",
    "website": "https://hubt.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hubt.edu.vn/",
    "admissionsText": "https://tuyensinh.hubt.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Thiết kế đồ họa",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Nga",
      "Ngôn ngữ Trung Quốc",
      "Kinh tế",
      "Quản lý nhà nước",
      "Quản trị kinh doanh",
      "Kinh doanh quốc tế",
      "Tài chính – Ngân hàng",
      "Kế toán",
      "Luật kinh tế",
      "Công nghệ thông tin",
      "Công nghệ kỹ thuật Cơ – điện tử",
      "Công nghệ kỹ thuật ô tô",
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật môi trường",
      "Kiến trúc",
      "Quản lý đô thị và công trình",
      "Thiết kế nội thất",
      "Kỹ thuật xây dựng",
      "Y khoa",
      "Dược học",
      "Điều dưỡng",
      "Răng – Hàm – Mặt",
      "Quản trị dịch vụ du lịch và lữ hành"
    ],
    "majorItems": [
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220202",
        "name": "Ngôn ngữ Nga"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310205",
        "name": "Quản lý nhà nước"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510203",
        "name": "Công nghệ kỹ thuật Cơ – điện tử"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510406",
        "name": "Công nghệ kỹ thuật môi trường"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7580106",
        "name": "Quản lý đô thị và công trình"
      },
      {
        "code": "7580108",
        "name": "Thiết kế nội thất"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7720201",
        "name": "Dược học"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7720501",
        "name": "Răng – Hàm – Mặt"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: các trang tuyển sinh HUBT. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-036",
    "name": "Trường Đại học Công nghiệp Việt - Hung",
    "shortName": "CVH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=viu.edu.vn&sz=128",
    "website": "https://viu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.viu.edu.vn/",
    "admissionsText": "https://tuyensinh.viu.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Kinh tế",
      "Kinh tế số",
      "Quản trị kinh doanh",
      "Marketing",
      "Tài chính – Ngân hàng",
      "Công nghệ tài chính",
      "Khoa học máy tính",
      "Công nghệ thông tin",
      "Công nghệ kỹ thuật xây dựng",
      "Công nghệ kỹ thuật cơ khí",
      "Công nghệ kỹ thuật ô tô",
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật điện tử viễn thông"
    ],
    "majorItems": [
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310109",
        "name": "Kinh tế số"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510103",
        "name": "Công nghệ kỹ thuật xây dựng"
      },
      {
        "code": "7510201",
        "name": "Công nghệ kỹ thuật cơ khí"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử viễn thông"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025. Nguồn: các trang tuyển sinh VIU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-101",
    "name": "Học viện Kỹ thuật Quân sự (MTA)",
    "shortName": "MTA",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=mta.edu.vn&sz=128",
    "website": "https://mta.edu.vn/",
    "admissionsUrl": "https://mta.edu.vn/",
    "admissionsText": "https://mta.edu.vn/ (mục Tuyển sinh)",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Kỹ sư quân sự (hệ Quân sự)",
      "Công nghệ thông tin (hệ Dân sự)",
      "Khoa học máy tính / Trí tuệ nhân tạo (hệ Dân sự)",
      "An toàn thông tin (hệ Dân sự)",
      "Kỹ thuật điện tử – viễn thông (hệ Dân sự)",
      "Kỹ thuật điều khiển và tự động hóa (hệ Dân sự)",
      "Kỹ thuật cơ điện tử (hệ Dân sự)",
      "Kỹ thuật cơ khí (hệ Dân sự)",
      "Kỹ thuật xây dựng (hệ Dân sự)",
      "Kỹ thuật cơ khí động lực / ô tô (hệ Dân sự)"
    ],
    "majorItems": [
      {
        "code": "7860220",
        "name": "Kỹ sư quân sự (hệ Quân sự)"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin (hệ Dân sự)"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính / Trí tuệ nhân tạo (hệ Dân sự)"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin (hệ Dân sự)"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật điện tử – viễn thông (hệ Dân sự)"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật điều khiển và tự động hóa (hệ Dân sự)"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật cơ điện tử (hệ Dân sự)"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí (hệ Dân sự)"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng (hệ Dân sự)"
      },
      {
        "code": "7520116",
        "name": "Kỹ thuật cơ khí động lực / ô tô (hệ Dân sự)"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026 (hệ Quân sự + Dân sự). Nguồn: các trang tuyển sinh MTA. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-102",
    "name": "Học viện Quân y",
    "shortName": "YQH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hvqy.edu.vn&sz=128",
    "website": "https://hvqy.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hvqy.edu.vn/",
    "admissionsText": "https://tuyensinh.hvqy.edu.vn/",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Y khoa (hệ Quân sự + Dân sự)",
      "Dược học (hệ Quân sự + Dân sự)"
    ],
    "majorItems": [
      {
        "code": "7720101",
        "name": "Y khoa (hệ Quân sự + Dân sự)"
      },
      {
        "code": "7720201",
        "name": "Dược học (hệ Quân sự + Dân sự)"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: thông báo tuyển sinh HV Quân y. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-103",
    "name": "Học viện Khoa học Quân sự",
    "shortName": "KQ",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hocvienkhoahocquan.su.edu.vn&sz=128",
    "website": "https://hocvienkhoahocquan.su.edu.vn/ hoặc trang Bộ Quốc phòng",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Trinh sát Kỹ thuật",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Nga",
      "Ngôn ngữ Trung Quốc",
      "Quan hệ quốc tế"
    ],
    "majorItems": [
      {
        "code": "7860231",
        "name": "Trinh sát Kỹ thuật"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220202",
        "name": "Ngôn ngữ Nga"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7310206",
        "name": "Quan hệ quốc tế"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy hệ Quân sự 2025-2026. Nguồn: thông báo tuyển sinh HV KHQS. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-104",
    "name": "Học viện Biên phòng",
    "shortName": "BPH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hocvienbienphong.edu.vn&sz=128",
    "website": "https://hocvienbienphong.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Biên phòng",
      "Luật"
    ],
    "majorItems": [
      {
        "code": "7860214",
        "name": "Biên phòng"
      },
      {
        "code": "7380101",
        "name": "Luật"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh HV Biên phòng. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-105",
    "name": "Học viện Hậu cần",
    "shortName": "HEH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hocvienhaucan.edu.vn&sz=128",
    "website": "https://hocvienhaucan.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Hậu cần quân sự (hệ Quân sự)",
      "Tài chính - Ngân hàng (hệ Dân sự)",
      "Kế toán (hệ Dân sự)",
      "Kỹ thuật xây dựng (hệ Dân sự)"
    ],
    "majorItems": [
      {
        "code": "7860218",
        "name": "Hậu cần quân sự (hệ Quân sự)"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng (hệ Dân sự)"
      },
      {
        "code": "7340301",
        "name": "Kế toán (hệ Dân sự)"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng (hệ Dân sự)"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026 (hệ Quân sự + Dân sự). Nguồn: đề án tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-106",
    "name": "Học viện Phòng không - Không quân",
    "shortName": "PK",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hocvienpkkq.edu.vn&sz=128",
    "website": "https://hocvienpkkq.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy Tham mưu Phòng không, Không quân và Tác chiến điện tử",
      "Kỹ thuật Hàng không"
    ],
    "majorItems": [
      {
        "code": "7860226",
        "name": "Chỉ huy Tham mưu Phòng không, Không quân và Tác chiến điện tử"
      },
      {
        "code": "7520120",
        "name": "Kỹ thuật Hàng không"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh HV PK-KQ. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-109",
    "name": "Trường Sĩ quan Lục quân 1",
    "shortName": "SL",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=truongsq1.edu.vn&sz=128",
    "website": "https://truongsq1.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy Tham mưu Lục quân",
      "Quân sự cơ sở"
    ],
    "majorItems": [
      {
        "code": "7860201",
        "name": "Chỉ huy Tham mưu Lục quân"
      },
      {
        "code": "7860222",
        "name": "Quân sự cơ sở"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án tuyển sinh SQ Lục quân 1. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-111",
    "name": "Trường Sĩ quan Đặc công",
    "shortName": "SĐ",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=truongdaccong.edu.vn&sz=128",
    "website": "https://truongdaccong.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy - Tham mưu đặc công"
    ],
    "majorItems": [
      {
        "code": "7860207",
        "name": "Chỉ huy - Tham mưu đặc công"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-112",
    "name": "Trường Sĩ quan Phòng hóa",
    "shortName": "SP",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=truongphonghoa.edu.vn&sz=128",
    "website": "https://truongphonghoa.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy Kỹ thuật Hóa học"
    ],
    "majorItems": [
      {
        "code": "7860229",
        "name": "Chỉ huy Kỹ thuật Hóa học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-113",
    "name": "Trường Sĩ quan Pháo binh",
    "shortName": "SP",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=truongphaobinh.edu.vn&sz=128",
    "website": "https://truongphaobinh.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy Tham mưu Pháo binh"
    ],
    "majorItems": [
      {
        "code": "7860205",
        "name": "Chỉ huy Tham mưu Pháo binh"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-119",
    "name": "Học viện An ninh nhân dân",
    "shortName": "ANH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hvanninh.edu.vn&sz=128",
    "website": "https://hvanninh.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hvanninh.edu.vn/",
    "admissionsText": "https://tuyensinh.hvanninh.edu.vn/",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Nghiệp vụ an ninh",
      "An ninh mạng và phòng chống tội phạm công nghệ cao",
      "Công nghệ thông tin",
      "An toàn thông tin"
    ],
    "majorItems": [
      {
        "code": "7860100",
        "name": "Nghiệp vụ an ninh"
      },
      {
        "code": "7860114",
        "name": "An ninh mạng và phòng chống tội phạm công nghệ cao"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh HV An ninh ND. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-120",
    "name": "Học viện Cảnh sát nhân dân",
    "shortName": "CSH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hvcsnd.edu.vn&sz=128",
    "website": "https://hvcsnd.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hvcsnd.edu.vn/",
    "admissionsText": "https://tuyensinh.hvcsnd.edu.vn/",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Nghiệp vụ Cảnh sát"
    ],
    "majorItems": [
      {
        "code": "7860100",
        "name": "Nghiệp vụ Cảnh sát"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh HV Cảnh sát ND. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-121",
    "name": "Học viện Chính trị Công an nhân dân",
    "shortName": "CC",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hocvienchinhtricand.edu.vn&sz=128",
    "website": "https://hocvienchinhtricand.edu.vn/",
    "admissionsUrl": "https://bocongan.gov.vn/bai-viet/thong-tin-tuyen-sinh-cac-hoc-vien-truong-cong-an-nhan-dan-nam-2026-1773897621",
    "admissionsText": "https://bocongan.gov.vn/bai-viet/thong-tin-tuyen-sinh-cac-hoc-vien-truong-cong-an-nhan-dan-nam-2026-1773897621",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Xây dựng Đảng và chính quyền nhà nước"
    ],
    "majorItems": [
      {
        "code": "7310202",
        "name": "Xây dựng Đảng và chính quyền nhà nước"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh HV Chính trị CAND. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-122",
    "name": "Học viện Kỹ thuật và Công nghệ An ninh",
    "shortName": "KCA",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=hocvienkythuatanninh.edu.vn&sz=128",
    "website": "https://hocvienkythuatanninh.edu.vn/",
    "admissionsUrl": "https://bocongan.gov.vn/bai-viet/thong-tin-tuyen-sinh-cac-hoc-vien-truong-cong-an-nhan-dan-nam-2026-1773897621",
    "admissionsText": "https://bocongan.gov.vn/bai-viet/thong-tin-tuyen-sinh-cac-hoc-vien-truong-cong-an-nhan-dan-nam-2026-1773897621",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Nhóm ngành Kỹ thuật - Hậu cần",
      "Kỹ thuật điện tử, viễn thông"
    ],
    "majorItems": [
      {
        "code": "7480200",
        "name": "Nhóm ngành Kỹ thuật - Hậu cần"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật điện tử, viễn thông"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-125",
    "name": "Trường Đại học Phòng cháy chữa cháy",
    "shortName": "PCH",
    "location": "Hà Nội",
    "region": "Miền Bắc",
    "provinceNew": "Hà Nội",
    "provinceOld": "Hà Nội",
    "logo": "https://www.google.com/s2/favicons?domain=daihocpccc.edu.vn&sz=128",
    "website": "https://daihocpccc.edu.vn/",
    "admissionsUrl": "https://tuyensinh.daihocpccc.edu.vn/",
    "admissionsText": "https://tuyensinh.daihocpccc.edu.vn/",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Phòng cháy, chữa cháy và cứu nạn, cứu hộ"
    ],
    "majorItems": [
      {
        "code": "7860113",
        "name": "Phòng cháy, chữa cháy và cứu nạn, cứu hộ"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông báo tuyển sinh ĐH PCCC. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-037",
    "name": "Trường Đại học Kinh tế và Quản trị Kinh doanh - ĐH Thái Nguyên (TUEBA)",
    "shortName": "TUEBA",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Thái Nguyên",
    "provinceOld": "Thái Nguyên",
    "logo": "https://www.google.com/s2/favicons?domain=tueba.edu.vn&sz=128",
    "website": "https://tueba.edu.vn/",
    "admissionsUrl": "https://tuyensinh.tueba.edu.vn/",
    "admissionsText": "https://tuyensinh.tueba.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Khoa học dữ liệu",
      "Logistics và Quản lý chuỗi cung ứng",
      "Tài chính - Ngân hàng",
      "Kế toán",
      "Quản lý kinh tế",
      "Quản trị nhân lực",
      "Luật kinh tế",
      "Kinh tế",
      "Kinh tế đầu tư",
      "Kinh tế phát triển",
      "Quản trị kinh doanh",
      "Quản trị marketing",
      "Kinh doanh quốc tế",
      "Thương mại điện tử",
      "Quản trị dịch vụ du lịch và lữ hành"
    ],
    "majorItems": [
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7510605",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340403",
        "name": "Quản lý kinh tế"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310104",
        "name": "Kinh tế đầu tư"
      },
      {
        "code": "7310105",
        "name": "Kinh tế phát triển"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Quản trị marketing"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh TUEBA. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-038",
    "name": "Trường Đại học Công nghệ Thông tin và Truyền thông - ĐH Thái Nguyên (ICTU)",
    "shortName": "ICTU",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Thái Nguyên",
    "provinceOld": "Thái Nguyên",
    "logo": "https://www.google.com/s2/favicons?domain=ictu.edu.vn&sz=128",
    "website": "https://ictu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ictu.edu.vn/",
    "admissionsText": "https://tuyensinh.ictu.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Công nghệ thông tin",
      "Kỹ thuật phần mềm",
      "Kỹ thuật máy tính",
      "An ninh mạng",
      "Khoa học máy tính",
      "Cơ điện tử",
      "Công nghệ ô tô",
      "Kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật điện tử - viễn thông",
      "Tự động hóa",
      "Quản trị kinh doanh số",
      "Marketing số",
      "Thương mại điện tử",
      "Quản lý logistics và chuỗi cung ứng",
      "Ngôn ngữ Anh",
      "Thiết kế đồ họa",
      "Truyền thông đa phương tiện"
    ],
    "majorItems": [
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480106",
        "name": "Kỹ thuật máy tính"
      },
      {
        "code": "7480202",
        "name": "An ninh mạng"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7510203",
        "name": "Cơ điện tử"
      },
      {
        "code": "7510205",
        "name": "Công nghệ ô tô"
      },
      {
        "code": "7510301",
        "name": "Kỹ thuật điện, điện tử"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7520216",
        "name": "Tự động hóa"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh số"
      },
      {
        "code": "7340115",
        "name": "Marketing số"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7510605",
        "name": "Quản lý logistics và chuỗi cung ứng"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      },
      {
        "code": "7320104",
        "name": "Truyền thông đa phương tiện"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: tuyensinh.ictu.edu.vn. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-039",
    "name": "Trường Đại học Kỹ thuật Công nghiệp - ĐH Thái Nguyên (TNUT)",
    "shortName": "TNUT",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Thái Nguyên",
    "provinceOld": "Thái Nguyên",
    "logo": "https://www.google.com/s2/favicons?domain=tnut.edu.vn&sz=128",
    "website": "https://tnut.edu.vn/",
    "admissionsUrl": "https://tuyensinh.tnut.edu.vn/",
    "admissionsText": "https://tuyensinh.tnut.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Kỹ thuật Cơ khí",
      "Kỹ thuật Cơ điện tử",
      "Kỹ thuật Robot",
      "Kỹ thuật Điều khiển và tự động hoá",
      "Kỹ thuật Điện",
      "Kỹ thuật Điện tử - viễn thông",
      "Kỹ thuật ô tô",
      "Kỹ thuật Vật liệu",
      "Kỹ thuật xây dựng",
      "Kỹ thuật môi trường",
      "Công nghệ kỹ thuật điều khiển và tự động hóa",
      "Công nghệ kỹ thuật ô tô",
      "Quản lý công nghiệp",
      "Kinh tế công nghiệp",
      "Ngôn ngữ Anh"
    ],
    "majorItems": [
      {
        "code": "7520103",
        "name": "Kỹ thuật Cơ khí"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật Cơ điện tử"
      },
      {
        "code": "7520107",
        "name": "Kỹ thuật Robot"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật Điều khiển và tự động hoá"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật Điện"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật Điện tử - viễn thông"
      },
      {
        "code": "7520116",
        "name": "Kỹ thuật ô tô"
      },
      {
        "code": "7520309",
        "name": "Kỹ thuật Vật liệu"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7520320",
        "name": "Kỹ thuật môi trường"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7510601",
        "name": "Quản lý công nghiệp"
      },
      {
        "code": "7510604",
        "name": "Kinh tế công nghiệp"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh TNUT. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-040",
    "name": "Trường Đại học Nông Lâm - ĐH Thái Nguyên (TUAF)",
    "shortName": "TUAF",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Thái Nguyên",
    "provinceOld": "Thái Nguyên",
    "logo": "https://www.google.com/s2/favicons?domain=tuaf.edu.vn&sz=128",
    "website": "https://tuaf.edu.vn/",
    "admissionsUrl": "https://tuyensinh.tuaf.edu.vn/",
    "admissionsText": "https://tuyensinh.tuaf.edu.vn/",
    "category": "Nông Lâm",
    "focusRiasec": [
      "R",
      "I",
      "S"
    ],
    "majors": [
      "Chăn nuôi thú Y",
      "Công nghệ sinh học",
      "Công nghệ thực phẩm",
      "Đảm bảo chất lượng & An toàn thực phẩm",
      "Dược liệu và hợp chất thiên nhiên",
      "Khoa học môi trường",
      "Khoa học cây trồng",
      "Kinh tế nông nghiệp",
      "Lâm sinh",
      "Ngôn ngữ Anh",
      "Nông nghiệp công nghệ cao",
      "Quản lý đất đai",
      "Quản lý kinh tế",
      "Quản lý phát triển đô thị và bất động sản"
    ],
    "majorItems": [
      {
        "code": "7620105",
        "name": "Chăn nuôi thú Y"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7540106",
        "name": "Đảm bảo chất lượng & An toàn thực phẩm"
      },
      {
        "code": "7549002",
        "name": "Dược liệu và hợp chất thiên nhiên"
      },
      {
        "code": "7440301",
        "name": "Khoa học môi trường"
      },
      {
        "code": "7620110",
        "name": "Khoa học cây trồng"
      },
      {
        "code": "7620115",
        "name": "Kinh tế nông nghiệp"
      },
      {
        "code": "7620205",
        "name": "Lâm sinh"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7620101",
        "name": "Nông nghiệp công nghệ cao"
      },
      {
        "code": "7850103",
        "name": "Quản lý đất đai"
      },
      {
        "code": "7310110",
        "name": "Quản lý kinh tế"
      },
      {
        "code": "7580109",
        "name": "Quản lý phát triển đô thị và bất động sản"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: các trang tuyển sinh TUAF. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-041",
    "name": "Trường Đại học Y - Dược - ĐH Thái Nguyên (TUMP)",
    "shortName": "TUMP",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Thái Nguyên",
    "provinceOld": "Thái Nguyên",
    "logo": "https://www.google.com/s2/favicons?domain=tump.edu.vn&sz=128",
    "website": "https://tump.edu.vn/",
    "admissionsUrl": "https://tuyensinh.tump.edu.vn/",
    "admissionsText": "https://tuyensinh.tump.edu.vn/",
    "category": "Y Dược",
    "focusRiasec": [
      "I",
      "S",
      "R"
    ],
    "majors": [
      "Y khoa",
      "Răng hàm mặt",
      "Dược học",
      "Y học dự phòng",
      "Điều dưỡng",
      "Kỹ thuật xét nghiệm y học",
      "Hộ sinh",
      "Kỹ thuật hình ảnh y học",
      "Kỹ thuật phục hồi chức năng"
    ],
    "majorItems": [
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7720501",
        "name": "Răng hàm mặt"
      },
      {
        "code": "7720201",
        "name": "Dược học"
      },
      {
        "code": "7720110",
        "name": "Y học dự phòng"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7720601",
        "name": "Kỹ thuật xét nghiệm y học"
      },
      {
        "code": "7720302",
        "name": "Hộ sinh"
      },
      {
        "code": "7720602",
        "name": "Kỹ thuật hình ảnh y học"
      },
      {
        "code": "7720603",
        "name": "Kỹ thuật phục hồi chức năng"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh TUMP. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-042",
    "name": "Trường Đại học Sư phạm - ĐH Thái Nguyên (TNUE)",
    "shortName": "TNUE",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Thái Nguyên",
    "provinceOld": "Thái Nguyên",
    "logo": "https://www.google.com/s2/favicons?domain=tnue.edu.vn&sz=128",
    "website": "https://tnue.edu.vn/",
    "admissionsUrl": "https://tuyensinh.tnue.edu.vn/",
    "admissionsText": "https://tuyensinh.tnue.edu.vn/",
    "category": "Sư phạm",
    "focusRiasec": [
      "S",
      "A",
      "C"
    ],
    "majors": [
      "Giáo dục học",
      "Giáo dục Mầm non",
      "Giáo dục Tiểu học",
      "Giáo dục Công dân",
      "Giáo dục Chính trị",
      "Giáo dục thể chất",
      "Sư phạm Toán học",
      "Sư phạm Tin học",
      "Sư phạm Vật lý",
      "Sư phạm Hóa học",
      "Sư phạm Sinh học",
      "Sư phạm Ngữ văn",
      "Sư phạm Lịch sử",
      "Sư phạm Địa lý",
      "Sư phạm Tiếng Anh",
      "Sư phạm Khoa học tự nhiên",
      "Sư phạm Lịch sử – Địa lý",
      "Tâm lý học giáo dục"
    ],
    "majorItems": [
      {
        "code": "7140101",
        "name": "Giáo dục học"
      },
      {
        "code": "7140201",
        "name": "Giáo dục Mầm non"
      },
      {
        "code": "7140202",
        "name": "Giáo dục Tiểu học"
      },
      {
        "code": "7140204",
        "name": "Giáo dục Công dân"
      },
      {
        "code": "7140205",
        "name": "Giáo dục Chính trị"
      },
      {
        "code": "7140206",
        "name": "Giáo dục thể chất"
      },
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140210",
        "name": "Sư phạm Tin học"
      },
      {
        "code": "7140211",
        "name": "Sư phạm Vật lý"
      },
      {
        "code": "7140212",
        "name": "Sư phạm Hóa học"
      },
      {
        "code": "7140213",
        "name": "Sư phạm Sinh học"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140218",
        "name": "Sư phạm Lịch sử"
      },
      {
        "code": "7140219",
        "name": "Sư phạm Địa lý"
      },
      {
        "code": "7140231",
        "name": "Sư phạm Tiếng Anh"
      },
      {
        "code": "7140247",
        "name": "Sư phạm Khoa học tự nhiên"
      },
      {
        "code": "7140249",
        "name": "Sư phạm Lịch sử – Địa lý"
      },
      {
        "code": "7310403",
        "name": "Tâm lý học giáo dục"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án tuyển sinh TNUE. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-043",
    "name": "Trường Đại học Hải Phòng",
    "shortName": "HP",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Hải Phòng",
    "provinceOld": "Hải Phòng",
    "logo": "https://www.google.com/s2/favicons?domain=dhhp.edu.vn&sz=128",
    "website": "https://dhhp.edu.vn/",
    "admissionsUrl": "https://tuyensinh.dhhp.edu.vn/",
    "admissionsText": "https://tuyensinh.dhhp.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Giáo dục Mầm non",
      "Giáo dục Tiểu học",
      "Giáo dục Thể chất",
      "Sư phạm Toán học",
      "Sư phạm Ngữ văn",
      "Sư phạm Tiếng Anh",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Văn học",
      "Kinh tế ngoại thương",
      "Logistics và quản lý chuỗi cung ứng",
      "Thương mại điện tử",
      "Quản trị kinh doanh",
      "Kế toán"
    ],
    "majorItems": [
      {
        "code": "7140201",
        "name": "Giáo dục Mầm non"
      },
      {
        "code": "7140202",
        "name": "Giáo dục Tiểu học"
      },
      {
        "code": "7140206",
        "name": "Giáo dục Thể chất"
      },
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140231",
        "name": "Sư phạm Tiếng Anh"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7229030",
        "name": "Văn học"
      },
      {
        "code": "7310101",
        "name": "Kinh tế ngoại thương"
      },
      {
        "code": "7510605",
        "name": "Logistics và quản lý chuỗi cung ứng"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh ĐH Hải Phòng. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-044",
    "name": "Đại học Hàng hải Việt Nam (VMU)",
    "shortName": "VMU",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Hải Phòng",
    "provinceOld": "Hải Phòng",
    "logo": "https://www.google.com/s2/favicons?domain=vimaru.edu.vn&sz=128",
    "website": "https://vimaru.edu.vn/",
    "admissionsUrl": "https://tuyensinh.vimaru.edu.vn/",
    "admissionsText": "https://tuyensinh.vimaru.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Điều khiển tàu biển",
      "Khai thác máy tàu biển",
      "Điện tự động giao thông vận tải",
      "Điện tử viễn thông",
      "Máy tàu thủy",
      "Xây dựng công trình thủy",
      "Xây dựng dân dụng và công nghiệp",
      "Công nghệ thông tin",
      "Quản trị kinh doanh",
      "Logistics và chuỗi cung ứng",
      "Kinh tế vận tải biển",
      "Quản trị tài chính kế toán",
      "Luật hàng hải"
    ],
    "majorItems": [
      {
        "code": "7520101",
        "name": "Điều khiển tàu biển"
      },
      {
        "code": "7520104",
        "name": "Khai thác máy tàu biển"
      },
      {
        "code": "7520201",
        "name": "Điện tự động giao thông vận tải"
      },
      {
        "code": "7520207",
        "name": "Điện tử viễn thông"
      },
      {
        "code": "7520103",
        "name": "Máy tàu thủy"
      },
      {
        "code": "7580202",
        "name": "Xây dựng công trình thủy"
      },
      {
        "code": "7580201",
        "name": "Xây dựng dân dụng và công nghiệp"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7510605",
        "name": "Logistics và chuỗi cung ứng"
      },
      {
        "code": "7310101",
        "name": "Kinh tế vận tải biển"
      },
      {
        "code": "7340201",
        "name": "Quản trị tài chính kế toán"
      },
      {
        "code": "7380101",
        "name": "Luật hàng hải"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh VMU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-045",
    "name": "Trường Đại học Kỹ thuật Y tế Hải Dương",
    "shortName": "KYHD",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Hải Phòng",
    "provinceOld": "Hải Dương",
    "logo": "https://www.google.com/s2/favicons?domain=hmt.edu.vn&sz=128",
    "website": "https://hmt.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hmt.edu.vn/",
    "admissionsText": "https://tuyensinh.hmt.edu.vn/",
    "category": "Y Dược",
    "focusRiasec": [
      "I",
      "S",
      "R"
    ],
    "majors": [
      "Điều dưỡng",
      "Kỹ thuật xét nghiệm y học",
      "Kỹ thuật hình ảnh y học"
    ],
    "majorItems": [
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7720601",
        "name": "Kỹ thuật xét nghiệm y học"
      },
      {
        "code": "7720602",
        "name": "Kỹ thuật hình ảnh y học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (tổng hợp). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-046",
    "name": "Trường Đại học Sư phạm Kỹ thuật Hưng Yên (UTEHY)",
    "shortName": "UTEHY",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Hưng Yên",
    "provinceOld": "Hưng Yên",
    "logo": "https://www.google.com/s2/favicons?domain=utehy.edu.vn&sz=128",
    "website": "https://utehy.edu.vn/",
    "admissionsUrl": "https://tuyensinh.utehy.edu.vn/",
    "admissionsText": "https://tuyensinh.utehy.edu.vn/",
    "category": "Sư phạm",
    "focusRiasec": [
      "S",
      "A",
      "C"
    ],
    "majors": [
      "Công nghệ giáo dục",
      "Sư phạm Tiếng Anh",
      "Sư phạm công nghệ",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Kinh tế",
      "Quản trị kinh doanh",
      "Kinh doanh thời trang và dệt may",
      "Kế toán",
      "Quản trị nhân lực",
      "Khoa học máy tính",
      "Kỹ thuật phần mềm",
      "Trí tuệ nhân tạo",
      "Công nghệ thông tin",
      "Công nghệ kỹ thuật cơ khí",
      "Công nghệ chế tạo máy",
      "Công nghệ kỹ thuật cơ điện tử",
      "Công nghệ kỹ thuật ô tô",
      "Điện lạnh và điều hòa không khí",
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật điện tử - viễn thông",
      "Công nghệ kỹ thuật điều khiển và tự động hoá",
      "Công nghệ kỹ thuật hóa học",
      "Công nghệ vật liệu",
      "Kỹ thuật cơ khí",
      "Kỹ thuật Robot",
      "Kỹ thuật hệ thống công nghiệp",
      "Công nghệ hóa thực phẩm",
      "Công nghệ may"
    ],
    "majorItems": [
      {
        "code": "7140103",
        "name": "Công nghệ giáo dục"
      },
      {
        "code": "7140231",
        "name": "Sư phạm Tiếng Anh"
      },
      {
        "code": "7140246",
        "name": "Sư phạm công nghệ"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340123",
        "name": "Kinh doanh thời trang và dệt may"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510201",
        "name": "Công nghệ kỹ thuật cơ khí"
      },
      {
        "code": "7510202",
        "name": "Công nghệ chế tạo máy"
      },
      {
        "code": "7510203",
        "name": "Công nghệ kỹ thuật cơ điện tử"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7510210",
        "name": "Điện lạnh và điều hòa không khí"
      },
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hoá"
      },
      {
        "code": "7510401",
        "name": "Công nghệ kỹ thuật hóa học"
      },
      {
        "code": "7510402",
        "name": "Công nghệ vật liệu"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "7520107",
        "name": "Kỹ thuật Robot"
      },
      {
        "code": "7520118",
        "name": "Kỹ thuật hệ thống công nghiệp"
      },
      {
        "code": "7540103",
        "name": "Công nghệ hóa thực phẩm"
      },
      {
        "code": "7540209",
        "name": "Công nghệ may"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành đào tạo đại học chính quy 2026 (29 ngành, khớp số ngành trường công bố). Nguồn: diemthi.tuyensinh247.com/de-an-tuyen-sinh/dai-hoc-su-pham-ky-thuat-hung-yen-SKH.html",
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
    "region": "Miền Bắc",
    "provinceNew": "Bắc Ninh",
    "provinceOld": "Bắc Ninh",
    "logo": "https://www.google.com/s2/favicons?domain=hocvienchinhtri.edu.vn&sz=128",
    "website": "https://hocvienchinhtri.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy - Tham mưu / Sĩ quan chính trị"
    ],
    "majorItems": [
      {
        "code": "7860101",
        "name": "Chỉ huy - Tham mưu / Sĩ quan chính trị"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (hệ quân sự). Nguồn: tổng hợp. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-115",
    "name": "Trường Sĩ quan Tăng thiết giáp",
    "shortName": "ST",
    "location": "Khác",
    "region": "Miền Bắc",
    "provinceNew": "Phú Thọ",
    "provinceOld": "Vĩnh Phúc",
    "logo": "https://www.google.com/s2/favicons?domain=truongttg.edu.vn&sz=128",
    "website": "https://truongttg.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy - Tham mưu Tăng thiết giáp"
    ],
    "majorItems": [
      {
        "code": "7860102",
        "name": "Chỉ huy - Tham mưu Tăng thiết giáp"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (hệ quân sự). Nguồn: tổng hợp. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-067",
    "name": "Trường Đại học Hồng Đức",
    "shortName": "HĐ",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Thanh Hóa",
    "provinceOld": "Thanh Hóa",
    "logo": "https://www.google.com/s2/favicons?domain=hdu.edu.vn&sz=128",
    "website": "https://hdu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hdu.edu.vn/",
    "admissionsText": "https://tuyensinh.hdu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Sư phạm Toán học",
      "Sư phạm Vật lý",
      "Sư phạm Hóa học",
      "Sư phạm Sinh học",
      "Sư phạm Khoa học tự nhiên",
      "Sư phạm Tin học",
      "Sư phạm Ngữ văn",
      "Sư phạm Lịch sử",
      "Toán học",
      "Công nghệ thông tin",
      "Kỹ thuật điện",
      "Kỹ thuật xây dựng",
      "Khoa học vật liệu"
    ],
    "majorItems": [
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140211",
        "name": "Sư phạm Vật lý"
      },
      {
        "code": "7140212",
        "name": "Sư phạm Hóa học"
      },
      {
        "code": "7140213",
        "name": "Sư phạm Sinh học"
      },
      {
        "code": "7140247",
        "name": "Sư phạm Khoa học tự nhiên"
      },
      {
        "code": "7140210",
        "name": "Sư phạm Tin học"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140218",
        "name": "Sư phạm Lịch sử"
      },
      {
        "code": "7460101",
        "name": "Toán học"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật điện"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7440122",
        "name": "Khoa học vật liệu"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: thông tin tuyển sinh ĐH Hồng Đức. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-047",
    "name": "Trường Đại học Vinh",
    "shortName": "Vinh",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Nghệ An",
    "provinceOld": "Nghệ An",
    "logo": "https://www.google.com/s2/favicons?domain=vinhuni.edu.vn&sz=128",
    "website": "https://vinhuni.edu.vn/",
    "admissionsUrl": "https://tuyensinh.vinhuni.edu.vn/",
    "admissionsText": "https://tuyensinh.vinhuni.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Kinh tế",
      "Kinh tế đầu tư",
      "Kinh tế số",
      "Quản lí kinh tế",
      "Quản trị kinh doanh",
      "Marketing",
      "Thương mại điện tử",
      "Tài chính - Ngân hàng",
      "Công nghệ tài chính",
      "Khoa học máy tính",
      "Công nghệ thông tin",
      "Công nghệ kỹ thuật ô tô",
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật điện tử - viễn thông",
      "Công nghệ kỹ thuật điều khiển và tự động hóa",
      "Giáo dục Mầm non",
      "Giáo dục Tiểu học",
      "Sư phạm Toán học",
      "Sư phạm Ngữ văn",
      "Sư phạm Tiếng Anh"
    ],
    "majorItems": [
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310104",
        "name": "Kinh tế đầu tư"
      },
      {
        "code": "7310109",
        "name": "Kinh tế số"
      },
      {
        "code": "7310110",
        "name": "Quản lí kinh tế"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7140201",
        "name": "Giáo dục Mầm non"
      },
      {
        "code": "7140202",
        "name": "Giáo dục Tiểu học"
      },
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140231",
        "name": "Sư phạm Tiếng Anh"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: đề án tuyển sinh ĐH Vinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-055",
    "name": "Trường Đại học Khoa học - Đại học Huế",
    "shortName": "KH",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Huế",
    "provinceOld": "Thừa Thiên Huế",
    "logo": "https://www.google.com/s2/favicons?domain=husc.edu.vn&sz=128",
    "website": "https://husc.edu.vn/",
    "admissionsUrl": "https://tuyensinh.husc.edu.vn/",
    "admissionsText": "https://tuyensinh.husc.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Kỹ thuật phần mềm",
      "Công nghệ sinh học",
      "Hóa học",
      "Khoa học môi trường",
      "Công nghệ thông tin",
      "Công nghệ kỹ thuật điện tử- viễn thông",
      "Công nghệ kỹ thuật hóa học",
      "Kiến trúc",
      "Hán Nôm",
      "Triết học",
      "Lịch sử",
      "Văn học",
      "Quản lý nhà nước",
      "Xã hội học",
      "Báo chí",
      "Truyền thông số",
      "Công tác xã hội"
    ],
    "majorItems": [
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7440112",
        "name": "Hóa học"
      },
      {
        "code": "7440301",
        "name": "Khoa học môi trường"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử- viễn thông"
      },
      {
        "code": "7510401",
        "name": "Công nghệ kỹ thuật hóa học"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7220104",
        "name": "Hán Nôm"
      },
      {
        "code": "7229001",
        "name": "Triết học"
      },
      {
        "code": "7229010",
        "name": "Lịch sử"
      },
      {
        "code": "7229030",
        "name": "Văn học"
      },
      {
        "code": "7310205",
        "name": "Quản lý nhà nước"
      },
      {
        "code": "7310301",
        "name": "Xã hội học"
      },
      {
        "code": "7320101",
        "name": "Báo chí"
      },
      {
        "code": "7320111",
        "name": "Truyền thông số"
      },
      {
        "code": "7760101",
        "name": "Công tác xã hội"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh HUSC. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-056",
    "name": "Trường Đại học Kinh tế - Đại học Huế",
    "shortName": "KH",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Huế",
    "provinceOld": "Thừa Thiên Huế",
    "logo": "https://www.google.com/s2/favicons?domain=hce.edu.vn&sz=128",
    "website": "https://hce.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hce.edu.vn/",
    "admissionsText": "https://tuyensinh.hce.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Kinh tế",
      "Kinh tế chính trị",
      "Kinh tế quốc tế",
      "Thống kê kinh tế",
      "Kinh tế số",
      "Quản trị kinh doanh",
      "Marketing",
      "Kinh doanh thương mại",
      "Thương mại điện tử",
      "Tài chính - Ngân hàng",
      "Kế toán",
      "Kiểm toán",
      "Quản trị nhân lực",
      "Hệ thống thông tin quản lý",
      "Logistics và Quản lý chuỗi cung ứng"
    ],
    "majorItems": [
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310102",
        "name": "Kinh tế chính trị"
      },
      {
        "code": "7310106",
        "name": "Kinh tế quốc tế"
      },
      {
        "code": "7310107",
        "name": "Thống kê kinh tế"
      },
      {
        "code": "7310109",
        "name": "Kinh tế số"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340121",
        "name": "Kinh doanh thương mại"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7340405",
        "name": "Hệ thống thông tin quản lý"
      },
      {
        "code": "7510605",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: các trang tuyển sinh HCE. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-057",
    "name": "Trường Đại học Luật - Đại học Huế",
    "shortName": "LH",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Huế",
    "provinceOld": "Thừa Thiên Huế",
    "logo": "https://www.google.com/s2/favicons?domain=hul.edu.vn&sz=128",
    "website": "https://hul.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hul.edu.vn/",
    "admissionsText": "https://tuyensinh.hul.edu.vn/",
    "category": "Luật",
    "focusRiasec": [
      "E",
      "C",
      "S"
    ],
    "majors": [
      "Sư phạm Tiếng Anh",
      "Sư phạm Tiếng Pháp",
      "Sư phạm Tiếng Trung Quốc",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Nga",
      "Ngôn ngữ Pháp",
      "Ngôn ngữ Trung Quốc",
      "Ngôn ngữ Nhật",
      "Ngôn ngữ Hàn Quốc",
      "Quốc tế học",
      "Việt Nam học",
      "Hoa Kỳ học",
      "Truyền thông quốc tế"
    ],
    "majorItems": [
      {
        "code": "7140231",
        "name": "Sư phạm Tiếng Anh"
      },
      {
        "code": "7140233",
        "name": "Sư phạm Tiếng Pháp"
      },
      {
        "code": "7140234",
        "name": "Sư phạm Tiếng Trung Quốc"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220202",
        "name": "Ngôn ngữ Nga"
      },
      {
        "code": "7220203",
        "name": "Ngôn ngữ Pháp"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7220209",
        "name": "Ngôn ngữ Nhật"
      },
      {
        "code": "7220210",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "7310601",
        "name": "Quốc tế học"
      },
      {
        "code": "7310630",
        "name": "Việt Nam học"
      },
      {
        "code": "7310640",
        "name": "Hoa Kỳ học"
      },
      {
        "code": "7320107",
        "name": "Truyền thông quốc tế"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh HUL. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-058",
    "name": "Trường Đại học Sư phạm - Đại học Huế",
    "shortName": "SH",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Huế",
    "provinceOld": "Thừa Thiên Huế",
    "logo": "https://www.google.com/s2/favicons?domain=dhsphue.edu.vn&sz=128",
    "website": "https://dhsphue.edu.vn/",
    "admissionsUrl": "https://tuyensinh.dhsphue.edu.vn/",
    "admissionsText": "https://tuyensinh.dhsphue.edu.vn/",
    "category": "Sư phạm",
    "focusRiasec": [
      "S",
      "A",
      "C"
    ],
    "majors": [
      "Giáo dục mầm non",
      "Giáo dục Tiểu học",
      "Giáo dục Công dân",
      "Giáo dục Chính trị",
      "Giáo dục Quốc phòng - An ninh",
      "Sư phạm Toán học",
      "Sư phạm Tin học",
      "Sư phạm Vật lý",
      "Sư phạm Hóa học",
      "Sư phạm Sinh học",
      "Sư phạm Ngữ văn",
      "Sư phạm Lịch sử",
      "Sư phạm Địa lý",
      "Sư phạm Công nghệ",
      "Sư phạm Khoa học Tự nhiên",
      "Sư phạm Lịch sử – Địa lý",
      "Tâm lý học giáo dục"
    ],
    "majorItems": [
      {
        "code": "7140201",
        "name": "Giáo dục mầm non"
      },
      {
        "code": "7140202",
        "name": "Giáo dục Tiểu học"
      },
      {
        "code": "7140204",
        "name": "Giáo dục Công dân"
      },
      {
        "code": "7140205",
        "name": "Giáo dục Chính trị"
      },
      {
        "code": "7140208",
        "name": "Giáo dục Quốc phòng - An ninh"
      },
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140210",
        "name": "Sư phạm Tin học"
      },
      {
        "code": "7140211",
        "name": "Sư phạm Vật lý"
      },
      {
        "code": "7140212",
        "name": "Sư phạm Hóa học"
      },
      {
        "code": "7140213",
        "name": "Sư phạm Sinh học"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140218",
        "name": "Sư phạm Lịch sử"
      },
      {
        "code": "7140219",
        "name": "Sư phạm Địa lý"
      },
      {
        "code": "7140246",
        "name": "Sư phạm Công nghệ"
      },
      {
        "code": "7140247",
        "name": "Sư phạm Khoa học Tự nhiên"
      },
      {
        "code": "7140249",
        "name": "Sư phạm Lịch sử – Địa lý"
      },
      {
        "code": "7310403",
        "name": "Tâm lý học giáo dục"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh ĐHSP Huế. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-059",
    "name": "Trường Đại học Y - Dược - Đại học Huế",
    "shortName": "YDH",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Huế",
    "provinceOld": "Thừa Thiên Huế",
    "logo": "https://www.google.com/s2/favicons?domain=huemed-univ.edu.vn&sz=128",
    "website": "https://huemed-univ.edu.vn/",
    "admissionsUrl": "https://tuyensinh.huemed-univ.edu.vn/",
    "admissionsText": "https://tuyensinh.huemed-univ.edu.vn/",
    "category": "Y Dược",
    "focusRiasec": [
      "I",
      "S",
      "R"
    ],
    "majors": [
      "Y khoa",
      "Y học dự phòng",
      "Y học cổ truyền",
      "Dược học",
      "Điều dưỡng",
      "Hộ sinh",
      "Dinh dưỡng",
      "Răng - Hàm - Mặt",
      "Kỹ thuật xét nghiệm y học",
      "Kỹ thuật hình ảnh y học",
      "Y tế công cộng"
    ],
    "majorItems": [
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7720110",
        "name": "Y học dự phòng"
      },
      {
        "code": "7720115",
        "name": "Y học cổ truyền"
      },
      {
        "code": "7720201",
        "name": "Dược học"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7720302",
        "name": "Hộ sinh"
      },
      {
        "code": "7720401",
        "name": "Dinh dưỡng"
      },
      {
        "code": "7720501",
        "name": "Răng - Hàm - Mặt"
      },
      {
        "code": "7720601",
        "name": "Kỹ thuật xét nghiệm y học"
      },
      {
        "code": "7720602",
        "name": "Kỹ thuật hình ảnh y học"
      },
      {
        "code": "7720701",
        "name": "Y tế công cộng"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh Y Dược Huế. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-060",
    "name": "Trường Đại học Nghệ thuật - Đại học Huế",
    "shortName": "NH",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Huế",
    "provinceOld": "Thừa Thiên Huế",
    "logo": "https://www.google.com/s2/favicons?domain=hufa.edu.vn&sz=128",
    "website": "https://hufa.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hufa.edu.vn/",
    "admissionsText": "https://tuyensinh.hufa.edu.vn/",
    "category": "Nghệ thuật",
    "focusRiasec": [
      "A",
      "R",
      "C"
    ],
    "majors": [
      "Sư phạm Mỹ thuật",
      "Hội họa",
      "Điêu khắc",
      "Thiết kế Đồ họa",
      "Thiết kế Thời trang",
      "Thiết kế Nội thất"
    ],
    "majorItems": [
      {
        "code": "7140222",
        "name": "Sư phạm Mỹ thuật"
      },
      {
        "code": "7210103",
        "name": "Hội họa"
      },
      {
        "code": "7210105",
        "name": "Điêu khắc"
      },
      {
        "code": "7210403",
        "name": "Thiết kế Đồ họa"
      },
      {
        "code": "7210404",
        "name": "Thiết kế Thời trang"
      },
      {
        "code": "7580108",
        "name": "Thiết kế Nội thất"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh Nghệ thuật Huế. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-061",
    "name": "Trường Du lịch - Đại học Huế",
    "shortName": "DH",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Huế",
    "provinceOld": "Thừa Thiên Huế",
    "logo": "https://www.google.com/s2/favicons?domain=huht.edu.vn&sz=128",
    "website": "https://huht.edu.vn/",
    "admissionsUrl": "https://tuyensinh.huht.edu.vn/",
    "admissionsText": "https://tuyensinh.huht.edu.vn/",
    "category": "Du lịch",
    "focusRiasec": [
      "E",
      "S",
      "A"
    ],
    "majors": [
      "Quản trị kinh doanh",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Quản trị khách sạn",
      "Quản trị nhà hàng và dịch vụ ăn uống",
      "Du lịch",
      "Du lịch điện tử",
      "Quản trị du lịch và khách sạn"
    ],
    "majorItems": [
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7810202",
        "name": "Quản trị nhà hàng và dịch vụ ăn uống"
      },
      {
        "code": "7810101",
        "name": "Du lịch"
      },
      {
        "code": "7810102",
        "name": "Du lịch điện tử"
      },
      {
        "code": "7810104",
        "name": "Quản trị du lịch và khách sạn"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh Du lịch Huế. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-062",
    "name": "Trường Đại học Nông Lâm - Đại học Huế",
    "shortName": "NLH",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Huế",
    "provinceOld": "Thừa Thiên Huế",
    "logo": "https://www.google.com/s2/favicons?domain=huaf.edu.vn&sz=128",
    "website": "https://huaf.edu.vn/",
    "admissionsUrl": "https://tuyensinh.huaf.edu.vn/",
    "admissionsText": "https://tuyensinh.huaf.edu.vn/",
    "category": "Nông Lâm",
    "focusRiasec": [
      "R",
      "I",
      "S"
    ],
    "majors": [
      "Công nghệ kỹ thuật cơ khí",
      "Kỹ thuật cơ – điện tử",
      "Công nghệ thực phẩm",
      "Đảm bảo chất lượng và an toàn thực phẩm",
      "Chăn nuôi",
      "Khoa học cây trồng",
      "Bảo vệ thực vật",
      "Nông nghiệp công nghệ cao",
      "Lâm nghiệp",
      "Quản lý tài nguyên rừng",
      "Nuôi trồng thủy sản",
      "Bệnh học thủy sản",
      "Thú y",
      "Quản lý đất đai",
      "Bất động sản"
    ],
    "majorItems": [
      {
        "code": "7510201",
        "name": "Công nghệ kỹ thuật cơ khí"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật cơ – điện tử"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7540106",
        "name": "Đảm bảo chất lượng và an toàn thực phẩm"
      },
      {
        "code": "7620105",
        "name": "Chăn nuôi"
      },
      {
        "code": "7620110",
        "name": "Khoa học cây trồng"
      },
      {
        "code": "7620112",
        "name": "Bảo vệ thực vật"
      },
      {
        "code": "7620118",
        "name": "Nông nghiệp công nghệ cao"
      },
      {
        "code": "7620210",
        "name": "Lâm nghiệp"
      },
      {
        "code": "7620211",
        "name": "Quản lý tài nguyên rừng"
      },
      {
        "code": "7620301",
        "name": "Nuôi trồng thủy sản"
      },
      {
        "code": "7620302",
        "name": "Bệnh học thủy sản"
      },
      {
        "code": "7640101",
        "name": "Thú y"
      },
      {
        "code": "7850103",
        "name": "Quản lý đất đai"
      },
      {
        "code": "7340116",
        "name": "Bất động sản"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh Nông Lâm Huế. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-048",
    "name": "Trường Đại học Bách khoa - Đại học Đà Nẵng (DUT)",
    "shortName": "DUT",
    "location": "Đà Nẵng",
    "region": "Miền Trung",
    "provinceNew": "Đà Nẵng",
    "provinceOld": "Đà Nẵng",
    "logo": "https://www.google.com/s2/favicons?domain=dut.udn.vn&sz=128",
    "website": "https://dut.udn.vn/",
    "admissionsUrl": "https://tuyensinh.dut.udn.vn/",
    "admissionsText": "https://tuyensinh.dut.udn.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Công nghệ sinh học",
      "Kỹ thuật máy tính",
      "Công nghệ thông tin",
      "Công nghệ chế tạo máy",
      "Quản lý công nghiệp",
      "Kỹ thuật cơ khí",
      "Kỹ thuật cơ điện tử",
      "Kỹ thuật nhiệt",
      "Kỹ thuật tàu thủy",
      "Kỹ thuật điện",
      "Kỹ thuật điện tử - viễn thông",
      "Kỹ thuật điều khiển & tự động hóa",
      "Kỹ thuật hóa học",
      "Kỹ thuật môi trường",
      "Công nghệ thực phẩm",
      "Kiến trúc",
      "Kỹ thuật xây dựng",
      "Kỹ thuật xây dựng công trình thủy"
    ],
    "majorItems": [
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7480106",
        "name": "Kỹ thuật máy tính"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510202",
        "name": "Công nghệ chế tạo máy"
      },
      {
        "code": "7510601",
        "name": "Quản lý công nghiệp"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật cơ điện tử"
      },
      {
        "code": "7520115",
        "name": "Kỹ thuật nhiệt"
      },
      {
        "code": "7520122",
        "name": "Kỹ thuật tàu thủy"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật điện"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật điều khiển & tự động hóa"
      },
      {
        "code": "7520301",
        "name": "Kỹ thuật hóa học"
      },
      {
        "code": "7520320",
        "name": "Kỹ thuật môi trường"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7580202",
        "name": "Kỹ thuật xây dựng công trình thủy"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh DUT. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-049",
    "name": "Trường Đại học Kinh tế - Đại học Đà Nẵng (DUE)",
    "shortName": "DUE",
    "location": "Đà Nẵng",
    "region": "Miền Trung",
    "provinceNew": "Đà Nẵng",
    "provinceOld": "Đà Nẵng",
    "logo": "https://www.google.com/s2/favicons?domain=due.udn.vn&sz=128",
    "website": "https://due.udn.vn/",
    "admissionsUrl": "https://tuyensinh.due.udn.vn/",
    "admissionsText": "https://tuyensinh.due.udn.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Hệ thống thông tin quản lý",
      "Marketing",
      "Thương mại điện tử",
      "Quản trị kinh doanh",
      "Kinh doanh quốc tế",
      "Kinh doanh thương mại",
      "Tài chính - Ngân hàng",
      "Kế toán",
      "Kiểm toán",
      "Quản trị nhân lực",
      "Khoa học dữ liệu",
      "Kinh tế",
      "Thống kê kinh tế",
      "Quản trị kinh doanh du lịch và lữ hành",
      "Quản trị khách sạn",
      "Công nghệ tài chính",
      "Luật",
      "Luật kinh tế",
      "Quản lý nhà nước"
    ],
    "majorItems": [
      {
        "code": "7340405",
        "name": "Hệ thống thông tin quản lý"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340121",
        "name": "Kinh doanh thương mại"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310107",
        "name": "Thống kê kinh tế"
      },
      {
        "code": "7810103",
        "name": "Quản trị kinh doanh du lịch và lữ hành"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7310205",
        "name": "Quản lý nhà nước"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh DUE. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-050",
    "name": "Trường Đại học Sư phạm - Đại học Đà Nẵng",
    "shortName": "SĐN",
    "location": "Đà Nẵng",
    "region": "Miền Trung",
    "provinceNew": "Đà Nẵng",
    "provinceOld": "Đà Nẵng",
    "logo": "https://www.google.com/s2/favicons?domain=ued.udn.vn&sz=128",
    "website": "https://ued.udn.vn/",
    "admissionsUrl": "https://tuyensinh.ued.udn.vn/",
    "admissionsText": "https://tuyensinh.ued.udn.vn/",
    "category": "Sư phạm",
    "focusRiasec": [
      "S",
      "A",
      "C"
    ],
    "majors": [
      "Giáo dục Mầm non",
      "Giáo dục Tiểu học",
      "Giáo dục Công dân",
      "Giáo dục Chính trị",
      "Giáo dục thể chất",
      "Sư phạm Toán học",
      "Sư phạm Tin học",
      "Sư phạm Vật lý",
      "Sư phạm Hóa học",
      "Sư phạm Sinh học",
      "Sư phạm Ngữ văn",
      "Sư phạm Lịch sử",
      "Sư phạm Địa lý",
      "Sư phạm Âm nhạc",
      "Sư phạm Khoa học tự nhiên",
      "Sư phạm Lịch sử- Địa lý",
      "Công nghệ thông tin",
      "Công nghệ Sinh học",
      "Tâm lý học"
    ],
    "majorItems": [
      {
        "code": "7140201",
        "name": "Giáo dục Mầm non"
      },
      {
        "code": "7140202",
        "name": "Giáo dục Tiểu học"
      },
      {
        "code": "7140204",
        "name": "Giáo dục Công dân"
      },
      {
        "code": "7140205",
        "name": "Giáo dục Chính trị"
      },
      {
        "code": "7140206",
        "name": "Giáo dục thể chất"
      },
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140210",
        "name": "Sư phạm Tin học"
      },
      {
        "code": "7140211",
        "name": "Sư phạm Vật lý"
      },
      {
        "code": "7140212",
        "name": "Sư phạm Hóa học"
      },
      {
        "code": "7140213",
        "name": "Sư phạm Sinh học"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140218",
        "name": "Sư phạm Lịch sử"
      },
      {
        "code": "7140219",
        "name": "Sư phạm Địa lý"
      },
      {
        "code": "7140221",
        "name": "Sư phạm Âm nhạc"
      },
      {
        "code": "7140247",
        "name": "Sư phạm Khoa học tự nhiên"
      },
      {
        "code": "7140249",
        "name": "Sư phạm Lịch sử- Địa lý"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7420201",
        "name": "Công nghệ Sinh học"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-051",
    "name": "Trường Đại học Y Dược - Đại học Đà Nẵng",
    "shortName": "YDĐN",
    "location": "Đà Nẵng",
    "region": "Miền Trung",
    "provinceNew": "Đà Nẵng",
    "provinceOld": "Đà Nẵng",
    "logo": "https://www.google.com/s2/favicons?domain=ump.udn.vn&sz=128",
    "website": "https://ump.udn.vn/",
    "admissionsUrl": "https://tuyensinh.ump.udn.vn/",
    "admissionsText": "https://tuyensinh.ump.udn.vn/",
    "category": "Y Dược",
    "focusRiasec": [
      "I",
      "S",
      "R"
    ],
    "majors": [
      "Y khoa",
      "Răng- Hàm- Mặt",
      "Dược học",
      "Hóa dược",
      "Điều dưỡng",
      "Kỹ thuật xét nghiệm y học",
      "Tâm lý học"
    ],
    "majorItems": [
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7720501",
        "name": "Răng- Hàm- Mặt"
      },
      {
        "code": "7720201",
        "name": "Dược học"
      },
      {
        "code": "7720203",
        "name": "Hóa dược"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7720601",
        "name": "Kỹ thuật xét nghiệm y học"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-052",
    "name": "Trường Đại học Ngoại ngữ - Đại học Đà Nẵng",
    "shortName": "NĐN",
    "location": "Đà Nẵng",
    "region": "Miền Trung",
    "provinceNew": "Đà Nẵng",
    "provinceOld": "Đà Nẵng",
    "logo": "https://www.google.com/s2/favicons?domain=ufl.udn.vn&sz=128",
    "website": "https://ufl.udn.vn/",
    "admissionsUrl": "https://tuyensinh.ufl.udn.vn/",
    "admissionsText": "https://tuyensinh.ufl.udn.vn/",
    "category": "Ngoại ngữ",
    "focusRiasec": [
      "A",
      "S",
      "C"
    ],
    "majors": [
      "Sư phạm tiếng Anh",
      "Sư phạm tiếng Pháp",
      "Sư phạm tiếng Trung Quốc",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Nga",
      "Ngôn ngữ Pháp",
      "Ngôn ngữ Trung Quốc",
      "Ngôn ngữ Nhật",
      "Ngôn ngữ Hàn Quốc",
      "Quan hệ quốc tế",
      "Quốc tế học",
      "Đông phương học"
    ],
    "majorItems": [
      {
        "code": "7140231",
        "name": "Sư phạm tiếng Anh"
      },
      {
        "code": "7140233",
        "name": "Sư phạm tiếng Pháp"
      },
      {
        "code": "7140234",
        "name": "Sư phạm tiếng Trung Quốc"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220202",
        "name": "Ngôn ngữ Nga"
      },
      {
        "code": "7220203",
        "name": "Ngôn ngữ Pháp"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7220209",
        "name": "Ngôn ngữ Nhật"
      },
      {
        "code": "7220210",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "7310206",
        "name": "Quan hệ quốc tế"
      },
      {
        "code": "7310601",
        "name": "Quốc tế học"
      },
      {
        "code": "7310608",
        "name": "Đông phương học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025. Nguồn: các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-053",
    "name": "Trường Đại học Duy Tân (DTU)",
    "shortName": "DTU",
    "location": "Đà Nẵng",
    "region": "Miền Trung",
    "provinceNew": "Đà Nẵng",
    "provinceOld": "Đà Nẵng",
    "logo": "https://www.google.com/s2/favicons?domain=duytan.edu.vn&sz=128",
    "website": "https://duytan.edu.vn/",
    "admissionsUrl": "https://tuyensinh.duytan.edu.vn/",
    "admissionsText": "https://tuyensinh.duytan.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Kỹ thuật phần mềm",
      "An toàn thông tin",
      "Khoa học máy tính",
      "Trí tuệ nhân tạo",
      "Khoa học dữ liệu",
      "Mạng máy tính và Truyền thông dữ liệu",
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật ô tô",
      "Kỹ thuật Điều khiển và tự động hóa",
      "Quản trị kinh doanh",
      "Thương mại điện tử",
      "Quản trị nhân lực",
      "Logistics và Quản lý chuỗi cung ứng",
      "Marketing",
      "Tài chính-Ngân hàng",
      "Kế toán",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Ngôn ngữ Hàn Quốc",
      "Ngôn ngữ Nhật"
    ],
    "majorItems": [
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7480102",
        "name": "Mạng máy tính và Truyền thông dữ liệu"
      },
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật Điều khiển và tự động hóa"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7510605",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340201",
        "name": "Tài chính-Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7220210",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "7220209",
        "name": "Ngôn ngữ Nhật"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh DTU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-054",
    "name": "Trường Đại học Đông Á",
    "shortName": "ĐÁ",
    "location": "Đà Nẵng",
    "region": "Miền Trung",
    "provinceNew": "Đà Nẵng",
    "provinceOld": "Đà Nẵng",
    "logo": "https://www.google.com/s2/favicons?domain=donga.edu.vn&sz=128",
    "website": "https://donga.edu.vn/",
    "admissionsUrl": "https://tuyensinh.donga.edu.vn/",
    "admissionsText": "https://tuyensinh.donga.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Y khoa",
      "Dược",
      "Điều dưỡng",
      "Hộ sinh",
      "Kỹ thuật phục hồi chức năng",
      "Dinh dưỡng",
      "Công nghệ Kỹ thuật Ô tô",
      "Kỹ thuật Cơ điện tử",
      "Công nghệ thông tin",
      "Kỹ thuật máy tính",
      "Trí tuệ nhân tạo",
      "Công nghệ Kỹ thuật Điện – Điện tử",
      "Công nghệ Kỹ thuật điều khiển & tự động hoá",
      "Công nghệ Kỹ thuật Xây dựng",
      "Công nghệ sinh học",
      "Công nghệ thực phẩm",
      "Thú Y",
      "Đồ họa",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Ngôn ngữ Hàn Quốc",
      "Ngôn ngữ Nhật",
      "Logistics & Quản lý chuỗi cung ứng",
      "Quản trị kinh doanh"
    ],
    "majorItems": [
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7720201",
        "name": "Dược"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7720302",
        "name": "Hộ sinh"
      },
      {
        "code": "7720603",
        "name": "Kỹ thuật phục hồi chức năng"
      },
      {
        "code": "7720401",
        "name": "Dinh dưỡng"
      },
      {
        "code": "7510205",
        "name": "Công nghệ Kỹ thuật Ô tô"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật Cơ điện tử"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480106",
        "name": "Kỹ thuật máy tính"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7510301",
        "name": "Công nghệ Kỹ thuật Điện – Điện tử"
      },
      {
        "code": "7510303",
        "name": "Công nghệ Kỹ thuật điều khiển & tự động hoá"
      },
      {
        "code": "7510102",
        "name": "Công nghệ Kỹ thuật Xây dựng"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7640101",
        "name": "Thú Y"
      },
      {
        "code": "7210403",
        "name": "Đồ họa"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7220210",
        "name": "Ngôn ngữ Hàn Quốc"
      },
      {
        "code": "7220209",
        "name": "Ngôn ngữ Nhật"
      },
      {
        "code": "7510605",
        "name": "Logistics & Quản lý chuỗi cung ứng"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh Đông Á. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-063",
    "name": "Trường Đại học Nha Trang",
    "shortName": "NT",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Khánh Hòa",
    "provinceOld": "Khánh Hòa",
    "logo": "https://www.google.com/s2/favicons?domain=ntu.edu.vn&sz=128",
    "website": "https://ntu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ntu.edu.vn/",
    "admissionsText": "https://tuyensinh.ntu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Công nghệ thông tin",
      "Kế toán",
      "Tài chính - Ngân hàng",
      "Quản trị kinh doanh",
      "Quản trị khách sạn",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Công nghệ chế biến thủy sản",
      "Nuôi trồng thủy sản",
      "Công nghệ sinh học",
      "Cơ khí thủy sản / Kỹ thuật cơ khí",
      "Khoa học thủy sản",
      "Quản lý thủy sản",
      "Công nghệ thực phẩm",
      "Đảm bảo chất lượng và an toàn thực phẩm",
      "Kỹ thuật môi trường"
    ],
    "majorItems": [
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7540105",
        "name": "Công nghệ chế biến thủy sản"
      },
      {
        "code": "7620301",
        "name": "Nuôi trồng thủy sản"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7520103",
        "name": "Cơ khí thủy sản / Kỹ thuật cơ khí"
      },
      {
        "code": "7620303",
        "name": "Khoa học thủy sản"
      },
      {
        "code": "7620305",
        "name": "Quản lý thủy sản"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7540106",
        "name": "Đảm bảo chất lượng và an toàn thực phẩm"
      },
      {
        "code": "7520320",
        "name": "Kỹ thuật môi trường"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh NTU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-107",
    "name": "Học viện Hải quân",
    "shortName": "HQH",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Khánh Hòa",
    "provinceOld": "Khánh Hòa",
    "logo": "https://www.google.com/s2/favicons?domain=hocvienhaiquan.edu.vn&sz=128",
    "website": "https://hocvienhaiquan.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy tham mưu Hải quân"
    ],
    "majorItems": [
      {
        "code": "7860202",
        "name": "Chỉ huy tham mưu Hải quân"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh HV Hải quân. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-116",
    "name": "Trường Sĩ quan Thông tin (Đại học Thông tin liên lạc)",
    "shortName": "STT",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Khánh Hòa",
    "provinceOld": "Khánh Hòa",
    "logo": "https://www.google.com/s2/favicons?domain=truongthongtin.edu.vn&sz=128",
    "website": "https://truongthongtin.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy – Tham mưu Thông tin"
    ],
    "majorItems": [
      {
        "code": "7860219",
        "name": "Chỉ huy – Tham mưu Thông tin"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-117",
    "name": "Trường Sĩ quan Không quân",
    "shortName": "SK",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Khánh Hòa",
    "provinceOld": "Khánh Hòa",
    "logo": "https://www.google.com/s2/favicons?domain=truongkhongquan.edu.vn&sz=128",
    "website": "https://truongkhongquan.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy tham mưu Không quân / Phi công quân sự / Thiết bị bay không người lái"
    ],
    "majorItems": [
      {
        "code": "7860203",
        "name": "Chỉ huy tham mưu Không quân / Phi công quân sự / Thiết bị bay không người lái"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025-2026. Nguồn: đề án tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-064",
    "name": "Trường Đại học Quy Nhơn",
    "shortName": "QN",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Gia Lai",
    "provinceOld": "Bình Định",
    "logo": "https://www.google.com/s2/favicons?domain=qnu.edu.vn&sz=128",
    "website": "https://qnu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.qnu.edu.vn/",
    "admissionsText": "https://tuyensinh.qnu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Kỹ thuật phần mềm",
      "Trí tuệ nhân tạo",
      "Kỹ thuật điện tử - viễn thông",
      "Công nghệ thông tin",
      "Kỹ thuật điện",
      "Kỹ thuật điều khiển và TĐH",
      "Vật lý kỹ thuật",
      "Công nghệ thực phẩm",
      "Kỹ thuật xây dựng",
      "Nuôi trồng thủy sản"
    ],
    "majorItems": [
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật điện"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật điều khiển và TĐH"
      },
      {
        "code": "7520401",
        "name": "Vật lý kỹ thuật"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7620301",
        "name": "Nuôi trồng thủy sản"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh QNU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-065",
    "name": "Trường Đại học Đà Lạt",
    "shortName": "ĐL",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Lâm Đồng",
    "provinceOld": "Lâm Đồng",
    "logo": "https://www.google.com/s2/favicons?domain=dlu.edu.vn&sz=128",
    "website": "https://dlu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.dlu.edu.vn/",
    "admissionsText": "https://tuyensinh.dlu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Sư phạm Toán học",
      "Sư phạm Tin học",
      "Sư phạm Vật lý",
      "Sư phạm Hóa học",
      "Sư phạm Sinh học",
      "Sư phạm Ngữ văn",
      "Sư phạm Lịch sử",
      "Sư phạm Tiếng Anh",
      "Giáo dục Tiểu học",
      "Toán học",
      "Khoa học dữ liệu",
      "Công nghệ thông tin",
      "Vật lý học",
      "Công nghệ kỹ thuật Điện tử - Viễn thông",
      "Kỹ thuật hạt nhân",
      "Hóa học",
      "Công nghệ Sinh học",
      "Quản trị kinh doanh",
      "Kế toán",
      "Luật",
      "Văn học",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Ngôn ngữ Anh",
      "Tài chính - Ngân hàng"
    ],
    "majorItems": [
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140210",
        "name": "Sư phạm Tin học"
      },
      {
        "code": "7140211",
        "name": "Sư phạm Vật lý"
      },
      {
        "code": "7140212",
        "name": "Sư phạm Hóa học"
      },
      {
        "code": "7140213",
        "name": "Sư phạm Sinh học"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140218",
        "name": "Sư phạm Lịch sử"
      },
      {
        "code": "7140231",
        "name": "Sư phạm Tiếng Anh"
      },
      {
        "code": "7140202",
        "name": "Giáo dục Tiểu học"
      },
      {
        "code": "7460101",
        "name": "Toán học"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7440102",
        "name": "Vật lý học"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật Điện tử - Viễn thông"
      },
      {
        "code": "7520402",
        "name": "Kỹ thuật hạt nhân"
      },
      {
        "code": "7440112",
        "name": "Hóa học"
      },
      {
        "code": "7420201",
        "name": "Công nghệ Sinh học"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7229030",
        "name": "Văn học"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh DLU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-066",
    "name": "Trường Đại học Tây Nguyên",
    "shortName": "TN",
    "location": "Khác",
    "region": "Miền Trung",
    "provinceNew": "Đắk Lắk",
    "provinceOld": "Đắk Lắk",
    "logo": "https://www.google.com/s2/favicons?domain=ttn.edu.vn&sz=128",
    "website": "https://ttn.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ttn.edu.vn/",
    "admissionsText": "https://tuyensinh.ttn.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Y khoa",
      "Điều dưỡng",
      "Kỹ thuật xét nghiệm y học",
      "Giáo dục Mầm non",
      "Giáo dục Tiểu học",
      "Sư phạm Toán học",
      "Sư phạm Vật lý",
      "Sư phạm Hóa học",
      "Sư phạm Sinh học",
      "Sư phạm Ngữ văn",
      "Sư phạm Tiếng Anh",
      "Ngôn ngữ Anh",
      "Kinh tế",
      "Quản trị kinh doanh",
      "Tài chính – Ngân hàng",
      "Kế toán",
      "Công nghệ sinh học",
      "Công nghệ thông tin",
      "Công nghệ thực phẩm",
      "Chăn nuôi",
      "Khoa học cây trồng",
      "Thú y",
      "Quản lý đất đai"
    ],
    "majorItems": [
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7720601",
        "name": "Kỹ thuật xét nghiệm y học"
      },
      {
        "code": "7140201",
        "name": "Giáo dục Mầm non"
      },
      {
        "code": "7140202",
        "name": "Giáo dục Tiểu học"
      },
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140211",
        "name": "Sư phạm Vật lý"
      },
      {
        "code": "7140212",
        "name": "Sư phạm Hóa học"
      },
      {
        "code": "7140213",
        "name": "Sư phạm Sinh học"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140231",
        "name": "Sư phạm Tiếng Anh"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7620105",
        "name": "Chăn nuôi"
      },
      {
        "code": "7620110",
        "name": "Khoa học cây trồng"
      },
      {
        "code": "7640101",
        "name": "Thú y"
      },
      {
        "code": "7850103",
        "name": "Quản lý đất đai"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2025. Nguồn: các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-068",
    "name": "Trường Đại học Bách khoa - ĐHQG TP.HCM (HCMUT)",
    "shortName": "HCMUT",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmut.edu.vn&sz=128",
    "website": "https://hcmut.edu.vn/",
    "admissionsUrl": "",
    "admissionsText": "https://tuyensinh.hcmut.edu.vn/ hoặc https://mybk.hcmut.edu.vn/tuyensinh/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Khoa học Máy tính",
      "Kỹ thuật Máy tính",
      "Kỹ thuật Điện",
      "Kỹ thuật Điện tử – Viễn thông",
      "Kỹ thuật Điều khiển và Tự động hóa",
      "Kỹ thuật Cơ khí",
      "Kỹ thuật Cơ Điện tử",
      "Kỹ thuật Robot",
      "Công nghệ Thực phẩm",
      "Công nghệ Sinh học",
      "Kỹ thuật Hóa học",
      "Kỹ thuật Xây dựng",
      "Kiến trúc",
      "Kỹ thuật Ô tô",
      "Kỹ thuật Hàng không"
    ],
    "majorItems": [
      {
        "code": "7480101",
        "name": "Khoa học Máy tính"
      },
      {
        "code": "7480106",
        "name": "Kỹ thuật Máy tính"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật Điện"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật Điện tử – Viễn thông"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật Điều khiển và Tự động hóa"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật Cơ khí"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật Cơ Điện tử"
      },
      {
        "code": "7520107",
        "name": "Kỹ thuật Robot"
      },
      {
        "code": "7540101",
        "name": "Công nghệ Thực phẩm"
      },
      {
        "code": "7420201",
        "name": "Công nghệ Sinh học"
      },
      {
        "code": "7520301",
        "name": "Kỹ thuật Hóa học"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật Xây dựng"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7520130",
        "name": "Kỹ thuật Ô tô"
      },
      {
        "code": "7520120",
        "name": "Kỹ thuật Hàng không"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh HCMUT. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-069",
    "name": "Trường Đại học Khoa học Tự nhiên - ĐHQG TP.HCM (HCMUS)",
    "shortName": "HCMUS",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmus.edu.vn&sz=128",
    "website": "https://hcmus.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hcmus.edu.vn/",
    "admissionsText": "https://tuyensinh.hcmus.edu.vn/",
    "category": "Khoa học",
    "focusRiasec": [
      "I",
      "R",
      "A"
    ],
    "majors": [
      "Sinh học",
      "Công nghệ Sinh học",
      "Vật lý học",
      "Hóa học",
      "Khoa học Vật liệu",
      "Khoa học máy tính",
      "Trí tuệ nhân tạo",
      "Công nghệ thông tin",
      "Khoa học dữ liệu",
      "Toán ứng dụng",
      "Khoa học Môi trường",
      "Công nghệ bán dẫn / Vật lý kỹ thuật"
    ],
    "majorItems": [
      {
        "code": "7420101",
        "name": "Sinh học"
      },
      {
        "code": "7420201",
        "name": "Công nghệ Sinh học"
      },
      {
        "code": "7440102",
        "name": "Vật lý học"
      },
      {
        "code": "7440112",
        "name": "Hóa học"
      },
      {
        "code": "7440122",
        "name": "Khoa học Vật liệu"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7460112",
        "name": "Toán ứng dụng"
      },
      {
        "code": "7440301",
        "name": "Khoa học Môi trường"
      },
      {
        "code": "7520401",
        "name": "Công nghệ bán dẫn / Vật lý kỹ thuật"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: tuyensinh.hcmus.edu.vn. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-070",
    "name": "Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM (UIT)",
    "shortName": "UIT",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=uit.edu.vn&sz=128",
    "website": "https://uit.edu.vn/",
    "admissionsUrl": "https://tuyensinh.uit.edu.vn/",
    "admissionsText": "https://tuyensinh.uit.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Khoa học máy tính",
      "Trí tuệ nhân tạo",
      "Mạng máy tính và Truyền thông dữ liệu",
      "Kỹ thuật phần mềm",
      "Hệ thống thông tin",
      "Thương mại điện tử",
      "Công nghệ thông tin",
      "Khoa học dữ liệu",
      "An toàn thông tin",
      "Kỹ thuật máy tính",
      "Thiết kế vi mạch"
    ],
    "majorItems": [
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7480102",
        "name": "Mạng máy tính và Truyền thông dữ liệu"
      },
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480104",
        "name": "Hệ thống thông tin"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7480106",
        "name": "Kỹ thuật máy tính"
      },
      {
        "code": "7480105",
        "name": "Thiết kế vi mạch"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh UIT. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-071",
    "name": "Trường Đại học Kinh tế - Luật - ĐHQG TP.HCM (UEL)",
    "shortName": "UEL",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=uel.edu.vn&sz=128",
    "website": "https://uel.edu.vn/",
    "admissionsUrl": "https://tuyensinh.uel.edu.vn/",
    "admissionsText": "https://tuyensinh.uel.edu.vn/",
    "category": "Luật",
    "focusRiasec": [
      "E",
      "C",
      "S"
    ],
    "majors": [
      "Kinh tế",
      "Kinh tế quốc tế",
      "Quản trị kinh doanh",
      "Marketing",
      "Kinh doanh quốc tế",
      "Thương mại điện tử",
      "Tài chính – Ngân hàng",
      "Công nghệ tài chính",
      "Kế toán",
      "Kiểm toán",
      "Hệ thống thông tin quản lý",
      "Luật kinh tế"
    ],
    "majorItems": [
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310106",
        "name": "Kinh tế quốc tế"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7340405",
        "name": "Hệ thống thông tin quản lý"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh UEL. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-072",
    "name": "Trường Đại học Quốc tế - ĐHQG TP.HCM (IU)",
    "shortName": "IU",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmiu.edu.vn&sz=128",
    "website": "https://hcmiu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hcmiu.edu.vn/",
    "admissionsText": "https://tuyensinh.hcmiu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Ngôn ngữ Anh",
      "Quản trị kinh doanh",
      "Marketing",
      "Tài chính – Ngân hàng",
      "Kế toán",
      "Kinh tế",
      "Công nghệ thông tin",
      "Khoa học máy tính",
      "Khoa học dữ liệu",
      "Công nghệ sinh học",
      "Công nghệ thực phẩm",
      "Kỹ thuật điện tử – viễn thông",
      "Kỹ thuật xây dựng"
    ],
    "majorItems": [
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật điện tử – viễn thông"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh IU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-073",
    "name": "Trường Đại học Khoa học Xã hội và Nhân văn - ĐHQG TP.HCM",
    "shortName": "KXNĐT",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmussh.edu.vn&sz=128",
    "website": "https://hcmussh.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hcmussh.edu.vn/",
    "admissionsText": "https://tuyensinh.hcmussh.edu.vn/",
    "category": "Xã hội - Nhân văn",
    "focusRiasec": [
      "S",
      "A",
      "I"
    ],
    "majors": [
      "Giáo dục học",
      "Quản lý giáo dục",
      "Nghệ thuật học",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Nga",
      "Ngôn ngữ Pháp",
      "Ngôn ngữ Trung Quốc",
      "Triết học",
      "Lịch sử",
      "Ngôn ngữ học",
      "Văn học",
      "Văn hoá học",
      "Quan hệ quốc tế",
      "Xã hội học",
      "Tâm lý học",
      "Quốc tế học",
      "Đông phương học",
      "Việt Nam học",
      "Báo chí"
    ],
    "majorItems": [
      {
        "code": "7140101",
        "name": "Giáo dục học"
      },
      {
        "code": "7140114",
        "name": "Quản lý giáo dục"
      },
      {
        "code": "7210213",
        "name": "Nghệ thuật học"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220202",
        "name": "Ngôn ngữ Nga"
      },
      {
        "code": "7220203",
        "name": "Ngôn ngữ Pháp"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7229001",
        "name": "Triết học"
      },
      {
        "code": "7229010",
        "name": "Lịch sử"
      },
      {
        "code": "7229020",
        "name": "Ngôn ngữ học"
      },
      {
        "code": "7229030",
        "name": "Văn học"
      },
      {
        "code": "7229040",
        "name": "Văn hoá học"
      },
      {
        "code": "7310206",
        "name": "Quan hệ quốc tế"
      },
      {
        "code": "7310301",
        "name": "Xã hội học"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      },
      {
        "code": "7310601",
        "name": "Quốc tế học"
      },
      {
        "code": "7310608",
        "name": "Đông phương học"
      },
      {
        "code": "7310630",
        "name": "Việt Nam học"
      },
      {
        "code": "7320101",
        "name": "Báo chí"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh USSH. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-074",
    "name": "Đại học Kinh tế TP.HCM (UEH)",
    "shortName": "UEH",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=ueh.edu.vn&sz=128",
    "website": "https://ueh.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ueh.edu.vn/",
    "admissionsText": "https://tuyensinh.ueh.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Tiếng Anh thương mại",
      "Kinh tế",
      "Kinh tế chính trị",
      "Kinh tế đầu tư",
      "Thống kê kinh doanh",
      "Toán tài chính",
      "Quản trị kinh doanh",
      "Marketing",
      "Bất động sản",
      "Kinh doanh quốc tế",
      "Kinh doanh thương mại",
      "Thương mại điện tử",
      "Tài chính – Ngân hàng",
      "Kế toán",
      "Kiểm toán",
      "Luật"
    ],
    "majorItems": [
      {
        "code": "7220201",
        "name": "Tiếng Anh thương mại"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7310102",
        "name": "Kinh tế chính trị"
      },
      {
        "code": "7310104",
        "name": "Kinh tế đầu tư"
      },
      {
        "code": "7310107",
        "name": "Thống kê kinh doanh"
      },
      {
        "code": "7310108",
        "name": "Toán tài chính"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340116",
        "name": "Bất động sản"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340121",
        "name": "Kinh doanh thương mại"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7380101",
        "name": "Luật"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh UEH. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-075",
    "name": "Trường Đại học Tôn Đức Thắng (TDTU)",
    "shortName": "TDTU",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=tdtu.edu.vn&sz=128",
    "website": "https://tdtu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.tdtu.edu.vn/",
    "admissionsText": "https://tuyensinh.tdtu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Công nghệ sinh học",
      "Kỹ thuật hóa học",
      "Công nghệ thông tin",
      "Khoa học máy tính",
      "Quản trị kinh doanh",
      "Marketing",
      "Tài chính – Ngân hàng",
      "Kế toán",
      "Ngôn ngữ Anh",
      "Công nghệ kỹ thuật ô tô",
      "Kỹ thuật xây dựng",
      "Kỹ thuật điều khiển và tự động hóa"
    ],
    "majorItems": [
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7520301",
        "name": "Kỹ thuật hóa học"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật điều khiển và tự động hóa"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh TDTU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-076",
    "name": "Trường Đại học Sư phạm TP.HCM (HCMUE)",
    "shortName": "HCMUE",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmue.edu.vn&sz=128",
    "website": "https://hcmue.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hcmue.edu.vn/",
    "admissionsText": "https://tuyensinh.hcmue.edu.vn/",
    "category": "Sư phạm",
    "focusRiasec": [
      "S",
      "A",
      "C"
    ],
    "majors": [
      "Giáo dục Mầm non",
      "Giáo dục Tiểu học",
      "Giáo dục Đặc biệt",
      "Giáo dục Công dân",
      "Giáo dục Chính trị",
      "Giáo dục Thể chất",
      "Giáo dục Quốc phòng - An ninh",
      "Sư phạm Toán học",
      "Sư phạm Tin học",
      "Sư phạm Vật lý",
      "Sư phạm Hóa học",
      "Sư phạm Sinh học",
      "Sư phạm Ngữ văn",
      "Sư phạm Lịch sử",
      "Sư phạm Địa lý",
      "Sư phạm Tiếng Anh",
      "Sư phạm Tiếng Nga",
      "Sư phạm Tiếng Pháp",
      "Sư phạm Tiếng Trung Quốc",
      "Ngôn ngữ Anh",
      "Tâm lý học",
      "Công nghệ thông tin"
    ],
    "majorItems": [
      {
        "code": "7140201",
        "name": "Giáo dục Mầm non"
      },
      {
        "code": "7140202",
        "name": "Giáo dục Tiểu học"
      },
      {
        "code": "7140203",
        "name": "Giáo dục Đặc biệt"
      },
      {
        "code": "7140204",
        "name": "Giáo dục Công dân"
      },
      {
        "code": "7140205",
        "name": "Giáo dục Chính trị"
      },
      {
        "code": "7140206",
        "name": "Giáo dục Thể chất"
      },
      {
        "code": "7140208",
        "name": "Giáo dục Quốc phòng - An ninh"
      },
      {
        "code": "7140209",
        "name": "Sư phạm Toán học"
      },
      {
        "code": "7140210",
        "name": "Sư phạm Tin học"
      },
      {
        "code": "7140211",
        "name": "Sư phạm Vật lý"
      },
      {
        "code": "7140212",
        "name": "Sư phạm Hóa học"
      },
      {
        "code": "7140213",
        "name": "Sư phạm Sinh học"
      },
      {
        "code": "7140217",
        "name": "Sư phạm Ngữ văn"
      },
      {
        "code": "7140218",
        "name": "Sư phạm Lịch sử"
      },
      {
        "code": "7140219",
        "name": "Sư phạm Địa lý"
      },
      {
        "code": "7140231",
        "name": "Sư phạm Tiếng Anh"
      },
      {
        "code": "7140232",
        "name": "Sư phạm Tiếng Nga"
      },
      {
        "code": "7140233",
        "name": "Sư phạm Tiếng Pháp"
      },
      {
        "code": "7140234",
        "name": "Sư phạm Tiếng Trung Quốc"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh HCMUE. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-077",
    "name": "Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)",
    "shortName": "HCMUTE",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmute.edu.vn&sz=128",
    "website": "https://hcmute.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hcmute.edu.vn/",
    "admissionsText": "https://tuyensinh.hcmute.edu.vn/",
    "category": "Sư phạm",
    "focusRiasec": [
      "S",
      "A",
      "C"
    ],
    "majors": [
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật điện tử, viễn thông",
      "Công nghệ kỹ thuật điều khiển và tự động hóa",
      "Công nghệ kỹ thuật máy tính",
      "Kỹ thuật Y sinh",
      "Công nghệ thông tin",
      "Công nghệ kỹ thuật ô tô",
      "Kỹ thuật cơ khí",
      "Kỹ thuật cơ điện tử",
      "Công nghệ thực phẩm",
      "Kỹ thuật xây dựng",
      "Quản trị kinh doanh",
      "Công nghệ tài chính"
    ],
    "majorItems": [
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử, viễn thông"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7480108",
        "name": "Công nghệ kỹ thuật máy tính"
      },
      {
        "code": "7520212",
        "name": "Kỹ thuật Y sinh"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật cơ điện tử"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh HCMUTE. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-078",
    "name": "Trường Đại học Công nghiệp TP.HCM (IUH)",
    "shortName": "IUH",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=iuh.edu.vn&sz=128",
    "website": "https://iuh.edu.vn/",
    "admissionsUrl": "https://tuyensinh.iuh.edu.vn/",
    "admissionsText": "https://tuyensinh.iuh.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật điều khiển và tự động hóa",
      "Công nghệ kỹ thuật điện tử - viễn thông",
      "Kỹ thuật máy tính",
      "Công nghệ kỹ thuật cơ khí",
      "Công nghệ kỹ thuật cơ điện tử",
      "Công nghệ thông tin",
      "Kỹ thuật phần mềm",
      "Khoa học máy tính",
      "Quản trị kinh doanh",
      "Marketing",
      "Kinh doanh quốc tế",
      "Tài chính ngân hàng",
      "Kế toán",
      "Công nghệ sinh học",
      "Công nghệ thực phẩm"
    ],
    "majorItems": [
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7510302",
        "name": "Công nghệ kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7480108",
        "name": "Kỹ thuật máy tính"
      },
      {
        "code": "7510201",
        "name": "Công nghệ kỹ thuật cơ khí"
      },
      {
        "code": "7510203",
        "name": "Công nghệ kỹ thuật cơ điện tử"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340201",
        "name": "Tài chính ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh IUH. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-079",
    "name": "Trường Đại học Công Thương TP.HCM (HUIT)",
    "shortName": "HUIT",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=huit.edu.vn&sz=128",
    "website": "https://huit.edu.vn/",
    "admissionsUrl": "https://tuyensinh.huit.edu.vn/",
    "admissionsText": "https://tuyensinh.huit.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Quản trị dịch vụ du lịch và lữ hành",
      "Quản trị khách sạn",
      "Quản trị nhà hàng và dịch vụ ăn uống",
      "Luật",
      "Luật kinh tế",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Công nghệ thông tin",
      "An toàn thông tin",
      "Khoa học dữ liệu",
      "Kế toán",
      "Tài chính ngân hàng",
      "Công nghệ tài chính",
      "Marketing",
      "Thương mại điện tử",
      "Logistics và quản lý chuỗi cung ứng",
      "Quản trị kinh doanh",
      "Kinh doanh quốc tế",
      "Công nghệ thực phẩm",
      "Đảm bảo chất lượng và an toàn thực phẩm",
      "Công nghệ kỹ thuật điện - điện tử",
      "Công nghệ kỹ thuật điều khiển và tự động hóa"
    ],
    "majorItems": [
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7810202",
        "name": "Quản trị nhà hàng và dịch vụ ăn uống"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340201",
        "name": "Tài chính ngân hàng"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7510605",
        "name": "Logistics và quản lý chuỗi cung ứng"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7540106",
        "name": "Đảm bảo chất lượng và an toàn thực phẩm"
      },
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện - điện tử"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hóa"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh HUIT. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-080",
    "name": "Trường Đại học Giao thông vận tải TP.HCM (UTH)",
    "shortName": "UTH",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=ut.edu.vn&sz=128",
    "website": "https://ut.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ut.edu.vn/",
    "admissionsText": "https://tuyensinh.ut.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "Công nghệ thông tin",
      "Logistics và quản lý chuỗi cung ứng",
      "Quản trị kinh doanh",
      "Ngôn ngữ Anh",
      "Luật",
      "Công nghệ kỹ thuật cơ khí",
      "Công nghệ kỹ thuật điều khiển và tự động hóa",
      "Công nghệ kỹ thuật ô tô",
      "Kỹ thuật cơ khí",
      "Kỹ thuật điều khiển và tự động hóa",
      "Hệ thống thông tin quản lý"
    ],
    "majorItems": [
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510605",
        "name": "Logistics và quản lý chuỗi cung ứng"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7510201",
        "name": "Công nghệ kỹ thuật cơ khí"
      },
      {
        "code": "7510303",
        "name": "Công nghệ kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7340405",
        "name": "Hệ thống thông tin quản lý"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh UTH. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-081",
    "name": "Trường Đại học Mở TP.HCM (OU)",
    "shortName": "OU",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=ou.edu.vn&sz=128",
    "website": "https://ou.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ou.edu.vn/",
    "admissionsText": "https://tuyensinh.ou.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Trí tuệ nhân tạo",
      "Khoa học máy tính",
      "Kỹ thuật phần mềm",
      "Công nghệ thông tin",
      "Hệ thống thông tin quản lý",
      "An toàn thông tin",
      "Công nghệ sinh học",
      "Công nghệ thực phẩm",
      "Kế toán",
      "Kiểm toán",
      "Quản trị kinh doanh",
      "Marketing",
      "Kinh doanh quốc tế",
      "Ngôn ngữ Anh",
      "Khoa học dữ liệu"
    ],
    "majorItems": [
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7340405",
        "name": "Hệ thống thông tin quản lý"
      },
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh OU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-082",
    "name": "Trường Đại học Tài chính - Marketing (UFM)",
    "shortName": "UFM",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=ufm.edu.vn&sz=128",
    "website": "https://ufm.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ufm.edu.vn/",
    "admissionsText": "https://tuyensinh.ufm.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Kinh tế",
      "Luật kinh tế",
      "Toán kinh tế",
      "Ngôn ngữ Anh",
      "Hệ thống thông tin quản lý",
      "Bất động sản",
      "Khoa học dữ liệu",
      "Quản lý kinh tế",
      "Quản trị kinh doanh",
      "Marketing",
      "Kinh doanh quốc tế",
      "Tài chính - Ngân hàng",
      "Công nghệ tài chính",
      "Kế toán",
      "Kiểm toán",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Quản trị khách sạn"
    ],
    "majorItems": [
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7310108",
        "name": "Toán kinh tế"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7340405",
        "name": "Hệ thống thông tin quản lý"
      },
      {
        "code": "7340116",
        "name": "Bất động sản"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7310110",
        "name": "Quản lý kinh tế"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh UFM. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-083",
    "name": "Trường Đại học Ngân hàng TP.HCM (HUB)",
    "shortName": "HUB",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hub.edu.vn&sz=128",
    "website": "https://hub.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hub.edu.vn/",
    "admissionsText": "https://tuyensinh.hub.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Tài chính – Ngân hàng",
      "Công nghệ tài chính",
      "Quản trị kinh doanh",
      "Marketing",
      "Logistics và Quản lý chuỗi cung ứng",
      "Kế toán",
      "Kiểm toán",
      "Kinh doanh quốc tế",
      "Kinh tế quốc tế",
      "Hệ thống thông tin quản lý",
      "Công nghệ thông tin",
      "Thương mại điện tử",
      "Ngôn ngữ Anh",
      "Luật kinh tế",
      "Khoa học dữ liệu",
      "Trí tuệ nhân tạo"
    ],
    "majorItems": [
      {
        "code": "7340201",
        "name": "Tài chính – Ngân hàng"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7510605",
        "name": "Logistics và Quản lý chuỗi cung ứng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7310106",
        "name": "Kinh tế quốc tế"
      },
      {
        "code": "7340405",
        "name": "Hệ thống thông tin quản lý"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh HUB. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-084",
    "name": "Đại học Luật TP.HCM (ULAW)",
    "shortName": "ULAW",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmulaw.edu.vn&sz=128",
    "website": "https://hcmulaw.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hcmulaw.edu.vn/",
    "admissionsText": "https://tuyensinh.hcmulaw.edu.vn/",
    "category": "Luật",
    "focusRiasec": [
      "E",
      "C",
      "S"
    ],
    "majors": [
      "Luật",
      "Luật thương mại quốc tế / Luật kinh tế",
      "Quản trị kinh doanh",
      "Quản trị - Luật",
      "Ngôn ngữ Anh (tiếng Anh pháp lý)",
      "Ngôn ngữ Trung Quốc",
      "Kinh tế số",
      "Kinh doanh quốc tế",
      "Thương mại điện tử",
      "Tài chính - Ngân hàng",
      "Công nghệ tài chính"
    ],
    "majorItems": [
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7380107",
        "name": "Luật thương mại quốc tế / Luật kinh tế"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340102",
        "name": "Quản trị - Luật"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh (tiếng Anh pháp lý)"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7310109",
        "name": "Kinh tế số"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh ULAW. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-085",
    "name": "Trường Đại học Kiến trúc TP.HCM (UAH)",
    "shortName": "UAH",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=uah.edu.vn&sz=128",
    "website": "https://uah.edu.vn/",
    "admissionsUrl": "https://tuyensinh.uah.edu.vn/",
    "admissionsText": "https://tuyensinh.uah.edu.vn/",
    "category": "Nghệ thuật",
    "focusRiasec": [
      "A",
      "R",
      "C"
    ],
    "majors": [
      "Mỹ thuật đô thị",
      "Thiết kế công nghiệp",
      "Thiết kế đồ họa",
      "Thiết kế thời trang",
      "Kiến trúc",
      "Kiến trúc cảnh quan",
      "Quy hoạch vùng và đô thị"
    ],
    "majorItems": [
      {
        "code": "7210110",
        "name": "Mỹ thuật đô thị"
      },
      {
        "code": "7210402",
        "name": "Thiết kế công nghiệp"
      },
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      },
      {
        "code": "7210404",
        "name": "Thiết kế thời trang"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7580102",
        "name": "Kiến trúc cảnh quan"
      },
      {
        "code": "7580105",
        "name": "Quy hoạch vùng và đô thị"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: đề án tuyển sinh UAH. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-086",
    "name": "Trường Đại học Mỹ thuật TP.HCM",
    "shortName": "MT",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmufa.edu.vn&sz=128",
    "website": "https://www.hcmufa.edu.vn/",
    "admissionsUrl": "https://hcmufa.edu.vn/news_detail/id/621",
    "admissionsText": "https://hcmufa.edu.vn/news_detail/id/621",
    "category": "Nghệ thuật",
    "focusRiasec": [
      "A",
      "R",
      "C"
    ],
    "majors": [
      "Hội họa",
      "Đồ họa",
      "Điêu khắc",
      "Lý luận, lịch sử và phê bình mỹ thuật",
      "Thiết kế đồ họa",
      "Sư phạm mỹ thuật"
    ],
    "majorItems": [
      {
        "code": "7210103",
        "name": "Hội họa"
      },
      {
        "code": "7210104",
        "name": "Đồ họa"
      },
      {
        "code": "7210105",
        "name": "Điêu khắc"
      },
      {
        "code": "7210101",
        "name": "Lý luận, lịch sử và phê bình mỹ thuật"
      },
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      },
      {
        "code": "7140222",
        "name": "Sư phạm mỹ thuật"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-087",
    "name": "Trường Đại học Văn hóa TP.HCM",
    "shortName": "VT",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmuc.edu.vn&sz=128",
    "website": "https://hcmuc.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hcmuc.edu.vn/",
    "admissionsText": "https://tuyensinh.hcmuc.edu.vn/",
    "category": "Xã hội - Nhân văn",
    "focusRiasec": [
      "S",
      "A",
      "I"
    ],
    "majors": [
      "Thông tin - Thư viện",
      "Bảo tàng học",
      "Du lịch",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Kinh doanh xuất bản phẩm",
      "Quản lý văn hóa",
      "Văn hóa học",
      "Văn hóa các dân tộc thiểu số Việt Nam",
      "Di sản học"
    ],
    "majorItems": [
      {
        "code": "7320201",
        "name": "Thông tin - Thư viện"
      },
      {
        "code": "7320305",
        "name": "Bảo tàng học"
      },
      {
        "code": "7810101",
        "name": "Du lịch"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7320402",
        "name": "Kinh doanh xuất bản phẩm"
      },
      {
        "code": "7229042",
        "name": "Quản lý văn hóa"
      },
      {
        "code": "7229040",
        "name": "Văn hóa học"
      },
      {
        "code": "7220112",
        "name": "Văn hóa các dân tộc thiểu số Việt Nam"
      },
      {
        "code": "7229047",
        "name": "Di sản học"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-088",
    "name": "Đại học Y Dược TP.HCM (UMP)",
    "shortName": "UMP",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=ump.edu.vn&sz=128",
    "website": "https://ump.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ump.edu.vn/",
    "admissionsText": "https://tuyensinh.ump.edu.vn/",
    "category": "Y Dược",
    "focusRiasec": [
      "I",
      "S",
      "R"
    ],
    "majors": [
      "Y khoa",
      "Y học dự phòng",
      "Y học cổ truyền",
      "Dược học",
      "Điều dưỡng",
      "Hộ sinh",
      "Dinh dưỡng",
      "Răng – Hàm – Mặt",
      "Kỹ thuật phục hình răng",
      "Kỹ thuật Xét nghiệm Y học",
      "Kỹ thuật Hình ảnh Y học",
      "Kỹ thuật Phục hồi chức năng",
      "Y tế công cộng",
      "Hóa dược"
    ],
    "majorItems": [
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7720110",
        "name": "Y học dự phòng"
      },
      {
        "code": "7720115",
        "name": "Y học cổ truyền"
      },
      {
        "code": "7720201",
        "name": "Dược học"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7720302",
        "name": "Hộ sinh"
      },
      {
        "code": "7720401",
        "name": "Dinh dưỡng"
      },
      {
        "code": "7720501",
        "name": "Răng – Hàm – Mặt"
      },
      {
        "code": "7720502",
        "name": "Kỹ thuật phục hình răng"
      },
      {
        "code": "7720601",
        "name": "Kỹ thuật Xét nghiệm Y học"
      },
      {
        "code": "7720602",
        "name": "Kỹ thuật Hình ảnh Y học"
      },
      {
        "code": "7720603",
        "name": "Kỹ thuật Phục hồi chức năng"
      },
      {
        "code": "7720701",
        "name": "Y tế công cộng"
      },
      {
        "code": "7720203",
        "name": "Hóa dược"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh UMP. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-089",
    "name": "Trường Đại học Y khoa Phạm Ngọc Thạch",
    "shortName": "YPNT",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=pnt.edu.vn&sz=128",
    "website": "https://pnt.edu.vn/",
    "admissionsUrl": "https://tuyensinh.pnt.edu.vn/",
    "admissionsText": "https://tuyensinh.pnt.edu.vn/",
    "category": "Y Dược",
    "focusRiasec": [
      "I",
      "S",
      "R"
    ],
    "majors": [
      "Y khoa",
      "Y học cổ truyền",
      "Dược học",
      "Điều dưỡng",
      "Hộ sinh",
      "Dinh dưỡng",
      "Răng Hàm Mặt",
      "Kỹ thuật xét nghiệm y học",
      "Kỹ thuật hình ảnh y học",
      "Kỹ thuật phục hồi chức năng",
      "Khúc xạ nhãn khoa",
      "Kỹ thuật gây mê hồi sức",
      "Y tế công cộng",
      "Tâm lý học"
    ],
    "majorItems": [
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7720115",
        "name": "Y học cổ truyền"
      },
      {
        "code": "7720201",
        "name": "Dược học"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7720302",
        "name": "Hộ sinh"
      },
      {
        "code": "7720401",
        "name": "Dinh dưỡng"
      },
      {
        "code": "7720501",
        "name": "Răng Hàm Mặt"
      },
      {
        "code": "7720601",
        "name": "Kỹ thuật xét nghiệm y học"
      },
      {
        "code": "7720602",
        "name": "Kỹ thuật hình ảnh y học"
      },
      {
        "code": "7720603",
        "name": "Kỹ thuật phục hồi chức năng"
      },
      {
        "code": "7720609",
        "name": "Khúc xạ nhãn khoa"
      },
      {
        "code": "7720610",
        "name": "Kỹ thuật gây mê hồi sức"
      },
      {
        "code": "7720701",
        "name": "Y tế công cộng"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: thông tin tuyển sinh PNT. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-090",
    "name": "Trường Đại học Nông Lâm TP.HCM (NLU)",
    "shortName": "NLU",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmuaf.edu.vn&sz=128",
    "website": "https://hcmuaf.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hcmuaf.edu.vn/",
    "admissionsText": "https://tuyensinh.hcmuaf.edu.vn/",
    "category": "Nông Lâm",
    "focusRiasec": [
      "R",
      "I",
      "S"
    ],
    "majors": [
      "Ngôn ngữ Anh",
      "Kinh tế",
      "Quản trị kinh doanh",
      "Bất động sản",
      "Kế toán",
      "Công nghệ sinh học",
      "Khoa học môi trường",
      "Công nghệ thông tin",
      "Công nghệ kỹ thuật cơ khí",
      "Công nghệ kỹ thuật cơ điện tử",
      "Công nghệ kỹ thuật ô tô",
      "Công nghệ kỹ thuật hoá học",
      "Công nghệ thực phẩm",
      "Chăn nuôi",
      "Thú y"
    ],
    "majorItems": [
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7310101",
        "name": "Kinh tế"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340116",
        "name": "Bất động sản"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7440301",
        "name": "Khoa học môi trường"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7510201",
        "name": "Công nghệ kỹ thuật cơ khí"
      },
      {
        "code": "7510203",
        "name": "Công nghệ kỹ thuật cơ điện tử"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7510401",
        "name": "Công nghệ kỹ thuật hoá học"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7620105",
        "name": "Chăn nuôi"
      },
      {
        "code": "7640101",
        "name": "Thú y"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh NLU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-091",
    "name": "Trường Đại học Tài nguyên và Môi trường TP.HCM",
    "shortName": "TMT",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hcmunre.edu.vn&sz=128",
    "website": "https://hcmunre.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hcmunre.edu.vn/",
    "admissionsText": "https://tuyensinh.hcmunre.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Quản trị kinh doanh",
      "Bất động sản",
      "Địa chất học",
      "Biến đổi khí hậu",
      "Khí tượng và Khí hậu học",
      "Thủy văn học",
      "Hệ thống thông tin",
      "Khoa học môi trường",
      "Kỹ thuật môi trường",
      "Quản lý tài nguyên và môi trường"
    ],
    "majorItems": [
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340116",
        "name": "Bất động sản"
      },
      {
        "code": "7440201",
        "name": "Địa chất học"
      },
      {
        "code": "7440221",
        "name": "Biến đổi khí hậu"
      },
      {
        "code": "7440222",
        "name": "Khí tượng và Khí hậu học"
      },
      {
        "code": "7440224",
        "name": "Thủy văn học"
      },
      {
        "code": "7480104",
        "name": "Hệ thống thông tin"
      },
      {
        "code": "7440301",
        "name": "Khoa học môi trường"
      },
      {
        "code": "7520320",
        "name": "Kỹ thuật môi trường"
      },
      {
        "code": "7850101",
        "name": "Quản lý tài nguyên và môi trường"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-092",
    "name": "Trường Đại học Công nghệ TP.HCM (HUTECH)",
    "shortName": "HUTECH",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hutech.edu.vn&sz=128",
    "website": "https://hutech.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hutech.edu.vn/",
    "admissionsText": "https://tuyensinh.hutech.edu.vn/",
    "category": "Kỹ thuật",
    "focusRiasec": [
      "R",
      "I",
      "C"
    ],
    "majors": [
      "An toàn thông tin",
      "Công nghệ kỹ thuật ô tô",
      "Công nghệ sinh học",
      "Công nghệ thông tin",
      "Công nghệ thực phẩm",
      "Dược học",
      "Điều dưỡng",
      "Kế toán",
      "Kiến trúc",
      "Kinh doanh quốc tế",
      "Kỹ thuật cơ điện tử",
      "Kỹ thuật cơ khí",
      "Kỹ thuật điện",
      "Kỹ thuật điện tử - viễn thông",
      "Kỹ thuật điều khiển và tự động hoá",
      "Kỹ thuật xây dựng",
      "Logistics và quản lý chuỗi cung ứng",
      "Luật",
      "Marketing",
      "Ngôn ngữ Anh",
      "Quản trị kinh doanh",
      "Tài chính ngân hàng",
      "Thương mại điện tử"
    ],
    "majorItems": [
      {
        "code": "7480202",
        "name": "An toàn thông tin"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7720201",
        "name": "Dược học"
      },
      {
        "code": "7720301",
        "name": "Điều dưỡng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật cơ điện tử"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật điện"
      },
      {
        "code": "7520207",
        "name": "Kỹ thuật điện tử - viễn thông"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật điều khiển và tự động hoá"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      },
      {
        "code": "7510605",
        "name": "Logistics và quản lý chuỗi cung ứng"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340201",
        "name": "Tài chính ngân hàng"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh HUTECH. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-093",
    "name": "Trường Đại học Kinh tế - Tài chính TP.HCM (UEF)",
    "shortName": "UEF",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=uef.edu.vn&sz=128",
    "website": "https://uef.edu.vn/",
    "admissionsUrl": "https://tuyensinh.uef.edu.vn/",
    "admissionsText": "https://tuyensinh.uef.edu.vn/",
    "category": "Kinh tế",
    "focusRiasec": [
      "E",
      "C",
      "I"
    ],
    "majors": [
      "Quản trị kinh doanh",
      "Kinh doanh quốc tế",
      "Kinh doanh thương mại",
      "Marketing",
      "Luật kinh tế",
      "Luật",
      "Quản trị nhân lực",
      "Quản trị khách sạn",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Logistics và quản lý chuỗi cung ứng",
      "Thương mại điện tử",
      "Tài chính - ngân hàng",
      "Công nghệ tài chính",
      "Kế toán",
      "Kiểm toán",
      "Công nghệ thông tin",
      "Kỹ thuật phần mềm",
      "Khoa học dữ liệu",
      "Ngôn ngữ Anh"
    ],
    "majorItems": [
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340121",
        "name": "Kinh doanh thương mại"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7380107",
        "name": "Luật kinh tế"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7340404",
        "name": "Quản trị nhân lực"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7510605",
        "name": "Logistics và quản lý chuỗi cung ứng"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính - ngân hàng"
      },
      {
        "code": "7340205",
        "name": "Công nghệ tài chính"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7340302",
        "name": "Kiểm toán"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh UEF. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-094",
    "name": "Trường Đại học Hoa Sen",
    "shortName": "HS",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=hoasen.edu.vn&sz=128",
    "website": "https://hoasen.edu.vn/",
    "admissionsUrl": "https://tuyensinh.hoasen.edu.vn/",
    "admissionsText": "https://tuyensinh.hoasen.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Quản trị kinh doanh",
      "Marketing",
      "Kinh doanh quốc tế",
      "Tài chính - Ngân hàng",
      "Kế toán",
      "Công nghệ thông tin",
      "Ngôn ngữ Anh",
      "Quản trị dịch vụ du lịch và lữ hành",
      "Quản trị khách sạn",
      "Luật",
      "Thiết kế đồ họa",
      "Logistics và quản lý chuỗi cung ứng"
    ],
    "majorItems": [
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7810103",
        "name": "Quản trị dịch vụ du lịch và lữ hành"
      },
      {
        "code": "7810201",
        "name": "Quản trị khách sạn"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      },
      {
        "code": "7510605",
        "name": "Logistics và quản lý chuỗi cung ứng"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025. Nguồn: tổng hợp. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-095",
    "name": "Trường Đại học Nguyễn Tất Thành",
    "shortName": "NTT",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=ntt.edu.vn&sz=128",
    "website": "https://ntt.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ntt.edu.vn/",
    "admissionsText": "https://tuyensinh.ntt.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Công nghệ sinh học",
      "Kỹ thuật phần mềm",
      "Công nghệ thông tin",
      "Khoa học máy tính",
      "Trí tuệ nhân tạo",
      "Công nghệ kỹ thuật điện, điện tử",
      "Công nghệ kỹ thuật cơ điện tử",
      "Kỹ thuật cơ khí",
      "Quản trị kinh doanh",
      "Y khoa",
      "Thiết kế đồ họa"
    ],
    "majorItems": [
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7510301",
        "name": "Công nghệ kỹ thuật điện, điện tử"
      },
      {
        "code": "7510203",
        "name": "Công nghệ kỹ thuật cơ điện tử"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7720101",
        "name": "Y khoa"
      },
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2025-2026. Nguồn: các trang tuyển sinh NTT. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-096",
    "name": "Trường Đại học Văn Lang",
    "shortName": "VL",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=vanlanguni.edu.vn&sz=128",
    "website": "https://vanlanguni.edu.vn/",
    "admissionsUrl": "https://tuyensinh.vanlanguni.edu.vn/",
    "admissionsText": "https://tuyensinh.vanlanguni.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Thanh nhạc",
      "Thiết kế đồ họa",
      "Thiết kế thời trang",
      "Ngôn ngữ Anh",
      "Ngôn ngữ Trung Quốc",
      "Tâm lý học",
      "Quản trị kinh doanh",
      "Marketing",
      "Kinh doanh quốc tế",
      "Thương mại điện tử",
      "Tài chính - Ngân hàng",
      "Kế toán",
      "Luật",
      "Công nghệ thông tin"
    ],
    "majorItems": [
      {
        "code": "7210205",
        "name": "Thanh nhạc"
      },
      {
        "code": "7210403",
        "name": "Thiết kế đồ họa"
      },
      {
        "code": "7210404",
        "name": "Thiết kế thời trang"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7220204",
        "name": "Ngôn ngữ Trung Quốc"
      },
      {
        "code": "7310401",
        "name": "Tâm lý học"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340115",
        "name": "Marketing"
      },
      {
        "code": "7340120",
        "name": "Kinh doanh quốc tế"
      },
      {
        "code": "7340122",
        "name": "Thương mại điện tử"
      },
      {
        "code": "7340201",
        "name": "Tài chính - Ngân hàng"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7380101",
        "name": "Luật"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: các trang tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-098",
    "name": "Trường Đại học Việt - Đức (VGU)",
    "shortName": "VGU",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "Bình Dương",
    "logo": "https://www.google.com/s2/favicons?domain=vgu.edu.vn&sz=128",
    "website": "https://vgu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.vgu.edu.vn/",
    "admissionsText": "https://tuyensinh.vgu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Quản trị kinh doanh (BBA)",
      "Tài chính và Kế toán (BFA)",
      "Khoa học máy tính (CSE)",
      "Kỹ thuật Giao thông thông minh (SME)",
      "Kỹ thuật quy trình và môi trường (EPE)",
      "Kỹ thuật cơ khí (MEN)",
      "Kỹ thuật điện và máy tính (ECE)",
      "Kiến trúc (ARC)",
      "Kỹ thuật và quản lý xây dựng (BCE)"
    ],
    "majorItems": [
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh (BBA)"
      },
      {
        "code": "7340202",
        "name": "Tài chính và Kế toán (BFA)"
      },
      {
        "code": "7480101",
        "name": "Khoa học máy tính (CSE)"
      },
      {
        "code": "7510104",
        "name": "Kỹ thuật Giao thông thông minh (SME)"
      },
      {
        "code": "7510206",
        "name": "Kỹ thuật quy trình và môi trường (EPE)"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí (MEN)"
      },
      {
        "code": "7520208",
        "name": "Kỹ thuật điện và máy tính (ECE)"
      },
      {
        "code": "7580101",
        "name": "Kiến trúc (ARC)"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật và quản lý xây dựng (BCE)"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy 2026. Nguồn: các trang tuyển sinh VGU. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-099",
    "name": "Trường Đại học Thủ Dầu Một",
    "shortName": "TDM",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "Bình Dương",
    "logo": "https://www.google.com/s2/favicons?domain=tdmu.edu.vn&sz=128",
    "website": "https://tdmu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.tdmu.edu.vn/",
    "admissionsText": "https://tuyensinh.tdmu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Công nghệ sinh học",
      "Hóa học",
      "Vật lý học",
      "Toán học",
      "Kỹ thuật phần mềm",
      "Công nghệ thông tin",
      "Trí tuệ nhân tạo",
      "Khoa học dữ liệu",
      "Kỹ thuật cơ khí",
      "Kỹ thuật cơ điện tử",
      "Kỹ thuật điện",
      "Kỹ thuật điều khiển và tự động hóa",
      "Kỹ thuật môi trường",
      "Kỹ thuật xây dựng"
    ],
    "majorItems": [
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7440112",
        "name": "Hóa học"
      },
      {
        "code": "7440102",
        "name": "Vật lý học"
      },
      {
        "code": "7460101",
        "name": "Toán học"
      },
      {
        "code": "7480103",
        "name": "Kỹ thuật phần mềm"
      },
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7480107",
        "name": "Trí tuệ nhân tạo"
      },
      {
        "code": "7460108",
        "name": "Khoa học dữ liệu"
      },
      {
        "code": "7520103",
        "name": "Kỹ thuật cơ khí"
      },
      {
        "code": "7520114",
        "name": "Kỹ thuật cơ điện tử"
      },
      {
        "code": "7520201",
        "name": "Kỹ thuật điện"
      },
      {
        "code": "7520216",
        "name": "Kỹ thuật điều khiển và tự động hóa"
      },
      {
        "code": "7520320",
        "name": "Kỹ thuật môi trường"
      },
      {
        "code": "7580201",
        "name": "Kỹ thuật xây dựng"
      }
    ],
    "representative": true,
    "dataNote": "Danh sách ngành chính quy tiêu biểu 2026. Nguồn: thông tin tuyển sinh. Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-114",
    "name": "Trường Sĩ quan Công binh",
    "shortName": "SC",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "Bình Dương",
    "logo": "https://www.google.com/s2/favicons?domain=truongcongbinh.edu.vn&sz=128",
    "website": "https://truongcongbinh.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy - Tham mưu Công binh"
    ],
    "majorItems": [
      {
        "code": "7860103",
        "name": "Chỉ huy - Tham mưu Công binh"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (tổng hợp). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-123",
    "name": "Trường Đại học An ninh nhân dân",
    "shortName": "ANS",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=dhanninh.edu.vn&sz=128",
    "website": "https://dhanninh.edu.vn/",
    "admissionsUrl": "https://tuyensinh.dhanninh.edu.vn/",
    "admissionsText": "https://tuyensinh.dhanninh.edu.vn/",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "An ninh / Trinh sát"
    ],
    "majorItems": [
      {
        "code": "7860201",
        "name": "An ninh / Trinh sát"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (tổng hợp). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-124",
    "name": "Trường Đại học Cảnh sát nhân dân",
    "shortName": "CSS",
    "location": "TP.HCM",
    "region": "Miền Nam",
    "provinceNew": "TP. Hồ Chí Minh",
    "provinceOld": "TP. Hồ Chí Minh",
    "logo": "https://www.google.com/s2/favicons?domain=dhcsnd.edu.vn&sz=128",
    "website": "https://dhcsnd.edu.vn/",
    "admissionsUrl": "https://tuyensinh.dhcsnd.edu.vn/",
    "admissionsText": "https://tuyensinh.dhcsnd.edu.vn/",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Cảnh sát / Trật tự"
    ],
    "majorItems": [
      {
        "code": "7860204",
        "name": "Cảnh sát / Trật tự"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (tổng hợp). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-097",
    "name": "Trường Đại học Lạc Hồng",
    "shortName": "LH",
    "location": "Khác",
    "region": "Miền Nam",
    "provinceNew": "Đồng Nai",
    "provinceOld": "Đồng Nai",
    "logo": "https://www.google.com/s2/favicons?domain=lhu.edu.vn&sz=128",
    "website": "https://lhu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.lhu.edu.vn/",
    "admissionsText": "https://tuyensinh.lhu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Công nghệ thông tin",
      "Quản trị kinh doanh",
      "Kế toán",
      "Ngôn ngữ Anh",
      "Công nghệ kỹ thuật ô tô"
    ],
    "majorItems": [
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7340301",
        "name": "Kế toán"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7510205",
        "name": "Công nghệ kỹ thuật ô tô"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (tổng hợp). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-110",
    "name": "Trường Sĩ quan Lục quân 2 (Đại học Nguyễn Huệ)",
    "shortName": "SLNH",
    "location": "Khác",
    "region": "Miền Nam",
    "provinceNew": "Đồng Nai",
    "provinceOld": "Đồng Nai",
    "logo": "https://www.google.com/s2/favicons?domain=daihocnguyenhue.edu.vn&sz=128",
    "website": "https://daihocnguyenHue.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Chỉ huy - Tham mưu Lục quân"
    ],
    "majorItems": [
      {
        "code": "7860100",
        "name": "Chỉ huy - Tham mưu Lục quân"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (tổng hợp). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-100",
    "name": "Trường Đại học Cần Thơ (CTU)",
    "shortName": "CTU",
    "location": "Khác",
    "region": "Miền Nam",
    "provinceNew": "Cần Thơ",
    "provinceOld": "Cần Thơ",
    "logo": "https://www.google.com/s2/favicons?domain=ctu.edu.vn&sz=128",
    "website": "https://ctu.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ctu.edu.vn/",
    "admissionsText": "https://tuyensinh.ctu.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Công nghệ thông tin",
      "Quản trị kinh doanh",
      "Công nghệ sinh học",
      "Công nghệ thực phẩm",
      "Nuôi trồng thủy sản",
      "Ngôn ngữ Anh",
      "Y khoa"
    ],
    "majorItems": [
      {
        "code": "7480201",
        "name": "Công nghệ thông tin"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7420201",
        "name": "Công nghệ sinh học"
      },
      {
        "code": "7540101",
        "name": "Công nghệ thực phẩm"
      },
      {
        "code": "7620301",
        "name": "Nuôi trồng thủy sản"
      },
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7720101",
        "name": "Y khoa"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (tổng hợp). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-118",
    "name": "Trường Sĩ quan Kỹ thuật Quân sự (Đại học Trần Đại Nghĩa)",
    "shortName": "SKQTN",
    "location": "Khác",
    "region": "Chưa xác định",
    "provinceNew": "Chưa xác định",
    "provinceOld": "Chưa xác định",
    "logo": "https://www.google.com/s2/favicons?domain=trandainghia.edu.vn&sz=128",
    "website": "https://trandainghia.edu.vn/",
    "admissionsUrl": "https://www.tuyensinhquandoi.com/homepage",
    "admissionsText": "https://www.tuyensinhquandoi.com/homepage",
    "category": "Quân sự - Công an",
    "focusRiasec": [
      "R",
      "C",
      "E"
    ],
    "majors": [
      "Kỹ thuật quân sự"
    ],
    "majorItems": [
      {
        "code": "7520100",
        "name": "Kỹ thuật quân sự"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (tổng hợp). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  },
  {
    "id": "uni-126",
    "name": "Học viện Quốc tế (AIS)",
    "shortName": "AIS",
    "location": "Khác",
    "region": "Chưa xác định",
    "provinceNew": "Chưa xác định",
    "provinceOld": "Chưa xác định",
    "logo": "https://www.google.com/s2/favicons?domain=ais.edu.vn&sz=128",
    "website": "https://ais.edu.vn/",
    "admissionsUrl": "https://tuyensinh.ais.edu.vn/",
    "admissionsText": "https://tuyensinh.ais.edu.vn/",
    "category": "Đa ngành",
    "focusRiasec": [
      "I",
      "E",
      "C"
    ],
    "majors": [
      "Ngôn ngữ Anh",
      "Quản trị kinh doanh",
      "Quốc tế học"
    ],
    "majorItems": [
      {
        "code": "7220201",
        "name": "Ngôn ngữ Anh"
      },
      {
        "code": "7340101",
        "name": "Quản trị kinh doanh"
      },
      {
        "code": "7310601",
        "name": "Quốc tế học"
      }
    ],
    "representative": false,
    "dataNote": "Danh sách ngành chính quy (tổng hợp). Cập nhật 10/2026.",
    "programs": [],
    "tuition": null,
    "admissionScores": [],
    "admissionMethods": [],
    "lastUpdated": "10/2026"
  }
] as University[];
