import { NextResponse, type NextRequest } from "next/server";

import {
  DEFAULT_LOCALE,
  isLocaleCode,
  LOCALE_COOKIE,
  negotiateLocale,
} from "@/i18n/config";

/** Arquivos estáticos e rotas de imagem de metadata não passam pela negociação. */
const PUBLIC_FILE = /\.[^/]+$/;

/**
 * Negociação de idioma:
 * - URLs sem prefixo servem o idioma padrão (pt) por rewrite interno para /pt.
 * - Cookie (escolha explícita no seletor) tem prioridade; sem cookie, o
 *   Accept-Language do navegador decide; sem match, permanece em pt.
 * - /pt/* redireciona para a forma canônica sem prefixo.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_FILE.test(pathname) || pathname.includes("opengraph-image")) return;

  const [, first] = pathname.split("/");

  if (isLocaleCode(first)) {
    // O idioma padrão vive sem prefixo: /pt/x -> /x.
    if (first === DEFAULT_LOCALE) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
      return NextResponse.redirect(url, 308);
    }
    // URL explícita de idioma vence qualquer preferência: serve como está.
    return;
  }

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred = isLocaleCode(cookie)
    ? cookie
    : (negotiateLocale(request.headers.get("accept-language")) ?? DEFAULT_LOCALE);

  if (preferred !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url, 307);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const proxyConfig = {
  matcher: ["/((?!_next|api).*)"],
};
