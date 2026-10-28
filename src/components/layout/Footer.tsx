import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cyan-soft/90">
            Lumina giúp bạn nhìn rõ hơn về tính cách, điểm mạnh và hướng đi phù hợp —
            chậm rãi, trung thực, mang tính tham khảo.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="/gioi-thieu#lien-he"
                className="grid size-10 place-items-center rounded-full bg-white/8 text-paper transition-[background-color] duration-150 hover:bg-white/16"
                aria-label="Mạng xã hội"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-soft">Trắc nghiệm</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/trac-nghiem" className="text-paper/85 hover:text-cyan-soft">
                Tất cả bài test
              </Link>
            </li>
            <li>
              <Link to="/trac-nghiem/$quizId" params={{ quizId: "mbti" }} className="text-paper/85 hover:text-cyan-soft">
                MBTI
              </Link>
            </li>
            <li>
              <Link to="/trac-nghiem/$quizId" params={{ quizId: "riasec" }} className="text-paper/85 hover:text-cyan-soft">
                RIASEC
              </Link>
            </li>
            <li>
              <Link to="/trac-nghiem/$quizId" params={{ quizId: "bigfive" }} className="text-paper/85 hover:text-cyan-soft">
                Big Five
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-soft">Khám phá</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/nhom-tinh-cach" className="text-paper/85 hover:text-cyan-soft">
                16 nhóm tính cách
              </Link>
            </li>
            <li>
              <Link to="/huong-nghiep" className="text-paper/85 hover:text-cyan-soft">
                Hướng nghiệp
              </Link>
            </li>
            <li>
              <Link to="/ho-so" className="text-paper/85 hover:text-cyan-soft">
                Hồ sơ của bạn
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-soft">Hỗ trợ</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/gioi-thieu" className="text-paper/85 hover:text-cyan-soft">
                Phương pháp
              </Link>
            </li>
            <li>
              <Link to="/gioi-thieu" className="text-paper/85 hover:text-cyan-soft">
                Chính sách
              </Link>
            </li>
            <li>
              <Link to="/gioi-thieu" className="text-paper/85 hover:text-cyan-soft">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-paper/55 sm:px-6">
          © {new Date().getFullYear()} Lumina. Kết quả trắc nghiệm chỉ mang tính tham khảo,
          không thay thế tư vấn chuyên môn.
        </p>
      </div>
    </footer>
  );
}
