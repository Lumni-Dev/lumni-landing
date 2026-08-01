import type { Dictionary } from "@/i18n/types";

const nl: Dictionary = {
  meta: {
    keywords: [
      "Lumni",
      "softwareontwikkeling",
      "maatwerksoftware",
      "app-ontwikkeling",
      "procesautomatisering",
      "systeemintegratie",
      "RPA",
      "technologieadvies",
      "cybersecurity",
      "toegewijde ontwikkelteams",
    ],
  },
  og: {
    strip: "SYSTEMEN · AUTOMATISERING · ADVIES · SECURITY",
  },
  company: {
    tagline: "Prompt engineering waar je bedrijf op kan vertrouwen.",
    description:
      "Lumni bouwt systemen, automatiseert processen en voegt engineers toe aan je team. Van de eerste diagnose tot code in productie.",
  },
  header: {
    navServices: "Diensten",
    navSystems: "Systemen / Software",
    contactCta: "Neem contact op",
    ariaHome: "Lumni, naar het begin",
    ariaMainNav: "Hoofdnavigatie",
    ariaOpenMenu: "Menu openen",
    ariaCloseMenu: "Menu sluiten",
    ariaLanguage: "Taal selecteren",
  },
  hero: {
    ctaStart: "Start een project",
    ctaServices: "Bekijk diensten",
    capabilities: [
      "Maatwerkontwikkeling",
      "Procesautomatisering",
      "Technisch advies",
      "Cybersecurity",
      "Toegewijde squads",
    ],
  },
  services: {
    label: "Diensten",
    title: "Vijf fronten, één belofte: software die het bedrijf draagt.",
    description:
      "We werken van diagnose tot operatie. Jij kiest het startpunt, wij nemen de technische verantwoordelijkheid van begin tot eind.",
    items: {
      desenvolvimento: {
        title: "Ontwikkeling van systemen en apps",
        headline: "Van discovery tot deploy, zonder technische schuld in de eerste sprint.",
        description:
          "We bouwen digitale producten op maat: webplatforms, mobiele apps en API's die kritieke operaties dragen. Architectuur ontworpen om te schalen, geteste code en continue levering, met dezelfde engineering waar je operatie de dag na de lancering op leunt.",
        deliverables: [
          "Webplatforms en interne portalen",
          "iOS- en Android-apps",
          "API's, integraties en microservices",
          "Architectuur klaar om te schalen",
        ],
      },
      automacao: {
        title: "Procesautomatisering",
        headline: "We geven je team de uren terug die de spreadsheet opslokt.",
        description:
          "We brengen de echte workflow van je operatie in kaart, niet die uit het handboek, en elimineren het repetitieve werk dat productiviteit wegzuigt. Integraties tussen systemen die niet met elkaar praten, geplande routines en data-orkestratie die menselijke fouten verminderen en het proces end-to-end controleerbaar maken.",
        deliverables: [
          "Processen in kaart brengen en herontwerpen",
          "Integratie tussen legacy-systemen",
          "Geautomatiseerde routines en RPA",
          "Realtime dashboards",
        ],
      },
      consultoria: {
        title: "Technologieadvies",
        headline: "Een onafhankelijke diagnose voor beslissingen die duur uitpakken als ze fout zijn.",
        description:
          "We beoordelen architectuur, stack, beveiliging en infrastructuurkosten met een externe blik en zonder ingebouwde commerciële agenda. Je krijgt een evolutieplan geprioriteerd op zakelijke impact, niet op markthypes, met de kosten en risico's van elk pad expliciet vóór de beslissing.",
        deliverables: [
          "Audit van architectuur en code",
          "Review van beveiliging en compliance",
          "Optimalisatie van cloudkosten",
          "Geprioriteerde technische roadmap",
        ],
      },
      ciberseguranca: {
        title: "Cybersecurity",
        headline: "Wij vinden de zwakke plekken voordat ze jou vinden.",
        description:
          "We beschermen wat je bedrijf niet kan verliezen: data, beschikbaarheid en reputatie. We brengen het aanvalsoppervlak in kaart, testen de verdediging gecontroleerd en lossen problemen bij de wortel op, van code tot infrastructuur. Beveiliging als continu proces, met monitoring en incidentrespons, niet als rapport in een la.",
        deliverables: [
          "Beveiligingsaudit en penetratietests",
          "Hardening van applicaties en infrastructuur",
          "LGPD-naleving en compliance",
          "Monitoring en incidentrespons",
        ],
      },
      suporte: {
        title: "Ontwikkelondersteuning",
        headline: "We haken aan als een verlengstuk van je engineering.",
        description:
          "Engineers die meedraaien in je backlog, je ceremonies en je codestandaard, en vanaf de eerste week leveren. Echte senioriteit en schaal op aanvraag, zonder de vaste kosten, traagheid en risico's van een wervingsproces dat maanden kan duren.",
        deliverables: [
          "Toegewijde, multidisciplinaire squads",
          "Elastische inzet op aanvraag",
          "Aansluiting op jouw proces en stack",
          "Continue kennisoverdracht",
        ],
      },
    },
  },
  systems: {
    label: "Eigen systemen",
    title: "We bouwen ook eigen systemen.",
    description:
      "Dit zijn producten die Lumni intern ontwikkelt, beheert en verder uitbouwt tot een platform. Gehard door dagelijks gebruik en beschikbaar voor wie ze wil leren kennen.",
    items: {
      sirius: {
        name: "Sirius",
        headline: "Een AI-agent op jouw Windows.",
        description:
          "Sirius is de AI-agent van Lumni voor jouw pc. Hij bevat drie eigen modellen, Sirius 1, Sirius 2 en Sirius 3, die automatisch per taak worden gekozen, plus 940 MCP-tools in 48 families die per verzoek via embeddings worden geselecteerd. Hij werkt direct op jouw machine: code, bestanden bewerken, terminal, git, databases, Office-documenten, afbeeldingen en PDF's. Een native Windows-app, met streaming-antwoorden, goedkeuring van elke actie, skills, subagents en lokaal geheugen.",
        highlights: [
          "Native Windows-app",
          "Modellen Sirius 1, 2 en 3",
          "940 MCP-tools",
          "Selectie via embeddings",
          "Bestanden, terminal en git",
          "Skills en subagents",
          "Streaming-antwoorden",
          "Goedkeuring per actie",
        ],
        actionLabel: "Ontmoet Sirius",
        status: "In productie",
      },
      disys: {
        name: "Disys",
        headline: "ERP voor human resources.",
        description:
          "Disys is de HR-ERP van Lumni voor werving en selectie. Het verbindt bedrijven, vacatures, kandidaten en processen op één plek: klant- en vestigingsgegevens, vacatures met niveaus en salarisschalen, een doorzoekbare basis van talent en cv's, en een visuele drag-and-drop-pijplijn om kandidaten tussen fases te verplaatsen. Nodig je team uit via e-mail met rechten per pagina en log alleen in met Google of LinkedIn, zonder wachtwoorden om te beheren.",
        highlights: [
          "Werving en selectie",
          "Bedrijven en vacatures",
          "Kandidatenbasis",
          "Drag-and-drop-pijplijn",
          "Rechten per pagina",
          "Inloggen met Google en LinkedIn",
          "Directe zoekfunctie",
          "Geen wachtwoorden",
        ],
        actionLabel: "Ontdek Disys",
        status: "In productie",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Laten we praten over je volgende technische stap.",
    description:
      "Vertel ons het probleem, niet de oplossing. Het eerste gesprek is een diagnose, vrijblijvend en zonder generiek voorstel: als de juiste weg niet via ons loopt, zeggen we dat ook.",
    panelTag: "directe_kanalen",
    available: "Beschikbaar",
    channels: {
      email: "E-mail",
      whatsapp: "WhatsApp",
    },
  },
  footer: {
    servicesHeading: "Diensten",
    contactHeading: "Contact",
    ariaLegalNav: "Juridische pagina's",
    privacy: "Privacy",
    terms: "Voorwaarden",
    backToTop: "Terug naar boven",
    rights: "Alle rechten voorbehouden.",
  },
  legal: {
    updatedAtLabel: "Laatst bijgewerkt:",
    updatedAt: "25 juli 2026",
    backToSite: "Terug naar de site",
    home: "Home",
    courtesyNote:
      "Dit document wordt voor het gemak in het Engels aangeboden. Bij tegenstrijdigheden prevaleert de oorspronkelijke Portugese versie.",
  },
};

export default nl;
