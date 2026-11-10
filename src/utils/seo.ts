import type { Metadata } from 'next';

export const DEFAULT_SITE_URL = 'https://salesdesk-sites.vercel.app';
export const DEFAULT_SITE_NAME = 'SalesDesk Sites';
export const DEFAULT_LOCALE = 'th_TH';
export const DEFAULT_OG_IMAGE = `${DEFAULT_SITE_URL}/images/hero-desktop.png`;

export interface GenerateMetadataProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}

/**
 * Enterprise SEO Utility: Dynamic Next.js Metadata API Generator
 * Generates type-safe, Core Web Vitals-ready metadata with canonical links,
 * OpenGraph, Twitter Cards, and search engine directives.
 */
export function constructMetadata({
  title,
  description,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  keywords = [
    'เซลเพจปิดการขาย',
    'รับทำเซลเพจ',
    'Salepage AI',
    'Technical SEO Next.js',
    'SalesDesk Sites',
  ],
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const fullCanonicalUrl = canonicalPath.startsWith('http')
    ? canonicalPath
    : `${DEFAULT_SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  const fullImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${DEFAULT_SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  const imageType = fullImageUrl.endsWith('.png') ? 'image/png' : 'image/jpeg';

  return {
    title: `${title} | ${DEFAULT_SITE_NAME}`,
    description,
    keywords,
    metadataBase: new URL(DEFAULT_SITE_URL),
    alternates: {
      canonical: fullCanonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: fullCanonicalUrl,
      siteName: DEFAULT_SITE_NAME,
      locale: DEFAULT_LOCALE,
      type: ogType,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: imageType,
        },
      ],
      ...(ogType === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors || ['ทีมงาน SalesDesk AI'],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: '@salesdesk_ai',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
