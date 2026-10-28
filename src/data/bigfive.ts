export interface BigFiveTrait {
  id: string;
  name: string;
  axis: string;
  low: string;
  mid: string;
  high: string;
  note: string;
}

export const BIGFIVE_TRAITS: BigFiveTrait[] = [
  {
    id: "O",
    name: "Cởi mở với trải nghiệm",
    axis: "Quen thuộc ← → Khám phá",
    low: "Bạn ổn với thói quen, thích cái đã kiểm chứng, ít bị cuốn bởi ý lạ chỉ vì nó lạ.",
    mid: "Bạn mở khi việc cần, và giữ nếp khi nếp đang chạy tốt.",
    high: "Bạn sống với ý mới, góc lạ, nghệ thuật và câu hỏi ‘còn cách nào khác’.",
    note: "Cởi mở nuôi sáng tạo. Quen thuộc nuôi độ sâu. Cả hai đều dùng được.",
  },
  {
    id: "C",
    name: "Tận tâm",
    axis: "Linh hoạt ← → Kỷ luật",
    low: "Bạn bắt đầu nhiều, đổi hướng khi hết hứng, ghét khung cứng.",
    mid: "Bạn có nếp vừa đủ: hạn quan trọng thì giữ, việc nhỏ thì linh.",
    high: "Bạn lên kế hoạch, giữ lời, thích thấy tiến độ được tick.",
    note: "Tận tâm giúp việc về đích. Đừng để checklist át mất việc đúng.",
  },
  {
    id: "E",
    name: "Hướng ngoại",
    axis: "Nội tâm ← → Bùng nở",
    low: "Bạn đầy pin khi yên. Gặp nhiều người cần được bù bằng im lặng.",
    mid: "Bạn vào được phòng đông và cũng cần buổi tối không ai gọi.",
    high: "Bạn lấy năng lượng từ người, chuyện, nhịp chung.",
    note: "Không có cực nào ‘xã hội hơn’. Chỉ khác chỗ lấy pin.",
  },
  {
    id: "A",
    name: "Hòa hợp",
    axis: "Thẳng ← → Mềm",
    low: "Bạn nói thẳng, giữ chuẩn, có thể bị thấy là cứng — miễn việc đúng.",
    mid: "Bạn mềm khi quan hệ cần, và thẳng khi việc cần.",
    high: "Bạn để ý cảm xúc người khác, sẵn nhường một phần ý để giữ khí phòng.",
    note: "Hòa hợp giữ người. Sự thẳng giữ việc. Biết lúc nào dùng cái nào.",
  },
  {
    id: "N",
    name: "Nhạy cảm xúc",
    axis: "Ổn định ← → Nhạy",
    low: "Bạn giữ được đầu khi áp lực tăng, tâm trạng ít bị kéo mạnh.",
    mid: "Có ngày sóng, có ngày phẳng. Bạn lấy lại được nếu được thở.",
    high: "Bạn cảm sớm, lo trước, cần thời gian để nhịp trở lại.",
    note: "Nhạy không phải yếu. Đó là radar — chỉ cần nơi hạ cánh.",
  },
];

export const BIGFIVE_MAP = Object.fromEntries(BIGFIVE_TRAITS.map((t) => [t.id, t]));

export function bigfiveBand(score: number) {
  if (score >= 67) return "high" as const;
  if (score <= 33) return "low" as const;
  return "mid" as const;
}

export function bigfiveCopy(id: string, score: number) {
  const t = BIGFIVE_MAP[id];
  if (!t) return "";
  const band = bigfiveBand(score);
  return t[band];
}
