import { defineConfig } from 'vitest/config';

/**
 * React Native 컴포넌트는 Vitest(Vite) 로 변환이 어려워
 * 플랫폼에 의존하지 않는 순수 로직(utils, hooks 의 로직 등) 테스트에 사용합니다.
 */
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
