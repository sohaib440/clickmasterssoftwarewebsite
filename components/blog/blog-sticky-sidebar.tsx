"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type BlogStickySidebarProps = {
  children: ReactNode;
  className?: string;
};

type StickMode = "static" | "fixed" | "end";

const VIEWPORT_MARGIN = 24;
/** Shift sticky panel slightly below true vertical center */
const CENTER_OFFSET = 48;

export function BlogStickySidebar({ children, className }: BlogStickySidebarProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<StickMode>("static");
  const [fixedStyle, setFixedStyle] = useState<CSSProperties>({});

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const rail = railRef.current;
      const panel = panelRef.current;
      if (!rail || !panel) return;

      const railRect = rail.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const maxPanelHeight = Math.max(160, viewportHeight - VIEWPORT_MARGIN * 2);
      const panelHeight = Math.min(panel.scrollHeight, maxPanelHeight);
      const centeredTop = Math.max(
        VIEWPORT_MARGIN,
        Math.min(
          (viewportHeight - panelHeight) / 2 + CENTER_OFFSET,
          viewportHeight - panelHeight - VIEWPORT_MARGIN
        )
      );

      if (railRect.top > centeredTop) {
        setMode("static");
        setFixedStyle({ maxHeight: maxPanelHeight });
        return;
      }

      if (railRect.bottom <= centeredTop + panelHeight) {
        setMode("end");
        setFixedStyle({ maxHeight: maxPanelHeight });
        return;
      }

      setMode("fixed");
      setFixedStyle({
        position: "fixed",
        top: centeredTop,
        left: railRect.left,
        width: railRect.width,
        maxHeight: maxPanelHeight,
        zIndex: 30,
      });
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div ref={railRef} className={cn("absolute inset-0", className)}>
      <div
        ref={panelRef}
        className={cn(
          "space-y-4 overflow-y-auto overscroll-contain",
          mode === "static" && "relative",
          mode === "end" && "absolute bottom-0 left-0 right-0"
        )}
        style={fixedStyle}
      >
        {children}
      </div>
    </div>
  );
}
