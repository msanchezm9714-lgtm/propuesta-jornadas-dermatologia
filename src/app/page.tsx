import clienteData from "@/data/cliente.json";
import type { ClienteData } from "@/lib/types";
import { ProposalProvider } from "@/context/ProposalContext";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutProject } from "@/components/sections/AboutProject";
import { Scope } from "@/components/sections/Scope";
import { Investment } from "@/components/sections/Investment";
import { Timeline } from "@/components/sections/Timeline";
import { EstimatedTime } from "@/components/sections/EstimatedTime";
import { Conditions } from "@/components/sections/Conditions";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { FinalCTA } from "@/components/sections/FinalCTA";

const data = clienteData as ClienteData;

export default function Home() {
  return (
    <ProposalProvider data={data}>
      <ScrollProgress />
      <Navbar data={data} />
      <main>
        <Hero data={data} />
        <AboutProject data={data} />
        <Scope data={data} />
        <Investment data={data} />
        <Timeline data={data} />
        <EstimatedTime data={data} />
        <Conditions data={data} />
        <ValueProposition data={data} />
        <FinalCTA data={data} />
      </main>
      <Footer data={data} />
    </ProposalProvider>
  );
}
