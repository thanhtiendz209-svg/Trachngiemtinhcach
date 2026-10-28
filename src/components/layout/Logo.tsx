import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  onClick,
  light = false,
}: {
  className?: string;
  onClick?: () => void;
  light?: boolean;
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn("flex items-center gap-2.5 no-underline", light ? "text-paper" : "text-navy", className)}
    >
      <span className="relative grid size-9 place-items-center rounded-[12px] bg-navy shadow-border">
        <svg viewBox="0 0 32 32" className="size-5" aria-hidden>
          <circle cx="16" cy="16" r="10" fill="none" stroke="#7EDCE6" strokeWidth="1.6" />
          <circle cx="16" cy="16" r="4.2" fill="#2AB8C9" />
          <circle cx="16" cy="16" r="1.6" fill="#E8F3FB" />
          <path d="M16 4.5v3.2M16 24.3v3.2M4.5 16h3.2M24.3 16h3.2" stroke="#E8F3FB" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-semibold tracking-tight">Lumina</span>
        <span
          className={cn(
            "mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em]",
            light ? "text-cyan-soft" : "text-muted",
          )}
        >
          Hướng nghiệp
        </span>
      </span>
    </Link>
  );
}
