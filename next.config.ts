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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
        loader: "@svgr/webpack",
          options: {
            dimensions: false
          }
        }
      ],
    });

    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [{
          loader: "@svgr/webpack",
          options: {
            dimensions: false
          }
        }],
        as: "*.js"
      }
    }
  }
};

export default nextConfig;
