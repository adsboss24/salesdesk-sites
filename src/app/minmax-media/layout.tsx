import type { Metadata } from 'next';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'MinMax Media Event Agency | รับทำการตลาดครบวงจร พร้อมปั้นแบรนด์',
  description:
    'เอเจนซี่การตลาดและอีเวนต์ครบวงจร วางกลยุทธ์แบรนด์ โปรดักชั่นวิดีโอ กราฟิกดีไซน์ คอนเทนต์สร้างยอดขาย จัดหาอินฟลูเอนเซอร์ KOL/KOC ดูแลโซเชียลมีเดียทุกช่องทาง และวางกลยุทธ์แอดโฆษณาวัดผล ROI สูงสุด โดยทีมงานมืออาชีพ MinMax Media ติดต่อ LINE: @malakor',
  canonicalPath: '/minmax-media',
  ogImage: '/images/minmax/hero-16-9.jpg',
  keywords: [
    'MinMax Media',
    'MinMax Media Event Agency',
    'รับทำการตลาดครบวงจร',
    'เอเจนซี่การตลาดครบวงจร',
    'รับยิงแอดโฆษณา',
    'วางกลยุทธ์การตลาด',
    'โปรดักชั่นวิดีโอและกราฟิก',
    'คอนเทนต์ครีเอเตอร์',
    'จัดหาอินฟลูเอนเซอร์ KOL KOC',
    'ดูแลเพจ Facebook TikTok IG',
    'พร้อมปั้นแบรนด์',
  ],
});

export default function MinMaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
