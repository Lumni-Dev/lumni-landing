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

      <div className="mt-24 flex flex-col gap-6">
        {services.map((service, index) => (
          <Reveal
            key={service.id}
            as="article"
            id={service.id}
            delay={index * 80}
            className="hud-frame group grid scroll-mt-28 gap-8 rounded-[10px] border border-ink-500 bg-ink-950 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_12px_30px_-14px_rgba(0,0,0,0.15)] transition-colors duration-500 hover:border-ink-400 hover:bg-ink-900/60 lg:grid-cols-[6rem_1fr] lg:gap-8 lg:p-10"
          >
            <div className="flex items-start">
              <span className="font-mono text-5xl leading-none font-light text-ink-700 transition-colors duration-500 group-hover:text-ink-50 lg:text-6xl">
                {service.positionLabel(index)}
              </span>
            </div>

            <div className="max-w-2xl">
              <h3 className="text-3xl font-semibold tracking-tight text-balance text-ink-50 lg:text-4xl">
                {service.title}
              </h3>
              <p className="mt-4 font-mono text-sm tracking-wide text-ink-300 uppercase">
                {service.headline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-pretty text-ink-400">
                {service.description}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="rounded-[10px] border border-ink-600 px-3 py-1.5 font-mono text-xs tracking-wider text-ink-300 uppercase transition-colors duration-500 group-hover:border-ink-400 group-hover:text-ink-100"
                  >
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
