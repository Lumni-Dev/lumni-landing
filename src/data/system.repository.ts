import { System } from "@/domain/models/system";

const CATALOG: readonly System[] = [
  new System({
    id: "luna",
    name: "Luna",
    headline: "Sistema de gestão para psicólogas.",
    description:
      "Luna é o sistema de gestão feito para psicólogas e psicólogos: agenda, prontuário eletrônico, financeiro e comunicação com pacientes reunidos num único ambiente. Cada informação protegida com o sigilo que a profissão exige e em conformidade com a LGPD e o Conselho Federal de Psicologia, para deixar menos burocracia entre você e quem você atende.",
    highlights: [
      "Agenda e sessões",
      "Cadastro de pacientes",
      "Prontuário eletrônico seguro",
      "Prontuário em PDF com senha",
      "Financeiro e recibos",
      "Envio de documentos por e-mail",
      "Clínica e colaboradores",
      "Dashboard e indicadores",
      "Lembretes automáticos",
    ],
    url: "https://luna.lumni.dev.br",
    actionLabel: "Acessar o Luna",
    status: "Em produção",
  }),
];

export class SystemRepository {
  static findAll(): readonly System[] {
    return CATALOG;
  }
}
