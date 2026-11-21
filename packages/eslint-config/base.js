import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { sharedRules } from './rules.js';

/**
 * 플랫폼 무관 라이브러리(packages/*)용 기본 설정
 */
export default defineConfig([
  globalIgnores(['**/node_modules/**', '**/dist/**', '**/coverage/**']),
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  sharedRules,
  // Prettier 와 충돌하는 포맷팅 규칙 비활성화 (항상 마지막)
  prettier,
]);
