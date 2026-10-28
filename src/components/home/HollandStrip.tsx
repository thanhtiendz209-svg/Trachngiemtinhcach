import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/shared/Reveal";
import { RIASEC_TYPES } from "@/data/riasec";

export function HollandStrip() {
  return (
    <section className="bg-mist/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Holland · RIASEC</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy">Sáu kiểu việc, sáu cách bị cuốn</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Không phải hộp nghề — là loại việc làm bạn thấy sống. Dùng cùng kết quả tính cách để đọc hướng đi.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RIASEC_TYPES.map((t, i) => (
            <Reveal key={t.id} delay={Math.min(i, 3) * 40}>
              <Link
                to="/huong-nghiep"
                hash={t.id}
                className="group flex h-full overflow-hidden rounded-[24px] bg-card shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover"
              >
                <img
                  src={t.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-28 shrink-0 object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] sm:w-32"
                />
                <div className="p-4">
                  <p className="font-display text-sm font-semibold tracking-[0.16em] text-azure">{t.id}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-navy">{t.name}</h3>
                  <p className="mt-1 text-sm italic text-azure">{t.slogan}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{t.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
