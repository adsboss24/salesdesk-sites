import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Sparkles } from 'lucide-react';
import RelatedPosts from '@/components/blog/RelatedPosts';
import PremiumFooter from '@/components/Footer';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Static Generation of All Articles for 0.8s Instant Load
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'ไม่พบบทความ | SalesDesk Sites',
      description: 'บทความที่คุณกำลังค้นหาไม่มีอยู่ในระบบ',
    };
  }

  const siteUrl = 'https://salesdesk-sites.vercel.app';
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const fullImageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `${siteUrl}${post.featuredImage}`;

  return {
    title: `${post.title} | SalesDesk Sites`,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: 'SalesDesk Sites',
      locale: 'th_TH',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
          type: fullImageUrl.endsWith('.png') ? 'image/png' : 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [fullImageUrl],
    },
  };
}

// 3. Dynamic Article Page Component
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = 'https://salesdesk-sites.vercel.app';
  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const fullImageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `${siteUrl}${post.featuredImage}`;

  // 4. Advanced Schema JSON-LD (BlogPosting + BreadcrumbList)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${articleUrl}#article`,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          name: 'SalesDesk Sites',
          url: siteUrl,
        },
        headline: post.title,
        description: post.metaDescription,
        mainEntityOfPage: articleUrl,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        image: {
          '@type': 'ImageObject',
          url: fullImageUrl,
          width: 1200,
          height: 630,
        },
        author: {
          '@type': 'Person',
          name: post.author,
          jobTitle: post.authorRole,
        },
        publisher: {
          '@type': 'Organization',
          name: 'SalesDesk Sites',
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/images/salesdesk-logo-square.png`,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'หน้าแรก',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'คลังความรู้ & กลยุทธ์เซลเพจ',
            item: `${siteUrl}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Header */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-teal-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>กลับสู่คลังบทความ</span>
          </Link>

          <Link 
            href="/#pricing" 
            className="text-xs font-bold text-teal-400 hover:text-teal-300 transition"
          >
            ดูแพ็กเกจเซลเพจเริ่มต้น ฿2,990 →
          </Link>
        </div>
      </nav>

      {/* Article Header & Breadcrumb */}
      <header className="max-w-3xl mx-auto px-4 pt-10 pb-8 space-y-6">
        
        {/* Visual Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition">หน้าแรก</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition">คลังความรู้</Link>
          <span>/</span>
          <span className="text-teal-400 truncate max-w-[200px]">{post.category}</span>
        </div>

        <span className="inline-block bg-teal-950/80 text-teal-300 border border-teal-500/30 text-xs px-3 py-1 rounded-full font-bold">
          {post.category}
        </span>

        <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
          {post.title}
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-y border-slate-800/80 py-3.5">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-teal-400" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-500" />
            <time dateTime={post.publishedAt}>10 พ.ย. 2026</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-500" />
            <span>อ่าน {post.readTime}</span>
          </div>
        </div>

        {/* Hero Featured Image (LCP & Core Web Vitals Optimized) */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <Image
            src={post.featuredImage}
            alt={post.imageAlt || post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>
      </header>

      {/* Main Rich Content Section */}
      <main className="max-w-3xl mx-auto px-4 pb-16">
        <article 
          className="space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-teal-300 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-slate-300 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2.5 [&_li]:text-slate-300 [&_strong]:text-white [&_code]:bg-slate-900 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-teal-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* High-Converting In-Content CTA Box */}
        <div className="mt-14 bg-gradient-to-r from-teal-950/70 via-slate-900 to-emerald-950/70 border border-teal-500/40 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs sm:text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ต้องการยกระดับยอดขายธุรกิจของคุณด้วยเซลเพจมาตรฐานนี้?</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
            ให้ SalesDesk Sites สร้างเซลเพจปิดการขายให้คุณ ส่งงานใน 24-48 ชม.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            โครงสร้างจิตวิทยา 16:9 ไม่บังภาพบนมือถือ โหลดไว 0.8 วิ พร้อมติดตั้ง Technical SEO ดันติดหน้า 1 Google ฟรี
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-black text-sm shadow-lg transition active:scale-95"
            >
              ดูแพ็กเกจราคาเริ่มต้น ฿2,990 →
            </Link>
            <a
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจทำเซลเพจจากบทความบล็อกครับ"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 transition"
            >
              ขอตัวอย่างฟรีใน LINE (@fhu6688s)
            </a>
          </div>
        </div>
      </main>

      {/* Internal Linking: Related Articles Component */}
      <RelatedPosts currentSlug={post.slug} />

      {/* Global Footer */}
      <PremiumFooter />
    </div>
  );
}
