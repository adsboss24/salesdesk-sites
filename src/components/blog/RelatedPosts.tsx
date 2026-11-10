import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { getRelatedPosts } from '@/lib/posts';

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const related = getRelatedPosts(currentSlug, 2);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-slate-800 bg-slate-950/60 py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">บทความกลยุทธ์ที่คุณอาจสนใจ</h3>
          <Link 
            href="/blog" 
            className="text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 transition"
          >
            <span>ดูบทความทั้งหมด</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="group bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 rounded-2xl overflow-hidden transition-all duration-300 p-4 space-y-3 flex flex-col justify-between shadow-lg"
            >
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-800">
                <Image
                  src={item.featuredImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition line-clamp-2">
                  {item.title}
                </h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>อ่าน {item.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
