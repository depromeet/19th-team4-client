import * as Sentry from '@sentry/nextjs';

// DSN 이 없으면(로컬 개발 등) Sentry 는 비활성화됩니다.
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT ?? process.env.NODE_ENV,
  enabled:
    process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_SENTRY_ENABLED === 'true',
  // 에러 수집만 사용합니다. 성능 트레이싱을 켜려면 tracesSampleRate 를 지정하세요.
});

// App Router 네비게이션 추적
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
