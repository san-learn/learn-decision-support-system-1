/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/authentication/sign-in",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
