<h1 align="center">React95</h1>

<p align="center">
  <strong>The modern port of React95</strong> — Windows 95 themed React components,<br />
  fully compatible with <b>React 19</b> and <b>styled-components 6</b>.
</p>

<p align="center">
  <a href="https://github.com/limehawk/React95"><img src="https://img.shields.io/badge/React-16.8%E2%80%9319-blue" alt="React 16.8–19" /></a>
  <a href="https://github.com/limehawk/React95"><img src="https://img.shields.io/badge/styled--components-5%20%7C%206-pink" alt="styled-components 5 | 6" /></a>
  <a href="https://github.com/limehawk/React95/blob/master/LICENSE"><img src="https://flat.badgen.net/npm/license/react95" alt="MIT License" /></a>
</p>

<p align="center">
  <a href="https://storybook.react95.io/?path=/story/window--default">Storybook</a>
</p>

![hero](https://user-images.githubusercontent.com/28541613/81947711-28b105580-9601-11ea-964a-c3a6de998496.png)

## Why this fork?

The [original React95](https://github.com/react95-io/React95) hasn't been updated for React 19 or styled-components 6. This fork is a drop-in replacement that fixes all compatibility issues and modernizes the internals:

- **React 19 compatible** — removed `findDOMNode`, `event.persist()`, `defaultProps`, and other deprecated APIs
- **styled-components 6 compatible** — all component props use transient `$`-prefixed props to prevent DOM attribute leaking
- **Custom JS scrollbar** — ScrollView uses a platform-agnostic JS-rendered Win95 scrollbar (works on mobile Safari)
- **Tree-shakeable** — `sideEffects: false` and `preserveModules` for minimal bundle size
- **Performance** — leaf components wrapped in `React.memo`, rAF-throttled scroll handlers, timer refs instead of state
- **No build step required** — `dist/` is committed, install directly from GitHub

## Installation

```sh
# Install directly from GitHub (no build step needed)
bun add react95@github:limehawk/React95

# Or with npm/yarn
npm install github:limehawk/React95
yarn add github:limehawk/React95
```

## Quick Start

```jsx
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MenuList, MenuListItem, Separator, styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <MenuList>
        <MenuListItem>Sing</MenuListItem>
        <MenuListItem>Dance</MenuListItem>
        <Separator />
        <MenuListItem disabled>Sleep</MenuListItem>
      </MenuList>
    </ThemeProvider>
  </div>
);
```

## Components

34 active components with full Win95 theming:

**Layout:** AppBar, Frame, GroupBox, ScrollView, Separator, Tabs, Toolbar, Window (+ WindowContent, WindowHeader)

**Inputs:** Button, Checkbox, ColorInput, DatePicker, NumberInput, Radio, Select, Slider, TextInput

**Display:** Anchor, Avatar, Counter, Handle, Hourglass, IELoading, MenuList, Monitor, ProgressBar, Table, Tooltip, TreeView

**Themes:** 60+ themes in `dist/themes/`. The `original` theme matches Windows 95 defaults.

## Updating

After pushing changes to this repo, update in consumer projects:

```sh
bun remove react95 && bun add react95@github:limehawk/React95
```

(`bun install --force` alone may not update the git ref.)

## Differences from upstream

| Area | Upstream (react95-io) | This fork |
|---|---|---|
| React support | 16.8–18 | 16.8–19 |
| styled-components | 5.x only | 5.x and 6.x |
| Prop forwarding | Leaks custom props to DOM | Transient `$`-prefixed props |
| ScrollView | CSS `::-webkit-scrollbar` | JS-rendered Win95 scrollbar |
| findDOMNode | Used in Slider/focus hook | Removed |
| Bundle | npm only | Git dependency with committed dist/ |
| Tree-shaking | Not configured | `sideEffects: false` + `preserveModules` |

## Development

```sh
bun install
bun run start        # Storybook on port 9009
bun run build        # Production build to dist/
bun run test         # Jest test suite
```

## Credits

Forked from [react95-io/React95](https://github.com/react95-io/React95) by [Artur Bien](https://github.com/arturbien) and contributors. This fork maintains the MIT license and upstream attribution.

Community contributions incorporated:
- Transient props refactor ([upstream #398](https://github.com/react95-io/React95/pull/398) by [@tegaki-tegaki](https://github.com/tegaki-tegaki))
- Toolbar `onOutsideClick` ([upstream #391](https://github.com/react95-io/React95/pull/391) by [@williamgrosset](https://github.com/williamgrosset))
- IELoading component ([upstream #388](https://github.com/react95-io/React95/pull/388) by [@Montty666](https://github.com/Montty666) and [@puzovoz](https://github.com/puzovoz))

## License

[MIT](LICENSE)
