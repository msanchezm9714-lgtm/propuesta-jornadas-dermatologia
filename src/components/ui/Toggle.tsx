"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label ?? "Activar"}
      onClick={onChange}
      className={cn(
        "relative h-8 w-14 shrink-0 rounded-full transition-colors duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        checked ? "bg-brand" : "bg-gray-200"
      )}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="absolute top-1 h-6 w-6 rounded-full bg-white shadow-soft"
        style={{ left: checked ? "calc(100% - 1.75rem)" : "0.25rem" }}
      />
    </button>
  );
}
