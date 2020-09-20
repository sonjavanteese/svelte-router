# Svelte Router

<!-- prettier-ignore -->
[![package version](https://img.shields.io/npm/v/@bjornlu/svelte-router)](https://www.npmjs.com/package/@bjornlu/svelte-router)
[![npm downloads](https://img.shields.io/npm/dm/@bjornlu/svelte-router)](https://www.npmjs.com/package/@bjornlu/svelte-router)
[![ci](https://github.com/bluwy/svelte-router/workflows/CI/badge.svg?event=push)](https://github.com/bluwy/svelte-router/actions)
[![e2e](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/vjxpm8/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/vjxpm8/runs)

An easy-to-use SPA router for Svelte.

[**Comparison with other routers**](./docs/comparison.md)

## Features

- Super simple API
- Support `hash` and `path` based navigation
- Nested routes
- Redirects and navigation guards (with async support)
- Lazy loading routes
- Auto `base` tag navigation

## Not Supported

- Server-side rendering (SSR) - Use [Sapper](https://github.com/sveltejs/sapper) instead
- Relative navigations - Use absolute path and [dynamic syntax](./docs/guide.md#dynamic-syntax) instead

## Quick Start

1. Install [`@bjornlu/svelte-router`](https://www.npmjs.com/package/@bjornlu/svelte-router):

```bash
$ npm install @bjornlu/svelte-router
```

2. Define routes:

```js
// main.js

import { initPathRouter } from '@bjornlu/svelte-router'
import App from './App.svelte'
import Home from './Home.svelte'

// Use `initHashRouter` for hash mode
initPathRouter([
  { path: '/', component: Home }
])

const app = new App({
  target: document.body
})

export default app
```

3. Render routes and links:

```svelte
<!-- App.svelte -->

<script>
  import { RouterView, Link } from '@bjornlu/svelte-router'
</script>

<main>
  <nav>
    <Link to="/">Home</Link>
  </nav>
  <RouterView />
</main>
```

4. Done!

## Documentation

Ready to learn more? The documentation is split into two parts:

- [Guide](./docs/guide.md): Covers common usage to advanced topics
- [API reference](./docs/api.md): Covers the structure of the API

## Contributing

All contributions are welcomed. For any major changes, please open an issue first :)

## License

MIT
