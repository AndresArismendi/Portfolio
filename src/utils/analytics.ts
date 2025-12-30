// Analytics utility for tracking page views and events
// Make sure to replace 'G-XXXXXXXXXX' in index.html with your actual GA4 Measurement ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-NXEEMEWZB2', {
      page_path: path,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track page load
if (typeof window !== 'undefined') {
  trackPageView(window.location.pathname + window.location.search);
}

