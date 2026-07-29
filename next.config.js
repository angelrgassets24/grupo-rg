/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    useTypeScriptCli: true,
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
