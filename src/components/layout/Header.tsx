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
    let frame: number | null = null;
    const update = () => {
      frame = null;
      setScrolled(window.scrollY > 12);
    };
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setLast(loadLastResult());
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const slim = scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full py-3.5 transition-[background-color,box-shadow] duration-200 ease-out motion-reduce:transition-none",
        slim ? "bg-paper/80 shadow-border backdrop-blur-xl" : "bg-transparent",
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
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full max-h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain origin-top bg-paper/95 shadow-border backdrop-blur-xl transition-[transform,opacity,visibility] duration-200 ease-out motion-reduce:transition-none lg:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none",
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

