import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { WordReveal } from "@/components/ui/word-reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description: string;
}

/** Cabeçalho canônico: rótulo, manchete e apoio sempre na mesma escala e no mesmo ritmo. */
export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <Reveal>
        <SectionLabel index={index}>{label}</SectionLabel>
      </Reveal>

      <WordReveal
        as="h2"
        text={title}
        className="mt-8 text-4xl leading-[1.1] font-semibold tracking-[-0.02em] text-balance text-ink-50 sm:text-5xl lg:text-6xl"
      />

      <Reveal delay={150}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-ink-400">{description}</p>
      </Reveal>
    </div>
  );
}
