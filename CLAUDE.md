# laminelahouasnia.com

Lamine Lahouasnia's personal website: a home page, an About (bio) page and a blog called Writing. Built with Astro and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## House rules

- Always write "Gen AI" (never "Generative AI" or "GenAI"). His title is "Director of Gen AI".
- British English spelling.
- Family details (names, children, schools, where he lives) never go on the site. Heritage, triathlon and volunteering get a light mention only. The games studio can be featured.
- Keep the design system in `src/styles/global.css` (tokens on `:root`, dark mode via `prefers-color-scheme`). Don't add new colours or fonts without asking.

## Publishing an article

1. Add a Markdown file to `src/content/writing/`. The file name becomes the URL: `src/content/writing/my-piece.md` → `/writing/my-piece/`.
2. Front matter:
   ```yaml
   ---
   title: "The title"
   description: "One or two sentences shown in lists and search results."
   pubDate: "2026-11-02"
   originalUrl: "https://www.linkedin.com/pulse/..."   # optional, if it first appeared elsewhere
   draft: false                                          # true hides it from the site
   ---
   ```
3. Use `##` for section headings. Run `npm run build` to check, then commit and push to `main`. It's live about a minute later.

If a new piece introduces a named idea, consider adding it to `LEXICON` in `src/lib/site.ts` (the "Ideas I've named" list on the home page).

## Search, sharing and analytics

- Every page carries schema.org structured data: a Person (Lamine, `personSchema` in `src/lib/site.ts`) and the WebSite; articles add a BlogPosting authored by him. Keep the Person's job title and `sameAs` links current.
- Share images (1200x630) are drawn at build time by `src/lib/og.ts` and served from `/og/<slug>.png`; the home and About pages use `/og/profile.png`.
- `public/robots.txt` allows all crawlers, AI training included (his decision, Nov 2026). `/llms.txt` is generated from the articles and the named-ideas list.
- Analytics (GoatCounter) and Search Console / Bing verification switch on by filling `goatcounter`, `googleVerification` and `bingVerification` in `SITE` (`src/lib/site.ts`).

## Domain

- Custom domain: `public/CNAME` holds `laminelahouasnia.com`. DNS is at Squarespace (formerly Google Domains).
- `SITE_URL` and `BASE_PATH` in the workflow control the build. With the custom domain, `BASE_PATH` is `/`; on the plain GitHub Pages address it would be `/laminelahouasnia.com`.
- Email for the domain runs through Google Workspace: never change MX or TXT records.
