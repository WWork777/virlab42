/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Безопасные заголовки (правильно настроенные)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'"
          }
        ]
      }
    ];
  },

  // 2. Оптимизация изображений
  images: {
    domains: [], // Добавьте свои домены для изображений
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },

  // 3. Базовые настройки
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  reactStrictMode: true,

  // 4. Настройки для production
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },

  // 5. Ограничение размера тела запроса
  serverRuntimeConfig: {
    maxRequestBodySize: '10mb'
  },
  
  // 6. Настройки сборки
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },

  // 7. Настройки трассировки (для production)
  experimental: {
    // Только безопасные экспериментальные функции
    nextScriptWorkers: true,
    optimizeCss: process.env.NODE_ENV === 'production',
    scrollRestoration: true
  },

  // 8. Перенаправления
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/login',
        permanent: true
      },
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true
      }
    ];
  },

  // 9. Резервная страница для 404
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  }
};

export default nextConfig;