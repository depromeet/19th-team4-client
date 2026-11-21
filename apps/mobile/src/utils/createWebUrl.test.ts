import { describe, expect, it } from 'vitest';

import { createWebUrl } from './createWebUrl';

describe('createWebUrl', () => {
  it('envUrl 이 있으면 우선 사용하고 끝의 슬래시를 정리한다', () => {
    expect(
      createWebUrl({
        path: '/',
        platform: 'ios',
        envUrl: 'https://example.com/',
        hostUri: '192.168.0.10:8081',
      }),
    ).toBe('https://example.com/');
  });

  it('Metro 개발 서버의 호스트로 Next.js 개발 서버 주소를 만든다', () => {
    expect(createWebUrl({ path: '/', platform: 'ios', hostUri: '192.168.0.10:8081' })).toBe(
      'http://192.168.0.10:3000/',
    );
  });

  it('Android 에뮬레이터에서는 localhost 대신 10.0.2.2 를 사용한다', () => {
    expect(createWebUrl({ path: '/', platform: 'android', hostUri: 'localhost:8081' })).toBe(
      'http://10.0.2.2:3000/',
    );
  });

  it('hostUri 가 없으면 localhost 를 사용하고 path 앞에 슬래시를 붙인다', () => {
    expect(createWebUrl({ path: 'about', platform: 'ios' })).toBe('http://localhost:3000/about');
  });
});
