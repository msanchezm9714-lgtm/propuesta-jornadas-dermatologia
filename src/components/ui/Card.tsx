import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-brand-border bg-card/60 p-8 shadow-soft backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
