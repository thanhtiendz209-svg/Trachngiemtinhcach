import { MAJOR_GROUPS } from "@/data/majors";
import type { RiasecScores, University, UniversityLocation } from "@/data/types";
import { riasecFitPercent } from "@/lib/riasec";

export const LOCATIONS: Array<"Tất cả" | UniversityLocation> = [
  "Tất cả",
  "Hà Nội",
  "TP.HCM",
  "Đà Nẵng",
  "Khác",
];

export const TUITION_BANDS = ["Tất cả", "Dưới 20 triệu", "20–40 triệu", "40–60 triệu", "Trên 60 triệu"] as const;
export const FIT_BANDS = ["Tất cả", "≥80%", "≥70%", "≥60%"] as const;
export const SCORE_BANDS = ["Tất cả", "Dưới 20", "20–24", "24–27", "Trên 27"] as const;

export type TuitionBand = (typeof TUITION_BANDS)[number];
export type FitBand = (typeof FIT_BANDS)[number];
export type ScoreBand = (typeof SCORE_BANDS)[number];

const vietnameseNames = new Intl.Collator("vi");

function universitySearchText(uni: University) {
  return `${uni.name} ${uni.shortName} ${uni.category} ${uni.location} ${uni.region} ${uni.provinceNew} ${uni.provinceOld} ${uni.majors.join(" ")} ${uni.majorItems.map((m) => m.code).join(" ")}`.toLowerCase();
}

/** Build once for an unchanged dataset, rather than normalizing every keystroke. */
export function createUniversitySearchIndex(universities: readonly University[]): ReadonlyMap<University, string> {
  return new Map(universities.map((uni) => [uni, universitySearchText(uni)]));
}

function hostnameOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}

function hostMatches(host: string, domain: string) {
  return host === domain || host.endsWith(`.${domain}`);
}

const DANANG_HOSTS = ["duytan.edu.vn", "donga.edu.vn", "udn.vn"];
const HCM_HOSTS = [
  "hcmut.edu.vn",
  "hcmus.edu.vn",
  "uit.edu.vn",
  "uel.edu.vn",
  "hcmiu.edu.vn",
  "hcmussh.edu.vn",
  "ueh.edu.vn",
  "tdtu.edu.vn",
  "hcmue.edu.vn",
  "hcmute.edu.vn",
  "iuh.edu.vn",
  "huit.edu.vn",
  "ut.edu.vn",
  "ou.edu.vn",
  "ufm.edu.vn",
  "hub.edu.vn",
  "hcmulaw.edu.vn",
  "uah.edu.vn",
  "hcmuc.edu.vn",
  "ump.edu.vn",
  "pnt.edu.vn",
  "hcmuaf.edu.vn",
  "hcmunre.edu.vn",
  "hutech.edu.vn",
  "uef.edu.vn",
  "hoasen.edu.vn",
  "ntt.edu.vn",
  "vanlanguni.edu.vn",
];
const HANOI_HOSTS = [
  "hust.edu.vn",
  "neu.edu.vn",
  "ftu.edu.vn",
  "tmu.edu.vn",
  "hlu.edu.vn",
  "vnu.edu.vn",
  "huce.edu.vn",
  "hau.edu.vn",
  "tlu.edu.vn",
  "humg.edu.vn",
  "epu.edu.vn",
  "haui.edu.vn",
  "ptit.edu.vn",
  "actvn.edu.vn",
  "hvtc.edu.vn",
  "hvnh.edu.vn",
  "dav.edu.vn",
  "hmu.edu.vn",
  "hup.edu.vn",
  "huph.edu.vn",
  "huc.edu.vn",
  "hou.edu.vn",
  "ulsa.edu.vn",
  "utc.edu.vn",
  "usth.edu.vn",
  "phenikaa-uni.edu.vn",
  "thanglong.edu.vn",
  "cmc-u.edu.vn",
  "dainam.edu.vn",
  "hubt.edu.vn",
];

/** Location from official name + .edu.vn host in 126_truong_TrangChu_va_TrangTuyenSinh.docx. */
export function inferUniversityLocation(name: string, website: string, admissionsUrl = ""): UniversityLocation {
  const n = name.toLowerCase();
  const hosts = [hostnameOf(website), hostnameOf(admissionsUrl)].filter(Boolean);

  if (n.includes("đà nẵng") || hosts.some((h) => DANANG_HOSTS.some((d) => hostMatches(h, d)))) {
    return "Đà Nẵng";
  }
  if (
    n.includes("tp.hcm") ||
    n.includes("hồ chí minh") ||
    hosts.some((h) => HCM_HOSTS.some((d) => hostMatches(h, d)))
  ) {
    return "TP.HCM";
  }
  if (n.includes("hà nội") || hosts.some((h) => HANOI_HOSTS.some((d) => hostMatches(h, d)))) {
    return "Hà Nội";
  }
  return "Khác";
}

export function groupCategoryLabel(id: string) {
  if (id === "thuc-te") return "Kỹ thuật";
  if (id === "nghien-cuu") return "Khoa học";
  if (id === "sang-tao") return "Nghệ thuật";
  if (id === "xa-hoi") return "Sư phạm";
  if (id === "quan-ly") return "Kinh tế";
  if (id === "nghiep-vu") return "Kinh tế";
  return "";
}

export function matchesMajorGroup(uni: University, groupId: string) {
  const group = MAJOR_GROUPS.find((g) => g.id === groupId);
  if (!group) return true;
  if (uni.category === "Đa ngành") return true;
  const overlap = uni.focusRiasec.filter((l) => group.riasec.includes(l)).length;
  return overlap >= 2 || uni.category === groupCategoryLabel(group.id);
}

function tuitionRanges(uni: University): Array<[number, number]> {
  const ranges: Array<[number, number]> = [];
  for (const program of uni.programs) {
    if (program.tuitionMin == null || program.tuitionMax == null) continue;
    ranges.push([program.tuitionMin, program.tuitionMax]);
  }
  if (!ranges.length && uni.tuition?.amount != null) {
    ranges.push([uni.tuition.amount, uni.tuition.amount]);
  }
  return ranges;
}

function tuitionInBand(uni: University, band: TuitionBand) {
  if (band === "Tất cả") return true;
  const ranges = tuitionRanges(uni);
  if (!ranges.length) return false;
  return ranges.some(([min, max]) => {
    if (band === "Dưới 20 triệu") return min < 20;
    if (band === "20–40 triệu") return max >= 20 && min < 40;
    if (band === "40–60 triệu") return max >= 40 && min < 60;
    return max >= 60;
  });
}

function scoreInBand(uni: University, band: ScoreBand) {
  if (band === "Tất cả") return true;
  const values = uni.programs.map((p) => p.thptValue).filter((n): n is number => n != null);
  if (!values.length) return false;
  return values.some((n) => {
    if (band === "Dưới 20") return n < 20;
    if (band === "20–24") return n >= 20 && n < 24;
    if (band === "24–27") return n >= 24 && n <= 27;
    return n > 27;
  });
}

function fitMinValue(band: FitBand) {
  if (band === "≥80%") return 80;
  if (band === "≥70%") return 70;
  if (band === "≥60%") return 60;
  return 0;
}

export interface RankedUniversity {
  uni: University;
  fit: number | null;
  majors: string[];
}

export function rankUniversities(opts: {
  universities: University[];
  searchIndex?: ReadonlyMap<University, string>;
  query: string;
  location: (typeof LOCATIONS)[number];
  region: string;
  provinceNew: string;
  provinceOld: string;
  popularProvinces: string[];
  tuition: TuitionBand;
  fitMin: FitBand;
  groupId: string;
  major: string;
  score: ScoreBand;
  method: string;
  riasec?: RiasecScores | null;
  applyTuition: boolean;
  applyScore: boolean;
  applyMethod: boolean;
}): RankedUniversity[] {
  const query = opts.query.trim().toLowerCase();
  const group = MAJOR_GROUPS.find((g) => g.id === opts.groupId);
  const majorGroup =
    opts.major !== "all"
      ? (MAJOR_GROUPS.find((g) => g.examples.includes(opts.major)) ?? group)
      : group;
  const listed = opts.major !== "all" && opts.universities.some((u) => u.majors.includes(opts.major));

  return opts.universities
    .filter((uni) => {
      if (
        query &&
        !(opts.searchIndex?.get(uni) ?? universitySearchText(uni)).includes(query)
      ) {
        return false;
      }
      if (opts.location !== "Tất cả" && uni.location !== opts.location) return false;
      if (opts.region !== "Tất cả" && uni.region !== opts.region) return false;
      if (opts.provinceNew === "Tỉnh khác") {
        if (opts.popularProvinces.includes(uni.provinceNew)) return false;
      } else if (opts.provinceNew !== "Tất cả" && uni.provinceNew !== opts.provinceNew) {
        return false;
      }
      if (opts.provinceOld !== "Tất cả" && uni.provinceOld !== opts.provinceOld) return false;
      if (listed && !uni.majors.includes(opts.major)) return false;
      if (majorGroup && !matchesMajorGroup(uni, majorGroup.id)) return false;
      if (opts.applyTuition && !tuitionInBand(uni, opts.tuition)) return false;
      if (opts.applyScore && !scoreInBand(uni, opts.score)) return false;
      if (opts.applyMethod && opts.method !== "Tất cả") {
        if (!uni.admissionMethods.includes(opts.method)) return false;
      }
      return true;
    })
    .map((uni) => {
      const profile = majorGroup ? majorGroup.riasec : uni.focusRiasec;
      const fit = opts.riasec
        ? riasecFitPercent(opts.riasec.scores, profile, opts.riasec.maxScores)
        : null;
      const majors =
        opts.major !== "all" && uni.majors.includes(opts.major)
          ? [opts.major, ...uni.majors.filter((name) => name !== opts.major)]
          : uni.majors;
      return { uni, fit, majors };
    })
    .filter(({ fit }) => {
      if (opts.fitMin !== "Tất cả") {
        const min = fitMinValue(opts.fitMin);
        if (fit == null || fit < min) return false;
      }
      return true;
    })
    .sort((a, b) => (b.fit ?? 0) - (a.fit ?? 0) || vietnameseNames.compare(a.uni.name, b.uni.name));
}

export function uniqueAdmissionMethods(universities: University[]) {
  return [...new Set(universities.flatMap((u) => u.admissionMethods))].sort(vietnameseNames.compare);
}

export function universityMajorNames(universities: University[]) {
  return [...new Set(universities.flatMap((u) => u.majors))].sort(vietnameseNames.compare);
}

export function admissionHrefs(text: string) {
  return (text.match(/https?:\/\/[^\s,;]+/g) ?? []).map((href) => href.replace(/[).,;]+$/, ""));
}

