import { DotMatrix } from "@/components/canvas/dot-matrix";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
// TEMP: seção de Sistemas/Softwares oculta por enquanto.
// import { SystemsSection } from "@/components/sections/systems-section";
import { CompanyRepository } from "@/data/company.repository";
import { ServiceRepository } from "@/data/service.repository";
// import { SystemRepository } from "@/data/system.repository";

export default function HomePage() {
  const company = CompanyRepository.find();
  const channels = CompanyRepository.findContactChannels();
  const services = ServiceRepository.findAll();

  return (
    <>
      <SiteHeader companyName={company.name} navigation={company.navigation} />
      {/* Fixa no viewport, atrás de tudo: o fundo opaco do hero a esconde; o resto da página, transparente, a revela.
          h-full/w-full são obrigatórios: canvas é replaced element e inset-0 sozinho não o estica. */}
      <DotMatrix className="fixed inset-0 z-0 h-full w-full" />
      <main className="relative z-10 flex-1">
        <HeroSection company={company} />
        <ServicesSection services={services} />
        {/* TEMP: seção de Sistemas/Softwares oculta por enquanto. */}
        {/* <SystemsSection systems={SystemRepository.findAll()} /> */}
        <ContactSection channels={channels} />
      </main>
      <SiteFooter company={company} services={services} channels={channels} />
    </>
  );
}
