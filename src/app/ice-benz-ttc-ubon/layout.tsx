import type { Metadata } from 'next';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'smart EV Thailand • smart #1 & smart #3 (100% EV) | Smart TTC Motor Ubon by Ice',
  description:
    'สัมผัสยนตรกรรมไฟฟ้าพรีเมียม 100% smart #1 และ smart #3 ดีไซน์โดย Mercedes-Benz มอเตอร์คู่ 428 แรงม้า อัตราเร่ง 0-100 ใน 3.7 วินาที พร้อมแพ็กเกจวารันตีแบตเตอรี่ 8 ปี ฟรี Home Wallbox และบริการส่งรถทดลองขับ Test Drive ถึงบ้าน โดย คุณไอซ์ Smart TTC Motor Ubon (โทร 065-214-2747)',
  canonicalPath: '/ice-benz-ttc-ubon',
  ogImage: '/images/benz/smart-real.jpg',
  keywords: [
    'smart EV Thailand',
    'smart #1',
    'smart #3',
    'smart BRABUS',
    'รถยนต์ไฟฟ้า smart เบนซ์',
    'smart TTC Motor อุบลราชธานี',
    'ทดลองขับ smart EV ถึงบ้าน',
    'ราคารถ smart 1',
    'ราคารถ smart 3',
    'คุณไอซ์ smart TTC',
    'Thonburi Group smart',
  ],
});

export default function IceBenzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
