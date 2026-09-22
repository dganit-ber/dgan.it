import Reveal from '@/src/components/Reveal';
import Image, { type StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData;
  alt: string;
  className: string;
  fit?: string;
  unoptimized: boolean;
  priority: boolean;
}

export const Figure = ({
  src,
  alt,
  className = '',
  fit = 'cover',
  unoptimized = false,
  priority = false,
}: Props) => {
  return (
    <Reveal
      className={`relative overflow-hidden rounded-lg border border-line bg-surface ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(min-width: 1024px) 720px, 100vw'
        className={fit === 'contain' ? 'object-contain' : 'object-cover'}
        unoptimized={unoptimized}
        priority={priority}
      />
    </Reveal>
  );
};
