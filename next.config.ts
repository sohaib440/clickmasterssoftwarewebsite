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
      // Former service URLs → new main service routes
      {
        source: "/software-development/web-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/software-development/mobile-app-development",
        destination: "/mobile-development",
        permanent: true,
      },
      {
        source: "/design-ux",
        destination: "/ui-ux-design",
        permanent: true,
      },
      {
        source: "/design-ux/:path*",
        destination: "/ui-ux-design/:path*",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai",
        destination: "/artificial-intelligence",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai/:path*",
        destination: "/artificial-intelligence/:path*",
        permanent: true,
      },
      {
        source: "/machine-learning-ml",
        destination: "/machine-learning",
        permanent: true,
      },
      {
        source: "/machine-learning-ml/:path*",
        destination: "/machine-learning/:path*",
        permanent: true,
      },
      {
        source: "/data-security",
        destination: "/data-business-intelligence",
        permanent: true,
      },
      {
        source: "/data-security/dashboards",
        destination: "/data-business-intelligence/dashboards",
        permanent: true,
      },
      {
        source: "/data-security/pipelines",
        destination: "/data-business-intelligence/pipelines",
        permanent: true,
      },
      {
        source: "/data-security/security-audits",
        destination: "/cybersecurity/security-audits",
        permanent: true,
      },
      {
        source: "/data-security/compliance",
        destination: "/cybersecurity/compliance",
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
