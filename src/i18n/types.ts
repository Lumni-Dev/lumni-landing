export type ServiceId =
  | "desenvolvimento"
  | "automacao"
  | "consultoria"
  | "ciberseguranca"
  | "suporte";

export type SystemId = "sirius";

export interface ServiceContent {
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export interface SystemContent {
  name: string;
  headline: string;
  description: string;
  highlights: string[];
  actionLabel: string;
  status: string;
}

/**
 * Bloco de conteúdo legal. Strings aceitam a mini-marcação resolvida por
 * LegalRichText: {placeholders}, **negrito** e [rótulo](href).
 */
export type LegalBlock = { p: string } | { list: string[] };

export interface LegalSectionContent {
  heading: string;
  body: LegalBlock[];
}

export interface LegalDocContent {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  sections: LegalSectionContent[];
}

export interface Dictionary {
  meta: {
    keywords: string[];
  };
  og: {
    /** Faixa do rodapé da imagem OpenGraph ("SISTEMAS · AUTOMAÇÃO · ..."). */
    strip: string;
  };
  company: {
    tagline: string;
    description: string;
  };
  header: {
    navServices: string;
    navSystems: string;
    contactCta: string;
    ariaHome: string;
    ariaMainNav: string;
    ariaOpenMenu: string;
    ariaCloseMenu: string;
    ariaLanguage: string;
  };
  hero: {
    ctaStart: string;
    ctaServices: string;
    capabilities: string[];
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Record<ServiceId, ServiceContent>;
  };
  systems: {
    label: string;
    title: string;
    description: string;
    items: Record<SystemId, SystemContent>;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    /** Rótulo estilo terminal do painel ("canais_diretos"). */
    panelTag: string;
    available: string;
    channels: {
      email: string;
      whatsapp: string;
    };
  };
  footer: {
    servicesHeading: string;
    contactHeading: string;
    ariaLegalNav: string;
    privacy: string;
    terms: string;
    backToTop: string;
    rights: string;
  };
  legal: {
    updatedAtLabel: string;
    updatedAt: string;
    backToSite: string;
    home: string;
    /**
     * Aviso de tradução de cortesia (a versão em português prevalece).
     * Ausente apenas no dicionário pt.
     */
    courtesyNote?: string;
    /** Documentos completos existem em pt e en; os demais idiomas usam o fallback en. */
    terms?: LegalDocContent;
    privacy?: LegalDocContent;
  };
}
