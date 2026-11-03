import { cn } from "@/lib/utils";

// Each three-letter code uses the six original animated SVGs already on the site.
// Keep the origin-group artwork untouched: only three-letter results use this component.
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
 * RSC -> S (left), R (large center), C (right).
 * The first code letter stays dominant. Works for all 120 permutations.
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
  const letters = normalized.split("");

  if (
    letters.length !== 3 ||
    letters.some((letter) => !isRiasecArtKey(letter)) ||
    new Set(letters).size !== 3
  ) {
    return null;
  }

  const keys = letters as RiasecArtKey[];
  const accessibleLabel = `Minh họa mã RIASEC ${normalized}: ${RIASEC_ART[keys[0]].label} là hình lớn ở giữa; ${RIASEC_ART[keys[1]].label} ở bên trái và ${RIASEC_ART[keys[2]].label} ở bên phải.`;

  // Visual order: second letter, first letter (largest), third letter.
  const displayed = [keys[1], keys[0], keys[2]] as const;

  return (
    <div
      data-riasec-combination={normalized}
      role="img"
      aria-label={accessibleLabel}
      className={cn(
        "grid w-full grid-cols-[1fr_1.5fr_1fr] items-end gap-1.5 bg-gradient-to-br from-ice via-card to-mist p-2 sm:gap-3 sm:p-4",
        className,
      )}
    >
      {displayed.map((key, index) => (
        <div
          key={index}
          data-riasec-position={index === 1 ? 1 : index === 0 ? 2 : 3}
          aria-hidden="true"
          className="relative min-w-0 overflow-hidden rounded-xl"
          style={{ backgroundColor: RIASEC_ART[key].background }}
        >
          <img
            src={`/riasec/animated/${key}.svg`}
            alt=""
            draggable={false}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority && index === 1 ? "high" : "auto"}
            decoding="async"
            className="block aspect-[10/11] w-full object-contain p-1 sm:p-2"
          />
        </div>
      ))}
    </div>
  );
}
