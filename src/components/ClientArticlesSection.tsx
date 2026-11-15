'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface RemoteClientPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  readTime: string;
  featuredImage?: string;
  imageAlt?: string;
  author: string;
  authorRole: string;
  publishedAt: string;
}

interface ClientArticlesSectionProps {
  clientSlug: string;
  brandName: string;
  darkMode?: boolean;
}

export default function ClientArticlesSection({
  clientSlug,
  brandName,
  darkMode = false,
}: ClientArticlesSectionProps) {
  const [articles, setArticles] = useState<RemoteClientPost[]>([]);

  useEffect(() => {
    let active = true;
    fetch(
      `https://seo.salesdesk-ai.com/api/seo/posts?client=${encodeURIComponent(clientSlug)}`,
      { cache: 'no-store' }
    )
      .then((res) => res.json())
      .then((data) => {
        if (active && data?.success && Array.isArray(data.posts)) {
          setArticles(data.posts);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [clientSlug]);

  if (articles.length === 0) return null;

  return (
    <section
      id="articles"
      className={`py-16 md:py-20 border-t ${
        darkMode
          ? 'bg-slate-950 border-slate-800 text-white'
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                darkMode
                  ? 'bg-teal-950 text-teal-300 border border-teal-500/30'
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>คลังความรู้ & บทความเจาะลึก</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              บทความและสาระน่ารู้จาก {brandName}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post) => {
            const coverSrc =
              post.featuredImage && post.featuredImage.startsWith('http')
                ? post.featuredImage
                : post.featuredImage?.startsWith('/api/seo/cover')
                ? `https://seo.salesdesk-ai.com${post.featuredImage}`
                : '/images/covers/cover-salepage-psychology.jpg';

            return (
              <article
                key={post.id || post.slug}
                className={`group relative cursor-pointer rounded-2xl overflow-hidden border transition flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-teal-500/50'
                    : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <img
                      src={coverSrc}
                      alt={post.imageAlt || post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/85 text-teal-300 border border-teal-500/30">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-slate-950/80 text-white text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-teal-400" />
                      <span>{post.readTime || '6 นาที'}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div
                      className={`flex items-center gap-1.5 text-xs ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('th-TH', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold leading-snug line-clamp-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="focus:outline-none after:absolute after:inset-0 after:z-20"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p
                      className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {post.metaDescription}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-5 pt-3 border-t flex items-center justify-between gap-2 ${
                    darkMode ? 'border-slate-800' : 'border-slate-100'
                  }`}
                >
                  <div className="truncate text-xs">
                    <p className="font-bold truncate">{post.author}</p>
                    <p
                      className={`text-[11px] truncate ${
                        darkMode ? 'text-teal-400' : 'text-blue-600'
                      }`}
                    >
                      {post.authorRole}
                    </p>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold shrink-0 ${
                      darkMode ? 'text-teal-400 group-hover:text-teal-300' : 'text-blue-700 group-hover:text-blue-900'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>อ่านเจาะลึก</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
