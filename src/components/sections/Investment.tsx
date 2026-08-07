"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import type { ClienteData, Fase } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Toggle } from "@/components/ui/Toggle";
import { useProposal } from "@/context/ProposalContext";
import { useCountUp } from "@/hooks/useCountUp";
import { cn, formatCurrency } from "@/lib/utils";

function PhaseCard({
  fase,
  moneda,
  highlighted,
  toggleable,
  active,
  onToggle,
  delay,
}: {
  fase: Fase;
  moneda: string;
  highlighted?: boolean;
  toggleable?: boolean;
  active?: boolean;
  onToggle?: () => void;
  delay: number;
}) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div
        className={cn(
          "relative flex h-full flex-col rounded-4xl border p-8 sm:p-10 transition-all duration-300",
          highlighted
            ? "border-brand bg-white shadow-glow lg:scale-[1.03]"
            : "border-brand-border bg-card/50",
          toggleable && !active && "opacity-70"
        )}
      >
        {highlighted && (
          <div className="absolute -top-3 left-8 flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-soft">
            <Sparkles className="h-3 w-3" />
            {fase.badge}
          </div>
        )}
        {!highlighted && (
          <Badge variant="outline" className="absolute -top-3 left-8">
            {fase.badge}
          </Badge>
        )}

        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-hover">
              {fase.numero}
            </p>
            <h3 className="mt-1.5 text-xl font-semibold text-ink sm:text-2xl">
              {fase.nombre}
            </h3>
          </div>
          {toggleable && onToggle && (
            <Toggle checked={!!active} onChange={onToggle} label={`Activar ${fase.nombre}`} />
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{fase.descripcion}</p>

        <p className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {formatCurrency(fase.precio, moneda)}
        </p>

        <ul className="mt-7 flex flex-1 flex-col gap-3">
          {fase.incluye.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
              <Check
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0",
                  highlighted ? "text-brand" : "text-brand-hover"
                )}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

function InvestmentSummary({ notaResumen }: { notaResumen: string }) {
  const { total, moneda, fase2Activa } = useProposal();
  const displayTotal = useCountUp(total);

  return (
    <FadeIn delay={0.2}>
      <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 rounded-4xl border border-brand-border bg-white/80 px-8 py-8 text-center shadow-soft-lg backdrop-blur-md sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Total de la inversión
          </p>
          <motion.p
            key={fase2Activa ? "with-phase2" : "phase1-only"}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-4xl font-semibold tracking-tight text-ink"
          >
            {formatCurrency(displayTotal, moneda)}
          </motion.p>
        </div>
        <p className="max-w-xs text-xs leading-relaxed text-ink-muted">{notaResumen}</p>
      </div>
    </FadeIn>
  );
}

export function Investment({ data }: { data: ClienteData }) {
  const { fases } = data;
  const { fase2Activa, toggleFase2 } = useProposal();

  return (
    <section id="propuesta" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={fases.etiqueta}
          title={fases.titulo}
          description={fases.descripcion}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <PhaseCard
            fase={fases.fase1}
            moneda={fases.moneda}
            highlighted
            delay={0}
          />
          <PhaseCard
            fase={fases.fase2}
            moneda={fases.moneda}
            toggleable
            active={fase2Activa}
            onToggle={toggleFase2}
            delay={0.1}
          />
        </div>

        <InvestmentSummary notaResumen={fases.notaResumen} />
      </Container>
    </section>
  );
}
