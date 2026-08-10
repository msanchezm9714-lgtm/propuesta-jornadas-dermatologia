import { Palette } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function IdentityNote({ data }: { data: ClienteData }) {
  const { identidadVisual } = data.sobreProyecto;

  return (
    <div className="py-4">
      <Container>
        <FadeIn>
          <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border border-brand-border bg-brand-soft/10 px-6 py-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white">
              <Palette className="h-4 w-4 text-brand-hover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{identidadVisual.titulo}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {identidadVisual.texto}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
