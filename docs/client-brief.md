# Vocational Concepts — Client Brief (Round 2 Redesign)

Source of truth for the three-demo rebuild. Everything here came directly from the client.

## 1. Brand Colour Palette

Client-supplied (coolors.co palette, sent 2026-09-16). These five colours are to be used
across all three redesign demos.

| Hex | Name | Suggested role |
| --- | --- | --- |
| `#002642` | Deep Space Blue | Primary dark — headers, dark sections, body headings |
| `#840032` | Dark Amaranth | Deep burgundy accent — CTAs, emphasis, highlights |
| `#E59500` | Golden Orange | Warm bright accent — icons, underlines, small highlights |
| `#E5DADA` | Dust Grey | Light warm neutral — section backgrounds, cards |
| `#02040F` | Ink Black | Near-black — body text, deepest backgrounds |

Notes:
- Deep Space Blue + Ink Black give two distinct dark values (navy-dark vs true-dark).
- Dark Amaranth is a rich wine/burgundy — notably deeper and more restrained than the
  bright crimson rejected in round 1.
- Golden Orange is the only high-chroma colour; use sparingly so it stays an accent.
- Dust Grey is warm (pink-leaning), not a cool grey — pairs with the burgundy.

### How the palette is split across the three demos

Client direction: navy / gold / white should dominate — that combination goes on the
strongest demo. The remaining colours carry the last demo.

| Demo | Dominant colours |
| --- | --- |
| Demo 1 — flagship / lead option | Navy `#002642` + gold + white (matches the logo) |
| Demo 2 — middle option | Crimson / Dark Amaranth `#840032` + white + a supporting tone |
| Demo 3 — last option | Burgundy + Dust Grey `#E5DADA` + Ink Black `#02040F` |

## 1b. Logo

Source file: `1st logo vs.pdf` (client-supplied). Extracted to `public/brand/logo-navy.jpg`.

Design: gold "C" wrapped around a white "V", with a white figure reaching toward a gold
star. Wordmark "VOCATIONAL" in an elegant classical serif (all caps, wide tracking),
"CONCEPTS" beneath in tracked caps flanked by gold rules.
Tagline: **"Empowering Skills. Building Futures."**

Colours sampled directly from the logo artwork:

| Element | Hex |
| --- | --- |
| Logo background navy | `#0C1C35` |
| Logotype white | `#FFFFFF` |
| Gold — light end of gradient | `#F1DCA3` |
| Gold — mid | `#D7B97D` |
| Gold — deep end | `#D0A944` |
| Star gold | `#E8CE84` |

Implications:
- The brand is **navy + gold + white**. A classical serif wordmark means serif headings
  are on-brand (validates the Prestige direction).
- The logo's gold is a soft metallic champagne (`#D0A944`), noticeably less orange than
  the palette's Golden Orange (`#E59500`). Decide per demo which gold to lead with.
- The logo's navy (`#0C1C35`) is slightly softer than the palette navy (`#002642`).

### Logo assets on hand
| File | Description |
| --- | --- |
| `public/brand/logo-navy.jpg` | Stacked lockup, white + gold on navy (from the logo PDF) |
| `public/brand/logo-horizontal.png` | Horizontal lockup, navy + gold, transparent background — for light surfaces |
| `public/brand/logo-horizontal-dark.png` | Same lockup recoloured white + gold — for navy / dark surfaces |

The horizontal light version reads: gold/navy "VC" mark, then "VOCATIONAL CONCEPTS LLC"
in navy serif caps, a gold rule, then "VOCATIONAL & REHABILITATION EXPERT SERVICES".

### Asset gap — still worth requesting
Both files are flat raster crops with backgrounds baked in. Ideally get from the client:
- The vector original (SVG / AI / EPS), or at minimum transparent-background PNGs
- Any brand/style guide that specifies the official gold and navy values

## 2. Content & Data

Source: `Vocational Concepts Flyer dekhlo bhai.pdf` — a one-page marketing flyer aimed at
**family law attorneys**. Readable copy kept at `docs/reference/flyer.jpg` (documentation
only — deliberately not in `public/`, so it isn't served from the site).

### Identity
- Legal name: **Vocational Concepts LLC**
- Descriptor under logo: **Vocational & Rehabilitation Expert Services**
- Cindy Fisher's title on flyer: **Founder/Director of Vocational and Rehabilitation Services**
- Logo tagline: **Empowering Skills. Building Futures.**
- Flyer headline: **Expertise for Family Law Attorneys**
- Closing script line: _"Make Sure You Hire The Right Expert."_

### Credibility statements (verbatim from flyer — strong, use these)
- "With over **20 years** of vocational and rehabilitation experience, Ms. Fisher has
  testified in **all but two Florida counties**."
- "She testifies locally, statewide, and in federal courts."
- "Ms. Fisher has **never been excluded under Daubert**, nor has she ever been deemed
  unqualified as an expert."
- "She is a **Diplomate of the esteemed American Board of Vocational Experts (ABVE), one of
  only 70 in the country**."
- "Vocational Concepts LLC provides court-tested, defensible reports with sound systematic
  methodology. She uses cutting-edge technology and the most documented, peer-reviewed
  articles to support her vocational opinion."

> These are materially stronger and more specific than the round-1 stats. Replace
> "most Florida counties" with "all but two Florida counties", and add the Daubert record
> and the "one of only 70" figure.

### Family-law service set (the flyer's four icon items)
1. Forensic Vocational Evaluations for Dissolution of Marriage
2. Child Custody & Relocation Vocational Evaluations
3. Change in Financial Circumstance Vocational Evaluations
4. Collaborative Dissolution Evaluations

### "When Might Your Client Need a Vocational Expert?"
- **Long-Term Homemaker Cases** — Re-entry timeline and wage potential.
- **Underemployed Spouse Cases** — Whether a party is voluntarily working below their
  education, training, or historical skill set.
- **Unemployed or Intentionally Idle Spouse Cases** — Employability and ability to return
  to the workforce.
- **Disability or Health Restriction Cases** — Functional limitations, transferable skills
  and realistic earning capacity.

### "Other Reasons You May Need to Hire an Expert!"
- Child Custody Evaluations
- Relocation of a child and custodial parent
- Spouse needing to care for an elderly parent or disabled child
- Domestic Violence cases for dissolution and vocational evaluation is needed
- A realistic rehabilitative plan for a spouse's return to work
- A court-ordered rehabilitative plan — is the plan feasible, and are the costs in line with
  today's economy? Are there transferable skills that can be used rather than a complete
  rehabilitative plan and schooling?

### Service delivery
- **MOBILE • VIRTUAL • STATEWIDE** — "Vocational Concepts LLC provides mobile vocational
  evaluation services throughout Florida."
- **We offer virtual vocational evaluations** "to reduce costs for your client. An in-person
  evaluation may be needed in certain disability-related cases or Domestic Violence cases."

### Closing copy
- "Vocational Concepts LLC can assist with virtually any family law matter involving
  vocational, employability, earning capacity, or rehabilitation questions."
- "We look forward to assisting you and your clients with Vocational & Rehabilitative
  Expert Services."

### Flyer visual language (worth borrowing)
Navy panels with thin gold rules and a gold outer frame; gold circular outline icons;
serif display headings with italic serif sub-headings; gold circular check bullets; a
handwritten gold script accent. Very close to the Prestige direction already built.

### Scope decision — IMPORTANT
The flyer is **supplementary information only**. The website keeps the **broad** service
scope of the existing site (vocationalconcepts.com): personal injury, marital dissolution,
career counseling, vocational rehabilitation, Social Security, return to work, tests &
assessment, product liability, medical malpractice. Do **not** narrow the site to family
law — family law is one vertical among many.

How to use the flyer content:
- The credibility lines (Daubert record, "all but two Florida counties", "one of only 70
  ABVE Diplomates", federal courts) are **general** — use them site-wide.
- MOBILE • VIRTUAL • STATEWIDE and virtual evaluations are **general** — use site-wide.
- The family-law specifics (homemaker / underemployed spouse / custody / relocation /
  collaborative dissolution) enrich the **marital dissolution** service area.

### Open question
The flyer's bottom-right navy panel is **blank** — no contact details printed. Current
details on file (from the old website) are `info@vocationalconcepts.com` and
`(813) 362-4078`. Worth confirming these are still current.

## 3. Website References

- **https://www.grsm.com/** (Gordon Rees Scully Mansukhani) — the client's own reference.
  A large law-firm site: rotating accolade hero, animated stat band ("Scaled for Impact"),
  section blocks, news/insights hub. Conventional; we're aiming above this bar.
- **"Adri" personal-site screenshot** — the client specifically wants the **About Me**
  section styled like this: soft background panel, large serif "Hey, I'm Adri.",
  two lines of supporting copy, a pill CTA, and a large rounded-corner portrait.
  Her note: _"Then, include a short bio of me."_

## 4. Round 2 Build — what exists now

Three demos, same content, three distinct visual systems:

| Route | Name | Palette |
| --- | --- | --- |
| `/templates/prestige` | **Heritage** | Navy `#002642` + logo gold `#D0A944` + ivory |
| `/templates/bold` | **Counsel** | White + Amaranth `#840032` + Ink Black `#02040F` |
| `/templates/minimal` | **Sterling** | Dust Grey `#E5DADA` + burgundy + ink black |

Shared across all three:
- The real logo in navbar + footer (`logo-horizontal.png`, and `logo-horizontal-dark.png`
  for dark backgrounds — both derived from client artwork, backgrounds keyed out).
- **About Me** section in the Adri style, with Cindy's real photograph.
- **Credibility** section built on the flyer's proof points (Daubert, 1-of-70, all but two
  counties, court-tested reports).
- **When Might Your Client Need a Vocational Expert** + "other reasons" from the flyer.
- **Delivery** band (mobile / virtual / statewide) and the "Make sure you hire the right
  expert" line.
- Stats row rebuilt on flyer figures: 20+ · 1 of 70 · All but 2 · Zero.

### Photo assets
| File | Use |
| --- | --- |
| `public/brand/cindy-fisher.jpg` | Primary — office background, used in About Me on all three |
| `public/brand/cindy-fisher-studio.jpg` | Alternate — white studio background, three-quarter |
| `public/brand/cindy-fisher-glasses.jpg` | Alternate — with glasses, warm backdrop |

All cropped to 4:5 and optimised. `src/lib/expert-photo.ts` detects the primary photo on
disk, so swapping it is a file replacement — no code change.

## 5. Still open
- Confirm contact details (`info@vocationalconcepts.com` / `(813) 362-4078`) are current —
  the flyer's contact panel was left blank.
- Ask for the logo in vector (SVG/AI/EPS) if available; current assets are raster crops.
- Decide which of the three directions to take forward.
