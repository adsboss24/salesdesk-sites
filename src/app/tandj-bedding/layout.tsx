import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'T&J BEDDING | โรงงานผลิตและจำหน่ายชุดเครื่องนอนโรงแรม รีสอร์ท ครบวงจร',
  description: 'ผู้ผลิตและนำเข้าชุดเครื่องนอนเกรดโรงแรม รีสอร์ท พูลวิลล่า คุณภาพมาตรฐานสากล ส่งตรงจากโรงงาน ประสบการณ์กว่า 30 ปี หมอนขนห่านเทียม ผ้าปูที่นอนซาตินริ้ว ผ้านวม Topper ผ้าขนหนูโรงแรม "งบจำกัด จัดให้ได้" โทร. 086-4614614',
  openGraph: {
    title: 'T&J BEDDING | ผลิตและจำหน่ายชุดเครื่องนอนเกรดโรงแรม ส่งตรงจากโรงงาน',
    description: 'ยกระดับห้องพักโรงแรม 5 ดาว ในราคาต้นทุนโรงงานตัวจริง "งบจำกัด จัดให้ได้" ส่งตัวอย่างผ้าฟรีทั่วประเทศ',
    images: ['/images/tandj-hero.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
