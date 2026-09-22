'use client';

import { useRef } from 'react';
import Reveal from '@/src/components/Reveal';

export const Video = ({
  src,
  className = '',
}: {
  src: { mp4: string; webm: string; poster?: string };
  className?: string;
}) => {
  const ref = useRef<HTMLVideoElement>(null);

  // `loop` handles this on its own in every browser that honours it; this is
  // the fallback for the ones that fire `ended` and stop on the last frame.
  const restart = () => {
    const video = ref.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {});
  };

  return (
    <Reveal
      className={`relative overflow-hidden rounded-lg border border-line bg-surface ${className}`}
    >
      <video
        ref={ref}
        className='absolute inset-0 h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        preload='metadata'
        poster={src.poster}
        onEnded={restart}
      >
        <source src={src.webm} type='video/webm' />
        <source src={src.mp4} type='video/mp4' />
      </video>
    </Reveal>
  );
};
