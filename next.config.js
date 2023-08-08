/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  compiler: {
    reactRemoveProperties: true,
  },
};

module.exports = nextConfig;
