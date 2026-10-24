import type { ProductPanel as Panel } from '../../app/site.config';

/* Each product gets a different panel, on purpose: the whole point of the
   landing row is that these three products are not the same kind of thing, so
   they shouldn't be argued for with the same picture. Keep them visually
   distinct if you add a fourth. */

function AdminPanel({ panel }: { panel: Extract<Panel, { kind: 'admin' }> }) {
  return (
    <div className='shrink-0 rounded-xl border border-line bg-bg p-3 sm:p-3.5'>
      <p className='mb-2.5 flex items-center justify-between font-mono text-[10px] tracking-[0.08em] text-mute uppercase'>
        <span>{panel.label}</span>
        <span className='text-ok'>{panel.note}</span>
      </p>
      <div className='grid grid-cols-3 gap-2'>
        {panel.tiles.map((tile) => (
          <div key={tile.label} className='rounded-lg bg-surface-2 p-2.5'>
            <span
              className={`mb-2 block h-1.5 rounded-full ${
                tile.accent ? 'bg-accent' : 'bg-line'
              }`}
              style={{ width: `${Math.round(tile.fill * 100)}%` }}
            />
            <span className='block font-mono text-[11px] text-mute'>
              {tile.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChangelogPanel({
  panel,
}: {
  panel: Extract<Panel, { kind: 'changelog' }>;
}) {
  return (
    <div className='min-h-0 shrink'>
      <p className='mb-2.5 font-mono text-[10px] tracking-[0.08em] text-mute uppercase sm:mb-3'>
        {panel.label}
      </p>
      <ul className='flex flex-col gap-1.5 sm:gap-2'>
        {panel.entries.map((entry) => (
          <li
            key={entry.text}
            className='flex gap-2.5 text-[13px] leading-snug text-text-muted sm:text-sm'
          >
            {/* The glyph is decorative — the sentence already says what
                happened, so screen readers skip the +/−. */}
            <span
              aria-hidden='true'
              className={`font-mono ${
                entry.sign === 'removed' ? 'text-ok' : 'text-accent'
              }`}
            >
              {entry.sign === 'removed' ? '−' : '+'}
            </span>
            <span>{entry.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CoveragePanel({
  panel,
}: {
  panel: Extract<Panel, { kind: 'coverage' }>;
}) {
  return (
    <div className='shrink-0 rounded-xl bg-bg p-2.5 sm:p-3'>
      {/* An abstract stand-in for the Bezirk map, not the map itself — the
          real one lives in the case study. */}
      <div aria-hidden='true' className='mb-2.5 grid grid-cols-6 gap-1.5'>
        {Array.from({ length: panel.cells }, (_, i) => (
          <span
            key={i}
            className={`aspect-square rounded ${
              i === panel.activeCell ? 'bg-accent' : 'bg-line'
            }`}
          />
        ))}
      </div>
      <div className='flex flex-wrap gap-1.5'>
        {panel.chips.map((chip) => (
          <span
            key={chip}
            className='rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-text-muted'
          >
            {chip}
          </span>
        ))}
        <span className='rounded-full border border-border-subtle px-2.5 py-1 font-mono text-[10px] text-mute'>
          {panel.moreLabel}
        </span>
      </div>
    </div>
  );
}

export default function ProductPanel({ panel }: { panel: Panel }) {
  switch (panel.kind) {
    case 'admin':
      return <AdminPanel panel={panel} />;
    case 'changelog':
      return <ChangelogPanel panel={panel} />;
    case 'coverage':
      return <CoveragePanel panel={panel} />;
  }
}
