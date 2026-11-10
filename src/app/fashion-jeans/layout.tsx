import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DADA Lady Jeans — กางเกงยีนส์พรีเมียมทรงสวย เก็บทรงเป๊ะ สำหรับผู้หญิงยุคใหม่',
  description:
    'สัมผัสความมั่นใจกับ DADA Lady Jeans ทรงเอวสูง ขากระบอกโมเดิร์น ผ้ายีนส์พรีเมียมยืดหยุ่นสบาย การันตีคุณภาพพร้อมส่งฟรีและบริการเก็บเงินปลายทาง',
  keywords: [
    'DADA Lady Jeans',
    'กางเกงยีนส์ผู้หญิง',
    'ยีนส์เอวสูง',
    'กางเกงยีนส์ขากระบอก',
    'เซลเพจขายเสื้อผ้า',
  ],
};

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
