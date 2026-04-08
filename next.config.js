/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    NEXT_PUBLIC_PORT: '9000',
  },
  // Enable experimental app directory (App Router) – already default in Next 15.
};

module.exports = nextConfig;
