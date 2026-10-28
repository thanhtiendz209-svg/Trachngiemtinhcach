import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Compass, P as ArrowRight, S as Heart, j as Clock, l as Sparkles, v as Map, y as Layers } from "../_libs/lucide-react.mjs";
import { S as cn, b as Button, g as QUIZZES } from "./router-Cg7OUugg.mjs";
import { t as Reveal } from "./Reveal-CQcsT8_a.mjs";
import { t as useAllQuizStatus } from "./use-quiz-status-DK3SUv5D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/QuizPicker-tyOWTdto.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	compass: Compass,
	layers: Layers,
	spark: Sparkles,
	heart: Heart,
	map: Map
};
function QuizPicker({ heading = "Chọn bài trắc nghiệm phù hợp với bạn" }) {
	const status = useAllQuizStatus();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-mist/80 py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-azure",
					children: "Bài test"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-xl font-display text-3xl font-semibold text-navy",
					children: heading
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "Làm từng câu một, lưu tiến độ trên máy bạn, xem lại kết quả bất cứ lúc nào."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: QUIZZES.map((q, i) => {
					const Icon = ICONS[q.icon];
					const st = status[q.id];
					const featured = q.id === "combined";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 70 + i * 70,
						as: "article",
						className: featured ? "md:col-span-2" : void 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("group flex h-full flex-col overflow-hidden rounded-[24px] bg-card shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover", featured && "md:flex-row"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("relative overflow-hidden bg-ice", featured ? "aspect-[16/10] md:aspect-auto md:w-[46%]" : "aspect-[16/10]"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: q.image,
									alt: "",
									className: "h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-3 top-3 grid size-10 place-items-center rounded-[14px] bg-card/95 text-navy shadow-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-5 sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold text-navy",
										children: q.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-azure",
										children: q.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: q.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 flex flex-wrap gap-3 text-xs font-medium text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }),
												" ",
												q.duration
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [q.questionCount, " câu hỏi"] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex flex-wrap gap-2 pt-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "primary",
											className: "w-full sm:w-auto",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/trac-nghiem/$quizId",
												params: { quizId: q.id },
												children: [st?.progress ? "Tiếp tục" : "Bắt đầu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
											})
										}), st?.result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "secondary",
											className: "w-full sm:w-auto",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/ket-qua/$quizId",
												params: { quizId: q.id },
												children: "Xem kết quả"
											})
										}) : null]
									})
								]
							})]
						})
					}, q.id);
				})
			})]
		})
	});
}
//#endregion
export { QuizPicker as t };
