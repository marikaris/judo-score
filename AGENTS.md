# AGENTS.md

## Project

Judo Score Board is a Vue 3 and TypeScript application that runs in browsers
and as an Electron desktop app. The renderer is in `src/`; Electron-specific
code is in `electron/`.

## Commands

```sh
yarn dev              # Run the web development server
yarn electron:dev     # Run Electron with hot reload
yarn build            # Create a web production build
yarn electron:build   # Package the Electron app
yarn test             # Run all Jest tests
yarn test <file>      # Run one test file, e.g. src/utils/goldenScore.test.ts
yarn type-check       # Run vue-tsc
yarn lint             # Run ESLint (automatically fixes files)
yarn format           # Format src/ with Prettier
```

Run `yarn test` and `yarn type-check` after changing scoring or timer logic.
Use `yarn lint` deliberately: its configured `--fix` changes files.

## Architecture and conventions

- `src/components/ScoreBoard.vue` is the central match-state orchestrator.
  Child components communicate upward through Vue emits and are controlled
  downward through template refs.
- Keep independently testable rules in pure functions under `src/utils/`, with
  adjacent Jest test files named `*.test.ts`.
- `JudoPlayer.vue` enforces score rules: two waza-ari become an ippon, and the
  configured maximum number of shidos makes that player lose.
- `TimeBanner.vue` owns match and pin timer interactions, including golden
  score. Golden score uses a 60-second reset timer; disabling it restores the
  configured match duration.
- `BoardSettings.vue` stores the timer strategy (`down` or `up`) in
  `localStorage` under `judo-score:countdown`.
- The `ELECTRON=true` environment variable switches Vite to Electron mode.
  Keep changes compatible with both browser and Electron targets unless the
  task explicitly limits one target.

## Guardrails

- Preserve the established Options API, emit, and `$refs` patterns in existing
  components unless the task explicitly calls for a broader refactor.
- Do not change keyboard shortcuts or scoring semantics without updating the
  relevant help text and tests.
- Avoid editing generated deployment assets in `docs/` unless the task is to
  refresh the published web build.
