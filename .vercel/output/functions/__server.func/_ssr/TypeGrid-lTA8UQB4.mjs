import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { S as cn } from "./router-Cg7OUugg.mjs";
import { t as Reveal } from "./Reveal-CQcsT8_a.mjs";
import { n as PERSONALITY_GROUPS, t as PERSONALITIES } from "./personalities-Cs8oYZbZ.mjs";
import { t as TypeCard } from "./TypeCard-DiiM1mlS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TypeGrid-lTA8UQB4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TypeGrid() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => filter === "all" ? PERSONALITIES : PERSONALITIES.filter((p) => p.group === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-azure",
					children: "16 nhóm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold text-navy",
					children: "Khám phá các nhóm tính cách"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "Mỗi nhóm là một cách nhìn thế giới — không phải hộp để nhốt người."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Lọc nhóm",
				children: PERSONALITY_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": filter === g.id,
					onClick: () => setFilter(g.id),
					className: cn("min-h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150", filter === g.id ? "bg-navy text-paper shadow-border" : "bg-card text-muted shadow-border hover:text-navy"),
					children: g.label
				}, g.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: list.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeCard, { type: t })
				}, t.id))
			}, filter)
		]
	});
}
//#endregion
export { TypeGrid as t };
