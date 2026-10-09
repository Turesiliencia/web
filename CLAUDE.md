# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project state

Website for **TuResiliencia**, a Spanish organization centred on "Reconstrucción Humana" (publishing, training, international cooperation). It will replace the current site at https://turesiliencia.com.

The code is still the unmodified `create-next-app` scaffold: one route (`src/app/page.tsx`), placeholder metadata and `lang="en"` in `src/app/layout.tsx`, and the default SVGs in `public/`. Nothing of the real site exists yet.

While the site is under construction, the root layout sets `robots: { index: false, follow: false }` for every page. It has to be removed at launch.

The brief, the source material and the account details are not in the repository. They live in `CLAUDE.local.md` and `refs/`, both gitignored: when they exist, read `CLAUDE.local.md` before designing or writing content.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (flat config: eslint-config-next core-web-vitals + typescript)
npx eslint src/app/page.tsx              # lint a single file
npx next typegen && npx tsc --noEmit     # type-check without building
```

There is no test runner and no `type-check` script. Package manager is npm (`package-lock.json`).

## Stack and configuration

Next.js 16.4 App Router, React 19.3, TypeScript strict, source under `src/` with the `@/*` → `./src/*` alias.

Three flags in `next.config.ts` shape how code must be written:

- `cacheComponents: true` — routes are prerendered into a static shell by default. Request-time data (`cookies()`, `headers()`, `params`, `searchParams`, uncached fetches) has to sit behind `<Suspense>` or be cached with `'use cache'`. See `node_modules/next/dist/docs/01-app/02-guides/migrating-to-cache-components.md`.
- `partialPrefetching: true` — `<Link>` prefetches only the route's App Shell; URL-dependent content must be behind Suspense, and a link opts into more with `prefetch={true}`. See `02-guides/adopting-partial-prefetching.md`.
- `reactCompiler: true` — components are auto-memoized by `babel-plugin-react-compiler`; don't add `useMemo`/`useCallback`/`React.memo` by hand.

Route prop types (`LayoutProps<'/'>`, `PageProps<...>`) are global helpers generated into `.next/types` by `next dev`, `next build` or `next typegen` — they are not imported, and `tsc` fails on them until one of those has run.

Styling is plain CSS: global tokens in `src/app/globals.css` and CSS Modules per component. Tailwind is not installed.

## Git and what can be committed

Work goes straight to `main` on `Turesiliencia/web`. Pushes to `main` are meant to deploy to production, so run `npm run build` locally first.

**The repository is public: everything committed can be read by anyone, permanently.** Deleting a file later leaves it in history. The bar: if the organization has not already published it, it does not go in.

Never committed:

- `refs/`, `CLAUDE.local.md` and `.env*` (all gitignored), nor anything copied or paraphrased from them into tracked files, commit messages or code comments.
- Internal documents, plans, pricing, correspondence, legal paperwork, or personal data of anyone.
- Account identifiers, screenshots or settings of the organization's hosting, domain, mail or payment accounts.

Committed with care:

- **Images**: only ones cleared for publication, with metadata stripped (`python3 -c "from PIL import Image; print(dict(Image.open('x.jpg').getexif()))"` should print `{}`). Third-party images need a licence.
- **Site content**: what goes in `src/` is what the public site shows, so it follows the same bar.

Before each commit, look at `git status` and add files by name, then:

```bash
git diff --cached --name-only | grep -Ei '^refs/|CLAUDE\.local|\.env|\.(pem|key|pdf|docx?|csv|xlsx?|ods)$'
git diff --cached | grep -Ei 'token|secret|password|api[_-]?key|BEGIN .*PRIVATE'
```

If either prints anything, stop and look.
