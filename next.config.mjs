const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Обязательно для статического экспорта

  // Настройка для GitHub Pages
  assetPrefix: isProd ? '/children_animation/' : '',
  basePath: isProd ? '/children_animation' : '',

  // Если вы используете компонент Next/Image, вам может потребоваться отключить его оптимизацию
  // или использовать сторонний сервис для оптимизации изображений.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
