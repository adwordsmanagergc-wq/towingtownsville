'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please add a few more details'),
  // honeypot
  website: z.string().max(0).optional(),
});

export type ContactState =
  | { status: 'idle' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string; fieldErrors?: Record<string, string> };

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || undefined,
    message: formData.get('message'),
    website: formData.get('website') || '',
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fieldErrors[issue.path[0] as string] = issue.message;
    }
    return { status: 'error', message: 'Please fix the errors below.', fieldErrors };
  }

  const { name, email, phone, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const owner = process.env.OWNER_EMAIL;

  if (!apiKey || !owner) {
    // Soft-fail in dev so the form is still testable.
    console.warn('[contact] Missing RESEND_API_KEY or OWNER_EMAIL — skipping email send.');
    return {
      status: 'success',
      message: 'Thanks — your message was received. (Dev mode: email not sent.)',
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Townsville Towing Compare <noreply@townsvilletowingcompare.com.au>',
      to: owner,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\n${message}`,
    });
    return { status: 'success', message: 'Thanks — your message has been sent.' };
  } catch (err) {
    console.error('[contact] Resend failure', err);
    return {
      status: 'error',
      message: 'Sorry — we could not send your message. Please try again or call one of the recommended operators.',
    };
  }
}
