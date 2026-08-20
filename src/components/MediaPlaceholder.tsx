import Reveal from './Reveal';

export default function MediaPlaceholder({
  tag,
  what,
  spec,
  className = '',
}: {
  tag: string;
  what: string;
  spec: string;
  className?: string;
}) {
  return (
    <Reveal
      className={`flex flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-accent/40 bg-accent/5 p-6 text-center ${className}`}
    >
      <span className='inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.14em] text-accent uppercase'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-3'
        >
          <circle cx='12' cy='12' r='9' />
          <path d='M12 7v5l3.5 2' />
        </svg>
        Coming soon
      </span>
      <span className='mt-1 font-mono text-[10px] font-medium tracking-[0.2em] text-accent uppercase'>
        {tag}
      </span>
      <span className='max-w-[46ch] text-sm text-ink'>{what}</span>
      <span className='font-mono text-[11px] text-mute'>{spec}</span>
    </Reveal>
  );
}
