"use client";

import { useEffect, useRef } from "react";

export interface Pointer {
  x: number;
  y: number;
  active: boolean;
}

export interface Frame {
  width: number;
  height: number;
  /** Segundos desde o primeiro quadro. */
  time: number;
  /** Segundos desde o quadro anterior, limitado para sobreviver a travadas de aba. */
  delta: number;
  pointer: Pointer;
}

interface CanvasAnimationOptions<TState> {
  setup: (width: number, height: number) => TState;
  draw: (context: CanvasRenderingContext2D, state: TState, frame: Frame) => void;
}

const MAX_DELTA = 1 / 30;

/**
 * Ciclo de vida de uma animação em canvas: escala por devicePixelRatio, refaz o
 * estado no resize, congela o laço quando o elemento sai da tela ou a aba perde
 * foco, respeita prefers-reduced-motion e desmonta sem vazar rAF nem listener.
 *
 * O canvas PRECISA ter largura e altura definidas em CSS (ex.: h-full w-full).
 * Canvas é replaced element: sem isso, o layout segue o tamanho do buffer, e o
 * ajuste de buffer no resize realimenta o ResizeObserver num ciclo de crescimento.
 */
export function useCanvasAnimation<TState>({ setup, draw }: CanvasAnimationOptions<TState>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setupRef = useRef(setup);
  const drawRef = useRef(draw);

  // Mantém os callbacks frescos sem religar o laço a cada render.
  useEffect(() => {
    setupRef.current = setup;
    drawRef.current = draw;
  }, [setup, draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let state: TState | null = null;
    let width = 0;
    let height = 0;
    let frameId: number | null = null;
    let startedAt = 0;
    let previousAt = 0;
    let isOnScreen = true;

    const pointer: Pointer = { x: 0, y: 0, active: false };
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      // O buffer vive em pixels físicos; o desenho, em pixels CSS. Sem isso o traço borra.
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      state = setupRef.current(width, height);
    };

    const renderFrame = (time: number, delta: number) => {
      if (!state) return;
      drawRef.current(context, state, { width, height, time, delta, pointer });
    };

    const loop = (timestamp: number) => {
      if (startedAt === 0) {
        startedAt = timestamp;
        previousAt = timestamp;
      }

      const delta = Math.min((timestamp - previousAt) / 1000, MAX_DELTA);
      previousAt = timestamp;

      renderFrame((timestamp - startedAt) / 1000, delta);
      frameId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (frameId !== null || prefersReducedMotion.matches) return;
      previousAt = performance.now();
      if (startedAt === 0) startedAt = previousAt;
      frameId = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (frameId === null) return;
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    const syncPlayback = () => {
      if (isOnScreen && document.visibilityState === "visible") start();
      else stop();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();

    // Com movimento reduzido, desenha um único quadro estático e não abre laço algum.
    if (prefersReducedMotion.matches) {
      renderFrame(0, 0);
      return () => {
        state = null;
      };
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isOnScreen = entry.isIntersecting;
      syncPlayback();
    });
    intersectionObserver.observe(canvas);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", syncPlayback);

    syncPlayback();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", syncPlayback);
      state = null;
    };
  }, []);

  return canvasRef;
}
