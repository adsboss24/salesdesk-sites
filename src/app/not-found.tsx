import React from 'react';
import Link from 'next/link';
import { Wine, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center px-4 py-16 font-sans">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-stone-900 border border-amber-600/40 flex items-center justify-center mx-auto shadow-2xl">
          <Wine className="w-10 h-10 text-amber-400" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            404 NOT FOUND
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            ไม่พบหน้าที่ท่านต้องการ
          </h1>
          <p className="text-stone-400 text-sm leading-relaxed">
            หน้าที่ท่านกำลังพยายามเข้าถึงอาจถูกย้าย ลบ หรือกรอกที่อยู่ไม่ถูกต้อง กรุณากลับสู่หน้าหลักหรือเลือกบริการที่ต้องการ
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/sandeco-wine-barrel"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs tracking-wide shadow-lg transition flex items-center justify-center gap-2"
          >
            <Wine className="w-4 h-4" />
            <span>ถังไวน์ไม้โอ๊คฝรั่งเศส (ซันเดโก)</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-xs transition flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>หน้าหลัก</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
