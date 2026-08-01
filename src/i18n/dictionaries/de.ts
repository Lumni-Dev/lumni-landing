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
      "Dieses Dokument ist eine zu Ihrer Bequemlichkeit bereitgestellte Übersetzung. Bei etwaigen Abweichungen ist die portugiesische Fassung maßgeblich.",
    terms: {
      metaTitle: "Nutzungsbedingungen",
      metaDescription:
        "Die Regeln für die Nutzung der Websites und Systeme von Lumni, einschließlich des Zugangs per Social Login.",
      title: "Nutzungsbedingungen",
      intro:
        "Diese Bedingungen regeln die Nutzung der Website und der Produkte, die von {legalName} ({name}) angeboten werden. Durch den Zugriff auf unsere Dienste oder deren Nutzung erklären Sie sich mit diesen Bedingungen einverstanden.",
      sections: [
        {
          heading: "1. Annahme der Bedingungen",
          body: [
            {
              p: "Indem Sie ein Konto erstellen, sich anmelden oder eine beliebige Funktion unserer Dienste nutzen, erklären Sie, dass Sie diese Bedingungen und unsere [Datenschutzerklärung](/privacy) gelesen, verstanden und akzeptiert haben. Wenn Sie nicht einverstanden sind, nutzen Sie die Dienste nicht.",
            },
          ],
        },
        {
          heading: "2. Beschreibung des Dienstes",
          body: [
            {
              p: "{name} entwickelt und stellt verschiedene Systeme und Softwareprodukte bereit, jedes mit eigenen Funktionen, und diese Bedingungen gelten für sie alle. Funktionen können sich im Laufe der Zeit weiterentwickeln, hinzugefügt oder eingestellt werden.",
            },
          ],
        },
        {
          heading: "3. Konto und Zugang",
          body: [
            {
              p: "Der Zugang zu jedem System kann über Social Login erfolgen, mit Anbietern wie Google, GitHub oder LinkedIn, soweit im Produkt verfügbar. Sie sind dafür verantwortlich, das zur Authentifizierung verwendete Konto sicher zu halten, und für alle darüber ausgeführten Aktivitäten. Benachrichtigen Sie uns unverzüglich im Falle einer unbefugten Nutzung.",
            },
          ],
        },
        {
          heading: "4. Zulässige Nutzung",
          body: [
            { p: "Durch die Nutzung der Dienste verpflichten Sie sich, Folgendes zu unterlassen:" },
            {
              list: [
                "Gesetze, Rechte Dritter oder diese Bedingungen zu verletzen;",
                "Zu versuchen, ohne Berechtigung auf Bereiche, Konten oder Daten zuzugreifen;",
                "Die Sicherheit und Integrität des Dienstes zu stören, zu überlasten oder zu beeinträchtigen;",
                "Den Dienst zu nutzen, um rechtswidrige, schädliche oder irreführende Inhalte zu verbreiten;",
                "Den Dienst über das gesetzlich Erlaubte hinaus zurückzuentwickeln, zu kopieren oder auszunutzen.",
              ],
            },
          ],
        },
        {
          heading: "5. Geistiges Eigentum",
          body: [
            {
              p: "Die Website, die Marke, die Software und die bereitgestellten Materialien gehören {legalName} oder ihren Lizenzgebern und sind gesetzlich geschützt. Diese Bedingungen übertragen Ihnen keinerlei Rechte des geistigen Eigentums, mit Ausnahme der begrenzten Lizenz zur Nutzung des Dienstes.",
            },
          ],
        },
        {
          heading: "6. Nutzerinhalte",
          body: [
            {
              p: "Sie behalten die Rechte an den Inhalten, die Sie im Dienst erstellen. Um dessen Funktionen zu betreiben (etwa das Speichern, Synchronisieren und Anzeigen Ihrer Daten für Sie), gewähren Sie uns eine begrenzte, für diesen Zweck streng erforderliche Lizenz. Sie sind für die von Ihnen übermittelten Inhalte verantwortlich und erklären, dass Sie die Rechte dazu besitzen.",
            },
          ],
        },
        {
          heading: "7. Haftungsausschluss und Haftungsbeschränkung",
          body: [
            {
              p: "Der Dienst wird „wie besehen“ bereitgestellt, ohne Gewähr, dass er ununterbrochen oder fehlerfrei ist. Im maximal gesetzlich zulässigen Umfang haftet {name} nicht für indirekte oder beiläufige Schäden oder entgangenen Gewinn, die aus der Nutzung des Dienstes oder der Unmöglichkeit seiner Nutzung entstehen.",
            },
          ],
        },
        {
          heading: "8. Sperrung und Beendigung",
          body: [
            {
              p: "Wir können den Zugang bei Verstößen gegen diese Bedingungen oder bei Gefahr für die Sicherheit des Dienstes sperren oder beenden. Sie können die Nutzung des Dienstes jederzeit einstellen. Nach Schließung des Kontos richtet sich die Verarbeitung Ihrer Daten nach unserer Datenschutzerklärung.",
            },
          ],
        },
        {
          heading: "9. Änderungen",
          body: [
            {
              p: "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Das Datum „zuletzt aktualisiert“ oben gibt die aktuelle Fassung an. Die fortgesetzte Nutzung nach Änderungen gilt als Annahme der überarbeiteten Bedingungen.",
            },
          ],
        },
        {
          heading: "10. Anwendbares Recht und Gerichtsstand",
          body: [
            {
              p: "Diese Bedingungen unterliegen dem Recht der Föderativen Republik Brasilien. Als Gerichtsstand zur Beilegung etwaiger Streitigkeiten werden die Gerichte am Wohnsitz des Nutzers gewählt, an denen das Verbraucherrecht Anwendung findet.",
            },
          ],
        },
        {
          heading: "11. Kontakt",
          body: [
            {
              p: "Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns unter [{email}](mailto:{email}).",
            },
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Datenschutzerklärung",
      metaDescription:
        "Wie Lumni Ihre personenbezogenen Daten auf seinen Websites und Systemen erhebt, verwendet und schützt, einschließlich Social Login.",
      title: "Datenschutzerklärung",
      intro:
        "Diese Erklärung beschreibt, wie {legalName} ({name}) Ihre personenbezogenen Daten verarbeitet, wenn Sie unsere Website und Produkte nutzen, in Übereinstimmung mit dem brasilianischen allgemeinen Datenschutzgesetz (Lei no 13.709/2018, LGPD).",
      sections: [
        {
          heading: "1. Wer Ihre Daten kontrolliert",
          body: [
            {
              p: "Verantwortlicher für Ihre personenbezogenen Daten ist {legalName}, eingetragen unter der CNPJ-Nummer {taxId}. Für jede Angelegenheit im Zusammenhang mit Datenschutz und Datensicherheit kontaktieren Sie uns unter [{email}](mailto:{email}).",
            },
          ],
        },
        {
          heading: "2. Welche Daten wir erheben",
          body: [
            { p: "Wir erheben nur das, was notwendig ist, um Sie zu authentifizieren und den Dienst bereitzustellen:" },
            {
              list: [
                "**Kontodaten (Social Login).** Wenn Sie sich per Social Login anmelden, mit Anbietern wie Google, GitHub oder LinkedIn, erhalten wir vom Anbieter die von Ihnen freigegebenen Basisdaten: Name, E-Mail-Adresse (und ob sie verifiziert ist), Profilbild und eine eindeutige Kennung Ihres Kontos beim Anbieter.",
                "**Von Ihnen erstellte Inhalte.** Informationen, die Sie bei der Nutzung jedes Systems erfassen oder übermitteln, entsprechend den Funktionen des Produkts (zum Beispiel: Datensätze, Text, Dateien, Präferenzen und Einstellungen).",
                "**Wesentliche technische Daten.** Die für Betrieb und Sicherheit erforderlichen Mindestinformationen, wie Zugriffsprotokolle und Sitzungskennungen.",
              ],
            },
            {
              p: "Wir fordern oder speichern Ihr Passwort bei den Login-Anbietern nicht an: Die Authentifizierung findet in der sicheren Umgebung des jeweiligen Anbieters statt.",
            },
          ],
        },
        {
          heading: "3. Wie und warum wir Ihre Daten verwenden",
          body: [
            { p: "Wir verwenden Ihre Daten für folgende Zwecke:" },
            {
              list: [
                "Um Ihren Zugang zu authentifizieren und Sie sicher angemeldet zu halten;",
                "Um Ihr Konto über die verifizierte E-Mail zu identifizieren und zu verknüpfen, damit Sie Ihre Daten wiederfinden, wenn Sie sich mit einem beliebigen Anbieter anmelden;",
                "Um die Funktionen des Produkts bereitzustellen, zu warten und zu verbessern;",
                "Um Betrug und Missbrauch zu verhindern und die Sicherheit des Dienstes zu gewährleisten;",
                "Um gesetzliche und regulatorische Pflichten zu erfüllen.",
              ],
            },
          ],
        },
        {
          heading: "4. Rechtsgrundlage der Verarbeitung",
          body: [
            {
              p: "Wir verarbeiten Ihre Daten auf Grundlage der Rechtsgrundlagen der LGPD, insbesondere: der Erfüllung eines Vertrags und vorvertraglicher Maßnahmen auf Ihre Anfrage (art. 7, V); Ihrer Einwilligung bei der Nutzung von Social Login (art. 7, I); der Erfüllung gesetzlicher Pflichten (art. 7, II); und des berechtigten Interesses an Sicherheit und Betrugsprävention (art. 7, IX).",
            },
          ],
        },
        {
          heading: "5. Social Login",
          body: [
            {
              p: "Wenn Sie sich für die Anmeldung mit einem Social-Login-Anbieter entscheiden, werden Sie zu dessen offizieller Anmeldeseite geleitet und entscheiden, ob Sie die Weitergabe Ihrer grundlegenden Profildaten autorisieren. Wir erhalten nur diese Informationen und veröffentlichen **nichts**, versenden keine Nachrichten und greifen nicht auf Inhalte über das Basisprofil und die E-Mail hinaus zu. Sie können diesen Zugriff jederzeit in den Sicherheitseinstellungen des jeweiligen Anbieters widerrufen.",
            },
          ],
        },
        {
          heading: "6. Weitergabe von Daten",
          body: [
            {
              p: "Wir verkaufen Ihre personenbezogenen Daten nicht. Wir geben sie nur an Auftragsverarbeiter weiter, die uns bei der Bereitstellung des Dienstes unterstützen und zu deren Schutz verpflichtet sind, etwa Hosting- und Datenbankanbieter sowie die für die Anmeldung genutzten Identitätsanbieter. Wir können Daten außerdem offenlegen, wenn dies gesetzlich oder auf Anordnung einer zuständigen Behörde erforderlich ist.",
            },
          ],
        },
        {
          heading: "7. Speicherung und Sicherheit",
          body: [
            {
              p: "Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten vor unbefugtem Zugriff, Verlust oder Veränderung zu schützen. Sensible Systemzugangsdaten sind auf den Server beschränkt und werden niemals der Client-Anwendung offengelegt, und die Kommunikation mit unseren Diensten ist bei der Übertragung geschützt.",
            },
          ],
        },
        {
          heading: "8. Wie lange wir Ihre Daten aufbewahren",
          body: [
            {
              p: "Wir bewahren Ihre Daten so lange auf, wie Ihr Konto besteht oder wie es für die Zwecke dieser Erklärung erforderlich ist. Nach Schließung des Kontos werden die Daten gelöscht oder anonymisiert, außer wenn das Gesetz ihre Aufbewahrung für einen bestimmten Zeitraum verlangt.",
            },
          ],
        },
        {
          heading: "9. Ihre Rechte",
          body: [
            { p: "Gemäß art. 18 der LGPD können Sie jederzeit Folgendes verlangen:" },
            {
              list: [
                "Bestätigung, dass eine Verarbeitung stattfindet, und Zugang zu Ihren Daten;",
                "Berichtigung unvollständiger, ungenauer oder veralteter Daten;",
                "Anonymisierung, Sperrung oder Löschung unnötiger oder nicht regelkonform verarbeiteter Daten;",
                "Übertragbarkeit Ihrer Daten;",
                "Löschung der auf Grundlage der Einwilligung verarbeiteten Daten;",
                "Auskunft über die Parteien, mit denen wir Ihre Daten teilen;",
                "Widerruf der Einwilligung.",
              ],
            },
            { p: "Um Ihre Rechte auszuüben, schreiben Sie an [{email}](mailto:{email})." },
          ],
        },
        {
          heading: "10. Cookies",
          body: [
            {
              p: "Wir verwenden ausschließlich die für den Betrieb und die Sicherheit des Dienstes unbedingt erforderlichen Cookies und gleichwertigen Technologien. Wir verwenden keine Werbe-Cookies von Dritten.",
            },
          ],
        },
        {
          heading: "11. Kinder und Jugendliche",
          body: [
            {
              p: "Der Dienst richtet sich nicht an Personen unter 18 Jahren, und wir erheben wissentlich keine Daten von Minderjährigen ohne die Einwilligung ihrer Erziehungsberechtigten. Sollten wir eine solche Erhebung feststellen, löschen wir die Daten.",
            },
          ],
        },
        {
          heading: "12. Änderungen dieser Erklärung",
          body: [
            {
              p: "Wir können diese Erklärung von Zeit zu Zeit aktualisieren. In diesem Fall überarbeiten wir das Datum „zuletzt aktualisiert“ oben auf dieser Seite und benachrichtigen Sie, sofern angebracht, über geeignete Mittel.",
            },
          ],
        },
        {
          heading: "13. Kontakt",
          body: [
            {
              p: "Fragen, Anträge oder Beschwerden zum Datenschutz können an [{email}](mailto:{email}) gesendet werden. Sie können auch unsere [Nutzungsbedingungen](/terms) lesen.",
            },
          ],
        },
      ],
    },
  },
};

export default de;
