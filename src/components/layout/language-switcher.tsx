"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { rememberLocale } from "@/i18n/client";
import { LOCALES, localePath, stripLocalePrefix, type LocaleCode } from "@/i18n/config";

interface LanguageSwitcherProps {
  current: LocaleCode;
  ariaLabel: string;
}

/**
 * Dropdown de idiomas do cabeçalho. A troca usa navegação completa (<a>):
 * o cookie é gravado no clique e o proxy passa a honrar a escolha.
 */
export function LanguageSwitcher({ current, ariaLabel }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const route = stripLocalePrefix(pathname ?? "/");

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={ariaLabel}
        className="flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-white"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a13.5 13.5 0 0 1 0 18a13.5 13.5 0 0 1 0-18" />
        </svg>
        <span className="uppercase">{current}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`h-2.5 w-2.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" />
        </svg>
      </button>

      {isOpen ? (
        <ul
          role="menu"
          aria-label={ariaLabel}
          className="absolute end-0 top-full z-50 mt-3 max-h-[70vh] w-48 overflow-y-auto rounded-[10px] border border-ink-800 bg-ink-950/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          {LOCALES.map((locale) => {
            const isCurrent = locale.code === current;

            return (
              <li key={locale.code} role="none">
                <a
                  role="menuitem"
                  href={localePath(locale.code, route)}
                  hrefLang={locale.hreflang}
                  lang={locale.htmlLang}
                  aria-current={isCurrent ? "true" : undefined}
                  onClick={() => {
                    rememberLocale(locale.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between gap-4 rounded-[8px] px-3 py-2 text-sm transition-colors ${
                    isCurrent
                      ? "bg-white/10 text-white"
                      : "text-ink-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {locale.nativeName}
                  <span className="font-mono text-[10px] tracking-wider text-ink-500 uppercase">
                    {locale.code}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
