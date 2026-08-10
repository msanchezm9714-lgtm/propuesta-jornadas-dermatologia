"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { ClienteData } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA({ data }: { data: ClienteData }) {
  const { ctaFinal, autor } = data;

  const acceptHref = `mailto:${autor.email}?subject=${encodeURIComponent(
    `Acepto la propuesta — ${data.cliente.nombre}`
  )}`;
  const adjustHref = `mailto:${autor.email}?subject=${encodeURIComponent(
    `Ajustes a la propuesta — ${data.cliente.nombre}`
  )}`;

  return (
    <section id="contacto" className="px-6 py-24 sm:py-32">
      <Container>
        <FadeIn className="relative overflow-hidden rounded-4xl bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl"
            />
            <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-brand-soft/20 blur-3xl" />
          </div>

          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {ctaFinal.titulo}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/70">
            {ctaFinal.descripcion}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Image
              src={autor.fotoUrl}
              alt={autor.nombre}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover ring-2 ring-white/20"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{autor.nombre}</p>
              <p className="text-xs text-white/60">{autor.rol}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={acceptHref} icon={<ArrowRight className="h-4 w-4" />}>
              {ctaFinal.ctaPrimario}
            </Button>
            <Button
              href={adjustHref}
              variant="secondary"
              icon={<MessageCircle className="h-4 w-4" />}
              className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10"
            >
              {ctaFinal.ctaSecundario}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
