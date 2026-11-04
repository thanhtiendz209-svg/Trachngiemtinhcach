import { RIASEC_COMBINATION_MAP } from "../data/riasec-combinations.ts";
import { RIASEC_TYPES } from "../data/riasec.ts";
import type { RiasecCombination } from "../data/types.ts";

/** Holland order is intentional: ordered profiles are not unordered letter sets. */
const LETTERS = ["R", "I", "A", "S", "E", "C"] as const;

export const RIASEC_PROFILE_CODES: string[] = LETTERS.flatMap((first) =>
  LETTERS.filter((second) => second !== first).flatMap((second) =>
    LETTERS.filter((third) => third !== first && third !== second).map((third) => `${first}${second}${third}`),
  ),
);

/** Strict route/search lookup: invalid input never produces a synthetic profile. */
export function findRiasecProfile(code: unknown): RiasecCombination | undefined {
  if (typeof code !== "string") return undefined;
  const normalized = code.trim().toUpperCase();
  if (!/^[RIASEC]{3}$/u.test(normalized) || new Set(normalized).size !== 3) return undefined;
  return Object.hasOwn(RIASEC_COMBINATION_MAP, normalized) ? RIASEC_COMBINATION_MAP[normalized] : undefined;
}

export const RIASEC_PROFILES: RiasecCombination[] = RIASEC_PROFILE_CODES.map((code) => {
  const profile = findRiasecProfile(code);
  if (!profile) throw new Error(`Missing ordered RIASEC profile: ${code}`);
  return profile;
});

function searchable(value: string): string {
  return value.normalize("NFD").replace(/\p{M}+/gu, "").toLowerCase().replace(/đ/gu, "d")
    .replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

const groupNames = new Map(RIASEC_TYPES.map((group) => [group.id, group.name]));
const searchIndex = new Map(RIASEC_PROFILES.map((profile) => [profile.code, searchable([
  profile.code,
  profile.title,
  ...profile.code.split("").map((letter) => groupNames.get(letter) ?? letter),
  ...profile.careers,
].join(" "))]));

/** Search Vietnamese labels with or without accents while preserving Holland order. */
export function filterRiasecProfiles(query: string, primary = "all"): RiasecCombination[] {
  const first = primary.trim().toUpperCase();
  if (first !== "ALL" && !LETTERS.some((letter) => letter === first)) return [];
  const exactCode = findRiasecProfile(query);
  if (exactCode) return first === "ALL" || exactCode.code[0] === first ? [exactCode] : [];
  const search = searchable(query);
  return RIASEC_PROFILES.filter((profile) =>
    (first === "ALL" || profile.code[0] === first) &&
    (!search || searchIndex.get(profile.code)!.includes(search)),
  );
}
