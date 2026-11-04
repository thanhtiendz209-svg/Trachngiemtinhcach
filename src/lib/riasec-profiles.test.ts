import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { describe, it } from "node:test";
import { RIASEC_COMBINATIONS, RIASEC_COMBINATION_MAP } from "../data/riasec-combinations.ts";
import {
  filterRiasecProfiles,
  findRiasecProfile,
  RIASEC_PROFILE_CODES,
  RIASEC_PROFILES,
} from "./riasec-profiles.ts";

describe("120 ordered RIASEC profiles", () => {
  it("covers every ordered triple once with 20 profiles per primary group in Holland order", () => {
    const letters = ["R", "I", "A", "S", "E", "C"];
    assert.equal(RIASEC_PROFILE_CODES.length, 120);
    assert.equal(new Set(RIASEC_PROFILE_CODES).size, 120);
    assert.deepEqual(RIASEC_PROFILES.map((profile) => profile.code), RIASEC_PROFILE_CODES);
    assert.deepEqual(RIASEC_PROFILE_CODES.slice(0, 8), ["RIA", "RIS", "RIE", "RIC", "RAI", "RAS", "RAE", "RAC"]);
    assert.deepEqual(RIASEC_PROFILE_CODES.slice(-4), ["CER", "CEI", "CEA", "CES"]);
    for (const primary of letters) {
      const profiles = filterRiasecProfiles("", primary);
      assert.equal(profiles.length, 20, primary);
      assert.ok(profiles.every((profile) => profile.code[0] === primary));
      for (const second of letters.filter((letter) => letter !== primary)) {
        assert.equal(profiles.filter((profile) => profile.code[1] === second).length, 4);
      }
    }
    for (const code of RIASEC_PROFILE_CODES) {
      assert.equal(code.length, 3);
      assert.equal(new Set(code).size, 3);
      assert.ok([...code].every((letter) => letters.includes(letter)));
      assert.equal(findRiasecProfile(code), RIASEC_COMBINATION_MAP[code]);
    }
  });

  it("keeps RIA and IRA as different ordered profiles and accepts only trim/case variations", () => {
    const ria = findRiasecProfile(" \n rIa\t");
    const ira = findRiasecProfile("ira");
    assert.ok(ria);
    assert.ok(ira);
    assert.equal(ria.code, "RIA");
    assert.equal(ira.code, "IRA");
    assert.notEqual(ria, ira);
    assert.notEqual(ria.title, ira.title);
    assert.notEqual(ria.overview, ira.overview);
    assert.equal(ria, RIASEC_COMBINATION_MAP.RIA, "The existing combination map must now resolve RIA directly");
  });

  it("rejects malformed, repeated, unknown and non-string codes without manufacturing a fallback", () => {
    const invalid: unknown[] = [
      undefined, null, false, 123, {}, ["R", "I", "A"], new String("RIA"),
      "", "R", "RI", "RIAA", "RRA", "III", "XYZ", "RIX", "R I A", "R-I-A", "RIA/IRA",
      "ŘIA", "ＲＩＡ", "constructor", "__proto__", "RIA\nIRA",
    ];
    for (const code of invalid) assert.equal(findRiasecProfile(code), undefined, String(code));
  });

  it("imports the user's complete RIA document without altering any of the 119 supplied Batch records", () => {
    const batch = RIASEC_COMBINATIONS.filter((profile) => profile.source === "batch");
    assert.equal(batch.length, 119);
    // Captured from the 119 supplied records in GitHub main 3c7f22 before adding RIA.
    // Includes every field and original record order, rather than only checking codes.
    assert.equal(createHash("sha256").update(JSON.stringify(batch)).digest("hex"),
      "50ee5d4d3f8048e1ab3e4248b56be116205933264bdbec2f48e4c6cbb083258c");
    const supplied = RIASEC_COMBINATIONS.filter((profile) => profile.source === "document");
    assert.deepEqual(supplied.map((profile) => profile.code), ["RIA"]);
    assert.equal(RIASEC_COMBINATIONS.length, 120);
    for (const profile of RIASEC_PROFILES) {
      for (const value of [profile.title, profile.quote, profile.overview, profile.advice]) assert.ok(value.trim().length > 0, profile.code);
      for (const values of [profile.strengths, profile.improvements, profile.careers]) {
        assert.ok(values.length > 0 && values.every((value) => value.trim().length > 0), profile.code);
      }
      assert.notEqual(profile.source, "fallback");
    }
    const ria = supplied[0];
    assert.equal(ria.title, "Người khám phá, thực hành và sáng tạo");
    assert.equal(ria.quote, "Hiểu vấn đề → tìm giải pháp → tự tay tạo ra và cải tiến.");
    assert.equal(ria.sourceDocument, "CÂU NÓI CHO MỖI TỔ HỢP.docx");
    assert.equal(ria.overview.split("\n\n").length, 2);
    assert.deepEqual(ria.facets?.map((facet) => facet.letter), ["R", "I", "A"]);
    for (const facet of ria.facets ?? []) {
      assert.ok(facet.description.startsWith(`${facet.letter} cao`));
      assert.ok(facet.strength.length > 0);
      assert.ok(facet.caution.length > 0);
    }
    assert.equal(ria.strengths.length, 5);
    assert.equal(ria.improvements.length, 5);
    assert.equal(ria.careers.length, 8);
    assert.match(ria.strengthsIntroduction ?? "", /Sự kết hợp R \+ I \+ A/u);
    assert.match(ria.careersIntroduction ?? "", /kỹ thuật – nghiên cứu – sáng tạo/u);
    assert.match(ria.careersNote ?? "", /năng lực môn học, điều kiện học tập/u);
    assert.ok(ria.advice.endsWith("thay vì chỉ dựa vào một kết quả trắc nghiệm để quyết định tương lai."));
    assert.doesNotMatch(JSON.stringify(ria), /Top of Form|Bottom of Form/u);
  });
});

describe("profile search and primary filtering", () => {
  it("finds exact codes independently and retains the stable profile order", () => {
    assert.deepEqual(filterRiasecProfiles(" RIA ").map((profile) => profile.code), ["RIA"]);
    assert.deepEqual(filterRiasecProfiles("ira").map((profile) => profile.code), ["IRA"]);
    assert.deepEqual(filterRiasecProfiles(" "), RIASEC_PROFILES);
    const matches = filterRiasecProfiles("thuc hanh");
    assert.ok(matches.length > 1);
    assert.deepEqual(matches.map((profile) => profile.code),
      RIASEC_PROFILE_CODES.filter((code) => matches.some((profile) => profile.code === code)));
  });

  it("searches Vietnamese titles and career examples without accents or punctuation", () => {
    assert.deepEqual(filterRiasecProfiles("nguoi kham pha thuc hanh va sang tao").map((profile) => profile.code), ["RIA"]);
    assert.deepEqual(filterRiasecProfiles("Người khám phá, thực hành và sáng tạo".normalize("NFD")).map((profile) => profile.code), ["RIA"]);
    assert.ok(filterRiasecProfiles("co dien tu").some((profile) => profile.code === "RIA"), "Vietnamese đ must be searchable as d");
    assert.deepEqual(filterRiasecProfiles("khong co noi dung nay zzzzzz"), []);
  });

  it("searches the names of all three component groups rather than only the primary group", () => {
    const creative = filterRiasecProfiles("nghe thuat sang tao");
    assert.ok(creative.some((profile) => profile.code === "RIA"));
    assert.ok(creative.some((profile) => profile.code === "ARI"));
    assert.ok(creative.some((profile) => profile.code === "IRA"));
    assert.ok(creative.every((profile) => profile.code.includes("A")));
    assert.ok(filterRiasecProfiles("nghien cuu").some((profile) => profile.code === "RIA"));
  });

  it("combines search with an exact first-letter filter without reordering or changing the source data", () => {
    assert.deepEqual(filterRiasecProfiles("RIA", "R").map((profile) => profile.code), ["RIA"]);
    assert.deepEqual(filterRiasecProfiles("RIA", "I"), []);
    assert.ok(filterRiasecProfiles("", "I").some((profile) => profile.code === "IRA"));
    assert.ok(!filterRiasecProfiles("", "I").some((profile) => profile.code === "RIA"));
    assert.deepEqual(filterRiasecProfiles("", "RI"), []);
    assert.deepEqual(filterRiasecProfiles("", "X"), []);
    assert.equal(RIASEC_PROFILES.length, 120);
  });
});
