import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Button } from "./router-Cg7OUugg.mjs";
import { t as TypeImage } from "./TypePortrait-DBaao43x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TypeCard-DiiM1mlS.js
var import_jsx_runtime = require_jsx_runtime();
function TypeCard({ type }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-[24px] bg-card shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[5/4] overflow-hidden bg-ice",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.04]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeImage, {
					id: type.id,
					src: type.image,
					alt: `${type.id} — ${type.name}`
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-full bg-card/95 px-2.5 py-1 font-display text-xs font-semibold tracking-wide text-navy shadow-border",
				children: type.id
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold text-navy",
					children: type.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm italic text-azure",
					children: type.slogan
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm text-muted",
					children: type.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					className: "mt-auto w-full justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/nhom-tinh-cach/$typeId",
						params: { typeId: type.id },
						children: "Xem chi tiết"
					})
				})
			]
		})]
	});
}
//#endregion
export { TypeCard as t };
