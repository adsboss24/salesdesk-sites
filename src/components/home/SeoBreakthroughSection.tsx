"use client";

import React from "react";
import Link from "next/link";
import {
  Flame,
  AlertTriangle,
  Clock,
  DollarSign,
  TrendingDown,
  Sparkles,
  Zap,
  Globe,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import TrackableLineButton from "@/components/TrackableLineButton";

export default function SeoBreakthroughSection() {
  return (
    <section
      id="seo-breakthrough"
      className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header: ขยี้บาดแผล */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="h-4 w-4 text-red-400 animate-pulse" />
            ขุดรากถอนโคนบาดแผลการตลาดออนไลน์
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            ติดกับดัก <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-400">"ค่าแอดแพง"</span>{" "}
            หรือรอ <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-400 to-neutral-500">"SEO เป็นปี"</span> จนสินค้าเอาท์?
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            ความจริงอันเจ็บปวดที่พ่อค้าแม่ค้าออนไลน์และ SME ไทยต้องแบกรับมาตลอดหลายปี
            และเหตุผลที่โมเดลการตลาดแบบเดิมกำลังทำให้ธุรกิจของคุณหมดลมหายใจช้าๆ
          </p>
        </div>

        {/* 2 Massive Pain Points Grid (ขยี้ 2 บาดแผลหลัก) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* บาดแผลที่ 1: วิกฤตยิงแอด (Paid Ads Trap) */}
          <div className="rounded-2xl border border-red-500/30 bg-gradient-to-b from-red-950/20 to-slate-900/60 p-8 space-y-6 relative overflow-hidden group hover:border-red-500/50 transition">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-400">
                บาดแผลเรื้อรังที่ 1
              </span>
              <TrendingDown className="h-6 w-6 text-red-400" />
            </div>

            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-400 shrink-0" />
              ติดกับดักยิงแอด: ถมเงินไม่รู้จบ หยุดยิง = ยอดเป็นศูนย์
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              ยิงแอดเท่าไหร่ค่า CPM ก็พุ่งสูงขึ้นทุกวัน ตั้งค่า Ads Manager แสนปวดหัว พิกเซลหลุด บัญชีโดนแบน
              ลูกค้าทัก Inbox มาเยอะแต่ปิดยอดไม่ได้ ถามคำเดียวแล้วเงียบหาย
              สุดท้ายกำไรที่หามาได้ทั้งเดือนต้องเอาไปยกให้แพลตฟอร์มโฆษณาหมดเกลี้ยง ไม่มีความยั่งยืนแม้แต่น้อย
            </p>

            <div className="pt-4 border-t border-red-500/20 space-y-2 text-xs text-red-300/90">
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                ค่าแอดแพงขึ้นทุกปี กำไรหดตัวลงเรื่อยๆ
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                ลูกค้าแชตหลุดมือ แอดมินตอบช้า 3 นาทีก็หนีไปซื้อร้านอื่น
              </p>
            </div>
          </div>

          {/* บาดแผลที่ 2: ฝันร้าย SEO ยุคเก่า (Traditional SEO Nightmare) */}
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-slate-900/60 p-8 space-y-6 relative overflow-hidden group hover:border-amber-500/50 transition">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
                บาดแผลเรื้อรังที่ 2
              </span>
              <Clock className="h-6 w-6 text-amber-400" />
            </div>

            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-amber-400 shrink-0" />
              SEO ยุคเก่า: แพงหูฉี่ รอเป็นชาติ จนสินค้าตกรุ่น
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              พอจะหันมาทำ SEO ก็เข้าถึงยากกว่ายิงแอด ค่าจ้างเอเจนซี่เดือนละ 30,000 – 100,000+ บาท SME ตัวเล็กๆ ไม่มีสิทธิ์เอื้อมถึง
              แถมต้องนั่งสวดมนต์รอผล 6–12 เดือน... และที่เจ็บปวดที่สุดคือ <strong>"วันที่เว็บติดหน้าแรก สินค้าหรือบริการนั้นก็เอาท์ ตกกระแสไปเรียบร้อยแล้ว!"</strong> ทุนจมและเสียโอกาสสร้างยอดขายไปอย่างน่าเสียดาย
            </p>

            <div className="pt-4 border-t border-amber-500/20 space-y-2 text-xs text-amber-300/90">
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                ต้นทุนสูงลิ่ว เอเจนซี่คิดราคาที่พ่อค้าแม่ค้าจ่ายไม่ไหว
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                รอเก็บเกี่ยวนานเกินไปจนตลาดเปลี่ยน สินค้าหลุดเทรนด์
              </p>
            </div>
          </div>
        </div>

        {/* The Solution: จุดเปลี่ยนประวัติศาสตร์ด้วย AI Assistance + SalesDesk */}
        <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-tr from-blue-950/50 via-slate-900/90 to-indigo-950/50 p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="space-y-6 max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold">
              <Sparkles className="h-4 w-4 text-sky-400" />
              THE AI REVOLUTION IS HERE
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              ยุคแห่งการปลดล็อก: SalesDesk AI ร่วมกับ AI Assistance<br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                ขุดรากถอนโคนปัญหาการตลาดออนไลน์ ให้ทุกคนเข้าถึงได้แล้ววันนี้!
              </span>
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              เราไม่ได้แค่สร้างเซลเพจปิดการขาย 16:9 สปีด 0.8 วิ แต่เราติดตั้ง <strong>"เครื่องจักรผลิตทราฟฟิกฟรีจาก Google"</strong> ระดับ Enterprise ที่เขียนบทความภาษาไทย 1,500+ คำด้วย AI ใน 5 วินาที พร้อมส่งสัญญาณให้ Googlebot เข้ามาดูดดัชนีภายใน <strong>5–15 นาที</strong> ไม่ต้องรอ 6–12 เดือนอีกต่อไป!
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase">
                  <Zap className="h-4 w-4" /> ไวกว่าเดิม 100 เท่า
                </div>
                <p className="text-sm font-bold text-white mt-1">Googlebot ดัชนีด่วน 5–15 นาที</p>
                <p className="text-xs text-slate-400 mt-1">
                  ผ่าน Google Instant Indexing API v3 ตัดรอบเวลาจากหลายสัปดาห์เหลือไม่กี่นาที
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase">
                  <Globe className="h-4 w-4" /> AI สปีดเหนือมนุษย์
                </div>
                <p className="text-sm font-bold text-white mt-1">บทความ 1,500+ คำใน 5 วินาที</p>
                <p className="text-xs text-slate-400 mt-1">
                  โครงสร้างจิตวิทยา Semantic HTML, ตารางเปรียบเทียบ, และ FAQ Schema อัตโนมัติ
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
                  <ShieldCheck className="h-4 w-4" /> พ่อค้าแม่ค้าเอื้อมถึง
                </div>
                <p className="text-sm font-bold text-white mt-1">ประหยัดค่าเอเจนซี่หลักแสน</p>
                <p className="text-xs text-slate-400 mt-1">
                  ให้ธุรกิจไซส์เล็กมีเทคโนโลยีเทียบเท่าแบรนด์ใหญ่ ดึงลูกค้ากำลังซื้อสูงเข้าฟรี 24 ชม.
                </p>
              </div>
            </div>

            {/* The Ultimate Call to Action */}
            <div className="pt-8 space-y-4">
              <p className="text-lg sm:text-xl font-black text-amber-400">
                "อย่าปล่อยให้โอกาสทองในยุค AI ครั้งนี้หลุดมือจนเข้าไม่ถึงอีกต่อไป..."
              </p>
              <p className="text-xl sm:text-2xl font-black text-white">
                ทางเดียวตอนนี้คือ <span className="underline decoration-blue-500 decoration-4">ลุย!!</span> ซิครับ จะรออะไร? 🔥
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <TrackableLineButton
                  href="https://line.me/R/ti/p/@fhu6688s?text=สนใจขอชมเดโมระบบ_SalesDesk_SEO_Command_Center_ครับ"
                  buttonName="seo_demo_cta_line"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/25 transition transform hover:-translate-y-0.5 active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  ขอชมเดโมระบบจริง &amp; ปรึกษาผู้เชี่ยวชาญผ่าน LINE
                </TrackableLineButton>

                <a
                  href="#pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-white font-bold text-base transition"
                >
                  ดูแพ็กเกจเซลเพจ + ระบบ AI SEO <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
