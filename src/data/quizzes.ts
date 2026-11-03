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
];

export function getQuiz(id: string) {
  return QUIZZES.find((q) => q.id === id);
}
