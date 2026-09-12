import CaseStudyCard from './CaseStudyCard';
import Reveal from './Reveal';
import { site } from '../app/site.config';

export default function Projects() {
  return (
    <section id='projects' className='mx-auto max-w-6xl px-6 py-24'>
      <Reveal>
        <span className='mb-3 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.3em] text-accent uppercase'>
          <span className='h-1.5 w-1.5 animate-glow-pulse rounded-full bg-accent' />
          Projects
        </span>
        <h2 className="gradient-text relative inline-block font-mono text-2xl font-semibold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:content-[''] hover:after:scale-x-100">
          Projects
        </h2>
      </Reveal>

      <div className='mt-10 flex flex-col gap-4'>
        {site.caseStudies.map((study, i) => (
          <Reveal key={study.title} delay={150 + i * 100}>
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
