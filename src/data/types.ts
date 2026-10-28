export type PersonalityGroup = "analyst" | "creative" | "social" | "organizer";

export interface PersonalityType {
  id: string;
  name: string;
  slogan: string;
  summary: string;
  description: string;
  group: PersonalityGroup;
  image?: string;
  highlights: string[];
  thinking: string;
  interacting: string;
  deciding: string;
  learning: string;
  strengths: string[];
  improvements: string[];
  careers: string[];
  environment: string;
  note: string;
}

export type QuizKind = "mbti" | "riasec" | "bigfive" | "interest" | "combined";

export interface QuizMeta {
  id: string;
  kind: QuizKind;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  questionCount: number;
  icon: "compass" | "layers" | "spark" | "heart" | "map";
  image: string;
}

export interface QuestionOption {
  label: string;
  scores: Record<string, number>;
}

export interface Question {
  id: string;
  text: string;
  hint?: string;
  options: QuestionOption[];
}

export interface CareerField {
  id: string;
  name: string;
  description: string;
  riasec: string[];
  types: string[];
  icon:
    | "cpu"
    | "pen"
    | "megaphone"
    | "coins"
    | "wrench"
    | "graduation"
    | "heartPulse"
    | "truck"
    | "building"
    | "flask";
  roles: string[];
  skills: string[];
  study: string;
  environment: string;
  note: string;
}

export interface RiasecScores {
  code: string;
  scores: Record<string, number>;
  maxScores?: Record<string, number>;
}

export interface QuizResult {
  quizId: string;
  kind: QuizKind;
  completedAt: string;
  mbti?: string;
  axes?: {
    energy: number;
    sensing: number;
    thinking: number;
    judging: number;
  };
  riasec?: RiasecScores;
  bigfive?: Record<string, number>;
  answers: number[];
}

export interface QuizProgress {
  quizId: string;
  index: number;
  answers: number[];
  updatedAt: string;
}

export interface RiasecType {
  id: string;
  name: string;
  slogan: string;
  summary: string;
  description: string;
  image: string;
  highlights: string[];
  thinking: string;
  interacting: string;
  deciding: string;
  learning: string;
  strengths: string[];
  improvements: string[];
  careers: string[];
  environment: string;
  note: string;
}

export interface RiasecCombination {
  code: string;
  title: string;
  quote: string;
  overview: string;
  strengths: string[];
  improvements: string[];
  careers: string[];
  advice: string;
  source: "batch" | "fallback";
}

export type UniversityLocation = "Hà Nội" | "TP.HCM" | "Đà Nẵng" | "Khác";

export interface UniversityTuition {
  year: number | null;
  amount?: number;
  note: string;
}

export interface UniversityAdmissionScore {
  year: number | null;
  score: string;
  method?: string;
}

/** One major row from 126_truong_DAY_DU_2026_cau_truc_moi.docx. Strings are copied, not estimated. */
export interface UniversityProgram {
  name: string;
  thpt: string;
  thptValue: number | null;
  thptYear: number | null;
  dgnl: string;
  exam: string;
  conversion: string;
  tuitionNote: string;
  tuitionMin: number | null;
  tuitionMax: number | null;
}

export interface UniversityMajor {
  code: string;
  name: string;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  location: UniversityLocation;
  region: string;
  provinceNew: string;
  provinceOld: string;
  logo: string;
  website: string;
  admissionsUrl: string;
  /** Nguyên văn ô tuyển sinh trong file, kể cả câu chưa phải địa chỉ web. */
  admissionsText: string;
  category: string;
  focusRiasec: string[];
  majors: string[];
  majorItems: UniversityMajor[];
  /** true khi file ghi danh sách tiêu biểu, không phải toàn bộ ngành. */
  representative: boolean;
  dataNote: string;
  programs: UniversityProgram[];
  tuition: UniversityTuition | null;
  admissionScores: UniversityAdmissionScore[];
  admissionMethods: string[];
  lastUpdated: string | null;
}

export interface MajorGroup {
  id: string;
  name: string;
  riasec: string[];
  examples: string[];
}
