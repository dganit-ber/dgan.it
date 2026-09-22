import React from 'react';

export const Eyebrow = ({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) => {
  return (
    <p className='mb-4 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase'>
      <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-accent' />
      {index} · {children}
    </p>
  );
};
