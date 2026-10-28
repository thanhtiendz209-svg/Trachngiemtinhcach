import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Button, o as SiteShell } from "./router-Cg7OUugg.mjs";
import { t as Reveal } from "./Reveal-CQcsT8_a.mjs";
import { o as RIASEC_TYPES, s as UNIVERSITY_DISCLAIMER } from "./riasec-BIz0WNyr.mjs";
import { n as CAREER_ICONS, r as careerMatch, t as CAREERS } from "./careers-CRmzCeGe.mjs";
import { t as UniversityExplorer } from "./UniversityExplorer-DqnWuFVW.mjs";
import { r as useMergedProfile } from "./use-quiz-status-DK3SUv5D.mjs";
import { t as HollandStrip } from "./HollandStrip-qIY3NwN0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/huong-nghiep.index-DhkWb4Fp.js
var import_jsx_runtime = require_jsx_runtime();
function CareerPage() {
	const profile = useMergedProfile();
	const riasec = profile?.riasec;
	const list = CAREERS.map((c) => ({
		...c,
		match: profile ? careerMatch(c, profile.mbti, riasec?.code, riasec?.scores) : null
	})).sort((a, b) => (b.match ?? 0) - (a.match ?? 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hero-wash",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-azure",
						children: "Hướng nghiệp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 max-w-2xl font-display text-3xl font-semibold text-navy sm:text-4xl",
						children: "Khám phá trường Đại học & hướng đi phù hợp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm text-muted sm:text-base",
						children: "Lọc 126 trường theo khu vực, ngành và mức phù hợp RIASEC — rồi xem gợi ý nghề như bản đồ, không như lệnh."
					})
				] })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UniversityExplorer, {
			riasec,
			heading: "Khám phá trường Đại học"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "nganh-nghe",
			className: "mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-navy",
					children: "Gợi ý ngành nghề"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted",
					children: UNIVERSITY_DISCLAIMER
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2",
					children: list.map((c, i) => {
						const Icon = CAREER_ICONS[c.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 40,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex h-full flex-col rounded-[24px] bg-card p-6 shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-11 place-items-center rounded-[14px] bg-ice text-navy",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
										}), c.match != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-sm font-semibold tabular-nums text-azure",
											children: [c.match, "%"]
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-xl font-semibold text-navy",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: c.description
									}),
									c.match != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 h-1.5 overflow-hidden rounded-full bg-ice",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bar-fill h-full bg-cyan",
											style: { width: `${c.match}%` }
										})
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-azure",
										children: "Nhóm hay xuất hiện"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 flex flex-wrap gap-1.5",
										children: c.types.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/nhom-tinh-cach/$typeId",
											params: { typeId: t },
											className: "rounded-full bg-ice px-2.5 py-1 text-xs font-medium text-navy",
											children: t
										}, t))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "ghost",
										className: "mt-auto justify-start px-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/huong-nghiep/$careerId",
											params: { careerId: c.id },
											children: "Xem thêm"
										})
									})
								]
							})
						}, c.id);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sr-only",
			children: RIASEC_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: t.id,
				children: t.name
			}, t.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HollandStrip, {})
	] });
}
//#endregion
export { CareerPage as component };
