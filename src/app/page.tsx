'use client';

import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  PhoneCall,
  HeartHandshake
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-900 text-teal-100 text-xs py-2 px-4 border-b border-teal-800/40 text-center font-medium">
        <span>🚀 ขับเคลื่อนด้วย SalesDesk AI Engine • สร้างเซลเพจปิดการขายระดับพรีเมียม ส่งมอบงานรวดเร็วใน 24 ชม.</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-teal-500/20">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white block leading-tight">
                SalesDesk <span className="text-teal-400">Sites</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
                AI Salepage Studio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-teal-500/20 transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>แอดไลน์ปรึกษาฟรี</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SHOWCASE */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-teal-500/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>AI-Driven Cinematic Salepage Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
            เปลี่ยนผู้เข้าชม ให้เป็นลูกค้าตัวจริง <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300">
              ด้วยเว็บไซต์ & เซลเพจสไตล์ Cinematic
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            ผสานเทคโนโลยี AI สร้างสรรค์ภาพพรีเมียม 16:9 ดีไซน์ระดับสากล ไม่บังภาพบนมือถือ 
            โครงสร้างปิดการขาย 8 มิติ พร้อมเชื่อมต่อระบบ LINE OA อัตโนมัติ 24 ชม.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-teal-500/25 transition active:scale-95"
            >
              <span>ชมผลงานจริงล่าสุด</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm sm:text-base border border-slate-700 transition"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              <span>ปรึกษาประเมินโครงการฟรี</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-16 md:py-24 bg-slate-900/60 border-y border-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30">
              Featured Flagship Projects
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              ผลงานระดับ Masterpiece ล่าสุด
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              สร้างขึ้นด้วยมาตรฐาน SalesDesk Salepage Architect ปรับแต่งเฉพาะธุรกิจเพื่อผลลัพธ์การแปลงยอดขายสูงสุด
            </p>
          </div>

          <div className="space-y-12">
            {/* Project Card 1: Flower.com (Luxury Floral Boutique) */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-rose-500/50 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image Preview */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                  <img 
                    src="/images/flower-hero.jpg" 
                    alt="Flower.com บูทีกดอกไม้พรีเมียมและบริการจัดส่งด่วน" 
                    className="w-full h-full object-cover object-[78%_center] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border border-rose-500/40 text-rose-300 text-xs px-3 py-1 rounded-full font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Luxury E-Commerce & Floral Boutique</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                      <Sparkles className="w-4 h-4" />
                      <span>บูทีกดอกไม้พรีเมียม & Same-Day Delivery 2 ชม.</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-rose-300 transition">
                      Flower.com
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      เซลเพจระดับ World-Class โครงสร้าง 16:9 Hero ไม่บังภาพดอกไม้และศิลปินจัดดอกไม้บนมือถือ 
                      ผสานระบบฟิลเตอร์คอลเลกชัน ตารางราคาโปร่งใส และฟอร์มสั่งจัดดอกไม้ด่วนพร้อมปิดการขายผ่าน LINE OA
                    </p>

                    <ul className="space-y-2 pt-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>โครงสร้าง 16:9 Cinematic Hero โชว์ความงามของดอกไม้ 100% บนมือถือ</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>ระบบฟิลเตอร์แกลเลอรีช่อดอกไม้ & ตารางแพ็กเกจราคาโปร่งใส</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>ฟอร์มสั่งดอกไม้ด่วน ตอบกลับและสรุปแบบภายใน 10 นาที</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <a 
                      href="/flower" 
                      target="_blank" 
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-rose-600/25 transition transform active:scale-95"
                    >
                      <span>เปิดชมหน้าเว็บตัวอย่างจริง (Flower.com)</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2: Nattanan Nursing Care */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-teal-500/50 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image Preview */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                  <img 
                    src="/images/nattanan-hero.jpg" 
                    alt="ณัฐนันท์ เนอสซิ่งแคร์" 
                    className="w-full h-full object-cover object-[78%_center] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border border-teal-500/40 text-teal-300 text-xs px-3 py-1 rounded-full font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Healthcare & Senior Living</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-teal-400">
                      <HeartHandshake className="w-4 h-4" />
                      <span>บ้านพักผู้สูงอายุ & ศูนย์ฟื้นฟูผู้ป่วยพักฟื้น</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-teal-300 transition">
                      ณัฐนันท์ เนอสซิ่งแคร์
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      เซลเพจมาตรฐานสากล ถ่ายทอดความอบอุ่น ร่มรื่น และความน่าเชื่อถือด้วยภาพสไตล์ Cinematic สวนญี่ปุ่น 
                      พร้อมระบบเลือกแพ็กเกจ ฟอร์มนัดหมายเยี่ยมชม และปุ่มปิดการขายผ่าน LINE ครบวงจร
                    </p>

                    <ul className="space-y-2 pt-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>โครงสร้าง 16:9 Hero ไม่บังภาพบนมือถือ (Unobstructed View)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>รองรับ Lead Capture นัดหมายเข้าชมสถานที่พร้อมบันทึกประวัติ</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>เชื่อมต่อ LINE OA ทักตรงหาแอดมินปิดการขายได้ทันที</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <a 
                      href="/nattanan-nursingcare" 
                      target="_blank" 
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 transition transform active:scale-95"
                    >
                      <span>เปิดชมหน้าเว็บตัวอย่างจริง</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 4 PILLARS */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30">
              Why SalesDesk Sites
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              4 เสาหลักที่ทำให้เซลเพจของเราปิดการขายได้จริง
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Cinematic Hero 16:9</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ดีไซน์แบบ Auto Dealer Reference ฝั่งซ้ายวาง Negative Space สำหรับตัวหนังสือ ฝั่งขวาโชว์ภาพสินค้าหรือบริการอย่างคมชัด
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Mobile-First 100%</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                จัดวางเลย์เอาต์พิเศษบนมือถือ เปิดพื้นที่ภาพตรงกลางโล่ง 100% ไม่ถูกปุ่มหรือตัวหนังสือบังใบหน้าหรือตัวสินค้า
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">8-Section Conversion</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                โครงสร้างร้อยเรียงอารมณ์ลูกค้าตั้งแต่สะดุดตา จุดเด่น ตารางราคา รีวิวความไว้วางใจ สู่ฟอร์มนัดหมายปิดการขาย
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Integrated with LINE OA</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                เชื่อมต่อระบบแชตและบอทอัตโนมัติ ส่งลูกค้าตรงสู่ LINE OA ของธุรกิจ พร้อมข้อความระบุเจาะจงความต้องการทันที
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FOOTER */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center mx-auto text-slate-950 font-black shadow-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            พร้อมยกระดับเว็บไซต์ธุรกิจของคุณแล้วหรือยัง?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            ส่งข้อมูลธุรกิจหรือลิงก์เพจของคุณมาให้เรา ทีมงาน SalesDesk AI พร้อมเนรมิตเซลเพจระดับพรีเมียมให้คุณภายใน 24 ชม.
          </p>
          <div className="pt-2">
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-base shadow-xl shadow-teal-500/25 transition transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>ปรึกษาทีมงานผ่าน LINE OA (@fhu6688s)</span>
            </a>
          </div>
          <p className="text-[11px] text-slate-500 pt-6">
            © 2026 SalesDesk Sites • ออกแบบและพัฒนาโดย SalesDesk AI (ผู้เชี่ยวชาญด้านเว็บไซต์ & AI การตลาด)
          </p>
        </div>
      </footer>
    </div>
  );
}
