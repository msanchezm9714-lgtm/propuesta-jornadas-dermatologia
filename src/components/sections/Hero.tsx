"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero({ data }: { data: ClienteData }) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-28 pt-40 sm:pb-36 sm:pt-48"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-soft/50 blur-3xl"
        />
        <div className="absolute -right-32 top-10 h-96 w-96 animate-blob-slow rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-brand-soft/40 blur-3xl" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline">{data.hero.etiqueta}</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl"
        >
          {data.hero.titulo}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-xl font-medium text-brand-hover sm:text-2xl"
        >
          {data.hero.subtitulo}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {data.hero.descripcion}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {data.hero.stats.map((stat, index) => (
            <div key={stat.etiqueta} className="flex items-center gap-x-8">
              {index > 0 && (
                <span className="hidden h-8 w-px bg-brand-border sm:block" />
              )}
              <div className="flex flex-col items-center">
                <span
                  className={
                    stat.valor.length > 6
                      ? "text-sm font-semibold text-ink"
                      : "text-2xl font-semibold text-ink"
                  }
                >
                  {stat.valor}
                </span>
                <span className="mt-0.5 text-xs uppercase tracking-wide text-ink-muted">
                  {stat.etiqueta}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="#propuesta" icon={<ArrowRight className="h-4 w-4" />}>
            {data.hero.ctaPrimario}
          </Button>
          <Button href="#contacto" variant="secondary">
            {data.hero.ctaSecundario}
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 text-xs font-medium uppercase tracking-wide text-ink-muted"
        >
          Evento: {data.cliente.fechaEvento}
        </motion.p>
      </Container>
    </section>
  );
}
