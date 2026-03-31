import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ESTA LÍNEA ES LA QUE CREA LA CARPETA OUT
  images: {
    unoptimized: true,
  },
};

export default nextConfig