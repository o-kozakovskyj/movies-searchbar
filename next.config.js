/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // TODO: Remove this domain after mock data removed
    domains: [
      'm.media-amazon.com',
    ],
  },
}

module.exports = nextConfig
