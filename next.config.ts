import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: '.next', // Custom output directory
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"], // Add the domain here
  },
};

export default nextConfig;