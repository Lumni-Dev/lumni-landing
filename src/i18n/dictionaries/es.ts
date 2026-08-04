import type { Dictionary } from "@/i18n/types";

const es: Dictionary = {
  meta: {
    keywords: [
      "Lumni",
      "desarrollo de software",
      "software a medida",
      "desarrollo de aplicaciones",
      "automatización de procesos",
      "integración de sistemas",
      "RPA",
      "consultoría tecnológica",
      "ciberseguridad",
      "equipos de desarrollo dedicados",
    ],
  },
  og: {
    strip: "SISTEMAS · AUTOMATIZACIÓN · CONSULTORÍA · SEGURIDAD",
  },
  company: {
    tagline: "Ingeniería de prompts en la que tu empresa puede confiar.",
    description:
      "Lumni desarrolla sistemas, automatiza procesos y acopla ingenieros a tu equipo. Del primer diagnóstico al código funcionando en producción.",
  },
  header: {
    navServices: "Servicios",
    navSystems: "Sistemas / Software",
    contactCta: "Habla con nosotros",
    ariaHome: "Lumni, ir al inicio",
    ariaMainNav: "Navegación principal",
    ariaOpenMenu: "Abrir menú",
    ariaCloseMenu: "Cerrar menú",
    ariaLanguage: "Seleccionar idioma",
  },
  hero: {
    ctaStart: "Iniciar un proyecto",
    ctaServices: "Ver servicios",
    capabilities: [
      "Desarrollo a medida",
      "Automatización de procesos",
      "Consultoría técnica",
      "Ciberseguridad",
      "Squads dedicados",
    ],
  },
  services: {
    label: "Servicios",
    title: "Cinco frentes, un solo compromiso: software que sostiene el negocio.",
    description:
      "Actuamos del diagnóstico a la operación. Tú eliges el punto de entrada; nosotros asumimos la responsabilidad técnica de punta a punta.",
    items: {
      desenvolvimento: {
        title: "Desarrollo de sistemas y aplicaciones",
        headline: "Del discovery al deploy, sin deuda técnica en el primer sprint.",
        description:
          "Construimos productos digitales a medida: plataformas web, aplicaciones móviles y APIs que sostienen operaciones críticas. Arquitectura diseñada para escalar, código probado y entrega continua, con la misma ingeniería de la que tu operación dependerá el día después del lanzamiento.",
        deliverables: [
          "Plataformas web y portales internos",
          "Aplicaciones iOS y Android",
          "APIs, integraciones y microservicios",
          "Arquitectura preparada para escalar",
        ],
      },
      automacao: {
        title: "Automatización de procesos",
        headline: "Devolvemos a tu equipo las horas que consume la hoja de cálculo.",
        description:
          "Mapeamos el flujo real de tu operación, no el que está en el manual, y eliminamos el trabajo repetitivo que drena capacidad productiva. Integraciones entre sistemas que no se comunican, rutinas programadas y orquestación de datos que reducen el error humano y hacen el proceso auditable de punta a punta.",
        deliverables: [
          "Mapeo y rediseño de procesos",
          "Integración entre sistemas legados",
          "Rutinas automatizadas y RPA",
          "Paneles de seguimiento en tiempo real",
        ],
      },
      consultoria: {
        title: "Consultoría en tecnología",
        headline: "Diagnóstico independiente para decisiones que cuestan caro si salen mal.",
        description:
          "Evaluamos arquitectura, stack, seguridad y costo de infraestructura con mirada externa y sin agenda comercial incorporada. Recibes un plan de evolución priorizado por impacto en el negocio, no por modas del mercado, con el costo y el riesgo de cada camino explicitados antes de decidir.",
        deliverables: [
          "Auditoría de arquitectura y código",
          "Revisión de seguridad y cumplimiento",
          "Optimización de costos en la nube",
          "Roadmap técnico priorizado",
        ],
      },
      ciberseguranca: {
        title: "Ciberseguridad",
        headline: "Encontramos las fallas antes de que te encuentren a ti.",
        description:
          "Protegemos lo que tu negocio no puede perder: datos, disponibilidad y reputación. Mapeamos la superficie de ataque, probamos las defensas de forma controlada y corregimos de raíz, del código a la infraestructura. Seguridad como proceso continuo, con monitoreo y respuesta a incidentes, no como informe archivado.",
        deliverables: [
          "Auditoría de seguridad y pruebas de intrusión",
          "Hardening de aplicaciones e infraestructura",
          "Adecuación a la LGPD y cumplimiento",
          "Monitoreo y respuesta a incidentes",
        ],
      },
      suporte: {
        title: "Soporte en desarrollo",
        headline: "Nos acoplamos como un brazo de tu ingeniería.",
        description:
          "Ingenieros integrados a tu backlog, tus ceremonias y tu estándar de código, entregando desde la primera semana. Seniority real y escala bajo demanda, sin el costo fijo, la lentitud y el riesgo de un proceso de contratación que puede tardar meses en dar resultado.",
        deliverables: [
          "Squads dedicados y multidisciplinarios",
          "Asignación bajo demanda, elástica",
          "Adherencia a tu proceso y stack",
          "Transferencia de conocimiento continua",
        ],
      },
    },
  },
  systems: {
    label: "Sistemas propios",
    title: "También hacemos sistemas propios.",
    description:
      "Son productos que Lumni desarrolla, opera y evoluciona internamente hasta convertirlos en plataforma. Endurecidos por el uso diario y disponibles para quien quiera conocerlos.",
    items: {
      sirius: {
        name: "Sirius",
        headline: "Agente de IA en tu Windows.",
        description:
          "Sirius es el agente de IA de Lumni para tu PC. Incluye tres modelos propios, Sirius A, Sirius B y Sirius X, elegidos automáticamente según la tarea, más 940 herramientas MCP en 48 familias seleccionadas por embeddings en cada petición. Trabaja directo en tu máquina: programa, edita archivos, usa la terminal, versiona con git, consulta bases de datos, arma documentos de Office y trata imágenes y PDF. Una app nativa de Windows, con respuestas en streaming, aprobación de cada acción, skills, subagentes y memoria local.",
        highlights: [
          "App nativa de Windows",
          "Modelos Sirius A, B y X",
          "940 herramientas MCP",
          "Selección por embeddings",
          "Archivos, terminal y git",
          "Skills y subagentes",
          "Respuestas en streaming",
          "Aprobación por acción",
        ],
        actionLabel: "Conocer Sirius",
        status: "En producción",
      },
      disys: {
        name: "Disys",
        headline: "ERP de recursos humanos.",
        description:
          "Disys es el ERP de RR. HH. de Lumni para reclutamiento y contratación. Conecta empresas, vacantes, candidatos y procesos en un solo lugar: registros de clientes y unidades, publicaciones de vacantes con niveles y rangos salariales, una base de talentos y currículums con búsqueda, y un pipeline visual de arrastrar y soltar para mover candidatos entre etapas. Invita a tu equipo por correo con permisos por página e inicia sesión solo con Google o LinkedIn, sin contraseñas que gestionar.",
        highlights: [
          "Reclutamiento y contratación",
          "Empresas y vacantes",
          "Base de candidatos",
          "Pipeline de arrastrar y soltar",
          "Permisos por página",
          "Inicio de sesión con Google y LinkedIn",
          "Búsqueda instantánea",
          "Sin contraseñas",
        ],
        actionLabel: "Conocer Disys",
        status: "En producción",
      },
    },
  },
  contact: {
    label: "Contacto",
    title: "Hablemos de tu próximo paso técnico.",
    description:
      "Cuéntanos el problema, no la solución. La primera conversación es un diagnóstico, sin compromiso y sin propuesta genérica: si el camino correcto no pasa por nosotros, también te lo diremos.",
    panelTag: "canales_directos",
    available: "Disponible",
    channels: {
      email: "E-mail",
      whatsapp: "WhatsApp",
    },
  },
  footer: {
    servicesHeading: "Servicios",
    contactHeading: "Contacto",
    ariaLegalNav: "Páginas legales",
    privacy: "Privacidad",
    terms: "Términos",
    backToTop: "Volver arriba",
    rights: "Todos los derechos reservados.",
  },
  legal: {
    updatedAtLabel: "Última actualización:",
    updatedAt: "25 de julio de 2026",
    backToSite: "Volver al sitio",
    home: "Inicio",
    courtesyNote:
      "Este documento es una traducción ofrecida para tu comodidad. En caso de cualquier discrepancia, prevalece la versión en portugués.",
    terms: {
      metaTitle: "Términos de Uso",
      metaDescription:
        "Las reglas para usar los sitios web y sistemas de Lumni, incluido el acceso mediante inicio de sesión social.",
      title: "Términos de Uso",
      intro:
        "Estos Términos rigen el uso del sitio web y de los productos ofrecidos por {legalName} ({name}). Al acceder o usar nuestros servicios, aceptas estos Términos.",
      sections: [
        {
          heading: "1. Aceptación de los Términos",
          body: [
            {
              p: "Al crear una cuenta, iniciar sesión o usar cualquier funcionalidad de nuestros servicios, declaras que has leído, entendido y aceptado estos Términos y nuestra [Política de Privacidad](/privacy). Si no estás de acuerdo, no uses los servicios.",
            },
          ],
        },
        {
          heading: "2. Descripción del servicio",
          body: [
            {
              p: "{name} desarrolla y ofrece varios sistemas y productos de software, cada uno con sus propias funcionalidades, y estos Términos se aplican a todos ellos. Las funcionalidades pueden evolucionar, añadirse o descontinuarse con el tiempo.",
            },
          ],
        },
        {
          heading: "3. Cuenta y acceso",
          body: [
            {
              p: "El acceso a cada sistema puede otorgarse mediante inicio de sesión social, usando proveedores como Google, GitHub o LinkedIn, según esté disponible en el producto. Eres responsable de mantener segura la cuenta utilizada para autenticarte y de toda la actividad realizada a través de ella. Notifícanos de inmediato en caso de uso no autorizado.",
            },
          ],
        },
        {
          heading: "4. Uso aceptable",
          body: [
            { p: "Al usar los servicios, aceptas no:" },
            {
              list: [
                "Violar leyes, derechos de terceros o estos Términos;",
                "Intentar acceder a áreas, cuentas o datos sin autorización;",
                "Interferir, sobrecargar o comprometer la seguridad y la integridad del servicio;",
                "Usar el servicio para distribuir contenido ilícito, malicioso o engañoso;",
                "Aplicar ingeniería inversa, copiar o explotar el servicio más allá de lo que permite la ley.",
              ],
            },
          ],
        },
        {
          heading: "5. Propiedad intelectual",
          body: [
            {
              p: "El sitio web, la marca, el software y los materiales puestos a disposición pertenecen a {legalName} o a sus licenciantes y están protegidos por la ley. Estos Términos no te transfieren ningún derecho de propiedad intelectual, salvo la licencia limitada para usar el servicio.",
            },
          ],
        },
        {
          heading: "6. Contenido del usuario",
          body: [
            {
              p: "Conservas los derechos sobre el contenido que creas en el servicio. Para operar sus funcionalidades (como almacenar, sincronizar y mostrarte tus datos), nos otorgas una licencia limitada estrictamente necesaria para ese fin. Eres responsable del contenido que envías y declaras que posees los derechos para hacerlo.",
            },
          ],
        },
        {
          heading: "7. Exenciones y limitación de responsabilidad",
          body: [
            {
              p: "El servicio se ofrece “tal cual”, sin garantía de que sea ininterrumpido o esté libre de errores. En la máxima medida permitida por la ley, {name} no se responsabiliza por daños indirectos o incidentales ni por lucro cesante derivados del uso o de la imposibilidad de usar el servicio.",
            },
          ],
        },
        {
          heading: "8. Suspensión y terminación",
          body: [
            {
              p: "Podemos suspender o terminar el acceso en caso de violación de estos Términos o de riesgo para la seguridad del servicio. Puedes dejar de usar el servicio en cualquier momento. Una vez cerrada la cuenta, el tratamiento de tus datos sigue nuestra Política de Privacidad.",
            },
          ],
        },
        {
          heading: "9. Cambios",
          body: [
            {
              p: "Podemos actualizar estos Términos de vez en cuando. La fecha de “última actualización” en la parte superior indica la versión vigente. El uso continuado tras los cambios significa la aceptación de los Términos revisados.",
            },
          ],
        },
        {
          heading: "10. Ley aplicable y jurisdicción",
          body: [
            {
              p: "Estos Términos se rigen por las leyes de la República Federativa de Brasil. Se elige el foro del domicilio del usuario para resolver cualquier controversia, donde se aplica la legislación de consumo.",
            },
          ],
        },
        {
          heading: "11. Contacto",
          body: [
            {
              p: "Si tienes dudas sobre estos Términos, contáctanos en [{email}](mailto:{email}).",
            },
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Política de Privacidad",
      metaDescription:
        "Cómo Lumni recopila, usa y protege tus datos personales en sus sitios web y sistemas, incluido el inicio de sesión social.",
      title: "Política de Privacidad",
      intro:
        "Esta Política explica cómo {legalName} ({name}) trata tus datos personales cuando usas nuestro sitio web y productos, de acuerdo con la Ley General de Protección de Datos de Brasil (Lei no 13.709/2018, LGPD).",
      sections: [
        {
          heading: "1. Quién controla tus datos",
          body: [
            {
              p: "El controlador de tus datos personales es {legalName}, inscrita en el CNPJ n.º {taxId}. Para cualquier asunto relacionado con la privacidad y la protección de datos, contáctanos en [{email}](mailto:{email}).",
            },
          ],
        },
        {
          heading: "2. Qué datos recopilamos",
          body: [
            { p: "Recopilamos solo lo necesario para autenticarte y prestar el servicio:" },
            {
              list: [
                "**Datos de la cuenta (inicio de sesión social).** Cuando inicias sesión mediante inicio de sesión social, usando proveedores como Google, GitHub o LinkedIn, recibimos del proveedor los datos básicos que autorizas: nombre, dirección de correo electrónico (y si está verificada), foto de perfil y un identificador único de tu cuenta con el proveedor.",
                "**Contenido que creas.** Información que registras o envías al usar cada sistema, según las funcionalidades del producto (por ejemplo: registros, texto, archivos, preferencias y configuraciones).",
                "**Datos técnicos esenciales.** La información mínima necesaria para el funcionamiento y la seguridad, como registros de acceso e identificadores de sesión.",
              ],
            },
            {
              p: "No solicitamos ni almacenamos tu contraseña de los proveedores de inicio de sesión: la autenticación ocurre en el entorno seguro de cada proveedor.",
            },
          ],
        },
        {
          heading: "3. Cómo y por qué usamos tus datos",
          body: [
            { p: "Usamos tus datos para los siguientes fines:" },
            {
              list: [
                "Autenticar tu acceso y mantenerte con la sesión iniciada de forma segura;",
                "Identificar y vincular tu cuenta mediante el correo electrónico verificado, para que vuelvas a encontrar tus datos al iniciar sesión con cualquier proveedor;",
                "Ofrecer, mantener y mejorar las funcionalidades del producto;",
                "Prevenir fraudes y abusos y garantizar la seguridad del servicio;",
                "Cumplir con obligaciones legales y regulatorias.",
              ],
            },
          ],
        },
        {
          heading: "4. Base legal para el tratamiento",
          body: [
            {
              p: "Tratamos tus datos con base en los fundamentos legales de la LGPD, en particular: la ejecución de un contrato y los procedimientos preliminares a tu solicitud (art. 7, V); tu consentimiento al usar el inicio de sesión social (art. 7, I); el cumplimiento de obligaciones legales (art. 7, II); y el interés legítimo en la seguridad y la prevención de fraudes (art. 7, IX).",
            },
          ],
        },
        {
          heading: "5. Inicio de sesión social",
          body: [
            {
              p: "Cuando eliges iniciar sesión con un proveedor de inicio de sesión social, se te lleva a su pantalla oficial y decides si autorizas compartir los datos básicos de tu perfil. Recibimos solo esa información y **no** publicamos nada, no enviamos mensajes ni accedemos a contenido más allá del perfil básico y el correo electrónico. Puedes revocar este acceso en cualquier momento en la configuración de seguridad del respectivo proveedor.",
            },
          ],
        },
        {
          heading: "6. Compartir datos",
          body: [
            {
              p: "No vendemos tus datos personales. Podemos compartirlos únicamente con operadores que nos ayudan a prestar el servicio y que están obligados a protegerlos, como proveedores de alojamiento y de bases de datos y los proveedores de identidad usados para el inicio de sesión. También podemos divulgar datos cuando lo exija la ley o una orden de autoridad competente.",
            },
          ],
        },
        {
          heading: "7. Almacenamiento y seguridad",
          body: [
            {
              p: "Adoptamos medidas técnicas y organizativas para proteger tus datos contra el acceso no autorizado, la pérdida o la alteración. Las credenciales sensibles del sistema están restringidas al servidor y nunca se exponen a la aplicación cliente, y las comunicaciones con nuestros servicios están protegidas en tránsito.",
            },
          ],
        },
        {
          heading: "8. Cuánto tiempo conservamos tus datos",
          body: [
            {
              p: "Conservamos tus datos mientras exista tu cuenta o durante el tiempo necesario para los fines de esta Política. Una vez cerrada la cuenta, los datos se eliminan o se anonimizan, salvo cuando la ley exija conservarlos durante un plazo determinado.",
            },
          ],
        },
        {
          heading: "9. Tus derechos",
          body: [
            { p: "Conforme al art. 18 de la LGPD, puedes solicitar en cualquier momento:" },
            {
              list: [
                "La confirmación de que se realiza el tratamiento y el acceso a tus datos;",
                "La corrección de datos incompletos, inexactos o desactualizados;",
                "La anonimización, el bloqueo o la eliminación de datos innecesarios o tratados en incumplimiento;",
                "La portabilidad de tus datos;",
                "La eliminación de los datos tratados con base en el consentimiento;",
                "Información sobre las partes con las que compartimos tus datos;",
                "La revocación del consentimiento.",
              ],
            },
            { p: "Para ejercer tus derechos, escribe a [{email}](mailto:{email})." },
          ],
        },
        {
          heading: "10. Cookies",
          body: [
            {
              p: "Usamos únicamente las cookies y tecnologías equivalentes estrictamente necesarias para el funcionamiento y la seguridad del servicio. No usamos cookies publicitarias de terceros.",
            },
          ],
        },
        {
          heading: "11. Niños y adolescentes",
          body: [
            {
              p: "El servicio no está dirigido a personas menores de 18 años y no recopilamos de forma consciente datos de menores sin el consentimiento de sus responsables. Si identificamos tal recopilación, eliminaremos los datos.",
            },
          ],
        },
        {
          heading: "12. Cambios en esta Política",
          body: [
            {
              p: "Podemos actualizar esta Política de vez en cuando. Cuando eso ocurra, revisaremos la fecha de “última actualización” en la parte superior de esta página y, cuando corresponda, te notificaremos por medios adecuados.",
            },
          ],
        },
        {
          heading: "13. Contacto",
          body: [
            {
              p: "Las dudas, solicitudes o reclamaciones sobre privacidad pueden enviarse a [{email}](mailto:{email}). También puedes leer nuestros [Términos de Uso](/terms).",
            },
          ],
        },
      ],
    },
  },
};

export default es;
