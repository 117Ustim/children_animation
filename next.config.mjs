const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', 

 
  assetPrefix: isProd ? '/children_animation/' : '',
  basePath: isProd ? '/children_animation' : '',


  images: {
    unoptimized: true,
  },
};

export default nextConfig;
