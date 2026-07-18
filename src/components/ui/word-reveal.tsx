"use client";

import { Fragment, useCallback, useState, type CSSProperties, type ElementType } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  as?: ElementType;
}

/**
 * Revela o texto palavra a palavra. Cada palavra é um span com índice próprio, mas
 * o gatilho é um único observer no elemento pai, não um por palavra.
 */
export function WordReveal({ text, className = "", as: Tag = "span" }: WordRevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  const observeElement = useCallback((element: HTMLElement | null) => {
    if (!element) return;

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
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={observeElement} data-visible={isVisible} className={`reveal-words ${className}`}>
      {words.map((word, index) => (
        // O espaço fica fora da máscara: dentro de um inline-block ele seria descartado.
        <Fragment key={`${word}-${index}`}>
          <span className="word">
            <span style={{ "--word-index": index } as CSSProperties}>{word}</span>
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
