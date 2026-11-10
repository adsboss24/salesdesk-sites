import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.salesdesk-ai.com'),
  title: 'SalesDesk Sites — สตูดิโอออกแบบเว็บไซต์และเซลเพจพรีเมียมด้วย AI',
  description:
    'ยกระดับธุรกิจของคุณสู่เว็บไซต์และเซลเพจระดับพรีเมียม โครงสร้างจิตวิทยาปิดการขาย Cinematic Hero โหลดเร็ว 0.8 วิ รองรับมือถือ 100% พร้อมระบบ Conversion Tracking ครบวงจร',
  alternates: {
    canonical: 'https://www.salesdesk-ai.com',
  },
  openGraph: {
    title: 'SalesDesk Sites — สตูดิโอออกแบบเว็บไซต์และเซลเพจพรีเมียมด้วย AI',
    description:
      'ยกระดับธุรกิจของคุณสู่เว็บไซต์และเซลเพจระดับพรีเมียม โครงสร้างจิตวิทยาปิดการขาย Cinematic Hero โหลดเร็ว 0.8 วิ รองรับมือถือ 100% พร้อมระบบ Conversion Tracking ครบวงจร',
    url: 'https://www.salesdesk-ai.com',
    siteName: 'SalesDesk Sites',
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: '/images/hero-desktop.png',
        width: 1200,
        height: 630,
        alt: 'SalesDesk Sites — สตูดิโอออกแบบเว็บไซต์และเซลเพจพรีเมียมด้วย AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SalesDesk Sites — สตูดิโอออกแบบเว็บไซต์และเซลเพจพรีเมียมด้วย AI',
    description:
      'ยกระดับธุรกิจของคุณสู่เว็บไซต์และเซลเพจระดับพรีเมียม โครงสร้างจิตวิทยาปิดการขาย Cinematic Hero โหลดเร็ว 0.8 วิ รองรับมือถือ 100%',
    images: ['/images/hero-desktop.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
