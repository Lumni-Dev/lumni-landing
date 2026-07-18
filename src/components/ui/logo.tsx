import Image from "next/image";

interface LogoProps {
  companyName: string;
  className?: string;
  /** Ative apenas no cabeçalho: a logo está acima da dobra e entra no cálculo de LCP. */
  priority?: boolean;
}

export function Logo({ companyName, className = "h-9 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo-inverse.png"
      alt={companyName}
      width={240}
      height={120}
      priority={priority}
      className={className}
    />
  );
}
