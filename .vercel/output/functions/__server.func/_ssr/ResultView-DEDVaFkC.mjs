import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Share2, k as Copy, m as Printer } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { b as Button, y as RIASEC_GROUP_MAX } from "./router-Cg7OUugg.mjs";
import { t as Reveal } from "./Reveal-CQcsT8_a.mjs";
import { t as TypeImage } from "./TypePortrait-DBaao43x.mjs";
import { c as getRiasec, i as RIASEC_KEYS, l as getRiasecCombination, r as RIASEC_DISCLAIMER, s as UNIVERSITY_DISCLAIMER, t as FIT_NOTE, u as rankRiasec } from "./riasec-BIz0WNyr.mjs";
import { n as CAREER_ICONS, r as careerMatch, t as CAREERS } from "./careers-CRmzCeGe.mjs";
import { r as getPersonality } from "./personalities-Cs8oYZbZ.mjs";
import { n as resultTitle, t as resultSubtitle } from "./quiz-engine-q3ysCwGC.mjs";
import { t as UniversityExplorer } from "./UniversityExplorer-DqnWuFVW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ResultView-DEDVaFkC.js
var import_jsx_runtime = require_jsx_runtime();
var BIGFIVE_TRAITS = [
	{
		id: "O",
		name: "Cởi mở với trải nghiệm",
		axis: "Quen thuộc ← → Khám phá",
		low: "Bạn ổn với thói quen, thích cái đã kiểm chứng, ít bị cuốn bởi ý lạ chỉ vì nó lạ.",
		mid: "Bạn mở khi việc cần, và giữ nếp khi nếp đang chạy tốt.",
		high: "Bạn sống với ý mới, góc lạ, nghệ thuật và câu hỏi ‘còn cách nào khác’.",
		note: "Cởi mở nuôi sáng tạo. Quen thuộc nuôi độ sâu. Cả hai đều dùng được."
	},
	{
		id: "C",
		name: "Tận tâm",
		axis: "Linh hoạt ← → Kỷ luật",
		low: "Bạn bắt đầu nhiều, đổi hướng khi hết hứng, ghét khung cứng.",
		mid: "Bạn có nếp vừa đủ: hạn quan trọng thì giữ, việc nhỏ thì linh.",
		high: "Bạn lên kế hoạch, giữ lời, thích thấy tiến độ được tick.",
		note: "Tận tâm giúp việc về đích. Đừng để checklist át mất việc đúng."
	},
	{
		id: "E",
		name: "Hướng ngoại",
		axis: "Nội tâm ← → Bùng nở",
		low: "Bạn đầy pin khi yên. Gặp nhiều người cần được bù bằng im lặng.",
		mid: "Bạn vào được phòng đông và cũng cần buổi tối không ai gọi.",
		high: "Bạn lấy năng lượng từ người, chuyện, nhịp chung.",
		note: "Không có cực nào ‘xã hội hơn’. Chỉ khác chỗ lấy pin."
	},
	{
		id: "A",
		name: "Hòa hợp",
		axis: "Thẳng ← → Mềm",
		low: "Bạn nói thẳng, giữ chuẩn, có thể bị thấy là cứng — miễn việc đúng.",
		mid: "Bạn mềm khi quan hệ cần, và thẳng khi việc cần.",
		high: "Bạn để ý cảm xúc người khác, sẵn nhường một phần ý để giữ khí phòng.",
		note: "Hòa hợp giữ người. Sự thẳng giữ việc. Biết lúc nào dùng cái nào."
	},
	{
		id: "N",
		name: "Nhạy cảm xúc",
		axis: "Ổn định ← → Nhạy",
		low: "Bạn giữ được đầu khi áp lực tăng, tâm trạng ít bị kéo mạnh.",
		mid: "Có ngày sóng, có ngày phẳng. Bạn lấy lại được nếu được thở.",
		high: "Bạn cảm sớm, lo trước, cần thời gian để nhịp trở lại.",
		note: "Nhạy không phải yếu. Đó là radar — chỉ cần nơi hạ cánh."
	}
];
var BIGFIVE_MAP = Object.fromEntries(BIGFIVE_TRAITS.map((t) => [t.id, t]));
function bigfiveBand(score) {
	if (score >= 67) return "high";
	if (score <= 33) return "low";
	return "mid";
}
function bigfiveCopy(id, score) {
	const t = BIGFIVE_MAP[id];
	if (!t) return "";
	return t[bigfiveBand(score)];
}
var AXES = [
	{
		key: "energy",
		left: "Hướng nội",
		right: "Hướng ngoại",
		leftCode: "I",
		rightCode: "E"
	},
	{
		key: "sensing",
		left: "Trực giác",
		right: "Giác quan",
		leftCode: "N",
		rightCode: "S"
	},
	{
		key: "thinking",
		left: "Cảm xúc",
		right: "Lý trí",
		leftCode: "F",
		rightCode: "T"
	},
	{
		key: "judging",
		left: "Linh hoạt",
		right: "Nguyên tắc",
		leftCode: "P",
		rightCode: "J"
	}
];
function AxisBars({ axes }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 pb-12 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-semibold text-navy",
			children: "Hai cực chi tiết"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Điểm đánh dấu là chỗ bạn nghiêng trên mỗi trục."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-5",
			children: AXES.map((a, i) => {
				const rightPct = axes[a.key];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80 + i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [
									a.left,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display font-semibold text-navy",
										children: a.leftCode
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display font-semibold text-navy",
										children: a.rightCode
									}),
									" ",
									a.right
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-3 rounded-full bg-ice",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bar-fill absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan/50 to-azure/80",
								style: {
									width: `${rightPct}%`,
									animationDelay: `${i * 80}ms`
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy shadow-border",
								style: { left: `${rightPct}%` }
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-right text-xs tabular-nums text-muted",
							children: [
								rightPct,
								"% ",
								a.rightCode
							]
						})
					] })
				}, a.key);
			})
		})]
	});
}
var ITEMS = [
	{
		key: "energy",
		label: "Năng lượng",
		left: "Hướng nội",
		right: "Hướng ngoại",
		leftCode: "I",
		rightCode: "E"
	},
	{
		key: "sensing",
		label: "Nhận thức",
		left: "Trực giác",
		right: "Giác quan",
		leftCode: "N",
		rightCode: "S"
	},
	{
		key: "thinking",
		label: "Ra quyết định",
		left: "Cảm xúc",
		right: "Lý trí",
		leftCode: "F",
		rightCode: "T"
	},
	{
		key: "judging",
		label: "Phong cách sống",
		left: "Linh hoạt",
		right: "Nguyên tắc",
		leftCode: "P",
		rightCode: "J"
	}
];
function Ring({ value, code }) {
	const r = 34;
	const c = 2 * Math.PI * r;
	const offset = c * (1 - value / 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto size-[5.5rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 88 88",
			className: "size-[5.5rem] -rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "44",
				cy: "44",
				r,
				fill: "none",
				className: "stroke-ice",
				strokeWidth: "8"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "44",
				cy: "44",
				r,
				fill: "none",
				className: "ring-draw stroke-azure",
				strokeWidth: "8",
				strokeLinecap: "round",
				strokeDasharray: c,
				strokeDashoffset: offset,
				style: { ["--ring"]: String(c) }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg font-semibold leading-none text-navy",
				children: code
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-[11px] tabular-nums text-muted",
				children: [value, "%"]
			})]
		})]
	});
}
function RadialStats({ axes }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl font-semibold text-navy",
			children: "Các chỉ số"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Mức nghiêng về từng cực — không phải điểm tốt hay xấu."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4",
			children: ITEMS.map((item, i) => {
				const right = axes[item.key];
				const useRight = right >= 50;
				const value = useRight ? right : 100 - right;
				const code = useRight ? item.rightCode : item.leftCode;
				const pole = useRight ? item.right : item.left;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80 + i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-[24px] bg-card px-3 py-5 text-center shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {
								value,
								code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-azure",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium text-navy",
								children: pole
							})
						]
					})
				}, item.key);
			})
		})]
	});
}
function RiasecResult({ riasec, showUniversity = true }) {
	const combo = getRiasecCombination(riasec.code);
	const top3 = rankRiasec(riasec.scores).slice(0, 3);
	const careers = CAREERS.map((c) => ({
		...c,
		match: careerMatch(c, void 0, riasec.code, riasec.scores)
	})).sort((a, b) => b.match - a.match);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.16em] text-azure",
						children: "Mã RIASEC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold text-navy",
						children: riasec.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-lg text-azure",
						children: combo.title
					}),
					combo.source === "fallback" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 rounded-[16px] bg-ice px-4 py-3 text-sm text-muted",
						children: [
							"Nội dung tổ hợp ",
							riasec.code,
							" chưa có trong tài liệu Batch — đang dùng fallback từ ba nhóm thành phần."
						]
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-navy",
						children: "Điểm 6 nhóm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: RIASEC_KEYS.map((id, i) => {
							const t = getRiasec(id);
							const v = riasec.scores[id] ?? 0;
							const max = riasec.maxScores?.[id] ?? RIASEC_GROUP_MAX[id] ?? 50;
							const w = Math.round(v / Math.max(1, max) * 100);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 40,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-navy",
										children: [
											id,
											" · ",
											t?.name
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: [
											v,
											"/",
											max
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-2.5 overflow-hidden rounded-full bg-ice",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bar-fill h-full rounded-full bg-cyan",
										style: { width: `${w}%` }
									})
								})] })
							}, id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold text-navy",
							children: "Top 3 nhóm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: ["Kết quả: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-semibold text-navy",
								children: riasec.code
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-3",
							children: top3.map((letter, i) => {
								const t = getRiasec(letter);
								const v = riasec.scores[letter] ?? 0;
								const max = riasec.maxScores?.[letter] ?? 50;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i * 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "overflow-hidden rounded-[20px] bg-card shadow-border",
										children: [t?.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: t.image,
											alt: "",
											className: "aspect-[16/10] w-full object-cover"
										}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-2xl font-semibold text-azure",
													children: letter
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "mt-1 font-semibold text-navy",
													children: t?.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-sm tabular-nums text-muted",
													children: [
														v,
														"/",
														max
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-muted",
													children: t?.summary
												})
											]
										})]
									})
								}, letter);
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-azure",
					children: "Câu nói đặc trưng"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-3 font-display text-2xl font-semibold leading-snug text-navy",
					children: [
						"“",
						combo.quote,
						"”"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-navy",
						children: "Tổng quan tính cách"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl leading-relaxed text-muted",
						children: combo.overview
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "h-full rounded-[24px] bg-card p-6 shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold text-navy",
					children: "Điểm mạnh"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-ink",
					children: combo.strengths.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" }), s]
					}, s))
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full rounded-[24px] bg-card p-6 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-navy",
						children: "Điểm cần phát triển"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-ink",
						children: combo.improvements.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-azure" }), s]
						}, s))
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold text-navy",
					children: "Định hướng nghề nghiệp"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
					children: combo.advice
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: combo.careers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-card px-3 py-1.5 text-sm text-navy shadow-border",
						children: c
					}, c))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-semibold text-navy",
				children: "Gợi ý ngành"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: FIT_NOTE
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: careers.slice(0, 6).map((c, i) => {
					const Icon = CAREER_ICONS[c.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex h-full flex-col rounded-[20px] bg-card p-5 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-[12px] bg-ice text-navy",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-sm font-semibold tabular-nums text-azure",
										children: [c.match, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-3 font-display font-semibold text-navy",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: c.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted",
									children: [
										"Phù hợp về sở thích: ",
										c.match,
										"%"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-1.5 overflow-hidden rounded-full bg-ice",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bar-fill h-full bg-cyan",
										style: { width: `${c.match}%` }
									})
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
			})]
		}),
		showUniversity ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UniversityExplorer, {
				riasec,
				heading: "Gợi ý trường Đại học & ngành phù hợp với tính cách",
				compact: true
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: RIASEC_DISCLAIMER
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: UNIVERSITY_DISCLAIMER
			})]
		})
	] });
}
function copyProfile(result) {
	const person = result.mbti ? getPersonality(result.mbti) : void 0;
	const holland = result.riasec ? getRiasec(result.riasec.code[0] ?? "") : void 0;
	const lines = [
		resultTitle(result),
		resultSubtitle(result),
		person?.summary ?? holland?.summary ?? "",
		result.riasec ? `Holland: ${result.riasec.code}` : "",
		"Kết quả mang tính tham khảo — Lumina."
	].filter(Boolean);
	navigator.clipboard.writeText(lines.join("\n")).then(() => toast.success("Đã sao chép hồ sơ"), () => toast.error("Không sao chép được. Hãy thử lại."));
}
async function shareProfile(result) {
	const title = resultTitle(result);
	const text = `${title} — ${resultSubtitle(result)}`;
	try {
		if (navigator.share) {
			await navigator.share({
				title,
				text,
				url: window.location.href
			});
			return;
		}
	} catch {
		return;
	}
	copyProfile(result);
}
function ResultView({ result }) {
	const person = result.mbti ? getPersonality(result.mbti) : void 0;
	const topHolland = result.riasec ? getRiasec(result.riasec.code[0] ?? "") : void 0;
	const combo = result.riasec ? getRiasecCombination(result.riasec.code) : void 0;
	const careers = CAREERS.map((c) => ({
		...c,
		match: careerMatch(c, result.mbti, result.riasec?.code, result.riasec?.scores)
	})).sort((a, b) => b.match - a.match);
	const heroImg = person?.image ?? topHolland?.image ?? (result.bigfive ? "/illustrations/quiz-bigfive.jpg" : void 0);
	const heroAlt = person ? `${person.id} ${person.name}` : topHolland?.name ?? "Hồ sơ";
	const heroSummary = person?.summary ?? combo?.overview ?? topHolland?.summary ?? "Đây là chân dung tham khảo dựa trên câu trả lời của bạn. Dùng để soi, không phải để đóng khung.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "hero-wash",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[28px] shadow-border-hover",
					children: person ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeImage, {
						id: person.id,
						src: person.image,
						alt: heroAlt,
						className: "aspect-square w-full object-cover"
					}) : heroImg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: heroImg,
						alt: heroAlt,
						className: "aspect-square w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid aspect-square place-items-center bg-ice font-display text-4xl text-navy",
						children: "BF"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 120,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.16em] text-azure",
								children: "Kết quả"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl",
								children: resultTitle(result)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl text-azure",
								children: resultSubtitle(result)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 240,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-muted",
							children: heroSummary
						}), person ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: person.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-card px-3 py-1.5 text-sm text-navy shadow-border",
								children: h
							}, h))
						}) : topHolland ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: topHolland.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-card px-3 py-1.5 text-sm text-navy shadow-border",
								children: h
							}, h))
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 360,
						className: "mt-6 flex flex-wrap gap-3 no-print",
						children: [
							person ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/nhom-tinh-cach/$typeId",
									params: { typeId: person.id },
									children: "Xem chi tiết nhóm"
								})
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/trac-nghiem/$quizId",
									params: { quizId: result.quizId },
									children: "Làm lại bài test"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								type: "button",
								onClick: () => copyProfile(result),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Sao chép"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								type: "button",
								onClick: () => void shareProfile(result),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }), "Chia sẻ"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								type: "button",
								onClick: () => window.print(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "In"]
							})
						]
					})
				] })]
			})
		}),
		result.axes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialStats, { axes: result.axes }) : null,
		result.axes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisBars, { axes: result.axes }) : null,
		person ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-navy",
					children: "Điểm nổi bật"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: person.highlights.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80 + i * 70,
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
						["Cách bạn thường suy nghĩ", person.thinking],
						["Cách bạn tương tác", person.interacting],
						["Cách bạn ra quyết định", person.deciding],
						["Cách bạn học tập", person.learning]
					].map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full rounded-[24px] bg-card p-6 shadow-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full rounded-[24px] bg-card p-6 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold text-navy",
						children: "Điểm mạnh"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-ink",
						children: person.strengths.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" }), s]
						}, s))
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-[24px] bg-card p-6 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold text-navy",
							children: "Điểm cần cải thiện"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm text-ink",
							children: person.improvements.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-azure" }), s]
							}, s))
						})]
					})
				})]
			})
		] }) : null,
		result.riasec ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiasecResult, { riasec: result.riasec }) : null,
		result.bigfive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold text-navy",
				children: "Năm chiều Big Five"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Không có chiều nào tốt hơn — chỉ khác cách bạn vận hành."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: BIGFIVE_TRAITS.map((t, i) => {
					const v = result.bigfive?.[t.id] ?? 50;
					const band = bigfiveBand(v);
					const label = band === "high" ? "Cao" : band === "low" ? "Thấp" : "Trung bình";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full rounded-[24px] bg-card p-5 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-semibold text-navy",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-ice px-2.5 py-1 text-xs font-semibold tabular-nums text-azure",
										children: [
											v,
											"% · ",
											label
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: t.axis
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-2 overflow-hidden rounded-full bg-ice",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bar-fill h-full rounded-full bg-azure",
										style: { width: `${v}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: bigfiveCopy(t.id, v)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-navy",
									children: t.note
								})
							]
						})
					}, t.id);
				})
			})]
		}) : null,
		!result.riasec ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-navy",
					children: "Nhóm nghề có thể phù hợp"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Mức phù hợp là ước lượng tham khảo, không phải kết luận nghề nghiệp."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: careers.slice(0, 6).map((c, i) => {
						const Icon = CAREER_ICONS[c.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 50,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex h-full flex-col rounded-[20px] bg-card p-5 shadow-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-10 place-items-center rounded-[12px] bg-ice text-navy",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-sm font-semibold tabular-nums text-azure",
											children: [c.match, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display font-semibold text-navy",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: c.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 h-1.5 overflow-hidden rounded-full bg-ice",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bar-fill h-full bg-cyan",
											style: { width: `${c.match}%` }
										})
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
				})]
			})
		}) : null
	] });
}
//#endregion
export { ResultView as t };
