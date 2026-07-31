import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

import { ClearStaleServiceWorker } from "@/components/dev/clear-stale-sw";
import { SiteFooter } from "@/components/landing/site-footer";
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
  icons: {
    icon: [{ url: siteBrand.favicon, type: "image/png" }],
    apple: [{ url: siteBrand.appleIcon, type: "image/png" }],
  },
  verification: {
    google: "Nfu_VzU_CiwEP8RUZP8rojwAijeduR9oYaHc7T40xQY",
  },
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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQ5RN57R');`}
        </Script>
      </head>
      <body className="flex min-h-full w-full flex-col overflow-x-clip font-sans" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQ5RN57R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <ClearStaleServiceWorker />
        <MotionInit />
        <div className="flex w-full flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
