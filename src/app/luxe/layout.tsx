import type { Metadata } from 'next';

const siteUrl = 'https://sites.salesdesk-ai.com';

export const metadata: Metadata = {
  title: 'SalesDesk LUXE — Architectural Exhibition & High-Ticket B2B Sales Archetype',
  description:
    'แม่แบบเซลเพจสถาปัตยกรรมระดับ Ultra-Luxury ด้วยระบบ 100vh Slat Accordion Engine สำหรับแบรนด์ไฮเอนด์และอภิมหาโปรเจกต์ โหลดเร็ว 0.5 วินาที ปิดการขายได้จริงด้วย SalesDesk AI Standard',
  alternates: {
    canonical: `${siteUrl}/luxe`,
  },
  openGraph: {
    title: 'SalesDesk LUXE — Architectural Exhibition & High-Ticket B2B Sales Archetype',
    description:
      'นวัตกรรมดีไซน์เซลเพจระดับอภิมหาโปรเจกต์ สไตล์ระแนงสถาปัตย์ 100vh Slat Louvers พร้อมระบบตะกร้าขอใบเสนอราคาทางการ B2B',
    url: `${siteUrl}/luxe`,
    siteName: 'SalesDesk Sites',
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/suppersurface/hero-cinematic.jpg`,
        width: 1200,
        height: 630,
        alt: 'SalesDesk LUXE Architectural Archetype',
      },
    ],
  },
};

export default function LuxeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
