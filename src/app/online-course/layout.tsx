import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Business Scaling Masterclass — ปลดล็อกยอดขาย 10 เท่า ด้วยระบบ AI ปิดการขายอัตโนมัติ',
  description:
    'คอร์สออนไลน์เข้มข้นที่จะเปลี่ยนธุรกิจคุณให้ทำงานแบบอัตโนมัติ สร้างระบบ Lead Engine, AI Chatbot และเซลเพจปิดการขาย 24 ชม. ถ่ายทอดจากประสบการณ์จริง',
  keywords: [
    'คอร์สสอนยิงแอด',
    'คอร์สออนไลน์',
    'AI ปิดการขาย',
    'การตลาดออนไลน์',
    'เซลเพจขายคอร์ส',
  ],
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
