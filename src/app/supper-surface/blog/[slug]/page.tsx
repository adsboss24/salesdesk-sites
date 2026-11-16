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
  ArrowRight,
  BookOpen,
  Calendar,
  Share2,
  Building2,
  Layers,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { getAllSupperSurfacePosts, getSupperSurfacePostBySlug } from '@/lib/supper-surface-posts';
import StructuredData from '@/components/StructuredData';
import { constructMetadata } from '@/utils/seo';
import SocialShare from '@/components/blog/SocialShare';

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllSupperSurfacePosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getSupperSurfacePostBySlug(slug);

  if (!post) {
    return {
      title: 'ไม่พบบทความ | Supper Surface by Fameline',
      description: 'บทความที่คุณกำลังค้นหาไม่มีอยู่ในระบบ',
    };
  }

  return constructMetadata({
    title: `${post.title} | Supper Surface by Fameline`,
    description: post.metaDescription,
    canonicalPath: `/supper-surface/blog/${post.slug}`,
    ogImage: post.featuredImage,
    ogType: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    keywords: [
      'Supper Surface',
      'Fameline Products',
      'บจก. เฟมไลน์ โปร์ดักส์',
      ...post.keywords,
    ],
  });
}

export default async function SupperSurfaceArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getSupperSurfacePostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllSupperSurfacePosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const siteUrl = 'https://sites.salesdesk-ai.com';
  const postUrl = `${siteUrl}/supper-surface/blog/${post.slug}`;
  const salePhone = '066-168-5157';
  const salePhoneCallUrl = 'tel:0661685157';
  const lineUrl = 'https://line.me/ti/p/8LzX_47dFe';

  // JSON-LD: Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    description: post.metaDescription,
    image: `${siteUrl}${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: {
        '@type': 'Organization',
        name: 'บจก. เฟมไลน์ โปร์ดักส์ (FAMELINE PRODUCTS CO., LTD.)',
        url: `${siteUrl}/supper-surface`,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Supper Surface by Fameline Products',
      url: `${siteUrl}/supper-surface`,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/suppersurface/hero-cinematic.jpg`,
      },
    },
    keywords: post.keywords.join(', '),
  };

  // JSON-LD: BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'หน้าแรก Supper Surface',
        item: `${siteUrl}/supper-surface`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'คลังความรู้สถาปัตยกรรม',
        item: `${siteUrl}/supper-surface/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24">
      <StructuredData data={articleSchema} id="article-schema" />
      <StructuredData data={breadcrumbSchema} id="breadcrumb-schema" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/supper-surface/blog"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-400 transition"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>บทความทั้งหมด</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <Link
              href="/supper-surface#minimall-catalog"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-slate-300 hover:text-white hover:border-amber-400 transition"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" /> MiniMall แคตตาล็อก
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-xs text-slate-950 font-extrabold transition shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" /> LINE ปรึกษาสเปก
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-14">
        
        {/* Breadcrumb Visual Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
          <Link href="/supper-surface" className="hover:text-amber-400 transition">หน้าหลัก</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/supper-surface/blog" className="hover:text-amber-400 transition">บทความ</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300 truncate max-w-xs">{post.categoryName}</span>
        </nav>

        {/* Category & Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 mb-4">
          <Sparkles className="w-3.5 h-3.5" /> {post.categoryName}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-4 py-4 border-y border-slate-800 text-xs text-slate-400 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              L
            </div>
            <div>
              <div className="font-bold text-white">{post.author}</div>
              <div className="text-[11px] text-amber-400">{post.authorRole}</div>
            </div>
          </div>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>ใช้เวลาอ่านประมาณ {post.readTime}</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-slate-400" />
            <span>Fameline Products Co., Ltd.</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800 shadow-2xl">
          <Image
            src={post.featuredImage}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* Top Social Share (SEO Best Practice) */}
        <div className="mb-8">
          <SocialShare
            url={postUrl}
            title={post.title}
            description={post.metaDescription}
            theme="amber"
            label="แชร์บทความสถาปัตยกรรมนี้"
            sublabel="ส่งต่อความรู้มาตรฐานวัสดุปิดผิวให้ทีมงานและเพื่อนร่วมวงการ"
          />
        </div>

        {/* Rich Article Body */}
        <div 
          className="prose prose-invert prose-amber max-w-none 
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-3 prose-h2:mt-10
            prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
            prose-li:text-slate-300 prose-li:text-sm sm:prose-li:text-base
            prose-strong:text-amber-300 prose-strong:font-bold
            prose-a:text-amber-400 hover:prose-a:text-amber-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom Social Share */}
        <div className="mt-12">
          <SocialShare
            url={postUrl}
            title={post.title}
            description={post.metaDescription}
            theme="amber"
            label="ประทับใจบทความนี้? แชร์ต่อเลย"
            sublabel="ช่วยส่งต่อข้อมูลสเปกวิศวกรรมอาคารที่มีประโยชน์"
          />
        </div>

        {/* Author Quote Box */}
        <div className="mt-10 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="relative w-36 h-28 rounded-xl overflow-hidden shrink-0 border border-amber-500/30 shadow-lg">
            <Image
              src="/images/suppersurface/hero-facade.jpg"
              alt="งานสถาปัตยกรรมระดับพรีเมียม Fameline Products"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <span className="absolute bottom-1.5 left-2 right-2 text-[9px] font-bold text-amber-300 text-center uppercase tracking-wider">
              FAMELINE MASTERPIECE
            </span>
          </div>
          <div className="space-y-1 text-center sm:text-left flex-1">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">ติดต่อผู้เชี่ยวชาญผลิตภัณฑ์</div>
            <h4 className="text-base font-bold text-white">{post.author}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              ยินดีให้คำปรึกษาการถอดแบบสเปกวัสดุ คำนวณปริมาณงานโครงการ (BOQ) และจัดส่งตัวอย่างชิ้นงานจริงให้สถาปนิกและผู้รับเหมาทั่วประเทศ
            </p>
            <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
              <a
                href={salePhoneCallUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" /> โทร. {salePhone}
              </a>
              <a
                href={lineUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" /> แอด LINE คุณแอล
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              บทความสถาปัตยกรรมที่เกี่ยวข้อง
            </h3>
            <Link
              href="/supper-surface/blog"
              className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>ดูทั้งหมด</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/supper-surface/blog/${rel.slug}`}
                className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 rounded-xl overflow-hidden group transition flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <Image
                    src={rel.featuredImage}
                    alt={rel.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-amber-400 font-bold uppercase block">{rel.categoryName}</span>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 pt-1">
                    <Clock className="w-3 h-3 text-slate-500" /> {rel.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Return to Landing Page Action */}
        <div className="mt-12 text-center">
          <Link
            href="/supper-surface"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>กลับสู่หน้าหลัก Supper Surface by Fameline</span>
          </Link>
        </div>

      </main>
    </div>
  );
}
