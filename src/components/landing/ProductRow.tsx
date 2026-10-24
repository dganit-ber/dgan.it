import { products } from '../../app/site.config';
import ProductCard from './ProductCard';

/**
 * The three products, above the fold.
 *
 * Desktop: a flex row, featured card wider, all three visible.
 *
 * Mobile: a snapping horizontal rail. Stacking would push everything but the
 * first card below the fold, and the whole point of the landing page is that
 * the work is the first thing you see. A rail shows one card at full size
 * with the next peeking, which reads as "there is more" for free.
 *
 * Height: on mobile the page locks the landing section to the viewport, so
 * this section is `flex-1 min-h-0` and the rail inside it is too — `min-h-0`
 * on both, because a flex item won't shrink below its content without it.
 * That's what leaves the swipe hint on screen at any device height.
 *
 * Order lives in `products`, not here.
 */
export default function ProductRow() {
  return (
    <section
      id='work'
      aria-label='Products'
      className='mx-auto flex w-full max-w-6xl min-h-0 flex-1 flex-col px-6 lg:block lg:flex-none'
    >
      {/* `-mx-6` + `px-6` lets the rail bleed to the screen edges while the
          first card still starts flush with the headline above it, and the
          last card gets padding at the end of the scroll. Keep both. */}
      {/* `scroll-pl-6` is load-bearing: with `snap-mandatory`, snap-start
          aligns to the padding box, so without it the browser scrolls past
          `px-6` on load and the first card sits flush against the screen
          edge. The trailing `after:` spacer is the same story at the other
          end — scroll containers drop their end padding. */}
      <div className='-mx-6 flex min-h-0 flex-1 snap-x snap-mandatory scroll-pl-6 gap-3 overflow-x-auto overflow-y-hidden px-6 [scrollbar-width:none] after:w-px after:shrink-0 lg:mx-0 lg:flex-none lg:snap-none lg:scroll-pl-0 lg:items-stretch lg:gap-4 lg:overflow-visible lg:px-0 lg:after:hidden [&::-webkit-scrollbar]:hidden'>
        {products.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>

      {/* Rail affordance. `shrink-0` so it keeps its height when the rail
          above is being squeezed — it is the thing that must stay visible. */}
      <div
        aria-hidden='true'
        className='mt-3.5 flex shrink-0 items-center gap-2 lg:hidden'
      >
        <span className='h-1 w-5.5 rounded-full bg-accent' />
        <span className='h-1 w-2 rounded-full bg-line' />
        <span className='h-1 w-2 rounded-full bg-line' />
        <span className='ml-1.5 font-mono text-[11px] text-mute'>
          Swipe for all three
        </span>
      </div>
    </section>
  );
}
