"use client";

import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import type { NavigationLink } from "@/domain/models/company";
import { rememberLocale } from "@/i18n/client";
import { LOCALES, localePath, type LocaleCode } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface SiteHeaderProps {
  locale: LocaleCode;
  companyName: string;
  navigation: readonly NavigationLink[];
  labels: Dictionary["header"];
}

export function SiteHeader({ locale, companyName, navigation, labels }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "border-b border-ink-800 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-[height] duration-500 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          href="#inicio"
          aria-label={labels.ariaHome}
          className="transition-opacity hover:opacity-70"
        >
          <Logo
            companyName={companyName}
            priority
            className={`w-auto transition-[height] duration-500 ${isScrolled ? "h-7" : "h-8 lg:h-9"}`}
          />
        </a>

        <nav aria-label={labels.ariaMainNav} className="hidden items-center gap-10 md:flex">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-ink-300 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <LanguageSwitcher current={locale} ariaLabel={labels.ariaLanguage} />
          <a
            href="#contato"
            className="rounded-[10px] bg-white px-6 py-2.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-105"
          >
            {labels.contactCta}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? labels.ariaCloseMenu : labels.ariaOpenMenu}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      <nav
        id="mobile-navigation"
        aria-label={labels.ariaMainNav}
        data-open={isMenuOpen}
        className="mobile-menu border-t border-ink-800 bg-ink-950/95 backdrop-blur-xl md:hidden"
      >
        <Container>
          <ul className="flex flex-col gap-1 py-6">
            {navigation.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-ink-200 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-[10px] bg-white px-6 py-3 text-center text-sm font-semibold text-ink-950"
              >
                {labels.contactCta}
              </a>
            </li>
            <li className="mt-4 border-t border-ink-800 pt-5">
              <span className="font-mono text-xs tracking-[0.25em] text-ink-500 uppercase">
                {labels.ariaLanguage}
              </span>
              <div className="mt-4 grid grid-cols-2 gap-1.5">
                {LOCALES.map((item) => {
                  const isCurrent = item.code === locale;

                  return (
                    <a
                      key={item.code}
                      href={localePath(item.code, "/")}
                      hrefLang={item.hreflang}
                      lang={item.htmlLang}
                      aria-current={isCurrent ? "true" : undefined}
                      onClick={() => {
                        rememberLocale(item.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center justify-between gap-3 rounded-[10px] border px-3.5 py-2.5 text-sm transition-colors ${
                        isCurrent
                          ? "border-white/25 bg-white/10 text-white"
                          : "border-ink-800 text-ink-300 hover:border-ink-600 hover:text-white"
                      }`}
                    >
                      {item.nativeName}
                      <span className="font-mono text-[10px] tracking-wider text-ink-500 uppercase">
                        {item.code}
                      </span>
                    </a>
                  );
                })}
              </div>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}
