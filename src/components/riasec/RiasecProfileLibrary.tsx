import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { RiasecCodeIllustration } from "@/components/riasec/RiasecCodeIllustration";
import { Button } from "@/components/ui/button";
import { filterRiasecProfiles, RIASEC_PROFILES } from "@/lib/riasec-profiles";
import { cn } from "@/lib/utils";

const PRIMARY_GROUPS = [
  { code: "R", name: "Thực tế" },
  { code: "I", name: "Nghiên cứu" },
  { code: "A", name: "Sáng tạo" },
  { code: "S", name: "Xã hội" },
  { code: "E", name: "Quản lý" },
  { code: "C", name: "Nghiệp vụ" },
] as const;

type PrimaryGroup = "all" | (typeof PRIMARY_GROUPS)[number]["code"];
const PAGE_SIZE = 12;

export function RiasecProfileLibrary() {
  const id = useId();
  const [query, setQuery] = useState("");
  const [primary, setPrimary] = useState<PrimaryGroup>("all");
  const [page, setPage] = useState(0);
  const filtered = useMemo(() => filterRiasecProfiles(query, primary), [query, primary]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount - 1);
  const start = currentPage * PAGE_SIZE;
  const visibleProfiles = filtered.slice(start, start + PAGE_SIZE);

  function resetFilters() {
    setQuery("");
    setPrimary("all");
    setPage(0);
  }

  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="mt-16 border-t border-navy/10 pt-12 sm:mt-20 sm:pt-16"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-azure">
        Khám phá tổ hợp của bạn
      </p>
      <h2 id={`${id}-heading`} className="mt-2 font-display text-3xl font-semibold text-navy">
        120 hồ sơ RIASEC kết hợp
      </h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">
        Mỗi hồ sơ kết hợp ba nhóm theo thứ tự ưu tiên: chữ đầu là nhóm nổi bật nhất, tiếp theo là
        nhóm thứ hai và thứ ba. RIA và IRA là hai hồ sơ khác nhau.
      </p>

      <div className="mt-6 rounded-2xl bg-ice p-4 sm:p-5">
        <label htmlFor={`${id}-search`} className="block text-sm font-semibold text-navy">
          Tìm hồ sơ RIASEC
        </label>
        <div className="relative mt-2">
          <Search
            className="pointer-events-none absolute left-3 top-3.5 size-5 text-muted"
            aria-hidden="true"
          />
          <input
            id={`${id}-search`}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(0);
            }}
            placeholder="Nhập mã, tên hoặc từ khóa…"
            className="min-h-12 w-full min-w-0 rounded-xl bg-paper py-3 pl-10 pr-3 text-sm text-navy shadow-border outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-azure"
          />
        </div>
        <div
          role="group"
          aria-label="Lọc theo nhóm RIASEC đứng đầu"
          className="mt-4 flex flex-wrap gap-2"
        >
          {[{ code: "all", name: "Tất cả" }, ...PRIMARY_GROUPS].map((group) => (
            <button
              type="button"
              key={group.code}
              aria-pressed={primary === group.code}
              onClick={() => {
                setPrimary(group.code as PrimaryGroup);
                setPage(0);
              }}
              className={cn(
                "min-h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2",
                primary === group.code
                  ? "bg-navy text-paper shadow-border"
                  : "bg-paper text-navy shadow-border hover:bg-card",
              )}
            >
              {group.code === "all" ? group.name : `${group.code} · ${group.name}`}
            </button>
          ))}
        </div>
      </div>

      <p role="status" aria-live="polite" className="mt-5 text-sm text-muted">
        {filtered.length === 0
          ? "Không tìm thấy hồ sơ phù hợp."
          : `Hiển thị ${start + 1}–${Math.min(start + PAGE_SIZE, filtered.length)} trong ${filtered.length} hồ sơ${filtered.length === RIASEC_PROFILES.length ? " RIASEC" : " phù hợp"}.`}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-2xl bg-card px-5 py-8 text-center shadow-border">
          <h3 className="font-display text-lg font-semibold text-navy">
            Thử một mã hoặc từ khóa khác
          </h3>
          <p className="mt-2 text-sm text-muted">
            Bạn có thể tìm bằng ba chữ cái, tên hồ sơ hoặc từ khóa không dấu.
          </p>
          <Button type="button" variant="secondary" className="mt-5" onClick={resetFilters}>
            Xóa tìm kiếm và bộ lọc
          </Button>
        </div>
      ) : (
        <>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProfiles.map((profile) => (
              <article
                key={profile.code}
                data-riasec-profile={profile.code}
                className="flex min-w-0 flex-col overflow-hidden rounded-3xl bg-card text-navy shadow-border"
              >
                <RiasecCodeIllustration code={profile.code} />
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-sm font-semibold tracking-widest text-azure">
                    {profile.code}
                  </p>
                  <h3 className="mt-1 break-words font-display text-xl font-semibold leading-snug">
                    {profile.title}
                  </h3>
                  <p className="mt-2 text-sm italic leading-relaxed text-azure">{profile.quote}</p>
                  <ol
                    aria-label={`Thứ tự nhóm trong mã ${profile.code}`}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {profile.code.split("").map((letter, index) => {
                      const group = PRIMARY_GROUPS.find((item) => item.code === letter);
                      return (
                        <li
                          key={letter}
                          className="rounded-full bg-ice px-2.5 py-1 text-xs font-medium text-navy"
                          title={group?.name}
                        >
                          {index + 1}. {letter} · {group?.name}
                        </li>
                      );
                    })}
                  </ol>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                    {profile.overview}
                  </p>
                  <div className="mt-auto pt-5">
                    <Button asChild variant="secondary" className="w-full">
                      <Link to="/nhom-tinh-cach/riasec/$code" params={{ code: profile.code }}>
                        Xem hồ sơ
                        <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <nav
            aria-label="Phân trang hồ sơ RIASEC"
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              type="button"
              variant="secondary"
              aria-label="Trang hồ sơ trước"
              disabled={currentPage === 0}
              onClick={() => setPage(currentPage - 1)}
            >
              <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
              <span>Trước</span>
            </Button>
            <span className="text-sm text-muted">
              Trang {currentPage + 1} / {pageCount}
            </span>
            <Button
              type="button"
              variant="secondary"
              aria-label="Trang hồ sơ tiếp theo"
              disabled={currentPage === pageCount - 1}
              onClick={() => setPage(currentPage + 1)}
            >
              <span>Tiếp</span>
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Button>
          </nav>
        </>
      )}
    </section>
  );
}
