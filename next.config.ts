import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  // sem servidor para otimizar imagens no export estático
  images: { unoptimized: true },
};

export default nextConfig;
