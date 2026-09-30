# Sutika Capital — Descent TCG Operations Runbook

**Document status:** Draft for team handoff

**Last verified:** 2026-09-28

**Audience:** Sutika Capital owners, web maintainers, content editors, and technical operators

**Source of truth for day-to-day code changes:** [`INSTRUCTIONS.md`](INSTRUCTIONS.md)

**Remaining handoff work:** [`SUTIKA_CAPITAL_HANDOFF_ACTION_ITEMS.md`](SUTIKA_CAPITAL_HANDOFF_ACTION_ITEMS.md) is the prioritized closure tracker and sign-off standard.

> **Security boundary:** This repository is public. Never add passwords, API keys, access tokens, database connection strings, personal email addresses, recovery codes, invoices, or account-owner contact details to this file, issues, pull requests, commits, or deployment logs. Keep those details in the team's private access register.

## 1. Purpose and operating model

Descent TCG is a static, repository-managed website. The production website is built from this repository, deployed by Vercel, and uses serverless form handlers for contact and offer submissions.

The team should treat the following systems as distinct:

| System | Role | Day-to-day owner action |
|---|---|---|
| GitHub | Source code, history, reviews, and production branch | Edit through focused branches and pull requests. |
| Vercel | Build, preview, production deployment, serverless form endpoints, and environment variables | Review each preview; protect production settings and secrets. |
| Cloudflare | DNS for `descenttcg.com` | Change only reviewed records; protect mail records. |
| Resend | Delivery of website contact and offer emails | Limit access to form-email operators. |
| Supabase | Separate, owner-unconfirmed project; **not used by the current website** | Do not attach it to Descent TCG without an approved product plan. |

### Core rule

> **A merge to `main` is a production deployment event.**
>
> No routine content, visual, inventory, or code change should go directly to `main`. Use a branch, validate the build, review the Vercel Preview, and merge only after approval.

## 2. Verified production footprint

| Area | Verified setup | Operational note |
|---|---|---|
| Repository | [`sutika-capital/descenttcg`](https://github.com/sutika-capital/descenttcg) | Public repository; default and production branch is `main`. |
| Production website | [descenttcg.com](https://descenttcg.com/) | Canonical public domain. |
| Vercel project | `sutika-capital/descenttcg` | Builds the static site and deploys serverless functions in `api/`. |
| Vercel preview hostname | `descenttcg.vercel.app` | Useful only as a deployment/preview endpoint; the canonical customer-facing domain remains `descenttcg.com`. |
| DNS | Cloudflare account for Sutika Capital LLC | Apex and `www` route through Vercel. Preserve mail-authentication records. |
| Form email | Resend | Used by `/api/contact` and `/api/offer`. |
| Store and external inventory | TCGplayer Pro and Collectr | External destinations/embeds; not stored in GitHub, Vercel, or Supabase. |
| DIG design source | Private [`sutika-capital/descent-into-gaming`](https://github.com/sutika-capital/descent-into-gaming) repository | Design reference only; do not merge repositories or replace the static production stack. |

### Public routes and content model

- The source is plain HTML, CSS, and browser JavaScript at the repository root.
- The build command is `npm run build`; it runs `scripts/prerender.js` and writes deployable content to `dist/`.
- The build prerenders the Lorcana, Slab, Sealed, and Fort Knox vault pages, including product JSON-LD where applicable.
- Clean URLs are required. Pages use extensionless internal links such as `/our-store`, even though source files are named `our-store.html`.
- The production visual identity uses the DIG purple/lavender system and the clean dragon mark in `assets/brand/dig-purple-dragon/`.

## 3. Roles and access model

Assign access to named people through team-based access where the platform supports it. Do not share a single administrator login.

| Responsibility | Recommended access | Systems |
|---|---|---|
| Content editor | GitHub **Write** or **Maintain**; no DNS or environment-variable access | GitHub, Vercel Preview if available |
| Web maintainer | GitHub **Maintain**; Vercel project access sufficient for previews/logs | GitHub, Vercel project |
| Technical owner | GitHub **Admin** only when needed; Vercel project/team administration; protected access to Cloudflare, Resend, and any approved database project | All required systems |
| DNS/email operator | Least-privilege DNS and email-service access | Cloudflare, Resend |
| Supabase project owner | Supabase organization/project administration only after project purpose is confirmed | Supabase |

### Private access register

Maintain this in a restricted team workspace—not in this repository. At minimum, record:

- legal/account owner and backup owner for each platform;
- login/recovery process and MFA enrollment status;
- members, roles, and last access-review date;
- billing owner and escalation path;
- credential rotation owners and dependency inventory;
- Vercel project ID, Cloudflare zone owner, Resend domain owner, and Supabase project owner;
- approved secure location for environment variables and recovery codes.

## 4. GitHub repository setup and workflow

### Required access configuration

1. Create or select a Sutika Capital web-maintenance team in GitHub.
2. Grant that team **Maintain** or **Write** access to `sutika-capital/descenttcg`.
3. Reserve **Admin** for the small group responsible for repository settings, integration settings, and access control.
4. Protect `main` with pull requests, at least one approval, required build status once available, and blocked force pushes.
5. Review collaborators and team membership regularly; remove departed staff promptly.

### Local setup

```bash
gh repo clone sutika-capital/descenttcg
cd descenttcg
npm ci
npm run build
```

A successful build copies the site into `dist/` and verifies prerendered vault output. Do not bypass a build failure that reports empty vault data; investigate the relevant data source or renderer instead.

### Standard change workflow

1. Pull current `main` and create a focused branch.
2. Make the smallest coherent change.
3. Run:

   ```bash
   npm ci
   npm run build
   ```

4. Inspect the changed page locally or in the Vercel Preview.
5. For a visual change, include before/after screenshots or preview URLs in the pull request.
6. For inventory changes, verify card names, prices, images, quantities, offer interactions, and generated JSON-LD.
7. Open a pull request with purpose, changed files, validation result, and rollback note.
8. Merge only after review. Verify production immediately after Vercel completes deployment.

### Important source locations

| Need | Location |
|---|---|
| Global styles | `styles.css` |
| Site pages | Root `*.html` files |
| Vault styles | `collection.css`, `slab-vault.css`, `sealed-vault.css`, `offer-modal.css` |
| DIG purple dragon assets | `assets/brand/dig-purple-dragon/` |
| Lorcana inventory | `lorcana.js` |
| Slab inventory | `marketing.js` |
| Sealed inventory | `boosters.js`, `jp-specials.js`, `magic-tmnt.js` |
| Fort Knox embedded inventory | `fort-knox-vault.html` |
| Contact and offer forms | `api/contact.js`, `api/offer.js`, `api/_mail.js` |
| Build/prerender | `scripts/prerender.js` |
| Hosting behavior | `vercel.json` |
| Contributor constraints | `AGENTS.md` |

### Content and SEO safeguards

When changing a public page or route, keep these aligned:

- title and meta description;
- canonical URL;
- Open Graph and Twitter metadata;
- structured data/schema;
- `robots.txt`, `sitemap.xml`, and `llms.txt` when relevant;
- navigation links and clean URL conventions.

Do not rename or delete legacy assets, routes, or the Ripping Zacks routing behavior without technical-owner review.

## 5. Vercel setup and operations

### Verified deployment model

| Setting | Expected configuration |
|---|---|
| Vercel team | Sutika Capital LLC (`sutika-capital`) |
| Project | `descenttcg` |
| Source branch | `main` for production |
| Build command | `npm run build` |
| Output directory | `dist/` |
| Static content | Copied/prerendered from the repository root to `dist/` |
| Serverless functions | Root `api/` directory; Vercel deploys it independently of `dist/` |
| Production domains | `descenttcg.com` and `www.descenttcg.com` |

### Vercel environment variables

Vercel must hold these values in both **Production** and **Preview** environments. Do not put their values in GitHub, browser JavaScript, issue comments, screenshots, or this runbook.

| Variable | Used for |
|---|---|
| `RESEND_API_KEY` | Server-side access to Resend for form delivery |
| `MAIL_FROM` | Verified sender for website form messages |
| `MAIL_TO` | Recipient inbox for contact and offer submissions |

The configured recipient mailbox is part of the legacy Ripping Zacks Microsoft 365 setup. Changes to the sender, recipient, or email DNS require coordination with the responsible email owner.

### Vercel access verification checklist

A Sutika Capital Vercel owner should verify the following for every active maintainer:

- the person can see the `descenttcg` project—not merely the Sutika Capital team;
- the person can open preview and production deployment logs appropriate to their role;
- project access policy permits required deploy/review actions;
- Git integration points to `sutika-capital/descenttcg` and production follows `main`;
- both production domains are attached to the intended project;
- the three form variables exist in both Production and Preview without revealing values;
- a prior healthy deployment is available for rollback.

> **Known access follow-up:** A prior connected identity could see the Sutika Capital Vercel team and domains but received `Project not found` for `descenttcg`. Treat that as a project-scoped access or connector-scope gap until the project owner verifies otherwise.

### Deploy and rollback procedure

**Normal deployment**

1. Merge an approved pull request to `main`.
2. Wait for the Vercel production deployment to complete.
3. Check the home page, every affected page, mobile layout, clean URLs, and form validation.
4. Record the deployment URL and verification result in the pull request.

**Rollback**

1. For a code or content regression, revert the merged commit through a pull request.
2. If immediate deployment rollback is necessary, promote a prior healthy Vercel deployment using a maintainer with project-level permission.
3. Do not use DNS changes as a normal rollback mechanism.
4. If form behavior changed, validate that no mail credentials or serverless function behavior were altered unexpectedly.

### Vercel incident triage

| Symptom | First checks |
|---|---|
| Build failure | Vercel build log, `npm run build` locally, vault data imports, `scripts/prerender.js` output |
| Vault page is blank | Source data file, page script loading, prerender output, browser console, JSON-LD build guard |
| Contact/offer form fails | Vercel function logs, required environment-variable presence, Resend domain status; never copy secret values into logs |
| Domain fails to resolve | Vercel domain attachment, then Cloudflare DNS; do not change mail records while troubleshooting web routing |
| Unexpected production deployment | GitHub `main` history, Vercel deployment source commit, contributor access and branch protection |

## 6. Cloudflare and Resend boundaries

### Cloudflare

- The `descenttcg.com` zone is under Sutika Capital LLC.
- The apex and `www` route to Vercel.
- Mail-related DNS records—MX, SPF, DKIM, and DMARC—are protected infrastructure.
- A routine content editor should not have broad DNS permissions.
- Before changing any DNS record, capture the existing record, reason for change, expected result, rollback instruction, and approving owner.

### Resend

- `descenttcg.com` is verified for sending.
- Restrict Resend access to form-delivery and email-troubleshooting operators.
- Do not rotate `RESEND_API_KEY`, modify verified domains, or change senders until dependent Vercel environments and form delivery are accounted for.
- Test forms with a controlled, approved submission only; do not send test messages to customer-facing or unknown inboxes.

## 7. Supabase status and boundary

### Current status

A Supabase project was discovered through the configured management connection. It is a separate project, not the active Descent TCG backend.

| Item | Verified observation |
|---|---|
| Project name | `nimbleins` |
| Project reference | `nawsrhwoleeqbjugwowo` |
| Region | `us-east-1` |
| Project health at audit | `ACTIVE_HEALTHY` |
| Database engine | PostgreSQL 17 |
| Supabase security-advisor results | No findings at the 2026-09-28 audit |
| Connection to `sutika-capital/descenttcg` | **None found** in runtime code, build config, Vercel config, or form functions |

> **Do not add Supabase credentials to this repository or Vercel merely because the project exists.** A new feature that needs authentication, storage, or a database requires a written plan, named product owner, threat model, data-retention decision, and separate review.

### Access-verification status

The credential used for the prior read-only audit could read project-level metadata and configuration but could not read organization members, roles, MFA status, or project-scoped permissions. Therefore, it has **not been verified** that Sutika Capital team members hold the correct Supabase access.

A confirmed Supabase organization owner must complete the following in the Supabase dashboard or through an appropriately scoped read-only credential:

1. Confirm the legal organization owner and the project owner for `nimbleins`.
2. Review all members and project-scoped roles.
3. Confirm which Sutika Capital users need access and assign only the minimum role required.
4. Require MFA for administrators where supported by the organization policy and plan.
5. Remove former staff, unknown users, and unnecessary organization-wide roles.
6. Record the project purpose, dependent applications, owner, backup owner, and access-review date in the private access register.

### Project-security follow-up

The prior audit found the following owner-review items. None has been changed.

| Area | Review required |
|---|---|
| Database network allow list | It permits all IPv4 and IPv6 addresses. Confirm whether the project needs open network access or should use an approved IP/VPN/bastion restriction. |
| Auth Site URL | It remains a localhost value. Set an approved production URL before launching any public authentication flow. |
| Sign-up and CAPTCHA | Email/password sign-up is enabled and CAPTCHA is disabled. Confirm whether self-service sign-up is intended before the project is used publicly. |
| API-key hygiene | Handle all key inventory and credential rotation privately. Do not retrieve, paste, or expose key values in source, tickets, or terminal transcripts. |

### Separate-project rule

Until its owner, purpose, and dependent applications are confirmed, treat `nimbleins` as a **separate owner-unconfirmed system**. It is not an approved data store for Descent TCG customers, inventory, forms, or analytics.

## 8. Routine operating procedures

### Content update

1. Create a branch.
2. Update only the required page(s), assets, and metadata.
3. Run `npm ci && npm run build`.
4. Inspect the Vercel Preview and mobile layout.
5. Open a pull request with screenshots and rollback note.
6. Merge after approval and verify production.

### Inventory update

1. Obtain inventory-owner approval.
2. Update the correct source file from the inventory table in §4.
3. Preserve intended `null` values and naming conventions.
4. Run the build; treat zero-item prerender failure as a blocking issue.
5. Verify prices, item photos, counts, offer behavior, and JSON-LD in Preview.
6. Document the inventory source and verification in the pull request.

### Visual identity update

1. Start with the active palette and dragon assets in `assets/brand/dig-purple-dragon/`.
2. Retain the **Descent TCG** name and existing page structure unless scope explicitly changes them.
3. Do not use the larger DIG dragon character illustrations until their visual artifacts are corrected or the brand owner approves replacement assets.
4. Test desktop and mobile views before merge.

### Form-email troubleshooting

1. Confirm that the form route and input validation behave as expected.
2. Check Vercel serverless logs without exposing environment-variable values.
3. Confirm environment-variable presence in the required scopes.
4. Confirm Resend domain/sender status with the email owner.
5. Use one controlled test submission only after approval; record outcome without including customer data.

### Suspected credential exposure

1. Do not paste, repeat, commit, or screenshot the secret.
2. Stop using the suspected secret in new work.
3. Notify the platform owner through the team’s private incident path.
4. Identify dependent deployments/applications before rotation.
5. Rotate the credential only with owner approval, update approved runtime configuration, validate dependencies, then revoke the old secret.
6. Record the incident and remediation in the private access register, not in public GitHub content.

## 9. Onboarding, offboarding, and review cadence

### New maintainer onboarding

- [ ] Grant the GitHub team role required for the person’s job.
- [ ] Confirm GitHub MFA and pull-request workflow.
- [ ] Grant project-scoped Vercel access only if the role requires it.
- [ ] Provide the repository and this runbook; explain the private access register.
- [ ] Run a non-production content change through branch, build, Preview, review, and rollback rehearsal.
- [ ] Grant Cloudflare, Resend, or Supabase access only when role-specific work requires it.

### Maintainer offboarding

- [ ] Remove GitHub team membership and direct repository access.
- [ ] Remove Vercel project/team access.
- [ ] Remove Cloudflare, Resend, and Supabase access where applicable.
- [ ] Revoke any personal tokens, device sessions, recovery paths, and automation credentials that person controlled.
- [ ] Confirm no pending pull requests, deployments, or credential-rotation tasks remain assigned to the departing person.
- [ ] Update the private access register.

### Quarterly access review

At least quarterly, a technical owner should:

1. Review GitHub collaborators, teams, branch protection, and `main` history.
2. Review Vercel project membership, domains, integrations, environment-variable scopes, and recent deployments.
3. Review Cloudflare DNS users and protected mail records.
4. Review Resend users, domains, API-key ownership, and delivery errors.
5. Confirm the purpose, owner, membership, and security posture of any Supabase project before treating it as a company system.
6. Record review date, reviewer, findings, and remediation owners in the private access register.

## 10. Handoff completion checklist

- [ ] GitHub maintenance team has the correct repository access.
- [ ] `main` requires pull requests and review, with force pushes blocked.
- [ ] Vercel project-level access is confirmed for each active maintainer.
- [ ] Vercel Production and Preview form variables are present without values being documented or exposed.
- [ ] Vercel production domains and Git integration are confirmed.
- [ ] Cloudflare and Resend access is granted only to appropriate operators.
- [ ] Mail DNS records and legacy Ripping Zacks routing have a named owner.
- [ ] The purpose and owner of `nimbleins` are confirmed, or it remains formally out of Descent TCG scope.
- [ ] Supabase member roles and database access are reviewed by an authorized organization owner if the project will be retained as a Sutika Capital system.
- [ ] Account-owner, recovery, billing, and credential-rotation information is stored privately.
- [ ] One approved preview-to-production change has been completed and documented.

---

For implementation details and code-level non-negotiables, read [`INSTRUCTIONS.md`](INSTRUCTIONS.md) and [`AGENTS.md`](AGENTS.md) before making a change.
