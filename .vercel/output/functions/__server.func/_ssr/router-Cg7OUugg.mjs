import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react, s as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Facebook, g as Menu, n as X, s as TriangleAlert, t as Youtube, x as Instagram } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cg7OUugg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function pct(part, whole) {
	if (whole <= 0) return 50;
	return Math.round(part / whole * 100);
}
function Logo({ className, onClick, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		onClick,
		className: cn("flex items-center gap-2.5 no-underline", light ? "text-paper" : "text-navy", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative grid size-9 place-items-center rounded-[12px] bg-navy shadow-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "size-5",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "16",
						r: "10",
						fill: "none",
						stroke: "#7EDCE6",
						strokeWidth: "1.6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "16",
						r: "4.2",
						fill: "#2AB8C9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "16",
						r: "1.6",
						fill: "#E8F3FB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M16 4.5v3.2M16 24.3v3.2M4.5 16h3.2M24.3 16h3.2",
						stroke: "#E8F3FB",
						strokeWidth: "1.4",
						strokeLinecap: "round"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-[1.05rem] font-semibold tracking-tight",
				children: "Lumina"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em]", light ? "text-cyan-soft" : "text-muted"),
				children: "Hướng nghiệp"
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 border-t border-line bg-navy text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-cyan-soft/90",
							children: "Lumina giúp bạn nhìn rõ hơn về tính cách, điểm mạnh và hướng đi phù hợp — chậm rãi, trung thực, mang tính tham khảo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex gap-2",
							children: [
								Facebook,
								Instagram,
								Youtube
							].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/gioi-thieu#lien-he",
								className: "grid size-10 place-items-center rounded-full bg-white/8 text-paper transition-[background-color] duration-150 hover:bg-white/16",
								"aria-label": "Mạng xã hội",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
							}, i))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.14em] text-cyan-soft",
					children: "Trắc nghiệm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trac-nghiem",
							className: "text-paper/85 hover:text-cyan-soft",
							children: "Tất cả bài test"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trac-nghiem/$quizId",
							params: { quizId: "mbti" },
							className: "text-paper/85 hover:text-cyan-soft",
							children: "MBTI"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trac-nghiem/$quizId",
							params: { quizId: "riasec" },
							className: "text-paper/85 hover:text-cyan-soft",
							children: "RIASEC"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trac-nghiem/$quizId",
							params: { quizId: "bigfive" },
							className: "text-paper/85 hover:text-cyan-soft",
							children: "Big Five"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.14em] text-cyan-soft",
					children: "Khám phá"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/nhom-tinh-cach",
							className: "text-paper/85 hover:text-cyan-soft",
							children: "16 nhóm tính cách"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/huong-nghiep",
							className: "text-paper/85 hover:text-cyan-soft",
							children: "Hướng nghiệp"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ho-so",
							className: "text-paper/85 hover:text-cyan-soft",
							children: "Hồ sơ của bạn"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.14em] text-cyan-soft",
					children: "Hỗ trợ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gioi-thieu",
							className: "text-paper/85 hover:text-cyan-soft",
							children: "Phương pháp"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gioi-thieu",
							className: "text-paper/85 hover:text-cyan-soft",
							children: "Chính sách"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gioi-thieu",
							className: "text-paper/85 hover:text-cyan-soft",
							children: "Liên hệ"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs text-paper/55 sm:px-6",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Lumina. Kết quả trắc nghiệm chỉ mang tính tham khảo, không thay thế tư vấn chuyên môn."
				]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium select-none rounded-[var(--radius-md)] transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-navy text-paper hover:bg-navy-deep cta-glow px-5 min-h-11",
			secondary: "bg-card text-navy shadow-border hover:shadow-border-hover px-5 min-h-11",
			ghost: "bg-transparent text-navy hover:bg-ice px-4 min-h-11",
			cyan: "bg-cyan text-navy-deep hover:bg-cyan-soft px-5 min-h-11 cta-glow",
			link: "bg-transparent text-azure underline-offset-4 hover:underline px-0 min-h-11"
		},
		size: {
			sm: "text-sm min-h-10 px-3.5",
			md: "text-[0.95rem]",
			lg: "text-base min-h-12 px-6 rounded-[var(--radius-lg)]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var RIASEC_LIKERT_LABELS = [
	"Hoàn toàn không thích",
	"Không thích",
	"Phân vân / Bình thường",
	"Khá thích",
	"Rất thích"
];
var RIASEC_LIKERT = RIASEC_LIKERT_LABELS.map((label, i) => ({
	label,
	scores: {}
}));
var RIASEC_GROUP_MAX = {
	R: 50,
	I: 50,
	A: 45,
	S: 50,
	E: 50,
	C: 55
};
var RIASEC_QUESTIONS$1 = [
	{
		id: "r1",
		text: "Tôi thích tự tay lắp ráp hoặc tháo một thiết bị để xem nó hoạt động như thế nào.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r2",
		text: "Tôi thích giúp một bạn trong lớp hiểu một bài mà bạn ấy đang gặp khó khăn.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r3",
		text: "Tôi thích sắp xếp tài liệu, ghi chú hoặc tệp máy tính theo từng nhóm rõ ràng.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r4",
		text: "Tôi thích đứng ra phân công công việc khi nhóm thực hiện một dự án.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r5",
		text: "Tôi thích tìm hiểu nguyên nhân đằng sau một hiện tượng mà mình chưa hiểu.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r6",
		text: "Tôi thích nghĩ ra cách trình bày mới lạ cho một bài thuyết trình hoặc sản phẩm học tập.",
		group: "A",
		options: RIASEC_LIKERT
	},
	{
		id: "r7",
		text: "Tôi cảm thấy thoải mái khi làm một công việc có hướng dẫn và quy trình rõ ràng.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r8",
		text: "Tôi thích thực hành với các dụng cụ, mô hình hoặc thiết bị hơn là chỉ đọc lý thuyết.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r9",
		text: "Tôi thích thuyết phục người khác ủng hộ một ý tưởng mà tôi tin là tốt.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r10",
		text: "Tôi thích giải những câu hỏi cần suy luận để tìm ra quy luật hoặc cách giải.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r11",
		text: "Tôi thường chủ động lắng nghe khi bạn bè muốn chia sẻ một vấn đề.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r12",
		text: "Tôi thích viết, vẽ, thiết kế, chụp ảnh hoặc tạo nội dung theo ý tưởng riêng.",
		group: "A",
		options: RIASEC_LIKERT
	},
	{
		id: "r13",
		text: "Tôi thích tìm cách sửa một đồ vật hoặc thiết bị khi nó bị hỏng.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r14",
		text: "Tôi có thói quen kiểm tra lại bài làm để phát hiện lỗi trước khi nộp.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r15",
		text: "Tôi thích đọc hoặc xem tài liệu để tìm hiểu sâu hơn về một chủ đề mình tò mò.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r16",
		text: "Tôi hứng thú với việc lên kế hoạch và tổ chức một hoạt động cho lớp hoặc trường.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r17",
		text: "Tôi không ngại thử một cách làm khác nếu cách đó giúp sản phẩm trở nên độc đáo hơn.",
		group: "A",
		options: RIASEC_LIKERT
	},
	{
		id: "r18",
		text: "Tôi thích hướng dẫn một người khác cách thực hiện một nhiệm vụ.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r19",
		text: "Tôi thích làm việc với bảng biểu, danh sách, số liệu hoặc thông tin được sắp xếp.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r20",
		text: "Tôi thích những hoạt động tạo ra một sản phẩm hoặc kết quả có thể nhìn thấy rõ ràng.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r21",
		text: "Khi gặp một vấn đề khó, tôi muốn tìm hiểu nguyên nhân trước khi đưa ra kết luận.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r22",
		text: "Tôi thích những bài tập cho phép mình tự do lựa chọn cách thể hiện.",
		group: "A",
		options: RIASEC_LIKERT
	},
	{
		id: "r23",
		text: "Tôi thích làm việc nhóm khi công việc đòi hỏi mọi người trao đổi và hỗ trợ nhau.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r24",
		text: "Tôi thấy hứng thú khi đặt ra mục tiêu và tìm cách đạt được mục tiêu đó.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r25",
		text: "Tôi thích lập danh sách việc cần làm để không bỏ sót nhiệm vụ.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r26",
		text: "Tôi thích quan sát cách máy móc, phương tiện hoặc hệ thống kỹ thuật vận hành.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r27",
		text: "Tôi thích phân tích nhiều thông tin khác nhau để tìm ra câu trả lời hợp lý nhất.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r28",
		text: "Tôi thường chú ý đến màu sắc, bố cục, hình ảnh hoặc cách trình bày của một sản phẩm.",
		group: "A",
		options: RIASEC_LIKERT
	},
	{
		id: "r29",
		text: "Tôi thích tham gia các hoạt động bán hàng, gây quỹ hoặc quảng bá sản phẩm/sự kiện.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r30",
		text: "Tôi thích làm những việc có thể mang lại lợi ích trực tiếp cho người khác.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r31",
		text: "Tôi thích hoàn thành công việc đúng thời hạn và đúng yêu cầu đã đề ra.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r32",
		text: "Tôi thích thử nghiệm một cách làm mới để xem kết quả có thay đổi không.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r33",
		text: "Tôi thích các hoạt động thực hành như làm mô hình, thí nghiệm hoặc sử dụng thiết bị.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r34",
		text: "Tôi cảm thấy vui khi được bạn bè tin tưởng nhờ mình tư vấn hoặc hỗ trợ.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r35",
		text: "Tôi khá thoải mái khi phát biểu trước nhiều người để trình bày quan điểm của mình.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r36",
		text: "Tôi thích biến một ý tưởng trong đầu thành một sản phẩm cụ thể như poster, video, bài viết hoặc thiết kế.",
		group: "A",
		options: RIASEC_LIKERT
	},
	{
		id: "r37",
		text: "Tôi thường để ý những chi tiết nhỏ mà người khác có thể bỏ qua.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r38",
		text: "Tôi thích công việc mà kết quả phụ thuộc nhiều vào kỹ năng thực hành của bản thân.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r39",
		text: "Tôi thích những môn học hoặc hoạt động khiến mình phải đặt câu hỏi và tự tìm lời giải.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r40",
		text: "Tôi thích tìm hiểu cách một doanh nghiệp thu hút khách hàng và tạo ra lợi nhuận.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r41",
		text: "Tôi thích giải thích một vấn đề bằng cách dễ hiểu để người khác có thể làm theo.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r42",
		text: "Tôi thích làm việc trong môi trường cho phép mình tự do đưa ra ý tưởng.",
		group: "A",
		options: RIASEC_LIKERT
	},
	{
		id: "r43",
		text: "Tôi thích sử dụng lịch, thời khóa biểu hoặc kế hoạch để quản lý công việc.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r44",
		text: "Tôi thích tìm hiểu cách vận hành của các phương tiện như xe máy, ô tô, máy móc hoặc robot.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r45",
		text: "Tôi thích so sánh dữ liệu hoặc các khả năng khác nhau trước khi quyết định.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r46",
		text: "Tôi thích tham gia các hoạt động mà mình có cơ hội gặp gỡ và làm việc với nhiều người.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r47",
		text: "Tôi thích nhận trách nhiệm điều phối một nhóm khi mọi người cần một người đứng ra tổ chức.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r48",
		text: "Tôi thích tìm cảm hứng từ âm nhạc, phim ảnh, nghệ thuật, thời trang hoặc những ý tưởng mới.",
		group: "A",
		options: RIASEC_LIKERT
	},
	{
		id: "r49",
		text: "Tôi thích những công việc yêu cầu sự chính xác và nhất quán.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r50",
		text: "Tôi thích học một kỹ năng mới bằng cách trực tiếp làm thử thay vì chỉ nghe hướng dẫn.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r51",
		text: "Tôi thường muốn biết bằng chứng hoặc lý do trước khi tin vào một kết luận.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r52",
		text: "Tôi thích sáng tạo cách kể chuyện hoặc truyền tải thông điệp để thu hút người xem.",
		group: "A",
		options: RIASEC_LIKERT
	},
	{
		id: "r53",
		text: "Tôi muốn công việc tương lai của mình có nhiều cơ hội giao tiếp và hợp tác với người khác.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r54",
		text: "Tôi thích đặt mục tiêu cho bản thân và cạnh tranh một cách tích cực để tiến bộ.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r55",
		text: "Tôi thích rà soát thông tin để đảm bảo không có sai sót trước khi hoàn thành công việc.",
		group: "C",
		options: RIASEC_LIKERT
	},
	{
		id: "r56",
		text: "Tôi thích những công việc đòi hỏi sự khéo léo khi sử dụng dụng cụ hoặc thiết bị.",
		group: "R",
		options: RIASEC_LIKERT
	},
	{
		id: "r57",
		text: "Tôi thích tìm hiểu một vấn đề từ nhiều góc độ trước khi đưa ra quyết định.",
		group: "I",
		options: RIASEC_LIKERT
	},
	{
		id: "r58",
		text: "Tôi cảm thấy có ý nghĩa khi công việc của mình giúp người khác tiến bộ hoặc giải quyết khó khăn.",
		group: "S",
		options: RIASEC_LIKERT
	},
	{
		id: "r59",
		text: "Tôi thích nghĩ cách biến một ý tưởng thành một kế hoạch có thể thực hiện được.",
		group: "E",
		options: RIASEC_LIKERT
	},
	{
		id: "r60",
		text: "Tôi thích duy trì mọi thứ ngăn nắp để có thể nhanh chóng tìm thấy thứ mình cần.",
		group: "C",
		options: RIASEC_LIKERT
	}
];
function withRiasecScores(questions) {
	return questions.map((q) => ({
		...q,
		options: RIASEC_LIKERT_LABELS.map((label, i) => ({
			label,
			scores: { [q.group]: i + 1 }
		}))
	}));
}
var scale4 = (key) => [
	{
		label: "Rất đúng với tôi",
		scores: { [key]: 3 }
	},
	{
		label: "Đúng một phần",
		scores: { [key]: 2 }
	},
	{
		label: "Chưa chắc",
		scores: { [key]: 1 }
	},
	{
		label: "Không đúng với tôi",
		scores: { [key]: 0 }
	}
];
var scale5 = (key, reverse = false) => {
	const vals = reverse ? [
		5,
		4,
		3,
		2,
		1
	] : [
		1,
		2,
		3,
		4,
		5
	];
	return [
		"Hoàn toàn không",
		"Ít khi",
		"Ở giữa",
		"Khá đúng",
		"Rất đúng"
	].map((label, i) => ({
		label,
		scores: { [key]: vals[i] ?? 3 }
	}));
};
var MBTI_QUESTIONS = [
	{
		id: "m1",
		text: "Cuối tuần, cách nào giúp bạn ‘đầy pin’ hơn?",
		hint: "Không có đáp án đúng. Chọn phía gần bạn hơn.",
		options: [{
			label: "Gặp bạn bè, ra ngoài, có chuyện để nói",
			scores: { E: 1 }
		}, {
			label: "Ở nhà, yên, làm việc riêng hoặc nghỉ thật sự",
			scores: { I: 1 }
		}]
	},
	{
		id: "m2",
		text: "Khi bước vào một nhóm người mới, bạn thường…",
		options: [{
			label: "Bắt chuyện, giới thiệu, làm quen khá nhanh",
			scores: { E: 1 }
		}, {
			label: "Quan sát trước, nói khi đã có chỗ đứng vừa phải",
			scores: { I: 1 }
		}]
	},
	{
		id: "m3",
		text: "Sau một ngày gặp nhiều người, bạn thấy…",
		options: [{
			label: "Hưng phấn, muốn kể lại hoặc còn muốn gặp nữa",
			scores: { E: 1 }
		}, {
			label: "Cần im lặng một lúc mới thấy người trở lại",
			scores: { I: 1 }
		}]
	},
	{
		id: "m4",
		text: "Khi học hoặc làm việc, bạn thích…",
		options: [{
			label: "Thảo luận, nghĩ thành tiếng, có người để cọ xát",
			scores: { E: 1 }
		}, {
			label: "Tập trung một mình rồi mới mang ý ra ngoài",
			scores: { I: 1 }
		}]
	},
	{
		id: "m5",
		text: "Trong tin nhắn nhóm, bạn thường…",
		options: [{
			label: "Hay trả lời, thả ý, giữ cuộc nói không tắt",
			scores: { E: 1 }
		}, {
			label: "Đọc nhiều, viết khi thật sự có điều muốn nói",
			scores: { I: 1 }
		}]
	},
	{
		id: "m6",
		text: "Buổi họp kéo dài làm bạn…",
		options: [{
			label: "Ổn nếu cuộc họp có tương tác và nhịp",
			scores: { E: 1 }
		}, {
			label: "Mệt vì phải ‘bật’ liên tục, muốn kết sớm",
			scores: { I: 1 }
		}]
	},
	{
		id: "m7",
		text: "Bạn muốn cuối ngày hôm nay thế nào?",
		options: [{
			label: "Có kế hoạch gặp ai đó, dù ngắn",
			scores: { E: 1 }
		}, {
			label: "Được ở một mình với việc mình chọn",
			scores: { I: 1 }
		}]
	},
	{
		id: "m8",
		text: "Khi nghe một câu chuyện, bạn chú ý hơn đến…",
		options: [{
			label: "Chi tiết cụ thể: ai, lúc nào, chuyện gì xảy ra",
			scores: { S: 1 }
		}, {
			label: "Ý nghĩa phía sau, mô típ, khả năng liên quan",
			scores: { N: 1 }
		}]
	},
	{
		id: "m9",
		text: "Khi giải thích một ý, bạn hay…",
		options: [{
			label: "Lấy ví dụ thật, từng bước, sờ được",
			scores: { S: 1 }
		}, {
			label: "Dùng hình ảnh, ẩn dụ, bức tranh lớn",
			scores: { N: 1 }
		}]
	},
	{
		id: "m10",
		text: "Bạn tin tưởng hơn vào…",
		options: [{
			label: "Kinh nghiệm đã kiểm chứng và sự kiện rõ",
			scores: { S: 1 }
		}, {
			label: "Trực giác, khả năng và mối liên hệ chưa thấy",
			scores: { N: 1 }
		}]
	},
	{
		id: "m11",
		text: "Bạn thích công việc…",
		options: [{
			label: "Có quy trình, kết quả đo được, ít bất ngờ",
			scores: { S: 1 }
		}, {
			label: "Có chỗ cho ý mới, thử nghiệm, đổi cách làm",
			scores: { N: 1 }
		}]
	},
	{
		id: "m12",
		text: "Khi đọc, bạn bị cuốn bởi…",
		options: [{
			label: "Thông tin dùng được, hướng dẫn, sự kiện",
			scores: { S: 1 }
		}, {
			label: "Ý tưởng, tương lai, tầng nghĩa, ‘nếu như’",
			scores: { N: 1 }
		}]
	},
	{
		id: "m13",
		text: "Bạn mô tả một ngày đi chơi theo kiểu…",
		options: [{
			label: "Lịch trình, món ăn, chỗ ngồi, chuyện đã xảy ra",
			scores: { S: 1 }
		}, {
			label: "Cảm giác tổng thể, điều chợt nghĩ ra, không khí",
			scores: { N: 1 }
		}]
	},
	{
		id: "m14",
		text: "Khi học kỹ năng mới, bạn muốn…",
		options: [{
			label: "Làm theo mẫu đúng rồi tinh chỉnh",
			scores: { S: 1 }
		}, {
			label: "Hiểu nguyên lý rồi tự improvises",
			scores: { N: 1 }
		}]
	},
	{
		id: "m15",
		text: "Khi phải quyết một việc quan trọng, bạn ưu tiên…",
		options: [{
			label: "Phân tích đúng–sai, hiệu quả, nguyên tắc logic",
			scores: { T: 1 }
		}, {
			label: "Tác động tới người, giá trị, hòa khí",
			scores: { F: 1 }
		}]
	},
	{
		id: "m16",
		text: "Bạn muốn được nhớ đến như người…",
		options: [{
			label: "Công bằng, sắc sảo, đáng tin về lý lẽ",
			scores: { T: 1 }
		}, {
			label: "Tử tế, thấu, đứng về phía con người",
			scores: { F: 1 }
		}]
	},
	{
		id: "m17",
		text: "Khi bạn bè kể chuyện buồn, bạn thường…",
		options: [{
			label: "Góp cách nhìn, gợi hướng xử lý",
			scores: { T: 1 }
		}, {
			label: "Ở bên, xác nhận cảm xúc trước đã",
			scores: { F: 1 }
		}]
	},
	{
		id: "m18",
		text: "Trong tranh luận, bạn…",
		options: [{
			label: "Tách ý khỏi người, chơi với lập luận",
			scores: { T: 1 }
		}, {
			label: "Để ý người kia có bị tổn không, rồi mới nói",
			scores: { F: 1 }
		}]
	},
	{
		id: "m19",
		text: "Phản hồi của bạn thường…",
		options: [{
			label: "Thẳng, đi thẳng vào chỗ cần sửa",
			scores: { T: 1 }
		}, {
			label: "Bọc lại cho người kia còn muốn nghe",
			scores: { F: 1 }
		}]
	},
	{
		id: "m20",
		text: "Điều khiến bạn ‘ưng’ một quyết định…",
		options: [{
			label: "Nó hợp lý, đứng được khi bị hỏi ‘vì sao’",
			scores: { T: 1 }
		}, {
			label: "Nó không làm mình phản bội người hoặc giá trị",
			scores: { F: 1 }
		}]
	},
	{
		id: "m21",
		text: "Khi góp ý đồng đội, bạn sợ hơn nếu…",
		options: [{
			label: "Nói vòng vo đến mức việc không được sửa",
			scores: { T: 1 }
		}, {
			label: "Nói khiến người kia thấy bị từ chối",
			scores: { F: 1 }
		}]
	},
	{
		id: "m22",
		text: "Lịch trình tuần của bạn thường…",
		options: [{
			label: "Có khung rõ, việc được xếp chỗ",
			scores: { J: 1 }
		}, {
			label: "Để trống một phần, quyết theo mạch ngày",
			scores: { P: 1 }
		}]
	},
	{
		id: "m23",
		text: "Trước hạn nộp, bạn thường…",
		options: [{
			label: "Chia nhỏ và làm sớm cho chắc",
			scores: { J: 1 }
		}, {
			label: "Tăng tốc gần hạn, vẫn về đích",
			scores: { P: 1 }
		}]
	},
	{
		id: "m24",
		text: "Không gian làm việc gọn giúp bạn…",
		options: [{
			label: "Yên tâm, nghĩ được việc tiếp theo",
			scores: { J: 1 }
		}, {
			label: "Cũng thích, nhưng ‘hơi loạn’ vẫn làm được",
			scores: { P: 1 }
		}]
	},
	{
		id: "m25",
		text: "Khi đi chơi, bạn thích…",
		options: [{
			label: "Có lịch: chỗ nào, lúc nào, dự phòng",
			scores: { J: 1 }
		}, {
			label: "Có hướng, còn lại để ngày tự mở",
			scores: { P: 1 }
		}]
	},
	{
		id: "m26",
		text: "Thay đổi kế hoạch đột ngột khiến bạn…",
		options: [{
			label: "Khó chịu, cần chỉnh lại cả chuỗi việc",
			scores: { J: 1 }
		}, {
			label: "Ổn, coi như một nhánh mới",
			scores: { P: 1 }
		}]
	},
	{
		id: "m27",
		text: "Bạn thấy thoải mái hơn khi…",
		options: [{
			label: "Việc đã chốt, hộp đã đóng",
			scores: { J: 1 }
		}, {
			label: "Còn cửa để đổi nếu có thông tin mới",
			scores: { P: 1 }
		}]
	},
	{
		id: "m28",
		text: "Danh sách việc của bạn…",
		options: [{
			label: "Được tick đều, thấy tiến độ là đã yên",
			scores: { J: 1 }
		}, {
			label: "Có, nhưng sống với ưu tiên của lúc này",
			scores: { P: 1 }
		}]
	},
	{
		id: "m29",
		text: "Cuộc họp đông người làm bạn…",
		options: [{
			label: "Tỉnh hơn, muốn góp ý hoặc hỏi",
			scores: { E: 1 }
		}, {
			label: "Tốn pin, muốn về chỗ yên để nghĩ",
			scores: { I: 1 }
		}]
	},
	{
		id: "m30",
		text: "Khi có tin vui, bạn thường…",
		options: [{
			label: "Kể ngay cho ai đó",
			scores: { E: 1 }
		}, {
			label: "Ngồi với nó một lúc rồi mới chia",
			scores: { I: 1 }
		}]
	},
	{
		id: "m31",
		text: "Bạn chọn khóa học vì…",
		options: [{
			label: "Kỹ năng dùng được, giáo viên có case thật",
			scores: { S: 1 }
		}, {
			label: "Nó mở một cách nhìn mới, dù chưa rõ ‘dùng ngay’",
			scores: { N: 1 }
		}]
	},
	{
		id: "m32",
		text: "Khi một ý tưởng hay xuất hiện, bạn…",
		options: [{
			label: "Hỏi ngay: làm thế nào, mất bao lâu, rủi ro gì",
			scores: { S: 1 }
		}, {
			label: "Để nó nở, nối với ý khác, vẽ bức tranh lớn",
			scores: { N: 1 }
		}]
	},
	{
		id: "m33",
		text: "Một quyết định ‘đúng người’ nhưng kém hiệu quả khiến bạn…",
		options: [{
			label: "Khó chịu — việc phải chạy đã",
			scores: { T: 1 }
		}, {
			label: "Chấp nhận được nếu không ai bị bỏ lại",
			scores: { F: 1 }
		}]
	},
	{
		id: "m34",
		text: "Khi nhận góp ý thẳng, bạn cần…",
		options: [{
			label: "Nội dung đúng, tông giọng đứng sau",
			scores: { T: 1 }
		}, {
			label: "Cảm thấy người kia vẫn đứng về phía mình",
			scores: { F: 1 }
		}]
	},
	{
		id: "m35",
		text: "Cuối ngày, việc chưa tick làm bạn…",
		options: [{
			label: "Móc trong đầu, muốn khép hộp",
			scores: { J: 1 }
		}, {
			label: "Để đó, mai còn cửa",
			scores: { P: 1 }
		}]
	},
	{
		id: "m36",
		text: "Bạn thích dự án kiểu…",
		options: [{
			label: "Phạm vi rõ, mốc rõ, biết lúc nào là xong",
			scores: { J: 1 }
		}, {
			label: "Mở, được đổi khi học được điều mới",
			scores: { P: 1 }
		}]
	},
	{
		id: "m37",
		text: "Ở quán cà phê đông, bạn…",
		options: [{
			label: "Dễ bắt chuyện hoặc hòa vào ồn",
			scores: { E: 1 }
		}, {
			label: "Muốn góc khuất, tai nghe, ít bị kéo",
			scores: { I: 1 }
		}]
	},
	{
		id: "m38",
		text: "Bạn tin một hướng đi khi…",
		options: [{
			label: "Đã có người làm được, có số liệu",
			scores: { S: 1 }
		}, {
			label: "Nhìn thấy khả năng, dù đường còn mờ",
			scores: { N: 1 }
		}]
	},
	{
		id: "m39",
		text: "Trong nhóm, bạn hay được nhờ…",
		options: [{
			label: "Phân tích, chốt, chỉ chỗ lệch",
			scores: { T: 1 }
		}, {
			label: "Giữ khí, dàn hòa, để ý ai đang mệt",
			scores: { F: 1 }
		}]
	},
	{
		id: "m40",
		text: "Kỳ nghỉ không kế hoạch sẵn khiến bạn…",
		options: [{
			label: "Hơi đứng hình, muốn có khung tối thiểu",
			scores: { J: 1 }
		}, {
			label: "Thích, coi như được thở",
			scores: { P: 1 }
		}]
	}
];
var RIASEC_QUESTIONS = withRiasecScores(RIASEC_QUESTIONS$1);
var BIGFIVE_QUESTIONS = [
	{
		id: "b1",
		text: "Tôi thích ý tưởng lạ, góc nhìn mới, chuyện chưa ai kể.",
		options: scale5("O")
	},
	{
		id: "b2",
		text: "Tôi thấy nghệ thuật, sách, hoặc khái niệm trừu tượng nuôi mình.",
		options: scale5("O")
	},
	{
		id: "b3",
		text: "Tôi thích giữ thói quen cũ, ít muốn đổi cách làm.",
		options: scale5("O", true)
	},
	{
		id: "b4",
		text: "Tôi tò mò về ‘vì sao’ hơn là chỉ ‘làm sao cho xong’.",
		options: scale5("O")
	},
	{
		id: "b5",
		text: "Tôi hay lên kế hoạch và làm đúng hạn.",
		options: scale5("C")
	},
	{
		id: "b6",
		text: "Bàn làm việc và file của tôi thường có chỗ cho từng thứ.",
		options: scale5("C")
	},
	{
		id: "b7",
		text: "Tôi dễ bắt đầu rồi bỏ dở khi việc không còn thú.",
		options: scale5("C", true)
	},
	{
		id: "b8",
		text: "Tôi giữ lời hứa, kể cả việc nhỏ.",
		options: scale5("C")
	},
	{
		id: "b9",
		text: "Tôi lấy năng lượng từ người khác và cuộc nói chuyện.",
		options: scale5("E")
	},
	{
		id: "b10",
		text: "Ở nhóm mới tôi thường lên tiếng khá sớm.",
		options: scale5("E")
	},
	{
		id: "b11",
		text: "Tôi thích ở rìa, quan sát, không cần là trung tâm.",
		options: scale5("E", true)
	},
	{
		id: "b12",
		text: "Tôi chủ động rủ người đi làm hoặc đi chơi.",
		options: scale5("E")
	},
	{
		id: "b13",
		text: "Tôi hay để ý cảm xúc người khác trước khi nói.",
		options: scale5("A")
	},
	{
		id: "b14",
		text: "Tôi tin người ta có thiện ý, trừ khi bị chứng minh ngược.",
		options: scale5("A")
	},
	{
		id: "b15",
		text: "Tôi thẳng và có thể bị thấy là cứng, miễn là đúng việc.",
		options: scale5("A", true)
	},
	{
		id: "b16",
		text: "Tôi sẵn sàng nhường một phần ý mình để giữ quan hệ.",
		options: scale5("A")
	},
	{
		id: "b17",
		text: "Tôi hay lo trước những việc chưa xảy ra.",
		options: scale5("N")
	},
	{
		id: "b18",
		text: "Khi căng, tôi cần thời gian mới lấy lại được nhịp.",
		options: scale5("N")
	},
	{
		id: "b19",
		text: "Tôi vẫn nghĩ được việc khi áp lực tăng.",
		options: scale5("N", true)
	},
	{
		id: "b20",
		text: "Tâm trạng tôi đổi khá rõ trong ngày.",
		options: scale5("N")
	},
	{
		id: "b21",
		text: "Tôi hay thử món, nơi, cách làm chưa quen.",
		options: scale5("O")
	},
	{
		id: "b22",
		text: "Tôi hoàn tất việc nhàm nếu đã hứa.",
		options: scale5("C")
	},
	{
		id: "b23",
		text: "Sau một buổi đông người tôi thường còn muốn gặp tiếp.",
		options: scale5("E")
	},
	{
		id: "b24",
		text: "Tôi tránh tranh cãi dù nghĩ mình đúng, nếu sợ mất hòa khí.",
		options: scale5("A")
	},
	{
		id: "b25",
		text: "Một lời chê có thể ở lại trong đầu tôi khá lâu.",
		options: scale5("N")
	}
];
var INTEREST_QUESTIONS = [
	{
		id: "i1",
		text: "Một ngày lý tưởng có nhiều thời gian…",
		options: [
			{
				label: "Làm ra hoặc sửa một thứ cụ thể",
				scores: { R: 2 }
			},
			{
				label: "Đọc, phân tích, hiểu một vấn đề",
				scores: { I: 2 }
			},
			{
				label: "Vẽ, viết, dựng, bày biện",
				scores: { A: 2 }
			},
			{
				label: "Nói chuyện, hỗ trợ, dạy ai đó",
				scores: { S: 2 }
			}
		]
	},
	{
		id: "i2",
		text: "Bạn muốn được khen vì…",
		options: [
			{
				label: "Tay nghề chắc, việc chạy",
				scores: { R: 2 }
			},
			{
				label: "Lời giải sắc",
				scores: { I: 2 }
			},
			{
				label: "Sản phẩm có hồn",
				scores: { A: 2 }
			},
			{
				label: "Người khác nhờ bạn mà ổn hơn",
				scores: { S: 2 }
			}
		]
	},
	{
		id: "i3",
		text: "Môn học nào kéo bạn ngồi lại?",
		options: [
			{
				label: "Thí nghiệm, máy, kỹ thuật",
				scores: {
					R: 2,
					I: 1
				}
			},
			{
				label: "Toán, logic, nghiên cứu",
				scores: { I: 2 }
			},
			{
				label: "Văn, nghệ thuật, thiết kế",
				scores: { A: 2 }
			},
			{
				label: "Tâm lý, giáo dục, xã hội",
				scores: { S: 2 }
			}
		]
	},
	{
		id: "i4",
		text: "Trong dự án nhóm, bạn tình nguyện…",
		options: [
			{
				label: "Làm phần kỹ thuật, hiện thực",
				scores: {
					R: 2,
					C: 1
				}
			},
			{
				label: "Nghiên cứu, góp khung",
				scores: { I: 2 }
			},
			{
				label: "Hình ảnh, câu chuyện, trải nghiệm",
				scores: { A: 2 }
			},
			{
				label: "Điều phối người, giữ khí thế",
				scores: {
					E: 2,
					S: 1
				}
			}
		]
	},
	{
		id: "i5",
		text: "Bạn ngại hơn với kiểu việc…",
		options: [
			{
				label: "Ngồi im với giấy tờ lặp lại",
				scores: {
					A: 1,
					E: 1,
					R: -1
				}
			},
			{
				label: "Nói trước đám đông không chuẩn bị",
				scores: {
					I: 1,
					C: 1
				}
			},
			{
				label: "Không có khung, không biết ‘xong’ là gì",
				scores: { C: 2 }
			},
			{
				label: "Làm việc không gặp ai cả tuần",
				scores: {
					S: 2,
					E: 1
				}
			}
		]
	},
	{
		id: "i6",
		text: "Nếu được thử nghề 1 tuần, bạn chọn…",
		options: [
			{
				label: "Xưởng, lab, hiện trường",
				scores: { R: 2 }
			},
			{
				label: "Phòng nghiên cứu hoặc phân tích",
				scores: { I: 2 }
			},
			{
				label: "Studio sáng tạo",
				scores: { A: 2 }
			},
			{
				label: "Lớp học, phòng khám, cộng đồng",
				scores: { S: 2 }
			}
		]
	},
	{
		id: "i7",
		text: "Tiền và danh có ý nghĩa khi…",
		options: [
			{
				label: "Đi cùng tay nghề thật",
				scores: {
					R: 1,
					C: 1
				}
			},
			{
				label: "Đi cùng việc mình hiểu sâu",
				scores: { I: 2 }
			},
			{
				label: "Đi cùng tự do tạo",
				scores: { A: 2 }
			},
			{
				label: "Đi cùng ảnh hưởng tới người khác",
				scores: {
					E: 1,
					S: 1
				}
			}
		]
	},
	{
		id: "i8",
		text: "Bạn thích bảng việc có…",
		options: [
			{
				label: "Việc tay và việc đầu xen nhau",
				scores: { R: 2 }
			},
			{
				label: "Một bài toán lớn để cắn",
				scores: { I: 2 }
			},
			{
				label: "Một blank page",
				scores: { A: 2 }
			},
			{
				label: "Người cần mình hôm nay",
				scores: { S: 2 }
			}
		]
	},
	{
		id: "i9",
		text: "Bạn muốn tuần làm việc nghiêng về…",
		options: [
			{
				label: "Mục tiêu, cuộc họp chốt, tiến độ",
				scores: { E: 2 }
			},
			{
				label: "Hệ thống, file, quy trình êm",
				scores: { C: 2 }
			},
			{
				label: "Khám phá, đọc, thí nghiệm",
				scores: { I: 2 }
			},
			{
				label: "Làm ra sản phẩm nhìn thấy",
				scores: {
					R: 1,
					A: 1
				}
			}
		]
	},
	{
		id: "i10",
		text: "Khi xem người khác thành công, bạn ngưỡng…",
		options: [
			{
				label: "Người dựng được thứ chắc",
				scores: { R: 2 }
			},
			{
				label: "Người hiểu thứ khó",
				scores: { I: 2 }
			},
			{
				label: "Người tạo được giọng riêng",
				scores: { A: 2 }
			},
			{
				label: "Người kéo được một nhóm đi",
				scores: { E: 2 }
			}
		]
	},
	{
		id: "i11",
		text: "Công cụ nào khiến bạn thấy ‘đây là chỗ của mình’?",
		options: [
			{
				label: "Máy, kit, bản vẽ kỹ thuật",
				scores: { R: 2 }
			},
			{
				label: "Bảng, code, giấy nghiên cứu",
				scores: { I: 2 }
			},
			{
				label: "Canvas, camera, soạn thảo",
				scores: { A: 2 }
			},
			{
				label: "Lịch nhóm, inbox người cần mình",
				scores: {
					S: 1,
					C: 1
				}
			}
		]
	},
	{
		id: "i12",
		text: "Bạn chịu được áp lực kiểu…",
		options: [
			{
				label: "Deadline sản phẩm phải chạy",
				scores: {
					R: 1,
					C: 1
				}
			},
			{
				label: "Bài toán chưa có đáp",
				scores: { I: 2 }
			},
			{
				label: "Trình diễn ý tưởng trước người lạ",
				scores: {
					E: 1,
					A: 1
				}
			},
			{
				label: "Người đang cần mình ngay",
				scores: { S: 2 }
			}
		]
	},
	{
		id: "i13",
		text: "Môi trường lý tưởng có…",
		options: [
			{
				label: "Dụng cụ tốt, ít họp",
				scores: {
					R: 2,
					I: 1
				}
			},
			{
				label: "Tự do lịch, được đào sâu",
				scores: {
					I: 1,
					A: 1
				}
			},
			{
				label: "Đồng đội ấm, sứ mệnh rõ",
				scores: { S: 2 }
			},
			{
				label: "Mục tiêu đo được, quyền quyết",
				scores: {
					E: 2,
					C: 1
				}
			}
		]
	},
	{
		id: "i14",
		text: "Bạn muốn 5 năm nữa mình…",
		options: [
			{
				label: "Thành thạo một nghề tay",
				scores: { R: 2 }
			},
			{
				label: "Là người người ta hỏi khi việc khó",
				scores: { I: 2 }
			},
			{
				label: "Có portfolio đúng giọng mình",
				scores: { A: 2 }
			},
			{
				label: "Dẫn được một nhóm hoặc một hướng",
				scores: { E: 2 }
			}
		]
	},
	{
		id: "i15",
		text: "Việc nhàm vẫn làm được nếu…",
		options: [
			{
				label: "Nó là phần của hệ thống mình giữ",
				scores: { C: 2 }
			},
			{
				label: "Nó phục vụ người mình quan tâm",
				scores: { S: 2 }
			},
			{
				label: "Nó dẫn tới sản phẩm mình tin",
				scores: {
					A: 1,
					R: 1
				}
			},
			{
				label: "Nó nằm trên đường tới mục tiêu lớn",
				scores: { E: 2 }
			}
		]
	},
	{
		id: "i16",
		text: "Câu nào gần bạn hơn?",
		options: [
			{
				label: "Tôi muốn hiểu rồi mới tin.",
				scores: { I: 2 }
			},
			{
				label: "Tôi muốn làm ra rồi mới nói.",
				scores: {
					R: 1,
					A: 1
				}
			},
			{
				label: "Tôi muốn người ổn rồi việc mới tính.",
				scores: { S: 2 }
			},
			{
				label: "Tôi muốn việc chạy, người theo kịp.",
				scores: {
					E: 1,
					C: 1
				}
			}
		]
	},
	{
		id: "i17",
		text: "Bạn chọn intern vì…",
		options: [
			{
				label: "Được sờ việc thật, dụng cụ thật",
				scores: { R: 2 }
			},
			{
				label: "Được hỏi, đọc, phân tích",
				scores: { I: 2 }
			},
			{
				label: "Được làm sản phẩm có giọng",
				scores: { A: 2 }
			},
			{
				label: "Được gặp người và hỗ trợ họ",
				scores: { S: 2 }
			}
		]
	},
	{
		id: "i18",
		text: "Deadline gấp, bạn tình nguyện…",
		options: [
			{
				label: "Chốt hướng, phân việc, giữ nhịp",
				scores: { E: 2 }
			},
			{
				label: "Rà file, checklist, không sót",
				scores: { C: 2 }
			},
			{
				label: "Làm phần kỹ thuật cho xong",
				scores: { R: 2 }
			},
			{
				label: "Giữ khí nhóm, kéo người đang kiệt",
				scores: { S: 2 }
			}
		]
	},
	{
		id: "i19",
		text: "Bạn muốn buổi sáng bắt đầu bằng…",
		options: [
			{
				label: "Một việc tay hoặc hiện trường",
				scores: { R: 2 }
			},
			{
				label: "Một câu hỏi để cắn",
				scores: { I: 2 }
			},
			{
				label: "Một trang trắng hoặc moodboard",
				scores: { A: 2 }
			},
			{
				label: "Một cuộc họp chốt ưu tiên",
				scores: {
					E: 1,
					C: 1
				}
			}
		]
	},
	{
		id: "i20",
		text: "Điều khiến bạn ở lại với một nghề lâu…",
		options: [
			{
				label: "Tay nghề càng chắc",
				scores: {
					R: 2,
					C: 1
				}
			},
			{
				label: "Mãi còn thứ để hiểu",
				scores: { I: 2 }
			},
			{
				label: "Còn chỗ cho giọng mình",
				scores: { A: 2 }
			},
			{
				label: "Còn người cần mình",
				scores: { S: 2 }
			}
		]
	}
];
var COMBINED_QUESTIONS = [
	{
		id: "c1",
		text: "Năng lượng của bạn đầy hơn khi…",
		options: [{
			label: "Có người, có chuyện, có nhịp chung",
			scores: {
				E: 1,
				S: 1
			}
		}, {
			label: "Có khoảng lặng để nghĩ và thở",
			scores: { I: 1 }
		}]
	},
	{
		id: "c2",
		text: "Bạn tiếp nhận thông tin theo kiểu…",
		options: [{
			label: "Sự kiện, chi tiết, cái đang có",
			scores: {
				S: 1,
				R: 1
			}
		}, {
			label: "Khả năng, mô típ, bức tranh lớn",
			scores: {
				N: 1,
				I: 1
			}
		}]
	},
	{
		id: "c3",
		text: "Khi chốt một việc nhóm, bạn nghiêng…",
		options: [{
			label: "Đúng nguyên tắc, ra kết quả",
			scores: {
				T: 1,
				E: 1
			}
		}, {
			label: "Người ổn, giá trị không bị rạn",
			scores: {
				F: 1,
				S: 1
			}
		}]
	},
	{
		id: "c4",
		text: "Tuần làm việc của bạn đẹp hơn khi…",
		options: [{
			label: "Khung rõ, hộp được đóng",
			scores: {
				J: 1,
				C: 1
			}
		}, {
			label: "Còn cửa đổi nếu có tín hiệu mới",
			scores: {
				P: 1,
				A: 1
			}
		}]
	},
	{
		id: "c5",
		text: "Bạn muốn ngày mai chủ yếu…",
		options: [
			{
				label: "Làm ra thứ sờ được",
				scores: { rR: 2 }
			},
			{
				label: "Hiểu một vấn đề đến đáy",
				scores: { rI: 2 }
			},
			{
				label: "Tạo một thứ có giọng",
				scores: { rA: 2 }
			},
			{
				label: "Giúp ai đó tiến một bước",
				scores: { rS: 2 }
			}
		]
	},
	{
		id: "c6",
		text: "Trong họp, bạn hay là người…",
		options: [{
			label: "Nói sớm, đẩy việc tới chốt",
			scores: {
				E: 1,
				rE: 1
			}
		}, {
			label: "Nghe, rồi góp một nhát đúng chỗ",
			scores: { I: 1 }
		}]
	},
	{
		id: "c7",
		text: "Bạn học nhanh nhất khi…",
		options: [{
			label: "Làm theo mẫu, luyện, sửa",
			scores: {
				S: 1,
				R: 1
			}
		}, {
			label: "Nắm nguyên lý, tự suy",
			scores: {
				N: 1,
				I: 1
			}
		}]
	},
	{
		id: "c8",
		text: "Phản hồi bạn muốn nhận…",
		options: [{
			label: "Thẳng, chỉ chỗ sai, tôn trọng lý lẽ",
			scores: { T: 1 }
		}, {
			label: "Có ngữ cảnh, không làm mình thấy bị loại",
			scores: { F: 1 }
		}]
	},
	{
		id: "c9",
		text: "Deadline với bạn là…",
		options: [{
			label: "Mốc để chia việc từ sớm",
			scores: {
				J: 1,
				C: 1
			}
		}, {
			label: "Áp lực hữu ích gần giờ G",
			scores: { P: 1 }
		}]
	},
	{
		id: "c10",
		text: "Bạn muốn ảnh hưởng tới hướng đi của nhóm.",
		options: scale4("rE")
	},
	{
		id: "c11",
		text: "Bạn muốn hệ thống, file, quy trình chạy êm.",
		options: scale4("rC")
	},
	{
		id: "c12",
		text: "Bạn thích tự do tạo hơn là làm đúng khuôn.",
		options: scale4("rA")
	},
	{
		id: "c13",
		text: "Cuối tuần lý tưởng nghiêng về…",
		options: [{
			label: "Người và chuyện",
			scores: {
				E: 1,
				S: 1
			}
		}, {
			label: "Một mình với thứ mình chọn",
			scores: { I: 1 }
		}]
	},
	{
		id: "c14",
		text: "Khi kể chuyện, bạn bắt đầu từ…",
		options: [{
			label: "Chuyện đã xảy ra, thứ tự thời gian",
			scores: { S: 1 }
		}, {
			label: "Điều bạn thấy phía sau chuyện đó",
			scores: { N: 1 }
		}]
	},
	{
		id: "c15",
		text: "Quyết định khó được bạn ‘chốt trong bụng’ khi…",
		options: [{
			label: "Nó chịu được câu hỏi ‘vì sao’",
			scores: { T: 1 }
		}, {
			label: "Nó không phản bội người mình quý",
			scores: { F: 1 }
		}]
	},
	{
		id: "c16",
		text: "Kế hoạch bị đổi đột ngột…",
		options: [{
			label: "Làm bạn phải dựng lại cả chuỗi",
			scores: { J: 1 }
		}, {
			label: "Là một nhánh có thể hay",
			scores: { P: 1 }
		}]
	},
	{
		id: "c17",
		text: "Bạn thích tháo lắp, sửa, làm ra thứ cụ thể.",
		options: scale4("rR")
	},
	{
		id: "c18",
		text: "Bạn thích đào một câu hỏi đến khi ra cơ chế.",
		options: scale4("rI")
	},
	{
		id: "c19",
		text: "Bạn thấy có ích khi người khác nhờ mình mà ổn hơn.",
		options: scale4("rS")
	},
	{
		id: "c20",
		text: "Bạn muốn nghề cho phép vừa làm vừa còn là mình.",
		options: [
			{
				label: "Rất đúng",
				scores: {
					rA: 2,
					F: 1
				}
			},
			{
				label: "Đúng nếu việc vẫn ra kết quả",
				scores: {
					rE: 1,
					T: 1
				}
			},
			{
				label: "Mình thích rõ vai hơn là ‘là mình’",
				scores: {
					rC: 2,
					J: 1
				}
			},
			{
				label: "Chưa chắc",
				scores: { P: 1 }
			}
		]
	},
	{
		id: "c21",
		text: "Bạn lấy pin từ…",
		options: [{
			label: "Người, chuyện, phòng đông vừa phải",
			scores: {
				E: 1,
				rS: 1
			}
		}, {
			label: "Im, đọc, làm một mình",
			scores: {
				I: 1,
				rI: 1
			}
		}]
	},
	{
		id: "c22",
		text: "Khi chọn việc, bạn tin hơn vào…",
		options: [{
			label: "Kinh nghiệm, số, người đã làm được",
			scores: {
				S: 1,
				rR: 1
			}
		}, {
			label: "Khả năng, trực giác, bức tranh lớn",
			scores: {
				N: 1,
				rA: 1
			}
		}]
	},
	{
		id: "c23",
		text: "Nhóm đang đứng hình, bạn thường…",
		options: [{
			label: "Đứng ra chốt một hướng",
			scores: {
				E: 1,
				rE: 2
			}
		}, {
			label: "Rà lại việc, chia nhỏ, giữ nhịp",
			scores: {
				J: 1,
				rC: 2
			}
		}]
	},
	{
		id: "c24",
		text: "Một tuần lý tưởng có nhiều…",
		options: [
			{
				label: "Việc tay hoặc hiện trường",
				scores: {
					rR: 2,
					S: 1
				}
			},
			{
				label: "Câu hỏi để đào",
				scores: {
					rI: 2,
					N: 1
				}
			},
			{
				label: "Chỗ để tạo",
				scores: {
					rA: 2,
					P: 1
				}
			},
			{
				label: "Người để đồng hành",
				scores: {
					rS: 2,
					F: 1
				}
			}
		]
	}
];
function questionsFor(quizId) {
	switch (quizId) {
		case "mbti": return MBTI_QUESTIONS;
		case "riasec": return RIASEC_QUESTIONS;
		case "bigfive": return BIGFIVE_QUESTIONS;
		case "interest": return INTEREST_QUESTIONS;
		case "combined": return COMBINED_QUESTIONS;
		default: return [];
	}
}
var QUIZZES = [
	{
		id: "riasec",
		kind: "riasec",
		name: "RIASEC",
		tagline: "Sở thích nghề theo 6 nhóm Holland",
		description: "Khám phá bạn bị cuốn bởi kiểu việc nào: thao tác, nghiên cứu, sáng tạo, hỗ trợ người, dẫn dắt hay vận hành hệ thống.",
		duration: "10–15 phút",
		questionCount: questionsFor("riasec").length,
		icon: "compass",
		image: "/illustrations/quiz-riasec.jpg"
	},
	{
		id: "bigfive",
		kind: "bigfive",
		name: "Big Five",
		tagline: "Năm chiều tính cách cốt lõi",
		description: "Một bức tranh cân bằng về mức độ cởi mở, tận tâm, hướng ngoại, hòa hợp và ổn định cảm xúc — để hiểu cách bạn vận hành hằng ngày.",
		duration: "7–9 phút",
		questionCount: questionsFor("bigfive").length,
		icon: "layers",
		image: "/illustrations/quiz-bigfive.jpg"
	},
	{
		id: "mbti",
		kind: "mbti",
		name: "MBTI",
		tagline: "16 nhóm tính cách",
		description: "Tìm nhóm gần với cách bạn nạp năng lượng, tiếp nhận thông tin, ra quyết định và sắp xếp đời sống. Kết quả mang tính tham khảo.",
		duration: "10–12 phút",
		questionCount: questionsFor("mbti").length,
		icon: "spark",
		image: "/illustrations/quiz-mbti.jpg"
	},
	{
		id: "interest",
		kind: "interest",
		name: "Sở thích nghề nghiệp",
		tagline: "Việc nào làm bạn thấy sống",
		description: "Không hỏi bạn ‘giỏi gì’, mà hỏi bạn muốn chạm vào loại việc nào. Dùng làm gợi ý hướng đi, không phải lời kết.",
		duration: "6–8 phút",
		questionCount: questionsFor("interest").length,
		icon: "heart",
		image: "/illustrations/quiz-interest.jpg"
	},
	{
		id: "combined",
		kind: "combined",
		name: "Hồ sơ hướng nghiệp tổng hợp",
		tagline: "Tính cách + sở thích trong một lần",
		description: "Phiên bản rút gọn kết hợp xu hướng tính cách và sở thích nghề, cho một hồ sơ tổng quan để bắt đầu khám phá.",
		duration: "8–10 phút",
		questionCount: questionsFor("combined").length,
		icon: "map",
		image: "/illustrations/quiz-combined.jpg"
	}
];
function getQuiz(id) {
	return QUIZZES.find((q) => q.id === id);
}
var PROGRESS = (id) => `lumina-progress-${id}`;
var RESULT = (id) => `lumina-result-${id}`;
var LAST = "lumina-last-result";
function read(key) {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function write(key, value) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function remove(key) {
	if (typeof window === "undefined") return;
	localStorage.removeItem(key);
}
function loadProgress(quizId) {
	return read(PROGRESS(quizId));
}
function saveProgress(progress) {
	write(PROGRESS(progress.quizId), progress);
}
function clearProgress(quizId) {
	remove(PROGRESS(quizId));
}
function loadResult(quizId) {
	return read(RESULT(quizId));
}
function saveResult(result) {
	write(RESULT(result.quizId), result);
	write(LAST, result);
	clearProgress(result.quizId);
}
function loadLastResult() {
	return read(LAST);
}
function hasPartialProgress(quizId) {
	const p = loadProgress(quizId);
	if (!p) return false;
	return p.answers.some((a) => a >= 0);
}
function loadAllResults() {
	return QUIZZES.map((q) => loadResult(q.id)).filter((r) => Boolean(r));
}
function loadMergedProfile() {
	const all = loadAllResults();
	const combined = all.find((r) => r.kind === "combined");
	return {
		all,
		mbti: all.find((r) => r.mbti)?.mbti ?? combined?.mbti,
		axes: all.find((r) => r.axes)?.axes ?? combined?.axes,
		riasec: all.find((r) => r.kind === "riasec")?.riasec ?? all.find((r) => r.kind === "interest")?.riasec ?? combined?.riasec,
		bigfive: all.find((r) => r.kind === "bigfive")?.bigfive
	};
}
var NAV = [
	{
		to: "/",
		label: "Trang chủ"
	},
	{
		to: "/trac-nghiem",
		label: "Trắc nghiệm"
	},
	{
		to: "/nhom-tinh-cach",
		label: "Nhóm tính cách"
	},
	{
		to: "/huong-nghiep",
		label: "Hướng nghiệp"
	},
	{
		to: "/gioi-thieu",
		label: "Giới thiệu"
	}
];
function Header() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [last, setLast] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setLast(loadLastResult());
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 w-full transition-[background-color,box-shadow,padding] duration-200 ease-out", scrolled || open ? "bg-paper/80 py-2 shadow-border backdrop-blur-xl" : "bg-transparent py-3.5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Chính",
					children: NAV.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-[color,background-color] duration-150", active ? "bg-ice text-navy" : "text-muted hover:bg-ice/80 hover:text-navy"),
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "hidden md:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ho-so",
								children: "Hồ sơ của bạn"
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/trac-nghiem",
								children: "Làm trắc nghiệm"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-[var(--radius-md)] text-navy lg:hidden",
							"aria-label": open ? "Đóng menu" : "Mở menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden", open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-4 pt-2",
				"aria-label": "Mobile",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "rounded-[var(--radius-md)] px-3 py-3 text-base font-medium text-navy hover:bg-ice",
						children: item.label
					}, item.to)),
					last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ho-so",
						className: "rounded-[var(--radius-md)] px-3 py-3 text-base font-medium text-navy hover:bg-ice",
						children: "Hồ sơ của bạn"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-2 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trac-nghiem",
							children: "Làm trắc nghiệm"
						})
					})
				]
			})
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.18em] text-azure",
				children: "Không tìm thấy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-semibold text-navy",
				children: "Trang này không có trên bản đồ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Liên kết có thể đã đổi. Quay về trang chủ hoặc chọn một bài test."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Trang chủ"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/trac-nghiem",
						children: "Trắc nghiệm"
					})
				})]
			})
		]
	}) });
}
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-1zJ4rkfF.css";
var APP_NAME = "Lumina";
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Lumina — khám phá tính cách, hiểu bản thân và định hướng nghề nghiệp với trắc nghiệm MBTI, RIASEC, Big Five."
			},
			{
				name: "theme-color",
				content: "#0B3A62"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "vi",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-paper font-sans text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					position: "top-center",
					toastOptions: { classNames: { toast: "font-sans shadow-border border-line bg-card text-ink" } }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$12 = () => import("./routes-B9pPy9qJ.mjs");
var Route$12 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./gioi-thieu-BYxA7ymJ.mjs");
var Route$11 = createFileRoute("/gioi-thieu")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./ho-so-Dg6VbBCm.mjs");
var Route$10 = createFileRoute("/ho-so")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./huong-nghiep-DAcnmfGD.mjs");
var Route$9 = createFileRoute("/huong-nghiep")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./nhom-tinh-cach-DT77j-de.mjs");
var Route$8 = createFileRoute("/nhom-tinh-cach")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./trac-nghiem-COG-kzDL.mjs");
var Route$7 = createFileRoute("/trac-nghiem")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./huong-nghiep.index-DhkWb4Fp.mjs");
var Route$6 = createFileRoute("/huong-nghiep/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./huong-nghiep._careerId-Ba8OYbBV.mjs");
var Route$5 = createFileRoute("/huong-nghiep/$careerId")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./ket-qua._quizId-Df5zwsJW.mjs");
var Route$4 = createFileRoute("/ket-qua/$quizId")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./nhom-tinh-cach.index-C5CKloHR.mjs");
var Route$3 = createFileRoute("/nhom-tinh-cach/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./nhom-tinh-cach._typeId-BBtFAr04.mjs");
var Route$2 = createFileRoute("/nhom-tinh-cach/$typeId")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./trac-nghiem.index-BnMOtzP7.mjs");
var Route$1 = createFileRoute("/trac-nghiem/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./trac-nghiem._quizId-Dk4syVnR.mjs");
var Route = createFileRoute("/trac-nghiem/$quizId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var GioiThieuRoute = Route$11.update({
	id: "/gioi-thieu",
	path: "/gioi-thieu",
	getParentRoute: () => Route$13
});
var HoSoRoute = Route$10.update({
	id: "/ho-so",
	path: "/ho-so",
	getParentRoute: () => Route$13
});
var HuongNghiepRoute = Route$9.update({
	id: "/huong-nghiep",
	path: "/huong-nghiep",
	getParentRoute: () => Route$13
});
var NhomTinhCachRoute = Route$8.update({
	id: "/nhom-tinh-cach",
	path: "/nhom-tinh-cach",
	getParentRoute: () => Route$13
});
var TracNghiemRoute = Route$7.update({
	id: "/trac-nghiem",
	path: "/trac-nghiem",
	getParentRoute: () => Route$13
});
var HuongNghiepIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => HuongNghiepRoute
});
var HuongNghiepCareerIdRoute = Route$5.update({
	id: "/$careerId",
	path: "/$careerId",
	getParentRoute: () => HuongNghiepRoute
});
var KetQuaQuizIdRoute = Route$4.update({
	id: "/ket-qua/$quizId",
	path: "/ket-qua/$quizId",
	getParentRoute: () => Route$13
});
var NhomTinhCachIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => NhomTinhCachRoute
});
var NhomTinhCachTypeIdRoute = Route$2.update({
	id: "/$typeId",
	path: "/$typeId",
	getParentRoute: () => NhomTinhCachRoute
});
var TracNghiemIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => TracNghiemRoute
});
var TracNghiemQuizIdRoute = Route.update({
	id: "/$quizId",
	path: "/$quizId",
	getParentRoute: () => TracNghiemRoute
});
var HuongNghiepRouteChildren = {
	HuongNghiepCareerIdRoute,
	HuongNghiepIndexRoute
};
var HuongNghiepRouteWithChildren = HuongNghiepRoute._addFileChildren(HuongNghiepRouteChildren);
var NhomTinhCachRouteChildren = {
	NhomTinhCachTypeIdRoute,
	NhomTinhCachIndexRoute
};
var NhomTinhCachRouteWithChildren = NhomTinhCachRoute._addFileChildren(NhomTinhCachRouteChildren);
var TracNghiemRouteChildren = {
	TracNghiemQuizIdRoute,
	TracNghiemIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	GioiThieuRoute,
	HoSoRoute,
	HuongNghiepRoute: HuongNghiepRouteWithChildren,
	NhomTinhCachRoute: NhomTinhCachRouteWithChildren,
	TracNghiemRoute: TracNghiemRoute._addFileChildren(TracNghiemRouteChildren),
	KetQuaQuizIdRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFoundPage
	});
}
//#endregion
export { pct as C, cn as S, getQuiz as _, Route$5 as a, Button as b, hasPartialProgress as c, loadMergedProfile as d, loadProgress as f, QUIZZES as g, saveResult as h, Route$4 as i, loadAllResults as l, saveProgress as m, Route as n, SiteShell as o, loadResult as p, Route$2 as r, clearProgress as s, router_exports as t, loadLastResult as u, questionsFor as v, Logo as x, RIASEC_GROUP_MAX as y };
