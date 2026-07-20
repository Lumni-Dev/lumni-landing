import { ChannelIcon } from "@/components/icons/channel-icon";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Spotlight } from "@/components/ui/spotlight";
import type { ContactChannel } from "@/domain/models/contact-channel";

interface ContactSectionProps {
  channels: readonly ContactChannel[];
}

export function ContactSection({ channels }: ContactSectionProps) {
  return (
    <Section
      id="contato"
      decoration={
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute -bottom-52 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-ink-600/10 blur-[130px]"
        />
      }
    >
      <SectionHeading
        index="03"
        label="Contato"
        title="Vamos conversar sobre o seu próximo passo técnico."
        description="Conte o problema, não a solução. A primeira conversa é um diagnóstico, sem compromisso e sem proposta genérica: se o caminho certo não passar por nós, dizemos isso também."
      />

      <Reveal delay={200}>
        <Spotlight className="mt-24 overflow-hidden rounded-[10px] border border-ink-800 bg-ink-950/70 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-ink-800 px-6 py-4 font-mono text-xs tracking-[0.25em] uppercase lg:px-10">
            <span className="text-ink-500">
              canais_diretos<span className="blink text-ink-300">_</span>
            </span>
            <span className="flex items-center gap-2.5 text-ink-300">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-white/60" />
                <span className="relative inline-flex h-2 w-2 bg-white" />
              </span>
              Disponível
            </span>
          </div>

          <ul>
            {channels.map((channel, index) => (
              <li key={channel.kind} className={index > 0 ? "border-t border-ink-800" : ""}>
                <a
                  href={channel.href}
                  target={channel.target}
                  rel={channel.rel}
                  className="hud-frame group flex flex-col gap-6 p-6 transition-colors duration-500 hover:bg-ink-900/60 sm:flex-row sm:items-center sm:justify-between lg:p-10"
                >
                  <span className="flex items-center gap-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border border-ink-700 text-ink-300 transition-all duration-500 group-hover:border-ink-400 group-hover:text-white">
                      <ChannelIcon name={channel.kind} className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col gap-1.5">
                      <span className="font-mono text-xs tracking-[0.25em] text-ink-500 uppercase">
                        {channel.label}
                      </span>
                      <span className="font-mono text-xl font-medium tracking-tight break-all text-white lg:text-2xl">
                        {channel.value}
                      </span>
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="hidden font-mono text-ink-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:block"
                  >
                    -&gt;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Spotlight>
      </Reveal>
    </Section>
  );
}
