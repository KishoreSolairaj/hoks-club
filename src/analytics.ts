// Google Analytics 4. The Measurement ID comes from VITE_GA_ID (set it in
// .env.local on the machine that builds the site). Without it, nothing loads
// and track() does nothing.

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID: string | undefined = import.meta.env.VITE_GA_ID?.trim() || undefined;

export const track = (event: string, params: Params = {}) => {
  if (GA_ID && window.gtag) window.gtag('event', event, params);
};

// Classifies a clicked link into the events we report on.
const linkEvent = (a: HTMLAnchorElement): [string, Params] | null => {
  const href = a.getAttribute('href') ?? '';
  const text = a.textContent?.replace(/[→↗]/g, '').trim();
  if (href.startsWith('tel:')) return ['phone_click', { link_text: text }];
  if (href.startsWith('mailto:')) return ['email_click', { link_text: text }];
  if (href.includes('wa.me/')) return ['whatsapp_click', { link_text: text }];
  if (href.includes('instagram.com')) return ['social_click', { platform: 'instagram', link_url: href, link_text: text }];
  if (href.includes('youtube.com')) return ['social_click', { platform: 'youtube', link_url: href, link_text: text }];
  if (a.classList.contains('btn') || a.closest('.upcoming, .svc-main, .svc-more')) {
    return ['cta_click', { link_text: text, target_section: href.replace('#', '') }];
  }
  return null;
};

export const initAnalytics = () => {
  if (!GA_ID) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);

  document.addEventListener('click', e => {
    const a = (e.target as Element | null)?.closest?.('a');
    const ev = a && linkEvent(a);
    if (ev) track(...ev);
  });

  // Report each section once, the first time half of it is on screen.
  const seen = new Set<string>();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const id = entry.target.id;
      if (entry.isIntersecting && !seen.has(id)) {
        seen.add(id);
        track('section_view', { section: id });
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.5 });
  document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));
};
