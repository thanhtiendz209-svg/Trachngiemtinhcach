import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const ITEMS = [
  {
    q: "Kết quả trắc nghiệm có ‘đúng’ không?",
    a: "Không có đáp án đúng. Lumina mô tả xu hướng — cách bạn hay nghĩ, quyết và thích kiểu việc nào. Dùng để soi gương, không phải chẩn đoán hay lời kết nghề nghiệp.",
  },
  {
    q: "MBTI, RIASEC và Big Five khác nhau thế nào?",
    a: "MBTI kể câu chuyện về 16 nhóm. RIASEC (Holland) nhìn sở thích nghề theo 6 kiểu việc. Big Five đo năm chiều tính cách theo mức độ. Hồ sơ tổng hợp lấy cả tính cách lẫn sở thích trong một lần.",
  },
  {
    q: "Có cần tài khoản không? Dữ liệu nằm đâu?",
    a: "Không. Câu trả lời và kết quả lưu trên thiết bị của bạn. Lumina không gửi hồ sơ cá nhân lên máy chủ ở bản trải nghiệm này.",
  },
  {
    q: "Làm lại có mất hồ sơ cũ không?",
    a: "Hồ sơ cũ vẫn xem được cho đến khi bạn hoàn thành bài mới. Tiến độ dở được giữ, có thể tiếp tục hoặc bắt đầu lại.",
  },
  {
    q: "Dùng kết quả để chọn ngành được không?",
    a: "Được như bản đồ tham khảo — không như lệnh. Mức phù hợp là ước lượng. Hãy thử việc thật, nói với người trong nghề, rồi mới chốt.",
  },
  {
    q: "Làm bài mất bao lâu? Có được quay lại không?",
    a: "Khoảng 6–12 phút tùy bài. Một câu một nhịp, quay lại câu trước, đáp án cũ được giữ. Phím 1–4 để chọn, Enter để tiếp tục.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Câu hỏi thường gặp</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-navy">Trước khi bắt đầu</h2>
      </Reveal>
      <Reveal delay={80}>
        <Accordion.Root type="single" collapsible className="mt-8 divide-y divide-line rounded-[24px] bg-card shadow-border">
          {ITEMS.map((item) => (
            <Accordion.Item key={item.q} value={item.q} className="px-5 sm:px-6">
              <Accordion.Header>
                <Accordion.Trigger className="group flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-display text-base font-semibold text-navy">
                  {item.q}
                  <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 ease-out group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-content">
                <p className="overflow-hidden pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Reveal>
    </section>
  );
}
