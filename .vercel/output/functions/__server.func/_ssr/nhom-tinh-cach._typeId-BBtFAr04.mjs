import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Button, o as SiteShell, r as Route$2 } from "./router-Cg7OUugg.mjs";
import { t as Reveal } from "./Reveal-CQcsT8_a.mjs";
import { t as TypeImage } from "./TypePortrait-DBaao43x.mjs";
import { r as getPersonality, t as PERSONALITIES } from "./personalities-Cs8oYZbZ.mjs";
import { t as TypeCard } from "./TypeCard-DiiM1mlS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nhom-tinh-cach._typeId-BBtFAr04.js
var import_jsx_runtime = require_jsx_runtime();
var COMPATIBLE = {
	INTJ: [
		"ENFP",
		"ENTP",
		"INFJ"
	],
	INTP: [
		"ENTJ",
		"ENFJ",
		"INTJ"
	],
	ENTJ: [
		"INTP",
		"INFP",
		"ENTP"
	],
	ENTP: [
		"INFJ",
		"INTJ",
		"ENFP"
	],
	INFJ: [
		"ENTP",
		"ENFP",
		"INTJ"
	],
	INFP: [
		"ENFJ",
		"ENTJ",
		"ENFP"
	],
	ENFJ: [
		"INFP",
		"ISFP",
		"INFJ"
	],
	ENFP: [
		"INTJ",
		"INFJ",
		"ENTP"
	],
	ISTJ: [
		"ESFP",
		"ESTP",
		"ISFJ"
	],
	ISFJ: [
		"ESFP",
		"ESTP",
		"ISTJ"
	],
	ESTJ: [
		"ISTP",
		"ISFP",
		"ISTJ"
	],
	ESFJ: [
		"ISFP",
		"ISTP",
		"ISFJ"
	],
	ISTP: [
		"ESTJ",
		"ESFJ",
		"ESTP"
	],
	ISFP: [
		"ENFJ",
		"ESFJ",
		"INFP"
	],
	ESTP: [
		"ISFJ",
		"ISTJ",
		"ISTP"
	],
	ESFP: [
		"ISFJ",
		"ISTJ",
		"ESFJ"
	]
};
function compatibleIds(typeId) {
	return COMPATIBLE[typeId.toUpperCase()] ?? [];
}
function TypeDetail({ type }) {
	const related = PERSONALITIES.filter((p) => p.group === type.group && p.id !== type.id);
	const compatible = compatibleIds(type.id).map((id) => getPersonality(id)).filter((p) => Boolean(p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "hero-wash",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[28px] shadow-border-hover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeImage, {
						id: type.id,
						src: type.image,
						alt: `${type.id} ${type.name}`,
						className: "aspect-square w-full object-cover"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 80,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-semibold tracking-[0.2em] text-azure",
								children: type.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-4xl font-semibold text-navy",
								children: type.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-lg text-azure",
								children: type.slogan
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 180,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted",
							children: type.description
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 280,
						className: "mt-6 flex flex-wrap gap-2",
						children: type.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-card px-3 py-1.5 text-sm shadow-border",
							children: h
						}, h))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 340,
						className: "mt-6 no-print",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/trac-nghiem/$quizId",
								params: { quizId: "mbti" },
								children: "Làm trắc nghiệm MBTI"
							})
						})
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold text-navy",
				children: "Điểm nổi bật"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: type.highlights.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 70 + i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-[20px] bg-card p-5 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold tabular-nums text-cyan",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-medium text-navy",
							children: h
						})]
					})
				}, h))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6",
				children: [
					["Cách bạn thường suy nghĩ", type.thinking],
					["Cách bạn tương tác", type.interacting],
					["Cách bạn ra quyết định", type.deciding],
					["Cách bạn học tập", type.learning]
				].map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-[24px] bg-card p-6 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold text-navy",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: b
						})]
					})
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full rounded-[24px] bg-card p-6 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold text-navy",
						children: "Điểm mạnh"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: type.strengths.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" }), s]
						}, s))
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-[24px] bg-card p-6 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold text-navy",
							children: "Điểm cần lưu ý"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: type.improvements.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-azure" }), s]
							}, s))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-[24px] bg-card p-6 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold text-navy",
							children: "Môi trường phù hợp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: type.environment
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-[24px] bg-card p-6 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold text-navy",
								children: "Nhóm nghề tham khảo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: type.careers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-ice px-3 py-1.5 text-sm text-navy",
									children: c
								}, c))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted",
								children: type.note
							})
						]
					})
				})
			]
		}),
		compatible.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-navy",
					children: "Nhóm hay cộng hưởng"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Gợi ý làm việc / học tập cùng — không phải ‘định mệnh’."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-3",
					children: compatible.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeCard, { type: p })
					}, p.id))
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl font-semibold text-navy",
					children: ["Cùng nhóm với ", type.id]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeCard, { type: o })
					}, o.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					className: "mt-6 px-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/nhom-tinh-cach",
						children: "Đóng · Về lưới 16 nhóm"
					})
				})
			]
		})
	] });
}
function TypeRoute() {
	const { typeId } = Route$2.useParams();
	const type = getPersonality(typeId);
	if (!type) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-semibold text-navy",
			children: "Không có nhóm này"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/nhom-tinh-cach",
				children: "Khám phá 16 nhóm"
			})
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeDetail, { type }) });
}
//#endregion
export { TypeRoute as component };
