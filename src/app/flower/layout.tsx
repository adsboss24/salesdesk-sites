import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flower.com | ร้านดอกไม้พรีเมียม & บริการส่งด่วนระดับเวิลด์คลาส Same-Day 2 ชม.',
  description: 'บูทีกดอกไม้พรีเมียมอันดับ 1 คัดสรรดอกไม้นำเข้าเกรด A+ จากทั่วทุกมุมโลก รังสรรค์โดย Master Florist จัดส่งด่วนพิเศษภายใน 2 ชั่วโมง ทั่วกรุงเทพฯ และปริมณฑล',
  keywords: [
    'ร้านดอกไม้พรีเมียม',
    'ส่งดอกไม้ด่วน',
    'Flower delivery Bangkok',
    'ช่อดอกไม้วันเกิด',
    'ช่อดอกไม้รับปริญญา',
    'ช่อกุหลาบนำเข้า',
    'Flower.com',
  ],
  openGraph: {
    title: 'Flower.com | ร้านดอกไม้พรีเมียม & บริการส่งด่วน Same-Day 2 ชม.',
    description: 'รังสรรค์ทุกความรู้สึกด้วยศิลปะแห่งดอกไม้นำเข้าเกรด A+ จัดส่งด่วนตรงเวลา การันตีความสดใหม่ 100%',
    images: ['/images/flower-hero.jpg'],
  },
};

export default function FlowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
