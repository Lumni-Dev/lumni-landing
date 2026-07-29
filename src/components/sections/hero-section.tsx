import { CircuitField } from "@/components/canvas/circuit-field";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { WordReveal } from "@/components/ui/word-reveal";
import type { Company } from "@/domain/models/company";
import type { LocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface HeroSectionProps {
  locale: LocaleCode;
  company: Company;
}

export function HeroSection({ locale, company }: HeroSectionProps) {
  const dict = getDictionary(locale);

  // Trilha larga o bastante para cobrir telas ultrawide sem vão visível.
  const marqueeTrack = [
    ...dict.hero.capabilities,
    ...dict.hero.capabilities,
    ...dict.hero.capabilities,
  ];

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col overflow-hidden bg-linear-to-b from-ink-900 from-0% via-ink-950 via-25% to-ink-950 pt-20"
    >
      <div aria-hidden="true" className="grid-backdrop pointer-events-none absolute inset-0" />
      {/* A máscara mantém as partículas na faixa clara do topo e as dissolve antes do rodapé. */}
      <CircuitField className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,#000_0%,#000_30%,transparent_75%)]" />
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-ink-600/10 blur-[150px]"
      />

      <Container className="hero-parallax relative flex flex-1 items-center py-24">
        <div>
          <WordReveal
            as="h1"
            text={company.tagline}
            className="max-w-5xl text-4xl leading-[0.98] font-medium tracking-[-0.03em] text-balance text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          />

          <Reveal delay={100}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-pretty text-ink-300 lg:text-lg">
              {company.description}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Magnetic>
                <a
                  href="#contato"
                  className="group sheen inline-flex items-center justify-center gap-3 rounded-[10px] bg-white px-8 py-4 text-sm font-semibold text-ink-950"
                >
                  {dict.hero.ctaStart}
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-[10px] border border-ink-700 px-8 py-4 text-sm font-semibold text-ink-100 transition-colors duration-300 hover:border-ink-400 hover:text-white"
                >
                  {dict.hero.ctaServices}
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </Container>

      <Container className="relative">
        <div
          aria-hidden="true"
          className="group flex overflow-hidden border-t border-ink-800 py-5 select-none"
        >
          {/* O contêiner desliza -50%: como ele contém duas trilhas idênticas, o laço fecha sem salto. */}
          <div className="animate-marquee flex shrink-0 group-hover:[animation-play-state:paused]">
            {[0, 1].map((track) => (
              <div key={track} className="flex shrink-0 items-center gap-12 pr-12">
                {marqueeTrack.map((item, index) => (
                  <span
                    key={`${track}-${index}`}
                    className="flex items-center gap-12 text-xs font-medium tracking-[0.2em] whitespace-nowrap text-ink-500 uppercase"
                  >
                    {item}
                    <span className="h-1 w-1 rounded-full bg-ink-600" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
