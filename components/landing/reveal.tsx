"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay before animation starts (ms) */
  delay?: number;
  direction?: RevealDirection;
  /** Play on mount (hero) instead of waiting for scroll */
  immediate?: boolean;
};

const revealCallbacks = new WeakMap<Element, () => void>();
let sharedObserver: IntersectionObserver | undefined;

function initRevealObserver() {
  if (sharedObserver || typeof window === "undefined") return;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        revealCallbacks.get(el)?.();
        sharedObserver?.unobserve(el);
        revealCallbacks.delete(el);
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const margin = window.innerHeight * 0.06;
  return rect.top < window.innerHeight - margin && rect.bottom > margin;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    if (immediate) {
      setVisible(false);
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const el = ref.current;
    if (!el) return;

    if (isInViewport(el)) {
      setVisible(true);
      return;
    }

    setVisible(false);
    initRevealObserver();
    revealCallbacks.set(el, () => setVisible(true));
    sharedObserver?.observe(el);

    return () => {
      sharedObserver?.unobserve(el);
      revealCallbacks.delete(el);
    };
  }, [immediate]);

  useEffect(() => {
    const el = ref.current;
    if (!el || immediate || prefersReducedMotion() || visible) return;

    if (!isInViewport(el)) return;

    setVisible(true);
    sharedObserver?.unobserve(el);
    revealCallbacks.delete(el);
  }, [immediate, visible]);

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reveal",
        `motion-reveal--${direction}`,
        immediate && "motion-reveal--immediate",
        visible && "motion-reveal--visible",
        className
      )}
      style={{ "--motion-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
