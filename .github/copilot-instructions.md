# AI Coding Agent Instructions

Purpose: Enable an AI assistant to be productive quickly in this repo (Instagram Unfollower Checker) by explaining real, observable patterns and workflows. Keep answers concrete, reflect actual code, avoid generic advice.

## 1. Project Overview
- Single-page React + Vite + Tailwind (v4 via `@tailwindcss/vite`). All logic runs client-side; no backend/API calls.
- Core value: Local privacy-preserving processing of two Instagram export JSON files (`followers_1.json`, `following.json`) to derive unfollowers, mutuals, counts, and ratio.
- Deployed on Vercel with SPA rewrite + strict security headers (see `frontend/vercel.json`). Service worker (`public/sw.js`) adds offline caching & PWA hints.

## 2. Key Directories & Files
- `frontend/src/main.jsx`: Bootstraps React, registers service worker.
- `frontend/src/App.jsx`: Router (only `/` + catch-all). Wraps layout (Header, Footer, main).
- `frontend/src/components/Unfollowers.jsx`: Main domain logic; parses uploaded JSON, derives sets, builds result object, tab UI, accessibility attributes.
- `frontend/src/components/Home.jsx`: Landing sections + dynamic `<title>` & meta description.
- `frontend/src/components/Header.jsx`: Scroll-reactive nav, smooth in-page section scrolling.
- `frontend/src/assets/GuideData.js`: Static structured data driving guide + FAQ (ids, alt text for accessibility & SEO).
- `frontend/public/sw.js`: Cache strategy (cache-first for listed assets, opportunistic caching for other non-`/api/` requests). If modifying asset names, update `urlsToCache` & bump cache version constant.
- `frontend/vercel.json`: SPA rewrite and security headers (CSP blocks external script/style except inline; keep this in mind when adding libs).

## 3. Domain Data Model
Input (user provided): Two JSON files from Instagram export.
- `followers_1.json`: Array of objects each with `string_list_data[0].value` = username.
- `following.json`: Object with `relationships_following` array of similar objects.
Processing (see `Unfollowers.jsx`):
- Extract usernames (null-safe checks) -> Sets `followers`, `following`.
- Derived arrays: `unfollowers` = following − followers; `mutualFollowers` = intersection.
- `results.total.ratio` = `(followers.size / following.size) * 100` (string with 1 decimal + `%` when displayed).
Return shape stored in component state for tab rendering.

## 4. UI / UX Conventions
- Tailwind utility classes; custom gradient + glass effects (search for `glass-effect` class usage—likely styled via global CSS).
- Accessible patterns: `aria-label`, role attributes (`role="tablist"`, `tab`, `tabpanel`, list semantics) present; preserve when refactoring.
- Dynamic SEO: Title & meta description managed in `Home.jsx` on mount.
- Color-coded stats via dynamic Tailwind classes like `bg-${color}-900/20`; when adding new tabs ensure color token exists in Tailwind (v4 JIT should generate if literal). Avoid runtime concatenation with fully dynamic user input (here colors are controlled map keys).

## 5. Build & Dev Workflows
From repo root (or cd `frontend/`):
- Dev: `npm run dev` (Vite default port 5173).
- Build: `npm run build` (outputs `dist/`).
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (ESLint configured via flat config `eslint.config.js`).
No tests currently present—do not reference a test workflow unless you add one.

## 6. Adding Features Safely
- Maintain privacy: Never introduce network calls that send user data off-device. Any feature analyzing Instagram data must run entirely in-browser. If absolutely needed, gate behind clear user consent and update documentation.
- Preserve offline capability: For new static assets needed at startup, add to `urlsToCache` and bump `CACHE_NAME` version in `sw.js`.
- Respect CSP: External CDNs for scripts/styles will be blocked. Prefer npm packages & bundling, or adjust CSP header in `vercel.json` deliberately (document change rationale if you update it).
- Routing: Only SPA root currently. New pages require adding `<Route>` entries in `App.jsx`; ensure rewrite rule still catches them (it does via `/(.*)` to `index.html`).
- Large file parsing: Current logic reads files fully into memory (`File.text()`); if adding heavier analytics, consider streaming or chunking, but keep synchronous Set operations simple for now.

## 7. Common Pitfalls
- Tailwind class purging: Using string interpolation must keep full class names (e.g., `bg-red-900/20`). If introducing more dynamic styles, whitelist or enumerate possible classes.
- JSON shape differences: Future Instagram export versions may rename keys; keep null-safe access pattern (`entry?.string_list_data?.[0]?.value`). Maintain this defensive style.
- Ratios: Guard divide-by-zero if enabling analysis before both files loaded (currently prevented by disabled submit button).
- Service worker stale assets: Always update cache version when altering list to avoid users seeing old assets.

## 8. Example Extension Tasks
When asked to "add export to CSV":
1. Use existing `results` shape in `Unfollowers.jsx`.
2. Build a helper that maps arrays to CSV lines, create blob, trigger download—no server.
3. Add button near stats; maintain accessibility (`aria-label`), reuse styling utilities.

When asked to "add dark/light theme toggle":
- Wrap root `<div>` with a data attribute or class toggler, add conditional classes. Update meta theme-color optionally. Ensure no network calls.

## 9. Performance Notes
- All computations O(n) over combined follower/following counts (Set membership). Efficient for typical personal account sizes (< tens of thousands). If scaling, consider web worker offload.

## 10. Answer Style for This Repo
- Provide concrete file paths (`frontend/src/components/Unfollowers.jsx`).
- Prefer code suggestions that slot naturally into existing components vs. broad rewrites.
- Highlight privacy & offline constraints whenever data handling changes.

(End)
