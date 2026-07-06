"use client";

import { useEffect } from "react";

/**
 * Dev-only: removes service workers left by other apps on localhost:3000
 * (Vite/PWA projects that register sw.js and request /@vite/client, etc.).
 */
export function ClearStaleServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    void (async () => {
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((registration) => registration.unregister()));
      }

      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      }
    })();
  }, []);

  return null;
}
