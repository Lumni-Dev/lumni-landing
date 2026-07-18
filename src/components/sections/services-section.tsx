import { ServiceIcon } from "@/components/icons/service-icon";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Service } from "@/domain/models/service";

interface ServicesSectionProps {
  services: readonly Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <Section id="servicos">
      <SectionHeading
        index="01"
        label="Serviços"
        title="Cinco frentes, um só compromisso: software que sustenta o negócio."
        description="Atuamos do diagnóstico à operação. Você escolhe o ponto de entrada, nós assumimos a responsabilidade técnica de ponta a ponta."
      />

      <div className="mt-24">
        {services.map((service, index) => (
          <Reveal
            key={service.id}
            as="article"
            id={service.id}
            delay={index * 80}
            className="hud-frame group grid scroll-mt-28 gap-8 border-t border-ink-800 py-12 transition-colors duration-500 hover:bg-ink-900/40 lg:grid-cols-[8rem_1fr_20rem] lg:gap-12 lg:py-16"
          >
            <div className="flex items-start justify-between lg:flex-col lg:justify-start lg:gap-8">
              <span className="font-mono text-5xl leading-none font-light text-ink-700 transition-colors duration-500 group-hover:text-white lg:text-6xl">
                {service.positionLabel(index)}
              </span>
              <span className="flex h-12 w-12 items-center justify-center border border-ink-700 text-ink-300 transition-all duration-500 group-hover:border-ink-400 group-hover:text-white">
                <ServiceIcon name={service.icon} className="h-5 w-5" />
              </span>
            </div>

            <div className="max-w-2xl">
              <h3 className="text-3xl font-semibold tracking-tight text-balance text-white lg:text-4xl">
                {service.title}
              </h3>
              <p className="mt-4 font-mono text-sm tracking-wide text-ink-300 uppercase">
                {service.headline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-pretty text-ink-400">
                {service.description}
              </p>
            </div>

            <ul className="flex flex-wrap content-start gap-2 lg:justify-end">
              {service.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="border border-ink-700 px-3 py-1.5 font-mono text-xs tracking-wider text-ink-300 uppercase transition-colors duration-500 group-hover:border-ink-500 group-hover:text-ink-100"
                >
                  {deliverable}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <div aria-hidden="true" className="border-t border-ink-800" />
      </div>
    </Section>
  );
}
