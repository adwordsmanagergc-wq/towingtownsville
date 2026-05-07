// Thin GA4 helper. Loaded only when NEXT_PUBLIC_GA_ID is set.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const event = (name: string, params?: Record<string, unknown>) => {
  if (typeof window === 'undefined' || !GA_ID) return;
  // @ts-expect-error gtag is injected at runtime
  window.gtag?.('event', name, params || {});
};
