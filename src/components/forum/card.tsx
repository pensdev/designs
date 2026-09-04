import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * The product register: a broadside, not a floating card. Hairline box, no
 * shadow, and a 2px rule across the top that carries the brand. The rule reads
 * from --card-rule rather than the brand directly, because the brand inverts to
 * near-paper in dark mode and would burn a white bar across every card.
 * The record register (see Record) stays unruled and unbranded.
 */
const cardVariants = cva(
  "rounded-record border border-line border-t-2 border-t-card-rule bg-canvas-elevated p-5",
  {
    variants: {
      variant: {
        editorial: "",
        official: "border-t-official",
        data: "p-4",
        action: "p-6",
      },
    },
    defaultVariants: { variant: "editorial" },
  },
);

export function Card({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>) {
  return <div className={cn(cardVariants({ variant }), className)} {...props} />;
}
