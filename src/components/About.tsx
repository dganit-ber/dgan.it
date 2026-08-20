import Image from 'next/image';
import HobbyShowcase from './HobbyShowcase';
import Paragraphs from './Paragraphs';
import Reveal from './Reveal';
import { site } from '../app/site.config';

export default function About() {
  return (
    <section id='about' className=' mx-auto max-w-3/4 px-6 py-24 items-center'>
      <Reveal>
        <h1 className="gradient-text relative inline-block font-mono font-semibold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:content-[''] hover:after:scale-x-100 text-3xl mb-8">
          About
        </h1>
      </Reveal>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start'>
        <Reveal>
          {/* Placeholder photo — swap the src (and alt) for a real one */}
          <div className='relative mx-auto aspect-square w-full overflow-hidden rounded-2xl border border-line'>
            <Image
              src='https://static.vecteezy.com/system/resources/previews/057/068/323/large_2x/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg'
              alt='Placeholder photo'
              fill
              sizes='(min-width: 768px) 50vw, 100vw'
              className='object-cover'
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={150}>
            <Paragraphs
              text={site.cv.summary}
              className='mt-4 max-w-prose'
              paragraphClassName='text-text-muted'
            />
          </Reveal>

          <Reveal delay={250}>
            <p className='mt-4 max-w-prose text-text-muted'>
              Outside of code I keep my hands busy with a few creative hobbies —
              bookbinding, stained glass, and water marbling. Hover (or tap) a
              craft below for a look at what I&apos;ve made.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <div className='mt-8'>
              <HobbyShowcase />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
