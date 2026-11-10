'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Check, 
  PlayCircle, 
  BookOpen, 
  Video, 
  Zap, 
  Award, 
  PhoneCall, 
  ChevronRight, 
  Clock, 
  CheckCircle2,
  Users,
  MessageCircle,
  TrendingUp,
  Star,
  ArrowRight
} from 'lucide-react';

export default function OnlineCoursePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* 0. AGENCY DEMO BANNER */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-900 to-slate-900 text-white text-xs py-2.5 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">Showcase Demo</span>
            <span className="font-medium text-xs">ตัวอย่างเว็บไซต์ขายคอร์สเรียนออนไลน์ สถาบันกวดวิชา และเวิร์กชอปสัมมนา</span>
          </div>
          <a 
            href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสร้างเว็บไซต์ขายคอร์สออนไลน์ครับ" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-bold shadow-sm hover:bg-slate-100 transition whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" /> สนใจสร้างเว็บแบบนี้ ทัก LINE (@fhu6688s)
          </a>
        </div>
      </div>

      {/* 1. HEADER */}
      <header className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-black shadow-md">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                AI Business <span className="text-purple-400">Masterclass</span>
              </h1>
              <p className="hidden sm:block text-[11px] text-slate-400">
                ปลดล็อกยอดขาย 10 เท่า ด้วยระบบ AI ปิดการขายอัตโนมัติ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#enroll" 
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-500/20 transition whitespace-nowrap"
            >
              <Zap className="w-4 h-4" /> <span>สมัครรับ Early Bird</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/course-hero.jpg"
            alt="AI Business Masterclass"
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
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-950/80 border border-purple-500/40 text-purple-300 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold backdrop-blur-md shadow-md shadow-slate-950/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>คอร์สออนไลน์มาแรงแห่งปี • การันตีผลลัพธ์จากผู้เรียนกว่า 1,200 คน</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                สร้างระบบธุรกิจออโต้รัน <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-amber-200 inline-block mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  ให้ AI ปิดการขายแทนคุณ 24 ชม.
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                เปลี่ยนจากพ่อค้าแม่ค้าที่ต้องนั่งตอบแชตทั้งคืน สู่เจ้าของธุรกิจที่มีระบบ AI อัตโนมัติช่วยหาลูกค้า 
                ดึงดูด Lead คุณภาพสูง และสร้างยอดขายระดับ 7 หลักโดยไม่ต้องเพิ่มแอดมินแม้แต่คนเดียว
              </p>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex flex-row items-center justify-start gap-3 pt-2">
                <a 
                  href="#enroll" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold text-base shadow-lg shadow-purple-500/30 transition transform active:scale-95"
                >
                  <Zap className="w-5 h-5" /> สมัครรับสิทธิ์ Early Bird (ลด 60%)
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="#curriculum" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <BookOpen className="w-5 h-5 text-purple-400" /> ดูสารบัญบทเรียน
                </a>
              </div>

              {/* Desktop Micro Trust */}
              <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 pt-1 text-xs text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> เรียนทวนซ้ำได้ตลอดชีพ</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> ฟรี Prompt AI & Template นำไปใช้ได้ทันที</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> ดึงเข้ากลุ่ม VIP มีโค้ชคอยตอบคำถาม</span>
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
                  href="#enroll" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 active:from-purple-600 active:to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-500/30 transition active:scale-95"
                >
                  <Zap className="w-4 h-4" /> สมัครรับสิทธิ์ Early Bird
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="#curriculum" 
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 active:bg-slate-800 text-white font-bold text-xs border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" /> ดูสารบัญบทเรียน
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5 text-[10px] text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> เรียนได้ตลอดชีพ</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> ฟรี Template</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> กลุ่ม VIP คอยดูแล</span>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center justify-center shrink-0">
                  <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">12 ชั่วโมงเต็ม</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">6 โมดูลเข้มข้น จับมือทำ</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">Ready-to-use Prompt</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">คัดลอกไปใช้กับธุรกิจได้ทันที</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">Scale ยอดขาย 10X</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">เคสจริงจากธุรกิจที่สำเร็จ</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">VIP Community</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">ปรึกษาโค้ชและเพื่อนผู้ประกอบการ</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ENROLL FORM */}
      <section id="enroll" className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                Early Bird Enrollment
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                สมัครเรียนรับสิทธิ์โปรโมชันพิเศษ
              </h3>
              <div className="flex items-center justify-center gap-3 pt-2">
                <span className="text-3xl sm:text-4xl font-black text-amber-400">฿3,990</span>
                <span className="text-slate-500 line-through text-lg">฿9,900</span>
                <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2.5 py-0.5 rounded-full text-xs font-bold">
                  ประหยัด 60%
                </span>
              </div>
              <p className="text-xs text-slate-400 pt-1">จำกัดสิทธิ์ราคาพิเศษเพียง 30 ท่านแรกเท่านั้น</p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">ลงทะเบียนรับสิทธิ์สำเร็จแล้วครับ!</h4>
                <p className="text-xs text-slate-300">
                  ทีมงานกำลังจัดส่งลิงก์เข้าห้องเรียนออนไลน์และคู่มือเอกสาร Prompt ผ่านทางเบอร์โทรศัพท์และ LINE ของคุณครับ
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">ชื่อ-นามสกุล *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="เช่น คุณธนภัทร เลิศศิริ"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">เบอร์โทรศัพท์ติดต่อ *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="เช่น 081-xxx-xxxx"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">LINE ID (สำหรับดึงเข้ากลุ่ม VIP)</label>
                  <input 
                    type="text" 
                    placeholder="เช่น line_id_123"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">ธุรกิจปัจจุบันที่ทำอยู่</label>
                  <input 
                    type="text" 
                    placeholder="เช่น ขายของออนไลน์, คลินิก, บริการ, อาหารเสริม"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-700 text-white font-black text-sm sm:text-base shadow-xl shadow-purple-500/25 transition transform active:scale-95 mt-4"
                >
                  ยืนยันสมัครเรียนทันที (฿3,990)
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p>© 2026 AI Business Masterclass. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            🚀 ออกแบบและพัฒนาโดย <a href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสร้างเว็บไซต์ขายคอร์สออนไลน์ครับ" target="_blank" rel="noreferrer" className="text-purple-400 font-semibold underline hover:text-purple-300">SalesDesk AI</a> (ผู้เชี่ยวชาญด้านเว็บไซต์ & AI การตลาด)
          </p>
        </div>
      </footer>

      {/* FIXED MOBILE BAR */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center gap-3">
        <a 
          href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสอบถามคอร์สเรียนครับ" 
          className="w-1/3 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5 text-purple-400" /> สอบถาม
        </a>
        <a 
          href="#enroll" 
          className="w-2/3 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/20"
        >
          <Zap className="w-3.5 h-3.5" /> สมัครสิทธิ์ Early Bird (฿3,990)
        </a>
      </div>

    </div>
  );
}
