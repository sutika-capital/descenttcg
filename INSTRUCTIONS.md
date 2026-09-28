# Descent TCG — Maintainer Instructions

**Purpose:** This is the operating guide for the Sutika Capital team that owns, maintains, and changes [Descent TCG](https://descenttcg.com/). It records the verified production footprint, how to make safe edits, and the access items that must be completed for an unblocked handoff.

> **Current implementation:** A static HTML/CSS/JavaScript website with a Node.js prerender build. It is not a Supabase application and it has no CMS. Content, inventory, styling, and forms are maintained in this repository.

## 1. System of record

| Area | Verified system | What it controls | Maintainer notes |
|---|---|---|---|
| Source code | [`sutika-capital/descenttcg`](https://github.com/sutika-capital/descenttcg) | Site pages, vault inventory data, assets, forms, SEO files, build configuration | The repo is public. `main` is the production branch. |
| Website hosting | Vercel team **Sutika Capital LLC** (`sutika-capital`), project `descenttcg` | Serves `descenttcg.com`, builds the static `dist/` output, runs `/api/contact` and `/api/offer` serverless functions | Ownership is verified from the Vercel GitHub deployment status and Vercel domain metadata. Project-scoped access still needs to be granted to maintainers; see §3. |
| DNS | Cloudflare account **Sutika Capital LLC** | `descenttcg.com` DNS | Zone is active. Apex points to Vercel and `www` aliases Vercel. Keep mail records intact. |
| Transactional email | Resend | Contact and offer-form delivery | `descenttcg.com` is verified and sending-enabled in Resend. |
| External commerce/inventory | TCGplayer Pro and Collectr embed | Storefront links and the Fort Knox Vault iframe | These are external destinations/embeds, not data stores managed by this repo. |
| Database/auth | None in this codebase | Not applicable | No source reference to Supabase was found. Do not attach an unrelated Supabase project to the site without an approved feature plan. |

### Production domains

- Primary: `https://descenttcg.com`
- `www.descenttcg.com` resolves through Vercel.
- Legacy `rippingzacks.com` routing and mail records are intentionally outside normal content work. Do **not** change its M365/mail records.

## 2. How the site works

### Stack and build

- Plain HTML, CSS, and browser JavaScript live at the repository root.
- `npm run build` runs `scripts/prerender.js`.
- The build copies the static site into `dist/`, prerenders the Lorcana, Slab, Sealed, and Fort Knox vault pages, and injects product/item-list JSON-LD where appropriate.
- The build deliberately fails when a data issue produces zero inventory items on a prerendered vault page. Treat that failure as a data or renderer problem, not something to bypass.
- Vercel is configured to run `npm run build` and publish `dist/`. Vercel separately deploys the `api/` directory as serverless functions.

### Forms and email

`api/contact.js` and `api/offer.js` validate submissions, use a honeypot, apply best-effort per-instance throttling, and call `api/_mail.js`.

The following **Vercel Production and Preview** environment variables are required. Store values only in Vercel; never commit them or place them in browser JavaScript.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Server-side Resend API credential |
| `MAIL_FROM` | Verified sender, normally the Descent TCG forms sender |
| `MAIL_TO` | Inbox that receives contact and offer submissions |

The contact inbox currently remains on the Ripping Zacks Microsoft 365 domain. Changing the recipient, sender, or mail DNS requires coordination with the person responsible for that mailbox.

### Inventory source files

| Vault | Source files | Editing guidance |
|---|---|---|
| Lorcana Vault | `lorcana.js` | Update only after inventory owner approval. `null` prices are intentionally hidden. |
| Slab Vault | `marketing.js` | Update only after inventory owner approval. |
| Sealed Vault | `boosters.js`, `jp-specials.js`, `magic-tmnt.js` | Update only after inventory owner approval. |
| Fort Knox Vault | `fort-knox-vault.html` | It is a content-wrapped Collectr iframe. `fortknox.js` is unused legacy material; do not treat it as live inventory. |

When adding card photos, commit optimized files under `assets/photos/`; do not introduce base64-encoded images into the data files.

## 3. Access handoff — required follow-up

This review identified two access gaps. Resolve these before treating the handoff as complete.

### GitHub

- The repository has **no GitHub team grant** and no branch protection on `main`.
- It currently has three direct collaborators: two with admin-level permissions and one with write access.
- A team maintainer with organization-owner rights must create or select the Sutika Capital web-maintenance team and grant it **Maintain** or **Write** access to `sutika-capital/descenttcg`.
- Prefer **Maintain** for day-to-day editors and reserve **Admin** for the small group responsible for repository settings and access.
- Enable branch protection on `main`: require pull requests, require the production build check once available, prevent force pushes, and require at least one approval for content/code changes.

### Vercel

- The production project is confirmed as [`sutika-capital/descenttcg`](https://vercel.com/sutika-capital/descenttcg). GitHub deployment statuses identify the `sutika-capital` Vercel team, and the corresponding successful deployment URLs use the `-sutika-capital.vercel.app` suffix.
- The `descenttcg.com` and legacy `rippingzacks.com` domains are registered in that same Vercel team.
- The currently connected Vercel identity can see the Sutika Capital team and its domains, but Vercel returns `Project not found` for `descenttcg` and exposes only `lainey-website` in its project list. This is a **project-scoped access restriction or stale connector scope**, not evidence that the project belongs to another team.
- A Vercel team owner must grant each active maintainer access to the `descenttcg` project (or relax the project's access policy for the appropriate team role), then have those maintainers reconnect Vercel. Confirm that the three mail variables above exist in both Production and Preview scopes.
- Record the exact project URL, owner contacts, recovery method, and role assignments in the team's private access register — never in this repository.

### Cloudflare and Resend

- Cloudflare access is already tied to **Sutika Capital LLC**; use least-privilege DNS access for routine maintainers.
- The active Descent TCG zone has Vercel DNS records plus Resend mail-authentication records. Treat mail-related records as protected infrastructure.
- Resend recognizes `descenttcg.com` as verified and sending-enabled. Grant access only to the people responsible for form delivery and transactional-email troubleshooting.

## 4. Safe editing workflow

1. Pull the latest `main` and create a focused branch.
2. Make the smallest coherent change. Keep content, inventory, code, and styling changes separately reviewable where practical.
3. Install and validate locally:

   ```bash
   npm ci
   npm run build
   ```

4. Check the affected page(s) locally or on a Vercel Preview deployment. For vault edits, verify visible cards, prices, images, offer buttons, and generated JSON-LD.
5. Open a pull request with: purpose, changed files, screenshots/URLs for visual changes, build result, and rollback note.
6. Merge only after review. A merge to `main` triggers a Vercel production deployment.
7. Validate production after deployment: home page, every changed vault/page, clean URLs, redirects, mobile layout, and form validation.

### Rollback

- **Code/content:** revert the merged commit and redeploy.
- **Deployment:** promote the prior healthy Vercel deployment once a maintainer has project-scoped Vercel access.
- **DNS:** do not use DNS changes as a normal rollback mechanism. Reverse only the exact, reviewed DNS change if one was made.

## 5. Change boundaries

### Routine edits

- Page copy, images, business information, navigation, styling, meta titles/descriptions, sitemap updates, and approved inventory changes.
- Keep canonical URLs, Open Graph/Twitter metadata, schema markup, `robots.txt`, `sitemap.xml`, and `llms.txt` aligned whenever a public page or URL changes.
- Preserve clean URLs. Internal links, canonical tags, Open Graph URLs, sitemap entries, and `llms.txt` use extensionless paths.

### Changes requiring an owner or technical review

- Vercel domains, build/output settings, function configuration, or environment variables.
- Cloudflare DNS, especially MX, SPF, DKIM, DMARC, and legacy Ripping Zacks mail records.
- Resend sender/domain configuration or API keys.
- Form behavior, spam controls, external embeds, redirects, schema, legal pages, and third-party commerce links.
- Renaming or deleting legacy assets, routes, or the `rippingzacks.com` redirect behavior.

## 6. Security rules

- Never commit API keys, tokens, passwords, email credentials, Vercel environment values, or copied exports containing them.
- Never move server-only variables into static HTML or client-side JavaScript.
- Keep `api/` server-side. Do not copy it to `dist/`.
- Review pull requests for unintended source files, customer data, large assets, and changes to DNS/email settings.
- Rotate credentials immediately if they are exposed, then update the relevant Vercel/Resend/Cloudflare settings.

## 7. Current verified health snapshot

Reviewed on **2026-09-28**:

- `npm ci` and `npm run build` completed successfully with no npm vulnerabilities reported.
- The locally generated home, Lorcana Vault, Slab Vault, and Sealed Vault pages matched the live production responses byte-for-byte.
- Production form endpoints returned the expected `400` validation responses for empty test payloads. No email was sent during this check.
- The active site was served by Vercel, and the source repository matched production.
- Vercel deployed commit `76e0953` successfully from the verified Sutika Capital team project on 2026-09-28.

## 8. Completion checklist for the Sutika Capital handoff

- [ ] Grant the chosen Sutika Capital GitHub team access to `sutika-capital/descenttcg`.
- [ ] Enable branch protection and adopt pull-request review for `main`.
- [ ] Grant project-scoped Vercel access to each Sutika Capital maintainer for `sutika-capital/descenttcg`, with the GitHub integration and both domain aliases confirmed.
- [ ] Verify Vercel Production and Preview form environment variables without revealing values in tickets, chat, or source control.
- [ ] Grant least-privilege Cloudflare and Resend access to the appropriate operators.
- [ ] Store actual account ownership, recovery methods, and credential rotation contacts in the team’s private access register.
- [ ] Run one approved preview-to-production content change using the workflow in §4.

---

For automated contributors: read this file before making a change. Keep production behavior stable, document material decisions in the pull request, and leave every system more maintainable than it was found.
