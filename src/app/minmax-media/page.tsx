'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneCall,
  MessageCircle,
  TrendingUp,
  Award,
  CheckCircle2,
  Send,
  Star,
  Zap,
  Sparkles,
  BarChart3,
  Target,
  Video,
  PenTool,
  Users,
  Share2,
  Megaphone,
  ChevronDown,
  Check,
  ShieldCheck,
  Clock,
  ArrowRight,
  ExternalLink,
  Layers,
  Menu,
  X,
  Sliders,
  DollarSign,
  HelpCircle,
  Briefcase,
  Play,
} from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import TrackableLineButton from '@/components/TrackableLineButton';

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LineIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.084.495.242l2.482 3.37V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

export default function MinMaxMediaSalepage() {
  // Official Contact Credentials & Verified Endpoints
  const lineUrl = 'https://line.me/R/ti/p/%40malakor';
  const lineId = '@malakor';
  const fbPageUrl = 'https://www.facebook.com/MinmaxMediaAgency';
  const fbMessengerUrl = 'https://m.me/MinmaxMediaAgency';
  const phoneConsult = '081-772-6444';
  const phoneRaw = '0817726444';

  // Interactive Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessName: '',
    serviceInterest: 'รับทำการตลาดครบวงจร (Full-Service 360°)',
    monthlyBudget: '50,000 - 100,000 บาท/เดือน',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Structured Data Schema for Search Engines (LocalBusiness / Agency)
  const agencySchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MinMax Media Event Agency',
    alternateName: 'MINMAX MEDIA',
    url: 'https://sites.salesdesk-ai.com/minmax-media',
    logo: 'https://sites.salesdesk-ai.com/images/minmax/minmax-logo-round.png',
    image: 'https://sites.salesdesk-ai.com/images/minmax/hero-16-9.jpg',
    telephone: '+66817726444',
    priceRange: '฿฿฿',
    description:
      'รับทำการตลาดครบวงจร พร้อมปั้นแบรนด์ วางกลยุทธ์ ผลิตสื่อโปรดักชั่น กราฟิกดีไซน์ คอนเทนต์ครีเอเตอร์ อินฟลูเอนเซอร์ KOL/KOC ดูแลเพจโซเชียลมีเดีย และยิงแอดสร้างยอดขาย',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
      addressLocality: 'Bangkok',
    },
    sameAs: [
      'https://www.facebook.com/MinmaxMediaAgency',
      'https://line.me/R/ti/p/%40malakor',
    ],
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('กรุณากรอกชื่อและเบอร์โทรศัพท์ติดต่อกลับครับ');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          modelInterest: `${formData.businessName} - ${formData.serviceInterest}`,
          serviceType: formData.monthlyBudget,
          notes: formData.notes,
          pageSource: 'MinMax Media Agency Salepage',
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาติดต่อทาง LINE @malakor โดยตรงครับ');
      }
    } catch (err) {
      console.error(err);
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้งครับ');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 6 Core Pillars from Official Facebook Cover
  const coreServices = [
    {
      id: 'marketing-strategy',
      title: 'Marketing Strategy',
      subtitle: 'วางกลยุทธ์การตลาดรอบด้าน',
      icon: Target,
      tag: 'เสาหลักที่ 1',
      accent: 'from-emerald-400 to-teal-500',
      description:
        'เจาะลึกตลาด ค้นหาจุดแข็งที่แตกต่าง (USP) ของแบรนด์ วิเคราะห์กลุ่มลูกค้าเป้าหมาย (Customer Persona) วาง Funnel ยอดขายตั้งแต่การรับรู้จนถึงการซื้อซ้ำ ไม่ต้องลองผิดลองถูก',
      highlights: [
        'วิเคราะห์คู่แข่งและการวางตำแหน่งแบรนด์ในตลาด (Brand Positioning)',
        'ออกแบบ Customer Journey & Funnel การปิดการขาย',
        'วางแผนงบประมาณการตลาดให้ได้ผลตอบแทน (ROI) สูงสุด',
        'กำหนดตัวชี้วัด KPI รายสัปดาห์และรายเดือนอย่างโปร่งใส',
      ],
    },
    {
      id: 'production',
      title: 'Production',
      subtitle: 'ออกแบบกราฟิก / ตัดต่อวิดีโอ',
      icon: Video,
      tag: 'เสาหลักที่ 2',
      accent: 'from-cyan-400 to-blue-500',
      description:
        'ผลิตสื่อคุณภาพระดับพรีเมียม สตูดิโอโปรดักชั่นมืออาชีพ ถ่ายทำวิดีโอโฆษณา ตัดต่อคลิปสั้น Reels / TikTok / Shorts ดึงดูดสายตาตั้งแต่ 3 วินาทีแรก พร้อมงานกราฟิก Key Visual ที่ยกระดับภาพลักษณ์แบรนด์',
      highlights: [
        'ถ่ายทำและตัดต่อวิดีโอสั้นเน้นยอดขาย (Short-Form Conversion Video)',
        'ออกแบบ Infographic & Product Key Visual ดึงดูดสายตา',
        'Motion Graphic & 3D Visual Effects เพิ่มมูลค่าสินค้า',
        'คุมโทนภาพลักษณ์แบรนด์ (Brand Guidelines) ให้หรูหรา น่าเชื่อถือ',
      ],
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      subtitle: 'ผลิตสื่อคอนเทนต์สร้างยอดขาย',
      icon: PenTool,
      tag: 'เสาหลักที่ 3',
      accent: 'from-teal-400 to-emerald-600',
      description:
        'คิดคอนเทนต์ที่เปลี่ยนผู้ติดตามให้กลายเป็นลูกค้า ไม่ใช่แค่คอนเทนต์ไลก์เยอะ แต่เป็นคอนเทนต์ที่ปิดการขายได้จริง สร้าง Storytelling เชื่อมโยงอารมณ์ และเขียนแคปชันสะกดจิตดึงดูดใจ',
      highlights: [
        'วาง Content Calendar ล่วงหน้า ตอบโจทย์ทุกช่วงเวลา',
        'เขียนคำโฆษณา (Sales Copywriting) ที่หยุดนิ้วโป้ง',
        'คอนเทนต์เจาะ Pain Point และขยี้ผลลัพธ์ที่ลูกค้าจะได้รับ',
        'สคริปต์วิดีโอสำหรับผู้บริหาร/เจ้าของแบรนด์ พูดแล้วน่าเชื่อถือ',
      ],
    },
    {
      id: 'influencer',
      title: 'Influencer / KOL / KOC',
      subtitle: 'เครือข่ายอินฟลูเอนเซอร์ทรงพลัง',
      icon: Users,
      tag: 'เสาหลักที่ 4',
      accent: 'from-amber-400 to-orange-500',
      description:
        'คัดเลือกและบริหารจัดการอินฟลูเอนเซอร์ทุกระดับ (Mega, Macro, Micro, Nano KOC) ที่ตรงกลุ่มเป้าหมาย รีวิวเป็นธรรมชาติ ไม่ปลอม ช่วยสร้างความไว้วางใจและเร่งสปีดการตัดสินใจซื้ออย่างรวดเร็ว',
      highlights: [
        'คัดกรอง Engagement จริง ป้องกันการปั๊มยอดผู้ติดตาม',
        'บรีฟและตรวจงานละเอียด ให้สื่อสารจุดขายของแบรนด์ครบถ้วน',
        'ขอลิขสิทธิ์ภาพและคลิปเพื่อนำไปยิงแอด Whitelisting ต่อได้ทันที',
        'บริหารจัดการงบประมาณค่าตัวอินฟลูฯ ให้คุ้มค่าที่สุด',
      ],
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      subtitle: 'ดูแลโซเชียลมีเดียครบวงจร',
      icon: Share2,
      tag: 'เสาหลักที่ 5',
      accent: 'from-blue-400 to-indigo-500',
      description:
        'บริหารจัดการแพลตฟอร์มโซเชียลมีเดียของแบรนด์แบบเบ็ดเสร็จ ทั้ง Facebook, TikTok, Instagram, Lemon8 และ LINE OA โพสต์สม่ำเสมอ ตอบคอมเมนต์ ตอบแชทลูกค้า รวดเร็ว อบอุ่น และปิดการขายอย่างมืออาชีพ',
      highlights: [
        'ดูแลโพสต์สม่ำเสมอทุกวันตามแผนงานกลยุทธ์',
        'ทีมแอดมินตอบแชทสุภาพ รวดเร็ว ปิดการขายเก่ง',
        'ติดตั้งระบบตอบกลับอัตโนมัติ (Chatbot & Quick Reply)',
        'มอนิเตอร์รีวิวและดูแลภาพลักษณ์แบรนด์ (Community Care)',
      ],
    },
    {
      id: 'ads-optimization',
      title: 'ADS กลยุทธ์แอดโฆษณา',
      subtitle: 'ยิงแอดแม่นยำ วัดผล ROI จริง',
      icon: Megaphone,
      tag: 'เสาหลักที่ 6',
      accent: 'from-emerald-300 to-green-500',
      description:
        'บริหารงบประมาณโฆษณาอย่างชาญฉลาดบน Facebook Ads, TikTok Ads และ Google Ads ยิงตรงถึงกลุ่มคนที่พร้อมซื้อ วัดผล Conversion & ROAS คุ้มค่าทุกบาท ไม่เผางบกับทราฟฟิกที่ไม่มีคุณภาพ',
      highlights: [
        'ติดตั้ง Conversion API & Pixel Tracking เพื่อความแม่นยำ 100%',
        'ทดสอบ A/B Testing ครีเอทีฟและกลุ่มเป้าหมายต่อเนื่อง',
        'กลยุทธ์ Retargeting ต้อนลูกค้าที่เคยสนใจให้กลับมาสั่งซื้อ',
        'รายงานตัวเลขผลลัพธ์ Dashboard รายสัปดาห์ เข้าใจง่าย ไม่ซับซ้อน',
      ],
    },
  ];

  // 4-Step Working Blueprint
  const executionSteps = [
    {
      step: '01',
      title: 'Discovery & Brand Audit',
      desc: 'วิเคราะห์สินค้า จุดแข็ง คู่แข่ง และกลุ่มเป้าหมาย หาแก่นแท้ของแบรนด์เพื่อวางรากฐานที่แข็งแกร่งที่สุด',
    },
    {
      step: '02',
      title: 'Strategy & Content Blueprint',
      desc: 'จัดทำแผนกลยุทธ์รอบด้าน แผนคอนเทนต์รายเดือน พร้อมงบประมาณและการวัดผล KPI ชัดเจน',
    },
    {
      step: '03',
      title: 'Production & Campaign Launch',
      desc: 'ทีมโปรดักชั่นถ่ายทำ ตัดต่อ ดีไซน์กราฟิก และปล่อยแคมเปญโฆษณาเจาะกลุ่มเป้าหมายทันที',
    },
    {
      step: '04',
      title: 'Optimize & Scale Up',
      desc: 'วัดผลแบบเรียลไทม์ ปรับแต่งแอดให้ต้นทุนลดลง ขยายสเกลยอดขายให้เติบโตอย่างมั่นคง',
    },
  ];

  // Industry Success Showcase
  const industryCases = [
    {
      name: 'ความงาม & สกินแคร์ (Beauty & Clinic)',
      result: 'ROAS 6.8x • ยอดขายเติบโต 320%',
      desc: 'ปั้นคลิปไวรัล TikTok ผสาน KOC 50+ คน สร้างกระแสสินค้าขาดตลาดภายใน 2 สัปดาห์แรก',
      tag: 'Case Study 01',
    },
    {
      name: 'อาหาร เครื่องดื่ม & คาเฟ่ (F&B)',
      result: 'ยอดวิวรวม 4.2M • ลูกค้าแน่นร้าน',
      desc: 'ถ่ายทำวิดีโอสตอรี่และดึงดูดนักชิมในพื้นที่ด้วย Local Targeting เพิ่มยอดขายหน้าร้านและเดลิเวอรี่',
      tag: 'Case Study 02',
    },
    {
      name: 'อสังหาฯ & รถยนต์ (Automotive / Property)',
      result: 'Lead ปิดการขายคุณภาพ 140+ ราย',
      desc: 'ผลิตสื่อหรูหรา 16:9 ดึงดูดลูกค้าระดับผู้บริหาร พร้อมวาง Sales Funnel กรองลูกค้าที่มีกำลังซื้อจริง',
      tag: 'Case Study 03',
    },
    {
      name: 'แฟชั่น & สินค้าไลฟ์สไตล์ (Fashion)',
      result: 'เพิ่มอัตราซื้อซ้ำ 48% • แฟนเพจโต 2.5 เท่า',
      desc: 'สร้าง Mood & Tone แบรนด์ระดับสากล ยิงแอดแคตตาล็อก Dynamic Retargeting ยอดขายไหลต่อเนื่อง',
      tag: 'Case Study 04',
    },
  ];

  const faqs = [
    {
      q: 'MinMax Media ดูแลอะไรให้บ้าง ต้องมีพนักงานของตัวเองไหม?',
      a: 'เราดูแลให้ครบวงจรแบบ One-Stop Agency ตั้งแต่การวางกลยุทธ์, ผลิตสื่อภาพและวิดีโอ, จัดหาอินฟลูเอนเซอร์, บริหารเพจ ตลอดจนยิงแอดและรายงานผล เจ้าของแบรนด์ไม่ต้องมีทีมกราฟิกหรือตัดต่อในบริษัท ช่วยประหยัดค่าใช้จ่ายและได้ทีมผู้เชี่ยวชาญระดับหัวกะทิทำงานให้ทันทีครับ',
    },
    {
      q: 'แบรนด์เพิ่งเริ่มต้น ไม่มีฐานแฟนคลับ สามารถร่วมงานได้ไหม?',
      a: 'ยินดีเป็นอย่างยิ่งครับ บริการของเราคือ "พร้อมปั้นแบรนด์" ทีมงานจะช่วยวางโครงสร้างตั้งแต่ Brand DNA, การสร้างความน่าเชื่อถือ, และปั้นยอดขายแรกให้เกิดขึ้นอย่างรวดเร็ว โดยไม่จำเป็นต้องมีผู้ติดตามเยอะมาก่อนครับ',
    },
    {
      q: 'การยิงแอดกับ MinMax ต่างจากการยิงแอดเองอย่างไร?',
      a: 'เราผสาน "งานโปรดักชั่นครีเอทีฟชั้นเลิศ" เข้ากับ "กลยุทธ์ Data & Funnel" การยิงแอดเองส่วนใหญ่มักตันที่ชิ้นงานเดิมๆ และงบเผาไปกับกลุ่มเป้าหมายซ้ำ แต่ทีมของเราทดสอบ Creative A/B Testing ตลอดเวลา ปรับแต่งตามสัญญาณ Conversion API ทำให้ได้ต้นทุนต่อการซื้อที่ถูกลงและยอดขายสูงขึ้นอย่างมีนัยสำคัญครับ',
    },
    {
      q: 'ระยะเวลาการเริ่มงานและส่งมอบชิ้นงานใช้เวลานานเท่าไร?',
      a: 'หลังจากบรีฟงานและอนุมัติแผนกลยุทธ์ ทีมงานจะเริ่มส่งมอบ Content Plan ภายใน 3-5 วันทำการ และเริ่มรันแคมเปญแรกได้ภายในสัปดาห์แรกทันทีครับ',
    },
    {
      q: 'มีการรายงานผลการทำงานบ่อยแค่ไหน?',
      a: 'เรามีรายงานสรุปภาพรวม Performance Dashboard ส่งให้ทุกสัปดาห์ พร้อมการประชุมรีวิวกลยุทธ์รายเดือนแบบตัวต่อตัวอย่างใกล้ชิด เพื่อวางทิศทางและขยายสเกลยอดขายในเดือนถัดไปครับ',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black pb-28 sm:pb-32 lg:pb-16 relative overflow-x-hidden">
      {/* Schema Structured Data for SEO */}
      <StructuredData data={agencySchema} />

      {/* BACKGROUND LUXURY AMBIENCE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 1. TOP ANNOUNCEMENT & VERIFICATION BAR */}
      <div className="relative z-50 bg-gradient-to-r from-emerald-950/80 via-slate-900/90 to-teal-950/80 border-b border-emerald-500/20 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
              ONLINE AGENCY
            </span>
            <span className="hidden sm:inline text-slate-300">
              MinMax Media Event Agency — เปิดรับโปรเจกต์ปั้นแบรนด์ใหม่ พร้อมเริ่มงานทันที
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={fbPageUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition"
            >
              <FacebookIcon className="w-3.5 h-3.5 fill-blue-400" />
              <span className="hidden md:inline">ผู้ติดตาม 1.5 พันคน</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition"
            >
              <LineIcon className="w-3.5 h-3.5 fill-emerald-400" />
              <span>LINE: {lineId}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo & Agency Name */}
          <Link href="/minmax-media" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-emerald-500/40 shadow-lg shadow-emerald-500/20 group-hover:border-emerald-400 transition">
              <Image
                src="/images/minmax/minmax-logo-round.png"
                alt="MinMax Media Agency Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-400 transition">
                  MINMAX MEDIA
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  AGENCY
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium line-clamp-1">
                รับทำการตลาดครบวงจร พร้อมปั้นแบรนด์
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-emerald-400 transition">
              6 บริการหลัก
            </a>
            <a href="#auto-dealer-hero" className="hover:text-emerald-400 transition">
              สไตล์ Auto Dealer
            </a>
            <a href="#workflow" className="hover:text-emerald-400 transition">
              ขั้นตอนทำงาน
            </a>
            <a href="#cases" className="hover:text-emerald-400 transition">
              ผลงานที่ผ่านมา
            </a>
            <a href="#consult-form" className="hover:text-emerald-400 transition">
              ขอรับคำปรึกษาฟรี
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition">
              คำถามที่พบบ่อย
            </a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-xs transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>{phoneConsult}</span>
            </a>
            <TrackableLineButton
              href={lineUrl}
              buttonName="header_consult_line"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition active:scale-95"
            >
              <LineIcon className="w-4 h-4 fill-slate-950" />
              <span>ปรึกษากลยุทธ์แบรนด์ฟรี</span>
            </TrackableLineButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold border-b border-slate-900"
            >
              • 6 บริการหลักครบวงจร
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold border-b border-slate-900"
            >
              • 4 ขั้นตอนการทำงานที่เป็นระบบ
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold border-b border-slate-900"
            >
              • เคสตัวอย่างความสำเร็จ
            </a>
            <a
              href="#consult-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold border-b border-slate-900"
            >
              • ลงทะเบียนปรึกษาทีมกลยุทธ์
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold"
            >
              • คำถามที่พบบ่อย (FAQ)
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <TrackableLineButton
                href={lineUrl}
                className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-center text-xs flex items-center justify-center gap-1.5"
              >
                <LineIcon className="w-4 h-4 fill-slate-950" />
                แอดไลน์ @malakor ปรึกษาฟรี
              </TrackableLineButton>
              <a
                href={fbPageUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-center text-xs flex items-center justify-center gap-1.5"
              >
                <FacebookIcon className="w-3.5 h-3.5 fill-blue-400" />
                เยี่ยมชมแฟนเพจ MinMax Media
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (16:9 AUTO DEALER SHOWCASE - ZERO OVERLAPPING ON MOBILE) */}
      <section
        id="auto-dealer-hero"
        className="relative pt-6 sm:pt-10 pb-12 sm:pb-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Top Trust Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Full-Service Digital Marketing House</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>การันตีประสบการณ์ปั้นแบรนด์จริง</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
              <span>ผู้ติดตาม 1,500+ คน บน Facebook</span>
            </div>
          </div>

          {/* MAIN HERO SPLIT / AUTO DEALER ARCHITECTURE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* MOBILE ONLY: 16:9 BANNER PLACED FIRST WITH ZERO OBSCURATION */}
            {/* On mobile screens, the 16:9 Auto Dealer banner stands completely clear, unobstructed by any text or buttons */}
            <div className="block lg:hidden col-span-12 w-full">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl shadow-emerald-950/60 bg-slate-900">
                <Image
                  src="/images/minmax/hero-16-9.jpg"
                  alt="MinMax Media รับทำการตลาดครบวงจร พร้อมปั้นแบรนด์ สไตล์ Auto Dealer 16:9"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
                {/* Subtle corner badge for Auto Dealer touch without hiding key image areas */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-emerald-400/30 text-[10px] font-bold text-emerald-300">
                  16:9 CINEMATIC HERO
                </div>
              </div>
              <p className="text-center text-[11px] text-slate-400 mt-2 font-medium">
                ภาพ 16:9 เต็มตา คมชัดทุกรายละเอียด ไม่โดนข้อความบังบนจอมือถือ
              </p>
            </div>

            {/* LEFT / HERO CONTENT: Value Props & Headline */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.25]">
                  <span className="block">MINMAX MEDIA</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-400 block text-2xl sm:text-3xl lg:text-4xl mt-1">
                    รับทำการตลาดครบวงจร
                  </span>
                  <span className="block text-xl sm:text-2xl text-slate-200 font-semibold mt-1">
                    พร้อมปั้นแบรนด์สู่ยอดขาย 8 หลัก
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                  หยุดเสียเงินลองผิดลองถูกกับการยิงแอดที่ไม่ได้ผล เราคือเอเจนซี่การตลาดและอีเวนต์ตัวจริงที่ดูแลครบทั้ง 
                  <strong className="text-emerald-400 font-semibold"> วางกลยุทธ์ • ผลิตสื่อโปรดักชั่น • ปั้นคอนเทนต์ • ดีลอินฟลูฯ • ดูแลเพจ • ยิงแอดวัดผล ROI จริง</strong>
                </p>
              </div>

              {/* 6 Core Pill Badges (Auto Dealer Spec Style) */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-emerald-500/25 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Marketing Strategy
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-cyan-500/25 text-cyan-300 text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Production วิดีโอ/กราฟิก
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-teal-500/25 text-teal-300 text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Content Creation
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-500/25 text-amber-300 text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Influencer / KOL / KOC
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-blue-500/25 text-blue-300 text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400" /> Social Media Management
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-green-500/25 text-green-300 text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-green-400" /> ADS กลยุทธ์แอดโฆษณา
                </span>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full">
                <TrackableLineButton
                  href={lineUrl}
                  buttonName="hero_cta_line"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm sm:text-base text-center shadow-xl shadow-emerald-500/25 active:scale-95 transition flex items-center justify-center gap-2"
                >
                  <LineIcon className="w-5 h-5 fill-slate-950" />
                  <span>ปรึกษาวางแผนการตลาดฟรีทาง LINE</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </TrackableLineButton>

                <a
                  href="#consult-form"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700/80 hover:border-emerald-400/40 text-center transition flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span>ลงทะเบียนรับข้อเสนอพิเศษ</span>
                </a>
              </div>

              {/* Quick Proof Counters */}
              <div className="pt-3 grid grid-cols-3 gap-3 border-t border-slate-800/80 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">ดูแลครบทุกขั้นตอน</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">4.5x - 12x</div>
                  <div className="text-[11px] text-slate-400 font-medium">ROAS ยอดขายเฉลี่ย</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">500+</div>
                  <div className="text-[11px] text-slate-400 font-medium">ชิ้นงานโปรดักชั่นสำเร็จ</div>
                </div>
              </div>
            </div>

            {/* DESKTOP ONLY: 16:9 AUTO DEALER FRAME (WIDESCREEN SHOWCASE) */}
            <div className="hidden lg:block lg:col-span-6">
              <div className="relative group">
                {/* Emerald ambient backlight */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

                {/* 16:9 Frame Container */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/80 bg-slate-950">
                  <Image
                    src="/images/minmax/hero-16-9.jpg"
                    alt="MinMax Media Event Agency 16:9 Auto Dealer Hero"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition duration-700"
                  />

                  {/* High-Tech Auto Dealer Watermark & Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>MINMAX SHOWROOM 16:9</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Auto Dealer Cinematic Standard</span>
                  </div>
                </div>
              </div>

              {/* Verified Facebook Card Meta */}
              <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <FacebookIcon className="w-4 h-4 fill-blue-500" />
                  <span>เพจทางการ: <strong>MinMax Media Event Agency รับทำการตลาดครบวงจร</strong></span>
                </div>
                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1"
                >
                  <span>ดูเพจจริง</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PAIN POINTS VS MINMAX ADVANTAGE */}
      <section className="py-12 sm:py-16 bg-slate-950/80 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              WHY 90% OF BRANDS BURN MONEY ON ADS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              ทำไมยิงแอดตั้งเยอะ แต่ยอดขายกลับไม่โต?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              ปัญหาไม่ได้อยู่ที่ตัวระบบแอด แต่อยู่ที่ <strong>“ขาดกลยุทธ์ที่เชื่อมโยงกันอย่างเป็นระบบ”</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* The Old Painful Way */}
            <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/15 border border-rose-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center font-bold">
                  ✕
                </div>
                <h3 className="text-lg font-bold text-white">ปัญหาการตลาดออนไลน์แบบเดิมๆ</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span><strong>จ้างแยกคนละทาง:</strong> จ้างกราฟิกเจ้าหนึ่ง คนยิงแอดเจ้าหนึ่ง คอนเทนต์คนละทิศทาง งานไม่สอดคล้องกัน</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span><strong>คอนเทนต์ไม่ดึงดูด:</strong> งานภาพนิ่งแบบเดิมๆ คนเลื่อนผ่านใน 1 วินาที ไม่สร้างอารมณ์อยากซื้อ</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span><strong>ยิงแอดแบบเผางบ:</strong> อัดงบไปเรื่อยๆ โดยไม่มีการเซ็ต Conversion Funnel และไม่รู้ว่าเม็ดเงินหายไปไหน</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span><strong>แอดมินตอบช้า ตอบไม่เป็น:</strong> ทราฟฟิกเข้ามาแต่ไม่มีคนปิดการขาย เสียโอกาสทองของธุรกิจ</span>
                </li>
              </ul>
            </div>

            {/* The MinMax Media Solution */}
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4 shadow-xl shadow-emerald-950/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white">ทางแก้ที่สมบูรณ์แบบด้วย MinMax Media</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span><strong>One-Stop House:</strong> มีทีมงานประจำครบทุกฟังก์ชัน ประชุมวางแผนเป็นอันหนึ่งอันเดียวกัน</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span><strong>High-Converting Production:</strong> วิดีโอสั้นและงาน Key Visual ระดับไฮเอนด์ หยุดนิ้วโป้งคนดูทันที</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span><strong>Data-Driven Performance Ads:</strong> ยิงแอดแบบวัดผล ROAS จริง ไม่ใช่แค่ยอดไลก์ แต่เน้นยอดเงินในบัญชี</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span><strong>Professional Care:</strong> บริหารจัดการเพจ สรุปรายงานรายสัปดาห์ พร้อมเป็นพาร์ทเนอร์เคียงข้างเจ้าของแบรนด์</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 6 CORE CAPABILITIES (DETAILED SERVICE BREAKDOWN) */}
      <section id="services" className="py-14 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>ครบวงจร 360 องศา</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              6 บริการหลัก เสาหลักความสำเร็จของแบรนด์
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              ถอดรหัสจากปกเพจทางการ MinMax Media สู่การปฏิบัติงานจริงที่สร้างผลลัพธ์เป็นรูปธรรม
            </p>
          </div>

          {/* Interactive Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/50 group"
                >
                  <div className="space-y-4">
                    {/* Header: Icon + Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:border-emerald-500/50 flex items-center justify-center text-emerald-400 transition">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {service.tag}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                      {service.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-800/60">
                    <TrackableLineButton
                      href={lineUrl}
                      buttonName={`service_click_${service.id}`}
                      className="w-full py-2.5 rounded-xl bg-slate-800/90 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition"
                    >
                      <span>ขอคำแนะนำบริการนี้</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </TrackableLineButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PROVEN 4-STEP WORKFLOW BLUEPRINT */}
      <section id="workflow" className="py-14 sm:py-20 bg-slate-950/60 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              STRUCTURED WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              4 ขั้นตอนการทำงานที่เป็นระบบ มั่นใจในทุกผลงาน
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              ทำงานรวดเร็ว โปร่งใส และพร้อมรายงานความคืบหน้าในทุกสเตป
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition duration-300 space-y-3"
              >
                <div className="text-4xl font-black text-emerald-500/30">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRY CASE STUDIES & RESULTS */}
      <section id="cases" className="py-14 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              PROVEN TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              ตัวอย่างความสำเร็จในหลากหลายกลุ่มธุรกิจ
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              ไม่ว่าธุรกิจของคุณจะอยู่ในอุตสาหกรรมใด เราพร้อมวิเคราะห์และสร้างสูตรสำเร็จเฉพาะคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryCases.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-teal-500/40 transition space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {item.tag}
                  </span>
                  <span className="text-xs font-black text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    {item.result}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE VIP LEAD & CONSULTATION BOOKING FORM */}
      <section id="consult-form" className="py-14 sm:py-20 bg-slate-950 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl shadow-emerald-950/60 relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto space-y-2 mb-8 sm:mb-10">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-bold inline-block">
                FREE BRAND CONSULTATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                ขอรับคำปรึกษากลยุทธ์แบรนด์ & ใบเสนอราคาฟรี
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                กรอกข้อมูลเบื้องต้นเพื่อให้ทีมกลยุทธ์ของ MinMax Media ทำการบ้านและติดต่อกลับภายใน 24 ชม.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">ได้รับข้อมูลของคุณเรียบร้อยแล้วครับ</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  ทีมที่ปรึกษากลยุทธ์ MinMax Media กำลังวิเคราะห์ข้อมูลและจะติดต่อกลับโดยเร็วที่สุด หรือสามารถแอด LINE เพื่อทักคุยได้ทันที
                </p>
                <div className="pt-2">
                  <TrackableLineButton
                    href={lineUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/30"
                  >
                    <LineIcon className="w-4 h-4 fill-slate-950" />
                    <span>ทัก LINE @malakor ด่วน</span>
                  </TrackableLineButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      ชื่อ-นามสกุล / ผู้ติดต่อ <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="เช่น คุณสมชาย มุ่งมั่น"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      เบอร์โทรศัพท์ติดต่อ <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="เช่น 081-xxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      ชื่อแบรนด์ / เพจธุรกิจ หรือลิงก์เพจ
                    </label>
                    <input
                      type="text"
                      placeholder="เช่น แบรนด์ครีม A / เพจร้านอาหาร B"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      บริการที่สนใจเป็นพิเศษ
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    >
                      <option value="รับทำการตลาดครบวงจร (Full-Service 360°)">รับทำการตลาดครบวงจร (Full-Service 360°)</option>
                      <option value="ยิงแอดวัดผล ROI (Performance Ads)">ยิงแอดวัดผล ROI (Performance Ads)</option>
                      <option value="โปรดักชั่นวิดีโอ & กราฟิก (Production)">โปรดักชั่นวิดีโอ & กราฟิก (Production)</option>
                      <option value="คอนเทนต์ครีเอเตอร์ & ดูแลเพจ">คอนเทนต์ครีเอเตอร์ & ดูแลเพจ</option>
                      <option value="ดีลอินฟลูเอนเซอร์ KOL / KOC">ดีลอินฟลูเอนเซอร์ KOL / KOC</option>
                      <option value="จัดงาน Event & การตลาดเปิดตัว">จัดงาน Event & การตลาดเปิดตัว</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    งบประมาณการตลาดโดยประมาณต่อเดือน
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                  >
                    <option value="30,000 - 50,000 บาท/เดือน">30,000 - 50,000 บาท/เดือน</option>
                    <option value="50,000 - 100,000 บาท/เดือน">50,000 - 100,000 บาท/เดือน</option>
                    <option value="100,000 - 300,000 บาท/เดือน">100,000 - 300,000 บาท/เดือน</option>
                    <option value="300,000+ บาท/เดือน (Enterprise)">300,000+ บาท/เดือน (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    เป้าหมายที่ต้องการให้ MinMax Media ช่วยเหลือ
                  </label>
                  <textarea
                    rows={3}
                    placeholder="เช่น ต้องการเพิ่มยอดขายจากเดิม 2 เท่า, ต้องการยกระดับภาพลักษณ์แบรนด์ให้พรีเมียม ฯลฯ"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/25 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-5 h-5 text-slate-950" />
                  <span>{isSubmitting ? 'กำลังส่งข้อมูล...' : 'ส่งข้อมูลเพื่อรับการวิเคราะห์กลยุทธ์ฟรี'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section id="faq" className="py-14 sm:py-20 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              คำถามที่พบบ่อย
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              ข้อสงสัยทั่วไปก่อนเริ่มต้นร่วมงานกับ MinMax Media
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-emerald-400 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. PRE-FOOTER CTA BANNER */}
      <section className="py-12 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border-t border-emerald-500/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            พร้อมปั้นแบรนด์ของคุณสู่ความสำเร็จแล้วหรือยัง?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            พูดคุยกับทีมกลยุทธ์ MinMax Media เพื่อรับคำแนะนำที่ตรงจุด ไม่มีค่าใช้จ่ายล่วงหน้า
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <TrackableLineButton
              href={lineUrl}
              buttonName="prefooter_line"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/30 transition flex items-center gap-2"
            >
              <LineIcon className="w-5 h-5 fill-slate-950" />
              <span>แอด LINE: {lineId}</span>
            </TrackableLineButton>
            <a
              href={fbPageUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition flex items-center gap-2"
            >
              <FacebookIcon className="w-4 h-4 fill-blue-400" />
              <span>ทักแชต Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-slate-950 border-t border-white/5 py-8 text-xs text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-500/30">
              <Image
                src="/images/minmax/minmax-logo-round.png"
                alt="MinMax Media"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-slate-300 font-bold">MinMax Media Event Agency</div>
              <div className="text-[11px]">รับทำการตลาดครบวงจร พร้อมปั้นแบรนด์</div>
            </div>
          </div>
          <div>
            © {new Date().getFullYear()} MinMax Media Agency. Powered by{' '}
            <Link href="/" className="text-emerald-400 hover:underline">
              SalesDesk Sites
            </Link>
          </div>
        </div>
      </footer>

      {/* 12. SALESDESK STANDARD FIXED MOBILE ACTION BAR (FLOATING STICKY CONVERSION BAR) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 sm:px-4 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call Hotline */}
          <a
            href={`tel:${phoneRaw}`}
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700/80 transition active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>โทรด่วน</span>
          </a>

          {/* Facebook Messenger */}
          <a
            href={fbMessengerUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition active:scale-95"
          >
            <FacebookIcon className="w-4 h-4 fill-white" />
            <span>ทักแชตเพจ</span>
          </a>

          {/* Official LINE OA (Main Conversion Target) */}
          <TrackableLineButton
            href={lineUrl}
            buttonName="mobile_sticky_line"
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/30 transition active:scale-95"
          >
            <LineIcon className="w-4 h-4 fill-slate-950" />
            <span>แอด LINE</span>
          </TrackableLineButton>
        </div>
      </div>

    </div>
  );
}
