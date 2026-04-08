/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure the app runs on port 9000 when started via `next start`
  // This is handled by the scripts in package.json.
  // For development we also expose the port via env.
  env: {
    NEXT_PUBLIC_PORT: '9000',
  },
  // Enable experimental app directory (App Router) – already default in Next 15.
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
