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
    tagline: "Software engineering waar je bedrijf op kan vertrouwen.",
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
          "Sirius is de AI-agent van Lumni voor jouw pc. Hij bevat drie eigen modellen, Sirius A, Sirius B en Sirius X, die automatisch per taak worden gekozen, plus 940 MCP-tools in 48 families die per verzoek via embeddings worden geselecteerd. Hij werkt direct op jouw machine: code, bestanden bewerken, terminal, git, databases, Office-documenten, afbeeldingen en PDF's. Een native Windows-app, met streaming-antwoorden, goedkeuring van elke actie, skills, subagents en lokaal geheugen.",
        highlights: [
          "Native Windows-app",
          "Modellen Sirius A, B en X",
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
      "Dit document is een vertaling die voor uw gemak wordt aangeboden. Bij verschillen prevaleert de Portugese versie.",
    terms: {
      metaTitle: "Gebruiksvoorwaarden",
      metaDescription:
        "De regels voor het gebruik van de websites en systemen van Lumni, inclusief toegang via social login.",
      title: "Gebruiksvoorwaarden",
      intro:
        "Deze Voorwaarden regelen het gebruik van de website en producten die worden aangeboden door {legalName} ({name}). Door onze diensten te openen of te gebruiken, gaat u akkoord met deze Voorwaarden.",
      sections: [
        {
          heading: "1. Aanvaarding van de Voorwaarden",
          body: [
            {
              p: "Door een account aan te maken, in te loggen of een functie van onze diensten te gebruiken, verklaart u dat u deze Voorwaarden en ons [Privacybeleid](/privacy) heeft gelezen, begrepen en aanvaard. Als u niet akkoord gaat, gebruik de diensten dan niet.",
            },
          ],
        },
        {
          heading: "2. Beschrijving van de dienst",
          body: [
            {
              p: "{name} ontwikkelt en levert diverse systemen en softwareproducten, elk met eigen functies, en deze Voorwaarden zijn op alle van toepassing. Functies kunnen in de loop van de tijd evolueren, worden toegevoegd of worden stopgezet.",
            },
          ],
        },
        {
          heading: "3. Account en toegang",
          body: [
            {
              p: "Toegang tot elk systeem kan worden verleend via social login, met aanbieders zoals Google, GitHub of LinkedIn, voor zover beschikbaar in het product. U bent verantwoordelijk voor het veilig houden van het account waarmee u zich authenticeert en voor alle activiteit die daarmee wordt uitgevoerd. Waarschuw ons onmiddellijk in geval van ongeoorloofd gebruik.",
            },
          ],
        },
        {
          heading: "4. Aanvaardbaar gebruik",
          body: [
            { p: "Door de diensten te gebruiken, gaat u ermee akkoord om niet:" },
            {
              list: [
                "Wetten, rechten van derden of deze Voorwaarden te schenden;",
                "Te proberen zonder toestemming toegang te krijgen tot zones, accounts of gegevens;",
                "De veiligheid en integriteit van de dienst te verstoren, te overbelasten of aan te tasten;",
                "De dienst te gebruiken om onrechtmatige, kwaadaardige of misleidende inhoud te verspreiden;",
                "De dienst te reverse-engineeren, kopiëren of exploiteren buiten wat de wet toestaat.",
              ],
            },
          ],
        },
        {
          heading: "5. Intellectueel eigendom",
          body: [
            {
              p: "De website, het merk, de software en de beschikbaar gestelde materialen behoren toe aan {legalName} of haar licentiegevers en zijn wettelijk beschermd. Deze Voorwaarden dragen geen intellectuele-eigendomsrechten aan u over, met uitzondering van de beperkte licentie om de dienst te gebruiken.",
            },
          ],
        },
        {
          heading: "6. Inhoud van de gebruiker",
          body: [
            {
              p: "U behoudt de rechten op de inhoud die u in de dienst creëert. Om de functies ervan te laten werken (zoals het opslaan, synchroniseren en aan u tonen van uw gegevens), verleent u ons een beperkte licentie die strikt noodzakelijk is voor dat doel. U bent verantwoordelijk voor de inhoud die u indient en verklaart dat u de rechten heeft om dat te doen.",
            },
          ],
        },
        {
          heading: "7. Vrijwaringen en beperking van aansprakelijkheid",
          body: [
            {
              p: "De dienst wordt geleverd “as is”, zonder garantie dat deze ononderbroken of foutloos zal zijn. Voor zover maximaal wettelijk toegestaan, is {name} niet aansprakelijk voor indirecte of incidentele schade of winstderving die voortvloeit uit het gebruik van, of het onvermogen om gebruik te maken van, de dienst.",
            },
          ],
        },
        {
          heading: "8. Opschorting en beëindiging",
          body: [
            {
              p: "Wij kunnen de toegang opschorten of beëindigen in geval van schending van deze Voorwaarden of risico voor de veiligheid van de dienst. U kunt op elk moment stoppen met het gebruik van de dienst. Zodra het account is gesloten, volgt de verwerking van uw gegevens ons Privacybeleid.",
            },
          ],
        },
        {
          heading: "9. Wijzigingen",
          body: [
            {
              p: "Wij kunnen deze Voorwaarden van tijd tot tijd bijwerken. De datum “laatst bijgewerkt” bovenaan geeft de huidige versie aan. Voortgezet gebruik na wijzigingen betekent aanvaarding van de herziene Voorwaarden.",
            },
          ],
        },
        {
          heading: "10. Toepasselijk recht en bevoegde rechter",
          body: [
            {
              p: "Deze Voorwaarden worden beheerst door het recht van de Federatieve Republiek Brazilië. De rechtbanken van de woonplaats van de gebruiker worden gekozen om eventuele geschillen te beslechten, waar de consumentenwetgeving van toepassing is.",
            },
          ],
        },
        {
          heading: "11. Contact",
          body: [
            {
              p: "Als u vragen heeft over deze Voorwaarden, neem dan contact met ons op via [{email}](mailto:{email}).",
            },
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Privacybeleid",
      metaDescription:
        "Hoe Lumni uw persoonsgegevens verzamelt, gebruikt en beschermt op haar websites en systemen, inclusief social login.",
      title: "Privacybeleid",
      intro:
        "Dit Beleid legt uit hoe {legalName} ({name}) uw persoonsgegevens verwerkt wanneer u onze website en producten gebruikt, in overeenstemming met de Braziliaanse algemene wet op de gegevensbescherming (Lei no 13.709/2018, LGPD).",
      sections: [
        {
          heading: "1. Wie beheert uw gegevens",
          body: [
            {
              p: "De verwerkingsverantwoordelijke van uw persoonsgegevens is {legalName}, ingeschreven onder CNPJ no {taxId}. Voor elke zaak met betrekking tot privacy en gegevensbescherming kunt u contact met ons opnemen via [{email}](mailto:{email}).",
            },
          ],
        },
        {
          heading: "2. Welke gegevens we verzamelen",
          body: [
            { p: "We verzamelen alleen wat nodig is om u te authenticeren en de dienst te leveren:" },
            {
              list: [
                "**Accountgegevens (social login).** Wanneer u inlogt via social login, met aanbieders zoals Google, GitHub of LinkedIn, ontvangen we van de aanbieder de basisgegevens die u toestaat: naam, e-mailadres (en of het geverifieerd is), profielfoto en een unieke identificator van uw account bij de aanbieder.",
                "**Inhoud die u creëert.** Informatie die u vastlegt of indient bij het gebruik van elk systeem, afhankelijk van de functies van het product (bijvoorbeeld: gegevens, tekst, bestanden, voorkeuren en instellingen).",
                "**Essentiële technische gegevens.** De minimale informatie die nodig is voor werking en veiligheid, zoals toegangslogs en sessie-identificatoren.",
              ],
            },
            {
              p: "We vragen of bewaren uw wachtwoord niet bij de login-aanbieders: de authenticatie vindt plaats in de beveiligde omgeving van elke aanbieder.",
            },
          ],
        },
        {
          heading: "3. Hoe en waarom we uw gegevens gebruiken",
          body: [
            { p: "We gebruiken uw gegevens voor de volgende doeleinden:" },
            {
              list: [
                "Om uw toegang te authenticeren en u veilig ingelogd te houden;",
                "Om uw account te identificeren en te koppelen via het geverifieerde e-mailadres, zodat u uw gegevens terugvindt wanneer u inlogt met welke aanbieder dan ook;",
                "Om de functies van het product te leveren, te onderhouden en te verbeteren;",
                "Om fraude en misbruik te voorkomen en de veiligheid van de dienst te waarborgen;",
                "Om te voldoen aan wettelijke en regelgevende verplichtingen.",
              ],
            },
          ],
        },
        {
          heading: "4. Rechtsgrondslag voor de verwerking",
          body: [
            {
              p: "We verwerken uw gegevens op basis van de rechtsgronden van de LGPD, in het bijzonder: de uitvoering van een overeenkomst en voorbereidende handelingen op uw verzoek (art. 7, V); uw toestemming bij het gebruik van social login (art. 7, I); naleving van wettelijke verplichtingen (art. 7, II); en gerechtvaardigd belang bij veiligheid en fraudepreventie (art. 7, IX).",
            },
          ],
        },
        {
          heading: "5. Social login",
          body: [
            {
              p: "Wanneer u ervoor kiest in te loggen met een social login-aanbieder, wordt u naar het officiële scherm ervan geleid en beslist u of u het delen van uw basisprofielgegevens toestaat. We ontvangen alleen die informatie en publiceren **niets**, verzenden geen berichten en openen geen inhoud buiten het basisprofiel en e-mailadres. U kunt deze toegang op elk moment intrekken in de beveiligingsinstellingen van de betreffende aanbieder.",
            },
          ],
        },
        {
          heading: "6. Delen van gegevens",
          body: [
            {
              p: "We verkopen uw persoonsgegevens niet. We kunnen deze alleen delen met verwerkers die ons helpen de dienst te leveren en die verplicht zijn deze te beschermen, zoals hosting- en databaseaanbieders en de identiteitsaanbieders die worden gebruikt om in te loggen. We kunnen gegevens ook openbaar maken wanneer dit wettelijk verplicht is of op bevel van een bevoegde autoriteit.",
            },
          ],
        },
        {
          heading: "7. Opslag en beveiliging",
          body: [
            {
              p: "We nemen technische en organisatorische maatregelen om uw gegevens te beschermen tegen ongeoorloofde toegang, verlies of wijziging. Gevoelige systeemgegevens zijn beperkt tot de server en worden nooit blootgesteld aan de clienttoepassing, en de communicatie met onze diensten is tijdens het transport beschermd.",
            },
          ],
        },
        {
          heading: "8. Hoe lang we uw gegevens bewaren",
          body: [
            {
              p: "We bewaren uw gegevens zolang uw account bestaat of zolang dit nodig is voor de doeleinden van dit Beleid. Zodra het account is gesloten, worden de gegevens verwijderd of geanonimiseerd, behalve waar de wet vereist dat ze gedurende een bepaalde periode worden bewaard.",
            },
          ],
        },
        {
          heading: "9. Uw rechten",
          body: [
            { p: "Op grond van art. 18 van de LGPD kunt u op elk moment verzoeken om:" },
            {
              list: [
                "Bevestiging dat er verwerking plaatsvindt en toegang tot uw gegevens;",
                "Correctie van onvolledige, onjuiste of verouderde gegevens;",
                "Anonimisering, blokkering of verwijdering van onnodige gegevens of gegevens die niet-conform zijn verwerkt;",
                "Overdraagbaarheid van uw gegevens;",
                "Verwijdering van gegevens die op basis van toestemming zijn verwerkt;",
                "Informatie over de partijen met wie we uw gegevens delen;",
                "Intrekking van toestemming.",
              ],
            },
            { p: "Om uw rechten uit te oefenen, schrijf naar [{email}](mailto:{email})." },
          ],
        },
        {
          heading: "10. Cookies",
          body: [
            {
              p: "We gebruiken alleen de cookies en gelijkwaardige technologieën die strikt noodzakelijk zijn voor de werking en veiligheid van de dienst. We gebruiken geen advertentiecookies van derden.",
            },
          ],
        },
        {
          heading: "11. Kinderen en jongeren",
          body: [
            {
              p: "De dienst is niet gericht op personen jonger dan 18 jaar en we verzamelen niet bewust gegevens van minderjarigen zonder toestemming van hun voogden. Als we een dergelijke verzameling vaststellen, verwijderen we de gegevens.",
            },
          ],
        },
        {
          heading: "12. Wijzigingen in dit Beleid",
          body: [
            {
              p: "We kunnen dit Beleid van tijd tot tijd bijwerken. Wanneer dat gebeurt, herzien we de datum “laatst bijgewerkt” bovenaan deze pagina en, waar passend, stellen we u via geschikte middelen op de hoogte.",
            },
          ],
        },
        {
          heading: "13. Contact",
          body: [
            {
              p: "Vragen, verzoeken of klachten over privacy kunnen worden verzonden naar [{email}](mailto:{email}). U kunt ook onze [Gebruiksvoorwaarden](/terms) lezen.",
            },
          ],
        },
      ],
    },
  },
};

export default nl;
