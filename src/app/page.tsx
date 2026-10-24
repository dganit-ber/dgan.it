import CompanyMarquee from '../components/CompanyMarquee';
import CvPreview from '../components/CvPreview';
import { Hero } from '../components/landing/Hero';
import HeroAside from '../components/landing/HeroAside';
import ProductRow from '../components/landing/ProductRow';
import PageShell from '../components/PageShell';

export default function Home() {
  return (
    <PageShell>
      <main>
        {/*
          The landing screen.

          On mobile this is a hard `h-[100svh]` box so the swipe hint is on
          screen at any height. Three things make that safe:

          - `overflow-hidden`, so if anything does outgrow the box it clips
            instead of bleeding over the sections below it;
          - `shrink-0` on the hero, so only the product rail gives up height;
          - `pt-24`, which clears the fixed navbar (~72px) with room to spare.

          On desktop it relaxes back to `min-h` and grows with its content.
        */}
        <section className='flex h-[100svh] flex-col gap-5 overflow-hidden pt-24 pb-5 lg:h-auto lg:min-h-[100svh] lg:justify-center lg:gap-10 lg:overflow-visible lg:pt-32 lg:pb-12'>
          <Hero />
          <ProductRow />
        </section>

        {/*
          Below the fold on mobile. This sits OUTSIDE the locked section on
          purpose — inside it, the lede and buttons ate the height the product
          cards needed. On desktop it's hidden here and rendered inside `Hero`
          instead, beside the headline.
        */}
        <HeroAside className='mx-auto w-full max-w-6xl px-6 pt-10 pb-4 lg:hidden' />

        <CompanyMarquee />
        <CvPreview />
      </main>
    </PageShell>
  );
}
