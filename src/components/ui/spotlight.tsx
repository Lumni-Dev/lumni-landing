"use client";

import { useCallback, useRef, type ReactNode } from "react";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
}

/**
 * Acende um facho que segue o cursor. As coordenadas são escritas direto no DOM,
 * dentro de um rAF: mover o mouse não dispara render do React.
 */
export function Spotlight({ children, className = "" }: SpotlightProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const element = elementRef.current;
    if (!element || frameRef.current !== null) return;

    const { clientX, clientY } = event;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--pointer-x", `${clientX - rect.left}px`);
      element.style.setProperty("--pointer-y", `${clientY - rect.top}px`);
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    elementRef.current?.setAttribute("data-pointer", "outside");
  }, []);

  const handlePointerEnter = useCallback(() => {
    elementRef.current?.setAttribute("data-pointer", "inside");
  }, []);

  return (
    <div
      ref={elementRef}
      data-pointer="outside"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`spotlight ${className}`}
    >
      {children}
    </div>
  );
}
