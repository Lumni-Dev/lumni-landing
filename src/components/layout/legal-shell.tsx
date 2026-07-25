import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { CompanyRepository } from "@/data/company.repository";

interface LegalShellProps {
  title: string;
  /** Data por extenso, ex.: "25 de julho de 2026". */
  updatedAt: string;
  intro?: ReactNode;
  children: ReactNode;
}

/** Moldura das páginas legais: cabeçalho simples, coluna de leitura e rodapé. */
export function LegalShell({ title, updatedAt, intro, children }: LegalShellProps) {
  const company = CompanyRepository.find();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/80 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label={`${company.name}, ir para o início`}
            className="transition-opacity hover:opacity-70"
          >
            <Logo companyName={company.name} priority className="h-7 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-ink-300 transition-colors hover:text-white"
          >
            Voltar ao site
          </Link>
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
            <p className="mt-3 text-sm text-ink-400">Última atualização: {updatedAt}</p>
            {intro ? (
              <p className="mt-6 text-sm leading-relaxed text-pretty text-ink-300">{intro}</p>
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
          <nav aria-label="Páginas legais" className="flex items-center gap-6 text-xs text-ink-500">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacidade
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Termos
            </Link>
            <Link href="/" className="transition-colors hover:text-white">
              Início
            </Link>
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
