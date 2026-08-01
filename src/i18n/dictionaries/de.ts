import type { Dictionary } from "@/i18n/types";

const de: Dictionary = {
  meta: {
    keywords: [
      "Lumni",
      "Softwareentwicklung",
      "individuelle Software",
      "App-Entwicklung",
      "Prozessautomatisierung",
      "Systemintegration",
      "RPA",
      "Technologieberatung",
      "Cybersicherheit",
      "dedizierte Entwicklungsteams",
    ],
  },
  og: {
    strip: "SYSTEME · AUTOMATISIERUNG · BERATUNG · SICHERHEIT",
  },
  company: {
    tagline: "Prompt-Engineering, dem Ihr Unternehmen vertrauen kann.",
    description:
      "Lumni entwickelt Systeme, automatisiert Prozesse und integriert Ingenieure in Ihr Team. Von der ersten Diagnose bis zum Code im Produktivbetrieb.",
  },
  header: {
    navServices: "Leistungen",
    navSystems: "Systeme / Software",
    contactCta: "Kontakt aufnehmen",
    ariaHome: "Lumni, zum Anfang",
    ariaMainNav: "Hauptnavigation",
    ariaOpenMenu: "Menü öffnen",
    ariaCloseMenu: "Menü schließen",
    ariaLanguage: "Sprache auswählen",
  },
  hero: {
    ctaStart: "Projekt starten",
    ctaServices: "Leistungen ansehen",
    capabilities: [
      "Maßgeschneiderte Entwicklung",
      "Prozessautomatisierung",
      "Technische Beratung",
      "Cybersicherheit",
      "Dedizierte Squads",
    ],
  },
  services: {
    label: "Leistungen",
    title: "Fünf Felder, ein Versprechen: Software, die das Geschäft trägt.",
    description:
      "Wir begleiten Sie von der Diagnose bis zum Betrieb. Sie wählen den Einstiegspunkt, wir übernehmen die technische Verantwortung von Anfang bis Ende.",
    items: {
      desenvolvimento: {
        title: "Entwicklung von Systemen und Apps",
        headline: "Vom Discovery bis zum Deployment, ohne technische Schulden im ersten Sprint.",
        description:
          "Wir bauen maßgeschneiderte digitale Produkte: Webplattformen, mobile Apps und APIs, die kritische Abläufe tragen. Auf Skalierung ausgelegte Architektur, getesteter Code und Continuous Delivery, mit derselben Ingenieursqualität, auf die sich Ihr Betrieb ab dem Tag nach dem Launch verlässt.",
        deliverables: [
          "Webplattformen und interne Portale",
          "iOS- und Android-Apps",
          "APIs, Integrationen und Microservices",
          "Architektur, die skaliert",
        ],
      },
      automacao: {
        title: "Prozessautomatisierung",
        headline: "Wir geben Ihrem Team die Stunden zurück, die die Tabelle verschlingt.",
        description:
          "Wir erfassen den realen Ablauf Ihrer Operation, nicht den im Handbuch, und beseitigen die repetitive Arbeit, die produktive Kapazität bindet. Integrationen zwischen Systemen, die nicht miteinander sprechen, geplante Routinen und Datenorchestrierung, die menschliche Fehler reduzieren und den Prozess durchgängig auditierbar machen.",
        deliverables: [
          "Prozessaufnahme und -redesign",
          "Integration von Altsystemen",
          "Automatisierte Routinen und RPA",
          "Dashboards in Echtzeit",
        ],
      },
      consultoria: {
        title: "Technologieberatung",
        headline: "Unabhängige Diagnose für Entscheidungen, deren Fehler teuer wären.",
        description:
          "Wir bewerten Architektur, Stack, Sicherheit und Infrastrukturkosten mit externem Blick und ohne eingebaute kommerzielle Agenda. Sie erhalten einen Entwicklungsplan, priorisiert nach Geschäftswirkung statt nach Markttrends, mit den Kosten und Risiken jedes Wegs, bevor entschieden wird.",
        deliverables: [
          "Architektur- und Code-Audit",
          "Sicherheits- und Compliance-Review",
          "Cloud-Kostenoptimierung",
          "Priorisierte technische Roadmap",
        ],
      },
      ciberseguranca: {
        title: "Cybersicherheit",
        headline: "Wir finden die Schwachstellen, bevor sie Sie finden.",
        description:
          "Wir schützen, was Ihr Unternehmen nicht verlieren darf: Daten, Verfügbarkeit und Reputation. Wir kartieren die Angriffsfläche, testen die Abwehr kontrolliert und beheben Probleme an der Wurzel, vom Code bis zur Infrastruktur. Sicherheit als kontinuierlicher Prozess mit Monitoring und Incident Response, nicht als Bericht in der Schublade.",
        deliverables: [
          "Sicherheitsaudit und Penetrationstests",
          "Härtung von Anwendungen und Infrastruktur",
          "Datenschutz-Compliance (LGPD)",
          "Monitoring und Incident Response",
        ],
      },
      suporte: {
        title: "Entwicklungsunterstützung",
        headline: "Wir docken an wie ein Teil Ihrer Engineering-Organisation.",
        description:
          "Ingenieure, eingebunden in Ihr Backlog, Ihre Zeremonien und Ihre Code-Standards, mit Lieferungen ab der ersten Woche. Echte Seniorität und Skalierung nach Bedarf, ohne die Fixkosten, die Trägheit und das Risiko eines Einstellungsprozesses, der Monate dauern kann.",
        deliverables: [
          "Dedizierte, multidisziplinäre Squads",
          "Elastische Allokation nach Bedarf",
          "Anpassung an Prozess und Stack",
          "Kontinuierlicher Wissenstransfer",
        ],
      },
    },
  },
  systems: {
    label: "Proprietäre Systeme",
    title: "Wir bauen auch eigene Systeme.",
    description:
      "Das sind Produkte, die Lumni intern entwickelt, betreibt und weiterentwickelt, bis sie zur Plattform werden. Gehärtet durch den täglichen Einsatz und verfügbar für alle, die sie kennenlernen wollen.",
    items: {
      sirius: {
        name: "Sirius",
        headline: "Ein KI-Agent auf Ihrem Windows.",
        description:
          "Sirius ist der KI-Agent von Lumni für Ihren PC. Er bringt drei eigene Modelle mit, Sirius 1, Sirius 2 und Sirius 3, die je nach Aufgabe automatisch gewählt werden, plus 940 MCP-Tools in 48 Familien, die pro Anfrage per Embeddings ausgewählt werden. Er arbeitet direkt auf Ihrer Maschine: Code, Dateien bearbeiten, Terminal, git, Datenbanken, Office-Dokumente, Bilder und PDFs. Eine native Windows-App mit Streaming-Antworten, Freigabe jeder Aktion, Skills, Subagenten und lokalem Speicher.",
        highlights: [
          "Native Windows-App",
          "Modelle Sirius 1, 2 und 3",
          "940 MCP-Tools",
          "Auswahl per Embeddings",
          "Dateien, Terminal und git",
          "Skills und Subagenten",
          "Streaming-Antworten",
          "Freigabe pro Aktion",
        ],
        actionLabel: "Sirius entdecken",
        status: "In Produktion",
      },
      disys: {
        name: "Disys",
        headline: "ERP für das Personalwesen.",
        description:
          "Disys ist das HR-ERP von Lumni für Recruiting und Einstellung. Es verbindet Unternehmen, Stellen, Kandidaten und Prozesse an einem Ort: Kunden- und Standortdaten, Stellenausschreibungen mit Leveln und Gehaltsspannen, eine durchsuchbare Basis aus Talenten und Lebensläufen sowie eine visuelle Drag-and-drop-Pipeline, um Kandidaten zwischen den Phasen zu bewegen. Laden Sie Ihr Team per E-Mail mit Berechtigungen pro Seite ein und melden Sie sich ausschließlich mit Google oder LinkedIn an, ganz ohne Passwörter zu verwalten.",
        highlights: [
          "Recruiting und Einstellung",
          "Unternehmen und Stellen",
          "Kandidatenbasis",
          "Drag-and-drop-Pipeline",
          "Berechtigungen pro Seite",
          "Login mit Google und LinkedIn",
          "Sofortsuche",
          "Ohne Passwörter",
        ],
        actionLabel: "Disys entdecken",
        status: "In Produktion",
      },
    },
  },
  contact: {
    label: "Kontakt",
    title: "Sprechen wir über Ihren nächsten technischen Schritt.",
    description:
      "Beschreiben Sie das Problem, nicht die Lösung. Das erste Gespräch ist eine Diagnose, unverbindlich und ohne Standardangebot: Führt der richtige Weg nicht über uns, sagen wir Ihnen auch das.",
    panelTag: "direkte_kanaele",
    available: "Verfügbar",
    channels: {
      email: "E-Mail",
      whatsapp: "WhatsApp",
    },
  },
  footer: {
    servicesHeading: "Leistungen",
    contactHeading: "Kontakt",
    ariaLegalNav: "Rechtliches",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    backToTop: "Nach oben",
    rights: "Alle Rechte vorbehalten.",
  },
  legal: {
    updatedAtLabel: "Zuletzt aktualisiert:",
    updatedAt: "25. Juli 2026",
    backToSite: "Zurück zur Website",
    home: "Startseite",
    courtesyNote:
      "Dieses Dokument wird der Einfachheit halber auf Englisch bereitgestellt. Im Zweifelsfall ist die portugiesische Originalfassung maßgeblich.",
  },
};

export default de;
