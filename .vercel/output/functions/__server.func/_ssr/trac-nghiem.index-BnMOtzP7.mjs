import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as SiteShell } from "./router-Cg7OUugg.mjs";
import { t as Reveal } from "./Reveal-CQcsT8_a.mjs";
import { t as QuizPicker } from "./QuizPicker-tyOWTdto.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trac-nghiem.index-BnMOtzP7.js
var import_jsx_runtime = require_jsx_runtime();
function QuizzesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hero-wash",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-azure",
					children: "Thư viện test"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-2xl font-display text-4xl font-semibold text-navy",
					children: "Chọn bài trắc nghiệm phù hợp với bạn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "Từng câu một, có thể quay lại, kết quả lưu trên thiết bị. Không cần tài khoản."
				})
			] })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPicker, { heading: "Năm bài, một nhịp khám phá" })] });
}
//#endregion
export { QuizzesPage as component };
