import { useMemo, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { PERSONALITIES, PERSONALITY_GROUPS } from "@/data/personalities";
import { cn } from "@/lib/utils";
import { TypeCard } from "./TypeCard";

export function TypeGrid() {
  const [filter, setFilter] = useState<(typeof PERSONALITY_GROUPS)[number]["id"]>("all");
  const list = useMemo(
    () => (filter === "all" ? PERSONALITIES : PERSONALITIES.filter((p) => p.group === filter)),
    [filter],
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">16 nhóm</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-navy">Khám phá các nhóm tính cách</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Mỗi nhóm là một cách nhìn thế giới — không phải hộp để nhốt người.
        </p>
      </Reveal>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Lọc nhóm">
        {PERSONALITY_GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            aria-selected={filter === g.id}
            onClick={() => setFilter(g.id)}
            className={cn(
              "min-h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150",
              filter === g.id
                ? "bg-navy text-paper shadow-border"
                : "bg-card text-muted shadow-border hover:text-navy",
            )}
          >
            {g.label}
          </button>
        ))}
      </div>
      <div key={filter} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((t, i) => (
          <Reveal key={t.id} delay={Math.min(i, 4) * 40}>
            <TypeCard type={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
