/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // /job-fit is superseded by the JD mode inside /chat
      { source: "/job-fit", destination: "/chat", permanent: true },
    ]
  },
}

export default nextConfig
