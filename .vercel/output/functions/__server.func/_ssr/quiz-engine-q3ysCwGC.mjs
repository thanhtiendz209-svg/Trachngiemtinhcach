import { C as pct, _ as getQuiz, v as questionsFor, y as RIASEC_GROUP_MAX } from "./router-Cg7OUugg.mjs";
import { a as RIASEC_MAP, f as riasecFromScores, i as RIASEC_KEYS } from "./riasec-BIz0WNyr.mjs";
import { r as getPersonality } from "./personalities-Cs8oYZbZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-engine-q3ysCwGC.js
function tally(questions, answers) {
	const scores = {};
	questions.forEach((q, i) => {
		const opt = q.options[answers[i] ?? -1];
		if (!opt) return;
		for (const [k, v] of Object.entries(opt.scores)) scores[k] = (scores[k] ?? 0) + v;
	});
	return scores;
}
function pick(scores, a, b) {
	return (scores[a] ?? 0) >= (scores[b] ?? 0) ? a : b;
}
function mbtiFromScores(scores) {
	return {
		type: `${pick(scores, "E", "I")}${pick(scores, "S", "N")}${pick(scores, "T", "F")}${pick(scores, "J", "P")}`,
		axes: {
			energy: pct(scores.E ?? 0, (scores.E ?? 0) + (scores.I ?? 0)),
			sensing: pct(scores.S ?? 0, (scores.S ?? 0) + (scores.N ?? 0)),
			thinking: pct(scores.T ?? 0, (scores.T ?? 0) + (scores.F ?? 0)),
			judging: pct(scores.J ?? 0, (scores.J ?? 0) + (scores.P ?? 0))
		}
	};
}
function maxRiasecFromQuestions(questions, prefixed = false) {
	const max = {
		R: 0,
		I: 0,
		A: 0,
		S: 0,
		E: 0,
		C: 0
	};
	for (const q of questions) for (const k of RIASEC_KEYS) {
		const key = prefixed ? `r${k}` : k;
		const m = Math.max(0, ...q.options.map((o) => o.scores[key] ?? 0));
		max[k] += m;
	}
	return max;
}
function scoreQuiz(quizId, answers) {
	const quiz = getQuiz(quizId);
	const questions = questionsFor(quizId);
	if (!quiz || questions.length === 0) return null;
	const scores = tally(questions, answers);
	const base = {
		quizId,
		kind: quiz.kind,
		completedAt: (/* @__PURE__ */ new Date()).toISOString(),
		answers
	};
	if (quiz.kind === "mbti") {
		const m = mbtiFromScores(scores);
		return {
			...base,
			mbti: m.type,
			axes: m.axes
		};
	}
	if (quiz.kind === "riasec") return {
		...base,
		riasec: riasecFromScores(scores, false, RIASEC_GROUP_MAX)
	};
	if (quiz.kind === "interest") return {
		...base,
		riasec: riasecFromScores(scores, false, maxRiasecFromQuestions(questions, false))
	};
	if (quiz.kind === "bigfive") return {
		...base,
		bigfive: bigfiveFromScores(scores)
	};
	const m = mbtiFromScores(scores);
	return {
		...base,
		mbti: m.type,
		axes: m.axes,
		riasec: riasecFromScores(scores, true, maxRiasecFromQuestions(questions, true))
	};
}
function bigfiveFromScores(scores) {
	const keys = [
		"O",
		"C",
		"E",
		"A",
		"N"
	];
	const out = {};
	for (const k of keys) {
		const v = scores[k] ?? 12;
		out[k] = Math.round((v - 4) / 16 * 100);
		out[k] = Math.min(96, Math.max(8, out[k]));
	}
	return out;
}
function resultTitle(result) {
	if (result.kind === "riasec" && result.riasec) return `Mã RIASEC ${result.riasec.code}`;
	if (result.mbti) return getPersonality(result.mbti) ? `Bạn thuộc nhóm ${result.mbti}` : `Nhóm ${result.mbti}`;
	if (result.riasec) return `Mã RIASEC ${result.riasec.code}`;
	if (result.bigfive) return "Hồ sơ Big Five của bạn";
	return "Hồ sơ của bạn";
}
function resultSubtitle(result) {
	if (result.kind === "riasec" && result.riasec) {
		const top = result.riasec.code[0] ?? "I";
		const t = RIASEC_MAP[top];
		return t ? `${t.name} nổi bật · ${result.riasec.code}` : result.riasec.code;
	}
	if (result.mbti) return getPersonality(result.mbti)?.name ?? result.mbti;
	if (result.riasec) return `Mã ${result.riasec.code}`;
	return "Chân dung tham khảo";
}
//#endregion
export { resultTitle as n, scoreQuiz as r, resultSubtitle as t };
