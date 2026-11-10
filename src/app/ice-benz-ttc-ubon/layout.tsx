import type { Metadata } from 'next';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'ICE LUXURY AUTO | Certified Mercedes-Benz & AMG Performance Specialist',
  description:
    'สัมผัสประสบการณ์ยนตรกรรมระดับพรีเมียม Mercedes-Benz, Mercedes-AMG และ smart EV ป้ายแดง พร้อมแคมเปญพิเศษ ดอกเบี้ย 0% ฟรี MBSP นาน 5 ปี บริการนำรถทดลองขับ Test Drive ส่งถึงหน้าบ้านทั่วประเทศ โดย ICE • ที่ปรึกษาการขายมืออาชีพ ติดต่อ Facebook: Icebenzttcmotorubon โทร 045-475-222',
  canonicalPath: '/ice-benz-ttc-ubon',
  ogImage: '/images/benz/hero-benz.jpg',
  keywords: [
    'ICE LUXURY AUTO',
    'Mercedes Benz Thailand',
    'Mercedes-AMG',
    'smart EV BRABUS',
    'ที่ปรึกษาการขายเบนซ์',
    'ทดลองขับเบนซ์ถึงบ้าน',
    'โปรโมชั่นเบนซ์ป้ายแดง',
    'MBSP 5 ปี',
    'Trade-in รถเก่าแลกเบนซ์',
  ],
});

export default function IceBenzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
