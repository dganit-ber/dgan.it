# Source inventory

Every file in the working tree except `node_modules/`, `.next/`, `.git/` and this file,
with line counts for text files and byte sizes for media. Counts are physical lines,
including blanks and comments. Generated files (`package-lock.json`,
`tsconfig.tsbuildinfo`, `next-env.d.ts`, `.env.local`) are excluded from the totals.

Counted 18 Sep 2026 · Next.js 16, App Router.

| | |
| --- | --- |
| Authored files | 63 |
| Lines of source | 5,195 |
| Media files | 21 (7.5 MB) |
| Routes | 10 |

## Where the lines are

| Area | Files | Lines | Share |
| --- | ---: | ---: | ---: |
| `src/components/` (shared UI) | 24 | 2,073 | 40% |
| `src/components/case-study/` | 13 | 533 | 10% |
| `src/app/` (routes, config, styles) | 15 | 2,170 | 42% |
| `src/` root (outside App Router) | 3 | 301 | 6% |
| Build & tooling config | 6 | 111 | 2% |

## Largest source files

| File | Lines |
| --- | ---: |
| `src/app/projects/ff-library/page.tsx` | 487 |
| `src/app/projects/womentor/page.tsx` | 439 |
| `src/app/globals.css` | 326 |
| `src/components/RoamingDot.tsx` | 253 |
| `src/app/site.config.ts` | 248 |
| `src/components/HobbyShowcase.tsx` | 229 |
| `src/globals.css` | 206 |
| `src/components/Navbar.tsx` | 196 |
| `src/app/cv/page.tsx` | 170 |
| `src/app/projects/ff-library/assets/06.svg` | 142 |

## Full tree

```
.vscode/                                                      1 file, 3 lines
  settings.json                                                       3
public/                                                       16 files, 4 lines
  about/                                                      1 file, 320 KB
    portrait.jpg                                                 320 KB
  ff-library/                                                 3 files, 2.2 MB
    demo-poster.jpg                                              152 KB
    demo.mp4                                                     907 KB
    demo.webm                                                    1.2 MB
  hobbies/                                                    11 files, 1.9 MB
    bookbinding/                                              4 files, 693 KB
      1.jpg                                                      164 KB
      2.jpg                                                      154 KB
      3.jpg                                                      192 KB
      4.jpg                                                      183 KB
    stained-glass/                                            3 files, 352 KB
      1.jpg                                                      152 KB
      2.jpg                                                      117 KB
      3.jpg                                                       83 KB
    water-marbling/                                           4 files, 914 KB
      1.jpg                                                      235 KB
      2.jpg                                                      300 KB
      3.jpg                                                      185 KB
      4.jpg                                                      193 KB
  favicon.svg                                                         4
src/                                                          60 files, 5,077 lines
  app/                                                        20 files, 2,170 lines
    about/                                                    1 file, 18 lines
      page.tsx                                                       18
    actions/                                                  1 file, 59 lines
      contact.ts                                                     59
    contact/                                                  1 file, 18 lines
      page.tsx                                                       18
    cv/                                                       1 file, 170 lines
      page.tsx                                                      170
    impressum/                                                1 file, 101 lines
      page.tsx                                                      101
    projects/                                                 11 files, 1,142 lines
      coming-soon/                                            1 file, 35 lines
        page.tsx                                                     35
      ff-library/                                             8 files, 650 lines
        assets/                                               7 files, 163 lines
          01.png                                                 402 KB
          02.jpg                                                 209 KB
          03.png                                                 173 KB
          04.png                                                 197 KB
          05.png                                                 585 KB
          06.svg                                                    142
          assets.ts                                                  21
        page.tsx                                                    487
      womentor/                                               1 file, 439 lines
        page.tsx                                                    439
      page.tsx                                                       18
    globals.css                                                     326
    layout.tsx                                                       70
    page.tsx                                                         18
    site.config.ts                                                  248
  components/                                                 37 files, 2,606 lines
    case-study/                                               13 files, 533 lines
      Block.tsx                                                      17   [untracked]
      Bullets.tsx                                                    14   [untracked]
      CaseStudy.tsx                                                 123   [untracked]
      Chip.tsx                                                        9   [untracked]
      DecisionEntry.tsx                                              38   [untracked]
      Eyebrow.tsx                                                    16   [untracked]
      Figure.tsx                                                     36   [untracked]
      Hero.tsx                                                       71   [untracked]
      NextItem.tsx                                                   18   [untracked]
      Section.tsx                                                    34   [untracked]
      Video.tsx                                                      44   [untracked]
      caseStudy.types.ts                                            102   [untracked]
      getcurly.code-workspace                                        11   [unused]
    lib/                                                      1 file, 35 lines
      useReveal.ts                                                   35
    About.tsx                                                        54
    CaseStudyCard.tsx                                                43
    CaseStudyCarousel.tsx                                           110
    CaseStudyNav.tsx                                                 58
    CaseStudyTabs.tsx                                                74
    CompanyMarquee.tsx                                               56
    Contact.tsx                                                     107
    CvNav.tsx                                                        59
    CvPreview.tsx                                                   100
    Footer.tsx                                                       53
    Hero.tsx                                                        117
    HobbyShowcase.tsx                                               229
    MediaPlaceholder.tsx                                             40
    Nav.tsx                                                         133
    Navbar.tsx                                                      196
    PageShell.tsx                                                    23
    Paragraphs.tsx                                                   27
    Projects.tsx                                                     27
    Reveal.tsx                                                       45
    RoamingDot.tsx                                                  253
    StatBand.tsx                                                     90
    ThemeToggle.tsx                                                  33
    icons.tsx                                                       111
  globals.css                                                       206   [unused]
  layout.tsx                                                         80   [unused]
  page.tsx                                                           15   [unused]
.env.local                                                            1   [generated]
.gitignore                                                           26
Archive.zip                                                      1.5 MB   [unused]
eslint.config.mjs                                                     5
next-env.d.ts                                                         7   [generated]
next.config.ts                                                        9
package-lock.json                                                 2,196   [generated]
package.json                                                         26
postcss.config.mjs                                                    4
tsconfig.json                                                        41
tsconfig.tsbuildinfo                                                  1   [generated]
```

`[untracked]` — not yet committed · `[unused]` — nothing imports it · `[generated]` — tooling output

## Findings

### Three files sit outside the App Router

`src/layout.tsx`, `src/page.tsx` and `src/globals.css` (301 lines together) are siblings
of `src/app/`, not inside it, so Next never loads them and nothing imports them. They are
near-duplicates of the live `src/app/` versions and have drifted apart.

### Vercel Analytics is not mounted

The three most recent commits — all named "analytics" — added `<Analytics />` to the
orphaned `src/layout.tsx`. The live layout, `src/app/layout.tsx`, does not render it, and
no insights script appears in the built HTML. Moving that import into `src/app/layout.tsx`
fixes it.

### The case-study component set is untracked

Twelve components plus `caseStudy.types.ts` — 533 lines that both project pages now depend
on — have never been committed. `Archive.zip` (1.5 MB) is untracked at the repo root too.

### An editor workspace file ships inside the components folder

`src/components/case-study/getcurly.code-workspace` is VS Code configuration living among
React components. It belongs in `.vscode/` or in `.gitignore`.

### Two different components are named Hero

`src/components/Hero.tsx` is the home-page hero; `src/components/case-study/Hero.tsx` is
the case-study hero. Both are legitimate — worth knowing before an import autocompletes to
the wrong one.

### /projects/coming-soon has no inbound link

The route builds, and `CaseStudyCard` has a full "coming soon" state, but no entry in
`site.caseStudies` points at that href or carries `status: 'coming-soon'`. Both the page
and that card state are reachable only by typing the URL.

### Media is 95% of the repository

7.5 MB of images and video against 435 KB of text. The ff-library demo (webm + mp4 +
poster) is 2.2 MB, the hobby and portrait photos another 2.2 MB, and the five case-study
screenshots 1.5 MB — all committed at full size rather than served through an image CDN.
