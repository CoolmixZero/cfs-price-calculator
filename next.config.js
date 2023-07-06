/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);
 
module.exports = withNextIntl({
  // Other Next.js configuration ...
});