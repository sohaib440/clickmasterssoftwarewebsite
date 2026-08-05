"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { LandingContainer } from "@/components/landing/landing-container";
import { SectionHeading } from "@/components/landing/section-heading";
import {
  type TechStackLogo,
  techStackIntro,
  techStackLogoGroups,
} from "@/data/landingPage";
import { cn } from "@/lib/utils";

const GOLD = "#d4af37";
const GOLD_MUTED = "rgba(212, 175, 55, 0.35)";

const GRAVITY = 0.38;
const RESTITUTION = 0.52;
const FRICTION = 0.86;
const DAMPING = 0.995;
const MIN_VELOCITY = 0.08;
const MAX_VELOCITY = 18;

const getNow = () => performance.now();

interface Bubble {
  id: number;
  logo: TechStackLogo;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  mass: number;
}

function createBubbles(logos: TechStackLogo[], w: number, h: number): Bubble[] {
  const count = logos.length;
  if (count === 0) return [];

  const fillRatio = Math.min(0.5, 0.28 + 14 / count);
  const areaPerBubble = (w * h * fillRatio) / count;
  const baseR = Math.sqrt(areaPerBubble / Math.PI);
  const minR = Math.max(16, Math.min(w, h) * 0.055);
  const densityCap = (w / Math.max(2, Math.ceil(Math.sqrt(count * 1.1)))) * 0.44;
  const maxR = Math.max(
    minR,
    Math.min(68, w * 0.15, h * 0.17, baseR * 1.1, densityCap)
  );

  const cols =
    count <= 4 ? 2 : count <= 8 ? 3 : count <= 14 ? 4 : Math.max(4, Math.ceil(Math.sqrt(count)));
  const rows = Math.ceil(count / cols);

  return logos.map((logo, i) => {
    const r = Math.min(maxR, Math.max(minR, baseR * (0.95 + Math.random() * 0.1)));
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cellW = w / cols;
    const cellH = h / rows;
    const centerX = cellW * col + cellW / 2;
    const centerY = cellH * row + cellH / 2;
    const offsetX = (Math.random() - 0.5) * Math.min(cellW * 0.22, w * 0.08);
    const offsetY = (Math.random() - 0.5) * Math.min(cellH * 0.22, h * 0.08);
    const initialY = Math.min(h - r - 8, Math.max(r + 8, centerY + offsetY));
    return {
      id: i,
      logo,
      x: Math.min(Math.max(centerX + offsetX, r + 6), w - r - 6),
      y: initialY,
      vx: (Math.random() - 0.5) * 1.4,
      vy: w < 768 ? 0.35 + Math.random() * 0.2 : 0,
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
      const minDist = a.r + b.r + 2;
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

function TechBubbleCanvas({ logos }: { logos: readonly TechStackLogo[] }) {
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
  const [activeName, setActiveName] = useState<string | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const initialize = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width <= 0 || height <= 0) {
        requestAnimationFrame(initialize);
        return;
      }
      const nextBubbles = createBubbles([...logos], width, height);
      bubblesRef.current = nextBubbles;
      domRefs.current = new Array(nextBubbles.length).fill(null);
      setBubbles(nextBubbles);
      setActiveName(null);
    };

    requestAnimationFrame(initialize);
    const observer = new ResizeObserver(() => requestAnimationFrame(initialize));
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
  }, [logos]);

  useEffect(() => {
    const getPos = (e: PointerEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMove = (e: globalThis.PointerEvent) => {
      if (!dragRef.current) return;
      const rect = containerRef.current!.getBoundingClientRect();
      const pos = getPos(e);
      const b = bubblesRef.current[dragRef.current.id];
      b.x = Math.min(Math.max(pos.x - dragRef.current.offsetX, b.r), rect.width - b.r);
      b.y = Math.min(Math.max(pos.y - dragRef.current.offsetY, b.r), rect.height - b.r);
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
    setActiveName(b.logo.name);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative h-[22rem] overflow-hidden rounded-2xl border border-white/10 bg-black sm:h-[26rem] lg:h-[28rem]"
        style={{
          cursor: dragId !== null ? "grabbing" : "default",
          touchAction: "none",
          userSelect: "none",
        }}
      >
        {bubbles.length > 0 &&
          logos.map((logo, i) => {
            const b = bubbles[i];
            if (!b) return null;
            const size = b.r * 2;
            const isHovered = hoveredId === i;
            const isDragging = dragId === i;
            const active = isHovered || isDragging;
            const iconSize = Math.min(46, Math.max(20, b.r * 0.52));
            const labelSize = Math.max(7, Math.min(9, b.r * 0.13));

            return (
              <div
                key={logo.id}
                ref={(el) => {
                  domRefs.current[i] = el;
                }}
                className="absolute top-0 left-0"
                style={{ width: size, height: size, willChange: "transform" }}
                onPointerEnter={() => {
                  setHoveredId(i);
                  setActiveName(logo.name);
                }}
                onPointerLeave={() => {
                  setHoveredId(null);
                  if (dragId === null) setActiveName(null);
                }}
                onPointerDown={(e) => onBubblePointerDown(e, i)}
              >
                <div
                  className="relative flex flex-col items-center justify-center rounded-full px-1.5 backdrop-blur-sm"
                  style={{
                    width: size,
                    height: size,
                    background: active ? "#ffffff" : "rgba(255,255,255,0.96)",
                    border: active ? `2px solid ${GOLD}` : "1.5px solid rgba(212,175,55,0.25)",
                    boxShadow: isDragging
                      ? `0 16px 40px rgba(0,0,0,0.4), 0 0 0 3px ${GOLD_MUTED}`
                      : isHovered
                        ? `0 10px 28px rgba(0,0,0,0.3), 0 0 0 2px ${GOLD_MUTED}`
                        : "0 4px 14px rgba(0,0,0,0.18)",
                    cursor: isDragging ? "grabbing" : "grab",
                    transform: isDragging ? "scale(1.05)" : isHovered ? "scale(1.04)" : "scale(1)",
                    transition: isDragging
                      ? "none"
                      : "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.icon}
                    alt=""
                    width={iconSize}
                    height={iconSize}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="max-h-full max-w-full shrink-0 object-contain"
                  />
                  {logo.name ? (
                    <span
                      className="mt-0.5 line-clamp-1 max-w-[92%] text-center font-medium leading-tight text-zinc-700"
                      style={{ fontSize: labelSize }}
                    >
                      {logo.name}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center px-4">
        <div
          className={cn(
            "rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs text-white/80 backdrop-blur-md transition-opacity duration-200",
            activeName ? "opacity-100" : "opacity-0"
          )}
        >
          {activeName ?? "Hover a technology"}
        </div>
      </div>
    </div>
  );
}

export function TechStackSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = techStackLogoGroups[activeIndex];
  const totalTools = techStackLogoGroups.reduce((sum, g) => sum + g.logos.length, 0);

  return (
    <section className="relative w-full overflow-hidden border-y border-white/10 bg-black text-white">
      <LandingContainer className="relative z-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            overlineText="Technology stack"
            title={
              <>
                Built with{" "}
                <span className="text-primary">proven, modern tools</span>
              </>
            }
            description={techStackIntro}
            align="left"
            dark
            className="max-w-3xl"
          />
          <div className="shrink-0 rounded-2xl border border-primary/25 bg-primary/5 px-5 py-4 text-center lg:text-right">
            <p className="font-heading text-3xl text-primary">{totalTools}+</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/50">
              Technologies mastered
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black p-4 shadow-[0_32px_80px_rgba(0,0,0,0.45)] sm:p-6">
          <div className="flex flex-col gap-6 lg:flex-row">
            <nav
              className="flex gap-2 overflow-x-auto pb-1 lg:w-56 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0"
              aria-label="Technology categories"
            >
              {techStackLogoGroups.map((group, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "group flex min-w-[9.5rem] shrink-0 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 lg:min-w-0 lg:w-full",
                      isActive
                        ? "border-primary/50 bg-primary/10 shadow-[inset_0_1px_0_rgba(212,175,55,0.2)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                    )}
                  >
                    <div>
                      <p
                        className={cn(
                          "text-[10px] font-medium uppercase tracking-[0.18em]",
                          isActive ? "text-primary" : "text-white/35"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p
                        className={cn(
                          "mt-0.5 font-heading text-sm",
                          isActive ? "text-white" : "text-white/70"
                        )}
                      >
                        {group.label}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-medium",
                        isActive
                          ? "bg-primary/20 text-primary"
                          : "bg-white/5 text-white/40"
                      )}
                    >
                      {group.logos.length}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="min-w-0 flex-1">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading text-xl text-white sm:text-2xl">
                    {activeGroup.label}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-white/55">
                    {activeGroup.description}
                  </p>
                </div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/35">
                  Drag · Explore
                </p>
              </div>

              <TechBubbleCanvas key={activeGroup.id} logos={activeGroup.logos} />

              <div className="mt-5 flex flex-wrap gap-2">
                {activeGroup.logos.map((logo) => (
                  <span
                    key={logo.id}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/65 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-white"
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
}
