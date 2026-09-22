import Reveal from '@/src/components/Reveal';

export const NextItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <Reveal className='border-t border-line pt-3'>
      <span className='mb-1 block font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
        {label}
      </span>
      <span className='text-sm'>{value}</span>
    </Reveal>
  );
};
