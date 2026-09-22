import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '../../site.config';
import { Block } from '@/src/components/case-study/Block';
import { Bullets } from '@/src/components/case-study/Bullets';
import { CaseStudy } from '@/src/components/case-study/CaseStudy';
import { Chip } from '@/src/components/case-study/Chip';
import MediaPlaceholder from '@/src/components/MediaPlaceholder';

// No screenshots yet, so every slot renders your own MediaPlaceholder and the
// page builds with no image files at all. To drop a real one in: add the file
// under ./assets/, import Figure, and swap that <MediaPlaceholder> for
//
//   <Figure className='mt-11 aspect-2/1' src={assetOne} alt='…'
//           priority fit={''} unoptimized={false} />
//
// keeping the same aspect class. Same for the demo recording at the bottom:
// <Video className='aspect-video' src={demoVideo} /> once the mp4/webm are in
// public/getcurly/.

export const metadata: Metadata = {
  title: `Get Curly — ${site.firstName} ${site.lastName}`,
  description:
    'Case study: photograph a shampoo bottle and find out whether it fits the Curly Girl method — OCR, an ingredient matcher that lives in Postgres, and no account.',
};

const code =
  'rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-dim';

export default function GetCurlyCaseStudy() {
  return (
    <CaseStudy
      breadcrumb='Get Curly'
      title='A verdict before she puts the bottle down'
      note={
        <>
          This one is six years old. Get Curly started as a Spiced Academy
          project in 2020 — Webpack, Express, Redux, a React 16 alpha — and it
          has been deployed ever since. In 2026 I rebuilt it: same idea, a new
          stack, and every product decision taken again by someone who has since
          shipped and supported software for a living.
        </>
      }
      intro={
        <>
          Get Curly answers one question: does this bottle fit the Curly Girl
          method? Point the camera at the barcode and the answer comes back in
          two seconds; photograph the ingredients list and it is read with OCR,
          matched against a dictionary of sulfates, silicones, drying alcohols,
          mineral oils and waxes, and returned as{' '}
          <strong className='font-semibold text-ink'>Clear</strong> or{' '}
          <strong className='font-semibold text-ink'>Skip</strong>. No account,
          no sign-up, and the photo is never stored.
        </>
      }
      meta={[
        { label: 'Role', value: <>Sole designer &amp; developer</> },
        { label: 'Timeline', value: '2020 · rebuilt 2026' },
        { label: 'Status', value: 'Live' },
        { label: 'Platforms', value: 'Web, mobile-first (camera on the phone)' },
      ]}
      links={[
        {
          label: 'Visit the site',
          href: 'https://getcurly.ink',
          primary: true,
          external: true,
        },
        {
          label: 'GitHub',
          href: 'https://github.com/dganit-ber',
          external: true,
        },
      ]}
      media={
        <MediaPlaceholder
          className='mt-11 aspect-2/1'
          tag='01 · Hero'
          what='The verdict screen on a phone — the coil, Clear or Skip, one sentence.'
          spec='2:1 · assets/01.png'
        />
      }
      problem={{
        title: 'The user is standing in a shop, holding a bottle',
        paragraphs: [
          <>
            The Curly Girl method rules out five families of ingredient, and
            they are spelled like{' '}
            <em className='text-mute italic'>
              behentrimonium methosulfate
            </em>{' '}
            — which, despite the name, is fine. Applying that in a drugstore
            aisle means reading forty ingredients in six-point type and
            remembering which suffixes matter. People do it with a screenshot of
            a list saved in their photo roll.
          </>,
          <>
            So the constraint wasn&rsquo;t accuracy in the abstract, it was{' '}
            <strong className='font-semibold text-ink'>
              an answer in one action
            </strong>
            . Nothing stands between the camera and the verdict: no login, no
            form, no &ldquo;which product is this?&rdquo;. Everything else the
            app can do — correcting the list, naming the bottle, adding it to
            the library — is an optional second tap, taken after the question
            has already been answered.
          </>,
        ],
        bullets: [
          <>
            <strong className='font-semibold text-ink'>
              Two seconds, or ninety.
            </strong>{' '}
            A barcode says <em className='text-mute italic'>which</em> product;
            only the label says what is in it today.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              Every answer carries its age.
            </strong>{' '}
            Manufacturers reformulate and keep the barcode, so a stored list is
            shown with the date someone last checked it.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              Say what we don&rsquo;t know.
            </strong>{' '}
            A crowdsourced list nobody has verified gets no verdict at all —
            a wrong <em className='text-mute italic'>Clear</em> is the one
            failure that really costs.
          </>,
          <>
            <strong className='font-semibold text-ink'>Anonymous.</strong> No
            account to scan, correct, or contribute. IPs are hashed before they
            reach the database.
          </>,
        ],
      }}
      build={{
        title: 'Two views of the same product',
        intro: (
          <>
            The same stack as{' '}
            <Link
              href='/projects/ff-library'
              className='text-accent transition-colors hover:text-accent-dim'
            >
              the ff-library
            </Link>
            , pointed at a problem where the hard part is the data, not the
            interface. Switch between what she sees on the phone and what runs
            underneath it.
          </>
        ),
        frontend: (
          <div>
            <div className='mb-7 flex flex-wrap gap-1.5'>
              <Chip>Next.js 16 · App Router</Chip>
              <Chip>React 19</Chip>
              <Chip>TypeScript</Chip>
              <Chip>Tailwind CSS v4</Chip>
              <Chip>Lucide</Chip>
              <Chip>zxing-wasm</Chip>
              <Chip>No component library</Chip>
            </div>

            <Block title='One rule, enforced everywhere'>
              <p>
                Scan, then answer. The rules that shape the product are written
                down as fourteen numbered lines in the repo&rsquo;s{' '}
                <code className={code}>CLAUDE.md</code>, and the ones about
                verdicts, uncertainty and money are the reason the app looks
                the way it does. A rule that only lives in someone&rsquo;s head
                gets relitigated every time a screen is built.
              </p>
            </Block>

            <Block title='Design system'>
              <p>
                A plum-charcoal ink on a pale mauve ground, one fuchsia accent,
                Gabarito for display and Hanken Grotesk for text, both
                self-hosted. Verdict colour is deliberately separate from the
                accent — <em className='text-mute italic'>clear</em> is a deep
                teal, <em className='text-mute italic'>skip</em> a slate-indigo
                rather than a red, because &ldquo;not for your curls&rdquo; is
                not an error — and it is never the only signal: always a colour,
                an icon and a word. Every colour is defined in the base{' '}
                <code className={code}>:root</code> block first, so nothing can
                exist in one theme and vanish in the other.
              </p>
            </Block>

            <MediaPlaceholder
              className='mb-8 aspect-16/7'
              tag='02 · Design system'
              what='The colour tokens with their names, the two typefaces, and the clear / skip / caution pills in both themes.'
              spec='16:7 · assets/02.jpg'
            />

            <Block title='Two cameras, on purpose'>
              <p>
                Barcodes are read from a live stream — she points the phone and
                the answer arrives, with no shutter button in between. The label
                path keeps a plain file input instead, because the phone&rsquo;s
                own camera app focuses on six-point print far better than a
                video preview does. The reticle is short and wide for a barcode,
                tall for a paragraph, and the stream is torn down whenever the
                tab goes to the background.
              </p>
            </Block>

            <Block title='What the wait says'>
              <p>
                OCR takes a few seconds, so the wait is narrated with the real
                steps and a live count of ingredients found — and it shows the{' '}
                <em className='text-mute italic'>cleaned</em> list forming,
                never the raw OCR string with its typos in it. Three failures
                are told apart and worded differently: a partial read, no text
                at all, and Vision being down. Only the second one gets a
                framing hint, because that is the only place a hint is
                actionable.
              </p>
            </Block>

            <div className='mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <MediaPlaceholder
                className='aspect-9/16'
                tag='03 · Scan'
                what='The viewfinder with the tall reticle, lined up on an ingredients paragraph.'
                spec='9:16 · assets/03.png'
              />
              <MediaPlaceholder
                className='aspect-9/16'
                tag='04 · The list'
                what='“What we counted” mid-edit — numbered in label order, one row open.'
                spec='9:16 · assets/04.png'
              />
            </div>

            <Block title='Never surfacing doubt per row'>
              <p>
                No confidence badges, no warning icons, no wavy underlines. How
                sure the matcher is about one word is a database concern, and
                dressing the list in yellow triangles would make a correct
                verdict look unreliable. One sentence covers all of it:{' '}
                <em className='text-mute italic'>
                  computers misread small print — change anything that&rsquo;s
                  wrong
                </em>
                . The single exception is a word we couldn&rsquo;t read whose
                two candidates disagree about the verdict; then, and only then,
                she is asked to pick between them.
              </p>
            </Block>

            <Block title='The list is editable, and position means something'>
              <p>
                On the optional list screen she sees{' '}
                <em className='text-mute italic'>resolved</em> names — if OCR
                read &ldquo;Cetearyl Alcohoi&rdquo; and the matcher landed on
                cetearyl alcohol, that is what shows. Rows can be corrected,
                deleted, or inserted, and an insert has to say{' '}
                <em className='text-mute italic'>where</em>: label order is
                roughly concentration, so a sulfate the photo missed is a
                different bottle at #2 than at #22. Appending everything would
                have broken the one thing that screen is claiming to show.
              </p>
            </Block>

            <Block title='When the camera can&rsquo;t do it'>
              <p>
                A read that catches fewer than ten ingredients gets no verdict
                and offers to let her type the list instead. That path publishes
                from five, not ten — she is reading the bottle rather than a
                camera guessing at it — and from there it is the photo path
                exactly: same matcher, same verdict function, same page at the
                end.
              </p>
            </Block>
          </div>
        ),
        backend: (
          <div>
            <div className='mb-7 flex flex-wrap gap-1.5'>
              <Chip>Supabase · Postgres</Chip>
              <Chip>plpgsql</Chip>
              <Chip>Google Cloud Vision</Chip>
              <Chip>Route handlers</Chip>
              <Chip>Vitest</Chip>
              <Chip>Vercel</Chip>
            </div>

            <MediaPlaceholder
              className='mb-8 aspect-16/7'
              tag='06 · Architecture'
              what='Phone downscales and posts the photo → route handler hashes the IP and rate-limits → Vision → Postgres matches and computes the verdict. Barcodes are decoded on the device and never leave it.'
              spec='16:7 · assets/06.svg · fit=contain, unoptimized'
            />

            <Block title='The matcher lives in the database'>
              <p className='mb-4'>
                Normalisation and lookup are Postgres functions —{' '}
                <code className={code}>normalize_ingredient</code> and{' '}
                <code className={code}>match_ingredient</code> — rather than
                TypeScript. The app, the Open Beauty Facts backfill script and
                any query typed by hand then apply exactly the same rules, which
                is the only way the numbers agree. What is left in the app is
                the one thing that genuinely isn&rsquo;t a matching problem:
                deciding where one ingredient ends and the next begins.
              </p>
              <Bullets
                items={[
                  <>
                    <code className={code}>scans</code> — one row per read,
                    append-only, with the verdict it produced
                  </>,
                  <>
                    <code className={code}>scan_ingredients</code> — the raw
                    token, the resolved name, the position, how it matched
                  </>,
                  <>
                    <code className={code}>ingredients</code> — the judgement
                    dictionary: the flagged groups and their aliases
                  </>,
                  <>
                    <code className={code}>products</code> — barcode, brand,
                    name, type, and the stored list with the date it was last
                    confirmed
                  </>,
                ]}
              />
            </Block>

            <Block title='Four ways to match a misread word'>
              <p>
                Exact match first, then a recorded alias, then the two cheap
                repairs that cover most of what OCR does to a label: the same
                letters with the spacing moved (
                <code className={code}>DIMETH ICONE</code>), and the glyphs a
                camera confuses — l/i, 0/o, 1/l, 5/s (
                <code className={code}>DIMETHIC0NE</code>). Trigram similarity
                is the last resort, at a threshold of 0.62. Each tier scores
                below the one above it, so a real alias always wins over a
                repaired guess.
              </p>
            </Block>

            <Block title='The verdict is computed in one place'>
              <p>
                <code className={code}>compute_verdict</code> in Postgres
                decides Clear or Skip, and nothing in the app is allowed a
                second opinion. There is one display-only mirror of the rule in
                TypeScript — it labels the two candidates on the pick card with
                what each would mean — and it is commented as a mirror so the
                next person knows it has to move when the SQL does.
              </p>
            </Block>

            <Block title='Scans are append-only'>
              <p>
                An edit doesn&rsquo;t update a scan, it forks one. The pair that
                leaves behind — what the machine read, what a person corrected —
                is the training data for the alias dictionary, and it is how a
                misread that happens on a thousand bottles gets fixed once. She
                never sees any of that; she sees her corrected list and a
                recomputed verdict.
              </p>
            </Block>

            <Block title='Knowing what we don&rsquo;t know'>
              <p>
                The barcode lookup works on day one because tens of thousands
                of rows were imported from Open Beauty Facts — crowdsourced,
                ODbL, and
                only as current as whenever somebody last looked. Every one is
                written as a seed row, and{' '}
                <code className={code}>product_confidence()</code> reports it as{' '}
                <code className={code}>seed_only</code>, which means no verdict
                pill at all: we have a list, nobody has checked it, read the
                label. Confidence is asked for before anything renders, and a
                failed lookup counts as no.
              </p>
            </Block>

            <MediaPlaceholder
              className='mb-8 aspect-2/1'
              tag='05 · Barcode'
              what='A product page: the verdict, the reformulation caution, and “Ingredients last checked: <date>”.'
              spec='2:1 · assets/05.png'
            />

            <Block title='Recognising a bottle by its ingredients'>
              <p>
                After a label scan the app can ask{' '}
                <em className='text-mute italic'>
                  36 of 37 ingredients identical — is this Smooth Shine
                  Shampoo?
                </em>{' '}
                Each product&rsquo;s list is stored pre-normalised and kept in
                step by a trigger, so the comparison is one pass rather than
                60,000 normalisations per scan. Scoring is symmetric — matched
                over the longer of the two lists — so a product doesn&rsquo;t
                win by having a longer list, and a reformulated bottle drops out
                rather than being named wrongly.
              </p>
            </Block>

            <Block title='Costs, limits, and no accounts'>
              <p>
                Barcodes are decoded on the device, so the cheap path is also
                the free one; Vision is only called when there is a label to
                read, and the photo is downscaled to 2048px on the phone first,
                which is most of the wait on a mobile connection. Writes hash
                the IP with a salt before anything is stored, rate-limit against
                that hash, and the hard ceiling is a daily quota cap set on the
                Vision API itself — the in-process limiter is a speed bump, and
                is commented as one.
              </p>
            </Block>
          </div>
        ),
      }}
      decisions={{
        eyebrow: 'Decision log',
        title: 'Five bugs that changed how the app is written',
        intro: (
          <>
            Every one of these was a wrong answer delivered confidently, which
            is the only kind of bug this product really has. They are in the
            repository as migration comments, because the reasoning is worth
            more than the diff.
          </>
        ),
        entries: [
          {
            title: 'A silicone the app simply could not see',
            cause: (
              <>
                OCR renders a capital O as a zero and an l as an i depending on
                the typeface and the light. The dictionary had no entry for{' '}
                <em className='text-mute italic'>DIMETHIC0NE</em>, so the
                ingredient went unmatched — and an unmatched silicone is a false
                Clear on a bottle that should have been a Skip.
              </>
            ),
            fix: 'A squash function that folds the confusable glyphs together before comparing, rather than one alias row per word per substitution.',
            result:
              'Measured against the real data before shipping: no collisions among the dictionary entries, no false positives across 3,036 label tokens from actual scans, and three flagged ingredients that had been invisible started matching.',
          },
          {
            title: 'Line breaks were inventing ingredients',
            cause:
              'The splitter treated a newline as a separator. On a narrow label OCR breaks names mid-word, so one ingredient arrived as two — neither of which exists, and neither of which matches anything.',
            fix: 'In an INCI list the comma is the separator and a newline is only where the column ran out. Lines rejoin — with nothing after a hyphen, with a space otherwise — and the ingredients paragraph is located by its header first, including the repeats a multilingual bottle prints.',
            result:
              'The counted list stops filling with packaging text and half-words, and positions stop being inflated — which matters, because position is roughly concentration.',
          },
          {
            title: 'A moved space hid an ingredient',
            cause: (
              <>
                Normalisation keeps spaces, so{' '}
                <em className='text-mute italic'>DIMETH ICONE</em> never equals{' '}
                <em className='text-mute italic'>dimethicone</em>. Fuzzy
                matching only just caught it at 0.67 against a 0.62 threshold; a
                slightly longer name would have dropped under and disappeared.
              </>
            ),
            fix: 'Compare the letters with the spacing removed as well, scored just below a real alias and above anything fuzzy.',
            result:
              'The one thing the 2020 JavaScript matcher did better than the rewrite — it stripped every non-alphanumeric before comparing — is back, this time as a scored tier rather than a blunt instrument.',
          },
          {
            title: 'Naming a bottle stored a one-ingredient list',
            cause: (
              <>
                The function that promotes a scan into a product built the
                stored list with <code className={code}>string_agg</code> over
                resolved names. <code className={code}>string_agg</code> skips
                nulls, and the resolved name is null for every ingredient the
                dictionary doesn&rsquo;t know — so a 34-ingredient bottle would
                have been stored with one, silently, and a scan where nothing
                matched failed outright.
              </>
            ),
            fix: 'Fall back to what the label said — the same coalesce the list screen and the fingerprint comparison already used.',
            result:
              'An ingredient we don&rsquo;t recognise is still an ingredient. Caught before anything had been promoted, so there was no data to repair.',
          },
          {
            title: 'The old app asked questions before it answered',
            cause:
              'The 2020 version gated the verdict behind confirmation steps and decorated individual rows with how unsure it was — which reads as hedging, and is also much harder to use one-handed in a shop.',
            fix: 'The rewrite states the fourteen rules first and builds to them: verdict in one action, no per-row confidence, one interruption only where the answer itself would change.',
            result:
              'The flows got shorter and the copy got more honest at the same time — the uncertainty moved out of the row badges and into one sentence that tells her what to do about it.',
          },
        ],
      }}
      results={{
        title: 'Live, rewritten, still growing',
        intro: (
          <>
            Get Curly is live at{' '}
            <a
              href='https://getcurly.ink'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent transition-colors hover:text-accent-dim'
            >
              getcurly.ink
            </a>
            . Both flows are shipped end to end — barcode to product page, photo
            to verdict, correcting the list, naming an unknown bottle, and
            adding a barcode we&rsquo;ve never seen. The counts on the home page
            are queried live rather than hardcoded, including the gap between
            products we hold and products a real person has confirmed, because
            that gap is the honest part.
          </>
        ),
        media: (
          <MediaPlaceholder
            className='aspect-video'
            tag='07 · Demo'
            what='Screen recording of one scan end to end: camera, the narrated wait, the verdict.'
            spec='16:9 · public/getcurly/demo.mp4 + .webm + poster'
          />
        ),
        next: [
          { label: 'Library', value: 'Browse and search the confirmed products' },
          { label: 'Reading', value: 'Articles on the method and on ingredients' },
          {
            label: 'Revenue',
            value: 'Alternatives ranked by fit and price, never by commission',
          },
          {
            label: 'Matching',
            value: 'Suggestions rebuilt from every list we hold',
          },
          {
            label: 'Clarity',
            value: 'Split the list into what fails the method and everything else',
          },
          {
            label: 'Edge cases',
            value: 'What to say when the bottle isn’t a hair product at all',
          },
        ],
      }}
    />
  );
}
