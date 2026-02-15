# 2048

A fully functional [2048](https://play2048.co/) game built with **Next.js**, **React**, and **TypeScript**. Play in the browser with smooth animations and a responsive layout.

## Features

- **Classic 2048 gameplay** — Combine tiles to reach 2048 and beyond
- **Smooth animations** — Tile movement and merge transitions
- **Responsive design** — Works on mobile and desktop
- **Keyboard & touch** — Arrow keys and swipe support
- **Score tracking** — Live score and win/lose states
- **Static export** — Deploy anywhere (e.g. GitHub Pages, Vercel)

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router compatible structure with `pages/`)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules

## Getting started

### Prerequisites

- Node.js 18+ (see [.nvmrc](.nvmrc) if using nvm)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play.

### Build

```bash
npm run build
```

Output is generated in the `out` folder (static export).

### Other scripts

| Command           | Description        |
| ----------------- | ------------------ |
| `npm start`       | Serve production build |
| `npm run lint`    | Run ESLint         |
| `npm run format`  | Format with Prettier |
| `npm run check-code` | Check code style |
| `npm test`        | Run tests (watch)  |
| `npm run test-coverage` | Tests with coverage |

## How to play

1. Use **arrow keys** (or swipe on touch devices) to move tiles.
2. Tiles with the same number **merge** when they touch.
3. Reach the **2048** tile to win (you can keep playing for a higher score).
4. The game ends when no moves are possible.

## Project structure

```
├── components/     # Board, Tile, Score, Splash
├── pages/          # Next.js pages (index, _document)
├── styles/         # Global and module CSS
├── constants.ts    # Game config (grid size, animation durations)
└── __tests__/      # Jest tests
```

## Author

**Hiroshi** — [GitHub](https://github.com/hiroshi-jp) · [LinkedIn](https://www.linkedin.com/in/hiroshi-m)

## License

MIT
