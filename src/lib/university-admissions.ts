import type { UniversityAdmissionsDocument } from "@/data/university-admissions-types";

// Keep recent details ready without retaining all 126 schools in browser memory.
const MAX_CACHED_SCHOOLS = 8;
const documents = new Map<string, UniversityAdmissionsDocument>();
const requests = new Map<string, Promise<UniversityAdmissionsDocument>>();

function isDocument(value: unknown, schoolId: string): value is UniversityAdmissionsDocument {
  if (!value || typeof value !== "object") return false;
  const document = value as Partial<UniversityAdmissionsDocument>;
  return document.version === 1 && document.schoolId === schoolId &&
    Array.isArray(document.programs) && Array.isArray(document.sources) &&
    Array.isArray(document.estimates?.headers) && Array.isArray(document.estimates?.rows) &&
    Array.isArray(document.assumptions?.headers) && Array.isArray(document.assumptions?.rows) &&
    Array.isArray(document.verification?.headers) && Array.isArray(document.verification?.rows);
}

/** Called only after a visitor opens a school's admissions details. */
export function loadUniversityAdmissions(schoolId: string): Promise<UniversityAdmissionsDocument> {
  if (!/^uni-\d+$/.test(schoolId)) {
    return Promise.reject(new Error("Không xác định được trường cần xem."));
  }
  const cached = documents.get(schoolId);
  if (cached) {
    documents.delete(schoolId);
    documents.set(schoolId, cached);
    return Promise.resolve(cached);
  }
  const pending = requests.get(schoolId);
  if (pending) return pending;

  const request = fetch(`/admissions/2026/${encodeURIComponent(schoolId)}.json`, {
    headers: { Accept: "application/json" },
    credentials: "same-origin",
  }).then(async (response) => {
    if (!response.ok) throw new Error("Chưa tải được dữ liệu tuyển sinh. Bạn có thể thử lại.");
    let document: unknown;
    try {
      document = await response.json();
    } catch {
      throw new Error("Dữ liệu tuyển sinh chưa sẵn sàng. Bạn có thể thử lại.");
    }
    if (!isDocument(document, schoolId)) throw new Error("Dữ liệu tuyển sinh chưa sẵn sàng. Bạn có thể thử lại.");
    documents.set(schoolId, document);
    if (documents.size > MAX_CACHED_SCHOOLS) {
      const oldest = documents.keys().next().value;
      if (oldest !== undefined) documents.delete(oldest);
    }
    return document;
  }).finally(() => requests.delete(schoolId));

  requests.set(schoolId, request);
  return request;
}
