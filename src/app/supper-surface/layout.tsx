import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supper Surface by Fameline | ผู้นำนวัตกรรมวัสดุปิดผิวสถาปัตยกรรมระดับพรีเมียม',
  description: 'Supper Surface โดย บจก. เฟมไลน์ โปร์ดักส์ (FAMELINE PRODUCTS CO., LTD.) ศูนย์รวมนวัตกรรมวัสดุปิดผิวสถาปัตยกรรมระดับไฮเอนด์ หินวีเนียร์ MCM, ไม้เทียม WPC, ฝ้าอลูมิเนียม 85C/85F, ระแนงอลูมิเนียม Louver, อลูมิเนียมคอมโพสิต DECO & ALTEX, แผ่นไฟเบอร์ซีเมนต์ NICHIHA ญี่ปุ่น ขอใบเสนอราคาด่วน โทร. 066-168-5157 (คุณแอล)',
  keywords: [
    'Supper Surface',
    'Fameline',
    'บจก. เฟมไลน์ โปร์ดักส์',
    'หินวีเนียร์ MCM',
    'หินแผ่นบาง',
    'ไม้เทียม WPC',
    'ฝ้า 85 C',
    'ฝ้า 85 F',
    'ระแนงอลูมิเนียม',
    'อลูมิเนียมคอมโพสิต DECO',
    'อลูมิเนียมคอมโพสิต ALTEX',
    'แผ่นไฟเบอร์ซีเมนต์นิชิฮะ',
    'NICHIHA',
    'วัสดุตกแต่งผนัง',
    'Facade อลูมิเนียม',
    'ขอใบเสนอราคาวัสดุก่อสร้าง',
  ],
  openGraph: {
    title: 'Supper Surface by Fameline | นวัตกรรมวัสดุปิดผิวสถาปัตยกรรมเกรดพรีเมียม',
    description: 'เลือกชมแคตตาล็อกวัสดุปิดผิวอาคาร หินวีเนียร์ MCM คอมโพสิต ฝ้า ระแนง นิชิฮะ พร้อมระบบขอใบเสนอราคาและสั่งซื้อในนามบริษัท โทร. 066-168-5157',
    images: ['/images/suppersurface/hero-cinematic.jpg'],
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
