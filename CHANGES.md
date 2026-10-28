# Landing page — board E

Unzip over the repo root, then `npm run build`.

## New (3)

```
src/components/landing/ProductList.tsx
src/components/landing/HeroActions.tsx
```

## Overwritten (4) — diff first

```
src/app/page.tsx
src/app/site.config.ts
src/components/landing/Hero.tsx
src/components/CompanyMarquee.tsx
```

## Delete (4)

```
src/components/landing/ProductRow.tsx
src/components/landing/ProductCard.tsx
src/components/landing/ProductPanel.tsx
src/components/landing/HeroAside.tsx
```

Nothing imports them any more. `src/components/Hero.tsx` (the original, with
`RoamingDot`) is also now unused — it still compiles, so it's left alone, but
it and `RoamingDot.tsx` can go whenever you're sure.

---

## What the feedback changed

**"Doesn't know where to look."** The old hero had a headline on the left and
a lede, two craft lines and two buttons on the right — four things asking at
once. Now the name is the only large element on the screen. Everything below
it is visibly subordinate: products at 21px, CTA, then the employer strip.

**"Name is too small."** 18px → `clamp(40px, 5.4vw, 76px)`.

**"Cards are too busy."** They aren't cards now. No border, no background, no
panel — name, one line, link. Anything with a box around it reads as a thing
to examine, and these are meant to be scanned on the way to a case study. The
panels, craft notes and stack lines are gone from the config entirely; that
depth lives in the case studies.

**Tagline.** `site.tagline` — "I could tell you, but I'll show you instead."

**CTA.** One, not two: "Read the CV" → `/cv`. The AI/pre-AI pair is now a
single `site.craft` string, running quietly beside it.

---

## Two things worth knowing

**The strip shows employers only.** `site.companies` entries now carry
`kind: 'product' | 'employer'`, and the landing strip passes `kind="employer"`
because the three products are listed directly above it. Drop the prop to show
all nine.

**It still scrolls.** `variant="strip"` reuses the existing
`.marquee-track-h` animation — 32s linear, pauses on hover, disabled under
`prefers-reduced-motion`. It's smaller than the boxed version (20px marks,
15px names) because it's the last thing on the screen and shouldn't pull the
eye back off the name. If it competes anyway, the honest fix is a static list
rather than a slower one: movement wins attention at any speed.

`variant="panel"` is the original boxed version, unchanged, if you want it
further down a page.

---

## Still open

- `CaseStudyCarousel` is unimported but intact. `/projects` is the full index.
- Get Curly is off the landing page, still at `/projects/getcurly`, still
  unlinked from anywhere.
- Womentor's case study has two `[bracketed]` placeholders: sign-in and the
  moderation specifics.
