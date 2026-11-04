import { lazy, Suspense, useId, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { ORIGIN_PERSONALITIES, PERSONALITIES, PERSONALITY_GROUPS } from "@/data/personalities";
import { cn } from "@/lib/utils";
import { TypeCard } from "./TypeCard";

const RiasecProfileLibrary = lazy(() =>
  import("@/components/riasec/RiasecProfileLibrary").then((module) => ({
    default: module.RiasecProfileLibrary,
  })),
);

type PersonalityTab = (typeof PERSONALITY_GROUPS)[number]["id"];

export function TypeGrid({
  activeTab,
  onTabChange,
}: {
  activeTab?: PersonalityTab;
  onTabChange?: (tab: PersonalityTab) => void;
}) {
  const id = useId();
  const [internalTab, setInternalTab] = useState<PersonalityTab>("mbti");
  const selected = activeTab ?? internalTab;
  const list = selected === "mbti" ? PERSONALITIES : ORIGIN_PERSONALITIES;

  function changeTab(next: PersonalityTab) {
    if (activeTab === undefined) setInternalTab(next);
    onTabChange?.(next);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
          16 nhóm MBTI · 6 nhóm RIASEC
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-navy">
          Khám phá các nhóm tính cách
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Chọn “Nhóm MBTI” để khám phá 16 nhóm tính cách MBTI hoặc “Nhóm RIASEC” để xem 6 nhóm tính
          cách RIASEC.
        </p>
      </Reveal>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Lọc nhóm">
        {PERSONALITY_GROUPS.map((g) => (
          <button
            key={g.id}
            id={`${id}-tab-${g.id}`}
            type="button"
            role="tab"
            aria-selected={selected === g.id}
            aria-controls={`${id}-panel`}
            tabIndex={selected === g.id ? 0 : -1}
            onClick={() => changeTab(g.id)}
            onKeyDown={(event) => {
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
              event.preventDefault();
              const next =
                event.key === "Home"
                  ? "mbti"
                  : event.key === "End"
                    ? "origin"
                    : g.id === "mbti"
                      ? "origin"
                      : "mbti";
              changeTab(next);
              document.getElementById(`${id}-tab-${next}`)?.focus();
            }}
            className={cn(
              "min-h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2",
              selected === g.id
                ? "bg-navy text-paper shadow-border"
                : "bg-card text-muted shadow-border hover:text-navy",
            )}
          >
            {g.label}
          </button>
        ))}
      </div>
      <div
        key={selected}
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${selected}`}
        tabIndex={0}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure"
      >
        <div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          data-personality-cards={selected}
        >
          {list.map((t, i) => (
            <Reveal key={t.id} delay={Math.min(i, 4) * 40}>
              <TypeCard type={t} />
            </Reveal>
          ))}
        </div>
        {selected === "origin" && (
          <div id="ho-so-riasec" className="scroll-mt-24">
            <Suspense
              fallback={
                <p className="mt-16 text-sm text-muted" role="status">
                  Đang tải thư viện hồ sơ RIASEC…
                </p>
              }
            >
              <RiasecProfileLibrary />
            </Suspense>
          </div>
        )}
      </div>
    </section>
  );
}
