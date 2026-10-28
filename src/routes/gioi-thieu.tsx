import { Link, createFileRoute } from "@tanstack/react-router";
import { Faq } from "@/components/home/Faq";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/gioi-thieu")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <div className="hero-wash">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Về Lumina</p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-navy">
              Ánh sáng vừa đủ để nhìn đường, không phải để chói mắt
            </h1>
            <p className="mt-4 text-muted leading-relaxed">
              Lumina là nền tảng trắc nghiệm tính cách và hướng nghiệp dành cho học sinh, sinh viên và người đang tìm
              hướng đi. Chúng tôi tin việc hiểu mình nên chậm, rõ, và tử tế.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6">
        <Reveal as="section">
          <h2 className="font-display text-2xl font-semibold text-navy">Phương pháp</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Các bài test dựa trên khung đã được dùng rộng rãi trong giáo dục hướng nghiệp: MBTI (xu hướng nhận thức),
            RIASEC / Holland (sở thích nghề), và Big Five (năm chiều tính cách). Thuật toán hiện tại là phiên bản giáo
            dục — đủ để soi gương, chưa phải công cụ chẩn đoán lâm sàng.
          </p>
        </Reveal>
        <Reveal as="section" delay={60}>
          <h2 className="font-display text-2xl font-semibold text-navy">Ba khung, một hồ sơ</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <li>
              <span className="font-medium text-navy">MBTI</span> — 16 nhóm, kể cách bạn nạp năng lượng, nhận thông tin,
              ra quyết định và sắp xếp đời sống.
            </li>
            <li>
              <span className="font-medium text-navy">RIASEC</span> — sáu kiểu việc (Holland) để đọc sở thích nghề, không
              phải hộp nghề.
            </li>
            <li>
              <span className="font-medium text-navy">Big Five</span> — năm chiều đo theo mức độ, ít ‘nhóm’ hơn, nhiều
              ‘mức’ hơn.
            </li>
          </ul>
        </Reveal>
        <Reveal as="section" delay={80}>
          <h2 className="font-display text-2xl font-semibold text-navy">Chính sách dữ liệu</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Câu trả lời và kết quả được lưu trên thiết bị của bạn (trình duyệt). Lumina không yêu cầu tài khoản và không
            gửi hồ sơ cá nhân lên máy chủ cho bản trải nghiệm này. Xóa dữ liệu trình duyệt là xóa hồ sơ.
          </p>
        </Reveal>
        <Reveal as="section" delay={120}>
          <h2 className="font-display text-2xl font-semibold text-navy">Liên hệ</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted" id="lien-he">
            Góp ý về nội dung, bản dịch hoặc trải nghiệm: hãy dùng kênh phản hồi của nền tảng. Chúng tôi đọc chậm và sửa
            có chủ đích.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <Button asChild>
            <Link to="/trac-nghiem">Bắt đầu trắc nghiệm</Link>
          </Button>
        </Reveal>
      </div>
      <Faq />
    </SiteShell>
  );
}
