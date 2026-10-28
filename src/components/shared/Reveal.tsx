import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const pendingReveals = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | undefined;

function observeReveal(element: Element, reveal: () => void) {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const callback = pendingReveals.get(entry.target);
          pendingReveals.delete(entry.target);
          sharedObserver?.unobserve(entry.target);
          callback?.();
        }
        if (pendingReveals.size === 0) {
          sharedObserver?.disconnect();
          sharedObserver = undefined;
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -36px 0px" },
    );
  }
  pendingReveals.set(element, reveal);
  sharedObserver.observe(element);
  return () => {
    pendingReveals.delete(element);
    sharedObserver?.unobserve(element);
    if (pendingReveals.size === 0) {
      sharedObserver?.disconnect();
      sharedObserver = undefined;
    }
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    return observeReveal(el, () => setOn(true));
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", on && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

