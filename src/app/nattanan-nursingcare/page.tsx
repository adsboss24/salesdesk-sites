'use client';

import React, { useState } from 'react';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Clock, 
  Activity, 
  Utensils, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Award,
  ChevronRight,
  UserCheck,
  Stethoscope,
  Smile,
  Home,
  Check
} from 'lucide-react';

export default function NattananNursingCareSalepage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    careType: 'ผู้สูงอายุทั่วไป (ช่วยเหลือตัวเองได้)',
    visitDate: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับติดต่อกลับครับ');
      return;
    }
    setIsSubmitted(true);
  };
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      {/* 1. TOP ANNOUNCEMENT BAR (Hidden on mobile to save vertical space; clean on desktop) */}
      <div className="hidden sm:block bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-white text-xs py-2 px-4 border-b border-teal-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-teal-500/30 text-teal-200 border border-teal-400/30 px-2.5 py-0.5 rounded-full text-xs font-semibold">
              มาตรฐานระดับสากล
            </span>
            <span>เปิดรับผู้สูงอายุและผู้ป่วยพักฟื้นแล้ววันนี้ • ปรึกษาและนัดหมายเข้าชมสถานที่ฟรี</span>
          </div>
          <div className="flex items-center gap-4 text-teal-100 font-medium text-xs">
            <a href="tel:0817726444" className="hover:text-white flex items-center gap-1.5 transition">
              <PhoneCall className="w-3.5 h-3.5" /> 081-772-6444
            </a>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> ดูแลตลอด 24 ชม.
            </span>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVIGATION (Zero Overflow on Any Mobile Device) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 shrink-0">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-slate-900 leading-tight whitespace-nowrap">
                ณัฐนันท์ เนอสซิ่งแคร์
              </h1>
              <p className="hidden sm:block text-[11px] sm:text-xs text-slate-500 font-medium whitespace-nowrap">
                บ้านพักผู้สูงอายุ & ศูนย์ฟื้นฟูผู้ป่วยพักฟื้น กรุงเทพฯ
              </p>
            </div>
          </div>

          {/* Navigation Links (Desktop only) */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600 whitespace-nowrap">
            <a href="#services" className="hover:text-teal-700 transition">บริการของเรา</a>
            <a href="#care-group" className="hover:text-teal-700 transition">กลุ่มผู้รับบริการ</a>
            <a href="#facility" className="hover:text-teal-700 transition">บรรยากาศศูนย์</a>
            <a href="#packages" className="hover:text-teal-700 transition">อัตราค่าบริการ</a>
            <a href="#contact" className="hover:text-teal-700 transition">ติดต่อเรา</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="https://line.me/ti/p/~@fhu6688s"
              target="_blank" 
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm shadow-sm transition whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" /> แอดไลน์ปรึกษา
            </a>
            <a 
              href="#booking" 
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-teal-700/20 transition whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span>นัดชมสถานที่</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (Full-Screen Edge-to-Edge Cinematic Background on Both Mobile & Desktop) */}
      <section className="relative min-h-[92vh] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Image (Edge-to-Edge on all devices) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nattanan-hero.jpg"
            alt="ณัฐนันท์ เนอสซิ่งแคร์ บ้านพักผู้สูงอายุและศูนย์ฟื้นฟู"
            className="w-full h-full object-cover object-[78%_center] lg:object-right brightness-105 contrast-[1.02] transition-all duration-700"
          />
          {/* Desktop Left Negative Space Gradient for 100% text contrast */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 via-50% to-transparent" />
          {/* Mobile Overlay: Dark scrim behind top text (0-25%), crystal-clear in middle for bright nurse & garden, then smooth dark scrim at bottom behind buttons & cards */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/45 via-25% to-transparent" />
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/85 via-50% to-transparent" />
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-16 pb-4 sm:pb-8 lg:py-24 relative z-10 w-full flex-1 flex flex-col justify-between">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center lg:text-left">
              
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-950/80 border border-teal-500/40 text-teal-300 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold backdrop-blur-md shadow-md shadow-slate-950/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>มาตรฐานสถานประกอบการเพื่อสุขภาพ • ดูแลด้วยหัวใจ 24 ชม.</span>
              </div>

              {/* Main Headline (Perfect Word-Wrap: Never Breaks 'ศูนย์ฟื้นฟู', Crisp Drop Shadows) */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                บ้านพักผู้สูงอายุ & ศูนย์ฟื้นฟู <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300 inline-block mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  ณัฐนันท์ เนอสซิ่งแคร์
                </span>
              </h2>

              {/* Subheadline (Brighter text-slate-100 with drop shadow so it pops with 100% legibility) */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                ให้คนที่คุณรักได้รับการดูแลอย่างใกล้ชิดและปลอดภัย โดยทีมพยาบาลวิชาชีพและนักบริบาลตลอด 24 ชั่วโมง 
                บรรยากาศร่มรื่น โปร่งสบาย ดุจบ้านพักส่วนตัวริมสวน พร้อมโปรแกรมกายภาพบำบัดฟื้นฟูเฉพาะบุคคล
              </p>

              {/* Desktop CTAs (Hidden on mobile; on mobile they are moved down below the image) */}
              <div className="hidden lg:flex flex-row items-center justify-start gap-3 pt-2">
                <a 
                  href="#booking" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-base shadow-lg shadow-teal-500/30 transition transform active:scale-95"
                >
                  <Calendar className="w-5 h-5" /> นัดหมายเข้าเยี่ยมชมสถานที่
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="tel:0817726444" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <PhoneCall className="w-5 h-5 text-teal-400" /> โทรปรึกษาประเมินฟรี
                </a>
              </div>

              {/* Desktop Micro Trust Proof */}
              <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 pt-1 text-xs text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> เข้าชมสถานที่จริงได้ทุกวัน</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> ไม่มีค่าใช้จ่ายแอบแฝง</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> มีที่จอดรถสะดวกสบาย</span>
              </div>
            </div>

            {/* Desktop Right Column Spacer (Transparent so photo shines through) */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

          </div>

          {/* Bottom Area: On mobile holds the CTA buttons moved down + the 4 Glassmorphic Feature Badges */}
          <div className="mt-4 sm:mt-16">
            
            {/* Mobile CTAs: Moved Down to bottom of hero so the nurse, grandma & garden are completely clear and unobstructed */}
            <div className="lg:hidden space-y-2 mb-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a 
                  href="#booking" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 active:from-teal-600 active:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/30 transition active:scale-95"
                >
                  <Calendar className="w-4 h-4" /> นัดหมายเข้าเยี่ยมชมสถานที่
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="tel:0817726444" 
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 active:bg-slate-800 text-white font-bold text-xs border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-teal-400" /> โทรปรึกษาประเมินฟรี
                </a>
              </div>

              {/* Mobile Micro Trust Proof */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5 text-[10px] text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> เข้าชมสถานที่จริงได้ทุกวัน</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> ไม่มีค่าใช้จ่ายแอบแฝง</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> มีที่จอดรถสะดวกสบาย</span>
              </div>
            </div>

            {/* Bottom 4 Glassmorphic Feature Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
            <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center justify-center shrink-0">
                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">พยาบาลวิชาชีพ 24 ชม.</h4>
                <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">ตรวจวัดสัญญาณชีพทุกวัน</p>
              </div>
            </div>

            <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">กายภาพบำบัดฟื้นฟู</h4>
                <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">วางแผนฟื้นฟูเฉพาะบุคคล</p>
              </div>
            </div>

            <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">อาหารปรุงสดเฉพาะโรค</h4>
                <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">คำนวณตามหลักโภชนาการ</p>
              </div>
            </div>

            <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">วิดีโอคอลคุยครอบครัว</h4>
                <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">อัปเดตอาการทุกวันผ่าน LINE</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* 4. WHO WE CARE FOR (กลุ่มผู้สูงอายุและผู้ป่วยที่เราพร้อมดูแล) */}
      <section id="care-group" className="py-16 md:py-24 bg-white border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Care Categories
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              เราพร้อมดูแลทุกภาวะสุขภาพด้วยความเข้าใจ
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              ออกแบบแผนการพยาบาลและกิจกรรมเฉพาะรายบุคคล เพื่อเสริมสร้างคุณภาพชีวิตที่ดีทั้งกายและใจ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Group 1 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500 hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. ผู้สูงอายุทั่วไป (ดูแลสุขภาพ)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                ผู้สูงอายุที่ช่วยเหลือตัวเองได้ แต่ต้องการสังคม เพื่อนคุย อาหารสุขภาพ และการดูแลด้านความปลอดภัยตลอด 24 ชม. ป้องกันการหกล้ม
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 border-t border-slate-200/60 pt-3">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-600" /> ตรวจสุขภาพเบื้องต้นสม่ำเสมอ</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-600" /> กิจกรรมผ่อนคลายและฝึกสมอง</li>
              </ul>
            </div>

            {/* Group 2 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500 hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. ผู้ป่วยพักฟื้นหลังผ่าตัด / ออก รพ.</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                ผู้ป่วยที่ออกจากโรงพยาบาลและยังต้องพักฟื้น ทำแผล ทำกายภาพบำบัดฟื้นฟูกำลังแขนขา เพื่อให้กลับมาใช้ชีวิตได้ปกติเร็วที่สุด
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 border-t border-slate-200/60 pt-3">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> บริการทำแผล ปราศจากเชื้อ</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> ฟื้นฟูกล้ามเนื้อและข้อต่อ</li>
              </ul>
            </div>

            {/* Group 3 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500 hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. ผู้ป่วยติดเตียง & ให้อาหารสายยาง</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                ผู้ป่วยที่ช่วยเหลือตัวเองไม่ได้ ต้องพลิกตัวป้องกันแผลกดทับ ดูดเสมหะ ให้อาหารทางสายยาง (NG Tube) หรือใส่สายสวนปัสสาวะ
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 border-t border-slate-200/60 pt-3">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600" /> พลิกตัวเปลี่ยนท่าทุก 2 ชม.</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600" /> ดูแลสายยางและสุขอนามัยอย่างถูกวิธี</li>
              </ul>
            </div>

            {/* Group 4 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500 hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. ผู้ป่วยหลอดเลือดสมอง (Stroke)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                อัมพฤกษ์ อัมพาต แขนขาอ่อนแรง มีนักกายภาพบำบัดวางแผนฝึกการเคลื่อนไหว การทรงตัว และฝึกการกลืนอาหารอย่างใกล้ชิด
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 border-t border-slate-200/60 pt-3">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600" /> แผนฟื้นฟูกายภาพเฉพาะบุคคล</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600" /> ฝึกฝึกกิจกรรมบำบัดประจำวัน</li>
              </ul>
            </div>

            {/* Group 5 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500 hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">5. ผู้มีภาวะสมองเสื่อม / อัลไซเมอร์</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                ผู้สูงอายุที่มีอาการหลงลืม มีพฤติกรรมเปลี่ยนแปลง ต้องการสถานที่ที่มีระบบความปลอดภัยสูงและการดูแลด้วยความใจเย็น อ่อนโยน
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 border-t border-slate-200/60 pt-3">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600" /> ระบบรักษาความปลอดภัยรัดกุม</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600" /> กิจกรรมกระตุ้นการรู้คิด (Cognitive)</li>
              </ul>
            </div>

            {/* Group 6 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500 hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">6. บริการรับฝากดูแลชั่วคราว (Day / Week)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                สำหรับครอบครัวที่ติดภารกิจ เดินทางต่างจังหวัด หรือต่างประเทศ และต้องการสถานที่ดูแลคนที่รักอย่างปลอดภัยไร้กังวล
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 border-t border-slate-200/60 pt-3">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> รับดูแลแบบรายวัน / รายสัปดาห์</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> บริการครบถ้วนเหมือนรายเดือน</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 6 REASONS TO CHOOSE US (ทำไมครอบครัวถึงไว้วางใจ ณัฐนันท์ เนอสซิ่งแคร์) */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-100/70 px-3 py-1 rounded-full">
              Our Excellence Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              มาตรฐานการดูแลระดับมืออาชีพ ที่คุณวางใจได้
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              ความใส่ใจในทุกรายละเอียด เพื่อให้ผู้สูงอายุมีความสุข สุขภาพแข็งแรง และครอบครัวสบายใจ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-600/20">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">ทีมบริบาลเฝ้าระวัง 24 ชั่วโมง</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  มีเจ้าหน้าที่ตรวจเช็กสัญญาณชีพ วัดความดัน ออกซิเจน อุณหภูมิ และบันทึกสมุดรายงานสุขภาพทุกวัน
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                <Utensils className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">โภชนาการปรุงสดเฉพาะบุคคล</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  อาหาร 3 มื้อ + อาหารว่าง คำนวณสารอาหารตามโรคประจำตัว เช่น เบาหวาน โรคไต ความดัน และอาหารปั่นสายยาง
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-600/20">
                <Activity className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">กายภาพบำบัดฟื้นฟูต่อเนื่อง</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  มีนักกายภาพช่วยบริหารข้อต่อ กล้ามเนื้อ ฝึกยืน เดิน ป้องกันข้อยึดติด และฟื้นฟูสมรรถภาพอย่างถูกวิธี
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-600/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">สถานที่สะอาด อากาศถ่ายเท ไม่แออัด</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ออกแบบตามหลัก Universal Design ปลอดสิ่งกีดขวาง ราวจับรอบทิศทาง ทำความสะอาดฆ่าเชื้อสม่ำเสมอ
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/20">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">อัปเดตรายงานครอบครัวทุกวัน</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ส่งภาพถ่าย วิดีโอ และอัปเดตชีวิตประจำวันทาง LINE พร้อมบริการเชื่อมต่อวิดีโอคอลคุยกับลูกหลานได้ตลอด
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-600/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">ระบบส่งต่อฉุกเฉินโรงพยาบาลรวดเร็ว</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ตั้งอยู่ใกล้โรงพยาบาลชั้นนำในกรุงเทพฯ มีแผนรับมือเหตุฉุกเฉินและประสานรถพยาบาลส่งต่อทันท่วงที
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ROOM PACKAGES (ประเภทห้องพักและราคาชัดเจน) */}
      <section id="packages" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Room Options & Packages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              อัตราค่าบริการ โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              เลือกรูปแบบห้องพักที่ตรงกับความต้องการและงบประมาณของครอบครัวคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Standard Room */}
            <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">ห้องรวมมาตรฐาน</span>
                <h3 className="text-xl font-bold text-slate-900">Standard Shared Room</h3>
                <p className="text-xs text-slate-600">
                  ห้องพักรวมแบบโปร่ง โล่ง กว้างขวาง มีพื้นที่ส่วนตัว ไม่อึดอัด มีเพื่อนคุยคลายเหงา
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold text-slate-900">18,000 - 22,000</span>
                  <span className="text-xs text-slate-500 font-medium"> บาท / เดือน</span>
                </div>

                <ul className="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-200/60">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> เตียงผู้ป่วยมาตรฐานปรับระดับได้</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> ทีมบริบาลดูแลตลอด 24 ชั่วโมง</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> อาหาร 3 มื้อ + อาหารว่าง 1 มื้อ</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> ซักรีดเสื้อผ้าและทำความสะอาดทุกวัน</li>
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="#booking"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-300 transition"
                >
                  นัดดูห้องพักนี้
                </a>
              </div>
            </div>

            {/* Deluxe Room (Most Popular) */}
            <div className="bg-gradient-to-b from-teal-50 to-white rounded-3xl p-6 md:p-8 border-2 border-teal-600 flex flex-col justify-between shadow-xl relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                ยอดนิยมที่สุด
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">ห้องพิเศษ 2-3 เตียง</span>
                <h3 className="text-xl font-bold text-slate-900">Semi-Private Deluxe</h3>
                <p className="text-xs text-slate-600">
                  ความเป็นส่วนตัวสูงขึ้น พื้นที่กว้างขวาง ดูแลใกล้ชิด เหมาะสำหรับผู้ป่วยพักฟื้น
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold text-teal-900">23,000 - 28,000</span>
                  <span className="text-xs text-teal-700 font-medium"> บาท / เดือน</span>
                </div>

                <ul className="text-xs text-slate-700 space-y-2.5 pt-4 border-t border-teal-200/60 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> เตียงไฟฟ้าปรับท่าอัตโนมัติ</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> โปรแกรมกายภาพบำบัดฟื้นฟู</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> รายงานสุขภาพและวิดีโอคอลทุกวัน</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> รวมค่าบริการดูแลพยาบาลครบถ้วน</li>
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="#booking"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-md shadow-teal-700/20 transition"
                >
                  จองนัดหมายห้องนี้
                </a>
              </div>
            </div>

            {/* VIP Private Room */}
            <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">ห้องเดี่ยวพิเศษ VIP</span>
                <h3 className="text-xl font-bold text-slate-900">VIP Private Suite</h3>
                <p className="text-xs text-slate-600">
                  ห้องเดี่ยวส่วนตัวเต็มรูปแบบ ญาติมาเฝ้าหรือพักค้างคืนได้ สะดวกสบายเหมือนอยู่บ้าน
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold text-slate-900">30,000 - 45,000</span>
                  <span className="text-xs text-slate-500 font-medium"> บาท / เดือน</span>
                </div>

                <ul className="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-200/60">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> ห้องส่วนตัว พร้อมห้องน้ำในตัว</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> บริบาลดูแลพิเศษเฉพาะบุคคล 1:1 (Option)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> โซฟาปรับนอนสำหรับญาติผู้เข้าเยี่ยม</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> Smart TV, ตู้เย็น, แอร์ส่วนตัว</li>
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="#booking"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-300 transition"
                >
                  สอบถามห้อง VIP
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAMILY REVIEWS (เสียงตอบรับจากญาติผู้สูงอายุ) */}
      <section className="py-16 md:py-24 bg-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-wider bg-teal-800/80 px-3 py-1 rounded-full border border-teal-700">
              Heartfelt Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              ความประทับใจและความไว้วางใจจากครอบครัว
            </h2>
            <p className="text-sm sm:text-base text-teal-200">
              เพราะความสบายใจของญาติและรอยยิ้มของผู้สูงอายุ คือเป้าหมายสูงสุดของเรา
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700/60 space-y-4">
              <div className="flex text-amber-400">★★★★★</div>
              <p className="text-sm text-teal-100 leading-relaxed italic">
                &ldquo;คุณแม่พักฟื้นหลังผ่าตัดสะโพกที่นี่ได้ 2 เดือน พยาบาลและน้องๆ ดูแลดีมาก ส่งรูปและคลิปวิดีโออัปเดตให้ดูทุกวัน ตอนนี้คุณแม่เดินได้คล่องขึ้นเยอะ ขอบคุณทีมงานทุกคนมากๆ ค่ะ&rdquo;
              </p>
              <div className="pt-2 border-t border-teal-700/60">
                <p className="text-xs font-bold text-white">คุณสุภาภรณ์ ว.</p>
                <p className="text-[11px] text-teal-300">บุตรสาวผู้รับบริการพักฟื้น</p>
              </div>
            </div>

            <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700/60 space-y-4">
              <div className="flex text-amber-400">★★★★★</div>
              <p className="text-sm text-teal-100 leading-relaxed italic">
                &ldquo;สถานที่สะอาดมาก ไม่มีกลิ่นอับ บรรยากาศโปร่งสบายเหมือนอยู่บ้าน คุณพ่อชอบออกมานั่งรับลมตรงสวนหย่อม อาหารจัดจานสะอาดและคุมโซเดียมดีมาก สบายใจที่ตัดสินใจเลือกที่นี่ครับ&rdquo;
              </p>
              <div className="pt-2 border-t border-teal-700/60">
                <p className="text-xs font-bold text-white">คุณกิตติศักดิ์ ภ.</p>
                <p className="text-[11px] text-teal-300">ครอบครัวผู้สูงอายุพักระยะยาว</p>
              </div>
            </div>

            <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700/60 space-y-4">
              <div className="flex text-amber-400">★★★★★</div>
              <p className="text-sm text-teal-100 leading-relaxed italic">
                &ldquo;มีนักกายภาพคอยประกบฝึกเดินจริงจัง เจ้าหน้าที่พูดจาสุภาพ อ่อนโยน เข้าใจจิตใจคนแก่อย่างแท้จริง เวลาเราไปเยี่ยมคุณยายหน้าตาสดใส อารมณ์ดีทุกครั้งเลยค่ะ&rdquo;
              </p>
              <div className="pt-2 border-t border-teal-700/60">
                <p className="text-xs font-bold text-white">คุณณัฐณิชา ต.</p>
                <p className="text-[11px] text-teal-300">หลานสาวผู้รับบริการ</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE APPOINTMENT & CONTACT FORM */}
      <section id="booking" className="py-16 md:py-24 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Book a Visit
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                นัดหมายเข้าเยี่ยมชมสถานที่จริง หรือปรึกษาทีมงาน
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                ยินดีต้อนรับทุกครอบครัว เข้าชมห้องพักและบรรยากาศจริงเพื่อความมั่นใจก่อนตัดสินใจ
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-teal-50 rounded-2xl border border-teal-200 space-y-3">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-md shadow-teal-600/20">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">บันทึกการนัดหมายเรียบร้อยแล้วครับ</h3>
                <p className="text-sm text-teal-700 max-w-md mx-auto">
                  เจ้าหน้าที่พยาบาลของ ณัฐนันท์ เนอสซิ่งแคร์ ได้รับข้อมูลการนัดหมายของคุณ <span className="font-bold">{formData.name}</span> เรียบร้อยแล้ว และจะโทรติดต่อกลับที่เบอร์ <span className="font-bold">{formData.phone}</span> เพื่อยืนยันเวลานัดหมายโดยเร็วที่สุดครับ
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-teal-700 hover:underline"
                  >
                    ← แก้ไขข้อมูลการนัดหมาย
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">ชื่อ-นามสกุล ของผู้ติดต่อ *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="เช่น คุณนัฐนันท์ (ญาติ)" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">เบอร์โทรศัพท์สำหรับติดต่อกลับ *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="เช่น 081-xxx-xxxx" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">ภาวะสุขภาพของผู้รับบริการ</label>
                    <select 
                      value={formData.careType}
                      onChange={(e) => setFormData({ ...formData, careType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-sm bg-white"
                    >
                      <option>ผู้สูงอายุทั่วไป (ช่วยเหลือตัวเองได้)</option>
                      <option>ผู้ป่วยพักฟื้นหลังออกจากโรงพยาบาล</option>
                      <option>ผู้ป่วยติดเตียง / ให้อาหารสายยาง</option>
                      <option>ผู้ป่วยหลอดเลือดสมอง (Stroke) / กายภาพ</option>
                      <option>ผู้มีภาวะสมองเสื่อม / อัลไซเมอร์</option>
                      <option>ต้องการฝากดูแลระยะสั้น (รายวัน/สัปดาห์)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">วันที่สะดวกเข้าเยี่ยมชม</label>
                    <input 
                      type="date" 
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">รายละเอียดเพิ่มเติม / ข้อสอบถามพิเศษ</label>
                  <textarea 
                    rows={3} 
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="เช่น ต้องการสอบถามเรื่องบริการฟอกไต, กายภาพบำบัด หรือแพ็กเกจพิเศษ"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-sm"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-base shadow-lg shadow-teal-700/25 transition cursor-pointer"
                >
                  ยืนยันการนัดหมายเข้าเยี่ยมชมศูนย์
                </button>
              </form>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/70 text-xs text-slate-500 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                <span>ที่ตั้ง: ณัฐนันท์ เนอสซิ่งแคร์ กรุงเทพมหานคร (เปิดให้เข้าชมทุกวัน 08:00 - 18:00 น.)</span>
              </div>
              <a href="tel:0817726444" className="font-bold text-teal-800 hover:underline">
                โทรสอบถามด่วน: 081-772-6444
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AGENCY FOOTER & WATERMARK */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-white font-bold text-sm">ณัฐนันท์ เนอสซิ่งแคร์ (Nattanan Nursing Care)</p>
            <p className="text-slate-400 mt-1">บ้านพักผู้สูงอายุและศูนย์ฟื้นฟูผู้ป่วยพักฟื้น ดูแลด้วยหัวใจ อบอุ่นเหมือนครอบครัว 24 ชม.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1.5 text-slate-500 text-[11px]">
            <p>© 2026 Nattanan Nursing Care. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-800/80 px-3.5 py-1.5 rounded-full text-slate-300 border border-slate-700 shadow-xs">
              <span>🚀 ออกแบบและพัฒนาโดย</span>
              <a 
                href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
                target="_blank" 
                rel="noreferrer" 
                className="text-amber-400 font-bold hover:text-amber-300 hover:underline"
              >
                SalesDesk AI
              </a>
              <span className="text-slate-600">•</span>
              <a 
                href="https://line.me/R/ti/p/@fhu6688s" 
                target="_blank" 
                rel="noreferrer" 
                className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3" />
                <span>ปรึกษาผ่าน LINE OA (@fhu6688s)</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 10. FIXED MOBILE BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-lg">
        <div className="grid grid-cols-2 gap-2">
          <a 
            href="tel:0817726444" 
            className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-800 text-white font-bold text-xs"
          >
            <PhoneCall className="w-4 h-4 text-teal-400" /> โทรปรึกษาด่วน
          </a>
          <a 
            href="https://line.me/ti/p/~@fhu6688s" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4" /> แอดไลน์นัดชม
          </a>
        </div>
      </div>
    </div>
  );
}
