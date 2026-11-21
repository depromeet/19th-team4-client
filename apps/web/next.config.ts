import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // 빌드 없이 TS 소스를 그대로 export 하는 워크스페이스 패키지
  transpilePackages: ['@repo/shared'],
  // 앱(WebView)이 LAN IP / Android 에뮬레이터(10.0.2.2)로 개발 서버에 접근할 수 있도록 허용
  allowedDevOrigins: ['10.*.*.*', '172.*.*.*', '192.168.*.*'],
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
