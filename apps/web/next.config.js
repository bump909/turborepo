/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui', '@repo/lib'],
  images: {
    domains: ['images.unsplash.com'],
  },
}
