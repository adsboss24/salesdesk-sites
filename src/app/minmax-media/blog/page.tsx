import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Sparkles, User, PhoneCall, MessageCircle } from 'lucide-react';
import { getAllMinMaxPosts } from '@/lib/minmax-posts';
import { constructMetadata } from '@/utils/seo';
import StructuredData from '@/components/StructuredData';
import TrackableLineButton from '@/components/TrackableLineButton';

export const metadata: Metadata = constructMetadata({
  title: 'คลังความรู้การตลาดดิจิทัล & กลยุทธ์ปั้นแบรนด์ | MinMax Media Event Agency',
  description:
    'รวมบทความเจาะลึกกลยุทธ์การตลาดครบวงจร Full-Funnel Marketing, เทคนิค Production วิดีโอสั้น Reels/TikTok, การใช้ Influencer KOL/KOC และการยิงแอดเพิ่มค่า ROAS โดยทีมผู้เชี่ยวชาญ MinMax Media',
  canonicalPath: '/minmax-media/blog',
  ogImage: '/images/minmax/hero-minimal-premium.jpg',
});

export default function MinMaxBlogIndexPage() {
  const posts = getAllMinMaxPosts();
  const siteUrl = 'https://sites.salesdesk-ai.com';
  const lineUrl = 'https://line.me/R/ti/p/%40malakor';
  const phoneConsult = '081-772-6444';
  const phoneRaw = '0817726444';

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'คลังความรู้การตลาดดิจิทัล & กลยุทธ์ปั้นแบรนด์ โดย MinMax Media',
    itemListElement: posts.map((post, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `${siteUrl}/minmax-media/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="min-h-screen bg-[#04090d] text-slate-100 font-sans selection:bg-emerald-400 selection:text-slate-950 pb-24">
      <StructuredData data={itemListSchema} id="minmax-blog-list-schema" />

      <header className="sticky top-0 z-40 bg-[#04090d]/90 backdrop-blur-xl border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/minmax-media"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-emerald-400 transition"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
            <span>กลับสู่หน้าหลัก MINMAX MEDIA</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5" /> {phoneConsult}
            </a>
            <TrackableLineButton
              href={lineUrl}
              buttonName="blog_index_header_line"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-xs text-slate-950 font-extrabold"
            >
              <MessageCircle className="w-3.5 h-3.5" /> LINE: @malakor
            </TrackableLineButton>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>MINMAX MEDIA KNOWLEDGE HUB</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            บทความกลยุทธ์การตลาด & ปั้นแบรนด์
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            เจาะลึกเทคนิคการวางกลยุทธ์ โปรดักชั่นวิดีโอ การใช้ KOL/KOC และการยิงแอดเพิ่มยอดขายจากประสบการณ์จริงของทีม MinMax Media
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/minmax-media/blog/${post.slug}`}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-emerald-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/40"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={post.featuredImage}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 text-[10px] font-bold text-emerald-300">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-emerald-400" /> {post.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {post.metaDescription}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">อ่านบทความฉบับเต็ม</span>
                <span className="text-emerald-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition">
                  อ่านต่อ <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
