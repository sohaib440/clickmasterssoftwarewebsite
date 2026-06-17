"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { SectionHeading } from "@/components/landing/section-heading";
import { techStackIntro, techStackLogos } from "@/lib/landing/data";
import { container, sectionPad } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

const CREAM = "#F5F0E4";
const NAVY = "#0E1B2E";
const YELLOW = "#F5C842";
const YELLOW_DARK = "#D4A800";

const GRAVITY = 0.38;
const RESTITUTION = 0.52;
const FRICTION = 0.86;
const DAMPING = 0.995;
const MIN_VELOCITY = 0.08;
const MAX_VELOCITY = 18;

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
  const sizeScale = Math.min(1, Math.max(0.5, w / 1200));
  const cols = Math.max(3, Math.ceil(Math.sqrt(count * (w / h))));
  const rows = Math.ceil(count / cols);
  return techStackLogos.map((logo, i) => {
    const r = Math.max(16, (26 + Math.random() * 14) * sizeScale);
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cellW = w / cols;
    const cellH = (h * 0.72) / rows;
    const centerX = cellW * col + cellW / 2;
    const startY = cellH * row + r + 12;
    const offsetX = (Math.random() - 0.5) * Math.min(12, cellW * 0.16);
    const offsetY = Math.min(18, cellH * 0.25 + Math.random() * 8);
    const initialY = Math.min(h - r - 8, startY + offsetY);
    const initialVY = w < 768 ? 0.5 + Math.random() * 0.3 : 0;
    return {
      id: i,
      logo,
      x: Math.min(Math.max(centerX + offsetX, r), w - r),
      y: initialY,
      vx: (Math.random() - 0.5) * (w < 768 ? 1.2 : 2),
      vy: initialVY,
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
    b.vx = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, b.vx));
    b.vy = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, b.vy));
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
    }
    if (Math.abs(b.vx) < MIN_VELOCITY) b.vx = 0;
    if (Math.abs(b.vy) < MIN_VELOCITY) b.vy = 0;
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

    const initialize = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;
      const nextBubbles = createBubbles(width, height);
      bubblesRef.current = nextBubbles;
      setBubbles(nextBubbles);
    };

    initialize();
    const observer = new ResizeObserver(() => initialize());
    observer.observe(el);

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
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const getPos = (e: PointerEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMove = (e: globalThis.PointerEvent) => {
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

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const onBubblePointerDown = (e: ReactPointerEvent<HTMLDivElement>, id: number) => {
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
            <div className="w-full" style={{ height: 4, background: `linear-gradient(90deg, ${NAVY} 0%, ${YELLOW} 100%)` }} />

      <div className={cn(container, sectionPad, "relative z-10")}> 
        <SectionHeading
          overlineText="Tech stack"
          title="Our tech universe"
          description={techStackIntro}
          align="left"
          className="mb-12"
        />

        <div
          ref={containerRef}
          className="relative w-full select-none h-[28rem] sm:h-[36rem] lg:h-[44rem]"
          style={{ cursor: dragId !== null ? 'grabbing' : 'default', overflow: 'visible', touchAction: 'none', userSelect: 'none' }}
        >

        {bubbles.length > 0 && techStackLogos.map((logo, i) => {
          const b = bubbles[i];
          if (!b) return null;
          const size = b.r * 2;
          const isHovered = hoveredId === i;
          const isDragging = dragId === i;
          const active = isHovered || isDragging;
          const iconSize = Math.min(56, Math.max(16, b.r * 0.55));
          const showName = b.r >= 28;
          return (
            <div
              key={logo.id}
              ref={(el) => { domRefs.current[i] = el; }}
              className="absolute top-0 left-0"
              style={{ width: size, height: size, minWidth: 48, minHeight: 48, willChange: 'transform' }}
              onPointerEnter={() => setHoveredId(i)}
              onPointerLeave={() => setHoveredId(null)}
              onPointerDown={(e) => onBubblePointerDown(e, i)}
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
                <div className="flex items-center justify-center rounded-full overflow-hidden" style={{ width: iconSize, height: iconSize }}>
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
                {showName && (
                  <span
                    className="font-bold text-center leading-tight mt-2 px-2 hidden md:block"
                    style={{
                      color: active ? NAVY : '#374151',
                      fontSize: Math.max(9, b.r * 0.14),
                    }}
                  >
                    {logo.name}
                  </span>
                )}
                {/* bubble highlight removed for simpler mobile/touch experience */}
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
      </div>

      <div className="w-full" style={{ height: 4, background: `linear-gradient(90deg, ${NAVY} 0%, ${YELLOW} 100%)` }} />
    </section>
  );
}
