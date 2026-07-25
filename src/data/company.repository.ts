import { Company } from "@/domain/models/company";
import { ContactChannel } from "@/domain/models/contact-channel";

const COMPANY = new Company({
  name: "Lumni",
  legalName: "Lumni - Serviços Digitais",
  taxId: "65.613.389/0001-96",
  tagline: "Engenharia de prompt que sua empresa pode confiar.",
  description:
    "A Lumni desenvolve sistemas, automatiza processos e acopla engenheiros ao seu time. Do primeiro diagnóstico ao código rodando em produção.",
  foundedYear: 2024,
  // O contato não entra aqui: já é a chamada de ação fixa do cabeçalho.
  navigation: [
    { label: "Serviços", href: "#servicos" },
    // TEMP: seção de Sistemas/Softwares oculta por enquanto.
    // { label: "Sistemas / Softwares", href: "#sistemas" },
  ],
});

const CHANNELS: readonly ContactChannel[] = [
  new ContactChannel({
    kind: "email",
    label: "E-mail",
    value: "contact@lumni.dev.br",
    href: "mailto:contact@lumni.dev.br",
  }),
  // TODO: número de WhatsApp ainda é fictício.
  new ContactChannel({
    kind: "whatsapp",
    label: "WhatsApp",
    value: "+55 (11) 90000-0000",
    href: "https://wa.me/5511900000000",
  }),
];

export class CompanyRepository {
  static find(): Company {
    return COMPANY;
  }

  static findContactChannels(): readonly ContactChannel[] {
    return CHANNELS;
  }
}
