import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { RiasecType } from "@/data/types";

export function HollandCard({ type }: { type: RiasecType }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-card shadow-border transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-border-hover">
      <div className="relative aspect-[5/4] overflow-hidden bg-ice">
        <img
          src={type.image}
          alt={`${type.id} — ${type.name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-card/95 px-2.5 py-1 font-display text-xs font-semibold tracking-wide text-navy shadow-border">
          {type.id}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-semibold text-navy">{type.name}</h3>
        <p className="mt-1 text-sm italic text-azure">{type.slogan}</p>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{type.summary}</p>
        <Button asChild variant="ghost" className="mt-auto w-full justify-center">
          <Link to="/nhom-tinh-cach/$typeId" params={{ typeId: type.id }}>
            Xem chi tiết
          </Link>
        </Button>
      </div>
    </article>
  );
}
