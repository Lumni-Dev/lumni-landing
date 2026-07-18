import { Service } from "@/domain/models/service";

const CATALOG: readonly Service[] = [
  new Service({
    id: "desenvolvimento",
    title: "Desenvolvimento de sistemas e aplicativos",
    headline: "Do discovery ao deploy, sem dívida técnica no primeiro sprint.",
    description:
      "Construímos produtos digitais sob medida: plataformas web, aplicativos móveis e APIs que sustentam operações críticas. Arquitetura desenhada para escalar, código testado e entrega contínua, com a mesma engenharia que sua operação vai depender no dia seguinte ao lançamento.",
    deliverables: [
      "Plataformas web e portais internos",
      "Aplicativos iOS e Android",
      "APIs, integrações e microsserviços",
      "Arquitetura preparada para escala",
    ],
    icon: "development",
  }),
  new Service({
    id: "automacao",
    title: "Automação de processos",
    headline: "Devolvemos ao seu time as horas que a planilha consome.",
    description:
      "Mapeamos o fluxo real da sua operação, não o que está no manual, e eliminamos o trabalho repetitivo que drena capacidade produtiva. Integrações entre sistemas que não conversam, rotinas programadas e orquestração de dados que reduzem erro humano e tornam o processo auditável de ponta a ponta.",
    deliverables: [
      "Mapeamento e redesenho de processos",
      "Integração entre sistemas legados",
      "Rotinas automatizadas e RPA",
      "Painéis de acompanhamento em tempo real",
    ],
    icon: "automation",
  }),
  new Service({
    id: "consultoria",
    title: "Consultoria em tecnologia",
    headline: "Diagnóstico independente para decisões que custam caro se erradas.",
    description:
      "Avaliamos arquitetura, stack, segurança e custo de infraestrutura com olhar externo e sem agenda comercial embutida. Você recebe um plano de evolução priorizado por impacto no negócio, não por modismo de mercado, com o custo e o risco de cada caminho explicitados antes da decisão.",
    deliverables: [
      "Auditoria de arquitetura e código",
      "Revisão de segurança e conformidade",
      "Otimização de custo em nuvem",
      "Roadmap técnico priorizado",
    ],
    icon: "consulting",
  }),
  new Service({
    id: "ciberseguranca",
    title: "Cibersegurança",
    headline: "Encontramos as falhas antes que elas encontrem você.",
    description:
      "Protegemos o que o seu negócio não pode perder: dados, disponibilidade e reputação. Mapeamos a superfície de ataque, testamos as defesas de forma controlada e corrigimos na raiz, do código à infraestrutura. Segurança como processo contínuo, com monitoramento e resposta a incidentes, não como relatório engavetado.",
    deliverables: [
      "Auditoria de segurança e testes de intrusão",
      "Hardening de aplicações e infraestrutura",
      "Adequação à LGPD e conformidade",
      "Monitoramento e resposta a incidentes",
    ],
    icon: "security",
  }),
  new Service({
    id: "suporte",
    title: "Suporte em desenvolvimento",
    headline: "Acoplamos como um braço da sua engenharia.",
    description:
      "Engenheiros integrados ao seu backlog, às suas cerimônias e ao seu padrão de código, entregando desde a primeira semana. Senioridade real e escala sob demanda, sem o custo fixo, a lentidão e o risco de um processo de contratação que pode levar meses para dar resultado.",
    deliverables: [
      "Squads dedicados e multidisciplinares",
      "Alocação sob demanda, elástica",
      "Aderência ao seu processo e stack",
      "Transferência de conhecimento contínua",
    ],
    icon: "staffing",
  }),
];

export class ServiceRepository {
  static findAll(): readonly Service[] {
    return CATALOG;
  }
}
