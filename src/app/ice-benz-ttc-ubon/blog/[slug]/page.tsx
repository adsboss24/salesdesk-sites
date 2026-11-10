import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Sparkles, PhoneCall, MessageCircle, Star } from 'lucide-react';
import { getAllBenzPosts, getBenzPostBySlug } from '@/lib/benz-posts';
import StructuredData from '@/components/StructuredData';
import { constructMetadata } from '@/utils/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBenzPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBenzPostBySlug(slug);

  if (!post) {
    return {
      title: 'ไม่พบบทความ | ICE LUXURY AUTO',
      description: 'บทความที่คุณกำลังค้นหาไม่มีอยู่ในระบบ',
    };
  }

  return constructMetadata({
    title: `${post.title} | ICE LUXURY AUTO`,
    description: post.metaDescription,
    canonicalPath: `/ice-benz-ttc-ubon/blog/${post.slug}`,
    ogImage: post.featuredImage,
    ogType: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    keywords: [
      'Mercedes-Benz Thailand',
      'Mercedes-AMG',
      'smart EV',
      'คุณไอซ์ ที่ปรึกษาการขาย',
      'รีวิวเบนซ์',
      'ทดลองขับเบนซ์',
    ],
  });
}

export default async function BenzArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBenzPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = 'https://salesdesk-sites.vercel.app';
  const articleUrl = `${siteUrl}/ice-benz-ttc-ubon/blog/${post.slug}`;
  const fullImageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `${siteUrl}${post.featuredImage}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${articleUrl}#article`,
        headline: post.title,
        description: post.metaDescription,
        image: fullImageUrl,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          '@type': 'Person',
          name: post.author,
          jobTitle: post.authorRole,
        },
        publisher: {
          '@type': 'Organization',
          name: 'ICE LUXURY AUTO',
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
            name: 'หน้าแรก ICE LUXURY AUTO',
            item: `${siteUrl}/ice-benz-ttc-ubon`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'คลังความรู้ & คู่มือเลือกรถยนต์',
            item: `${siteUrl}/ice-benz-ttc-ubon#articles`,
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

  const realPhone = '065-214-2747';
  const fbMessengerUrl = 'https://m.me/Icebenzttcmotorubon';
  const lineUrl = 'https://line.me/ti/p/vVYnqZPQYz';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      <StructuredData data={jsonLd} id="benz-article-schema" />

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link href="/ice-benz-ttc-ubon" className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-400 transition">
            <ArrowLeft className="w-4 h-4" />
            <span>กลับสู่หน้าหลัก ICE LUXURY AUTO</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${realPhone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-amber-400 font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5" /> {realPhone}
            </a>
            <a
              href={fbMessengerUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-xs text-white font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5" /> แชต Facebook
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
          <Link href="/ice-benz-ttc-ubon" className="hover:text-amber-400 transition">
            หน้าหลัก
          </Link>
          <span>/</span>
          <span className="text-amber-400">{post.category}</span>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Category & Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-4 border border-amber-400/20">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>{post.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25] mb-6">
          {post.title}
        </h1>

        {/* Author & Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-400 pb-8 border-b border-slate-800 mb-8 flex-wrap">
          <div className="flex items-center gap-1.5 text-slate-200 font-medium">
            <User className="w-4 h-4 text-amber-400" />
            <span>{post.author} ({post.authorRole})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-500" />
            <span>เวลาอ่าน {post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 md:h-[460px] w-full rounded-2xl overflow-hidden mb-10 border border-slate-800 shadow-2xl">
          <Image
            src={post.featuredImage}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body (HTML Rich Text with custom styling) */}
        <article
          className="prose prose-invert prose-amber max-w-none 
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-2
            prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
            prose-ul:text-slate-300 prose-li:my-1.5 prose-strong:text-amber-300
            prose-a:text-amber-400 prose-a:underline hover:prose-a:text-amber-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Direct Booking CTA Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-400/40 text-center space-y-4 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>สัมผัสประสบการณ์จริงด้วยตัวคุณเอง</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            สนใจทดลองขับหรือขอรับใบเสนอราคาพิเศษ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            คุณไอซ์ยินดีประสานงานนำรถไปให้ทดลองขับถึงหน้าบ้านท่าน พร้อมข้อเสนอทางการเงินที่ดีที่สุดประจำเดือน
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/ice-benz-ttc-ubon#booking-form"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition"
            >
              ลงทะเบียนนัดหมายทดลองขับ &rarr;
            </Link>
            <a
              href={`tel:${realPhone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" /> โทรสายตรง {realPhone}
            </a>
            <a
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> แอด LINE คุยกับคุณไอซ์
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
