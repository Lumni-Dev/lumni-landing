export interface SystemProps {
  readonly id: string;
  readonly name: string;
  readonly headline: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly url: string;
  readonly actionLabel: string;
  /** Estado operacional exibido no cabeçalho do card ("Em produção"). */
  readonly status: string;
}

/** Produto proprietário da Lumni: construído, operado e evoluído internamente. */
export class System {
  readonly id: string;
  readonly name: string;
  readonly headline: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly url: string;
  readonly actionLabel: string;
  readonly status: string;

  constructor(props: SystemProps) {
    this.id = props.id;
    this.name = props.name;
    this.headline = props.headline;
    this.description = props.description;
    this.highlights = props.highlights;
    this.url = props.url;
    this.actionLabel = props.actionLabel;
    this.status = props.status;
  }

  get isExternal(): boolean {
    return this.url.startsWith("http://") || this.url.startsWith("https://");
  }

  /**
   * Impede que a aba aberta manipule a origem via window.opener (reverse tabnabbing)
   * e evita vazar a URL de origem no Referer.
   */
  get rel(): string | undefined {
    return this.isExternal ? "noopener noreferrer" : undefined;
  }

  get target(): string | undefined {
    return this.isExternal ? "_blank" : undefined;
  }

  /** Endereço sem protocolo nem barra final, para exibição ("luna.lumni.dev.br"). */
  get displayUrl(): string {
    return this.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}
