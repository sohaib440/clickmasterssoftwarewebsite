"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { SectionHeading } from "@/components/landing/section-heading";
import { techStackIntro, techStackLogos } from "@/lib/landing/data";
import { container, sectionPad } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

const CREAM = "#F5F0E4";
const NAVY = "#0E1B2E";
const YELLOW = "#F5C842";
const YELLOW_DARK = "#D4A800";

const GRAVITY = 0.45;
const RESTITUTION = 0.72;
const FRICTION = 0.985;
const DAMPING = 0.999;

const getNow = () => performance.now();

type TechLogo = typeof techStackLogos[number];

interface Bubble {
  id: number;
  logo: TechLogo;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  mass: number;
}

function createBubbles(w: number, h: number): Bubble[] {
  const count = techStackLogos.length;
  const cols = Math.ceil(Math.sqrt(count * (w / h)));
  const rows = Math.ceil(count / cols);
  return techStackLogos.map((logo, i) => {
    const r = 44 + Math.random() * 22;
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cellW = w / cols;
    const cellH = (h * 0.72) / rows;
    return {
      id: i,
      logo,
      x: cellW * col + cellW / 2 + (Math.random() - 0.5) * 16,
      y: cellH * row + r + 8 + (Math.random() - 0.5) * 8,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 1,
      r,
      mass: r * r,
    };
  });
}

function stepPhysics(bs: Bubble[], w: number, h: number, draggingId: number) {
  for (const b of bs) {
    if (b.id === draggingId) continue;
    b.vy += GRAVITY;
    b.vx *= DAMPING;
    b.vy *= DAMPING;
    b.x += b.vx;
    b.y += b.vy;

    if (b.x - b.r < 0) {
      b.x = b.r;
      b.vx = Math.abs(b.vx) * RESTITUTION;
    }
    if (b.x + b.r > w) {
      b.x = w - b.r;
      b.vx = -Math.abs(b.vx) * RESTITUTION;
    }
    if (b.y - b.r < 0) {
      b.y = b.r;
      b.vy = Math.abs(b.vy) * RESTITUTION;
    }
    if (b.y + b.r > h) {
      b.y = h - b.r;
      b.vy = -Math.abs(b.vy) * RESTITUTION;
      b.vx *= FRICTION;
      if (Math.abs(b.vy) < 0.5) b.vy = 0;
    }
  }

  for (let i = 0; i < bs.length; i++) {
    for (let j = i + 1; j < bs.length; j++) {
      const a = bs[i];
      const b = bs[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
      const minDist = a.r + b.r + 3;
      if (dist >= minDist) continue;
      const overlap = (minDist - dist) / 2;
      const nx = dx / dist;
      const ny = dy / dist;
      const aFixed = a.id === draggingId;
      const bFixed = b.id === draggingId;
      if (!aFixed) {
        a.x -= nx * overlap;
        a.y -= ny * overlap;
      }
      if (!bFixed) {
        b.x += nx * overlap;
        b.y += ny * overlap;
      }
      const dvx = a.vx - b.vx;
      const dvy = a.vy - b.vy;
      const dot = dvx * nx + dvy * ny;
      if (dot <= 0) continue;
      const impulse = (2 * dot * RESTITUTION) / (a.mass + b.mass);
      if (!aFixed) {
        a.vx -= impulse * b.mass * nx;
        a.vy -= impulse * b.mass * ny;
      }
      if (!bFixed) {
        b.vx += impulse * a.mass * nx;
        b.vy += impulse * a.mass * ny;
      }
    }
  }
}

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const domRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const dragRef = useRef<{
    id: number;
    offsetX: number;
    offsetY: number;
    history: { x: number; y: number; t: number }[];
  } | null>(null);

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [dragId, setDragId] = useState<number | null>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    const h = el.clientHeight;
    const nextBubbles = createBubbles(w, h);
    bubblesRef.current = nextBubbles;
    setBubbles(nextBubbles);

    const loop = () => {
      const { width, height } = el.getBoundingClientRect();
      stepPhysics(bubblesRef.current, width, height, dragRef.current?.id ?? -1);
      bubblesRef.current.forEach((b, i) => {
        const dom = domRefs.current[i];
        if (dom) {
          dom.style.transform = `translate(${b.x - b.r}px, ${b.y - b.r}px)`;
          dom.style.zIndex = b.id === (dragRef.current?.id ?? -1) ? "20" : "1";
        }
      });
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const getPos = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMove = (e: globalThis.MouseEvent) => {
      if (!dragRef.current) return;
      const pos = getPos(e);
      const b = bubblesRef.current[dragRef.current.id];
      b.x = pos.x - dragRef.current.offsetX;
      b.y = pos.y - dragRef.current.offsetY;
      b.vx = 0;
      b.vy = 0;
      const now = getNow();
      dragRef.current.history.push({ x: pos.x, y: pos.y, t: now });
      dragRef.current.history = dragRef.current.history.filter((h) => now - h.t < 80);
    };

    const onUp = () => {
      if (!dragRef.current) return;
      const b = bubblesRef.current[dragRef.current.id];
      const h = dragRef.current.history;
      if (h.length >= 2) {
        const oldest = h[0];
        const newest = h[h.length - 1];
        const dt = (newest.t - oldest.t) / 16 || 1;
        b.vx = ((newest.x - oldest.x) / dt) * 0.9;
        b.vy = ((newest.y - oldest.y) / dt) * 0.9;
        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (speed > 22) {
          b.vx = (b.vx / speed) * 22;
          b.vy = (b.vy / speed) * 22;
        }
      }
      dragRef.current = null;
      setDragId(null);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const onBubbleMouseDown = (e: ReactMouseEvent<HTMLDivElement>, id: number) => {
    e.preventDefault();
    const rect = containerRef.current!.getBoundingClientRect();
    const pos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    const b = bubblesRef.current[id];
    dragRef.current = {
      id,
      offsetX: pos.x - b.x,
      offsetY: pos.y - b.y,
      history: [{ x: pos.x, y: pos.y, t: getNow() }],
    };
    setDragId(id);
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ background: CREAM }}>
      <div className={cn(container, sectionPad, "relative z-10")}> 
        <div style={{ height: 4, background: `linear-gradient(90deg, ${YELLOW} 0%, ${NAVY} 100%)` }} />

        <SectionHeading
          overlineText="Tech stack"
          title="Our tech universe"
          description={techStackIntro}
          align="left"
          className="mb-12"
        />

        <div
          ref={containerRef}
          className="relative w-full select-none"
          style={{ height: 640, cursor: dragId !== null ? 'grabbing' : 'default', overflow: 'hidden' }}
        >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, ${NAVY}15 1px, transparent 1px)`,
            backgroundSize: '38px 38px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(ellipse 95% 95% at 50% 50%, transparent 55%, ${CREAM}dd 100%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none z-10"
          style={{ background: `linear-gradient(to top, ${CREAM}, transparent)` }}
        />

        {bubbles.length > 0 && techStackLogos.map((logo, i) => {
          const b = bubbles[i];
          if (!b) return null;
          const size = b.r * 2;
          const isHovered = hoveredId === i;
          const isDragging = dragId === i;
          const active = isHovered || isDragging;
          const iconSize = Math.min(56, Math.max(28, b.r * 0.8));
          return (
            <div
              key={logo.id}
              ref={(el) => { domRefs.current[i] = el; }}
              className="absolute top-0 left-0"
              style={{ width: size, height: size, willChange: 'transform' }}
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
              onMouseDown={(e) => onBubbleMouseDown(e, i)}
            >
              <div
                className="relative flex flex-col items-center justify-center rounded-full"
                style={{
                  width: size,
                  height: size,
                  background: active ? YELLOW : '#ffffff',
                  border: `2.5px solid ${active ? YELLOW_DARK : `${NAVY}22`}`,
                  boxShadow: isDragging
                    ? `0 20px 60px rgba(0,0,0,0.22), 0 0 0 5px ${YELLOW}70`
                    : isHovered
                    ? `0 12px 36px ${YELLOW}50, 0 0 0 3px ${YELLOW}60`
                    : `0 4px 16px rgba(0,0,0,0.1), inset 0 1.5px 0 rgba(255,255,255,0.75)`,
                  cursor: isDragging ? 'grabbing' : 'grab',
                  transform: isDragging ? 'scale(1.1)' : isHovered ? 'scale(1.06)' : 'scale(1)',
                  transition: isDragging ? 'none' : 'transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease',
                }}
              >
                <div className="flex items-center justify-center rounded-full" style={{ width: iconSize, height: iconSize }}>
                  <Image
                    src={logo.icon}
                    alt={logo.name}
                    width={iconSize}
                    height={iconSize}
                    className="max-w-full max-h-full"
                    style={{ filter: active ? 'none' : 'brightness(0.95)' }}
                    unoptimized
                  />
                </div>
                <span
                  className="font-bold text-center leading-tight mt-2 px-2"
                  style={{
                    color: active ? NAVY : '#374151',
                    fontSize: Math.max(9, b.r * 0.15),
                  }}
                >
                  {logo.name}
                </span>
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 55% 38% at 36% 26%, rgba(255,255,255,0.6) 0%, transparent 70%)',
                  }}
                />
                {isDragging && (
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ border: `2px dashed ${NAVY}40`, transform: 'scale(1.15)' }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>




      <div style={{ height: 4, background: `linear-gradient(90deg, ${NAVY} 0%, ${YELLOW} 100%)` }} />
    </div>
  </section>
  );
}
