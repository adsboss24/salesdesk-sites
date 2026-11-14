'use client';

import React, { useState, useMemo } from 'react';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  FileText, 
  CreditCard, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  Printer, 
  Download, 
  Search, 
  X, 
  ExternalLink, 
  Bed, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Building2, 
  Copy, 
  ChevronRight, 
  Table, 
  Grid, 
  Check, 
  ArrowLeft,
  QrCode,
  UploadCloud,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import PremiumFooter from '@/components/Footer';
import DemoBanner, { useDemoMode } from '@/components/DemoBanner';

// Types
export interface CartItem {
  id: string; // unique item id (prodId + variantKey)
  name: string;
  category: string;
  spec: string;
  size: string;
  fabric?: string;
  unitPrice: number;
  quantity: number;
  image: string;
  unit: string;
}

export default function TandJBeddingEcommercePage() {
  const { isDemo, phoneDisplay, phoneCallUrl, lineUrl } = useDemoMode({
    clientName: 'บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์',
    pageKey: 'tandj-bedding',
    defaultClientPhone: '086-461-4614',
    defaultClientLine: 'https://line.me/ti/p/~@fhu6688s',
  });

  // State
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'quote' | 'payment' | 'success'>('cart');
  const [copiedBank, setCopiedBank] = useState<boolean>(false);
  const [copiedPromptPay, setCopiedPromptPay] = useState<boolean>(false);

  // Selected variants state for items with options: [prodId]: { sizeIndex, fabricKey }
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: { size: string; fabric: string; price: number } }>({
    'pillowcase-standard': { size: '20"x30"x6"', fabric: 'Cotton 300T', price: 75 },
    'pillowcase-large': { size: '22"x36"x6"', fabric: 'Cotton 300T', price: 120 },
    'bedsheet-3.5': { size: '80"x110" (3.5 ฟุต)', fabric: 'Cotton 300T', price: 415 },
    'bedsheet-5': { size: '92"x110" (5 ฟุต)', fabric: 'Cotton 300T', price: 475 },
    'bedsheet-6': { size: '110"x110" (6 ฟุต)', fabric: 'Cotton 300T', price: 540 },
    'duvet-cover-3.5': { size: '70"x90" (3.5 ฟุต)', fabric: 'Cotton 300T', price: 720 },
    'duvet-cover-5': { size: '90"x90" (5 ฟุต)', fabric: 'Cotton 300T', price: 900 },
    'duvet-cover-6': { size: '100"x90" (6 ฟุต)', fabric: 'Cotton 300T', price: 930 },
  });

  // Customer Form Data for Quote & Checkout
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    address: '',
    taxId: '',
    notes: '',
    slipFile: null as File | null,
    slipPreview: '',
    transferTime: '',
  });

  // Complete Catalog Data based strictly on Customer CSV and real Images
  const products = useMemo(() => [
    // 1. หมอน & ปลอกหมอน
    {
      id: 'pillow-1200',
      name: 'หมอนขนห่านเทียม (ใยไมโครเจล) 1,200 กรัม',
      category: 'pillow',
      categoryName: 'หมอน & ปลอกหมอน',
      spec: 'สีขาว / นุ่มสปริงตัว รองรับต้นคอ มาตรฐานโรงแรม 5 ดาว',
      size: '19" x 29"',
      unit: 'ใบ',
      price: 440,
      image: '/images/tandj/pillow-pair.jpg',
      badge: 'ขายดีอันดับ 1',
    },
    {
      id: 'pillow-1400',
      name: 'หมอนขนห่านเทียม (ใยไมโครเจล) 1,400 กรัม',
      category: 'pillow',
      categoryName: 'หมอน & ปลอกหมอน',
      spec: 'สีขาว / หนาแน่นนุ่มฟู คืนตัวไว หลับสบายระดับลักชัวรี่',
      size: '21" x 35"',
      unit: 'ใบ',
      price: 470,
      image: '/images/tandj/pillow.jpg',
    },
    {
      id: 'pillowcase-standard',
      name: 'ปลอกหมอน สีขาว/เรียบ (ขนาดมาตรฐาน)',
      category: 'pillow',
      categoryName: 'หมอน & ปลอกหมอน',
      spec: 'สีขาว/เรียบ เนื้อแน่น เนียนนุ่ม ทนต่อการซักอบความร้อน',
      size: '20" x 30" x 6"',
      unit: 'ใบ',
      hasFabricOptions: true,
      fabrics: [
        { key: 'Cotton 300T', label: 'ผ้า Cotton 300T (ฝ้าย 100% สัมผัสนุ่มเย็น)', price: 75 },
        { key: 'CVC 300T', label: 'ผ้า CVC 300T (ทนทาน ซักง่าย อยู่ทรงสวย)', price: 65 },
        { key: 'TC Easy care 250T', label: 'ผ้า TC Easy Care 250T (รีดง่าย ประหยัดงบ)', price: 50 },
      ],
      image: '/images/tandj/pillowcase-insert.jpg',
    },
    {
      id: 'pillowcase-large',
      name: 'ปลอกหมอน ไซส์ใหญ่ สีขาว/เรียบ',
      category: 'pillow',
      categoryName: 'หมอน & ปลอกหมอน',
      spec: 'สีขาว/เรียบ สำหรับหมอนขนาดใหญ่พิเศษหรือหมอนคิง',
      size: '22" x 36" x 6"',
      unit: 'ใบ',
      hasFabricOptions: true,
      fabrics: [
        { key: 'Cotton 300T', label: 'ผ้า Cotton 300T', price: 120 },
        { key: 'CVC 300T', label: 'ผ้า CVC 300T', price: 100 },
        { key: 'TC Easy care 250T', label: 'ผ้า TC Easy Care 250T', price: 60 },
      ],
      image: '/images/tandj/pillow-case.jpg',
    },

    // 2. ผ้าปูที่นอนปล่อยชาย
    {
      id: 'bedsheet-3.5',
      name: 'ผ้าปูที่นอนปล่อยชาย ขนาด 3.5 ฟุต (Single / Twin)',
      category: 'bedsheet',
      categoryName: 'ผ้าปูที่นอน',
      spec: 'สีขาว/เรียบ ทนการซักอุตสาหกรรมบ่อยครั้ง',
      size: '80" x 110" (3.5 ฟุต)',
      unit: 'ผืน',
      hasFabricOptions: true,
      fabrics: [
        { key: 'Cotton 300T', label: 'ผ้า Cotton 300T (คอตตอนแท้ เกรด 5 ดาว)', price: 415 },
        { key: 'CVC 300T', label: 'ผ้า CVC 300T (ทนทานสูง คุ้มค่าที่สุด)', price: 365 },
        { key: 'TC Easy care 250T', label: 'ผ้า TC Easy care 250T (ประหยัดงบเริ่มต้น)', price: 230 },
      ],
      image: '/images/tandj/bedsheet-promo.jpg',
    },
    {
      id: 'bedsheet-5',
      name: 'ผ้าปูที่นอนปล่อยชาย ขนาด 5 ฟุต (Queen Size)',
      category: 'bedsheet',
      categoryName: 'ผ้าปูที่นอน',
      spec: 'สีขาว/เรียบ คลุมเตียงได้สวยงาม เก็บชายใต้ฟูกได้แน่นหนา',
      size: '92" x 110" (5 ฟุต)',
      unit: 'ผืน',
      hasFabricOptions: true,
      fabrics: [
        { key: 'Cotton 300T', label: 'ผ้า Cotton 300T', price: 475 },
        { key: 'CVC 300T', label: 'ผ้า CVC 300T', price: 410 },
        { key: 'TC Easy care 250T', label: 'ผ้า TC Easy care 250T', price: 260 },
      ],
      image: '/images/tandj/bedsheet-sateen.jpg',
    },
    {
      id: 'bedsheet-6',
      name: 'ผ้าปูที่นอนปล่อยชาย ขนาด 6 ฟุต (King Size)',
      category: 'bedsheet',
      categoryName: 'ผ้าปูที่นอน',
      spec: 'สีขาว/เรียบ ขนาดใหญ่พิเศษ เหมาะกับเตียงคิงไซส์ทุกความหนาฟูก',
      size: '110" x 110" (6 ฟุต)',
      unit: 'ผืน',
      hasFabricOptions: true,
      fabrics: [
        { key: 'Cotton 300T', label: 'ผ้า Cotton 300T', price: 540 },
        { key: 'CVC 300T', label: 'ผ้า CVC 300T', price: 480 },
        { key: 'TC Easy care 250T', label: 'ผ้า TC Easy care 250T', price: 340 },
      ],
      image: '/images/tandj/bedsheet.png',
      badge: 'ยอดนิยมสำหรับโรงแรม',
    },

    // 3. ปลอกนวม & ไส้นวม
    {
      id: 'duvet-cover-3.5',
      name: 'ปลอกนวม สีขาว/เรียบ ขนาด 3.5 ฟุต',
      category: 'duvet',
      categoryName: 'ปลอกนวม & ไส้นวม',
      spec: 'สีขาว/เรียบ มีเชือกผูกมุมด้านในยึดแน่นกับไส้นวม',
      size: '70" x 90" (3.5 ฟุต)',
      unit: 'ผืน',
      hasFabricOptions: true,
      fabrics: [
        { key: 'Cotton 300T', label: 'ผ้า Cotton 300T', price: 720 },
        { key: 'CVC 300T', label: 'ผ้า CVC 300T', price: 630 },
        { key: 'TC Easy care 250T', label: 'ผ้า TC Easy care 250T', price: 420 },
      ],
      image: '/images/tandj/duvet-set-promo.jpg',
    },
    {
      id: 'duvet-cover-5',
      name: 'ปลอกนวม สีขาว/เรียบ ขนาด 5 ฟุต (Queen Size)',
      category: 'duvet',
      categoryName: 'ปลอกนวม & ไส้นวม',
      spec: 'สีขาว/เรียบ ผิวสัมผัสเรียบลื่น ไม่ระคายเคืองผิว',
      size: '90" x 90" (5 ฟุต)',
      unit: 'ผืน',
      hasFabricOptions: true,
      fabrics: [
        { key: 'Cotton 300T', label: 'ผ้า Cotton 300T', price: 900 },
        { key: 'CVC 300T', label: 'ผ้า CVC 300T', price: 770 },
        { key: 'TC Easy care 250T', label: 'ผ้า TC Easy care 250T', price: 510 },
      ],
      image: '/images/tandj/duvet-cover.png',
    },
    {
      id: 'duvet-cover-6',
      name: 'ปลอกนวม สีขาว/เรียบ ขนาด 6 ฟุต (King Size)',
      category: 'duvet',
      categoryName: 'ปลอกนวม & ไส้นวม',
      spec: 'สีขาว/เรียบ หรูหรา เรียบร้อย มาตรฐานห้องพัก 5 ดาว',
      size: '100" x 90" (6 ฟุต)',
      unit: 'ผืน',
      hasFabricOptions: true,
      fabrics: [
        { key: 'Cotton 300T', label: 'ผ้า Cotton 300T', price: 930 },
        { key: 'CVC 300T', label: 'ผ้า CVC 300T', price: 800 },
        { key: 'TC Easy care 250T', label: 'ผ้า TC Easy care 250T', price: 560 },
      ],
      image: '/images/tandj/duvet-set-promo.jpg',
    },
    {
      id: 'duvet-insert-3.5',
      name: 'ไส้นวมใยไมโครไฟเบอร์ ขนาด 3.5 ฟุต',
      category: 'duvet',
      categoryName: 'ปลอกนวม & ไส้นวม',
      spec: 'ใยไมโครไฟเบอร์นุ่มเบา กระจายความร้อนดีเยี่ยม ห่มสบายไม่อบอ้าว',
      size: '70" x 90"',
      unit: 'ผืน',
      price: 540,
      image: '/images/tandj/duvet-folded.jpg',
    },
    {
      id: 'duvet-insert-5',
      name: 'ไส้นวมใยไมโครไฟเบอร์ ขนาด 5 ฟุต',
      category: 'duvet',
      categoryName: 'ปลอกนวม & ไส้นวม',
      spec: 'เย็บช่องตารางล็อกเส้นใยไม่กระจุกตัว พร้อมหูคล้องเชือก 8 จุด',
      size: '90" x 90"',
      unit: 'ผืน',
      price: 630,
      image: '/images/tandj/duvet.jpg',
    },
    {
      id: 'duvet-insert-6',
      name: 'ไส้นวมใยไมโครไฟเบอร์ ขนาด 6 ฟุต',
      category: 'duvet',
      categoryName: 'ปลอกนวม & ไส้นวม',
      spec: 'ขนาดใหญ่คลุมเตียงคิงไซส์ นุ่มฟูเสมือนขนห่านธรรมชาติ',
      size: '100" x 90"',
      unit: 'ผืน',
      price: 650,
      image: '/images/tandj/duvet-folded.jpg',
    },

    // 4. ผ้ารองกันเปื้อน & ท็อปเปอร์
    {
      id: 'protector-3.5',
      name: 'ผ้ารองกันเปื้อน กันน้ำ 100% ขนาด 3.5 ฟุต',
      category: 'protector',
      categoryName: 'Topper & ผ้ารองกันเปื้อน',
      spec: 'เคลือบฟิล์มกันน้ำ 100% ไม่อับชื้น ระบายอากาศดี ไร้เสียงกวนใจ',
      size: '42" x 78"',
      unit: 'ผืน',
      price: 470,
      image: '/images/tandj/waterproof-protector.jpg',
    },
    {
      id: 'protector-5',
      name: 'ผ้ารองกันเปื้อน กันน้ำ 100% ขนาด 5 ฟุต',
      category: 'protector',
      categoryName: 'Topper & ผ้ารองกันเปื้อน',
      spec: 'ยางยืดรัดมุม 4 ด้าน กระชับฟูกที่นอน ยืดอายุการใช้งานฟูก',
      size: '60" x 78"',
      unit: 'ผืน',
      price: 660,
      image: '/images/tandj/waterproof-protector.jpg',
    },
    {
      id: 'protector-6',
      name: 'ผ้ารองกันเปื้อน กันน้ำ 100% ขนาด 6 ฟุต',
      category: 'protector',
      categoryName: 'Topper & ผ้ารองกันเปื้อน',
      spec: 'ปกป้องฟูกที่นอนคิงไซส์ ป้องกันคราบสกปรกและของเหลว 100%',
      size: '72" x 78"',
      unit: 'ผืน',
      price: 760,
      image: '/images/tandj/waterproof-protector.jpg',
      badge: 'แนะนำสำหรับโรงแรม',
    },
    {
      id: 'topper-3.5',
      name: 'ท็อปเปอร์ (Topper) ใยไมโครไฟเบอร์ หนา 3 นิ้ว ขนาด 3.5 ฟุต',
      category: 'topper',
      categoryName: 'Topper & ผ้ารองกันเปื้อน',
      spec: 'หนา 3 นิ้ว นุ่มแน่นรองรับสรีระ ยกระดับเตียงนอนนุ่มเหมือนนอนบนเมฆ',
      size: '70" x 90" (เตียง 3.5 ฟุต)',
      unit: 'หลัง',
      price: 1830,
      image: '/images/tandj/topper-promo.jpg',
    },
    {
      id: 'topper-5',
      name: 'ท็อปเปอร์ (Topper) ใยไมโครไฟเบอร์ หนา 3 นิ้ว ขนาด 5 ฟุต',
      category: 'topper',
      categoryName: 'Topper & ผ้ารองกันเปื้อน',
      spec: 'เส้นใยสังเคราะห์ไมโครไฟเบอร์ เย็บควิลท์สี่เหลี่ยม ล็อกใยทั่วผืน',
      size: '90" x 90" (เตียง 5 ฟุต)',
      unit: 'หลัง',
      price: 2420,
      image: '/images/tandj/topper-promo.jpg',
    },
    {
      id: 'topper-6',
      name: 'ท็อปเปอร์ (Topper) ใยไมโครไฟเบอร์ หนา 3 นิ้ว ขนาด 6 ฟุต',
      category: 'topper',
      categoryName: 'Topper & ผ้ารองกันเปื้อน',
      spec: 'สัมผัสนุ่มระดับลักชัวรี่สำหรับเตียง 6 ฟุต แปลงเตียงธรรมดาเป็นเตียง 5 ดาว',
      size: '100" x 90" (เตียง 6 ฟุต)',
      unit: 'หลัง',
      price: 2590,
      image: '/images/tandj/topper-promo.jpg',
      badge: 'ฟีลลิ่ง 5 ดาว',
    },

    // 5. ผ้าขนหนู & ผ้าเช็ดเท้า
    {
      id: 'towel-face-1.6',
      name: 'ผ้าขนหนูเช็ดหน้า 1.6 ปอนด์ (60 กรัม)',
      category: 'towel',
      categoryName: 'ผ้าขนหนู & ผ้าเช็ดเท้า',
      spec: 'สีขาว / ทอขนคู่ ด้ายคู่ ซับน้ำได้ดีเยี่ยม ไม่เป็นขุย',
      size: '12" x 12"',
      unit: 'ผืน',
      price: 20,
      image: '/images/tandj/towel-face-1.6.jpg',
    },
    {
      id: 'towel-hand-4',
      name: 'ผ้าขนหนูเช็ดผม 4 ปอนด์ (150 กรัม)',
      category: 'towel',
      categoryName: 'ผ้าขนหนู & ผ้าเช็ดเท้า',
      spec: 'สีขาว / ทอขนคู่ แน่นหนา ทนทานการซักและอบแห้งอุตสาหกรรม',
      size: '15" x 30"',
      unit: 'ผืน',
      price: 60,
      image: '/images/tandj/towel-hand-4.jpg',
    },
    {
      id: 'towel-bath-12',
      name: 'ผ้าขนหนูเช็ดตัว 12 ปอนด์ (450 กรัม)',
      category: 'towel',
      categoryName: 'ผ้าขนหนู & ผ้าเช็ดเท้า',
      spec: 'สีขาว / ทอขนคู่ เส้นใยฝ้ายบริสุทธิ์ 100% แห้งเร็ว คุ้มค่า',
      size: '27" x 54"',
      unit: 'ผืน',
      price: 150,
      image: '/images/tandj/towel-bath-12.jpg',
    },
    {
      id: 'towel-bath-14',
      name: 'ผ้าขนหนูเช็ดตัว 14 ปอนด์ (500-530 กรัม)',
      category: 'towel',
      categoryName: 'ผ้าขนหนู & ผ้าเช็ดเท้า',
      spec: 'สีขาว / ขนคู่ ความหนามาตรฐานโรงแรมและรีสอร์ทชั้นนำ',
      size: '27" x 54"',
      unit: 'ผืน',
      price: 190,
      image: '/images/tandj/towel-bath-14.jpg',
      badge: 'สเปกยอดนิยม',
    },
    {
      id: 'towel-bath-16',
      name: 'ผ้าขนหนูเช็ดตัว 16 ปอนด์ (600 กรัม)',
      category: 'towel',
      categoryName: 'ผ้าขนหนู & ผ้าเช็ดเท้า',
      spec: 'สีขาว / ขนคู่ ผืนใหญ่หนานุ่มพิเศษ ให้ความรู้สึกหรูหรา',
      size: '30" x 60"',
      unit: 'ผืน',
      price: 220,
      image: '/images/tandj/towel-bath-16.jpg',
    },
    {
      id: 'towel-bath-18',
      name: 'ผ้าขนหนูเช็ดตัว 18 ปอนด์ (680 กรัม)',
      category: 'towel',
      categoryName: 'ผ้าขนหนู & ผ้าเช็ดเท้า',
      spec: 'สีขาว / ขนคู่ หนานุ่มที่สุดระดับพรีเมียมโรงแรม 5 ดาว',
      size: '30" x 60"',
      unit: 'ผืน',
      price: 300,
      image: '/images/tandj/towel-bath-18.jpg',
    },
    {
      id: 'mat-bath-10.5',
      name: 'ผ้าเช็ดเท้า 10.5 ปอนด์ (400 กรัม)',
      category: 'towel',
      categoryName: 'ผ้าขนหนู & ผ้าเช็ดเท้า',
      spec: 'สีขาว / ทอลายกรอบ Jacquard หนาทนทาน ซับน้ำไว ไม่ลื่น',
      size: '20" x 30"',
      unit: 'ผืน',
      price: 120,
      image: '/images/tandj/mat-bath-10.5.jpg',
    },
    {
      id: 'mat-welcome-8',
      name: 'ผ้าเช็ดเท้าทอลาย Welcome 8 ปอนด์ (300 กรัม)',
      category: 'towel',
      categoryName: 'ผ้าขนหนู & ผ้าเช็ดเท้า',
      spec: 'สีขาว / ทอตัวอักษร WELCOME สวยเด่น ซับน้ำได้ดี',
      size: '18" x 28"',
      unit: 'ผืน',
      price: 110,
      image: '/images/tandj/mat-welcome-8.jpg',
    },
    {
      id: 'towel-pool-25',
      name: 'ผ้าเช็ดตัวสระน้ำ (Pool Towel) 25 ปอนด์ (950 กรัม)',
      category: 'towel',
      categoryName: 'ผ้าขนหนู & ผ้าเช็ดเท้า',
      spec: 'สีเทา / ขนคู่ ผืนใหญ่หนาพิเศษ ทนคลอรีนและแสงแดด เหมาะสำหรับสระว่ายน้ำ',
      size: '35" x 70"',
      unit: 'ผืน',
      price: 390,
      image: '/images/tandj/towel-pool-25.jpg',
      badge: 'สำหรับสระว่ายน้ำ',
    },
  ], []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchQuery = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.spec.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.size.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [products, activeCategory, searchQuery]);

  // Handle Fabric / Variant Selection
  const handleVariantChange = (prodId: string, size: string, fabric: string, price: number) => {
    setSelectedVariants(prev => ({
      ...prev,
      [prodId]: { size, fabric, price }
    }));
  };

  // Add Item to Cart
  const handleAddToCart = (prod: typeof products[0]) => {
    let finalPrice = prod.price || 0;
    let finalFabric = '';
    let finalSize = prod.size;

    if (prod.hasFabricOptions && selectedVariants[prod.id]) {
      finalPrice = selectedVariants[prod.id].price;
      finalFabric = selectedVariants[prod.id].fabric;
      finalSize = selectedVariants[prod.id].size;
    }

    const itemKey = `${prod.id}-${finalFabric}-${finalSize}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === itemKey);
      if (existing) {
        return prev.map(item => 
          item.id === itemKey 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, {
          id: itemKey,
          name: prod.name,
          category: prod.categoryName,
          spec: prod.spec,
          size: finalSize,
          fabric: finalFabric,
          unitPrice: finalPrice,
          quantity: 1,
          image: prod.image,
          unit: prod.unit,
        }];
      }
    });

    setIsCartOpen(true);
  };

  // Update Cart Quantity
  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === itemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  // Remove Item
  const handleRemoveItem = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  // Calculations
  const totalItemCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0), [cart]);
  const estimatedShipping = useMemo(() => (subtotal > 10000 || subtotal === 0 ? 0 : 250), [subtotal]);
  const grandTotal = useMemo(() => subtotal + estimatedShipping, [subtotal, estimatedShipping]);

  // Quotation Number Generator
  const quotationNumber = useMemo(() => {
    const d = new Date();
    const dateStr = d.toISOString().slice(0, 10).replace(/-/g, '');
    return `QT-${dateStr}-8821`;
  }, []);

  const handleCopyBank = () => {
    navigator.clipboard.writeText('9573007137');
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleCopyPromptPay = () => {
    navigator.clipboard.writeText('0905569004400');
    setCopiedPromptPay(true);
    setTimeout(() => setCopiedPromptPay(false), 2500);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-800 font-sans selection:bg-blue-900 selection:text-white pb-24 md:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* 0. DEMO GUARD / URGENCY BANNER */}
      <DemoBanner clientName="บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์" pageKey="tandj-bedding" />

      {/* 1. TOP MINIMAL BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="font-bold text-amber-400">บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์</span>
            <span className="text-slate-500">•</span>
            <span className="truncate">SUCCESS LAUNDRY AND HOTEL SUPPLY • โรงงานผลิตและจัดจำหน่ายสิ่งทอโรงแรม รีสอร์ท ครบวงจร</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium shrink-0">
            <a href={phoneCallUrl} className="hover:text-amber-400 flex items-center gap-1.5 transition">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" /> {phoneDisplay}
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" /> ส่งทั่วไทย (ยอด 10,000+ ส่งฟรี)
            </span>
          </div>
        </div>
      </div>

      {/* 2. MINIMAL E-COMMERCE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Brand & Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white shadow-sm border border-amber-400/50 shrink-0 flex items-center justify-center p-0.5">
              <img
                src="/images/tandj/success-logo.jpg"
                alt="บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-none">
                  SUCCESS
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold border border-amber-300">
                  HOTEL SUPPLY
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium">
                บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="ค้นหารายการสินค้า เช่น หมอน, ผ้าปู, ปลอกนวม, ผ้าขนหนู..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-xs sm:text-sm transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Header Action: View Cart & Hotline */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>ติดต่อฝ่ายขาย</span>
            </a>

            <button
              onClick={() => {
                setCheckoutStep('cart');
                setIsCartOpen(true);
              }}
              className="relative inline-flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-98 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 text-amber-400" />
              <span>รายการที่เลือก</span>
              {totalItemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] flex items-center justify-center -mr-1">
                  {totalItemCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* 3. MINIMAL HERO & CATEGORY NAV */}
      <section className="bg-white border-b border-slate-200/80 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 uppercase tracking-wider">
                Direct Factory Catalog
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                รายการสินค้าชุดเครื่องนอนเกรดโรงแรม
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                เลือกสินค้าตามรายการด้านล่าง ใส่จำนวน และคลิกเพื่อ <strong>ออกใบเสนอราคาอย่างเป็นทางการ</strong> หรือ <strong>ชำระเงินผ่านบัญชีธนาคาร</strong> ได้ทันที
              </p>
            </div>

            {/* View Switcher & Price Table Link */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  viewMode === 'grid' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title="มุมมองการ์ดสินค้า"
              >
                <Grid className="w-4 h-4" />
                <span className="hidden sm:inline">การ์ดสินค้า</span>
              </button>

              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  viewMode === 'table' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title="มุมมองตารางราคารวม"
              >
                <Table className="w-4 h-4" />
                <span className="hidden sm:inline">ตารางสเปก & ราคา</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100 no-scrollbar">
            {[
              { key: 'all', label: 'ทั้งหมด (28 รายการ)' },
              { key: 'pillow', label: 'หมอน & ปลอกหมอน' },
              { key: 'bedsheet', label: 'ผ้าปูที่นอนปล่อยชาย' },
              { key: 'duvet', label: 'ปลอกนวม & ไส้นวม' },
              { key: 'protector', label: 'ผ้ารองกันเปื้อน' },
              { key: 'topper', label: 'ท็อปเปอร์ หนา 3 นิ้ว' },
              { key: 'towel', label: 'ผ้าขนหนู & ผ้าเช็ดเท้า' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === tab.key
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MAIN CONTENT AREA: GRID OR TABLE */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Active Filter Bar on Mobile */}
        <div className="md:hidden mb-6">
          <input
            type="text"
            placeholder="ค้นหาสินค้า..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs shadow-xs"
          />
        </div>

        {/* CASE A: GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const currentVariant = selectedVariants[prod.id];
              const displayPrice = prod.hasFabricOptions && currentVariant
                ? currentVariant.price
                : prod.price;

              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {prod.badge && (
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2.5 py-0.5 rounded-md bg-slate-900/90 text-amber-300 text-[10px] font-bold backdrop-blur-xs shadow-xs">
                            {prod.badge}
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-2 right-2">
                        <span className="px-2 py-0.5 rounded bg-white/90 text-slate-700 text-[10px] font-semibold shadow-xs">
                          {prod.size}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4 sm:p-5 space-y-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                          {prod.categoryName}
                        </span>
                        <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug line-clamp-2 mt-0.5">
                          {prod.name}
                        </h2>
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {prod.spec}
                      </p>

                      {/* Fabric Selector if available */}
                      {prod.hasFabricOptions && prod.fabrics && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          <label className="text-[11px] font-bold text-slate-700 block">
                            เลือกชนิดผ้า:
                          </label>
                          <div className="space-y-1">
                            {prod.fabrics.map((fab) => {
                              const isSelected = currentVariant?.fabric === fab.key;
                              return (
                                <button
                                  key={fab.key}
                                  type="button"
                                  onClick={() => handleVariantChange(prod.id, prod.size, fab.key, fab.price)}
                                  className={`w-full text-left p-2 rounded-lg border text-xs flex items-center justify-between transition cursor-pointer ${
                                    isSelected
                                      ? 'bg-blue-50 border-blue-900 text-blue-950 font-bold'
                                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                                  }`}
                                >
                                  <div className="flex items-center gap-1.5 truncate">
                                    <div className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 ${
                                      isSelected ? 'border-blue-900 bg-blue-900' : 'border-slate-400'
                                    }`}>
                                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                    </div>
                                    <span className="truncate">{fab.key}</span>
                                  </div>
                                  <span className="font-extrabold text-blue-950 shrink-0 ml-2">
                                    ฿{fab.price}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Price & Add to Cart Action */}
                  <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">ราคาต่อ{prod.unit}</span>
                      <div className="text-lg sm:text-xl font-black text-slate-900">
                        ฿{displayPrice}
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(prod)}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition flex items-center gap-1.5 active:scale-95 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 text-amber-400" />
                      <span>เลือกใส่รายการ</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* CASE B: TABLE VIEW (Official Raw Spec & Price Sheet View) */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-slate-900">ตารางรายการสินค้าและสเปกราคามาตรฐานโรงงาน</h2>
                <p className="text-xs text-slate-500">คลิกปุ่ม (+) เพื่อเลือกสินค้าเข้าสู่ตระกร้าหรือใบเสนอราคา</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">รูปภาพ</th>
                    <th className="py-3 px-4">รายการสินค้า</th>
                    <th className="py-3 px-4">ขนาด</th>
                    <th className="py-3 px-4">สเปก / สี</th>
                    <th className="py-3 px-4">ราคามาตรฐาน</th>
                    <th className="py-3 px-4 text-center">เลือกสินค้า</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-3 px-4 w-16">
                        <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded-lg border border-slate-200" />
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        {p.name}
                        {p.hasFabricOptions && (
                          <span className="block text-[11px] font-normal text-blue-900 mt-0.5">
                            (มีตัวเลือก: Cotton 300T / CVC 300T / TC 250T)
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-slate-600 font-mono text-xs">{p.size}</td>
                      <td className="py-3 px-4 text-slate-500 max-w-xs">{p.spec}</td>
                      <td className="py-3 px-4 font-black text-slate-900">
                        {p.hasFabricOptions ? (
                          <div className="text-xs space-y-0.5">
                            <div>Cotton: ฿{p.fabrics?.[0].price}</div>
                            <div>CVC: ฿{p.fabrics?.[1].price}</div>
                            <div>TC: ฿{p.fabrics?.[2].price}</div>
                          </div>
                        ) : (
                          <span>฿{p.price} / {p.unit}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleAddToCart(p)}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs inline-flex items-center gap-1 shadow-xs cursor-pointer"
                        >
                          <Plus className="w-3 h-3 text-amber-400" />
                          <span>เลือก</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* B2B CORPORATE CREDENTIALS & TRUST SECTION */}
        <section className="mt-16 pt-10 border-t border-slate-200">
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Brand & Legal Info */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-sm border border-amber-400 shrink-0 p-0.5">
                    <img
                      src="/images/tandj/success-logo.jpg"
                      alt="บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      บริษัท ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์ จำกัด
                    </h3>
                    <p className="text-xs font-semibold text-amber-800">
                      Success Laundry & Hotel Supply Co., Ltd.
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-1.5 pl-0 sm:pl-1">
                  <p>
                    <strong className="text-slate-800">เลขทะเบียนนิติบุคคล / ผู้เสียภาษี:</strong>{' '}
                    <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">0905569004400</span>
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-slate-800">สำนักงานใหญ่ / ที่อยู่:</strong> 11 ซอยน้ำทิพย์ ถนนเลียบคลอง ร.๕ ตำบลคอหงส์ อำเภอหาดใหญ่ จังหวัดสงขลา 90110
                  </p>
                  <p>
                    <strong className="text-slate-800">ฝ่ายขายและประสานงานโครงการ:</strong>{' '}
                    <a href={phoneCallUrl} className="font-bold text-blue-900 hover:underline">
                      086-461-4614
                    </a>
                  </p>
                </div>
              </div>

              {/* Verified Payment Channels Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-900">ช่องทางการชำระเงินทางการ (B2B)</span>
                  </div>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                    บัญชีบริษัท
                  </span>
                </div>

                {/* SCB */}
                <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                      SCB
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-900 block leading-tight">ธ.ไทยพาณิชย์ (บัญชีเดินสะพัด)</span>
                      <span className="font-mono text-xs font-black text-purple-900 tracking-wide">9573 007 137</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyBank}
                    className="px-2.5 py-1 text-[11px] rounded bg-white hover:bg-purple-100 text-purple-900 border border-purple-200 font-semibold cursor-pointer shrink-0"
                  >
                    {copiedBank ? 'คัดลอกแล้ว' : 'คัดลอก'}
                  </button>
                </div>

                {/* PromptPay */}
                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                      PP
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-900 block leading-tight">พร้อมเพย์นิติบุคคล (PromptPay)</span>
                      <span className="font-mono text-xs font-black text-emerald-900 tracking-wide">0905569004400</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPromptPay}
                    className="px-2.5 py-1 text-[11px] rounded bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-semibold cursor-pointer shrink-0"
                  >
                    {copiedPromptPay ? 'คัดลอกแล้ว' : 'คัดลอก'}
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 5. FLOATING CART SUMMARY BAR (When Cart has items) */}
      {totalItemCount > 0 && !isCartOpen && (
        <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:w-96 z-40">
          <div className="bg-slate-950 text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-amber-500/40 backdrop-blur-lg flex items-center justify-between gap-3 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                {totalItemCount}
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">ยอดรวมสินค้า ({totalItemCount} ชิ้น)</span>
                <span className="text-base sm:text-lg font-black text-amber-300">
                  ฿{subtotal.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setCheckoutStep('cart');
                setIsCartOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-white text-slate-950 font-black text-xs hover:bg-amber-300 transition shadow-md flex items-center gap-1 cursor-pointer"
            >
              <span>ดูสรุป & สั่งซื้อ</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 6. E-COMMERCE CART & CHECKOUT DRAWER / MODAL */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
          
          <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-left">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-white border-b border-slate-200 p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                  <ShoppingCart className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    {checkoutStep === 'cart' && `ตระกร้าสินค้า (${totalItemCount} ชิ้น)`}
                    {checkoutStep === 'quote' && 'ออกใบเสนอราคาอย่างเป็นทางการ (Official Quotation)'}
                    {checkoutStep === 'payment' && 'ชำระเงินผ่านบัญชีธนาคาร (Bank Transfer)'}
                    {checkoutStep === 'success' && 'บันทึกคำสั่งซื้อเรียบร้อยแล้ว'}
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 flex-1 space-y-6">
              
              {/* STEP 1: CART ITEMS REVIEW */}
              {checkoutStep === 'cart' && (
                <>
                  {cart.length === 0 ? (
                    <div className="text-center py-16 space-y-3">
                      <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                        <ShoppingCart className="w-8 h-8" />
                      </div>
                      <h4 className="text-base font-bold text-slate-800">ยังไม่มีสินค้าในรายการ</h4>
                      <p className="text-xs text-slate-500">กรุณาเลือกรายการสินค้าจากหน้าแคตตาล็อกก่อนครับ</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-3"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg border border-slate-200 shrink-0"
                          />

                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                              {item.name}
                            </h4>
                            <div className="text-[11px] text-slate-500 space-x-2">
                              <span>ขนาด: {item.size}</span>
                              {item.fabric && <span className="font-semibold text-blue-900">({item.fabric})</span>}
                            </div>
                            <div className="text-xs font-black text-slate-900 mt-1">
                              ฿{item.unitPrice.toLocaleString()} / {item.unit}
                            </div>
                          </div>

                          {/* Quantity control */}
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="flex items-center border border-slate-300 rounded-lg bg-white">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, -1)}
                                className="p-1 hover:bg-slate-100 text-slate-600 cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-8 text-center text-xs font-bold text-slate-900 font-mono">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, 1)}
                                className="p-1 hover:bg-slate-100 text-slate-600 cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="p-1.5 text-slate-400 hover:text-red-500 transition cursor-pointer"
                              title="ลบรายการ"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}

                      {/* Cart Summary Totals */}
                      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 space-y-2 text-xs">
                        <div className="flex justify-between text-slate-600">
                          <span>ยอดรวมสินค้า ({totalItemCount} ชิ้น):</span>
                          <span className="font-bold">฿{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>ค่าจัดส่งประเมินเบื้องต้น:</span>
                          <span className="font-bold">
                            {estimatedShipping === 0 ? (
                              <span className="text-emerald-600">ฟรี (สั่งซื้อครบ 10,000 บาท)</span>
                            ) : (
                              `฿${estimatedShipping}`
                            )}
                          </span>
                        </div>
                        <div className="border-t border-slate-200 pt-2 flex justify-between text-sm sm:text-base font-black text-slate-900">
                          <span>ยอดรวมทั้งสิ้น (Grand Total):</span>
                          <span className="text-blue-950">฿{grandTotal.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Action Choice: Quote vs Bank Transfer */}
                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-bold text-slate-700">เลือกขั้นตอนถัดไปที่คุณต้องการ:</div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button
                            onClick={() => setCheckoutStep('quote')}
                            className="p-4 rounded-xl border-2 border-slate-800 bg-white hover:bg-slate-50 text-left transition flex flex-col justify-between group cursor-pointer"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="p-2 rounded-lg bg-blue-50 text-blue-900">
                                <FileText className="w-5 h-5" />
                              </span>
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <div>
                              <span className="font-bold text-sm text-slate-900 block">
                                1. ขอใบเสนอราคา
                              </span>
                              <span className="text-[11px] text-slate-500 block mt-0.5">
                                ออกเอกสาร PDF เป็นทางการเพื่อเสนอฝ่ายจัดซื้อ/ผู้บริหาร
                              </span>
                            </div>
                          </button>

                          <button
                            onClick={() => setCheckoutStep('payment')}
                            className="p-4 rounded-xl border-2 border-amber-500 bg-gradient-to-br from-amber-50/50 to-orange-50/30 hover:bg-amber-100/40 text-left transition flex flex-col justify-between group cursor-pointer"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="p-2 rounded-lg bg-amber-500 text-slate-950 font-bold">
                                <CreditCard className="w-5 h-5" />
                              </span>
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <div>
                              <span className="font-bold text-sm text-slate-900 block">
                                2. ชำระเงินผ่านธนาคาร
                              </span>
                              <span className="text-[11px] text-slate-500 block mt-0.5">
                                โอนชำระเงินผ่านบัญชีโรงงาน และแนบสลิปเพื่อยืนยันส่งของ
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>

                    </div>
                  )}
                </>
              )}

              {/* STEP 2: OFFICIAL QUOTATION GENERATOR */}
              {checkoutStep === 'quote' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setCheckoutStep('cart')}
                      className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> ย้อนกลับตระกร้า
                    </button>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      เลขที่: {quotationNumber}
                    </span>
                  </div>

                  {/* Customer Information Inputs */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      ข้อมูลสำหรับออกใบเสนอราคา (Quotation Details)
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          ชื่อผู้ติดต่อ / ฝ่ายจัดซื้อ <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={customerInfo.name}
                          onChange={e => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                          placeholder="เช่น คุณกฤษณะ จัดซื้อ"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          ชื่อโรงแรม / โฮมสเตย์ / รีสอร์ท <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={customerInfo.businessName}
                          onChange={e => setCustomerInfo({ ...customerInfo, businessName: e.target.value })}
                          placeholder="เช่น กรีน ฮิลล์ พูลวิลล่า เขาใหญ่"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          เบอร์โทรศัพท์ติดต่อกลับ <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerInfo.phone}
                          onChange={e => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          placeholder="เช่น 086-461-4614"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          อีเมลสำหรับรับเอกสาร
                        </label>
                        <input
                          type="email"
                          value={customerInfo.email}
                          onChange={e => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                          placeholder="purchase@hotelname.com"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        ที่อยู่จัดส่งและออกเอกสาร
                      </label>
                      <textarea
                        rows={2}
                        value={customerInfo.address}
                        onChange={e => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                        placeholder="ที่อยู่โครงการ หรือสาขาจัดส่ง..."
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                      />
                    </div>
                  </div>

                  {/* Quotation Preview Card */}
                  <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-sm space-y-4 font-sans text-xs">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 border-b border-slate-200 pb-4">
                      <div className="flex items-start gap-3">
                        <img
                          src="/images/tandj/success-logo.jpg"
                          alt="บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์"
                          className="w-14 h-14 rounded-full object-cover border border-amber-300 shadow-xs shrink-0 mt-0.5"
                        />
                        <div>
                          <div className="text-sm sm:text-base font-black text-slate-900 leading-tight">บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์</div>
                          <div className="text-[11px] text-amber-800 font-bold tracking-wide">Success Laundry & Hotel Supply Co., Ltd.</div>
                          <div className="text-[10px] text-slate-600 mt-0.5">
                            เลขประจำตัวผู้เสียภาษี: <span className="font-mono font-bold text-slate-900">0905569004400</span>
                          </div>
                          <div className="text-[10px] text-slate-500 leading-relaxed max-w-sm">
                            11 ซอยน้ำทิพย์ ถ.เลียบคลอง ร.๕ ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา 90110
                          </div>
                          <div className="text-[10px] text-slate-500">โทร: {phoneDisplay} (ฝ่ายขายตรงโรงงาน)</div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right shrink-0">
                        <div className="text-sm font-black text-blue-900">ใบเสนอราคา / QUOTATION</div>
                        <div className="text-[10px] font-mono text-slate-600">เลขที่: {quotationNumber}</div>
                        <div className="text-[10px] text-slate-400">วันที่: {new Date().toLocaleDateString('th-TH')}</div>
                      </div>
                    </div>

                    {/* Customer Meta */}
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px] grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-slate-400">ลูกค้า:</span> <strong>{customerInfo.name || 'คุณลูกค้า'}</strong>
                        <br />
                        <span className="text-slate-400">โครงการ:</span> {customerInfo.businessName || '-'}
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400">เบอร์โทร:</span> {customerInfo.phone || '-'}
                        <br />
                        <span className="text-slate-400">อีเมล:</span> {customerInfo.email || '-'}
                      </div>
                    </div>

                    {/* Quotation Table */}
                    <table className="w-full text-left text-[11px]">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-y border-slate-200">
                        <tr>
                          <th className="py-1.5 px-2">ลำดับ</th>
                          <th className="py-1.5 px-2">รายการสินค้า</th>
                          <th className="py-1.5 px-2 text-center">จำนวน</th>
                          <th className="py-1.5 px-2 text-right">ราคา/หน่วย</th>
                          <th className="py-1.5 px-2 text-right">รวมเงิน</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {cart.map((item, idx) => (
                          <tr key={item.id}>
                            <td className="py-1.5 px-2 font-mono">{idx + 1}</td>
                            <td className="py-1.5 px-2">
                              <span className="font-bold text-slate-900">{item.name}</span>
                              <span className="block text-[10px] text-slate-500">{item.size} {item.fabric && `• ${item.fabric}`}</span>
                            </td>
                            <td className="py-1.5 px-2 text-center font-mono">{item.quantity} {item.unit}</td>
                            <td className="py-1.5 px-2 text-right font-mono">฿{item.unitPrice.toLocaleString()}</td>
                            <td className="py-1.5 px-2 text-right font-mono font-bold">฿{(item.unitPrice * item.quantity).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Quotation Total Box */}
                    <div className="border-t border-slate-200 pt-2 space-y-1 text-right text-xs">
                      <div className="flex justify-between text-slate-500">
                        <span>รวมเป็นเงิน (Subtotal):</span>
                        <span className="font-mono">฿{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>ค่าจัดส่ง:</span>
                        <span className="font-mono">{estimatedShipping === 0 ? 'จัดส่งฟรี' : `฿${estimatedShipping}`}</span>
                      </div>
                      <div className="flex justify-between text-sm font-black text-slate-900 border-t border-slate-300 pt-1">
                        <span>จำนวนเงินรวมทั้งสิ้น:</span>
                        <span className="text-blue-900">฿{grandTotal.toLocaleString()} บาท</span>
                      </div>
                    </div>

                    {/* Quotation Bank Info Note */}
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[10px] text-slate-600 space-y-0.5">
                      <div className="font-bold text-slate-800">ช่องทางการชำระเงินตามใบเสนอราคา:</div>
                      <div>• บัญชี ธ.ไทยพาณิชย์ (กระแสรายวัน/เดินสะพัด): <span className="font-mono font-bold text-slate-900">9573 007 137</span> บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์</div>
                      <div>• พร้อมเพย์นิติบุคคล (PromptPay Tax ID): <span className="font-mono font-bold text-slate-900">0905569004400</span></div>
                    </div>
                  </div>

                  {/* Quote Actions */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={`${lineUrl}&text=${encodeURIComponent(
                        `สวัสดีครับ ขอส่งใบเสนอราคา บจก.ซัคเซสลอนดรี้ เลขที่ ${quotationNumber} ของ ${customerInfo.businessName || 'โครงการ'} จำนวน ${totalItemCount} ชิ้น ยอดรวม ฿${grandTotal.toLocaleString()} บาทครับ`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>ส่งใบเสนอราคานี้เข้า LINE OA เพื่อยืนยันคำสั่งซื้อ</span>
                    </a>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={handlePrint}
                        className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                      >
                        <Printer className="w-4 h-4" />
                        <span>พิมพ์ / เซฟเอกสาร PDF</span>
                      </button>

                      <button
                        onClick={() => setCheckoutStep('payment')}
                        className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>ไปหน้าชำระเงินโอน</span>
                      </button>
                    </div>
                  </div>

                </div>
              )}

              {/* STEP 3: BANK TRANSFER CHECKOUT */}
              {checkoutStep === 'payment' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setCheckoutStep('cart')}
                      className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> ย้อนกลับตระกร้า
                    </button>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      ชำระเงินผ่านธนาคาร
                    </span>
                  </div>

                  {/* Bank Account Info Card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white border border-slate-800 shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-sm shadow-md shrink-0">
                          SCB
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-purple-300 font-bold block">ธนาคารไทยพาณิชย์ (SCB)</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-200 border border-purple-400/30">บัญชีเดินสะพัด</span>
                          </div>
                          <span className="text-sm font-bold text-white block">Success Laundry & Hotel Supply Co., Ltd.</span>
                          <span className="text-[11px] text-slate-300 block">บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30 shrink-0">
                        บัญชีทางการ
                      </span>
                    </div>

                    {/* SCB Account Number */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] text-slate-400 block">เลขที่บัญชีเดินสะพัด (SCB Current):</span>
                        <span className="font-mono text-lg sm:text-xl font-black text-amber-300 tracking-wider">
                          9573 007 137
                        </span>
                      </div>
                      <button
                        onClick={handleCopyBank}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1 transition cursor-pointer shrink-0"
                      >
                        {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedBank ? 'คัดลอกแล้ว' : 'คัดลอกบัญชี'}</span>
                      </button>
                    </div>

                    {/* PromptPay Tax ID */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] text-emerald-400 font-bold block">พร้อมเพย์นิติบุคคล (PromptPay Tax ID):</span>
                        <span className="font-mono text-base sm:text-lg font-black text-white tracking-wider">
                          0905569004400
                        </span>
                      </div>
                      <button
                        onClick={handleCopyPromptPay}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1 transition cursor-pointer border border-emerald-400/30 shrink-0"
                      >
                        {copiedPromptPay ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPromptPay ? 'คัดลอกแล้ว' : 'คัดลอกพร้อมเพย์'}</span>
                      </button>
                    </div>

                    <div className="flex justify-between items-center text-xs pt-1 border-t border-white/10">
                      <span className="text-slate-300">ยอดที่ต้องชำระทั้งสิ้น:</span>
                      <span className="text-xl font-black text-amber-300">
                        ฿{grandTotal.toLocaleString()} บาท
                      </span>
                    </div>
                  </div>

                  {/* Customer Transfer Slip Upload Form */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs">
                    <h3 className="font-bold text-slate-800">
                      แจ้งข้อมูลการโอนเงิน & แนบสลิปเพื่อส่งของ (Confirm Payment)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">
                          ชื่อผู้โอน / ชื่อโรงแรม <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={customerInfo.name}
                          onChange={e => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                          placeholder="ชื่อผู้สั่งซื้อ / โรงแรม"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">
                          เบอร์โทรติดต่อ <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerInfo.phone}
                          onChange={e => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          placeholder="08X-XXX-XXXX"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">
                        ที่อยู่ปลายทางสำหรับจัดส่งสินค้า <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={customerInfo.address}
                        onChange={e => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                        placeholder="เลขที่ อาคาร ถนน ตำบล อำเภอ จังหวัด รหัสไปรษณีย์..."
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>

                    {/* Upload Slip Box */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">
                        แนบภาพสลิปหลักฐานการโอนเงิน
                      </label>
                      <div className="border-2 border-dashed border-slate-300 hover:border-slate-400 rounded-xl p-4 text-center bg-white cursor-pointer relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              const f = e.target.files[0];
                              setCustomerInfo({
                                ...customerInfo,
                                slipFile: f,
                                slipPreview: URL.createObjectURL(f),
                              });
                            }
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        {customerInfo.slipPreview ? (
                          <div className="space-y-2">
                            <img
                              src={customerInfo.slipPreview}
                              alt="Slip Preview"
                              className="w-28 h-auto max-h-40 object-contain mx-auto rounded border border-slate-200"
                            />
                            <span className="text-emerald-600 font-bold block text-xs">
                              ✓ เลือกไฟล์สลิปเรียบร้อยแล้ว
                            </span>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <UploadCloud className="w-8 h-8 text-slate-400 mx-auto" />
                            <span className="font-semibold text-slate-700 block">
                              คลิกเพื่อเลือกไฟล์รูปสลิปจากมือถือหรือคอมพิวเตอร์
                            </span>
                            <span className="text-[11px] text-slate-400 block">
                              รองรับไฟล์ JPG, PNG, สลิป Mobile Banking
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Order & Payment */}
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (!customerInfo.name || !customerInfo.phone) {
                          alert('กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับจัดส่งสินค้าครับ');
                          return;
                        }
                        setCheckoutStep('success');
                      }}
                      className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition cursor-pointer"
                    >
                      <FileCheck className="w-5 h-5 text-amber-400" />
                      <span>ยืนยันการแจ้งชำระเงิน</span>
                    </button>

                    <a
                      href={`${lineUrl}&text=${encodeURIComponent(
                        `สวัสดีครับ ขอแจ้งโอนเงิน บจก.ซัคเซสลอนดรี้ สำหรับ ${customerInfo.name || 'ลูกค้า'} ยอดเงิน ฿${grandTotal.toLocaleString()} บาท พร้อมส่งสลิปครับ`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>หรือส่งสลิปเข้าทาง LINE OA โดยตรง</span>
                    </a>
                  </div>

                </div>
              )}

              {/* STEP 4: SUCCESS CONFIRMATION */}
              {checkoutStep === 'success' && (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    บันทึกรายการสั่งซื้อสำเร็จ!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    ขอบพระคุณ <strong>{customerInfo.name}</strong> เจ้าหน้าที่ฝ่ายจัดเตรียมสินค้า บจก.ซัคเซสลอนดรี้ แอนด์ โฮเทลซัพพลายส์ กำลังตรวจสอบยอดชำระ <strong>฿{grandTotal.toLocaleString()} บาท</strong> และจะติดต่อกลับที่เบอร์ <strong>{customerInfo.phone}</strong> เพื่อแจ้งหมายเลขพัสดุจัดส่งครับ
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs max-w-sm mx-auto space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">เลขอ้างอิง:</span>
                      <span className="font-mono font-bold text-slate-900">{quotationNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">จำนวนสินค้า:</span>
                      <span className="font-bold text-slate-900">{totalItemCount} ชิ้น</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-1.5 font-bold">
                      <span>ยอดชำระ:</span>
                      <span className="text-blue-900">฿{grandTotal.toLocaleString()} บาท</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`${lineUrl}&text=${encodeURIComponent(
                        `สวัสดีครับ ตรวจสอบรายการสั่งซื้อ บจก.ซัคเซสลอนดรี้ อ้างอิง ${quotationNumber} ยอด ฿${grandTotal.toLocaleString()} บาทครับ`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>แจ้งทีมงานผ่าน LINE OA</span>
                    </a>

                    <button
                      onClick={() => {
                        setCart([]);
                        setCheckoutStep('cart');
                        setIsCartOpen(false);
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer"
                    >
                      กลับไปหน้าสินค้า
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

      {/* 7. FOOTER */}
      <PremiumFooter />

    </div>
  );
}
