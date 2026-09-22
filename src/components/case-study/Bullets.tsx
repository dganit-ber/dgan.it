import React from 'react';

export const Bullets = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <ul className='flex flex-col gap-2.5'>
      {items.map((item, i) => (
        <li key={i} className='flex gap-3'>
          <span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-accent' />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
