import type { MajorGroup } from "./types";

/** Major groups used for RIASEC matching and filters.
 *  Example phrases come from the combination Word files (career bullets).
 */
export const MAJOR_GROUPS: MajorGroup[] = [
  {
    id: "thuc-te",
    name: "Nhóm thực tế - kỹ thuật",
    riasec: ["R", "I", "C"],
    examples: [
      "Kỹ thuật viên y tế",
      "Vật lý trị liệu - Phục hồi chức năng",
      "Quản lý kỹ thuật - sản xuất",
      "Quản lý dự án xây dựng",
      "Kiểm định - đo lường chất lượng",
      "Trắc địa - Bản đồ",
      "An toàn lao động",
      "Bảo trì hệ thống kỹ thuật",
    ],
  },
  {
    id: "nghien-cuu",
    name: "Nhóm nghiên cứu - khoa học",
    riasec: ["I", "R", "A"],
    examples: [
      "Nghiên cứu và phát triển (R&D) kỹ thuật",
      "Công nghệ vật liệu",
      "Kỹ thuật y sinh",
      "Robot học",
      "Khoa học máy tính ứng dụng",
      "Y khoa",
      "Y tế công cộng",
      "Khoa học dữ liệu kỹ thuật",
    ],
  },
  {
    id: "sang-tao",
    name: "Nhóm sáng tạo - thiết kế",
    riasec: ["A", "R", "S"],
    examples: [
      "Thiết kế sản phẩm",
      "Kiến trúc",
      "Thiết kế công nghiệp",
      "Thiết kế đồ họa 3D - Game",
      "Giáo viên mỹ thuật - kỹ năng",
      "Trị liệu nghệ thuật",
      "Thiết kế trải nghiệm giáo dục",
      "Multimedia kỹ thuật",
    ],
  },
  {
    id: "xa-hoi",
    name: "Nhóm xã hội - giáo dục",
    riasec: ["S", "A", "C"],
    examples: [
      "Giáo dục",
      "Đào tạo kỹ năng",
      "Điều dưỡng",
      "Công tác xã hội",
      "Tâm lý học ứng dụng thực hành",
      "Huấn luyện viên thể thao",
      "Y tế cộng đồng",
      "Điều phối dự án",
    ],
  },
  {
    id: "quan-ly",
    name: "Nhóm quản lý - kinh doanh",
    riasec: ["E", "C", "S"],
    examples: [
      "Quản lý",
      "Kinh doanh vật tư kỹ thuật",
      "Quản trị chuỗi cung ứng",
      "Tư vấn kỹ thuật",
      "Khởi nghiệp công nghệ",
      "Marketing sản phẩm sáng tạo",
      "Quản lý dự án thiết kế",
      "Điều phối sản xuất",
    ],
  },
  {
    id: "nghiep-vu",
    name: "Nhóm nghiệp vụ - vận hành",
    riasec: ["C", "E", "I"],
    examples: [
      "Quản trị hồ sơ",
      "Quản lý chất lượng (QA/QC)",
      "Logistics",
      "Phân tích dữ liệu kỹ thuật",
      "Kiểm toán nội bộ chiến lược",
      "Quản lý dữ liệu doanh nghiệp",
      "Hành chính giáo dục",
      "Điều phối dịch vụ kỹ thuật",
    ],
  },
];

export const MAJOR_GROUP_MAP = Object.fromEntries(MAJOR_GROUPS.map((m) => [m.id, m])) as Record<
  string,
  MajorGroup
>;
