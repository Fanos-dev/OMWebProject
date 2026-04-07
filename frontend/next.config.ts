import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" },
    ],
  },
  async rewrites() {
    return [
      { source: "/api/:path*", destination: "http://localhost:8081/:path*" },
    ];
  },
};

export default nextConfig;
