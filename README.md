# 19th-team4-client

Next.js(App Router) 웹과 React Native(Expo) 앱을 함께 관리하는 pnpm 모노레포입니다.

## 기술 스택

| 영역        | 웹 (`apps/web`)                   | 앱 (`apps/mobile`)                   |
| ----------- | --------------------------------- | ------------------------------------ |
| 프레임워크  | Next.js 16 (App Router)           | Expo SDK 58 + Expo Router            |
| 스타일링    | Tailwind CSS v4                   | NativeWind v5 (RC) + Tailwind CSS v4 |
| 단위 테스트 | Vitest + Testing Library (jsdom)  | Vitest (순수 로직 전용)              |
| E2E 테스트  | Playwright                        | -                                    |
| 린트/포맷   | ESLint 9 (flat config) + Prettier | ESLint 9 (flat config) + Prettier    |

## 디렉토리 구조

```
.
├─ apps
│  ├─ web                     # Next.js
│  │  ├─ e2e                  # Playwright 테스트
│  │  └─ src
│  │     ├─ app               # 라우트 (페이지/레이아웃만 둡니다)
│  │     ├─ components        # 여러 도메인에서 쓰는 공용 코드
│  │     ├─ hooks
│  │     ├─ utils
│  │     └─ domains
│  │        └─ <domain>       # 함께 수정되는 코드를 도메인 단위로 묶습니다
│  │           ├─ components
│  │           ├─ hooks
│  │           └─ utils
│  └─ mobile                  # Expo (src 구조는 web 과 동일)
└─ packages
   ├─ eslint-config           # @repo/eslint-config  (base / next / expo)
   ├─ typescript-config       # @repo/typescript-config
   ├─ tailwind-config         # @repo/tailwind-config (웹/앱 공용 디자인 토큰 theme.css)
   └─ shared                  # @repo/shared (플랫폼 무관 utils / types)
```

`src` 구조는 [Frontend Fundamentals - 함께 수정되는 파일을 같은 디렉토리에 두기](https://frontend-fundamentals.com/code-quality/code/examples/code-directory.html)를 따릅니다.

- 특정 도메인에서만 쓰는 코드는 `domains/<domain>` 아래에 둡니다.
- 한 도메인에서 다른 도메인의 코드를 import 하지 않습니다. 여러 도메인이 함께 쓰게 되면 상위의 `components`·`hooks`·`utils` 로 옮깁니다.
- 웹과 앱이 함께 쓰는 순수 로직이나 타입은 `packages/shared` 에 둡니다.

## 시작하기

```bash
corepack enable          # package.json 의 packageManager(pnpm) 사용
pnpm install

pnpm dev:web             # http://localhost:3000
pnpm dev:mobile          # Expo 개발 서버
```

## 주요 스크립트 (루트)

| 명령                | 설명                                      |
| ------------------- | ----------------------------------------- |
| `pnpm lint`         | 전체 ESLint                               |
| `pnpm lint:fix`     | 전체 ESLint 자동 수정                     |
| `pnpm typecheck`    | 전체 타입 검사                            |
| `pnpm test`         | 전체 Vitest                               |
| `pnpm test:e2e`     | 웹 Playwright E2E                         |
| `pnpm format`       | Prettier 포맷 (Tailwind 클래스 정렬 포함) |
| `pnpm format:check` | Prettier 포맷 검사                        |

특정 패키지에서만 실행하려면 `pnpm --filter <name> <script>` 를 사용합니다. (예: `pnpm --filter mobile test`)

Playwright 를 처음 실행하기 전에 브라우저를 설치해야 합니다.

```bash
pnpm --filter web exec playwright install
```

## 의존성 관리

- 공통 버전(React, TypeScript, ESLint, Vitest, Tailwind 등)은 `pnpm-workspace.yaml` 의 `catalog` 에서 관리하고, 각 `package.json` 에서는 `"catalog:"` 로 참조합니다.
- 앱(Expo)에 패키지를 추가할 때는 SDK 호환 버전을 받기 위해 `apps/mobile` 에서 `npx expo install <package>` 를 사용합니다.
- `packages/shared` 는 빌드 없이 TS 소스를 그대로 export 합니다. 웹은 `next.config.ts` 의 `transpilePackages` 로, 앱은 Metro 가 직접 변환합니다.

## 주의 사항

- **NativeWind v5 는 RC 버전**입니다. `nativewind` 와 `react-native-css` 는 서로 짝이 맞는 버전을 정확히 고정해야 합니다.
- `react-native-css` RC 는 `lightningcss@1.33` 과 호환되지 않아 `apps/mobile` 에 `lightningcss@1.30.1` 을 고정했습니다. NativeWind 정식 버전이 나오면 고정을 풀어도 되는지 확인해 주세요.
- `typescript-eslint` 가 TypeScript `<6.1` 까지만, `eslint-plugin-react`·`eslint-plugin-import` 가 ESLint 9 까지만 지원하여 각각 TypeScript 6.0, ESLint 9 를 사용합니다.
- 앱의 Vitest 는 React Native 컴포넌트를 변환하지 못하므로 순수 로직 테스트에만 사용합니다.
