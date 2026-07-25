import type { ReactNode } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { CompanyRepository } from "@/data/company.repository";
import { localePath, type LocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface LegalShellProps {
  locale: LocaleCode;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}

/** Moldura das páginas legais: cabeçalho simples, coluna de leitura e rodapé. */
export function LegalShell({ locale, title, intro, children }: LegalShellProps) {
  const dict = getDictionary(locale);
  const company = CompanyRepository.find(locale);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/80 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <a
            href={localePath(locale, "/")}
            aria-label={dict.header.ariaHome}
            className="transition-opacity hover:opacity-70"
          >
            <Logo companyName={company.name} priority className="h-7 w-auto" />
          </a>
          <div className="flex items-center gap-6">
            <LanguageSwitcher current={locale} ariaLabel={dict.header.ariaLanguage} />
            <a
              href={localePath(locale, "/")}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-white"
            >
              {dict.legal.backToSite}
            </a>
          </div>
        </Container>
      </header>

      <main className="relative z-10 flex-1">
        <Container className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium tracking-[0.2em] text-ink-500 uppercase">
              {company.name}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-ink-400">
              {dict.legal.updatedAtLabel} {dict.legal.updatedAt}
            </p>
            {intro ? (
              <p className="mt-6 text-sm leading-relaxed text-pretty text-ink-300">{intro}</p>
            ) : null}
            {dict.legal.courtesyNote ? (
              <p className="mt-6 rounded-[10px] border border-ink-800 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-ink-400">
                {dict.legal.courtesyNote}
              </p>
            ) : null}

            <div className="mt-12 space-y-10 select-text">{children}</div>
          </div>
        </Container>
      </main>

      <footer className="relative z-10 border-t border-ink-800">
        <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="text-xs text-ink-400">{company.legalLine}</p>
            <p className="text-xs text-ink-500">{company.copyright(new Date().getFullYear())}</p>
          </div>
          <nav
            aria-label={dict.footer.ariaLegalNav}
            className="flex items-center gap-6 text-xs text-ink-500"
          >
            <a href={localePath(locale, "/privacy")} className="transition-colors hover:text-white">
              {dict.footer.privacy}
            </a>
            <a href={localePath(locale, "/terms")} className="transition-colors hover:text-white">
              {dict.footer.terms}
            </a>
            <a href={localePath(locale, "/")} className="transition-colors hover:text-white">
              {dict.legal.home}
            </a>
          </nav>
        </Container>
      </footer>
    </>
  );
}

interface LegalSectionProps {
  id?: string;
  heading: string;
  children: ReactNode;
}

/** Bloco de uma cláusula: título + corpo com espaçamento consistente. */
export function LegalSection({ id, heading, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-lg font-semibold text-white">{heading}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-pretty text-ink-300">
        {children}
      </div>
    </section>
  );
}

/** Lista com marcadores padronizada para as cláusulas. */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-ink-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
