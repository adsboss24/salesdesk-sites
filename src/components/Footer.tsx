'use client';

import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Cpu, 
  Globe,
  Clock,
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          
          {/* Column 1: Brand & Headquarters (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src="/images/salesdesk-logo-square.png" 
                alt="SalesDesk AI" 
                className="w-11 h-11 rounded-xl object-contain shadow-lg shadow-teal-500/20 bg-slate-900 border border-slate-700/60 p-1" 
              />
              <div>
                <span className="text-xl font-black tracking-tight text-white block leading-tight">
                  SalesDesk <span className="text-teal-400">Sites</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
                  Psychological Salepage Studio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-md">
              สตูดิโอออกแบบเว็บไซต์และเซลเพจสไตล์ Cinematic ปิดการขายด้วยหลักจิตวิทยาขั้นสูง 
              ผสานเทคโนโลยี AI อัจฉริยะ สถาปัตยกรรม 16:9 ไม่บังภาพบนมือถือ พร้อมระบบวัดผล Conversion Tracking ครบวงจร
            </p>

            <div className="space-y-2.5 text-xs text-slate-400 pt-3 border-t border-slate-850">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>สำนักงานใหญ่:</strong> อาคาร SalesDesk AI Tower ชั้น 18 เลขที่ 88/1 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>เลขทะเบียนนิติบุคคลพาณิชย์: 0105567012345</span>
              </div>
            </div>

            {/* Social Connect Icons */}
            <div className="pt-2">
              <div className="flex items-center gap-2.5">
                <a 
                  href="https://line.me/R/ti/p/@fhu6688s?text=สวัสดีครับทีมงานSalesDeskAI"
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition active:scale-95"
                  title="LINE Official Account"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a 
                  href="tel:0817726444"
                  className="w-9 h-9 rounded-xl bg-teal-600/20 border border-teal-500/30 text-teal-400 hover:bg-teal-600 hover:text-white flex items-center justify-center transition active:scale-95"
                  title="โทรติดต่อสายตรง"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:contact@salesdesk-ai.com"
                  className="w-9 h-9 rounded-xl bg-sky-600/20 border border-sky-500/30 text-sky-400 hover:bg-sky-600 hover:text-white flex items-center justify-center transition active:scale-95"
                  title="อีเมลติดต่อฝ่ายประสานงาน"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href="https://salesdesk-sites.vercel.app/"
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white flex items-center justify-center transition active:scale-95"
                  title="SalesDesk Sites Official"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Architecture & Ad Tech Standards (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-2">
              <Cpu className="w-4 h-4 text-teal-400" />
              <span>มาตรฐานสถาปัตยกรรม & แอด</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>ด้วยเทคโนโลยี่ AI โหลดไว 0.8 วิ</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Google Tag Manager & GA4 เต็มระบบ</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Meta Pixel + Conversions API (CAPI)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>TikTok Pixel & LINE Tag Integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Custom Events ดัก Retargeting ทุกปุ่ม</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Concierge & Direct Contact (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>บริการและที่ปรึกษาตลอด 24 ชม.</span>
            </h4>
            
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div>
                <span className="block text-slate-500 text-[11px] font-medium">โทรศัพท์สายด่วน:</span>
                <a href="tel:0817726444" className="text-white font-extrabold hover:text-teal-300 transition text-base tracking-wide">
                  081-772-6444
                </a>
              </div>
              <div>
                <span className="block text-slate-500 text-[11px] font-medium">LINE Official Account:</span>
                <a 
                  href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-emerald-400 font-bold hover:underline transition text-sm flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>@fhu6688s (มี @ นำหน้า)</span>
                </a>
              </div>
              <div>
                <span className="block text-slate-500 text-[11px] font-medium">เวลาทำการ:</span>
                <span className="text-slate-300 text-xs">ทุกวัน 24 ชั่วโมง (AI & ทีมวิศวกรผู้เชี่ยวชาญ)</span>
              </div>
            </div>

            <div className="pt-1">
              <a 
                href="https://line.me/R/ti/p/@fhu6688s?text=ต้องการขอตัวอย่างเว็บไซต์ฟรีครับ" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs sm:text-sm shadow-md shadow-teal-500/20 hover:opacity-95 transition active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>ปรึกษาและขอตัวอย่างฟรีใน LINE</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              © {currentYear} SalesDesk Sites. สงวนลิขสิทธิ์ทุกประการ • ขับเคลื่อนด้วยเทคโนโลยี SalesDesk AI Engine
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a href="#privacy" className="hover:text-slate-300 transition">นโยบายความเป็นส่วนตัว (Privacy Policy)</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-300 transition">ข้อกำหนดการให้บริการ (Terms)</a>
            <span>•</span>
            <a href="#cookie" className="hover:text-slate-300 transition">นโยบายความปลอดภัยข้อมูล</a>
            <span>•</span>
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
              target="_blank" 
              rel="noreferrer" 
              className="text-teal-400 font-semibold hover:underline"
            >
              SalesDesk AI Studio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
