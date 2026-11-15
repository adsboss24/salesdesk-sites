import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  User,
  ArrowLeft,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Star,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import SocialShare from '@/components/blog/SocialShare';
import { getAllMinMaxPosts, fetchLiveMinMaxPostBySlug } from '@/lib/minmax-posts';
import StructuredData from '@/components/StructuredData';
import { constructMetadata } from '@/utils/seo';
import TrackableLineButton from '@/components/TrackableLineButton';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllMinMaxPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchLiveMinMaxPostBySlug(slug);

  if (!post) {
    return {
      title: 'ไม่พบบทความ | MinMax Media Event Agency',
      description: 'บทความที่คุณกำลังค้นหาไม่มีอยู่ในระบบ',
    };
  }

  return constructMetadata({
    title: `${post.title} | MinMax Media Event Agency`,
    description: post.metaDescription,
    canonicalPath: `/minmax-media/blog/${post.slug}`,
    ogImage: post.featuredImage,
    ogType: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    keywords: [
      'MinMax Media',
      'MinMax Media Event Agency',
      'รับทำการตลาดครบวงจร',
      'ปั้นแบรนด์',
      'รับยิงแอด',
      'Production วิดีโอ',
      'Influencer KOL KOC',
      post.category,
    ],
  });
}

export default async function MinMaxArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchLiveMinMaxPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllMinMaxPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const siteUrl = 'https://sites.salesdesk-ai.com';
  const articleUrl = `${siteUrl}/minmax-media/blog/${post.slug}`;
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
          name: 'MinMax Media Event Agency',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/images/minmax/minmax-logo-round.png`,
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
            name: 'หน้าแรก MinMax Media',
            item: `${siteUrl}/minmax-media`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'คลังความรู้การตลาด & ปั้นแบรนด์',
            item: `${siteUrl}/minmax-media#articles`,
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

  const phoneConsult = '081-772-6444';
  const phoneRaw = '0817726444';
  const fbMessengerUrl = 'https://m.me/MinmaxMediaAgency';
  const lineUrl = 'https://line.me/R/ti/p/%40malakor';

  return (
    <div className="min-h-screen bg-[#04090d] text-slate-100 font-sans selection:bg-emerald-400 selection:text-slate-950 pb-24 lg:pb-12">
      <StructuredData data={jsonLd} id="minmax-article-schema" />

      {/* Minimal Premium Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#04090d]/90 backdrop-blur-xl border-b border-emerald-500/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link
            href="/minmax-media"
            className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-emerald-400 transition"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
            <span>กลับสู่หน้าหลัก MINMAX MEDIA</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-semibold hover:border-emerald-500/40 transition"
            >
              <PhoneCall className="w-3.5 h-3.5" /> {phoneConsult}
            </a>
            <TrackableLineButton
              href={lineUrl}
              buttonName="article_header_line"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-xs text-slate-950 font-extrabold shadow-md shadow-emerald-500/20"
            >
              <MessageCircle className="w-3.5 h-3.5" /> LINE: @malakor
            </TrackableLineButton>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap"
        >
          <Link href="/minmax-media" className="hover:text-emerald-400 transition">
            หน้าหลัก MinMax Media
          </Link>
          <span>/</span>
          <Link href="/minmax-media#articles" className="hover:text-emerald-400 transition">
            บทความการตลาด
          </Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">{post.category}</span>
        </nav>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4 border border-emerald-500/25">
          <Star className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
          <span>{post.category}</span>
        </div>

        {/* Article H1 Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-normal sm:leading-[1.25] mb-6">
          {post.title}
        </h1>

        {/* Author & Read Time Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-400 pb-8 border-b border-slate-800/80 mb-6 flex-wrap">
          <div className="flex items-center gap-1.5 text-slate-200 font-medium">
            <User className="w-4 h-4 text-emerald-400" />
            <span>
              {post.author} ({post.authorRole})
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-500" />
            <span>เวลาอ่าน {post.readTime}</span>
          </div>
        </div>

        {/* Top Social Share Bar */}
        <SocialShare
          url={articleUrl}
          title={post.title}
          description={post.metaDescription}
          theme="teal"
          label="แชร์บทความกลยุทธ์การตลาดนี้"
          sublabel="ส่งต่อความรู้การปั้นแบรนด์และการยิงแอดให้พาร์ทเนอร์หรือทีมงานของคุณ"
          className="mb-8"
        />

        {/* Featured Image */}
        <div className="relative h-64 sm:h-96 md:h-[440px] w-full rounded-2xl overflow-hidden mb-10 border border-emerald-500/20 shadow-2xl shadow-emerald-950/30">
          <Image
            src={post.featuredImage}
            alt={post.imageAlt}
            fill
            priority
            unoptimized={post.featuredImage.includes('/api/seo/cover')}
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Rich Content Body */}
        <article
          className="prose prose-invert max-w-none 
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-2
            prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
            prose-ul:text-slate-300 prose-li:my-2 prose-strong:text-emerald-300
            prose-a:text-emerald-400 prose-a:underline hover:prose-a:text-emerald-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom Social Share Bar */}
        <SocialShare
          url={articleUrl}
          title={post.title}
          description={post.metaDescription}
          theme="teal"
          label="ชอบบทความนี้? แชร์ต่อให้เพื่อนร่วมธุรกิจ"
          sublabel="แบ่งปันกลยุทธ์การตลาดครบวงจรจาก MinMax Media Event Agency"
          className="mt-10"
        />

        {/* Related Articles Section (Internal Link Equity) */}
        {relatedPosts.length > 0 && (
          <section className="mt-14 pt-10 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  บทความกลยุทธ์การตลาดที่เกี่ยวข้อง
                </h2>
              </div>
              <Link
                href="/minmax-media#articles"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>ดูทั้งหมด</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/minmax-media/blog/${rel.slug}`}
                  className="group rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-emerald-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                      <Image
                        src={rel.featuredImage}
                        alt={rel.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 420px"
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 text-[10px] font-bold text-emerald-300">
                        {rel.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition line-clamp-2 leading-snug">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {rel.metaDescription}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-4 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span>อ่าน {rel.readTime}</span>
                    <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition inline-flex items-center gap-1">
                      อ่านต่อ <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Direct Consultation CTA Card */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-emerald-950/30 via-slate-900/90 to-slate-950 border border-emerald-500/30 text-center space-y-4 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREE BRAND & MARKETING CONSULTATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            พร้อมปั้นแบรนด์และขยายยอดขายไปกับ MinMax Media หรือยัง?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            ปรึกษาทีมผู้เชี่ยวชาญด้านกลยุทธ์ โปรดักชั่น และการยิงแอด เพื่อวางแผนการตลาดที่คุ้มค่าทุกเม็ดเงินสำหรับธุรกิจคุณโดยเฉพาะ
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/minmax-media#consult-form"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition"
            >
              ลงทะเบียนรับแผนกลยุทธ์ฟรี &rarr;
            </Link>
            <a
              href={`tel:${phoneRaw}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 hover:border-emerald-400/40"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" /> โทรสายตรง {phoneConsult}
            </a>
            <TrackableLineButton
              href={lineUrl}
              buttonName="article_bottom_line"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> แอด LINE: @malakor
            </TrackableLineButton>
          </div>
        </div>
      </main>

      {/* SalesDesk Mobile Sticky Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-[#04090d]/95 backdrop-blur-md border-t border-emerald-500/20 p-2.5 px-3 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          <a
            href={`tel:${phoneRaw}`}
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-slate-900 text-white font-bold text-xs border border-slate-700/80"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>โทรด่วน</span>
          </a>
          <a
            href={fbMessengerUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>ทักแชตเพจ</span>
          </a>
          <TrackableLineButton
            href={lineUrl}
            buttonName="article_mobile_sticky_line"
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black text-xs"
          >
            <span>แอด LINE</span>
          </TrackableLineButton>
        </div>
      </div>
    </div>
  );
}
