/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    useTypeScriptCli: true,
  },
  skipTrailingSlashRedirect: true,
  swcMinify: true,
};

module.exports = nextConfig;
