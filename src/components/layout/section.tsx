import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

interface SectionProps {
  id: string;
  children: ReactNode;
  /** Camadas decorativas (canvas, brilhos) que precisam sangrar fora do container. */
  decoration?: ReactNode;
}

/**
 * Casca única de toda seção: mesmo ritmo vertical e mesma coluna.
 * Sem divisória entre seções — o respiro vertical basta pra separá-las.
 * Espaçamento de seção mora aqui e em nenhum outro lugar.
 */
export function Section({ id, children, decoration }: SectionProps) {
  return (
    <section id={id} className="relative scroll-mt-20 overflow-hidden">
      {decoration}

      <Container className="relative">
        <div className="py-28 lg:py-40">{children}</div>
      </Container>
    </section>
  );
}
