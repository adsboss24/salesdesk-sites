import { sendGTMEvent } from '@next/third-parties/google';

// Global TypeScript definition for window.dataLayer matching @next/third-parties
declare global {
  interface Window {
    dataLayer?: Object[];
  }
}

export interface GTMEventParams {
  event: string;
  lead_type?: string;
  button_name?: string;
  page_location?: string;
  destination_url?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

/**
 * Safely push custom events to Google Tag Manager dataLayer
 * Utilizes official @next/third-parties sendGTMEvent with window.dataLayer fallback
 */
export const pushToDataLayer = (data: GTMEventParams): void => {
  if (typeof window !== 'undefined') {
    try {
      sendGTMEvent(data);
    } catch {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(data);
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('📊 [GTM DataLayer Event]:', data);
    }
  }
};
