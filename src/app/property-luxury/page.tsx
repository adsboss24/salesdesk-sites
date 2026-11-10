'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Home, 
  Check, 
  MapPin, 
  Compass, 
  Bed, 
  Bath, 
  Car, 
  Maximize, 
  Calendar, 
  PhoneCall, 
  ChevronRight, 
  Download, 
  ShieldCheck,
  Building,
  ArrowRight,
  Star
} from 'lucide-react';

export default function PropertyLuxuryPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* 0. AGENCY DEMO BANNER */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 text-white text-xs py-2.5 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">Showcase Demo</span>
            <span className="font-medium text-xs">ตัวอย่างเว็บไซต์อสังหาริมทรัพย์ บ้านเดี่ยวหรู และพูลวิลล่าระดับ Ultra Luxury</span>
          </div>
          <a 
            href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสร้างเว็บไซต์อสังหาริมทรัพย์พูลวิลล่าครับ" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-bold shadow-sm hover:bg-slate-100 transition whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> สนใจสร้างเว็บแบบนี้ ทัก LINE (@fhu6688s)
          </a>
        </div>
      </div>

      {/* 1. HEADER */}
      <header className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black shadow-md">
              <Building className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                THE GRAND <span className="text-emerald-400">RESIDENCE</span>
              </h1>
              <p className="hidden sm:block text-[11px] text-slate-400">
                Ultra Luxury Tropical Pool Villa • เอกสิทธิ์เพียง 18 ยูนิต
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#booking" 
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" /> <span>นัดชม Private Tour</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/property-hero.jpg"
            alt="The Grand Residence Pool Villa"
            className="w-full h-full object-cover object-[78%_center] lg:object-right brightness-105 contrast-[1.02] transition-all duration-700"
          />
          {/* Desktop Left Scrim */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 via-50% to-transparent" />
          {/* Mobile Overlay */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/45 via-25% to-transparent" />
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/85 via-50% to-transparent" />
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-16 pb-4 sm:pb-8 lg:py-24 relative z-10 w-full flex-1 flex flex-col justify-between">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center lg:text-left">
              
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-950/80 border border-emerald-500/40 text-emerald-300 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold backdrop-blur-md shadow-md shadow-slate-950/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Modern Tropical Luxury • ราคาเริ่มต้น 35 - 65 ล้านบาท</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                คฤหาสน์พูลวิลล่าส่วนตัว <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 inline-block mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  นิยามใหม่ของการใช้ชีวิตระดับมาสเตอร์พีซ
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                สถาปัตยกรรมระดับเวิลด์คลาส ผสานสระว่ายน้ำส่วนตัวไร้ขอบและสวนทรอปิคอลร่มรื่น 
                พื้นที่ใช้สอยกว่า 680 ตร.ม. บนทำเลศักยภาพใจกลางความเจริญ เดินทางสะดวกเพียง 10 นาทีถึงทางด่วน
              </p>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex flex-row items-center justify-start gap-3 pt-2">
                <a 
                  href="#booking" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-bold text-base shadow-lg shadow-emerald-500/30 transition transform active:scale-95"
                >
                  <Calendar className="w-5 h-5" /> นัดหมาย Private Viewing VIP
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="#brochure" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <Download className="w-5 h-5 text-emerald-400" /> ขอรับ E-Brochure
                </a>
              </div>

              {/* Desktop Micro Trust */}
              <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 pt-1 text-xs text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> เอกสิทธิ์เพียง 18 หลัง</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> ระบบรักษาความปลอดภัย 4 ชั้น 24 ชม.</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> บริการ Concierge ส่วนตัว</span>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

          </div>

          {/* Bottom Area */}
          <div className="mt-4 sm:mt-16">
            
            {/* Mobile CTAs */}
            <div className="lg:hidden space-y-2 mb-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a 
                  href="#booking" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 active:from-emerald-600 active:to-teal-600 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition active:scale-95"
                >
                  <Calendar className="w-4 h-4" /> นัดหมาย Private Viewing VIP
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="#brochure" 
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 active:bg-slate-800 text-white font-bold text-xs border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" /> ขอรับ E-Brochure
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5 text-[10px] text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> ความเป็นส่วนตัวสูงสุด</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> สระว่ายน้ำระบบเกลือ</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> ลิฟต์ส่วนตัวทุกหลัง</span>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">พื้นที่ 680 ตร.ม.</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">ที่ดิน 140 - 220 ตร.วา</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center justify-center shrink-0">
                  <Bed className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">5 ห้องนอน 6 ห้องน้ำ</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">พร้อมห้องแม่บ้านแยกส่วน</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">ที่จอดรถ 4-6 คัน</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">รองรับ EV Charger 2 จุด</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">สระว่ายน้ำส่วนตัว</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">Infinity Salt Pool 12 ม.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2.5 EXCLUSIVITY & COMPARISON (จิตวิทยาคุณค่าและสถาปัตยกรรมระดับมาสเตอร์พีซ) */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
              Rare Architectural Masterpiece
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              ทำไมมหาเศรษฐีจึงเลือกลงหลักปักฐานที่ The Grand Residence?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              เมื่อบ้านไม่ใช่แค่ที่อยู่อาศัย แต่คือการส่งต่อมรดกและเอกสิทธิ์แห่งการใช้ชีวิตระดับสูงสุด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="text-emerald-400 font-black text-2xl">12 ยูนิต</div>
              <h4 className="text-base font-bold text-white">สังคมปิดระดับอัลตร้าลักชัวรี</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                จำกัดเพียง 12 ครอบครัว เพื่อความเงียบสงบ ความปลอดภัยสูงสุด และความเป็นส่วนตัวที่ไม่ถูกรบกวน
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="text-teal-400 font-black text-2xl">680 ตร.ม.</div>
              <h4 className="text-base font-bold text-white">พื้นที่ใช้สอยโอ่อ่า 3 ชั้น</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                เพดานสูง Double Volume 7.2 เมตร โครงสร้างรองรับแผ่นดินไหว พร้อมลิฟต์แก้วส่วนตัวภายในบ้าน
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="text-amber-400 font-black text-2xl">100% Freehold</div>
              <h4 className="text-base font-bold text-white">โฉนดที่ดินกรรมสิทธิ์สมบูรณ์</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                ทำเลศักยภาพใจกลางความเจริญ เดินทางสะดวก ใกล้โรงเรียนนานาชาติชั้นนำและโรงพยาบาลระดับโลก
              </p>
            </div>
          </div>

          {/* Testimonial / Endorsement */}
          <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black text-xl shrink-0 shadow-lg">
              VIP
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic">
                "สถาปัตยกรรมที่นี่ตอบโจทย์ทั้งการพักผ่อนและการรับรองแขกระดับ VIP แสงธรรมชาติและลมพัดผ่านตลอดวัน สระว่ายน้ำเชื่อมต่อสวนร่มรื่น คุ้มค่าที่สุดสำหรับครอบครัว"
              </p>
              <div className="text-xs font-semibold text-emerald-300">
                คุณกิตติศักดิ์ อัครวัฒน์ • เจ้าของคฤหาสน์ Villa Sovereign
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.6 PROPERTY FAQS */}
      <section className="py-14 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">คำถามที่พบบ่อย (FAQ)</h3>
            <p className="text-xs text-slate-400">ข้อมูลสำคัญสำหรับผู้สนใจครอบครองโครงการ</p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="font-bold text-emerald-400 mb-1">Q: โครงการสร้างเสร็จพร้อมโอนกรรมสิทธิ์หรือไม่?</div>
              <div className="text-slate-300">A: วิลล่าทุกหลังก่อสร้างแล้วเสร็จ 100% ตกแต่ง Fully Fitted ด้วยวัสดุนำเข้าเกรดพรีเมียมจากอิตาลี พร้อมโอนกรรมสิทธิ์ได้ทันทีครับ</div>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="font-bold text-emerald-400 mb-1">Q: ระบบรักษาความปลอดภัยของโครงการมีมาตรฐานอย่างไร?</div>
              <div className="text-slate-300">A: ระบบ Double Gate Security ตรวจสอบบุคคลภายนอกด้วย AI License Plate Recognition พร้อมกล้อง CCTV รอบโครงการ และเจ้าหน้าที่รักษาความปลอดภัยระดับ VIP 24 ชม.</div>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="font-bold text-emerald-400 mb-1">Q: หากต้องการเข้าชมโครงการ ต้องนัดหมายล่วงหน้าอย่างไร?</div>
              <div className="text-slate-300">A: เพื่อรักษาความเป็นส่วนตัวของผู้อยู่อาศัย โครงการเปิดรับการเข้าชมแบบ Private Appointment เท่านั้น กรุณากรอกแบบฟอร์มด้านล่างเพื่อรับการต้อนรับอย่างสมเกียรติครับ</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIP BOOKING FORM */}
      <section id="booking" className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Private Appointment
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                นัดหมายเข้าชมโครงการแบบส่วนตัว
              </h3>
              <p className="text-xs text-slate-400">กรุณากรอกข้อมูล ทีมผู้บริหารโครงการจะประสานงานต้อนรับท่านอย่างสมเกียรติ</p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">บันทึกการนัดหมายเรียบร้อยแล้วครับ</h4>
                <p className="text-xs text-slate-300">
                  เจ้าหน้าที่ระดับสูงของโครงการ The Grand Residence จะติดต่อกลับเพื่อนัดหมายเวลาและจัดเตรียมไพรเวทเลานจ์ต้อนรับท่านครับ
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">ชื่อ-นามสกุล *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="เช่น คุณกฤษฎา วัฒนกุล"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">เบอร์โทรศัพท์ติดต่อ *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="เช่น 081-xxx-xxxx"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">วันที่สะดวกเข้าชม *</label>
                    <input 
                      type="date" 
                      required 
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">แบบบ้านที่สนใจ</label>
                  <select 
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Villa A">Villa Grandeur (680 ตร.ม. • 45 ล้านบาท)</option>
                    <option value="Villa B">Villa Sovereign (820 ตร.ม. • 65 ล้านบาท)</option>
                    <option value="All">ต้องการชมทั้งสองแบบ</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/25 transition transform active:scale-95 mt-4"
                >
                  ยืนยันการนัดหมาย Private Viewing VIP
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p>© 2026 The Grand Residence. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            🚀 ออกแบบและพัฒนาโดย <a href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสร้างเว็บไซต์อสังหาริมทรัพย์ครับ" target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold underline hover:text-emerald-300">SalesDesk AI</a> (ผู้เชี่ยวชาญด้านเว็บไซต์ & AI การตลาด)
          </p>
        </div>
      </footer>

      {/* FIXED MOBILE BAR */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center gap-3">
        <a 
          href="tel:0817726444" 
          className="w-1/3 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> โทรนัดชม
        </a>
        <a 
          href="#booking" 
          className="w-2/3 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
        >
          <Calendar className="w-3.5 h-3.5" /> จอง Private Viewing VIP
        </a>
      </div>

    </div>
  );
}
