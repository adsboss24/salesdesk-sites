import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getAllBenzPosts } from '@/lib/benz-posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sites.salesdesk-ai.com';
  const currentDate = new Date();

  // 1. Static Core Landing & Hub Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // 2. High-Converting Industry Showcase Salepages
  const showcaseRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/ice-benz-ttc-ubon`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ambulance-24hr`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tandj-bedding`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nattanan-nursingcare`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/property-luxury`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insurance-advisor`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/flower`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fashion-jeans`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/online-course`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // 3. Dynamic Knowledge Hub Articles (fetching from DB or Post Repository)
  const posts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4. Client Blog Articles (ICE LUXURY AUTO Knowledge Hub)
  const benzPosts = getAllBenzPosts();
  const benzBlogRoutes: MetadataRoute.Sitemap = benzPosts.map((post) => ({
    url: `${baseUrl}/ice-benz-ttc-ubon/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...showcaseRoutes, ...blogRoutes, ...benzBlogRoutes];
}
