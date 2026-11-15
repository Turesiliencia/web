# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project state

Website for **TuResiliencia**, a Spanish organization centred on "Reconstrucción Humana" (publishing, training, international cooperation). It is the association's own site, at https://www.turesiliencia.org (the bare domain redirects to `www`). https://turesiliencia.com is the founder's personal site, a separate project in the sibling folder `../turesiliencia-com` (`Turesiliencia/turesiliencia-com`): keep the two apart. Some content is duplicated between them (contact, the book's links, fonts, `theme.css`, images); `../CLAUDE.md` lists it, so change both together.

Today the site is a single home page in Spanish at `/` and English at `/en`, live since 9 October 2026, first at https://turesiliencia.vercel.app and since November 2026 on the domain. It began as a "coming soon" page and now reads as a finished one-page site: a header with section links, the idea of Reconstrucción Humana, the association (purpose, three pillars and the six fields of action of its signed statutes), the four areas (Academia, Cooperación, Alianzas, Editorial) with a contact link each, who it works with ("Trabajo en red": universities, companies, public bodies, social organisations, under `network` in `home.ts`), the founder's book (front and back cover, Amazon links), contact and a footer. Unknown addresses get a 404 page in the site's design. The areas have no pages of their own yet. `README.md` is still the `create-next-app` boilerplate and describes none of this.

While the site is under construction, `baseMetadata` in `src/content/metadata.ts` sets `robots: { index: false, follow: false }` for every page. It has to be removed at launch.

The brief, the source material, the account details and the project's current state are not in the repository. The source material is in `refs/` in this folder (the brief in `refs/proyecto/`), which `.gitignore` excludes; the rest lives one level up, in the folder that holds both sites and is in no repository: `../CLAUDE.md` (which also sums up the brief). Read it before designing or writing content. Git does not carry it, so on a new machine it is copied over by hand; if it is missing, ask before writing content.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (flat config: eslint-config-next core-web-vitals + typescript)
npx eslint src/components/HomePage.tsx     # lint a single file
npx next typegen && npx tsc --noEmit       # type-check without building
```

There is no test runner and no `type-check` script. Package manager is npm (`package-lock.json`). Node 26: `engines.node` in `package.json` is `26.x`, which is also what Vercel builds with (it overrides the project's setting), and `.nvmrc` pins the same for `nvm use`, as in `../turesiliencia-com`.

To look at a page without opening a browser, serve the build (`npx next start -p 3457`) and screenshot it with headless Chrome, at a desktop and a phone width, in both languages. The page is longer than a screen: use a tall window (about 5200 px at 1440 wide, 8600 px at 390) and crop, and give lazy-loaded images time with `--virtual-time-budget`:

```bash
google-chrome --headless=new --hide-scrollbars --force-prefers-reduced-motion --virtual-time-budget=4000 \
  --window-size=390,8600 --screenshot=/path/outside/the/repo/es-mobile.png http://localhost:3457/
```

A screenshot can't click. To test something interactive, such as the dots under the book covers, drive headless Chrome over the DevTools protocol: start it with `--remote-debugging-port=9333 --remote-allow-origins=http://127.0.0.1:9333`, then a short Python script (`uv run --no-project --with websocket-client`) navigates, runs JavaScript to click, reads state and takes screenshots. Don't stop such a Chrome with `pkill -f` on its flags: the pattern also matches the shell running the command and kills it.

Stop the server by its PID afterwards (`ss -ltnp | grep 3457`). A leftover server keeps the port, the next `next start` fails with `EADDRINUSE` in its log, and the screenshots silently show the old build.

## Stack and configuration

Next.js 16.4 App Router, React 19.3, TypeScript strict, source under `src/` with the `@/*` → `./src/*` alias.

Three flags in `next.config.ts` shape how code must be written:

- `cacheComponents: true` — routes are prerendered into a static shell by default. Request-time data (`cookies()`, `headers()`, `params`, `searchParams`, uncached fetches) has to sit behind `<Suspense>` or be cached with `'use cache'`. See `node_modules/next/dist/docs/01-app/02-guides/migrating-to-cache-components.md`.
- `partialPrefetching: true` — `<Link>` prefetches only the route's App Shell; URL-dependent content must be behind Suspense, and a link opts into more with `prefetch={true}`. See `02-guides/adopting-partial-prefetching.md`.
- `reactCompiler: true` — components are auto-memoized by `babel-plugin-react-compiler`; don't add `useMemo`/`useCallback`/`React.memo` by hand.

Route prop types (`LayoutProps<'/'>`, `PageProps<...>`) are global helpers generated into `.next/types` by `next dev`, `next build` or `next typegen` — they are not imported, and `tsc` fails on them until one of those has run.

Styling is plain CSS: global styles in `src/app/globals.css`, colours and the light and dark themes in `src/app/theme.css`, and one CSS Module per component. Tailwind is not installed.

## Architecture

- **Two languages, two root layouts.** There is no `src/app/layout.tsx`: `src/app/(es)/layout.tsx` (`lang="es"`, routes at `/`) and `src/app/(en)/layout.tsx` (`lang="en"`, routes under `/en`) are both root layouts, so each language gets the right `<html lang>` with fully static pages and no proxy. A page exists once per language as a thin route file that renders a shared component with a `locale` prop. Navigating between the two is a full page load.
- **Unmatched URLs** get `src/app/global-not-found.tsx` (behind the experimental `globalNotFound` flag in `next.config.ts`): two root layouts can't share a `not-found.tsx`, so this page stands outside both and imports the fonts and `globals.css` itself. It can't tell which language the visitor came from, so it is in Spanish with a line in English (`src/content/not-found.ts`). A catch-all route per language calling `notFound()` was tried and dropped: with `cacheComponents` and `partialPrefetching` it either sent an empty shell filled in by the browser, or answered 200 instead of 404.
- **`turesiliencia.vercel.app` redirects to the domain** (308, path kept) through `redirects()` in `next.config.ts`, matched on that host only, so per-deployment preview URLs still serve the site.
- **Copy lives in `src/content/`**, not in components: `home.ts` holds both languages side by side, `site.ts` the site-wide constants (URL, contact, locale paths), `book.ts` the book's title, author and Amazon links: one store per language for the buy button, plus an optional second store in a line under it (amazon.com: for Latin America on `/`, for the US on `/en`); each shows only while its link is set, `metadata.ts` the metadata builders. The site URL is written by hand in `site.ts`; canonical, hreflang and social-card URLs derive from it.
- **Header and footer are shared components** (`SiteHeader`, `SiteFooter`), ready for future pages. Both carry the `dark` class, so they are navy in both themes; the header is solid (`--paper-deep`), since a see-through navy turns grey over the light page. Their section links point to anchors on the home page (`/#asociacion`, `/en#about`…); the anchor ids and link labels live in `home.ts` under `sections`, one set per language. The sticky header is why `globals.css` sets `scroll-padding-top`.
- **Links to the founder's site** (`site.founder` in `site.ts`, https://turesiliencia.com, Spanish only, so `hrefLang="es"`): a line under the contact buttons for people looking for personal support (`contact.personal` in `home.ts`), and "Fundada por Deissy Olarte" in the footer (`footer.foundedBy`). The association doesn't offer personal sessions: point to her site for them rather than describing them here.
- **Fonts** are in `src/app/globals.css`: Cormorant Garamond for display and Montserrat (the wordmark's typeface) for text.
- **Colours and themes** are in `src/app/theme.css`, imported by `globals.css`. **It is the same file as `../turesiliencia-com/src/styles/theme.css`: change both together.** It holds the palette (navy and blues from the logo, gold and cream from the book cover) and the roles that CSS Modules use instead of it (`--paper`, `--ink`, `--ink-soft`, `--accent`, `--rule`, `--band`, `--glow`, `--medallion`, `--headline-fill`, `--button-*`…), each with a light and a dark value. That file's light theme is the `.com`'s warm paper and gold; this site lays its own over it at the top of `globals.css` (`:root` only, so the dark selectors still win): cool white paper `#f5f7fa`, navy ink `#0e1d3a`, the logo's blue `#0b3d91` as `--accent` for labels and links, and two roles of its own, `--detail` (the gold of numbers and card edges) and `--surface` (the ground of a card), each with a dark value there too. Light is the default. Dark is the site's original navy, cream and gold, shared with the `.com`. Dark applies when the visitor picks it, when their system is dark and they haven't picked, and inside a `.dark` band (a global class; the footer has it, so it stays navy in both themes). Use the roles in new CSS, never the palette.
- **Choosing the theme**: `ThemeScript` (`src/components/ThemeScript.tsx`), in the `<head>` of both root layouts and of `global-not-found.tsx`, sets `data-theme` on `<html>` before anything is drawn: the saved choice (`localStorage.theme`), else the system's, followed live until the visitor picks. Those `<html>` elements carry `suppressHydrationWarning` for that attribute. `ThemeToggle` (a client component, beside the language switch) is a toggle button labelled by `themeToggle` in `home.ts` ("Tema oscuro" / "Dark theme"), `aria-pressed` in dark; it reads the attribute through `useSyncExternalStore`. `theme.css` hides it until the script has run; without JavaScript the system's theme still applies through the media query. `viewport` in `metadata.ts` gives `theme-color` per system theme: the header's navy in both, since it is navy in both.
- **What sets this site apart from turesiliencia.com**, at first glance: this one speaks for a collective and looks institutional, the `.com` is one person's and looks personal. Keep each of these on its side when changing either site:
  - **Voice**: the association says "we" ("Somos una asociación…", "Nuestros estatutos…"; "We are…" in English) and addresses institutions; the `.com` is in her first person and speaks to "tú".
  - **Opening**: a navy header over a navy hero (`dark` in both themes) with the lotus medallion centred over gold capitals, fine upright lines like a façade's columns at its sides (`.hero::before`), and three facts along its foot (`facts` in `home.ts`). The `.com` opens on warm paper, "Hola, soy" over her name, left-aligned, with rings.
  - **Structure**: full-width sections between hairlines, numbered like the chapters of a report ("01 — Reconstrucción Humana"…: the `numbered` class on each section's label, a CSS counter on `.page`, hidden from screen readers), and navy at both ends: the header and hero at the top, the contact band (`dark`) and the footer at the bottom. The `.com` has no rules or numbers between its sections, and sets some in rounded panels.
  - **Type and shapes**: labels in spaced capitals, section titles in Cormorant capitals, square buttons, the three pillars side by side under gold rules, the areas as white cards with a gold top edge, the network as a ruled table. The `.com` sets labels in italic serif and sentence case, titles in mixed case, and rounds its buttons, cards, panels, images and footer.
  - **Shared, for the family**: the fonts, the palette and its dark theme, the lotus, the navy footer, the theme button.
- **The logo is inline SVG** in `src/components/Logo.tsx`, built from the brand file: the emblem has a white underlay so its semi-transparent petals look the same on navy as on white, and the wordmark uses `currentColor`. The logo appears several times on a page, so each copy takes its gradient ids from `useId()`: fixed ids would collide. `src/app/icon.svg` and `apple-icon.png` come from the same source. All of them were generated once with a throwaway script that is not in the repository: edit them by hand, or regenerate from the brand SVG if the logo changes.
- **The book's covers** are shown by `src/components/BookGallery.tsx`, the page's only client component: a strip that snaps to one cover at a time, swiped on a phone, with a dot button for each cover (`aria-current` on the one showing). Dots scroll the strip; the strip's scroll position sets the dots. Names and alt texts are in `home.ts` under `book.gallery`.
- **The Amazon icon** on the book's buy button is inline SVG in `src/components/AmazonIcon.tsx`, the Amazon mark from Simple Icons (CC0), drawn in `currentColor` and hidden from screen readers since the link text names the store.
- **Images** live in `src/assets/` and are imported statically into `next/image` (width, height and blur placeholder come from the import). The front cover there is resized from the publisher's file to 1000×1500 with its metadata stripped. The back cover (548×822) is cropped from the 600×900 image in the book's Amazon preview, cut down to 2:3 to drop the preview's stamp; it is softer on high-density screens, so swap in the publisher's file if one arrives, at the same 2:3.
- **The link preview** (`public/social-card-book.png`, 1200×630) shows the logo, the book's title and author, and its cover, with no words in either language so both pages share it. It was rendered once from a throwaway HTML page with headless Chrome at 1200×630; redo it the same way if the book or the logo changes, and give it a new file name, since apps cache link previews.
- **Don't read the clock during render**: with `cacheComponents`, `new Date()` in a Server Component fails prerendering, which is why the footer year is literal.

## Git and what can be committed

Work goes straight to `main` on `Turesiliencia/web`. Every push to `main` is a production deployment, so run `npm run lint` and `npm run build` locally first. A failed deployment keeps serving the previous one without warning; to check one:

```bash
gh api repos/Turesiliencia/web/commits/<sha>/status \
  --jq '.statuses[] | "\(.context): \(.state) — \(.description)"'
```

**The repository is public: everything committed can be read by anyone, permanently.** Deleting a file later leaves it in history. The bar: if the organization has not already published it, it does not go in.

Never committed:

- Anything from the private material (`refs/` here, `../CLAUDE.md`), copied or paraphrased into tracked files, commit messages or code comments. The exception is material the organization asked to publish, such as the book's cover and description: `../CLAUDE.md` says which. `.env*` and `refs/` are gitignored: never force-add them.
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

If either prints anything, stop and look. The second one also matches this file's own words ("token", "secret"…) when the lines holding them change: such hits are expected.
