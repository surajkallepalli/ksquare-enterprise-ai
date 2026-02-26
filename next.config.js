/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disables Turbopack, ensures Tailwind works
  },
};

module.exports = nextConfig;