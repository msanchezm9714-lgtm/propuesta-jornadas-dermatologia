import { Check, ClipboardList } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export function GettingStarted({ data }: { data: ClienteData }) {
  const { materialesIniciales } = data;

  return (
    <section className="bg-card/40 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <FadeIn className="flex flex-col items-center gap-4 text-center">
            <Badge>{materialesIniciales.etiqueta}</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {materialesIniciales.titulo}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted">
              {materialesIniciales.descripcion}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10">
            <Card className="bg-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft/40">
                <ClipboardList className="h-5 w-5 text-brand-hover" />
              </div>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {materialesIniciales.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-brand-border pt-5 text-xs leading-relaxed text-ink-muted">
                {materialesIniciales.nota}
              </p>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
