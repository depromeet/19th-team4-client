import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs/config';

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

export default withSentryConfig(nextConfig, {
  // 소스맵 업로드 설정: SENTRY_AUTH_TOKEN / SENTRY_ORG / SENTRY_PROJECT 환경변수가 없으면 업로드를 건너뜁니다.
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  // 더 많은 클라이언트 소스맵을 업로드해 스택트레이스 해석 정확도를 높입니다.
  widenClientFileUpload: true,
  // 업로드 후 번들에서 소스맵 파일을 제거합니다.
  sourcemaps: { deleteSourcemapsAfterUpload: true },
});
