"use client";

import { useCanvasAnimation } from "@/hooks/use-canvas-animation";

interface Dot {
  x: number;
  y: number;
}

interface DotMatrixState {
  dots: Dot[];
}

const SPACING = 30;
const POINTER_RADIUS = 210;
const MAX_DISPLACEMENT = 11;
const BASE_RADIUS = 1.25;

interface DotMatrixProps {
  className?: string;
}

export function DotMatrix({ className = "" }: DotMatrixProps) {
  const canvasRef = useCanvasAnimation<DotMatrixState>({
    setup: (width, height) => {
      const dots: Dot[] = [];
      const columns = Math.ceil(width / SPACING);
      const rows = Math.ceil(height / SPACING);
      const offsetX = (width - (columns - 1) * SPACING) / 2;
      const offsetY = (height - (rows - 1) * SPACING) / 2;

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          dots.push({ x: offsetX + column * SPACING, y: offsetY + row * SPACING });
        }
      }

      return { dots };
    },

    draw: (context, state, { width, height, time, pointer }) => {
      context.clearRect(0, 0, width, height);

      for (const dot of state.dots) {
        // Respiro lento e defasado por posição: a malha nunca fica completamente parada.
        const breath = Math.sin(dot.x * 0.012 + dot.y * 0.014 + time * 0.9) * 0.5 + 0.5;

        let x = dot.x;
        let y = dot.y;
        let radius = BASE_RADIUS;
        let alpha = 0.11 + breath * 0.08;

        if (pointer.active) {
          const deltaX = dot.x - pointer.x;
          const deltaY = dot.y - pointer.y;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance < POINTER_RADIUS && distance > 0.001) {
            const strength = (1 - distance / POINTER_RADIUS) ** 2;
            x += (deltaX / distance) * MAX_DISPLACEMENT * strength;
            y += (deltaY / distance) * MAX_DISPLACEMENT * strength;
            radius += strength * 2.6;
            alpha += strength * 0.8;
          }
        }

        context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    },
  });

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}
