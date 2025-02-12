import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
    domains: ["img.icons8.com", "127.0.0.1"],
  },
};

export default nextConfig;
