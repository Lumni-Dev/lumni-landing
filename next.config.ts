import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Without this, Next detects the
  // stray lockfile at /home/lumni/package-lock.json and infers the wrong root.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
