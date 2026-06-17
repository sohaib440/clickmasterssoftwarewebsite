import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { MotionInit } from "@/components/motion-init";
import { siteBrand, siteMetadata } from "@/lib/landing/brand";
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
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteBrand.name}`,
  },
  description: siteMetadata.description,
  keywords: [...siteMetadata.keywords],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
