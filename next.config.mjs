/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // wajib untuk GitHub Pages (static export)
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  basePath: '/agil_supriyanto', // nama repo kamu persis di GitHub
  assetPrefix: '/agil_supriyanto/',
};

module.exports = nextConfig;
