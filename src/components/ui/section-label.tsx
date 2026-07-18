interface SectionLabelProps {
  index: string;
  children: string;
}

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <span className="flex items-center gap-4 font-mono text-xs tracking-[0.25em] text-ink-400 uppercase">
      <span className="text-ink-600">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-ink-700" />
      {children}
    </span>
  );
}
