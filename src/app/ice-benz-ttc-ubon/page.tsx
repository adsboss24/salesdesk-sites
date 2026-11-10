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

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function IceBenzTTCUbonSalepage() {
  const fbPageUrl = 'https://www.facebook.com/Icebenzttcmotorubon/';
  const fbMessengerUrl = 'https://m.me/Icebenzttcmotorubon';
  const realPhone = '045-475-222';

  const { isDemo, phoneDisplay, phoneCallUrl } = useDemoMode({
    clientName: 'ICE LUXURY AUTO (Mercedes-Benz & AMG Specialist)',
    pageKey: 'ice-benz-ttc-ubon',
    defaultClientPhone: realPhone,
    defaultClientLine: 'https://line.me/R/ti/p/@fhu6688s',
  });

  // Interactive Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    modelInterest: 'The New E-Class (E 220 d / E 350 e AMG Dynamic)',
    serviceType: 'จองคิวทดลองขับ Test Drive ถึงที่บ้าน',
    location: 'กรุงเทพฯ และปริมณฑล หรือภาคอีสาน',
    preferredDate: '',
    tradeInDetails: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCarTab, setActiveCarTab] = useState<'all' | 'sedan' | 'suv' | 'amg' | 'smart'>('all');
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

  // Structured Data Schema for Auto Dealer / Luxury Consultant
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    '@id': 'https://salesdesk-sites.vercel.app/ice-benz-ttc-ubon#dealer',
    name: 'ICE LUXURY AUTO - Certified Mercedes-Benz & AMG Specialist',
    image: 'https://salesdesk-sites.vercel.app/images/benz/hero-benz.jpg',
    telephone: realPhone,
    url: 'https://salesdesk-sites.vercel.app/ice-benz-ttc-ubon',
    sameAs: [fbPageUrl],
    priceRange: '฿฿฿฿฿',
    description:
      'ที่ปรึกษาการขายและบริการยนตรกรรมระดับพรีเมียม Mercedes-Benz, Mercedes-AMG และ smart EV พร้อมข้อเสนอพิเศษ ส่งมอบและทดลองขับถึงที่ทั่วประเทศ',
  };

  // Real Models Lineup matching official Facebook Page catalog
  const carLineup = [
    {
      id: 'e-class',
      name: 'The New E-Class (E 220 d / E 350 e AMG Dynamic)',
      category: 'sedan',
      tagline: 'ที่สุดแห่งยนตรกรรมซีดานผู้บริหาร ก้าวล้ำด้วย Superscreen AI อัจฉริยะ',
      price: 'เริ่มต้น 3,990,000 บาท',
      downPayment: 'ดอกเบี้ยพิเศษ 0.99% หรือฟรี MBSP 5 ปีเต็ม',
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
      id: 'c-class',
      name: 'The C-Class (C 220 d / C 350 e AMG Dynamic)',
      category: 'sedan',
      tagline: 'สปอร์ตซีดานยอดนิยม นิยามความคล่องตัว หรูหรา ทันสมัย',
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
        { label: 'ไฟหน้า', val: 'DIGITAL LIGHT ส่องสว่างไกล' },
        { label: 'พื้นที่สัมภาระ', val: 'จุได้สูงสุด 1,680 ลิตร' },
      ],
      badge: 'ครอบครัว & อเนกประสงค์',
    },
    {
      id: 'amg-c43',
      name: 'Mercedes-AMG Performance (C 43 / CLA 35 4MATIC)',
      category: 'amg',
      tagline: 'กำเนิดจากสนามแข่ง สู่จิตวิญญาณสปอร์ตพันธุ์แท้ เทอร์โบไฟฟ้า F1',
      price: 'เริ่มต้น 3,990,000 บาท',
      downPayment: 'ฟรีชุดแต่ง Carbon Package + ประกันภัยชั้น 1',
      image: '/images/benz/amg-c43.jpg',
      specs: [
        { label: 'สมรรถนะ', val: '408 แรงม้า (C 43)' },
        { label: 'อัตราเร่ง 0-100', val: '4.6 วินาที' },
        { label: 'เสียงท่อไอเสีย', val: 'AMG Real Performance' },
        { label: 'ระบบขับเคลื่อน', val: 'AMG Performance 4MATIC' },
      ],
      badge: 'Pure AMG DNA',
    },
    {
      id: 'smart-brabus',
      name: 'smart #1 & smart #3 BRABUS Edition (100% EV)',
      category: 'smart',
      tagline: 'คู่แฝดพลังไฟฟ้าในเครือ Mercedes-Benz มอเตอร์คู่ 428 แรงม้า เร็ว แรง เร้าใจ',
      price: 'เริ่มต้น 1,399,000 บาท',
      downPayment: 'ฟรี Home Charger พร้อมติดตั้ง + ประกันภัยชั้น 1',
      image: '/images/benz/smart-ev.jpg',
      specs: [
        { label: 'พละกำลัง', val: '428 แรงม้า (Dual Motor)' },
        { label: 'อัตราเร่ง 0-100', val: '3.7 วินาที (BRABUS)' },
        { label: 'ระยะทางวิ่ง', val: 'สูงสุด 440 กม. (NEDC)' },
        { label: 'ระบบขับเคลื่อน', val: 'All-Wheel Drive (AWD)' },
      ],
      badge: 'ขายจริงในเพจ Official',
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
        { label: 'ระบบเสียง', val: 'Burmester® 3D Surround' },
      ],
      badge: 'ที่สุดแห่งความหรูหรา',
    },
  ];

  const filteredCars =
    activeCarTab === 'all'
      ? carLineup
      : carLineup.filter((car) => car.category === activeCarTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-20 md:pb-0 w-full max-w-full overflow-x-hidden">
      {/* Schema Injection */}
      <StructuredData data={localBusinessSchema} id="ice-luxury-auto-schema" />

      {/* 0. AGENCY DEMO BANNER */}
      <DemoBanner
        clientName="ICE LUXURY AUTO"
        pageKey="ice-benz-ttc-ubon"
      />

      {/* 1. TOP ANNOUNCEMENT & STICKY GLOBAL HEADER */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-slate-950 text-xs py-2 px-4 font-semibold text-center tracking-wide shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />
          <span>แคมเปญพิเศษประจำเดือน: ดอกเบี้ย 0% หรือเลือกรับฟรี MBSP บำรุงรักษา 5 ปีเต็ม พร้อมบริการ Test Drive ถึงหน้าบ้าน</span>
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
          {/* International Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-200 via-white to-slate-400 p-[1.5px] shadow-lg shadow-white/10 shrink-0">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                  ICE <span className="text-amber-400">LUXURY AUTO</span>
                </span>
                <span className="hidden sm:inline-block bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30 whitespace-nowrap">
                  Mercedes-Benz & AMG Specialist
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate">
                ที่ปรึกษายนตรกรรมหรู Mercedes-Benz • Mercedes-AMG • smart EV
              </p>
            </div>
          </div>

          {/* Real Contact Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${realPhone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/60 text-slate-200 text-xs sm:text-sm font-semibold transition whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">โทร</span> {realPhone}
            </a>

            <a
              href={fbMessengerUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/20 transition whitespace-nowrap"
            >
              <FacebookIcon className="w-4 h-4 fill-white text-transparent" />
              <span>ทักแชต Facebook</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. CINEMATIC HERO SECTION (16:9 DUAL-DEVICE FRAMING - UNOBSTRUCTED MOBILE) */}
      <section className="relative min-h-[86vh] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-between overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/benz/hero-benz.jpg"
            alt="ICE LUXURY AUTO - Mercedes-Benz & AMG Exclusive Experience"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_center] lg:object-right brightness-105 contrast-[1.03]"
          />

          {/* Desktop Left Scrim: Darkens left 50% for 100% white text contrast */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 via-50% to-transparent" />

          {/* Mobile Scrims: Gentle top gradient for title, transparent middle for open car visual */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/40 via-35% to-transparent" />
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/85 via-50% to-transparent" />

          {/* Desktop Bottom Edge Fade */}
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-16 pb-4 sm:pb-8 lg:py-24 relative z-10 w-full flex-1 flex flex-col justify-between">
          {/* Top Block: Headings & Badges */}
          <div className="lg:col-span-7 max-w-2xl space-y-3 sm:space-y-6 text-center lg:text-left">
            {/* International Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold shadow-xl">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Certified Mercedes-Benz & AMG Performance Executive</span>
            </div>

            {/* Headline with Mandatory Thai Typography Zero-Overlapping */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25] lg:leading-[1.22] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              <span className="block">Mercedes-Benz & AMG Experience</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 block mt-1.5 sm:mt-2.5 pb-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                โดย ICE • ที่ปรึกษายนตรกรรมหรูระดับมืออาชีพ
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              สัมผัสยนตรกรรมชั้นนำระดับโลก ทั้ง The New E-Class, C-Class, GLC SUV, พันธุ์ดุ Mercedes-AMG และ smart EV พร้อมแคมเปญดอกเบี้ย 0% ฟรี MBSP 5 ปี และบริการนำรถทดลองขับ Test Drive ส่งตรงถึงหน้าบ้านท่าน
            </p>

            {/* Desktop-only CTAs */}
            <div className="hidden lg:block space-y-4 pt-2">
              <div className="flex flex-row items-center justify-start gap-4">
                <a
                  href="#booking-form"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  จองคิวทดลองขับ / ขอใบเสนอราคา &rarr;
                </a>
                <a
                  href={fbMessengerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 font-semibold text-base backdrop-blur-md transition whitespace-nowrap flex items-center gap-2"
                >
                  <FacebookIcon className="w-4 h-4 fill-blue-500 text-transparent" />
                  ทักแชต Facebook เพจ
                </a>
              </div>

              {/* 3 Trust Checkmarks */}
              <div className="flex items-center gap-6 text-xs text-slate-200 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ยนตรกรรมป้ายแดงรับประกันศูนย์มาตรฐานเยอรมัน</span>
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

          {/* Bottom Block: Clean Mobile CTA & 4 Glassmorphic Feature Badges */}
          <div className="mt-4 sm:mt-12">
            {/* Mobile-only Single High-Contrast Action Button (No Clutter, No Duplication) */}
            <div className="lg:hidden mb-3">
              <a
                href="#booking-form"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-sm text-center block shadow-lg shadow-amber-500/20 active:scale-95 transition"
              >
                ลงทะเบียนจองสิทธิ์ทดลองขับ / ขอใบเสนอราคาด่วน &rarr;
              </a>
            </div>

            {/* 4 Glassmorphic Feature Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              <div className="bg-slate-950/70 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-white">Certified Consultant</span>
                </div>
                <p className="text-[11px] text-slate-300">ดูแลโดยที่ปรึกษาการขายมืออาชีพ มาตรฐานสากล</p>
              </div>

              <div className="bg-slate-950/70 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Car className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-white">VIP Home Test Drive</span>
                </div>
                <p className="text-[11px] text-slate-300">บริการนำรถไปให้ทดลองขับถึงที่ทำงานหรือบ้านท่าน</p>
              </div>

              <div className="bg-slate-950/70 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-white">MBSP นาน 5 ปี</span>
                </div>
                <p className="text-[11px] text-slate-300">โปรแกรมบำรุงรักษาและรับประกันคุณภาพ ไม่จำกัดระยะทาง</p>
              </div>

              <div className="bg-slate-950/70 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <BadgePercent className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-white">Trade-in ราคาสูง</span>
                </div>
                <p className="text-[11px] text-slate-300">ประเมินราคารถเก่าทุกรุ่นถึงที่ เพิ่มมูลค่าแลกเบนซ์ใหม่</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REAL MODELS SHOWCASE (MATCHING OFFICIAL FACEBOOK CATALOG) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
            <Car className="w-3.5 h-3.5" /> Official Vehicle Lineup
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
            <span className="block">ยนตรกรรมพรีเมียมและรถยนต์ไฟฟ้า</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
              พร้อมส่งมอบและข้อเสนอพิเศษประจำเดือน
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            เลือกรุ่นรถที่ตอบโจทย์ไลฟ์สไตล์ของคุณ ไม่ว่าจะเป็น Executive Saloon, Luxury Family SUV, สปอร์ตพันธุ์ดุ AMG หรือสมาร์ท EV พลังงานสะอาด
          </p>

          {/* Model Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {[
              { id: 'all', label: 'ทุกรุ่นยอดนิยม' },
              { id: 'sedan', label: 'Executive Saloon (C/E/S)' },
              { id: 'suv', label: 'Luxury SUV (GLC)' },
              { id: 'amg', label: 'Mercedes-AMG Performance' },
              { id: 'smart', label: 'smart #1 & #3 EV' },
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
                desc: 'ดีลที่ดีที่สุดตามงบประมาณของคุณ ดอกเบี้ยพิเศษ 0% หรือโปรแกรมผ่อนบอลลูน mySTAR สบายกระเป๋า อนุมัติไวผ่านง่าย',
              },
              {
                icon: Car,
                title: 'VIP Door-to-Door Test Drive',
                desc: 'บริการส่งรถทดลองขับถึงหน้าบ้านหรือออฟฟิศของคุณ ทั้งในกรุงเทพฯ ปริมณฑล และภาคอีสาน สะดวกสบายไม่ต้องเสียเวลาเดินทาง',
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
                พร้อมเครือข่ายศูนย์บริการรับรองจากเยอรมนี
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              สัมผัสความหรูหราของโชว์รูมและศูนย์บริการที่ได้มาตรฐานโลก พร้อมพื้นที่รับรอง VIP Lounge สุดเอ็กซ์คลูซีฟ และศูนย์ซ่อมสี-ตัวถังที่ผ่านการรับรองมาตรฐานสากล
            </p>

            <div className="space-y-3 pt-2">
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
                href={fbMessengerUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm transition"
              >
                นัดหมายนำรถเข้าศูนย์บริการ
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
                  <h4 className="text-sm font-bold text-white">Certified Service Center</h4>
                  <p className="text-xs text-amber-400">เปิดบริการ จันทร์-เสาร์ 08:30-17:30 น.</p>
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
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-6">
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

      {/* 7. REAL CUSTOMER REVIEWS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Real Customer Stories
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
            <span className="block">ความประทับใจและเสียงยืนยัน</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 block mt-1 pb-1">
              จากลูกค้าคนสำคัญที่ออกรถกับ ICE LUXURY AUTO
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
              role: 'นักธุรกิจและผู้บริหาร',
              model: 'Mercedes-Benz The New E 350 e AMG Dynamic',
            },
            {
              quote:
                'ตัดสินใจออก smart #1 BRABUS ผ่านเพจ Facebook คุณไอซ์ขับรถมาให้ลองถึงหน้าบ้าน อัตราเร่ง 428 แรงม้าเร้าใจมาก การบริการตรงไปตรงมา ตอบแชตไวมาก แนะนำเลยครับสำหรับคนที่ชอบรถไฟฟ้าสายสปอร์ต',
              author: 'แพทย์หญิงศศิธร และครอบครัว',
              role: 'แพทย์ผู้เชี่ยวชาญ',
              model: 'smart #1 BRABUS Edition (100% EV)',
            },
            {
              quote:
                'ออก C-Class คันแรก ทักคุยในเพจ Facebook คุณไอซ์ตอบไวมาก จัดหาโปรโมชั่นดอกเบี้ยพิเศษและแพ็กเกจ MBSP 5 ปีให้แบบจัดเต็ม วันรับรถมีพิธีส่งมอบที่หรูหราและประทับใจสุดๆ ครับ',
              author: 'คุณวรเมธ วิริยะพาณิชย์',
              role: 'ผู้จัดการฝ่ายการตลาด',
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

      {/* 8. INTERACTIVE LEAD CAPTURE FORM */}
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
              กรอกข้อมูลเพื่อให้คุณไอซ์ติดต่อกลับเพื่อจัดส่งใบเสนอราคาพิเศษ หรือประสานงานนำรถไปให้ทดลองขับถึงที่
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-slate-900/90 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-4 max-w-lg mx-auto relative z-10">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">ลงทะเบียนเรียบร้อยแล้วครับ!</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                คุณไอซ์ได้รับข้อมูลของท่านแล้ว และจะติดต่อกลับทางเบอร์โทรศัพท์ <span className="text-amber-400 font-bold">{formData.phone}</span> ภายใน 15-30 นาทีเพื่อส่งใบเสนอราคาและประสานงานคิวทดลองขับครับ
              </p>
              <div className="pt-2">
                <a
                  href={fbMessengerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition"
                >
                  <FacebookIcon className="w-4 h-4 fill-white text-transparent" /> ทักแชต Facebook เพื่อรับโปรด่วน
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
                    <option value="The New E-Class (E 220 d / E 350 e AMG Dynamic)">The New E-Class (E 220 d / E 350 e AMG)</option>
                    <option value="The C-Class (C 220 d / C 350 e AMG Dynamic)">The C-Class (C 220 d / C 350 e AMG Dynamic)</option>
                    <option value="The GLC SUV (GLC 220 d / GLC 350 e 4MATIC)">The New GLC SUV (4MATIC AMG Dynamic)</option>
                    <option value="Mercedes-AMG Performance">Mercedes-AMG Performance (C 43 / CLA 35)</option>
                    <option value="smart #1 & smart #3 BRABUS Edition">smart #1 & smart #3 BRABUS Edition (100% EV)</option>
                    <option value="The S-Class (S 350 d / S 580 e)">The S-Class (S 350 d / S 580 e Premium)</option>
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
                    placeholder="เช่น กรุงเทพฯ, นนทบุรี, อุบลราชธานี, หรือจังหวัดของท่าน"
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
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>ยืนยันข้อมูลเพื่อรับสิทธิ์และข้อเสนอพิเศษทันที</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 ข้อมูลของท่านจะถูกเก็บเป็นความลับตามนโยบาย PDPA และใช้สำหรับการติดต่อประสานงานโดยตรงจาก ICE LUXURY AUTO เท่านั้น
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

      {/* 9. OFFICIAL SALESDESK SITES STANDARD FOOTER */}
      <PremiumFooter />

      {/* 10. FIXED MOBILE ACTION BAR (CLEAN, NO DUPLICATION) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${realPhone.replace(/[^0-9]/g, '')}`}
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs active:scale-95 transition"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>โทร {realPhone}</span>
          </a>
          <a
            href={fbMessengerUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition"
          >
            <FacebookIcon className="w-4 h-4 fill-white text-transparent" />
            <span>ทักแชต Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}
