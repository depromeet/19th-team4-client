# AGENTS.md

Next.js(App Router) 웹(`apps/web`)과 Expo 앱(`apps/mobile`)을 함께 관리하는 pnpm 모노레포입니다. 구조와 규칙의 상세는 [README.md](./README.md)를 따릅니다.

## 명령

- 패키지 매니저는 pnpm 입니다. (`package.json` 의 `packageManager` 버전, Node 22)
- 검증: `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm format:check`
- 특정 패키지만: `pnpm --filter <web|mobile|@repo/...> <script>`
- 앱(Expo) 의존성 추가는 `apps/mobile` 에서 `npx expo install <package>` 를 사용합니다.

## 코드 배치

- 라우트 파일(`src/app`)에는 페이지/레이아웃만 둡니다.
- 특정 도메인 전용 코드는 `src/domains/<domain>` 아래에 두고, 도메인 간에는 서로 import 하지 않습니다.
- 여러 도메인이 함께 쓰는 코드는 상위 `components`·`hooks`·`utils` 로, 웹과 앱이 함께 쓰는 순수 로직·타입은 `packages/shared` 로 옮깁니다.
- 공통 의존성 버전은 `pnpm-workspace.yaml` 의 `catalog` 에서 관리합니다.

## 에이전트 설정

- 스킬 원본은 `.agents/skills/` 이며 `skills` CLI 와 `skills-lock.json` 으로 관리합니다. 직접 수정하지 않습니다.
- MCP 서버 원본은 `.agents/mcp.json` 입니다. 서버를 바꿀 때는 `.codex/config.toml` 도 함께 수정합니다.
