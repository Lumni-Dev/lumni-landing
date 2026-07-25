import { Company } from "@/domain/models/company";
import { ContactChannel } from "@/domain/models/contact-channel";
import type { LocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/** Dados invariantes por idioma; os textos vêm do dicionário do locale. */
const COMPANY_BASE = {
  name: "Lumni",
  legalName: "Lumni - Serviços Digitais",
  taxId: "65.613.389/0001-96",
  foundedYear: 2024,
} as const;

export class CompanyRepository {
  static find(locale: LocaleCode): Company {
    const dict = getDictionary(locale);

    return new Company({
      ...COMPANY_BASE,
      tagline: dict.company.tagline,
      description: dict.company.description,
      rightsNotice: dict.footer.rights,
      // O contato não entra aqui: já é a chamada de ação fixa do cabeçalho.
      navigation: [
        { label: dict.header.navServices, href: "#servicos" },
        // TEMP: seção de Sistemas/Softwares oculta por enquanto.
        // { label: "Sistemas / Softwares", href: "#sistemas" },
      ],
    });
  }

  static findContactChannels(locale: LocaleCode): readonly ContactChannel[] {
    const dict = getDictionary(locale);

    return [
      new ContactChannel({
        kind: "email",
        label: dict.contact.channels.email,
        value: "contact@lumni.dev.br",
        href: "mailto:contact@lumni.dev.br",
      }),
      // TODO: número de WhatsApp ainda é fictício.
      new ContactChannel({
        kind: "whatsapp",
        label: dict.contact.channels.whatsapp,
        value: "+55 (11) 90000-0000",
        href: "https://wa.me/5511900000000",
      }),
    ];
  }
}
