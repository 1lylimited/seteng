/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/seteng', // Ensure this matches your repository name
};

module.exports = nextConfig;