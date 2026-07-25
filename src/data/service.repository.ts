import { Service, type ServiceIcon } from "@/domain/models/service";
import type { LocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { ServiceId } from "@/i18n/types";

/**
 * Esqueleto invariante do catálogo: ids (âncoras estáveis em todos os idiomas)
 * e ícones. Títulos, manchetes e entregáveis vêm do dicionário do locale.
 */
const CATALOG_BASE: readonly { id: ServiceId; icon: ServiceIcon }[] = [
  { id: "desenvolvimento", icon: "development" },
  { id: "automacao", icon: "automation" },
  { id: "consultoria", icon: "consulting" },
  { id: "ciberseguranca", icon: "security" },
  { id: "suporte", icon: "staffing" },
];

export class ServiceRepository {
  static findAll(locale: LocaleCode): readonly Service[] {
    const dict = getDictionary(locale);

    return CATALOG_BASE.map(
      (base) => new Service({ ...base, ...dict.services.items[base.id] }),
    );
  }
}
