"use client";

import { Check, Info } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { getIcon } from "@/components/ui/IconMap";
import { useProposal } from "@/context/ProposalContext";
import { cn } from "@/lib/utils";

export function CampaignManagement({ data }: { data: ClienteData }) {
  const { gestionCampana } = data;
  const { fase2Activa } = useProposal();

  return (
    <section
      className={cn(
        "py-24 transition-opacity duration-500 sm:py-32",
        !fase2Activa && "opacity-60"
      )}
    >
      <Container>
        <SectionHeading
          eyebrow={gestionCampana.etiqueta}
          title={gestionCampana.titulo}
          description={gestionCampana.descripcion}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gestionCampana.grupos.map((grupo, index) => {
            const Icon = getIcon(grupo.icono);
            return (
              <FadeIn key={grupo.titulo} delay={index * 0.06}>
                <Card className="h-full bg-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft/40">
                    <Icon className="h-5 w-5 text-brand-hover" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink">{grupo.titulo}</h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {grupo.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2} className="mt-10">
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-border bg-card/40 px-7 py-7 sm:px-9 sm:py-8">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-hover" />
              <h3 className="text-sm font-semibold text-ink">
                {gestionCampana.alcanceAtencion.titulo}
              </h3>
            </div>
            <div className="mt-3 flex flex-col gap-2.5">
              {gestionCampana.alcanceAtencion.parrafos.map((parrafo) => (
                <p key={parrafo} className="text-sm leading-relaxed text-ink-muted">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
