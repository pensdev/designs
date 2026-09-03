import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-lg bg-canvas-elevated p-5 shadow-(--shadow-border)", {
  variants: {
    variant: {
      editorial: "",
      official: "border border-official/20",
      data: "p-4",
      action: "p-6",
    },
  },
  defaultVariants: { variant: "editorial" },
});

export function Card({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>) {
  return <div className={cn(cardVariants({ variant }), className)} {...props} />;
}
