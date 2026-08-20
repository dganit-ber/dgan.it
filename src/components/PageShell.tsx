import type { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className='relative min-h-screen bg-bg text-text'>
      <div className='pointer-events-none fixed inset-0 overflow-hidden'>
        <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-accent/5 blur-[120px]' />
        <div className='absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-accent/5 blur-[120px]' />
        <div className='absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-accent/4 blur-[120px]' />
      </div>

      <div className='grid-bg pointer-events-none fixed inset-0 opacity-100' />

      <div className='relative z-10 flex min-h-screen flex-col'>
        <Navbar />
        <div className='flex-1'>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
