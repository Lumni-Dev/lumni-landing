"use client";

import { useCallback, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Atraso em milissegundos, usado para escalonar itens de uma mesma lista. */
  delay?: number;
  className?: string;
  as?: ElementType;
  id?: string;
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div", id }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  const observeElement = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    // Sem IntersectionObserver (navegador antigo), o conteúdo aparece sem animação
    // em vez de ficar preso em opacity: 0.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      id={id}
      ref={observeElement}
      data-visible={isVisible}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
