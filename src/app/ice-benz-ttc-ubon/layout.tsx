import type { Metadata } from 'next';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'น้องไอซ์ เบนซ์ TTC Motor อุบลราชธานี | ที่ปรึกษาการขาย Mercedes-Benz อย่างเป็นทางการ',
  description:
    'ออกรถ Mercedes-Benz & Mercedes-AMG ป้ายแดงกับ น้องไอซ์ TTC Motor อุบลราชธานี ผู้จำหน่ายอย่างเป็นทางการ ดอกเบี้ยพิเศษ ฟรีประกันภัยชั้น 1 บริการทดลองขับ Test Drive ส่งถึงหน้าบ้านทั่วภาคอีสาน โทร 045-475-222',
  canonicalPath: '/ice-benz-ttc-ubon',
  ogImage: '/images/benz/hero-benz.jpg',
  keywords: [
    'เบนซ์อุบล',
    'TTC Motor อุบลราชธานี',
    'น้องไอซ์ เบนซ์ TTC',
    'Mercedes Benz อุบลราชธานี',
    'โปรโมชั่นเบนซ์ป้ายแดง',
    'ทดลองขับเบนซ์อุบล',
    'ศูนย์บริการเบนซ์อุบล',
    'ซื้อเบนซ์ อีสานใต้',
  ],
});

export default function IceBenzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
