import React from 'react';

export interface StructuredDataProps {
  /**
   * Accepts any valid Schema.org object or array of Schema objects
   */
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  /**
   * Optional custom id for the script tag
   */
  id?: string;
}

/**
 * Enterprise SEO Component: Automated Schema Markup (JSON-LD) Generator
 * Safely renders structured data scripts to enable Google Rich Results
 * (Article, BlogPosting, Product, BreadcrumbList, LocalBusiness, FAQPage).
 */
export default function StructuredData({ data, id }: StructuredDataProps) {
  // Ensure we safely escape HTML characters to prevent XSS in JSON-LD injection
  const jsonString = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

/**
 * Helper to generate Schema.org Article / BlogPosting payload
 */
export function generateArticleSchema({
  url,
  headline,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName = 'ทีมงาน SalesDesk AI',
  publisherName = 'SalesDesk Sites',
  publisherLogo = 'https://salesdesk-sites.vercel.app/images/salesdesk-logo-square.png',
}: {
  url: string;
  headline: string;
  description: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline,
    description,
    image: imageUrl,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
  };
}

/**
 * Helper to generate Schema.org BreadcrumbList payload
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Helper to generate Schema.org Product payload
 */
export function generateProductSchema({
  name,
  description,
  image,
  price,
  priceCurrency = 'THB',
  availability = 'https://schema.org/InStock',
  brand = 'SalesDesk AI',
  url,
}: {
  name: string;
  description: string;
  image: string;
  price: string | number;
  priceCurrency?: string;
  availability?: string;
  brand?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency,
      price: price.toString(),
      availability,
    },
  };
}
