# UNIMAID-UniPod — University of Maiduguri

Production website for the **University Innovation Pod (UNIMAID-UniPod)** at the University of
Maiduguri, housed inside the **Abdul Samad Rabiu International Centre for Innovation and
Entrepreneurship (ASR-iCIE)**.

**Live URL (assumed):** https://unipod.unimaid.edu.ng — overridable per deployment with
`NEXT_PUBLIC_SITE_URL`.

## The institutional relationship (read this before editing copy)

Two distinct things share one building. Never conflate them:

| Entity | What it is | Institutional role |
| --- | --- | --- |
| **UNIMAID-UniPod** | Design, prototyping, makerspace and venture-incubation facility, created under UNDP's pan-African **timbuktoo Initiative** in partnership with the Federal Government of Nigeria and UNIMAID | Equipment, makerspace standards, timbuktoo frameworks, pan-African linkages |
| **ASR-iCIE** | The Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship — the host edifice/convening complex, built with an ASR Africa ₦1B grant | The physical building the UniPod operates inside |

Editorial rules enforced in the copy and structured data:

- UNDP did **not** fund the building. ASR Africa did **not** fund the UniPod.
- ASR-iCIE is described as the **host** — venue, seminar room, auditorium, institutional cover.
- The UniPod is described as the **makerspace / prototyping engine operating inside it**.
- `site.host` in `src/config/site.ts` holds the host-edifice strings; the `positioning` export in
  `src/content/index.ts` drives the transparency section at `/about#positioning`.

---

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15.1.6 (App Router, RSC) |
| Language | TypeScript 5.7 (strict) |
| Styling | Tailwind CSS v4 (`@theme` tokens, no config file) |
| Motion | Framer Motion 11 |
| Icons | lucide-react |
| Fonts | Inter Tight · Instrument Serif · JetBrains Mono via `next/font/google` |
| Deploy | Vercel |

## Design system — "Forged in the Sahel"

Tokens live in `src/app/globals.css` under `@theme`:

- `night` 600–950 — deep Sahel night background
- `ember` 50–900 — sunrise ember orange (primary)
- `chad` 50–900 — Lake Chad teal (secondary)
- `sand` 50–900 — warm neutrals for type and surfaces

Typography pairs Inter Tight (UI), Instrument Serif italic (editorial accents) and JetBrains Mono
(eyebrows, labels, technical metadata).

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Overview — hero, mission, lab preview, stats, programs, timeline, ventures, events, news |
| `/about` | Mandate, `#positioning` (UniPod vs ASR-iCIE), five priority innovation areas, timeline, leadership, partners |
| `/facilities` | All eight zones with technical focus, workflows, equipment inventory, status and access tier |
| `/book` | Eligibility, four-step access flow, live lab availability and the booking form |
| `/programs` | UNDP Northeast Nigeria Community Innovation Challenges, Young Africa Innovates, timbuktoo calls, bootcamps, demo days |
| `/visit` | Location, hours, induction, group visits, accessibility, access tiers |
| `/membership` | Access & eligibility register (form name stays `membership` for API compatibility) |
| `/startups` | Ventures and prototypes built at the UniPod |
| `/events`, `/events/[slug]` | Demo days, hackathons, bootcamps |
| `/news`, `/news/[slug]` | Commissioning updates and announcements |
| `/gallery` | Labs, People, Builds, Events, Complex |
| `/get-involved` | Partner, sponsor equipment, mentor, volunteer |
| `/contact` | Helpdesk, lab coordination, partnerships, map |
| `/api/forms` | Single POST endpoint for all site forms |

## Content layer

All copy is data. There is no CMS dependency; every page reads from these modules:

- `src/config/site.ts` — identity, host edifice, hours, schedule, contact addresses, nav
- `src/content/index.ts` — stats, mission, `positioning`, leadership, timeline, `labs`/`allLabs`,
  `conveningSpaces`, `priorityAreas`, `eligibility`, `bookingSteps`, `programs`, `startups`,
  `events`, `posts`/`allPosts`, `gallery`, `partners`, `tiers`, `getOperationalStatus()`
- `src/content/forms.ts` — field definitions for `booking`, `membership`, `contact` and the
  `extraForms` partner/volunteer variants

### Lab entries

Every lab carries the five required fields: name + `technicalFocus`, `workflows`,
`equipment` with a `verified` flag, `status` (`Available` / `In Session` / `Maintenance`) and
`access` (`Open Access` / `Safety Induction Required` / `Technician Supervised`).
`verified: false` renders a "pending audit" badge and must not be flipped until the equipment
list has been reconciled against the UNDP handover audit.

## Forms

`POST /api/forms` accepts:

```json
{ "form": "booking", "data": { "fullName": "...", "email": "...", ... } }
```

Allowed `form` values: `membership`, `contact`, `partner`, `volunteer`, `booking`.

Responses: `200` accepted · `422` validation (name/email) · `400` unknown form or bad JSON ·
`413` payload too large · `429` rate limited (6 submissions per IP per 10 minutes).

Delivery (both optional, both attempted in parallel, neither fails the request):

| Env var | Effect |
| --- | --- |
| `RESEND_API_KEY` + `FORM_EMAIL_TO` | Emails the submission via Resend (`FORM_EMAIL_FROM` sets the sender; `reply_to` is the submitter) |
| `FORM_WEBHOOK_URL` | POSTs the JSON submission to a Slack relay, Zapier, n8n, Google Apps Script, etc. |

With neither configured, submissions are logged with `console.info` so nothing is silently lost.

Validation and normalisation live in `src/lib/forms.ts` (`parseSubmission`) so the route handler and
the test suite enforce exactly the same rules — field length caps, a 24-field cap, control-character
stripping, the honeypot, and the `fullName`/`email` requirements.

`GET /api/health` returns `{ "ok": true, ... }` for uptime monitors.

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://unipod.unimaid.edu.ng
# FORM_WEBHOOK_URL=
# RESEND_API_KEY=
# FORM_EMAIL_TO=
```

## Commands

```bash
npm run dev # local development
npm run typecheck # tsc --noEmit (app + tests)
npm run lint # next lint
npm run test # node --test, forms API unit tests
npm run verify # typecheck + lint + test
npm run build # production build
```

## Deploying

### Vercel

1. Push to GitHub at `harunsulaiman/unimaid-unipod`.
2. Import the repo at <https://vercel.com/new>. The framework is auto-detected; `vercel.json` pins the build and install commands, the `fra1` region and the security headers.
3. Add environment variables under Project Settings, Environment Variables: `NEXT_PUBLIC_SITE_URL` set to the production origin, plus optionally `RESEND_API_KEY`, `FORM_EMAIL_TO`, `FORM_EMAIL_FROM` and `FORM_WEBHOOK_URL`.
4. Pushes to `master` deploy to production; every other branch gets a preview URL.

Or from the CLI:

```bash
npx vercel link
npx vercel env add NEXT_PUBLIC_SITE_URL production
npx vercel --prod
```

### Custom domain

`unipod.unimaid.edu.ng` is a subdomain of `unimaid.edu.ng`, so UNIMAID ICT needs to add a DNS record:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `unipod` | `cname.vercel-dns.com` |

Then add the domain in Vercel under Settings, Domains, and set `NEXT_PUBLIC_SITE_URL` to match. Otherwise canonical URLs, `sitemap.xml`, `robots.txt` and Open Graph tags keep pointing at the old origin.

---

## Hardening notes

- **Rate limiting** is in-memory and therefore per-instance. On Vercel serverless, move it to
  Upstash Redis (or a Vercel KV binding) before opening the forms to public traffic.
- **Form delivery** only logs unless `FORM_WEBHOOK_URL` is configured. Set it before launch or
  submissions exist only in function logs.
- **`opengraph-image.tsx` must keep `export const runtime = "edge"`.** On this Next 15.1.6 / Node 24
  combination the nodejs runtime crashes inside `@vercel/og` with `TypeError: Invalid URL`.
- **Logo link pattern** — `<Link href="/"><Logo /><span className="sr-only">— home</span></Link>`
  with no `aria-label` on the link and `aria-hidden` on the SVG. Changing this reintroduces the
  Lighthouse `label-content-name-mismatch` failure.
- **Hero stats** — each stat is its own `<dl>` inside a `<div>` grid, never `<div>` inside `<dl>`,
  to satisfy the Lighthouse `definition-list` rule.
- **Contrast** — avoid `text-sand-400/70` and similar on `night-950`; it lands at 4.19:1 and fails
  WCAG AA. Use plain `text-sand-400`.
- **File encoding** — write UTF-8 without BOM. `Set-Content` and JSON round-trips mangle ₦, ×, °
  and em-dashes into mojibake.

---

## Content status — what still needs institutional sign-off

Everything below is deliberately marked so nothing ships as fact by accident:

1. **Lab equipment inventories** carry `verified: false` until reconciled against the official UNDP
   equipment handover audit. The UI shows a "pending audit" badge; it must not be flipped early.
2. **Startup, event, news and gallery entries** are editorial placeholders written to demonstrate
   the structure. Replace with verified ventures, confirmed dates and real photography.
3. **Leadership names, titles and honorifics** (Prof. Mohammed Dauda FNSE FNIMechE, Prof. Mohammed
   Laminu Mele, Miss Elsie Attafuah) need verification and consent to publish.
4. **Contact details** are placeholders: `unipod@unimaid.edu.ng`, `helpdesk.unipod@unimaid.edu.ng`,
   `labs.unipod@unimaid.edu.ng`, `partnerships.unipod@unimaid.edu.ng` and `+234 800 000 0000`.
5. **Statistics** in `heroStats`, `stats` and the startups page (`48 ventures`, `₦380M follow-on`)
   are illustrative and need real figures before launch.
6. **Photography** — the gallery renders deterministic gradient tiles by design. Swap in `<Image>`
   once real UniPod photography exists.

