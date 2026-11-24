import '../global.css';

import * as Sentry from '@sentry/react-native';
import { Stack, useNavigationContainerRef } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

const navigationIntegration = Sentry.reactNavigationIntegration();

// DSN 이 없으면 Sentry 는 아무것도 전송하지 않습니다.
Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  environment:
    process.env.EXPO_PUBLIC_SENTRY_ENVIRONMENT ?? (__DEV__ ? 'development' : 'production'),
  enabled: !__DEV__,
  sendDefaultPii: false,
  integrations: [navigationIntegration],
});

function RootLayout() {
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    navigationIntegration.registerNavigationContainer(navigationRef);
  }, [navigationRef]);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </>
  );
}

// 렌더링 중 발생한 에러를 Sentry 로 전달하고 touch 이벤트 breadcrumb 를 수집합니다.
export default Sentry.wrap(RootLayout);
