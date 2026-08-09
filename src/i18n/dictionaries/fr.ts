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
    tagline: "L'ingénierie logicielle à laquelle votre entreprise peut se fier.",
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
          "Sirius est l'agent IA de Lumni pour votre PC. Il embarque trois modèles maison, Sirius A, Sirius B et Sirius X, choisis automatiquement selon la tâche, plus 940 outils MCP répartis en 48 familles, sélectionnés par embeddings à chaque requête. Il travaille directement sur votre machine : code, édition de fichiers, terminal, git, bases de données, documents Office, images et PDF. Une app native Windows, avec réponses en streaming, validation de chaque action, skills, sous-agents et mémoire locale.",
        highlights: [
          "App native Windows",
          "Modèles Sirius A, B et X",
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
      disys: {
        name: "Disys",
        headline: "L'ERP des ressources humaines.",
        description:
          "Disys est l'ERP RH de Lumni pour le recrutement et l'embauche. Il relie en un seul endroit entreprises, postes, candidats et processus : fiches clients et unités, offres d'emploi avec niveaux et fourchettes de salaire, une base de talents et de CV consultable, et un pipeline visuel en glisser-déposer pour faire avancer les candidats entre les étapes. Invitez votre équipe par e-mail avec des permissions par page et connectez-vous uniquement avec Google ou LinkedIn, sans aucun mot de passe à gérer.",
        highlights: [
          "Recrutement et embauche",
          "Entreprises et postes",
          "Base de candidats",
          "Pipeline en glisser-déposer",
          "Permissions par page",
          "Connexion Google et LinkedIn",
          "Recherche instantanée",
          "Sans mots de passe",
        ],
        actionLabel: "Découvrir Disys",
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
      "Ce document est une traduction fournie à titre de commodité. En cas de divergence, la version portugaise prévaut.",
    terms: {
      metaTitle: "Conditions d'utilisation",
      metaDescription:
        "Les règles d'utilisation des sites et des systèmes de Lumni, y compris l'accès par connexion sociale.",
      title: "Conditions d'utilisation",
      intro:
        "Ces Conditions régissent l'utilisation du site et des produits proposés par {legalName} ({name}). En accédant à nos services ou en les utilisant, vous acceptez ces Conditions.",
      sections: [
        {
          heading: "1. Acceptation des Conditions",
          body: [
            {
              p: "En créant un compte, en vous connectant ou en utilisant une fonctionnalité de nos services, vous déclarez avoir lu, compris et accepté ces Conditions ainsi que notre [Politique de confidentialité](/privacy). Si vous n'êtes pas d'accord, n'utilisez pas les services.",
            },
          ],
        },
        {
          heading: "2. Description du service",
          body: [
            {
              p: "{name} développe et met à disposition plusieurs systèmes et produits logiciels, chacun avec ses propres fonctionnalités, et ces Conditions s'appliquent à tous. Les fonctionnalités peuvent évoluer, être ajoutées ou être supprimées au fil du temps.",
            },
          ],
        },
        {
          heading: "3. Compte et accès",
          body: [
            {
              p: "L'accès à chaque système peut être assuré par une connexion sociale, à l'aide de fournisseurs tels que Google, GitHub ou LinkedIn, selon leur disponibilité dans le produit. Vous êtes responsable de la sécurité du compte utilisé pour vous authentifier et de toute activité réalisée par son intermédiaire. Signalez-nous immédiatement toute utilisation non autorisée.",
            },
          ],
        },
        {
          heading: "4. Utilisation acceptable",
          body: [
            { p: "En utilisant les services, vous vous engagez à ne pas :" },
            {
              list: [
                "Enfreindre les lois, les droits de tiers ou ces Conditions ;",
                "Tenter d'accéder à des zones, des comptes ou des données sans autorisation ;",
                "Perturber, surcharger ou compromettre la sécurité et l'intégrité du service ;",
                "Utiliser le service pour diffuser des contenus illicites, malveillants ou trompeurs ;",
                "Procéder à de l'ingénierie inverse, copier ou exploiter le service au-delà de ce que la loi autorise.",
              ],
            },
          ],
        },
        {
          heading: "5. Propriété intellectuelle",
          body: [
            {
              p: "Le site, la marque, le logiciel et les éléments mis à disposition appartiennent à {legalName} ou à ses concédants de licence et sont protégés par la loi. Ces Conditions ne vous transfèrent aucun droit de propriété intellectuelle, hormis la licence limitée d'utilisation du service.",
            },
          ],
        },
        {
          heading: "6. Contenu de l'utilisateur",
          body: [
            {
              p: "Vous conservez les droits sur le contenu que vous créez dans le service. Pour faire fonctionner ses fonctionnalités (comme stocker, synchroniser et vous afficher vos données), vous nous accordez une licence limitée strictement nécessaire à cette fin. Vous êtes responsable du contenu que vous soumettez et vous déclarez détenir les droits nécessaires pour le faire.",
            },
          ],
        },
        {
          heading: "7. Exclusions et limitation de responsabilité",
          body: [
            {
              p: "Le service est fourni « tel quel », sans garantie qu'il sera ininterrompu ou exempt d'erreurs. Dans toute la mesure permise par la loi, {name} n'est pas responsable des dommages indirects ou accessoires ni des pertes de bénéfices découlant de l'utilisation du service ou de l'impossibilité de l'utiliser.",
            },
          ],
        },
        {
          heading: "8. Suspension et résiliation",
          body: [
            {
              p: "Nous pouvons suspendre ou résilier l'accès en cas de violation de ces Conditions ou de risque pour la sécurité du service. Vous pouvez cesser d'utiliser le service à tout moment. Une fois le compte fermé, le traitement de vos données suit notre Politique de confidentialité.",
            },
          ],
        },
        {
          heading: "9. Modifications",
          body: [
            {
              p: "Nous pouvons mettre à jour ces Conditions de temps à autre. La date de « dernière mise à jour » figurant en haut indique la version en vigueur. La poursuite de l'utilisation après des modifications vaut acceptation des Conditions révisées.",
            },
          ],
        },
        {
          heading: "10. Loi applicable et juridiction",
          body: [
            {
              p: "Ces Conditions sont régies par les lois de la République fédérative du Brésil. Les tribunaux du domicile de l'utilisateur sont désignés pour trancher tout litige, là où s'applique la législation relative à la consommation.",
            },
          ],
        },
        {
          heading: "11. Contact",
          body: [
            {
              p: "Si vous avez des questions concernant ces Conditions, contactez-nous à l'adresse [{email}](mailto:{email}).",
            },
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Politique de confidentialité",
      metaDescription:
        "Comment Lumni collecte, utilise et protège vos données personnelles sur ses sites et ses systèmes, y compris la connexion sociale.",
      title: "Politique de confidentialité",
      intro:
        "Cette Politique explique comment {legalName} ({name}) traite vos données personnelles lorsque vous utilisez notre site et nos produits, conformément à la loi générale brésilienne sur la protection des données (Lei no 13.709/2018, LGPD).",
      sections: [
        {
          heading: "1. Qui contrôle vos données",
          body: [
            {
              p: "Le responsable de vos données personnelles est {legalName}, immatriculée sous le CNPJ no {taxId}. Pour toute question relative à la confidentialité et à la protection des données, contactez-nous à l'adresse [{email}](mailto:{email}).",
            },
          ],
        },
        {
          heading: "2. Quelles données nous collectons",
          body: [
            { p: "Nous ne collectons que ce qui est nécessaire pour vous authentifier et fournir le service :" },
            {
              list: [
                "**Données de compte (connexion sociale).** Lorsque vous vous connectez par connexion sociale, à l'aide de fournisseurs tels que Google, GitHub ou LinkedIn, nous recevons du fournisseur les données de base que vous autorisez : nom, adresse e-mail (et si elle est vérifiée), photo de profil et un identifiant unique de votre compte auprès du fournisseur.",
                "**Contenu que vous créez.** Informations que vous enregistrez ou soumettez en utilisant chaque système, selon les fonctionnalités du produit (par exemple : fiches, texte, fichiers, préférences et paramètres).",
                "**Données techniques essentielles.** Les informations minimales requises pour le fonctionnement et la sécurité, telles que les journaux d'accès et les identifiants de session.",
              ],
            },
            {
              p: "Nous ne demandons ni ne stockons votre mot de passe auprès des fournisseurs de connexion : l'authentification a lieu dans l'environnement sécurisé de chaque fournisseur.",
            },
          ],
        },
        {
          heading: "3. Comment et pourquoi nous utilisons vos données",
          body: [
            { p: "Nous utilisons vos données aux fins suivantes :" },
            {
              list: [
                "Authentifier votre accès et vous maintenir connecté en toute sécurité ;",
                "Identifier et relier votre compte grâce à l'e-mail vérifié, afin que vous retrouviez vos données en vous connectant avec n'importe quel fournisseur ;",
                "Fournir, maintenir et améliorer les fonctionnalités du produit ;",
                "Prévenir la fraude et les abus et assurer la sécurité du service ;",
                "Respecter les obligations légales et réglementaires.",
              ],
            },
          ],
        },
        {
          heading: "4. Base légale du traitement",
          body: [
            {
              p: "Nous traitons vos données sur la base des fondements légaux de la LGPD, en particulier : l'exécution d'un contrat et les procédures préliminaires à votre demande (art. 7, V) ; votre consentement lors de l'utilisation de la connexion sociale (art. 7, I) ; le respect d'obligations légales (art. 7, II) ; et l'intérêt légitime en matière de sécurité et de prévention de la fraude (art. 7, IX).",
            },
          ],
        },
        {
          heading: "5. Connexion sociale",
          body: [
            {
              p: "Lorsque vous choisissez de vous connecter avec un fournisseur de connexion sociale, vous êtes redirigé vers son écran officiel et décidez d'autoriser ou non le partage de vos données de profil de base. Nous ne recevons que ces informations et ne publions **rien**, n'envoyons aucun message et n'accédons à aucun contenu au-delà du profil de base et de l'e-mail. Vous pouvez révoquer cet accès à tout moment dans les paramètres de sécurité du fournisseur concerné.",
            },
          ],
        },
        {
          heading: "6. Partage des données",
          body: [
            {
              p: "Nous ne vendons pas vos données personnelles. Nous ne pouvons les partager qu'avec des sous-traitants qui nous aident à fournir le service et qui sont tenus de les protéger, tels que les fournisseurs d'hébergement et de bases de données et les fournisseurs d'identité utilisés pour la connexion. Nous pouvons également divulguer des données lorsque la loi ou une autorité compétente l'exige.",
            },
          ],
        },
        {
          heading: "7. Stockage et sécurité",
          body: [
            {
              p: "Nous adoptons des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou altération. Les identifiants sensibles des systèmes sont limités au serveur et ne sont jamais exposés à l'application cliente, et les communications avec nos services sont protégées en transit.",
            },
          ],
        },
        {
          heading: "8. Combien de temps nous conservons vos données",
          body: [
            {
              p: "Nous conservons vos données aussi longtemps que votre compte existe ou selon les besoins des finalités de cette Politique. Une fois le compte fermé, les données sont supprimées ou anonymisées, sauf lorsque la loi impose de les conserver pendant une période déterminée.",
            },
          ],
        },
        {
          heading: "9. Vos droits",
          body: [
            { p: "En vertu de l'art. 18 de la LGPD, vous pouvez à tout moment demander :" },
            {
              list: [
                "La confirmation de l'existence du traitement et l'accès à vos données ;",
                "La correction des données incomplètes, inexactes ou obsolètes ;",
                "L'anonymisation, le blocage ou la suppression des données inutiles ou traitées en violation ;",
                "La portabilité de vos données ;",
                "La suppression des données traitées sur la base du consentement ;",
                "Des informations sur les parties avec lesquelles nous partageons vos données ;",
                "Le retrait du consentement.",
              ],
            },
            { p: "Pour exercer vos droits, écrivez à [{email}](mailto:{email})." },
          ],
        },
        {
          heading: "10. Cookies",
          body: [
            {
              p: "Nous n'utilisons que les cookies et technologies équivalentes strictement nécessaires au fonctionnement et à la sécurité du service. Nous n'utilisons pas de cookies publicitaires de tiers.",
            },
          ],
        },
        {
          heading: "11. Enfants et adolescents",
          body: [
            {
              p: "Le service n'est pas destiné aux personnes de moins de 18 ans et nous ne collectons pas sciemment de données de mineurs sans le consentement de leurs responsables légaux. Si nous identifions une telle collecte, nous supprimerons les données.",
            },
          ],
        },
        {
          heading: "12. Modifications de cette Politique",
          body: [
            {
              p: "Nous pouvons mettre à jour cette Politique de temps à autre. Le cas échéant, nous réviserons la date de « dernière mise à jour » en haut de cette page et, s'il y a lieu, nous vous en informerons par des moyens appropriés.",
            },
          ],
        },
        {
          heading: "13. Contact",
          body: [
            {
              p: "Les questions, demandes ou réclamations concernant la confidentialité peuvent être envoyées à [{email}](mailto:{email}). Vous pouvez également consulter nos [Conditions d'utilisation](/terms).",
            },
          ],
        },
      ],
    },
  },
};

export default fr;
