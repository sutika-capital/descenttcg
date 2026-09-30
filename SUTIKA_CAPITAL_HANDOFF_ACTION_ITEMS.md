# Sutika Capital — Descent TCG Final Handoff Action Tracker

**Status:** Open action tracker

**Last reassessed:** 2026-09-30

**Purpose:** Close the remaining access, ownership, and operating-process gaps before the Descent TCG website can be formally handed over to Sutika Capital.

**Related documents:**

- [`SUTIKA_CAPITAL_TEAM_RUNBOOK.md`](SUTIKA_CAPITAL_TEAM_RUNBOOK.md) — operating procedures and platform-specific guidance
- [`INSTRUCTIONS.md`](INSTRUCTIONS.md) — codebase, build, and content-maintenance requirements
- Supabase audit report — private audit artifact; retrieve it from the restricted access register rather than copying it into public issues, tickets, or this repository

> **Security boundary:** This repository is public. Track accountable roles and completion evidence here, but keep names, email addresses, recovery methods, credentials, billing details, and security findings in the restricted private access register.

## 1. Current handoff position

The website is functioning and deployed successfully:

- `main` deploys successfully to Vercel.
- The DIG purple dragon reskin is live on [DescentTCG.com](https://descenttcg.com/).
- Local production builds complete successfully and protect against empty prerendered vault data.
- The codebase and operating guidance are documented.

The handoff is **not complete** because the team’s durable ownership, access, and release controls are not yet evidenced.

| Area | Current verified position | Handoff state |
|---|---|---|
| Website and deployment | Live and healthy on Vercel | Ready |
| Code and maintenance documentation | Repository, runbook, and contributor guidance are published | Ready |
| GitHub team access | Latest repository check found no team access grant | **Open** |
| GitHub protection on `main` | Latest API check did not confirm active protection | **Open** |
| Vercel project access | Deployment succeeds, but a connected maintainer identity cannot retrieve `descenttcg` project logs directly | **Open** |
| Vercel form configuration | Required variable names are known; Production and Preview presence needs owner confirmation | **Open** |
| Cloudflare and Resend operator access | Services are identified; role assignments and recovery ownership need recording | **Open** |
| External commerce and mailbox ownership | TCGplayer, Collectr, and legacy Ripping Zacks mailbox responsibilities need named owners | **Open** |
| Supabase | `nimbleins` is separate from the website and owner-unconfirmed | **Decision required** |

## 2. Completion standard

The handoff is complete only when a Sutika Capital technical owner can show that:

1. active maintainers can change the site through a protected pull-request workflow;
2. at least two authorized people can access and recover every production platform;
3. Vercel production and Preview deployments, domain setup, logs, and rollback are accessible to the appropriate operators;
4. website form delivery works in the live configuration without exposing secrets;
5. DNS, email, external-commerce, and legacy routing responsibilities have named owners;
6. Supabase is formally confirmed as out of scope for this website or has a documented, separately approved owner and purpose; and
7. one controlled change has been taken from branch through Preview, production verification, and rollback rehearsal.

## 3. Priority 0 — ownership and access control

Complete these items before allowing routine production edits by a wider team.

| ID | Required action | Accountable role | Completion evidence |
|---|---|---|---|
| P0-1 | Name a primary and backup technical owner for GitHub, Vercel, Cloudflare, Resend, the production mailbox, and any retained Supabase project. | Sutika Capital leadership | Restricted access register lists each system, primary owner, backup owner, recovery process, MFA state, and last review date. |
| P0-2 | Create or designate a GitHub web-maintenance team and grant it **Maintain** or **Write** access to `sutika-capital/descenttcg`. | GitHub organization owner | Team appears in repository access; each active maintainer can clone, branch, push to a feature branch, and open a pull request. |
| P0-3 | Review direct collaborators. Retain only approved people and use the GitHub team for normal access. Keep Admin limited to access/settings custodians. | GitHub organization owner | Private access register and GitHub audit show approved roles only. |
| P0-4 | Protect `main`: require pull requests, at least one approval, block force pushes, and restrict direct production writes. | GitHub organization owner | Branch-protection/ruleset configuration is visible and a direct push test is rejected. |
| P0-5 | Add a PR build check that runs `npm ci && npm run build`, then require it before merge. | Web maintainer / GitHub administrator | A pull request shows a passing required build check; a deliberately invalid vault-data change fails the check. |
| P0-6 | Grant active maintainers project-level access to Vercel project `sutika-capital/descenttcg`, not only access to the Sutika Capital team. | Vercel team owner | Each role holder can view permitted deployment logs, Preview deployments, domain status, and rollback controls. |
| P0-7 | Confirm the Git integration, `main` production branch, `descenttcg.com`/`www` aliases, and access policy in Vercel. | Vercel team owner | Owner records a non-sensitive configuration review in the private access register. |

### Why P0 matters

The site can deploy today, but durable handoff requires the team—not a single legacy account or connector—to control source, deployment, recovery, and rollback.

## 4. Priority 1 — production readiness and service continuity

Complete these immediately after P0 and before declaring operational handoff complete.

| ID | Required action | Accountable role | Completion evidence |
|---|---|---|---|
| P1-1 | Verify that `RESEND_API_KEY`, `MAIL_FROM`, and `MAIL_TO` exist in **both Production and Preview** Vercel scopes. Do not reveal their values. | Vercel project owner | Owner records variable presence and scope in the private access register. |
| P1-2 | Perform one controlled contact-form and offer-form test with the recipient-mailbox owner. | Web maintainer + mailbox owner | Both submissions return expected responses and arrive at the approved inbox; no customer data or secret values are retained in tickets. |
| P1-3 | Confirm `descenttcg.com` is still verified/sending-enabled in Resend and limit access to form-email operators. | Resend owner | Domain status and role review recorded privately. |
| P1-4 | Identify an owner for the legacy Ripping Zacks Microsoft 365 recipient inbox and mail DNS dependencies. | Business owner + email administrator | Owner, backup owner, change-approval path, and recovery process recorded privately. |
| P1-5 | Review Cloudflare access. Give routine maintainers only the DNS access they need; protect MX, SPF, DKIM, DMARC, and legacy routing records. | Cloudflare zone owner | Role review and DNS-change procedure recorded privately. |
| P1-6 | Capture a current DNS record inventory and a rollback procedure before any DNS or domain change. | Cloudflare zone owner | Private change record includes current values, intended change, approver, and rollback steps. |
| P1-7 | Confirm owners for TCGplayer Pro and the Collectr embed, including the correct process for changes or outages. | Business owner | Private access register identifies account owner, backup, and support/escalation path. |
| P1-8 | Validate a production rollback: identify a prior healthy Vercel deployment and complete a non-disruptive rollback rehearsal or documented operator walkthrough. | Vercel project owner | Pull request or private change record includes rollback verification. |

## 5. Priority 2 — operating acceptance and maintainability

These items make the handoff repeatable rather than dependent on institutional memory.

| ID | Required action | Accountable role | Completion evidence |
|---|---|---|---|
| P2-1 | Run one low-risk, approved change through branch → build → pull request → Preview → reviewed merge → production verification. | Web maintainer | Pull request contains build result, Preview evidence, production verification, and rollback note. |
| P2-2 | Have a second maintainer repeat the workflow independently. | Backup web maintainer | A second reviewed pull request confirms knowledge is not held by one person. |
| P2-3 | Review the runbook and this tracker with each active maintainer. | Technical owner | Private training/acknowledgment record. |
| P2-4 | Establish quarterly access reviews for GitHub, Vercel, Cloudflare, Resend, mailbox administration, and any retained Supabase project. | Technical owner | First review is scheduled and the register includes reviewer and recurrence. |
| P2-5 | Adopt a simple change log and incident path for production changes, form failures, and credential-exposure reports. | Technical owner | Team knows where to open operational requests and where sensitive discussions must occur. |
| P2-6 | Keep visual work aligned with the active DIG purple dragon system and continue to retain the Descent TCG name and current site structure unless scope changes explicitly. | Brand owner + web maintainer | Visual pull requests include desktop and mobile review evidence. |

## 6. Supabase decision gate

### Current verified fact

The Supabase project `nimbleins` is healthy but has **no runtime, build, Vercel, or serverless-function connection** to `sutika-capital/descenttcg`.

It must not be treated as part of the website handoff merely because it is visible through a configured connection.

### Required choice

| Decision | Required next action | Handoff impact |
|---|---|---|
| **Out of scope for Descent TCG** | Record its distinct owner and project purpose privately; remove it from Descent TCG operating assumptions. | Descent TCG handoff can close without Supabase access changes. |
| **Retained Sutika Capital system, unrelated to Descent TCG** | Its owner completes a separate access, dependency, and credential-hygiene review. | Track separately; do not block this website handoff beyond confirming ownership. |
| **Planned future Descent TCG backend** | Write an approved product/architecture plan before any integration. Include data model, authorization, retention, threat model, migration, rollback, and operator ownership. | New project scope; do not add credentials or code until the plan is approved. |

### Separate Supabase follow-up if retained

The project owner should separately verify membership and project-scoped roles, MFA expectations, network-access intent, Auth site URL, sign-up/CAPTCHA policy, dependency inventory, and credential-rotation plan. No credentials should be retrieved, copied, or placed in this repository.

## 7. Closure review agenda

The final 30–45 minute handoff review should include the following demonstrations:

1. A maintainer opens the GitHub repository, creates a branch, and opens a pull request.
2. A reviewer sees branch protection and a passing build check.
3. A Vercel project-level maintainer opens a Preview deployment and the associated build logs.
4. A Vercel owner confirms the production domain, preview domain, Git integration, and variable **presence** without revealing values.
5. The team identifies a rollback deployment and walks through the revert/promotion decision.
6. The responsible operator identifies protected Cloudflare mail records and the Resend form-delivery owner.
7. The team confirms the Supabase decision gate outcome.
8. The technical owner confirms that the private access register has primary/backup owners and recovery procedures.

## 8. Formal handoff sign-off

Sign off only after P0 and P1 are complete and the closure review has succeeded.

| Sign-off role | Confirms |
|---|---|
| Sutika Capital business owner | Ownership, vendor/account accountability, and business continuity. |
| Sutika Capital technical owner | Access, recovery, release workflow, rollback, documentation, and quarterly-review plan. |
| Web maintainer | Build, Preview, production verification, and content/inventory workflow. |
| DNS/email operator | Cloudflare, Resend, mailbox, and mail-DNS continuity. |
| Brand owner | Active Descent TCG naming and DIG visual-system use. |

---

**Do not mark the project handed over solely because the website is live.** The handoff is complete when the authorized Sutika Capital team can independently access, change, review, deploy, validate, and recover the production website without relying on undocumented legacy access.
