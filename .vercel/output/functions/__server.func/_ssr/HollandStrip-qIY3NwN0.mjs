import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./Reveal-CQcsT8_a.mjs";
import { o as RIASEC_TYPES } from "./riasec-BIz0WNyr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HollandStrip-qIY3NwN0.js
var import_jsx_runtime = require_jsx_runtime();
function HollandStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-mist/80 py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-azure",
					children: "Holland · RIASEC"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold text-navy",
					children: "Sáu kiểu việc, sáu cách bị cuốn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "Không phải hộp nghề — là loại việc làm bạn thấy sống. Dùng cùng kết quả tính cách để đọc hướng đi."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: RIASEC_TYPES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 50 + i * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/huong-nghiep",
						hash: t.id,
						className: "group flex h-full overflow-hidden rounded-[24px] bg-card shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.image,
							alt: "",
							className: "h-full w-28 shrink-0 object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] sm:w-32"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm font-semibold tracking-[0.16em] text-azure",
									children: t.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-lg font-semibold text-navy",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm italic text-azure",
									children: t.slogan
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-2 text-sm text-muted",
									children: t.summary
								})
							]
						})]
					})
				}, t.id))
			})]
		})
	});
}
//#endregion
export { HollandStrip as t };
