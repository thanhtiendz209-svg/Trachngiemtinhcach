import { cn } from "@/lib/utils";

// Keep the six original RIASEC illustrations untouched.
// A three-letter result reuses them in order: first large, next two small.
const RIASEC_ART = {
  R: { label: "Thực tế", background: "#ffddc3" },
  I: { label: "Nghiên cứu", background: "#c5e5ff" },
  A: { label: "Sáng tạo", background: "#efd2f8" },
  S: { label: "Xã hội", background: "#c4f2df" },
  E: { label: "Quản lý", background: "#ffe9af" },
  C: { label: "Nghiệp vụ", background: "#d9e3ef" },
} as const;

type RiasecArtKey = keyof typeof RIASEC_ART;

function isRiasecArtKey(value: string): value is RiasecArtKey {
  return Object.prototype.hasOwnProperty.call(RIASEC_ART, value);
}

/**
 * Illustrates any of the 120 ordered RIASEC codes using just six existing SVGs.
 * Invalid or incomplete codes do not display a misleading illustration.
 */
export function RiasecCodeIllustration({
  code,
  className,
  priority = false,
}: {
  code: string;
  className?: string;
  priority?: boolean;
}) {
  const normalized = code.trim().toUpperCase();
  const [primary, secondary, tertiary] = normalized.split("");

  if (
    normalized.length !== 3 ||
    !primary ||
    !secondary ||
    !tertiary ||
    !isRiasecArtKey(primary) ||
    !isRiasecArtKey(secondary) ||
    !isRiasecArtKey(tertiary) ||
    new Set([primary, secondary, tertiary]).size !== 3
  ) {
    return null;
  }

  const accessibleLabel = `Minh họa mã ${normalized}: ${RIASEC_ART[primary].label} là nhóm chính; ${RIASEC_ART[secondary].label} và ${RIASEC_ART[tertiary].label} là hai nhóm phụ.`;

  return (
    <div
      data-riasec-combination={normalized}
      role="img"
      aria-label={accessibleLabel}
      className={cn(
        "relative isolate aspect-square w-full overflow-hidden bg-gradient-to-br from-ice via-card to-mist",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[16%] top-[4%] h-[66%] rounded-[32%] opacity-60"
        style={{ backgroundColor: RIASEC_ART[primary].background }}
      />
      <img
        src={`/riasec/animated/${primary}.svg`}
        alt=""
        aria-hidden="true"
        draggable={false}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="pointer-events-none absolute left-1/2 top-[2%] h-[70%] w-[72%] -translate-x-1/2 object-contain"
      />
      {([secondary, tertiary] as const).map((letter, index) => (
        <span
          key={letter}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute bottom-[4%] z-10 grid aspect-square w-[32%] place-items-center overflow-hidden rounded-full border-[3px] border-card shadow-lg",
            index === 0 ? "left-[10%]" : "right-[10%]",
          )}
          style={{ backgroundColor: RIASEC_ART[letter].background }}
        >
          <img
            src={`/riasec/animated/${letter}.svg`}
            alt=""
            draggable={false}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-[105%] w-[105%] object-cover object-top"
          />
        </span>
      ))}
    </div>
  );
}
