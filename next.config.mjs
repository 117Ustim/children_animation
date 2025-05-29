/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
    ],
  },
  basePath: '/children_animation',
  assetPrefix: '/children_animation/',
  trailingSlash: true,
  output: 'export',

};

export default nextConfig;