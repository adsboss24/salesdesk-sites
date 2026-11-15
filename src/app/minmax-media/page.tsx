'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneCall,
  TrendingUp,
  CheckCircle2,
  Send,
  Star,
  Target,
  Video,
  PenTool,
  Users,
  Share2,
  Megaphone,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Layers,
  Menu,
  X,
  Calendar,
  BookOpen,
  Clock,
  Sparkles,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import TrackableLineButton from '@/components/TrackableLineButton';
import { getAllMinMaxPosts } from '@/lib/minmax-posts';

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
  const lineId = 'MINMAX MEDIA';
  const fbPageUrl = 'https://www.facebook.com/MinmaxMediaAgency';
  const fbMessengerUrl = 'https://m.me/MinmaxMediaAgency';

  const articles = getAllMinMaxPosts();

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
    image: 'https://sites.salesdesk-ai.com/images/minmax/hero-minimal-premium.jpg',
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

  // Articles ItemList Schema for SEO Rich Snippets
  const articlesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'คลังความรู้การตลาดดิจิทัล & กลยุทธ์ปั้นแบรนด์ โดย MinMax Media',
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        '@id': `https://sites.salesdesk-ai.com/minmax-media/blog/${article.slug}`,
        headline: article.title,
        description: article.metaDescription,
        image: `https://sites.salesdesk-ai.com${article.featuredImage}`,
        datePublished: article.publishedAt,
        url: `https://sites.salesdesk-ai.com/minmax-media/blog/${article.slug}`,
      },
    })),
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
        alert('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาติดต่อทาง LINE MINMAX MEDIA โดยตรงครับ');
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
      tag: '01',
      description:
        'เจาะลึกตลาด ค้นหาจุดแข็งที่แตกต่าง (USP) ของแบรนด์ วิเคราะห์กลุ่มลูกค้าเป้าหมาย วาง Funnel ยอดขายตั้งแต่การรับรู้จนถึงการซื้อซ้ำ',
      highlights: [
        'วิเคราะห์คู่แข่ง & Brand Positioning',
        'ออกแบบ Customer Journey ปิดการขาย',
        'วางงบประมาณให้ได้ ROI สูงสุด',
        'กำหนด KPI รายสัปดาห์โปร่งใส',
      ],
    },
    {
      id: 'production',
      title: 'Production',
      subtitle: 'ออกแบบกราฟิก / ตัดต่อวิดีโอ',
      icon: Video,
      tag: '02',
      description:
        'ผลิตสื่อระดับสตูดิโอ ถ่ายทำวิดีโอโฆษณา ตัดต่อคลิปสั้น Reels / TikTok / Shorts หยุดสายตาใน 3 วินาทีแรก พร้อม Key Visual ยกระดับแบรนด์',
      highlights: [
        'วิดีโอสั้น Short-Form เน้นยอดขาย',
        'ออกแบบ Infographic & Key Visual',
        'Motion Graphic ระดับพรีเมียม',
        'คุมโทน Brand Guidelines ชัดเจน',
      ],
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      subtitle: 'ผลิตสื่อคอนเทนต์สร้างยอดขาย',
      icon: PenTool,
      tag: '03',
      description:
        'คิดคอนเทนต์ที่เปลี่ยนผู้ติดตามให้เป็นลูกค้า สร้าง Storytelling เชื่อมโยงอารมณ์ และเขียนแคปชันสะกดใจที่เร่งการตัดสินใจโอน',
      highlights: [
        'วาง Content Calendar ล่วงหน้า',
        'เขียน Sales Copywriting หยุดนิ้วโป้ง',
        'เจาะ Pain Point & ขยี้ผลลัพธ์จริง',
        'สคริปต์วิดีโอสำหรับผู้บริหาร/แบรนด์',
      ],
    },
    {
      id: 'influencer',
      title: 'Influencer / KOL / KOC',
      subtitle: 'เครือข่ายอินฟลูเอนเซอร์ทรงพลัง',
      icon: Users,
      tag: '04',
      description:
        'คัดเลือกและบริหารอินฟลูเอนเซอร์ทุกระดับ (Mega, Macro, Micro, Nano KOC) รีวิวเป็นธรรมชาติ สร้าง Social Proof และเร่งยอดขาย',
      highlights: [
        'คัดกรอง Engagement จริง 100%',
        'บรีฟและตรวจงานละเอียดตรงจุดขาย',
        'ขอลิขสิทธิ์ยิงแอด Whitelisting ต่อ',
        'บริหารงบอินฟลูฯ ให้คุ้มค่าที่สุด',
      ],
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      subtitle: 'ดูแลโซเชียลมีเดียครบวงจร',
      icon: Share2,
      tag: '05',
      description:
        'บริหารจัดการ Facebook, TikTok, Instagram, Lemon8 และ LINE OA โพสต์สม่ำเสมอ ตอบแชทลูกค้ารวดเร็ว อบอุ่น ปิดการขายมืออาชีพ',
      highlights: [
        'ดูแลโพสต์สม่ำเสมอทุกวันตามแผน',
        'ทีมแอดมินตอบแชทไว ปิดการขายเก่ง',
        'ติดตั้ง Chatbot & Quick Reply',
        'มอนิเตอร์รีวิวและดูแลภาพลักษณ์เพจ',
      ],
    },
    {
      id: 'ads-optimization',
      title: 'ADS กลยุทธ์แอดโฆษณา',
      subtitle: 'ยิงแอดแม่นยำ วัดผล ROI จริง',
      icon: Megaphone,
      tag: '06',
      description:
        'บริหารงบโฆษณา Facebook Ads, TikTok Ads และ Google Ads โฟกัส Conversion & ROAS คุ้มค่าทุกบาท ไม่เผางบกับทราฟฟิกไร้คุณภาพ',
      highlights: [
        'ติดตั้ง Conversion API แม่นยำ 100%',
        'ทดสอบ A/B Testing ครีเอทีฟต่อเนื่อง',
        'กลยุทธ์ Retargeting ต้อนลูกค้าซื้อซ้ำ',
        'รีพอร์ต Dashboard รายสัปดาห์เข้าใจง่าย',
      ],
    },
  ];

  const executionSteps = [
    {
      step: '01',
      title: 'Discovery & Brand Audit',
      desc: 'วิเคราะห์สินค้า จุดแข็ง คู่แข่ง และกลุ่มเป้าหมาย เพื่อวางรากฐานกลยุทธ์ที่แข็งแกร่งที่สุด',
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
    <div className="min-h-screen bg-[#04090d] text-slate-100 font-sans selection:bg-emerald-400 selection:text-slate-950 pb-28 sm:pb-32 lg:pb-0 relative overflow-x-hidden">
      {/* Schema Structured Data for SEO */}
      <StructuredData data={agencySchema} id="minmax-agency-schema" />
      <StructuredData data={articlesItemListSchema} id="minmax-articles-schema" />

      {/* 1. MINIMAL PREMIUM FIXED HEADER (MINMAX EMERALD THEME) */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#04090d]/90 backdrop-blur-xl border-b border-emerald-500/15 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-[68px] flex items-center justify-between">
          {/* Logo & Agency Identity */}
          <Link href="/minmax-media" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400 p-[1.5px] shadow-lg shadow-emerald-500/20 shrink-0 group-hover:scale-105 transition">
              <div className="w-full h-full rounded-full bg-[#04090d] flex items-center justify-center">
                <span className="font-black text-xs sm:text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                  MN
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-lg font-black tracking-tight text-white leading-tight">
                  MINMAX <span className="text-emerald-400">MEDIA</span>
                </span>
                <span className="hidden xl:inline-block bg-emerald-500/15 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 whitespace-nowrap">
                  Event & Marketing Agency
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate hidden sm:block">
                รับทำการตลาดครบวงจร • พร้อมปั้นแบรนด์
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold text-slate-300">
            <a href="#services" className="hover:text-emerald-400 transition">
              6 บริการหลัก
            </a>
            <a href="#workflow" className="hover:text-emerald-400 transition">
              ขั้นตอนทำงาน
            </a>
            <a href="#cases" className="hover:text-emerald-400 transition">
              ผลงาน
            </a>
            <a href="#articles" className="hover:text-emerald-400 transition">
              บทความกลยุทธ์
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition">
              คำถามที่พบบ่อย
            </a>
          </nav>

          {/* Desktop Direct Contact Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <TrackableLineButton
              href={lineUrl}
              buttonName="header_line_official"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400/60 font-semibold text-xs transition whitespace-nowrap"
            >
              <LineIcon className="w-3.5 h-3.5 fill-emerald-400" />
              <span>LINE: {lineId}</span>
            </TrackableLineButton>
            <a
              href="#consult-form"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>นัดหมายปรึกษากลยุทธ์</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#04090d]/98 border-b border-emerald-500/20 px-4 py-4 space-y-2.5">
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
              href="#articles"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold border-b border-slate-900"
            >
              • บทความกลยุทธ์การตลาด (SEO Hub)
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
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black text-center text-xs flex items-center justify-center gap-1.5"
              >
                <LineIcon className="w-4 h-4 fill-slate-950" />
                แอดไลน์ MINMAX MEDIA ปรึกษาฟรี
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

      {/* Header Fixed Flow Spacer */}
      <div className="h-16 sm:h-[68px] w-full" />

      {/* 2. CINEMATIC HERO SECTION (UNIFIED FULL-BLEED 16:9 AUTO DEALER STYLE ON MOBILE & DESKTOP) */}
      <section className="relative min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between overflow-hidden bg-[#04090d] text-white">
        {/* Full-Bleed 16:9 Minimal Premium Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/minmax/hero-minimal-premium.jpg"
            alt="MINMAX MEDIA - รับทำการตลาดครบวงจร พร้อมปั้นแบรนด์ สไตล์ Minimal Premium"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_22%] sm:object-[76%_20%] lg:object-right brightness-105 contrast-[1.03]"
          />

          {/* Desktop Left Scrim: Gently protects left 38% typography without darkening right portrait */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#04090d] via-[#04090d]/85 via-38% to-transparent" />

          {/* Mobile Scrims: Transparent middle ensures the presenter & studio are bright and 100% visible */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#04090d]/90 via-transparent via-35% to-[#04090d]/95" />

          {/* Subtle Emerald Studio Rim Glow */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-tr from-emerald-950/30 via-transparent to-transparent" />

          {/* Bottom Edge Fade */}
          <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#04090d] to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-12 pb-6 sm:pb-12 relative z-10 w-full flex-1 flex flex-col justify-between">
          {/* Top Block: Badge & Crisp Headings (Elevated above the subject on mobile) */}
          <div className="max-w-xl space-y-2.5 sm:space-y-4 text-center lg:text-left mx-auto lg:mx-0 lg:pt-6">
            {/* Minimal Premium Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#04090d]/85 backdrop-blur-md border border-emerald-400/35 text-emerald-300 text-xs font-semibold shadow-lg">
              <Star className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 shrink-0" />
              <span>Certified Full-Service Marketing & Event Agency</span>
            </div>

            {/* Headline: Punchy, zero overlapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.2] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              <span className="block">MINMAX MEDIA</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 block text-lg sm:text-2xl lg:text-3xl xl:text-4xl mt-1.5 font-extrabold">
                รับทำการตลาดครบวงจร • พร้อมปั้นแบรนด์
              </span>
            </h1>

            {/* Focused Value Proposition */}
            <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)] max-w-lg mx-auto lg:mx-0">
              ยกระดับแบรนด์สู่ยอดขาย 8 หลักด้วยระบบ One-Stop Marketing House วางกลยุทธ์ ผลิตสื่อโปรดักชั่น ถ่ายทำ ตัดต่อ ดีล KOL/KOC ดูแลเพจ และยิงแอดวัดผล ROI จริง
            </p>
          </div>

          {/* Dedicated Open Center: Guarantees 100% clear view of the presenter & studio on mobile */}
          <div className="flex-1 min-h-[190px] sm:min-h-[220px] lg:min-h-[40px]" />

          {/* Bottom Block: Action Buttons & Trust Signals */}
          <div className="max-w-xl mx-auto lg:mx-0 w-full space-y-3 lg:pb-6">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full">
              <a
                href="#consult-form"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm sm:text-base text-center shadow-xl shadow-emerald-500/25 active:scale-95 transition whitespace-nowrap"
              >
                ขอรับคำปรึกษากลยุทธ์ / ขอใบเสนอราคา &rarr;
              </a>
              <a
                href={fbMessengerUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-emerald-400/40 font-semibold text-sm sm:text-base text-center backdrop-blur-md active:scale-95 transition whitespace-nowrap flex items-center justify-center gap-2"
              >
                <FacebookIcon className="w-4 h-4 fill-blue-500 shrink-0" />
                <span>ทักแชต Facebook</span>
              </a>
            </div>

            {/* 3 Concise Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-5 gap-y-1.5 text-xs text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>วางกลยุทธ์ตรงกลุ่มเป้าหมาย</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>โปรดักชั่นระดับพรีเมียม</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>ยิงแอดวัดผล ROI จริง</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. FOUR PILLARS OF MINIMAL PREMIUM SERVICE (DECOUPLED CARDS) */}
      <section id="pillars" className="py-8 sm:py-12 bg-[#060d12] border-y border-emerald-500/15 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            <div className="bg-slate-900/50 p-4 sm:p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-400/40 transition">
              <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-white">Strategic Marketing</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                วางแผนกลยุทธ์เจาะลึกตลาด และสร้าง Funnel ปิดการขาย
              </p>
            </div>

            <div className="bg-slate-900/50 p-4 sm:p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-400/40 transition">
              <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                <Video className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-white">Creative Production</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                วิดีโอสั้น กราฟิก และ Motion Graphic ระดับสตูดิโอ
              </p>
            </div>

            <div className="bg-slate-900/50 p-4 sm:p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-400/40 transition">
              <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-white">Influencer Network</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                คัดสรร KOL/KOC รีวิวจริง ตรงกลุ่มเป้าหมาย ดันยอดขาย
              </p>
            </div>

            <div className="bg-slate-900/50 p-4 sm:p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-400/40 transition">
              <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-white">Performance Ads ROI</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ยิงแอดแม่นยำ ไม่เผางบ โฟกัส Conversion สูงสุด
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS VS MINMAX ADVANTAGE */}
      <section className="py-14 sm:py-20 bg-[#04090d] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              WHY 90% OF BRANDS BURN MONEY ON ADS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
              ทำไมยิงแอดตั้งเยอะ แต่ยอดขายกลับไม่โต?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              ปัญหาไม่ได้อยู่ที่ตัวระบบแอด แต่อยู่ที่ <strong>“ขาดกลยุทธ์ที่เชื่อมโยงกันอย่างเป็นระบบ”</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-rose-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center font-bold text-sm">
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

            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/15 border border-emerald-500/30 space-y-4 shadow-xl shadow-emerald-950/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-sm">
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

      {/* 4. THE 6 CORE CAPABILITIES (MINIMAL PREMIUM GRID) */}
      <section id="services" className="py-14 sm:py-24 bg-[#060d12] border-y border-emerald-500/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>ครบวงจร 360 องศา</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              6 บริการหลัก เสาหลักความสำเร็จของแบรนด์
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              มาตรฐานบริการจาก MinMax Media Event Agency ที่ออกแบบเพื่อสร้างการเติบโตอย่างยั่งยืน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {coreServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl bg-[#091218] border border-slate-800/80 hover:border-emerald-400/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/30 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 group-hover:bg-emerald-500/20 flex items-center justify-center text-emerald-400 transition">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400/70">
                        {service.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-teal-400 mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-slate-800/70">
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
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-400 hover:text-slate-950 text-slate-200 border border-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition"
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

      {/* 5. PROVEN 4-STEP WORKFLOW BLUEPRINT */}
      <section id="workflow" className="py-14 sm:py-20 bg-[#04090d] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              STRUCTURED WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
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
                className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-400/40 transition duration-300 space-y-3"
              >
                <div className="text-4xl font-black text-emerald-400/20 font-mono">
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

      {/* 6. INDUSTRY CASE STUDIES & RESULTS */}
      <section id="cases" className="py-14 sm:py-24 bg-[#060d12] border-y border-emerald-500/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              PROVEN TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
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
                className="p-6 sm:p-7 rounded-2xl bg-[#091218] border border-slate-800/80 hover:border-emerald-400/40 transition space-y-3"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {item.tag}
                  </span>
                  <span className="text-xs font-black text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/25">
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

      {/* 7. SEO KNOWLEDGE HUB & BLOG ARTICLES (3 HIGH-IMPACT SEO ARTICLES) */}
      <section id="articles" className="py-14 sm:py-24 bg-[#04090d] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>MINMAX KNOWLEDGE HUB</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                บทความเจาะลึกกลยุทธ์การตลาด & ปั้นแบรนด์
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                คลังความรู้ด้าน Full-Funnel Marketing, Video Production และ Performance Ads ที่นำไปใช้เพิ่มยอดขายได้จริง
              </p>
            </div>
            <Link
              href="/minmax-media/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-emerald-300 font-bold text-xs sm:text-sm transition self-start md:self-auto shrink-0"
            >
              <span>ดูบทความทั้งหมด</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((post) => (
              <Link
                key={post.id}
                href={`/minmax-media/blog/${post.slug}`}
                className="group rounded-2xl bg-[#091218] border border-slate-800/80 hover:border-emerald-400/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/30"
              >
                <div>
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={post.featuredImage}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#04090d]/85 backdrop-blur-md border border-emerald-500/30 text-[10px] font-bold text-emerald-300">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>เวลาอ่าน {post.readTime}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {post.metaDescription}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{post.author}</span>
                  <span className="text-emerald-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition">
                    อ่านบทความ <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE VIP LEAD & CONSULTATION BOOKING FORM */}
      <section id="consult-form" className="py-14 sm:py-20 bg-[#060d12] border-y border-emerald-500/15 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-[#091218] border border-emerald-500/30 p-6 sm:p-10 shadow-2xl shadow-emerald-950/40 relative overflow-hidden">
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/30"
                  >
                    <LineIcon className="w-4 h-4 fill-slate-950" />
                    <span>ทัก LINE MINMAX MEDIA ด่วน</span>
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
                      className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      บริการที่สนใจเป็นพิเศษ
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/25 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
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
      <section id="faq" className="py-14 sm:py-20 bg-[#04090d] relative z-10">
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
                  className="rounded-2xl bg-[#091218] border border-slate-800/80 overflow-hidden transition"
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

      {/* 10. PREMIUM ENTERPRISE FOOTER (COMPLETE MINMAX MEDIA SYSTEM DIRECTORY) */}
      <footer className="bg-[#03070a] border-t border-emerald-500/20 pt-14 pb-12 text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
            {/* Col 1: Brand Profile */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400 p-[1.5px] shrink-0">
                  <div className="w-full h-full rounded-full bg-[#03070a] flex items-center justify-center">
                    <span className="font-black text-sm tracking-tighter text-emerald-300">MN</span>
                  </div>
                </div>
                <div>
                  <div className="text-base font-black text-white tracking-tight">
                    MINMAX <span className="text-emerald-400">MEDIA</span>
                  </div>
                  <div className="text-[11px] text-emerald-300 font-semibold">
                    Event & Marketing Agency
                  </div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                เอเจนซี่รับทำการตลาดครบวงจร พร้อมปั้นแบรนด์ให้เติบโตอย่างก้าวกระโดด วางกลยุทธ์ ผลิตสื่อโปรดักชั่น อินฟลูเอนเซอร์ KOL/KOC ดูแลโซเชียล และยิงแอดวัดผล ROI จริง
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-semibold text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5" /> Official Verified Agency
                </span>
              </div>
            </div>

            {/* Col 2: Core Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                บริการหลักครบวงจร
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition">
                    • Marketing Strategy (วางกลยุทธ์)
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition">
                    • Production (ออกแบบกราฟิก/ตัดต่อ)
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition">
                    • Content Creation (ผลิตสื่อคอนเทนต์)
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition">
                    • Influencer / KOL / KOC Network
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition">
                    • Social Media Management (ดูแลเพจ)
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition">
                    • Performance ADS (กลยุทธ์แอดโฆษณา)
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: SEO Knowledge Hub & Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                คลังความรู้ & บทความ SEO
              </h4>
              <ul className="space-y-2.5 text-xs">
                {articles.map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/minmax-media/blog/${post.slug}`}
                      className="hover:text-emerald-400 transition line-clamp-1"
                    >
                      &rarr; {post.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link href="/minmax-media/blog" className="text-emerald-400 font-bold hover:underline">
                    ดูบทความทั้งหมด &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Official Contact Channels */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                ช่องทางติดต่อ MinMax Media
              </h4>
              <div className="space-y-2.5 text-xs">
                <TrackableLineButton
                  href={lineUrl}
                  buttonName="footer_line_official"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 transition w-full"
                >
                  <LineIcon className="w-4 h-4 fill-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-emerald-200/80">LINE Official Account</div>
                    <div className="font-bold text-white">{lineId} (คลิกแอดไลน์)</div>
                  </div>
                </TrackableLineButton>

                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 text-slate-200 transition"
                >
                  <FacebookIcon className="w-4 h-4 fill-blue-500 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-400">Facebook Official Page</div>
                    <div className="font-bold text-white truncate">MinMax Media Event Agency</div>
                  </div>
                </a>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>เปิดตลอดเวลา • ทีมงานพร้อมให้คำปรึกษาทุกวัน</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} MinMax Media Event Agency. All rights reserved.
            </div>
            <div>
              Engineered with Minimal Premium Standard by{' '}
              <Link href="/" className="text-emerald-400 hover:underline font-semibold">
                SalesDesk Sites
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* 11. SALESDESK STANDARD FIXED MOBILE ACTION BAR (FLOATING STICKY CONVERSION BAR) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-[#04090d]/95 backdrop-blur-md border-t border-emerald-500/25 p-2.5 px-3 sm:px-4 shadow-2xl">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          <a
            href={fbMessengerUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition active:scale-95"
          >
            <FacebookIcon className="w-4 h-4 fill-white" />
            <span>ทักแชตเพจ</span>
          </a>

          <TrackableLineButton
            href={lineUrl}
            buttonName="mobile_sticky_line"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/30 transition active:scale-95"
          >
            <LineIcon className="w-4 h-4 fill-slate-950" />
            <span>แอด LINE {lineId}</span>
          </TrackableLineButton>
        </div>
      </div>
    </div>
  );
}
