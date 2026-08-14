import { System } from "@/domain/models/system";
import type { LocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { SystemId } from "@/i18n/types";

/**
 * Esqueleto invariante do catálogo: ids estáveis e URL.
 * Textos vêm do dicionário do locale.
 */
const CATALOG_BASE: readonly { id: SystemId; url: string }[] = [
  { id: "sirius", url: "https://sirius.lumni.dev.br" },
  { id: "nipuz", url: "https://nipuz.lumni.dev.br" },
  { id: "disys", url: "https://disys.lumni.dev.br" },
];

export class SystemRepository {
  static findAll(locale: LocaleCode): readonly System[] {
    const dict = getDictionary(locale);

    return CATALOG_BASE.map(
      (base) => new System({ ...base, ...dict.systems.items[base.id] }),
    );
  }
}
