import type { Metadata } from "next";

import { LOCALES, localePath, type LocaleCode } from "@/i18n/config";

/**
 * Canonical + hreflang de uma rota em todos os idiomas. O x-default aponta
 * para a URL sem prefixo, onde o proxy negocia o idioma do navegador.
 */
export function localeAlternates(locale: LocaleCode, route: string): Metadata["alternates"] {
  return {
    canonical: localePath(locale, route),
    languages: {
      ...Object.fromEntries(LOCALES.map((l) => [l.hreflang, localePath(l.code, route)])),
      "x-default": route,
    },
  };
}

/** og:locale:alternate — todos os idiomas exceto o atual. */
export function ogAlternateLocales(locale: LocaleCode): string[] {
  return LOCALES.filter((l) => l.code !== locale).map((l) => l.ogLocale);
}
