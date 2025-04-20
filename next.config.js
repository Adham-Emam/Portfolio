/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: { domains: ['res.cloudinary.com'], unoptimized: true },
}

module.exports = nextConfig
