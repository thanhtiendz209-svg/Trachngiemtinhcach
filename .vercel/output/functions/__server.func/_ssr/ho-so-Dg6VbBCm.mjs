import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Button, d as loadMergedProfile, g as QUIZZES, l as loadAllResults, o as SiteShell } from "./router-Cg7OUugg.mjs";
import { t as Reveal } from "./Reveal-CQcsT8_a.mjs";
import { t as ResultView } from "./ResultView-DEDVaFkC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ho-so-Dg6VbBCm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [all, setAll] = (0, import_react.useState)([]);
	const [merged, setMerged] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const list = loadAllResults();
		setAll(list);
		const m = loadMergedProfile();
		if (m.mbti || m.riasec || m.bigfive) setMerged({
			quizId: "combined",
			kind: "combined",
			completedAt: list[0]?.completedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			mbti: m.mbti,
			axes: m.axes,
			riasec: m.riasec,
			bigfive: m.bigfive,
			answers: []
		});
		setReady(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hero-wash",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-azure",
					children: "Hồ sơ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl font-semibold text-navy",
					children: "Hồ sơ hướng nghiệp của bạn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "Gộp kết quả các bài đã làm trên thiết bị này. Làm thêm bài để hồ sơ dày hơn."
				})
			] })
		})
	}), !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "skeleton h-40 rounded-[24px]" })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
			children: QUIZZES.map((q) => {
				const done = all.find((r) => r.quizId === q.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: done ? "/ket-qua/$quizId" : "/trac-nghiem/$quizId",
					params: { quizId: q.id },
					className: "rounded-[20px] bg-card p-4 shadow-border transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display font-semibold text-navy",
						children: q.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: done ? "Đã có kết quả" : "Chưa làm"
					})]
				}, q.id);
			})
		})
	}), merged ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultView, { result: merged }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold text-navy",
				children: "Chưa có hồ sơ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Hoàn thành một bài test để dựng chân dung đầu tiên."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/trac-nghiem",
					children: "Chọn bài trắc nghiệm"
				})
			})
		]
	})] })] });
}
//#endregion
export { ProfilePage as component };
