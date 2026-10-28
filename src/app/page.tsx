import CompanyMarquee from '../components/CompanyMarquee';
import CvPreview from '../components/CvPreview';
import { Hero } from '../components/landing/Hero';
import HeroActions from '../components/landing/HeroActions';
import ProductList from '../components/landing/ProductList';
import PageShell from '../components/PageShell';

export default function Home() {
  return (
    <PageShell>
      <main>
        {/*
          The landing screen: name, three products, one action, the employer
          strip. Everything else is below the fold.

          Desktop is `min-h` rather than a hard height so a short window
          scrolls instead of clipping, with the first three blocks optically
          centred and the strip pinned to the bottom (`mt-auto` on it, inside
          a flex column).

          Mobile stays `min-h` too — the strip falling just below the fold on
          a small phone is a fair trade for never clipping the tagline. The
          earlier hard-locked `h-[100svh]` version cost a visible craft note
          on short screens and still overflowed when a line wrapped.
        */}
        <section className='flex min-h-[100svh] flex-col gap-10 pt-24 pb-6 lg:gap-11 lg:pt-28 lg:pb-8'>
          <Hero />
          <ProductList />
          <HeroActions />
          <CompanyMarquee
            variant='strip'
            kind='employer'
            /* Employers only — the three products are listed directly above,
               so including them here would repeat them on one screen. */
          />
        </section>

        <CvPreview />
      </main>
    </PageShell>
  );
}
