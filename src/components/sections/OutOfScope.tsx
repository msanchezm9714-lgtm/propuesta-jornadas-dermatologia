import { X } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function OutOfScope({ data }: { data: ClienteData }) {
  const { fueraDeAlcance } = data;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={fueraDeAlcance.etiqueta}
          title={fueraDeAlcance.titulo}
          description={fueraDeAlcance.descripcion}
        />

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {fueraDeAlcance.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted/60" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-ink-muted">{fueraDeAlcance.nota}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
