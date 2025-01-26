/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "qfqherupptnneclszarn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
