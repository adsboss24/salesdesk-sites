import Link from 'next/link';
import { AlertCircle, MessageCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import PremiumFooter from '@/components/Footer';

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-8 my-auto">
        
        {/* Cancel Icon */}
        <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-400 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/20">
          <AlertCircle className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-500/30">
            Payment Incomplete
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            การชำระเงินยังไม่เสร็จสมบูรณ์
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            รายการของท่านถูกยกเลิก หรือยังไม่ได้ทำการตัดบัตร ไม่ต้องกังวลครับ ยอดเงินในบัญชีของท่านยังไม่ถูกหักใดๆ ทั้งสิ้น
          </p>
        </div>

        {/* Options Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-left space-y-3 shadow-xl">
          <h4 className="text-sm font-bold text-white">ต้องการความช่วยเหลือหรือช่องทางชำระเงินอื่น?</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            หากท่านต้องการชำระด้วยการโอนเงินผ่านบัญชีธนาคาร (Bank Transfer) หรือต้องการสอบถามเงื่อนไขแพ็กเกจเพิ่มเติม สามารถทักแอดมินใน LINE ได้ตลอด 24 ชั่วโมงครับ
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="https://line.me/R/ti/p/@fhu6688s?text=สวัสดีครับ_พบปัญหาขั้นตอนการชำระเงิน_ต้องการสอบถามเพิ่มเติมครับ"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm transition"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>ติดต่อแอดมินใน LINE (@fhu6688s)</span>
          </a>

          <Link
            href="/#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/20 transition"
          >
            <RefreshCw className="w-4 h-4" />
            <span>กลับไปเลือกแพ็กเกจใหม่</span>
          </Link>
        </div>

      </div>

      <PremiumFooter />
    </div>
  );
}
