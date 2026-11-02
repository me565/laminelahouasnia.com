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

## Domain

- Custom domain: `public/CNAME` holds `laminelahouasnia.com`. DNS is at Squarespace (formerly Google Domains).
- `SITE_URL` and `BASE_PATH` in the workflow control the build. With the custom domain, `BASE_PATH` is `/`; on the plain GitHub Pages address it would be `/laminelahouasnia.com`.
- Email for the domain runs through Google Workspace: never change MX or TXT records.
