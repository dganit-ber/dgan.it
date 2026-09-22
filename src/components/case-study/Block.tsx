import Reveal from '@/src/components/Reveal';
import React from 'react';

export const Block = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Reveal className='mb-8 border-l-2 border-line pl-5 last:mb-0'>
      <h3 className='mb-1.5 font-display text-base font-semibold'>{title}</h3>
      <div className='text-mute'>{children}</div>
    </Reveal>
  );
};
