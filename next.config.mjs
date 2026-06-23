/** @type {import('next').NextConfig} */
const nextConfig = {
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
