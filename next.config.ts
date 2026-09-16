import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  basePath: '/agil_supriyanto', 
  assetPrefix: '/agil_supriyanto/',
};

export default nextConfig;
