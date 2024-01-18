/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  output: 'standalone',

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },

  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@': path.resolve(__dirname, './'),
  //   };

  //   return config;
  // },
};

module.exports = nextConfig;
