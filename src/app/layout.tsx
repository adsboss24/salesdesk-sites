import type { Metadata } from 'next';
import { Noto_Serif_Thai, Noto_Sans_Thai, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const notoSerifThai = Noto_Serif_Thai({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['thai', 'latin'],
  variable: '--font-noto-serif-thai',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SalesDesk Sites — สตูดิโอออกแบบเว็บไซต์และเซลเพจพรีเมียมด้วย AI',
  description:
    'ยกระดับธุรกิจของคุณสู่เว็บไซต์และเซลเพจระดับพรีเมียม โครงสร้าง Cinematic Hero สวยหรู โหลดเร็ว รองรับมือถือ 100% พร้อมระบบปิดการขายอัตโนมัติ',
  keywords: [
    'รับทำเซลเพจ',
    'ออกแบบเว็บไซต์',
    'เซลเพจพรีเมียม',
    'SalesDesk Sites',
    'SalesDesk AI',
    'Salepage',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${notoSerifThai.variable} ${notoSansThai.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 antialiased overflow-x-hidden relative">
        {children}
      </body>
    </html>
  );
}
