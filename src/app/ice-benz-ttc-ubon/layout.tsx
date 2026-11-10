import type { Metadata } from 'next';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'ICE LUXURY AUTO | Certified Mercedes-Benz & AMG Performance Specialist',
  description:
    'สัมผัสประสบการณ์ยนตรกรรมระดับพรีเมียม Mercedes-Benz, Mercedes-AMG และ smart EV ป้ายแดง พร้อมข้อเสนอและแคมเปญพิเศษเฉพาะบุคคล บริการนำรถทดลองขับ Test Drive ส่งถึงหน้าบ้านทั่วประเทศ โดย ICE • ที่ปรึกษาการขายมืออาชีพ ติดต่อ Facebook: Icebenzttcmotorubon โทรสายตรง 065-214-2747',
  canonicalPath: '/ice-benz-ttc-ubon',
  ogImage: '/images/benz/hero-benz.jpg',
  keywords: [
    'ICE LUXURY AUTO',
    'Mercedes Benz Thailand',
    'Mercedes-AMG',
    'smart EV BRABUS',
    'ที่ปรึกษาการขายเบนซ์ อุบลราชธานี',
    'ทดลองขับเบนซ์ถึงบ้าน',
    'แคมเปญเบนซ์ป้ายแดง',
    'Trade-in รถเก่าแลกเบนซ์',
    'คุณไอซ์ เบนซ์ อุบล',
  ],
});

export default function IceBenzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
