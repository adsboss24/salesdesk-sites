import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์ | ผลิตและจำหน่ายชุดเครื่องนอนโรงแรม ครบวงจร',
  description: 'บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์ (SUCCESS LAUNDRY & HOTEL SUPPLIES) ผู้ผลิตและจัดจำหน่ายสิ่งทอ ชุดเครื่องนอน ผ้าปูที่นอน ปลอกนวม Topper และผ้าขนหนูเกรดโรงแรม รีสอร์ท ครบวงจร โทร. 086-461-4614',
  openGraph: {
    title: 'บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์ | SUCCESS LAUNDRY & HOTEL SUPPLIES',
    description: 'สั่งซื้อชุดเครื่องนอนโรงแรมและขอใบเสนอราคาด่วน โทร. 086-461-4614',
    images: ['/images/tandj/success-logo.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
