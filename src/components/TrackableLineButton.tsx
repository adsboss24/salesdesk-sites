'use client';

import React from 'react';
import { pushToDataLayer, GTMEventParams } from '@/lib/gtm';

export interface TrackableLineButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  className?: string;
  children: React.ReactNode;
  buttonName?: string;
  leadValue?: number;
  customParams?: Record<string, any>;
}

/**
 * Reusable Line OA Button with Google Ads / GTM Conversion Tracking
 * Pushes 'generate_lead' event to window.dataLayer on every click
 */
export default function TrackableLineButton({
  href = 'https://line.me/R/ti/p/@fhu6688s',
  className = '',
  children,
  buttonName = 'line_oa_click',
  leadValue,
  customParams = {},
  onClick,
  target = '_blank',
  rel = 'noreferrer noopener',
  ...rest
}: TrackableLineButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Push Google Ads Lead Conversion Event to GTM dataLayer
    const eventPayload: GTMEventParams = {
      event: 'generate_lead',
      lead_type: 'line_click',
      button_name: buttonName,
      page_location: typeof window !== 'undefined' ? window.location.href : '',
      destination_url: href,
      ...(leadValue ? { value: leadValue, currency: 'THB' } : {}),
      ...customParams,
    };

    pushToDataLayer(eventPayload);

    // 2. Call custom onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
