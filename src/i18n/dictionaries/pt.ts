import type { Dictionary } from "@/i18n/types";

const pt: Dictionary = {
  meta: {
    keywords: [
      "Lumni",
      "desenvolvimento de sistemas",
      "desenvolvimento de aplicativos",
      "engenharia de software",
      "software sob demanda",
      "automação de processos",
      "integração de sistemas",
      "RPA",
      "consultoria em tecnologia",
      "cibersegurança",
      "squad de desenvolvimento",
      "alocação de desenvolvedores",
    ],
  },
  og: {
    strip: "SISTEMAS · AUTOMAÇÃO · CONSULTORIA · SEGURANÇA",
  },
  company: {
    tagline: "Engenharia de software que sua empresa pode confiar.",
    description:
      "A Lumni desenvolve sistemas, automatiza processos e acopla engenheiros ao seu time. Do primeiro diagnóstico ao código rodando em produção.",
  },
  header: {
    navServices: "Serviços",
    navSystems: "Sistemas / Softwares",
    contactCta: "Fale conosco",
    ariaHome: "Lumni, ir para o início",
    ariaMainNav: "Navegação principal",
    ariaOpenMenu: "Abrir menu",
    ariaCloseMenu: "Fechar menu",
    ariaLanguage: "Selecionar idioma",
  },
  hero: {
    ctaStart: "Iniciar um projeto",
    ctaServices: "Ver serviços",
    capabilities: [
      "Desenvolvimento sob medida",
      "Automação de processos",
      "Consultoria técnica",
      "Cibersegurança",
      "Squads dedicados",
    ],
  },
  services: {
    label: "Serviços",
    title: "Cinco frentes, um só compromisso: software que sustenta o negócio.",
    description:
      "Atuamos do diagnóstico à operação. Você escolhe o ponto de entrada, nós assumimos a responsabilidade técnica de ponta a ponta.",
    items: {
      desenvolvimento: {
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
      },
      automacao: {
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
      },
      consultoria: {
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
      },
      ciberseguranca: {
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
      },
      suporte: {
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
      },
    },
  },
  systems: {
    label: "Sistemas proprietários",
    title: "Também fazemos sistemas próprios.",
    description:
      "São produtos que a Lumni desenvolve, opera e evolui internamente até virarem plataforma. Endurecidos pelo uso diário e disponíveis para quem quiser conhecer.",
    items: {
      sirius: {
        name: "Sirius",
        headline: "Agente de IA no seu Windows.",
        description:
          "Sirius é o agente de IA da Lumni para o seu computador. Traz três modelos próprios, Sirius A, Sirius B e Sirius X, escolhidos automaticamente conforme a tarefa, e 940 ferramentas MCP em 48 famílias selecionadas por embeddings a cada pedido. Trabalha direto na sua máquina: programa, edita arquivos, usa o terminal, versiona com git, consulta bancos de dados, monta documentos do Office e trata imagens e PDFs. App nativo de Windows, com respostas em streaming, aprovação de cada ação, skills, subagentes e memória local.",
        highlights: [
          "App nativo de Windows",
          "Modelos Sirius A, B e X",
          "940 ferramentas MCP",
          "Seleção por embeddings",
          "Arquivos, terminal e git",
          "Skills e subagentes",
          "Respostas em streaming",
          "Aprovação de cada ação",
        ],
        actionLabel: "Conhecer o Sirius",
        status: "Em produção",
      },
      nipuz: {
        name: "Nipuz",
        headline: "Vários navegadores numa janela só.",
        description:
          "Nipuz é o navegador multi-contas da Lumni. Roda várias contas isoladas lado a lado numa janela só, cada navegador com login, cookies e cache próprios e no seu próprio processo, então se um travar os outros continuam. Organize tudo em workspaces, acompanhe CPU e RAM de cada painel em tempo real e controle mudo, zoom e modo anônimo por navegador. Bloqueador de anúncios integrado, atalhos de teclado e login com Google. App nativo de Windows.",
        highlights: [
          "App nativo de Windows",
          "Sessões 100% isoladas",
          "Workspaces com layout",
          "Grade de painéis",
          "CPU e RAM por painel",
          "Bloqueador de anúncios",
          "Modo anônimo",
          "Login com Google",
        ],
        actionLabel: "Conhecer o Nipuz",
        status: "Em produção",
      },
      disys: {
        name: "Disys",
        headline: "ERP de Recursos Humanos.",
        description:
          "Disys é o ERP de Recursos Humanos da Lumni para recrutamento e seleção. Conecta empresas, vagas, candidatos e processos em um só lugar: cadastro de clientes e unidades, publicação de vagas com níveis e faixas salariais, base pesquisável de talentos e currículos, e um pipeline visual de arrastar e soltar para mover candidatos entre etapas. Convide a equipe por e-mail com permissões por página e entre apenas com Google ou LinkedIn, sem senhas para gerenciar.",
        highlights: [
          "Recrutamento e seleção",
          "Empresas e vagas",
          "Base de candidatos",
          "Pipeline arrastar e soltar",
          "Permissões por página",
          "Login Google e LinkedIn",
          "Busca instantânea",
          "Sem senhas",
        ],
        actionLabel: "Conhecer o Disys",
        status: "Em produção",
      },
    },
  },
  contact: {
    label: "Contato",
    title: "Vamos conversar sobre o seu próximo passo técnico.",
    description:
      "Conte o problema, não a solução. A primeira conversa é um diagnóstico, sem compromisso e sem proposta genérica: se o caminho certo não passar por nós, dizemos isso também.",
    panelTag: "canais_diretos",
    available: "Disponível",
    channels: {
      email: "E-mail",
      whatsapp: "WhatsApp",
    },
  },
  footer: {
    servicesHeading: "Serviços",
    contactHeading: "Contato",
    ariaLegalNav: "Páginas legais",
    privacy: "Privacidade",
    terms: "Termos",
    backToTop: "Voltar ao topo",
    rights: "Todos os direitos reservados.",
  },
  legal: {
    updatedAtLabel: "Última atualização:",
    updatedAt: "16 de agosto de 2026",
    backToSite: "Voltar ao site",
    home: "Início",
    terms: {
      metaTitle: "Termos de Uso",
      metaDescription:
        "As regras para o uso do site e dos produtos da Lumni, incluindo o acesso por login social.",
      title: "Termos de Uso",
      intro:
        "Estes Termos regem o uso do site e dos produtos oferecidos pela {legalName} ({name}). Ao acessar ou usar os nossos serviços, você concorda com estes Termos.",
      sections: [
        {
          heading: "1. Aceitação dos Termos",
          body: [
            {
              p: "Ao criar uma conta, fazer login ou utilizar qualquer funcionalidade dos nossos serviços, você declara ter lido, compreendido e aceitado estes Termos e a nossa [Política de Privacidade](/privacy). Se você não concordar, não utilize os serviços.",
            },
          ],
        },
        {
          heading: "2. Descrição do serviço",
          body: [
            {
              p: "A {name} desenvolve e disponibiliza diversos sistemas e produtos de software, cada um com as suas próprias funcionalidades, e estes Termos se aplicam a todos eles. Os recursos podem evoluir, ser adicionados ou descontinuados ao longo do tempo.",
            },
          ],
        },
        {
          heading: "3. Conta e acesso",
          body: [
            {
              p: "O acesso a cada sistema pode ser feito por login social, por meio de provedores como Google, GitHub ou LinkedIn, conforme disponível no produto. Você é responsável por manter a segurança da conta usada para autenticar e por toda atividade realizada por meio dela. Avise-nos imediatamente em caso de uso não autorizado.",
            },
          ],
        },
        {
          heading: "4. Uso aceitável",
          body: [
            { p: "Ao usar os serviços, você concorda em não:" },
            {
              list: [
                "Violar leis, direitos de terceiros ou estes Termos;",
                "Tentar acessar áreas, contas ou dados sem autorização;",
                "Interferir, sobrecarregar ou comprometer a segurança e a integridade do serviço;",
                "Usar o serviço para distribuir conteúdo ilícito, malicioso ou enganoso;",
                "Realizar engenharia reversa, copiar ou explorar o serviço além do permitido em lei.",
              ],
            },
          ],
        },
        {
          heading: "5. Propriedade intelectual",
          body: [
            {
              p: "O site, a marca, o software e os materiais disponibilizados pertencem à {legalName} ou aos seus licenciadores e são protegidos por lei. Estes Termos não transferem a você nenhum direito de propriedade intelectual, exceto a licença limitada de uso do serviço.",
            },
          ],
        },
        {
          heading: "6. Conteúdo do usuário",
          body: [
            {
              p: "Você mantém os direitos sobre o conteúdo que cria no serviço. Para operar as funcionalidades (como armazenar, sincronizar e exibir os seus dados a você), você nos concede uma licença limitada e estritamente necessária a essa finalidade. Você é responsável pelo conteúdo que insere e declara ter os direitos para tanto.",
            },
          ],
        },
        {
          heading: "7. Isenções e limitação de responsabilidade",
          body: [
            {
              p: "O serviço é fornecido “no estado em que se encontra”, sem garantias de que será ininterrupto ou livre de erros. Na máxima extensão permitida pela lei, a {name} não se responsabiliza por danos indiretos, incidentais ou lucros cessantes decorrentes do uso ou da impossibilidade de uso do serviço.",
            },
          ],
        },
        {
          heading: "8. Suspensão e encerramento",
          body: [
            {
              p: "Podemos suspender ou encerrar o acesso em caso de violação destes Termos ou de risco à segurança do serviço. Você pode encerrar o uso a qualquer momento. Encerrada a conta, o tratamento dos seus dados segue a nossa Política de Privacidade.",
            },
          ],
        },
        {
          heading: "9. Alterações",
          body: [
            {
              p: "Podemos atualizar estes Termos periodicamente. A data de “última atualização” no topo indica a versão vigente. O uso continuado após mudanças significa a aceitação dos Termos revisados.",
            },
          ],
        },
        {
          heading: "10. Legislação aplicável e foro",
          body: [
            {
              p: "Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro do domicílio do usuário para dirimir eventuais controvérsias, quando aplicável a legislação consumerista.",
            },
          ],
        },
        {
          heading: "11. Contato",
          body: [
            {
              p: "Em caso de dúvidas sobre estes Termos, fale conosco pelo e-mail [{email}](mailto:{email}).",
            },
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Política de Privacidade",
      metaDescription:
        "Como a Lumni coleta, usa e protege os seus dados pessoais nos seus sites e sistemas, incluindo o login social.",
      title: "Política de Privacidade",
      intro:
        "Esta Política explica como a {legalName} ({name}) trata os seus dados pessoais quando você usa o nosso site e os nossos produtos, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).",
      sections: [
        {
          heading: "1. Quem é o controlador dos dados",
          body: [
            {
              p: "O controlador dos seus dados pessoais é a {legalName}, inscrita no CNPJ sob o nº {taxId}. Para qualquer assunto relacionado a privacidade e proteção de dados, fale conosco pelo e-mail [{email}](mailto:{email}).",
            },
          ],
        },
        {
          heading: "2. Quais dados coletamos",
          body: [
            { p: "Coletamos apenas o necessário para autenticar e prestar o serviço:" },
            {
              list: [
                "**Dados de conta (login social).** Quando você entra por login social, por meio de provedores como Google, GitHub ou LinkedIn, recebemos do provedor os dados básicos que você autoriza: nome, endereço de e-mail (e se ele é verificado), foto de perfil e um identificador único da sua conta no provedor.",
                "**Conteúdo que você cria.** Informações que você registra ou envia ao usar cada sistema, conforme as funcionalidades do produto (por exemplo: cadastros, textos, arquivos, preferências e configurações).",
                "**Dados técnicos essenciais.** Informações mínimas necessárias ao funcionamento e à segurança, como registros de acesso e identificadores de sessão.",
              ],
            },
            {
              p: "Não solicitamos nem armazenamos a sua senha dos provedores de login: a autenticação acontece no ambiente seguro de cada provedor.",
            },
          ],
        },
        {
          heading: "3. Como e por que usamos os seus dados",
          body: [
            { p: "Usamos os seus dados para as seguintes finalidades:" },
            {
              list: [
                "Autenticar o seu acesso e manter você conectado com segurança;",
                "Identificar e vincular a sua conta pelo e-mail verificado, para que você reencontre os seus dados ao entrar por qualquer provedor;",
                "Fornecer, manter e melhorar as funcionalidades do produto;",
                "Prevenir fraudes, abusos e garantir a segurança do serviço;",
                "Cumprir obrigações legais e regulatórias.",
              ],
            },
          ],
        },
        {
          heading: "4. Base legal do tratamento",
          body: [
            {
              p: "Tratamos os seus dados com fundamento nas hipóteses da LGPD, especialmente: a execução do contrato e de procedimentos preliminares a seu pedido (art. 7º, V); o seu consentimento ao usar o login social (art. 7º, I); o cumprimento de obrigação legal (art. 7º, II); e o legítimo interesse para segurança e prevenção a fraudes (art. 7º, IX).",
            },
          ],
        },
        {
          heading: "5. Login social",
          body: [
            {
              p: "Ao escolher entrar com um provedor de login social, você é levado à tela oficial dele e decide se autoriza o compartilhamento dos dados básicos do seu perfil. Recebemos apenas essas informações e **não** publicamos nada, não enviamos mensagens e não acessamos conteúdos além do perfil básico e do e-mail. Você pode revogar esse acesso a qualquer momento nas configurações de segurança do respectivo provedor.",
            },
          ],
        },
        {
          heading: "6. Compartilhamento de dados",
          body: [
            {
              p: "Nós não vendemos os seus dados pessoais. Podemos compartilhá-los apenas com operadores que nos ajudam a prestar o serviço e que estão obrigados a protegê-los, como provedores de hospedagem e de banco de dados, e os provedores de identidade usados no login. Também podemos divulgar dados quando exigido por lei ou ordem de autoridade competente.",
            },
          ],
        },
        {
          heading: "7. Armazenamento e segurança",
          body: [
            {
              p: "Adotamos medidas técnicas e organizacionais para proteger os seus dados contra acesso não autorizado, perda ou alteração. As credenciais sensíveis do sistema ficam restritas ao servidor e nunca são expostas ao aplicativo cliente, e as comunicações com nossos serviços são protegidas em trânsito.",
            },
          ],
        },
        {
          heading: "8. Por quanto tempo guardamos",
          body: [
            {
              p: "Mantemos os seus dados enquanto a sua conta existir ou enquanto forem necessários para as finalidades desta Política. Encerrada a conta, os dados são eliminados ou anonimizados, salvo quando a lei exigir a sua guarda por período determinado.",
            },
          ],
        },
        {
          heading: "9. Os seus direitos",
          body: [
            { p: "Nos termos do art. 18 da LGPD, você pode a qualquer momento solicitar:" },
            {
              list: [
                "A confirmação da existência de tratamento e o acesso aos seus dados;",
                "A correção de dados incompletos, inexatos ou desatualizados;",
                "A anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desconformidade;",
                "A portabilidade dos seus dados;",
                "A eliminação dos dados tratados com base no consentimento;",
                "A informação sobre com quem compartilhamos os seus dados;",
                "A revogação do consentimento.",
              ],
            },
            { p: "Para exercer os seus direitos, escreva para [{email}](mailto:{email})." },
          ],
        },
        {
          heading: "10. Cookies",
          body: [
            {
              p: "Usamos apenas os cookies e tecnologias equivalentes estritamente necessários ao funcionamento e à segurança do serviço. Não utilizamos cookies de publicidade de terceiros.",
            },
          ],
        },
        {
          heading: "11. Extensão Sirius para Chrome",
          body: [
            {
              p: "A Sirius Extension conecta o aplicativo Sirius instalado no seu computador ao navegador, para executar tarefas na web sob o seu comando (navegar, ler, clicar e digitar), somente enquanto você mantém o modo navegador ligado no aplicativo.",
            },
            {
              list: [
                "**O que a extensão acessa.** Durante uma tarefa, a extensão lê o conteúdo da aba controlada (endereço, título, textos e elementos da página) e realiza nela as ações pedidas;",
                "**Para onde os dados vão.** As informações lidas são entregues exclusivamente ao aplicativo Sirius em execução no seu próprio computador (conexão local). A extensão não envia dados a servidores externos, não usa serviços de análise e não exibe anúncios;",
                "**O que fica guardado.** A extensão armazena localmente apenas dados técnicos de reconexão (como a última porta local usada). Ela não retém histórico de navegação nem conteúdo de páginas;",
                "**Controle.** Desligar o modo navegador no aplicativo, ou remover a extensão, interrompe imediatamente qualquer acesso.",
              ],
            },
            {
              p: "O conteúdo processado pelo aplicativo Sirius a partir dessas tarefas segue as demais seções desta Política.",
            },
          ],
        },
        {
          heading: "12. Crianças e adolescentes",
          body: [
            {
              p: "O serviço não é direcionado a menores de 18 anos e não coletamos intencionalmente dados de menores sem o consentimento dos responsáveis. Se identificarmos esse tipo de coleta, eliminaremos os dados.",
            },
          ],
        },
        {
          heading: "13. Alterações desta Política",
          body: [
            {
              p: "Podemos atualizar esta Política periodicamente. Quando isso ocorrer, revisaremos a data de “última atualização” no topo desta página e, quando cabível, avisaremos por meios adequados.",
            },
          ],
        },
        {
          heading: "14. Contato",
          body: [
            {
              p: "Dúvidas, pedidos ou reclamações sobre privacidade podem ser enviados para [{email}](mailto:{email}). Você também pode consultar os nossos [Termos de Uso](/terms).",
            },
          ],
        },
      ],
    },
  },
};

export default pt;
