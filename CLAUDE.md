# React95 (limehawk fork)

Modernized fork of [react95-io/React95](https://github.com/react95-io/React95) — Windows 95 themed React component library. Fully compatible with React 19 and styled-components 6.

## What changed from upstream

- **Removed `findDOMNode`** from `useIsFocusVisible` hook — was the only React 19 blocker. Slider and all components now work on React 19.
- **Removed dead `event.persist()` calls** from Tooltip — no-op since React 17.
- **Rewrote ScrollView** with a JS-rendered scrollbar that works on all platforms (mobile Safari doesn't support CSS `::-webkit-scrollbar`).
- **Updated peerDependencies** to accept styled-components 6.
- **Committed `dist/`** so the fork is consumable as a git dependency without a build step.

## Stack

- React 16.8+ (tested through React 19)
- styled-components 5.x or 6.x (peer dependency)
- TypeScript, Rollup (build), Jest (tests)

## Components (33 active)

Anchor, AppBar, Avatar, Button, Checkbox, ColorInput, Counter, DatePicker, Frame, GroupBox, Handle, Hourglass, MenuList, Monitor, NumberInput, ProgressBar, Radio, ScrollView, Select, Separator, Slider, Table, Tabs, TextInput, Toolbar, Tooltip, TreeView, Window (+ WindowContent, WindowHeader)

## Legacy/Deprecated Components (12)

Bar, Cutout, Desktop, Divider, Fieldset, List, ListItem, NumberField, Panel, Progress, TextField, Tree

These re-export from `src/legacy/` and are included for backwards compatibility. Do not use in new code.

## Key Architecture

### StyledScrollView

`StyledScrollView` is exported from `src/ScrollView/ScrollView.tsx` and used as a **base styled-component** by 8 other components:

- Checkbox, Radio, TextInput, Select, Monitor, ProgressBar, Table, Slider

It provides the inset/beveled border appearance. It MUST remain a pure border-only `styled.div` — never add `display: flex`, `overflow: hidden`, or layout properties to it. The ScrollView component uses a separate `ScrollViewOuter` that extends it for its own layout needs.

### ScrollView JS Scrollbar

The ScrollView renders a custom JS scrollbar instead of relying on CSS `::-webkit-scrollbar`. Architecture:

- `useScrollbar.ts` — state management hook (thumb position, drag, auto-scroll)
- `ScrollbarButton.tsx` — arrow buttons with SVG arrows
- `ScrollbarThumb.tsx` — draggable thumb
- `ScrollbarTrack.tsx` — checkered background track
- `ScrollView.tsx` — composes everything, hides native scrollbar

The native scrollbar is hidden via `scrollbar-width: none` + `::-webkit-scrollbar { display: none }`. The JS scrollbar uses react95's own style utilities (`createBoxStyles`, `createBorderStyles`, `createHatchedBackground`) for full theme awareness.

### Themes

60+ themes in `src/common/themes/`. The `original` theme matches Windows 95 defaults. All components read colors from the styled-components `ThemeProvider` context.

### Style Utilities

Located in `src/common/index.ts`:

- `createBoxStyles()` — material background
- `createBorderStyles({ style, invert? })` — beveled 3D borders
- `createFlatBoxStyles()` — flat variant borders
- `createHatchedBackground({ mainColor, secondaryColor })` — checkered pattern
- `createScrollbars()` — CSS scrollbar styles (still exported for backwards compat, but ScrollView no longer uses it)
- `styleReset` — CSS reset for react95 apps

## Commands

- `bun run build` — production build to `dist/` (Rollup)
- `bun run build:dev` — development build
- `bun run test` — run all tests (Jest)
- `bun run test:watch` — watch mode
- `bun run start` — Storybook dev server on port 9009

## Build Output

- `dist/index.js` (CJS) + `dist/index.mjs` (ESM) + `dist/index.d.ts`
- `dist/themes/` — theme bundles
- `dist/fonts/` — MS Sans Serif font files
- `dist/images/` — asset images

The `dist/` directory is committed to the repo so consumers can use `github:limehawk/React95` as a dependency without needing a build step.

## Consuming This Fork

In a consumer project's `package.json`:

```json
"react95": "github:limehawk/React95"
```

To update to the latest commit after pushing changes:

```bash
bun remove react95 && bun add react95@github:limehawk/React95
```

(`bun install --force` alone may not update the git ref.)

## Rules

### Do
- Use react95's style utilities (`createBoxStyles`, `createBorderStyles`, etc.) for all visual styling
- Keep `StyledScrollView` as a pure border-only styled.div
- Run `bun run build` after changes and commit `dist/`
- Use `forwardRef` on all public components
- Add `displayName` to all `forwardRef` components

### Don't
- Add `findDOMNode`, `event.persist()`, `defaultProps`, or other deprecated React APIs
- Add `display: flex` or `overflow` to `StyledScrollView`
- Hardcode colors — always use theme tokens
- Import from `react-dom` in component source (only in tests)

## Tests

- Framework: Jest 28 with ts-jest (ESM mode)
- Environment: jsdom
- Helpers: `test/utils.tsx` has `renderWithTheme()` wrapper
- Note: `ResizeObserver` is not available in jsdom — ScrollView tests that trigger it will fail in unit tests but work at runtime
