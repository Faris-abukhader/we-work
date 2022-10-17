/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL:process.env.API_URL,
    JWT_SECRET:process.env.JWT_SECRET,
    NEXTAUTH_URL:process.env.NEXTAUTH_URL,
    GOOGLE_API_KEY:process.env.GOOGLE_API_KEY
  },
}

module.exports = nextConfig
