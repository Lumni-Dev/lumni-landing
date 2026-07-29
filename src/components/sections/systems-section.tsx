import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Spotlight } from "@/components/ui/spotlight";
import type { System } from "@/domain/models/system";
import type { LocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface SystemsSectionProps {
  locale: LocaleCode;
  systems: readonly System[];
}

export function SystemsSection({ locale, systems }: SystemsSectionProps) {
  const dict = getDictionary(locale);

  return (
    <Section id="sistemas">
      <SectionHeading
        index="02"
        label={dict.systems.label}
        title={dict.systems.title}
        description={dict.systems.description}
      />

      <div className="mt-24 flex flex-col gap-8">
        {systems.map((system, index) => (
          <Reveal key={system.id} delay={index * 80}>
            <Spotlight className="overflow-hidden rounded-[10px] border border-white/[0.12] bg-white/[0.03] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
              <div className="flex items-center border-b border-white/10 px-6 py-4 font-mono text-xs tracking-[0.25em] uppercase lg:px-10">
                <span className="text-ink-500">
                  lumni_{system.id}
                  <span className="blink text-ink-300">_</span>
                </span>
              </div>

              <div className="p-6 lg:p-10">
                <div className="max-w-2xl">
                  <h3
                    className={
                      system.id === "sirius"
                        ? "font-logo text-4xl font-semibold tracking-[0.18em] text-white uppercase lg:text-5xl"
                        : "text-4xl font-semibold tracking-tight text-white lg:text-5xl"
                    }
                  >
                    {system.name}
                  </h3>
                  <p className="mt-4 font-mono text-sm tracking-wide text-ink-300 uppercase">
                    {system.headline}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-pretty text-ink-400">
                    {system.description}
                  </p>

                  <ul className="mt-8 flex flex-wrap gap-2">
                    {system.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-[10px] border border-white/10 px-3 py-1.5 font-mono text-xs tracking-wider text-ink-300 uppercase"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {system.url ? (
                  <a
                    href={system.url}
                    target={system.target}
                    rel={system.rel}
                    className="group mt-10 inline-flex items-center justify-center gap-3 rounded-[10px] bg-white px-8 py-4 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.03]"
                  >
                    {system.actionLabel}
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="mt-10 inline-flex cursor-default items-center justify-center gap-3 rounded-[10px] border border-white/10 px-8 py-4 text-sm font-semibold text-ink-400"
                  >
                    {system.actionLabel}
                  </span>
                )}
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
