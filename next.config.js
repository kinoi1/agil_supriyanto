/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // wajib untuk GitHub Pages
  basePath: "https://agilsdev.my.id/", // ganti sesuai nama repo
  assetPrefix: "https://agilsdev.my.id/",
  images: { unoptimized: true }, // hindari error saat export
};

module.exports = nextConfig;
