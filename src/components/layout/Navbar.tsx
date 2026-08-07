"use client";

import { Printer } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";

export function Navbar({ data }: { data: ClienteData }) {
  return (
    <header className="no-print fixed inset-x-0 top-0 z-40 border-b border-brand-border bg-white/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#inicio" className="text-sm font-semibold tracking-tight text-ink">
          {data.cliente.nombre}
        </a>
        <div className="flex items-center gap-5">
          <span className="hidden text-xs font-medium text-ink-muted sm:inline">
            {data.cliente.fecha}
          </span>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full border border-brand-border px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand hover:bg-brand-soft/20"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Exportar PDF</span>
          </button>
        </div>
      </Container>
    </header>
  );
}
