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
    tagline: "Ingegneria del software di cui la tua azienda può fidarsi.",
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
          "Sirius è l'agente di IA di Lumni per il tuo PC. Include tre modelli proprietari, Sirius A, Sirius B e Sirius X, scelti automaticamente in base al compito, più 940 strumenti MCP in 48 famiglie selezionati tramite embedding a ogni richiesta. Lavora direttamente sulla tua macchina: codice, modifica di file, terminale, git, database, documenti Office, immagini e PDF. Un'app nativa di Windows, con risposte in streaming, approvazione di ogni azione, skill, subagenti e memoria locale.",
        highlights: [
          "App nativa di Windows",
          "Modelli Sirius A, B e X",
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
      nipuz: {
        name: "Nipuz",
        headline: "Più browser in una sola finestra.",
        description:
          "Nipuz è il browser multi-account di Lumni. Esegue più account isolati affiancati in una sola finestra, ogni browser con il proprio accesso, cookie e cache e con un proprio processo, così se uno si blocca gli altri continuano. Organizza tutto in spazi di lavoro, controlla CPU e RAM di ogni pannello in tempo reale e gestisci muto, zoom e modalità in incognito per browser. Blocco pubblicità integrato, scorciatoie da tastiera e accesso con Google. App nativa per Windows.",
        highlights: [
          "App nativa per Windows",
          "Sessioni totalmente isolate",
          "Spazi di lavoro",
          "Griglia di pannelli",
          "CPU e RAM per pannello",
          "Blocco pubblicità",
          "Modalità in incognito",
          "Accesso con Google",
        ],
        actionLabel: "Scopri Nipuz",
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
      "Questo documento è una traduzione fornita per tua comodità. In caso di qualsiasi discrepanza, prevale la versione in portoghese.",
    terms: {
      metaTitle: "Termini di utilizzo",
      metaDescription:
        "Le regole per l'utilizzo dei siti e dei sistemi di Lumni, incluso l'accesso tramite login social.",
      title: "Termini di utilizzo",
      intro:
        "Questi Termini disciplinano l'utilizzo del sito e dei prodotti offerti da {legalName} ({name}). Accedendo o utilizzando i nostri servizi, accetti questi Termini.",
      sections: [
        {
          heading: "1. Accettazione dei Termini",
          body: [
            {
              p: "Creando un account, effettuando l'accesso o utilizzando qualsiasi funzionalità dei nostri servizi, dichiari di aver letto, compreso e accettato questi Termini e la nostra [Informativa sulla privacy](/privacy). Se non sei d'accordo, non utilizzare i servizi.",
            },
          ],
        },
        {
          heading: "2. Descrizione del servizio",
          body: [
            {
              p: "{name} sviluppa e mette a disposizione diversi sistemi e prodotti software, ciascuno con le proprie funzionalità, e questi Termini si applicano a tutti loro. Le funzionalità possono evolvere, essere aggiunte o essere dismesse nel tempo.",
            },
          ],
        },
        {
          heading: "3. Account e accesso",
          body: [
            {
              p: "L'accesso a ciascun sistema può essere fornito tramite login social, utilizzando provider come Google, GitHub o LinkedIn, secondo la disponibilità nel prodotto. Sei responsabile del mantenimento della sicurezza dell'account utilizzato per autenticarti e di tutte le attività svolte tramite esso. Avvisaci immediatamente in caso di utilizzo non autorizzato.",
            },
          ],
        },
        {
          heading: "4. Uso accettabile",
          body: [
            { p: "Utilizzando i servizi, ti impegni a non:" },
            {
              list: [
                "Violare leggi, diritti di terzi o questi Termini;",
                "Tentare di accedere ad aree, account o dati senza autorizzazione;",
                "Interferire con, sovraccaricare o compromettere la sicurezza e l'integrità del servizio;",
                "Utilizzare il servizio per distribuire contenuti illeciti, dannosi o ingannevoli;",
                "Effettuare reverse engineering, copiare o sfruttare il servizio oltre quanto consentito dalla legge.",
              ],
            },
          ],
        },
        {
          heading: "5. Proprietà intellettuale",
          body: [
            {
              p: "Il sito, il marchio, il software e i materiali messi a disposizione appartengono a {legalName} o ai suoi licenzianti e sono protetti dalla legge. Questi Termini non trasferiscono a te alcun diritto di proprietà intellettuale, ad eccezione della licenza limitata di utilizzo del servizio.",
            },
          ],
        },
        {
          heading: "6. Contenuti dell'utente",
          body: [
            {
              p: "Conservi i diritti sui contenuti che crei nel servizio. Per far funzionare le sue funzionalità (come memorizzare, sincronizzare e mostrare i tuoi dati a te), ci concedi una licenza limitata strettamente necessaria a tale scopo. Sei responsabile dei contenuti che invii e dichiari di detenere i diritti per farlo.",
            },
          ],
        },
        {
          heading: "7. Esclusioni di garanzia e limitazione di responsabilità",
          body: [
            {
              p: "Il servizio è fornito “così com'è”, senza alcuna garanzia che sia ininterrotto o privo di errori. Nella misura massima consentita dalla legge, {name} non è responsabile per danni indiretti o incidentali o per mancato guadagno derivanti dall'utilizzo o dall'impossibilità di utilizzo del servizio.",
            },
          ],
        },
        {
          heading: "8. Sospensione e cessazione",
          body: [
            {
              p: "Possiamo sospendere o revocare l'accesso in caso di violazione di questi Termini o di rischio per la sicurezza del servizio. Puoi smettere di utilizzare il servizio in qualsiasi momento. Una volta chiuso l'account, il trattamento dei tuoi dati segue la nostra Informativa sulla privacy.",
            },
          ],
        },
        {
          heading: "9. Modifiche",
          body: [
            {
              p: "Possiamo aggiornare questi Termini di tanto in tanto. La data di “ultimo aggiornamento” in alto indica la versione corrente. L'uso continuato dopo le modifiche comporta l'accettazione dei Termini rivisti.",
            },
          ],
        },
        {
          heading: "10. Legge applicabile e foro competente",
          body: [
            {
              p: "Questi Termini sono disciplinati dalle leggi della Repubblica Federativa del Brasile. Per la risoluzione di eventuali controversie si eleggono i tribunali del domicilio dell'utente, dove si applica la normativa sui consumatori.",
            },
          ],
        },
        {
          heading: "11. Contatto",
          body: [
            {
              p: "Se hai domande su questi Termini, contattaci all'indirizzo [{email}](mailto:{email}).",
            },
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Informativa sulla privacy",
      metaDescription:
        "Come Lumni raccoglie, utilizza e protegge i tuoi dati personali nei suoi siti e sistemi, incluso il login social.",
      title: "Informativa sulla privacy",
      intro:
        "Questa Informativa spiega come {legalName} ({name}) tratta i tuoi dati personali quando utilizzi il nostro sito e i nostri prodotti, in conformità con la Legge Generale sulla Protezione dei Dati brasiliana (Lei no 13.709/2018, LGPD).",
      sections: [
        {
          heading: "1. Chi controlla i tuoi dati",
          body: [
            {
              p: "Il titolare del trattamento dei tuoi dati personali è {legalName}, iscritta al CNPJ no {taxId}. Per qualsiasi questione relativa alla privacy e alla protezione dei dati, contattaci all'indirizzo [{email}](mailto:{email}).",
            },
          ],
        },
        {
          heading: "2. Quali dati raccogliamo",
          body: [
            { p: "Raccogliamo solo ciò che è necessario per autenticarti e fornire il servizio:" },
            {
              list: [
                "**Dati dell'account (login social).** Quando accedi tramite login social, utilizzando provider come Google, GitHub o LinkedIn, riceviamo dal provider i dati di base che autorizzi: nome, indirizzo e-mail (e se è verificato), immagine del profilo e un identificativo univoco del tuo account presso il provider.",
                "**Contenuti che crei.** Informazioni che registri o invii utilizzando ciascun sistema, secondo le funzionalità del prodotto (per esempio: anagrafiche, testo, file, preferenze e impostazioni).",
                "**Dati tecnici essenziali.** Le informazioni minime necessarie al funzionamento e alla sicurezza, come i log di accesso e gli identificativi di sessione.",
              ],
            },
            {
              p: "Non richiediamo né memorizziamo la tua password presso i provider di login: l'autenticazione avviene nell'ambiente sicuro di ciascun provider.",
            },
          ],
        },
        {
          heading: "3. Come e perché utilizziamo i tuoi dati",
          body: [
            { p: "Utilizziamo i tuoi dati per le seguenti finalità:" },
            {
              list: [
                "Autenticare il tuo accesso e mantenerti connesso in modo sicuro;",
                "Identificare e collegare il tuo account tramite l'e-mail verificata, in modo che tu ritrovi i tuoi dati quando accedi con qualsiasi provider;",
                "Fornire, mantenere e migliorare le funzionalità del prodotto;",
                "Prevenire frodi e abusi e garantire la sicurezza del servizio;",
                "Adempiere agli obblighi legali e normativi.",
              ],
            },
          ],
        },
        {
          heading: "4. Base giuridica del trattamento",
          body: [
            {
              p: "Trattiamo i tuoi dati sulla base delle basi giuridiche della LGPD, in particolare: l'esecuzione di un contratto e le procedure preliminari su tua richiesta (art. 7, V); il tuo consenso quando utilizzi il login social (art. 7, I); l'adempimento di obblighi legali (art. 7, II); e il legittimo interesse alla sicurezza e alla prevenzione delle frodi (art. 7, IX).",
            },
          ],
        },
        {
          heading: "5. Login social",
          body: [
            {
              p: "Quando scegli di accedere con un provider di login social, vieni indirizzato alla sua schermata ufficiale e decidi se autorizzare la condivisione dei dati di base del tuo profilo. Riceviamo solo tali informazioni e **non** pubblichiamo nulla, non inviamo messaggi né accediamo a contenuti oltre al profilo di base e all'e-mail. Puoi revocare questo accesso in qualsiasi momento nelle impostazioni di sicurezza del rispettivo provider.",
            },
          ],
        },
        {
          heading: "6. Condivisione dei dati",
          body: [
            {
              p: "Non vendiamo i tuoi dati personali. Possiamo condividerli solo con responsabili del trattamento che ci aiutano a fornire il servizio e sono tenuti a proteggerli, come i provider di hosting e di database e i provider di identità utilizzati per l'accesso. Possiamo inoltre divulgare i dati quando richiesto dalla legge o da un'ordinanza di un'autorità competente.",
            },
          ],
        },
        {
          heading: "7. Conservazione e sicurezza",
          body: [
            {
              p: "Adottiamo misure tecniche e organizzative per proteggere i tuoi dati da accessi non autorizzati, perdita o alterazione. Le credenziali sensibili del sistema sono limitate al server e non sono mai esposte all'applicazione client, e le comunicazioni con i nostri servizi sono protette durante il trasferimento.",
            },
          ],
        },
        {
          heading: "8. Per quanto tempo conserviamo i tuoi dati",
          body: [
            {
              p: "Conserviamo i tuoi dati per tutto il tempo in cui esiste il tuo account o per quanto necessario alle finalità di questa Informativa. Una volta chiuso l'account, i dati vengono eliminati o anonimizzati, salvo i casi in cui la legge ne imponga la conservazione per un periodo specifico.",
            },
          ],
        },
        {
          heading: "9. I tuoi diritti",
          body: [
            { p: "Ai sensi dell'art. 18 della LGPD, puoi richiedere in qualsiasi momento:" },
            {
              list: [
                "La conferma dell'esistenza del trattamento e l'accesso ai tuoi dati;",
                "La correzione di dati incompleti, inesatti o non aggiornati;",
                "L'anonimizzazione, il blocco o l'eliminazione di dati non necessari o trattati in modo non conforme;",
                "La portabilità dei tuoi dati;",
                "L'eliminazione dei dati trattati sulla base del consenso;",
                "Informazioni sulle parti con cui condividiamo i tuoi dati;",
                "La revoca del consenso.",
              ],
            },
            { p: "Per esercitare i tuoi diritti, scrivi a [{email}](mailto:{email})." },
          ],
        },
        {
          heading: "10. Cookie",
          body: [
            {
              p: "Utilizziamo solo i cookie e le tecnologie equivalenti strettamente necessari al funzionamento e alla sicurezza del servizio. Non utilizziamo cookie pubblicitari di terzi.",
            },
          ],
        },
        {
          heading: "11. Bambini e adolescenti",
          body: [
            {
              p: "Il servizio non è rivolto a persone di età inferiore ai 18 anni e non raccogliamo consapevolmente dati di minori senza il consenso dei loro tutori. Se rileviamo tale raccolta, elimineremo i dati.",
            },
          ],
        },
        {
          heading: "12. Modifiche a questa Informativa",
          body: [
            {
              p: "Possiamo aggiornare questa Informativa di tanto in tanto. Quando ciò accade, rivedremo la data di “ultimo aggiornamento” in cima a questa pagina e, ove opportuno, ti avviseremo tramite mezzi adeguati.",
            },
          ],
        },
        {
          heading: "13. Contatto",
          body: [
            {
              p: "Domande, richieste o reclami sulla privacy possono essere inviati a [{email}](mailto:{email}). Puoi anche leggere i nostri [Termini di utilizzo](/terms).",
            },
          ],
        },
      ],
    },
  },
};

export default it;
