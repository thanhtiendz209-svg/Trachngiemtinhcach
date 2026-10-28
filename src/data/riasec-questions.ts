/** Official 60-item RIASEC inventory from Bo_60_cau_trac_nghiem_RIASEC-1.docx.
 *
 * Scoring key follows the Word distribution table (not the "10 câu / nhóm" prose).
 * Known contradiction in the source table:
 *   A lists 9 item ids, C lists 11, while the prose says 10 each.
 *   Every item 1–60 appears exactly once. We do not reassign items.
 */
import type { Question } from "./types";

export const RIASEC_LIKERT_LABELS = [
  "Hoàn toàn không thích",
  "Không thích",
  "Phân vân / Bình thường",
  "Khá thích",
  "Rất thích",
] as const;

export const RIASEC_LIKERT: Question["options"] = RIASEC_LIKERT_LABELS.map((label, i) => ({
  label,
  scores: {},
}));

export const RIASEC_ITEM_GROUP: Record<number, "R" | "I" | "A" | "S" | "E" | "C"> = {
  1: "R", 2: "S", 3: "C", 4: "E", 5: "I", 6: "A", 7: "C", 8: "R", 9: "E", 10: "I", 11: "S", 12: "A", 13: "R", 14: "C", 15: "I", 16: "E", 17: "A", 18: "S", 19: "C", 20: "R", 21: "I", 22: "A", 23: "S", 24: "E", 25: "C", 26: "R", 27: "I", 28: "A", 29: "E", 30: "S", 31: "C", 32: "I", 33: "R", 34: "S", 35: "E", 36: "A", 37: "C", 38: "R", 39: "I", 40: "E", 41: "S", 42: "A", 43: "C", 44: "R", 45: "I", 46: "S", 47: "E", 48: "A", 49: "C", 50: "R", 51: "I", 52: "A", 53: "S", 54: "E", 55: "C", 56: "R", 57: "I", 58: "S", 59: "E", 60: "C"
};

export const RIASEC_GROUP_ITEMS = {
  R: [1, 8, 13, 20, 26, 33, 38, 44, 50, 56],
  I: [5, 10, 15, 21, 27, 32, 39, 45, 51, 57],
  A: [6, 12, 17, 22, 28, 36, 42, 48, 52],
  S: [2, 11, 18, 23, 30, 34, 41, 46, 53, 58],
  E: [4, 9, 16, 24, 29, 35, 40, 47, 54, 59],
  C: [3, 7, 14, 19, 25, 31, 37, 43, 49, 55, 60],
} as const;

export const RIASEC_GROUP_MAX: Record<"R" | "I" | "A" | "S" | "E" | "C", number> = {
  R: 50,
  I: 50,
  A: 45,
  S: 50,
  E: 50,
  C: 55,
};

export interface RiasecQuestion extends Question {
  group: "R" | "I" | "A" | "S" | "E" | "C";
}

export const RIASEC_QUESTIONS: RiasecQuestion[] = [
  {
    id: "r1",
    text: "Tôi thích tự tay lắp ráp hoặc tháo một thiết bị để xem nó hoạt động như thế nào.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r2",
    text: "Tôi thích giúp một bạn trong lớp hiểu một bài mà bạn ấy đang gặp khó khăn.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r3",
    text: "Tôi thích sắp xếp tài liệu, ghi chú hoặc tệp máy tính theo từng nhóm rõ ràng.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r4",
    text: "Tôi thích đứng ra phân công công việc khi nhóm thực hiện một dự án.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r5",
    text: "Tôi thích tìm hiểu nguyên nhân đằng sau một hiện tượng mà mình chưa hiểu.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r6",
    text: "Tôi thích nghĩ ra cách trình bày mới lạ cho một bài thuyết trình hoặc sản phẩm học tập.",
    group: "A" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r7",
    text: "Tôi cảm thấy thoải mái khi làm một công việc có hướng dẫn và quy trình rõ ràng.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r8",
    text: "Tôi thích thực hành với các dụng cụ, mô hình hoặc thiết bị hơn là chỉ đọc lý thuyết.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r9",
    text: "Tôi thích thuyết phục người khác ủng hộ một ý tưởng mà tôi tin là tốt.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r10",
    text: "Tôi thích giải những câu hỏi cần suy luận để tìm ra quy luật hoặc cách giải.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r11",
    text: "Tôi thường chủ động lắng nghe khi bạn bè muốn chia sẻ một vấn đề.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r12",
    text: "Tôi thích viết, vẽ, thiết kế, chụp ảnh hoặc tạo nội dung theo ý tưởng riêng.",
    group: "A" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r13",
    text: "Tôi thích tìm cách sửa một đồ vật hoặc thiết bị khi nó bị hỏng.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r14",
    text: "Tôi có thói quen kiểm tra lại bài làm để phát hiện lỗi trước khi nộp.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r15",
    text: "Tôi thích đọc hoặc xem tài liệu để tìm hiểu sâu hơn về một chủ đề mình tò mò.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r16",
    text: "Tôi hứng thú với việc lên kế hoạch và tổ chức một hoạt động cho lớp hoặc trường.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r17",
    text: "Tôi không ngại thử một cách làm khác nếu cách đó giúp sản phẩm trở nên độc đáo hơn.",
    group: "A" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r18",
    text: "Tôi thích hướng dẫn một người khác cách thực hiện một nhiệm vụ.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r19",
    text: "Tôi thích làm việc với bảng biểu, danh sách, số liệu hoặc thông tin được sắp xếp.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r20",
    text: "Tôi thích những hoạt động tạo ra một sản phẩm hoặc kết quả có thể nhìn thấy rõ ràng.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r21",
    text: "Khi gặp một vấn đề khó, tôi muốn tìm hiểu nguyên nhân trước khi đưa ra kết luận.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r22",
    text: "Tôi thích những bài tập cho phép mình tự do lựa chọn cách thể hiện.",
    group: "A" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r23",
    text: "Tôi thích làm việc nhóm khi công việc đòi hỏi mọi người trao đổi và hỗ trợ nhau.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r24",
    text: "Tôi thấy hứng thú khi đặt ra mục tiêu và tìm cách đạt được mục tiêu đó.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r25",
    text: "Tôi thích lập danh sách việc cần làm để không bỏ sót nhiệm vụ.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r26",
    text: "Tôi thích quan sát cách máy móc, phương tiện hoặc hệ thống kỹ thuật vận hành.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r27",
    text: "Tôi thích phân tích nhiều thông tin khác nhau để tìm ra câu trả lời hợp lý nhất.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r28",
    text: "Tôi thường chú ý đến màu sắc, bố cục, hình ảnh hoặc cách trình bày của một sản phẩm.",
    group: "A" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r29",
    text: "Tôi thích tham gia các hoạt động bán hàng, gây quỹ hoặc quảng bá sản phẩm/sự kiện.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r30",
    text: "Tôi thích làm những việc có thể mang lại lợi ích trực tiếp cho người khác.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r31",
    text: "Tôi thích hoàn thành công việc đúng thời hạn và đúng yêu cầu đã đề ra.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r32",
    text: "Tôi thích thử nghiệm một cách làm mới để xem kết quả có thay đổi không.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r33",
    text: "Tôi thích các hoạt động thực hành như làm mô hình, thí nghiệm hoặc sử dụng thiết bị.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r34",
    text: "Tôi cảm thấy vui khi được bạn bè tin tưởng nhờ mình tư vấn hoặc hỗ trợ.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r35",
    text: "Tôi khá thoải mái khi phát biểu trước nhiều người để trình bày quan điểm của mình.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r36",
    text: "Tôi thích biến một ý tưởng trong đầu thành một sản phẩm cụ thể như poster, video, bài viết hoặc thiết kế.",
    group: "A" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r37",
    text: "Tôi thường để ý những chi tiết nhỏ mà người khác có thể bỏ qua.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r38",
    text: "Tôi thích công việc mà kết quả phụ thuộc nhiều vào kỹ năng thực hành của bản thân.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r39",
    text: "Tôi thích những môn học hoặc hoạt động khiến mình phải đặt câu hỏi và tự tìm lời giải.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r40",
    text: "Tôi thích tìm hiểu cách một doanh nghiệp thu hút khách hàng và tạo ra lợi nhuận.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r41",
    text: "Tôi thích giải thích một vấn đề bằng cách dễ hiểu để người khác có thể làm theo.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r42",
    text: "Tôi thích làm việc trong môi trường cho phép mình tự do đưa ra ý tưởng.",
    group: "A" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r43",
    text: "Tôi thích sử dụng lịch, thời khóa biểu hoặc kế hoạch để quản lý công việc.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r44",
    text: "Tôi thích tìm hiểu cách vận hành của các phương tiện như xe máy, ô tô, máy móc hoặc robot.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r45",
    text: "Tôi thích so sánh dữ liệu hoặc các khả năng khác nhau trước khi quyết định.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r46",
    text: "Tôi thích tham gia các hoạt động mà mình có cơ hội gặp gỡ và làm việc với nhiều người.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r47",
    text: "Tôi thích nhận trách nhiệm điều phối một nhóm khi mọi người cần một người đứng ra tổ chức.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r48",
    text: "Tôi thích tìm cảm hứng từ âm nhạc, phim ảnh, nghệ thuật, thời trang hoặc những ý tưởng mới.",
    group: "A" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r49",
    text: "Tôi thích những công việc yêu cầu sự chính xác và nhất quán.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r50",
    text: "Tôi thích học một kỹ năng mới bằng cách trực tiếp làm thử thay vì chỉ nghe hướng dẫn.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r51",
    text: "Tôi thường muốn biết bằng chứng hoặc lý do trước khi tin vào một kết luận.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r52",
    text: "Tôi thích sáng tạo cách kể chuyện hoặc truyền tải thông điệp để thu hút người xem.",
    group: "A" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r53",
    text: "Tôi muốn công việc tương lai của mình có nhiều cơ hội giao tiếp và hợp tác với người khác.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r54",
    text: "Tôi thích đặt mục tiêu cho bản thân và cạnh tranh một cách tích cực để tiến bộ.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r55",
    text: "Tôi thích rà soát thông tin để đảm bảo không có sai sót trước khi hoàn thành công việc.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r56",
    text: "Tôi thích những công việc đòi hỏi sự khéo léo khi sử dụng dụng cụ hoặc thiết bị.",
    group: "R" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r57",
    text: "Tôi thích tìm hiểu một vấn đề từ nhiều góc độ trước khi đưa ra quyết định.",
    group: "I" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r58",
    text: "Tôi cảm thấy có ý nghĩa khi công việc của mình giúp người khác tiến bộ hoặc giải quyết khó khăn.",
    group: "S" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r59",
    text: "Tôi thích nghĩ cách biến một ý tưởng thành một kế hoạch có thể thực hiện được.",
    group: "E" as const,
    options: RIASEC_LIKERT,
  },
  {
    id: "r60",
    text: "Tôi thích duy trì mọi thứ ngăn nắp để có thể nhanh chóng tìm thấy thứ mình cần.",
    group: "C" as const,
    options: RIASEC_LIKERT,
  },
];

export function withRiasecScores(questions: RiasecQuestion[]): Question[] {
  return questions.map((q) => ({
    ...q,
    options: RIASEC_LIKERT_LABELS.map((label, i) => ({
      label,
      scores: { [q.group]: i + 1 },
    })),
  }));
}
