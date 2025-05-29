// Facebook Pixel ID
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Google Tag Manager ID
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Facebook Pixel Events
export const FB_EVENTS = {
  PAGE_VIEW: 'PageView',
  VIEW_CONTENT: 'ViewContent',
  LEAD: 'Lead',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
  PURCHASE: 'Purchase',
} as const;

// Google Analytics Events
export const GA_EVENTS = {
  PAGE_VIEW: 'page_view',
  VIEW_ITEM: 'view_item',
  BEGIN_CHECKOUT: 'begin_checkout',
  PURCHASE: 'purchase',
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
} as const;

// Track page views
export function trackPageView(url: string) {
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', FB_EVENTS.PAGE_VIEW);
  }

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}

// Track custom events
export function trackEvent(eventName: string, params?: Record<string, any>) {
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// Track scroll depth
export function trackScrollDepth() {
  if (typeof window === 'undefined') return;

  let lastScrollDepth = 0;
  const scrollThresholds = [25, 50, 75, 90];

  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    // Find the highest threshold that has been crossed
    const crossedThreshold = scrollThresholds.find(threshold => 
      scrollPercent >= threshold && lastScrollDepth < threshold
    );

    if (crossedThreshold) {
      lastScrollDepth = crossedThreshold;
      trackEvent(GA_EVENTS.SCROLL_DEPTH, {
        depth: crossedThreshold,
        page_path: window.location.pathname,
      });
    }
  });
}

// Track time on page
export function trackTimeOnPage() {
  if (typeof window === 'undefined') return;

  const timeThresholds = [30, 60, 120, 300]; // seconds
  let startTime = Date.now();
  let lastReportedTime = 0;

  const checkTime = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    
    // Find the highest threshold that has been crossed
    const crossedThreshold = timeThresholds.find(threshold => 
      timeSpent >= threshold && lastReportedTime < threshold
    );

    if (crossedThreshold) {
      lastReportedTime = crossedThreshold;
      trackEvent(GA_EVENTS.TIME_ON_PAGE, {
        time_spent: crossedThreshold,
        page_path: window.location.pathname,
      });
    }
  };

  // Check every 10 seconds
  const interval = setInterval(checkTime, 10000);

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    clearInterval(interval);
  });
} 