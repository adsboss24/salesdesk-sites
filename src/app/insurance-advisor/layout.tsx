import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'คุณปรียาพร (MDRT) — ที่ปรึกษาการเงินและวางแผนประกันชีวิตเฉพาะบุคคล',
  description:
    'วางแผนประกันสุขภาพเหมาจ่าย ประกันโรคร้ายแรง และมรดกครอบครัวอย่างรอบคอบ โดยที่ปรึกษาคุณวุฒิระดับโลก MDRT ออกแบบแผนที่คุ้มค่าตรงเป้าหมายคุณ',
  keywords: [
    'ตัวแทนประกันชีวิต',
    'ที่ปรึกษาการเงิน MDRT',
    'ประกันสุขภาพเหมาจ่าย',
    'วางแผนมรดก',
    'เซลเพจตัวแทนประกัน',
  ],
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
