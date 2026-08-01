import type { Dictionary } from "@/i18n/types";

const it: Dictionary = {
  meta: {
    keywords: [
      "Lumni",
      "sviluppo software",
      "software su misura",
      "sviluppo di applicazioni",
      "automazione dei processi",
      "integrazione di sistemi",
      "RPA",
      "consulenza tecnologica",
      "cybersecurity",
      "team di sviluppo dedicati",
    ],
  },
  og: {
    strip: "SISTEMI · AUTOMAZIONE · CONSULENZA · SICUREZZA",
  },
  company: {
    tagline: "Prompt engineering di cui la tua azienda può fidarsi.",
    description:
      "Lumni sviluppa sistemi, automatizza processi e integra ingegneri nel tuo team. Dalla prima diagnosi al codice in produzione.",
  },
  header: {
    navServices: "Servizi",
    navSystems: "Sistemi / Software",
    contactCta: "Contattaci",
    ariaHome: "Lumni, vai all'inizio",
    ariaMainNav: "Navigazione principale",
    ariaOpenMenu: "Apri il menu",
    ariaCloseMenu: "Chiudi il menu",
    ariaLanguage: "Seleziona la lingua",
  },
  hero: {
    ctaStart: "Avvia un progetto",
    ctaServices: "Vedi i servizi",
    capabilities: [
      "Sviluppo su misura",
      "Automazione dei processi",
      "Consulenza tecnica",
      "Cybersecurity",
      "Squad dedicati",
    ],
  },
  services: {
    label: "Servizi",
    title: "Cinque fronti, un solo impegno: software che sostiene il business.",
    description:
      "Operiamo dalla diagnosi all'operatività. Tu scegli il punto di ingresso, noi ci assumiamo la responsabilità tecnica end-to-end.",
    items: {
      desenvolvimento: {
        title: "Sviluppo di sistemi e applicazioni",
        headline: "Dal discovery al deploy, senza debito tecnico già dal primo sprint.",
        description:
          "Costruiamo prodotti digitali su misura: piattaforme web, app mobili e API che sostengono operazioni critiche. Architettura progettata per scalare, codice testato e delivery continua, con la stessa ingegneria da cui la tua operazione dipenderà il giorno dopo il lancio.",
        deliverables: [
          "Piattaforme web e portali interni",
          "App iOS e Android",
          "API, integrazioni e microservizi",
          "Architettura pronta a scalare",
        ],
      },
      automacao: {
        title: "Automazione dei processi",
        headline: "Restituiamo al tuo team le ore che il foglio di calcolo consuma.",
        description:
          "Mappiamo il flusso reale della tua operazione, non quello del manuale, ed eliminiamo il lavoro ripetitivo che consuma capacità produttiva. Integrazioni tra sistemi che non si parlano, routine pianificate e orchestrazione dei dati che riducono l'errore umano e rendono il processo verificabile da un capo all'altro.",
        deliverables: [
          "Mappatura e ridisegno dei processi",
          "Integrazione tra sistemi legacy",
          "Routine automatizzate e RPA",
          "Dashboard di monitoraggio in tempo reale",
        ],
      },
      consultoria: {
        title: "Consulenza tecnologica",
        headline: "Una diagnosi indipendente per decisioni che costano care se sbagliate.",
        description:
          "Valutiamo architettura, stack, sicurezza e costi dell'infrastruttura con uno sguardo esterno e senza agenda commerciale. Ricevi un piano di evoluzione con priorità basate sull'impatto sul business, non sulle mode del mercato, con costi e rischi di ogni strada resi espliciti prima della decisione.",
        deliverables: [
          "Audit di architettura e codice",
          "Revisione di sicurezza e conformità",
          "Ottimizzazione dei costi cloud",
          "Roadmap tecnica con priorità",
        ],
      },
      ciberseguranca: {
        title: "Cybersecurity",
        headline: "Troviamo le falle prima che trovino te.",
        description:
          "Proteggiamo ciò che il tuo business non può perdere: dati, disponibilità e reputazione. Mappiamo la superficie d'attacco, testiamo le difese in modo controllato e correggiamo alla radice, dal codice all'infrastruttura. Sicurezza come processo continuo, con monitoraggio e risposta agli incidenti, non come report chiuso in un cassetto.",
        deliverables: [
          "Audit di sicurezza e penetration test",
          "Hardening di applicazioni e infrastruttura",
          "Adeguamento LGPD e conformità",
          "Monitoraggio e risposta agli incidenti",
        ],
      },
      suporte: {
        title: "Supporto allo sviluppo",
        headline: "Ci innestiamo come un braccio della tua ingegneria.",
        description:
          "Ingegneri integrati nel tuo backlog, nelle tue cerimonie e nel tuo standard di codice, con consegne dalla prima settimana. Seniority reale e scala su richiesta, senza il costo fisso, la lentezza e il rischio di un processo di assunzione che può richiedere mesi per dare risultati.",
        deliverables: [
          "Squad dedicati e multidisciplinari",
          "Allocazione elastica, su richiesta",
          "Aderenza al tuo processo e stack",
          "Trasferimento continuo di conoscenza",
        ],
      },
    },
  },
  systems: {
    label: "Sistemi proprietari",
    title: "Realizziamo anche sistemi propri.",
    description:
      "Sono prodotti che Lumni sviluppa, gestisce ed evolve internamente fino a farli diventare piattaforma. Rafforzati dall'uso quotidiano e disponibili per chi vuole conoscerli.",
    items: {
      sirius: {
        name: "Sirius",
        headline: "Agente di IA sul tuo Windows.",
        description:
          "Sirius è l'agente di IA di Lumni per il tuo PC. Include tre modelli proprietari, Sirius 1, Sirius 2 e Sirius 3, scelti automaticamente in base al compito, più 940 strumenti MCP in 48 famiglie selezionati tramite embedding a ogni richiesta. Lavora direttamente sulla tua macchina: codice, modifica di file, terminale, git, database, documenti Office, immagini e PDF. Un'app nativa di Windows, con risposte in streaming, approvazione di ogni azione, skill, subagenti e memoria locale.",
        highlights: [
          "App nativa di Windows",
          "Modelli Sirius 1, 2 e 3",
          "940 strumenti MCP",
          "Selezione tramite embedding",
          "File, terminale e git",
          "Skill e subagenti",
          "Risposte in streaming",
          "Approvazione per azione",
        ],
        actionLabel: "Scopri Sirius",
        status: "In produzione",
      },
      disys: {
        name: "Disys",
        headline: "ERP per le risorse umane.",
        description:
          "Disys è l'ERP HR di Lumni per il reclutamento e le assunzioni. Collega aziende, posizioni, candidati e processi in un unico posto: anagrafiche di clienti e unità, annunci di lavoro con livelli e fasce salariali, una base ricercabile di talenti e curriculum, e una pipeline visiva con drag and drop per spostare i candidati tra le fasi. Invita il tuo team via e-mail con permessi per pagina e accedi solo con Google o LinkedIn, senza password da gestire.",
        highlights: [
          "Reclutamento e assunzioni",
          "Aziende e posizioni",
          "Base di candidati",
          "Pipeline con drag and drop",
          "Permessi per pagina",
          "Accesso con Google e LinkedIn",
          "Ricerca istantanea",
          "Senza password",
        ],
        actionLabel: "Scopri Disys",
        status: "In produzione",
      },
    },
  },
  contact: {
    label: "Contatti",
    title: "Parliamo del tuo prossimo passo tecnico.",
    description:
      "Raccontaci il problema, non la soluzione. La prima conversazione è una diagnosi, senza impegno e senza proposte generiche: se la strada giusta non passa da noi, te lo diremo.",
    panelTag: "canali_diretti",
    available: "Disponibile",
    channels: {
      email: "E-mail",
      whatsapp: "WhatsApp",
    },
  },
  footer: {
    servicesHeading: "Servizi",
    contactHeading: "Contatti",
    ariaLegalNav: "Pagine legali",
    privacy: "Privacy",
    terms: "Termini",
    backToTop: "Torna su",
    rights: "Tutti i diritti riservati.",
  },
  legal: {
    updatedAtLabel: "Ultimo aggiornamento:",
    updatedAt: "25 luglio 2026",
    backToSite: "Torna al sito",
    home: "Home",
    courtesyNote:
      "Questo documento è fornito in inglese per comodità. In caso di divergenze prevale la versione originale in portoghese.",
  },
};

export default it;
