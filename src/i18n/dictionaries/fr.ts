import type { Dictionary } from "@/i18n/types";

const fr: Dictionary = {
  meta: {
    keywords: [
      "Lumni",
      "développement logiciel",
      "logiciel sur mesure",
      "développement d'applications",
      "automatisation des processus",
      "intégration de systèmes",
      "RPA",
      "conseil en technologie",
      "cybersécurité",
      "équipes de développement dédiées",
    ],
  },
  og: {
    strip: "SYSTÈMES · AUTOMATISATION · CONSEIL · SÉCURITÉ",
  },
  company: {
    tagline: "L'ingénierie de prompt à laquelle votre entreprise peut se fier.",
    description:
      "Lumni développe des systèmes, automatise les processus et intègre des ingénieurs à votre équipe. Du premier diagnostic au code en production.",
  },
  header: {
    navServices: "Services",
    navSystems: "Systèmes / Logiciels",
    contactCta: "Contactez-nous",
    ariaHome: "Lumni, aller au début",
    ariaMainNav: "Navigation principale",
    ariaOpenMenu: "Ouvrir le menu",
    ariaCloseMenu: "Fermer le menu",
    ariaLanguage: "Choisir la langue",
  },
  hero: {
    ctaStart: "Lancer un projet",
    ctaServices: "Voir les services",
    capabilities: [
      "Développement sur mesure",
      "Automatisation des processus",
      "Conseil technique",
      "Cybersécurité",
      "Squads dédiées",
    ],
  },
  services: {
    label: "Services",
    title: "Cinq fronts, un seul engagement : un logiciel qui soutient votre activité.",
    description:
      "Nous intervenons du diagnostic à l'exploitation. Vous choisissez le point d'entrée, nous assumons la responsabilité technique de bout en bout.",
    items: {
      desenvolvimento: {
        title: "Développement de systèmes et d'applications",
        headline: "Du discovery au déploiement, sans dette technique dès le premier sprint.",
        description:
          "Nous construisons des produits numériques sur mesure : plateformes web, applications mobiles et API qui soutiennent des opérations critiques. Architecture pensée pour la montée en charge, code testé et livraison continue, avec l'ingénierie dont votre activité dépendra dès le lendemain du lancement.",
        deliverables: [
          "Plateformes web et portails internes",
          "Applications iOS et Android",
          "API, intégrations et microservices",
          "Architecture prête à monter en charge",
        ],
      },
      automacao: {
        title: "Automatisation des processus",
        headline: "Nous rendons à votre équipe les heures que le tableur consomme.",
        description:
          "Nous cartographions le flux réel de votre opération, pas celui du manuel, et éliminons le travail répétitif qui draine la capacité productive. Intégrations entre systèmes qui ne communiquent pas, routines planifiées et orchestration de données qui réduisent l'erreur humaine et rendent le processus auditable de bout en bout.",
        deliverables: [
          "Cartographie et refonte des processus",
          "Intégration entre systèmes hérités",
          "Routines automatisées et RPA",
          "Tableaux de bord en temps réel",
        ],
      },
      consultoria: {
        title: "Conseil en technologie",
        headline: "Un diagnostic indépendant pour des décisions qui coûtent cher en cas d'erreur.",
        description:
          "Nous évaluons architecture, stack, sécurité et coûts d'infrastructure avec un regard externe et sans agenda commercial. Vous recevez un plan d'évolution priorisé par impact métier, pas par effet de mode, avec le coût et le risque de chaque option explicités avant la décision.",
        deliverables: [
          "Audit d'architecture et de code",
          "Revue de sécurité et conformité",
          "Optimisation des coûts cloud",
          "Feuille de route technique priorisée",
        ],
      },
      ciberseguranca: {
        title: "Cybersécurité",
        headline: "Nous trouvons les failles avant qu'elles ne vous trouvent.",
        description:
          "Nous protégeons ce que votre entreprise ne peut pas perdre : données, disponibilité et réputation. Nous cartographions la surface d'attaque, testons les défenses de manière contrôlée et corrigeons à la racine, du code à l'infrastructure. La sécurité comme processus continu, avec surveillance et réponse aux incidents, pas comme un rapport rangé dans un tiroir.",
        deliverables: [
          "Audit de sécurité et tests d'intrusion",
          "Durcissement des applications et de l'infrastructure",
          "Conformité et protection des données (LGPD)",
          "Surveillance et réponse aux incidents",
        ],
      },
      suporte: {
        title: "Renfort en développement",
        headline: "Nous nous intégrons comme un prolongement de votre ingénierie.",
        description:
          "Des ingénieurs intégrés à votre backlog, à vos rituels et à vos standards de code, qui livrent dès la première semaine. Une vraie séniorité et une capacité à la demande, sans le coût fixe, la lenteur et le risque d'un recrutement qui peut prendre des mois avant de porter ses fruits.",
        deliverables: [
          "Squads dédiées et pluridisciplinaires",
          "Allocation à la demande, élastique",
          "Adhérence à votre processus et à votre stack",
          "Transfert de connaissances continu",
        ],
      },
    },
  },
  systems: {
    label: "Systèmes propriétaires",
    title: "Nous construisons aussi nos propres systèmes.",
    description:
      "Ce sont des produits que Lumni développe, opère et fait évoluer en interne jusqu'à en faire une plateforme. Endurcis par l'usage quotidien et disponibles pour ceux qui veulent les découvrir.",
    items: {
      sirius: {
        name: "Sirius",
        headline: "Un agent IA sur votre Windows.",
        description:
          "Sirius est l'agent IA de Lumni pour votre PC. Il embarque trois modèles maison, Sirius 1, Sirius 2 et Sirius 3, choisis automatiquement selon la tâche, plus 940 outils MCP répartis en 48 familles, sélectionnés par embeddings à chaque requête. Il travaille directement sur votre machine : code, édition de fichiers, terminal, git, bases de données, documents Office, images et PDF. Une app native Windows, avec réponses en streaming, validation de chaque action, skills, sous-agents et mémoire locale.",
        highlights: [
          "App native Windows",
          "Modèles Sirius 1, 2 et 3",
          "940 outils MCP",
          "Sélection par embeddings",
          "Fichiers, terminal et git",
          "Skills et sous-agents",
          "Réponses en streaming",
          "Validation par action",
        ],
        actionLabel: "Découvrir Sirius",
        status: "En production",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Parlons de votre prochaine étape technique.",
    description:
      "Décrivez le problème, pas la solution. Le premier échange est un diagnostic, sans engagement et sans proposition générique : si le bon chemin ne passe pas par nous, nous vous le dirons aussi.",
    panelTag: "canaux_directs",
    available: "Disponible",
    channels: {
      email: "E-mail",
      whatsapp: "WhatsApp",
    },
  },
  footer: {
    servicesHeading: "Services",
    contactHeading: "Contact",
    ariaLegalNav: "Pages légales",
    privacy: "Confidentialité",
    terms: "Conditions",
    backToTop: "Retour en haut",
    rights: "Tous droits réservés.",
  },
  legal: {
    updatedAtLabel: "Dernière mise à jour :",
    updatedAt: "25 juillet 2026",
    backToSite: "Retour au site",
    home: "Accueil",
    courtesyNote:
      "Ce document est fourni en anglais à titre de commodité. En cas de divergence, la version originale en portugais prévaut.",
  },
};

export default fr;
