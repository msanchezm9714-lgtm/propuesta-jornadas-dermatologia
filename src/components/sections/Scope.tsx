import { Check } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { getIcon } from "@/components/ui/IconMap";

export function Scope({ data }: { data: ClienteData }) {
  const { alcance } = data;

  return (
    <section id="alcance" className="bg-card/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={alcance.etiqueta}
          title={alcance.titulo}
          description={alcance.descripcion}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {alcance.categorias.map((categoria, index) => {
            const Icon = getIcon(categoria.icono);
            return (
              <FadeIn key={categoria.titulo} delay={index * 0.06}>
                <Card className="h-full bg-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft/40">
                    <Icon className="h-5 w-5 text-brand-hover" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {categoria.titulo}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {categoria.items.map((item) => (
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
      </Container>
    </section>
  );
}
