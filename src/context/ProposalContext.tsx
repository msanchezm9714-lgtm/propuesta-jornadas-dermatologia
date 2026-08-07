"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { ClienteData } from "@/lib/types";

interface ProposalContextValue {
  fase2Activa: boolean;
  toggleFase2: () => void;
  precioFase1: number;
  precioFase2: number;
  total: number;
  moneda: string;
}

const ProposalContext = createContext<ProposalContextValue | null>(null);

export function ProposalProvider({
  data,
  children,
}: {
  data: ClienteData;
  children: ReactNode;
}) {
  const [fase2Activa, setFase2Activa] = useState(false);

  const value = useMemo<ProposalContextValue>(() => {
    const precioFase1 = data.fases.fase1.precio;
    const precioFase2 = data.fases.fase2.precio;
    return {
      fase2Activa,
      toggleFase2: () => setFase2Activa((prev) => !prev),
      precioFase1,
      precioFase2,
      total: fase2Activa ? precioFase1 + precioFase2 : precioFase1,
      moneda: data.fases.moneda,
    };
  }, [fase2Activa, data]);

  return <ProposalContext.Provider value={value}>{children}</ProposalContext.Provider>;
}

export function useProposal() {
  const ctx = useContext(ProposalContext);
  if (!ctx) throw new Error("useProposal debe usarse dentro de ProposalProvider");
  return ctx;
}
