// const fs = require('fs');
// const path = require('path');
// const yaml = require('js-yaml');

// const configPath = path.join(process.cwd(), '.coderabbit.yaml');
// let config = {};

// try {
//   const fileContents = fs.readFileSync(configPath, 'utf8');
//   config = yaml.load(fileContents);
// } catch (e) {
//   console.error("Error reading the .coderabbit.yaml file", e);
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
    nextScriptWorkers: true,
  },
  images: {
    domains: ['banhcuonanhvu.com', 'api-picture.banhcuonanhvu.com'],
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
  // env: {
  //   CoderabbitConfig: JSON.stringify(config),
  // },
  // transpilePackages: ['geist']
};

module.exports = nextConfig;
