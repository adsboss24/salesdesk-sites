'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  Clock,
  Sparkles,
  Award,
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
} from 'lucide-react';
import PremiumFooter from '@/components/Footer';
import DemoBanner, { useDemoMode } from '@/components/DemoBanner';
import StructuredData from '@/components/StructuredData';

export default function IceBenzTTCUbonSalepage() {
  const { isDemo, phoneDisplay, phoneCallUrl, lineUrl } = useDemoMode({
    clientName: 'น้องไอซ์ TTC Motor อุบลราชธานี (Mercedes-Benz)',
    pageKey: 'ice-benz-ttc-ubon',
    defaultClientPhone: '045-475-222',
    defaultClientLine: 'https://line.me/R/ti/p/@benzttcubon',
  });

  // Interactive Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    modelInterest: 'The New E-Class (E 220 d / E 350 e)',
    serviceType: 'จองคิวทดลองขับ Test Drive ถึงที่บ้าน',
    province: 'อุบลราชธานี',
    preferredDate: '',
    tradeInDetails: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCarTab, setActiveCarTab] = useState<'all' | 'sedan' | 'suv' | 'amg' | 'eq'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('กรุณากรอกชื่อ-นามสกุล และเบอร์โทรศัพท์ติดต่อกลับครับ');
      return;
    }
    setIsSubmitted(true);
  };

  // Structured Data Schema for Local Business (Auto Dealer)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    '@id': 'https://salesdesk-sites.vercel.app/ice-benz-ttc-ubon#dealer',
    name: 'TTC Motor อุบลราชธานี - น้องไอซ์ ที่ปรึกษาการขาย Mercedes-Benz',
    image: 'https://salesdesk-sites.vercel.app/images/benz/hero-benz.jpg',
    telephone: '045-475-222',
    url: 'https://salesdesk-sites.vercel.app/ice-benz-ttc-ubon',
    priceRange: '฿฿฿฿฿',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '365 หมู่ 14 ถนนชยางกูร ตำบลขามใหญ่ (ใกล้เทศบาลตำบลขามใหญ่)',
      addressLocality: 'อำเภอเมือง',
      addressRegion: 'อุบลราชธานี',
      postalCode: '34000',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '15.2891',
      longitude: '104.8472',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:30',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
  };

  // Car Lineup Data
  const carLineup = [
    {
      id: 'c-class',
      name: 'The C-Class (C 220 d / C 350 e AMG Dynamic)',
      category: 'sedan',
      tagline: 'ยนตรกรรมสปอร์ตซีดานยอดนิยม นิยามแห่งความคล่องตัวและหรูหรา',
      price: 'เริ่มต้น 2,790,000 บาท',
      downPayment: 'ดาวน์เริ่มต้น 10% หรือผ่อนเริ่มต้น 28,xxx บ./ด.',
      image: '/images/benz/c-class.jpg',
      specs: [
        { label: 'ขุมพลัง', val: 'Plug-in Hybrid / Diesel Turbo' },
        { label: 'อัตราเร่ง 0-100', val: '5.7 วินาที' },
        { label: 'หน้าจอสัมผัส', val: 'MBUX 11.9 นิ้ว' },
        { label: 'โหมดไฟฟ้า EV', val: 'วิ่งไกลกว่า 100 กม.' },
      ],
      badge: 'Bestseller ยอดนิยม',
    },
    {
      id: 'e-class',
      name: 'The New E-Class (E 220 d / E 350 e AMG Dynamic)',
      category: 'sedan',
      tagline: 'ที่สุดแห่งยนตรกรรมซีดานผู้บริหาร ก้าวล้ำด้วย Superscreen AI อัจฉริยะ',
      price: 'เริ่มต้น 3,990,000 บาท',
      downPayment: 'ดอกเบี้ยพิเศษ 0.99% หรือฟรี MBSP 5 ปี',
      image: '/images/benz/cockpit-mbux.jpg',
      specs: [
        { label: 'คอนโซลหน้า', val: 'MBUX Superscreen เต็มบาน' },
        { label: 'ระบบช่วยเหลือ', val: 'Driving Assistance Plus' },
        { label: 'ระบบเสียง', val: 'Burmester® 4D Surround' },
        { label: 'ช่วงล่าง', val: 'AIRMATIC นุ่มนวลสูงสุด' },
      ],
      badge: 'รุ่นใหม่ล่าสุด New Arrival',
    },
    {
      id: 'glc-suv',
      name: 'The New GLC (GLC 220 d / GLC 350 e 4MATIC AMG)',
      category: 'suv',
      tagline: 'SUV พรีเมียมขับเคลื่อน 4 ล้อ พร้อมรับมือทุกการเดินทางของครอบครัว',
      price: 'เริ่มต้น 3,790,000 บาท',
      downPayment: 'ฟรีประกันภัยชั้น 1 + ฟรีวารันตีแบตเตอรี่ 10 ปี',
      image: '/images/benz/glc-suv.jpg',
      specs: [
        { label: 'ระบบขับเคลื่อน', val: '4MATIC All-Wheel Drive' },
        { label: 'หลังคา', val: 'Panoramic Sunroof เปิด-ปิดไฟฟ้า' },
        { label: 'ไฟหน้า', val: 'DIGITAL LIGHT พร้อมส่องสว่างไกล' },
        { label: 'พื้นที่สัมภาระ', val: 'จุได้สูงสุด 1,680 ลิตร' },
      ],
      badge: 'ครอบครัว & ท่องเที่ยว',
    },
    {
      id: 's-class',
      name: 'The S-Class (S 350 d / S 580 e AMG Premium)',
      category: 'sedan',
      tagline: 'สุดยอดยนตรกรรมเรือธงระดับผู้นำ นิยามความสง่างามระดับ World Luxury Class',
      price: 'เริ่มต้น 7,190,000 บาท',
      downPayment: 'เอกสิทธิ์เฉพาะผู้นำ รับข้อเสนอ Exclusive Executive Deal',
      image: '/images/benz/s-class.jpg',
      specs: [
        { label: 'เบาะโดยสารหลัง', val: 'First-Class Executive Seat' },
        { label: 'ระบบนวด', val: 'Energizing Comfort 10 โปรแกรม' },
        { label: 'ระบบเลี้ยว', val: 'Rear-axle steering เลี้ยว 4 ล้อ' },
        { label: 'ระบบไฟ', val: 'Active Ambient Lighting 64 สี' },
      ],
      badge: 'ที่สุดแห่งความหรูหรา',
    },
    {
      id: 'amg-performance',
      name: 'Mercedes-AMG High Performance (CLA 35 / C 43 / SL 43)',
      category: 'amg',
      tagline: 'กำเนิดจากสนามแข่ง สู่จิตวิญญาณสปอร์ตพันธุ์แท้ แรงเร้าใจทุกสัมผัส',
      price: 'เริ่มต้น 3,990,000 บาท',
      downPayment: 'ฟรีชุดแต่ง Carbon Package + ประกันภัยชั้น 1',
      image: '/images/benz/hero-benz.jpg',
      specs: [
        { label: 'สมรรถนะ', val: 'AMG SPEEDSHIFT TCT' },
        { label: 'เสียงท่อไอเสีย', val: 'AMG Real Performance Sound' },
        { label: 'พวงมาลัย', val: 'AMG Performance Steering Wheel' },
        { label: 'ช่วงล่าง', val: 'AMG RIDE CONTROL Sport' },
      ],
      badge: 'Pure AMG DNA',
    },
    {
      id: 'eq-electric',
      name: 'Mercedes-Benz EQ 100% Electric (EQA / EQB / EQE / EQS)',
      category: 'eq',
      tagline: 'นวัตกรรมยานยนต์ไฟฟ้าหรู 100% เงียบสงบ ทรงพลัง ไร้มลพิษ',
      price: 'เริ่มต้น 2,890,000 บาท',
      downPayment: 'ฟรี Wallbox Charger พร้อมติดตั้ง + รับประกันแบตเตอรี่ 10 ปี',
      image: '/images/benz/cockpit-mbux.jpg',
      specs: [
        { label: 'ระยะทางวิ่ง', val: 'สูงสุดกว่า 780 กม. (EQS)' },
        { label: 'ชาร์จด่วน DC', val: '10-80% ในเวลาเพียง 31 นาที' },
        { label: 'ระบบกรองอากาศ', val: 'HEPA Filter ป้องกัน PM2.5 99.65%' },
        { label: 'ค่าบำรุงรักษา', val: 'ฟรีเช็กระยะ 5 ปี' },
      ],
      badge: 'พลังงานสะอาด 100%',
    },
  ];

  const filteredCars =
    activeCarTab === 'all'
      ? carLineup
      : carLineup.filter((car) => car.category === activeCarTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      {/* Schema Injection */}
      <StructuredData data={localBusinessSchema} id="benz-local-schema" />

      {/* 0. AGENCY DEMO BANNER FOR TTC MOTOR CLIENT PROSPECT */}
      <DemoBanner
        clientName="น้องไอซ์ TTC Motor อุบลราชธานี"
        pageKey="ice-benz-ttc-ubon"
      />

      {/* 1. ANNOUNCEMENT & STICKY HEADER */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-slate-950 text-xs py-2 px-4 font-semibold text-center tracking-wide shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />
          <span>แคมเปญพิเศษเฉพาะเดือนนี้: ดอกเบี้ยพิเศษ 0% หรือเลือกรับฟรี MBSP บำรุงรักษา 5 ปีเต็ม พร้อมส่งมอบรถถึงบ้านคุณ</span>
          <a
            href="#booking-form"
            className="underline font-bold hover:text-white transition ml-1"
          >
            จองสิทธิ์ด่วน &rarr;
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Logo & Dealership Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-200 via-white to-slate-400 p-[1.5px] shadow-lg shadow-white/10 shrink-0">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                  TTC MOTOR <span className="text-amber-400">UBON</span>
                </span>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30 whitespace-nowrap">
                  Authorized Dealer
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate">
                น้องไอซ์ • ที่ปรึกษาการขาย Mercedes-Benz & Mercedes-AMG
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={phoneCallUrl}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/60 text-slate-200 text-xs sm:text-sm font-semibold transition whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">โทร</span> {phoneDisplay}
            </a>

            <a
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/20 transition whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>แอด LINE คุยกับน้องไอซ์</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. CINEMATIC HERO SECTION (16:9 DUAL-DEVICE FRAMING) */}
      <section className="relative min-h-[92vh] sm:min-h-[680px] lg:min-h-[760px] flex flex-col justify-between overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/benz/hero-benz.jpg"
            alt="Mercedes-Benz TTC Motor Ubon Ratchathani"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_center] lg:object-right brightness-105 contrast-[1.03]"
          />

          {/* Desktop Left Scrim: Darkens left 50% for 100% white text contrast */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 via-50% to-transparent" />

          {/* Mobile Multi-Layer Scrim: */}
          {/* Layer 1 (Top Scrim): 0-25% dark behind top headline */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/50 via-30% to-transparent" />

          {/* Layer 2 (Bottom Scrim): Soft dark gradient behind bottom action buttons */}
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-80 bg-gradient-to-t from-slate-950 via-slate-950/90 via-60% to-transparent" />

          {/* Desktop Bottom Edge Fade */}
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Foreground Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-16 pb-4 sm:pb-8 lg:py-24 relative z-10 w-full flex-1 flex flex-col justify-between">
          {/* Top Block: Badges & Headings */}
          <div className="lg:col-span-7 max-w-2xl space-y-3.5 sm:space-y-6 text-center lg:text-left">
            {/* Luxury Dealer Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold shadow-xl">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>ผู้จำหน่ายอย่างเป็นทางการ TTC Motor อุบลราชธานี</span>
            </div>

            {/* Headline with Mandatory Thai Typography Integrity */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25] lg:leading-[1.22] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              <span className="block">ออกรถ Mercedes-Benz ป้ายแดง</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 block mt-2 sm:mt-3 pb-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                รับข้อเสนอดีที่สุดกับ น้องไอซ์ TTC Motor
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              สัมผัสประสบการณ์ยนตรกรรมระดับพรีเมียม ดอกเบี้ยพิเศษ 0% หรือผ่อนสบาย รับประกัน MBSP สูงสุด 5 ปี พร้อมบริการนำรถทดลองขับ Test Drive ส่งตรงถึงบ้านคุณทั่วภาคอีสาน
            </p>

            {/* Desktop-only CTAs & Micro Trust */}
            <div className="hidden lg:block space-y-4 pt-2">
              <div className="flex flex-row items-center justify-start gap-4">
                <a
                  href="#booking-form"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  จองคิวทดลองขับ / ขอใบเสนอราคา &rarr;
                </a>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 font-semibold text-base backdrop-blur-md transition whitespace-nowrap"
                >
                  ปรึกษาน้องไอซ์ผ่าน LINE
                </a>
              </div>

              {/* 3 Trust Checkmarks */}
              <div className="flex items-center gap-6 text-xs text-slate-200 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>โชว์รูมและศูนย์บริการมาตรฐานเยอรมัน</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>รับเทิร์นรถเก่าให้ราคาสูง</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>จัดไฟแนนซ์ผ่านง่าย ดันทุกเคส</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Block: Mobile CTAs & 4 Glassmorphic Feature Badges */}
          <div className="mt-6 sm:mt-12">
            {/* Mobile-only CTAs */}
            <div className="lg:hidden space-y-2.5 mb-4">
              <a
                href="#booking-form"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-sm text-center block shadow-lg shadow-amber-500/20"
              >
                จองคิวทดลองขับ / ขอใบเสนอราคาด่วน
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={phoneCallUrl}
                  className="py-2.5 px-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" /> โทรคุยน้องไอซ์
                </a>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-emerald-600/90 text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> แอดไลน์รับโปร
                </a>
              </div>
            </div>

            {/* 4 Glassmorphic Feature Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              <div className="bg-slate-950/65 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-white">ผู้จำหน่ายทางการ</span>
                </div>
                <p className="text-[11px] text-slate-300">TTC Motor อุบลราชธานี มาตรฐานรับรอง Mercedes-Benz</p>
              </div>

              <div className="bg-slate-950/65 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Car className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-white">Test Drive ถึงที่บ้าน</span>
                </div>
                <p className="text-[11px] text-slate-300">นำรถไปให้ทดลองขับถึงที่ทำงานหรือที่บ้านทั่วอีสานใต้</p>
              </div>

              <div className="bg-slate-950/65 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-white">MBSP นาน 5 ปี</span>
                </div>
                <p className="text-[11px] text-slate-300">โปรแกรมบำรุงรักษาและรับประกันคุณภาพ ไม่จำกัดระยะทาง</p>
              </div>

              <div className="bg-slate-950/65 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <BadgePercent className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-white">Trade-in ราคาสูง</span>
                </div>
                <p className="text-[11px] text-slate-300">รับประเมินราคารถเก่าทุกรุ่นถึงที่ เพิ่มมูลค่าแลกเบนซ์ใหม่</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TARGET AUDIENCE & MODEL LINEUP SHOWCASE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
            <Car className="w-3.5 h-3.5" /> Mercedes-Benz Model Lineup
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
            <span className="block">ยนตรกรรมระดับพรีเมียม</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
              พร้อมส่งมอบและข้อเสนอที่ดีที่สุด
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            เลือกชมรุ่นรถที่คุณหลงใหล ไม่ว่าจะเป็นซีดานหรู SUV ครอบครัว หรือยนตรกรรมไฟฟ้า 100% น้องไอซ์พร้อมให้ข้อมูลและจัดแคมเปญพิเศษให้คุณ
          </p>

          {/* Model Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {[
              { id: 'all', label: 'ทุกรุ่นยอดนิยม' },
              { id: 'sedan', label: 'Executive Sedan (C/E/S)' },
              { id: 'suv', label: 'Luxury SUV (GLC/GLE)' },
              { id: 'amg', label: 'Mercedes-AMG' },
              { id: 'eq', label: 'EQ Electric 100%' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCarTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
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
                {/* Car Image with Badge */}
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
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 line-clamp-2">
                    {car.tagline}
                  </p>

                  <div className="my-4 pt-3 border-t border-slate-800">
                    <div className="text-sm font-semibold text-amber-400">
                      {car.price}
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      {car.downPayment}
                    </div>
                  </div>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    {car.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] text-slate-400">{spec.label}</span>
                        <span className="font-semibold text-slate-200">{spec.val}</span>
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
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 text-xs sm:text-sm font-bold text-center block transition shadow-md shadow-amber-500/10"
                >
                  ขอใบเสนอราคา / นัดทดลองขับ
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE EXCELLENCE & WHY CHOOSE US ("ทำไมลูกค้า VIP ถึงเลือกออกรถกับ น้องไอซ์ TTC Motor") */}
      <section className="py-16 sm:py-24 bg-slate-900/60 border-y border-slate-800/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
              <Award className="w-3.5 h-3.5" /> TTC Star Privileges
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              <span className="block">ทำไมผู้บริหารและลูกค้าระดับ VIP</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
                ถึงไว้วางใจออกรถกับ น้องไอซ์ TTC Motor อุบลฯ
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              เราใส่ใจทุกรายละเอียดมากกว่าแค่การขายรถยนต์ แต่คือการดูแลระดับ Exclusive ตลอดอายุการใช้งานของคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BadgePercent,
                title: 'Exclusive Deals & Flexible Financing',
                desc: 'ดีลที่ดีที่สุดตามงบประมาณของคุณ ดอกเบี้ยพิเศษ 0% หรือโปรแกรมผ่อนบอลลูน mySTAR สบายกระเป๋า อนุมัติไวผ่านง่าย',
              },
              {
                icon: Car,
                title: 'VIP Home Test Drive Service',
                desc: 'บริการส่งรถทดลองขับถึงหน้าบ้านหรือออฟฟิศของคุณ ทั้งในอุบลฯ ศรีสะเกษ ยโสธร อำนาจเจริญ มุกดาหาร สะดวกสบายไม่ต้องเดินทาง',
              },
              {
                icon: KeyRound,
                title: 'High-Value Trade-in Appraisal',
                desc: 'บริการประเมินราคารถยนต์คันเก่าทุกยี่ห้อถึงที่ ให้ราคาสูงกว่าตลาดเต็นท์รถทั่วไป พร้อมส่วนลด Top-up พิเศษเพื่อเปลี่ยนเป็นเบนซ์คันใหม่',
              },
              {
                icon: ShieldCheck,
                title: 'Authorized Mercedes-Benz Center',
                desc: 'ศูนย์บริการทางการมาตรฐานเยอรมัน พร้อมช่างผู้เชี่ยวชาญระดับ Certified Master Technicians เครื่องมือวิเคราะห์ลิขสิทธิ์แท้',
              },
              {
                icon: Clock,
                title: '24-Hour Star Assist Emergency',
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

      {/* 5. SHOWROOM & CERTIFIED SERVICE CENTER SHOWCASE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold border border-amber-400/20">
              <MapPin className="w-3.5 h-3.5" /> โชว์รูมและศูนย์บริการมาตรฐานครบวงจร
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              <span className="block">TTC Motor อุบลราชธานี</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
                ศูนย์บริการเบนซ์แห่งเดียวบน ถ.ชยางกูร
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              สัมผัสความหรูหราของโชว์รูมที่ออกแบบตามมาตรฐาน Mercedes-Benz MAR20X พร้อมพื้นที่รับรอง VIP Lounge สุดเอ็กซ์คลูซีฟ ศูนย์ซ่อมสีและตัวถังที่ผ่านการรับรองมาตรฐานเยอรมัน
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">ทำเลสะดวก ใจกลางเมืองอุบลราชธานี</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ตั้งอยู่เลขที่ 365 หมู่ 14 ถนนชยางกูร ตำบลขามใหญ่ (ใกล้เทศบาลตำบลขามใหญ่) เดินทางสะดวก มีที่จอดรถกว้างขวาง
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">ศูนย์ซ่อมสีและตัวถังที่ได้รับการรับรอง (Certified Body & Paint)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ห้องอบสีระบบมาตรฐานโลก สีแท้คุณภาพสูง คืนสภาพความเงางามและปลอดภัย 100% ตามมาตรฐานโรงงานเมอร์เซเดส-เบนซ์
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">บริการ Door-to-Door Service</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    บริการรับ-ส่งรถยนต์ของคุณเพื่อเข้าเช็กระยะตามรอบบำรุงรักษา ประหยัดเวลาของท่านผู้บริหาร
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={phoneCallUrl}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm transition"
              >
                นัดหมายนำรถเข้าศูนย์บริการ
              </a>
              <a
                href="https://maps.google.com/?q=TTC+Motor+Ubon+Ratchathani"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-slate-200 text-sm font-semibold transition flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-400" /> นำทาง Google Maps
              </a>
            </div>
          </div>

          {/* Showroom & Service Photo Showcase */}
          <div className="relative h-80 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="/images/benz/service-center.jpg"
              alt="TTC Motor Ubon Showroom & Service Center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">TTC Motor อุบลราชธานี</h4>
                  <p className="text-xs text-amber-400">เปิดบริการ จันทร์-เสาร์ 08:30-17:30 น. (อาทิตย์ 09:00-16:00 น.)</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-400">Official Dealer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROMOTION & FINANCIAL CAMPAIGNS ("ข้อเสนอพิเศษประจำเดือน") */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
              <BadgePercent className="w-3.5 h-3.5" /> Monthly Campaign
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              <span className="block">3 แคมเปญสุด Exclusive</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
                เมื่อจองรถกับน้องไอซ์ภายในเดือนนี้
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
                    <span>ฟรี ประกันภัยชั้น 1 Mercedes-Benz Protection 1 ปี</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ฟรี บริการช่วยเหลือฉุกเฉิน Star Assist 24 ชม.</span>
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
                    tradeInDetails: 'สนใจแคมเปญ Tier 1: Worry-Free MBSP Package',
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
                <h3 className="text-xl font-bold text-white mt-4">0% Interest & Financial Freedom</h3>
                <p className="text-xs text-slate-400 mt-2">
                  ทางเลือกทางการเงินเพื่อสภาพคล่องสูงสุด ดอกเบี้ยพิเศษสุดคุ้ม
                </p>

                <div className="my-6 py-4 border-y border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-bold text-white">ดอกเบี้ยพิเศษเริ่มต้น 0% หรือเลือกผ่อนเบา</span>
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
                    tradeInDetails: 'สนใจแคมเปญ Tier 2: 0% Interest & Financial Freedom',
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
                  นำรถยนต์คันเก่าทุกยี่ห้อมาแลกเบนซ์ใหม่ รับมูลค่าเพิ่มทันที
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
                    tradeInDetails: 'สนใจแคมเปญ Tier 3: VIP Trade-in Plus',
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

      {/* 7. SOCIAL PROOF & CUSTOMER DELIVERY REVIEWS ("ความประทับใจจากลูกค้าที่ออกรถกับน้องไอซ์") */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Real Customer Stories
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
            <span className="block">ความประทับใจและเสียงยืนยัน</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
              จากลูกค้าคนสำคัญที่ออกรถกับ น้องไอซ์ TTC Motor
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
                'ประทับใจการบริการของน้องไอซ์มากครับ นำรถ The New E-Class มาให้ทดลองขับถึงที่ทำงานในเมืองอุบลฯ ให้คำแนะนำเรื่องฟังก์ชัน Superscreen และประสานงานไฟแนนซ์รวดเร็วมาก ได้รับรถทันฤกษ์อย่างสบายใจครับ',
              author: 'คุณพงศกร ธนากิจโสภณ',
              role: 'นักธุรกิจและผู้บริหาร จ.อุบลราชธานี',
              model: 'Mercedes-Benz The New E 350 e AMG Dynamic',
            },
            {
              quote:
                'บ้านเราอยู่อำเภอเมือง ศรีสะเกษ อยากได้ GLC สำหรับครอบครัว น้องไอซ์ขับรถมาให้ลองถึงหน้าบ้านเลย บริการเทิร์นรถคันเก่าให้ราคาดีมาก อธิบายข้อเสนอชัดเจน ตรงไปตรงมา แนะนำเลยครับสำหรับใครที่จะออกเบนซ์ในอีสาน',
              author: 'แพทย์หญิงศศิธร และครอบครัว',
              role: 'แพทย์ผู้เชี่ยวชาญ จ.ศรีสะเกษ',
              model: 'Mercedes-Benz GLC 220 d 4MATIC AMG',
            },
            {
              quote:
                'ออก C-Class คันแรก ประทับใจตั้งแต่ครั้งแรกที่ทักคุยในเพจ น้องไอซ์ตอบไวมาก จัดหาโปรโมชั่นดอกเบี้ยพิเศษและแพ็กเกจ MBSP 5 ปีให้แบบจัดเต็ม วันรับรถมีพิธีส่งมอบที่หรูหราและน่าประทับใจสุดๆ ครับ',
              author: 'คุณวรเมธ วิริยะพาณิชย์',
              role: 'ผู้จัดการฝ่ายการตลาด จ.ยโสธร',
              model: 'Mercedes-Benz C 220 d Avantgarde',
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

      {/* 8. INTERACTIVE LEAD CAPTURE FORM ("ลงทะเบียนจองสิทธิ์ทดลองขับ / ขอใบเสนอราคา") */}
      <section id="booking-form" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-12 rounded-3xl border border-amber-400/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Exclusive VIP Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3 leading-normal sm:leading-[1.25]">
              ลงทะเบียนรับข้อเสนอพิเศษ & นัดหมายทดลองขับ
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              กรอกข้อมูลเพื่อให้ น้องไอซ์ TTC Motor อุบลราชธานี ติดต่อกลับเพื่อจัดส่งใบเสนอราคาพิเศษหรือนำรถไปให้ทดลองขับถึงที่
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-slate-900/90 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-4 max-w-lg mx-auto relative z-10">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">ลงทะเบียนเรียบร้อยแล้วครับ!</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                น้องไอซ์ได้รับข้อมูลของท่านแล้ว และจะติดต่อกลับทางเบอร์โทรศัพท์ <span className="text-amber-400 font-bold">{formData.phone}</span> ภายใน 15-30 นาทีเพื่อประสานงานข้อเสนอพิเศษและคิวทดลองขับครับ
              </p>
              <div className="pt-2">
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition"
                >
                  <MessageCircle className="w-4 h-4" /> แอด LINE คุยด่วนกับน้องไอซ์
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
                    รุ่นรถยนต์ Mercedes-Benz ที่ท่านสนใจ
                  </label>
                  <select
                    value={formData.modelInterest}
                    onChange={(e) => setFormData({ ...formData, modelInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition"
                  >
                    <option value="The New E-Class (E 220 d / E 350 e)">The New E-Class (E 220 d / E 350 e AMG)</option>
                    <option value="The C-Class (C 220 d / C 350 e)">The C-Class (C 220 d / C 350 e AMG Dynamic)</option>
                    <option value="The GLC SUV (GLC 220 d / GLC 350 e)">The New GLC SUV (4MATIC AMG Dynamic)</option>
                    <option value="The S-Class (S 350 d / S 580 e)">The S-Class (S 350 d / S 580 e Premium)</option>
                    <option value="Mercedes-AMG High Performance">Mercedes-AMG High Performance</option>
                    <option value="Mercedes-Benz EQ 100% Electric">Mercedes-Benz EQ ยานยนต์ไฟฟ้า 100%</option>
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
                    <option value="นัดหมายเข้าชมรถจริงที่โชว์รูม TTC Motor อุบลฯ">นัดหมายเข้าชมรถจริงที่โชว์รูม TTC Motor อุบลฯ</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    จังหวัดที่พักอาศัย / สถานที่ส่งรถทดลองขับ
                  </label>
                  <select
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition"
                  >
                    <option value="อุบลราชธานี">อุบลราชธานี</option>
                    <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                    <option value="ยโสธร">ยโสธร</option>
                    <option value="อำนาจเจริญ">อำนาจเจริญ</option>
                    <option value="มุกดาหาร">มุกดาหาร</option>
                    <option value="จังหวัดอื่นในภาคอีสาน">จังหวัดอื่นในภาคอีสาน</option>
                  </select>
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
                  placeholder="ระบุความต้องการเพิ่มเติม เช่น ต้องการผ่อนไม่เกิน 35,000 หรือมีรถคันเก่า Camry ปี 2020 จะเทิร์น..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>ยืนยันข้อมูลเพื่อรับสิทธิ์และข้อเสนอพิเศษทันที</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 ข้อมูลของท่านจะถูกเก็บเป็นความลับตามนโยบาย PDPA และใช้สำหรับการติดต่อประสานงานโดยตรงจาก น้องไอซ์ TTC Motor อุบลราชธานี เท่านั้น
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-semibold mb-2 border border-slate-800">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> คำถามที่พบบ่อย (FAQ)
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white">
            ข้อสงสัยก่อนออกรถ Mercedes-Benz
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'บริการทดลองขับถึงบ้าน (Home Test Drive) มีค่าใช้จ่ายหรือไม่ และครอบคลุมจังหวัดใดบ้าง?',
              a: 'ไม่มีค่าใช้จ่ายใดๆ ทั้งสิ้นครับ น้องไอซ์ยินดีประสานงานนำรถ Mercedes-Benz รุ่นที่ท่านสนใจไปให้ทดลองขับถึงหน้าบ้านหรือที่ทำงาน ครอบคลุมทั้งจังหวัดอุบลราชธานี, ศรีสะเกษ, ยโสธร, อำนาจเจริญ และมุกดาหาร โดยสามารถนัดหมายวันเวลาที่ท่านสะดวกได้ล่วงหน้าครับ',
            },
            {
              q: 'โปรแกรม MBSP (Mercedes-Benz Service Plus) ครอบคลุมอะไรบ้าง?',
              a: 'MBSP คือโปรแกรมบำรุงรักษาและขยายเวลารับประกันคุณภาพของเมอร์เซเดส-เบนซ์ โดยครอบคลุมค่าแรง ค่าอะไหล่แท้ และของเหลวตามระยะทางมาตรฐานสูงสุด 5 ปี ไม่จำกัดระยะทาง พร้อมบริการช่วยเหลือฉุกเฉิน Star Assist ตลอด 24 ชม. ทั่วประเทศ',
            },
            {
              q: 'สามารถนำรถยนต์คันเก่าต่างยี่ห้อมาแลกเปลี่ยน (Trade-in) ได้หรือไม่?',
              a: 'สามารถนำรถยนต์คันเก่าทุกรุ่น ทุกยี่ห้อ มาประเมินราคาแลกเปลี่ยนได้เลยครับ โดยทีมงาน TTC Motor จะทำการประเมินราคาให้ถึงบ้านท่าน พร้อมให้ราคาสูงกว่าตลาดเต็นท์รถทั่วไป และมีแคมเปญ Trade-in Top-up มอบส่วนลดพิเศษเพิ่มเติมสำหรับการออกรถเบนซ์คันใหม่ด้วยครับ',
            },
            {
              q: 'การจัดไฟแนนซ์ใช้เวลากี่วัน และอาชีพอิสระหรือเจ้าของธุรกิจยื่นกู้ได้หรือไม่?',
              a: 'เรามีสถาบันการเงินพันธมิตรชั้นนำ (Mercedes-Benz Mobility และธนาคารชั้นนำ) คอยดูแล โดยหากเอกสารครบถ้วน สามารถทราบผลการอนุมัติได้ภายใน 24 ชั่วโมง ทั้งเจ้าของกิจการ นิติบุคคล แพทย์ ข้าราชการ และผู้ประกอบอาชีพอิสระ น้องไอซ์ยินดีให้คำแนะนำและช่วยดันทุกเคสครับ',
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

      {/* 9. SALESDESK AI BRANDING IN FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} TTC Motor อุบลราชธานี • น้องไอซ์ ที่ปรึกษาการขาย Mercedes-Benz & Mercedes-AMG อย่างเป็นทางการ
          </p>
          <p className="text-xs text-slate-400">
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
      </footer>

      {/* 10. FIXED MOBILE ACTION BAR */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={phoneCallUrl}
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs active:scale-95 transition"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>โทรหาน้องไอซ์</span>
          </a>
          <a
            href={lineUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>แอด LINE รับโปร</span>
          </a>
        </div>
      </div>
    </div>
  );
}
