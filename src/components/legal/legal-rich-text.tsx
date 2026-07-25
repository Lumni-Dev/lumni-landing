import { Fragment, type ReactNode } from "react";

import { localePath, type LocaleCode } from "@/i18n/config";

export type LegalVars = Record<string, string>;

interface LegalRichTextProps {
  text: string;
  locale: LocaleCode;
  vars: LegalVars;
}

const INLINE_PATTERN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

/**
 * Renderiza a mini-marcação dos dicionários legais: resolve {placeholders},
 * depois [rótulo](href) e **negrito**. Links internos ganham o prefixo do
 * idioma corrente.
 */
export function LegalRichText({ text, locale, vars }: LegalRichTextProps) {
  const resolved = text.replace(/\{(\w+)\}/g, (match, key: string) => vars[key] ?? match);

  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of resolved.matchAll(INLINE_PATTERN)) {
    const index = match.index ?? 0;
    if (index > cursor) nodes.push(resolved.slice(cursor, index));

    const [, linkLabel, linkHref, boldText] = match;

    if (linkLabel !== undefined && linkHref !== undefined) {
      const href = linkHref.startsWith("/") ? localePath(locale, linkHref) : linkHref;
      nodes.push(
        <a
          key={index}
          href={href}
          className="text-white underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-white"
        >
          {linkLabel}
        </a>,
      );
    } else if (boldText !== undefined) {
      nodes.push(
        <strong key={index} className="text-ink-100">
          {boldText}
        </strong>,
      );
    }

    cursor = index + match[0].length;
  }

  if (cursor < resolved.length) nodes.push(resolved.slice(cursor));

  return (
    <>
      {nodes.map((node, index) => (
        <Fragment key={index}>{node}</Fragment>
      ))}
    </>
  );
}
