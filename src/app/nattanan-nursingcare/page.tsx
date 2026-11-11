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
  Stethoscope,
  Smile,
  Home,
  Check,
  Bed,
  BellRing,
  Sun,
  Video,
  HeartPulse,
} from 'lucide-react';

const BRAND_NAME = 'บ้านพักผู้สูงอายุ ณัฐนันท์ เนอสซิ่งแคร์';
const PHONE_1_DISPLAY = '090-958-9979';
const PHONE_1_RAW = '0909589979';
const PHONE_2_DISPLAY = '080-879-0959';
const PHONE_2_RAW = '0808790959';

export default function NattananNursingCareSalepage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    careType: 'ผู้สูงอายุทั่วไป (ช่วยเหลือตัวเองได้)',
    roomPackage: 'ต้องการให้เจ้าหน้าที่แนะนำห้องพักที่เหมาะสม',
    visitDate: '',
    notes: '',
  });

  const handleSelectPackage = (pkgName: string) => {
    setFormData((prev) => ({ ...prev, roomPackage: pkgName }));
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับติดต่อกลับครับ');
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          modelInterest: formData.roomPackage,
          serviceType: formData.careType,
          preferredDate: formData.visitDate,
          notes: formData.notes,
          pageSource: BRAND_NAME,
        }),
      });
    } catch {
      // Fallback gracefully if offline
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: BRAND_NAME,
    alternateName: 'ณัฐนันท์ เนอสซิ่งแคร์ (Nattanan Nursing Care)',
    description:
      'บ้านพักผู้สูงอายุ ณัฐนันท์ เนอสซิ่งแคร์ ศูนย์ดูแลผู้สูงอายุและผู้ป่วยพักฟื้น มาตรฐานวิชาชีพ ดูแลด้วยหัวใจตลอด 24 ชั่วโมง พร้อมกายภาพบำบัดฟื้นฟูและอาหารโภชนาการเฉพาะโรค',
    telephone: [PHONE_1_DISPLAY, PHONE_2_DISPLAY],
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '฿18,000 - ฿45,000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'กรุงเทพมหานคร',
      addressCountry: 'TH',
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white pb-24 md:pb-0 w-full max-w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="hidden sm:block bg-gradient-to-r from-teal-950 via-teal-900 to-emerald-950 text-white text-xs py-2.5 px-4 border-b border-teal-800/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-teal-500/25 text-teal-200 border border-teal-400/30 px-2.5 py-0.5 rounded-full text-xs font-semibold">
              ดูแลตลอด 24 ชั่วโมง
            </span>
            <span>
              {BRAND_NAME} • เปิดรับผู้สูงอายุและผู้ป่วยพักฟื้น ปรึกษาและนัดชมสถานที่ฟรี
            </span>
          </div>
          <div className="flex items-center gap-3 text-teal-100 font-semibold text-xs shrink-0">
            <a
              href={`tel:${PHONE_1_RAW}`}
              className="hover:text-amber-300 flex items-center gap-1.5 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-300" /> {PHONE_1_DISPLAY}
            </a>
            <span className="text-teal-600">|</span>
            <a
              href={`tel:${PHONE_2_RAW}`}
              className="hover:text-amber-300 flex items-center gap-1.5 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-300" /> {PHONE_2_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVIGATION (Zero Overflow on Any Mobile Device) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-3">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 shrink-0">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-base md:text-lg font-extrabold tracking-tight text-slate-900 leading-tight truncate">
                {BRAND_NAME}
              </div>
              <p className="text-[10px] sm:text-xs text-teal-700 font-medium truncate">
                โทร {PHONE_1_DISPLAY} • {PHONE_2_DISPLAY}
              </p>
            </div>
          </a>

          {/* Navigation Links (Desktop only) */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600 whitespace-nowrap">
            <a href="#care-group" className="hover:text-teal-700 transition whitespace-nowrap">
              กลุ่มผู้รับบริการ
            </a>
            <a href="#services" className="hover:text-teal-700 transition whitespace-nowrap">
              จุดเด่นการดูแล
            </a>
            <a href="#facility" className="hover:text-teal-700 transition whitespace-nowrap">
              สิ่งอำนวยความสะดวก
            </a>
            <a href="#packages" className="hover:text-teal-700 transition whitespace-nowrap">
              อัตราค่าบริการ
            </a>
            <a href="#faq" className="hover:text-teal-700 transition whitespace-nowrap">
              คำถามที่พบบ่อย
            </a>
            <a href="#contact" className="hover:text-teal-700 transition whitespace-nowrap">
              ติดต่อเรา
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={`tel:${PHONE_1_RAW}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-xs transition whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-400" /> {PHONE_1_DISPLAY}
            </a>
            <a
              href={`tel:${PHONE_2_RAW}`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" /> {PHONE_2_DISPLAY}
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-teal-700/20 transition whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>นัดชมสถานที่</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (16:9 Cinematic Split on Desktop, 100% Unobstructed Subject on Mobile) */}
      <section className="relative min-h-[92vh] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nattanan-hero.jpg"
            alt={BRAND_NAME}
            className="w-full h-full object-cover object-[78%_center] lg:object-right brightness-105 contrast-[1.02] transition-all duration-700"
          />
          {/* Desktop Left Negative Space Gradient */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 via-50% to-transparent" />
          {/* Mobile Multi-Layer Scrim: Top 0-25% dark, Middle 100% clear, Bottom dark behind buttons */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/45 via-25% to-transparent" />
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-slate-950 via-slate-950/90 via-55% to-transparent" />
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-16 pb-4 sm:pb-8 lg:py-24 relative z-10 w-full flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center lg:text-left">
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-950/80 border border-teal-500/40 text-teal-300 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold backdrop-blur-md shadow-md shadow-slate-950/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>ศูนย์ดูแลผู้สูงอายุและผู้ป่วยพักฟื้น • ดูแลด้วยหัวใจ 24 ชม.</span>
              </div>

              {/* Main Headline (Mandatory Thai Zero-Overlapping Standard) */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25] lg:leading-[1.22] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                <span className="block">บ้านพักผู้สูงอายุ</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300 block mt-1.5 sm:mt-2.5 pb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  ณัฐนันท์ เนอสซิ่งแคร์
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                ให้คนที่คุณรักได้รับการดูแลอย่างใกล้ชิด อบอุ่น และปลอดภัย โดยทีมพยาบาลวิชาชีพและนักบริบาลตลอด 24 ชั่วโมง
                บรรยากาศร่มรื่น โปร่งสบาย ดุจบ้านพักส่วนตัว พร้อมโปรแกรมกายภาพบำบัดฟื้นฟูเฉพาะบุคคล
              </p>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex flex-wrap items-center justify-start gap-3 pt-2">
                <a
                  href="#booking"
                  className="w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-base shadow-lg shadow-teal-500/30 transition transform active:scale-95"
                >
                  <Calendar className="w-5 h-5" /> นัดหมายเข้าเยี่ยมชมสถานที่
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${PHONE_1_RAW}`}
                  className="w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-900/85 hover:bg-slate-800 text-white font-bold text-base border border-teal-500/40 backdrop-blur-md shadow-xs transition"
                >
                  <PhoneCall className="w-5 h-5 text-teal-400" /> โทร {PHONE_1_DISPLAY}
                </a>
                <a
                  href={`tel:${PHONE_2_RAW}`}
                  className="w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-900/85 hover:bg-slate-800 text-white font-bold text-base border border-emerald-500/40 backdrop-blur-md shadow-xs transition"
                >
                  <PhoneCall className="w-5 h-5 text-emerald-400" /> โทร {PHONE_2_DISPLAY}
                </a>
              </div>

              {/* Desktop Micro Trust Proof */}
              <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 pt-1 text-xs text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> เข้าชมสถานที่จริงได้ทุกวัน
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> ดูแลใกล้ชิดตลอด 24 ชม.
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> ไม่มีค่าใช้จ่ายแอบแฝง
                </span>
              </div>
            </div>

            {/* Desktop Right Column Spacer (Transparent so photo shines through) */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
          </div>

          {/* Bottom Area: Mobile CTAs + 4 Glassmorphic Feature Badges */}
          <div className="mt-4 sm:mt-16">
            {/* Mobile CTAs: Positioned at bottom so subject in middle is 100% unobstructed */}
            <div className="lg:hidden space-y-2 mb-3">
              <a
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 active:from-teal-600 active:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/30 transition active:scale-95"
              >
                <Calendar className="w-4 h-4" /> นัดหมายเข้าเยี่ยมชมสถานที่จริง
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${PHONE_1_RAW}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900/85 active:bg-slate-800 text-white font-bold text-xs border border-teal-500/40 backdrop-blur-md shadow-xs transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{PHONE_1_DISPLAY}</span>
                </a>
                <a
                  href={`tel:${PHONE_2_RAW}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900/85 active:bg-slate-800 text-white font-bold text-xs border border-emerald-500/40 backdrop-blur-md shadow-xs transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{PHONE_2_DISPLAY}</span>
                </a>
              </div>

              {/* Mobile Micro Trust Proof */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5 text-[11px] text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-400" /> เข้าชมสถานที่จริงได้ทุกวัน
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-400" /> ไม่มีค่าใช้จ่ายแอบแฝง
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-400" /> ที่จอดรถสะดวกสบาย
                </span>
              </div>
            </div>

            {/* Bottom 4 Glassmorphic Feature Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate">พยาบาลและบริบาล 24 ชม.</h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 truncate">ตรวจวัดสัญญาณชีพทุกวัน</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate">กายภาพบำบัดฟื้นฟู</h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 truncate">วางแผนฟื้นฟูเฉพาะบุคคล</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate">อาหารปรุงสดเฉพาะโรค</h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 truncate">คำนวณตามหลักโภชนาการ</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate">อัปเดตครอบครัวทุกวัน</h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 truncate">ส่งภาพและวิดีโอคอลใกล้ชิด</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-normal sm:leading-[1.25]">
              เราพร้อมดูแลทุกภาวะสุขภาพด้วยความเข้าใจ
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {BRAND_NAME} ออกแบบแผนการพยาบาลและกิจกรรมเฉพาะรายบุคคล เพื่อเสริมสร้างคุณภาพชีวิตที่ดีทั้งกายและใจ
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
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-teal-600" /> ตรวจสุขภาพเบื้องต้นสม่ำเสมอ
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-teal-600" /> กิจกรรมผ่อนคลายและฝึกสมอง
                </li>
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
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> บริการทำแผล ปราศจากเชื้อ
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> ฟื้นฟูกล้ามเนื้อและข้อต่อ
                </li>
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
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600" /> พลิกตัวเปลี่ยนท่าทุก 2 ชม.
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600" /> ดูแลสายยางและสุขอนามัยอย่างถูกวิธี
                </li>
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
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-600" /> แผนฟื้นฟูกายภาพเฉพาะบุคคล
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-600" /> ฝึกกิจกรรมบำบัดประจำวัน
                </li>
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
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-600" /> ระบบรักษาความปลอดภัยรัดกุม
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-600" /> กิจกรรมกระตุ้นการรู้คิด (Cognitive)
                </li>
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
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-rose-600" /> รับดูแลแบบรายวัน / รายสัปดาห์ / รายเดือน
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-rose-600" /> บริการครบถ้วนเหมือนพักประจำ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 6 REASONS TO CHOOSE US */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-100/70 px-3 py-1 rounded-full">
              Our Excellence Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-normal sm:leading-[1.25]">
              ทำไมครอบครัวถึงไว้วางใจ {BRAND_NAME}
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
                  ช่วยบริหารข้อต่อ กล้ามเนื้อ ฝึกยืน เดิน ป้องกันข้อยึดติด และฟื้นฟูสมรรถภาพอย่างถูกวิธี
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
                  ใกล้โรงพยาบาลชั้นนำ มีแผนรับมือเหตุฉุกเฉินและประสานรถพยาบาลส่งต่อทันท่วงทีตลอด 24 ชม.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 FACILITY & SAFETY SHOWCASE (บรรยากาศและสิ่งอำนวยความสะดวกภายในศูนย์) */}
      <section id="facility" className="py-16 md:py-24 bg-white border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Facility & Safety Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-normal sm:leading-[1.25]">
              บรรยากาศและสิ่งอำนวยความสะดวกเพื่อผู้สูงอายุ
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              พื้นที่ทุกตารางเมตรออกแบบมาเพื่อความปลอดภัย ความผ่อนคลาย และการฟื้นฟูสุขภาพอย่างเต็มประสิทธิภาพ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-teal-600/10 text-teal-700 flex items-center justify-center">
                <Bed className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">เตียงการแพทย์และที่นอนลม</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                เตียงผู้ป่วยปรับระดับได้พร้อมราวกั้นกันตก และที่นอนลมเกรดการแพทย์สำหรับป้องกันแผลกดทับ
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">สวนหย่อมและพื้นที่พักผ่อน</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                พื้นที่สีเขียวร่มรื่น อากาศถ่ายเทสะดวก ให้ผู้สูงอายุออกมารับแสงแดดอ่อนยามเช้าและทำกิจกรรมร่วมกัน
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-amber-600/10 text-amber-700 flex items-center justify-center">
                <BellRing className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">ราวจับนิรภัย & กริ่งฉุกเฉิน</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ทางลาดสำหรับรถเข็นวีลแชร์ พื้นกันลื่น ราวจับพยุงเดินทั่วบริเวณ และระบบเรียกเจ้าหน้าที่ข้างเตียง
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-sky-600/10 text-sky-700 flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">CCTV 24 ชม. & ระบบปลอดเชื้อ</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ระบบกล้องวงจรปิดเฝ้าระวังความปลอดภัยตลอด 24 ชม. พร้อมมาตรฐานการอบฆ่าเชื้อและซักรีดแยกชุดสะอาด
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ROOM PACKAGES (ประเภทห้องพักและราคาชัดเจน) */}
      <section id="packages" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Room Options & Packages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-normal sm:leading-[1.25]">
              อัตราค่าบริการ โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              เลือกรูปแบบห้องพักที่ตรงกับความต้องการและงบประมาณของครอบครัวคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Room */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">ห้องรวมมาตรฐาน</span>
                <h3 className="text-xl font-bold text-slate-900">Standard Shared Room</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  ห้องพักรวมแบบโปร่ง โล่ง กว้างขวาง มีพื้นที่ส่วนตัว ไม่อึดอัด มีเพื่อนคุยคลายเหงา
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold text-slate-900">18,000 - 22,000</span>
                  <span className="text-xs text-slate-500 font-medium"> บาท / เดือน</span>
                </div>

                <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5 pt-4 border-t border-slate-200/60">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> เตียงผู้ป่วยมาตรฐานปรับระดับได้
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> ทีมบริบาลดูแลตลอด 24 ชั่วโมง
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> อาหาร 3 มื้อ + อาหารว่าง 1 มื้อ
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> ซักรีดเสื้อผ้าและทำความสะอาดทุกวัน
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => handleSelectPackage('ห้องรวมมาตรฐาน (Standard Shared Room)')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-300 transition cursor-pointer"
                >
                  นัดดูห้องพักนี้
                </button>
              </div>
            </div>

            {/* Deluxe Room (Most Popular) */}
            <div className="bg-gradient-to-b from-teal-50 to-white rounded-3xl p-6 md:p-8 border-2 border-teal-600 flex flex-col justify-between shadow-xl relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                ยอดนิยมที่สุด
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">ห้องพิเศษ 2-3 เตียง</span>
                <h3 className="text-xl font-bold text-slate-900">Semi-Private Deluxe</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  ความเป็นส่วนตัวสูงขึ้น พื้นที่กว้างขวาง ดูแลใกล้ชิด เหมาะสำหรับผู้ป่วยพักฟื้น
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold text-teal-900">23,000 - 28,000</span>
                  <span className="text-xs text-teal-700 font-medium"> บาท / เดือน</span>
                </div>

                <ul className="text-xs sm:text-sm text-slate-700 space-y-2.5 pt-4 border-t border-teal-200/60 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> เตียงไฟฟ้าปรับท่าอัตโนมัติ
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> โปรแกรมกายภาพบำบัดฟื้นฟู
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> รายงานสุขภาพและวิดีโอคอลทุกวัน
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> รวมค่าบริการดูแลพยาบาลครบถ้วน
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => handleSelectPackage('ห้องพิเศษ 2-3 เตียง (Semi-Private Deluxe)')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-teal-700/20 transition cursor-pointer"
                >
                  จองนัดหมายห้องนี้
                </button>
              </div>
            </div>

            {/* VIP Private Room */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">ห้องเดี่ยวพิเศษ VIP</span>
                <h3 className="text-xl font-bold text-slate-900">VIP Private Suite</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  ห้องเดี่ยวส่วนตัวเต็มรูปแบบ ญาติมาเฝ้าหรือพักค้างคืนได้ สะดวกสบายเหมือนอยู่บ้าน
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold text-slate-900">30,000 - 45,000</span>
                  <span className="text-xs text-slate-500 font-medium"> บาท / เดือน</span>
                </div>

                <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5 pt-4 border-t border-slate-200/60">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> ห้องส่วนตัว พร้อมห้องน้ำในตัว
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> บริบาลดูแลพิเศษเฉพาะบุคคล 1:1 (Option)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> โซฟาปรับนอนสำหรับญาติผู้เข้าเยี่ยม
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" /> Smart TV, ตู้เย็น, แอร์ส่วนตัว
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => handleSelectPackage('ห้องเดี่ยวพิเศษ VIP (VIP Private Suite)')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-300 transition cursor-pointer"
                >
                  สอบถามห้อง VIP
                </button>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-normal sm:leading-[1.25]">
              ความประทับใจและความไว้วางใจจากครอบครัว
            </h2>
            <p className="text-sm sm:text-base text-teal-200">
              เพราะความสบายใจของญาติและรอยยิ้มของผู้สูงอายุ คือเป้าหมายสูงสุดของ {BRAND_NAME}
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
                <p className="text-xs text-teal-300">บุตรสาวผู้รับบริการพักฟื้น</p>
              </div>
            </div>

            <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700/60 space-y-4">
              <div className="flex text-amber-400">★★★★★</div>
              <p className="text-sm text-teal-100 leading-relaxed italic">
                &ldquo;สถานที่สะอาดมาก ไม่มีกลิ่นอับ บรรยากาศโปร่งสบายเหมือนอยู่บ้าน คุณพ่อชอบออกมานั่งรับลมตรงสวนหย่อม อาหารจัดจานสะอาดและคุมโซเดียมดีมาก สบายใจที่ตัดสินใจเลือกที่นี่ครับ&rdquo;
              </p>
              <div className="pt-2 border-t border-teal-700/60">
                <p className="text-xs font-bold text-white">คุณกิตติศักดิ์ ภ.</p>
                <p className="text-xs text-teal-300">ครอบครัวผู้สูงอายุพักระยะยาว</p>
              </div>
            </div>

            <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700/60 space-y-4">
              <div className="flex text-amber-400">★★★★★</div>
              <p className="text-sm text-teal-100 leading-relaxed italic">
                &ldquo;มีนักกายภาพคอยประกบฝึกเดินจริงจัง เจ้าหน้าที่พูดจาสุภาพ อ่อนโยน เข้าใจจิตใจคนแก่อย่างแท้จริง เวลาเราไปเยี่ยมคุณยายหน้าตาสดใส อารมณ์ดีทุกครั้งเลยค่ะ&rdquo;
              </p>
              <div className="pt-2 border-t border-teal-700/60">
                <p className="text-xs font-bold text-white">คุณณัฐณิชา ต.</p>
                <p className="text-xs text-teal-300">หลานสาวผู้รับบริการ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 FAQS SECTION */}
      <section id="faq" className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-normal sm:leading-[1.25]">
              คำถามที่ญาติและครอบครัวสอบถามบ่อย (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              ความโปร่งใสและมาตรฐานการดูแล คือหัวใจสำคัญของ {BRAND_NAME}
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="font-bold text-teal-800 text-sm mb-1.5">
                Q: ผู้สูงอายุติดเตียง เจาะคอ หรือให้อาหารทางสายยาง รับดูแลไหม?
              </div>
              <div className="text-slate-600 leading-relaxed">
                A: รับดูแลครับ เรามีพยาบาลวิชาชีพและผู้ช่วยพยาบาลประจำตลอด 24 ชม. พร้อมอุปกรณ์ทางการแพทย์ ได้แก่ เครื่องดูดเสมหะ ถังออกซิเจน เครื่องวัดสัญญาณชีพ และบริการทำแผลกดทับตามมาตรฐานวิชาชีพครับ
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="font-bold text-teal-800 text-sm mb-1.5">
                Q: ญาติสามารถเข้าเยี่ยมได้เวลาใดบ้าง และต้องนัดหมายล่วงหน้าไหม?
              </div>
              <div className="text-slate-600 leading-relaxed">
                A: ครอบครัวสามารถเข้าเยี่ยมได้ทุกวันตั้งแต่ 08.00 - 18.00 น. โดยไม่จำกัดจำนวนครั้ง และเพื่อความสะดวกในการจัดเตรียมห้องรับรองและที่จอดรถ แนะนำให้โทรนัดหมายล่วงหน้าได้ที่เบอร์ {PHONE_1_DISPLAY} หรือ {PHONE_2_DISPLAY} ครับ
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="font-bold text-teal-800 text-sm mb-1.5">
                Q: ครอบครัวจะทราบความคืบหน้าการดูแลและสุขภาพประจำวันได้อย่างไร?
              </div>
              <div className="text-slate-600 leading-relaxed">
                A: ทีมงานจะเปิดกลุ่ม LINE เฉพาะครอบครัว รายงานสัญญาณชีพ อาหาร กิจกรรมกายภาพ และส่งรูปภาพหรือวิดีโอคอลให้พูดคุยกับท่านเป็นประจำทุกวัน ทำให้ท่านสบายใจเสมือนอยู่ใกล้ชิดครับ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE APPOINTMENT & CONTACT FORM */}
      <section id="booking" className="py-16 md:py-24 bg-slate-100 border-t border-slate-200">
        <div id="contact" className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Phone & Contact Info Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30 text-xs font-semibold">
                <HeartPulse className="w-3.5 h-3.5 text-amber-300" />
                <span>ปรึกษาประเมินอาการเบื้องต้นฟรี</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-extrabold leading-snug">
                  {BRAND_NAME}
                </h2>
                <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
                  โทรพูดคุยปรึกษาภาวะสุขภาพของผู้สูงอายุ สอบถามห้องว่าง หรือนัดหมายเข้าชมสถานที่จริงได้ทุกวันตลอด 24 ชั่วโมง
                </p>
              </div>

              {/* Direct Call Cards */}
              <div className="space-y-3 pt-1">
                <a
                  href={`tel:${PHONE_1_RAW}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-teal-200">สายด่วนติดต่อสอบถาม (เบอร์หลัก)</span>
                      <span className="text-lg sm:text-xl font-extrabold text-white tracking-wide">
                        {PHONE_1_DISPLAY}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-teal-400 text-slate-950 px-2.5 py-1 rounded-lg group-hover:bg-amber-300 transition">
                    กดโทร
                  </span>
                </a>

                <a
                  href={`tel:${PHONE_2_RAW}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-teal-200">สายด่วนนัดหมายเข้าชมศูนย์ (เบอร์สำรอง)</span>
                      <span className="text-lg sm:text-xl font-extrabold text-white tracking-wide">
                        {PHONE_2_DISPLAY}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-emerald-400 text-slate-950 px-2.5 py-1 rounded-lg group-hover:bg-amber-300 transition">
                    กดโทร
                  </span>
                </a>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/15 text-xs text-teal-100">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>เปิดทำการดูแลตลอด 24 ชั่วโมง (เข้าเยี่ยมชมสถานที่ได้ทุกวัน 08:00 - 18:00 น.)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>สามารถแอด LINE ด้วยเบอร์โทรศัพท์ {PHONE_1_DISPLAY} หรือ {PHONE_2_DISPLAY} ได้ทันที</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Book a Visit
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-1">
                  ลงทะเบียนนัดหมายเข้าเยี่ยมชมสถานที่ หรือให้เจ้าหน้าที่ติดต่อกลับ
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  กรอกข้อมูลด้านล่างเพื่อให้ทีมงานติดต่อกลับโดยเร็วที่สุด
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 sm:p-8 text-center bg-teal-50 rounded-2xl border border-teal-200 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-md shadow-teal-600/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-teal-900">บันทึกข้อมูลการนัดหมายเรียบร้อยแล้วครับ</h4>
                  <p className="text-sm text-teal-800 max-w-md mx-auto leading-relaxed">
                    เจ้าหน้าที่ของ <strong>{BRAND_NAME}</strong> ได้รับข้อมูลของคุณ{' '}
                    <span className="font-bold underline">{formData.name}</span> เรียบร้อยแล้ว และจะติดต่อกลับที่เบอร์{' '}
                    <span className="font-bold underline">{formData.phone}</span> โดยเร็วที่สุดครับ
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <a
                      href={`tel:${PHONE_1_RAW}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm"
                    >
                      <PhoneCall className="w-4 h-4" /> โทรด่วน {PHONE_1_DISPLAY}
                    </a>
                    <a
                      href={`tel:${PHONE_2_RAW}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-sm"
                    >
                      <PhoneCall className="w-4 h-4" /> โทรด่วน {PHONE_2_DISPLAY}
                    </a>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
                    >
                      ← แก้ไขข้อมูลการนัดหมาย
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        ชื่อ-นามสกุล ของผู้ติดต่อ *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="เช่น คุณสมชาย (บุตร/ญาติ)"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        เบอร์โทรศัพท์สำหรับติดต่อกลับ *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="เช่น 08x-xxx-xxxx"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        ภาวะสุขภาพของผู้รับบริการ
                      </label>
                      <select
                        value={formData.careType}
                        onChange={(e) => setFormData({ ...formData, careType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-base bg-white"
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
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        วันที่สะดวกเข้าเยี่ยมชม
                      </label>
                      <input
                        type="date"
                        value={formData.visitDate}
                        onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-base bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      รูปแบบห้องพักที่สนใจ
                    </label>
                    <select
                      value={formData.roomPackage}
                      onChange={(e) => setFormData({ ...formData, roomPackage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-base bg-white"
                    >
                      <option>ต้องการให้เจ้าหน้าที่แนะนำห้องพักที่เหมาะสม</option>
                      <option>ห้องรวมมาตรฐาน (Standard Shared Room)</option>
                      <option>ห้องพิเศษ 2-3 เตียง (Semi-Private Deluxe)</option>
                      <option>ห้องเดี่ยวพิเศษ VIP (VIP Private Suite)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      รายละเอียดเพิ่มเติม / ข้อสอบถามพิเศษ
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="เช่น ต้องการสอบถามเรื่องบริการกายภาพบำบัด การดูแลผู้ป่วยติดเตียง หรือนัดเวลาเข้าชม"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-teal-600 text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white font-bold text-base shadow-lg shadow-teal-700/25 transition cursor-pointer"
                  >
                    {isSubmitting ? 'กำลังบันทึกข้อมูล...' : 'ยืนยันการนัดหมายเข้าเยี่ยมชมศูนย์'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. DEDICATED CLIENT FOOTER */}
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                    {BRAND_NAME}
                  </h3>
                  <p className="text-xs text-teal-400 font-medium">
                    Nattanan Nursing Care • ดูแลด้วยหัวใจตลอด 24 ชั่วโมง
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                ศูนย์ดูแลผู้สูงอายุและผู้ป่วยพักฟื้น มาตรฐานวิชาชีพ ดูแลอย่างใกล้ชิด อบอุ่นเหมือนคนในครอบครัว
                พร้อมทีมพยาบาล นักบริบาล และกายภาพบำบัดฟื้นฟูครบวงจร
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">เมนูแนะนำ</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#care-group" className="hover:text-teal-300 transition">
                    กลุ่มผู้รับบริการที่เราดูแล
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-teal-300 transition">
                    มาตรฐานการดูแล 24 ชม.
                  </a>
                </li>
                <li>
                  <a href="#facility" className="hover:text-teal-300 transition">
                    บรรยากาศและสิ่งอำนวยความสะดวก
                  </a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-teal-300 transition">
                    อัตราค่าบริการและห้องพัก
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-teal-300 transition">
                    นัดหมายเข้าเยี่ยมชมสถานที่
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">ติดต่อ {BRAND_NAME}</h4>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <a
                  href={`tel:${PHONE_1_RAW}`}
                  className="flex items-center gap-2.5 text-white hover:text-teal-300 font-bold transition"
                >
                  <PhoneCall className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>โทร: {PHONE_1_DISPLAY}</span>
                </a>
                <a
                  href={`tel:${PHONE_2_RAW}`}
                  className="flex items-center gap-2.5 text-white hover:text-emerald-300 font-bold transition"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>โทร: {PHONE_2_DISPLAY}</span>
                </a>
                <div className="flex items-start gap-2.5 text-slate-400">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>เปิดบริการดูแลตลอด 24 ชั่วโมง (เข้าชมสถานที่ได้ทุกวัน 08:00 - 18:00 น.)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
            <p>© 2026 {BRAND_NAME}. สงวนลิขสิทธิ์ทุกประการ.</p>
            <p className="text-xs text-slate-400">
              🚀 ออกแบบและพัฒนาโดย{' '}
              <a
                href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ"
                target="_blank"
                rel="noreferrer"
                className="text-teal-400 font-semibold underline hover:text-teal-300"
              >
                SalesDesk AI
              </a>{' '}
              (ผู้เชี่ยวชาญด้านเว็บไซต์ & AI การตลาด)
            </p>
          </div>
        </div>
      </footer>

      {/* 10. FIXED MOBILE BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:hidden shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${PHONE_1_RAW}`}
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-teal-700 active:bg-teal-800 text-white font-bold text-xs shadow-md shadow-teal-700/20"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>โทร {PHONE_1_DISPLAY}</span>
          </a>
          <a
            href={`tel:${PHONE_2_RAW}`}
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20"
          >
            <PhoneCall className="w-3.5 h-3.5 text-white shrink-0" />
            <span>โทร {PHONE_2_DISPLAY}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
