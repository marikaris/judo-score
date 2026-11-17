# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
yarn dev              # web dev server (browser only)
yarn electron:dev     # Electron dev with hot reload
yarn build            # web production build
yarn electron:build   # Electron production build + package
yarn test             # run Jest tests
yarn lint             # ESLint with auto-fix
yarn type-check       # vue-tsc type check
yarn format           # Prettier on src/
```

To run a single test file:
```sh
yarn test src/utils/goldenScore.test.ts
```

Run `yarn test` and `yarn type-check` after changing scoring or timer logic.
Use `yarn lint` deliberately: its configured `--fix` changes files.

## Architecture

**Dual-target app:** the same Vue 3 codebase runs as a browser web app or as an Electron desktop app. The toggle is the `ELECTRON=true` env var, which `vite.config.ts` reads to conditionally load the `vite-plugin-electron` and `vite-plugin-electron-renderer` plugins. The Electron entry is `electron/main.ts`; the renderer is the standard Vue app.

**Component tree:**

```
App.vue
└── ScoreBoard.vue          ← central orchestrator, owns all match state
    ├── TopBanner.vue       ← mat/message/bout display + nav buttons (Settings, Help, Break)
    ├── BreakPage.vue       ← shown when match is paused (replaces players + timer)
    ├── BoardSettings.vue   ← settings form; persists timer strategy to localStorage
    ├── HelpPage.vue        ← key binding reference
    ├── JudoPlayer.vue × 2 ← per-player scoring (Ippon, Waza-ari, Yuko, Shido)
    │   └── ScoreCounter.vue
    └── TimeBanner.vue      ← match + pin timer controls, golden score toggle
        ├── MatchTimer.vue
        └── PinningTimer.vue
```

**State flow:** `ScoreBoard.vue` holds all match state as `data()`. Settings are _not_ passed down as reactive props from the form — instead, `ScoreBoard` reads `this.$refs.settings.*` imperatively when the settings panel is saved (`onSettingsChange()`). Child-to-parent communication is via Vue `emits`; parent-to-child control is via `$refs` (e.g., `this.$refs.timeBanner.stopTimer()`).

**Scoring rules encoded in components:**
- `JudoPlayer.vue`: 2 waza-ari auto-converts to an ippon (calls `ScoreCounter.reset()` + `ippon.add()`); reaching `maxShidos` shidos emits `loses` (which makes the opponent win via `ScoreBoard`).
- `TimeBanner.vue`: golden score sets timer to 60 s and resets; re-toggling restores `maxTime`.

**Key bindings** are split across two components:
- `TimeBanner.vue` (`keyup`): Tab/Control = toggle match timer, Shift = toggle pin timer, g/G = golden score, r/R = reset all, t/T = reset timer. Bindings are suppressed when settings panel is open.
- `JudoPlayer.vue` (`keydown`): a/z = P1 ippon ±1, s/x = P1 waza-ari ±1, d/c = P1 yuko ±1; j/m = P2 ippon ±1, k/, = P2 waza-ari ±1, l/. = P2 yuko ±1.

**Utilities (`src/utils/`):** pure functions extracted for testability, with adjacent Jest test files named `*.test.ts`. Jest tests cover `goldenScore.ts` and `matchTimerLogic.ts`. Vue components themselves are not tested.

**localStorage:** `BoardSettings.vue` persists only the timer strategy (`'down'`/`'up'`) under the key `judo-score:countdown`.

## Guardrails

- Preserve the established Options API, emit, and `$refs` patterns in existing components unless the task explicitly calls for a broader refactor.
- Do not change keyboard shortcuts or scoring semantics without updating the relevant help text and tests.
- Keep changes compatible with both browser and Electron targets unless the task explicitly limits one target.
- Avoid editing generated deployment assets in `docs/` unless the task is to refresh the published web build.

## Agent skills

### Issue tracker

Issues and specs are tracked in this repository's GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Uses the five default canonical triage labels. See `docs/agents/triage-labels.md`.

### Domain docs

Uses a single-context layout. See `docs/agents/domain.md`.
