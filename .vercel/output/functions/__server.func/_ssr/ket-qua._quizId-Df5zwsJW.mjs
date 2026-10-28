import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Button, i as Route$4, o as SiteShell, p as loadResult } from "./router-Cg7OUugg.mjs";
import { t as ResultView } from "./ResultView-DEDVaFkC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ket-qua._quizId-Df5zwsJW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResultRoute() {
	const { quizId } = Route$4.useParams();
	const [result, setResult] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		setResult(loadResult(quizId));
	}, [quizId]);
	if (result === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "skeleton h-48 rounded-[28px]" })
	}) });
	if (!result) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold text-navy",
				children: "Chưa có kết quả"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Hãy hoàn thành bài test để xem hồ sơ."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/trac-nghiem/$quizId",
					params: { quizId },
					children: "Làm trắc nghiệm"
				})
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultView, { result }) });
}
//#endregion
export { ResultRoute as component };
