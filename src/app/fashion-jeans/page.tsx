'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Check, 
  Star, 
  ChevronRight, 
  PhoneCall, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Ruler, 
  Heart,
  MessageCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function FashionJeansPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Classic Deep Blue');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* 0. AGENCY DEMO BANNER */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 text-white text-xs py-2.5 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">Showcase Demo</span>
            <span className="font-medium text-xs">ตัวอย่างเว็บไซต์สั่งซื้อสินค้าหน้าเดียว (One-Page Shop) สไตล์แฟชั่น & ยีนส์พรีเมียม</span>
          </div>
          <a 
            href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสร้างเว็บไซต์สั่งซื้อสินค้าหน้าเดียวแบบDADAJeansครับ" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-bold shadow-sm hover:bg-slate-100 transition whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> สนใจสร้างเว็บแบบนี้ ทัก LINE (@fhu6688s)
          </a>
        </div>
      </div>

      {/* 1. HEADER NAVIGATION */}
      <header className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-slate-950 font-black shadow-md">
              <ShoppingBag className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                DADA <span className="text-amber-400">Lady Jeans</span>
              </h1>
              <p className="hidden sm:block text-[11px] text-slate-400">
                กางเกงยีนส์พรีเมียมทรงสวย เก็บทรงเป๊ะ สำหรับผู้หญิง
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#order" 
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-400/20 transition whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4" /> <span>สั่งซื้อโปรโมชัน</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (Cinematic 16:9 Universal Standard) */}
      <section className="relative min-h-[92vh] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fashion-hero.jpg"
            alt="DADA Lady Jeans"
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
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-950/80 border border-amber-500/40 text-amber-300 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold backdrop-blur-md shadow-md shadow-slate-950/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Premium Stretch Denim • ทรงขากระบอกเอวสูง พรางหุ่นเป๊ะ</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                กางเกงยีนส์ที่เข้าใจสรีระผู้หญิง <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 inline-block mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  ใส่แล้วดูผอม เพรียว ขาเรียวยาว
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                ผลิตจากผ้ายีนส์เกรดพรีเมียม นุ่ม ยืดหยุ่นสบาย ไม่อึดอัด เอวสูงเก็บพุงกระชับสะโพก 
                ดีไซน์คลาสสิกที่ใส่ได้ทุกโอกาส มั่นใจได้ในทุกการเคลื่อนไหว
              </p>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex flex-row items-center justify-start gap-3 pt-2">
                <a 
                  href="#order" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-400/30 transition transform active:scale-95"
                >
                  <ShoppingBag className="w-5 h-5" /> สั่งซื้อรับโปรโมชันพิเศษ
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="#sizes" 
                  className="w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <Ruler className="w-5 h-5 text-amber-400" /> เช็กตารางไซส์
                </a>
              </div>

              {/* Desktop Micro Trust */}
              <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 pt-1 text-xs text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> มีบริการเก็บเงินปลายทาง (COD)</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> เปลี่ยนไซส์ฟรีภายใน 7 วัน</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> ส่งฟรีทั่วประเทศ</span>
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
                  href="#order" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 active:from-amber-500 active:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-400/30 transition active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" /> สั่งซื้อรับโปรโมชันพิเศษ
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="#sizes" 
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 active:bg-slate-800 text-white font-bold text-xs border border-slate-700/80 backdrop-blur-md shadow-xs transition"
                >
                  <Ruler className="w-3.5 h-3.5 text-amber-400" /> เช็กตารางไซส์
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5 text-[10px] text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> เก็บเงินปลายทาง</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> เปลี่ยนไซส์ฟรี</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> ส่งฟรีทั่วไทย</span>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">ทรงเอวสูงเก็บพุง</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">พรางหุ่นให้ดูเพรียวสวย</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-400/30 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">ผ้ายีนส์นุ่มยืดหยุ่น</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">ใส่สบาย ไม่อึดอัดทั้งวัน</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">ส่งฟรี + เก็บเงินปลายทาง</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">ตรวจของก่อนจ่ายเงินได้</p>
                </div>
              </div>

              <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center shrink-0">
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">เปลี่ยนไซส์ได้ฟรี</h4>
                  <p className="text-[9px] sm:text-[11px] text-slate-300 truncate">ไม่พอดี เปลี่ยนได้ใน 7 วัน</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2.5 PAIN POINTS & THE DADA SOLUTION (จิตวิทยาขยี้ปัญหาและทางแก้) */}
      <section className="py-14 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest bg-rose-950/80 px-3 py-1 rounded-full border border-rose-500/30">
              Why Normal Jeans Fail
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              เคยเจอปัญหาเหล่านี้เวลาซื้อกางเกงยีนส์ไหมคะ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              90% ของสาวๆ เจอปัญหาเดิมๆ จนไม่กล้าซื้อยีนส์ออนไลน์
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-950/80 border border-rose-900/30 rounded-2xl p-5 space-y-2">
              <div className="text-rose-400 font-bold text-sm">❌ เอวหลวม แต่ติดสะโพก</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ซื้อตามไซส์สะโพก เอวก็เหลืออ้าจนต้องใส่เข็มขัดรัดจนย่น เสียทรง
              </p>
            </div>
            <div className="bg-slate-950/80 border border-rose-900/30 rounded-2xl p-5 space-y-2">
              <div className="text-rose-400 font-bold text-sm">❌ ผ้าแข็ง นั่งแล้วรั้งเป้า</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ยีนส์ราคาถูกผ้าหนาและแข็ง ใส่ทำงาน 8 ชม. แล้วอึดอัด พุงปลิ้น
              </p>
            </div>
            <div className="bg-slate-950/80 border border-rose-900/30 rounded-2xl p-5 space-y-2">
              <div className="text-rose-400 font-bold text-sm">❌ ทักแชตไป แอดมินตอบช้า</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                รอถามไซส์ข้ามวัน พอแอดมินตอบของก็หมด หรือไม่มั่นใจเรื่องการเปลี่ยน
              </p>
            </div>
          </div>

          {/* Solution Callout */}
          <div className="bg-gradient-to-r from-amber-950/60 via-slate-950 to-slate-950 border border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white">ทางแก้ที่สาวๆ ตกหลุมรัก: ทรง Magic-Fit สรีระสาวไทย</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                ตัดเย็บด้วยแพทเทิร์น 3D เอวสูงเก็บพุง สะโพกปล่อยสบายนุ่มยืด Spandex 3% ลุกนั่งสบายทั้งวัน และสั่งซื้อผ่านระบบหน้าเดียวได้ทันที ไม่ต้องรอแอดมินตอบ!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIZE GUIDE */}
      <section id="sizes" className="py-16 bg-slate-950 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30">
              Size Recommendation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">ตารางขนาดกางเกงยีนส์</h3>
            <p className="text-xs sm:text-sm text-slate-400">ผ้ายีนส์มีความยืดหยุ่น 1-2 นิ้ว เลือกตามขนาดเอวจริงได้เลยค่ะ</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm text-slate-200">
              <thead className="bg-slate-950 text-slate-400 uppercase text-[11px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">ไซส์</th>
                  <th className="py-3 px-4">รอบเอว (นิ้ว)</th>
                  <th className="py-3 px-4">สะโพก (นิ้ว)</th>
                  <th className="py-3 px-4">ความยาว (นิ้ว)</th>
                  <th className="py-3 px-4">น้ำหนักแนะนำ (กก.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-medium">
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-amber-400">S</td>
                  <td className="py-3 px-4">24 - 26</td>
                  <td className="py-3 px-4">33 - 35</td>
                  <td className="py-3 px-4">39</td>
                  <td className="py-3 px-4">40 - 47</td>
                </tr>
                <tr className="hover:bg-slate-800/40 bg-amber-500/5">
                  <td className="py-3 px-4 font-bold text-amber-400">M (ขายดี)</td>
                  <td className="py-3 px-4">27 - 28</td>
                  <td className="py-3 px-4">36 - 37</td>
                  <td className="py-3 px-4">39.5</td>
                  <td className="py-3 px-4">48 - 54</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-amber-400">L</td>
                  <td className="py-3 px-4">29 - 30</td>
                  <td className="py-3 px-4">38 - 39</td>
                  <td className="py-3 px-4">40</td>
                  <td className="py-3 px-4">55 - 60</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-amber-400">XL</td>
                  <td className="py-3 px-4">31 - 32</td>
                  <td className="py-3 px-4">40 - 41</td>
                  <td className="py-3 px-4">40.5</td>
                  <td className="py-3 px-4">61 - 67</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-amber-400">2XL</td>
                  <td className="py-3 px-4">33 - 35</td>
                  <td className="py-3 px-4">42 - 44</td>
                  <td className="py-3 px-4">41</td>
                  <td className="py-3 px-4">68 - 75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. PROMOTION TIERS */}
      <section className="py-16 bg-slate-900/60">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider bg-rose-950/80 px-3 py-1 rounded-full border border-rose-500/30">
              Special Offers
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">โปรโมชันพิเศษวันนี้เท่านั้น</h3>
            <p className="text-xs sm:text-sm text-slate-400">จัดส่งฟรีทั่วประเทศ พร้อมของแถมและบริการเก็บเงินปลายทาง</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Offer 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">ทดลองใส่ 1 ตัว</span>
                <h4 className="text-xl font-bold text-white">1 ตัว ส่งฟรี</h4>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">฿690</span>
                  <span className="text-slate-500 line-through text-sm">฿1,290</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">ประหยัด ฿600 ทันที</p>
              </div>
              <a 
                href="#order"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center transition"
              >
                เลือกโปรนี้
              </a>
            </div>

            {/* Offer 2 (POPULAR) */}
            <div className="bg-gradient-to-b from-amber-950/60 via-slate-950 to-slate-950 border-2 border-amber-400 rounded-3xl p-6 flex flex-col justify-between space-y-4 relative shadow-2xl">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full shadow-md">
                🔥 คุ้มที่สุด - ขายดีอันดับ 1
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-300 block mb-1">เซ็ตยอดนิยม 2 ตัว</span>
                <h4 className="text-2xl font-black text-white">2 ตัวสุดคุ้ม (คละสี/ไซส์ได้)</h4>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-amber-400">฿1,190</span>
                  <span className="text-slate-500 line-through text-sm">฿2,580</span>
                </div>
                <p className="text-xs text-amber-300 mt-2">เฉลี่ยเพียงตัวละ ฿595 เท่านั้น!</p>
              </div>
              <a 
                href="#order"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs text-center shadow-lg shadow-amber-400/20 transition"
              >
                สั่งซื้อโปร 2 ตัวสุดคุ้ม
              </a>
            </div>

            {/* Offer 3 */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">เซ็ตคุ้มค่า 3 ตัว</span>
                <h4 className="text-xl font-bold text-white">3 ตัว + ฟรีเข็มขัดหนัง</h4>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">฿1,590</span>
                  <span className="text-slate-500 line-through text-sm">฿3,870</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">ฟรีเข็มขัดมูลค่า ฿390 ทันที</p>
              </div>
              <a 
                href="#order"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center transition"
              >
                เลือกโปรนี้
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 REVIEWS & SOCIAL PROOF */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30">
              Customer Reviews
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">เสียงตอบรับจากสาวๆ ผู้ใช้จริง</h3>
            <p className="text-xs sm:text-sm text-slate-400">มากกว่า 4,500 ตัวที่ส่งมอบ การันตีความพึงพอใจ 99.2%</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "ทรงสวยมากกกก เป็นคนสะโพก 38 เอว 27 หากางเกงใส่ยากมาก ตัวนี้ใส่ไซส์ M พอดีเป๊ะ ไม่รั้งเป้า ผ้านิ่มยืดสบาย สั่งเพิ่มอีก 2 ตัวเรียบร้อยค่ะ"
              </p>
              <div className="text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-800">
                คุณพลอย (กรุงเทพฯ) • ยืนยันการสั่งซื้อ
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "ชอบตรงที่กดสั่งซื้อง่ายมาก ไม่ต้องรอแอดมินตอบ เลือกไซส์เลือกสีแล้วรอเก็บเงินปลายทางได้เลย ของส่งถึงใน 2 วัน ไซส์ตรงปกค่ะ"
              </p>
              <div className="text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-800">
                คุณเมย์ (ชลบุรี) • ยืนยันการสั่งซื้อ
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "ตอนแรกสั่งไซส์ L มาแล้วหลวมไปนิด ทางร้านดูแลดีมาก ให้ส่งเปลี่ยนเป็นไซส์ M ได้ฟรี ไม่เสียเงินเพิ่ม ประทับใจบริการมากค่ะ"
              </p>
              <div className="text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-800">
                คุณก้อย (เชียงใหม่) • ยืนยันการสั่งซื้อ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 FAQS & GUARANTEE */}
      <section className="py-14 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">คำถามที่พบบ่อย (FAQ)</h3>
            <p className="text-xs text-slate-400">ช้อปอย่างมั่นใจ ไม่ต้องกังวลเรื่องไซส์</p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="font-bold text-amber-300 mb-1">Q: สั่งไปแล้วใส่ไม่พอดี เปลี่ยนไซส์ได้ไหม?</div>
              <div className="text-slate-300">A: สามารถเปลี่ยนไซส์ได้ฟรีภายใน 7 วันหลังจากได้รับสินค้า เพียงเก็บป้ายสินค้าไว้ครบถ้วนค่ะ</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="font-bold text-amber-300 mb-1">Q: สินค้าจัดส่งกี่วันถึง และมีเก็บเงินปลายทางไหม?</div>
              <div className="text-slate-300">A: จัดส่งด่วนโดยขนส่งเอกชน สินค้าถึงภายใน 1-2 วันทำการ และมีบริการเก็บเงินปลายทาง (COD) หน้าบ้านโดยไม่มีค่าธรรมเนียมเพิ่มค่ะ</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="font-bold text-amber-300 mb-1">Q: ซักแล้วกางเกงจะหดหรือสีตกไหม?</div>
              <div className="text-slate-300">A: ผ่านกระบวนการฟอกและพรีชีริงค์ (Pre-shrunk) มาตรฐานสากล ซักแล้วไม่หด สีไม่ตก ทรงสวยเหมือนเดิมค่ะ</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ONE-PAGE CHECKOUT FORM */}
      <section id="order" className="py-16 bg-slate-950">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Fast Checkout
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                แบบฟอร์มสั่งซื้อด่วน (ไม่ต้องโอนก่อน)
              </h3>
              <p className="text-xs text-slate-400">กรอกข้อมูลด้านล่าง รอรับสินค้าหน้าบ้านได้เลยค่ะ</p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">ได้รับคำสั่งซื้อเรียบร้อยแล้วค่ะ!</h4>
                <p className="text-xs text-slate-300">
                  ทีมงานกำลังจัดเตรียมสินค้า ไซส์ <span className="text-amber-400 font-bold">{selectedSize}</span> สี <span className="text-amber-400 font-bold">{selectedColor}</span> เจ้าหน้าที่จะจัดส่งและแจ้งเลขพัสดุผ่านเบอร์โทรศัพท์นะคะ
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                {/* Select Size & Color */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">เลือกไซส์ *</label>
                    <select 
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="S">S (เอว 24-26")</option>
                      <option value="M">M (เอว 27-28") - ยอดนิยม</option>
                      <option value="L">L (เอว 29-30")</option>
                      <option value="XL">XL (เอว 31-32")</option>
                      <option value="2XL">2XL (เอว 33-35")</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">เลือกสี *</label>
                    <select 
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Classic Deep Blue">สียีนส์เข้มคลาสสิก</option>
                      <option value="Vintage Light Blue">สียีนส์สว่างวินเทจ</option>
                      <option value="Midnight Black">สีดำมิดไนท์</option>
                    </select>
                  </div>
                </div>

                {/* Customer Info */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">ชื่อ-นามสกุล ผู้รับสินค้า *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="เช่น คุณกมลวรรณ บุญมี"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">เบอร์โทรศัพท์ติดต่อ *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="เช่น 081-xxx-xxxx"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">ที่อยู่จัดส่งสินค้าโดยละเอียด *</label>
                  <textarea 
                    rows={3}
                    required 
                    placeholder="บ้านเลขที่, หมู่บ้าน/อาคาร, ถนน, ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Payment Option */}
                <div className="pt-2">
                  <label className="block text-slate-300 font-semibold mb-1.5">วิธีชำระเงิน *</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center gap-2 p-3 rounded-xl border border-amber-400 bg-amber-500/10 cursor-pointer text-xs">
                      <input type="radio" name="payment" defaultChecked className="text-amber-500 focus:ring-0" />
                      <span className="font-bold text-white">เก็บเงินปลายทาง (COD)</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-800 bg-slate-950 cursor-pointer text-xs">
                      <input type="radio" name="payment" className="text-amber-500 focus:ring-0" />
                      <span className="text-slate-300">โอนผ่านบัญชีธนาคาร</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-400/25 transition transform active:scale-95 mt-4"
                >
                  ยืนยันการสั่งซื้อ (รอจ่ายเงินตอนรับของ)
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p>© 2026 DADA Lady Jeans. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            🚀 ออกแบบและพัฒนาโดย <a href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสร้างเว็บไซต์สั่งซื้อสินค้าหน้าเดียวครับ" target="_blank" rel="noreferrer" className="text-amber-400 font-semibold underline hover:text-amber-300">SalesDesk AI</a> (ผู้เชี่ยวชาญด้านเว็บไซต์ & AI การตลาด)
          </p>
        </div>
      </footer>

      {/* FIXED MOBILE BAR */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center gap-3">
        <a 
          href="tel:0817726444" 
          className="w-1/3 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" /> โทรสอบถาม
        </a>
        <a 
          href="#order" 
          className="w-2/3 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/20"
        >
          <ShoppingBag className="w-3.5 h-3.5" /> สั่งซื้อเก็บเงินปลายทาง
        </a>
      </div>

    </div>
  );
}
