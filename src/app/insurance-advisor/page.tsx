'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Award, 
  HeartHandshake, 
  Calculator, 
  PhoneCall, 
  ChevronRight, 
  FileText, 
  Heart,
  Users,
  CheckCircle2,
  Calendar,
  ArrowRight
} from 'lucide-react';

export default function InsuranceAdvisorPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* 0. AGENCY DEMO BANNER */}
      <div className="bg-gradient-to-r from-sky-700 via-indigo-800 to-slate-900 text-white text-xs py-2.5 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">Showcase Demo</span>
            <span className="font-medium text-xs">ตัวอย่างเว็บไซต์ตัวแทนประกันชีวิต ที่ปรึกษาการเงิน และนักวางแผนมรดก</span>
          </div>
          <a 
            href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสร้างเว็บไซต์ตัวแทนประกันชีวิตMDRTครับ" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-bold shadow-sm hover:bg-slate-100 transition whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-600" /> สนใจสร้างเว็บแบบนี้ ทัก LINE (@fhu6688s)
          </a>
        </div>
      </div>

      {/* 1. HEADER */}
      <header className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-slate-950 font-black shadow-md">
              <ShieldCheck className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                Preeyaporn <span className="text-sky-400">Financial Advisor</span>
              </h1>
              <p className="hidden sm:block text-[11px] text-slate-400">
                คุณวุฒิตัวแทนระดับสากล MDRT • ที่ปรึกษาการเงินและประกันสุขภาพ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#calculator" 
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-500/20 transition whitespace-nowrap"
            >
              <Calculator className="w-4 h-4" /> <span>คำนวณเบี้ยเฉพาะบุคคล</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/insurance-hero.jpg"
            alt="Preeyaporn Financial Advisor"
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
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-950/80 border border-sky-500/40 text-sky-300 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold backdrop-blur-md shadow-md shadow-slate-950/50">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>MDRT Premier Agent • ประสบการณ์ 12 ปี ดูแลกว่า 850 ครอบครัว</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                วางแผนความคุ้มครองที่ใช่ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-amber-200 inline-block mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  เพื่อความมั่นคงของคนที่คุณรัก
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                เพราะชีวิตไม่มีคำว่าบังเอิญ ปรึกษาแผนประกันสุขภาพเหมาจ่าย โรคร้ายแรง และมรดกครอบครัว 
                ออกแบบแผนแบบ Tailor-Made ให้คุ้มค่าทุกบาท เบี้ยคงที่ พร้อมดูแลประสานงานเคลมอย่างใกล้ชิดตลอดชีพ
              </p>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex flex-row items-center justify-start gap-3 pt-2">
                <a 
                  href="#calculator" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold text-base shadow-lg shadow-sky-500/30 transition transform active:scale-95"
                >
                  <Calculator className="w-5 h-5" /> คำนวณเบี้ยและแผนคุ้มครองฟรี
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="tel:0817726444" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <PhoneCall className="w-5 h-5 text-sky-400" /> โทรปรึกษาด่วน
                </a>
              </div>

              {/* Desktop Micro Trust */}
              <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 pt-1 text-xs text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> ปรึกษาฟรี ไม่มีข้อผูกมัด</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> บริการดูแลเคลมสินไหม 24 ชม.</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> แนะนำตามงบประมาณจริง</span>
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
                  href="#calculator" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 active:from-sky-600 active:to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/30 transition active:scale-95"
                >
                  <Calculator className="w-4 h-4" /> คำนวณเบี้ยและแผนคุ้มครองฟรี
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="tel:0817726444" 
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 active:bg-slate-800 text-white font-bold text-xs border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-sky-400" /> โทรปรึกษาด่วน
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5 text-[10px] text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> ปรึกษาฟรี</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> ดูแลเคลม 24 ชม.</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> แผนตามงบจริง</span>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">เหมาจ่าย 5-30 ล้าน</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">ครอบคลุมค่ารักษาทุกโรค</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">โรคร้ายแรง เจอ-จ่าย-จบ</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">รับเงินก้อนฟื้นฟูทันที</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">MDRT Certified</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">คุณวุฒิระดับสากล 5 ปีซ้อน</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">ดูแล 850+ ครอบครัว</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">ประสานงานเคลมไม่มีสะดุด</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CALCULATOR / CONSULTATION FORM */}
      <section id="calculator" className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Customized Quote
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                คำนวณเบี้ยและขอตารางความคุ้มครอง
              </h3>
              <p className="text-xs text-slate-400">ระบุข้อมูลเพื่อให้ที่ปรึกษาจัดทำตารางเปรียบเทียบแผนที่คุ้มค่าที่สุดให้คุณ</p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">ส่งข้อมูลเรียบร้อยแล้วค่ะ</h4>
                <p className="text-xs text-slate-300">
                  คุณปรียาพร (MDRT) กำลังจัดทำตารางเปรียบเทียบเบี้ยประกันและแผนความคุ้มครองตามข้อมูลของท่าน และจะติดต่อกลับเพื่อให้คำปรึกษาฟรีค่ะ
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">ชื่อ-นามสกุล *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="เช่น คุณณัฐวุฒิ สิทธิโชค"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">เพศ *</label>
                    <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-sky-400">
                      <option value="male">ชาย</option>
                      <option value="female">หญิง</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">อายุ (ปี) *</label>
                    <input 
                      type="number" 
                      required 
                      placeholder="เช่น 32"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">เบอร์โทรศัพท์ติดต่อ *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="เช่น 081-xxx-xxxx"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">แผนความคุ้มครองที่สนใจเป็นพิเศษ</label>
                  <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-sky-400">
                    <option value="health">ประกันสุขภาพเหมาจ่าย (5 - 30 ล้าน)</option>
                    <option value="critical">ประกันโรคร้ายแรง เจอ-จ่าย-จบ</option>
                    <option value="legacy">วางแผนมรดก & กองทุนลดหย่อนภาษี</option>
                    <option value="kid">ประกันสุขภาพลูกรัก (เด็กเล็ก)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-600 hover:from-sky-600 hover:to-indigo-700 text-white font-black text-sm sm:text-base shadow-xl shadow-sky-500/25 transition transform active:scale-95 mt-4"
                >
                  ขอรับตารางเบี้ยและข้อเสนอพิเศษฟรี
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p>© 2026 Preeyaporn MDRT Financial Advisor. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            🚀 ออกแบบและพัฒนาโดย <a href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสร้างเว็บไซต์ตัวแทนประกันครับ" target="_blank" rel="noreferrer" className="text-sky-400 font-semibold underline hover:text-sky-300">SalesDesk AI</a> (ผู้เชี่ยวชาญด้านเว็บไซต์ & AI การตลาด)
          </p>
        </div>
      </footer>

      {/* FIXED MOBILE BAR */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center gap-3">
        <a 
          href="tel:0817726444" 
          className="w-1/3 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-3.5 h-3.5 text-sky-400" /> โทรปรึกษา
        </a>
        <a 
          href="#calculator" 
          className="w-2/3 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20"
        >
          <Calculator className="w-3.5 h-3.5" /> ขอตารางเบี้ยเฉพาะคุณ
        </a>
      </div>

    </div>
  );
}
