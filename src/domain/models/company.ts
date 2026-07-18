export interface NavigationLink {
  readonly label: string;
  readonly href: string;
}

export interface CompanyProps {
  readonly name: string;
  /** Razão social, exibida na assinatura legal do rodapé. */
  readonly legalName: string;
  readonly taxId: string;
  readonly tagline: string;
  readonly description: string;
  readonly foundedYear: number;
  readonly navigation: readonly NavigationLink[];
}

export class Company {
  readonly name: string;
  readonly legalName: string;
  readonly taxId: string;
  readonly tagline: string;
  readonly description: string;
  readonly foundedYear: number;
  readonly navigation: readonly NavigationLink[];

  constructor(props: CompanyProps) {
    this.name = props.name;
    this.legalName = props.legalName;
    this.taxId = props.taxId;
    this.tagline = props.tagline;
    this.description = props.description;
    this.foundedYear = props.foundedYear;
    this.navigation = props.navigation;
  }

  get legalLine(): string {
    return `${this.legalName} · CNPJ ${this.taxId}`;
  }

  copyright(currentYear: number): string {
    const start = this.foundedYear;
    const range = currentYear > start ? `${start} - ${currentYear}` : `${start}`;
    return `© ${range} ${this.name}. Todos os direitos reservados.`;
  }
}
