import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProposalValue({ data }: { data: ClienteData }) {
  const { valorPropuesta } = data;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <FadeIn className="flex flex-col gap-4">
            <Badge>{valorPropuesta.etiqueta}</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {valorPropuesta.titulo}
            </h2>
            <p className="text-base leading-relaxed text-ink-muted">
              {valorPropuesta.mensaje}
            </p>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-3 lg:gap-6">
            {valorPropuesta.conceptos.map((concepto, index) => (
              <FadeIn key={concepto.numero} delay={index * 0.08}>
                <p className="text-sm font-semibold text-brand-hover">{concepto.numero}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{concepto.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {concepto.descripcion}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
