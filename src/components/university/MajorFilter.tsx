import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Check, ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const BATCH_SIZE = 80;

function searchable(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[đĐ]/gu, "d")
    .toLowerCase()
    .replace(/\s+/gu, " ")
    .trim();
}

export function MajorFilter({
  options,
  value,
  onValueChange,
}: {
  options: string[];
  value: string;
  onValueChange: (value: string) => void;
}) {
  const id = useId();
  const triggerId = `${id}-trigger`;
  const labelId = `${id}-label`;
  const listId = `${id}-list`;
  const selectionId = `${id}-selection`;
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [windowStart, setWindowStart] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [popup, setPopup] = useState<HTMLDivElement | null>(null);
  const [compact, setCompact] = useState(false);
  const choices = useMemo(
    () => [
      { value: "all", label: "Tất cả ngành", search: searchable("Tất cả ngành") },
      ...options.map((name) => ({ value: name, label: name, search: searchable(name) })),
    ],
    [options],
  );
  const filtered = useMemo(() => {
    const needle = searchable(query);
    return needle ? choices.filter((choice) => choice.search.includes(needle)) : choices;
  }, [choices, query]);
  const start = Math.min(
    windowStart,
    Math.max(0, Math.floor((filtered.length - 1) / BATCH_SIZE) * BATCH_SIZE),
  );
  const visible = filtered.slice(start, start + BATCH_SIZE);
  const active = filtered.length ? Math.min(Math.max(0, activeIndex), filtered.length - 1) : -1;
  const activeIsVisible = active >= start && active < start + visible.length;
  const optionId = (index: number) => `${id}-option-${index}`;
  const selectedLabel = value === "all" ? "Tất cả ngành" : value;

  useEffect(() => {
    if (!open || !popup) return;
    let frame = 0;
    function measure() {
      const available = Number.parseFloat(
        window
          .getComputedStyle(popup!)
          .getPropertyValue("--radix-popover-content-available-height"),
      );
      const viewport = window.visualViewport?.height ?? window.innerHeight;
      setCompact(Number.isFinite(available) && available > 0 ? available < 240 : viewport < 480);
    }
    function scheduleMeasure() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measure);
    }
    measure();
    scheduleMeasure();
    const observer =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleMeasure);
    observer?.observe(popup);
    window.addEventListener("resize", scheduleMeasure);
    window.visualViewport?.addEventListener("resize", scheduleMeasure);
    window.visualViewport?.addEventListener("scroll", scheduleMeasure);
    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", scheduleMeasure);
      window.visualViewport?.removeEventListener("resize", scheduleMeasure);
      window.visualViewport?.removeEventListener("scroll", scheduleMeasure);
    };
  }, [open, popup]);

  useEffect(() => {
    if (!open || !activeIsVisible) return;
    const element = document.getElementById(optionId(active));
    if (!element || !list.current) return;
    const top = element.offsetTop;
    const bottom = top + element.offsetHeight;
    if (top < list.current.scrollTop) list.current.scrollTop = top;
    else if (bottom > list.current.scrollTop + list.current.clientHeight) {
      list.current.scrollTop = bottom - list.current.clientHeight;
    }
  }, [active, activeIsVisible, compact, id, open, start]);

  function openList(next: boolean) {
    if (next) {
      const selected = Math.max(
        0,
        choices.findIndex((choice) => choice.value === value),
      );
      setQuery("");
      setActiveIndex(selected);
      setWindowStart(Math.floor(selected / BATCH_SIZE) * BATCH_SIZE);
    }
    setOpen(next);
  }

  function moveTo(index: number) {
    if (!filtered.length) return;
    const next = Math.max(0, Math.min(index, filtered.length - 1));
    setActiveIndex(next);
    if (next < start || next >= start + BATCH_SIZE) {
      setWindowStart(Math.floor(next / BATCH_SIZE) * BATCH_SIZE);
    }
  }

  function choose(next: string) {
    onValueChange(next);
    setOpen(false);
  }

  function onSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveTo(active + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      moveTo(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveTo(filtered.length - 1);
    } else if (event.key === "PageDown") {
      event.preventDefault();
      moveTo(active + BATCH_SIZE);
    } else if (event.key === "PageUp") {
      event.preventDefault();
      moveTo(active - BATCH_SIZE);
    } else if (event.key === "Enter" && active >= 0) {
      event.preventDefault();
      choose(filtered[active].value);
    }
  }

  function showBatch(next: number) {
    setWindowStart(next);
    setActiveIndex(next);
    if (list.current) list.current.scrollTop = 0;
    input.current?.focus();
  }

  return (
    <div className="min-w-0">
      <label
        id={labelId}
        htmlFor={triggerId}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-azure"
      >
        Ngành
      </label>
      <Popover.Root open={open} onOpenChange={openList}>
        <Popover.Trigger asChild>
          <button
            id={triggerId}
            type="button"
            aria-labelledby={labelId}
            aria-describedby={selectionId}
            data-major-filter-trigger
            className="flex min-h-12 w-full items-center gap-3 rounded-2xl bg-mist px-3 py-3 text-left text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-azure"
            onKeyDown={(event) => {
              if (!open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
                event.preventDefault();
                openList(true);
                if (event.key === "ArrowUp") {
                  setActiveIndex(choices.length - 1);
                  setWindowStart(Math.floor((choices.length - 1) / BATCH_SIZE) * BATCH_SIZE);
                }
              }
            }}
          >
            <span
              id={selectionId}
              className="line-clamp-2 min-w-0 flex-1 whitespace-normal break-words"
              title={selectedLabel}
            >
              {selectedLabel}
            </span>
            <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-azure" />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            ref={setPopup}
            align="start"
            sideOffset={6}
            collisionPadding={12}
            aria-label="Chọn ngành"
            data-major-filter-popup
            data-compact={compact || undefined}
            className="z-50 flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-paper p-2 text-navy shadow-border-hover"
            style={{
              width: "var(--radix-popover-trigger-width)",
              maxWidth: "calc(100vw - 2rem)",
              maxHeight: "min(32rem, var(--radix-popover-content-available-height))",
            }}
            onOpenAutoFocus={(event) => {
              event.preventDefault();
              input.current?.focus();
            }}
          >
            <div className={cn("shrink-0", compact && "mb-1 flex items-center gap-1")}>
              <div className="relative min-w-0 flex-1">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                />
                <input
                  ref={input}
                  type="text"
                  role="combobox"
                  aria-label="Tìm ngành"
                  aria-autocomplete="list"
                  aria-expanded={open}
                  aria-controls={listId}
                  aria-activedescendant={activeIsVisible ? optionId(active) : undefined}
                  autoComplete="off"
                  placeholder="Gõ tên ngành, có dấu hoặc không dấu..."
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setWindowStart(0);
                    setActiveIndex(0);
                    if (list.current) list.current.scrollTop = 0;
                  }}
                  onKeyDown={onSearchKeyDown}
                  className="h-12 w-full rounded-xl bg-mist pl-10 pr-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-azure"
                />
              </div>
              {compact && filtered.length > BATCH_SIZE ? (
                <>
                  <button
                    type="button"
                    aria-label="Xem nhóm ngành trước"
                    disabled={start === 0}
                    onClick={() => showBatch(Math.max(0, start - BATCH_SIZE))}
                    className="grid size-11 shrink-0 place-items-center rounded-xl text-azure disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-azure"
                  >
                    <ChevronLeft className="size-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Xem thêm ngành"
                    disabled={start + BATCH_SIZE >= filtered.length}
                    onClick={() => showBatch(start + BATCH_SIZE)}
                    className="grid size-11 shrink-0 place-items-center rounded-xl text-azure disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-azure"
                  >
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>
            <p
              role="status"
              aria-live="polite"
              className={cn(
                "shrink-0 text-xs tabular-nums text-muted",
                compact ? "sr-only" : "px-2 py-2",
              )}
            >
              {filtered.length
                ? `${filtered.length} lựa chọn · ${start + 1}–${start + visible.length}`
                : "Không tìm thấy ngành phù hợp."}
            </p>
            <div
              ref={list}
              id={listId}
              role="listbox"
              aria-label="Danh sách ngành"
              data-major-filter-list
              className="relative min-h-0 max-h-80 overflow-y-auto overscroll-contain"
            >
              {visible.map((choice, offset) => {
                const index = start + offset;
                return (
                  <div
                    key={choice.value}
                    id={optionId(index)}
                    role="option"
                    aria-selected={value === choice.value}
                    aria-posinset={index + 1}
                    aria-setsize={filtered.length}
                    data-major-option={choice.value}
                    data-active={active === index || undefined}
                    tabIndex={-1}
                    onMouseDown={(event) => event.preventDefault()}
                    onPointerMove={() => {
                      if (active !== index) setActiveIndex(index);
                    }}
                    onClick={() => choose(choice.value)}
                    className={cn(
                      "flex min-h-11 cursor-pointer items-start gap-2 rounded-xl px-3 py-3 text-left text-sm outline-none",
                      active === index ? "bg-ice text-navy" : "text-navy hover:bg-mist",
                    )}
                  >
                    <span
                      className="min-w-0 flex-1 whitespace-normal break-words"
                      title={choice.label}
                    >
                      {choice.label}
                    </span>
                    {value === choice.value ? (
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-azure" />
                    ) : null}
                  </div>
                );
              })}
              {compact && !filtered.length ? (
                <p className="px-3 py-3 text-sm text-muted">Không tìm thấy ngành phù hợp.</p>
              ) : null}
            </div>
            {!compact && filtered.length > BATCH_SIZE ? (
              <div className="mt-1 flex shrink-0 items-center justify-between gap-2 border-t border-line pt-1">
                <button
                  type="button"
                  aria-label="Xem nhóm ngành trước"
                  disabled={start === 0}
                  onClick={() => showBatch(Math.max(0, start - BATCH_SIZE))}
                  className="min-h-11 rounded-xl px-2 text-sm font-medium text-azure disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-azure"
                >
                  Nhóm trước
                </button>
                <button
                  type="button"
                  aria-label="Xem thêm ngành"
                  disabled={start + BATCH_SIZE >= filtered.length}
                  onClick={() => showBatch(start + BATCH_SIZE)}
                  className="min-h-11 rounded-xl px-2 text-sm font-medium text-azure disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-azure"
                >
                  Xem thêm
                </button>
              </div>
            ) : null}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
