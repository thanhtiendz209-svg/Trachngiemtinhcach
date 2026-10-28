import { useState } from "react";
import { cn } from "@/lib/utils";

const MOTIF: Record<string, { title: string; paths: string }> = {
  INTJ: { title: "Compass", paths: "cube" },
  INTP: { title: "Orbs", paths: "orbs" },
  ENTJ: { title: "Steps", paths: "steps" },
  ENTP: { title: "Spark", paths: "spark" },
  INFJ: { title: "Lantern", paths: "lantern" },
  INFP: { title: "Bloom", paths: "bloom" },
  ENFJ: { title: "Guide", paths: "guide" },
  ENFP: { title: "Trail", paths: "trail" },
  ISTJ: { title: "Stack", paths: "stack" },
  ISFJ: { title: "Care", paths: "care" },
  ESTJ: { title: "Board", paths: "board" },
  ESFJ: { title: "Table", paths: "table" },
  ISTP: { title: "Gear", paths: "gear" },
  ISFP: { title: "Canvas", paths: "canvas" },
  ESTP: { title: "Ramp", paths: "ramp" },
  ESFP: { title: "Stage", paths: "stage" },
};

function Accessory({ kind }: { kind: string }) {
  switch (kind) {
    case "cube":
      return (
        <g>
          <rect x="268" y="214" width="44" height="44" rx="8" fill="#2AB8C9" opacity="0.9" />
          <rect x="292" y="198" width="36" height="36" rx="8" fill="#0B3A62" />
        </g>
      );
    case "orbs":
      return (
        <g>
          <circle cx="86" cy="150" r="14" fill="#7EDCE6" />
          <circle cx="318" cy="128" r="10" fill="#0B3A62" opacity="0.5" />
          <circle cx="300" cy="230" r="18" fill="#2AB8C9" opacity="0.35" />
        </g>
      );
    case "steps":
      return (
        <g>
          <rect x="70" y="250" width="40" height="14" rx="4" fill="#2AB8C9" />
          <rect x="86" y="232" width="40" height="14" rx="4" fill="#1A6DB5" />
          <rect x="102" y="214" width="40" height="14" rx="4" fill="#0B3A62" />
        </g>
      );
    case "spark":
      return (
        <g stroke="#2AB8C9" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M300 120 l18 -28 M318 120 l28 -8 M300 120 l22 22" />
          <circle cx="300" cy="120" r="6" fill="#7EDCE6" stroke="none" />
        </g>
      );
    case "lantern":
      return (
        <g>
          <rect x="86" y="200" width="28" height="36" rx="6" fill="#E8F3FB" stroke="#0B3A62" strokeWidth="2" />
          <rect x="92" y="208" width="16" height="18" rx="3" fill="#7EDCE6" />
          <path d="M100 200 v-10" stroke="#0B3A62" strokeWidth="2" />
        </g>
      );
    case "bloom":
      return (
        <g>
          <circle cx="78" cy="250" r="16" fill="#7EDCE6" />
          <circle cx="96" cy="238" r="12" fill="#2AB8C9" />
          <circle cx="88" cy="262" r="10" fill="#0B3A62" opacity="0.35" />
        </g>
      );
    case "guide":
      return (
        <g>
          <circle cx="86" cy="250" r="16" fill="#F3D4BC" />
          <rect x="74" y="266" width="24" height="28" rx="10" fill="#2AB8C9" />
          <circle cx="318" cy="250" r="14" fill="#F3D4BC" />
          <rect x="308" y="264" width="20" height="24" rx="9" fill="#0B3A62" />
        </g>
      );
    case "trail":
      return (
        <g fill="#2AB8C9">
          <circle cx="70" cy="180" r="5" />
          <circle cx="92" cy="160" r="7" />
          <circle cx="118" cy="148" r="4" />
          <circle cx="310" cy="170" r="6" />
        </g>
      );
    case "stack":
      return (
        <g>
          <rect x="64" y="236" width="72" height="14" rx="4" fill="#0B3A62" />
          <rect x="70" y="220" width="60" height="14" rx="4" fill="#1A6DB5" />
          <rect x="76" y="204" width="48" height="14" rx="4" fill="#2AB8C9" />
        </g>
      );
    case "care":
      return (
        <g>
          <rect x="68" y="228" width="52" height="28" rx="8" fill="#0B3A62" />
          <ellipse cx="94" cy="222" rx="18" ry="8" fill="#2AB8C9" />
          <circle cx="312" cy="236" r="14" fill="#E8F3FB" stroke="#0B3A62" strokeWidth="2" />
        </g>
      );
    case "board":
      return (
        <g>
          <rect x="292" y="196" width="40" height="52" rx="6" fill="#E8F3FB" stroke="#0B3A62" strokeWidth="2" />
          <path d="M300 210 h24 M300 222 h18 M300 234 h22" stroke="#2AB8C9" strokeWidth="2" />
        </g>
      );
    case "table":
      return (
        <g>
          <ellipse cx="200" cy="312" rx="90" ry="18" fill="#0B3A62" opacity="0.12" />
          <rect x="130" y="268" width="140" height="12" rx="6" fill="#1A6DB5" />
          <circle cx="156" cy="262" r="8" fill="#7EDCE6" />
          <circle cx="244" cy="262" r="8" fill="#7EDCE6" />
        </g>
      );
    case "gear":
      return (
        <g>
          <circle cx="86" cy="230" r="22" fill="none" stroke="#0B3A62" strokeWidth="6" />
          <circle cx="86" cy="230" r="8" fill="#2AB8C9" />
        </g>
      );
    case "canvas":
      return (
        <g>
          <rect x="286" y="188" width="52" height="64" rx="6" fill="#E8F3FB" stroke="#0B3A62" strokeWidth="2" />
          <path d="M296 232 q16 -28 36 -8" stroke="#2AB8C9" strokeWidth="3" fill="none" />
        </g>
      );
    case "ramp":
      return (
        <g>
          <path d="M64 280 L160 230 L160 280 Z" fill="#2AB8C9" opacity="0.7" />
          <rect x="64" y="278" width="96" height="8" rx="4" fill="#0B3A62" />
        </g>
      );
    default:
      return (
        <g>
          <ellipse cx="200" cy="318" rx="70" ry="16" fill="#2AB8C9" opacity="0.35" />
          <rect x="150" y="300" width="100" height="10" rx="5" fill="#0B3A62" />
        </g>
      );
  }
}

export function TypePortrait({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const motif = MOTIF[id] ?? MOTIF.INTJ;
  const uid = id.replace(/[^A-Z]/g, "");
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={`Minh họa nhóm ${id}`}
    >
      <defs>
        <linearGradient id={`g-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8F3FB" />
          <stop offset="55%" stopColor="#F4EDE4" />
          <stop offset="100%" stopColor="#D9EAF6" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" rx="28" fill={`url(#g-${uid})`} />
      <circle cx="320" cy="72" r="48" fill="#2AB8C9" opacity="0.18" />
      <circle cx="64" cy="84" r="28" fill="#0B3A62" opacity="0.08" />
      <ellipse cx="200" cy="318" rx="88" ry="22" fill="#0B3A62" opacity="0.08" />
      <rect x="148" y="214" width="104" height="118" rx="40" fill="#0B3A62" />
      <rect x="168" y="230" width="64" height="36" rx="12" fill="#1A6DB5" opacity="0.5" />
      <circle cx="200" cy="168" r="46" fill="#F1C7A8" />
      <path
        d="M160 168 c8 -44 72 -48 80 0 v18 c-10 36 -70 36 -80 0z"
        fill="#1A334C"
      />
      <circle cx="184" cy="170" r="4.2" fill="#0B3A62" />
      <circle cx="216" cy="170" r="4.2" fill="#0B3A62" />
      <path d="M188 188 c8 8 16 8 24 0" stroke="#0B3A62" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <Accessory kind={motif?.paths ?? "stage"} />
      <rect x="24" y="24" width="352" height="352" rx="22" fill="none" stroke="#0B3A62" strokeOpacity="0.08" strokeWidth="2" />
    </svg>
  );
}

export function TypeImage({
  id,
  src,
  alt,
  className,
  priority = false,
}: {
  id: string;
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [ok, setOk] = useState(Boolean(src));
  if (src && ok) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setOk(false)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10",
          className,
        )}
      />
    );
  }
  return <TypePortrait id={id} className={className} />;
}
