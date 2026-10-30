import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { registerHooks } from "node:module";
import type { University } from "@/data/types";

// Match the application's @/ aliases while using Node's native TypeScript runner.
const aliases = registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(new URL(`../${specifier.slice(2)}.ts`, import.meta.url).href, context);
    }
    return nextResolve(specifier, context);
  },
});
const { rankUniversities, createUniversitySearchIndex } = await import("./university.ts");
const { UNIVERSITIES } = await import("../data/universities.ts");
aliases.deregister();

type RankOptions = Parameters<typeof rankUniversities>[0];
type Baseline = {
  name: string;
  options: Partial<Omit<RankOptions, "universities">>;
  count: number;
  firstIds: string[];
  digest: string;
};

// Frozen from the original, pre-optimization ranking oracle against the 2026
// dataset. For the oracle only, published THPT summary values were projected
// into legacy program scores. Digests cover every ordered id, fit and major.
const baselines: Baseline[] = [
  {"name":"all schools","options":{},"count":126,"firstIds":["uni-001","uni-024","uni-016"],"digest":"6f82aa7687b5837c87961dfca47d87f7309eb5d5897312d8eca750ff91a68796"},
  {"name":"accented search","options":{"query":"  HÀ NỘI  "},"count":51,"firstIds":["uni-001","uni-024","uni-016"],"digest":"89883f7b80171fe6657fe524fb0924a0e86b6b835cc973d2cf7266513d5225b0"},
  {"name":"unaccented search","options":{"query":"ha noi"},"count":0,"firstIds":[],"digest":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
  {"name":"abbreviation search","options":{"query":"HUST"},"count":1,"firstIds":["uni-001"],"digest":"102ba1b342d7318b3ddbcf65951e1309522006c0d48d1a5ae3af768c9656c9b5"},
  {"name":"major code search","options":{"query":"7480201"},"count":54,"firstIds":["uni-016","uni-044","uni-002"],"digest":"05ab0b374c6c1edca07a5347b8edfc92318c94cce7bd05e85708e9ee6fe14c73"},
  {"name":"major name search","options":{"query":"Công nghệ thông tin"},"count":61,"firstIds":["uni-001","uni-016","uni-044"],"digest":"ff8aab45c3ef1b18cdb6f9b5df05fc4aa3dd3267b356aa922749da71ae58974e"},
  {"name":"no matches","options":{"query":"không tồn tại abcxyz"},"count":0,"firstIds":[],"digest":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
  {"name":"north region","options":{"region":"Miền Bắc"},"count":63,"firstIds":["uni-001","uni-024","uni-016"],"digest":"c9abbaa181cd0e6a6be2818689e6f785667dc3a48b6adb4df1278bfa5e6c6518"},
  {"name":"central region","options":{"region":"Miền Trung"},"count":24,"firstIds":["uni-107","uni-061","uni-048"],"digest":"c7573e7bddc9f695326bbb89cb555388e779b4316f4fa65fcaabd86d7246d5a3"},
  {"name":"south region","options":{"region":"Miền Nam"},"count":37,"firstIds":["uni-074","uni-084","uni-088"],"digest":"9eb9f75252954314fe5346acc434f1140b8d784c421b3a8bf748c947ce62da47"},
  {"name":"new province","options":{"provinceNew":"Hà Nội"},"count":51,"firstIds":["uni-001","uni-024","uni-016"],"digest":"89883f7b80171fe6657fe524fb0924a0e86b6b835cc973d2cf7266513d5225b0"},
  {"name":"old province","options":{"provinceOld":"Bình Dương"},"count":3,"firstIds":["uni-099","uni-098","uni-114"],"digest":"c17f57017b9652cfd61e68e305637b8526a3af3721068ca2bfe79adf56cb8593"},
  {"name":"other provinces","options":{"provinceNew":"Tỉnh khác"},"count":13,"firstIds":["uni-126","uni-100","uni-108"],"digest":"3f255fd9081783f7f9c4a35f122b1c9abd304b6368b13520904abe037d06ae4a"},
  {"name":"location","options":{"location":"TP.HCM"},"count":34,"firstIds":["uni-074","uni-084","uni-088"],"digest":"2f31bde61ec7bbe30e3ebaaa53f2ea06e58ba0bd217efe620bc8b1de96473cea"},
  {"name":"combined location filters","options":{"region":"Miền Nam","provinceNew":"TP. Hồ Chí Minh"},"count":34,"firstIds":["uni-074","uni-084","uni-088"],"digest":"2f31bde61ec7bbe30e3ebaaa53f2ea06e58ba0bd217efe620bc8b1de96473cea"},
  {"name":"major group thuc-te","options":{"groupId":"thuc-te"},"count":108,"firstIds":["uni-001","uni-024","uni-016"],"digest":"7cd5ed4f78a0d4949ad5cb3aa77ecb26478ad93e703e840704c98245e7f60d2b"},
  {"name":"major group nghien-cuu","options":{"groupId":"nghien-cuu"},"count":75,"firstIds":["uni-001","uni-024","uni-016"],"digest":"7ada1213a506d3c2536649aa72ac5a94f301eaf53a7c55e5a7675b4fc348c23d"},
  {"name":"major group sang-tao","options":{"groupId":"sang-tao"},"count":63,"firstIds":["uni-024","uni-088","uni-023"],"digest":"0efb22f2081a61397a9608b400c156502f37929f769aa1af155f3cf6865369f8"},
  {"name":"major group xa-hoi","options":{"groupId":"xa-hoi"},"count":54,"firstIds":["uni-084","uni-023","uni-105"],"digest":"a170e5ce16783e3c6f7e3a8642d6386e92469c181269f9d8841264f3614babfc"},
  {"name":"major group quan-ly","options":{"groupId":"quan-ly"},"count":83,"firstIds":["uni-002","uni-074","uni-084"],"digest":"6641188a7dce222960a94a4de52888a7c371d4cba204656b24f4c5fc4729b807"},
  {"name":"major group nghiep-vu","options":{"groupId":"nghiep-vu"},"count":95,"firstIds":["uni-001","uni-016","uni-044"],"digest":"967b23b15181137cd5ca130ab962cecdfba2404645cf937e0ca4e69933f7c744"},
  {"name":"exact listed major","options":{"major":"Công nghệ thông tin"},"count":56,"firstIds":["uni-016","uni-044","uni-002"],"digest":"df49ea47cad5b991751dac863f8dd9f3b1c6006d9f7b5357423186a6704595c9"},
  {"name":"missing major","options":{"major":"Ngành không có trong dữ liệu"},"count":126,"firstIds":["uni-001","uni-024","uni-016"],"digest":"6f82aa7687b5837c87961dfca47d87f7309eb5d5897312d8eca750ff91a68796"},
  {"name":"ranked by RIASEC","options":{"riasec":{"code":"RIC","scores":{"R":45,"I":40,"A":10,"S":15,"E":20,"C":35},"maxScores":{"R":50,"I":50,"A":50,"S":50,"E":50,"C":50}}},"count":126,"firstIds":["uni-001","uni-016","uni-044"],"digest":"79ae1a8e08e467665ab774f74c8a58423f0fde2cbe86878e0e0f32a72355f958"},
  {"name":"ranked 80 percent","options":{"riasec":{"code":"RIC","scores":{"R":45,"I":40,"A":10,"S":15,"E":20,"C":35},"maxScores":{"R":50,"I":50,"A":50,"S":50,"E":50,"C":50}},"fitMin":"≥80%"},"count":51,"firstIds":["uni-001","uni-016","uni-044"],"digest":"b1b341a1b445d0ccc1f66e0c2c106f728151a3639179ea689dfc79686bfd15e1"},
  {"name":"ranked 70 percent","options":{"riasec":{"code":"RIC","scores":{"R":45,"I":40,"A":10,"S":15,"E":20,"C":35},"maxScores":{"R":50,"I":50,"A":50,"S":50,"E":50,"C":50}},"fitMin":"≥70%"},"count":91,"firstIds":["uni-001","uni-016","uni-044"],"digest":"425fa544123ee9744b6ef7dd7b0f08c94833ce8cf4c1c3bbad627419b378ab5e"},
  {"name":"ranked 60 percent","options":{"riasec":{"code":"RIC","scores":{"R":45,"I":40,"A":10,"S":15,"E":20,"C":35},"maxScores":{"R":50,"I":50,"A":50,"S":50,"E":50,"C":50}},"fitMin":"≥60%"},"count":104,"firstIds":["uni-001","uni-016","uni-044"],"digest":"aa657dc7b7951d5c7f818c4e9efea329bc3444088e018d40e2b82e5605e4c649"},
  {"name":"ranked search and group","options":{"riasec":{"code":"RIC","scores":{"R":45,"I":40,"A":10,"S":15,"E":20,"C":35},"maxScores":{"R":50,"I":50,"A":50,"S":50,"E":50,"C":50}},"query":"kỹ thuật","groupId":"thuc-te"},"count":73,"firstIds":["uni-001","uni-016","uni-044"],"digest":"575cff23a0040a0bf510ee59c28127c0723228c11a656b50df075b462cdb8dcd"},
  {"name":"ranked major","options":{"riasec":{"code":"RIC","scores":{"R":45,"I":40,"A":10,"S":15,"E":20,"C":35},"maxScores":{"R":50,"I":50,"A":50,"S":50,"E":50,"C":50}},"major":"Công nghệ thông tin"},"count":56,"firstIds":["uni-016","uni-044","uni-012"],"digest":"77179842c6fe4c6d490e4db6abaa8a4ebcda848473cddf243da2c185b08a1024"},
  {"name":"fit without scores","options":{"fitMin":"≥60%"},"count":0,"firstIds":[],"digest":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
  {"name":"disabled tuition and score filters","options":{"tuition":"Dưới 20 triệu","score":"Trên 27"},"count":126,"firstIds":["uni-001","uni-024","uni-016"],"digest":"6f82aa7687b5837c87961dfca47d87f7309eb5d5897312d8eca750ff91a68796"},
  {"name":"unavailable tuition filter","options":{"applyTuition":true,"tuition":"Dưới 20 triệu"},"count":0,"firstIds":[],"digest":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
  {"name":"published score filter","options":{"applyScore":true,"score":"Trên 27"},"count":21,"firstIds":["uni-001","uni-002","uni-012"],"digest":"be92b5aa307ecf9b64d49273a06838300772baf7c36c31951f830ca1ebded45b"},
  {"name":"admission method","options":{"applyMethod":true,"method":"THPT"},"count":0,"firstIds":[],"digest":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
];

// Legacy names must remain in order before the additional workbook variants.
const legacyMajorCounts: Array<[string, number]> = [["uni-001",66],["uni-002",39],["uni-003",14],["uni-004",27],["uni-005",5],["uni-006",27],["uni-007",20],["uni-008",8],["uni-009",28],["uni-010",16],["uni-011",16],["uni-012",30],["uni-013",28],["uni-014",38],["uni-015",34],["uni-016",23],["uni-017",70],["uni-018",17],["uni-019",3],["uni-020",13],["uni-021",21],["uni-022",11],["uni-023",17],["uni-024",4],["uni-025",6],["uni-026",21],["uni-027",22],["uni-028",15],["uni-029",31],["uni-030",17],["uni-031",16],["uni-032",22],["uni-033",14],["uni-034",26],["uni-035",25],["uni-036",13],["uni-101",10],["uni-102",2],["uni-103",5],["uni-104",2],["uni-105",4],["uni-106",2],["uni-109",2],["uni-111",1],["uni-112",1],["uni-113",1],["uni-119",4],["uni-120",1],["uni-121",1],["uni-122",2],["uni-125",1],["uni-037",15],["uni-038",17],["uni-039",15],["uni-040",14],["uni-041",9],["uni-042",18],["uni-043",14],["uni-044",13],["uni-045",3],["uni-046",29],["uni-108",1],["uni-115",1],["uni-067",13],["uni-047",20],["uni-055",17],["uni-056",15],["uni-057",13],["uni-058",17],["uni-059",11],["uni-060",6],["uni-061",7],["uni-062",15],["uni-048",18],["uni-049",19],["uni-050",19],["uni-051",7],["uni-052",12],["uni-053",20],["uni-054",24],["uni-063",15],["uni-107",1],["uni-116",1],["uni-117",1],["uni-064",10],["uni-065",24],["uni-066",23],["uni-068",15],["uni-069",12],["uni-070",11],["uni-071",12],["uni-072",13],["uni-073",19],["uni-074",16],["uni-075",12],["uni-076",22],["uni-077",13],["uni-078",16],["uni-079",22],["uni-080",11],["uni-081",15],["uni-082",17],["uni-083",16],["uni-084",11],["uni-085",7],["uni-086",6],["uni-087",9],["uni-088",14],["uni-089",14],["uni-090",15],["uni-091",10],["uni-092",23],["uni-093",19],["uni-094",12],["uni-095",11],["uni-096",14],["uni-098",9],["uni-099",14],["uni-114",1],["uni-123",1],["uni-124",1],["uni-097",5],["uni-110",1],["uni-100",7],["uni-118",1],["uni-126",3]];
const legacyMajorDigest = "5f28eafb9a43e46fc58942baa52ba7d96d608a079c84961061168782fb5c824c";

const counts = new Map<string, number>();
for (const uni of UNIVERSITIES) counts.set(uni.provinceNew, (counts.get(uni.provinceNew) ?? 0) + 1);
const defaults: RankOptions = {
  universities: UNIVERSITIES,
  query: "",
  location: "Tất cả",
  region: "Tất cả",
  provinceNew: "Tất cả",
  provinceOld: "Tất cả",
  popularProvinces: [...counts].filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1]).map(([name]) => name),
  tuition: "Tất cả",
  fitMin: "Tất cả",
  groupId: "all",
  major: "all",
  score: "Tất cả",
  method: "Tất cả",
  applyTuition: false,
  applyScore: false,
  applyMethod: false,
};

function digest(rows: ReturnType<typeof rankUniversities>) {
  return createHash("sha256")
    .update(JSON.stringify(rows.map(({ uni, fit, majors }) => [uni.id, fit, majors])))
    .digest("hex");
}

describe("university ranking preserves the original results", () => {
  const index = createUniversitySearchIndex(UNIVERSITIES);
  it("retains all 1,769 legacy major names in their original order", () => {
    const schools = new Map(UNIVERSITIES.map((uni) => [uni.id, uni]));
    const projection = legacyMajorCounts.map(([id, count]) => {
      const uni = schools.get(id);
      assert.ok(uni, `Missing legacy school ${id}`);
      return [id, uni.majors.slice(0, count)];
    });
    assert.equal(legacyMajorCounts.reduce((total, [, count]) => total + count, 0), 1769);
    assert.equal(createHash("sha256").update(JSON.stringify(projection)).digest("hex"), legacyMajorDigest);
  });

  for (const baseline of baselines) {
    it(baseline.name, () => {
      for (const searchIndex of [undefined, index]) {
        const rows = rankUniversities({ ...defaults, ...baseline.options, searchIndex });
        assert.equal(rows.length, baseline.count);
        assert.deepEqual(rows.slice(0, 3).map(({ uni }) => uni.id), baseline.firstIds);
        assert.equal(digest(rows), baseline.digest);
      }
    });
  }

  it("falls back to the original search for schools absent from an index", () => {
    const options = { ...defaults, query: "đại học" };
    const partial = createUniversitySearchIndex(UNIVERSITIES.slice(0, 1));
    assert.deepEqual(
      rankUniversities({ ...options, searchIndex: partial }),
      rankUniversities(options),
    );
  });
});

function school(id: string, tuition: number, score: number): University {
  return {
    ...UNIVERSITIES[0],
    admissions2026: undefined,
    id,
    name: id,
    tuition: { year: 2026, amount: tuition, note: "Dữ liệu kiểm thử" },
    admissionScores: [{ year: 2026, score: String(score) }],
    programs: [{
      name: "Ngành kiểm thử", thpt: String(score), thptValue: score, thptYear: 2026,
      dgnl: "", exam: "", conversion: "", tuitionNote: "",
      tuitionMin: tuition, tuitionMax: tuition,
    }],
  };
}

describe("university filter boundaries", () => {
  const universities = [school("a", 19, 19), school("b", 20, 20), school("c", 40, 24), school("d", 60, 27), school("e", 80, 28)];
  const ids = (options: Partial<RankOptions>) =>
    rankUniversities({ ...defaults, universities, ...options }).map(({ uni }) => uni.id);

  it("keeps the original tuition thresholds", () => {
    assert.deepEqual(ids({ applyTuition: true, tuition: "Dưới 20 triệu" }), ["a"]);
    assert.deepEqual(ids({ applyTuition: true, tuition: "20–40 triệu" }), ["b"]);
    assert.deepEqual(ids({ applyTuition: true, tuition: "40–60 triệu" }), ["c"]);
    assert.deepEqual(ids({ applyTuition: true, tuition: "Trên 60 triệu" }), ["d", "e"]);
  });

  it("keeps the original admission score thresholds", () => {
    assert.deepEqual(ids({ applyScore: true, score: "Dưới 20" }), ["a"]);
    assert.deepEqual(ids({ applyScore: true, score: "20–24" }), ["b"]);
    assert.deepEqual(ids({ applyScore: true, score: "24–27" }), ["c", "d"]);
    assert.deepEqual(ids({ applyScore: true, score: "Trên 27" }), ["e"]);
  });
});

function admissionsSummary(thptValues: number[]): NonNullable<University["admissions2026"]> {
  return {
    year: 2026,
    updatedAt: "2026-10-30",
    file: "/admissions/test.json",
    sheet: "Dữ liệu nguồn 2026",
    programCount: 1,
    sourceRecordCount: thptValues.length,
    estimateCount: 0,
    thptValues,
    methods: ["THPT"],
    ranges: [],
    notice: "Dữ liệu kiểm thử",
  };
}

describe("published THPT admission score filtering", () => {
  const ids = (universities: University[], score: RankOptions["score"], applyScore = true) =>
    rankUniversities({ ...defaults, universities, score, applyScore }).map(({ uni }) => uni.id);

  it("keeps the original score boundaries for published workbook cutoffs", () => {
    const universities = [19, 20, 24, 27, 28].map((score, index) => ({
      ...school(String.fromCharCode(97 + index), 20, 0),
      admissions2026: admissionsSummary([score]),
    }));
    assert.deepEqual(ids(universities, "Dưới 20"), ["a"]);
    assert.deepEqual(ids(universities, "20–24"), ["b"]);
    assert.deepEqual(ids(universities, "24–27"), ["c", "d"]);
    assert.deepEqual(ids(universities, "Trên 27"), ["e"]);
  });

  it("uses workbook cutoffs instead of stale legacy program scores", () => {
    const uni = { ...school("published", 20, 29), admissions2026: admissionsSummary([25.5]) };
    assert.deepEqual(ids([uni], "24–27"), ["published"]);
    assert.deepEqual(ids([uni], "Trên 27"), []);
  });

  it("does not promote floors, estimates or another scale into THPT cutoffs", () => {
    const uni = {
      ...school("not-published", 20, 29),
      admissions2026: {
        ...admissionsSummary([]),
        estimateCount: 1,
        ranges: [
          { method: "THPT", scale: "30", kind: "Điểm sàn", min: 28, max: 28, count: 1 },
          { method: "THPT", scale: "30", kind: "Ước tính", min: 29, max: 29, count: 1 },
          { method: "ĐGNL", scale: "1200", kind: "Trúng tuyển", min: 900, max: 900, count: 1 },
        ],
      },
    };
    for (const band of ["Dưới 20", "20–24", "24–27", "Trên 27"] as const) {
      assert.deepEqual(ids([uni], band), []);
    }
  });

  it("omits missing-score schools only when a score band is active", () => {
    const uni = { ...school("missing", 20, 28), admissions2026: admissionsSummary([]) };
    assert.deepEqual(ids([uni], "Trên 27"), []);
    assert.deepEqual(ids([uni], "Trên 27", false), ["missing"]);
    assert.deepEqual(ids([uni], "Tất cả"), ["missing"]);
  });
});
