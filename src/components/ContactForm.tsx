'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { sendContact, type ContactState } from '@/app/contact/actions';

const initial: ContactState = { status: 'idle' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 bg-hivis text-navy-900 font-bold px-7 py-3.5 rounded-xl hover:bg-hivis-400 disabled:opacity-60 transition"
    >
      {pending ? 'Sending…' : 'Send message'}
    </button>
  );
}

export function ContactForm() {
  const [state, action] = useFormState(sendContact, initial);

  return (
    <form action={action} className="grid gap-5 sm:grid-cols-2" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy-900">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] transition focus:bg-white focus:border-hivis-600 focus:ring-2 focus:ring-hivis-400/40 outline-none"
        />
        {state.status === 'error' && state.fieldErrors?.name && (
          <p className="text-sm text-red-600 mt-1">{state.fieldErrors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy-900">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] transition focus:bg-white focus:border-hivis-600 focus:ring-2 focus:ring-hivis-400/40 outline-none"
        />
        {state.status === 'error' && state.fieldErrors?.email && (
          <p className="text-sm text-red-600 mt-1">{state.fieldErrors.email}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone" className="block text-sm font-semibold text-navy-900">Phone (optional)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] transition focus:bg-white focus:border-hivis-600 focus:ring-2 focus:ring-hivis-400/40 outline-none"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] transition focus:bg-white focus:border-hivis-600 focus:ring-2 focus:ring-hivis-400/40 outline-none"
        />
        {state.status === 'error' && state.fieldErrors?.message && (
          <p className="text-sm text-red-600 mt-1">{state.fieldErrors.message}</p>
        )}
      </div>
      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <SubmitButton />
        {state.status === 'success' && (
          <p role="status" className="text-sm text-green-700">{state.message}</p>
        )}
        {state.status === 'error' && (
          <p role="alert" className="text-sm text-red-600">{state.message}</p>
        )}
      </div>
    </form>
  );
}
