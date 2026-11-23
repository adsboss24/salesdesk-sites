'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  Clock,
  Sparkles,
  Award,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  Calendar,
  Send,
  HelpCircle,
  ExternalLink,
  Star,
  MapPin,
  Car,
  Zap,
  Gauge,
  Fuel,
  KeyRound,
  FileText,
  BadgePercent,
  SlidersHorizontal,
  ChevronDown,
  Mail,
  Loader2,
  BookOpen,
  ArrowRight,
  Menu,
  X,
  BatteryCharging,
  Cpu,
  Layers,
  Volume2,
} from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { getAllBenzPosts } from '@/lib/benz-posts';

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// 4 Official Documents provided by Thonburi Group
const officialDocuments = [
  {
    id: 'doc-summary',
    title: '0_smart product 1-page summary',
    category: 'Product Summary',
    description: 'เอกสารสรุปสเปกและฟังก์ชันไฮไลต์ของ smart #1 และ smart #3 ใน 1 หน้า เข้าใจง่าย ครบถ้วนทุกจุดเด่น',
    uniqueId: '83d25e4c-97af-43a1-ad12-ee24b7438e70',
    embedUrl:
      'https://computertbg-my.sharepoint.com/personal/athinut_tra_thonburi_com/_layouts/15/embed.aspx?UniqueId=83d25e4c-97af-43a1-ad12-ee24b7438e70',
  },
  {
    id: 'doc-handbook',
    title: '0_smart product handbook',
    category: 'Product Handbook',
    description: 'คู่มือผลิตภัณฑ์ smart ฉบับละเอียด เจาะลึกระบบขับเคลื่อน แพลตฟอร์ม SEA และระบบอัจฉริยะ',
    uniqueId: '6ba9e14a-0b13-4e69-a421-3ec4e8276aba',
    embedUrl:
      'https://computertbg-my.sharepoint.com/personal/athinut_tra_thonburi_com/_layouts/15/embed.aspx?UniqueId=6ba9e14a-0b13-4e69-a421-3ec4e8276aba',
  },
  {
    id: 'doc-th',
    title: 'smart Feature List (ภาษาไทย)',
    category: 'Feature Matrix (TH)',
    description: 'ตารางเทียบออปชันและอุปกรณ์มาตรฐานทุกรุ่นย่อย (Pro+, Premium, BRABUS) ฉบับภาษาไทยอย่างเป็นทางการ',
    uniqueId: '77752cfd-c074-4642-b351-cda90345ed7b',
    embedUrl:
      'https://computertbg-my.sharepoint.com/personal/athinut_tra_thonburi_com/_layouts/15/embed.aspx?UniqueId=77752cfd-c074-4642-b351-cda90345ed7b',
  },
  {
    id: 'doc-en',
    title: 'smart Feature List (English)',
    category: 'Feature Matrix (EN)',
    description: 'Official comprehensive specification and standard equipment comparison matrix across all smart models in English',
    uniqueId: 'a4bd9366-2e97-4b51-821f-c47369b15129',
    embedUrl:
      'https://computertbg-my.sharepoint.com/personal/athinut_tra_thonburi_com/_layouts/15/embed.aspx?UniqueId=a4bd9366-2e97-4b51-821f-c47369b15129',
  },
];

export default function SmartEVMinimalPremiumPage() {
  // Official Verified Contact Info
  const realPhone = '065-214-2747';
  const realPhoneRaw = '0652142747';
  const realEmail = 'amita.lc@benzttc.com';
  const fbPageUrl = 'https://www.facebook.com/Icebenzttcmotorubon/';
  const fbMessengerUrl = 'https://m.me/Icebenzttcmotorubon';
  const lineUrl = 'https://line.me/ti/p/vVYnqZPQYz';
  const tiktokUrl = 'https://www.tiktok.com/@icebenzttcmotorubon';
  const showroomAddress = '365 หมู่ 14 ถนนชยางกูร ตำบลขามใหญ่ อำเภอเมืองอุบลราชธานี จังหวัดอุบลราชธานี 34000';

  // Interactive Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    modelInterest: 'smart #3 BRABUS (428 แรงม้า AWD)',
    serviceType: 'จองคิวทดลองขับ Test Drive ถึงที่บ้าน',
    location: 'อุบลราชธานี หรือจังหวัดใกล้เคียง',
    preferredDate: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCarFilter, setActiveCarFilter] = useState<'all' | 'smart1' | 'smart3' | 'brabus'>('all');
  const [activeDocTab, setActiveDocTab] = useState(0);
  const [activeSpecCategory, setActiveSpecCategory] = useState<'performance' | 'battery' | 'exterior' | 'interior' | 'adas'>('performance');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [articles, setArticles] = useState(() => getAllBenzPosts());

  useEffect(() => {
    let active = true;
    fetch('https://seo.salesdesk-ai.com/api/seo/posts?client=ice-benz-ttc-ubon', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (active && data?.success && Array.isArray(data.posts) && data.posts.length > 0) {
          import('@/lib/benz-posts').then(({ mergeWithRemoteBenzPosts }) => {
            if (active) setArticles(mergeWithRemoteBenzPosts(data.posts));
          });
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  // Carousel slider state for Articles Hub
  const articleSliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeArticleIndex, setActiveArticleIndex] = useState(0);

  const updateScrollState = () => {
    if (!articleSliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = articleSliderRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    const itemWidth = 380 + 24;
    const idx = Math.round(scrollLeft / itemWidth);
    setActiveArticleIndex(Math.min(Math.max(idx, 0), articles.length - 1));
  };

  const slideArticles = (direction: 'left' | 'right') => {
    if (!articleSliderRef.current) return;
    const container = articleSliderRef.current;
    const scrollStep = container.clientWidth > 640 ? 410 : container.clientWidth * 0.88;
    container.scrollBy({
      left: direction === 'left' ? -scrollStep : scrollStep,
      behavior: 'smooth',
    });
  };

  const scrollToArticle = (index: number) => {
    if (!articleSliderRef.current) return;
    const container = articleSliderRef.current;
    const card = container.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('กรุณากรอกชื่อ-นามสกุล และเบอร์โทรศัพท์ติดต่อกลับครับ');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          pageSource: 'Smart TTC Motor Ubon - by Ice (smart EV Minimal Premium)',
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Data Schema for smart EV Auto Dealer
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    '@id': 'https://sites.salesdesk-ai.com/ice-benz-ttc-ubon#dealer',
    name: 'Smart TTC Motor Ubon - By Ice Sales Executive',
    image: 'https://sites.salesdesk-ai.com/images/benz/smart-real.jpg',
    telephone: realPhone,
    email: realEmail,
    url: 'https://sites.salesdesk-ai.com/ice-benz-ttc-ubon',
    sameAs: [fbPageUrl, tiktokUrl],
    priceRange: '฿฿฿฿฿',
    address: {
      '@type': 'PostalAddress',
      streetAddress: showroomAddress,
      addressLocality: 'อำเภอเมือง',
      addressRegion: 'อุบลราชธานี',
      postalCode: '34000',
      addressCountry: 'TH',
    },
    description:
      'ผู้แทนจำหน่ายและที่ปรึกษาการขายอย่างเป็นทางการ smart #1 และ smart #3 รถยนต์ไฟฟ้า 100% พรีเมียมในเครือ Mercedes-Benz & Geely พร้อมข้อเสนอพิเศษ ฟรี Home Wallbox และบริการนำรถทดลองขับถึงหน้าบ้านคุณ',
  };

  // Complete 6 Variants Lineup
  const smartLineup = [
    {
      id: 'smart-3-brabus',
      modelGroup: 'smart3',
      isBrabus: true,
      name: 'smart #3 BRABUS Edition',
      subtitle: 'Aerodynamic Hyper-EV SUV Coupé',
      badge: 'เรือธง 428 แรงม้า AWD',
      price: '1,949,000 บาท',
      downPayment: 'ฟรี Home Wallbox พร้อมติดตั้ง + รับประกันแบตเตอรี่ 8 ปี',
      image: '/images/benz/smart-real.jpg',
      specs: [
        { label: 'พละกำลังสูงสุด', val: '428 แรงม้า (Dual Motor)' },
        { label: 'อัตราเร่ง 0-100', val: '3.7 วินาที' },
        { label: 'แรงบิดสูงสุด', val: '543 นิวตันเมตร' },
        { label: 'ระยะทางวิ่ง WLTP', val: '415 กิโลเมตร' },
        { label: 'ระบบขับเคลื่อน', val: 'All-Wheel Drive (AWD)' },
        { label: 'ชุดแต่งพิเศษ', val: 'BRABUS Aero & Alcantara' },
      ],
      highlights: ['Launch Control System', 'ล้อสปอร์ต BRABUS 20 นิ้ว', 'คาลิปเปอร์เบรกสีแดง', 'เสียงสังเคราะห์ BRABUS Sound'],
    },
    {
      id: 'smart-1-brabus',
      modelGroup: 'smart1',
      isBrabus: true,
      name: 'smart #1 BRABUS Edition',
      subtitle: 'Urban Performance Compact SUV',
      badge: 'Compact Rocket 3.9s',
      price: '1,849,000 บาท',
      downPayment: 'ฟรี ประกันภัยชั้น 1 + ฟรี Wallbox Charger',
      image: '/images/benz/smart-ev.jpg',
      specs: [
        { label: 'พละกำลังสูงสุด', val: '428 แรงม้า (Dual Motor)' },
        { label: 'อัตราเร่ง 0-100', val: '3.9 วินาที' },
        { label: 'แรงบิดสูงสุด', val: '543 นิวตันเมตร' },
        { label: 'ระยะทางวิ่ง WLTP', val: '400 กิโลเมตร' },
        { label: 'ระบบขับเคลื่อน', val: 'All-Wheel Drive (AWD)' },
        { label: 'ชุดแต่งพิเศษ', val: 'BRABUS Aero 19 นิ้ว' },
      ],
      highlights: ['โหมดขับขี่ BRABUS Mode', 'เบาะหนัง Alcantara & Microfiber', 'ไฟหน้า Matrix LED', 'หลังคา Panoramic Halo Roof'],
    },
    {
      id: 'smart-3-premium',
      modelGroup: 'smart3',
      isBrabus: false,
      name: 'smart #3 Premium',
      subtitle: 'Long-Range Luxury SUV Coupé',
      badge: 'วิ่งไกล 455 กม. WLTP',
      price: '1,699,000 บาท',
      downPayment: 'ดอกเบี้ยพิเศษ เริ่มต้นดาวน์ 10% หรือผ่อนสบาย',
      image: '/images/benz/smart-real.jpg',
      specs: [
        { label: 'พละกำลังสูงสุด', val: '272 แรงม้า (200 kW)' },
        { label: 'อัตราเร่ง 0-100', val: '5.8 วินาที' },
        { label: 'ระยะทางวิ่ง WLTP', val: '455 กิโลเมตร' },
        { label: 'อินเวอร์เตอร์', val: 'Silicon Carbide (SiC)' },
        { label: 'ระบบชาร์จ DC', val: '10-80% ใน 29 นาที' },
        { label: 'ระบบเสียง', val: 'Beats Audio 13 ลำโพง' },
      ],
      highlights: ['ปั๊มความร้อน Heat Pump', 'Head-Up Display 10 นิ้ว', 'หลังคา Halo Roof กันรังสี UV', 'smart Pilot Assist L2+'],
    },
    {
      id: 'smart-1-premium',
      modelGroup: 'smart1',
      isBrabus: false,
      name: 'smart #1 Premium',
      subtitle: 'Urban Chic Luxury SUV',
      badge: 'รุ่นยอดนิยม Full Option',
      price: '1,599,000 บาท',
      downPayment: 'ฟรี ประกันภัยชั้น 1 + ฟรี Wallbox Charger',
      image: '/images/benz/smart-ev.jpg',
      specs: [
        { label: 'พละกำลังสูงสุด', val: '272 แรงม้า (200 kW)' },
        { label: 'อัตราเร่ง 0-100', val: '6.7 วินาที' },
        { label: 'ระยะทางวิ่ง WLTP', val: '440 กิโลเมตร' },
        { label: 'ระบบไฟหน้า', val: 'CyberSparks Matrix LED' },
        { label: 'ระบบเสียง', val: 'Beats Audio 13 ลำโพง' },
        { label: 'เบาะนั่ง', val: 'หนังแท้ปรับอุณหภูมิได้' },
      ],
      highlights: ['เทคโนโลยี SiC Inverter', 'ประตูไร้กรอบ Frameless', 'ไฟ Ambient Light 64 สี', 'ระบบถอยจอดอัตโนมัติ 360°'],
    },
    {
      id: 'smart-3-pro-plus',
      modelGroup: 'smart3',
      isBrabus: false,
      name: 'smart #3 Pro+',
      subtitle: 'Sleek & Aerodynamic Fastback',
      badge: 'ดีไซน์คูเป้ Cd 0.27',
      price: '1,499,000 บาท',
      downPayment: 'ออกรถง่าย จัดไฟแนนซ์สะดวก รู้ผลใน 24 ชม.',
      image: '/images/benz/smart-real.jpg',
      specs: [
        { label: 'พละกำลังสูงสุด', val: '272 แรงม้า (200 kW)' },
        { label: 'อัตราเร่ง 0-100', val: '5.8 วินาที' },
        { label: 'แบตเตอรี่', val: '66 kWh NCM Battery' },
        { label: 'ระยะทางวิ่ง WLTP', val: '435 กิโลเมตร' },
        { label: 'สัมประสิทธิ์แรงต้าน', val: 'Cd 0.27 ลู่ลมสูงสุด' },
        { label: 'หน้าจอสัมผัส', val: '12.8 นิ้ว ชิป Snapdragon' },
      ],
      highlights: ['มือจับประตูซ่อนอัตโนมัติ', 'หลังคากระจก Panoramic Roof', 'กล้องมองภาพรอบทิศทาง 360°', 'ระบบช่วยขับขี่อัจฉริยะ L2+'],
    },
    {
      id: 'smart-1-pro-plus',
      modelGroup: 'smart1',
      isBrabus: false,
      name: 'smart #1 Pro+',
      subtitle: 'Modern Minimalist Pure EV',
      badge: 'ราคาเริ่มต้นคุ้มค่าที่สุด',
      price: '1,399,000 บาท',
      downPayment: 'เริ่มต้นเพียง 1.399 ล้าน หรือเลือกรับข้อเสนอดอกเบี้ยต่ำ',
      image: '/images/benz/smart-ev.jpg',
      specs: [
        { label: 'พละกำลังสูงสุด', val: '272 แรงม้า (200 kW)' },
        { label: 'อัตราเร่ง 0-100', val: '6.7 วินาที' },
        { label: 'แบตเตอรี่', val: '66 kWh NCM Battery' },
        { label: 'ระยะทางวิ่ง WLTP', val: '420 กิโลเมตร' },
        { label: 'ระบบชาร์จ DC', val: '150 kW Fast Charge' },
        { label: 'ล้ออัลลอย', val: 'ขนาด 19 นิ้ว ทูโทน' },
      ],
      highlights: ['ดีไซน์โดย Mercedes-Benz', 'ระบบผู้ช่วยเสียง AI Avatar', 'รองรับ Apple CarPlay & Android Auto', 'รับประกันแบตเตอรี่ 8 ปี'],
    },
  ];

  const filteredCars = smartLineup.filter((car) => {
    if (activeCarFilter === 'all') return true;
    if (activeCarFilter === 'smart1') return car.modelGroup === 'smart1';
    if (activeCarFilter === 'smart3') return car.modelGroup === 'smart3';
    if (activeCarFilter === 'brabus') return car.isBrabus;
    return true;
  });

  // Feature Comparison Matrix from Document 3 & 4
  const specMatrixData = {
    performance: [
      { feature: 'ประเภทมอเตอร์ขับเคลื่อน', proPlus: 'Permanent Magnet Synchronous (RWD)', premium: 'Permanent Magnet Synchronous (RWD)', brabus: 'Dual Motors All-Wheel Drive (AWD)' },
      { feature: 'พละกำลังสูงสุด (แรงม้า / kW)', proPlus: '272 hp / 200 kW', premium: '272 hp / 200 kW', brabus: '428 hp / 315 kW (Hyper Performance)' },
      { feature: 'แรงบิดสูงสุด (Nm)', proPlus: '343 Nm', premium: '343 Nm', brabus: '543 Nm' },
      { feature: 'อัตราเร่ง 0-100 กม./ชม. (smart #3)', proPlus: '5.8 วินาที', premium: '5.8 วินาที', brabus: '3.7 วินาที (เร็วที่สุดในคลาส)' },
      { feature: 'อัตราเร่ง 0-100 กม./ชม. (smart #1)', proPlus: '6.7 วินาที', premium: '6.7 วินาที', brabus: '3.9 วินาที' },
      { feature: 'ความเร็วสูงสุด (Top Speed)', proPlus: '180 กม./ชม.', premium: '180 กม./ชม.', brabus: '180 กม./ชม.' },
      { feature: 'โหมดขับขี่พิเศษ (Drive Mode)', proPlus: 'Eco / Comfort / Sport', premium: 'Eco / Comfort / Sport', brabus: 'Eco / Comfort / Sport + BRABUS Mode' },
    ],
    battery: [
      { feature: 'ความจุแบตเตอรี่ (Battery Capacity)', proPlus: '66 kWh (NCM Lithium-ion)', premium: '66 kWh (NCM Lithium-ion)', brabus: '66 kWh (NCM Lithium-ion)' },
      { feature: 'ระยะทางวิ่ง WLTP (smart #3)', proPlus: '435 กิโลเมตร', premium: '455 กิโลเมตร (ไกลที่สุด)', brabus: '415 กิโลเมตร' },
      { feature: 'ระยะทางวิ่ง WLTP (smart #1)', proPlus: '420 กิโลเมตร', premium: '440 กิโลเมตร', brabus: '400 กิโลเมตร' },
      { feature: 'อินเวอร์เตอร์ขับเคลื่อน', proPlus: 'Standard IGBT', premium: 'Silicon Carbide (SiC) Inverter', brabus: 'Dual Silicon Carbide (SiC)' },
      { feature: 'ระบบปั๊มความร้อน (Heat Pump)', proPlus: '—', premium: 'มีติดตั้งมาตรฐาน (ประหยัดไฟ)', brabus: 'มีติดตั้งมาตรฐาน' },
      { feature: 'ระบบชาร์จเร็ว DC Fast Charge (150kW)', proPlus: '10 - 80% ใน 29-30 นาที', premium: '10 - 80% ใน 29-30 นาที', brabus: '10 - 80% ใน 29-30 นาที' },
      { feature: 'ระบบชาร์จไฟบ้าน AC Charging', proPlus: '7.4 kW / 22 kW', premium: '22 kW (เต็มใน ~3 ชม.)', brabus: '22 kW (เต็มใน ~3 ชม.)' },
    ],
    exterior: [
      { feature: 'ระบบไฟหน้าอัจฉริยะ', proPlus: 'CyberSparks LED Headlights', premium: 'CyberSparks Matrix LED Adaptive', brabus: 'CyberSparks Matrix LED Adaptive' },
      { feature: 'ไฟ Daytime Running Light & Light Bar', proPlus: 'มี (เส้นแสงหน้า-หลังเต็มบาน)', premium: 'มี (เส้นแสงหน้า-หลังเต็มบาน)', brabus: 'มี (พร้อมลูกเล่น Welcome Light)' },
      { feature: 'หลังคากระจก Panoramic Halo Roof', proPlus: 'หลังคากระจกบานใหญ่คงที่', premium: 'Panoramic Halo Roof เคลือบกันความร้อน', premiumExtra: 'พร้อมม่านบังแดดไฟฟ้า', brabus: 'Panoramic Halo Roof สไตล์สปอร์ต' },
      { feature: 'ประตูไร้กรอบ (Frameless Doors)', proPlus: 'มี ทุกบาน', premium: 'มี ทุกบาน', brabus: 'มี ทุกบาน' },
      { feature: 'มือจับประตูซ่อนเรียบแนบตัวถัง', proPlus: 'มี (ยื่นออกอัตโนมัติเมื่อปลดล็อก)', premium: 'มี (ยื่นออกอัตโนมัติเมื่อปลดล็อก)', brabus: 'มี (พร้อมไฟส่องสว่าง Logo)' },
      { feature: 'ขนาดล้ออัลลอยและยาง', proPlus: '19 นิ้ว Aero Alloy Wheels', premium: '19 นิ้ว Rotor Style Alloy', brabus: '19" (smart #1) / 20" Synchro (smart #3)' },
      { feature: 'ชุดแต่งสปอร์ตและคาลิปเปอร์เบรก', proPlus: 'Standard Exterior Pack', premium: 'Premium Exterior Styling Pack', brabus: 'BRABUS Aero Bodykit + เบรกแดง' },
    ],
    interior: [
      { feature: 'หน้าจอสัมผัสกลางความละเอียดสูง', proPlus: '12.8 นิ้ว Full HD (ชิป Snapdragon)', premium: '12.8 นิ้ว Full HD (ชิป Snapdragon)', brabus: '12.8 นิ้ว Full HD ธีม BRABUS UI' },
      { feature: 'หน้าจอแสดงผลผู้ขับขี่ Full Digital', proPlus: '9.2 นิ้ว High-Res Display', premium: '9.2 นิ้ว High-Res Display', brabus: '9.2 นิ้ว High-Res Display' },
      { feature: 'หน้าจอแสดงข้อมูลบนกระจกหน้า (HUD)', proPlus: '—', premium: '10.0 นิ้ว Head-Up Display คมชัดสูง', brabus: '10.0 นิ้ว Head-Up Display คมชัดสูง' },
      { feature: 'ระบบเสียงระดับพรีเมียม', proPlus: 'smart Sound System (5 ลำโพง)', premium: 'Beats Audio 13 ลำโพง + Subwoofer', brabus: 'Beats Audio 13 ลำโพง + Subwoofer' },
      { feature: 'ไฟตกแต่งห้องโดยสาร Ambient Light', proPlus: '64 สี ปรับแต่งได้ตามอารมณ์', premium: '64 สี Dual-Zone Dynamic Mode', brabus: '64 สี พร้อมลูกเล่นสปอร์ตเฉพาะ BRABUS' },
      { feature: 'วัสดุหุ้มเบาะและพวงมาลัย', proPlus: 'เบาะหนังสังเคราะห์พรีเมียม', premium: 'เบาะหนังแท้ ปรับไฟฟ้าพร้อม Memory', brabus: 'หนัง Alcantara & Microfiber เดินด้ายแดง' },
      { feature: 'ระบบระบายอากาศเบาะหน้า (Ventilation)', proPlus: '—', premium: 'มี (เบาะอุ่นและเป่าลมเย็น)', brabus: 'มี (เบาะอุ่นและเป่าลมเย็น)' },
    ],
    adas: [
      { feature: 'ระบบขับขี่กึ่งอัตโนมัติ smart Pilot Assist', proPlus: 'Level 2 Autonomous Driving', premium: 'Level 2+ Enhanced Pilot Assist', brabus: 'Level 2+ Enhanced Pilot Assist' },
      { feature: 'ระบบควบคุมความเร็วอัตโนมัติแบบแปรผัน', proPlus: 'Adaptive Cruise Control (Stop & Go)', premium: 'Adaptive Cruise Control (Stop & Go)', brabus: 'Adaptive Cruise Control (Stop & Go)' },
      { feature: 'ระบบช่วยรักษาช่องทางและเปลี่ยนเลน', proPlus: 'Lane Keep Assist & Lane Change Assist', premium: 'Lane Keep Assist & Lane Change Assist', brabus: 'Lane Keep Assist & Lane Change Assist' },
      { feature: 'ระบบช่วยจอดอัตโนมัติ (Parking Assist)', proPlus: 'เซนเซอร์หน้า-หลัง + กล้อง 360°', premium: 'Fully Automatic Parking Assist 360°', brabus: 'Fully Automatic Parking Assist 360°' },
      { feature: 'ระบบเตือนจุดอับสายตาและป้องกันการชน', proPlus: 'Blind Spot Detection & AEB', premium: 'Blind Spot Detection & AEB เต็มระบบ', brabus: 'Blind Spot Detection & AEB เต็มระบบ' },
      { feature: 'ระบบชิปเซ็ตประมวลผล Cockpit', proPlus: 'Qualcomm Snapdragon 8155 (7nm)', premium: 'Qualcomm Snapdragon 8155 (7nm)', brabus: 'Qualcomm Snapdragon 8155 (7nm)' },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-amber-400 selection:text-black pb-12 md:pb-0 w-full max-w-full overflow-x-clip">
      {/* Schema Injection */}
      <StructuredData data={localBusinessSchema} id="smart-ev-ttc-dealer-schema" />

      {/* 1. MINIMAL PREMIUM GLASS NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300 shadow-2xl shadow-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Brand Emblem */}
          <Link href="/ice-benz-ttc-ubon" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-black p-[1px] border border-white/15 flex items-center justify-center group-hover:border-amber-400/50 transition">
              <span className="text-sm sm:text-base font-black tracking-tighter text-white uppercase">
                sm<span className="text-amber-400">a</span>rt
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black tracking-wider text-white uppercase">
                  TTC MOTOR UBON <span className="text-amber-400 font-bold">• BY ICE</span>
                </span>
                <span className="hidden md:inline-block bg-amber-400/10 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/20 whitespace-nowrap">
                  100% EV Specialist
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 hidden sm:block tracking-wide">
                Mercedes-Benz & Geely Joint Venture • Thonburi Partner
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Minimalist Text Style) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide text-zinc-300">
            <a href="#models" className="hover:text-amber-400 transition">รุ่นรถยนต์</a>
            <a href="#spec-matrix" className="hover:text-amber-400 transition">ตารางเปรียบเทียบสเปก</a>
            <a href="#documents" className="hover:text-amber-400 transition">เอกสารทางการ 4 ฉบับ</a>
            <a href="#privileges" className="hover:text-amber-400 transition">สิทธิพิเศษ & วารันตี</a>
            <a href="#booking" className="hover:text-amber-400 transition">นัดทดลองขับ</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${realPhoneRaw}`}
              className="px-3 sm:px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 hover:border-amber-400/50 text-zinc-200 text-xs font-semibold transition flex items-center gap-1.5 active:scale-95"
              aria-label={`โทรสายตรง ${realPhone}`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">โทร {realPhone}</span>
              <span className="sm:hidden">โทรด่วน</span>
            </a>

            <a
              href="#booking"
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs tracking-wide shadow-lg shadow-amber-400/20 transition active:scale-95 whitespace-nowrap"
            >
              นัดทดลองขับ
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-amber-400 flex items-center justify-center transition"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 border-b border-white/10 px-5 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-2xl">
            <nav className="flex flex-col space-y-2.5 text-xs font-medium text-zinc-200 pb-3 border-b border-zinc-800">
              <a
                href="#models"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>🚘 เลือกรุ่นรถยนต์ (smart #1 & #3)</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </a>
              <a
                href="#spec-matrix"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>📊 ตารางเปรียบเทียบสเปกและฟังก์ชัน</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </a>
              <a
                href="#documents"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>📄 ศูนย์รวมเอกสารทางการ 4 ฉบับ</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </a>
              <a
                href="#privileges"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>✨ สิทธิพิเศษ ฟรี Wallbox & วารันตี 8 ปี</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>📅 นัดหมายทดลองขับถึงที่บ้าน</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </a>
            </nav>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl bg-amber-400 text-black font-bold text-xs text-center flex items-center justify-center gap-1.5 transition"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>จองทดลองขับ</span>
              </a>
              <a
                href={fbMessengerUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition"
              >
                <FacebookIcon className="w-3.5 h-3.5 fill-white" />
                <span>ทักแชต Facebook</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Navbar Spacer */}
      <div className="h-16 w-full" />

      {/* 2. CINEMATIC MINIMAL PREMIUM HERO SECTION */}
      <section className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] flex flex-col justify-between overflow-hidden bg-black text-white">
        {/* Full-Bleed 16:9 Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/benz/smart-real.jpg"
            alt="smart EV 100% Electric SUV - Designed by Mercedes-Benz"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-105 contrast-[1.05]"
          />
          {/* Subtle Minimal Scrims */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 via-45% to-black/20" />
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 via-40% to-black/95" />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-20 pb-12 relative z-10 w-full flex-1 flex flex-col justify-between">
          <div className="max-w-2xl space-y-4 text-center lg:text-left mx-auto lg:mx-0">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>100% Electric Vehicles • Designed by Mercedes-Benz</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              smart #1 & smart #3
              <span className="block text-xl sm:text-3xl lg:text-4xl font-extralight tracking-normal text-zinc-300 mt-2">
                ความหรูหราแห่งอนาคต สมรรถนะระดับ BRABUS 428 แรงม้า
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-base text-zinc-300 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              สัมผัสนวัตกรรมยานยนต์ไฟฟ้าระดับพรีเมียมจาก Mercedes-Benz & Geely พร้อมข้อเสนอพิเศษ ฟรี Home Wallbox และบริการส่งรถให้ทดลองขับ Test Drive ถึงหน้าบ้านคุณ โดย คุณไอซ์ Smart TTC Motor Ubon
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full">
              <a
                href="#booking"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-sm tracking-wide shadow-xl shadow-amber-400/25 active:scale-95 transition text-center"
              >
                นัดหมายทดลองขับถึงที่บ้าน &rarr;
              </a>
              <a
                href={fbMessengerUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/15 font-semibold text-sm active:scale-95 transition flex items-center justify-center gap-2"
              >
                <FacebookIcon className="w-4 h-4 fill-blue-500" />
                <span>ทักแชต Facebook คุณไอซ์</span>
              </a>
            </div>

            {/* Trust Checks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1.5 text-xs text-zinc-300 pt-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>รับประกันแบตเตอรี่ 8 ปี / 160,000 กม.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ฟรี Home Wallbox พร้อมติดตั้ง</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>บริการทดลองขับถึงที่ทำงาน/บ้าน</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Bar (4 Highlights) */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
            <div>
              <div className="text-xl sm:text-3xl font-black text-white tracking-tight">428 <span className="text-amber-400 text-base sm:text-xl font-normal">HP</span></div>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">มอเตอร์คู่ All-Wheel Drive (BRABUS)</p>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-black text-white tracking-tight">3.7 <span className="text-amber-400 text-base sm:text-xl font-normal">วินาที</span></div>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">อัตราเร่ง 0-100 กม./ชม. (smart #3)</p>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-black text-white tracking-tight">455 <span className="text-amber-400 text-base sm:text-xl font-normal">กม.</span></div>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">ระยะทางวิ่งสูงสุดต่อชาร์จ (WLTP)</p>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-black text-white tracking-tight">29 <span className="text-amber-400 text-base sm:text-xl font-normal">นาที</span></div>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">ชาร์จด่วน DC 10-80% (150 kW)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND HERITAGE & INNOVATION PILLARS (MINIMALIST 4-GRID) */}
      <section className="py-16 sm:py-20 bg-zinc-950 border-b border-white/10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-2">Pioneering Electric Luxury</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              เอกสิทธิ์การออกแบบโดย Mercedes-Benz ผสานสถาปัตยกรรมไฟฟ้าขั้นสูง
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-amber-400/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Designed by Mercedes-Benz</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                ดีไซน์พรีเมียมจากทีมเยอรมนี โดดเด่นด้วยประตูไร้กรอบ (Frameless Doors), หลังคา Floating Halo Roof และไฟ CyberSparks LED Matrix
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-amber-400/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">SEA Platform Architecture</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                แพลตฟอร์มไฟฟ้า Sustainable Experience Architecture จุดศูนย์ถ่วงต่ำ ความปลอดภัยมาตรฐาน Euro NCAP ระดับ 5 ดาวเต็ม
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-amber-400/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Snapdragon 8155 Cockpit</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                ชิปเซ็ตประมวลผล 7nm เร็วแรง พร้อมหน้าจอสัมผัส 12.8 นิ้ว Full HD, ผู้ช่วยเสียง AI Avatar Fox และเครื่องเสียง Beats Audio 13 ลำโพง
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-amber-400/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">smart Pilot Assist (L2+)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                ระบบขับขี่กึ่งอัตโนมัติ กล้องรอบทิศทาง 360° เรดาร์รอบคัน ระบบรักษาระยะห่าง Stop&Go และระบบถอยจอดอัตโนมัติเต็มรูปแบบ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLETE SMART EV MODEL LINEUP SECTION */}
      <section id="models" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-400/20">
            <Car className="w-3.5 h-3.5" /> Official smart Lineup
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            ยนตรกรรมไฟฟ้า smart ครบทุกรุ่นย่อย พร้อมส่งมอบ
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
            เลือกรุ่นที่ใช่สำหรับไลฟ์สไตล์คุณ ทั้ง Compact Urban SUV (smart #1) และ Aerodynamic SUV Coupé (smart #3) ในรุ่น Pro+, Premium และ BRABUS
          </p>

          {/* Model Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {[
              { id: 'all', label: 'ทุกรุ่นย่อย (6 รุ่น)' },
              { id: 'smart3', label: 'smart #3 (SUV Coupé)' },
              { id: 'smart1', label: 'smart #1 (Urban SUV)' },
              { id: 'brabus', label: 'BRABUS Edition (428 HP)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCarFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                  activeCarFilter === tab.id
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20 font-bold'
                    : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className={`rounded-2xl overflow-hidden bg-zinc-950 border transition duration-300 flex flex-col justify-between ${
                car.isBrabus
                  ? 'border-amber-400/60 shadow-xl shadow-amber-400/10'
                  : 'border-white/10 hover:border-zinc-700'
              }`}
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative h-60 w-full overflow-hidden bg-black">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/30">
                    {car.badge}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{car.name}</h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">{car.subtitle}</p>

                  <div className="my-4 pt-3 border-t border-zinc-800">
                    <div className="text-xl font-black text-amber-400">{car.price}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{car.downPayment}</div>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-black/60 p-3 rounded-xl border border-white/5 mb-4">
                    {car.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] text-zinc-500">{spec.label}</span>
                        <span className="font-semibold text-zinc-200 text-xs">{spec.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1">
                    {car.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href="#booking"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      modelInterest: `${car.name} (${car.price})`,
                    }))
                  }
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs text-center block transition shadow-md cursor-pointer"
                >
                  ขอใบเสนอราคา / นัดทดลองขับรุ่นนี้ &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE FEATURE & SPECIFICATION MATRIX (FROM DOCUMENTS 3 & 4) */}
      <section id="spec-matrix" className="py-20 bg-zinc-950 border-y border-white/10 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-400/20">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Technical Specification Matrix
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              ตารางเปรียบเทียบสเปกและฟังก์ชันอย่างละเอียด
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              ถอดรหัสจากเอกสารทางการ smart Feature List (TH & EN) ให้คุณเปรียบเทียบความแตกต่างระหว่าง Pro+, Premium และ BRABUS ได้ชัดเจน
            </p>

            {/* Category Navigation */}
            <div className="flex items-center justify-center gap-2 mt-6 overflow-x-auto scrollbar-none pb-2 flex-wrap">
              {[
                { id: 'performance', label: '1. ระบบขับเคลื่อน & พละกำลัง' },
                { id: 'battery', label: '2. แบตเตอรี่ & การชาร์จ' },
                { id: 'exterior', label: '3. ภายนอก & ไฟ CyberSparks' },
                { id: 'interior', label: '4. ภายใน & เครื่องเสียง Beats' },
                { id: 'adas', label: '5. ระบบช่วยขับขี่ smart Pilot L2+' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSpecCategory(cat.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                    activeSpecCategory === cat.id
                      ? 'bg-amber-400 text-black font-bold'
                      : 'bg-black text-zinc-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table Container */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-black shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-300">
                    <th className="p-4 font-bold sm:w-1/3">รายการอุปกรณ์และสเปก</th>
                    <th className="p-4 font-bold text-zinc-200 text-center sm:w-1/5">Pro+</th>
                    <th className="p-4 font-bold text-amber-300 text-center sm:w-1/5">Premium</th>
                    <th className="p-4 font-bold text-red-400 text-center sm:w-1/5">BRABUS Edition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850">
                  {specMatrixData[activeSpecCategory].map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/40 transition">
                      <td className="p-4 font-medium text-white">{row.feature}</td>
                      <td className="p-4 text-zinc-300 text-center">{row.proPlus}</td>
                      <td className="p-4 text-amber-200 text-center font-medium">{row.premium}</td>
                      <td className="p-4 text-zinc-100 text-center font-bold">{row.brabus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-zinc-950 border-t border-zinc-800 text-[11px] text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>* อ้างอิงข้อมูลสเปกมาตรฐานผลิตภัณฑ์อย่างเป็นทางการจาก Thonburi Group</span>
              <a href="#documents" className="text-amber-400 hover:underline flex items-center gap-1 font-semibold">
                <span>เปิดดูเอกสาร Feature List ฉบับเต็มด้านล่าง</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OFFICIAL DOCUMENTS & HANDBOOK HUB (ALL 4 SHAREPOINT DOCS) */}
      <section id="documents" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-400/20">
            <FileText className="w-3.5 h-3.5" /> Official Document Hub
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            ศูนย์รวมคู่มือและเอกสารผลิตภัณฑ์ทางการ 4 ฉบับ
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
            รวบรวมเอกสารทางการจาก Thonburi Group ทั้ง Product Summary, Handbook และ Feature List ภาษาไทยและอังกฤษ เพื่อให้ลูกค้าศึกษาได้อย่างโปร่งใส
          </p>

          {/* Document Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
            {officialDocuments.map((doc, idx) => (
              <button
                key={doc.id}
                onClick={() => setActiveDocTab(idx)}
                className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                  activeDocTab === idx
                    ? 'bg-amber-400/10 border-amber-400/60 text-white shadow-lg shadow-amber-400/5'
                    : 'bg-zinc-950 border-white/10 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                  เอกสารฉบับที่ {idx + 1}
                </div>
                <div className="text-xs font-bold text-white line-clamp-1">{doc.title}</div>
                <div className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{doc.category}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Document Viewer Card */}
        <div className="p-5 sm:p-8 rounded-3xl bg-zinc-950 border border-amber-400/40 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  {officialDocuments[activeDocTab].category} • Thonburi Group
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  {officialDocuments[activeDocTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  {officialDocuments[activeDocTab].description}
                </p>
              </div>
            </div>

            <a
              href={officialDocuments[activeDocTab].embedUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 hover:text-amber-300 text-xs sm:text-sm font-semibold border border-white/15 transition self-start sm:self-auto shrink-0"
            >
              <span>เปิดดูเอกสารฉบับเต็ม</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Responsive 16:9 SharePoint Embed Frame */}
          <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-inner">
            <iframe
              src={officialDocuments[activeDocTab].embedUrl}
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title={officialDocuments[activeDocTab].title}
            />
          </div>
        </div>
      </section>

      {/* 7. EXCLUSIVE OWNERSHIP PRIVILEGES & PEACE OF MIND */}
      <section id="privileges" className="py-20 bg-zinc-950 border-y border-white/10 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-400/20">
              <Award className="w-3.5 h-3.5" /> Ownership Privileges
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              สิทธิพิเศษและมาตรฐานการดูแลระดับพรีเมียม
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              อุ่นใจไร้กังวลทุกการเดินทางด้วยการรับประกันแบตเตอรี่สูงสุด 8 ปี พร้อมบริการครบวงจรจาก Smart TTC Motor Ubon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BatteryCharging,
                title: 'High-Voltage Battery Warranty 8 ปี',
                desc: 'รับประกันแบตเตอรี่แรงดันสูงนาน 8 ปี หรือ 160,000 กิโลเมตร มั่นใจในคุณภาพเซลล์แบตเตอรี่ระดับโลก',
              },
              {
                icon: ShieldCheck,
                title: 'Vehicle Warranty 4 ปี',
                desc: 'รับประกันคุณภาพตัวรถนาน 4 ปี หรือ 150,000 กิโลเมตร พร้อมดูแลด้วยช่างเทคนิคผู้เชี่ยวชาญมาตรฐานเยอรมัน',
              },
              {
                icon: Zap,
                title: 'Free Home Wallbox + Installation',
                desc: 'ฟรีเครื่องชาร์จ Home Wallbox มาตรฐานสากล พร้อมทีมช่างสำรวจและติดตั้งระบบไฟฟ้าถึงบ้านท่านอย่างปลอดภัย',
              },
              {
                icon: Car,
                title: 'VIP Home Test Drive',
                desc: 'บริการส่งรถ smart #1 และ smart #3 ไปให้ทดลองขับถึงที่ทำงานหรือหน้าบ้านคุณในอุบลฯ และจังหวัดใกล้เคียง',
              },
              {
                icon: Clock,
                title: '24-Hour Roadside Assistance',
                desc: 'บริการช่วยเหลือฉุกเฉินบนท้องถนนตลอด 24 ชั่วโมง ทั่วประเทศ พร้อมรถยกสไลด์ออนมาตรฐานสูงดูแลตลอดทริป',
              },
              {
                icon: KeyRound,
                title: 'High-Value Trade-in Service',
                desc: 'รับประเมินราคารถยนต์คันเก่าทุกยี่ห้อถึงที่ ให้ราคาสูงกว่าตลาด พร้อมส่วนลด Top-up พิเศษสำหรับเปลี่ยนเป็น smart EV',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-black border border-white/10 hover:border-amber-400/40 transition">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VIP LEAD CAPTURE & TEST DRIVE BOOKING FORM */}
      <section id="booking" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-20">
        <div className="bg-gradient-to-b from-zinc-950 to-black p-6 sm:p-10 rounded-3xl border border-amber-400/40 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
              VIP Personal Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-3">
              นัดหมายทดลองขับ & ขอใบเสนอราคาพิเศษ
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              กรอกข้อมูลเพื่อให้คุณไอซ์ติดต่อกลับ ประสานงานจัดส่งข้อเสนอ หรือนำรถไปให้ทดลองขับถึงหน้าบ้านคุณ
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-black/90 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-4 max-w-lg mx-auto">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">ลงทะเบียนเรียบร้อยแล้วครับ!</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                คุณไอซ์ได้รับข้อมูลแล้ว และจะติดต่อกลับทางเบอร์โทรศัพท์ <span className="text-amber-400 font-bold">{formData.phone}</span> เพื่อประสานงานทันทีครับ
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${realPhoneRaw}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold border border-white/10"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400 inline mr-1.5" /> โทรด่วน {realPhone}
                </a>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                >
                  <MessageCircle className="w-4 h-4 inline mr-1.5" /> แอด LINE คุณไอซ์
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    ชื่อ-นามสกุลของคุณ <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="เช่น คุณธนกร วรเมธ"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-amber-400 text-white text-base outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    เบอร์โทรศัพท์ติดต่อกลับ <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="เช่น 081-234-5678"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-amber-400 text-white text-base outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    รุ่นรถยนต์ smart ที่คุณสนใจ
                  </label>
                  <select
                    value={formData.modelInterest}
                    onChange={(e) => setFormData({ ...formData, modelInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-amber-400 text-white text-base outline-none transition"
                  >
                    <option value="smart #3 BRABUS (428 แรงม้า AWD) 1,949,000 บ.">smart #3 BRABUS (428 แรงม้า AWD) 1,949,000 บ.</option>
                    <option value="smart #1 BRABUS (428 แรงม้า AWD) 1,849,000 บ.">smart #1 BRABUS (428 แรงม้า AWD) 1,849,000 บ.</option>
                    <option value="smart #3 Premium (455 กม. WLTP) 1,699,000 บ.">smart #3 Premium (455 กม. WLTP) 1,699,000 บ.</option>
                    <option value="smart #1 Premium (440 กม. WLTP) 1,599,000 บ.">smart #1 Premium (440 กม. WLTP) 1,599,000 บ.</option>
                    <option value="smart #3 Pro+ (435 กม. WLTP) 1,499,000 บ.">smart #3 Pro+ (435 กม. WLTP) 1,499,000 บ.</option>
                    <option value="smart #1 Pro+ (420 กม. WLTP) 1,399,000 บ.">smart #1 Pro+ (420 กม. WLTP) 1,399,000 บ.</option>
                    <option value="ต้องการคำแนะนำเปรียบเทียบรุ่นย่อย">ต้องการคำแนะนำเปรียบเทียบรุ่นย่อย</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    ความต้องการบริการหลัก
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-amber-400 text-white text-base outline-none transition"
                  >
                    <option value="จองคิวทดลองขับ Test Drive ถึงที่บ้าน">จองคิวทดลองขับ Test Drive ถึงที่บ้าน/ที่ทำงาน</option>
                    <option value="ขอใบเสนอราคาพิเศษพร้อมเงื่อนไขการเงิน">ขอใบเสนอราคาพิเศษพร้อมเงื่อนไขการเงิน</option>
                    <option value="ประเมินราคารถคันเก่าเพื่อเทิร์น (Trade-in)">ประเมินราคารถคันเก่าเพื่อเทิร์น (Trade-in)</option>
                    <option value="นัดหมายเข้าชมรถจริงที่โชว์รูม TTC Motor">นัดหมายเข้าชมรถจริงที่โชว์รูม TTC Motor</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    พื้นที่พักอาศัย / สถานที่ทดลองขับ
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="เช่น อุบลราชธานี, ศรีสะเกษ, ยโสธร, อำนาจเจริญ"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-amber-400 text-white text-base outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    วันที่สะดวกให้ติดต่อกลับ
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-amber-400 text-white text-base outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  ข้อความเพิ่มเติม (เช่น รถคันเก่าที่จะเทิร์น หรืองบประมาณดาวน์/ผ่อน)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="ระบุความต้องการเพิ่มเติม เช่น สนใจสีตัวถัง หรือต้องการตารางผ่อนชำระ..."
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-amber-400 text-white text-base outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-sm tracking-wide shadow-xl shadow-amber-400/20 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>กำลังบันทึกข้อมูล...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 shrink-0" />
                    <span>ยืนยันรับสิทธิ์ข้อเสนอและนัดทดลองขับ</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 9. ARTICLES & KNOWLEDGE HUB SLIDER */}
      <section id="articles" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-400/20">
              <BookOpen className="w-3.5 h-3.5" /> smart & Luxury Auto Knowledge Hub
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              บทความเจาะลึกเทคโนโลยีและคู่มือการเป็นเจ้าของ
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              รวมบทความวิเคราะห์สมรรถนะ smart EV BRABUS, เทคโนโลยีแบตเตอรี่ และคู่มือเลือกรถยนต์ โดย คุณไอซ์
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => slideArticles('left')}
              disabled={!canScrollLeft}
              aria-label="Previous article"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
                canScrollLeft
                  ? 'bg-zinc-900 border-zinc-700 text-white hover:bg-amber-400 hover:text-black cursor-pointer'
                  : 'bg-zinc-950 border-zinc-850 text-zinc-600 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => slideArticles('right')}
              disabled={!canScrollRight}
              aria-label="Next article"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
                canScrollRight
                  ? 'bg-zinc-900 border-zinc-700 text-white hover:bg-amber-400 hover:text-black cursor-pointer'
                  : 'bg-zinc-950 border-zinc-850 text-zinc-600 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div
          ref={articleSliderRef}
          onScroll={updateScrollState}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="relative w-[85vw] sm:w-[360px] lg:w-[380px] shrink-0 snap-start bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-black">
                  <Image
                    src={article.featuredImage}
                    alt={article.imageAlt}
                    fill
                    unoptimized={article.featuredImage.includes('/api/seo/cover')}
                    sizes="(max-width: 640px) 85vw, 380px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    {article.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[11px] text-zinc-500 mb-2">
                    {article.author} • {article.readTime}
                  </div>
                  <h3 className="text-base font-bold text-white line-clamp-2 leading-snug">
                    <Link
                      href={`/ice-benz-ttc-ubon/blog/${article.slug}`}
                      className="focus:outline-none after:absolute after:inset-0"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {article.metaDescription}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                  <span>อ่านบทความฉบับเต็ม</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. REAL CUSTOMER REVIEWS & FAQ */}
      <section className="py-20 bg-zinc-950 border-t border-white/10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-400/20">
              <Star className="w-3.5 h-3.5 fill-amber-400" /> Customer Stories
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              เสียงยืนยันความประทับใจจากผู้เป็นเจ้าของ smart EV
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                &ldquo;ตัดสินใจออก smart #3 BRABUS ผ่านคุณไอซ์ ประทับใจมากที่ขับรถมาให้ลองถึงหน้าบ้าน อัตราเร่ง 3.7 วินาทีหลังติดเบาะจริง เสียงสังเคราะห์ BRABUS เร้าใจมาก บริการตรงไปตรงมาครับ&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-800 text-xs">
                <div className="font-bold text-white">คุณพงศกร ธนากิจโสภณ</div>
                <div className="text-zinc-500">นักธุรกิจ จ.อุบลราชธานี • smart #3 BRABUS</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                &ldquo;เลือก smart #1 Premium เพราะชอบดีไซน์มินิมอลของเบนซ์ ภายในกว้าง หลังคาโปร่งสบาย ลำโพง Beats เสียงดีมาก คุณไอซ์ประสานงานติดตั้ง Wallbox ที่บ้านรวดเร็วเรียบร้อยมากค่ะ&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-800 text-xs">
                <div className="font-bold text-white">พญ. ศศิธร และครอบครัว</div>
                <div className="text-zinc-500">แพทย์ผู้เชี่ยวชาญ จ.ศรีสะเกษ • smart #1 Premium</div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">คำถามที่พบบ่อยเกี่ยวกับ smart EV (FAQ)</h3>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'smart EV ชาร์จไฟบ้านอย่างไร และมีค่าใช้จ่ายติดตั้ง Wallbox หรือไม่?',
                a: 'เมื่อออกรถกับ Smart TTC Motor ท่านจะได้รับฟรี Home Wallbox Charger พร้อมบริการสำรวจระบบไฟฟ้าและติดตั้งมาตรฐานโดยทีมวิศวกรผู้เชี่ยวชาญฟรีถึงบ้านครับ ค่าไฟคิดตามมิเตอร์ไฟบ้านเฉลี่ยเพียงประมาณ 0.60 - 0.80 บาทต่อกิโลเมตรเท่านั้น',
              },
              {
                q: 'การรับประกันแบตเตอรี่และระบบขับเคลื่อนครอบคลุมกี่ปี?',
                a: 'แบตเตอรี่แรงดันสูง (High-Voltage Battery) ได้รับการรับประกันคุณภาพยาวนานถึง 8 ปี หรือ 160,000 กิโลเมตร และตัวรถรับประกัน 4 ปี หรือ 150,000 กิโลเมตร เข้าศูนย์บริการมาตรฐานได้ที่ Smart TTC Motor อุบลราชธานี และเครือข่ายทั่วประเทศ',
              },
              {
                q: 'บริการทดลองขับถึงที่บ้าน (Home Test Drive) มีค่าใช้จ่ายหรือไม่?',
                a: 'ไม่มีค่าใช้จ่ายใดๆ ทั้งสิ้นครับ คุณไอซ์ยินดีนำรถ smart #1 หรือ smart #3 ไปให้ท่านทดลองขับถึงหน้าบ้านหรือที่ทำงานในอุบลราชธานี ศรีสะเกษ ยโสธร อำนาจเจริญ และพื้นที่ใกล้เคียงครับ',
              },
              {
                q: 'สามารถนำรถยนต์น้ำมันคันเก่ามาเทิร์น (Trade-in) แลกเป็น smart EV ได้ไหม?',
                a: 'สามารถนำรถยนต์คันเก่าทุกยี่ห้อมาประเมินราคาได้เลยครับ ทีมงานประเมินราคาให้ถึงที่ ให้ราคาสูง พร้อมรับแคมเปญส่วนลดพิเศษเพิ่มเติมสำหรับการเปลี่ยนเป็นรถยนต์ไฟฟ้าครับ',
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-black overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-white font-semibold text-xs sm:text-sm hover:text-amber-400 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition transform ${
                      openFaq === idx ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SHOWROOM CREDENTIALS & MINIMAL FOOTER */}
      <footer className="bg-black text-zinc-400 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center">
                  <span className="text-xs font-black text-amber-400">sm</span>
                </div>
                <span className="text-base font-black tracking-tight text-white uppercase">
                  SMART TTC MOTOR UBON
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                ผู้แทนจำหน่ายและที่ปรึกษาการขายอย่างเป็นทางการ smart 100% Electric Vehicles ในเครือ Mercedes-Benz & Geely Joint Venture โดย Thonburi Group Partner
              </p>
              <div className="pt-2 text-xs text-zinc-300">
                <strong className="text-white">คุณไอซ์ (Amita)</strong> • Executive Sales Specialist
              </div>
            </div>

            {/* Col 2: Showroom & Contact */}
            <div className="space-y-2.5 text-xs text-zinc-400">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">ที่อยู่โชว์รูมและศูนย์บริการ</h4>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{showroomAddress} (ใกล้เทศบาลตำบลขามใหญ่ ถ.ชยางกูร อุบลราชธานี)</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span>โทรสายตรง: <a href={`tel:${realPhoneRaw}`} className="text-white hover:text-amber-400 font-bold">{realPhone}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>อีเมล: <a href={`mailto:${realEmail}`} className="text-white hover:text-amber-400">{realEmail}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>เวลาทำการ: เปิดบริการทุกวัน พร้อมดูแลนัดหมาย 24 ชม.</span>
              </div>
            </div>

            {/* Col 3: Social & Quick Connect */}
            <div className="space-y-3 text-xs">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">ช่องทางติดต่อทางการ</h4>
              <div className="flex items-center gap-2">
                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
                  title="Facebook Page"
                >
                  <FacebookIcon className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition"
                  title="LINE ส่วนตัว"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-rose-600/20 border border-rose-500/30 text-rose-400 hover:bg-rose-600 hover:text-white flex items-center justify-center transition"
                  title="TikTok"
                >
                  <TikTokIcon className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={`tel:${realPhoneRaw}`}
                  className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-400 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
                  title="โทรสายตรง"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] text-zinc-500 pt-1 leading-relaxed">
                สามารถทักแชตเพื่อสอบถามสต็อกรถพร้อมส่งมอบ สีตัวถัง และเงื่อนไขไฟแนนซ์ได้ตลอด 24 ชั่วโมง
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Smart TTC Motor Ubon - By Ice Sales Executive. All Rights Reserved.</p>
            <p>
              🚀 Developed by{' '}
              <a
                href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline"
              >
                SalesDesk AI
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* 12. MOBILE FLOATING SPEED-DIAL */}
      <div className="md:hidden fixed bottom-5 right-4 z-40 flex items-center gap-2 pointer-events-auto">
        <a
          href={fbMessengerUrl}
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 border border-blue-400/40 active:scale-90 transition"
          aria-label="ทักแชต Facebook"
        >
          <FacebookIcon className="w-5 h-5 fill-white" />
        </a>

        <a
          href={`tel:${realPhoneRaw}`}
          className="h-11 px-4 rounded-full bg-amber-400 text-black font-bold text-xs flex items-center gap-1.5 shadow-2xl shadow-amber-400/40 active:scale-90 transition"
          aria-label={`โทรสายตรง ${realPhone}`}
        >
          <PhoneCall className="w-3.5 h-3.5 fill-black" />
          <span>โทร {realPhone}</span>
        </a>
      </div>
    </div>
  );
}
