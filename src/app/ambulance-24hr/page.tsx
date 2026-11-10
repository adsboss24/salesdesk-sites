'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  PhoneCall, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  MapPin, 
  Truck, 
  Plane, 
  Calendar, 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight, 
  Star, 
  Sparkles, 
  AlertTriangle, 
  Award, 
  FileText, 
  Check, 
  ExternalLink, 
  Users, 
  Flame, 
  Zap, 
  ShieldAlert, 
  Navigation,
  Send
} from 'lucide-react';
import PremiumFooter from '@/components/Footer';

export default function AmbulanceServiceSalepage() {
  // Lead Form & Estimator State
  const [serviceType, setServiceType] = useState('bkk-transfer');
  const [patientCondition, setPatientCondition] = useState('stretcher');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'als' | 'bls' | 'air' | 'standby'>('als');

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) {
      alert('กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับประสานงานด่วนครับ');
      return;
    }
    setIsSubmitted(true);
  };

  const lineOaUrl = "https://line.me/ti/p/1-l4a8J2G6";
  const emergencyPhone = "088-789-9832";
  const landlinePhone = "02-010-6262";
  const facebookUrl = "https://www.facebook.com/24HrAmbulanceservice";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Emergency & Realtime Ready Status) */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-amber-950 text-slate-200 text-xs py-2 px-3 sm:px-6 border-b border-red-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 bg-red-600/30 text-red-300 border border-red-500/40 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold shrink-0 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              ศูนย์ปฏิบัติการฉุกเฉิน 24 ชั่วโมง
            </span>
            <span className="text-slate-200 text-[11px] sm:text-xs font-normal">
              รถพยาบาลเอกชนมาตรฐานสากล • พร้อมออกปฏิบัติการด่วนทั่วประเทศ
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs font-medium shrink-0">
            <a href={`tel:${emergencyPhone.replace(/-/g, '')}`} className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition font-bold">
              <PhoneCall className="w-3.5 h-3.5" /> สายด่วน: {emergencyPhone}
            </a>
            <span className="text-slate-600">|</span>
            <a href={`tel:${landlinePhone.replace(/-/g, '')}`} className="flex items-center gap-1 text-slate-400 hover:text-white transition">
              {landlinePhone}
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-amber-500/30 flex items-center justify-center p-1 shadow-md shadow-amber-500/10 shrink-0">
              <Image 
                src="/images/ambulance/logo-24.png" 
                alt="24HR Ambulance Service Center Logo" 
                width={44} 
                height={44} 
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-white leading-tight">
                  24HR AMBULANCE
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  Private ICU
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
                ศูนย์บริการรถพยาบาล 24 ชั่วโมง (รถพยาบาลเอกชน)
              </p>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs 2xl:text-sm font-medium text-slate-300 whitespace-nowrap">
            <a href="#services" className="hover:text-amber-400 transition whitespace-nowrap">บริการของเรา</a>
            <a href="#patient-types" className="hover:text-amber-400 transition whitespace-nowrap">กลุ่มผู้ป่วย</a>
            <a href="#fleet" className="hover:text-amber-400 transition whitespace-nowrap">ยานพาหนะ & เครื่องมือ</a>
            <a href="#pricing" className="hover:text-amber-400 transition whitespace-nowrap">อัตราค่าบริการ</a>
            <a href="#calculator" className="hover:text-amber-400 transition whitespace-nowrap">ประเมินราคา</a>
            <a href="#reviews" className="hover:text-amber-400 transition whitespace-nowrap">รีวิวผู้ใช้บริการ</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href={facebookUrl}
              target="_blank" 
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 text-blue-300 font-medium text-xs transition"
            >
              Facebook
            </a>
            <a 
              href={lineOaUrl}
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-emerald-950 transition"
            >
              <MessageCircle className="w-4 h-4" /> แอดไลน์ปรึกษา
            </a>
            <a 
              href={`tel:${emergencyPhone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-950 transition animate-pulse"
            >
              <PhoneCall className="w-4 h-4" /> โทรด่วน 24 ชม.
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (16:9 Cinematic Layout & Dual-Device Framing - T&J Bedding Standard) */}
      <section className="relative min-h-[92vh] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white border-b border-slate-800">
        
        {/* Full-Bleed Background Image (Edge-to-Edge on all devices) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ambulance/ambulance-hero-bright.jpg"
            alt="24HR Ambulance Service Center Private ICU Vehicle and Medical Team"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-[75%_center] lg:object-right brightness-[1.03] contrast-[1.02] transition-all duration-700"
          />
          
          {/* Desktop Left Scrim: Darkens left 50% for 100% white text contrast */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 via-50% to-transparent z-10" />
          
          {/* Mobile Multi-Layer Scrim: */}
          {/* Layer 1 (Top Scrim): 0-30% dark behind top headline */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/60 via-30% to-transparent z-10" />
          
          {/* Layer 2 (Bottom Scrim): Soft dark gradient behind bottom action buttons */}
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-slate-950 via-slate-950/90 via-55% to-transparent z-10" />
          
          {/* Desktop Bottom Edge Fade */}
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent z-10" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-4 sm:pt-16 pb-4 sm:pb-12 flex-1 flex flex-col justify-between">
          
          {/* TOP / LEFT BLOCK (Desktop: Cols 1-7 | Mobile: Top Stack) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center lg:text-left pt-2 sm:pt-0">
              
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900/85 border border-amber-500/50 backdrop-blur-md shadow-lg shadow-black/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-amber-300 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide">
                  ศูนย์บริการรถพยาบาลเอกชนมาตรฐานกระทรวงสาธารณสุข
                </span>
              </div>

              {/* Big Punchy Headline - Zero Overlapping Thai Typography Standard */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25] lg:leading-[1.22] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                <span className="block">รถพยาบาล รับ-ส่ง</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-emerald-300 block mt-1.5 sm:mt-2.5 pb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  เคลื่อนย้ายผู้ป่วย 24 ชั่วโมง
                </span>
              </h1>

              {/* Concise Subheadline (Short & Clean on Mobile) */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                บริการเคลื่อนย้ายผู้ป่วยฉุกเฉิน รับ-ส่งฟอกไต พบแพทย์ตามนัด ย้ายโรงพยาบาลทั่วไทย พร้อมทีมพยาบาลวิชาชีพและอุปกรณ์ Mobile ICU ครบครัน
              </p>

              {/* Desktop-only CTAs (Mobile renders at bottom to keep photo 100% unobstructed) */}
              <div className="hidden lg:flex flex-row items-center justify-start gap-4 pt-2">
                <a
                  href={`tel:${emergencyPhone.replace(/-/g, '')}`}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-base shadow-xl shadow-red-950/60 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                >
                  <PhoneCall className="w-5 h-5 animate-bounce" />
                  <span>เรียกรถพยาบาลด่วน ({emergencyPhone})</span>
                </a>
                <a
                  href={lineOaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-950/50 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ประเมินราคา & จองคิวผ่าน LINE</span>
                </a>
              </div>

              {/* Micro Trust (3 Checkmarks) - Desktop only on top */}
              <div className="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs md:text-sm text-slate-200 pt-1 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>อุปกรณ์ Mobile ICU ระดับสูง</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>พยาบาลวิชาชีพ & EMT ดูแลตลอดทาง</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ประกันภัยการเดินทางคุ้มครองทุกเคส</span>
                </div>
              </div>

            </div>

            {/* Right side negative space placeholder for Desktop: Hero Photo subject is completely visible */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
          </div>

          {/* BOTTOM HERO BLOCK: Mobile Action + Glassmorphic Feature Badges */}
          <div className="mt-4 sm:mt-12 lg:mt-16">
            
            {/* Mobile-only Action Buttons */}
            <div className="lg:hidden space-y-2 mb-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${emergencyPhone.replace(/-/g, '')}`}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-red-950 flex items-center justify-center gap-2 active:scale-98 transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>เรียกรถพยาบาลด่วน ({emergencyPhone})</span>
                </a>
                <a
                  href={lineOaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white font-semibold text-xs shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>แอดไลน์ประเมินราคา & จองคิว</span>
                </a>
              </div>
            </div>

            {/* Feature Badges: 2 on mobile (Clean & spacious like T&J Bedding), 4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              
              <div className="p-2.5 sm:p-4 rounded-xl bg-slate-950/65 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-400/30">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-white">24/7 Rapid Response</h2>
                    <p className="text-[10px] sm:text-xs text-slate-300">ออกปฏิบัติการด่วนทันที</p>
                  </div>
                </div>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl bg-slate-950/65 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
                    <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-white">Full ICU Equipment</h2>
                    <p className="text-[10px] sm:text-xs text-slate-300">เครื่องช่วยหายใจ & กระตุกหัวใจ</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block p-2.5 sm:p-4 rounded-xl bg-slate-950/65 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/30">
                    <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-white">All-Thailand Coverage</h2>
                    <p className="text-[10px] sm:text-xs text-slate-300">ครอบคลุม 77 จว. และอากาศ</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block p-2.5 sm:p-4 rounded-xl bg-slate-950/65 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/30">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-white">Clean & Safe Certified</h2>
                    <p className="text-[10px] sm:text-xs text-slate-300">ฆ่าเชื้อมาตรฐาน ปลอดภัย 100%</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. FAST EMERGENCY DISPATCH BANNER */}
      <section className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white py-4 px-4 sm:px-6 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight">ต้องการเรียกรถพยาบาลด่วน หรือจองคิวล่วงหน้า?</h2>
              <p className="text-xs sm:text-sm text-red-100">ทีมพยาบาลและเวชกรพร้อมให้คำปรึกษาและประสานงานจัดส่งรถคันที่ใกล้ที่สุดทันที</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${emergencyPhone.replace(/-/g, '')}`}
              className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 font-extrabold text-sm shadow-md transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> โทร {emergencyPhone}
            </a>
            <a
              href={lineOaUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-md transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" /> แอดไลน์ด่วน
            </a>
          </div>
        </div>
      </section>

      {/* 5. CORE 6 SERVICES SECTION */}
      <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Activity className="w-3.5 h-3.5" />
            <span>บริการครอบคลุมทุกระดับอาการ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            บริการรถพยาบาลเคลื่อนย้ายผู้ป่วย 6 รูปแบบ
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            ตอบโจทย์ทั้งเคสฉุกเฉินวิกฤต การเดินทางพบแพทย์ตามนัด และงานสแตนด์บายดูแลความปลอดภัย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Service 1 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-red-500/50 hover:bg-slate-900 transition group shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition">
              1. บริการรถพยาบาลฉุกเฉิน 24 ชั่วโมง
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              สำหรับผู้ป่วยอาการทรุดกะทันหัน อุบัติเหตุ หรือภาวะวิกฤต พร้อมทีมบุคลากรช่วยชีวิตฉุกเฉินและอุปกรณ์ปั๊มหัวใจ ออกปฏิบัติการรับส่งถึงโรงพยาบาลอย่างรวดเร็วและปลอดภัย
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800/80 pt-3">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> เจ้าหน้าที่เวชกรฉุกเฉิน (EMT) ประจำรถ</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> เครื่องช่วยหายใจและเครื่องวัดชีพจรพร้อมใช้งาน</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 hover:bg-slate-900 transition group shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition">
              2. บริการรับ-ส่ง ผู้ป่วยตามแพทย์นัด
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              บริการรับผู้ป่วยจากบ้านไปโรงพยาบาลเพื่อตรวจตามนัด รับยา เจาะเลือด หรือทำกายภาพบำบัด มีเจ้าหน้าที่ช่วยพยุง ยกเปล หรือเข็นรถเข็น ดูแลจนเสร็จสิ้นและพาส่งกลับถึงเตียง
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800/80 pt-3">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> ตรงเวลา นัดหมายล่วงหน้าได้ตลอด 24 ชม.</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> มีเก้าอี้พยาบาลยกขึ้น-ลงบันไดบ้าน</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-900 transition group shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition">
              3. บริการรับ-ส่ง ผู้ป่วยฟอกไต
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              ดูแลผู้ป่วยโรคไตที่ต้องเดินทางไปศูนย์ฟอกเลือดเป็นประจำสัปดาห์ละ 2-3 ครั้ง ทั้งแบบเที่ยวเดียวและไป-กลับ มีแพ็กเกจเหมารายเดือนช่วยลดภาระค่าใช้จ่ายของครอบครัว
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800/80 pt-3">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> ดูแลหลังฟอกไต ป้องกันภาวะความดันตก</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> แพ็กเกจรายเดือนสุดคุ้ม ลดภาระญาติ</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-slate-900 transition group shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition">
              4. ย้ายโรงพยาบาล & ส่งกลับต่างจังหวัด
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              เคลื่อนย้ายผู้ป่วยส่งต่อไปยังโรงพยาบาลเฉพาะทาง หรือส่งผู้ป่วยกลับไปพักฟื้นที่ภูมิลำเนาทุกจังหวัดทั่วไทย พร้อมพยาบาลดูแลระบบทางเดินหายใจและสัญญาณชีพตลอดเส้นทาง
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800/80 pt-3">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> ออกซิเจนสำรองขนาดใหญ่สำหรับระยะทางไกล</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> คนขับชำนาญทาง มีผลัดเปลี่ยน ปลอดภัยสูงสุด</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-900 transition group shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition">
              5. ลำเลียงผู้ป่วยทางอากาศยาน (Air Ambulance)
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              เคลื่อนย้ายผู้ป่วยข้ามประเทศหรือระยะทางไกลพิเศษด้วยเครื่องบินพาณิชย์ หรือเครื่องบินเช่าเหมาลำ (Air Charter) กำกับดูแลโดยแพทย์เวชศาสตร์การบินและทีมแพทย์เฉพาะทาง
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800/80 pt-3">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> ประสานงานรับ-ส่งแบบ Bed-to-Bed Transfer</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> จัดการเอกสารการบินและผ่านด่านทางการแพทย์</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-slate-900 transition group shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition">
              6. Standby รถพยาบาลงานอีเวนต์ & แข่งกีฬา
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              ให้บริการสแตนด์บายรถพยาบาลพร้อมทีมแพทย์และพยาบาลสำหรับงานวิ่งมาราธอน แข่งขันกีฬา งานคอนเสิร์ต กองถ่ายภาพยนตร์ ละคร โฆษณา ซ้อมแผนหนีไฟ และคณะทัวร์
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800/80 pt-3">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> อุปกรณ์ปฐมพยาบาลและจุด First Aid ครบครัน</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> สัญญาเช่าครึ่งวัน / เต็มวัน / หลายวันต่อเนื่อง</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 6. TARGET PATIENTS SECTION ("เราพร้อมดูแลใครบ้าง") */}
      <section id="patient-types" className="py-16 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Users className="w-3.5 h-3.5" />
              <span>ความเชี่ยวชาญเฉพาะทาง</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              เราพร้อมดูแลและเคลื่อนย้ายผู้ป่วยกลุ่มใดบ้าง?
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              ทุกเคสจะได้รับการประเมินความพร้อมก่อนเดินทาง เพื่อจัดเตรียมอุปกรณ์และบุคลากรที่ตรงกับอาการที่สุด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-sm">01</span>
                <h3 className="text-base font-bold text-white">ผู้ป่วยวิกฤต (Critical Care)</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ผู้ป่วยที่ใส่ท่อช่วยหายใจ (Endotracheal Tube), ใช้เครื่องช่วยหายใจชนิดควบคุม (Ventilator) หรือต้องให้ยากระตุ้นหัวใจตลอดการเดินทาง ดูแลโดยแพทย์และพยาบาลวิชาชีพ ICU
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">02</span>
                <h3 className="text-base font-bold text-white">ผู้ป่วยติดเตียง (Bedridden)</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ผู้ป่วยที่ไม่สามารถขยับตัวหรือลุกนั่งได้ มีสายให้อาหาร (NG Tube) หรือสายสวนปัสสาวะ มีเปลนอนปรับระดับและอุปกรณ์กันกระแทกอย่างนุ่มนวล
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">03</span>
                <h3 className="text-base font-bold text-white">ผู้ป่วยฟอกไตสม่ำเสมอ</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ผู้ป่วยโรคไตวายเรื้อรังที่ต้องเดินทางไปศูนย์ฟอกเลือดตามรอบ มีบริการตรงเวลา ช่วยพยุง และสังเกตอาการความดันหลังฟอกเลือดจนถึงบ้าน
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">04</span>
                <h3 className="text-base font-bold text-white">ผู้สูงอายุ & ผู้ใช้วีลแชร์</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ผู้สูงอายุที่ต้องไปตรวจสุขภาพ พบแพทย์เฉพาะทาง หรือทำกายภาพ มีเจ้าหน้าที่ช่วยดูแลในการเคลื่อนย้ายขึ้น-ลงจากตัวบ้านหรือบันไดอย่างปลอดภัย
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">05</span>
                <h3 className="text-base font-bold text-white">ผู้ป่วยพักฟื้นหลังผ่าตัด</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ผู้ป่วยที่ออกจากโรงพยาบาลหลังการผ่าตัดกระดูก ข้อสะโพก หรือสมอง ที่ต้องการความนิ่งและนุ่มนวลสูงสุด ป้องกันแผลกระทบกระเทือนระหว่างทาง
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">06</span>
                <h3 className="text-base font-bold text-white">ผู้ป่วยส่งกลับภูมิลำเนา</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ผู้ป่วยที่ต้องการเดินทางกลับไปรับการดูแลรักษาต่อที่บ้านเกิดในต่างจังหวัด หรือรับการดูแลแบบประคับประคอง (Palliative Care) อย่างสงบและอบอุ่น
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FLEET & ADVANCED EQUIPMENT SHOWCASE */}
      <section id="fleet" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>อุปกรณ์และยานพาหนะมาตรฐานสากล</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            มาตรฐานรถพยาบาลและอุปกรณ์ช่วยชีวิต
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            ระบบความปลอดภัยขั้นสูง เทียบเท่าห้องฉุกเฉินและห้อง ICU เคลื่อนที่
          </p>
        </div>

        {/* Fleet Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('als')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition whitespace-nowrap ${
              activeTab === 'als'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            🚑 Mobile ICU / ALS Ambulance
          </button>
          <button
            onClick={() => setActiveTab('bls')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition whitespace-nowrap ${
              activeTab === 'bls'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            🚐 BLS / รับ-ส่งทั่วไป & ฟอกไต
          </button>
          <button
            onClick={() => setActiveTab('air')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition whitespace-nowrap ${
              activeTab === 'air'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            ✈️ Air Ambulance (ทางอากาศยาน)
          </button>
          <button
            onClick={() => setActiveTab('standby')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition whitespace-nowrap ${
              activeTab === 'standby'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            🏁 Standby งานแข่งกีฬา & กองถ่าย
          </button>
        </div>

        {/* Tab Contents */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          
          {activeTab === 'als' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <Image
                  src="/images/ambulance/ambulance-interior.jpg"
                  alt="Mobile ICU Ambulance Interior and Medical Equipment"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm">
                  Advance Life Support (ALS)
                </div>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-block text-amber-400 font-bold text-xs tracking-wider uppercase">
                  Mobile Intensive Care Unit
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  รถพยาบาลฉุกเฉินระดับสูง (ALS)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ยานพาหนะโครงสร้างพิเศษหลังคาสูง ออกแบบตามมาตรฐานเวชปฏิบัติฉุกเฉินสากล ภายในติดตั้งระบบจ่ายออกซิเจนส่วนกลาง และอุปกรณ์ช่วยฟื้นคืนชีพเต็มพิกัด รองรับผู้ป่วยหนักและเคสฉุกเฉินขั้นวิกฤต
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>เครื่องช่วยหายใจอัตโนมัติ (Transport Ventilator)</strong> ชนิดรองรับผู้ป่วยวิกฤต</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>เครื่องกระตุกหัวใจไฟฟ้า (Defibrillator / AED)</strong> พร้อมจอมอนิเตอร์ EKG</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>เครื่องวัดสัญญาณชีพอัตโนมัติ (Vital Signs Monitor)</strong> SpO2, NIBP, Pulse</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>เครื่องดูดเสมหะ (Medical Suction)</strong> และกระบอกฉีดยาควบคุมอัตโนมัติ (Syringe Pump)</span>
                  </div>
                </div>
                <div className="pt-2">
                  <a href={`tel:${emergencyPhone.replace(/-/g, '')}`} className="inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200">
                    <PhoneCall className="w-4 h-4" /> สอบถามรายละเอียดรถ ALS โทร {emergencyPhone} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bls' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <Image
                  src="/images/ambulance/ambulance-team.jpg"
                  alt="Standard BLS Ambulance Fleet and Professional Medical Staff"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm">
                  Basic Life Support (BLS)
                </div>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-block text-emerald-400 font-bold text-xs tracking-wider uppercase">
                  Patient Transport Service
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  รถพยาบาลรับ-ส่งทั่วไป & ฟอกไต (BLS)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  เหมาะสำหรับการรับ-ส่งผู้ป่วยตรวจตามนัด ฟอกไต ทำแผล หรือย้ายที่พักฟื้น มีเตียงนอนปรับระดับนุ่มสบาย ระบบปรับอากาศแยกส่วน และอุปกรณ์ปฐมพยาบาลพื้นฐานอย่างครบถ้วน
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>เตียงพยาบาลปรับระดับ (Hydraulic Stretcher)</strong> นุ่มสบาย ล็อคแน่นหนา</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>เก้าอี้พยาบาลยกขึ้นลงบันได (Stair Chair)</strong> สำหรับบ้านพักอาศัยหลายชั้น</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>ถังออกซิเจนทางการแพทย์สำรอง</strong> พร้อมสายแคนนูลาและหน้ากาก</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>ที่นั่งผู้ติดตาม 1-2 ท่าน</strong> พร้อมแอร์เย็นฉ่ำตลอดการเดินทาง</span>
                  </div>
                </div>
                <div className="pt-2">
                  <a href={lineOaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300">
                    <MessageCircle className="w-4 h-4" /> จองรถรับ-ส่งนัดตรวจผ่าน LINE <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'air' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <Image
                  src="/images/ambulance/air-ambulance.jpg"
                  alt="Air Ambulance Medical Evacuation Jet Aircraft and Flight Doctor"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm">
                  Air Ambulance Transfer
                </div>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-block text-blue-400 font-bold text-xs tracking-wider uppercase">
                  Aeromedical Evacuation
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  การเคลื่อนย้ายผู้ป่วยทางอากาศยาน
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  บริการประสานงานเคลื่อนย้ายผู้ป่วยข้ามพรมแดน หรือรับตัวผู้ป่วยจากต่างแดนกลับประเทศไทย ผ่านเครื่องบินเช่าเหมาลำ (Air Charter) หรือเครื่องบินพาณิชย์ (Commercial Medical Escort) ดูแลโดยแพทย์เวชศาสตร์การบิน
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>ทีมแพทย์เวชศาสตร์การบิน (Flight Doctor)</strong> และพยาบาลการบิน</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>อุปกรณ์การแพทย์รับรองมาตรฐานการบินสากล</strong> FAA / EASA Approved</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>การประสานงานครบวงจร (Bed-to-Bed)</strong> รับจากเตียงต้นทางสู่เตียงปลายทาง</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>ช่วยจัดการเอกสาร Fit to Fly</strong> และด่านตรวจคนเข้าเมือง</span>
                  </div>
                </div>
                <div className="pt-2">
                  <a href={`tel:${emergencyPhone.replace(/-/g, '')}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-blue-200">
                    <PhoneCall className="w-4 h-4" /> ปรึกษาเคสส่งตัวทางอากาศ โทร {emergencyPhone} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'standby' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <Image
                  src="/images/ambulance/hero-original.jpg"
                  alt="Ambulance Standby for Events, Sports Competitions and Filming"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm">
                  Event & Production Standby
                </div>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-block text-purple-400 font-bold text-xs tracking-wider uppercase">
                  Safety Standby Operations
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  สแตนด์บายงานอีเวนต์ กีฬา & กองถ่าย
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  เสริมความมั่นใจให้ผู้จัดงานและผู้ร่วมกิจกรรม ด้วยรถพยาบาลพร้อมทีมปฐมพยาบาลประจำจุด คอยรับมือเหตุฉุกเฉิน บาดเจ็บ ลมแดด หรืออุบัติเหตุ เพื่อนำส่งโรงพยาบาลที่ใกล้ที่สุดได้ทันท่วงที
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>งานแข่งขันกีฬา</strong> วิ่งมาราธอน, ไตรกีฬา, ฟุตบอล, มวย, กอล์ฟ</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>งานอีเวนต์ & คอนเสิร์ต</strong> เทศกาลปีใหม่ สงกรานต์ งานแสดงสินค้า</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>กองถ่ายทำภาพยนตร์</strong> ซีรีส์ โฆษณา และการซ้อมแผนหนีไฟประจำปี</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>คณะทัวร์ & คาราวาน</strong> ทริปท่องเที่ยวทั้งใน กทม. และต่างจังหวัด</span>
                  </div>
                </div>
                <div className="pt-2">
                  <a href={lineOaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-purple-300 hover:text-purple-200">
                    <MessageCircle className="w-4 h-4" /> ขอใบเสนอราคา Standby งานอีเวนต์ <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 8. 6 CORE EXCELLENCE PILLARS */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ทำไมครอบครัวและองค์กรจึงไว้วางใจ</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              6 เสาหลักมาตรฐานความปลอดภัยระดับมืออาชีพ
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              ทุกนาทีมีความหมาย เรามุ่งมั่นส่งมอบการดูแลที่ปลอดภัยและอุ่นใจที่สุดในทุกการเดินทาง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white">ทีมเวชกร & พยาบาลเฉพาะทาง</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                เจ้าหน้าที่ผ่านการอบรมหลักสูตรเวชศาสตร์ฉุกเฉิน (BLS, ACLS, ITLS) มีทักษะการดูแลทางเดินหายใจ และการประเมินสัญญาณชีพอย่างแม่นยำตลอดเวลา
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white">อุปกรณ์ช่วยชีวิตเกรดโรงพยาบาล</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                คัดสรรอุปกรณ์การแพทย์ที่ได้มาตรฐานสากล มีการตรวจสอบและสอบเทียบ (Calibration) สม่ำเสมอ พร้อมใช้งานได้ทันทีในทุกสถานการณ์วิกฤต
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white">ฆ่าเชื้อ ปลอดภัย ไร้กลิ่นอับ 100%</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ทำความสะอาดและอบพ่นฆ่าเชื้อด้วยน้ำยามาตรฐานโรงพยาบาลหลังเสร็จสิ้นทุกเคส เปลี่ยนผ้าปูและอุปกรณ์สัมผัสใหม่ทุกครั้ง ป้องกันการติดเชื้อ
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-white">ประกันภัยการเดินทางทุกเที่ยว</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ผู้ป่วยและญาติที่ร่วมเดินทางจะได้รับความคุ้มครองจากประกันภัยอุบัติเหตุและการเดินทางตามข้อกำหนด ให้คุณมั่นใจในมาตรฐานความปลอดภัย
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                05
              </div>
              <h3 className="text-lg font-bold text-white">ติดตามพิกัด Real-Time GPS</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ญาติสามารถติดตามตำแหน่งรถพยาบาลได้ตลอดเส้นทาง พร้อมศูนย์ประสานงานกลางคอยอำนวยความสะดวกเรื่องการจราจรและแจ้งปลายทางล่วงหน้า
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                06
              </div>
              <h3 className="text-lg font-bold text-white">ราคาโปร่งใส แจ้งล่วงหน้า ชัดเจน</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                คิดค่าบริการตามระยะทางจริงและระดับอุปกรณ์ที่จำเป็น แจ้งราคาครบถ้วนก่อนออกเดินทาง ไม่มีค่าใช้จ่ายแอบแฝงหรือคิดเพิ่มโดยไม่แจ้ง
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 9. TRANSPARENT PRICING TIERS */}
      <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>อัตราค่าบริการมาตรฐาน</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            อัตราค่าบริการโปร่งใส แจ้งราคาก่อนเริ่มเดินทาง
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            บริการครอบคลุมทั้งแบบรายเที่ยว รายครั้ง และแพ็กเกจเหมารายเดือน
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Tier 1: Local BKK */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition relative">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                รับ-ส่งทั่วไปในเขต กทม. & ปริมณฑล
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                City Transfer
              </h3>
              <p className="text-xs text-slate-400">
                สำหรับผู้ป่วยไปพบแพทย์ตามนัด ทำกายภาพบำบัด หรือกลับบ้าน
              </p>
              
              <div className="pt-2 pb-4 border-b border-slate-800">
                <div className="text-xs text-slate-400">เริ่มต้นที่</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">1,500 - 2,500</span>
                  <span className="text-slate-400 text-sm">บาท / เที่ยว</span>
                </div>
                <p className="text-[11px] text-amber-400/90 mt-1">*ขึ้นอยู่กับระยะทางและระดับการช่วยเหลือ</p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> รถพยาบาลพร้อมอุปกรณ์ Basic Life Support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> เจ้าหน้าที่เวชกร (EMT) ช่วยดูแล 2 ท่าน</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> เปลนอนปรับระดับ & บริการยกขึ้นลงบันได</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> ออกซิเจนมาตรฐานตลอดเส้นทาง</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> ญาติร่วมเดินทางได้ 1-2 ท่าน</li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" /> เช็คราคารายจุดทาง LINE
              </a>
            </div>
          </div>

          {/* Tier 2: Dialysis Package (POPULAR) */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 border-2 border-amber-500 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-amber-500/10 relative transform lg:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-amber-500 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
              แพ็กเกจยอดนิยม (สุดคุ้ม)
            </div>

            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
                บริการรับ-ส่งฟอกไตสม่ำเสมอ
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Dialysis Care Package
              </h3>
              <p className="text-xs text-slate-300">
                ดูแลผู้ป่วยฟอกไตทั้งไปและกลับ ตรงเวลา ไม่ต้องรอนาน ญาติไม่ต้องลางาน
              </p>
              
              <div className="pt-2 pb-4 border-b border-slate-800">
                <div className="text-xs text-amber-300 font-semibold">ราคาเหมาพิเศษ</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-amber-400">แพ็กเกจรายเดือน</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">ประหยัดกว่ารายเที่ยว 20-30% พร้อมจองคิวล็อกเวลาล่วงหน้า</p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> บริการรับส่งไป-กลับตรงรอบฟอกเลือด</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> ทีมงานคอยส่งถึงเตียงฟอกไตและรับกลับ</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> วัดความดันและสังเกตอาการหลังฟอกเลือด</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> สิทธิพิเศษล็อกรถคันประจำและคนดูแลคุ้นเคย</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> มีประกันภัยคุ้มครองทุกเที่ยวเดินทาง</li>
              </ul>
            </div>

            <div className="pt-6 space-y-2">
              <a
                href={lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition"
              >
                <MessageCircle className="w-4 h-4" /> ปรึกษาแพ็กเกจฟอกไตรายเดือน
              </a>
              <a
                href={`tel:${emergencyPhone.replace(/-/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition"
              >
                <PhoneCall className="w-3.5 h-3.5" /> โทรสอบถาม {emergencyPhone}
              </a>
            </div>
          </div>

          {/* Tier 3: Long Distance & Provincial */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition relative">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                ย้ายโรงพยาบาล & ส่งกลับต่างจังหวัด
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Cross-Province Transfer
              </h3>
              <p className="text-xs text-slate-400">
                ครอบคลุม 77 จังหวัดทั่วไทย ส่งต่อการรักษาหรือกลับไปพักฟื้นที่บ้าน
              </p>
              
              <div className="pt-2 pb-4 border-b border-slate-800">
                <div className="text-xs text-slate-400">อัตราค่าบริการ</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">คิดตามระยะทางจริง</span>
                </div>
                <p className="text-[11px] text-amber-400/90 mt-1">*ประเมินเส้นทาง แจ้งราคาสุทธิก่อนออกเดินทาง</p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> พยาบาลวิชาชีพดูแลระบบช่วยหายใจตลอดเส้นทาง</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> ออกซิเจนสำรองขนาดใหญ่พิเศษ รองรับทางไกล</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> มีคนขับมืออาชีพ 2 ท่านผลัดเปลี่ยนเมื่อเกินระยะ</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> ติดตามสถานะ GPS แบบ Real-Time ตลอด 24 ชม.</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> ส่งถึงเตียงนอนในบ้านปลายทางอย่างปลอดภัย</li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition"
              >
                <Navigation className="w-4 h-4 text-cyan-400" /> ส่งพิกัดประเมินราคาต่างจังหวัด
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 10. INTERACTIVE LEAD CAPTURE & COST ESTIMATOR FORM */}
      <section id="calculator" className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ประเมินค่าเดินทาง & จองรถล่วงหน้า</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              แบบฟอร์มประเมินราคาและนัดหมายรถพยาบาล
            </h2>
            <p className="text-sm text-slate-400">
              กรอกข้อมูลเพื่อรับการประเมินราคาจริงล่วงหน้า ทีมงานจะติดต่อกลับภายใน 5-10 นาที
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">บันทึกข้อมูลเรียบร้อยแล้วครับ!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  เจ้าหน้าที่ศูนย์บริการรถพยาบาล 24 ชั่วโมง ได้รับข้อมูลของท่านแล้ว และกำลังเร่งประเมินเส้นทางเพื่อโทรกลับประสานงานโดยเร็วที่สุด
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`tel:${emergencyPhone.replace(/-/g, '')}`}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" /> โทรยืนยันเคสด่วนทันที
                  </a>
                  <a
                    href={`${lineOaUrl}?text=${encodeURIComponent(`สวัสดีครับ สนใจประเมินราคารถพยาบาล คุณ ${contactName} เบอร์ ${contactPhone} จาก ${origin} ไป ${destination}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" /> แชทส่งแผนที่ผ่าน LINE OA
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Step 1: Service Type */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">
                    1. เลือกประเภทบริการที่ต้องการ
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'bkk-transfer', label: 'รับ-ส่งใน กทม./ปริมณฑล' },
                      { id: 'dialysis', label: 'รับ-ส่ง ฟอกไต' },
                      { id: 'provincial', label: 'ย้ายข้ามจังหวัดทั่วไทย' },
                      { id: 'emergency', label: 'เคสฉุกเฉินด่วน 24 ชม.' },
                      { id: 'standby', label: 'Standby อีเวนต์/กีฬา' },
                      { id: 'air', label: 'ส่งต่อทางอากาศ (Air)' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setServiceType(item.id)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition text-center ${
                          serviceType === item.id
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                            : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Patient Condition */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">
                    2. อาการหรือลักษณะของผู้ป่วย
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'stretcher', label: 'นอนเปลพยาบาล (ช่วยเหลือตัวเองไม่ได้/ติดเตียง)' },
                      { id: 'wheelchair', label: 'นั่งรถเข็นวีลแชร์ได้ (พอพยุงเดินได้)' },
                      { id: 'oxygen', label: 'ต้องใช้ออกซิเจนตลอดการเดินทาง' },
                      { id: 'critical', label: 'ใส่ท่อช่วยหายใจ / อาการวิกฤต (ต้องใช้รถ ICU)' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPatientCondition(item.id)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition text-left flex items-center justify-between ${
                          patientCondition === item.id
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                            : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span>{item.label}</span>
                        {patientCondition === item.id && <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Origin & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      3. จุดรับต้นทาง (บ้าน / โรงพยาบาล / จังหวัด) *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        placeholder="เช่น รพ.จุฬาลงกรณ์ หรือ บ้านเขตประเวศ"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      4. จุดหมายปลายทาง (โรงพยาบาล / บ้าน / จังหวัด) *
                    </label>
                    <div className="relative">
                      <Navigation className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="เช่น รพ.ศูนย์ขอนแก่น หรือ บ้าน อ.เมือง ชลบุรี"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 4: Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      5. วันที่ต้องการใช้รถพยาบาล
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="date"
                        value={serviceDate}
                        onChange={(e) => setServiceDate(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      เวลาที่ต้องการให้ถึงจุดรับ
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="time"
                        value={serviceTime}
                        onChange={(e) => setServiceTime(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 5: Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      ชื่อผู้ติดต่อ / ญาติผู้ป่วย *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="เช่น คุณสมชาย (บุตรชาย)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      เบอร์โทรศัพท์สำหรับแจ้งราคาด่วน *
                    </label>
                    <div className="relative">
                      <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="08X-XXX-XXXX"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    ข้อกำหนดพิเศษหรือรายละเอียดเพิ่มเติม (ถ้ามี)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="เช่น ต้องยกขึ้นบันไดชั้น 2, มีสัมภาระ 2 ใบ, มีญาติไปด้วย 2 คน"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
                  ></textarea>
                </div>

                {/* Submit Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 hover:from-red-500 hover:to-emerald-400 text-slate-950 font-black text-base shadow-xl transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    ส่งข้อมูลประเมินราคา & ติดต่อกลับด่วน
                  </button>
                  <p className="text-center text-[11px] text-slate-400">
                    🔒 ข้อมูลการเดินทางของท่านจะถูกเก็บรักษาเป็นความลับทางการแพทย์เพื่อความปลอดภัยสูงสุด
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 11. SOCIAL PROOF & VERIFIED REVIEWS */}
      <section id="reviews" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>เสียงยืนยันความพึงพอใจ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            ความประทับใจจากครอบครัวผู้ป่วยและผู้จัดงาน
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            ความไว้วางใจจากผู้ใช้บริการจริงตลอดหลายปีที่ผ่านมา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              “ประทับใจมากครับ ต้องย้ายคุณพ่อจาก รพ. ในกรุงเทพฯ กลับบ้านที่ขอนแก่น ทีมพยาบาลดูแลระบบออกซิเจนดีมาก พยาบาลคอยเช็คชีพจรตลอดทาง คนขับขับนิ่งมาก ไม่กระตุกเลย คุณพ่อหลับสบายตลอดทาง ขอบคุณมากๆ ครับ”
            </p>
            <div className="border-t border-slate-800 pt-3">
              <div className="font-bold text-white text-sm">คุณธนกฤต วิทยานนท์</div>
              <div className="text-xs text-slate-400">เคสส่งตัวผู้ป่วยกลับภูมิลำเนา จ.ขอนแก่น</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              “ใช้บริการรถรับส่งฟอกไตให้คุณยายสัปดาห์ละ 3 วันมาหลายเดือนแล้วค่ะ ทีมงานตรงเวลามาก มีเก้าอี้พยาบาลช่วยยกลงบันไดบ้านชั้นสองอย่างนุ่มนวล ช่วยให้ลูกหลานไปทำงานได้สบายใจ ไม่ต้องลางานบ่อยๆ แนะนำเลยค่ะ”
            </p>
            <div className="border-t border-slate-800 pt-3">
              <div className="font-bold text-white text-sm">คุณพิมลวรรณ สุขประเสริฐ</div>
              <div className="text-xs text-slate-400">แพ็กเกจรับ-ส่งฟอกไตประจำ จ.สมุทรปราการ</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              “จ้างสแตนด์บายงานวิ่งมาราธอนระยะทาง 21 กม. ทีมแพทย์และพยาบาลเตรียมอุปกรณ์ปฐมพยาบาลครบมาก มีนักวิ่งเกิดอาการ Heat Stroke 1 ราย ทีมงานปฐมพยาบาลและนำส่ง รพ. ได้เร็วมาก มืออาชีพมากครับ”
            </p>
            <div className="border-t border-slate-800 pt-3">
              <div className="font-bold text-white text-sm">คุณกิตติศักดิ์ ชัยเจริญ</div>
              <div className="text-xs text-slate-400">ผู้จัดงานวิ่งมาราธอนเพื่อสุขภาพ ชลบุรี</div>
            </div>
          </div>

        </div>
      </section>

      {/* 12. FAQ ACCORDION */}
      <section className="py-16 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              คำถามที่พบบ่อย (FAQ)
            </h2>
            <p className="text-sm text-slate-400">
              ข้อสงสัยเกี่ยวกับการใช้บริการรถพยาบาลเอกชน 24 ชั่วโมง
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'สามารถเรียกรถพยาบาลด่วนได้ตลอด 24 ชั่วโมงหรือไม่?',
                a: 'เรามีทีมงานและรถพยาบาลพร้อมออกปฏิบัติการตลอด 24 ชั่วโมง ไม่มีวันหยุด ทั้งในเขตกรุงเทพฯ ปริมณฑล และกรณีฉุกเฉินส่งต่อไปต่างจังหวัด โดยเฉลี่ยรถสามารถเดินทางถึงจุดรับในเขต กทม. ภายใน 20-40 นาทีขึ้นอยู่กับระยะทางและการจราจรครับ',
              },
              {
                q: 'ญาติผู้ป่วยสามารถนั่งร่วมทางไปด้วยได้กี่คน?',
                a: 'ภายในรถพยาบาลจัดเตรียมที่นั่งสำหรับญาติหรือผู้ติดตาม 1-2 ท่าน พร้อมเข็มขัดนิรภัยและระบบปรับอากาศ เพื่อให้ญาติสามารถดูแลและอยู่เคียงข้างผู้ป่วยได้อย่างอุ่นใจตลอดเส้นทางครับ',
              },
              {
                q: 'ต้องเตรียมเอกสารหรือข้อมูลอะไรบ้างในการจองรถ?',
                a: 'ข้อมูลสำคัญที่ต้องแจ้ง ได้แก่: 1. สถานะอาการของผู้ป่วย (เช่น นั่งได้/นอนเปล/ใช้ออกซิเจน) 2. จุดรับและจุดส่งปลายทาง 3. เวลาที่แพทย์นัดหรือเวลาที่ต้องการเดินทาง และ 4. เอกสารประวัติการรักษาหรือหนังสือส่งตัว (ถ้ามี)',
              },
              {
                q: 'บริการเคลื่อนย้ายผู้ป่วยต่างจังหวัด คิดราคาอย่างไร?',
                a: 'เราคิดค่าบริการตามระยะทางกิโลเมตรจริง บวกกับระดับอุปกรณ์และบุคลากรทางการแพทย์ที่ต้องใช้ในการดูแลอาการของผู้ป่วย โดยจะมีการคำนวณและแจ้งราคาสุทธิล่วงหน้าให้ญาติทราบและตกลงก่อนออกเดินทางเสมอ ไม่มีค่าใช้จ่ายแอบแฝงครับ',
              },
              {
                q: 'มีบริการเก้าอี้ยกขึ้น-ลงบันได สำหรับบ้านที่ไม่มีลิฟต์หรือไม่?',
                a: 'เรามีเก้าอี้พยาบาลสำหรับเคลื่อนย้ายลงบันได (Stair Chair) และทีมเจ้าหน้าที่เวชกรที่เชี่ยวชาญการเคลื่อนย้าย ช่วยยกผู้ป่วยจากชั้น 2 หรือ 3 ลงมายังรถพยาบาลได้อย่างปลอดภัย นุ่มนวล และไม่กระทบกระเทือนแผลครับ',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 hover:text-amber-400 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CONTACT & LOCATION SECTION */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>ศูนย์ปฏิบัติการ 24 ชั่วโมง</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                บริษัท ศูนย์บริการรถพยาบาล 24 ชั่วโมง จำกัด
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                24 Hour Ambulance Service Center Co., Ltd. พร้อมให้บริการรถพยาบาลฉุกเฉินและเคลื่อนย้ายผู้ป่วยทั่วประเทศไทยด้วยความปลอดภัยและมาตรฐานสูงสุด
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>31 ซอยเฉลิมพระเกียรติ ร.9 ซอย 1 แขวงหนองบอน เขตประเวศ กรุงเทพมหานคร 10250 ประเทศไทย</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-red-400 shrink-0" />
                  <span>สายด่วน 24 ชม.: <strong>{emergencyPhone}</strong> หรือ <strong>{landlinePhone}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>LINE Official: <a href={lineOaUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">@24hr-ambulance (คลิกแอดไลน์)</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>Facebook Page: <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">24Hr Ambulance Service</a></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white mx-auto shadow-lg shadow-red-500/20">
                <PhoneCall className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-lg font-bold text-white">ติดต่อสายด่วนเวลานี้</h3>
              <p className="text-xs text-slate-400">
                ต้องการความช่วยเหลือฉุกเฉิน หรือปรึกษาการเดินทางทันที
              </p>
              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${emergencyPhone.replace(/-/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-base shadow-lg shadow-red-950 transition hover:opacity-95"
                >
                  <PhoneCall className="w-5 h-5" /> โทร {emergencyPhone}
                </a>
                <a
                  href={lineOaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition"
                >
                  <MessageCircle className="w-5 h-5" /> แอดไลน์ปรึกษาประเมินราคา
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 14. SALESDESK AI FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-10 px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-bold text-slate-300">24HR AMBULANCE SERVICE CENTER</span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-500">All Rights Reserved © 2026</span>
          </div>
          <p className="text-xs text-slate-400">
            🚀 ออกแบบและพัฒนาตามมาตรฐาน <a href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" target="_blank" rel="noreferrer" className="text-amber-400 font-semibold underline hover:text-amber-300">SalesDesk AI</a> (ผู้เชี่ยวชาญด้านเว็บไซต์เซลเพจ & AI การตลาด)
          </p>
        </div>
      </footer>

      {/* 15. FIXED MOBILE ACTION STICKY BAR */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-2.5 px-3 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <a
            href={`tel:${emergencyPhone.replace(/-/g, '')}`}
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-red-950 active:scale-95 transition"
          >
            <PhoneCall className="w-4 h-4 animate-bounce" />
            โทรฉุกเฉิน 24 ชม.
          </a>
          <a
            href={lineOaUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950 active:scale-95 transition"
          >
            <MessageCircle className="w-4 h-4" />
            แอดไลน์ประเมินราคา
          </a>
        </div>
      </div>

    </div>
  );
}
