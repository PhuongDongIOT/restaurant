/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  images: {
    domains: ['localhost', 'images.unsplash.com', 'awsbutket2468.s3.ap-northeast-1.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        port: ''
      }
    ]
  },
  // transpilePackages: ['geist']
};

module.exports = nextConfig;
