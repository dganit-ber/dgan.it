import { Block } from './Block';
import { Bullets } from './Bullets';
import { Chip } from './Chip';
import { DecisionEntry } from './DecisionEntry';
import { NextItem } from './NextItem';
import type { SectionBody as Body } from './composed.types';

/** Renders one body block of a composed section. */
export function SectionBody({ body }: { body: Body }) {
  switch (body.kind) {
    case 'prose':
      return (
        <>
          {body.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === body.paragraphs.length - 1 ? 'mb-6 text-mute' : 'mb-4 text-mute'
              }
            >
              {paragraph}
            </p>
          ))}
        </>
      );

    case 'bullets':
      return <Bullets items={body.items} />;

    case 'blocks':
      return (
        <div>
          {body.chips && body.chips.length > 0 && (
            <div className='mb-7 flex flex-wrap gap-1.5'>
              {body.chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
          )}
          {body.blocks.map((block) => (
            <Block key={block.title} title={block.title}>
              {block.body}
            </Block>
          ))}
        </div>
      );

    case 'decisions':
      return (
        <div className='flex flex-col gap-4'>
          {body.entries.map((entry) => (
            <DecisionEntry
              key={entry.title}
              title={entry.title}
              cause={entry.cause}
              fix={entry.fix}
              result={entry.result}
              labels={body.labels}
            />
          ))}
        </div>
      );

    case 'next':
      return (
        <>
          <p className='mt-2 mb-4 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase'>
            Next
          </p>
          <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
            {body.items.map((item) => (
              <NextItem key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </>
      );
  }
}
