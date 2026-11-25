'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="ko">
      <body>
        {/* App Router 에는 status code 를 받지 않는 Error 컴포넌트가 없어 0 을 넘깁니다. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
