"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import type { NavigationLink } from "@/domain/models/company";

interface SiteHeaderProps {
  companyName: string;
  navigation: readonly NavigationLink[];
}

export function SiteHeader({ companyName, navigation }: SiteHeaderProps) {
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
          aria-label={`${companyName}, ir para o início`}
          className="transition-opacity hover:opacity-70"
        >
          <Logo
            companyName={companyName}
            priority
            className={`w-auto transition-[height] duration-500 ${isScrolled ? "h-7" : "h-8 lg:h-9"}`}
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-10 md:flex">
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
          <a
            href="#contato"
            className="rounded-[10px] bg-white px-6 py-2.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-105"
          >
            Fale conosco
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
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
        aria-label="Navegação principal"
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
                Fale conosco
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}
