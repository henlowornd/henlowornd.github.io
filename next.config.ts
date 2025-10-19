import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**"
      },
      {
        protocol: "https",
        hostname: "nocp.space",
        port: "",
        pathname: "/static/**"
      },
      {
        protocol: "https",
        hostname: "opanel.cn",
        port: "",
        pathname: "/static/**"
      }
    ]
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

export default nextConfig;
