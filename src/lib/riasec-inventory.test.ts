import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { registerHooks } from "node:module";

const sourceRoot = new URL("../", import.meta.url);
const aliases = registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(new URL(`${specifier.slice(2)}.ts`, sourceRoot).href, context);
    }
    if (specifier.startsWith(".") && context.parentURL?.startsWith(sourceRoot.href) && !/\.[a-z]+$/i.test(specifier)) {
      return nextResolve(`${specifier}.ts`, context);
    }
    return nextResolve(specifier, context);
  },
});
const {
  RIASEC_QUESTION_SET_VERSION,
  RIASEC_LIKERT_LABELS,
  RIASEC_ITEM_GROUP,
  RIASEC_GROUP_ITEMS,
  RIASEC_GROUP_MAX,
  RIASEC_QUESTIONS: inventory,
} = await import("../data/riasec-questions.ts");
const { questionsFor } = await import("../data/questions.ts");
const { scoreQuiz, tally } = await import("./quiz-engine.ts");
const { rankRiasec } = await import("./riasec.ts");
aliases.deregister();

const groups = ["R", "I", "A", "S", "E", "C"] as const;
type Group = (typeof groups)[number];
interface InventorySource {
  version: string;
  sourceDocument: string;
  sourceSha256: string;
  instructions: string;
  labels: string[];
  groups: Record<Group, number[]>;
  questions: Array<{ number: number; text: string; group: Group }>;
}

// This fixture was extracted from the supplied DOCX, independently of the app data.
const source: InventorySource = JSON.parse(
  readFileSync(new URL("../../data/quiz-sources/riasec-60-v2.json", import.meta.url), "utf8"),
);
const scoredQuestions = questionsFor("riasec");
const groupScores = (points: number) => Object.fromEntries(groups.map((group) => [group, points]));

describe("RIASEC revised 60-question source inventory", () => {
  it("matches the document version, all 60 texts, their order and group assignments", () => {
    assert.equal(source.version, "riasec-60-v2");
    assert.equal(RIASEC_QUESTION_SET_VERSION, source.version);
    assert.equal(source.sourceDocument, "Bo_60_cau_trac_nghiem_RIASEC_da_sua.docx");
    assert.equal(source.sourceSha256, "e7920dc90b94fa33a96dbf16504331ea83f6243570149323263b100f78cf2346");
    assert.ok(source.instructions.length > 0);
    assert.equal(source.questions.length, 60);
    assert.deepEqual(source.questions.map((question) => question.number), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.deepEqual(
      inventory.map((question, index) => ({ number: index + 1, text: question.text, group: question.group })),
      source.questions,
    );
    assert.deepEqual(inventory.map((question) => question.id), source.questions.map((question) => `r${question.number}`));
    assert.deepEqual(
      RIASEC_ITEM_GROUP,
      Object.fromEntries(source.questions.map((question) => [question.number, question.group])),
    );
    assert.deepEqual(
      scoredQuestions.map(({ id, text }) => ({ id, text })),
      source.questions.map(({ number, text }) => ({ id: `r${number}`, text })),
    );
  });

  it("preserves all five document labels and assigns exactly one group 1–5 points in all 300 options", () => {
    assert.equal(source.labels.length, 5);
    assert.deepEqual([...RIASEC_LIKERT_LABELS], source.labels);
    assert.equal(scoredQuestions.length, 60);
    let checkedOptions = 0;
    for (const [index, question] of scoredQuestions.entries()) {
      assert.deepEqual(question.options.map((option) => option.label), source.labels, question.id);
      assert.deepEqual(inventory[index].options.map((option) => option.label), source.labels, question.id);
      for (const [choice, option] of question.options.entries()) {
        assert.deepEqual(option.scores, { [source.questions[index].group]: choice + 1 }, `${question.id}, choice ${choice + 1}`);
        checkedOptions += 1;
      }
    }
    assert.equal(checkedOptions, 300);
  });

  it("partitions the 60 items into six groups of ten, each with a 10–50 range", () => {
    assert.deepEqual(RIASEC_GROUP_ITEMS, source.groups);
    assert.deepEqual(
      Object.values(source.groups).flat().sort((a, b) => a - b),
      Array.from({ length: 60 }, (_, i) => i + 1),
    );
    for (const group of groups) {
      const questions = scoredQuestions.filter((_, index) => source.questions[index].group === group);
      assert.equal(source.groups[group].length, 10, group);
      assert.deepEqual(source.groups[group], source.questions.filter((question) => question.group === group).map((question) => question.number));
      assert.deepEqual(tally(questions, Array(10).fill(0)), { [group]: 10 });
      assert.deepEqual(tally(questions, Array(10).fill(4)), { [group]: 50 });
      assert.equal(RIASEC_GROUP_MAX[group], 50, group);
    }
  });

  it("scores revised question 37 only in A and leaves C and all other groups unchanged", () => {
    const answers = Array(60).fill(0);
    const baseline = scoreQuiz("riasec", answers);
    answers[36] = 4;
    const changed = scoreQuiz("riasec", answers);
    assert.ok(baseline?.riasec);
    assert.ok(changed?.riasec);
    assert.equal(source.questions[36].group, "A");
    assert.equal(changed.riasec.scores.C, baseline.riasec.scores.C);
    assert.deepEqual(baseline.riasec.scores, groupScores(10));
    assert.deepEqual(changed.riasec.scores, { ...groupScores(10), A: 14 });
    assert.equal(changed.riasec.scores.A - baseline.riasec.scores.A, 4);
  });

  for (let choice = 0; choice < 5; choice += 1) {
    it(`scores all 60 responses at level ${choice + 1} with v2 provenance and equal maxima`, () => {
      const answers = Array(60).fill(choice);
      const result = scoreQuiz("riasec", answers);
      assert.ok(result?.riasec);
      assert.equal(result.kind, "riasec");
      assert.equal(result.questionSetVersion, source.version);
      assert.deepEqual(result.answers, answers);
      assert.deepEqual(result.riasec.scores, groupScores(10 * (choice + 1)));
      assert.equal(Object.values(result.riasec.scores).reduce((total, score) => total + score, 0), 60 * (choice + 1));
      assert.deepEqual(result.riasec.maxScores, groupScores(50));
      assert.equal(result.riasec.code, "RIA");
    });
  }

  for (const champion of groups) {
    it(`ranks ${champion} first when only that group's ten responses are highest`, () => {
      const answers = source.questions.map((question) => question.group === champion ? 4 : 0);
      const result = scoreQuiz("riasec", answers);
      assert.ok(result?.riasec);
      assert.deepEqual(result.riasec.scores, { ...groupScores(10), [champion]: 50 });
      assert.equal(result.riasec.code, [champion, ...groups.filter((group) => group !== champion)].slice(0, 3).join(""));
      assert.equal(result.riasec.code[0], champion);
    });
  }

  it("breaks equal-score ties in canonical Holland R-I-A-S-E-C order", () => {
    assert.deepEqual(rankRiasec(groupScores(10)), [...groups]);
    assert.deepEqual(rankRiasec({ C: 50, E: 50, S: 50, A: 50, I: 50, R: 50 }), [...groups]);
    assert.equal(scoreQuiz("riasec", Array(60).fill(0))?.riasec?.code, "RIA");
  });

  it("keeps MBTI and Big Five results outside the RIASEC inventory version", () => {
    for (const quizId of ["mbti", "bigfive"]) {
      const result = scoreQuiz(quizId, questionsFor(quizId).map(() => 0));
      assert.ok(result);
      assert.equal(result.kind, quizId);
      assert.equal(result.questionSetVersion, undefined);
      assert.equal(result.riasec, undefined);
      if (quizId === "mbti") assert.match(result.mbti ?? "", /^[EI][SN][TF][JP]$/);
      else assert.deepEqual(Object.keys(result.bigfive ?? {}).sort(), ["A", "C", "E", "N", "O"]);
    }
  });
});
