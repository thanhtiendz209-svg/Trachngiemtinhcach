import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="hero-wash relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-10 size-56 rounded-full bg-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 size-72 rounded-full bg-azure/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24 lg:pt-10">
        <div>
          <p
            className="reveal is-in text-xs font-semibold uppercase tracking-[0.18em] text-azure"
            style={{ animationDelay: "0ms" }}
          >
            Trắc nghiệm tính cách & hướng nghiệp
          </p>
          <h1
            className="reveal is-in mt-4 max-w-xl font-display text-[2.05rem] font-semibold tracking-tight text-navy sm:text-5xl"
            style={{ transitionDelay: "80ms" }}
          >
            Khám phá tính cách – Hiểu bản thân – Chọn đúng hướng đi
          </h1>
          <p
            className="reveal is-in mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            style={{ transitionDelay: "160ms" }}
          >
            Lumina đồng hành cùng bạn qua từng câu hỏi, từng lớp kết quả —
            chậm, rõ, và luôn mang tính tham khảo.
          </p>
          <div className="reveal is-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ transitionDelay: "240ms" }}>
            <Button asChild size="lg" className="ripple w-full sm:w-auto">
              <Link to="/trac-nghiem">
                Bắt đầu trắc nghiệm
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link to="/nhom-tinh-cach">Khám phá 16 nhóm</Link>
            </Button>
          </div>
          <dl className="reveal is-in mt-10 grid grid-cols-3 gap-3 max-w-md" style={{ transitionDelay: "320ms" }}>
            {[
              ["5", "bài test"],
              ["16", "nhóm tính cách"],
              ["10+", "nhóm ngành"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-[var(--radius-lg)] bg-card/70 px-3 py-3 shadow-border">
                <dt className="font-display text-xl font-semibold tabular-nums text-navy">{n}</dt>
                <dd className="text-xs text-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal is-in relative" style={{ transitionDelay: "180ms" }}>
          <div className="float-slow overflow-hidden rounded-[28px] shadow-border-hover">
            <img
              src="/illustrations/hero.webp"
              alt="Nhân vật khám phá bản đồ tính cách"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            />
          </div>
          <div className="float-slower absolute -bottom-4 left-4 rounded-[var(--radius-lg)] bg-card/95 px-4 py-3 shadow-border-hover sm:left-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-azure">Hồ sơ mẫu</p>
            <p className="font-display text-lg font-semibold text-navy">INFP · Người lý tưởng</p>
          </div>
        </div>
      </div>
    </section>
  );
}
