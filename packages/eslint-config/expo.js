import expoConfig from 'eslint-config-expo/flat.js';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

import { sharedRules } from './rules.js';

/**
 * Expo(React Native) 앱용 설정
 */
export default defineConfig([
  expoConfig,
  globalIgnores([
    '.expo/**',
    'dist/**',
    'web-build/**',
    'ios/**',
    'android/**',
    'coverage/**',
    'expo-env.d.ts',
  ]),
  sharedRules,
  prettier,
]);
