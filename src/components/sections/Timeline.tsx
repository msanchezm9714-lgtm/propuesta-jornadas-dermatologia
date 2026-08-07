"use client";

import { motion } from "framer-motion";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { useProposal } from "@/context/ProposalContext";
import { cn } from "@/lib/utils";

export function Timeline({ data }: { data: ClienteData }) {
  const { cronograma } = data;
  const { fase2Activa } = useProposal();

  return (
    <section id="cronograma" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={cronograma.etiqueta} title={cronograma.titulo} />

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-brand-border sm:left-6" />

          <ol className="flex flex-col gap-8">
            {cronograma.pasos.map((paso, index) => {
              const isDimmed = paso.condicional && !fase2Activa;
              return (
                <FadeIn key={paso.titulo} delay={index * 0.05}>
                  <li
                    className={cn(
                      "relative flex items-start gap-5 pl-0 transition-opacity duration-300",
                      isDimmed && "opacity-40"
                    )}
                  >
                    <span
                      className={cn(
                        "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold sm:h-12 sm:w-12",
                        isDimmed
                          ? "border-brand-border bg-white text-ink-muted"
                          : "border-brand bg-brand text-white shadow-glow"
                      )}
                    >
                      {index + 1}
                    </span>
                    <div className="pt-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-ink">
                          {paso.titulo}
                        </h3>
                        {paso.condicional && (
                          <motion.span
                            animate={{ opacity: fase2Activa ? 1 : 0.6 }}
                            className="rounded-full bg-brand-soft/40 px-2.5 py-0.5 text-[11px] font-semibold text-brand-hover"
                          >
                            Si se contrata Fase 2
                          </motion.span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {paso.descripcion}
                      </p>
                    </div>
                  </li>
                </FadeIn>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
