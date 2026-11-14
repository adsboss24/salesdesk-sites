import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import PremiumFooter from '@/components/Footer';
import { fetchAllLivePosts } from '@/lib/posts';

export const dynamic = 'force-dynamic';

const siteUrl = 'https://sites.salesdesk-ai.com';

export const metadata: Metadata = {
  title: 'คลังความรู้ & กลยุทธ์เซลเพจปิดการขาย | SalesDesk Sites Knowledge Hub',
  description:
    'รวมบทความและกลยุทธ์การทำเซลเพจปิดการขาย จิตวิทยา 16:9 สถาปัตยกรรม Technical SEO ดันติดหน้า 1 Google และคู่มือติดตั้ง Meta CAPI & Tracking ครบวงจร',
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: 'คลังความรู้ & กลยุทธ์เซลเพจปิดการขาย | SalesDesk Sites',
    description:
      'รวมบทความและกลยุทธ์การทำเซลเพจปิดการขาย จิตวิทยา 16:9 สถาปัตยกรรม Technical SEO ดันติดหน้า 1 Google และคู่มือติดตั้ง Meta CAPI & Tracking ครบวงจร',
    url: `${siteUrl}/blog`,
    siteName: 'SalesDesk Sites',
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/hero-desktop.png`,
        width: 1200,
        height: 630,
        alt: 'SalesDesk Sites Knowledge Hub',
        type: 'image/png',
      },
    ],
  },
};

export default async function BlogListingPage() {
  const posts = await fetchAllLivePosts();

  // Structured Data for Blog Collection
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/blog#collection`,
        name: 'คลังความรู้ & กลยุทธ์เซลเพจปิดการขาย | SalesDesk Sites',
        description: 'รวมบทความและกลยุทธ์การทำเซลเพจปิดการขาย จิตวิทยา 16:9 สถาปัตยกรรม Technical SEO ดันติดหน้า 1 Google',
        url: `${siteUrl}/blog`,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/blog#breadcrumb`,
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
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/salesdesk-logo-square.png" 
              alt="SalesDesk AI Logo" 
              width={40}
              height={40}
              className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-teal-500/20 bg-slate-900 border border-slate-700/60 p-1 shrink-0" 
            />
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-white block leading-tight">
                SalesDesk <span className="text-teal-400">Sites</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
                Knowledge Hub & Articles
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="text-xs font-semibold text-slate-300 hover:text-white transition px-3 py-2"
            >
              หน้าแรก
            </Link>
            <Link 
              href="/#pricing"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-xs shadow-md transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>แพ็กเกจราคา</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            <BookOpen className="w-4 h-4" />
            <span>SalesDesk Knowledge Hub</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            คลังความรู้ & กลยุทธ์เซลเพจปิดการขาย
          </h1>
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            เจาะลึกจิตวิทยาการปิดการขาย สถาปัตยกรรม Technical SEO ดันติดหน้า 1 Google และสูตรลัดลดค่าแอดด้วย Conversion Tracking ครบวงจร
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="group bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] w-full overflow-hidden bg-slate-800">
                <Image
                  src={post.featuredImage}
                  alt={post.imageAlt || post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-teal-500/30 text-teal-300 text-[10px] font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </Link>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-white group-hover:text-teal-300 transition line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {post.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-bold transition"
                  >
                    <span>อ่านบทความ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <PremiumFooter />
    </div>
  );
}
