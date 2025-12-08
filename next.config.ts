import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com"], // Add any external domains you need
  },
};

export default nextConfig;
