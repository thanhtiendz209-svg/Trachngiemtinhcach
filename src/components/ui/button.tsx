import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium select-none rounded-[var(--radius-md)] transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-paper hover:bg-navy-deep cta-glow px-5 min-h-11",
        secondary:
          "bg-card text-navy shadow-border hover:shadow-border-hover px-5 min-h-11",
        ghost: "bg-transparent text-navy hover:bg-ice px-4 min-h-11",
        cyan: "bg-cyan text-navy-deep hover:bg-cyan-soft px-5 min-h-11 cta-glow",
        link: "bg-transparent text-azure underline-offset-4 hover:underline px-0 min-h-11",
      },
      size: {
        sm: "text-sm min-h-10 px-3.5",
        md: "text-[0.95rem]",
        lg: "text-base min-h-12 px-6 rounded-[var(--radius-lg)]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
