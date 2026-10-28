import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { QuizResult } from "@/data/types";
import { loadLastResult } from "@/lib/storage";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Trang chủ" },
  { to: "/trac-nghiem", label: "Trắc nghiệm" },
  { to: "/nhom-tinh-cach", label: "Nhóm tính cách" },
  { to: "/huong-nghiep", label: "Hướng nghiệp" },
  { to: "/gioi-thieu", label: "Giới thiệu" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState<QuizResult | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setLast(loadLastResult());
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const slim = scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,box-shadow,padding] duration-200 ease-out",
        slim ? "bg-paper/80 py-2 shadow-border backdrop-blur-xl" : "bg-transparent py-3.5",
      )}
    >
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Chính">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-[color,background-color] duration-150",
                  active ? "bg-ice text-navy" : "text-muted hover:bg-ice/80 hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          {last ? (
            <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
              <Link to="/ho-so">Hồ sơ của bạn</Link>
            </Button>
          ) : null}
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/trac-nghiem">Làm trắc nghiệm</Link>
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-[var(--radius-md)] text-navy lg:hidden"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-4 pt-2" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-[var(--radius-md)] px-3 py-3 text-base font-medium text-navy hover:bg-ice"
            >
              {item.label}
            </Link>
          ))}
          {last ? (
            <Link to="/ho-so" className="rounded-[var(--radius-md)] px-3 py-3 text-base font-medium text-navy hover:bg-ice">
              Hồ sơ của bạn
            </Link>
          ) : null}
          <Button asChild className="mt-2 w-full">
            <Link to="/trac-nghiem">Làm trắc nghiệm</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
