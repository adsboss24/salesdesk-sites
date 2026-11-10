'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Award,
  ChevronRight,
  Check,
  Bed,
  Hotel,
  Building2,
  Home,
  Layers,
  Sparkle,
  Truck,
  Send,
  HelpCircle,
  ExternalLink,
  Star,
  FileText,
  BadgePercent,
  Sliders,
  Maximize2,
  CheckCheck
} from 'lucide-react';
import PremiumFooter from '@/components/Footer';

export default function TandJBeddingSalepage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'pillow' | 'bedsheet' | 'duvet' | 'topper' | 'towel'>('all');
  const [selectedPackage, setSelectedPackage] = useState<string>('Deluxe Hotel Set (ยอดนิยม 20-50 ห้อง)');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    province: '',
    roomCount: '11 - 30 ห้อง',
    packageInterest: 'Deluxe Hotel Set (ยอดนิยม 20-50 ห้อง)',
    productInterests: ['หมอนใยไมโครเจล', 'ผ้าปูที่นอนปล่อยชาย', 'ไส้ผ้านวม/ปลอกผ้านวม'],
    notes: '',
  });

  const handleProductToggle = (prod: string) => {
    setFormData(prev => {
      const exists = prev.productInterests.includes(prod);
      if (exists) {
        return { ...prev, productInterests: prev.productInterests.filter(p => p !== prod) };
      } else {
        return { ...prev, productInterests: [...prev.productInterests, prod] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับติดต่อกลับครับ');
      return;
    }
    setIsSubmitted(true);
  };

  const handleSelectPackageAndScroll = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setFormData(prev => ({ ...prev, packageInterest: pkgName }));
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Products Data based on uploaded specs and real inventory
  const products = [
    {
      id: 'pillow',
      category: 'pillow',
      badge: 'ขายดีอันดับ 1',
      title: 'หมอน ใยไมโครเจล (ขนห่านเทียมแท้)',
      subtitle: 'สัมผัสนุ่มฟู สปริงตัวดี ไม่ยุบตัว ไร้ไรฝุ่น มาตรฐานโรงแรม 5 ดาว',
      image: '/images/tandj/pillow.jpg',
      specs: [
        'น้ำหนักเส้นใย: 1,000 กรัม / 1,200 กรัม / 1,400 กรัม / 1,800 กรัม',
        'ปลอกหมอนผ้าคอตตอนขาว ขนาด 20 x 30 x 6 นิ้ว',
        'ใยสังเคราะห์ Microgel นำเข้า สัมผัสเสมือนขนห่านธรรมชาติแท้ 100%',
        'รองรับสรีระต้นคอและบ่า หลับสบายไม่ปวดคอ ลดการสะสมของสารก่อภูมิแพ้'
      ],
      priceStart: 'เริ่มต้น 1xx บาท / ใบ (ตามจำนวนและน้ำหนัก)',
    },
    {
      id: 'bedsheet',
      category: 'bedsheet',
      badge: 'เกรดโรงแรมมาตรฐาน',
      title: 'ผ้าปูที่นอน ปล่อยชาย / รัดมุม (Satin Stripe / ขาวเรียบ)',
      subtitle: 'ทอแน่น 250 - 400 เส้นด้าย เนื้อผ้าเย็นนุ่ม ทนการซักอุตสาหกรรม',
      image: '/images/tandj/bedsheet.png',
      specs: [
        'TWIN Size (เตียงเดี่ยว 3.5 ฟุต): ขนาด 80" x 110"',
        'QUEEN Size (เตียง 5 ฟุต): ขนาด 92" x 110"',
        'KING Size (เตียง 6 ฟุต): ขนาด 110" x 110"',
        'ผ้า Cotton 100% หรือ Cotton Sateen ทอลายริ้ว 1 นิ้ว เรียบหรู อยู่ทรง ซักรีดง่าย'
      ],
      priceStart: 'เริ่มต้น 2xx บาท / ผืน (ราคาโรงงาน)',
    },
    {
      id: 'duvet',
      category: 'duvet',
      badge: 'ยอดนิยมสำหรับรีสอร์ท',
      title: 'ไส้ผ้านวม & ปลอกผ้านวม สัมผัสนุ่มเบา',
      subtitle: 'ใยไมโครไฟเบอร์เกรดพรีเมียม ระบายอากาศ อบอุ่นแต่ไม่อบอ้าว',
      image: '/images/tandj/duvet.jpg',
      specs: [
        'TWIN Size (สำหรับเตียงเดี่ยว): ขนาด 70" x 90"',
        'QUEEN Size (สำหรับเตียงควีน): ขนาด 90" x 90"',
        'KING Size (สำหรับเตียงคิง): ขนาด 100" x 90"',
        'เย็บช่องตารางกระจายใยสม่ำเสมอ พร้อมเชือกผูกมุม 8 จุด ล็อคปลอกผ้านวมไม่เลื่อน'
      ],
      priceStart: 'เริ่มต้น 3xx บาท / ชุด',
    },
    {
      id: 'topper',
      category: 'topper',
      badge: 'เพิ่มความนุ่มระดับ 5 ดาว',
      title: 'Topper เสริมที่นอน & ผ้ารองกันเปื้อน กันน้ำ 100%',
      subtitle: 'ยืดอายุการใช้งานที่นอน นุ่มเด้งเหมือนนอนบนก้อนเมฆ ปกป้องฟูกอย่างสมบูรณ์แบบ',
      image: '/images/tandj/hotel-bg.jpg',
      specs: [
        'Topper หนาพิเศษ 3 - 4 นิ้ว เส้นใย Microfiber บรรจุแน่น ไม่ยุบแบน',
        'ผ้ารองกันเปื้อนกันน้ำ เคลือบ TPU Membrane กันน้ำ 100% ไม่อับชื้น ไร้เสียงกรอบแกรบ',
        'ยางรัดมุม 4 ทิศ กระชับฟูกที่นอนความหนา 8 - 14 นิ้ว ได้แนบสนิท',
        'ซักเครื่องและอบความร้อนปานกลางได้ ไม่หลุดร่อน'
      ],
      priceStart: 'เริ่มต้น 2xx บาท / ชิ้น',
    },
    {
      id: 'towel',
      category: 'towel',
      badge: 'ผ้าฝ้ายแท้ ทอขนคู่',
      title: 'เซ็ตผ้าขนหนูโรงแรม สีขาว ทอขนคู่ ด้ายคู่',
      subtitle: 'ซับน้ำยอดเยี่ยม เส้นด้ายแข็งแรง ไม่หลุดรุ่ย ทนการซักเคมีและการปั่นแรง',
      image: '/images/tandj/towel.jpg',
      specs: [
        'ผ้าเช็ดตัวเกรดโรงแรม: ขนาด 27"x54" (14 ปอนด์) และ 30"x60" (16 ปอนด์)',
        'ผ้าเช็ดผม / ผ้านาโน: ขนาด 15"x30" (3.5 ปอนด์)',
        'ผ้าเช็ดมือ: ขนาด 12"x12" (1.5 ปอนด์)',
        'ผ้าเช็ดเท้า: ทอลายกรอบ Jacquard หนา 8 ปอนด์ ทนทานเหยียบซับน้ำไว'
      ],
      priceStart: 'เริ่มต้น 4x บาท / ผืน',
    },
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-500 selection:text-white pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white text-xs py-2 px-3 sm:px-4 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center justify-center bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold shrink-0">
              ⚡ โรงงานผู้ผลิตโดยตรง
            </span>
            <span className="text-slate-200 text-[11px] sm:text-xs font-normal">
              &quot;งบจำกัด จัดให้ได้&quot; • ชุดเครื่องนอนโรงแรม รีสอร์ท ครบวงจร ประสบการณ์กว่า 30 ปี
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-300 font-medium text-xs shrink-0">
            <a href="tel:0864614614" className="hover:text-amber-300 flex items-center gap-1.5 transition">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" /> 086-461-4614
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" /> จัดส่งทั่วประเทศ
            </span>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 flex flex-col items-center justify-center text-amber-400 shadow-md shadow-blue-950/20 border border-amber-500/30 shrink-0">
              <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg md:text-xl font-black tracking-tight text-blue-950 leading-tight">
                  T&J BEDDING
                </span>
                <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold border border-amber-300/60">
                  FACTORY
                </span>
              </div>
              <p className="hidden sm:block text-[11px] sm:text-xs text-slate-500 font-medium whitespace-nowrap">
                ทีแอนด์เจ เบดดิ้ง • ผู้ผลิตและนำเข้าชุดเครื่องนอนโรงแรม รีสอร์ท
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 whitespace-nowrap">
            <a href="#why-us" className="hover:text-blue-900 transition">จุดเด่นโรงงาน</a>
            <a href="#target" className="hover:text-blue-900 transition">ธุรกิจที่ให้บริการ</a>
            <a href="#products" className="hover:text-blue-900 transition">รายการสินค้า</a>
            <a href="#packages" className="hover:text-blue-900 transition">แพ็กเกจเซ็ตเปิดโรงแรม</a>
            <a href="#reviews" className="hover:text-blue-900 transition">เสียงตอบรับ</a>
            <a href="#quote-form" className="hover:text-blue-900 transition">ขอใบเสนอราคา</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="https://line.me/ti/p/~@fhu6688s"
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm shadow-xs transition whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" /> แอดไลน์ปรึกษา
            </a>
            <a 
              href="tel:0864614614"
              className="inline-flex sm:hidden items-center justify-center w-9 h-9 rounded-xl bg-blue-950 text-amber-400 border border-amber-500/30"
              title="โทรด่วน 086-4614614"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <a 
              href="#quote-form" 
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-blue-950 to-slate-900 hover:from-blue-900 hover:to-slate-800 text-amber-300 font-bold text-xs sm:text-sm shadow-md shadow-blue-950/20 border border-amber-500/40 transition whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" /> 
              <span>ขอใบเสนอราคา</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (16:9 Cinematic Layout & Dual-Device Framing) */}
      <section className="relative min-h-[92vh] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Image (Edge-to-Edge on all devices) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tandj-hero.jpg"
            alt="T&J Bedding Luxury Hotel Suite Collection"
            className="w-full h-full object-cover object-[75%_center] lg:object-right brightness-105 contrast-[1.02] transition-all duration-700"
          />
          
          {/* Desktop Left Scrim: Darkens left 50% for 100% white text contrast */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 via-50% to-transparent" />
          
          {/* Mobile Multi-Layer Scrim: */}
          {/* Layer 1 (Top Scrim): 0-30% dark behind top headline */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/60 via-30% to-transparent" />
          
          {/* Layer 2 (Bottom Scrim): Soft dark gradient behind bottom action buttons */}
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-slate-950 via-slate-950/90 via-55% to-transparent" />
          
          {/* Desktop Bottom Edge Fade */}
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-4 sm:pt-16 pb-4 sm:pb-12 flex-1 flex flex-col justify-between">
          
          {/* TOP / LEFT BLOCK (Desktop: Cols 1-7 | Mobile: Top Stack) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center lg:text-left pt-2 sm:pt-0">
              
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900/85 border border-amber-500/50 backdrop-blur-md shadow-lg shadow-black/40">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
                <span className="text-amber-300 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide">
                  ชุดเครื่องนอนคุณภาพ ส่งตรงจากโรงงาน ถึงโรงแรมของคุณ
                </span>
              </div>

              {/* Big Punchy Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-tight sm:leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                ยกระดับห้องพักโรงแรม 5 ดาว <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 inline-block mt-1 sm:mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  &quot;งบจำกัด. จัดให้ได้&quot;
                </span>
              </h1>

              {/* Concise Subheadline */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                ทีแอนด์เจ เบดดิ้ง (T&J BEDDING) โรงงานผลิตและจัดจำหน่ายชุดเครื่องนอนเกรดพรีเมียม ประสบการณ์สิ่งทอกว่า 30 ปี คัดสรรวัสดุนุ่มระบายอากาศ ทนการซักอุตสาหกรรมบ่อยครั้ง ในราคาต้นทุนโรงงานตัวจริง
              </p>

              {/* Desktop-only CTAs (Mobile renders at bottom to keep photo 100% unobstructed) */}
              <div className="hidden lg:flex flex-row items-center justify-start gap-4 pt-2">
                <a
                  href="#quote-form"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <FileText className="w-5 h-5 text-slate-950" />
                  <span>ขอใบเสนอราคา & สั่งตัวอย่างผ้าฟรี</span>
                  <ChevronRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:0864614614"
                  className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>086-461-4614 (ฝ่ายขายโรงงาน)</span>
                </a>
              </div>

              {/* Micro Trust (3 Checkmarks) */}
              <div className="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs md:text-sm text-slate-200 pt-1 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> สั่งตัดตามไซส์ได้ทุกขนาด
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> ทนการซักอุตสาหกรรม 100+ ครั้ง
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> ส่งฟรีตัวอย่างผ้าทั่วไทย
                </span>
              </div>
            </div>

            {/* Right side negative space placeholder for Desktop: Hero Photo subject is completely visible */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
          </div>

          {/* BOTTOM HERO BLOCK: Mobile Action + 4 Glassmorphic Feature Badges */}
          <div className="mt-4 sm:mt-12 lg:mt-16">
            
            {/* Mobile-only Action Buttons */}
            <div className="lg:hidden space-y-2 mb-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="#quote-form"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 active:scale-98 transition"
                >
                  <FileText className="w-4 h-4 text-slate-950" />
                  <span>ขอใบเสนอราคา & ปรึกษาสเปก</span>
                </a>
                <a
                  href="tel:0864614614"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white font-semibold text-xs shadow-md flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>โทรด่วน 086-461-4614</span>
                </a>
              </div>
            </div>

            {/* 4 Glassmorphic Feature Cards (Desktop: 4 in 1 row, Mobile: 2x2 grid) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              
              <div className="p-2.5 sm:p-4 rounded-xl bg-slate-950/65 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-white leading-tight">ราคาต้นทุนโรงงาน</h2>
                    <p className="text-[10px] sm:text-xs text-slate-300 hidden sm:block">ส่งตรงไม่ผ่านคนกลาง คุ้มค่าที่สุด</p>
                  </div>
                </div>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl bg-slate-950/65 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/30">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-white leading-tight">มาตรฐานสากล 5 ดาว</h2>
                    <p className="text-[10px] sm:text-xs text-slate-300 hidden sm:block">ประสบการณ์ผลิตสิ่งทอกว่า 30 ปี</p>
                  </div>
                </div>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl bg-slate-950/65 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/30">
                    <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-white leading-tight">งบจำกัด จัดให้ได้</h2>
                    <p className="text-[10px] sm:text-xs text-slate-300 hidden sm:block">ปรับสเปกตามงบ คืนทุนไว</p>
                  </div>
                </div>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl bg-slate-950/65 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-400/30">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-white leading-tight">สต็อกพร้อมส่งทั่วไทย</h2>
                    <p className="text-[10px] sm:text-xs text-slate-300 hidden sm:block">ทันกำหนดเปิดห้องพัก ไม่ต้องรอนาน</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. TARGET AUDIENCE / WHO WE SERVE */}
      <section id="target" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80">
              Hospitality Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              โซลูชันชุดเครื่องนอน ตอบโจทย์ทุกกลุ่มธุรกิจที่พัก
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              ไม่ว่าคุณจะเป็นเจ้าของโรงแรมขนาดใหญ่ พูลวิลล่าสุดหรู หรือโฮมสเตย์เปิดใหม่ T&J BEDDING พร้อมจัดสเปกเนื้อผ้าที่เหมาะสมที่สุดในงบประมาณของคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Hotel className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">โรงแรม & รีสอร์ท 3-5 ดาว</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                ต้องการผ้าปูที่นอนลายริ้วซาตินและหมอนขนห่านเทียมมาตรฐานสากล ทนการซักอุตสาหกรรมบ่อยครั้ง ช่วยประหยัดค่าเปลี่ยนชุดใหม่ในระยะยาว
              </p>
              <ul className="text-xs text-slate-700 space-y-2 border-t border-slate-200 pt-3">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> ผ้า Cotton Sateen 250-400TC
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> ปลอกผ้านวมและไส้ผ้านวมมาตรฐาน
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">พูลวิลล่า & โฮมสเตย์พรีเมียม</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                เน้นการสร้างความประทับใจระดับ Wow Factor ให้ลูกค้ารู้สึกผ่อนคลาย ถ่ายรูปสวย ขาวสะอาด และรีวิว 5 ดาวบนแพลตฟอร์มจองห้องพัก
              </p>
              <ul className="text-xs text-slate-700 space-y-2 border-t border-slate-200 pt-3">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> หมอนไมโครเจลนุ่มฟู 1,400-1,800g
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Topper นุ่มเด้ง 4 นิ้ว ฟีล 5 ดาว
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-blue-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">อพาร์ตเมนต์ & เซอร์วิสคอนโด</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                ผู้ประกอบการห้องพักรายเดือน/รายวัน ที่ต้องการควบคุมงบประมาณอย่างเข้มงวด ได้ชุดเครื่องนอนทนทาน ซักง่าย แห้งไว ไม่ยับง่าย
              </p>
              <ul className="text-xs text-slate-700 space-y-2 border-t border-slate-200 pt-3">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> ผ้า Microtech ดูแลง่าย แห้งเร็ว
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> ผ้ารองกันเปื้อนกันน้ำ 100%
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">โรงพยาบาล สปา & เวลเนส</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                สถานพยาบาล คลินิก และสปาชั้นนำที่ต้องการมาตรฐานสุขอนามัยระดับสูง ซักฆ่าเชื้อด้วยความร้อนและน้ำยาฟอกขาวได้โดยเนื้อผ้าไม่เสื่อมสภาพ
              </p>
              <ul className="text-xs text-slate-700 space-y-2 border-t border-slate-200 pt-3">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> ผ้าขนหนูขนคู่ทนต้มฆ่าเชื้อ
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> ปราศจากสารเรืองแสงและสารตกค้าง
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE EXCELLENCE & 6 VALUE PILLARS */}
      <section id="why-us" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-300 bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-400/30">
              Why Choose T&J Bedding
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              จุดเด่นและความเชี่ยวชาญ ที่โรงแรมชั้นนำไว้วางใจ
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              เราไม่เพียงแต่ขายผ้า แต่เราคือพาร์ทเนอร์ด้านสิ่งทอโรงแรมที่จะช่วยคุณประหยัดต้นทุนและยกระดับคะแนนความพึงพอใจของแขกผู้เข้าพัก
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Pillar 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/60 transition group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-amber-400/30">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. โรงงานตัวจริง ไม่ผ่านคนกลาง</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ส่งตรงจากโรงงานผลิต จึงได้ราคาต้นทุนที่ต่ำที่สุด &quot;งบจำกัด จัดให้ได้&quot; ช่วยให้เจ้าของโรงแรมควบคุมต้นทุนเปิดห้องพักได้อย่างแม่นยำ
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/60 transition group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-blue-400/30">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. ประสบการณ์สิ่งทอกว่า 30 ปี</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                มีความเชี่ยวชาญลึกซึ้งในการเลือกสรรเส้นด้าย เทคนิคการทอ และการตัดเย็บที่ตอบโจทย์การใช้งานจริงในโรงแรมและรีสอร์ทระดับสากล
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/60 transition group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-emerald-400/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. ทนทานการซักอุตสาหกรรม 100+ รอบ</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ทนต่อน้ำยาซักรีดอุตสาหกรรม การอบความร้อนสูง และแรงปั่น ซักแล้วไม่เป็นขุย ไม่ย้วย ตะเข็บเย็บแน่นหนาพิเศษ 2 ชั้น
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/60 transition group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-purple-400/30">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">4. สั่งตัดได้ตามขนาด (Custom Size)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ฟูกที่นอนหนา 8 นิ้ว 10 นิ้ว 12 นิ้ว หรือ 14 นิ้ว เตียงทรงกลม หรือเตียงสั่งทำพิเศษ เราตัดเย็บให้พอดีมุมฟูกเป๊ะ ไม่หลุดเลื่อน
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/60 transition group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 text-yellow-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-yellow-400/30">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">5. ส่งตัวอย่างผ้าจริงให้สัมผัสฟรี</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                จัดส่ง Swatch ตัวอย่างเนื้อผ้า คอตตอน ซาตินริ้ว และใยหมอน ให้ผู้บริหารและฝ่ายจัดซื้อได้สัมผัสและทดสอบซักจริงก่อนตัดสินใจ
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/60 transition group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-teal-400/30">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">6. สต็อกพร้อมส่ง จัดส่งไวทั่วประเทศ</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                สินค้ามาตรฐานมีพร้อมสต็อก รองรับคำสั่งซื้อด่วนทันเวลาเปิดกิจการ พร้อมทีมงานให้คำปรึกษาเทียบสเปกตลอด 7 วัน
              </p>
            </div>

          </div>

          {/* Slogan Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950/40 border border-amber-500/40 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <h4 className="text-xl sm:text-2xl font-black text-amber-300 tracking-tight">
                มีงบประมาณจำกัด หรือต้องการเทียบสเปกโรงแรมเดิม?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                เพียงแจ้งงบประมาณและจำนวนห้องพัก ทีมผู้เชี่ยวชาญ T&J BEDDING จะช่วยจัดชุดที่ดีที่สุดให้ทันที
              </p>
            </div>
            <a
              href="tel:0864614614"
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shrink-0 shadow-lg shadow-amber-400/20 transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>โทรปรึกษา 086-461-4614</span>
            </a>
          </div>

        </div>
      </section>

      {/* 6. COMPLETE PRODUCT COLLECTION & CATALOG */}
      <section id="products" className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-900 bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-200">
              Product Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              5 รายการสินค้าชุดเครื่องนอนคุณภาพ ส่งตรงจากโรงงาน
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              สเปกมาตรฐานระดับโรงแรม 5 ดาว เลือกดูรายละเอียดสินค้าและสเปกเนื้อผ้าแต่ละหมวดหมู่ได้ด้านล่าง
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'all' 
                  ? 'bg-blue-950 text-amber-300 shadow-md shadow-blue-950/20' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ทั้งหมด (5 หมวด)
            </button>
            <button
              onClick={() => setActiveTab('pillow')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'pillow' 
                  ? 'bg-blue-950 text-amber-300 shadow-md shadow-blue-950/20' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              หมอนใยไมโครเจล
            </button>
            <button
              onClick={() => setActiveTab('bedsheet')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'bedsheet' 
                  ? 'bg-blue-950 text-amber-300 shadow-md shadow-blue-950/20' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ผ้าปูที่นอนปล่อยชาย
            </button>
            <button
              onClick={() => setActiveTab('duvet')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'duvet' 
                  ? 'bg-blue-950 text-amber-300 shadow-md shadow-blue-950/20' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ไส้ผ้านวม & ปลอกผ้านวม
            </button>
            <button
              onClick={() => setActiveTab('topper')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'topper' 
                  ? 'bg-blue-950 text-amber-300 shadow-md shadow-blue-950/20' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Topper & ผ้ารองกันเปื้อน
            </button>
            <button
              onClick={() => setActiveTab('towel')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'towel' 
                  ? 'bg-blue-950 text-amber-300 shadow-md shadow-blue-950/20' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ผ้าขนหนูเกรดโรงแรม
            </button>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img 
                      src={prod.image} 
                      alt={prod.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-blue-950/90 text-amber-300 text-xs font-bold backdrop-blur-md shadow-md border border-amber-500/30">
                        {prod.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 leading-snug">
                      {prod.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mb-4">
                      {prod.subtitle}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      <span className="text-xs font-bold text-slate-700 block">สเปกและขนาด:</span>
                      {prod.specs.map((spec, sidx) => (
                        <div key={sidx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCheck className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">ราคาพิเศษราคาส่ง</span>
                    <span className="text-xs sm:text-sm font-bold text-blue-950">{prod.priceStart}</span>
                  </div>
                  <a
                    href="#quote-form"
                    onClick={() => handleProductToggle(prod.title)}
                    className="px-3.5 py-2 rounded-xl bg-blue-950 hover:bg-blue-900 text-amber-300 font-bold text-xs shadow-sm transition flex items-center gap-1.5"
                  >
                    <span>ขอราคาสินค้านี้</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Original Catalog Photo Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-48 aspect-[3/4] rounded-xl overflow-hidden shadow-md shrink-0 border border-slate-200">
              <img 
                src="/images/tandj-catalog.jpg" 
                alt="T&J Bedding Official Price List Catalog" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                Official Catalog Leaflet
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                มีรายการสินค้าครบ 5 หมวดหลักตามเอกสารโรงงาน
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                หมอนใยไมโครเจล (1,000 - 1,800 กรัม), ผ้าปูที่นอนปล่อยชาย (Twin/Queen/King), ไส้ผ้านวม/ปลอกผ้านวม, Topper ผ้ารองกันเปื้อนกันน้ำ และผ้าขนหนูเช็ดตัวขนคู่ทุกขนาด สามารถดาวน์โหลดใบราคาส่งหรือติดต่อเจ้าหน้าที่ฝ่ายขายเพื่อขอสเปกอย่างละเอียดได้ทันที
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a 
                  href="tel:0864614614" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950 text-amber-300 font-semibold text-xs shadow-sm hover:bg-blue-900 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> โทร 086-461-4614
                </a>
                <a 
                  href="https://line.me/ti/p/~@fhu6688s" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-sm hover:bg-emerald-700 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> ขอไฟล์ PDF ผ่าน LINE
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. COMMERCIAL PACKAGES & PRICING */}
      <section id="packages" className="py-16 sm:py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-300 bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-400/30">
              Hotel Opening Packages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              แพ็กเกจเซ็ตเปิดโรงแรม & เซ็ตประหยัดราคาโรงงาน
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              เราออกแบบเซ็ตครบชุดสำหรับเปิดห้องพักใหม่ ช่วยให้คุณได้สินค้าครบวงจร ไม่ต้องหาซื้อแยกหลายที่ คุ้มค่าที่สุด
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Package 1 */}
            <div className="rounded-2xl bg-slate-800/90 border border-slate-700 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-500 transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-xs font-semibold">
                    เริ่มต้นธุรกิจ
                  </span>
                  <span className="text-xs text-slate-400">5 - 10 ห้อง</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Starter Boutique Set</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  เหมาะสำหรับโฮมสเตย์ อพาร์ตเมนต์ หรือรีสอร์ทเปิดใหม่ขนาดเล็ก ที่ต้องการคุมงบประมาณเริ่มต้น
                </p>

                <div className="space-y-3 border-t border-slate-700/80 pt-6 mb-6">
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>ผ้าปูที่นอนปล่อยชาย Microtech / Cotton เรียบ (ตามขนาดเตียง)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>หมอนใยไมโครเจล 1,200 กรัม พร้อมปลอกหมอน 2 ใบ/เตียง</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>ไส้ผ้านวมโพลีเอสเตอร์ พร้อมปลอกผ้านวมเข้าชุด</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>ผ้ารองกันเปื้อน ยางรัดมุม 4 ทิศ</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>เซ็ตผ้าเช็ดตัวขนคู่ สีขาว 14 ปอนด์ (2 ผืน/ห้อง)</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleSelectPackageAndScroll('Starter Boutique Set (5-10 ห้อง)')}
                  className="w-full py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2"
                >
                  <span>เลือกแพ็กเกจนี้ & ขอใบเสนอราคา</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Package 2 (Popular Highlight) */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-800 to-blue-950/70 border-2 border-amber-400 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-amber-500/10 relative transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black shadow-md uppercase tracking-wider">
                  🔥 ยอดนิยมสูงสุด (Best Value)
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 pt-2">
                  <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
                    มาตรฐานโรงแรม 4-5 ดาว
                  </span>
                  <span className="text-xs text-amber-300 font-bold">20 - 50 ห้อง</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Deluxe Hotel Set</h3>
                <p className="text-xs sm:text-sm text-slate-200 mb-6">
                  ชุดยอดนิยมสำหรับโรงแรม รีสอร์ท และพูลวิลล่าชั้นนำ ผ้าปูริ้วซาติน สัมผัสนุ่มเด้ง ซักอุตสาหกรรมได้ยาวนาน
                </p>

                <div className="space-y-3 border-t border-slate-700/80 pt-6 mb-6">
                  <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>ผ้าปูที่นอน Cotton Sateen ทอลายริ้ว 1 นิ้ว 250 - 300 เส้นด้าย</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>หมอนใยไมโครเจลขนห่านเทียม 1,400 กรัม นุ่มฟู คืนตัวไว (4 ใบ/ห้อง)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>ไส้ผ้านวมไมโครไฟเบอร์ นุ่มเบา คุมอุณหภูมิ + ปลอกผ้านวมริ้วซาติน</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Topper หนา 3 นิ้ว นุ่มฟู หรือผ้ารองกันเปื้อนกันน้ำ TPU 100%</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Full Bath Set: ผ้าเช็ดตัว 16 ปอนด์ + ผ้าเช็ดผม + ผ้าเช็ดเท้าทอ Jacquard</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleSelectPackageAndScroll('Deluxe Hotel Set (ยอดนิยม 20-50 ห้อง)')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 transition flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>เลือกแพ็กเกจนี้ & ขอราคาส่งด่วน</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Package 3 */}
            <div className="rounded-2xl bg-slate-800/90 border border-slate-700 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-500 transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-400/30">
                    หรูหราเฉพาะคุณ
                  </span>
                  <span className="text-xs text-slate-400">50+ ห้อง / พูลวิลล่าหรู</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">5-Star Luxury Custom</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  สำหรับโรงแรม 5 ดาว ลักชัวรี่พูลวิลล่า ที่ต้องการสเปกเฉพาะ สั่งทอความหนาพิเศษ ปักโลโก้แบรนด์ และสั่งตัดไซส์พิเศษ
                </p>

                <div className="space-y-3 border-t border-slate-700/80 pt-6 mb-6">
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>ผ้า Cotton 100% หรือ Silk Sateen ทอแน่น 350 - 400 เส้นด้าย</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>หมอนขนห่านเทียมรุ่นพรีเมียม 1,800 กรัม หนานุ่มรองรับสรีระ</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Topper ขนห่านเทียมหนา 4 นิ้ว เสมือนนอนในโรงแรมชั้นนำระดับโลก</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>บริการปักโลโก้โรงแรม (Embroidered Brand Logo) สวยคมชัด</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>ทีมงานเข้าวัดขนาดเตียงจริงและดูแลเทียบสเปกถึงสถานที่</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleSelectPackageAndScroll('5-Star Luxury Custom (50+ ห้อง / พูลวิลล่าหรู)')}
                  className="w-full py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2"
                >
                  <span>ปรึกษางาน Custom สเปก</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. SOCIAL PROOF & TESTIMONIALS */}
      <section id="reviews" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Verified Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              เสียงตอบรับจากเจ้าของโรงแรมและรีสอร์ทจริง
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              ความประทับใจจากลูกค้ากว่า 350+ แห่งทั่วประเทศที่ไว้วางใจให้ T&J BEDDING ดูแลชุดเครื่องนอน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &quot;เปิดรีสอร์ทที่เขาใหญ่ 18 ห้อง ตอนแรกกังวลเรื่องงบมากเพราะงบสร้างบานปลาย พอได้คุยกับ T&J Bedding ทางโรงงานช่วยจัดเซ็ตริ้วซาตินและหมอนไมโครเจลในงบที่เราตั้งไว้ได้เป๊ะ ลูกค้าชมเยอะมากว่าเตียงนอนสบายเหมือนโรงแรม 5 ดาว คุ้มค่าที่สุดครับ&quot;
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 text-amber-300 font-bold flex items-center justify-center text-sm">
                  คุณภ
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">คุณภาณุวัฒน์</h4>
                  <p className="text-xs text-slate-500">เจ้าของบูทีกรีสอร์ท (เขาใหญ่ นครราชสีมา)</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &quot;ดูแลพูลวิลล่า 6 หลังในพัทยา ที่นี่ใช้ซักผ้าหนักมากเพราะแขกเปลี่ยนทุกวัน สั่งผ้าปูกับผ้านวมของทีแอนด์เจมาปีกว่าแล้ว ผ่านการซักต้มฆ่าเชื้อบ่อยมาก เนื้อผ้ายังแน่นขาวจั๊วะ ไม่เป็นขุยเลย ฝ่ายขายบริการดีและสต็อกส่งไว สั่งเพิ่มตลอดค่ะ&quot;
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                  คุณศ
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">คุณศิรินทร์</h4>
                  <p className="text-xs text-slate-500">ผู้บริหาร Luxury Pool Villa (พัทยา ชลบุรี)</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &quot;ประทับใจเรื่องความซื่อสัตย์และคำแนะนำสเปกครับ ทางโรงงานส่งสวอตช์ตัวอย่างผ้ามาให้เราเปรียบเทียบก่อนสั่ง 3 แบบ จนได้เกรดที่ถูกใจแขกต่างชาติ การันตีเลยว่าคุยง่าย และจัดให้ได้ตามงบจริงอย่างที่โฆษณาไว้&quot;
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-blue-300 font-bold flex items-center justify-center text-sm">
                  คุณว
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">คุณวรเทพ</h4>
                  <p className="text-xs text-slate-500">ผู้จัดการฝ่ายจัดซื้อ โรงแรมซิตี้โฮเทล (เชียงใหม่)</p>
                </div>
              </div>
            </div>

          </div>

          {/* Social Proof Numbers */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-blue-950 text-white border border-amber-500/30 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400">30+ ปี</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">ประสบการณ์สิ่งทอโรงแรม</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400">350+</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">โครงการโรงแรม & รีสอร์ท</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400">94%</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">อัตราการสั่งซื้อซ้ำต่อเนื่อง</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400">100%</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">ส่งตรงจากโรงงานตัวจริง</div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. INTERACTIVE LEAD CAPTURE FORM & DIRECT CONTACT */}
      <section id="quote-form" className="py-16 sm:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Contact Information & Direct Hotline (Cols 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-950 bg-amber-400/30 px-3.5 py-1.5 rounded-full border border-amber-400/50">
                  Contact Factory Direct
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                  ขอใบเสนอราคาด่วน & ขอรับตัวอย่างผ้าฟรี
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  กรอกข้อมูลเพื่อให้เจ้าหน้าที่ฝ่ายขายโรงงานจัดทำใบเสนอราคาส่งมอบให้ภายใน 30 นาที หรือติดต่อปรึกษาได้ทันทีผ่านช่องทางด้านล่างนี้
                </p>
              </div>

              {/* Direct Hotline Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium">ฝ่ายขายและบริการลูกค้าโรงงาน</span>
                    <a href="tel:0864614614" className="text-xl sm:text-2xl font-black text-blue-950 hover:text-amber-600 block transition">
                      086-461-4614
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium">LINE Official Account</span>
                    <a 
                      href="https://line.me/ti/p/~@fhu6688s" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition"
                    >
                      @fhu6688s <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>เว็บไซต์หลัก: <a href="https://tandjbedding.com" target="_blank" rel="noreferrer" className="text-blue-900 font-semibold underline">www.tandjbedding.com</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Facebook: <a href="https://www.facebook.com/profile.php?id=61580261377286" target="_blank" rel="noreferrer" className="text-blue-900 font-semibold underline">T&J Bedding Official Page</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>เวลาทำการ: เปิดบริการทุกวัน 08:30 - 18:30 น.</span>
                  </div>
                </div>
              </div>

              {/* Budget Guarantee Box */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed">
                <span className="font-bold block mb-1">💡 นโยบายความจริงใจ:</span>
                ทางเราเข้าใจดีว่าแต่ละโครงการมีงบประมาณที่ต่างกัน ไม่ว่าจะสั่งจำนวนน้อยหรือจำนวนมาก ทางทีมงานยินดีช่วยคำนวณและเทียบสเปกให้ได้รับความคุ้มค่าสูงสุดครับ
              </div>
            </div>

            {/* Right: Interactive Form (Cols 6-12) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-8">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                    แบบฟอร์มขอใบเสนอราคา & สั่งตัวอย่างผ้า
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        ชื่อผู้ติดต่อ / ผู้บริหาร <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="เช่น คุณสมชาย จัดซื้อ"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-950 text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        เบอร์โทรศัพท์ติดต่อกลับ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="เช่น 086-461-4614"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-950 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        ชื่อโรงแรม / รีสอร์ท / โครงการ
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="เช่น เดอะ กรีน พูลวิลล่า"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-950 text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        จังหวัดที่ตั้งโครงการ
                      </label>
                      <input
                        type="text"
                        value={formData.province}
                        onChange={e => setFormData({ ...formData, province: e.target.value })}
                        placeholder="เช่น ชลบุรี, เชียงใหม่, ภูเก็ต"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-950 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        จำนวนห้องพักโดยประมาณ
                      </label>
                      <select
                        value={formData.roomCount}
                        onChange={e => setFormData({ ...formData, roomCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-950 text-sm bg-white"
                      >
                        <option value="1 - 10 ห้อง">1 - 10 ห้อง (ขนาดเล็ก/โฮมสเตย์)</option>
                        <option value="11 - 30 ห้อง">11 - 30 ห้อง (รีสอร์ทขนาดกลาง)</option>
                        <option value="31 - 60 ห้อง">31 - 60 ห้อง (โรงแรมมาตรฐาน)</option>
                        <option value="60 ห้องขึ้นไป">60 ห้องขึ้นไป (โรงแรมขนาดใหญ่)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        แพ็กเกจที่สนใจ
                      </label>
                      <select
                        value={formData.packageInterest}
                        onChange={e => setFormData({ ...formData, packageInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-950 text-sm bg-white"
                      >
                        <option value="Starter Boutique Set (5-10 ห้อง)">Starter Boutique Set (5-10 ห้อง)</option>
                        <option value="Deluxe Hotel Set (ยอดนิยม 20-50 ห้อง)">Deluxe Hotel Set (ยอดนิยม 20-50 ห้อง)</option>
                        <option value="5-Star Luxury Custom (50+ ห้อง / พูลวิลล่าหรู)">5-Star Luxury Custom (50+ ห้อง / พูลวิลล่าหรู)</option>
                        <option value="สั่งเฉพาะบางรายการ (ไม่รับเป็นเซ็ต)">สั่งเฉพาะบางรายการ (ไม่รับเป็นเซ็ต)</option>
                      </select>
                    </div>
                  </div>

                  {/* Product Checkboxes */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      สินค้าที่สนใจสั่งซื้อหรือขอตัวอย่างผ้า (เลือกได้หลายข้อ):
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'หมอนใยไมโครเจล',
                        'ผ้าปูที่นอนปล่อยชาย',
                        'ไส้ผ้านวม/ปลอกผ้านวม',
                        'Topper แผ่นรองที่นอน',
                        'ผ้ารองกันเปื้อนกันน้ำ',
                        'ผ้าขนหนูเกรดโรงแรม',
                      ].map((item) => (
                        <label 
                          key={item} 
                          className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer transition ${
                            formData.productInterests.includes(item)
                              ? 'bg-blue-50 border-blue-900 text-blue-950 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-600'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.productInterests.includes(item)}
                            onChange={() => handleProductToggle(item)}
                            className="rounded text-blue-900 focus:ring-blue-950"
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      ข้อความเพิ่มเติม หรือขนาดเตียงที่ต้องการสเปกพิเศษ
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="เช่น ต้องการผ้าปูเตียง 6 ฟุต 15 หลัง และเตียงเดี่ยว 10 หลัง ขอรับตัวอย่างเนื้อผ้าซาตินริ้ว..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-950 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 hover:from-blue-900 hover:to-slate-800 text-amber-300 font-bold text-base shadow-xl shadow-blue-950/20 border border-amber-500/40 transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-5 h-5 text-amber-400" />
                    <span>ส่งข้อมูลขอใบเสนอราคา & สั่งตัวอย่างผ้าฟรี</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 ข้อมูลของคุณปลอดภัยและใช้เพื่อการจัดทำใบเสนอราคาจากโรงงาน T&J Bedding โดยตรงเท่านั้น
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    ส่งข้อมูลเรียบร้อยแล้วครับ!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    ขอบพระคุณ <strong>{formData.name}</strong> จาก <strong>{formData.businessName || 'โครงการของคุณ'}</strong> ทางฝ่ายขายโรงงาน T&J Bedding กำลังจัดเตรียมใบเสนอราคาและสเปกผ้า และจะติดต่อกลับที่เบอร์ <strong>{formData.phone}</strong> ภายใน 30 นาทีครับ
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://line.me/ti/p/~@fhu6688s?text=${encodeURIComponent(
                        `สวัสดีครับ ขอใบเสนอราคา T&J Bedding สำหรับ ${formData.businessName || 'โครงการใหม่'} เบอร์ ${formData.phone} แพ็กเกจที่สนใจ: ${formData.packageInterest}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>ส่งสรุปรายการนี้เข้า LINE OA ทันที</span>
                    </a>
                    
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
                    >
                      แก้ไขข้อมูลฟอร์ม
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 10. SALESDESK MASTER FOOTER */}
      <PremiumFooter />

      {/* 11. FIXED MOBILE ACTION BAR (High-Converting Dual Button) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:0864614614"
            className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>โทร 086-4614614</span>
          </a>
          <a
            href="https://line.me/ti/p/~@fhu6688s"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          >
            <MessageCircle className="w-4 h-4 text-slate-950" />
            <span>ขอราคาส่งทาง LINE</span>
          </a>
        </div>
      </div>

    </div>
  );
}
