import { Hourglass } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export function EstimatedTime({ data }: { data: ClienteData }) {
  const { tiempos } = data;

  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <FadeIn className="mx-auto max-w-3xl">
          <Card className="bg-gradient-to-br from-white to-brand-soft/20">
            <div className="flex flex-col items-start gap-5 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                <Hourglass className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{tiempos.titulo}</h3>
                <div className="mt-3 flex flex-col gap-3">
                  {tiempos.parrafos.map((parrafo) => (
                    <p key={parrafo} className="text-sm leading-relaxed text-ink-muted">
                      {parrafo}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
