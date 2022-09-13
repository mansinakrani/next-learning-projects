// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

// module.exports = (phase, { defaultConfig }) => {
//   /**
//    * @type {import('next').NextConfig}
//    */
//   const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   }
//   return nextConfig
// }

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'mansi',
        mongodb_password: 'S8cEdU8sXC2fXbqc',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'mansi',
      mongodb_password: 'S8cEdU8sXC2fXbqc',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
