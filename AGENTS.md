# Descent TCG — Contributor Guidance

Read [`INSTRUCTIONS.md`](INSTRUCTIONS.md) before making a change. It is the source of truth for the production footprint, safe editing workflow, access handoff, and change boundaries.

## Non-negotiables

- This is a static HTML/CSS/JavaScript site. The repository root is the application source; `npm run build` creates `dist/` for Vercel.
- Never commit secrets or put server-only values in client-side code. Form credentials belong only in Vercel environment variables.
- Run `npm ci && npm run build` before requesting review or merging. Do not bypass a vault-prerender failure.
- Preserve clean URLs, redirects, canonical URLs, Open Graph metadata, schema, sitemap, and `llms.txt` whenever changing public pages or routes.
- Update inventory data only with inventory-owner approval. Keep card images as optimized files under `assets/photos/`, not base64 data in JavaScript.
- Do not change Cloudflare mail records, Resend configuration, Vercel domains/environment variables, or legacy Ripping Zacks routing without the appropriate owner review.
- Work in a focused branch and use a pull request. Direct changes to `main` are production-impacting once the Vercel project integration is restored.

## Key locations

| Need | Location |
|---|---|
| Site pages and styling | Root `*.html`, `styles.css`, page-specific CSS/JS |
| Vault inventory | `lorcana.js`, `marketing.js`, `boosters.js`, `jp-specials.js`, `magic-tmnt.js` |
| Forms | `api/contact.js`, `api/offer.js`, `api/_mail.js` |
| Build/prerender | `scripts/prerender.js` |
| Vercel behavior | `vercel.json` |
| Full operating guide | `INSTRUCTIONS.md` |
