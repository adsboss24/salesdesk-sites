import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ศูนย์บริการรถพยาบาล 24 ชั่วโมง | รถพยาบาลเอกชน รับ-ส่ง เคลื่อนย้ายผู้ป่วยทั่วไทย 24HR Ambulance Service Center',
  description: 'บริการรถพยาบาลฉุกเฉินและเคลื่อนย้ายผู้ป่วย 24 ชั่วโมง รับ-ส่งฟอกไต พบแพทย์ตามนัด ย้ายโรงพยาบาล ส่งต่อกลับภูมิลำเนาทั่วไทย และลำเลียงทางอากาศยาน (Air Ambulance) มาตรฐานความปลอดภัยระดับสากล อุปกรณ์ ICU เคลื่อนที่ครบครัน โทร 088-789-9832',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
