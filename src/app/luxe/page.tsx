'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { 
  ShoppingCart, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  Building2, 
  FileText, 
  QrCode, 
  Layers, 
  ChevronRight, 
  ChevronLeft,
  X, 
  Check, 
  Plus, 
  Minus, 
  Trash2, 
  Calculator, 
  ShieldCheck, 
  Sparkles,
  Maximize2,
  Menu,
  ArrowUpRight,
  Eye,
  Compass,
  Award,
  SlidersHorizontal
} from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  code: string;
  price: number;
  unit: string;
  category: string;
  quantity: number;
  image: string;
}

interface SlatCategory {
  id: number;
  indexStr: string;
  nameEn: string;
  nameTh: string;
  tagline: string;
  description: string;
  image: string;
  price: number;
  unit: string;
  code: string;
  specs: { label: string; value: string }[];
  highlights: string[];
}

export default function SalesDeskLuxePage() {
  // Navigation & UI States
  const [activeSlatId, setActiveSlatId] = useState<number>(1);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSpecModalOpen, setIsSpecModalOpen] = useState<boolean>(false);
  const [selectedSpecItem, setSelectedSpecItem] = useState<SlatCategory | null>(null);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  // Cart & Quotation Drawer States
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'quote' | 'success'>('cart');
  const [isSubmittingLead, setIsSubmittingLead] = useState<boolean>(false);

  // B2B Quotation Form State
  const [quoteForm, setQuoteForm] = useState({
    customerName: '',
    phone: '',
    company: '',
    taxId: '',
    projectLocation: '',
    notes: '',
  });

  // Project Estimator State
  const [estimatorArea, setEstimatorArea] = useState<number>(120);
  const [estimatorSelectedCategory, setEstimatorSelectedCategory] = useState<number>(1);

  // Contact Data
  const brandName = 'SALESDESK LUXE';
  const brandTagline = 'Architectural Exhibition & High-Ticket B2B Sales Archetype';
  const directorName = 'คุณเสาวลักษณ์ นุ่นหนู (คุณแอล)';
  const directorTitle = 'Chief Architectural Consultant & Project Director';
  const directPhone = '066-168-5157';
  const directPhoneCallUrl = 'tel:0661685157';
  const directEmail = 'sovaluck@fameline.com';
  const lineUrl = 'https://line.me/ti/p/8LzX_47dFe';

  // 5 Master Slat Collections (Architectural Louvers)
  const slatsList: SlatCategory[] = useMemo(() => [
    {
      id: 1,
      indexStr: '01',
      nameEn: 'ULTRA FACADE',
      nameTh: 'อลูมิเนียมคอมโพสิต & รังผึ้ง Honeycomb',
      tagline: 'แผ่นปิดผิวสถาปัตยกรรมระดับเมกะโปรเจกต์ มาตรฐานทนไฟ FR Class A2',
      description: 'นวัตกรรมอลูมิเนียมคอมโพสิตและ Honeycomb Panel สำหรับเปลือกอาคารยุคใหม่ ทนแรงลมมหาศาล เคลือบสี PVDF มาตรฐาน 30 ปี ไร้การบิดงอ',
      image: '/images/suppersurface/composite-deco.jpg',
      price: 1100,
      unit: 'ตร.ม.',
      code: 'LUXE-FACADE-01',
      specs: [
        { label: 'มาตรฐานทนไฟ', value: 'FR Class A2-s1,d0' },
        { label: 'ความหนารวม', value: '4 มม. (ผิวอลูมิเนียม 0.5/0.5)' },
        { label: 'การเคลือบผิว', value: 'Kynar 500 PVDF 3-Coats' },
        { label: 'การรับประกันสี', value: '30 ปี ไม่ซีดจาง' }
      ],
      highlights: ['ทนแรงดันลมปะทะตึกสูง', 'น้ำหนักเบากว่าแผ่นหิน 70%', 'ตัดพับขึ้นรูป 3 มิติได้อิสระ']
    },
    {
      id: 2,
      indexStr: '02',
      nameEn: 'ORGANIC STONE',
      nameTh: 'หินวีเนียร์ MCM แผ่นบางดัดโค้ง',
      tagline: 'สัมผัสหินธรรมชาติแท้ ดัดโค้งอิสระ น้ำหนักเบาเพียง 3.5 กก./ตร.ม.',
      description: 'Modified Clay Material (MCM) และ Natural Stone Veneer นวัตกรรมหินแผ่นบางยืดหยุ่น หนาเพียง 2-4 มม. ปูทับผนังเดิมได้ทันทีโดยไม่ต้องทุบรื้อ',
      image: '/images/suppersurface/mcm-stone.jpg',
      price: 1450,
      unit: 'ตร.ม.',
      code: 'LUXE-STONE-02',
      specs: [
        { label: 'ความหนาแผ่น', value: '2.0 - 4.0 มม.' },
        { label: 'น้ำหนักเฉลี่ย', value: '3.5 - 5.5 กก./ตร.ม.' },
        { label: 'รัศมีดัดโค้ง', value: 'ดัดโค้งได้ถึง R = 200 มม.' },
        { label: 'การติดตั้ง', value: 'กาว PU ติดทับโครงสร้างเดิม' }
      ],
      highlights: ['ผิวสัมผัสหินแท้ 100%', 'ประหยัดโครงสร้างรับน้ำหนัก', 'ติดตั้งไวกว่าหินแกรนิต 4 เท่า']
    },
    {
      id: 3,
      indexStr: '03',
      nameEn: 'KINETIC LOUVER',
      nameTh: 'ระแนงอลูมิเนียมบังแดดสถาปัตยกรรม',
      tagline: 'ระบบระแนงควบคุมแสงอาทิตย์ ลายไม้พรีเมียม ไร้สนิม ปลวกไม่กิน 100%',
      description: 'ระบบระแนงอลูมิเนียมกริดทรงโมเดิร์น พร้อมฟินิชชิ่งลายไม้เทคโนโลยีอิตาลี ทนแดด ทนฝน ไม่โก่งงอ เหมาะสำหรับทั้งภายนอกและภายในอาคาร',
      image: '/images/suppersurface/louver-modern.jpg',
      price: 1850,
      unit: 'ตร.ม.',
      code: 'LUXE-LOUVER-03',
      specs: [
        { label: 'วัสดุแกนหลัก', value: 'Aluminium Alloy 6063-T5' },
        { label: 'ระบบติดตั้ง', value: 'Snap-lock Carrier ซ่อนสกรู' },
        { label: 'ฟินิชชิ่งผิว', value: 'Powder Coat / Wood Grain Transfer' },
        { label: 'ความต้านทานสนิม', value: '100% Salt Spray Test 1,000 hrs' }
      ],
      highlights: ['ลดความร้อนเข้าสู่ตัวอาคาร 45%', 'ระบบคลิปล็อกซ่อนโครงสร้าง', 'อายุการใช้งานยาวนาน 20+ ปี']
    },
    {
      id: 4,
      indexStr: '04',
      nameEn: 'MINIMAL CEILING',
      nameTh: 'ฝ้าอลูมิเนียมเชิงเส้น Linear 85C / 85F',
      tagline: 'เส้นสายเพดานเฉียบคม ไร้รอยต่อ ทนความชื้นภายนอกอาคารสมบูรณ์แบบ',
      description: 'ระบบฝ้าเพดานอลูมิเนียมเชิงเส้น ทั้งแบบร่องปิด (85C) และแบบร่องเว้นระยะ (85F) รองรับการติดตั้งงานใต้ชายคา อาคารจอดรถ และโถงล็อบบี้ลักชัวรี',
      image: '/images/suppersurface/ceiling-85c.jpg',
      price: 890,
      unit: 'ตร.ม.',
      code: 'LUXE-CEIL-04',
      specs: [
        { label: 'หน้ากว้างแผ่น', value: '85 มม. ความยาวสั่งตัดได้ตามแบบ' },
        { label: 'ระบบโครงคร่าว', value: 'Stringer Carrier ชุบกัลวาไนซ์' },
        { label: 'การดูดซับเสียง', value: 'เจาะรู Perforated + Acoustic Fleece' },
        { label: 'มาตรฐานความชื้น', value: 'ทนความชื้น 100% ไม่ขึ้นรา' }
      ],
      highlights: ['เปิดซ่อมบำรุงงานระบบง่าย', 'สั่งผลิตความยาวพิเศษลดเศษเหลือ', 'ดีไซน์มินิมอลโมเดิร์นสากล']
    },
    {
      id: 5,
      indexStr: '05',
      nameEn: 'NICHIHA JAPAN',
      nameTh: 'ไฟเบอร์ซีเมนต์นิชิฮะ ลิขสิทธิ์ญี่ปุ่น',
      tagline: 'ระบบผนังระบายอากาศ Rain Screen พร้อมสารเคลือบทำความสะอาดตัวเอง',
      description: 'แผ่นไฟเบอร์ซีเมนต์นำเข้าจากประเทศญี่ปุ่น มาพร้อมเทคโนโลยี Platinum Coating ป้องกันรังสี UV และระบบทำความสะอาดตัวเองเมื่อฝนตก (Self-Cleaning)',
      image: '/images/suppersurface/nichiha-cement.jpg',
      price: 2450,
      unit: 'ตร.ม.',
      code: 'LUXE-NICHIHA-05',
      specs: [
        { label: 'ประเทศต้นกำเนิด', value: 'Made in Japan (NICHIHA Corporation)' },
        { label: 'ความหนาแผ่น', value: '14 - 16 มม.' },
        { label: 'ระบบติดตั้ง', value: 'Dry-Joint Clip System ไม่ใช้ซิลิโคน' },
        { label: 'เทคโนโลยีทำความสะอาด', value: 'Micro Guard Self-Cleaning System' }
      ],
      highlights: ['คราบสกปรกหลุดเองเมื่อโดนน้ำ', 'ติดตั้งระบบแห้งรวดเร็วและสะอาด', 'รับประกันสีผิว 15 ปีจากญี่ปุ่น']
    }
  ], []);

  // Selected Active Slat
  const activeSlat = useMemo(() => {
    return slatsList.find(s => s.id === activeSlatId) || slatsList[0];
  }, [slatsList, activeSlatId]);

  // Cart Calculations
  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  const vatAmount = useMemo(() => Math.round(cartSubtotal * 0.07), [cartSubtotal]);
  const cartTotalWithVat = useMemo(() => cartSubtotal + vatAmount, [cartSubtotal, vatAmount]);
  const totalItemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  // Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Add to Cart
  const handleAddToCart = (item: SlatCategory, qty: number = 20) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, {
        id: item.id,
        name: `${item.nameEn} — ${item.nameTh}`,
        code: item.code,
        price: item.price,
        unit: item.unit,
        category: item.nameEn,
        quantity: qty,
        image: item.image,
      }];
    });
    showToast(`เพิ่มสเปก ${item.nameEn} จำนวน ${qty} ${item.unit} ลงในตะกร้าสเปกเรียบร้อย`);
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const nextQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: nextQty };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast('นำรายการออกจากตะกร้าสเปกเรียบร้อย');
  };

  // Submit Formal Quotation
  const handleSubmitQuotation = async () => {
    if (!quoteForm.customerName || !quoteForm.phone) {
      alert('กรุณากรอกชื่อผู้ติดต่อและเบอร์โทรศัพท์สำหรับจัดส่งใบเสนอราคาทางการ');
      return;
    }

    setIsSubmittingLead(true);
    const quotationNumber = `QT-LUXE-${Date.now().toString().slice(-6)}`;

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'salesdesk-luxe-quotation',
          clientSlug: 'salesdesk-luxe',
          name: quoteForm.customerName,
          phone: quoteForm.phone,
          company: quoteForm.company || 'นิติบุคคล/เจ้าของโครงการ',
          taxId: quoteForm.taxId,
          location: quoteForm.projectLocation,
          message: `[SALESDESK LUXE QUOTATION #${quotationNumber}]\n` +
            `รายการสเปก: ${cart.map(c => `${c.name} (${c.quantity} ${c.unit}) = ฿${(c.price * c.quantity).toLocaleString()}`).join(' | ')}\n` +
            `ยอดรวมทั้งสิ้น (รวม VAT): ฿${cartTotalWithVat.toLocaleString()} บาท\n` +
            `หมายเหตุโครงการ: ${quoteForm.notes || '-'}`,
        }),
      });
    } catch (err) {
      console.warn('Lead dispatch note:', err);
    } finally {
      setIsSubmittingLead(false);
    }

    // Prefill LINE message
    const formattedLineMsg = `[ใบเสนอราคาโครงการทางการ — SALESDESK LUXE]
เลขที่: ${quotationNumber}
ผู้ติดต่อ: ${quoteForm.customerName}
โทรศัพท์: ${quoteForm.phone}
นิติบุคคล: ${quoteForm.company || '-'}
เลขประจำตัวผู้เสียภาษี: ${quoteForm.taxId || '-'}
สถานที่โครงการ: ${quoteForm.projectLocation || '-'}

รายการสเปกวัสดุปิดผิวสถาปัตยกรรม:
${cart.map((item, idx) => `${idx + 1}. ${item.name} (${item.code})\n   ปริมาณ: ${item.quantity.toLocaleString()} ${item.unit} x ฿${item.price.toLocaleString()} = ฿${(item.price * item.quantity).toLocaleString()}`).join('\n')}

ยอดรวมก่อน VAT: ฿${cartSubtotal.toLocaleString()} บาท
ภาษีมูลค่าเพิ่ม 7%: ฿${vatAmount.toLocaleString()} บาท
ยอดรวมทั้งสิ้น: ฿${cartTotalWithVat.toLocaleString()} บาท

หมายเหตุ: ${quoteForm.notes || '-'}`;

    navigator.clipboard?.writeText(formattedLineMsg);
    window.open(lineUrl, '_blank');
    setCheckoutStep('success');
  };

  // Estimator Calculations
  const calculatedEstimatorPrice = useMemo(() => {
    const selected = slatsList.find(s => s.id === estimatorSelectedCategory) || slatsList[0];
    return selected.price * estimatorArea;
  }, [slatsList, estimatorSelectedCategory, estimatorArea]);

  return (
    <div className="min-h-screen bg-[#020b08] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24 md:pb-12 w-full max-w-full overflow-x-clip">
      
      {/* GLOBAL TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-6 z-50 bg-amber-400 text-slate-950 px-4 py-2.5 rounded-xl shadow-2xl font-bold text-xs flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-4 h-4 text-slate-950 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. LUXE STICKY HEADER (Ultra-Refined 1px Grid Architecture) */}
      <header className="sticky top-0 z-40 bg-[#020b08]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Brand Identity */}
          <Link href="/luxe" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition">
              <Layers className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-base sm:text-lg font-black tracking-widest text-white leading-none uppercase">
                  SALESDESK <span className="text-amber-400">LUXE</span>
                </span>
                <span className="text-[9px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded tracking-wider uppercase font-mono">
                  ARCHETYPE
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-widest hidden sm:block uppercase">
                Architectural Exhibition & High-Ticket B2B Sales Engine
              </p>
            </div>
          </Link>

          {/* Desktop Direct Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300 uppercase tracking-widest">
            <a href="#exhibition" className="hover:text-amber-400 transition">Exhibition</a>
            <a href="#matrix" className="hover:text-amber-400 transition">Specification Matrix</a>
            <a href="#estimator" className="hover:text-amber-400 transition">Budget Estimator</a>
            <a href="#projects" className="hover:text-amber-400 transition">Landmark Projects</a>
            <a href="#consultant" className="hover:text-amber-400 transition">Project Director</a>
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href={directPhoneCallUrl} 
              className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/40 text-slate-200 text-xs font-semibold tracking-wider transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{directPhone}</span>
            </a>

            <a 
              href={lineUrl} 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-xs font-bold tracking-wider transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>LINE Direct</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={() => {
                setIsCartOpen(true);
                setCheckoutStep('cart');
              }}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition active:scale-95"
            >
              <ShoppingCart className="w-4 h-4 text-slate-950" />
              <span>ตะกร้าสเปก</span>
              {totalItemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-400 text-[11px] font-mono font-extrabold flex items-center justify-center">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition"
              aria-label="เปิดเมนูนำทาง"
            >
              <Menu className="w-5 h-5 text-amber-400" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-[#020b08]/90 backdrop-blur-md transition-opacity"
            onClick={() => setIsMobileNavOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#03140e] border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-bold text-sm tracking-widest text-amber-400 uppercase">LUXE NAVIGATION</span>
                <button 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase">
                <a 
                  href="#exhibition" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="py-2 text-slate-200 hover:text-amber-400 transition border-b border-white/5"
                >
                  01. Exhibition Engine
                </a>
                <a 
                  href="#matrix" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="py-2 text-slate-200 hover:text-amber-400 transition border-b border-white/5"
                >
                  02. Specification Matrix
                </a>
                <a 
                  href="#estimator" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="py-2 text-slate-200 hover:text-amber-400 transition border-b border-white/5"
                >
                  03. Budget Estimator
                </a>
                <a 
                  href="#projects" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="py-2 text-slate-200 hover:text-amber-400 transition border-b border-white/5"
                >
                  04. Landmark Projects
                </a>
                <a 
                  href="#consultant" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="py-2 text-slate-200 hover:text-amber-400 transition border-b border-white/5"
                >
                  05. Project Director
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a 
                href={directPhoneCallUrl}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
              >
                <PhoneCall className="w-4 h-4" /> โทรสายตรง: {directPhone}
              </a>
              <a 
                href={lineUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" /> แอดไลน์ปรึกษางานโครงการ
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. THE 100VH ARCHITECTURAL SLAT ACCORDION ENGINE (The Core Hero Feature) */}
      <section id="exhibition" className="relative w-full lg:h-[calc(100vh-65px)] min-h-[640px] flex flex-col justify-between overflow-hidden border-b border-white/10 bg-[#010805]">
        
        {/* Exhibition Mode Sub-header */}
        <div className="px-4 sm:px-8 py-3 bg-[#020e09]/80 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-emerald-300 font-bold tracking-wider">LIVE EXHIBITION</span>
            <span className="text-white/20">|</span>
            <span className="hidden sm:inline text-slate-300">คลิกหรือเลื่อนเมาส์เพื่อขยายบานระแนงสถาปัตยกรรม (Architectural Slats)</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-slate-400">
            <span>SELECTED: <strong className="text-amber-400">{activeSlat.indexStr} — {activeSlat.nameEn}</strong></span>
            <span>RATIO: 100VH ARCHITECTURAL VIEW</span>
          </div>
        </div>

        {/* Desktop Slat Accordion (Zero-Scroll Pure Architectural Viewport Engine) */}
        <div className="hidden lg:flex w-full flex-1 overflow-hidden">
          {slatsList.map((slat) => {
            const isActive = activeSlatId === slat.id;
            return (
              <div
                key={slat.id}
                onMouseEnter={() => setActiveSlatId(slat.id)}
                onClick={() => setActiveSlatId(slat.id)}
                className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-r border-white/10 overflow-hidden cursor-pointer flex flex-col justify-between ${
                  isActive 
                    ? 'flex-[5] bg-[#02140d]' 
                    : 'flex-[1] bg-[#020b08] hover:bg-[#03130c]'
                }`}
              >
                {/* Background Image with Cinematic Gradient */}
                <div className="absolute inset-0">
                  <img
                    src={slat.image}
                    alt={slat.nameTh}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      isActive ? 'scale-105 opacity-40' : 'scale-100 opacity-15 filter grayscale hover:grayscale-0'
                    }`}
                  />
                  <div className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive 
                      ? 'bg-gradient-to-t from-[#020b08] via-[#020b08]/70 to-[#020b08]/30' 
                      : 'bg-gradient-to-t from-[#020b08] via-[#020b08]/80 to-[#020b08]/60'
                  }`} />
                </div>

                {/* Slat Top Bar: Index & Short Name */}
                <div className="relative z-10 p-6 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-sm font-black px-2.5 py-1 rounded ${
                      isActive ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30' : 'bg-white/10 text-slate-400'
                    }`}>
                      {slat.indexStr}
                    </span>
                    <span className={`font-bold tracking-widest text-xs uppercase transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400'
                    }`}>
                      {slat.nameEn}
                    </span>
                  </div>

                  {isActive && (
                    <div className="hidden xl:flex items-center gap-1.5 text-[10px] font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>EXPANDED SPEC</span>
                    </div>
                  )}
                </div>

                {/* COLLAPSED STATE: Vertical Architectural Running Title */}
                {!isActive && (
                  <div className="relative z-10 flex-1 flex flex-col justify-end p-6 select-none">
                    <div className="writing-vertical-rl rotate-180 text-left space-y-4 tracking-widest text-slate-400 text-sm uppercase font-semibold">
                      <span>{slat.nameEn}</span>
                      <span className="text-[11px] font-mono text-amber-400/80">฿{slat.price.toLocaleString()} /{slat.unit}</span>
                    </div>
                  </div>
                )}

                {/* EXPANDED STATE: Full Architectural Content */}
                {isActive && (
                  <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end space-y-6 max-w-2xl animate-in fade-in duration-500">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                        <span>{slat.code}</span>
                        <span>•</span>
                        <span>เริ่มต้น ฿{slat.price.toLocaleString()} /{slat.unit}</span>
                      </div>
                      
                      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {slat.nameTh}
                      </h2>
                      
                      <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                        {slat.tagline}
                      </p>
                      
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {slat.description}
                      </p>
                    </div>

                    {/* Technical Specs Grid */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/10">
                      {slat.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="bg-black/40 backdrop-blur-md p-2.5 rounded-lg border border-white/5">
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">{spec.label}</div>
                          <div className="text-xs font-bold text-white font-mono mt-0.5">{spec.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive CTA Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(slat, 30);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 transition active:scale-95"
                      >
                        <ShoppingCart className="w-4 h-4 text-slate-950" />
                        <span>ใส่ตะกร้าสเปก (30 {slat.unit})</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSpecItem(slat);
                          setIsSpecModalOpen(true);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/15 transition"
                      >
                        <Eye className="w-4 h-4 text-amber-400" />
                        <span>ดูสเปกเต็ม & รายละเอียด</span>
                      </button>

                      <a
                        href="#estimator"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEstimatorSelectedCategory(slat.id);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-transparent hover:text-amber-400 text-slate-400 text-xs font-semibold transition"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>คำนวณงบประมาณ</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Slat Bottom Visual Indicator */}
                <div className="relative z-10 px-6 py-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>FAMELINE LUXE ARCHETYPE</span>
                  <span className={isActive ? 'text-amber-400 font-bold' : ''}>{isActive ? '[ACTIVE]' : '[STANDBY]'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Kinetic Slat Accordion (Touch-Optimized Stacks) */}
        <div className="lg:hidden flex flex-col divide-y divide-white/10">
          {slatsList.map((slat) => {
            const isActive = activeSlatId === slat.id;
            return (
              <div 
                key={slat.id}
                className={`transition-all duration-500 ${isActive ? 'bg-[#03180f]' : 'bg-[#020b08]'}`}
              >
                {/* Slat Accordion Header Button */}
                <button
                  onClick={() => setActiveSlatId(isActive ? 0 : slat.id)}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-amber-500 text-slate-950 font-black' : 'bg-white/10 text-slate-300'
                    }`}>
                      {slat.indexStr}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">{slat.nameEn}</div>
                      <div className="text-[11px] text-slate-400">{slat.nameTh}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-400">฿{slat.price.toLocaleString()}</span>
                    <span className={`p-1 rounded text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-90 text-amber-400' : ''}`}>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>

                {/* Mobile Expanded Drawer */}
                {isActive && (
                  <div className="p-4 pt-0 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10">
                      <img src={slat.image} alt={slat.nameTh} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3 text-xs text-white font-medium">
                        {slat.tagline}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {slat.specs.slice(0, 4).map((spec, sIdx) => (
                        <div key={sIdx} className="bg-black/30 p-2 rounded border border-white/5">
                          <div className="text-[10px] text-slate-400">{spec.label}</div>
                          <div className="font-mono text-white font-semibold mt-0.5">{spec.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => handleAddToCart(slat, 20)}
                        className="flex-1 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>ใส่ตะกร้าสเปก</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSpecItem(slat);
                          setIsSpecModalOpen(true);
                        }}
                        className="p-2.5 rounded-lg bg-white/10 text-white border border-white/15"
                        title="ดูรายละเอียดเต็ม"
                      >
                        <Eye className="w-4 h-4 text-amber-400" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. ARCHITECTURAL SPECIFICATION COMPARISON MATRIX */}
      <section id="matrix" className="py-20 md:py-28 max-w-[1720px] mx-auto px-4 sm:px-8 border-b border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL SPECIFICATION MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ตารางเปรียบเทียบสเปกทางวิศวกรรมสถาปัตย์
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            เปรียบเทียบคุณสมบัติเชิงเทคนิคเพื่อประกอบการระบุสเปกในแบบร่าง BOQ สำหรับสถาปนิกและผู้บริหารโครงการ
          </p>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#02110a] shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-slate-300 font-mono uppercase tracking-wider text-[11px]">
                <th className="p-4 sm:p-5 font-bold">หมวดหมู่วัสดุ (Material Series)</th>
                <th className="p-4 sm:p-5 font-bold">ความหนา/น้ำหนัก</th>
                <th className="p-4 sm:p-5 font-bold">มาตรฐานทนไฟ</th>
                <th className="p-4 sm:p-5 font-bold">การใช้งานหลัก</th>
                <th className="p-4 sm:p-5 font-bold">การรับประกัน</th>
                <th className="p-4 sm:p-5 font-bold text-right">งบประมาณสเปก</th>
                <th className="p-4 sm:p-5 text-center font-bold">การดำเนินการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {slatsList.map((slat) => (
                <tr key={slat.id} className="hover:bg-white/[0.03] transition">
                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-amber-400 font-bold">{slat.indexStr}</span>
                      <div>
                        <strong className="text-white block font-bold">{slat.nameEn}</strong>
                        <span className="text-slate-400 text-xs">{slat.nameTh}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-slate-300">{slat.specs[1]?.value || '-'}</td>
                  <td className="p-4 sm:p-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {slat.specs[0]?.value || 'FR Certified'}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-300 text-xs">{slat.highlights[0]}</td>
                  <td className="p-4 sm:p-5 font-mono text-emerald-400">{slat.specs[3]?.value || '15-30 ปี'}</td>
                  <td className="p-4 sm:p-5 text-right font-mono font-bold text-white text-base">
                    ฿{slat.price.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/{slat.unit}</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    <button
                      onClick={() => handleAddToCart(slat, 25)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs transition font-mono uppercase tracking-wider"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>ใส่ตะกร้า</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. REAL-TIME B2B PROJECT ESTIMATOR & BUDGET CALCULATOR */}
      <section id="estimator" className="py-20 md:py-28 max-w-[1720px] mx-auto px-4 sm:px-8 border-b border-white/10">
        <div className="bg-gradient-to-br from-[#02140d] via-[#020e09] to-[#010805] border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Input Parameters */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>B2B REAL-TIME PROJECT ESTIMATOR</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  เครื่องคำนวณงบประมาณวัสดุโครงการเบื้องต้น
                </h3>
                <p className="text-sm text-slate-400">
                  เลือกหมวดหมู่วัสดุและระบุพื้นที่ติดตั้ง (ตารางเมตร) เพื่อประเมินปริมาณวัสดุและงบประมาณเบื้องต้นสำหรับวางงบโครงการ
                </p>
              </div>

              {/* Step 1: Select Category */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                  1. เลือกสเปกวัสดุปิดผิวที่ต้องการคำนวณ:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {slatsList.map((slat) => {
                    const isSel = estimatorSelectedCategory === slat.id;
                    return (
                      <button
                        key={slat.id}
                        onClick={() => setEstimatorSelectedCategory(slat.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSel 
                            ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10' 
                            : 'bg-black/30 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <div className="font-mono text-xs font-bold text-amber-400">{slat.indexStr}</div>
                        <div className="text-xs font-bold truncate mt-0.5">{slat.nameEn}</div>
                        <div className="text-[11px] font-mono text-slate-400 mt-1">฿{slat.price.toLocaleString()}/{slat.unit}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Input Area */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-mono text-slate-300 uppercase tracking-wider">
                    2. ระบุพื้นที่ติดตั้งโดยประมาณ:
                  </label>
                  <span className="font-mono font-bold text-amber-400 text-base">
                    {estimatorArea.toLocaleString()} ตารางเมตร (Sq.m.)
                  </span>
                </div>
                
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="10"
                  value={estimatorArea}
                  onChange={(e) => setEstimatorArea(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-white/10 rounded-lg"
                />

                <div className="flex items-center gap-2 pt-1">
                  {[50, 100, 250, 500, 1000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setEstimatorArea(preset)}
                      className={`px-3 py-1 rounded text-xs font-mono transition ${
                        estimatorArea === preset 
                          ? 'bg-amber-500 text-slate-950 font-bold' 
                          : 'bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      {preset} ตร.ม.
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Estimated Calculation Summary Card */}
            <div className="lg:col-span-5 bg-[#03140e] border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">ESTIMATED PROPOSAL</div>
                  <div className="text-lg font-bold text-white">สรุปประมาณการงบประมาณ</div>
                </div>
                <Award className="w-6 h-6 text-amber-400" />
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <span>วัสดุที่เลือก:</span>
                  <strong className="text-white font-mono">
                    {slatsList.find(s => s.id === estimatorSelectedCategory)?.nameEn}
                  </strong>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>พื้นที่ประเมิน:</span>
                  <strong className="text-white font-mono">{estimatorArea.toLocaleString()} ตารางเมตร</strong>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>ราคาเฉลี่ยต่อหน่วย:</span>
                  <span className="text-slate-200 font-mono">
                    ฿{slatsList.find(s => s.id === estimatorSelectedCategory)?.price.toLocaleString()} /ตร.ม.
                  </span>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-bold text-white">งบประมาณรวมโดยประมาณ:</span>
                  <span className="text-2xl font-black text-amber-400 font-mono">
                    ฿{calculatedEstimatorPrice.toLocaleString()}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 text-right font-mono">
                  *ราคายังไม่รวมภาษีมูลค่าเพิ่มและส่วนลดโครงการพิเศษ (Volume Discount)
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    const sel = slatsList.find(s => s.id === estimatorSelectedCategory) || slatsList[0];
                    handleAddToCart(sel, estimatorArea);
                    setIsCartOpen(true);
                  }}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>บันทึกงบประมาณนี้เข้าสู่ตะกร้าขอใบเสนอราคา</span>
                </button>

                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-400 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ส่งแบบเพื่อประเมินราคาฟรีผ่าน LINE</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. LANDMARK PROJECTS GALLERY (Signature Architecture) */}
      <section id="projects" className="py-20 md:py-28 max-w-[1720px] mx-auto px-4 sm:px-8 border-b border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO OF LANDMARK PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ผลงานโครงการระดับแลนด์มาร์กระดับประเทศ
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            กว่า 2,500+ โครงการอาคารสูง คอนโดมิเนียมระดับอัลตร้าลักชัวรี และสำนักงานใหญ่ที่ไว้วางใจใช้วัสดุและวิศวกรรมสเปกของเรา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'THE OBSIDIAN TOWER',
              category: 'High-Rise Commercial Facade',
              location: 'ถนนสุขุมวิท กรุงเทพฯ',
              spec: 'Aluminium Composite DECO FR A2 & Custom Louver',
              image: '/images/suppersurface/hero-facade.jpg'
            },
            {
              title: 'VILLA NOUVELLE RESIDENCE',
              category: 'Ultra-Luxury Private Estate',
              location: 'เขาใหญ่ นครราชสีมา',
              spec: 'MCM Flexible Stone Veneer & WPC Siding',
              image: '/images/suppersurface/stone-veneer.jpg'
            },
            {
              title: 'PAVILION HEADQUARTERS',
              category: 'Corporate Innovation Campus',
              location: 'บางนา กรุงเทพฯ',
              spec: 'Linear Ceiling 85C & Exterior Kinetic Slats',
              image: '/images/suppersurface/ceiling-85f.jpg'
            },
            {
              title: 'NIPPON ART GALLERY',
              category: 'Cultural & Exhibition Center',
              location: 'เชียงใหม่',
              spec: 'NICHIHA Japan Rain Screen Fibre Cement',
              image: '/images/suppersurface/nichiha-cement.jpg'
            }
          ].map((project, pIdx) => (
            <div 
              key={pIdx}
              className="group bg-[#02110a] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition duration-500 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02110a] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-amber-400 uppercase tracking-wider border border-white/10">
                  {project.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition">
                  {project.title}
                </h4>
                <div className="text-xs text-slate-400">{project.location}</div>
                <div className="pt-2 text-[11px] font-mono text-slate-300 border-t border-white/5">
                  <span className="text-amber-400">SPEC: </span>{project.spec}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROJECT DIRECTOR & EXCLUSIVE SALES PARTNER */}
      <section id="consultant" className="py-20 md:py-28 max-w-[1720px] mx-auto px-4 sm:px-8 border-b border-white/10">
        <div className="bg-[#02140d] border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 text-center space-y-4">
              <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl">
                <img
                  src="/images/suppersurface/hero-cinematic.jpg"
                  alt="สถาปัตยกรรมระดับลักชัวรี SalesDesk LUXE"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b08] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-xs font-mono text-amber-400 uppercase">OFFICIAL B2B PARTNER</div>
                  <div className="text-sm font-bold text-white">บจก. เฟมไลน์ โปร์ดักส์ (FAMELINE)</div>
                </div>
              </div>

              <button
                onClick={() => setShowQrModal(true)}
                className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:underline bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>คลิกเพื่อดู LINE QR Code ทางการ</span>
              </button>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>EXCLUSIVE ARCHITECTURAL CONSULTANT</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  {directorName}
                </h3>
                <p className="text-sm text-amber-400 font-medium">
                  {directorTitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ให้คำปรึกษาการคำนวณโครงสร้างสถาปัตย์ การถอดแบบ BOQ การทดสอบแรงลม และการวางสเปกวัสดุปิดผิวอาคารสำหรับโครงการขนาดใหญ่ พร้อมระบบจัดส่งตัวอย่างวัสดุจริงถึงออฟฟิศสถาปนิกทั่วประเทศ
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">เบอร์โทรศัพท์สายตรง: </span>
                    <a href={directPhoneCallUrl} className="font-bold text-amber-400 hover:underline text-base font-mono">
                      {directPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">อีเมลติดต่อฝ่ายขาย: </span>
                    <a href={`mailto:${directEmail}`} className="text-white hover:underline font-mono">
                      {directEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={directPhoneCallUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>โทร. {directPhone}</span>
                </a>

                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>แอดไลน์ปรึกษางานโครงการ</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. MINIMALL CART & OFFICIAL B2B QUOTATION DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="fixed inset-0 bg-[#020b08]/85 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative w-full max-w-xl bg-[#03140e] border-l border-white/10 shadow-2xl flex flex-col justify-between h-full z-10 animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#020d09]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-amber-500/20 text-amber-400">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base tracking-wide">
                    {checkoutStep === 'cart' && 'ตะกร้าสเปกวัสดุโครงการ (Spec Cart)'}
                    {checkoutStep === 'quote' && 'ขอใบเสนอราคาโครงการทางการ (Official Quotation)'}
                    {checkoutStep === 'success' && 'ส่งคำขอใบเสนอราคาสำเร็จ'}
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400">
                    SALESDESK LUXE ARCHETYPE SYSTEM
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              
              {/* STEP 1: CART LIST */}
              {checkoutStep === 'cart' && (
                <div className="space-y-4">
                  {cart.length === 0 ? (
                    <div className="py-16 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto text-slate-500">
                        <ShoppingCart className="w-8 h-8" />
                      </div>
                      <div className="text-slate-400 text-sm">ยังไม่มีรายการสเปกในตะกร้า</div>
                      <button
                        onClick={() => {
                          handleAddToCart(slatsList[0], 50);
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>ทดลองเพิ่ม {slatsList[0].nameEn} (50 ตร.ม.)</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {cart.map((item) => (
                        <div 
                          key={item.id}
                          className="bg-black/30 border border-white/10 rounded-xl p-4 flex items-center justify-between gap-3 hover:border-white/20 transition"
                        >
                          <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover border border-white/10" />
                            <div>
                              <strong className="text-white text-xs block font-bold">{item.name}</strong>
                              <span className="font-mono text-[11px] text-amber-400">฿{item.price.toLocaleString()} /{item.unit}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-white/15 rounded-lg bg-black/40">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, -10)}
                                className="p-1.5 text-slate-400 hover:text-white"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-mono text-xs font-bold text-white px-2 min-w-10 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, 10)}
                                className="p-1.5 text-slate-400 hover:text-white"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => handleRemoveFromCart(item.id)}
                              className="p-1.5 text-slate-500 hover:text-rose-400"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2: B2B FORM */}
              {checkoutStep === 'quote' && (
                <div className="space-y-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300">
                    กรอกข้อมูลเบื้องต้นเพื่อให้ออกเอกสารใบเสนอราคาทางการ และส่งข้อมูลเข้าสู่ LINE คุณแอลแบบเรียลไทม์
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">ชื่อผู้ติดต่อ / สถาปนิก *</label>
                      <input
                        type="text"
                        placeholder="เช่น สมชาย สถาปนิก"
                        value={quoteForm.customerName}
                        onChange={(e) => setQuoteForm({ ...quoteForm, customerName: e.target.value })}
                        className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">เบอร์โทรศัพท์ติดต่อ *</label>
                      <input
                        type="tel"
                        placeholder="081-xxx-xxxx"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">ชื่อบริษัท / นิติบุคคล</label>
                      <input
                        type="text"
                        placeholder="บจก. สถาปัตย์ ดีไซน์"
                        value={quoteForm.company}
                        onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                        className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">เลขประจำตัวผู้เสียภาษี (Tax ID)</label>
                      <input
                        type="text"
                        placeholder="01055xxxxxxxx"
                        value={quoteForm.taxId}
                        onChange={(e) => setQuoteForm({ ...quoteForm, taxId: e.target.value })}
                        className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">สถานที่จัดส่ง / ที่ตั้งโครงการ</label>
                    <input
                      type="text"
                      placeholder="เช่น โครงการอาคารสำนักงาน ถ.สุขุมวิท กทม."
                      value={quoteForm.projectLocation}
                      onChange={(e) => setQuoteForm({ ...quoteForm, projectLocation: e.target.value })}
                      className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">หมายเหตุ / ความต้องการเฉพาะ</label>
                    <textarea
                      rows={2}
                      placeholder="เช่น ต้องการตัวอย่างชิ้นงานจริง, ต้องการทดสอบค่าสะท้อนความร้อน"
                      value={quoteForm.notes}
                      onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                      className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: SUCCESS */}
              {checkoutStep === 'success' && (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">ส่งคำขอใบเสนอราคาเรียบร้อย</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    ระบบได้คัดลอกรายละเอียดใบเสนอราคาลงใน Clipboard และเปิด LINE ของคุณแอล เพื่อให้ท่านส่งข้อมูลคุยต่อได้ทันที
                  </p>
                  <button
                    onClick={() => {
                      setCheckoutStep('cart');
                      setIsCartOpen(false);
                      setCart([]);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
                  >
                    กลับสู่หน้าหลัก
                  </button>
                </div>
              )}

            </div>

            {/* Drawer Footer Summary */}
            {checkoutStep !== 'success' && (
              <div className="p-5 border-t border-white/10 bg-[#020d09] space-y-4">
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-mono">
                    <span>ยอดรวมก่อน VAT:</span>
                    <span>฿{cartSubtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 font-mono">
                    <span>ภาษีมูลค่าเพิ่ม VAT 7%:</span>
                    <span>฿{vatAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-white font-mono text-base font-bold pt-1 border-t border-white/10">
                    <span>ยอดรวมทั้งสิ้น (รวมภาษี):</span>
                    <span className="text-amber-400">฿{cartTotalWithVat.toLocaleString()}</span>
                  </div>
                </div>

                {checkoutStep === 'cart' ? (
                  <button
                    disabled={cart.length === 0}
                    onClick={() => setCheckoutStep('quote')}
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:pointer-events-none text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition active:scale-95"
                  >
                    <span>ดำเนินการขอใบเสนอราคาทางการ</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCheckoutStep('cart')}
                      className="px-4 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-xs"
                    >
                      ย้อนกลับ
                    </button>
                    <button
                      disabled={isSubmittingLead}
                      onClick={handleSubmitQuotation}
                      className="flex-1 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition active:scale-95"
                    >
                      {isSubmittingLead ? 'กำลังบันทึกข้อมูล...' : 'ยืนยันและส่งเข้า LINE คุณแอล'}
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* 8. SPEC MODAL DIALOG */}
      {isSpecModalOpen && selectedSpecItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-[#020b08]/85 backdrop-blur-sm"
            onClick={() => setIsSpecModalOpen(false)}
          />
          <div className="relative w-full max-w-2xl bg-[#03140e] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
            <div className="relative aspect-[16/9] w-full">
              <img src={selectedSpecItem.image} alt={selectedSpecItem.nameTh} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03140e] via-transparent to-transparent" />
              <button
                onClick={() => setIsSpecModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="font-mono text-xs font-bold text-amber-400">{selectedSpecItem.code}</span>
                <h3 className="text-2xl font-black text-white">{selectedSpecItem.nameEn}</h3>
                <p className="text-xs text-slate-300">{selectedSpecItem.nameTh}</p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedSpecItem.description}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {selectedSpecItem.specs.map((sp, idx) => (
                  <div key={idx} className="bg-black/40 p-3 rounded-lg border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">{sp.label}</div>
                    <div className="font-mono text-white font-bold mt-0.5">{sp.value}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">SPEC PRICE</div>
                  <div className="text-lg font-black text-amber-400 font-mono">
                    ฿{selectedSpecItem.price.toLocaleString()} /{selectedSpecItem.unit}
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleAddToCart(selectedSpecItem, 25);
                    setIsSpecModalOpen(false);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow"
                >
                  เพิ่มเข้าตะกร้าสเปก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. LINE QR CODE MODAL */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-[#020b08]/85 backdrop-blur-sm"
            onClick={() => setShowQrModal(false)}
          />
          <div className="relative w-full max-w-sm bg-[#03140e] border border-white/15 rounded-2xl shadow-2xl p-6 text-center space-y-4 z-10 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="font-bold text-white text-base">สแกน LINE QR Code คุณแอล</div>
            <div className="p-3 bg-white rounded-xl inline-block shadow">
              <img src="/images/suppersurface/line-qr.jpg" alt="LINE QR Code" className="w-48 h-48 object-contain" />
            </div>
            <p className="text-xs text-slate-400">
              ฝ่ายขายโครงการและสถาปนิก โทร. 066-168-5157
            </p>
            <a
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>เปิด LINE ทันที</span>
            </a>
          </div>
        </div>
      )}

      {/* 10. FIXED MOBILE ACTION BAR */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#020b08]/95 border-t border-white/10 backdrop-blur-lg p-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={directPhoneCallUrl}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white font-bold text-xs active:scale-95 transition"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>โทรหาคุณแอล</span>
        </a>

        <a
          href={lineUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs active:scale-95 transition"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>แอดไลน์</span>
        </a>

        <button
          onClick={() => {
            setIsCartOpen(true);
            setCheckoutStep('cart');
          }}
          className="relative inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs active:scale-95 transition"
        >
          <ShoppingCart className="w-4 h-4 text-slate-950" />
          <span>ตะกร้า</span>
          {totalItemCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-slate-950 text-amber-400 text-[10px] font-mono font-extrabold flex items-center justify-center">
              {totalItemCount}
            </span>
          )}
        </button>
      </div>

      {/* 11. LUXE FOOTER */}
      <footer className="bg-[#010805] border-t border-white/10 py-12 text-slate-500 text-xs">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-bold text-slate-300 font-mono tracking-wider">
              SALESDESK LUXE ARCHETYPE • FAMELINE PRODUCTS CO., LTD.
            </div>
            <p>
              35/11 ถนนกาญจนาภิเษก แขวงดอกไม้ เขตประเวศ กรุงเทพฯ 10250 | ติดต่อฝ่ายขายโครงการ: {directPhone} (คุณแอล)
            </p>
          </div>
          <div className="text-[11px] text-slate-600 font-mono">
            © {new Date().getFullYear()} SalesDesk LUXE Standard. High-Ticket B2B Conversion Architecture.
          </div>
        </div>
      </footer>

    </div>
  );
}
