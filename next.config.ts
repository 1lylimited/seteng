/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',           // Output folder for export
  images: {
    unoptimized: true,      // Required if you're using <Image />
  },
  basePath: '/seteng',  // 👈 Replace with your actual GitHub repo name
};

module.exports = nextConfig;
