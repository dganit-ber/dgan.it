/**
 * The womentor wordmark: "wo·men·tor", where the shared "men" belongs to both
 * readings. The animation hands it back and forth — first "women" is lit, then
 * "mentor" — on a slow enough cycle to be noticed once and then ignored.
 *
 * The colours are the product's own, not the site's, which is why they're
 * local custom properties rather than palette tokens.
 */
export const WomentorMark = ({ className = '' }: { className?: string }) => {
  return (
    <span
      aria-label='womentor'
      role='img'
      className={`wm-mark inline-flex whitespace-nowrap lowercase ${className}`}
    >
      <span className='wm-wo'>wo</span>
      <span className='wm-men'>men</span>
      <span className='wm-tor'>tor</span>
      <style>{`
        .wm-mark {
          --wm-cycle: 7s;
          --wm-women: #e0a64a;
          --wm-mentor: #4fb5a5;
          --wm-dim: #a9b3af;
        }
        [data-theme='light'] .wm-mark {
          --wm-women: #b0741a;
          --wm-mentor: #14655d;
          --wm-dim: #4e625e;
        }
        .wm-mark .wm-wo,
        .wm-mark .wm-men { color: var(--wm-women); }
        .wm-mark .wm-tor { color: var(--wm-mentor); }
        .wm-mark .wm-wo { animation: wm-seg-wo var(--wm-cycle) infinite; }
        .wm-mark .wm-men { animation: wm-seg-men var(--wm-cycle) infinite; }
        .wm-mark .wm-tor { animation: wm-seg-tor var(--wm-cycle) infinite; }
        @keyframes wm-seg-wo {
          0%, 34% { color: var(--wm-women); }
          50%, 84% { color: var(--wm-dim); }
          to { color: var(--wm-women); }
        }
        @keyframes wm-seg-men {
          0%, 34% { color: var(--wm-women); }
          50%, 84% { color: var(--wm-mentor); }
          to { color: var(--wm-women); }
        }
        @keyframes wm-seg-tor {
          0%, 34% { color: var(--wm-dim); }
          50%, 84% { color: var(--wm-mentor); }
          to { color: var(--wm-dim); }
        }
        @media (prefers-reduced-motion: reduce) {
          .wm-mark .wm-wo,
          .wm-mark .wm-men,
          .wm-mark .wm-tor { animation: none; }
        }
      `}</style>
    </span>
  );
};
