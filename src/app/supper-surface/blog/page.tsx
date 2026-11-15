import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Sparkles, User, PhoneCall, MessageCircle, Layers, Building2 } from 'lucide-react';
import { getAllSupperSurfacePosts } from '@/lib/supper-surface-posts';
import { constructMetadata } from '@/utils/seo';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = constructMetadata({
  title: 'คลังความรู้สถาปัตยกรรม & นวัตกรรมวัสดุปิดผิวอาคาร | Supper Surface by Fameline',
  description:
    'รวมบทความเจาะลึกนวัตกรรมวัสดุปิดผิวสถาปัตยกรรม หินวีเนียร์ MCM ดัดโค้งได้, ไม้เทียม WPC, ฝ้าอลูมิเนียมเส้นยาว 85C/85F, แผ่นคอมโพสิต DECO & ALTEX ไส้ทนไฟ FR Class A2, และแผ่นไฟเบอร์ซีเมนต์นิชิฮะ (NICHIHA) ญี่ปุ่น โดยทีมผู้เชี่ยวชาญ Fameline Group',
  canonicalPath: '/supper-surface/blog',
  ogImage: '/images/suppersurface/hero-cinematic.jpg',
});

export default function SupperSurfaceBlogIndexPage() {
  const posts = getAllSupperSurfacePosts();
  const siteUrl = 'https://sites.salesdesk-ai.com';
  const salePhone = '066-168-5157';
  const salePhoneCallUrl = 'tel:0661685157';
  const lineUrl = 'https://line.me/ti/p/~0661685157';

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'คลังความรู้สถาปัตยกรรม & นวัตกรรมวัสดุปิดผิวอาคาร โดย Supper Surface Fameline',
    itemListElement: posts.map((post, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `${siteUrl}/supper-surface/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24">
      <StructuredData data={itemListSchema} id="supper-surface-blog-list-schema" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/supper-surface"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-400 transition"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>กลับสู่หน้าหลัก SUPPER SURFACE</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <a
              href={salePhoneCallUrl}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white font-bold hover:bg-slate-800 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" /> โทร. {salePhone}
            </a>
            <a
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-xs text-slate-950 font-extrabold transition shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" /> LINE: ฝ่ายขายโครงการ
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Hero Title */}
        <div className="max-w-3xl space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Architectural Knowledge Hub
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            คลังความรู้วัสดุปิดผิวสถาปัตยกรรม & เทคนิควิศวกรรมอาคาร
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            เจาะลึกมาตรฐานวัสดุเปลือกอาคาร (Facade), นวัตกรรมหินวีเนียร์ MCM, การเลือกอลูมิเนียมคอมโพสิตกันไฟลาม Class A2, 
            ฝ้าอลูมิเนียมเส้นยาว 85C/85F และแผ่นไฟเบอร์ซีเมนต์ NICHIHA ญี่ปุ่น เพื่อช่วยสถาปนิกและผู้รับเหมาควบคุมงบและมาตรฐานโครงการอย่างสมบูรณ์แบบ
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition group flex flex-col justify-between shadow-xl"
            >
              <Link href={`/supper-surface/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden bg-slate-950">
                <Image
                  src={post.featuredImage}
                  alt={post.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 border border-amber-500/30 text-amber-400 text-xs px-2.5 py-1 rounded-lg backdrop-blur-md font-semibold">
                  {post.categoryName}
                </div>
              </Link>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" /> {post.author}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-amber-300 transition">
                    <Link href={`/supper-surface/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {post.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Fameline Knowledge
                  </span>
                  <Link
                    href={`/supper-surface/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
                  >
                    <span>อ่านบทความเต็ม</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Back to Products CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            ต้องการใบเสนอราคาและตัวอย่างชิ้นงานจริงสำหรับโครงการของคุณ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            เข้าชมหน้าหลัก Supper Surface พร้อมระบบเลือกซื้อผ่าน MiniMall หรือติดต่อคุณแอล (เสาวลักษณ์ นุ่นหนู) โทร. 066-168-5157
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/supper-surface#minimall-catalog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow transition"
            >
              <span>ไปที่ MiniMall แคตตาล็อก</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={salePhoneCallUrl}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>โทร. 066-168-5157</span>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
