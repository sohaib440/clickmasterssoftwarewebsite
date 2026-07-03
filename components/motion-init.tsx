"use client";

import { useLayoutEffect } from "react";

/** Enables scroll-reveal styles before paint to avoid a post-hydration flash. */
export function MotionInit() {
  useLayoutEffect(() => {
    document.documentElement.classList.add("motion-js");
  }, []);

  return null;
}
