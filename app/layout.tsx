import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { MotionInit } from "@/components/motion-init";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Nexus Software — Software at the edge of light",
  description:
    "A boutique software studio building products at the horizon of design and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", inter.variable, playfair.variable)}>
      <body className="min-h-full w-full font-sans" suppressHydrationWarning>
        <MotionInit />
        {children}
      </body>
    </html>
  );
}
