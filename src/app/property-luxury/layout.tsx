import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Grand Residence — คฤหาสน์หรูสไตล์โมเดิร์นทรอปิคอล พร้อมพูลวิลล่าส่วนตัว',
  description:
    'สัมผัสการอยู่อาศัยระดับ Ultra Luxury บนทำเลศักยภาพ เอกสิทธิ์เพียง 18 ครอบครัว สระว่ายน้ำส่วนตัว ฟังก์ชันครบครัน นัดหมายเข้าชมโครงการแบบ Private Viewing',
  keywords: [
    'The Grand Residence',
    'บ้านหรู',
    'พูลวิลล่า กรุงเทพ',
    'คฤหาสน์หรู',
    'เซลเพจขายอสังหาริมทรัพย์',
  ],
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
