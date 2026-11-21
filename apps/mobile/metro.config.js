const { getDefaultConfig } = require('expo/metro-config');
const { withNativewind } = require('nativewind/metro');

// 모노레포 설정(watchFolders 등)은 expo/metro-config 가 자동으로 처리합니다.
const config = getDefaultConfig(__dirname);

module.exports = withNativewind(config);
