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

// Captured from the original ranking code before optimizing. The digest includes
// every school's ordered id, exact fit score and full ordered major suggestions.
const baselines: Baseline[] = [
  {"name": "all schools","options": {},"count": 126,"firstIds": ["uni-001","uni-024","uni-016"],"digest": "803ae987415a53ba7d973394239bd923dc33b77c65d71d2b291c03f7ea4428f3"},
  {"name": "accented search","options": {"query": "  HÀ NỘI  "},"count": 51,"firstIds": ["uni-001","uni-024","uni-016"],"digest": "ab0622681e1ce2021c9d9377b2d825b12cf4f3748673b6489661ba98ab03ec4e"},
  {"name": "unaccented search","options": {"query": "ha noi"},"count": 0,"firstIds": [],"digest": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
  {"name": "abbreviation search","options": {"query": "HUST"},"count": 1,"firstIds": ["uni-001"],"digest": "ea07d33332e6f05ac3208704ef6212d33dcd63a8118f7a96a026bdac08b94846"},
  {"name": "major code search","options": {"query": "7480201"},"count": 50,"firstIds": ["uni-016","uni-044","uni-002"],"digest": "ce74d0ac5bf66ada180119f7f48e29518c6e7686eaf506aa1698a13712d071db"},
  {"name": "major name search","options": {"query": "Công nghệ thông tin"},"count": 54,"firstIds": ["uni-001","uni-016","uni-044"],"digest": "d6ee477fa2a8064a051cf6a6ea0dc29728e09443764410fa8a7585c15e9c2f27"},
  {"name": "no matches","options": {"query": "không tồn tại abcxyz"},"count": 0,"firstIds": [],"digest": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
  {"name": "north region","options": {"region": "Miền Bắc"},"count": 63,"firstIds": ["uni-001","uni-024","uni-016"],"digest": "463c50df7acbbedc5b38392a11b930565beb16b2db9ae7738440613c4aac4097"},
  {"name": "central region","options": {"region": "Miền Trung"},"count": 24,"firstIds": ["uni-107","uni-061","uni-048"],"digest": "d0e4463ae7e631e8ed14253cf8d5bb908439bee0be09956e18474bab5bfa8208"},
  {"name": "south region","options": {"region": "Miền Nam"},"count": 37,"firstIds": ["uni-074","uni-084","uni-088"],"digest": "949b1f42d83d78ef057d4dc387538f7981b7ecb1a2c1b2f68bc4fac204c0fb2c"},
  {"name": "new province","options": {"provinceNew": "Hà Nội"},"count": 51,"firstIds": ["uni-001","uni-024","uni-016"],"digest": "ab0622681e1ce2021c9d9377b2d825b12cf4f3748673b6489661ba98ab03ec4e"},
  {"name": "old province","options": {"provinceOld": "Bình Dương"},"count": 3,"firstIds": ["uni-099","uni-098","uni-114"],"digest": "326e7f7f547673b0412ab67849b2267a9af2128f3b20ee9bbaff36ef129af645"},
  {"name": "other provinces","options": {"provinceNew": "Tỉnh khác"},"count": 13,"firstIds": ["uni-126","uni-100","uni-108"],"digest": "8f7d6f23c18cb03b53477cebb7dc60a0fa389e3fc0b37a6e9089cca04b338bb3"},
  {"name": "location","options": {"location": "TP.HCM"},"count": 34,"firstIds": ["uni-074","uni-084","uni-088"],"digest": "c7289957f80f0d08bf7c4a16b81cccd9bea1b69fb85805aba0e98c4537faa0b6"},
  {"name": "combined location filters","options": {"region": "Miền Nam","provinceNew": "TP. Hồ Chí Minh"},"count": 34,"firstIds": ["uni-074","uni-084","uni-088"],"digest": "c7289957f80f0d08bf7c4a16b81cccd9bea1b69fb85805aba0e98c4537faa0b6"},
  {"name": "major group thuc-te","options": {"groupId": "thuc-te"},"count": 108,"firstIds": ["uni-001","uni-024","uni-016"],"digest": "e4778a00afe429d93ca344d94f3fc9a755092f993970438df82356930fa0239c"},
  {"name": "major group nghien-cuu","options": {"groupId": "nghien-cuu"},"count": 75,"firstIds": ["uni-001","uni-024","uni-016"],"digest": "b53571bcaf6f93042c2c775eeb5ed276450586db6091a495009b90d1f4b4dfda"},
  {"name": "major group sang-tao","options": {"groupId": "sang-tao"},"count": 63,"firstIds": ["uni-024","uni-088","uni-023"],"digest": "61d9661390ce55f1615e6d6c76eacb04314a36041dceb568f366f92f06433943"},
  {"name": "major group xa-hoi","options": {"groupId": "xa-hoi"},"count": 54,"firstIds": ["uni-084","uni-023","uni-105"],"digest": "b33bddff923897fa38658cfafd03361ac425971b3e1705ae796fc12b50c39fba"},
  {"name": "major group quan-ly","options": {"groupId": "quan-ly"},"count": 83,"firstIds": ["uni-002","uni-074","uni-084"],"digest": "5d8a09565732ccd24ce555e71467d9854921976c12d252ad0dede0cae3aed655"},
  {"name": "major group nghiep-vu","options": {"groupId": "nghiep-vu"},"count": 95,"firstIds": ["uni-001","uni-016","uni-044"],"digest": "ce0edcbd2e2fc3ddf87279b2e6113fc186e27c989de6e97e116be13a0eec969c"},
  {"name": "exact listed major","options": {"major": "Công nghệ thông tin"},"count": 50,"firstIds": ["uni-016","uni-044","uni-002"],"digest": "9f34130f4aef3cc98cf5614cfa5a01e31f41caa60024943d4b4362aa65a4c328"},
  {"name": "missing major","options": {"major": "Ngành không có trong dữ liệu"},"count": 126,"firstIds": ["uni-001","uni-024","uni-016"],"digest": "803ae987415a53ba7d973394239bd923dc33b77c65d71d2b291c03f7ea4428f3"},
  {"name": "ranked by RIASEC","options": {"riasec": {"code": "RIC","scores": {"R": 45,"I": 40,"A": 10,"S": 15,"E": 20,"C": 35},"maxScores": {"R": 50,"I": 50,"A": 50,"S": 50,"E": 50,"C": 50}}},"count": 126,"firstIds": ["uni-001","uni-016","uni-044"],"digest": "65f90a898ddb9f1922f0cddcffb94e409ea263f530383b0719bdcb099fe55806"},
  {"name": "ranked 80 percent","options": {"riasec": {"code": "RIC","scores": {"R": 45,"I": 40,"A": 10,"S": 15,"E": 20,"C": 35},"maxScores": {"R": 50,"I": 50,"A": 50,"S": 50,"E": 50,"C": 50}},"fitMin": "≥80%"},"count": 51,"firstIds": ["uni-001","uni-016","uni-044"],"digest": "f3bab9bc8bcbe3d2bea605bc79a705b0f4f68080752bf5b56971e2ae1ff45831"},
  {"name": "ranked 70 percent","options": {"riasec": {"code": "RIC","scores": {"R": 45,"I": 40,"A": 10,"S": 15,"E": 20,"C": 35},"maxScores": {"R": 50,"I": 50,"A": 50,"S": 50,"E": 50,"C": 50}},"fitMin": "≥70%"},"count": 91,"firstIds": ["uni-001","uni-016","uni-044"],"digest": "9cf49f3294b642708196e5e358fa3ad68e00db980a6e84c5065348c4a273138e"},
  {"name": "ranked 60 percent","options": {"riasec": {"code": "RIC","scores": {"R": 45,"I": 40,"A": 10,"S": 15,"E": 20,"C": 35},"maxScores": {"R": 50,"I": 50,"A": 50,"S": 50,"E": 50,"C": 50}},"fitMin": "≥60%"},"count": 104,"firstIds": ["uni-001","uni-016","uni-044"],"digest": "b842683d193ae603daf8b43c354cb9193e8520a66220f120e853d49e1614a78f"},
  {"name": "ranked search and group","options": {"riasec": {"code": "RIC","scores": {"R": 45,"I": 40,"A": 10,"S": 15,"E": 20,"C": 35},"maxScores": {"R": 50,"I": 50,"A": 50,"S": 50,"E": 50,"C": 50}},"query": "kỹ thuật","groupId": "thuc-te"},"count": 65,"firstIds": ["uni-001","uni-016","uni-044"],"digest": "5255f5fe97ecf2766ee73e24e8a3bf9f39bf963c656247f5b3f47cff44f91101"},
  {"name": "ranked major","options": {"riasec": {"code": "RIC","scores": {"R": 45,"I": 40,"A": 10,"S": 15,"E": 20,"C": 35},"maxScores": {"R": 50,"I": 50,"A": 50,"S": 50,"E": 50,"C": 50}},"major": "Công nghệ thông tin"},"count": 50,"firstIds": ["uni-016","uni-044","uni-018"],"digest": "ed685015430b17a95533d344011458a7e1f7150645243a4d4b61f90020d6d6a9"},
  {"name": "fit without scores","options": {"fitMin": "≥60%"},"count": 0,"firstIds": [],"digest": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
  {"name": "disabled tuition and score filters","options": {"tuition": "Dưới 20 triệu","score": "Trên 27"},"count": 126,"firstIds": ["uni-001","uni-024","uni-016"],"digest": "803ae987415a53ba7d973394239bd923dc33b77c65d71d2b291c03f7ea4428f3"},
  {"name": "unavailable tuition filter","options": {"applyTuition": true,"tuition": "Dưới 20 triệu"},"count": 0,"firstIds": [],"digest": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
  {"name": "unavailable score filter","options": {"applyScore": true,"score": "Trên 27"},"count": 0,"firstIds": [],"digest": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
  {"name": "admission method","options": {"applyMethod": true,"method": "THPT"},"count": 0,"firstIds": [],"digest": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},
];

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
