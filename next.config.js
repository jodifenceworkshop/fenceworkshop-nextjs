/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fenceworkshop.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fenceworkshop.com',
      },
    ],
  },
}

module.exports = nextConfig
