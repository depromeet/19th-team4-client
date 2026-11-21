const WEB_DEV_PORT = 3000;
// Android 에뮬레이터에서 호스트 PC 의 localhost 를 가리키는 주소
const ANDROID_EMULATOR_HOST = '10.0.2.2';
const LOOPBACK_HOSTS = ['localhost', '127.0.0.1'];

interface CreateWebUrlParams {
  path: string;
  platform: string;
  /** EXPO_PUBLIC_WEB_URL 로 지정한 웹 주소 (지정 시 최우선) */
  envUrl?: string;
  /** Metro 개발 서버 주소 (예: "192.168.0.10:8081") */
  hostUri?: string;
}

/**
 * WebView 에서 열 웹(apps/web) 주소를 만듭니다.
 *
 * 1. envUrl 이 있으면 그 주소를 사용합니다. (스테이징/프로덕션)
 * 2. 없으면 Metro 개발 서버와 같은 호스트의 Next.js 개발 서버(3000 포트)를 사용합니다.
 *    실기기에서도 PC 의 LAN IP 로 접근할 수 있습니다.
 */
export function createWebUrl({ path, platform, envUrl, hostUri }: CreateWebUrlParams): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (envUrl) {
    return `${envUrl.replace(/\/+$/, '')}${normalizedPath}`;
  }

  const devHost = hostUri?.split(':')[0] || 'localhost';
  const isLoopback = LOOPBACK_HOSTS.includes(devHost);
  const host = isLoopback && platform === 'android' ? ANDROID_EMULATOR_HOST : devHost;

  return `http://${host}:${WEB_DEV_PORT}${normalizedPath}`;
}
