import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { registerHooks } from "node:module";

const sourceRoot = new URL("../", import.meta.url);
const aliases = registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(new URL(`${specifier.slice(2)}.ts`, sourceRoot).href, context);
    }
    if (specifier.startsWith(".") && context.parentURL?.startsWith(sourceRoot.href) && !/\\.[a-z]+$/i.test(specifier)) {
      return nextResolve(`${specifier}.ts`, context);
    }
    return nextResolve(specifier, context);
  },
});
const { PERSONALITIES, ORIGIN_PERSONALITIES, PERSONALITY_GROUPS, getPersonality } =
  await import("../data/personalities.ts");
const { RIASEC_TYPES } = await import("../data/riasec.ts");
aliases.deregister();

describe("RIASEC origin personality groups", () => {
  it("keeps Tất cả limited to the original 16 MBTI profiles", () => {
    assert.equal(PERSONALITIES.length, 16);
    assert.ok(PERSONALITIES.every((type) => type.id.length === 4 && type.group !== "origin"));
  });

  it("exposes all six source RIASEC groups only in the dedicated origin category", () => {
    assert.equal(ORIGIN_PERSONALITIES.length, 6);
    assert.deepEqual(ORIGIN_PERSONALITIES.map((item) => item.id), ["R", "I", "A", "S", "E", "C"]);
    assert.ok(PERSONALITY_GROUPS.some((item) => item.id === "origin" && item.label === "Nhóm khởi nguồn"));
    assert.ok(ORIGIN_PERSONALITIES.every((item) => item.group === "origin"));
    assert.ok(ORIGIN_PERSONALITIES.every((item) => getPersonality(item.id)?.id === item.id));
    assert.ok(ORIGIN_PERSONALITIES.every((item) => !PERSONALITIES.some((p) => p.id === item.id)));
  });

  it("maps all six illustrations to animated SVG files without changing source descriptions", () => {
    for (const type of RIASEC_TYPES) {
      const origin = getPersonality(type.id);
      assert.ok(origin);
      assert.equal(origin.image, `/riasec/animated/${type.id}.svg`);
      assert.equal(origin.description, type.description);
      assert.equal(origin.note, type.note);
    }
  });
});
