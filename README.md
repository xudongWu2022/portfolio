# Oliver Wu — Portfolio

Bilingual (English / 中文) personal portfolio built with **React + Vite**. Dark, techy single-page site showcasing my work on AI-agent and Web3 infrastructure — **agent-spend-collector** and **SubChain** — plus my background and experience.

## Develop

```bash
npm install
npm run dev
```

Open the printed URL (default `http://localhost:5173`). Use the **中文 / EN** button in the top-right to switch languages.

## Build

```bash
npm run build       # outputs static site to ./dist
npm run preview     # preview the production build locally
```

## Editing content

All copy and data live in [`src/i18n.js`](src/i18n.js):

- `profile` — name, contact, GitHub
- `strings` — UI labels (`en` / `zh`)
- `education`, `experience`, `projects`, `skills` — structured, each item bilingual

No content is hard-coded in components, so updates are one-file edits.

> Note: **SubChain** currently points to my GitHub profile and is marked as a local/private repo. When it's published, replace its `github` URL in `src/i18n.js` and set `local: false`.

## Deploy — Cloudflare Pages (free)

The build is fully static (no server, no env vars), so hosting is free.

**A) Git integration (auto-deploy on push, recommended)**

1. Push this `portfolio/` folder to a GitHub repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages** → connect the repo.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: **`npm run build`**
   - Output directory: **`dist`**
4. Every push to the main branch redeploys. You get a free `*.pages.dev` URL; attaching a custom domain is free (you only pay to register the domain).

**B) Direct upload via Wrangler (no repo needed)**

```bash
npm run build
npx wrangler pages deploy dist --project-name=oliver-portfolio
```

## Stack

React 18 · Vite 5 · plain CSS (custom properties, no framework).
