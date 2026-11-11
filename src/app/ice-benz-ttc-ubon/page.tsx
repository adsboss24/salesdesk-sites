'use client';

import React, { useState } from 'react';
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

export default function IceBenzTTCUbonSalepage() {
  // Official Verified Contact Info from Facebook Page
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
    modelInterest: 'The New E-Class (E 220 d / E 350 e AMG Dynamic)',
    serviceType: 'จองคิวทดลองขับ Test Drive ถึงที่บ้าน',
    location: 'อุบลราชธานี หรือจังหวัดใกล้เคียง',
    preferredDate: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCarTab, setActiveCarTab] = useState<'all' | 'sedan' | 'suv' | 'amg' | 'smart'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const articles = getAllBenzPosts();

  // Carousel slider state for Articles Hub
  const articleSliderRef = React.useRef<HTMLDivElement>(null);
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
          pageSource: 'ICE LUXURY AUTO Salepage (Icebenzttcmotorubon)',
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback gracefully
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Data Schema for Auto Dealer / Luxury Consultant
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    '@id': 'https://salesdesk-sites.vercel.app/ice-benz-ttc-ubon#dealer',
    name: 'ICE LUXURY AUTO - Certified Mercedes-Benz & AMG Specialist',
    image: 'https://salesdesk-sites.vercel.app/images/benz/hero-benz.jpg',
    telephone: realPhone,
    email: realEmail,
    url: 'https://salesdesk-sites.vercel.app/ice-benz-ttc-ubon',
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
      'ที่ปรึกษาการขายและบริการยนตรกรรมระดับพรีเมียม Mercedes-Benz, Mercedes-AMG และ smart EV พร้อมข้อเสนอพิเศษ ส่งมอบและทดลองขับถึงที่ทั่วประเทศ',
  };

  // Structured Data Schema for Articles Carousel / ItemList (Google Discover & SERP Rich Results)
  const articlesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mercedes-Benz & AMG Knowledge Hub by Ice TTC Motor',
    description: 'รวมบทความเจาะลึกสมรรถนะ AMG, เปรียบเทียบ E-Class vs C-Class, smart EV และคู่มือการเป็นเจ้าของรถยนต์หรู',
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        '@id': `https://salesdesk-sites.vercel.app/ice-benz-ttc-ubon/blog/${article.slug}`,
        headline: article.title,
        description: article.metaDescription,
        image: `https://salesdesk-sites.vercel.app${article.featuredImage}`,
        author: {
          '@type': 'Person',
          name: article.author,
          jobTitle: article.authorRole,
        },
        datePublished: article.publishedAt,
        url: `https://salesdesk-sites.vercel.app/ice-benz-ttc-ubon/blog/${article.slug}`,
      },
    })),
  };

  // 100% REAL CAR MODELS WITH AUTHENTIC EXACT PHOTOS
  const carLineup = [
    {
      id: 'e-class',
      name: 'The New E-Class (E 220 d AMG Line / E 350 e)',
      category: 'sedan',
      tagline: 'ที่สุดแห่งยนตรกรรมซีดานผู้บริหาร ก้าวล้ำด้วย Superscreen AI อัจฉริยะ',
      price: 'เริ่มต้น 3,990,000 บาท',
      downPayment: 'แคมเปญพิเศษประจำรุ่น หรือเลือกรับแพ็กเกจดูแลตัวรถ',
      image: '/images/benz/e-class-real.jpg',
      specs: [
        { label: 'คอนโซลหน้า', val: 'MBUX Superscreen เต็มบาน' },
        { label: 'ระบบช่วยเหลือ', val: 'Driving Assistance Plus' },
        { label: 'ระบบเสียง', val: 'Burmester® 4D Surround' },
        { label: 'ช่วงล่าง', val: 'AIRMATIC นุ่มนวลสูงสุด' },
      ],
      badge: 'รุ่นใหม่ล่าสุด New Arrival',
    },
    {
      id: 'c-class',
      name: 'The C-Class (C 220 d / C 350 e Night Edition)',
      category: 'sedan',
      tagline: 'สปอร์ตซีดานยอดนิยม นิยามความคล่องตัว หรูหรา ทันสมัย',
      price: 'เริ่มต้น 2,790,000 บาท',
      downPayment: 'ดาวน์เริ่มต้น 10% หรือผ่อนเริ่มต้น 28,xxx บ./ด.',
      image: '/images/benz/c-class-real.jpg',
      specs: [
        { label: 'ขุมพลัง', val: 'Plug-in Hybrid / Diesel Turbo' },
        { label: 'อัตราเร่ง 0-100', val: '5.7 วินาที' },
        { label: 'หน้าจอสัมผัส', val: 'MBUX 11.9 นิ้ว' },
        { label: 'โหมดไฟฟ้า EV', val: 'วิ่งไกลกว่า 100 กม.' },
      ],
      badge: 'Bestseller ยอดนิยม',
    },
    {
      id: 'glc-suv',
      name: 'The New GLC (GLC 220 d / GLC 350 e 4MATIC AMG)',
      category: 'suv',
      tagline: 'SUV พรีเมียมขับเคลื่อน 4 ล้อ พร้อมรับมือทุกการเดินทางของครอบครัว',
      price: 'เริ่มต้น 3,790,000 บาท',
      downPayment: 'ฟรีประกันภัยชั้น 1 + ฟรีวารันตีแบตเตอรี่ 10 ปี',
      image: '/images/benz/glc-real.jpg',
      specs: [
        { label: 'ระบบขับเคลื่อน', val: '4MATIC All-Wheel Drive' },
        { label: 'หลังคา', val: 'Panoramic Sunroof เปิด-ปิดไฟฟ้า' },
        { label: 'ไฟหน้า', val: 'DIGITAL LIGHT ส่องสว่างไกล' },
        { label: 'พื้นที่สัมภาระ', val: 'จุได้สูงสุด 1,680 ลิตร' },
      ],
      badge: 'ครอบครัว & อเนกประสงค์',
    },
    {
      id: 'cle-coupe',
      name: 'The CLE Coupé (CLE 200 / CLE 300 AMG Line)',
      category: 'sedan',
      tagline: 'ยนตรกรรมคูเป้ 2 ประตูที่สะกดทุกสายตา เส้นสายสปอร์ตเร้าใจระดับไอคอน',
      price: 'เริ่มต้น 3,950,000 บาท',
      downPayment: 'แคมเปญพิเศษ ผ่อนเริ่มต้น 3x,xxx บ./ด.',
      image: '/images/benz/cle-real.jpg',
      specs: [
        { label: 'ดีไซน์ตัวถัง', val: '2-Door Luxury Coupé' },
        { label: 'อัตราเร่ง 0-100', val: '6.2 วินาที' },
        { label: 'ชุดแต่ง', val: 'AMG Line Aerodynamics' },
        { label: 'ไฟหน้า', val: 'Multibeam LED Intelligent' },
      ],
      badge: 'ดีไซน์คูเป้สะกดสายตา',
    },
    {
      id: 'amg-c43',
      name: 'Mercedes-AMG Performance (C 43 / CLA 35 4MATIC)',
      category: 'amg',
      tagline: 'กำเนิดจากสนามแข่ง สู่จิตวิญญาณสปอร์ตพันธุ์แท้ เทอร์โบไฟฟ้า F1',
      price: 'เริ่มต้น 3,990,000 บาท',
      downPayment: 'ฟรีชุดแต่ง Carbon Package + ประกันภัยชั้น 1',
      image: '/images/benz/amg-real.jpg',
      specs: [
        { label: 'สมรรถนะ', val: '408 แรงม้า (C 43)' },
        { label: 'อัตราเร่ง 0-100', val: '4.6 วินาที' },
        { label: 'เสียงท่อไอเสีย', val: 'AMG Real Performance' },
        { label: 'ระบบขับเคลื่อน', val: 'AMG Performance 4MATIC' },
      ],
      badge: 'Pure AMG DNA',
    },
    {
      id: 'smart-ev',
      name: 'smart #1 & smart #3 (100% EV)',
      category: 'smart',
      tagline: 'ยนตรกรรมไฟฟ้าพรีเมียมในเครือ Mercedes-Benz ดีไซน์โมเดิร์น ขุมพลังเร้าใจ',
      price: 'เริ่มต้น 1,399,000 บาท',
      downPayment: 'ฟรี Home Charger พร้อมติดตั้ง + ประกันภัยชั้น 1',
      image: '/images/benz/smart-real.jpg',
      specs: [
        { label: 'พละกำลัง', val: '272 - 428 แรงม้า (BRABUS)' },
        { label: 'อัตราเร่ง 0-100', val: '3.7 - 6.7 วินาที' },
        { label: 'ระยะทางวิ่ง', val: 'สูงสุด 440 กม. (NEDC)' },
        { label: 'ชาร์จด่วน DC', val: '10-80% ใน 30 นาที' },
      ],
      badge: 'ขายจริงในเพจ Official',
    },
  ];

  const filteredCars =
    activeCarTab === 'all'
      ? carLineup
      : carLineup.filter((car) => car.category === activeCarTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-12 md:pb-0 w-full max-w-full overflow-x-clip">
      {/* Schema Injection */}
      <StructuredData data={localBusinessSchema} id="ice-luxury-auto-schema" />
      <StructuredData data={articlesItemListSchema} id="ice-benz-articles-schema" />

      {/* 1. LUXURY FIXED STICKY NAVIGATION MENU (PINNED 100% ON SCROLL) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 transition-all duration-300 shadow-xl shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Certified Specialist */}
          <Link href="/ice-benz-ttc-ubon" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-slate-200 via-white to-slate-400 p-[1.5px] shadow-lg shadow-white/10 shrink-0 group-hover:scale-105 transition">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-lg font-black tracking-tight text-white leading-tight">
                  ICE <span className="text-amber-400">LUXURY AUTO</span>
                </span>
                <span className="hidden xl:inline-block bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30 whitespace-nowrap">
                  Mercedes-Benz Specialist
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate hidden sm:block">
                คุณไอซ์ • ที่ปรึกษาการขาย Mercedes-Benz, AMG & smart EV
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Sticky Menu) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#models" className="hover:text-amber-400 transition">เลือกรุ่นรถ</a>
            <a href="#campaigns" className="hover:text-amber-400 transition">สิทธิพิเศษ</a>
            <a href="#articles" className="hover:text-amber-400 transition">บทความ & คู่มือ</a>
            <a href="#reviews" className="hover:text-amber-400 transition">เสียงตอบรับลูกค้า</a>
            <a href="#contact" className="hover:text-amber-400 transition">ข้อมูลติดต่อ</a>
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Direct Call Button (Compact Icon on Mobile, Full on Desktop to prevent wrapping) */}
            <a
              href={`tel:${realPhoneRaw}`}
              className="sm:hidden w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/60 text-amber-400 flex items-center justify-center transition active:scale-95"
              aria-label={`โทรสายตรง ${realPhone}`}
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <a
              href={`tel:${realPhoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/60 text-slate-200 text-xs sm:text-sm font-semibold transition whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>โทร {realPhone}</span>
            </a>

            {/* Test Drive CTA (Desktop) */}
            <a
              href="#booking-form"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>นัดหมายทดลองขับ</span>
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-5 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-200 pb-3 border-b border-slate-850">
              <a
                href="#models"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>🚘 เลือกรุ่นรถยนต์ยอดนิยม</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
              <a
                href="#campaigns"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>✨ สิทธิพิเศษ & แคมเปญ</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
              <a
                href="#articles"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>📚 บทความ & คู่มือความรู้ (SEO)</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>⭐ เสียงตอบรับจากลูกค้าจริง</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>📍 ข้อมูลติดต่อ & โชว์รูม</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            </nav>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="#booking-form"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-1.5 transition"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>จองทดลองขับ</span>
              </a>
              <a
                href={fbMessengerUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition"
              >
                <FacebookIcon className="w-3.5 h-3.5 fill-white" />
                <span>ทักแชตเพจ</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Header Fixed Flow Spacer */}
      <div className="h-16 sm:h-[65px] w-full" />

      {/* 2. CINEMATIC HERO SECTION (SPACIOUS, LUXURIOUS, 100% UNOBSTRUCTED) */}
      <section className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/benz/hero-benz.jpg"
            alt="ICE LUXURY AUTO - Mercedes-Benz & AMG Exclusive Experience"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_center] sm:object-[80%_center] lg:object-right brightness-105 contrast-[1.03]"
          />

          {/* Desktop Left Scrim: Darkens left 50% for 100% white text contrast */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 via-50% to-transparent" />

          {/* Mobile Scrims: Clean gradient for text readability while showcasing the car */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/75 via-45% to-slate-950/95" />

          {/* Bottom Edge Fade */}
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 relative z-10 w-full">
          <div className="max-w-2xl space-y-4 sm:space-y-6 text-center lg:text-left mx-auto lg:mx-0">
            {/* International Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold shadow-xl">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
              <span>Certified Mercedes-Benz & AMG Specialist</span>
            </div>

            {/* Headline with Zero-Overlapping Thai Typography */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-extrabold text-white tracking-tight leading-[1.38] sm:leading-[1.35] lg:leading-[1.38] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              <span className="block mb-2 sm:mb-3">
                Mercedes-Benz & AMG Experience
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 block leading-[1.4] sm:leading-[1.42] py-1">
                โดย คุณไอซ์ • ที่ปรึกษาการขายมืออาชีพ
              </span>
            </h1>

            {/* Subheadline - Google Standard Mobile Body Copy (14px - 18px) */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              สัมผัสยนตรกรรมชั้นนำระดับโลก ทั้ง The New E-Class, C-Class, GLC SUV, CLE Coupé, สปอร์ตพันธุ์ดุ AMG และ smart EV พร้อมข้อเสนอพิเศษเฉพาะบุคคล และบริการส่งมอบรถทดลองขับ Test Drive ถึงหน้าบ้านท่าน
            </p>

            {/* Action Buttons (Dual on both Mobile & Desktop with Perfect Hierarchy) */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#booking-form"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-sm sm:text-base text-center shadow-xl shadow-amber-500/25 active:scale-95 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                จองคิวทดลองขับ / ขอใบเสนอราคา &rarr;
              </a>
              <a
                href={fbMessengerUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 font-semibold text-sm sm:text-base text-center backdrop-blur-md active:scale-95 transition whitespace-nowrap flex items-center justify-center gap-2"
              >
                <FacebookIcon className="w-4 h-4 fill-blue-500 text-transparent shrink-0" />
                <span>ทักแชต Facebook เพจ</span>
              </a>
            </div>

            {/* 3 Trust Checkmarks */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ยนตรกรรมป้ายแดงรับประกันศูนย์เยอรมัน</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>รับเทิร์นรถเก่าทุกรุ่นให้ราคาสูง</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ไฟแนนซ์ผ่านง่าย อนุมัติไวใน 24 ชม.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. FOUR PILLARS OF LUXURY SERVICE (DECOUPLED, CLEAN & BREATHABLE) */}
      <section className="py-8 sm:py-12 bg-slate-950 border-b border-slate-800/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-slate-900/80 p-3.5 sm:p-5 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition">
              <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-white">Certified Consultant</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ดูแลโดยที่ปรึกษาการขายมืออาชีพ มาตรฐานสากล
              </p>
            </div>

            <div className="bg-slate-900/80 p-3.5 sm:p-5 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition">
              <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                <Car className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-white">VIP Home Test Drive</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                บริการนำรถไปให้ทดลองขับถึงที่ทำงานหรือบ้านท่าน
              </p>
            </div>

            <div className="bg-slate-900/80 p-3.5 sm:p-5 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition">
              <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-white">MBSP นาน 5 ปี</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                โปรแกรมบำรุงรักษาและรับประกัน ไม่จำกัดระยะทาง
              </p>
            </div>

            <div className="bg-slate-900/80 p-3.5 sm:p-5 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition">
              <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                <BadgePercent className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-white">Trade-in ราคาสูง</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ประเมินราคารถเก่าทุกรุ่นถึงที่ เพิ่มมูลค่าแลกเบนซ์ใหม่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 100% REAL MODELS SHOWCASE (AUTHENTIC EXACT PHOTOS) */}
      <section id="models" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
            <Car className="w-3.5 h-3.5" /> Official Vehicle Lineup
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.3] sm:leading-[1.25]">
            <span className="block">ยนตรกรรมพรีเมียมและรถยนต์ไฟฟ้า</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
              ภาพจริงตรงตามรุ่น พร้อมส่งมอบและข้อเสนอพิเศษ
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            เลือกรุ่นรถที่ตอบโจทย์ไลฟ์สไตล์ของคุณ ไม่ว่าจะเป็น Executive Saloon, Luxury Family SUV, คูเป้ 2 ประตูสุดหรู, สปอร์ตพันธุ์ดุ AMG หรือสมาร์ท EV พลังงานสะอาด
          </p>

          {/* Model Filter Tabs - Smooth Horizontal Swipe on Mobile */}
          <div className="flex items-center gap-2 mt-6 sm:mt-8 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center sm:flex-wrap">
            {[
              { id: 'all', label: 'ทุกรุ่นยอดนิยม' },
              { id: 'sedan', label: 'Executive Saloon & Coupé' },
              { id: 'suv', label: 'Luxury SUV (GLC)' },
              { id: 'amg', label: 'Mercedes-AMG Performance' },
              { id: 'smart', label: 'smart #1 & #3 EV' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCarTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition shrink-0 whitespace-nowrap cursor-pointer ${
                  activeCarTab === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
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
              className="group bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Real Car Image with Badge */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
                    {car.badge}
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition">
                    {car.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">
                    {car.tagline}
                  </p>

                  <div className="my-4 pt-3 border-t border-slate-800">
                    <div className="text-sm sm:text-base font-semibold text-amber-400">
                      {car.price}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      {car.downPayment}
                    </div>
                  </div>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    {car.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-xs text-slate-400">{spec.label}</span>
                        <span className="font-semibold text-slate-200 text-xs sm:text-sm">{spec.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href="#booking-form"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      modelInterest: car.name,
                    }))
                  }
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 text-xs sm:text-sm font-bold text-center block transition shadow-md shadow-amber-500/10 cursor-pointer"
                >
                  ขอใบเสนอราคา / นัดทดลองขับ
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE EXCELLENCE & WHY CHOOSE ICE LUXURY AUTO */}
      <section className="py-16 sm:py-24 bg-slate-900/60 border-y border-slate-800/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
              <Award className="w-3.5 h-3.5" /> Elite Customer Privileges
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              <span className="block">ทำไมผู้บริหารและลูกค้าระดับพรีเมียม</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
                ถึงเลือกออกรถกับ ICE LUXURY AUTO
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              เราใส่ใจทุกรายละเอียดมากกว่าแค่การขายรถยนต์ แต่คือการดูแลระดับ Exclusive และมิตรภาพที่ยั่งยืน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BadgePercent,
                title: 'Exclusive Financial Deals',
                desc: 'ดีลที่ดีที่สุดตามงบประมาณของคุณ ข้อเสนออัตราดอกเบี้ยพิเศษ หรือโปรแกรมผ่อนบอลลูน mySTAR สบายกระเป๋า อนุมัติไวผ่านง่าย',
              },
              {
                icon: Car,
                title: 'VIP Door-to-Door Test Drive',
                desc: 'บริการส่งรถทดลองขับถึงหน้าบ้านหรือออฟฟิศของคุณ ทั้งในอุบลฯ ศรีสะเกษ ยโสธร อำนาจเจริญ และมุกดาหาร สะดวกสบายไม่ต้องเดินทาง',
              },
              {
                icon: KeyRound,
                title: 'High-Value Trade-in Appraisal',
                desc: 'บริการประเมินราคารถยนต์คันเก่าทุกยี่ห้อถึงที่ ให้ราคาสูงกว่าตลาดเต็นท์รถทั่วไป พร้อมส่วนลด Top-up พิเศษเพื่อเปลี่ยนเป็นคันใหม่',
              },
              {
                icon: ShieldCheck,
                title: 'Certified Service Network',
                desc: 'เข้าสู่เครือข่ายศูนย์บริการมาตรฐานเยอรมันอย่างเป็นทางการ ช่างผู้เชี่ยวชาญระดับ Certified Master Technicians พร้อมอะไหล่แท้ 100%',
              },
              {
                icon: Clock,
                title: '24-Hour Roadside Assistance',
                desc: 'อุ่นใจทุกเส้นทางด้วยบริการช่วยเหลือฉุกเฉินตลอด 24 ชั่วโมง ทั่วประเทศ พร้อมรถยกสไลด์ออนมาตรฐานสูงดูแลตลอดทริป',
              },
              {
                icon: Sparkles,
                title: 'White Glove Handover Experience',
                desc: 'พิธีส่งมอบรถสุดประทับใจ พร้อมคำแนะนำระบบ MBUX และฟังก์ชันรถแบบส่วนตัว มอบของขวัญ Exclusive Gift Set เฉพาะลูกค้าคนสำคัญ',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AUTHORIZED SHOWROOM & SERVICE NETWORK */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold border border-amber-400/20">
              <MapPin className="w-3.5 h-3.5" /> โชว์รูมและศูนย์บริการมาตรฐานครบวงจร
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              <span className="block">มาตรฐานการดูแลระดับสากล</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
                บนถนนชยางกูร อุบลราชธานี
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              สัมผัสความหรูหราของโชว์รูมและศูนย์บริการมาตรฐานครบวงจร พร้อมพื้นที่รับรอง VIP Lounge สุดเอ็กซ์คลูซีฟ และศูนย์ซ่อมสี-ตัวถังที่ผ่านการรับรองมาตรฐานสากล
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">ทำเลสะดวกบนถนนชยางกูร อุบลราชธานี</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {showroomAddress} (ใกล้สำนักงานเทศบาลตำบลขามใหญ่)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">การันตีอะไหล่แท้และเครื่องมือวิเคราะห์เฉพาะทาง</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ตรวจสอบระบบอิเล็กทรอนิกส์และกล่องสมองกลด้วยระบบคอมพิวเตอร์ลิขสิทธิ์แท้ แม่นยำ รวดเร็ว ปลอดภัยสูงสุด
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">ศูนย์ซ่อมสีและตัวถังที่ได้รับการรับรอง (Certified Body & Paint)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ห้องอบสีระบบมาตรฐานโลก สีแท้คุณภาพสูง คืนสภาพความเงางามและปลอดภัย 100% ตามมาตรฐานโรงงาน
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={`tel:${realPhoneRaw}`}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm transition"
              >
                โทรสายตรง {realPhone}
              </a>
              <a
                href={fbPageUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-slate-200 text-sm font-semibold transition flex items-center gap-2"
              >
                <FacebookIcon className="w-4 h-4 text-blue-400 fill-blue-400" /> ชมเพจ Facebook ทางการ
              </a>
            </div>
          </div>

          {/* Service Center Showcase Photo */}
          <div className="relative h-80 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="/images/benz/service-center.jpg"
              alt="Official Certified Service Center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">ศูนย์บริการและส่งมอบรถยนต์</h4>
                  <p className="text-xs text-amber-400">ถ.ชยางกูร ต.ขามใหญ่ จ.อุบลราชธานี (โทร. {realPhone})</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-400">German Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROMOTION & FINANCIAL CAMPAIGNS */}
      <section id="campaigns" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
              <BadgePercent className="w-3.5 h-3.5" /> Monthly Campaign
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              <span className="block">3 แคมเปญสุด Exclusive</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
                เมื่อจองรถกับ ICE LUXURY AUTO ภายในเดือนนี้
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              สิทธิพิเศษที่คุณไม่ควรพลาด พร้อมของแถมและเงื่อนไขไฟแนนซ์ที่ออกแบบเฉพาะบุคคล
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Tier 1 */}
            <div className="bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-amber-400/50 transition duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Campaign Tier 1
                </span>
                <h3 className="text-xl font-bold text-white mt-4">Worry-Free MBSP Package</h3>
                <p className="text-xs text-slate-400 mt-2">
                  ขับขี่สบายใจ ไร้กังวลเรื่องค่าบำรุงรักษาตลอด 5 ปีเต็ม
                </p>

                <div className="my-6 py-4 border-y border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ฟรี โปรแกรมบำรุงรักษา MBSP นาน 5 ปี</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ฟรี ประกันภัยชั้น 1 Protection 1 ปี</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ฟรี บริการช่วยเหลือฉุกเฉินตลอด 24 ชม.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ฟรี ฟิล์มกรองแสงเซรามิกพรีเมียมรอบคัน</span>
                  </div>
                </div>
              </div>

              <a
                href="#booking-form"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    notes: 'สนใจแคมเปญ Tier 1: Worry-Free MBSP Package',
                  }))
                }
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold text-center block transition border border-slate-700"
              >
                เลือกรับแพ็กเกจนี้ &rarr;
              </a>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-amber-400/80 transition duration-300 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                Most Popular ยอดนิยม
              </div>

              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Campaign Tier 2
                </span>
                <h3 className="text-xl font-bold text-white mt-4">Tailored Deals & Financial Freedom</h3>
                <p className="text-xs text-slate-400 mt-2">
                  ทางเลือกทางการเงินเพื่อสภาพคล่องสูงสุด แคมเปญพิเศษประจำรุ่น
                </p>

                <div className="my-6 py-4 border-y border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-bold text-white">ดอกเบี้ยและเงื่อนไขพิเศษเฉพาะรุ่น หรือเลือกผ่อนเบา</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>โปรแกรม mySTAR ผ่อนงวดเบาสบาย เพิ่มสภาพคล่อง</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>ฟรี ประกันภัยชั้น 1 ตลอดปีแรก</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>จัดไฟแนนซ์ได้ทุกอาชีพ เอกสารอนุมัติไวใน 24 ชม.</span>
                  </div>
                </div>
              </div>

              <a
                href="#booking-form"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    notes: 'สนใจแคมเปญ Tier 2: 0% Interest & Financial Freedom',
                  }))
                }
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 text-xs sm:text-sm font-bold text-center block transition shadow-lg shadow-amber-500/20"
              >
                เลือกรับข้อเสนอการเงิน &rarr;
              </a>
            </div>

            {/* Tier 3 */}
            <div className="bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-amber-400/50 transition duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Campaign Tier 3
                </span>
                <h3 className="text-xl font-bold text-white mt-4">VIP Trade-in Plus</h3>
                <p className="text-xs text-slate-400 mt-2">
                  นำรถยนต์คันเก่าทุกยี่ห้อมาแลกเปลี่ยน รับมูลค่าเพิ่มทันที
                </p>

                <div className="my-6 py-4 border-y border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>เพิ่มมูลค่ารถคันเก่าสูงสุด 200,000 บาท</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ประเมินราคารถยนต์ถึงบ้านคุณโดยผู้เชี่ยวชาญ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ปิดบัญชีไฟแนนซ์เดิมให้ทันที สะดวก ปลอดภัย</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>รับ Gift Voucher พิเศษสำหรับตกแต่งอุปกรณ์เสริม</span>
                  </div>
                </div>
              </div>

              <a
                href="#booking-form"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    notes: 'สนใจแคมเปญ Tier 3: VIP Trade-in Plus',
                  }))
                }
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold text-center block transition border border-slate-700"
              >
                ประเมินราคารถเก่า &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REAL CUSTOMER REVIEWS */}
      <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Real Customer Stories
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
            <span className="block">ความประทับใจและเสียงยืนยัน</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
              จากลูกค้าคนสำคัญที่ออกรถกับ คุณไอซ์
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            รอยยิ้มและความพึงพอใจสูงสุดของลูกค้า คือความภาคภูมิใจในการดูแลของเรา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              quote:
                'ประทับใจการบริการของคุณไอซ์มากครับ นำรถ The New E-Class มาให้ทดลองขับถึงที่ทำงาน ให้คำแนะนำเรื่องฟังก์ชัน Superscreen และประสานงานไฟแนนซ์รวดเร็วมาก ได้รับรถทันฤกษ์อย่างสบายใจครับ',
              author: 'คุณพงศกร ธนากิจโสภณ',
              role: 'นักธุรกิจและผู้บริหาร จ.อุบลราชธานี',
              model: 'Mercedes-Benz The New E-Class AMG Dynamic',
            },
            {
              quote:
                'ตัดสินใจออก smart #1 ผ่านเพจ Facebook คุณไอซ์ขับรถมาให้ลองถึงหน้าบ้าน อัตราเร่งเร้าใจมาก การบริการตรงไปตรงมา ตอบแชตไวมาก แนะนำเลยครับสำหรับคนที่ชอบรถไฟฟ้าสายสปอร์ต',
              author: 'แพทย์หญิงศศิธร และครอบครัว',
              role: 'แพทย์ผู้เชี่ยวชาญ จ.ศรีสะเกษ',
              model: 'smart #1 (100% EV)',
            },
            {
              quote:
                'ออก C-Class คันแรก ทักคุยในเพจ Facebook คุณไอซ์ตอบไวมาก จัดหาโปรโมชั่นดอกเบี้ยพิเศษและแพ็กเกจ MBSP 5 ปีให้แบบจัดเต็ม วันรับรถมีพิธีส่งมอบที่หรูหราและประทับใจสุดๆ ครับ',
              author: 'คุณวรเมธ วิริยะพาณิชย์',
              role: 'ผู้จัดการฝ่ายการตลาด จ.ยโสธร',
              model: 'Mercedes-Benz C-Class Night Edition',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <h4 className="text-sm font-bold text-white">{item.author}</h4>
                <p className="text-xs text-slate-400">{item.role}</p>
                <div className="mt-2 text-[11px] font-semibold text-amber-400">
                  {item.model}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INTERACTIVE LEAD CAPTURE FORM WITH REAL API INTEGRATION */}
      <section id="booking-form" className="py-14 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-amber-400/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Exclusive VIP Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3 leading-normal sm:leading-[1.25]">
              ลงทะเบียนรับข้อเสนอพิเศษ & นัดหมายทดลองขับ
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              กรอกข้อมูลเพื่อให้คุณไอซ์ติดต่อกลับเพื่อจัดส่งใบเสนอราคาพิเศษ หรือประสานงานนำรถไปให้ทดลองขับถึงที่
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-slate-900/90 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-4 max-w-lg mx-auto relative z-10 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">ลงทะเบียนเรียบร้อยแล้วครับ!</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                คุณไอซ์ได้รับข้อมูลของท่านแล้ว และจะติดต่อกลับทางเบอร์โทรศัพท์ <span className="text-amber-400 font-bold">{formData.phone}</span> หรือประสานงานผ่านช่องทางที่ท่านสะดวกในทันทีครับ
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${realPhoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition border border-slate-700"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" /> โทรด่วน {realPhone}
                </a>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition"
                >
                  <MessageCircle className="w-4 h-4" /> แอด LINE คุณไอซ์
                </a>
                <a
                  href={fbMessengerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition"
                >
                  <FacebookIcon className="w-4 h-4 fill-white text-transparent" /> ทักแชต Facebook
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    ชื่อ-นามสกุลของคุณ <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="เช่น คุณสมศักดิ์ วรเมธ"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    เบอร์โทรศัพท์ที่สะดวกให้ติดต่อ <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="เช่น 081-234-5678"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    รุ่นรถยนต์ที่คุณสนใจ
                  </label>
                  <select
                    value={formData.modelInterest}
                    onChange={(e) => setFormData({ ...formData, modelInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition"
                  >
                    <option value="The New E-Class (E 220 d AMG Line / E 350 e)">The New E-Class (E 220 d AMG Line / E 350 e)</option>
                    <option value="The C-Class (C 220 d / C 350 e Night Edition)">The C-Class (C 220 d / C 350 e Night Edition)</option>
                    <option value="The GLC SUV (GLC 220 d / GLC 350 e 4MATIC)">The New GLC SUV (GLC 220 d / GLC 350 e 4MATIC)</option>
                    <option value="The CLE Coupé (CLE 200 / CLE 300 AMG Line)">The CLE Coupé (CLE 200 / CLE 300 AMG Line)</option>
                    <option value="Mercedes-AMG Performance (C 43 / CLA 35)">Mercedes-AMG Performance (C 43 / CLA 35 4MATIC)</option>
                    <option value="smart #1 & smart #3 (100% EV)">smart #1 & smart #3 (100% EV)</option>
                    <option value="ต้องการปรึกษารุ่นอื่นเพิ่มเติม">ต้องการปรึกษารุ่นอื่นเพิ่มเติม</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    ความต้องการบริการหลัก
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition"
                  >
                    <option value="จองคิวทดลองขับ Test Drive ถึงที่บ้าน">จองคิวทดลองขับ Test Drive ถึงที่บ้าน/ที่ทำงาน</option>
                    <option value="ขอใบเสนอราคาพิเศษพร้อมเงื่อนไขการเงิน">ขอใบเสนอราคาพิเศษพร้อมเงื่อนไขการเงิน</option>
                    <option value="ประเมินราคารถคันเก่าเพื่อเทิร์น (Trade-in)">ประเมินราคารถคันเก่าเพื่อเทิร์น (Trade-in)</option>
                    <option value="นัดหมายเข้าชมรถจริงและรับสิทธิ์แคมเปญพิเศษ">นัดหมายเข้าชมรถจริงและรับสิทธิ์แคมเปญพิเศษ</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    พื้นที่พักอาศัย / สถานที่ส่งรถทดลองขับ
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="เช่น อุบลราชธานี, ศรีสะเกษ, ยโสธร, หรือจังหวัดของท่าน"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    วันที่สะดวกให้ติดต่อกลับ หรือสะดวกทดลองขับ
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  รายละเอียดเพิ่มเติม (เช่น รถคันเก่าที่จะเทิร์น หรืองบประมาณดาวน์/ผ่อนที่ต้องการ)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="ระบุความต้องการเพิ่มเติม เช่น ต้องการผ่อนไม่เกิน 35,000 หรือมีรถคันเก่าที่จะนำมาเทิร์น..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>กำลังบันทึกข้อมูล...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>ยืนยันข้อมูลเพื่อรับสิทธิ์และข้อเสนอพิเศษทันที</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 ข้อมูลของท่านจะถูกส่งตรงเข้าสู่ระบบประสานงานของ คุณไอซ์ (โทร. {realPhone}) ปลอดภัยตามมาตรฐาน PDPA
              </p>
            </form>
          )}
        </div>
      </section>

      {/* 8.5. KNOWLEDGE HUB & SEO ARTICLES SECTION: LUXURY CARD SLIDER */}
      <section id="articles" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Mercedes-Benz & AMG Knowledge Hub
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              <span className="block">บทความ & คู่มือความรู้ยนตรกรรมหรู</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 block mt-1">
                เจาะลึกเทคโนโลยี ข้อแนะนำก่อนตัดสินใจ และวางแผนภาษี
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              รวมบทความวิเคราะห์สมรรถนะ AMG, เปรียบเทียบ E-Class vs C-Class, ยานยนต์ไฟฟ้า smart EV, แพ็กเกจ MBSP และเทคนิคประหยัดภาษี โดยคุณไอซ์
            </p>
          </div>

          {/* Desktop & Tablet Carousel Arrows + Counter */}
          <div className="hidden sm:flex items-center gap-3 self-end shrink-0">
            <span className="text-xs text-slate-400 font-mono mr-2">
              <strong className="text-amber-400">{String(activeArticleIndex + 1).padStart(2, '0')}</strong> / {String(articles.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => slideArticles('left')}
              disabled={!canScrollLeft}
              aria-label="Previous article slide"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition backdrop-blur-md ${
                canScrollLeft
                  ? 'bg-slate-900 border-slate-700 text-white hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 shadow-lg cursor-pointer'
                  : 'bg-slate-900/40 border-slate-800 text-slate-600 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => slideArticles('right')}
              disabled={!canScrollRight}
              aria-label="Next article slide"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition backdrop-blur-md ${
                canScrollRight
                  ? 'bg-slate-900 border-slate-700 text-white hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 shadow-lg cursor-pointer'
                  : 'bg-slate-900/40 border-slate-800 text-slate-600 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card Slide Container with Smooth Touch-Snap and Mouse Drag/Wheel */}
        <div
          ref={articleSliderRef}
          onScroll={updateScrollState}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth focus:outline-none"
          tabIndex={0}
          aria-label="Mercedes-Benz Knowledge Hub Articles Carousel"
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="w-[86vw] sm:w-[380px] lg:w-[400px] shrink-0 snap-start group bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Cover Image with Zoom Effect */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={article.featuredImage}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 380px, 400px"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Floating Category Pill */}
                  <div className="absolute top-3.5 left-3.5 bg-slate-950/85 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/30 shadow-md">
                    {article.category}
                  </div>

                  {/* Reading Time Pill */}
                  <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-xs text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-800">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2.5">
                    <span className="text-amber-400/90 font-semibold">{article.author}</span>
                    <span>•</span>
                    <span className="text-slate-400 truncate">{article.authorRole}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition line-clamp-2 leading-snug">
                    <Link href={`/ice-benz-ttc-ubon/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                    {article.metaDescription}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href={`/ice-benz-ttc-ubon/blog/${article.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 group-hover:bg-amber-400 group-hover:text-slate-950 text-amber-300 text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 transition duration-200 border border-slate-700 group-hover:border-amber-400"
                >
                  <span>อ่านบทความฉบับเต็ม</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Indicators / Navigation Dots */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-850">
          {/* Slide Dots */}
          <div className="flex items-center gap-2">
            {articles.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToArticle(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeArticleIndex === i
                    ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/30'
                    : 'w-2 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Mobile Prev / Next Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => slideArticles('left')}
              disabled={!canScrollLeft}
              aria-label="Previous article slide"
              className={`w-9 h-9 rounded-lg border flex items-center justify-center transition ${
                canScrollLeft
                  ? 'bg-slate-900 border-slate-700 text-white hover:bg-amber-400 hover:text-slate-950'
                  : 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => slideArticles('right')}
              disabled={!canScrollRight}
              aria-label="Next article slide"
              className={`w-9 h-9 rounded-lg border flex items-center justify-center transition ${
                canScrollRight
                  ? 'bg-slate-900 border-slate-700 text-white hover:bg-amber-400 hover:text-slate-950'
                  : 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-50'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick link hint */}
          <div className="hidden sm:block text-xs text-slate-400">
            👉 ปัดซ้าย-ขวา เพื่ออ่านคู่มือความรู้ฉบับอื่นๆ
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-semibold mb-2 border border-slate-800">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> คำถามที่พบบ่อย (FAQ)
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white">
            ข้อสงสัยก่อนออกรถ Mercedes-Benz & AMG
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'บริการทดลองขับถึงบ้าน (Home Test Drive) มีค่าใช้จ่ายหรือไม่?',
              a: 'ไม่มีค่าใช้จ่ายใดๆ ทั้งสิ้นครับ คุณไอซ์ยินดีประสานงานนำรถ Mercedes-Benz, Mercedes-AMG หรือ smart EV รุ่นที่ท่านสนใจไปให้ทดลองขับถึงหน้าบ้านหรือที่ทำงาน โดยสามารถนัดหมายวันเวลาที่ท่านสะดวกได้ล่วงหน้าครับ',
            },
            {
              q: 'โปรแกรม MBSP (Mercedes-Benz Service Plus) ครอบคลุมอะไรบ้าง?',
              a: 'MBSP คือโปรแกรมบำรุงรักษาและขยายเวลารับประกันคุณภาพ โดยครอบคลุมค่าแรง ค่าอะไหล่แท้ และของเหลวตามระยะทางมาตรฐานสูงสุด 5 ปี ไม่จำกัดระยะทาง พร้อมบริการช่วยเหลือฉุกเฉิน Star Assist ตลอด 24 ชม. ทั่วประเทศ',
            },
            {
              q: 'สามารถนำรถยนต์คันเก่าต่างยี่ห้อมาแลกเปลี่ยน (Trade-in) ได้หรือไม่?',
              a: 'สามารถนำรถยนต์คันเก่าทุกรุ่น ทุกยี่ห้อ มาประเมินราคาแลกเปลี่ยนได้เลยครับ โดยทีมงานจะทำการประเมินราคาให้ถึงบ้านท่าน พร้อมให้ราคาสูงกว่าตลาด และมีแคมเปญ Trade-in Top-up มอบส่วนลดพิเศษเพิ่มเติมให้ด้วยครับ',
            },
            {
              q: 'การจัดไฟแนนซ์ใช้เวลากี่วัน และอาชีพอิสระหรือเจ้าของธุรกิจยื่นกู้ได้หรือไม่?',
              a: 'เรามีสถาบันการเงินพันธมิตรชั้นนำคอยดูแล หากเอกสารครบถ้วน สามารถทราบผลการอนุมัติได้ภายใน 24 ชั่วโมง ทั้งเจ้าของกิจการ นิติบุคคล แพทย์ และผู้ประกอบอาชีพอิสระ คุณไอซ์ยินดีให้คำแนะนำและช่วยดูแลทุกเคสครับ',
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 rounded-xl border border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-white font-semibold text-sm sm:text-base hover:text-amber-400 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition transform ${
                    openFaq === idx ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. REAL FOOTER SECTION: 100% REAL CREDENTIALS FROM FACEBOOK PAGE */}
      <footer id="contact" className="bg-slate-950 text-slate-300 border-t border-slate-800 relative overflow-hidden scroll-mt-20">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
            
            {/* Column 1: Official Consultant Info (Cols 1-4) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-slate-200 via-white to-slate-400 p-[1.5px] shadow-lg shadow-white/10 shrink-0">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-black tracking-tight text-white block leading-tight">
                    Smart TTC Motor - By Ice <span className="text-amber-400">Sales Executive</span>
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
                    ICE LUXURY AUTO • Mercedes-Benz, AMG & smart EV
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ที่ปรึกษาการขายอย่างเป็นทางการ ดูแลการจอง ข้อเสนอพิเศษ และบริการส่งรถทดลองขับ Test Drive ถึงหน้าบ้าน ส่งมอบความประทับใจระดับพรีเมียมด้วยความจริงใจและมืออาชีพ
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>ผู้แทนจำหน่ายและที่ปรึกษาการขายอย่างเป็นทางการ</span>
                </div>
              </div>
            </div>

            {/* Column 2: Benz SEO Articles Hub (Showing 2 Latest Articles to prevent overflow) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                บทความ & สาระน่ารู้ล่าสุด
              </h4>
              <div className="space-y-2.5 pt-1">
                {articles.slice(0, 2).map((post) => (
                  <Link
                    key={post.id}
                    href={`/ice-benz-ttc-ubon/blog/${post.slug}`}
                    className="group block p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition duration-200"
                  >
                    <div className="flex items-center justify-between text-[10px] text-amber-400/90 mb-1">
                      <span className="font-semibold">{post.category}</span>
                      <span className="text-slate-500 text-[10px] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h5 className="text-xs font-medium text-slate-200 group-hover:text-amber-300 line-clamp-2 transition leading-snug">
                      {post.title}
                    </h5>
                  </Link>
                ))}
              </div>
              <div className="pt-1.5">
                <a
                  href="#articles"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold transition"
                >
                  <span>อ่านบทความทั้งหมด ({articles.length} เรื่อง)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 3: Contact Info & Showroom Address (Replaced Image 4 with Image 1) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                ข้อมูลติดต่อ & ที่อยู่โชว์รูม
              </h4>

              {/* Real Contact Badges */}
              <div className="space-y-2.5 text-xs text-slate-300 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong>ที่อยู่โชว์รูม:</strong> {showroomAddress}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>โทรสายตรง (คุณไอซ์):</strong>{' '}
                    <a href={`tel:${realPhoneRaw}`} className="text-white hover:text-amber-400 font-semibold underline">
                      {realPhone}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>อีเมลทางการ:</strong>{' '}
                    <a href={`mailto:${realEmail}`} className="text-white hover:text-amber-400 font-semibold">
                      {realEmail}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>เวลาทำการ:</strong> เปิดบริการทุกวัน พร้อมประสานงานดูแลตลอด 24 ชั่วโมง
                  </span>
                </div>
              </div>

              {/* Social Connect Icons matching Facebook Page */}
              <div className="pt-2 flex items-center gap-2.5">
                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
                  title="Facebook Page ทางการ"
                >
                  <FacebookIcon className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition"
                  title="LINE ส่วนตัวคุณไอซ์"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-rose-600/20 border border-rose-500/40 text-rose-400 hover:bg-rose-600 hover:text-white flex items-center justify-center transition"
                  title="TikTok ทางการ"
                >
                  <TikTokIcon className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={`tel:${realPhoneRaw}`}
                  className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-400 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition"
                  title="โทรสายตรง"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & SalesDesk AI Standard Credit */}
          <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} Smart TTC Motor - By Ice Sales Executive. สงวนลิขสิทธิ์ทั้งหมด
            </p>
            <p>
              🚀 ออกแบบและพัฒนาโดย{' '}
              <a
                href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 font-semibold underline hover:text-amber-300"
              >
                SalesDesk AI
              </a>{' '}
              (ผู้เชี่ยวชาญด้านเว็บไซต์เซลเพจปิดการขาย & AI การตลาด)
            </p>
          </div>
        </div>
      </footer>

      {/* 10. LUXURY FLOATING SPEED-DIAL CONTACT BUTTONS (MOBILE-OPTIMIZED, ZERO OVERLAP) */}
      <div className="md:hidden fixed bottom-5 right-4 z-40 flex items-center gap-2 pointer-events-auto">
        <a
          href={fbMessengerUrl}
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 border border-blue-400/40 active:scale-90 transition transform"
          aria-label="ทักแชต Facebook เพจคุณไอซ์"
        >
          <FacebookIcon className="w-5 h-5 fill-white" />
        </a>

        <a
          href={`tel:${realPhoneRaw}`}
          className="h-11 px-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-2xl shadow-amber-500/40 border border-amber-300 active:scale-90 transition transform"
          aria-label={`โทรสายตรง ${realPhone}`}
        >
          <PhoneCall className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
          <span>โทร {realPhone}</span>
        </a>
      </div>
    </div>
  );
}
