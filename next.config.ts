import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: 'dist',
  output: 'export', // ini otomatis menggantikan `next export`
  images: {
    unoptimized: true, // GitHub Pages tidak mendukung image optimizer bawaan Next.js
  },
  basePath: '/agil_supriyanto', // ganti dengan nama repository kamu
  assetPrefix: '/agil_supriyanto/',
};

export default nextConfig;
