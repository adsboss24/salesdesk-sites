'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Calendar, 
  BookOpen,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { Post, mergeWithRemotePosts } from '@/lib/posts';

interface ArticleSliderProps {
  posts: Post[];
}

export default function ArticleSlider({ posts: initialPosts }: ArticleSliderProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let active = true;
    fetch('https://seo.salesdesk-ai.com/api/seo/posts?client=all', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (active && data?.success && Array.isArray(data.posts)) {
          setPosts(mergeWithRemotePosts(data.posts));
        }
      })
      .catch(() => {
        // Keep initialPosts if offline
      });
    return () => {
      active = false;
    };
  }, []);

  const checkScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Calculate active slide index roughly
    const cardWidth = sliderRef.current.firstElementChild
      ? (sliderRef.current.firstElementChild as HTMLElement).clientWidth + 24
      : clientWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), posts.length - 1));
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    checkScrollState();
    slider.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);

    return () => {
      slider.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, [posts.length]);

  const scrollToDirection = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 24
      : 360;

    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 24
      : 360;

    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  if (!posts || posts.length === 0) return null;

  return (
    <section 
      id="articles" 
      aria-label="คลังความรู้และกลยุทธ์เซลเพจปิดการขาย"
      className="py-20 md:py-28 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-teal-500/10 via-cyan-500/5 to-indigo-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Knowledge Hub & Conversion Secrets</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              คลังความรู้ & กลยุทธ์เจาะลึก <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400">
                สู่การติดหน้า 1 Google และยอดขายปิดอัตโนมัติ
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              อัปเดตกลยุทธ์สถาปัตยกรรมเว็บไซต์ความเร็วสูง 0.8 วิ จิตวิทยาปิดการขาย 16:9 และระบบ Meta CAPI Data Tracking ครบวงจร เพื่อสร้างความได้เปรียบทางธุรกิจอย่างยั่งยืน
            </p>
          </div>

          {/* Desktop Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-xs font-bold text-slate-200 hover:text-teal-300 transition shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-teal-400" />
              <span>ดูบทความทั้งหมด ({posts.length})</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToDirection('left')}
                disabled={!canScrollLeft}
                aria-label="เลื่อนบทความไปทางซ้าย"
                className={`p-3 rounded-xl border transition flex items-center justify-center cursor-pointer ${
                  canScrollLeft
                    ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800 hover:border-teal-400 shadow-md'
                    : 'bg-slate-950/50 border-slate-800 text-slate-600 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollToDirection('right')}
                disabled={!canScrollRight}
                aria-label="เลื่อนบทความไปทางขวา"
                className={`p-3 rounded-xl border transition flex items-center justify-center cursor-pointer ${
                  canScrollRight
                    ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800 hover:border-teal-400 shadow-md'
                    : 'bg-slate-950/50 border-slate-800 text-slate-600 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Card Slider Scroll Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posts.map((post, idx) => (
            <article
              key={post.id}
              className="group relative snap-start shrink-0 w-[86vw] sm:w-[380px] lg:w-[410px] bg-slate-900/70 border border-slate-800/80 hover:border-teal-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 backdrop-blur-sm"
            >
              <div>
                {/* 16:9 Image Preview with Hover Zoom */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800">
                  <Image
                    src={post.featuredImage}
                    alt={post.imageAlt || post.title}
                    fill
                    unoptimized={post.featuredImage.includes('/api/seo/cover')}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 380px, 410px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={idx < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Badge Floating on Image */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/85 backdrop-blur-md text-teal-300 border border-teal-500/30 shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Reading Time Pill */}
                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm text-[11px] font-medium text-slate-300 border border-slate-800">
                    <Clock className="w-3 h-3 text-teal-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  {/* Publish Date */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('th-TH', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors duration-200 line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Description / Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-300/85 line-clamp-2 leading-relaxed">
                    {post.metaDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 text-xs font-bold shrink-0">
                    SD
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold text-slate-200 truncate">{post.author}</p>
                    <p className="text-[10px] text-teal-400/90 truncate">{post.authorRole}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 group/link transition shrink-0"
                  aria-label={`อ่านบทความ ${post.title}`}
                >
                  <span>อ่านเจาะลึก</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Navigation Indicators & Mobile Link */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Progress / Dot Indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="ตัวเลือกสไลด์บทความ">
            {posts.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`ไปยังบทความที่ ${idx + 1}`}
                role="tab"
                aria-selected={activeIndex === idx}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? 'w-8 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 shadow-sm shadow-teal-500/50'
                    : 'w-2 h-2 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Mobile View All Link */}
          <Link
            href="/blog"
            className="sm:hidden inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-teal-400 hover:bg-slate-800 transition"
          >
            <BookOpen className="w-4 h-4" />
            <span>เข้าสู่คลังความรู้ & บทความทั้งหมด ({posts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
