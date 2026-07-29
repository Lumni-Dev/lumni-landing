import { DotMatrix } from "@/components/canvas/dot-matrix";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SystemsSection } from "@/components/sections/systems-section";
import { CompanyRepository } from "@/data/company.repository";
import { ServiceRepository } from "@/data/service.repository";
import { SystemRepository } from "@/data/system.repository";
import { toLocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = toLocaleCode((await params).locale);
  const dict = getDictionary(locale);
  const company = CompanyRepository.find(locale);
  const channels = CompanyRepository.findContactChannels(locale);
  const services = ServiceRepository.findAll(locale);
  const systems = SystemRepository.findAll(locale);

  return (
    <>
      <SiteHeader
        locale={locale}
        companyName={company.name}
        navigation={company.navigation}
        labels={dict.header}
      />
      {/* Fixa no viewport, atrás de tudo: o fundo opaco do hero a esconde; o resto da página, transparente, a revela.
          h-full/w-full são obrigatórios: canvas é replaced element e inset-0 sozinho não o estica. */}
      <DotMatrix className="fixed inset-0 z-0 h-full w-full" />
      <main className="relative z-10 flex-1">
        <HeroSection locale={locale} company={company} />
        <ServicesSection locale={locale} services={services} />
        <SystemsSection locale={locale} systems={systems} />
        <ContactSection locale={locale} channels={channels} />
      </main>
      <SiteFooter locale={locale} company={company} services={services} channels={channels} />
    </>
  );
}
