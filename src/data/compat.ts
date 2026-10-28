export const COMPATIBLE: Record<string, string[]> = {
  INTJ: ["ENFP", "ENTP", "INFJ"],
  INTP: ["ENTJ", "ENFJ", "INTJ"],
  ENTJ: ["INTP", "INFP", "ENTP"],
  ENTP: ["INFJ", "INTJ", "ENFP"],
  INFJ: ["ENTP", "ENFP", "INTJ"],
  INFP: ["ENFJ", "ENTJ", "ENFP"],
  ENFJ: ["INFP", "ISFP", "INFJ"],
  ENFP: ["INTJ", "INFJ", "ENTP"],
  ISTJ: ["ESFP", "ESTP", "ISFJ"],
  ISFJ: ["ESFP", "ESTP", "ISTJ"],
  ESTJ: ["ISTP", "ISFP", "ISTJ"],
  ESFJ: ["ISFP", "ISTP", "ISFJ"],
  ISTP: ["ESTJ", "ESFJ", "ESTP"],
  ISFP: ["ENFJ", "ESFJ", "INFP"],
  ESTP: ["ISFJ", "ISTJ", "ISTP"],
  ESFP: ["ISFJ", "ISTJ", "ESFJ"],
};

export function compatibleIds(typeId: string) {
  return COMPATIBLE[typeId.toUpperCase()] ?? [];
}
