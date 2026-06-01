"use client";

import { useEffect } from "react";

/** Enables scroll-reveal styles only after hydration (content stays visible without JS). */
export function MotionInit() {
  useEffect(() => {
    document.documentElement.classList.add("motion-js");
  }, []);

  return null;
}
