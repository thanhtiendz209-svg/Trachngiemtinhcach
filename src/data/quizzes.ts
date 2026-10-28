import { questionsFor } from "./questions";
import type { QuizMeta } from "./types";

export const QUIZZES: QuizMeta[] = [
  {
    id: "riasec",
    kind: "riasec",
    name: "RIASEC",
    tagline: "Sở thích nghề theo 6 nhóm Holland",
    description:
      "Khám phá bạn bị cuốn bởi kiểu việc nào: thao tác, nghiên cứu, sáng tạo, hỗ trợ người, dẫn dắt hay vận hành hệ thống.",
    duration: "10–15 phút",
    questionCount: questionsFor("riasec").length,
    icon: "compass",
    image: "/illustrations/quiz-riasec.webp",
  },
  {
    id: "bigfive",
    kind: "bigfive",
    name: "Big Five",
    tagline: "Năm chiều tính cách cốt lõi",
    description:
      "Một bức tranh cân bằng về mức độ cởi mở, tận tâm, hướng ngoại, hòa hợp và ổn định cảm xúc — để hiểu cách bạn vận hành hằng ngày.",
    duration: "7–9 phút",
    questionCount: questionsFor("bigfive").length,
    icon: "layers",
    image: "/illustrations/quiz-bigfive.webp",
  },
  {
    id: "mbti",
    kind: "mbti",
    name: "MBTI",
    tagline: "16 nhóm tính cách",
    description:
      "Tìm nhóm gần với cách bạn nạp năng lượng, tiếp nhận thông tin, ra quyết định và sắp xếp đời sống. Kết quả mang tính tham khảo.",
    duration: "10–12 phút",
    questionCount: questionsFor("mbti").length,
    icon: "spark",
    image: "/illustrations/quiz-mbti.webp",
  },
  {
    id: "interest",
    kind: "interest",
    name: "Sở thích nghề nghiệp",
    tagline: "Việc nào làm bạn thấy sống",
    description:
      "Không hỏi bạn ‘giỏi gì’, mà hỏi bạn muốn chạm vào loại việc nào. Dùng làm gợi ý hướng đi, không phải lời kết.",
    duration: "6–8 phút",
    questionCount: questionsFor("interest").length,
    icon: "heart",
    image: "/illustrations/quiz-interest.webp",
  },
  {
    id: "combined",
    kind: "combined",
    name: "Hồ sơ hướng nghiệp tổng hợp",
    tagline: "Tính cách + sở thích trong một lần",
    description:
      "Phiên bản rút gọn kết hợp xu hướng tính cách và sở thích nghề, cho một hồ sơ tổng quan để bắt đầu khám phá.",
    duration: "8–10 phút",
    questionCount: questionsFor("combined").length,
    icon: "map",
    image: "/illustrations/quiz-combined.webp",
  },
];

export function getQuiz(id: string) {
  return QUIZZES.find((q) => q.id === id);
}
