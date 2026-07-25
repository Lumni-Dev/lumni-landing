import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Service } from "@/domain/models/service";
import type { LocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface ServicesSectionProps {
  locale: LocaleCode;
  services: readonly Service[];
}

export function ServicesSection({ locale, services }: ServicesSectionProps) {
  const dict = getDictionary(locale);

  return (
    <Section id="servicos">
      <SectionHeading
        index="01"
        label={dict.services.label}
        title={dict.services.title}
        description={dict.services.description}
      />

      <div className="mt-24 flex flex-col gap-6">
        {services.map((service, index) => (
          <Reveal
            key={service.id}
            as="article"
            id={service.id}
            delay={index * 80}
            className="hud-frame group grid scroll-mt-28 gap-8 rounded-[10px] border border-white/[0.12] bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.05] lg:grid-cols-[6rem_1fr] lg:gap-8 lg:p-10"
          >
            <div className="flex items-start">
              <span className="font-mono text-5xl leading-none font-light text-ink-700 transition-colors duration-500 group-hover:text-white lg:text-6xl">
                {service.positionLabel(index)}
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

              <ul className="mt-8 flex flex-wrap gap-2">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="rounded-[10px] border border-white/10 px-3 py-1.5 font-mono text-xs tracking-wider text-ink-300 uppercase transition-colors duration-500 group-hover:border-white/25 group-hover:text-ink-100"
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
