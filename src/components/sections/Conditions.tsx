import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { getIcon } from "@/components/ui/IconMap";

export function Conditions({ data }: { data: ClienteData }) {
  const { condiciones } = data;

  return (
    <section id="condiciones" className="bg-card/40 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={condiciones.etiqueta} title={condiciones.titulo} />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {condiciones.tarjetas.map((tarjeta, index) => {
            const Icon = getIcon(tarjeta.icono);
            return (
              <FadeIn key={tarjeta.titulo} delay={index * 0.08}>
                <Card className="h-full bg-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft/40">
                    <Icon className="h-5 w-5 text-brand-hover" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink">
                    {tarjeta.titulo}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {tarjeta.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-ink-muted"
                      >
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
