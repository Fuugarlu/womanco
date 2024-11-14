import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/womanco',
  env: {
    NEXT_PUBLIC_BASE_PATH: "/womanco",
  },
  images: { unoptimized: true }
};

export default nextConfig;