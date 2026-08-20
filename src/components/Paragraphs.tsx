// Splits a blank-line-separated block of text into real <p> elements —
// plain strings collapse blank lines in HTML, so paragraph breaks need
// actual separate tags (and spacing between them) to show up.
export default function Paragraphs({
  text,
  className = '',
  paragraphClassName = '',
}: {
  text: string;
  className?: string;
  paragraphClassName?: string;
}) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i} className={paragraphClassName}>
          {p}
        </p>
      ))}
    </div>
  );
}
