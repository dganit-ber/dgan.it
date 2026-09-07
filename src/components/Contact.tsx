'use client';

import { useActionState } from 'react';
import { sendContactMessage, type ContactFormState } from '../app/actions/contact';
import Reveal from './Reveal';

const initialState: ContactFormState = { status: 'idle' };

const inputClass =
  'w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-mute transition-colors focus:border-accent focus:outline-none';

const labelClass =
  'mb-2 block font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase';

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  return (
    <section id='contact' className='mx-auto max-w-6xl px-6 py-24'>
      <Reveal>
        <span className='mb-3 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.3em] text-accent uppercase'>
          <span className='h-1.5 w-1.5 animate-glow-pulse rounded-full bg-accent' />
          Contact
        </span>
        <h2 className="gradient-text relative inline-block font-mono text-2xl font-semibold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:content-[''] hover:after:scale-x-100">
          Contact
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <p className='mt-4 max-w-prose text-text-muted'>
          Have a project in mind or just want to say hi? Send me a message.
        </p>
      </Reveal>

      <Reveal delay={250}>
        <form action={formAction} className='mt-8 flex max-w-lg flex-col gap-5'>
          <div>
            <label htmlFor='name' className={labelClass}>
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              autoComplete='name'
              placeholder='Your name'
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor='email' className={labelClass}>
              Email <span className='text-accent'>*</span>
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              placeholder='you@example.com'
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor='message' className={labelClass}>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={5}
              placeholder="What's on your mind?"
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className='flex items-center gap-4'>
            <button
              type='submit'
              disabled={pending}
              className='inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_var(--color-accent)] disabled:pointer-events-none disabled:opacity-60'
            >
              {pending ? 'Sending…' : 'Send message'}
            </button>

            {state.status !== 'idle' && state.message && (
              <p
                role='status'
                className={
                  state.status === 'success' ? 'text-sm text-accent' : 'text-sm text-red-500'
                }
              >
                {state.message}
              </p>
            )}
          </div>
        </form>
      </Reveal>
    </section>
  );
}
