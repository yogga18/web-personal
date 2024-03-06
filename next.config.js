/** @type {import('next').NextConfig} */

const { parsed: env } = require('dotenv').config();

const nextConfig = {
  output: 'export',
  distDir: 'build',
  // image
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'img.icons8.com',
      'drive.google.com',
      'medium.com',
      'miro.medium.com',
    ],
  },
  // env
  env: {
    BASE_URL: env.BASE_URL,
  },
};

module.exports = nextConfig;
