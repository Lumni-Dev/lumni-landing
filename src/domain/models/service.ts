export type ServiceIcon = "development" | "automation" | "consulting" | "staffing" | "security";

export interface ServiceProps {
  readonly id: string;
  readonly title: string;
  readonly headline: string;
  readonly description: string;
  readonly deliverables: readonly string[];
  readonly icon: ServiceIcon;
}

export class Service {
  readonly id: string;
  readonly title: string;
  readonly headline: string;
  readonly description: string;
  readonly deliverables: readonly string[];
  readonly icon: ServiceIcon;

  constructor(props: ServiceProps) {
    this.id = props.id;
    this.title = props.title;
    this.headline = props.headline;
    this.description = props.description;
    this.deliverables = props.deliverables;
    this.icon = props.icon;
  }

  get anchor(): string {
    return `#${this.id}`;
  }

  /** Rótulo ordinal exibido no card ("01", "02", ...). */
  positionLabel(index: number): string {
    return String(index + 1).padStart(2, "0");
  }
}
