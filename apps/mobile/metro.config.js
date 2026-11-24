const { getSentryExpoConfig } = require('@sentry/react-native/metro');
const { withNativewind } = require('nativewind/metro');

// 모노레포 설정(watchFolders 등)은 expo/metro-config 가 자동으로 처리합니다.
// getSentryExpoConfig 는 getDefaultConfig 를 감싸 소스맵에 Debug ID 를 주입합니다.
const config = getSentryExpoConfig(__dirname);

module.exports = withNativewind(config);
