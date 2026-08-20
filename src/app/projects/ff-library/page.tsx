import type { Metadata } from 'next';
import Link from 'next/link';
import CaseStudyNav from '../../../components/CaseStudyNav';
import CaseStudyTabs from '../../../components/CaseStudyTabs';
import MediaPlaceholder from '../../../components/MediaPlaceholder';
import PageShell from '../../../components/PageShell';
import Reveal from '../../../components/Reveal';
import { site } from '../../site.config';

export const metadata: Metadata = {
  title: `The Fan Fiction Library — ${site.firstName} ${site.lastName}`,
  description:
    'Case study: a reading list and browser extension for Archive of Our Own, built and run solo.',
};

function Eyebrow({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <p className='mb-4 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase'>
      <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-accent' />
      {index} · {children}
    </p>
  );
}

function Section({
  id,
  children,
  border = true,
}: {
  id: string;
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-14 sm:py-16 ${border ? 'border-t border-line' : ''}`}
    >
      {children}
    </section>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className='mb-8 border-l-2 border-line pl-5 last:mb-0'>
      <h3 className='mb-1.5 font-display text-base font-semibold'>{title}</h3>
      <div className='text-mute'>{children}</div>
    </Reveal>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className='flex flex-col gap-2.5'>
      {items.map((item, i) => (
        <li key={i} className='flex gap-3'>
          <span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-accent' />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className='rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-mute'>
      {children}
    </span>
  );
}

function DecisionEntry({
  title,
  cause,
  fix,
  result,
}: {
  title: string;
  cause: React.ReactNode;
  fix: React.ReactNode;
  result: React.ReactNode;
}) {
  return (
    <Reveal className='rounded-lg border border-line bg-surface p-6'>
      <h3 className='mb-4 font-display text-base font-semibold text-accent'>
        {title}
      </h3>
      <dl className='grid grid-cols-[76px_1fr] gap-x-4 gap-y-3 text-sm sm:grid-cols-[84px_1fr]'>
        <dt className='pt-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
          Cause
        </dt>
        <dd className='leading-relaxed'>{cause}</dd>
        <dt className='pt-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
          Fix
        </dt>
        <dd className='leading-relaxed'>{fix}</dd>
        <dt className='pt-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
          Result
        </dt>
        <dd className='leading-relaxed text-emerald-600'>{result}</dd>
      </dl>
    </Reveal>
  );
}

function NextItem({ label, value }: { label: string; value: string }) {
  return (
    <Reveal className='border-t border-line pt-3'>
      <span className='mb-1 block font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
        {label}
      </span>
      <span className='text-sm'>{value}</span>
    </Reveal>
  );
}

export default function FfLibraryCaseStudy() {
  return (
    <PageShell>
      <main className='mx-auto w-full max-w-6xl px-6 pt-32 pb-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16'>
          <div className='lg:sticky lg:top-32 lg:h-fit'>
            <CaseStudyNav />
          </div>

          <div className='max-w-3xl'>
        {/* ============ HERO ============ */}
        <div id='overview' className='scroll-mt-28'>
        <Reveal>
          <p className='mb-5 font-mono text-xs font-medium tracking-[0.2em] text-mute uppercase'>
            01 ·{' '}
            <Link href='/projects' className='transition-colors hover:text-accent'>
              Projects
            </Link>{' '}
            / The Fan Fiction Library
          </p>
          <h1 className='font-display text-4xl font-bold tracking-[-0.02em] text-accent sm:text-5xl'>
            A reading list for a site that never had one
          </h1>
          <p className='mt-5 max-w-[56ch] text-lg leading-relaxed text-mute'>
            Archive of Our Own hosts millions of stories and gives readers one flat list
            of bookmarks to manage them with. The Fan Fiction Library is a web app and
            browser extension that lets readers save a work in one click, sort it into
            collections, keep private notes, and track what they&rsquo;re reading —
            without ever leaving the archive.
          </p>

          <dl className='mt-10 grid grid-cols-2 gap-x-7 gap-y-5 border-t border-line pt-6 sm:grid-cols-4'>
            <div>
              <dt className='mb-1 font-mono text-[10.5px] font-medium tracking-[0.16em] text-mute uppercase'>
                Role
              </dt>
              <dd className='text-sm'>Sole designer &amp; developer</dd>
            </div>
            <div>
              <dt className='mb-1 font-mono text-[10.5px] font-medium tracking-[0.16em] text-mute uppercase'>
                Timeline
              </dt>
              <dd className='text-sm'>2024 — ongoing</dd>
            </div>
            <div>
              <dt className='mb-1 font-mono text-[10.5px] font-medium tracking-[0.16em] text-mute uppercase'>
                Status
              </dt>
              <dd className='text-sm'>Live · public beta</dd>
            </div>
            <div>
              <dt className='mb-1 font-mono text-[10.5px] font-medium tracking-[0.16em] text-mute uppercase'>
                Platforms
              </dt>
              <dd className='text-sm'>Web, Chrome, Firefox (incl. Android)</dd>
            </div>
          </dl>

          <div className='mt-7 flex flex-wrap gap-2.5'>
            <a
              href='https://ff-library.com'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-md bg-accent px-4 py-2.5 font-mono text-xs font-medium text-accent-ink transition-colors hover:bg-accent-dim'
            >
              Visit the site
            </a>
            <a
              href='#'
              className='rounded-md border border-line px-4 py-2.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent'
            >
              Chrome Web Store
            </a>
            <a
              href='#'
              className='rounded-md border border-line px-4 py-2.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent'
            >
              Firefox Add-ons
            </a>
            <a
              href='https://github.com/dganit-ber'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-md border border-line px-4 py-2.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent'
            >
              GitHub
            </a>
          </div>

          <MediaPlaceholder
            className='mt-11 aspect-video'
            tag='Media placeholder — 01'
            what='Hero shot: a collection page on desktop, populated with real work cards.'
            spec='16:9 · 1920×1080 · PNG or WebP'
          />
        </Reveal>
        </div>

        {/* ============ PROBLEM ============ */}
        <Section id='problem'>
          <Reveal>
            <Eyebrow index='02'>The problem</Eyebrow>
            <h2 className='mb-4 font-display text-2xl font-bold tracking-[-0.01em] sm:text-3xl'>
              Bookmarks aren&rsquo;t a reading system
            </h2>
            <p className='mb-4 text-mute'>
              AO3 readers routinely track hundreds of works. The archive&rsquo;s own
              bookmarks are a single chronological list: no shelves, no reading status,
              no way to note <em className='text-mute italic'>why</em> you saved
              something. Readers work around it with spreadsheets, notes apps, and
              browser tabs left open for months.
            </p>
            <p className='mb-6 text-mute'>
              The gap isn&rsquo;t storage — it&rsquo;s{' '}
              <strong className='font-semibold text-ink'>
                organisation and re-entry
              </strong>
              . The design goal was a library that fits into the reading habit already
              in place, rather than asking anyone to move house.
            </p>
            <Bullets
              items={[
                <>
                  <strong className='font-semibold text-ink'>
                    Save without a detour.
                  </strong>{' '}
                  One click, from the page you&rsquo;re already on.
                </>,
                <>
                  <strong className='font-semibold text-ink'>Shelves, not a stack.</strong>{' '}
                  To be read, completed, dropped, plus your own.
                </>,
                <>
                  <strong className='font-semibold text-ink'>
                    Remember the context.
                  </strong>{' '}
                  Private notes and reading status per work.
                </>,
                <>
                  <strong className='font-semibold text-ink'>Survive the archive.</strong>{' '}
                  Works get updated, locked, or deleted — the library has to cope.
                </>,
              ]}
            />
          </Reveal>
        </Section>

        {/* ============ TWO VIEWS ============ */}
        <Section id='how-its-built'>
          <Reveal>
            <Eyebrow index='03'>How it&rsquo;s built</Eyebrow>
            <h2 className='mb-4 font-display text-2xl font-bold tracking-[-0.01em] sm:text-3xl'>
              Two views of the same product
            </h2>
            <p className='mb-8 max-w-[60ch] text-mute'>
              The same feature looks different depending on where you stand. Switch
              between what the reader experiences and what runs underneath.
            </p>
          </Reveal>

            <CaseStudyTabs
              frontend={
                <div>
                  <div className='mb-7 flex flex-wrap gap-1.5'>
                    <Chip>Next.js 14 · App Router</Chip>
                    <Chip>TypeScript</Chip>
                    <Chip>React Server Components</Chip>
                    <Chip>Tailwind CSS</Chip>
                    <Chip>Radix UI</Chip>
                    <Chip>WebExtensions MV3</Chip>
                  </div>

                  <Block title='Rendering model'>
                    <p>
                      Pages are server components that fetch their own data and stay
                      thin — around 150 lines, with logic pushed into the components
                      below them. Client components are used only where there&rsquo;s
                      genuine interaction: dialogs, menus, the search field, the theme
                      toggle. Mutations run through server actions, so most
                      interactions never ship a fetch handler to the browser.
                    </p>
                  </Block>

                  <Block title='Design system'>
                    <p>
                      A deep navy surface with warm gold accents, Lora italic for
                      headings and Nunito Sans for everything else. Colour and type
                      live entirely in named Tailwind tokens — no raw hex in component
                      code — which is what makes the in-progress light mode a change
                      at the token layer instead of a rewrite of every component.
                    </p>
                  </Block>

                  <MediaPlaceholder
                    className='mb-8 aspect-[16/7]'
                    tag='Media placeholder — 02'
                    what='Design system strip: colour swatches with token names, the type scale, and three work cards in different states (unread / currently reading / completed).'
                    spec='16:7 · exported from Figma or built as a static page'
                  />

                  <Block title='The work card'>
                    <p>
                      The card is the unit the whole product is made of. It carries
                      title, author, fandom, word and chapter count, completion
                      status, the user&rsquo;s private note, and a menu for everything
                      else. It appears in search results, in collections, and in the
                      reading list — same component, different affordances.
                    </p>
                  </Block>

                  <Block title='Interaction details that took the longest'>
                    <Bullets
                      items={[
                        <>
                          <strong className='font-semibold text-ink'>
                            Dialogs inside menus.
                          </strong>{' '}
                          Dialog state is owned by the parent menu, not the button, so
                          the dialog survives the dropdown closing.
                        </>,
                        <>
                          <strong className='font-semibold text-ink'>
                            Portals on mobile.
                          </strong>{' '}
                          Dialogs render through{' '}
                          <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                            createPortal
                          </code>{' '}
                          to escape the transform containing block Radix creates,
                          which was clipping them on small screens.
                        </>,
                        <>
                          <strong className='font-semibold text-ink'>
                            Optimistic saves.
                          </strong>{' '}
                          Saving a work updates the UI immediately and reconciles when
                          the server action returns.
                        </>,
                        <>
                          <strong className='font-semibold text-ink'>
                            Empty states as invitations.
                          </strong>{' '}
                          A new collection explains what to put in it and links to
                          search, rather than showing a blank grid.
                        </>,
                      ]}
                    />
                  </Block>

                  <div className='mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    <MediaPlaceholder
                      className='aspect-[9/16]'
                      tag='Media placeholder — 03'
                      what='Mobile: collection page, cards stacked.'
                      spec='9:16 · device frame optional'
                    />
                    <MediaPlaceholder
                      className='aspect-[9/16]'
                      tag='Media placeholder — 04'
                      what='Mobile: work card menu open with the note dialog on top — the portal fix in action.'
                      spec='9:16 · device frame optional'
                    />
                  </div>

                  <Block title='Sharing'>
                    <p>
                      A work card can be turned into an image and shared straight from
                      the phone. The card is rendered to PNG in the browser with{' '}
                      <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                        html-to-image
                      </code>{' '}
                      and handed to the Web Share API where it exists, with a download
                      fallback where it doesn&rsquo;t.
                    </p>
                  </Block>

                  <MediaPlaceholder
                    className='mb-8 aspect-[4/3]'
                    tag='Media placeholder — 05'
                    what='An exported share card, ideally shown next to the live card it was generated from.'
                    spec='4:3 · PNG'
                  />

                  <Block title='The extension UI'>
                    <p>
                      The extension injects a save button into AO3&rsquo;s own markup:
                      on work pages, on listing blurbs, and on bookmark pages. It reads
                      the site&rsquo;s visual language rather than fighting it, and the
                      collections dropdown matches the order used on the site, so the
                      two surfaces feel like one product.
                    </p>
                  </Block>
                </div>
              }
              backend={
                <div>
                  <div className='mb-7 flex flex-wrap gap-1.5'>
                    <Chip>Supabase · Postgres</Chip>
                    <Chip>Row Level Security</Chip>
                    <Chip>NextAuth v5</Chip>
                    <Chip>Server Actions</Chip>
                    <Chip>Resend</Chip>
                    <Chip>Vercel</Chip>
                  </div>

                  <MediaPlaceholder
                    className='mb-8 aspect-[16/7]'
                    tag='Media placeholder — 06'
                    what='Architecture diagram: browser + extension → Next.js (server components, server actions, extension API routes) → Supabase, with the AO3 scrape path and Resend branching off.'
                    spec='16:7 · SVG preferred so it scales'
                  />

                  <Block title='Data model'>
                    <p className='mb-4'>
                      Works are stored once and shared across users; the join table
                      between a user&rsquo;s collection and a work carries the
                      per-user state. Notes live in their own table, keyed to the user
                      and the work, which keeps them private by construction rather
                      than by filtering.
                    </p>
                    <Bullets
                      items={[
                        <>
                          <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                            works
                          </code>{' '}
                          — archive metadata, deduplicated across the whole user base
                        </>,
                        <>
                          <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                            collections
                          </code>{' '}
                          — owned by a user, with three defaults created on sign-up
                        </>,
                        <>
                          <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                            collection_works
                          </code>{' '}
                          — membership, reading status, date added
                        </>,
                        <>
                          <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                            work_notes
                          </code>{' '}
                          — one private note per user, per work
                        </>,
                      ]}
                    />
                  </Block>

                  <Block title='Multi-source, without a rewrite'>
                    <p>
                      The schema originally assumed AO3 was the only source. Adding
                      FanFiction.net meant a{' '}
                      <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                        source
                      </code>{' '}
                      column, a generated{' '}
                      <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                        public_id
                      </code>
                      , and a composite unique constraint on source plus site ID.
                      Every step shipped as a no-op against existing rows first — the
                      constraint went on before anything wrote to it, so production
                      data was never in an intermediate state.
                    </p>
                  </Block>

                  <Block title='Auth'>
                    <p>
                      NextAuth v5 handles Google SSO and email/password side by side,
                      with verification and reset flows sent through Resend. Row
                      Level Security is the real boundary: even a bug in a query
                      can&rsquo;t return another user&rsquo;s collections, because the
                      database refuses.
                    </p>
                  </Block>

                  <Block title='Getting the metadata'>
                    <p>
                      Saving a work scrapes its metadata from the archive
                      server-side. Restricted works can&rsquo;t be fetched that way —
                      they&rsquo;re login-gated — so for those the extension reads the
                      metadata out of the page the user is already authenticated on
                      and posts it up. The scraper returns a discriminated result
                      rather than throwing, so the UI can say{' '}
                      <em className='text-mute italic'>this work was deleted</em> and{' '}
                      <em className='text-mute italic'>the archive is down</em>{' '}
                      differently.
                    </p>
                  </Block>

                  <Block title='Keeping data fresh'>
                    <p>
                      Fics change: chapters are added, works are completed, some
                      disappear. A refresh pass re-checks works in the collection
                      you&rsquo;re actually looking at, fire-and-forget, so status
                      drift gets corrected during normal use instead of needing a
                      cron job over the whole table.
                    </p>
                  </Block>

                  <Block title="The extension's API surface">
                    <p>
                      All writes from the extension go through its background
                      worker so the session cookie travels with the request and CORS
                      stays out of it. The endpoints are deliberately thin:
                      authenticate, check ownership, call the same logic the site
                      uses.
                    </p>
                  </Block>
                </div>
              }
            />
        </Section>

        {/* ============ DECISION LOG ============ */}
        <Section id='decision-log'>
          <Reveal>
            <Eyebrow index='04'>Decision log</Eyebrow>
            <h2 className='mb-4 font-display text-2xl font-bold tracking-[-0.01em] sm:text-3xl'>
              Four things that broke, and what fixed them
            </h2>
            <p className='mb-8 max-w-[58ch] text-mute'>
              Sole-developer projects don&rsquo;t have code review, so the useful
              record is the one you keep yourself. These are the decisions that
              changed how the rest of the app is written.
            </p>
          </Reveal>

            <div className='flex flex-col gap-4'>
              <DecisionEntry
                title='Collections went stale after you created one'
                cause="The user's collections were serialised into the NextAuth session cookie. A new collection existed in the database but not in the cookie until the session refreshed."
                fix='Collections moved out of the session entirely, into a context provider fed by a server component in the layout.'
                result='One source of truth, a smaller cookie, and new collections appear instantly everywhere.'
              />
              <DecisionEntry
                title='Server action errors were blank in production'
                cause='Next.js scrubs thrown error messages in production builds and replaces them with a digest, so users saw a generic failure where a specific one was intended.'
                fix='Handled validation errors return a typed result object instead of throwing. Throwing is reserved for genuine faults.'
                result={
                  <>
                    Form errors say what&rsquo;s actually wrong, and the distinction
                    between &ldquo;invalid input&rdquo; and &ldquo;something
                    broke&rdquo; is enforced by types.
                  </>
                }
              />
              <DecisionEntry
                title='Dialogs were clipped on phones'
                cause='Dialogs opened from a dropdown were rendered inside a transformed ancestor, which becomes the containing block for fixed positioning.'
                fix="Portal the dialog to the document body, and move its open state up to the menu so it isn't unmounted with the dropdown."
                result='Same component, correct behaviour on every screen size — and the pattern is now the default for anything modal.'
              />
              <DecisionEntry
                title="Locked works couldn't be saved at all"
                cause='Restricted AO3 works are only visible to logged-in readers, so a server-side scrape gets a login page instead of metadata.'
                fix="The extension extracts metadata from the DOM the reader is already viewing and sends it to the API, bypassing the scrape."
                result='Restricted works save like any other, with no credentials handled or stored on the server.'
              />
            </div>
        </Section>

        {/* ============ RESULTS ============ */}
        <Section id='results'>
          <Reveal>
            <Eyebrow index='05'>Where it stands</Eyebrow>
            <h2 className='mb-4 font-display text-2xl font-bold tracking-[-0.01em] sm:text-3xl'>
              Shipped and in use
            </h2>
            <p className='mb-8 text-mute'>
              The site is live, the Chrome extension is published on the Chrome Web
              Store, and the Firefox version is approved on Mozilla Add-ons —
              including Firefox for Android, which makes it one of the few ways to do
              this from a phone at all.
            </p>
          </Reveal>

            <MediaPlaceholder
              className='aspect-[16/7]'
              tag='Media placeholder — 07'
              what='Short screen recording: saving a work from an AO3 listing page and it appearing in a collection on the site. The most convincing asset on the page — worth doing well.'
              spec='16:7 · MP4 loop, muted, autoplay · ~10s'
            />

            <p className='mt-11 mb-4 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase'>
              Next
            </p>
            <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
              <NextItem label='Sources' value='FanFiction.net alongside AO3' />
              <NextItem label='Theming' value='Light mode across site and extension' />
              <NextItem
                label='Organisation'
                value='Sorting, filtering, and bulk actions'
              />
              <NextItem label='Import' value='Bulk import from AO3 bookmarks' />
              <NextItem label='Insight' value='Reading wrap — a period in numbers' />
              <NextItem
                label='Automation'
                value='Smart collections driven by status drift'
              />
            </div>
        </Section>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
