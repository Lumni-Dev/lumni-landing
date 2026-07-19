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
  new System({
    id: "sirius",
    name: "Sirius",
    headline: "O client de IA da Lumni, comandado por voz.",
    description:
      "Sirius é o client de IA proprietário da Lumni: uma interface local que põe um agente de IA para trabalhar por você. Você escreve ou fala a instrução, acompanha cada passo do agente ao vivo na conversa e recebe a resposta lida em voz alta, no idioma que escolher. Roda inteiro na sua máquina, em Linux, macOS ou Windows, com a voz processada pelo próprio navegador: sem chave, sem conta e sem enviar áudio para lugar nenhum.",
    highlights: [
      "Comando por voz",
      "Resposta lida em voz alta",
      "Agente ao vivo na conversa",
      "Compatível com Claude",
      "Multi-idioma",
      "Roda 100% local",
      "Linux, macOS e Windows",
      "Voz sem chave nem conta",
    ],
    url: "",
    actionLabel: "Em breve",
    status: "Em breve",
  }),
];

export class SystemRepository {
  static findAll(): readonly System[] {
    return CATALOG;
  }
}
