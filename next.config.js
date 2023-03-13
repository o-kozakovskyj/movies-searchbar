/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // TODO: Remove this domain after mock data removed
    domains: [
      'm.media-amazon.com',
    ],
  },
  env: {
    API_URL: "http://www.omdbapi.com/?apikey=",
    API_KEY: "d31d01b9",
  },
}

module.exports = nextConfig
