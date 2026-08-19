import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <span className="mb-3 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.3em] text-accent uppercase">
          <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-accent" />
          04 — Contact
        </span>
        <h2 className="gradient-text relative inline-block font-mono text-2xl font-semibold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:content-[''] hover:after:scale-x-100">
          Contact
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <p className="mt-4 max-w-prose text-text-muted">Placeholder content — to be written.</p>
      </Reveal>
    </section>
  );
}
