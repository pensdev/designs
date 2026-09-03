import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,border-color,opacity] duration-[var(--duration-swift)] ease-[var(--ease-standard)] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand text-on-brand hover:bg-brand-hover",
        secondary:
          "border border-line-strong bg-transparent text-ink hover:bg-canvas-subtle",
        ghost: "bg-transparent text-navy-700 hover:bg-canvas-subtle dark:text-ink",
        danger: "bg-danger text-canvas-elevated hover:opacity-90 dark:text-canvas-inverse",
        official: "bg-navy text-ink-inverse hover:bg-navy-900 dark:bg-official dark:text-canvas-inverse",
      },
      size: {
        sm: "h-10 min-h-10 rounded-sm px-3 text-sm",
        md: "h-11 min-h-11 rounded-md px-4 text-sm",
        lg: "btn-size-lg rounded-md px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
      ) : null}
      {children}
    </button>
  );
}

export { buttonVariants };
