"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  icon,
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 whitespace-nowrap",
    variant === "primary" &&
      "bg-brand text-white shadow-glow hover:bg-brand-hover",
    variant === "secondary" &&
      "border border-brand-border bg-white text-ink hover:border-brand hover:bg-brand-soft/20",
    variant === "ghost" && "text-ink-muted hover:text-ink",
    className
  );

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...props} className="inline-block bg-transparent p-0">
      {content}
    </button>
  );
}
