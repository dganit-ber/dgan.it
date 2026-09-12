import type { Metadata } from 'next';
import Link from 'next/link';
import CaseStudyNav from '../../../components/CaseStudyNav';
import CaseStudyTabs from '../../../components/CaseStudyTabs';
import PageShell from '../../../components/PageShell';
import Reveal from '../../../components/Reveal';
import { site } from '../../site.config';

export const metadata: Metadata = {
  title: `Womentor — ${site.firstName} ${site.lastName}`,
  description:
    'Case study: a private mentoring platform that matches women by the challenge they are navigating, not their job title.',
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
  tension,
  choice,
  result,
}: {
  title: string;
  tension: React.ReactNode;
  choice: React.ReactNode;
  result: React.ReactNode;
}) {
  return (
    <Reveal className='rounded-lg border border-line bg-surface p-6'>
      <h3 className='mb-4 font-display text-base font-semibold text-accent'>
        {title}
      </h3>
      <dl className='grid grid-cols-[76px_1fr] gap-x-4 gap-y-3 text-sm sm:grid-cols-[84px_1fr]'>
        <dt className='pt-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
          Tension
        </dt>
        <dd className='leading-relaxed'>{tension}</dd>
        <dt className='pt-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
          Choice
        </dt>
        <dd className='leading-relaxed'>{choice}</dd>
        <dt className='pt-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
          Result
        </dt>
        <dd className='leading-relaxed text-emerald-600'>{result}</dd>
      </dl>
    </Reveal>
  );
}

function WomentorMark({ className = '' }: { className?: string }) {
  return (
    <span
      aria-label='womentor'
      role='img'
      className={`wm-mark inline-flex whitespace-nowrap lowercase ${className}`}
    >
      <span className='wm-wo'>wo</span>
      <span className='wm-men'>men</span>
      <span className='wm-tor'>tor</span>
      <style>{`
        .wm-mark {
          --wm-cycle: 7s;
          --wm-women: #e0a64a;
          --wm-mentor: #4fb5a5;
          --wm-dim: #a9b3af;
        }
        [data-theme='light'] .wm-mark {
          --wm-women: #b0741a;
          --wm-mentor: #14655d;
          --wm-dim: #4e625e;
        }
        .wm-mark .wm-wo,
        .wm-mark .wm-men {
          color: var(--wm-women);
        }
        .wm-mark .wm-tor {
          color: var(--wm-mentor);
        }
        .wm-mark .wm-wo {
          animation: wm-seg-wo var(--wm-cycle) infinite;
        }
        .wm-mark .wm-men {
          animation: wm-seg-men var(--wm-cycle) infinite;
        }
        .wm-mark .wm-tor {
          animation: wm-seg-tor var(--wm-cycle) infinite;
        }
        @keyframes wm-seg-wo {
          0%,
          34% {
            color: var(--wm-women);
          }
          50%,
          84% {
            color: var(--wm-dim);
          }
          to {
            color: var(--wm-women);
          }
        }
        @keyframes wm-seg-men {
          0%,
          34% {
            color: var(--wm-women);
          }
          50%,
          84% {
            color: var(--wm-mentor);
          }
          to {
            color: var(--wm-women);
          }
        }
        @keyframes wm-seg-tor {
          0%,
          34% {
            color: var(--wm-dim);
          }
          50%,
          84% {
            color: var(--wm-mentor);
          }
          to {
            color: var(--wm-dim);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wm-mark .wm-wo,
          .wm-mark .wm-men,
          .wm-mark .wm-tor {
            animation: none;
          }
        }
      `}</style>
    </span>
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

export default function WomentorCaseStudy() {
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
                  <Link
                    href='/projects'
                    className='transition-colors hover:text-accent'
                  >
                    Projects
                  </Link>{' '}
                  / Womentor
                </p>
                <WomentorMark className='mb-3 font-display text-xl font-semibold sm:text-2xl' />
                <h1 className='font-display text-4xl font-bold tracking-[-0.02em] text-accent sm:text-5xl'>
                  Women who have been there, one message away
                </h1>
                <p className='mt-5 max-w-[56ch] border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-mute'>
                  This one started from my own experience: as a woman in
                  tech, the technical problems are usually well documented.
                  The harder ones — who to ask when you&rsquo;re the only
                  woman in the room, or how to even name what&rsquo;s going
                  wrong — usually aren&rsquo;t.
                </p>
                <p className='mt-5 max-w-[56ch] text-lg leading-relaxed text-mute'>
                  Womentor is a free, private 1:1 mentoring platform. It aims
                  to be first aid, not coaching — a way to get unstuck on one
                  specific thing, fast, rather than a standing relationship.
                  Instead of matching only by job title or seniority, it
                  matches women by the specific thing they&rsquo;re
                  navigating — asking for a raise, being the only woman on the
                  crew, a hostile work environment — or by industry itself,
                  since fields like the trades and tech are still heavily
                  male-dominated and that alone can be the reason to match.
                  Either way, the two people land in a private room together.
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
                    <dd className='text-sm'>In development</dd>
                  </div>
                  <div>
                    <dt className='mb-1 font-mono text-[10.5px] font-medium tracking-[0.16em] text-mute uppercase'>
                      Status
                    </dt>
                    <dd className='text-sm'>Deployed preview · mock data</dd>
                  </div>
                  <div>
                    <dt className='mb-1 font-mono text-[10.5px] font-medium tracking-[0.16em] text-mute uppercase'>
                      Platforms
                    </dt>
                    <dd className='text-sm'>Web, mobile-responsive</dd>
                  </div>
                </dl>

                <div className='mt-7 flex flex-wrap gap-2.5'>
                  <a
                    href='https://womentor.vercel.app'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-md bg-accent px-4 py-2.5 font-mono text-xs font-medium text-accent-ink transition-colors hover:bg-accent-dim'
                  >
                    Visit the preview
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
              </Reveal>
            </div>

            {/* ============ PROBLEM ============ */}
            <Section id='problem'>
              <Reveal>
                <Eyebrow index='02'>The problem</Eyebrow>
                <h2 className='mb-4 font-display text-2xl font-bold tracking-[-0.01em] sm:text-3xl'>
                  Mentoring platforms match the wrong axis
                </h2>
                <p className='mb-4 text-mute'>
                  Most mentoring programs pair people by seniority or job
                  title, and stop there. Industry is a real axis too — someone
                  navigating a traditionally male-dominated trade needs a
                  mentor who&rsquo;s worked that specific field, not just any
                  senior woman. But title and industry together still
                  don&rsquo;t cover everything: how to respond to being talked
                  over in every meeting, or how to keep going when the
                  environment itself is hostile, cuts across both. Those
                  situations needed a third axis to match on.
                </p>
                <p className='mb-6 text-mute'>
                  The other gap is privacy. Advice forums and public
                  communities are searchable, and that&rsquo;s exactly wrong
                  for a question like &ldquo;how do I report my
                  manager.&rdquo; The design goal was a match made on the
                  actual problem, in a room only the two people involved can
                  see.
                </p>
                <Bullets
                  items={[
                    <>
                      <strong className='font-semibold text-ink'>
                        Match on the challenge — or the industry.
                      </strong>{' '}
                      42 named situations to choose from, ranked by overlap,
                      or start straight from your industry — the right entry
                      point when the field itself, like a traditionally
                      male-dominated trade, is what a mentor needs to have
                      lived.
                    </>,
                    <>
                      <strong className='font-semibold text-ink'>
                        First aid, not coaching.
                      </strong>{' '}
                      Free, and scoped as a short conversation to get unstuck
                      now — not a standing mentorship relationship.
                    </>,
                    <>
                      <strong className='font-semibold text-ink'>
                        Private by default.
                      </strong>{' '}
                      No public feed, no profiles visible to anyone but the
                      two people matched.
                    </>,
                    <>
                      <strong className='font-semibold text-ink'>
                        Fast, not formal.
                      </strong>{' '}
                      A short message and an accept, not a weeks-long
                      application process.
                    </>,
                    <>
                      <strong className='font-semibold text-ink'>
                        One identity, both roles.
                      </strong>{' '}
                      The same person can be a mentee on one challenge and a
                      mentor on another.
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
                  Same stack and workflow as{' '}
                  <Link
                    href='/projects/ff-library'
                    className='text-accent transition-colors hover:text-accent-dim'
                  >
                    the ff-library
                  </Link>
                  , applied to a very different problem. Switch between what
                  a member sees and what runs underneath.
                </p>
              </Reveal>

              <CaseStudyTabs
                frontend={
                  <div>
                    <div className='mb-7 flex flex-wrap gap-1.5'>
                      <Chip>Next.js · App Router</Chip>
                      <Chip>TypeScript</Chip>
                      <Chip>Tailwind CSS</Chip>
                      <Chip>Fraunces / DM Sans / JetBrains Mono</Chip>
                      <Chip>Light &amp; dark mode</Chip>
                      <Chip>Vercel</Chip>
                    </div>

                    <Block title='Typography and tone'>
                      <p>
                        Fraunces carries the display headings, DM Sans carries
                        the body copy, and JetBrains Mono handles the small
                        uppercase labels — the same three-typeface split as
                        this site, chosen so a serious subject doesn&rsquo;t
                        read as clinical. Light and dark themes are both
                        first-class, not a dark-mode-as-afterthought toggle.
                      </p>
                    </Block>

                    <Block title='Mobile'>
                      <p>
                        The site is fully responsive today, and a private,
                        one-message-at-a-time product like this is mostly
                        going to get used on a phone — reaching for advice
                        mid-crisis doesn&rsquo;t wait for a desktop. The plan
                        is to move to mobile-first as the layouts mature,
                        rather than retrofitting a desktop-first design once
                        usage confirms it.
                      </p>
                    </Block>

                    <Block title='Two ways in'>
                      <p>
                        You can start from a picker across 42 named
                        situations — grouped into things like Pay &amp;
                        Negotiation, Bias &amp; Culture, and Trades &amp;
                        Male-Dominated Fields — or start from your industry
                        directly. Both feed the same ranked directory; which
                        one you lead with just depends on whether the specific
                        problem or the field itself is what matters most.
                      </p>
                    </Block>

                    <Block title='The mentor directory'>
                      <p>
                        Each card shows initials, title, years of experience,
                        a short personal statement, three or four expertise
                        tags, and a response-time estimate — deliberately no
                        star rating or follower count. Sort options are Best
                        match, Most experience, and Recently joined; filters
                        narrow by topic, availability, industry, country, and
                        language.
                      </p>
                    </Block>

                    <Block title='Sign-in'>
                      <p>
                        Email-only, passwordless: a magic link, nothing to
                        remember and nothing posted publicly against an
                        account. For a product where the whole point is
                        discretion, one fewer credential tied to a real name
                        felt like the right trade.
                      </p>
                    </Block>
                  </div>
                }
                backend={
                  <div>
                    <div className='mb-7 flex flex-wrap gap-1.5'>
                      <Chip>Supabase · Postgres</Chip>
                      <Chip>Row Level Security</Chip>
                      <Chip>NextAuth</Chip>
                      <Chip>Server Actions</Chip>
                      <Chip>Resend</Chip>
                    </div>

                    <Block title='Matching, not searching'>
                      <p>
                        A member&rsquo;s selected challenges — and,
                        separately, her industry — are compared against each
                        mentor&rsquo;s tagged expertise and background, and
                        the directory&rsquo;s default sort ranks by that
                        overlap. Industry is a primary match signal, not just
                        a filter: someone in a traditionally male-dominated
                        trade may care more about a mentor who&rsquo;s worked
                        that field than one who&rsquo;s faced the exact same
                        named challenge. Country and language stay as
                        secondary filters.
                      </p>
                    </Block>

                    <Block title='Privacy as a database constraint'>
                      <p>
                        Conversations are private between exactly the two
                        people matched into them. That&rsquo;s enforced with
                        Row Level Security rather than left to the UI to hide
                        — the same reasoning as ff-library&rsquo;s per-user
                        notes: a bug in a query shouldn&rsquo;t be able to
                        leak someone else&rsquo;s conversation.
                      </p>
                    </Block>

                    <Block title='Mock data ahead of real mentors'>
                      <p>
                        The directory currently runs on 40 seeded mentor
                        profiles across 26 countries and 12 industries. The
                        point of shipping it this way was to validate
                        browsing, filtering, and matching end-to-end before
                        recruiting real mentors — the harder, slower problem
                        gets tackled once the product side is proven out.
                      </p>
                    </Block>
                  </div>
                }
              />
            </Section>

            {/* ============ DECISION LOG ============ */}
            <Section id='decision-log'>
              <Reveal>
                <Eyebrow index='04'>Design decisions</Eyebrow>
                <h2 className='mb-4 font-display text-2xl font-bold tracking-[-0.01em] sm:text-3xl'>
                  Choices that shaped the product
                </h2>
                <p className='mb-8 max-w-[58ch] text-mute'>
                  A few calls that pushed back against the default playbook
                  for mentoring and community products.
                </p>
              </Reveal>

              <div className='flex flex-col gap-4'>
                <DecisionEntry
                  title='Match on the situation, not the title'
                  tension='Most mentoring platforms sort by job title or seniority, which flattens very different lived experiences under one label.'
                  choice='A fixed taxonomy of 42 named challenges is one primary match input; industry is the other. Country and language stay as secondary filters.'
                  result='A mentee can lead with the specific problem or with the field itself, whichever actually explains what she needs.'
                />
                <DecisionEntry
                  title='Free, and scoped as first aid'
                  tension='Mentoring products often monetize through paid tiers or membership, and market themselves as an ongoing coaching relationship.'
                  choice='Womentor is free end to end, and explicitly framed as first aid — a short, focused exchange to get unstuck on one thing, not a coaching engagement.'
                  result='Removes the two biggest reasons someone might not ask: cost, and the fear of signing up for more than she wanted.'
                />
                <DecisionEntry
                  title='No public profiles or feed'
                  tension='Community products usually drive engagement with visible activity — profiles, badges, follower counts.'
                  choice='Every conversation stays private to its two participants. There is no feed, no public metrics, no leaderboard.'
                  result='The product optimizes for one hard conversation happening safely, not for time on site.'
                />
                <DecisionEntry
                  title='Passwordless sign-in'
                  tension='A password is another credential to manage, and reused passwords are how a supposedly private account gets linked back to a name elsewhere.'
                  choice='Sign-in is an emailed magic link. No password is stored.'
                  result='Fewer account-recovery dead ends, and one less credential tied to a sensitive account.'
                />
                <DecisionEntry
                  title='Ship the directory before the mentors'
                  tension='A mentoring marketplace only works once both sides exist, but nobody signs up to a directory of zero mentors.'
                  choice='The directory launched seeded with 40 representative mock profiles, so the browsing, filtering, and matching flows could be built and tested end-to-end.'
                  result='The riskier, slower problem — recruiting real mentors — comes next, onto a product that already works.'
                />
              </div>
            </Section>

            {/* ============ RESULTS ============ */}
            <Section id='results'>
              <Reveal>
                <Eyebrow index='05'>Where it stands</Eyebrow>
                <h2 className='mb-4 font-display text-2xl font-bold tracking-[-0.01em] sm:text-3xl'>
                  Deployed, running on mock data
                </h2>
                <p className='mb-8 text-mute'>
                  Womentor is live at{' '}
                  <a
                    href='https://womentor.vercel.app'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-accent transition-colors hover:text-accent-dim'
                  >
                    womentor.vercel.app
                  </a>{' '}
                  and browsable end-to-end — the challenge selector, mentor
                  directory, and matching all work. It&rsquo;s running on
                  seeded mentor profiles while the harder, non-technical work
                  of recruiting real mentors catches up.
                </p>
              </Reveal>

              <p className='mt-2 mb-4 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase'>
                Next
              </p>
              <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
                <NextItem
                  label='Mobile'
                  value='Rework the core flows mobile-first, not just responsive'
                />
                <NextItem
                  label='Mentors'
                  value='Recruit real mentors, retire the seed data'
                />
                <NextItem
                  label='Conversations'
                  value='Messaging polish and read states in the private rooms'
                />
                <NextItem
                  label='Safety'
                  value='Reporting flow through to a real moderation path'
                />
                <NextItem
                  label='Availability'
                  value='Waitlisting when a mentor is not taking new mentees'
                />
              </div>
            </Section>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
