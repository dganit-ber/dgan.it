import Link from 'next/link';
import { iconMap, type IconName } from './icons';
import { site } from '../app/site.config';

export default function Footer() {
  return (
    <footer className='glass sticky bottom-0 z-40 border-t border-border px-6 py-3 text-xl'>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-4'>
        <Link href='/' className='group flex shrink-0 items-center gap-2'>
          <span className='flex h-6 w-6 items-center justify-center rounded-md border border-accent/20 bg-accent/10 font-mono text-xs font-bold text-accent transition-all duration-200 group-hover:bg-accent/20 group-hover:border-accent/40'>
            d
          </span>
          <span className='hidden font-mono text-xs text-muted sm:inline'>
            © {new Date().getFullYear()} {site.firstName} {site.lastName}
          </span>
        </Link>

        <div className='flex items-center gap-4'>
          <Link
            href='/contact'
            className='text-sm font-medium text-accent transition-colors hover:underline'
          >
            Contact
          </Link>
          <div className='flex items-center gap-1.5'>
            {site.socials.map((social) => {
              const Icon = iconMap[social.icon as IconName];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  style={{ backgroundColor: social.color }}
                  className='grid size-6 shrink-0 place-items-center rounded-full text-white transition-transform duration-200 hover:-translate-y-0.5'
                >
                  <Icon className='size-3' />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
