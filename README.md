# GitHub Notetaker

Look up any GitHub user, browse their public repos, and jot down notes about them. Built with React Router (framework mode), Vite, TypeScript, and Tailwind CSS.

## Features

- Search any GitHub username to view their profile and public repos
- Add and delete notes per user
- Dropdown of recently searched users for quick lookup, with per-user removal
- Light/dark mode toggle

Notes and the recent-users list are stored in the browser's `localStorage` — no backend or account required.

## Getting started

```sh
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build (`npm run build` first)
- `npm run typecheck` — generate route types and run `tsc`

## Project structure

```
app/
  routes/          route components (layout, home, profile)
  components/      UI components (Github/, Notes/, search, dropdown, theme toggle)
  utils/           GitHub API client and localStorage helpers
  root.tsx         document shell
```
