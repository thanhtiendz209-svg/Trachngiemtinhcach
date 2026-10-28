import { i as __toESM } from "../_runtime.mjs";
import { l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as hasPartialProgress, d as loadMergedProfile, f as loadProgress, g as QUIZZES, p as loadResult, u as loadLastResult } from "./router-Cg7OUugg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-quiz-status-DK3SUv5D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useLastResult() {
	const [result, setResult] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setResult(loadLastResult());
	}, []);
	return result;
}
function useMergedProfile() {
	const [profile, setProfile] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setProfile(loadMergedProfile());
	}, []);
	return profile;
}
function useAllQuizStatus() {
	const [map, setMap] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		const next = {};
		for (const q of QUIZZES) {
			const p = loadProgress(q.id);
			const r = loadResult(q.id);
			next[q.id] = {
				progress: hasPartialProgress(q.id),
				result: Boolean(r),
				index: p?.index ?? 0,
				answered: p?.answers.filter((a) => a >= 0).length ?? 0
			};
		}
		setMap(next);
	}, []);
	return map;
}
//#endregion
export { useLastResult as n, useMergedProfile as r, useAllQuizStatus as t };
