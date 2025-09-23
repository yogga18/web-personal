/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  // Comment ini untuk production server
  // distDir: 'build',  // Comment ini untuk production server
  // image
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "img.icons8.com",
      "drive.google.com",
      "medium.com",
      "miro.medium.com",
    ],
  },
};

module.exports = nextConfig;
