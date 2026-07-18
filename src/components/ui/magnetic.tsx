"use client";

import { useCallback, useRef, type PointerEvent, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  /** Fração do deslocamento do cursor que o elemento acompanha. */
  strength?: number;
  className?: string;
}

/**
 * Atrai o elemento na direção do cursor. Escreve o transform direto no DOM, dentro
 * de um rAF: o movimento do mouse não passa pelo React.
 */
export function Magnetic({ children, strength = 0.3, className = "" }: MagneticProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLSpanElement>) => {
      const element = elementRef.current;
      if (!element || frameRef.current !== null) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const { clientX, clientY } = event;

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        const rect = element.getBoundingClientRect();
        const offsetX = (clientX - (rect.left + rect.width / 2)) * strength;
        const offsetY = (clientY - (rect.top + rect.height / 2)) * strength;
        element.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      });
    },
    [strength],
  );

  const handlePointerLeave = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    const element = elementRef.current;
    if (element) element.style.transform = "translate3d(0, 0, 0)";
  }, []);

  return (
    <span
      ref={elementRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`inline-block transition-transform duration-500 ease-out will-change-transform ${className}`}
    >
      {children}
    </span>
  );
}
