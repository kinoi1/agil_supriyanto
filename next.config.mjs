/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // wajib untuk GitHub Pages (static export)
  images: {
    unoptimized: true,
  },
  basePath: 'https://agilsdev.my.id/', // nama repo kamu persis di GitHub
  assetPrefix: 'https://agilsdev.my.id/',
};

module.exports = nextConfig;
