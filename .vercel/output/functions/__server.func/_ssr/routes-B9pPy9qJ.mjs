import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Compass, P as ArrowRight, a as UserRound, c as Target, l as Sparkles } from "../_libs/lucide-react.mjs";
import { b as Button, o as SiteShell } from "./router-Cg7OUugg.mjs";
import { t as Reveal } from "./Reveal-CQcsT8_a.mjs";
import { t as Faq } from "./Faq-DImF0CzQ.mjs";
import { n as CAREER_ICONS, t as CAREERS } from "./careers-CRmzCeGe.mjs";
import { t as HollandStrip } from "./HollandStrip-qIY3NwN0.mjs";
import { t as TypeGrid } from "./TypeGrid-lTA8UQB4.mjs";
import { t as QuizPicker } from "./QuizPicker-tyOWTdto.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B9pPy9qJ.js
var import_jsx_runtime = require_jsx_runtime();
function CareerPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-navy py-16 text-paper sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-cyan-soft",
						children: "Hướng đi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Khám phá hướng đi phù hợp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-cyan-soft/90",
						children: "Đây là gợi ý tham khảo — không phải lời khẳng định một nghề là “chắc chắn phù hợp”."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
					children: CAREERS.map((c, i) => {
						const Icon = CAREER_ICONS[c.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 50 + i * 40,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/huong-nghiep/$careerId",
								params: { careerId: c.id },
								className: "block h-full rounded-[20px] bg-white/8 p-4 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-cyan-soft" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display font-semibold",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 line-clamp-2 text-sm text-paper/70",
										children: c.description
									})
								]
							})
						}, c.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-8",
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "cyan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/huong-nghiep",
							hash: "bo-loc-truong",
							children: "Khám phá trường Đại học"
						})
					})
				})
			]
		})
	});
}
function CtaBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-azure px-6 py-10 text-paper sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-lg font-display text-3xl font-semibold",
					children: "Sẵn sàng nhìn mình rõ hơn một chút?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-cyan-soft",
					children: "Bắt đầu với một bài test. Kết quả ở lại trên thiết bị của bạn — không cần tài khoản."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "cyan",
					size: "lg",
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/trac-nghiem",
						children: "Bắt đầu trắc nghiệm"
					})
				})
			]
		}) })
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero-wash relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-20 top-10 size-56 rounded-full bg-cyan/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 bottom-0 size-72 rounded-full bg-azure/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24 lg:pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal is-in text-xs font-semibold uppercase tracking-[0.18em] text-azure",
						style: { animationDelay: "0ms" },
						children: "Trắc nghiệm tính cách & hướng nghiệp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "reveal is-in mt-4 max-w-xl font-display text-[2.05rem] font-semibold tracking-tight text-navy sm:text-5xl",
						style: { transitionDelay: "80ms" },
						children: "Khám phá tính cách – Hiểu bản thân – Chọn đúng hướng đi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal is-in mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg",
						style: { transitionDelay: "160ms" },
						children: "Lumina đồng hành cùng bạn qua từng câu hỏi, từng lớp kết quả — chậm, rõ, và luôn mang tính tham khảo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal is-in mt-8 flex flex-col gap-3 sm:flex-row",
						style: { transitionDelay: "240ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "ripple w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/trac-nghiem",
								children: ["Bắt đầu trắc nghiệm", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							size: "lg",
							className: "w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/nhom-tinh-cach",
								children: "Khám phá 16 nhóm"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "reveal is-in mt-10 grid grid-cols-3 gap-3 max-w-md",
						style: { transitionDelay: "320ms" },
						children: [
							["5", "bài test"],
							["16", "nhóm tính cách"],
							["10+", "nhóm ngành"]
						].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[var(--radius-lg)] bg-card/70 px-3 py-3 shadow-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-xl font-semibold tabular-nums text-navy",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-xs text-muted",
								children: l
							})]
						}, l))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal is-in relative",
					style: { transitionDelay: "180ms" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "float-slow overflow-hidden rounded-[28px] shadow-border-hover",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/illustrations/hero.jpg",
							alt: "Nhân vật khám phá bản đồ tính cách",
							className: "aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "float-slower absolute -bottom-4 left-4 rounded-[var(--radius-lg)] bg-card/95 px-4 py-3 shadow-border-hover sm:left-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-azure",
							children: "Hồ sơ mẫu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-semibold text-navy",
							children: "INFP · Người lý tưởng"
						})]
					})]
				})]
			})
		]
	});
}
var STEPS = [
	{
		n: "01",
		title: "Chọn bài test",
		body: "MBTI, RIASEC, Big Five hoặc hồ sơ tổng hợp — chọn nhịp bạn muốn đi."
	},
	{
		n: "02",
		title: "Trả lời từng câu",
		body: "Một câu một nhịp, có thể quay lại. Tiến độ được giữ trên máy bạn."
	},
	{
		n: "03",
		title: "Đọc kết quả theo lớp",
		body: "Không dồn hết một lúc. Kéo xuống để mở điểm mạnh, cách nghĩ, gợi ý nghề."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.18em] text-azure",
			children: "Cách hoạt động"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-display text-3xl font-semibold text-navy",
			children: "Ba bước, không vội"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 md:grid-cols-3",
			children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80 + i * 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-[24px] bg-card p-6 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold tabular-nums text-cyan",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-xl font-semibold text-navy",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: s.body
						})
					]
				})
			}, s.n))
		})]
	});
}
var CARDS = [
	{
		icon: UserRound,
		title: "Hiểu bản thân",
		body: "Nhìn ra cách bạn nạp năng lượng, nghĩ, quyết và sống — bằng ngôn ngữ đời thường."
	},
	{
		icon: Sparkles,
		title: "Khám phá điểm mạnh",
		body: "Không phải danh sách khen. Là thứ bạn làm tự nhiên khi không ai nhắc."
	},
	{
		icon: Compass,
		title: "Khám phá sở thích",
		body: "Việc nào làm bạn thấy sống, không chỉ việc nào nghe ‘hợp thời’."
	},
	{
		icon: Target,
		title: "Định hướng nghề nghiệp",
		body: "Gợi ý nhóm ngành để tham khảo — bạn vẫn là người chọn hướng đi."
	}
];
function IntroCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.18em] text-azure",
			children: "Vì sao Lumina"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 max-w-xl font-display text-3xl font-semibold text-navy",
			children: "Một hành trình, nhiều lớp hiểu"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: CARDS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80 + i * 90,
				as: "article",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group h-full rounded-[24px] bg-card p-5 shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 place-items-center rounded-[14px] bg-ice text-azure",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-semibold text-navy",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: c.body
						})
					]
				})
			}, c.title))
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroCards, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPicker, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeGrid, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HollandStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
