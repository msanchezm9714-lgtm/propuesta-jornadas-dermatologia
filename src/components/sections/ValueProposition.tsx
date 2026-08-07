import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { getIcon } from "@/components/ui/IconMap";

export function ValueProposition({ data }: { data: ClienteData }) {
  const { valorAgregado } = data;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={valorAgregado.etiqueta} title={valorAgregado.titulo} />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {valorAgregado.items.map((item, index) => {
            const Icon = getIcon(item.icono);
            return (
              <FadeIn key={item.titulo} delay={index * 0.06} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft/40">
                  <Icon className="h-4 w-4 text-brand-hover" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {item.descripcion}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
