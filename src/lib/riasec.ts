import { RIASEC_GROUP_MAX } from "@/data/riasec-questions";
import { RIASEC_COMBINATION_MAP } from "@/data/riasec-combinations";
import { RIASEC_MAP, RIASEC_TYPES } from "@/data/riasec";
import type { RiasecCombination, RiasecScores } from "@/data/types";

export const RIASEC_KEYS = ["R", "I", "A", "S", "E", "C"] as const;
export type RiasecKey = (typeof RIASEC_KEYS)[number];

export const MISSING_DATA = "Chưa có dữ liệu";

export const RIASEC_DISCLAIMER =
  "Kết quả RIASEC phản ánh xu hướng sở thích nghề nghiệp, không phải thước đo trực tiếp về năng lực, điểm số hay thu nhập tương lai.";

export const UNIVERSITY_DISCLAIMER =
  "Gợi ý trường/ngành dựa trên mức độ tương đồng về sở thích RIASEC. Điểm chuẩn, học phí và phương thức tuyển sinh được tham khảo theo từng năm.";

export const FIT_NOTE = "Chỉ số tham khảo dựa trên RIASEC, không phải xác suất trúng tuyển.";

/** Tie-break: higher score first, then canonical Holland order R-I-A-S-E-C. */
export function rankRiasec(scores: Record<string, number>): RiasecKey[] {
  return [...RIASEC_KEYS].sort((a, b) => {
    const diff = (scores[b] ?? 0) - (scores[a] ?? 0);
    if (diff !== 0) return diff;
    return RIASEC_KEYS.indexOf(a) - RIASEC_KEYS.indexOf(b);
  });
}

export function riasecFromScores(
  scores: Record<string, number>,
  prefixed = false,
  maxScores: Record<string, number> = RIASEC_GROUP_MAX,
): RiasecScores {
  const mapped: Record<string, number> = {};
  for (const k of RIASEC_KEYS) {
    mapped[k] = prefixed ? (scores[`r${k}`] ?? 0) : (scores[k] ?? 0);
  }
  const ordered = rankRiasec(mapped);
  return {
    code: ordered.slice(0, 3).join(""),
    scores: mapped,
    maxScores: { ...maxScores },
  };
}

export function riasecFitPercent(
  userScores: Record<string, number> | undefined,
  profile: string[],
  maxScores: Record<string, number> = RIASEC_GROUP_MAX,
): number {
  if (!userScores || profile.length === 0) return 0;
  const u = RIASEC_KEYS.map((k) => (userScores[k] ?? 0) / Math.max(1, maxScores[k] ?? 50));
  const weights = [3, 2, 1, 0.4, 0.4, 0.4];
  const p = RIASEC_KEYS.map((k) => {
    const i = profile.indexOf(k);
    return i >= 0 ? (weights[i] ?? 1) : 0.15;
  });
  const dot = u.reduce((s, x, i) => s + x * p[i], 0);
  const nu = Math.sqrt(u.reduce((s, x) => s + x * x, 0));
  const np = Math.sqrt(p.reduce((s, x) => s + x * x, 0));
  if (nu === 0 || np === 0) return 0;
  return Math.round(Math.min(96, Math.max(8, (dot / (nu * np)) * 100)));
}

export function getRiasecCombination(code: string): RiasecCombination {
  const hit = RIASEC_COMBINATION_MAP[code.toUpperCase()];
  if (hit) return hit;
  return fallbackCombination(code.toUpperCase());
}

function fallbackCombination(code: string): RiasecCombination {
  const letters = code.split("").filter((c): c is RiasecKey => RIASEC_KEYS.includes(c as RiasecKey));
  const names = letters.map((l) => RIASEC_MAP[l]?.name ?? l);
  const summaries = letters.map((l) => RIASEC_MAP[l]?.summary ?? "");
  const title = names.length ? `Người ${names.join(", ").toLowerCase()}` : `Mã ${code}`;
  return {
    code,
    title,
    quote: letters.map((l) => RIASEC_MAP[l]?.slogan ?? l).join(" · "),
    overview: `Nội dung riêng cho mã ${code} chưa có trong tài liệu tổ hợp. Đây là phần fallback dựa trên ba nhóm ${letters.join("–")}: ${summaries.filter(Boolean).join(" ")}`,
    strengths: letters.flatMap((l) => (RIASEC_MAP[l]?.strengths ?? []).slice(0, 2)),
    improvements: letters.flatMap((l) => (RIASEC_MAP[l]?.improvements ?? []).slice(0, 2)),
    careers: letters.flatMap((l) => RIASEC_MAP[l]?.careers ?? []).slice(0, 8),
    advice:
      "Hãy đọc ba nhóm thành phần bên dưới như gợi ý sở thích, rồi đối chiếu với năng lực học tập và điều kiện thực tế. Nội dung tổ hợp đầy đủ có thể được bổ sung sau.",
    source: "fallback",
  };
}

export function letterLabel(id: string) {
  return RIASEC_TYPES.find((t) => t.id === id);
}
