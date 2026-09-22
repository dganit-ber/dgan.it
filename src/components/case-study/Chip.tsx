import React from 'react';

export const Chip = ({ children }: React.PropsWithChildren) => {
  return (
    <span className='rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-mute'>
      {children}
    </span>
  );
};
