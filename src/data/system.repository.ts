import { System } from "@/domain/models/system";

const CATALOG: readonly System[] = [
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
