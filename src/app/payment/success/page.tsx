import Link from 'next/link';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import PremiumFooter from '@/components/Footer';

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-8 my-auto">
        
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20 animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3.5 py-1 rounded-full border border-teal-500/30">
            Payment Completed Successfully
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            ขอบพระคุณสำหรับการชำระเงินครับ!
          </h1>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            ระบบได้รับคำสั่งซื้อและยอดชำระเงินของท่านเรียบร้อยแล้ว ทีมงานสถาปัตยกรรม SalesDesk AI กำลังเตรียมความพร้อมเพื่อเริ่มพัฒนาเว็บไซต์/เซลเพจของท่านทันที
          </p>
        </div>

        {/* Next Steps Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 text-left space-y-4 shadow-xl">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>ขั้นตอนถัดไปเพื่อเริ่มงานได้ทันที:</span>
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">1</span>
              <span>กดปุ่มเชื่อมต่อแชต LINE ด้านล่างเพื่อแจ้งรหัสหรือสลิปคำสั่งซื้อกับแอดมิน</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">2</span>
              <span>ส่งข้อมูลสินค้า/บริการ หรือลิงก์เพจเดิมของท่าน เพื่อให้ทีมงานเริ่มจัดทำโครงสร้าง</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">3</span>
              <span>รับตัวอย่างโครงร่างหน้าแรกเวอร์ชันแรกภายใน 24-48 ชั่วโมงครับ</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://line.me/R/ti/p/@fhu6688s?text=สวัสดีครับ_ผมชำระเงินผ่านระบบเรียบร้อยแล้วครับ"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/25 transition transform active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>ส่งข้อมูลเริ่มงานใน LINE (@fhu6688s)</span>
          </a>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition"
          >
            <span>กลับสู่หน้าแรก</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <PremiumFooter />
    </div>
  );
}
