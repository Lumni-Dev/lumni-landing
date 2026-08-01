import type { LocaleCode } from "@/i18n/config";
import type { Dictionary, LegalDocContent } from "@/i18n/types";

import ar from "./ar";
import de from "./de";
import en from "./en";
import es from "./es";
import fr from "./fr";
import it from "./it";
import ja from "./ja";
import ko from "./ko";
import nl from "./nl";
import pt from "./pt";
import ru from "./ru";
import zh from "./zh";

const DICTIONARIES: Record<LocaleCode, Dictionary> = {
  pt,
  en,
  es,
  fr,
  de,
  it,
  nl,
  ru,
  ja,
  ko,
  zh,
  ar,
};

export function getDictionary(locale: LocaleCode): Dictionary {
  return DICTIONARIES[locale];
}

/**
 * Cada idioma tem os documentos legais traduzidos (com a nota de cortesia em
 * dictionary.legal.courtesyNote informando que a versão em português prevalece).
 * O fallback para en é uma rede de segurança caso algum idioma fique sem o
 * documento.
 */
export function getLegalDoc(locale: LocaleCode, kind: "terms" | "privacy"): LegalDocContent {
  const doc = DICTIONARIES[locale].legal[kind] ?? DICTIONARIES.en.legal[kind];
  if (!doc) throw new Error(`Documento legal ausente: ${kind}`);
  return doc;
}
