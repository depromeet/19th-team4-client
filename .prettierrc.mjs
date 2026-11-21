/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
  // Tailwind 클래스 정렬 대상 함수
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  overrides: [
    {
      // 웹: Tailwind v4 엔트리 CSS 기준으로 클래스 정렬
      files: 'apps/web/**',
      options: { tailwindStylesheet: './apps/web/src/app/globals.css' },
    },
    {
      // 앱: NativeWind 엔트리 CSS 기준으로 클래스 정렬
      files: 'apps/mobile/**',
      options: { tailwindStylesheet: './apps/mobile/src/global.css' },
    },
  ],
};

export default config;
