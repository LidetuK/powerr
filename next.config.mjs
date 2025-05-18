/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use static export
  // output: 'export',
  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
  },
  // Trailing slash for better static file handling
  // trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
