import Constants from 'expo-constants';
import { Platform } from 'react-native';

import { createWebUrl } from './createWebUrl';

/**
 * 현재 실행 환경에 맞는 웹(apps/web) 주소를 반환합니다.
 * @example getWebUrl('/') // "http://192.168.0.10:3000/"
 */
export function getWebUrl(path: string): string {
  return createWebUrl({
    path,
    platform: Platform.OS,
    envUrl: process.env.EXPO_PUBLIC_WEB_URL,
    hostUri: Constants.expoConfig?.hostUri,
  });
}
