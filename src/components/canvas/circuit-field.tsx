"use client";

import type { Pointer } from "@/hooks/use-canvas-animation";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";

interface Point {
  x: number;
  y: number;
}

interface TrailPoint extends Point {
  /** Distância percorrida desde a cabeça, usada para esmaecer a cauda. */
  distance: number;
}

interface Particle extends Point {
  directionX: number;
  directionY: number;
  targetX: number;
  targetY: number;
  /** Cantos já percorridos, do mais antigo ao mais recente. */
  corners: Point[];
  speed: number;
  life: number;
  maxLife: number;
}

interface CircuitFieldState {
  particles: Particle[];
}

/** Igual ao background-size da malha em CSS: as partículas correm sobre as linhas visíveis. */
const CELL = 64;
const DENSITY = 22000;
const MAX_PARTICLES = 60;
const BASE_SPEED = 52;
const HEAD_SIZE = 2.5;
const TRAIL_LENGTH = 190;
const MAX_CORNERS = 8;
const POINTER_RADIUS = 180;
const BASE_ALPHA = 0.42;
const STRAIGHT_CHANCE = 0.62;
const FADE_IN = 1;
const FADE_OUT = 1.6;

const DIRECTIONS = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
] as const;

/** Segue reto na maior parte das vezes, senão vira 90 graus. Nunca dá meia-volta. */
function nextDirection(directionX: number, directionY: number): Point {
  if (Math.random() < STRAIGHT_CHANCE) return { x: directionX, y: directionY };

  // Girar o vetor 90 graus para um dos lados mantém o movimento sempre ortogonal.
  const turn = Math.random() < 0.5 ? 1 : -1;
  return { x: -directionY * turn, y: directionX * turn };
}

function spawn(width: number, height: number): Particle {
  const columns = Math.max(Math.floor(width / CELL), 1);
  const rows = Math.max(Math.floor(height / CELL), 1);

  const x = Math.round(Math.random() * columns) * CELL;
  const y = Math.round(Math.random() * rows) * CELL;
  const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

  return {
    x,
    y,
    directionX: direction.x,
    directionY: direction.y,
    targetX: x + direction.x * CELL,
    targetY: y + direction.y * CELL,
    corners: [],
    // Velocidades distintas evitam o efeito de pelotão andando em bloco.
    speed: BASE_SPEED * (0.7 + Math.random() * 0.7),
    life: 0,
    maxLife: 9 + Math.random() * 9,
  };
}

/** Nasce e morre em desvanecimento, nunca de estalo. */
function lifeEnvelope(particle: Particle): number {
  const fadeIn = Math.min(particle.life / FADE_IN, 1);
  const remaining = particle.maxLife - particle.life;
  const fadeOut = Math.min(remaining / FADE_OUT, 1);
  return Math.max(Math.min(fadeIn, fadeOut), 0);
}

function headIntensity(particle: Particle, pointer: Pointer) {
  const envelope = lifeEnvelope(particle);
  let alpha = BASE_ALPHA;
  let size = HEAD_SIZE;

  if (pointer.active) {
    const distance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
    if (distance < POINTER_RADIUS) {
      const strength = (1 - distance / POINTER_RADIUS) ** 2;
      alpha += strength * 0.55;
      size += strength * 3;
    }
  }

  return { alpha: alpha * envelope, size };
}

/** Recorta o caminho já percorrido no comprimento do rastro, partindo da cabeça. */
function buildTrail(particle: Particle): TrailPoint[] {
  const trail: TrailPoint[] = [{ x: particle.x, y: particle.y, distance: 0 }];
  let travelled = 0;

  for (let index = particle.corners.length - 1; index >= 0; index -= 1) {
    const previous = trail[trail.length - 1];
    const corner = particle.corners[index];
    // Os trechos são sempre ortogonais, então a distância é a soma dos catetos.
    const length = Math.abs(corner.x - previous.x) + Math.abs(corner.y - previous.y);
    if (length === 0) continue;

    if (travelled + length >= TRAIL_LENGTH) {
      const ratio = (TRAIL_LENGTH - travelled) / length;
      trail.push({
        x: previous.x + (corner.x - previous.x) * ratio,
        y: previous.y + (corner.y - previous.y) * ratio,
        distance: TRAIL_LENGTH,
      });
      return trail;
    }

    travelled += length;
    trail.push({ x: corner.x, y: corner.y, distance: travelled });
  }

  return trail;
}

interface CircuitFieldProps {
  className?: string;
}

export function CircuitField({ className = "" }: CircuitFieldProps) {
  const canvasRef = useCanvasAnimation<CircuitFieldState>({
    setup: (width, height) => {
      const count = Math.min(Math.floor((width * height) / DENSITY), MAX_PARTICLES);
      return { particles: Array.from({ length: count }, () => spawn(width, height)) };
    },

    draw: (context, state, { width, height, delta, pointer }) => {
      context.clearRect(0, 0, width, height);

      // Cantos vivos: é o que separa traçado de circuito de rabisco arredondado.
      context.lineJoin = "miter";
      context.lineCap = "butt";
      context.lineWidth = 1;

      for (const particle of state.particles) {
        const step = particle.speed * delta;

        particle.x += particle.directionX * step;
        particle.y += particle.directionY * step;
        particle.life += delta;

        const reachedNode =
          Math.abs(particle.targetX - particle.x) <= step &&
          Math.abs(particle.targetY - particle.y) <= step;

        if (reachedNode) {
          particle.x = particle.targetX;
          particle.y = particle.targetY;
          particle.corners.push({ x: particle.x, y: particle.y });
          if (particle.corners.length > MAX_CORNERS) particle.corners.shift();

          const direction = nextDirection(particle.directionX, particle.directionY);
          particle.directionX = direction.x;
          particle.directionY = direction.y;
          particle.targetX = particle.x + direction.x * CELL;
          particle.targetY = particle.y + direction.y * CELL;
        }

        const isOutside =
          particle.x < -CELL ||
          particle.x > width + CELL ||
          particle.y < -CELL ||
          particle.y > height + CELL;

        if (isOutside || particle.life > particle.maxLife) {
          Object.assign(particle, spawn(width, height));
          continue;
        }

        const { alpha } = headIntensity(particle, pointer);
        if (alpha <= 0.01) continue;

        const trail = buildTrail(particle);

        for (let index = 0; index < trail.length - 1; index += 1) {
          const from = trail[index];
          const to = trail[index + 1];
          // Queda quadrática: a cauda some com suavidade em vez de terminar em corte.
          const falloff = (1 - to.distance / TRAIL_LENGTH) ** 1.8;
          const segmentAlpha = alpha * falloff;
          if (segmentAlpha <= 0.01) break;

          context.strokeStyle = `rgba(0, 0, 0, ${segmentAlpha})`;
          context.beginPath();
          context.moveTo(from.x, from.y);
          context.lineTo(to.x, to.y);
          context.stroke();

          // Solda nos cantos do traçado, como as ilhas de uma placa.
          if (index > 0) {
            context.fillStyle = `rgba(0, 0, 0, ${segmentAlpha * 0.9})`;
            context.fillRect(from.x - 1, from.y - 1, 2, 2);
          }
        }
      }

      // As cabeças vão num passe à parte: o halo é configurado uma vez, não por partícula.
      context.shadowColor = "rgba(0, 0, 0, 0.65)";
      context.shadowBlur = 9;

      for (const particle of state.particles) {
        const { alpha, size } = headIntensity(particle, pointer);
        if (alpha <= 0.01) continue;

        context.fillStyle = `rgba(0, 0, 0, ${Math.min(alpha * 1.6, 1)})`;
        context.fillRect(particle.x - size / 2, particle.y - size / 2, size, size);
      }

      context.shadowBlur = 0;
    },
  });

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}
