import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ณัฐนันท์ เนอสซิ่งแคร์ | บ้านพักผู้สูงอายุและศูนย์ฟื้นฟูผู้ป่วยพักฟื้น กรุงเทพฯ',
  description: 'ศูนย์ดูแลผู้สูงอายุและผู้ป่วยพักฟื้น มาตรฐานทางการแพทย์ ดูแลด้วยความอบอุ่นตลอด 24 ชั่วโมง โดยทีมพยาบาลวิชาชีพ สถานที่โปร่งสบาย บรรยากาศร่มรื่น',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
