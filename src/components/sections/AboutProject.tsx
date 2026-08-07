import { Check } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { getIcon } from "@/components/ui/IconMap";

export function AboutProject({ data }: { data: ClienteData }) {
  const { sobreProyecto } = data;

  return (
    <section id="proyecto" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="flex flex-col gap-6">
            <Badge>{sobreProyecto.etiqueta}</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {sobreProyecto.titulo}
            </h2>
            <p className="text-base leading-relaxed text-ink-muted">
              {sobreProyecto.descripcion}
            </p>
            <p className="text-base leading-relaxed text-ink-muted">
              {sobreProyecto.objetivo}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-6">
            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                {sobreProyecto.publicoObjetivoTitulo}
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {sobreProyecto.publicoObjetivo.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft/50">
                      <Check className="h-3 w-3 text-brand-hover" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                {sobreProyecto.canalesTitulo}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {sobreProyecto.canales.map((canal) => {
                  const Icon = getIcon(canal.icono);
                  return (
                    <span
                      key={canal.nombre}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2 text-sm font-medium text-ink"
                    >
                      <Icon className="h-4 w-4 text-brand-hover" />
                      {canal.nombre}
                    </span>
                  );
                })}
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
