import { RIASEC_COMBINATION_MAP } from "@/data/riasec-combinations";
import { RIASEC_MAP } from "@/data/riasec";
import type { RiasecCombination } from "@/data/types";
import { RIASEC_KEYS, type RiasecKey } from "./riasec";

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


