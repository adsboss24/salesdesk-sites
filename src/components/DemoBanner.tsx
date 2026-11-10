'use client';

import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Sparkles, 
  ShieldAlert, 
  PhoneCall, 
  MessageCircle, 
  ChevronRight, 
  X, 
  Lock, 
  ArrowRight,
  ExternalLink,
  Flame,
  CheckCircle2
} from 'lucide-react';

export interface DemoBannerProps {
  clientName: string;
  pageKey: string;
  forceDemo?: boolean;
  daysLimit?: number; // Default 7 days
}

export function useDemoMode({
  clientName,
  pageKey,
  defaultClientPhone,
  defaultClientLine,
  forceDemo = true,
  daysLimit = 7
}: {
  clientName: string;
  pageKey: string;
  defaultClientPhone: string;
  defaultClientLine: string;
  forceDemo?: boolean;
  daysLimit?: number;
}) {
  const [isDemo, setIsDemo] = useState<boolean>(true);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [timeLeftStr, setTimeLeftStr] = useState<string>('');

  useEffect(() => {
    // Check URL params: ?demo=false or ?live=true can disable demo mode for paid production
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('live') === 'true' || params.get('demo') === 'false') {
        setIsDemo(false);
        return;
      }
      if (params.get('expired') === 'true') {
        setIsExpired(true);
        return;
      }

      // Track 7-day countdown in localStorage
      const storageKey = `salesdesk_demo_${pageKey}`;
      let startTime = localStorage.getItem(storageKey);
      if (!startTime) {
        startTime = new Date().toISOString();
        localStorage.setItem(storageKey, startTime);
      }

      const updateTimer = () => {
        const start = new Date(startTime!).getTime();
        const expiry = start + daysLimit * 24 * 60 * 60 * 1000;
        const now = Date.now();
        const diff = expiry - now;

        if (diff <= 0) {
          setIsExpired(true);
          setTimeLeftStr('หมดอายุแล้ว');
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / 1000 / 60) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          setTimeLeftStr(`${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วิ`);
        }
      };

      updateTimer();
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    }
  }, [pageKey, daysLimit]);

  // SalesDesk AI Official Contact Override in Demo Mode
  const salesdeskPhone = '081-772-6444';
  const salesdeskPhoneRaw = '0817726444';
  const salesdeskLine = `https://line.me/R/ti/p/@fhu6688s?text=${encodeURIComponent(
    `สวัสดีครับ สนใจเปิดใช้งานเว็บไซต์จริงของ ${clientName} ครับ (ติดต่อจากตัวอย่างเซลเพจ)`
  )}`;

  return {
    isDemo,
    isExpired,
    timeLeftStr,
    phoneDisplay: isDemo ? salesdeskPhone : defaultClientPhone,
    phoneCallUrl: isDemo ? `tel:${salesdeskPhoneRaw}` : `tel:${defaultClientPhone.replace(/[^0-9]/g, '')}`,
    lineUrl: isDemo ? salesdeskLine : defaultClientLine,
    salesdeskPhone,
    salesdeskLine,
  };
}

export default function DemoBanner({
  clientName,
  pageKey,
  forceDemo = true,
  daysLimit = 7
}: DemoBannerProps) {
  const [mounted, setMounted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isDemo, setIsDemo] = useState(true);
  const [isExpired, setIsExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    if (params.get('live') === 'true' || params.get('demo') === 'false') {
      setIsDemo(false);
      return;
    }
    if (params.get('expired') === 'true') {
      setIsExpired(true);
      return;
    }

    const storageKey = `salesdesk_demo_timer_${pageKey}`;
    let startTimeStr = localStorage.getItem(storageKey);
    if (!startTimeStr) {
      startTimeStr = new Date().toISOString();
      localStorage.setItem(storageKey, startTimeStr);
    }

    const timer = setInterval(() => {
      const start = new Date(startTimeStr!).getTime();
      const expiry = start + daysLimit * 24 * 60 * 60 * 1000;
      const now = Date.now();
      const diff = expiry - now;

      if (diff <= 0) {
        setIsExpired(true);
      } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [pageKey, daysLimit]);

  if (!mounted || !isDemo) return null;

  const claimLineUrl = `https://line.me/R/ti/p/@fhu6688s?text=${encodeURIComponent(
    `สวัสดีครับ สนใจเปิดใช้งานเว็บไซต์จริงของ ${clientName} ครับ (จากหน้าพรีวิวตัวอย่าง)`
  )}`;

  return (
    <>
      {/* 1. TOP STICKY URGENCY BANNER */}
      {!isDismissed && (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-600 via-rose-600 to-purple-700 text-white shadow-xl border-b border-white/20">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-3 text-xs sm:text-sm">
            
            {/* Left: Badge & Client Info */}
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-white font-black text-[10px] sm:text-xs tracking-wider uppercase backdrop-blur-xs shrink-0 flex items-center gap-1">
                <Flame className="w-3 h-3 text-yellow-300 animate-bounce" /> LIVE DEMO
              </span>
              <span className="font-medium text-white truncate">
                ตัวอย่างเว็บไซต์สำหรับ <strong className="underline underline-offset-2">{clientName}</strong>
              </span>
            </div>

            {/* Center: Live 7-Day Countdown Timer */}
            <div className="hidden md:flex items-center gap-2 bg-black/25 px-3 py-1 rounded-xl border border-white/10 shrink-0">
              <Clock className="w-4 h-4 text-amber-300 animate-spin" />
              <span className="text-amber-200 font-bold text-xs">
                เหลือเวลาเปิดเข้าชมอีก:
              </span>
              <span className="font-mono font-black text-white text-xs bg-black/40 px-2 py-0.5 rounded border border-white/10">
                {timeLeft.days}วัน {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>

            {/* Right: CTA & Dismiss Button */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={claimLineUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-white text-slate-950 font-black text-xs hover:bg-amber-300 transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>ปลดล็อกใช้งานจริง</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setIsDismissed(true)}
                className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition"
                title="ย่อแถบแจ้งเตือน"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Floating Mini Pill when dismissed */}
      {isDismissed && (
        <div className="fixed top-2 right-2 z-50">
          <button
            onClick={() => setIsDismissed(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/90 text-amber-300 border border-amber-500/50 shadow-lg text-xs font-bold backdrop-blur-md hover:bg-slate-900 transition"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>เดโม {clientName} ({timeLeft.days}วัน)</span>
          </button>
        </div>
      )}

      {/* 2. FULL-SCREEN EXPIRATION LOCK MODAL (Auto-locks after 7 days) */}
      {isExpired && (
        <div className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Ambient glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
              <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
                Demo Preview Expired
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                ลิงก์ตัวอย่างครบกำหนด 7 วันแล้ว
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                ขออภัยครับ ลิงก์ตัวอย่างเซลเพจสำหรับ <strong className="text-amber-300">{clientName}</strong> ได้ครบกำหนดเวลาพรีวิว 7 วันแล้ว หากคุณเป็นเจ้าของธุรกิจและต้องการต่ออายุลิงก์ หรือสั่งเปิดใช้งานเว็บไซต์จริงพร้อมระบบ AI การตลาด กรุณาติดต่อทีมงาน SalesDesk AI ครับ
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-left text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ต่ออายุการแสดงผลและปรับแต่งเนื้อหาฟรี</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>เปิดใช้งานโดเมนจริงของคุณ (เช่น .com / .co.th)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>เปลี่ยนเบอร์โทรและปุ่ม LINE เป็นของร้านคุณ 100%</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={claimLineUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 hover:from-amber-400 hover:to-yellow-300 transition active:scale-98"
              >
                <MessageCircle className="w-5 h-5 text-slate-950" />
                <span>ติดต่อขอต่ออายุ / เปิดใช้งานจริงผ่าน LINE</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="tel:0817726444"
                className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>โทรด่วนทีมงาน SalesDesk AI: 081-772-6444</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500">
              ⚡ พัฒนาและดูแลระบบโดย SalesDesk AI (ผู้เชี่ยวชาญด้านเซลเพจและ AI ปิดการขาย)
            </p>

          </div>
        </div>
      )}
    </>
  );
}
