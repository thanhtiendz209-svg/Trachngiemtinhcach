import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowLeft, N as Check, P as ArrowRight, p as RotateCcw } from "../_libs/lucide-react.mjs";
import { S as cn, _ as getQuiz, b as Button, f as loadProgress, h as saveResult, m as saveProgress, n as Route, o as SiteShell, p as loadResult, s as clearProgress, v as questionsFor, x as Logo } from "./router-Cg7OUugg.mjs";
import { r as scoreQuiz } from "./quiz-engine-q3ysCwGC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trac-nghiem._quizId-Dk4syVnR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINES = [
	"Đang tổng hợp câu trả lời…",
	"Đang phân tích xu hướng tính cách…",
	"Đang xác định nhóm nổi bật…",
	"Đang xây dựng hồ sơ của bạn…"
];
var FLOAT = [
	"INFP",
	"ENTJ",
	"ISFJ",
	"ESTP",
	"INTJ",
	"ENFP"
];
function AnalysisScreen({ onDone }) {
	const [pct, setPct] = (0, import_react.useState)(0);
	const [line, setLine] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t0 = Date.now();
		const total = 4200;
		const id = window.setInterval(() => {
			const p = Math.min(100, Math.round((Date.now() - t0) / total * 100));
			setPct(p);
			setLine(Math.min(3, Math.floor(p / 25)));
			if (p >= 100) {
				window.clearInterval(id);
				window.setTimeout(onDone, 280);
			}
		}, 50);
		return () => window.clearInterval(id);
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 hero-wash opacity-80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid size-28 place-items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 96 96",
					className: "absolute inset-0 size-28 -rotate-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "48",
						cy: "48",
						r: "40",
						fill: "none",
						className: "stroke-ice",
						strokeWidth: "6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "48",
						cy: "48",
						r: "40",
						fill: "none",
						className: "stroke-cyan",
						strokeWidth: "6",
						strokeLinecap: "round",
						strokeDasharray: 2 * Math.PI * 40,
						strokeDashoffset: 2 * Math.PI * 40 * (1 - pct / 100)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display text-xl font-semibold tabular-nums text-navy",
					children: [pct, "%"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "relative mt-8 font-display text-2xl font-semibold text-navy sm:text-3xl",
				children: "Đang phân tích kết quả của bạn…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-3 min-h-6 text-muted",
				"aria-live": "polite",
				children: LINES[line]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-10 flex max-w-md flex-wrap justify-center gap-3",
				children: FLOAT.map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "float-slow rounded-full bg-card px-3 py-1.5 font-display text-xs font-semibold text-navy shadow-border",
					style: { animationDelay: `${i * .35}s` },
					children: id
				}, id))
			})
		]
	});
}
function QuizPlayer({ quiz }) {
	const questions = (0, import_react.useMemo)(() => questionsFor(quiz.id), [quiz.id]);
	const navigate = useNavigate();
	const [ready, setReady] = (0, import_react.useState)(false);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)(() => Array(questions.length).fill(-1));
	const [dir, setDir] = (0, import_react.useState)("next");
	const [phase, setPhase] = (0, import_react.useState)("quiz");
	const [savedResult, setSavedResult] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [animKey, setAnimKey] = (0, import_react.useState)(0);
	const autoRef = (0, import_react.useRef)(0);
	const indexRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		indexRef.current = index;
	}, [index]);
	(0, import_react.useEffect)(() => {
		const saved = loadProgress(quiz.id);
		const existing = loadResult(quiz.id);
		setSavedResult(existing);
		if (Boolean(saved && saved.answers.length === questions.length && saved.answers.some((a) => a >= 0)) && saved) {
			setAnswers(saved.answers);
			setIndex(Math.min(saved.index, questions.length - 1));
			setPhase("gate");
		} else if (existing) {
			setAnswers(Array(questions.length).fill(-1));
			setIndex(0);
			setPhase("gate");
		} else {
			setAnswers(Array(questions.length).fill(-1));
			setIndex(0);
			setPhase("intro");
		}
		setReady(true);
		return () => window.clearTimeout(autoRef.current);
	}, [quiz.id, questions.length]);
	(0, import_react.useEffect)(() => {
		if (!ready || phase !== "quiz") return;
		saveProgress({
			quizId: quiz.id,
			index,
			answers,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	}, [
		answers,
		index,
		quiz.id,
		ready,
		phase
	]);
	const q = questions[index];
	const selected = answers[index] ?? -1;
	const pct = Math.round(answers.filter((a) => a >= 0).length / questions.length * 100);
	const last = index === questions.length - 1;
	const answeredCount = answers.filter((a) => a >= 0).length;
	const go = (0, import_react.useCallback)((nextIndex, d) => {
		window.clearTimeout(autoRef.current);
		setDir(d);
		setAnimKey((k) => k + 1);
		setIndex(nextIndex);
		setError("");
	}, []);
	const choose = (optIndex) => {
		setError("");
		const i = indexRef.current;
		setAnswers((prev) => {
			const next = [...prev];
			next[i] = optIndex;
			return next;
		});
		if (i >= questions.length - 1) return;
		window.clearTimeout(autoRef.current);
		autoRef.current = window.setTimeout(() => {
			go(i + 1, "next");
		}, 420);
	};
	const continueNext = () => {
		window.clearTimeout(autoRef.current);
		if ((answers[index] ?? -1) < 0) {
			setError("Hãy chọn một đáp án trước khi tiếp tục.");
			return;
		}
		if (last) {
			setPhase("analyzing");
			return;
		}
		go(index + 1, "next");
	};
	const finish = (0, import_react.useCallback)(() => {
		const result = scoreQuiz(quiz.id, answers);
		if (!result) return;
		saveResult(result);
		navigate({
			to: "/ket-qua/$quizId",
			params: { quizId: quiz.id }
		});
	}, [
		answers,
		navigate,
		quiz.id
	]);
	const startFresh = () => {
		window.clearTimeout(autoRef.current);
		clearProgress(quiz.id);
		setAnswers(Array(questions.length).fill(-1));
		setIndex(0);
		setAnimKey((k) => k + 1);
		setDir("next");
		setPhase("intro");
		setError("");
	};
	(0, import_react.useEffect)(() => {
		if (phase !== "quiz") return;
		const onKey = (e) => {
			if (e.metaKey || e.ctrlKey || e.altKey) return;
			const target = e.target;
			if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
			const n = Number(e.key);
			if (n >= 1 && n <= 9 && q && n <= q.options.length) {
				e.preventDefault();
				choose(n - 1);
			}
			if (e.key === "Enter" || e.key === "ArrowRight") {
				e.preventDefault();
				continueNext();
			}
			if (e.key === "ArrowLeft" && indexRef.current > 0) {
				e.preventDefault();
				go(indexRef.current - 1, "back");
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "skeleton h-3 w-full rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "skeleton mt-8 h-40 rounded-[24px]" })]
	});
	if (phase === "gate") {
		const resuming = answeredCount > 0;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-dvh flex-col bg-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-line px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/trac-nghiem",
						className: "text-sm font-medium text-muted hover:text-navy",
						children: "Thoát"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex w-full max-w-lg flex-1 items-center px-4 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full rounded-[28px] bg-card p-6 shadow-border sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.16em] text-azure",
							children: ["Trắc nghiệm ", quiz.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-2xl font-semibold text-navy",
							children: resuming ? "Tiếp tục bài đang làm dở?" : "Bạn đã có một hồ sơ rồi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: resuming ? `Bạn đang ở câu ${String(Math.min(index + 1, questions.length)).padStart(2, "0")} / ${questions.length}. Câu trả lời trước đó vẫn được giữ.` : "Làm lại sẽ tạo hồ sơ mới trên thiết bị này. Hồ sơ cũ vẫn xem được cho đến khi bạn hoàn thành bài mới."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-2",
							children: [
								resuming ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => setPhase("quiz"),
									className: "w-full",
									children: ["Tiếp tục", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}) : null,
								savedResult ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: resuming ? "secondary" : "primary",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/ket-qua/$quizId",
										params: { quizId: quiz.id },
										children: "Xem kết quả đã lưu"
									})
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "secondary",
									onClick: startFresh,
									className: "w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Làm lại từ đầu"]
								})
							]
						})
					]
				})
			})]
		});
	}
	if (phase === "intro") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line px-4 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/trac-nghiem",
					className: "text-sm font-medium text-muted hover:text-navy",
					children: "Thoát"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex w-full max-w-2xl flex-1 items-center px-4 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "w-full overflow-hidden rounded-[28px] bg-card shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: quiz.image,
					alt: "",
					className: "aspect-[16/8] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.16em] text-azure",
							children: ["Trắc nghiệm ", quiz.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-2xl font-semibold text-navy",
							children: quiz.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: quiz.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-2 text-sm text-ink",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									quiz.questionCount,
									" câu · ",
									quiz.duration
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Một câu một nhịp — có thể quay lại" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tiến độ lưu trên máy bạn, không cần tài khoản" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-2 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => setPhase("quiz"),
								className: "w-full sm:w-auto",
								children: ["Bắt đầu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								className: "w-full sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/trac-nghiem",
									children: "Chọn bài khác"
								})
							})]
						})
					]
				})]
			})
		})]
	});
	if (phase === "analyzing") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line px-4 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisScreen, { onDone: finish })]
	});
	if (!q) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-semibold text-navy",
			children: "Không tải được câu hỏi"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/trac-nghiem",
				children: "Về thư viện"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line/80 bg-paper/90 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: startFresh,
						className: "hidden text-sm font-medium text-muted transition-colors duration-150 hover:text-navy sm:inline",
						children: "Làm lại"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/trac-nghiem",
						className: "text-sm font-medium text-muted transition-colors duration-150 hover:text-navy",
						children: "Thoát"
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-azure",
					children: ["Trắc nghiệm ", quiz.name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-sm font-semibold tabular-nums text-navy",
						children: [
							"Câu ",
							String(index + 1).padStart(2, "0"),
							" / ",
							questions.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm tabular-nums text-muted",
						children: [pct, "%"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-2 overflow-hidden rounded-full bg-ice",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "progress-bar h-full rounded-full bg-gradient-to-r from-azure to-cyan",
						style: { width: `${Math.max(6, (index + (selected >= 0 ? 1 : 0)) / questions.length * 100)}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("mt-8", dir === "next" ? "q-enter-next" : "q-enter-back"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-[28px] bg-card p-5 shadow-border sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tabular-nums text-cyan",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-2xl font-semibold leading-snug text-navy sm:text-[1.75rem]",
								children: q.text
							}),
							q.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: q.hint
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-3",
								children: q.options.map((opt, i) => {
									const on = selected === i;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => choose(i),
										className: cn("option-card flex min-h-14 items-start gap-3 rounded-[18px] border px-4 py-3.5 text-left", on && "is-on"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border text-[11px] font-semibold tabular-nums transition-[background-color,border-color,color] duration-150", on ? "border-azure bg-azure text-paper" : "border-line text-muted"),
											children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "size-3.5",
												strokeWidth: 3
											}) : i + 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[0.95rem] leading-snug text-ink",
											children: opt.label
										})]
									}, opt.label);
								})
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-danger",
								role: "alert",
								children: error
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-xs text-muted",
								children: [
									"Phím 1–",
									q.options.length,
									" để chọn · Enter để tiếp tục"
								]
							})
						]
					})
				}, animKey),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: () => go(index - 1, "back"),
						disabled: index === 0,
						className: "min-w-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Quay lại"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: continueNext,
						className: "min-w-32",
						children: [last ? "Xem kết quả" : "Tiếp tục", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})
			]
		})]
	});
}
function QuizRoute() {
	const { quizId } = Route.useParams();
	const quiz = getQuiz(quizId);
	if (!quiz) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold text-navy",
				children: "Không tìm thấy bài test"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Liên kết có thể đã đổi. Chọn lại từ thư viện nhé."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/trac-nghiem",
					children: "Về thư viện trắc nghiệm"
				})
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPlayer, { quiz });
}
//#endregion
export { QuizRoute as component };
