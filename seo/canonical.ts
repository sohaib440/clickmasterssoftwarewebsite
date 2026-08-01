import type { Metadata } from "next";

/**
 * Self-referencing canonical for a page path.
 * Works with `metadataBase` in the root layout to produce absolute URLs.
 */
export function selfCanonical(path: string): Pick<Metadata, "alternates"> {
  const canonical =
    path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;

  return {
    alternates: { canonical },
  };
}
