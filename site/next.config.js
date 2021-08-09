const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  images: {
    domains: ['http://localhost:300'],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
