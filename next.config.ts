import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 80, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
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
  async redirects() {
    return [
      {
        source: "/solutions/ecommerce",
        destination: "/solutions/ecommerce-platform",
        permanent: true,
      },
      {
        source: "/projects/clinic-erp-islamabad",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/projects/school-lms-lahore",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/projects/retail-pos-karachi",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
