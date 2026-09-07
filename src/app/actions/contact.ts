'use server';

import { Resend } from 'resend';
import { site } from '../site.config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!email || !EMAIL_RE.test(email)) {
    return { status: 'error', message: 'Enter a valid email address.' };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not set');
    return {
      status: 'error',
      message:
        'Something went wrong on our end — try emailing directly instead.',
    };
  }

  const resend = new Resend(resendApiKey);
  const { error } = await resend.emails.send({
    from: `${site.url} contact form <${site.email}>`,
    to: site.email,
    replyTo: email || undefined,
    subject: `New message through ${name || 'website contact form'}`,
    text: [
      `Name: ${name || '(not provided)'}`,
      `Email: ${email}`,
      '',
      message || '(no message)',
    ].join('\n'),
  });

  if (error) {
    console.error('Resend error:', error);
    return {
      status: 'error',
      message:
        'Something went wrong on our end — try emailing directly instead.',
    };
  }

  return { status: 'success', message: "Thanks — I'll get back to you soon." };
}
