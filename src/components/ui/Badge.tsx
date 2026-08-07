import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "soft",
  className,
}: {
  children: ReactNode;
  variant?: "soft" | "solid" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide",
        variant === "soft" && "bg-brand-soft/40 text-brand-hover",
        variant === "solid" && "bg-brand text-white",
        variant === "outline" && "border border-brand-border bg-white text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
