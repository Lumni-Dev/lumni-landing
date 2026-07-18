export type ContactChannelKind = "email" | "whatsapp";

export interface ContactChannelProps {
  readonly kind: ContactChannelKind;
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

export class ContactChannel {
  readonly kind: ContactChannelKind;
  readonly label: string;
  readonly value: string;
  readonly href: string;

  constructor(props: ContactChannelProps) {
    this.kind = props.kind;
    this.label = props.label;
    this.value = props.value;
    this.href = props.href;
  }

  get isExternal(): boolean {
    return this.href.startsWith("http://") || this.href.startsWith("https://");
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
}
