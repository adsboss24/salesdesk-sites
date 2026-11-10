'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Award, 
  Heart, 
  ChevronRight, 
  Star, 
  MapPin, 
  Check, 
  Send, 
  Camera, 
  Gift, 
  SlidersHorizontal,
  Flame,
  ArrowRight
} from 'lucide-react';
import PremiumFooter from '@/components/Footer';

export default function FlowerSalepage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'birthday' | 'luxury' | 'congrats' | 'box'>('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: 'วันเกิด / วันครบรอบ (Birthday & Anniversary)',
    budget: 'Signature Luxury (3,500 - 5,500 บาท)',
    deliveryDate: '',
    cardMessage: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับประสานงานจัดส่งครับ');
      return;
    }
    setIsSubmitted(true);
  };

  const galleryItems = [
    {
      id: 1,
      title: 'The Royal English Rose Bouquet',
      category: 'luxury',
      tag: 'Best Seller',
      price: '฿3,990',
      desc: 'กุหลาบอังกฤษสีพาสเทลนำเข้า 19 ดอก ผสมผสานยูคาลิปตัสและไฮเดรนเยียขาว',
      img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Blush Peony & Holland Tulip Symphony',
      category: 'birthday',
      tag: 'Seasonal Exclusive',
      price: '฿4,500',
      desc: 'โบตั๋นสีชมพูละมุนและทิวลิปฮอลแลนด์ เติมเต็มความสุขในวันสำคัญอย่างสมบูรณ์แบบ',
      img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Pure Serenity Orchid & Hydrangea Vase',
      category: 'luxury',
      tag: 'VIP Luxury',
      price: '฿6,900',
      desc: 'กล้วยไม้ฟาแลนนอปซิสขาวบริสุทธิ์ในแจกันคริสตัลเจียระไนระดับพรีเมียม',
      img: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Velvet Midnight Luxury Bloom Box',
      category: 'box',
      tag: 'Signature Box',
      price: '฿3,290',
      desc: 'กล่องของขวัญทรงกลมกำมะหยี่สีเข้ม จัดช่อกุหลาบเอกวาดอร์แดงทับทิม 12 ดอก',
      img: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Grand Prestige Celebration Stand',
      category: 'congrats',
      tag: 'Corporate Pick',
      price: '฿5,900',
      desc: 'สแตนด์ดอกไม้สดแสดงความยินดีเปิดสาขาใหม่ ดีไซน์โมเดิร์นหรูหรา สง่างามโดดเด่น',
      img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Celestial Garden Artisan Arrangement',
      category: 'birthday',
      tag: 'Masterpiece',
      price: '฿4,800',
      desc: 'การผสมผสานดอกไม้เมืองหนาวนานาพันธุ์ในโทนสีพาสเทล ให้กลิ่นหอมธรรมชาติผ่อนคลาย',
      img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-500 selection:text-white pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Zero horizontal overflow, clean conversion banner) */}
      <div className="hidden sm:block bg-gradient-to-r from-stone-950 via-rose-950 to-stone-900 text-rose-100 text-xs py-2 px-4 border-b border-rose-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-rose-500/30 text-rose-200 border border-rose-400/30 px-2.5 py-0.5 rounded-full text-xs font-semibold">
              <Sparkles className="w-3 h-3 mr-1 text-amber-300" /> บริการส่งด่วน Same-Day 2 ชม.
            </span>
            <span>ส่งมอบดอกไม้นำเข้าเกรด A+ สดใหม่ทุกวัน ทั่วกรุงเทพฯ และปริมณฑล • ตรวจภาพจริงก่อนส่ง 100%</span>
          </div>
          <div className="flex items-center gap-4 text-rose-200 font-medium text-xs">
            <a href="tel:0817726444" className="hover:text-white flex items-center gap-1.5 transition">
              <PhoneCall className="w-3.5 h-3.5" /> 081-772-6444
            </a>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> พร้อมดูแล 24 ชั่วโมง
            </span>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVIGATION (Zero Overflow, Prominent CTA) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-rose-500/20 shrink-0">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-slate-900 leading-tight whitespace-nowrap">
                  Flower<span className="text-rose-600">.com</span>
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Haute Florist
                </span>
              </div>
              <p className="hidden sm:block text-[11px] sm:text-xs text-slate-500 font-medium whitespace-nowrap">
                บูทีกดอกไม้พรีเมียม & บริการจัดส่งด่วนพิเศษ 2 ชั่วโมง
              </p>
            </div>
          </div>

          {/* Navigation Menu (Desktop Only) */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600 whitespace-nowrap">
            <a href="#hero" className="hover:text-rose-600 transition">หน้าแรก</a>
            <a href="#occasions" className="hover:text-rose-600 transition">โอกาสพิเศษ</a>
            <a href="#excellence" className="hover:text-rose-600 transition">จุดเด่นบริการ</a>
            <a href="#gallery" className="hover:text-rose-600 transition">คอลเลกชัน</a>
            <a href="#packages" className="hover:text-rose-600 transition">แพ็กเกจราคา</a>
            <a href="#reviews" className="hover:text-rose-600 transition">รีวิวลูกค้า</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสั่งดอกไม้ด่วนจาก Flower.com ครับ"
              target="_blank" 
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm shadow-sm transition whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" /> แอดไลน์ปรึกษาด่วน
            </a>
            <a 
              href="#order-form" 
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-rose-600/20 transition whitespace-nowrap active:scale-95"
            >
              <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span>สั่งจัดดอกไม้</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (16:9 Cinematic Split, Unobstructed Mobile Framing, Dual-Device CTAs) */}
      <section id="hero" className="relative min-h-[92vh] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed 16:9 Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/flower-hero.jpg"
            alt="Flower.com บูทีกดอกไม้พรีเมียมและบริการจัดส่งด่วน"
            className="w-full h-full object-cover object-[78%_center] lg:object-right brightness-105 contrast-[1.02] transition-all duration-700"
          />
          
          {/* Desktop Left Negative Space Scrim: Darkens left 50% for 100% white text contrast */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 via-50% to-transparent" />
          
          {/* Mobile Multi-Layer Scrim: 
              Layer 1: 0-25% top dark scrim behind headline
              Middle is 100% OPEN & UNOBSTRUCTED for florist hands & blooming bouquet
              Layer 2: Soft bottom dark scrim behind buttons & feature cards */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/45 via-25% to-transparent" />
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/85 via-50% to-transparent" />
          
          {/* Desktop Bottom Edge Fade */}
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-16 pb-4 sm:pb-8 lg:py-24 relative z-10 w-full flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column (Negative Space on Desktop) */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center lg:text-left">
              
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-950/80 border border-rose-500/40 text-rose-300 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold backdrop-blur-md shadow-md shadow-slate-950/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>บูทีกดอกไม้พรีเมียมอันดับ 1 • ดอกไม้นำเข้าสดใหม่เกรด A+</span>
              </div>

              {/* Main Headline (Multi-tier drop shadows, perfect wrap) */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                ส่งมอบความรู้สึกสุดพิเศษ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-300 to-amber-200 inline-block mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  ด้วยช่อดอกไม้หรูหราระดับ Masterpiece
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                รังสรรค์โดย Master Florist ผู้เชี่ยวชาญ คัดสรรดอกไม้นำเข้าจากเนเธอร์แลนด์และเอกวาดอร์ 
                พร้อมบริการจัดส่งด่วนพิเศษถึงมือผู้รับภายใน 2 ชั่วโมง ถ่ายรูปยืนยันผลงานก่อนส่งทุกชิ้น
              </p>

              {/* Desktop-only CTAs (Rendered directly under subheadline on desktop) */}
              <div className="hidden lg:flex flex-row items-center justify-start gap-3 pt-2">
                <a
                  href="#order-form"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition active:scale-95"
                >
                  <Gift className="w-4 h-4" /> สั่งจัดดอกไม้ด่วนตอนนี้
                </a>
                <a
                  href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสอบถามคอลเลกชันดอกไม้ Flower.com ครับ"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-medium text-sm border border-white/20 backdrop-blur-md transition active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" /> แอดไลน์ส่งภาพประเมินราคา
                </a>
              </div>

              {/* Micro Trust Indicators (Desktop) */}
              <div className="hidden lg:flex items-center gap-6 text-xs text-slate-300 pt-1 font-medium">
                <div className="flex items-center gap-1.5 drop-shadow">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>จัดส่งตรงเวลาใน 2 ชม.</span>
                </div>
                <div className="flex items-center gap-1.5 drop-shadow">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>การันตีความสดใหม่ 100%</span>
                </div>
                <div className="flex items-center gap-1.5 drop-shadow">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ส่งรูปคอนเฟิร์มก่อนออกส่ง</span>
                </div>
              </div>

            </div>

            {/* Right Column: Kept completely empty on Desktop so the cinematic photo shines unobstructed */}
            <div className="hidden lg:block lg:col-span-5" />

          </div>

          {/* Bottom Block: Mobile Action CTAs + 4 Glassmorphic Feature Badges */}
          <div className="mt-4 sm:mt-16">
            
            {/* Mobile-only CTAs (Rendered at bottom of hero, keeping middle photo 100% open) */}
            <div className="lg:hidden space-y-2 mb-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="#order-form"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-rose-600/30 active:scale-95"
                >
                  <Gift className="w-4 h-4" /> สั่งจัดดอกไม้ด่วน
                </a>
                <a
                  href="tel:0817726444"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 text-white font-medium text-sm border border-white/20 backdrop-blur-md active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-rose-400" /> โทรสั่งด่วน 081-772-6444
                </a>
              </div>

              {/* Micro Trust (Mobile) */}
              <div className="flex items-center justify-center gap-3 text-[11px] text-slate-200 pt-1 font-medium">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> ส่งไวใน 2 ชม.</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> สดใหม่ 100%</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> ดูภาพจริงก่อนส่ง</span>
              </div>
            </div>

            {/* 4 Glassmorphic Feature Badges (Desktop & Mobile) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              
              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-2.5 sm:p-4 backdrop-blur-md hover:border-rose-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-rose-500/20 text-rose-300 shrink-0">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Same-Day 2 ชม.</h4>
                    <p className="text-[10px] sm:text-xs text-slate-300">จัดส่งด่วนพิเศษถึงที่</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-2.5 sm:p-4 backdrop-blur-md hover:border-rose-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">เกรด A+ นำเข้า</h4>
                    <p className="text-[10px] sm:text-xs text-slate-300">ฮอลแลนด์ & เอกวาดอร์</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-2.5 sm:p-4 backdrop-blur-md hover:border-rose-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Live Photo Check</h4>
                    <p className="text-[10px] sm:text-xs text-slate-300">ตรวจภาพจริงก่อนส่ง</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-2.5 sm:p-4 backdrop-blur-md hover:border-rose-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-pink-500/20 text-pink-300 shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Fresh Guarantee</h4>
                    <p className="text-[10px] sm:text-xs text-slate-300">การันตีความสด 100%</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 4. OCCASION & CATEGORIES SECTION ("คอลเลกชันตามโอกาสพิเศษ") */}
      <section id="occasions" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-rose-600 uppercase bg-rose-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-rose-200">
              Curated Floral Collections
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              รังสรรค์ทุกความรู้สึก เพื่อทุกช่วงเวลาสำคัญของคุณ
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              ไม่ว่าจะเป็นช่วงเวลาบอกรัก แสดงความยินดี หรือส่งมอบความห่วงใย Master Florist ของเราออกแบบทุกชิ้นงานอย่างประณีต
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Occasion Card 1 */}
            <div className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 fill-rose-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">วันครบรอบ & สารภาพรัก</h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                ช่อกุหลาบเอกวาดอร์ก้านยาว ดอกใหญ่พิเศษ สื่อถึงรักนิรันดร์และความทรงจำอันทรงคุณค่า
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-4">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-rose-500" /> กุหลาบนำเข้าเอกวาดอร์ & เคนยา</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-rose-500" /> ตัวเลือก 12, 24 หรือ 99 ดอก</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-rose-500" /> การ์ดเขียนมือด้วยปากกาหมึกซึม</li>
              </ul>
              <a href="#order-form" className="text-xs font-bold text-rose-600 group-hover:text-rose-700 flex items-center gap-1">
                สั่งจัดคอลเลกชันนี้ <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Occasion Card 2 */}
            <div className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">วันเกิดคนพิเศษ & สังสรรค์</h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                จัดแต่งโทนสีสดใสด้วยดอกไม้ตามฤดูกาล โบตั๋น ทิวลิป และไฮเดรนเยีย สร้างรอยยิ้มแรกพบ
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-4">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500" /> ดอกไม้สดส่งตรงจากสวนเนเธอร์แลนด์</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500" /> ตกแต่งริบบิ้นซาตินฝรั่งเศส</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500" /> บริการแนบของขวัญ / ช็อกโกแลต</li>
              </ul>
              <a href="#order-form" className="text-xs font-bold text-rose-600 group-hover:text-rose-700 flex items-center gap-1">
                สั่งจัดคอลเลกชันนี้ <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Occasion Card 3 */}
            <div className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">แสดงความยินดี & เปิดกิจการ</h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                สแตนด์ดอกไม้สดหรูหรา และแจกันโอ่อ่า แสดงถึงความสำเร็จและความเจริญรุ่งเรือง
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-4">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> ดีไซน์ระดับสถาปัตย์ Modern Luxury</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> ป้ายข้อความสั่งพิมพ์พิเศษพร้อมโลโก้</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> ส่งตรงถึงสถานที่จัดงานตามเวลานัด</li>
              </ul>
              <a href="#order-form" className="text-xs font-bold text-rose-600 group-hover:text-rose-700 flex items-center gap-1">
                สั่งจัดคอลเลกชันนี้ <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Occasion Card 4 */}
            <div className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">ของขวัญองค์กร & ลูกค้า VIP</h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                กล่อง Bloom Box หรูหรา และแจกันดอกไม้ประดับห้องผู้บริหาร เสริมภาพลักษณ์แบรนด์
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-4">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-500" /> ออกใบกำกับภาษีเต็มรูปแบบได้</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-500" /> Corporate Discount สำหรับคำสั่งซื้อต่อเนื่อง</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-500" /> บริการส่งหลายจุดพร้อมกันใน 1 วัน</li>
              </ul>
              <a href="#order-form" className="text-xs font-bold text-rose-600 group-hover:text-rose-700 flex items-center gap-1">
                สั่งจัดคอลเลกชันนี้ <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Occasion Card 5 */}
            <div className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">แสดงความอาลัยอย่างสมเกียรติ</h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                พวงหรีดและช่อดอกไม้สดโทนขาว-เขียว สุภาพ เรียบหรู แสดงความเคารพอย่างสูงสุด
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-4">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-500" /> กล้วยไม้และลิลลี่คัดเกรดทนทาน</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-500" /> ส่งตรงถึงศาลาวัด พร้อมถ่ายรูปส่งงาน</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-500" /> มีป้ายข้อความเคลือบกันน้ำอย่างดี</li>
              </ul>
              <a href="#order-form" className="text-xs font-bold text-rose-600 group-hover:text-rose-700 flex items-center gap-1">
                สั่งจัดคอลเลกชันนี้ <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Occasion Card 6 */}
            <div className="group bg-gradient-to-br from-rose-950 to-slate-950 text-white rounded-2xl p-6 border border-rose-500/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Bespoke Masterpiece (สั่งทำพิเศษ)</h4>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                ออกแบบเฉพาะบุคคล 1-on-1 โดย Master Florist ตามโทนสี ดอกไม้โปรด และเรื่องราวของคุณ
              </p>
              <ul className="space-y-2 text-xs text-slate-200 mb-4">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> ให้คำปรึกษาและร่างแบบล่วงหน้า</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> ค้นหาดอกไม้สายพันธุ์หายากทั่วโลก</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> จัดส่งด้วยรถปรับอุณหภูมิเฉพาะทาง</li>
              </ul>
              <a href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการออกแบบดอกไม้ Bespoke เฉพาะบุคคลครับ" target="_blank" rel="noreferrer" className="text-xs font-bold text-rose-300 group-hover:text-rose-200 flex items-center gap-1">
                ปรึกษา Master Florist ฟรี <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE EXCELLENCE & WHY CHOOSE US ("จุดเด่นและความเชี่ยวชาญ 6 เสาหลัก") */}
      <section id="excellence" className="py-12 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-rose-400 uppercase bg-rose-950/60 border border-rose-500/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Why Flower.com Standard
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              6 เหตุผลที่ลูกค้าและองค์กรชั้นนำ ไว้วางใจ Flower.com
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              เรายกระดับมาตรฐานร้านดอกไม้ออนไลน์ ให้ทุกคำสั่งซื้อกลายเป็นประสบการณ์อันน่าประทับใจระดับสากล
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 hover:border-rose-500/40 transition duration-300 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Same-Day Express ใน 2 ชั่วโมง</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                จัดส่งด่วนพิเศษถึงปลายทางทั่วกรุงเทพฯ และปริมณฑล ด้วยทีมไรเดอร์ที่ผ่านการอบรมการประคองช่อดอกไม้โดยเฉพาะ
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 hover:border-rose-500/40 transition duration-300 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">ดอกไม้นำเข้าคัดพิเศษเกรด A+</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                คัดสรรตรงจากฟาร์มชั้นนำในฮอลแลนด์, เอกวาดอร์, โคลอมเบีย และญี่ปุ่น ทุกดอกถูกควบคุมอุณหภูมิเพื่อคงความสดสูงสุด
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 hover:border-rose-500/40 transition duration-300 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Camera className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">ส่งภาพจริงให้ตรวจก่อนออกส่ง 100%</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                คุณจะได้รับภาพถ่ายผลงานจริงจากช่างจัดดอกไม้ทาง LINE ก่อนที่สินค้าจะถูกนำส่ง เพื่อความมั่นใจไร้กังวล
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 hover:border-rose-500/40 transition duration-300 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Luxury Packaging & Calligraphy</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                กระดาษห่อเคลือบกันน้ำนำเข้า ริบบิ้นซาตินทอมือ พร้อมการ์ดอวยพรเขียนด้วยหมึกวิจิตรบรรจงเพิ่มความประทับใจ
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 hover:border-rose-500/40 transition duration-300 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">รับประกันความสดใหม่ 100%</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                หากช่อดอกไม้เกิดความเสียหายระหว่างจัดส่งหรือไม่ตรงตามมาตรฐาน เรายินดีจัดส่งช่อใหม่ให้ทันทีโดยไม่มีค่าใช้จ่าย
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 hover:border-rose-500/40 transition duration-300 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">ทีมที่ปรึกษาพร้อมดูแล 24 ชม.</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                มีเจ้าหน้าที่พร้อมรับออเดอร์เร่งด่วน ประสานงานจัดส่งรอบเช้าตรู่หรือดึกพิเศษ เพื่อเซอร์ไพรส์ในนาทีสำคัญ
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FLORAL GALLERY & ATMOSPHERE SHOWCASE ("คอลเลกชันยอดนิยม") */}
      <section id="gallery" className="py-12 sm:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-rose-600 uppercase bg-rose-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-rose-200">
                Signature Portfolio
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                คอลเลกชันดอกไม้ระดับ Signature
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                เลือกชมดีไซน์ยอดนิยมที่ได้รับความไว้วางใจสูงสุดจากลูกค้ากว่า 5,000 ช่อ
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 mt-4 md:mt-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  selectedCategory === 'all' 
                    ? 'bg-rose-600 text-white shadow-md' 
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                ทั้งหมด
              </button>
              <button
                onClick={() => setSelectedCategory('luxury')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  selectedCategory === 'luxury' 
                    ? 'bg-rose-600 text-white shadow-md' 
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                กุหลาบอังกฤษ & แจกันหรู
              </button>
              <button
                onClick={() => setSelectedCategory('birthday')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  selectedCategory === 'birthday' 
                    ? 'bg-rose-600 text-white shadow-md' 
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                วันเกิด & โบตั๋น
              </button>
              <button
                onClick={() => setSelectedCategory('box')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  selectedCategory === 'box' 
                    ? 'bg-rose-600 text-white shadow-md' 
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Bloom Box กำมะหยี่
              </button>
              <button
                onClick={() => setSelectedCategory('congrats')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  selectedCategory === 'congrats' 
                    ? 'bg-rose-600 text-white shadow-md' 
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                สแตนด์แสดงความยินดี
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGallery.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[11px] font-bold px-3 py-1 rounded-full">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-rose-600 text-white text-sm font-extrabold px-3 py-1 rounded-lg shadow-md">
                    {item.price}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-emerald-500" /> ส่งด่วน 2 ชม.
                    </span>
                    <a
                      href="#order-form"
                      className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 transition"
                    >
                      สั่งจองชิ้นนี้ <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TRANSPARENT PACKAGES & PRICING TABLE ("อัตราค่าบริการและแพ็กเกจ") */}
      <section id="packages" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-rose-600 uppercase bg-rose-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-rose-200">
              Transparent Pricing
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              แพ็กเกจราคาโปร่งใส ตรงไปตรงมา ไม่มีบวกเพิ่ม
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              ทุกแพ็กเกจรวมค่าจัดส่งในพื้นที่บริการ การ์ดอวยพร และบริการส่งรูปคอนเฟิร์มผลงานก่อนส่งครบถ้วน
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Tier 1: Classic Elegance */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">แพ็กเกจเริ่มต้น</span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-1 mb-2">Classic Elegance</h4>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  เหมาะสำหรับวันเกิดเพื่อน วันรับปริญญา หรือส่งมอบความห่วงใยในโอกาสทั่วไป
                </p>
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">฿1,890</span>
                    <span className="text-xs text-slate-500">/ ช่อ</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold block mt-1">✓ ฟรีค่าจัดส่งในเขตกรุงเทพฯ</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>ดอกไม้สดคัดเกรด 7-10 ดอก (กุหลาบ, คาร์เนชัน, ไลเซนทัส)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>กระดาษห่อนำเข้าเกาหลีสีเอิร์ธโทน</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>การ์ดพิมพ์ข้อความมาตรฐาน</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>ส่งรูปถ่ายผลงานก่อนนำส่ง</span>
                  </li>
                </ul>
              </div>

              <a
                href="#order-form"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition active:scale-95"
              >
                เลือกแพ็กเกจ Classic
              </a>
            </div>

            {/* Tier 2: Signature Prestige (Recommended & Most Popular) */}
            <div className="bg-gradient-to-b from-rose-950 via-slate-950 to-slate-950 text-white rounded-3xl p-7 border-2 border-rose-500/80 flex flex-col justify-between shadow-2xl relative lg:-translate-y-3">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                🔥 ยอดนิยมอันดับ 1 (Best Value)
              </div>

              <div>
                <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block mt-1">คอลเลกชันยอดนิยม</span>
                <h4 className="text-2xl font-extrabold text-white mt-1 mb-2">Signature Prestige</h4>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  สำหรับคนพิเศษที่สุด วันครบรอบ สารภาพรัก และงานเฉลิมฉลองระดับพรีเมียม
                </p>
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">฿3,590</span>
                    <span className="text-xs text-rose-200">/ ช่อ หรือ กล่อง Bloom Box</span>
                  </div>
                  <span className="text-[11px] text-rose-300 font-semibold block mt-1">✓ จัดส่งด่วนพิเศษ Same-Day 2 ชม. ฟรี</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-200 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>กุหลาบอังกฤษ / เอกวาดอร์ ดอกใหญ่พิเศษ 15-20 ดอก</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>ผสมผสานไฮเดรนเยีย ทิวลิป หรือยูคาลิปตัสนำเข้า</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>การ์ดเขียนมือ Calligraphy หมึกสีทองสุดหรู</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>ริบบิ้นซาตินฝรั่งเศส + แพ็กเกจจิ้งพรีเมียม</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>รับประกันความสดใหม่เปลี่ยนช่อทันทีหากมีปัญหา</span>
                  </li>
                </ul>
              </div>

              <a
                href="#order-form"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-black text-sm shadow-xl shadow-rose-600/40 transition active:scale-95"
              >
                เลือกแพ็กเกจ Signature Prestige
              </a>
            </div>

            {/* Tier 3: Royal Masterpiece VIP */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">สำหรับงานสำคัญ & VIP</span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-1 mb-2">Royal Masterpiece VIP</h4>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  ช่ออลังการ 50-99 ดอก หรือแจกันคริสตัลนำเข้าสำหรับบุคคลสำคัญและผู้บริหาร
                </p>
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">฿6,900+</span>
                    <span className="text-xs text-slate-500">/ ชิ้นงาน</span>
                  </div>
                  <span className="text-[11px] text-amber-600 font-semibold block mt-1">✓ จัดส่งด้วยรถปรับอุณหภูมิ VIP</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>ออกแบบเฉพาะบุคคล 1-on-1 โดย Master Florist</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>กล้วยไม้ฟาแลนนอปซิส หรือกุหลาบนำเข้า 50-99 ดอก</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>แจกันคริสตัลแท้เจียระไน หรือสแตนด์โมเดิร์น</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>บริการส่งถึงมือผู้รับพร้อมตัวแทนมอบอย่างเป็นทางการ</span>
                  </li>
                </ul>
              </div>

              <a
                href="#order-form"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition active:scale-95"
              >
                เลือกแพ็กเกจ Royal VIP
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 8. SOCIAL PROOF & TESTIMONIALS ("เสียงยืนยันจากลูกค้าจริง") */}
      <section id="reviews" className="py-12 sm:py-20 bg-rose-50/50 border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-rose-600 uppercase bg-rose-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Verified Social Proof
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              ความประทับใจจากลูกค้ากว่า 10,000 คู่ความรัก
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              คะแนนความพึงพอใจ 4.95 / 5.0 จากผู้รับบริการจริงทั่วประเทศ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Review 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;สั่งช่อกุหลาบอังกฤษด่วนตอนเที่ยงวันครบรอบแต่งงาน ทีมงานส่งถึงร้านอาหารภายใน 1 ชั่วโมงครึ่ง ดอกไม้สดและหอมมาก ภรรยาประทับใจสุดๆ ถ่ายรูปอวดเพื่อนไม่หยุดเลยครับ&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm">
                  คุณภ
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">คุณภานุเดช ว.</h5>
                  <p className="text-[11px] text-slate-400">ลูกค้า VIP ประจำ • ย่านสาทร</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;บริษัทใช้บริการส่งกระเช้าดอกไม้แสดงความยินดีให้พาร์ตเนอร์บ่อยมาก จุดเด่นคือเค้าถ่ายภาพจริงส่งมาให้คอนเฟิร์มก่อนเสมอ งานเนี้ยบ ป้ายโลโก้พิมพ์สวยงาม สมฐานะองค์กรค่ะ&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">
                  คุณม
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">คุณมนัสนันท์ ท.</h5>
                  <p className="text-[11px] text-slate-400">ผู้บริหารฝ่ายการตลาด บริษัทมหาชน</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;โบตั๋นนำเข้าสวยสะกดใจมากจริงๆ การ์ดเขียนด้วยลายมือ Calligraphy คือดีเทลที่ทำให้แตกต่างจากร้านอื่น แฟนชอบมาก บริการสุภาพและตรงเวลาเป๊ะ&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm">
                  คุณพ
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">คุณพัชริดา ก.</h5>
                  <p className="text-[11px] text-slate-400">ลูกค้าผู้รับบริการจริง • สุขุมวิท 39</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8.5 FAQS SECTION (คลายความกังวลเรื่องการจัดส่งและความสด) */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Flower Care & Delivery FAQ
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              คำถามที่พบบ่อย (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              มั่นใจในคุณภาพดอกไม้สดเกรดประมูลและการจัดส่งควบคุมอุณหภูมิ 100%
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <div className="font-bold text-slate-900 mb-1">Q: หากต้องการสั่งดอกไม้ด่วนวันเดียวกัน (Same-Day) ใช้เวลากี่ชั่วโมง?</div>
              <div className="text-slate-600 leading-relaxed">A: ในเขตกรุงเทพฯ และปริมณฑล เรามีบริการ Same-Day Express จัดส่งถึงมือผู้รับภายใน 2-3 ชั่วโมงหลังคอนเฟิร์มแบบกับฟลอริสต์ครับ</div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <div className="font-bold text-slate-900 mb-1">Q: ดอกไม้จะคงความสดได้นานกี่วัน และมีการรับประกันไหม?</div>
              <div className="text-slate-600 leading-relaxed">A: ดอกไม้นำเข้าของเราผ่านกระบวนการ Cold Chain ควบคุมอุณหภูมิ 4°C ตลอดการเดินทาง หากปฏิบัติตามคู่มือการดูแล ดอกไม้จะคงความสดชื่นได้ 5-7 วัน และเรารับประกันความสดชื่น 100% หากชำรุดเสียหายจากการขนส่งยินดีจัดใหม่ให้ทันทีครับ</div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <div className="font-bold text-slate-900 mb-1">Q: มีรูปภาพผลงานช่อจริงให้ตรวจเช็คก่อนส่งมอบหรือไม่?</div>
              <div className="text-slate-600 leading-relaxed">A: มีแน่นอนครับ ฟลอริสต์จะถ่ายภาพช่อดอกไม้จริงทั้งมุมตรงและมุมบน ส่งให้คุณตรวจสอบความเรียบร้อยผ่าน LINE ก่อนที่พนักงานจะนำขึ้นรถจัดส่งทุกครั้งครับ</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE LEAD CAPTURE FORM ("สั่งจัดดอกไม้ด่วน & ปรึกษา Master Florist") */}
      <section id="order-form" className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-stone-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Background ambient light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8 relative z-10">
              <span className="text-xs font-bold tracking-widest text-rose-400 uppercase bg-rose-950/80 border border-rose-500/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Instant Order & Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                สั่งจัดดอกไม้ด่วน & รับคำปรึกษาฟรี
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                กรอกข้อมูลเบื้องต้นด้านล่าง Master Florist จะติดต่อกลับพร้อมเสนอแบบดอกไม้ภายใน 10 นาที
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4 max-w-md mx-auto relative z-10">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">ได้รับข้อมูลการสั่งจัดเรียบร้อยครับ!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  เจ้าหน้าที่ Flower.com กำลังเตรียมแบบและสรุปรายการดอกไม้ และจะติดต่อกลับที่เบอร์ <strong className="text-emerald-400">{formData.phone}</strong> โดยเร็วที่สุดครับ
                </p>
                <div className="pt-2">
                  <a
                    href="https://line.me/R/ti/p/@fhu6688s?text=ส่งข้อมูลสั่งจัดดอกไม้เรียบร้อยแล้วครับ"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
                  >
                    <MessageCircle className="w-4 h-4" /> แจ้งทาง LINE ด่วน
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      ชื่อ-นามสกุล ของท่าน <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="เช่น คุณเอกภพ หรือ คุณนลินทิพย์"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-rose-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      เบอร์โทรศัพท์สำหรับติดต่อกลับ <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="เช่น 081-xxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-rose-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      โอกาสหรือจุดประสงค์ในการมอบ
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-rose-500 transition"
                    >
                      <option>วันเกิด / วันครบรอบ (Birthday & Anniversary)</option>
                      <option>บอกรัก / สารภาพรัก / ขอแต่งงาน</option>
                      <option>แสดงความยินดี / เปิดกิจการ / รับปริญญา</option>
                      <option>ของขวัญองค์กร / ผู้บริหารระดับสูง</option>
                      <option>แสดงความอาลัยอย่างสมเกียรติ</option>
                      <option>Bespoke สั่งจัดพิเศษเฉพาะบุคคล</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      งบประมาณที่ต้องการ
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-rose-500 transition"
                    >
                      <option>Classic Elegance (1,890 - 2,500 บาท)</option>
                      <option>Signature Luxury (3,500 - 5,500 บาท)</option>
                      <option>Royal Masterpiece VIP (6,900 - 15,000+ บาท)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      วันที่และเวลาที่ต้องการให้จัดส่งถึงผู้รับ
                    </label>
                    <input
                      type="text"
                      placeholder="เช่น วันนี้ 15:30 น. หรือ พรุ่งนี้ช่วงเช้า"
                      value={formData.deliveryDate}
                      onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-rose-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      ข้อความบนการ์ดอวยพร (ถ้ามี)
                    </label>
                    <input
                      type="text"
                      placeholder="เช่น สุขสันต์วันเกิดคนดี / ด้วยรักจาก..."
                      value={formData.cardMessage}
                      onChange={(e) => setFormData({ ...formData, cardMessage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-rose-500 transition"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-black text-sm sm:text-base shadow-xl shadow-rose-600/30 transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> ส่งข้อมูลสั่งจัด & รับข้อเสนอทันที
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2 text-center">
                  <span>🔒 ข้อมูลของท่านเป็นความลับ 100%</span>
                  <span>•</span>
                  <span>⚡ ตอบกลับภายใน 10 นาที</span>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* 10. LUXURY MASTER FOOTER */}
      <PremiumFooter />

      {/* 11. FIXED MOBILE ACTION BAR (Floating Sticky Conversion Bar on Mobile) */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-white/10 p-3 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <a
            href="tel:0817726444"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-rose-400" /> โทรสั่งด่วน
          </a>
          <a
            href="https://line.me/R/ti/p/@fhu6688s?text=สนใจสั่งดอกไม้ด่วนจาก Flower.com ครับ"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-rose-600/30 transition active:scale-95"
          >
            <MessageCircle className="w-4 h-4" /> แอดไลน์สั่งดอกไม้
          </a>
        </div>
      </div>

    </div>
  );
}
