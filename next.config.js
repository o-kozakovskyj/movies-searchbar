/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'm.media-amazon.com',
      'via.placeholder.com',
    ],
  },
  env: {
    API_URL: "http://www.omdbapi.com/?apikey=",
    API_KEY: "d31d01b9",
  },
}

module.exports = nextConfig
