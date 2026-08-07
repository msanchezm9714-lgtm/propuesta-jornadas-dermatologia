import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";

export function Footer({ data }: { data: ClienteData }) {
  return (
    <footer className="border-t border-brand-border bg-white py-10">
      <Container className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium text-ink">
          {data.autor.nombre} · {data.autor.rol}
        </p>
        <p className="text-xs text-ink-muted">
          {data.cliente.nombre} — {data.cliente.fecha}
        </p>
        <p className="mt-2 max-w-md text-xs text-ink-muted">{data.cliente.vigencia}</p>
      </Container>
    </footer>
  );
}
