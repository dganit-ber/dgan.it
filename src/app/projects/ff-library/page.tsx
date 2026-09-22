import type { Metadata } from 'next';
import { site } from '../../site.config';
import { Block } from '@/src/components/case-study/Block';
import { Bullets } from '@/src/components/case-study/Bullets';
import { CaseStudy } from '@/src/components/case-study/CaseStudy';
import { Chip } from '@/src/components/case-study/Chip';
import { Figure } from '@/src/components/case-study/Figure';
import { Video } from '@/src/components/case-study/Video';

import {
  assetFive,
  assetFour,
  assetOne,
  assetSix,
  assetThree,
  assetTwo,
  demoVideo,
} from './assets/assets';

export const metadata: Metadata = {
  title: `The Fan Fiction Library — ${site.firstName} ${site.lastName}`,
  description:
    'Case study: a reading list and browser extension for Archive of Our Own, built and run solo.',
};

export default function FfLibraryCaseStudy() {
  return (
    <CaseStudy
      breadcrumb='The Fan Fiction Library'
      title='A reading list for a site that never had one'
      note={
        <>
          The creator of this website strongly objects to J.K. Rowling&rsquo;s
          politics, opinions, and activism, and is a proud member of the
          LGBTQIA+ community.
        </>
      }
      intro={
        <>
          Archive of Our Own hosts millions of stories and gives readers one flat
          list of bookmarks to manage them with. The Fan Fiction Library is a web
          app and browser extension that lets readers save a work in one click,
          sort it into collections, keep private notes, and track what
          they&rsquo;re reading — without ever leaving the archive.
        </>
      }
      meta={[
        { label: 'Role', value: <>Sole designer &amp; developer</> },
        { label: 'Timeline', value: '2024 — ongoing' },
        { label: 'Status', value: 'Live · public beta' },
        { label: 'Platforms', value: 'Web, Chrome, Firefox (incl. Android)' },
      ]}
      links={[
        {
          label: 'Visit the site',
          href: 'https://ff-library.com',
          primary: true,
          external: true,
        },
        { label: 'Chrome Web Store', href: '#' },
        { label: 'Firefox Add-ons', href: '#' },
        {
          label: 'GitHub',
          href: 'https://github.com/dganit-ber',
          external: true,
        },
      ]}
      media={
        <Figure
          className='mt-11 aspect-2/1'
          src={assetOne}
          alt='A ff-library collection page on desktop, populated with real work cards.'
          priority
          fit={''}
          unoptimized={false}
        />
      }
      problem={{
        title: 'Bookmarks aren’t a reading system',
        paragraphs: [
          <>
            AO3 readers routinely track hundreds of works. The archive&rsquo;s
            own bookmarks are a single chronological list: no shelves, no
            reading status, no way to note{' '}
            <em className='text-mute italic'>why</em> you saved something.
            Readers work around it with spreadsheets, notes apps, and browser
            tabs left open for months.
          </>,
          <>
            The gap isn&rsquo;t storage — it&rsquo;s{' '}
            <strong className='font-semibold text-ink'>
              organisation and re-entry
            </strong>
            . The design goal was a library that fits into the reading habit
            already in place, rather than asking anyone to move house.
          </>,
        ],
        bullets: [
          <>
            <strong className='font-semibold text-ink'>
              Save without a detour.
            </strong>{' '}
            One click, from the page you&rsquo;re already on.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              Shelves, not a stack.
            </strong>{' '}
            To be read, completed, dropped, plus your own.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              Remember the context.
            </strong>{' '}
            Private notes and reading status per work.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              Survive the archive.
            </strong>{' '}
            Works get updated, locked, or deleted — the library has to cope.
          </>,
        ],
      }}
      build={{
        title: 'Two views of the same product',
        intro: (
          <>
            The same feature looks different depending on where you stand.
            Switch between what the reader experiences and what runs underneath.
          </>
        ),
        frontend: (
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
                Pages are server components that fetch their own data
                and stay thin — around 150 lines, with logic pushed into
                the components below them. Client components are used
                only where there&rsquo;s genuine interaction: dialogs,
                menus, the search field, the theme toggle. Mutations run
                through server actions, so most interactions never ship
                a fetch handler to the browser.
              </p>
            </Block>

            <Block title='Design system'>
              <p>
                A deep navy surface with warm gold accents, Lora italic
                for headings and Nunito Sans for everything else. Colour
                and type live entirely in named Tailwind tokens — no raw
                hex in component code — which is what makes the
                in-progress light mode a change at the token layer
                instead of a rewrite of every component.
              </p>
            </Block>

            <Figure
              className='mb-8 aspect-16/7'
              src={assetTwo}
              alt='The ff-library design system: colour swatches with token names, the type scale, and work cards in unread, currently-reading, and completed states.'
              fit={''}
              unoptimized={false}
              priority={false}
            />

            <Block title='The work card'>
              <p>
                The card is the unit the whole product is made of. It
                carries title, author, fandom, word and chapter count,
                completion status, the user&rsquo;s private note, and a
                menu for everything else. It appears in search results,
                in collections, and in the reading list — same
                component, different affordances.
              </p>
            </Block>

            <Block title='Interaction details that took the longest'>
              <Bullets
                items={[
                  <>
                    <strong className='font-semibold text-ink'>
                      Dialogs inside menus.
                    </strong>{' '}
                    Dialog state is owned by the parent menu, not the
                    button, so the dialog survives the dropdown closing.
                  </>,
                  <>
                    <strong className='font-semibold text-ink'>
                      Portals on mobile.
                    </strong>{' '}
                    Dialogs render through{' '}
                    <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                      createPortal
                    </code>{' '}
                    to escape the transform containing block Radix
                    creates, which was clipping them on small screens.
                  </>,
                  <>
                    <strong className='font-semibold text-ink'>
                      Optimistic saves.
                    </strong>{' '}
                    Saving a work updates the UI immediately and
                    reconciles when the server action returns.
                  </>,
                  <>
                    <strong className='font-semibold text-ink'>
                      Empty states as invitations.
                    </strong>{' '}
                    A new collection explains what to put in it and
                    links to search, rather than showing a blank grid.
                  </>,
                ]}
              />
            </Block>

            <div className='mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <Figure
                className='aspect-9/16'
                src={assetThree}
                alt='ff-library on mobile: a collection page with work cards stacked vertically.'
                unoptimized={false}
                priority={false}
              />
              <Figure
                className='aspect-9/16'
                src={assetFour}
                alt="ff-library on mobile: a work card's menu open with the note dialog layered on top — the portal fix in action"
                unoptimized={false}
                priority={false}
              />
            </div>

            <Block title='Sharing'>
              <p>
                A work card can be turned into an image and shared
                straight from the phone. The card is rendered to PNG in
                the browser with{' '}
                <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                  html-to-image
                </code>{' '}
                and handed to the Web Share API where it exists, with a
                download fallback where it doesn&rsquo;t.
              </p>
            </Block>

            <Figure
              className='mb-8 aspect-2/1'
              src={assetFive}
              alt='An exported share card next to the live work card it was generated from.'
              fit={''}
              unoptimized={false}
              priority={false}
            />

            <Block title='The extension UI'>
              <p>
                The extension injects a save button into AO3&rsquo;s own
                markup: on work pages, on listing blurbs, and on
                bookmark pages. It reads the site&rsquo;s visual
                language rather than fighting it, and the collections
                dropdown matches the order used on the site, so the two
                surfaces feel like one product.
              </p>
            </Block>
          </div>
        ),
        backend: (
          <div>
            <div className='mb-7 flex flex-wrap gap-1.5'>
              <Chip>Supabase · Postgres</Chip>
              <Chip>Row Level Security</Chip>
              <Chip>NextAuth v5</Chip>
              <Chip>Server Actions</Chip>
              <Chip>Resend</Chip>
              <Chip>Vercel</Chip>
            </div>

            <Figure
              className='mb-8 aspect-16/7'
              src={assetSix}
              fit='contain'
              unoptimized
              alt='Architecture diagram: the browser web app and extension talk to Next.js on Vercel (server components, server actions, extension API routes, metadata scraper), which reads and writes Supabase Postgres under Row Level Security, scrapes Archive of Our Own server-side, and sends transactional email through Resend.'
              priority={false}
            />

            <Block title='Data model'>
              <p className='mb-4'>
                Works are stored once and shared across users; the join
                table between a user&rsquo;s collection and a work
                carries the per-user state. Notes live in their own
                table, keyed to the user and the work, which keeps them
                private by construction rather than by filtering.
              </p>
              <Bullets
                items={[
                  <>
                    <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                      works
                    </code>{' '}
                    — archive metadata, deduplicated across the whole
                    user base
                  </>,
                  <>
                    <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                      collections
                    </code>{' '}
                    — owned by a user, with three defaults created on
                    sign-up
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
                The schema originally assumed AO3 was the only source.
                Adding FanFiction.net meant a{' '}
                <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                  source
                </code>{' '}
                column, a generated{' '}
                <code className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim'>
                  public_id
                </code>
                , and a composite unique constraint on source plus site
                ID. Every step shipped as a no-op against existing rows
                first — the constraint went on before anything wrote to
                it, so production data was never in an intermediate
                state.
              </p>
            </Block>

            <Block title='Auth'>
              <p>
                NextAuth v5 handles Google SSO and email/password side
                by side, with verification and reset flows sent through
                Resend. Row Level Security is the real boundary: even a
                bug in a query can&rsquo;t return another user&rsquo;s
                collections, because the database refuses.
              </p>
            </Block>

            <Block title='Getting the metadata'>
              <p>
                Saving a work scrapes its metadata from the archive
                server-side. Restricted works can&rsquo;t be fetched
                that way — they&rsquo;re login-gated — so for those the
                extension reads the metadata out of the page the user is
                already authenticated on and posts it up. The scraper
                returns a discriminated result rather than throwing, so
                the UI can say{' '}
                <em className='text-mute italic'>
                  this work was deleted
                </em>{' '}
                and{' '}
                <em className='text-mute italic'>
                  the archive is down
                </em>{' '}
                differently.
              </p>
            </Block>

            <Block title='Keeping data fresh'>
              <p>
                Fics change: chapters are added, works are completed,
                some disappear. A refresh pass re-checks works in the
                collection you&rsquo;re actually looking at,
                fire-and-forget, so status drift gets corrected during
                normal use instead of needing a cron job over the whole
                table.
              </p>
            </Block>

            <Block title="The extension's API surface">
              <p>
                All writes from the extension go through its background
                worker so the session cookie travels with the request
                and CORS stays out of it. The endpoints are deliberately
                thin: authenticate, check ownership, call the same logic
                the site uses.
              </p>
            </Block>
          </div>
        ),
      }}
      decisions={{
        eyebrow: 'Decision log',
        title: 'Four things that broke, and what fixed them',
        intro: (
          <>
            Sole-developer projects don&rsquo;t have code review, so the useful
            record is the one you keep yourself. These are the decisions that
            changed how the rest of the app is written.
          </>
        ),
        entries: [
          {
            title: 'Collections went stale after you created one',
            cause:
              "The user's collections were serialised into the NextAuth session cookie. A new collection existed in the database but not in the cookie until the session refreshed.",
            fix: 'Collections moved out of the session entirely, into a context provider fed by a server component in the layout.',
            result:
              'One source of truth, a smaller cookie, and new collections appear instantly everywhere.',
          },
          {
            title: 'Server action errors were blank in production',
            cause:
              'Next.js scrubs thrown error messages in production builds and replaces them with a digest, so users saw a generic failure where a specific one was intended.',
            fix: 'Handled validation errors return a typed result object instead of throwing. Throwing is reserved for genuine faults.',
            result: (
              <>
                Form errors say what&rsquo;s actually wrong, and the distinction
                between &ldquo;invalid input&rdquo; and &ldquo;something
                broke&rdquo; is enforced by types.
              </>
            ),
          },
          {
            title: 'Dialogs were clipped on phones',
            cause:
              'Dialogs opened from a dropdown were rendered inside a transformed ancestor, which becomes the containing block for fixed positioning.',
            fix: "Portal the dialog to the document body, and move its open state up to the menu so it isn't unmounted with the dropdown.",
            result:
              'Same component, correct behaviour on every screen size — and the pattern is now the default for anything modal.',
          },
          {
            title: "Locked works couldn't be saved at all",
            cause:
              'Restricted AO3 works are only visible to logged-in readers, so a server-side scrape gets a login page instead of metadata.',
            fix: 'The extension extracts metadata from the DOM the reader is already viewing and sends it to the API, bypassing the scrape.',
            result:
              'Restricted works save like any other, with no credentials handled or stored on the server.',
          },
        ],
      }}
      results={{
        title: 'Shipped and in use',
        intro: (
          <>
            The site is live, the Chrome extension is published on the Chrome Web
            Store, and the Firefox version is approved on Mozilla Add-ons —
            including Firefox for Android, which makes it one of the few ways to
            do this from a phone at all.
          </>
        ),
        media: <Video className='aspect-video' src={demoVideo} />,
        next: [
          { label: 'Sources', value: 'FanFiction.net alongside AO3' },
          { label: 'Theming', value: 'Light mode across site and extension' },
          {
            label: 'Organisation',
            value: 'Sorting, filtering, and bulk actions',
          },
          { label: 'Import', value: 'Bulk import from AO3 bookmarks' },
          { label: 'Insight', value: 'Reading wrap — a period in numbers' },
          {
            label: 'Automation',
            value: 'Smart collections driven by status drift',
          },
        ],
      }}
    />
  );
}
