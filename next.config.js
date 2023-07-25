 /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     unoptimized: true,
//   },
// }
// module.exports = nextConfig

const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'build',
  images: {
    loader:'imgix',
    path:'https://worldshaker.imgix.net/',
    unoptimized: true 
  }, 
  distDir: 'build',
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config
  },
  trailingSlash: true,
  //  exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/story': { page: '/story' },
  //     '/contact': { page: '/contact' },
  //     '/fade-solutions': { page: '/fade-solutions' }, 
  //     '/west-side-german-shepherd': { page: '/west-side-german-shepherd' }, 
  //   }
  // },
}
module.exports = nextConfig