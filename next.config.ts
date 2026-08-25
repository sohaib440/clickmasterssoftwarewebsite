import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://www.gstatic.com https://www.clarity.ms https://scripts.clarity.ms https://*.clarity.ms",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self' blob:",
  "connect-src 'self' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://www.google.com https://*.google.com https://www.clarity.ms https://*.clarity.ms https://c.bing.com",
  "frame-src 'self' https://www.googletagmanager.com https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 80, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "about.gitlab.com",
      },
      {
        protocol: "https",
        hostname: "vercel.com",
      },
      {
        protocol: "https",
        hostname: "openai.com",
      },
      {
        protocol: "https",
        hostname: "zustand-demo.pmnd.rs",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
