'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
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
  Search, 
  X, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  Table, 
  Grid, 
  Check, 
  ArrowRight, 
  QrCode, 
  UploadCloud, 
  AlertCircle, 
  Calculator, 
  Compass, 
  CheckCircle, 
  HelpCircle, 
  Share2, 
  BookOpen, 
  Clock, 
  Eye, 
  BookCheck,
  Menu,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Copy,
  Loader2
} from 'lucide-react';
import { getAllSupperSurfacePosts } from '@/lib/supper-surface-posts';

export interface CartItem {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  code: string;
  spec: string;
  unit: string;
  unitPrice: number;
  quantity: number;
  image: string;
}

export default function SupperSurfaceSalesPage() {
  // Official Information
  const companyNameTh = 'บจก. เฟมไลน์ โปร์ดักส์';
  const companyNameEn = 'FAMELINE PRODUCTS CO., LTD.';
  const companyAddress = '35/11 ถนนกาญจนาภิเษก แขวงดอกไม้ เขตประเวศ กรุงเทพฯ 10250';
  const officeTel = '02-365-5899';
  const officeFax = '02-365-5890';
  const website = 'fameline.com';
  
  // Sale Contact Person
  const saleName = 'เสาวลักษณ์ นุ่นหนู (คุณแอล)';
  const saleRole = 'เจ้าหน้าที่ฝ่ายขายโครงการและสถาปนิก กรุงเทพฯ และปริมณฑล';
  const salePhone = '066-168-5157';
  const salePhoneCallUrl = 'tel:0661685157';
  const saleEmail = 'sovaluck@fameline.com';
  const facebookPageUrl = 'https://www.facebook.com/suppersurface';
  
  // Official Verified LINE Account from QR Code
  const lineUrl = 'https://line.me/ti/p/8LzX_47dFe';

  // Bank Account Information (Used inside Cart Drawer)
  const scbAccount = {
    bank: 'ไทยพาณิชย์ (SCB)',
    number: '154-3-00307-6',
    name: 'บจก. เฟมไลน์ โปร์ดักส์',
  };
  const kbankAccount = {
    bank: 'กสิกรไทย (KBANK)',
    number: '421-2-13883-0',
    name: 'บจก. เฟมไลน์ โปร์ดักส์',
  };

  // State
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'quote' | 'payment' | 'success'>('cart');
  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmittingLead, setIsSubmittingLead] = useState<boolean>(false);

  // In-Page Interactive E-Catalog Lookbook State (100% Native, Zero External iFrame)
  const [selectedCatalogId, setSelectedCatalogId] = useState<number>(1);
  const [activeCatalogPage, setActiveCatalogPage] = useState<number>(1);
  const [activeModalCatalog, setActiveModalCatalog] = useState<any | null>(null);

  // Estimator State
  const [estimatorArea, setEstimatorArea] = useState<number>(50);
  const [estimatorProduct, setEstimatorProduct] = useState<string>('veneer-mcm');
  const [estimatorWaste, setEstimatorWaste] = useState<number>(10);

  // Customer Form Data for Quote & Payment
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    businessName: '',
    taxId: '',
    phone: '',
    email: '',
    projectLocation: '',
    notes: '',
    slipFile: null as File | null,
    slipPreview: '',
    transferBank: 'SCB',
    transferTime: '',
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Product Master Data
  const products = useMemo(() => [
    {
      id: 'veneer-mcm-1',
      code: 'SS-MCM-01',
      name: 'หินวีเนียร์ Veneer & MCM (Flexible Stone)',
      category: 'veneer-mcm',
      categoryName: 'หินวีเนียร์ Veneer & MCM',
      spec: 'นวัตกรรมหินแผ่นบาง ยืดหยุ่น ดัดโค้งตามเสาได้ น้ำหนักเบา ทนรอยขีดข่วน ไม่ลามไฟ เหมาะกับงานตกแต่งภายในและภายนอก',
      size: 'ขนาด 60x120 ซม. / 120x240 ซม. หนา 2-4 มม.',
      unit: 'ตร.ม.',
      price: 1450,
      image: '/images/suppersurface/mcm-stone.jpg',
      badge: 'นวัตกรรมยอดนิยม ดัดโค้งได้',
      features: ['ดัดโค้งรัศมีแคบได้ ไม่แตกร้าว', 'น้ำหนักเบากว่าหินจริง 80%', 'ติดตั้งง่ายด้วยกาวโพลียูรีเทน', 'ทนแดด ทน UV เกรดภายนอก'],
    },
    {
      id: 'wpc-cladding-1',
      code: 'SS-WPC-02',
      name: 'ไม้สังเคราะห์ WPC (Wood Plastic Composite)',
      category: 'wpc',
      categoryName: 'ไม้สังเคราะห์ WPC',
      spec: 'ไม้เทียมสังเคราะห์เกรดพรีเมียม ผิวสัมผัสลายเสี้ยนไม้ธรรมชาติ ไม่ผุ ไม่บวม ปลวกมอดไม่กิน สีสวยยาวนานตลอดอายุการใช้งาน',
      size: 'หน้ากว้าง 15 ซม. ยาว 3.0 ม. หนา 22 มม.',
      unit: 'ตร.ม.',
      price: 1250,
      image: '/images/suppersurface/wpc-wood.jpg',
      badge: 'ทนปลวก ทนชื้น 100%',
      features: ['ไร้กังวลเรื่องปลวกและเชื้อรา', 'ทนน้ำและความชื้น ไม่โก่งงอ', 'ระบบคลิปล็อคซ่อนหัวสกรู', 'เป็นมิตรต่อสิ่งแวดล้อม รีไซเคิลได้'],
    },
    {
      id: 'ceiling-85c',
      code: 'SS-CL-85C',
      name: 'ฝ้าอลูมิเนียม 85 C (Linear Ceiling System)',
      category: 'ceiling',
      categoryName: 'ฝ้าอลูมิเนียม (85 C & 85 F)',
      spec: 'ระบบฝ้าเพดานอลูมิเนียมเส้นยาวแบบล็อคเรียบ รอยต่อชิดสวยงาม ไร้สนิม น้ำหนักเบา ดูแลทำความสะอาดยกเปลี่ยนง่าย',
      size: 'หน้ากว้าง 85 มม. ความยาวสั่งผลิตตามขนาด',
      unit: 'ตร.ม.',
      price: 980,
      image: '/images/suppersurface/ceiling-85c.jpg',
      badge: 'มาตรฐานโครงการ B2B',
      features: ['อลูมิเนียมเกรด A ปลอดสนิมตลอดชีพ', 'ระบบโครงสร้างล็อค Snap-in แข็งแรง', 'รองรับงานภายนอกอาคารและใต้หลังคา', 'สั่งตัดความยาวตามหน้างาน ลดเศษสูญเสีย'],
    },
    {
      id: 'ceiling-85f',
      code: 'SS-CL-85F',
      name: 'ฝ้าอลูมิเนียม 85 F (Linear Ceiling with Joint)',
      category: 'ceiling',
      categoryName: 'ฝ้าอลูมิเนียม (85 C & 85 F)',
      spec: 'ระบบฝ้าอลูมิเนียมแบบมีร่องเว้นระยะ (Reveal Joint) ให้มิติเงาเฉียบคม สไตล์โมเดิร์นทันสมัย เหมาะสำหรับล็อบบี้และโถงอาคาร',
      size: 'หน้ากว้าง 85 มม. ร่อง 15 มม. สั่งผลิตตามขนาด',
      unit: 'ตร.ม.',
      price: 1050,
      image: '/images/suppersurface/ceiling-85f.jpg',
      badge: 'ดีไซน์ร่องโมเดิร์น มีมิติ',
      features: ['สร้างเส้นสายเฉียบคมทางสถาปัตยกรรม', 'ทนต่อแรงลมภายนอกอาคาร', 'เคลือบสี Polyester / PVDF คุณภาพสูง', 'ติดตั้งร่วมกับโคมไฟ Linear Light ได้ลงตัว'],
    },
    {
      id: 'aluminum-louver',
      code: 'SS-LV-05',
      name: 'ระแนงอลูมิเนียม (Architectural Louver System)',
      category: 'louver',
      categoryName: 'ระแนงอลูมิเนียม Louver',
      spec: 'ระแนงบังแดดและเปลือกอาคารอลูมิเนียมระบายอากาศ น้ำหนักเบา แข็งแรงทนทาน ช่วยลดความร้อนเข้าสู่อาคารอย่างมีประสิทธิภาพ',
      size: 'ขนาดหน้าตัด 25x50, 50x100 มม. ความยาว 6.0 ม.',
      unit: 'ตร.ม.',
      price: 1850,
      image: '/images/suppersurface/louver-modern.jpg',
      badge: 'ประหยัดพลังงาน เปลือกอาคาร',
      features: ['ลดความร้อนจากแสงแดดเข้าสู่อาคาร', 'โครงสร้างอลูมิเนียมน้ำหนักเบา ไม่เป็นภาระโครงสร้าง', 'เคลือบสีลายไม้ธรรมชาติ หรือสี Powder Coat', 'ทนพายุ ลมแรง ไม่บิดเบี้ยว'],
    },
    {
      id: 'composite-deco-roof',
      code: 'SS-CP-DECO-R',
      name: 'อลูมิเนียมคอมโพสิต DECO งานหลังคา (Canopy & Roof)',
      category: 'composite',
      categoryName: 'อลูมิเนียมคอมโพสิต (DECO & ALTEX)',
      spec: 'แผ่นอลูมิเนียมคอมโพสิตเกรดพิเศษสำหรับงานหลังคา กันสาด และชายคา ทนความร้อนสูง ป้องกันการรั่วซึม ดีไซน์ไร้รอยต่อ',
      size: 'ขนาด 1250 x 2440 มม. หนา 4 มม. (ไส้ PE/FR)',
      unit: 'ตร.ม.',
      price: 1100,
      image: '/images/suppersurface/deco-roof.jpg',
      badge: 'ทนแดด ทนฝน ไม่รั่วซึม',
      features: ['พื้นผิวเรียบตึง ไม่เกิดคลื่น (No Oil Canning)', 'ป้องกันรังสี UV และลดเสียงฝนกระทบ', 'ดัดพับขึ้นรูปขอบกล่องกันน้ำได้สนิท', 'น้ำหนักเบา ติดตั้งบนโครงสร้างเหล็กได้ง่าย'],
    },
    {
      id: 'composite-deco-facade',
      code: 'SS-CP-DECO-F',
      name: 'อลูมิเนียมคอมโพสิต DECO งานผนังและอาคาร',
      category: 'composite',
      categoryName: 'อลูมิเนียมคอมโพสิต (DECO & ALTEX)',
      spec: 'แผ่นอลูมิเนียมคอมโพสิต DECO คุณภาพสูง ผิวเคลือบสีเรียบเนียน สม่ำเสมอ เหมาะสำหรับ Facade อาคาร โชว์รูม และป้ายสัญลักษณ์',
      size: 'ขนาด 1250 x 2440 มม. หนา 4 มม. อลูมิเนียม 0.3-0.5 มม.',
      unit: 'ตร.ม.',
      price: 950,
      image: '/images/suppersurface/composite-deco.jpg',
      badge: 'เกรดมาตรฐานโครงการ',
      features: ['สีสันสดใส มีให้เลือกกว่า 50 เฉดสี', 'ผิวเคลือบสีทนทานต่อสารเคมีและมลภาวะ', 'ตัด ฉลุ ดัดโค้ง พับกล่อง ทำงานได้ง่าย', 'ราคาคุ้มค่า ประหยัดงบประมาณโครงการ'],
    },
    {
      id: 'composite-altex',
      code: 'SS-CP-ALTEX',
      name: 'อลูมิเนียมคอมโพสิต ALTEX (High-End Architectural Cladding)',
      category: 'composite',
      categoryName: 'อลูมิเนียมคอมโพสิต (DECO & ALTEX)',
      spec: 'นวัตกรรมแผ่นคอมโพสิต ALTEX สถาปัตยกรรมระดับเมกะโปรเจกต์ ไส้กลางทนไฟระดับ FR Class A2/B1 เคลือบสี PVDF Kynar 500 รับประกันยาวนาน',
      size: 'ความกว้าง 1250/1500 มม. ยาวสั่งผลิตพิเศษ หนา 4 มม.',
      unit: 'ตร.ม.',
      price: 1650,
      image: '/images/suppersurface/composite-altex.jpg',
      badge: 'สเปกเมกะโปรเจกต์ ไส้ทนไฟ FR',
      features: ['ไส้กลางกันไฟลาม Class A2 / B1 ปลอดภัยสูงสุด', 'เคลือบสี Kynar 500 PVDF ทนทาน 20 ปี+', 'ผ่านการทดสอบมาตรฐานสากล ASTM, BS, ISO', 'เอกสารสเปกพร้อมยื่นงานราชการและอาคารสูง'],
    },
    {
      id: 'nichiha-japan',
      code: 'SS-NC-JAPAN',
      name: 'แผ่นไฟเบอร์ซีเมนต์นิชิฮะ (NICHIHA Japan)',
      category: 'nichiha',
      categoryName: 'แผ่นไฟเบอร์ซีเมนต์ NICHIHA ญี่ปุ่น',
      spec: 'แผ่นผนังไฟเบอร์ซีเมนต์ระดับโลกจากประเทศญี่ปุ่น นวัตกรรม Platinum Coating เคลือบผิวสะท้อนรังสีความร้อน และระบบทำความสะอาดตัวเองด้วยน้ำฝน (MicroGuard)',
      size: 'ขนาด 455 x 3030 มม. หนา 16 มม.',
      unit: 'ตร.ม.',
      price: 2150,
      image: '/images/suppersurface/nichiha-cement.jpg',
      badge: 'แบรนด์อันดับ 1 จากญี่ปุ่น ทำความสะอาดตัวเองได้',
      features: ['ระบบคลิปล็อค ไร้รอยสกรูบนหน้าแผ่น', 'เทคโนโลยี MicroGuard สลายคราบสกปรกด้วยแสงแดดและน้ำฝน', 'ลวดลายหิน ไม้ และคอนกรีตลึก 3 มิติ สมจริงเหนือระดับ', 'ฉนวนกันเสียงและป้องกันความร้อนเข้าสู่ตัวบ้าน'],
    },
  ], []);

  // 9 Complete Native In-Page Interactive E-Catalogs & Lookbooks
  const catalogsList = useMemo(() => [
    {
      id: 1,
      title: '1. หินวีเนียร์ Veneer & MCM (Flexible Stone)',
      code: 'SS-MCM-CAT',
      categoryName: 'หินวีเนียร์ & MCM',
      image: '/images/suppersurface/mcm-stone.jpg',
      galleryImage: '/images/suppersurface/stone-veneer.jpg',
      desc: 'นวัตกรรมหินแผ่นบางยืดหยุ่นดัดโค้งได้ หนา 2-4 มม. น้ำหนักเบากว่าหินจริง 80% ปิดผิวเสากลม ผนังโค้ง และ Facade โมเดิร์น ไม่ลามไฟ',
      specs: ['ความหนา 2 - 4 มม.', 'ขนาดแผ่น 60x120 ซม. / 120x240 ซม.', 'น้ำหนัก 3.5 - 5.5 กก./ตร.ม.', 'ติดตั้งด้วยกาว PU ทับผนังเดิมได้'],
      productId: 'veneer-mcm-1',
      price: 1450,
      unit: 'ตร.ม.',
      totalPages: 4,
      pages: [
        {
          num: 1,
          title: 'หน้า 1: นวัตกรรมดัดโค้ง & ดีไซน์พื้นผิว',
          summary: 'ผลิตจากผงหินธรรมชาติผสาน Modified Clay Material (MCM) ให้ความยืดหยุ่นสูง ดัดโค้งรัศมีแคบได้โดยไม่แตกร้าว',
          items: [
            { label: 'ชนิดวัสดุ', val: 'Modified Clay Material (MCM) + Natural Stone Powder' },
            { label: 'รัศมีดัดโค้งต่ำสุด', val: 'R = 20 ซม. (ดัดหุ้มเสากลมได้เรียบสนิท)' },
            { label: 'ลักษณะพื้นผิว', val: 'หินทราเวอร์ทีน, หินแกรนิต, หินชนวนธรรมชาติ' },
            { label: 'น้ำหนักเทียบเคียง', val: 'เบากว่าหินแกรนิตแท้ 80% ลดภาระโครงสร้างอาคาร' },
          ]
        },
        {
          num: 2,
          title: 'หน้า 2: มิติขนาด & สเปกทางเทคนิค',
          summary: 'ขนาดมาตรฐานสำหรับงาน Facade และงานตกแต่งผนังภายในอาคาร ลดเศษตัดต่อหน้างาน',
          items: [
            { label: 'ขนาดมาตรฐานแผ่น', val: '600 x 1200 มม. และ 1200 x 2400 มม.' },
            { label: 'ความหนาแผ่น', val: '2.5 - 3.5 มม. (น้ำหนักเฉลี่ย 3.8 กก./ตร.ม.)' },
            { label: 'ค่าการดูดซึมน้ำ', val: '< 0.5% ป้องกันการสะสมความชื้นและเชื้อรา' },
            { label: 'การทนต่อแรงดึง', val: 'Tensile Strength > 1.2 MPa' },
          ]
        },
        {
          num: 3,
          title: 'หน้า 3: คู่มือการติดตั้ง & กาวประสาน',
          summary: 'ติดตั้งรวดเร็วบนผนังเบา ผนังปูนเดิม หรือโครงสมาร์ทบอร์ดโดยไม่ต้องทุบรื้อ',
          items: [
            { label: 'กาวที่แนะนำ', val: 'กาวโพลียูรีเทน (PU Glue) คุณภาพสูงเกรด Exterior' },
            { label: 'รูปแบบการยาแนว', val: 'ชนชิดแบบไร้ร่อง หรือเว้นร่อง 3-5 มม. ใส่เส้นคิ้ว' },
            { label: 'การตัดแต่งแผ่น', val: 'ใช้คัตเตอร์หรือลูกหมูตัดได้ง่าย ไร้ฝุ่นฟุ้งกระจาย' },
            { label: 'ระยะเวลาเซ็ตตัว', val: 'ยึดเกาะแน่นหนาใน 24 ชั่วโมง' },
          ]
        },
        {
          num: 4,
          title: 'หน้า 4: มาตรฐานความปลอดภัย & ใบรับรอง',
          summary: 'ผ่านการทดสอบมาตรฐานความปลอดภัยสำหรับอาคารสูงและโครงการขนาดใหญ่',
          items: [
            { label: 'มาตรฐานทนไฟ', val: 'Non-combustible Class A2 ตามมาตรฐาน GB8624' },
            { label: 'ความทนทานต่อแสง UV', val: 'ผ่านการทดสอบ Weathering Test > 2,000 ชม.' },
            { label: 'การรับประกัน', val: 'รับประกันคุณภาพผลิตภัณฑ์ 10 ปี' },
            { label: 'การรับรอง B2B', val: 'มีเอกสาร MSDS และผลทดสอบสถาบันชั้นนำครบถ้วน' },
          ]
        }
      ]
    },
    {
      id: 2,
      title: '2. ไม้สังเคราะห์ WPC (Wood Plastic Composite)',
      code: 'SS-WPC-CAT',
      categoryName: 'ไม้สังเคราะห์ WPC',
      image: '/images/suppersurface/wpc-wood.jpg',
      galleryImage: '/images/suppersurface/hero-facade.jpg',
      desc: 'ไม้เทียมสังเคราะห์เกรดภายนอก-ภายใน ผิวสัมผัสลายเสี้ยนไม้ธรรมชาติ ทนปลวก ทนชื้น 100% ไม่ผุ ไม่โก่งงอ สีคงทนยาวนาน',
      specs: ['หน้ากว้าง 15 ซม. ยาว 3.0 ม.', 'ความหนา 22 มม.', 'ระบบคลิปล็อคซ่อนหัวสกรู', 'ทนแดด ทน UV ไม่ต้องทาสีซ้ำ'],
      productId: 'wpc-cladding-1',
      price: 1250,
      unit: 'ตร.ม.',
      totalPages: 4,
      pages: [
        {
          num: 1,
          title: 'หน้า 1: ภาพรวมไม้สังเคราะห์ WPC เกรดพรีเมียม',
          summary: 'ผลิตจากผงไม้คัดพิเศษผสมโพลีเมอร์เกรดสูง ให้ความรู้สึกอบอุ่นเสมือนไม้ธรรมชาติแท้',
          items: [
            { label: 'ส่วนผสมหลัก', val: 'Wood Fiber 60% + HDPE 30% + UV Stabilizers 10%' },
            { label: 'ลวดลายพื้นผิว', val: '3D Deep Embossed Wood Grain ลายเสี้ยนลึกไม่ลื่น' },
            { label: 'การใช้งาน', val: 'ระเบียงภายนอก ผนังกรุเปลือกอาคาร ซุ้มทางเข้า' },
            { label: 'สีมาตรฐาน', val: 'Teak (ไม้สัก), Walnut (ไม้วอลนัท), Ash Grey' },
          ]
        },
        {
          num: 2,
          title: 'หน้า 2: สเปกหน้าตัด & ขนาดมิติ',
          summary: 'โครงสร้างแบบรังผึ้ง Hollow Core แข็งแรงพิเศษ แต่น้ำหนักเบา ระบายความร้อนได้ดี',
          items: [
            { label: 'ขนาดหน้าตัด', val: 'หน้ากว้าง 150 มม. ความหนา 22 มม. ยาว 3.0 ม.' },
            { label: 'น้ำหนักต่อเมตร', val: 'ประมาณ 2.4 กก./เมตรเส้นตรง' },
            { label: 'การรับน้ำหนักจุด', val: 'Point Load Capacity > 400 กก./ตร.ม.' },
            { label: 'อัตราการยืดหดตัว', val: 'ต่ำกว่าไม้ธรรมชาติ 5 เท่าเมื่อเจอความร้อน' },
          ]
        },
        {
          num: 3,
          title: 'หน้า 3: ระบบคลิปล็อคซ่อนสกรู (Hidden Fastener)',
          summary: 'ระบบคลิปสแตนเลส 304 ไม่เห็นหัวสกรูบนหน้าไม้ ปลอดสนิมตลอดอายุการใช้งาน',
          items: [
            { label: 'ระยะห่างตงรองรับ', val: 'ระยะ Span 30-35 ซม. เพื่อความแข็งแรงสูงสุด' },
            { label: 'วัสดุคลิปล็อค', val: 'Stainless Steel Clip 304 ทนไอเกลือทะเล' },
            { label: 'การระบายน้ำ', val: 'เว้นร่องระบายน้ำและอากาศตามธรรมชาติ 4-5 มม.' },
            { label: 'การดูแลรักษา', val: 'ล้างด้วยน้ำสะอาด ไม่ต้องขัดเคลือบเงาหรือทาสีย้อม' },
          ]
        },
        {
          num: 4,
          title: 'หน้า 4: การรับประกัน & สิ่งแวดล้อม',
          summary: 'วัสดุสีเขียวเป็นมิตรต่อสิ่งแวดล้อม รีไซเคิลได้ 100% ไร้สารระเหยอันตราย',
          items: [
            { label: 'ความทนปลวกมอด', val: 'ปลวกและแมลงกัดเจาะไม่กิน 100%' },
            { label: 'การต้านทานน้ำ', val: 'ไม่บวม ไม่ผุกร่อน แม้แช่อยู่ในน้ำท่วมขัง' },
            { label: 'อายุการใช้งาน', val: '15-20 ปีขึ้นไป ทนทานทุกสภาพแดดฝน' },
            { label: 'การรับรองโครงการ', val: 'เอกสารผลการทดสอบการรับน้ำหนักพร้อมวิศวกร' },
          ]
        }
      ]
    },
    {
      id: 3,
      title: '3. ฝ้าอลูมิเนียม 85 C (Linear Ceiling System)',
      code: 'SS-85C-CAT',
      categoryName: 'ฝ้าอลูมิเนียม',
      image: '/images/suppersurface/ceiling-85c.jpg',
      galleryImage: '/images/suppersurface/aluminum-ceiling.jpg',
      desc: 'ระบบฝ้าเพดานอลูมิเนียมเส้นยาวแบบล็อคเรียบชิด Snap-in รอยต่อแนบสนิท ปลอดสนิมตลอดชีพ ทนทานต่อแรงลม ชายคา และปั๊มน้ำมัน',
      specs: ['หน้ากว้าง 85 มม. ความยาวสั่งตัดตามขนาด', 'อลูมิเนียมเกรด A ปลอดสนิม 100%', 'ทนทานต่อไอเกลือทะเลและความชื้น', 'ระบบโครง Carrier แข็งแรงพิเศษ'],
      productId: 'ceiling-85c',
      price: 980,
      unit: 'ตร.ม.',
      totalPages: 4,
      pages: [
        {
          num: 1,
          title: 'หน้า 1: ระบบฝ้าอลูมิเนียมเส้นเรียบ 85 C',
          summary: 'ดีไซน์แผ่นชิดแนบสนิท Snap-in สไตล์โมเดิร์น ไร้รอยต่อ ปลอดสนิมตลอดอายุการใช้งาน',
          items: [
            { label: 'ระบบโครงสร้าง', val: 'Carrier Snap-in System ล็อคแน่นไม่หลุดร่วง' },
            { label: 'วัสดุแผ่นฝ้า', val: 'Alloy Aluminum Grade 3003/1100 หนา 0.5 - 0.7 มม.' },
            { label: 'ผิวเคลือบสี', val: 'Polyester / PVDF Powder Coating ทนแดด UV' },
            { label: 'การใช้งานยอดนิยม', val: 'ชายคาภายนอก, ปั๊มน้ำมัน, โรงพยาบาล, สถานีรถไฟฟ้า' },
          ]
        },
        {
          num: 2,
          title: 'หน้า 2: มิติหน้าตัด & สเปกสั่งผลิต',
          summary: 'สั่งตัดความยาวได้ตามหน้างานจริง ลดเศษเหลือทิ้ง ประหยัดต้นทุนโครงการ',
          items: [
            { label: 'หน้ากว้างแผ่น', val: '85 มม. ความสูงขอบ 15 มม.' },
            { label: 'ความยาวสั่งตัด', val: 'สูงสุด 6.0 เมตร (สั่งผลิตตามหน้างานได้)' },
            { label: 'น้ำหนักระบบรวม', val: 'ประมาณ 2.2 - 2.8 กก./ตร.ม.' },
            { label: 'สีมาตรฐาน', val: 'ขาว (White), ดำ (Black), เงินเมทัลลิก, สีลายไม้' },
          ]
        },
        {
          num: 3,
          title: 'หน้า 3: โครงคร่าว Carrier & การติดตั้ง',
          summary: 'ระบบแขวน Rod M8 ผสานโครง Carrier เฉพาะรุ่น แข็งแรงทนทานต่อแรงลมปะทะ',
          items: [
            { label: 'โครง Carrier', val: 'Carrier 85C เหล็กชุบสังกะสีหนา 0.6 มม.' },
            { label: 'ระยะห่าง Carrier', val: 'ระยะห่างไม่เกิน 1.0 - 1.2 เมตร' },
            { label: 'ระบบซ่อมบำรุง', val: 'เปิดซ่อมงานระบบท่อและสายไฟเฉพาะแผ่นได้ง่าย' },
            { label: 'การติดตั้งร่วม', val: 'เจาะใส่ Downlight, Smoke Detector, Air Diffuser ได้' },
          ]
        },
        {
          num: 4,
          title: 'หน้า 4: การต้านทานลม & เอกสารรับรอง',
          summary: 'ผ่านการทดสอบแรงลมพายุมาตรฐานวิศวกรรมสถาปัตยกรรมระดับสากล',
          items: [
            { label: 'การต้านทานแรงลม', val: 'Wind Load Resistance > 1.5 kPa' },
            { label: 'มาตรฐานปลอดสนิม', val: 'Salt Spray Resistance > 1,000 ชม. ไร้สนิม' },
            { label: 'ระดับความปลอดภัย', val: 'Class A Non-Combustible ไม่ติดไฟ ไร้ควันพิษ' },
            { label: 'การรับประกันงาน', val: 'รับประกันสีเคลือบ 10 ปี' },
          ]
        }
      ]
    },
    {
      id: 4,
      title: '4. ฝ้าอลูมิเนียม 85 F (Linear Ceiling with Joint)',
      code: 'SS-85F-CAT',
      categoryName: 'ฝ้าอลูมิเนียม',
      image: '/images/suppersurface/ceiling-85f.jpg',
      galleryImage: '/images/suppersurface/ceiling-85c.jpg',
      desc: 'ระบบฝ้าเพดานอลูมิเนียมเว้นร่อง 15 มม. สร้างมิติเส้นสายของเงาสไตล์โมเดิร์น เหมาะสำหรับล็อบบี้และโถงอาคารสูง',
      specs: ['หน้ากว้าง 85 มม. ร่อง 15 มม.', 'สั่งตัดตามความยาวหน้างาน', 'เคลือบสี Polyester / PVDF ทนทาน', 'ติดตั้งร่วมกับโคมไฟ Linear Light ได้ลงตัว'],
      productId: 'ceiling-85f',
      price: 1050,
      unit: 'ตร.ม.',
      totalPages: 4,
      pages: [
        {
          num: 1,
          title: 'หน้า 1: ระบบฝ้าอลูมิเนียมเว้นร่อง 85 F',
          summary: 'ร่องเว้นระยะ Reveal Joint 15 มม. สร้างเส้นสายมิติเงาสถาปัตยกรรมคมชัด',
          items: [
            { label: 'ดีไซน์ร่อง', val: 'หน้ากว้าง 85 มม. + ร่องเว้นระยะ Reveal 15 มม.' },
            { label: 'การสร้างมิติ', val: 'รองรับแผ่นปิดร่องสีดำ (Black Joint Strip) เพิ่มความลึก' },
            { label: 'กลุ่มอาคารเป้าหมาย', val: 'Lobby โรงแรม, อาคารสำนักงานเกรด A, ห้างสรรพสินค้า' },
            { label: 'ความทันสมัย', val: 'ผสานรางไฟเส้น LED Linear Light ได้อย่างแนบเนียน' },
          ]
        },
        {
          num: 2,
          title: 'หน้า 2: สเปกขนาด & มิติมุมมอง',
          summary: 'ควบคุมคุณภาพความเรียบตรงทุกมิลลิเมตร ไร้คลื่นบนหน้าแผ่น',
          items: [
            { label: 'ระยะรวมต่อโมดูล', val: '100 มม. (85 มม. + ร่อง 15 มม.)' },
            { label: 'ความหนาอลูมิเนียม', val: '0.6 - 0.7 มม. เกรดพิเศษต้านการโก่งงอ' },
            { label: 'ความยาวสั่งทำ', val: 'สั่งตัดตามแบบสูงสุด 6 เมตร' },
            { label: 'น้ำหนักเฉลี่ย', val: '2.5 กก./ตร.ม.' },
          ]
        },
        {
          num: 3,
          title: 'หน้า 3: Carrier 85F & รายละเอียดติดตั้ง',
          summary: 'โครงยึดล็อคแม่นยำด้วยเขี้ยว Carrier 85F จัดระยะร่องเท่ากันสม่ำเสมอทุกแนว',
          items: [
            { label: 'โครง Carrier', val: 'Custom 85F Carrier ล็อคสองข้างพร้อมร่องเว้น' },
            { label: 'ระยะห่างแขวน', val: 'ระยะโครงไม่เกิน 1,200 มม.' },
            { label: 'การดูดซับเสียง', val: 'สามารถเพิ่มแผ่นซับเสียง SoundTex ด้านหลังแผ่นได้' },
            { label: 'การทำความสะอาด', val: 'เช็ดทำความสะอาดง่าย ไม่จับคราบฝุ่น' },
          ]
        },
        {
          num: 4,
          title: 'หน้า 4: เอกสารสเปกโครงการ & ผลทดสอบ',
          summary: 'เอกสารสเปกพร้อมยื่นประมูลงาน B2B และโครงการขนาดใหญ่',
          items: [
            { label: 'การทนไฟ', val: 'Class A2 ไม่ลามไฟ ไม่ติดไฟ' },
            { label: 'การรับประกันสี', val: 'รับประกัน 10 ปี (Powder Coat) / 20 ปี (PVDF)' },
            { label: 'การรองรับ B2B', val: 'มีเอกสารใบเสนอราคาและ Spec Sheet ครบถ้วน' },
            { label: 'ทีมสนับสนุน', val: 'บริการถอดแบบ BOQ โดยวิศวกร Fameline' },
          ]
        }
      ]
    },
    {
      id: 5,
      title: '5. ระแนงอลูมิเนียม (Architectural Louver System)',
      code: 'SS-LV-CAT',
      categoryName: 'ระแนงอลูมิเนียม',
      image: '/images/suppersurface/louver-modern.jpg',
      galleryImage: '/images/suppersurface/hero-cinematic.jpg',
      desc: 'ระแนงบังแดดและเปลือกอาคารอลูมิเนียมระบายอากาศ ลดความร้อนเข้าสู่ตัวอาคาร โครงสร้างน้ำหนักเบา ไม่เป็นภาระอาคาร',
      specs: ['หน้าตัด 25x50, 50x100 มม.', 'ความยาวเส้นมาตรฐาน 6.0 ม.', 'สี Powder Coat หรือลายไม้', 'ต้านทานแรงลมพายุมาตรฐานวิศวกรรม'],
      productId: 'aluminum-louver',
      price: 1850,
      unit: 'ตร.ม.',
      totalPages: 4,
      pages: [
        {
          num: 1,
          title: 'หน้า 1: ระแนงอลูมิเนียมบังแดด Facade Louver',
          summary: 'ลดความร้อนจากแสงแดดเข้าสู่อาคารได้สูงสุด 40% ประหยัดพลังงานเครื่องปรับอากาศ',
          items: [
            { label: 'ฟังก์ชันหลัก', val: 'Solar Shading บังแดด + ระบายอากาศธรรมชาติ' },
            { label: 'หน้าตัดยอดนิยม', val: 'กล่อง 25x50 มม., 50x100 มม., และทรงแอร์ฟอยล์' },
            { label: 'ผิวสัมผัส', val: 'สีพาวเดอร์โค้ทสถาปัตยกรรม หรือลายไม้เสี้ยนธรรมชาติ' },
            { label: 'โครงสร้างรับแรง', val: 'Subframe อลูมิเนียม น้ำหนักเบากว่าเหล็ก 65%' },
          ]
        },
        {
          num: 2,
          title: 'หน้า 2: ตารางหน้าตัด & คุณสมบัติทางกล',
          summary: 'ออกแบบความหนาผนังอลูมิเนียมให้ทนทานต่อแรงบิดและแรงลมพายุ',
          items: [
            { label: 'ความหนาเนื้อโลหะ', val: '1.2 - 2.0 มม. เสริมครีบรับแรงภายใน' },
            { label: 'ความยาวมาตรฐาน', val: 'เส้นละ 6.0 เมตร' },
            { label: 'ระยะห่างระแนง', val: 'ปรับองศาและระยะห่างได้ตามการคำนวณทิศแดด' },
            { label: 'การป้องกันสนิม', val: 'อลูมิเนียม 6063-T5 ปลอดสนิมตลอดอายุการใช้งาน' },
          ]
        },
        {
          num: 3,
          title: 'หน้า 3: การประกอบ & ฝาปิดหัวระแนง',
          summary: 'ระบบฝาครอบหัวระแนง (End Cap) เก็บความเรียบร้อยสวยงาม ไร้คม',
          items: [
            { label: 'End Cap', val: 'ฝาปิดหัวระแนงสีตรงกับตัวเส้น แนบสนิท' },
            { label: 'ขายึด Bracket', val: 'Bracket อลูมิเนียมหนา 3.0 มม. ยึดด้วยน็อตสแตนเลส' },
            { label: 'การติดตั้งแนวนอน/แนวตั้ง', val: 'รองรับทั้งติดตั้งแนวนอน (Horizontal) และแนวตั้ง (Vertical)' },
            { label: 'การรองรับงานรีโนเวท', val: 'ติดตั้งครอบอาคารเดิมเพื่อปรับลุคโมเดิร์นทันที' },
          ]
        },
        {
          num: 4,
          title: 'หน้า 4: การประหยัดพลังงาน & มาตรฐานอาคารเขียว',
          summary: 'ช่วยสะสมคะแนนมาตรฐานอาคารเขียว TREES / LEED สำหรับอาคารยุคใหม่',
          items: [
            { label: 'ประสิทธิภาพบังแดด', val: 'Shading Coefficient ดีเยี่ยม ลดความร้อนถ่ายเท' },
            { label: 'มาตรฐานความแข็งแรง', val: 'ผ่านการคำนวณตามมาตรฐานวิศวกรรมสถาน (วสท.)' },
            { label: 'การรับประกันสี', val: 'รับประกัน 10 - 15 ปี' },
            { label: 'บริการทีมงาน', val: 'คำนวณแสงเงาและมุมตกกระทบโดยทีมสถาปนิก' },
          ]
        }
      ]
    },
    {
      id: 6,
      title: '6. อลูมิเนียมคอมโพสิต DECO งานหลังคา (Roof & Canopy)',
      code: 'SS-DECO-R-CAT',
      categoryName: 'คอมโพสิตหลังคา',
      image: '/images/suppersurface/deco-roof.jpg',
      galleryImage: '/images/suppersurface/composite-deco.jpg',
      desc: 'คอมโพสิตเกรดพิเศษสำหรับงานหลังคา กันสาด และชายคา ดัดพับขึ้นรูปขอบกล่องกันน้ำ ป้องกันการรั่วซึมได้ 100%',
      specs: ['ขนาด 1250 x 2440 มม. หนา 4 มม.', 'ผิวเรียบตึง No Oil Canning', 'รางระบายน้ำซ่อนภายใน', 'ลดเสียงฝนตกกระทบ'],
      productId: 'composite-deco-roof',
      price: 1100,
      unit: 'ตร.ม.',
      totalPages: 4,
      pages: [
        {
          num: 1,
          title: 'หน้า 1: นวัตกรรมคอมโพสิต DECO หลังคา & กันสาด',
          summary: 'ออกแบบสำหรับงานหลังคาไร้รอยต่อ ป้องกันน้ำรั่วซึมและลดเสียงกระทบจากเม็ดฝน',
          items: [
            { label: 'โครงสร้างแผ่น', val: 'อลูมิเนียมประกบไส้กลาง PE/FR หนา 4 มม.' },
            { label: 'ความหนาอลูมิเนียม', val: '0.4 - 0.5 มม. หน้า-หลัง แข็งแรงพิเศษ' },
            { label: 'การขึ้นรูปกล่อง', val: 'พับขึ้นรูปขอบ 4 ด้าน (Tray Panel) กันน้ำ 100%' },
            { label: 'การลดเสียงฝน', val: 'ไส้กลางหนาแน่นช่วยซับเสียงฝนตกกระทบได้ดีเยี่ยม' },
          ]
        },
        {
          num: 2,
          title: 'หน้า 2: สเปกขนาดแผ่น & การพับขึ้นรูป',
          summary: 'พื้นผิวเรียบตึง ไม่เกิดคลื่นระลอกคลื่น (No Oil Canning)',
          items: [
            { label: 'ขนาดมาตรฐานแผ่น', val: '1250 x 2440 มม. และ 1500 x 3000 มม.' },
            { label: 'ความหนารวม', val: '4 มม. (น้ำหนัก 5.5 กก./ตร.ม.)' },
            { label: 'รัศมีพับ V-Groove', val: 'เซาะร่อง 90/135 องศา พับขึ้นรูปกล่องคมกริบ' },
            { label: 'ความลาดเอียงแนะนำ', val: 'สโลปหลังคาขั้นต่ำ 3 - 5 องศาเพื่อระบายน้ำ' },
          ]
        },
        {
          num: 3,
          title: 'หน้า 3: รายละเอียดรอยต่อ & การยาแนวซิลิโคน',
          summary: 'ระบบรอยต่อกันน้ำแบบ Double Seal ป้องกันน้ำซึมเข้าโครงสร้างเหล็ก',
          items: [
            { label: 'Backer Rod & Sealant', val: 'ใส่โฟม Backer Rod + ซิลิโคนเกรด Weatherseal' },
            { label: 'รางระบายน้ำซ่อน', val: 'เชื่อมต่อรางสแตนเลสซ่อนภายในโครงหลังคา' },
            { label: 'การรับแรงลมดูด', val: 'ยึดด้วย Bracket อลูมิเนียมทนแรงลมยกหลังคา' },
            { label: 'การบำรุงรักษา', val: 'น้ำฝนชะล้างฝุ่นออกได้ง่าย ไม่ทิ้งคราบน้ำ' },
          ]
        },
        {
          num: 4,
          title: 'หน้า 4: การรับประกัน & มาตรฐานวิศวกรรม',
          summary: 'มั่นใจได้ในมาตรฐานความปลอดภัยสำหรับอาคารสำนักงานและโชว์รูม',
          items: [
            { label: 'การรับประกันสีเคลือบ', val: 'รับประกัน 10 ปีเต็ม ไม่ลอกร่อน' },
            { label: 'ความทนต่อความร้อน', val: 'สะท้อนรังสี UV และทนความร้อนหลังคาได้สูง' },
            { label: 'การป้องกันการรั่วซึม', val: 'ผ่านการทดสอบแรงดันน้ำหน้างานจริง' },
            { label: 'เอกสารประกอบ', val: 'มี Shop Drawing และ Installation Manual' },
          ]
        }
      ]
    },
    {
      id: 7,
      title: '7. อลูมิเนียมคอมโพสิต DECO งานผนังและ Facade',
      code: 'SS-DECO-F-CAT',
      categoryName: 'คอมโพสิตผนัง',
      image: '/images/suppersurface/composite-deco.jpg',
      galleryImage: '/images/suppersurface/hero-facade.jpg',
      desc: 'แผ่นคอมโพสิตตกแต่งผนังภายนอก-ภายใน ผิวเคลือบสม่ำเสมอกว่า 50 เฉดสี ตัด พับ ดัด ฉลุลายได้ง่าย คุ้มค่างบประมาณ',
      specs: ['ขนาด 1250 x 2440 มม. หนา 4 มม.', 'อลูมิเนียม 0.3 - 0.5 มม.', 'มีให้เลือกกว่า 50 เฉดสี', 'รับประกันสีเคลือบ 10 ปี'],
      productId: 'composite-deco-facade',
      price: 950,
      unit: 'ตร.ม.',
      totalPages: 4,
      pages: [
        {
          num: 1,
          title: 'หน้า 1: แผ่นคอมโพสิต DECO สำหรับผนังและอาคาร',
          summary: 'เฉดสีสดใส ผิวสัมผัสเนียนเรียบ ทางเลือกยอดนิยมอันดับ 1 สำหรับโชว์รูมและป้ายสัญลักษณ์',
          items: [
            { label: 'ความหนารวม', val: '4 มม. (ผิวอลูมิเนียม 0.3 - 0.5 มม.)' },
            { label: 'เฉดสีที่มีจำหน่าย', val: 'มากกว่า 50 เฉดสี (Solid, Metallic, Sparkling)' },
            { label: 'ความยืดหยุ่นในการขึ้นรูป', val: 'ตัด ฉลุลาย CNC พับกล่อง และดัดโค้งได้ง่าย' },
            { label: 'ความคุ้มค่าโครงการ', val: 'งบประมาณเข้าถึงง่าย ควบคุมต้นทุนได้ยอดเยี่ยม' },
          ]
        },
        {
          num: 2,
          title: 'หน้า 2: สเปกทางกายภาพ & ความแข็งแรง',
          summary: 'ผลิตด้วยเทคโนโลยีรีดประกบต่อเนื่อง Continuous Hot Lamination แรงยึดเกาะสูง',
          items: [
            { label: 'แรงลอกติดผิว (Peel Strength)', val: '> 9 N/mm แผ่นไม่แยกชั้นตลอดอายุ' },
            { label: 'น้ำหนักเฉลี่ย', val: 'ประมาณ 4.8 - 5.2 กก./ตร.ม.' },
            { label: 'การทนกรด-ด่าง', val: 'ทนทานต่อมลพิษในอากาศและฝนกรดในเมืองหลวง' },
            { label: 'ฟิล์มป้องกันหน้าแผ่น', val: 'ฟิล์มกันรอย UV Protection ลอกง่ายหลังติดตั้ง' },
          ]
        },
        {
          num: 3,
          title: 'หน้า 3: เทคนิคการเซาะร่อง CNC & งานป้าย',
          summary: 'รองรับงานฉลุลาย Facade ตึก และงานตกแต่งป้ายไฟโฆษณาแบรนด์ชั้นนำ',
          items: [
            { label: 'การเซาะร่องพับ', val: 'เซาะร่องเหลือไส้กลาง 0.5 มม. พับฉาก 90 องศา' },
            { label: 'การฉลุลายตกแต่ง', val: 'ฉลุลวดลายสถาปัตยกรรมด้วยเครื่อง CNC แม่นยำ' },
            { label: 'โครงสร้างรับหลังแผ่น', val: 'แปโครงกัลวาไนซ์ หรืออลูมิเนียมกล่อง 1x2 นิ้ว' },
            { label: 'การยึดน็อต Rivet', val: 'ยึดด้วยรีเวทอลูมิเนียม หรือสกรูหัวแบน' },
          ]
        },
        {
          num: 4,
          title: 'หน้า 4: การรับประกัน & บริการสเปก',
          summary: 'รับประกันคุณภาพผลิตภัณฑ์โดย บจก. เฟมไลน์ โปร์ดักส์',
          items: [
            { label: 'รับประกันสีเคลือบ', val: '10 ปี ไม่ซีดจางเป็นด่าง' },
            { label: 'บริการส่งตัวอย่างสี', val: 'ส่งชิ้นตัวอย่างสีจริงถึงมือผู้ออกแบบฟรี' },
            { label: 'การสั่งผลิตสีพิเศษ', val: 'รองรับการผสมสี Corporate Identity (CI แบรนด์)' },
            { label: 'การจัดส่ง', val: 'สต็อกพร้อมส่งในกรุงเทพฯ และปริมณฑล' },
          ]
        }
      ]
    },
    {
      id: 8,
      title: '8. อลูมิเนียมคอมโพสิต ALTEX (FR Grade Class A2/B1)',
      code: 'SS-ALTEX-CAT',
      categoryName: 'คอมโพสิตทนไฟ FR',
      image: '/images/suppersurface/composite-altex.jpg',
      galleryImage: '/images/suppersurface/composite-deco.jpg',
      desc: 'สเปกระดับเมกะโปรเจกต์ ไส้กลางกันไฟลาม Class A2/B1 เคลือบสี Kynar 500 PVDF ทนแดด ทน UV ยาวนาน 20 ปี ผ่านมาตรฐาน ASTM',
      specs: ['กว้าง 1250/1500 มม. สั่งผลิตยาวพิเศษ', 'ไส้ทนไฟ FR Class A2 / B1', 'สีเคลือบ PVDF Kynar 500', 'เอกสารรับรองมาตรฐานอาคารสูงครบ'],
      productId: 'composite-altex',
      price: 1650,
      unit: 'ตร.ม.',
      totalPages: 4,
      pages: [
        {
          num: 1,
          title: 'หน้า 1: นวัตกรรมคอมโพสิตทนไฟ ALTEX FR',
          summary: 'สำหรับอาคารสูงและเมกะโปรเจกต์ที่ต้องการความปลอดภัยด้านอัคคีภัยระดับสูงสุด',
          items: [
            { label: 'ไส้กลางทนไฟ', val: 'Mineral-filled Core สารหน่วงไฟอนินทรีย์ Class A2' },
            { label: 'การไม่ติดไฟ', val: 'ไม่ติดไฟ ไม่หยด ไม่ลามไฟ และไร้ควันพิษ' },
            { label: 'สีเคลือบระดับพรีเมียม', val: 'Kynar 500 PVDF 70% Fluorocarbon Coating' },
            { label: 'การใช้งาน', val: 'สนามบิน, โรงพยาบาล, อาคารสูงเกิน 23 เมตร' },
          ]
        },
        {
          num: 2,
          title: 'หน้า 2: มาตรฐานการทดสอบ ASTM & EN13501',
          summary: 'ผ่านการทดสอบการลามไฟจากสถาบันชั้นนำระดับสากล',
          items: [
            { label: 'มาตรฐานยุโรป EN 13501-1', val: 'Class A2 - s1, d0 (ความปลอดภัยสูงสุด)' },
            { label: 'มาตรฐานอเมริกา ASTM E84', val: 'Flame Spread Index = 0, Smoke Index < 10' },
            { label: 'ความหนาอลูมิเนียม', val: '0.50 มม. หน้า-หลัง แข็งแรงระดับโครงสร้าง' },
            { label: 'ขนาดสั่งผลิต', val: 'กว้าง 1250/1500 มม. ความยาวสั่งตัดพิเศษถึง 6 ม.' },
          ]
        },
        {
          num: 3,
          title: 'หน้า 3: ความทนทานต่อสภาพอากาศ 20 ปี+',
          summary: 'ทนต่อแสงแดดเมืองร้อน รังสีอัลตราไวโอเลต และไอเกลือทะเลชายฝั่ง',
          items: [
            { label: 'การทดสอบทนกรดมลพิษ', val: 'ASTM D1308 ไม่ทำปฏิกิริยากับสารเคมี' },
            { label: 'การทดสอบไอเกลือทะเล', val: 'Salt Spray Test > 4,000 ชั่วโมง ไร้สนิม' },
            { label: 'ความคงตัวของเฉดสี', val: 'Delta E < 5 ตลอดระยะเวลา 20 ปี' },
            { label: 'การทำความสะอาด', val: 'เทคโนโลยีเคลือบสาร Hydrophilic ทำความสะอาดง่าย' },
          ]
        },
        {
          num: 4,
          title: 'หน้า 4: เอกสารยื่นโครงการ & ใบรับรอง B2B',
          summary: 'เอกสารประกอบการยื่นสเปกครบชุด พร้อมผลทดสอบรับรองจากวิศวกร',
          items: [
            { label: 'หนังสือรับรองมาตรฐาน', val: 'Test Certificate จากสถาบันจุฬาฯ และสถาบันสากล' },
            { label: 'การรับประกันสินค้า', val: 'รับประกันยาวนาน 15 - 20 ปี' },
            { label: 'การบริการถอดแบบ', val: 'ถอดแบบและร่วมประชุมสเปกกับที่ปรึกษาโครงการ' },
            { label: 'ผู้จัดจำหน่ายอย่างเป็นทางการ', val: 'บจก. เฟมไลน์ โปร์ดักส์' },
          ]
        }
      ]
    },
    {
      id: 9,
      title: '9. แผ่นไฟเบอร์ซีเมนต์นิชิฮะ (NICHIHA Japan MicroGuard)',
      code: 'SS-NICHIHA-CAT',
      categoryName: 'NICHIHA ญี่ปุ่น',
      image: '/images/suppersurface/nichiha-cement.jpg',
      galleryImage: '/images/suppersurface/hero-facade.jpg',
      desc: 'แบรนด์อันดับ 1 จากญี่ปุ่น เทคโนโลยี MicroGuard ทำความสะอาดตัวเองด้วยน้ำฝน ระบบคลิปล็อคซ่อนหัวสกรู ลวดลาย 3D สมจริง',
      specs: ['ขนาด 455 x 3030 มม. หนา 16 มม.', 'เทคโนโลยีนาโน MicroGuard Self-Cleaning', 'ระบบคลิปล็อค ไร้รอยเจาะหน้าแผ่น', 'ฉนวนกันความร้อนและเสียงระดับสูง'],
      productId: 'nichiha-japan',
      price: 2150,
      unit: 'ตร.ม.',
      totalPages: 4,
      pages: [
        {
          num: 1,
          title: 'หน้า 1: นวัตกรรม NICHIHA อันดับ 1 จากญี่ปุ่น',
          summary: 'แผ่นผนังไฟเบอร์ซีเมนต์นำเข้าจากประเทศญี่ปุ่น ผสานนวัตกรรม MicroGuard ทำความสะอาดตัวเอง',
          items: [
            { label: 'เทคโนโลยี MicroGuard', val: 'คราบสกปรกถูกสลายด้วยแสงแดด และชะล้างออกเองเมื่อฝนตก' },
            { label: 'ผิวสัมผัส 3 มิติ', val: 'ลวดลายหินธรรมชาติ ลายไม้ และปูนเปลือยลึกสมจริง' },
            { label: 'การเคลือบสี Platinum Coat', val: 'สีคงทนยาวนาน ไม่ซีดจาง รับประกันสี 15 ปี' },
            { label: 'ความหนาแผ่น', val: '16 มม. ป้องกันความร้อนและเสียงเข้าสู่อาคาร' },
          ]
        },
        {
          num: 2,
          title: 'หน้า 2: มิติขนาด & ระบบคลิปล็อคซ่อนสกรู',
          summary: 'ติดตั้งด้วยคลิปพิเศษ ไม่ต้องเจาะทะลุหน้าแผ่น ป้องกันการรั่วซึมได้ 100%',
          items: [
            { label: 'ขนาดแผ่นมาตรฐาน', val: 'ความกว้าง 455 มม. ความยาว 3030 มม.' },
            { label: 'น้ำหนักต่อแผ่น', val: 'ประมาณ 24 กก./แผ่น (16-18 กก./ตร.ม.)' },
            { label: 'ระบบคลิปยึด', val: 'NICHIHA Clip System ซ่อนหัวสกรูเรียบเนียน' },
            { label: 'รอยต่อระหว่างแผ่น', val: 'ระบบร่องลิ้น Shiplap Joint แนบสนิท' },
          ]
        },
        {
          num: 3,
          title: 'หน้า 3: ฉนวนกันความร้อน & การป้องกันเสียง',
          summary: 'สร้างเกราะป้องกันอาคารแบบ Ventilated Rain-Screen System ระบายความชื้นได้ตลอดเวลา',
          items: [
            { label: 'การกันเสียง (Sound Insulation)', val: 'ลดเสียงรบกวนภายนอกได้ถึง 35-40 dB' },
            { label: 'ฉนวนกันความร้อน', val: 'มีช่องว่างระบายอากาศด้านหลังแผ่น ลดความร้อนสะสม' },
            { label: 'การทนต่อแผ่นดินไหว', val: 'ระบบคลิปให้ตัวได้ ไม่แตกร้าวเมื่ออาคารสั่นไหว' },
            { label: 'การติดตั้งบนโครงสร้าง', val: 'ติดตั้งได้ทั้งบนโครงสร้างไม้ เหล็ก และผนังปูน' },
          ]
        },
        {
          num: 4,
          title: 'หน้า 4: เอกสารรับรองมาตรฐานญี่ปุ่น & B2B',
          summary: 'ผ่านมาตรฐาน JIS (Japanese Industrial Standards) สูงสุดในประเทศญี่ปุ่น',
          items: [
            { label: 'มาตรฐาน JIS A 5422', val: 'ผ่านการทดสอบความทนทานต่อสภาพอากาศหนาวและร้อนจัด' },
            { label: 'มาตรฐานไม่ติดไฟ', val: 'Non-combustible Material ได้รับการรับรองจากกระทรวงญี่ปุ่น' },
            { label: 'การรับประกัน', val: 'รับประกันคุณภาพผลิตภัณฑ์ยาวนาน 15 ปี' },
            { label: 'ตัวแทนจำหน่าย', val: 'บจก. เฟมไลน์ โปร์ดักส์ (FAMELINE)' },
          ]
        }
      ]
    },
  ], []);

  const activeCatalog = useMemo(() => {
    return catalogsList.find((c) => c.id === selectedCatalogId) || catalogsList[0];
  }, [catalogsList, selectedCatalogId]);

  const handleSelectCatalog = (id: number) => {
    setSelectedCatalogId(id);
    setActiveCatalogPage(1);
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.spec.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [products, activeCategory, searchQuery]);

  // Cart operations
  const addToCart = (product: typeof products[0], qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          categoryName: product.categoryName,
          code: product.code,
          spec: product.spec,
          unit: product.unit,
          unitPrice: product.price,
          quantity: qty,
          image: product.image,
        },
      ];
    });
    setIsCartOpen(true);
    setCheckoutStep('cart');
    showToast(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว`);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  }, [cart]);

  const vat = useMemo(() => Math.round(subtotal * 0.07), [subtotal]);
  const grandTotal = useMemo(() => subtotal + vat, [subtotal, vat]);
  const totalItemCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  // Copy helper
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(label);
    showToast('คัดลอกเลขที่บัญชีเรียบร้อยแล้ว');
    setTimeout(() => setCopiedBank(null), 2500);
  };

  // Estimator calculation
  const estimatorResult = useMemo(() => {
    const selected = products.find((p) => p.id.includes(estimatorProduct)) || products[0];
    const totalAreaWithWaste = Math.round(estimatorArea * (1 + estimatorWaste / 100));
    const estimatedCost = totalAreaWithWaste * selected.price;
    return {
      product: selected,
      effectiveArea: totalAreaWithWaste,
      estimatedCost,
    };
  }, [estimatorArea, estimatorProduct, estimatorWaste, products]);

  // Quote Ref Number generator
  const quoteRef = useMemo(() => {
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    return `QT-FL-${dateStr}-889`;
  }, []);

  // Format Quotation Text for Clipboard & LINE
  const generateQuotationSummaryText = () => {
    return `📄 ใบเสนอราคาทางการ (QUOTATION)
เลขที่: ${quoteRef}
วันที่: ${new Date().toLocaleDateString('th-TH')}
----------------------------------
เรียน: ${customerInfo.businessName || customerInfo.name || 'ลูกค้าโครงการ Fameline'}
ผู้ติดต่อ: ${customerInfo.name || '-'}
โทรศัพท์: ${customerInfo.phone || '-'}
เลขประจำตัวผู้เสียภาษี: ${customerInfo.taxId || '-'}
สถานที่จัดส่ง/โครงการ: ${customerInfo.projectLocation || '-'}
----------------------------------
รายการสินค้า:
${cart.map((item, idx) => `${idx + 1}. ${item.name} (${item.code})\n   จำนวน: ${item.quantity} ${item.unit} x ฿${item.unitPrice.toLocaleString()} = ฿${(item.unitPrice * item.quantity).toLocaleString()}`).join('\n')}
----------------------------------
ยอดรวมก่อน VAT: ฿${subtotal.toLocaleString()}
ภาษีมูลค่าเพิ่ม (VAT 7%): ฿${vat.toLocaleString()}
💰 ยอดรวมสุทธิทั้งสิ้น: ฿${grandTotal.toLocaleString()} บาท
----------------------------------
บจก. เฟมไลน์ โปร์ดักส์ (Supper Surface)
ติดต่อคุณแอล (เสาวลักษณ์ นุ่นหนู) โทร. 066-168-5157`;
  };

  // 1. Submit Quotation to API & Handoff to Khun L's LINE
  const handleSendQuotationToLine = async () => {
    setIsSubmittingLead(true);
    const quoteSummary = generateQuotationSummaryText();

    // 1. Copy formatted quote to clipboard for instant pasting into LINE
    try {
      await navigator.clipboard.writeText(quoteSummary);
      showToast('คัดลอกใบเสนอราคาแล้ว! พร้อมกดวาง (Paste) ใน LINE คุณแอลได้ทันที');
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }

    // 2. Dispatch to /api/leads so it logs in database and webhook
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: customerInfo.name || 'ลูกค้าโครงการ (ขอใบเสนอราคา)',
          phone: customerInfo.phone || '-',
          modelInterest: cart.map(c => `${c.name} (${c.quantity} ${c.unit})`).join(', '),
          serviceType: 'ขอใบเสนอราคาทางการ (Quotation Request)',
          location: customerInfo.projectLocation,
          notes: `บริษัท: ${customerInfo.businessName || '-'}, เลขประจำตัวผู้เสียภาษี: ${customerInfo.taxId || '-'}, เลขที่ใบเสนอราคา: ${quoteRef}, ยอดรวมสุทธิ: ฿${grandTotal.toLocaleString()}`,
          pageSource: 'Supper Surface (บจก. เฟมไลน์ โปร์ดักส์)',
        }),
      });
    } catch (err) {
      console.error('Lead submission error:', err);
    } finally {
      setIsSubmittingLead(false);
    }

    // 3. Open Khun L's verified LINE account directly
    window.open(lineUrl, '_blank');
    setCheckoutStep('success');
  };

  // 2. Confirm Payment & Handoff to Khun L's LINE
  const handleConfirmPayment = async () => {
    setIsSubmittingLead(true);
    const paymentSummary = `💰 แจ้งชำระเงินค่าสินค้า (บจก. เฟมไลน์ โปร์ดักส์)
เลขที่อ้างอิง: ${quoteRef}
----------------------------------
ผู้โอน/บริษัท: ${customerInfo.businessName || customerInfo.name || 'ลูกค้าโครงการ'}
เบอร์โทรศัพท์: ${customerInfo.phone || '-'}
โอนเข้าบัญชี: ธนาคาร${customerInfo.transferBank === 'SCB' ? 'ไทยพาณิชย์ 154-3-00307-6' : 'กสิกรไทย 421-2-13883-0'}
ยอดเงินที่ชำระ: ฿${grandTotal.toLocaleString()} บาท (รวม VAT 7%)
----------------------------------
***กรณีโอนเงินชำระค่าสินค้าแล้วไม่สามารถเปลี่ยนแปลงหรือคืนสินค้าได้***
โอนเข้าบัญชี บจก. เฟมไลน์ โปร์ดักส์ เรียบร้อยแล้ว`;

    try {
      await navigator.clipboard.writeText(paymentSummary);
      showToast('คัดลอกข้อมูลการแจ้งชำระเงินแล้ว! พร้อมส่งหลักฐานให้คุณแอลใน LINE');
    } catch (err) {}

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: customerInfo.name || 'ลูกค้าแจ้งชำระเงิน',
          phone: customerInfo.phone || '-',
          modelInterest: cart.map(c => `${c.name} (${c.quantity} ${c.unit})`).join(', '),
          serviceType: 'แจ้งชำระเงินเข้าบัญชีบริษัท (Payment Confirmation)',
          location: customerInfo.projectLocation,
          notes: `บริษัท: ${customerInfo.businessName || '-'}, ธนาคารที่โอน: ${customerInfo.transferBank}, ยอดเงิน: ฿${grandTotal.toLocaleString()}`,
          pageSource: 'Supper Surface (บจก. เฟมไลน์ โปร์ดักส์)',
        }),
      });
    } catch (err) {
      console.error('Lead submission error:', err);
    } finally {
      setIsSubmittingLead(false);
    }

    window.open(lineUrl, '_blank');
    setCheckoutStep('success');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-28 md:pb-16 w-full max-w-full overflow-x-hidden">
      
      {/* GLOBAL TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-6 z-50 bg-amber-500 text-slate-950 px-4 py-2.5 rounded-xl shadow-2xl font-bold text-xs flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-4 h-4 text-slate-950 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. UNIFIED MINIMAL STICKY MENU (Clean, Non-wrapping UI + Mobile Hamburger) */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Brand Identity */}
          <Link href="/supper-surface" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition">
              <Layers className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-white leading-none">
                  SUPPER SURFACE
                </span>
                <span className="text-[9px] sm:text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded font-bold uppercase">
                  FAMELINE
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wider hidden sm:block">
                ผู้นำนวัตกรรมวัสดุปิดผิวสถาปัตยกรรม
              </p>
            </div>
          </Link>

          {/* Desktop Minimal Navigation (Clean, Non-wrapping Single Line) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-semibold text-slate-300">
            <a href="#hero" className="hover:text-amber-400 transition whitespace-nowrap">หน้าแรก</a>
            <a href="#innovations" className="hover:text-amber-400 transition whitespace-nowrap">นวัตกรรม</a>
            <a href="#minimall-catalog" className="hover:text-amber-400 transition whitespace-nowrap">แคตตาล็อก</a>
            <a href="#live-anyflip" className="hover:text-amber-400 transition whitespace-nowrap flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Lookbook สเปก</span>
            </a>
            <a href="#estimator" className="hover:text-amber-400 transition whitespace-nowrap">คำนวณพื้นที่</a>
            <a href="#articles" className="hover:text-amber-400 transition whitespace-nowrap">บทความ</a>
            <a href="#contact-sales" className="hover:text-amber-400 transition whitespace-nowrap">ติดต่อเรา</a>
          </nav>

          {/* Action Area & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a 
              href={salePhoneCallUrl} 
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-200 text-xs font-semibold transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" /> 
              <span>{salePhone}</span>
            </a>

            <a 
              href={lineUrl} 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-xs font-bold transition shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" /> 
              <span>LINE คุณแอล</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={() => {
                setIsCartOpen(true);
                setCheckoutStep('cart');
              }}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition active:scale-95"
            >
              <ShoppingCart className="w-4 h-4 text-slate-950" />
              <span className="hidden xs:inline">ตะกร้า</span>
              {totalItemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-400 text-xs font-extrabold flex items-center justify-center animate-pulse">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-500/40 transition active:scale-95"
              aria-label="เปิดเมนูนำทาง"
            >
              <Menu className="w-5 h-5 text-amber-400" />
            </button>
          </div>
        </div>
      </header>

      {/* 1.1 MOBILE NAVIGATION DRAWER (Slide-over) */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileNavOpen(false)}
          />

          {/* Drawer Body */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-slate-950 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">SUPPER SURFACE</div>
                    <div className="text-[10px] text-amber-400 font-semibold">FAMELINE GROUP</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileNavOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-200">
                <a 
                  href="#hero" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl hover:bg-slate-900 hover:text-amber-400 transition flex items-center justify-between"
                >
                  <span>หน้าแรก</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </a>
                <a 
                  href="#innovations" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl hover:bg-slate-900 hover:text-amber-400 transition flex items-center justify-between"
                >
                  <span>จุดเด่นนวัตกรรม</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </a>
                <a 
                  href="#minimall-catalog" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl hover:bg-slate-900 hover:text-amber-400 transition flex items-center justify-between"
                >
                  <span>MiniMall แคตตาล็อก</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-bold">9 รายการ</span>
                </a>
                <a 
                  href="#live-anyflip" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl hover:bg-slate-900 hover:text-amber-400 transition flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>Lookbook สเปก E-Book</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </a>
                <a 
                  href="#estimator" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl hover:bg-slate-900 hover:text-amber-400 transition flex items-center justify-between"
                >
                  <span>คำนวณพื้นที่ & งบประมาณ</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </a>
                <a 
                  href="#articles" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl hover:bg-slate-900 hover:text-amber-400 transition flex items-center justify-between"
                >
                  <span>คลังบทความสถาปัตยกรรม (SEO)</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </a>
                <a 
                  href="#contact-sales" 
                  onClick={() => setIsMobileNavOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl hover:bg-slate-900 hover:text-amber-400 transition flex items-center justify-between"
                >
                  <span>ติดต่อคุณแอล (ฝ่ายขาย)</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </a>
              </nav>

            </div>

            {/* Drawer Bottom Actions */}
            <div className="space-y-3 pt-6 border-t border-slate-800">
              <a
                href={salePhoneCallUrl}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>โทรสายตรง: {salePhone}</span>
              </a>
              <a
                href={lineUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>แอด LINE คุณแอลโดยตรง</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* 2. CINEMATIC HERO SECTION (Sites.SalesDesk Architectural Aesthetic - Open Breathing Room) */}
      <section id="hero" className="relative min-h-[82vh] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed 16:9 Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/suppersurface/hero-cinematic.jpg"
            alt="Supper Surface by Fameline นวัตกรรมวัสดุปิดผิวสถาปัตยกรรม Facade หินวีเนียร์ MCM ฝ้า ระแนง คอมโพสิต นิชิฮะ"
            className="w-full h-full object-cover object-[75%_center] sm:object-center brightness-105 contrast-[1.04] transition-all duration-700"
          />
          
          {/* Desktop Left Scrim: Darkens left side for text readability while leaving right 50% totally open */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 via-48% to-transparent" />
          
          {/* Mobile Scrim (Sites.SalesDesk AI Signature): Clean top header shadow & sleek bottom CTA fade, leaving middle 50% open for the architectural masterpiece */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/20 via-35% to-transparent" />
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/90 via-55% to-transparent" />
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Hero Content Container (Clean Negative Space, 100% Grand Unobstructed View) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-12 sm:pb-20 relative z-10 w-full flex-1 flex flex-col justify-between sm:justify-center">
          
          {/* Top/Center Text Block */}
          <div className="max-w-2xl lg:max-w-3xl space-y-3.5 sm:space-y-6 text-center sm:text-left">
            
            {/* Authority Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-950/80 border border-amber-500/40 text-amber-300 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg shadow-slate-950/60">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span>ผู้นำนวัตกรรมวัสดุปิดผิวสถาปัตยกรรม • FAMELINE GROUP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              ยกระดับสถาปัตยกรรมสู่อนาคต <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 inline-block mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                ด้วยวัสดุปิดผิวระดับไฮเอนด์ ครบวงจร
              </span>
            </h1>

            {/* Subheadline (Clean on Mobile, avoids cluttering the photo) */}
            <p className="text-xs sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] max-w-2xl line-clamp-3 sm:line-clamp-none">
              ศูนย์รวมนวัตกรรมวัสดุ Facade, <strong>หินวีเนียร์ MCM ยืดหยุ่นดัดโค้งได้</strong>, ไม้เทียม WPC, 
              ฝ้าอลูมิเนียม 85C/85F, ระแนงอลูมิเนียม Louver, คอมโพสิต <strong>DECO & ALTEX</strong>, 
              และแผ่นไฟเบอร์ซีเมนต์ <strong>NICHIHA ญี่ปุ่น</strong> มาตรฐานโปรเจกต์ระดับประเทศ
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
              <a
                href="#minimall-catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 transition active:scale-95"
              >
                <ShoppingCart className="w-4 h-4 text-slate-950" />
                <span>เลือกชมผลิตภัณฑ์ & ขอใบเสนอราคา</span>
              </a>
              
              <a
                href={salePhoneCallUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-slate-700 shadow-md backdrop-blur-md transition"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>โทรหาคุณแอล: {salePhone}</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 2.1 DEDICATED AUTHORITY PROOF BAR (Positioned Below Hero for Max Breathing Room) */}
      <section className="relative z-10 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900/95 border border-slate-800/90 rounded-2xl p-4 sm:p-5 backdrop-blur-xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 divide-y sm:divide-y-0 divide-slate-800 sm:divide-x divide-slate-800">
          <div className="pt-2 sm:pt-0 sm:px-3 text-left">
            <div className="text-amber-400 font-black text-xl sm:text-2xl">30+ ปี</div>
            <div className="text-xs text-slate-300 font-medium">ประสบการณ์ระดับประเทศ</div>
            <div className="text-[11px] text-slate-500">บจก. เฟมไลน์ โปร์ดักส์</div>
          </div>
          <div className="pt-2 sm:pt-0 sm:px-3 text-left">
            <div className="text-amber-400 font-black text-xl sm:text-2xl">2,500+</div>
            <div className="text-xs text-slate-300 font-medium">โครงการชั้นนำทั่วไทย</div>
            <div className="text-[11px] text-slate-500">อาคารสูง ห้างสรรพสินค้า โชว์รูม</div>
          </div>
          <div className="pt-2 sm:pt-0 sm:px-3 text-left">
            <div className="text-amber-400 font-black text-xl sm:text-2xl">FR Class A2</div>
            <div className="text-xs text-slate-300 font-medium">มาตรฐานทนไฟสากล</div>
            <div className="text-[11px] text-slate-500">ผ่านการทดสอบ ASTM / BS / ISO</div>
          </div>
          <div className="pt-2 sm:pt-0 sm:px-3 text-left">
            <div className="text-amber-400 font-black text-xl sm:text-2xl">100% B2B</div>
            <div className="text-xs text-slate-300 font-medium">ใบเสนอราคา & ชำระในนาม บจก.</div>
            <div className="text-[11px] text-slate-500">ออกใบกำกับภาษีเต็มรูปแบบ</div>
          </div>
        </div>
      </section>

      {/* 3. PSYCHOLOGICAL PILLARS: WHY ARCHITECTS & CONTRACTORS CHOOSE FAMELINE */}
      <section id="innovations" className="py-16 md:py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Engineered for Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              ทำไมสถาปนิกและผู้รับเหมาชั้นนำ จึงไว้วางใจ Supper Surface & Fameline
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              หมดปัญหาวัสดุตกแต่งแตกร้าว โก่งงอ สีซีดจาง หรือเป็นภาระน้ำหนักโครงสร้าง ด้วยนวัตกรรมวัสดุปิดผิวมาตรฐานสากล
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">1. น้ำหนักเบา ยืดหยุ่น ดัดโค้งได้ (Flexible MCM)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                หินวีเนียร์ MCM ทดแทนหินธรรมชาติที่มีน้ำหนักมาก ลดภาระโครงสร้างอาคารได้กว่า 80% ดัดโค้งตามเสาและผนังคลื่นได้สวยงามโดยไม่ต้องตัดต่อรอยต่อหนา
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> ความหนาเพียง 2-4 มม. ไม่กินพื้นที่ภายใน</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> ลวดลายหินธรรมชาติสมจริงทุกมิติ</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">2. มาตรฐานทนไฟ & ทนทุกสภาพอากาศ</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                คอมโพสิต ALTEX และ DECO เคลือบสี PVDF Kynar 500 ทนทานต่อแสง UV ความร้อน และไอเกลือทะเล พร้อมไส้กลางกันไฟลาม Class A2 ผ่านการทดสอบระดับสากล
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> รับประกันสีเคลือบยาวนาน 10-20 ปี</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> มั่นใจในความปลอดภัยสำหรับอาคารสูง</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">3. เทคโนโลยีทำความสะอาดตัวเอง (NICHIHA)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                แผ่นไฟเบอร์ซีเมนต์ NICHIHA นำเข้าจากญี่ปุ่น มาพร้อมเทคโนโลยี MicroGuard สลายคราบฝุ่นด้วยแสงแดด และล้างออกเองได้เมื่อฝนตก คงความสวยเหมือนใหม่ตลอดเวลา
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> ลดค่าใช้จ่ายในการล้างผนังอาคารระยะยาว</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> ระบบคลิปล็อค ไร้รอยเจาะหัวสกรู</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. MINIMALL PREMIUM CATALOG & INTERACTIVE CART SYSTEM (Floating 3D Luxury Cards) */}
      <section id="minimall-catalog" className="py-16 md:py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                <ShoppingCart className="w-3.5 h-3.5" /> MiniMall Premium Catalog
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                แคตตาล็อกวัสดุและระบบสั่งซื้อ / ขอใบเสนอราคา
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                เลือกสินค้าลงตะกร้าเพื่อคำนวณงบประมาณ ขอใบเสนอราคาทางการ หรือสั่งซื้อในนามบริษัท พร้อมสลับดูสเปกได้ทันที
              </p>
            </div>

            {/* View Switcher & Cart shortcut */}
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 flex items-center">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    viewMode === 'grid' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" /> <span className="hidden sm:inline">การ์ด</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    viewMode === 'table' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Table Spec View"
                >
                  <Table className="w-4 h-4" /> <span className="hidden sm:inline">ตารางสเปก</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setCheckoutStep('cart');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 hover:bg-slate-850 font-bold text-xs sm:text-sm shadow-md transition"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>ตะกร้า ({totalItemCount})</span>
              </button>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-8 space-y-4 backdrop-blur-md">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="ค้นหาชื่อวัสดุ, รหัสสินค้า, เช่น MCM, WPC, ฝ้า 85C, คอมโพสิต, นิชิฮะ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Badges */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {[
                { id: 'all', label: 'ทั้งหมด (9 รายการ)' },
                { id: 'veneer-mcm', label: '1. หินวีเนียร์ MCM' },
                { id: 'wpc', label: '2. ไม้สังเคราะห์ WPC' },
                { id: 'ceiling', label: '3-4. ฝ้าอลูมิเนียม 85C / 85F' },
                { id: 'louver', label: '5. ระแนงอลูมิเนียม' },
                { id: 'composite', label: '6-8. คอมโพสิต DECO & ALTEX' },
                { id: 'nichiha', label: '9. ไฟเบอร์ซีเมนต์ NICHIHA' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                    activeCategory === cat.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* Catalog Results View */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl">
              <HelpCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">ไม่พบสินค้าที่ตรงกับการค้นหา</h3>
              <p className="text-xs text-slate-400 mt-1">ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่อื่น</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-white hover:bg-slate-700 transition"
              >
                ล้างการค้นหาทั้งหมด
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* GRID VIEW (Floating 3D Premium Cards: Elevated Dual-Tone Slate Gradient + Accent Highlight) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-700/60 hover:border-amber-400/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-[0_16px_36px_-6px_rgba(0,0,0,0.85)] hover:shadow-[0_24px_50px_-8px_rgba(245,158,11,0.2)] hover:-translate-y-2"
                >
                  {/* Top Specular Glow Line for Luxury Feel */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition" />

                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-slate-950/85 border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded-lg text-[11px] font-bold backdrop-blur-md shadow-md">
                      {product.badge}
                    </div>

                    {/* Preview Spec In-Page Trigger */}
                    <button
                      onClick={() => {
                        const matchCat = catalogsList.find(c => c.productId === product.id) || catalogsList[0];
                        setActiveModalCatalog(matchCat);
                      }}
                      className="absolute top-3 right-3 bg-slate-900/85 hover:bg-amber-500 text-slate-300 hover:text-slate-950 p-2 rounded-lg text-xs backdrop-blur-md transition shadow-md flex items-center gap-1.5 border border-slate-700/80"
                      title="พรีวิวสเปกแคตตาล็อก"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold">พรีวิวสเปก</span>
                    </button>

                    {/* Code & Unit */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-mono">
                      <span className="bg-slate-950/95 px-2 py-0.5 rounded border border-slate-800 text-amber-400 font-bold shadow">
                        {product.code}
                      </span>
                      <span className="bg-slate-950/95 px-2 py-0.5 rounded border border-slate-800 text-slate-300 shadow">
                        หน่วย: {product.unit}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1">
                        {product.categoryName}
                      </div>
                      <h3 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                        {product.spec}
                      </p>
                      
                      {/* Contrasting Dark Inner Plate */}
                      <div className="mt-3 text-xs text-slate-300 bg-slate-950/90 p-3 rounded-xl border border-slate-800/90 shadow-inner space-y-1">
                        <div className="text-slate-400 font-medium">สเปก & ขนาด:</div>
                        <div className="font-semibold text-white">{product.size}</div>
                      </div>

                      {/* Key features bullets */}
                      <ul className="mt-3 space-y-1 text-[11px] text-slate-400">
                        {product.features.slice(0, 2).map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Cart Action */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">ราคาประเมินโครงการ</div>
                        <div className="text-lg font-black text-amber-400">
                          ฿{product.price.toLocaleString()}
                          <span className="text-xs font-normal text-slate-400"> /{product.unit}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const matchCat = catalogsList.find(c => c.productId === product.id) || catalogsList[0];
                            setActiveModalCatalog(matchCat);
                          }}
                          className="p-2.5 rounded-xl border border-slate-700 hover:border-amber-400 text-slate-300 hover:text-white transition bg-slate-950/80"
                          title="พรีวิวสเปกแคตตาล็อกบนหน้าเว็บ"
                        >
                          <FileText className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => addToCart(product, 1)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>ใส่ตะกร้า</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* TABLE SPEC COMPARISON VIEW */
            <div className="overflow-x-auto bg-slate-900/90 border border-slate-700/60 rounded-2xl shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-950/90 text-slate-400 text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">รหัส / รูปภาพ</th>
                    <th className="p-3.5">ชื่อผลิตภัณฑ์ & สเปก</th>
                    <th className="p-3.5">ขนาดมาตรฐาน</th>
                    <th className="p-3.5">พรีวิวสเปก</th>
                    <th className="p-3.5 text-right">ราคาประเมิน</th>
                    <th className="p-3.5 text-center">ดำเนินการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-800/50 transition">
                      <td className="p-3.5">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover bg-slate-950 shrink-0 border border-slate-800 shadow"
                          />
                          <div>
                            <span className="font-mono text-xs font-bold text-amber-400 block">{product.code}</span>
                            <span className="text-[10px] text-slate-400">{product.badge}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3.5 max-w-xs">
                        <div className="font-bold text-white text-xs sm:text-sm leading-tight">{product.name}</div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{product.spec}</p>
                      </td>
                      <td className="p-3.5 text-xs text-slate-300">
                        {product.size}
                      </td>
                      <td className="p-3.5">
                        <button
                          onClick={() => {
                            const matchCat = catalogsList.find(c => c.productId === product.id) || catalogsList[0];
                            setActiveModalCatalog(matchCat);
                          }}
                          className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline font-semibold"
                        >
                          <Eye className="w-3.5 h-3.5" /> พรีวิวสเปก
                        </button>
                      </td>
                      <td className="p-3.5 text-right font-bold text-amber-400 text-sm">
                        ฿{product.price.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/{product.unit}</span>
                      </td>
                      <td className="p-3.5 text-center">
                        <button
                          onClick={() => addToCart(product, 1)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5" /> ใส่ตะกร้า
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>

      {/* 5. NATIVE IN-PAGE ARCHITECTURAL SPEC LOOKBOOK & E-BOOK (Zero Third-Party iFrame, 100% Reliable) */}
      <section id="live-anyflip" className="py-16 md:py-24 bg-slate-900/40 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
              Fameline Native Spec Lookbook & E-Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              พรีวิวแคตตาล็อกสเปกออนไลน์ ฉบับสมบูรณ์ (บนหน้าเว็บทันที)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              เปิดอ่านคู่มือสเปกสถาปัตยกรรมและวิศวกรรมได้ทันทีบนหน้านี้ ทั้งบนมือถือและคอมพิวเตอร์ โหลดไว 0.1s ไม่หลุดออกนอกเว็บไซต์
            </p>
          </div>

          {/* 9 Catalogs Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
            {catalogsList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelectCatalog(cat.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-2 border ${
                  selectedCatalogId === cat.id
                    ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-900'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* In-Page Interactive Showcase Box */}
          <div className="bg-slate-950 border border-slate-800/90 rounded-3xl p-4 sm:p-8 shadow-2xl space-y-6">
            
            {/* Catalog Info Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  <span>{activeCatalog.categoryName}</span> • <span className="font-mono">{activeCatalog.code}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white">{activeCatalog.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">{activeCatalog.desc}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
                <button
                  onClick={() => setActiveModalCatalog(activeCatalog)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 text-xs font-semibold transition"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>ขยายดูสเปกเต็มจอ</span>
                </button>

                <button
                  onClick={() => {
                    const matchProd = products.find(p => p.id === activeCatalog.productId);
                    if (matchProd) addToCart(matchProd, 1);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  <span>ใส่ตะกร้า (฿{activeCatalog.price.toLocaleString()} /{activeCatalog.unit})</span>
                </button>
              </div>
            </div>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
              {activeCatalog.specs.map((sp: string, idx: number) => (
                <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 sm:p-3 flex items-start gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200 font-medium text-[11px] sm:text-xs">{sp}</span>
                </div>
              ))}
            </div>

            {/* INTERACTIVE IN-PAGE FLIPBOOK VIEWER */}
            <div className="space-y-4">
              
              {/* Quick Jump Spec Page Navigation Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { num: 1, label: '1. ดีไซน์ & สถาปัตยกรรม' },
                  { num: 2, label: '2. ขนาด & มิติวิศวกรรม' },
                  { num: 3, label: '3. การติดตั้ง & รอยต่อ' },
                  { num: 4, label: '4. มาตรฐานทนไฟ & Cer' },
                ].map((tab) => (
                  <button
                    key={tab.num}
                    onClick={() => setActiveCatalogPage(tab.num)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border ${
                      activeCatalogPage === tab.num
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20'
                        : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-850'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Book Spread Canvas */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-8 shadow-2xl overflow-hidden">
                
                {/* Subtle Book Spine Center Lighting */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-transparent via-black/40 to-transparent pointer-events-none hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  
                  {/* Left Spread: High-Res Spec Graphic & Visual */}
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-950 border border-slate-800/90 shadow-xl group">
                    <img
                      src={activeCatalogPage === 1 ? activeCatalog.image : (activeCatalog.galleryImage || activeCatalog.image)}
                      alt={activeCatalog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
                    
                    <div className="absolute top-3 left-3 bg-slate-950/90 border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded text-xs font-mono font-bold">
                      {activeCatalog.code}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                      <div className="font-bold text-amber-400">{activeCatalog.title}</div>
                      <div className="text-[11px] text-slate-300">เอกสารสเปกวิศวกรรมสถาปัตยกรรมฉบับทางการ Fameline</div>
                    </div>
                  </div>

                  {/* Right Spread: Interactive Spec Data Page */}
                  <div className="space-y-4 flex flex-col justify-between">
                    {(() => {
                      const curPage = activeCatalog.pages?.[activeCatalogPage - 1] || activeCatalog.pages?.[0];
                      return (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                            <div>
                              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                                {activeCatalog.categoryName} • SPEC SHEET
                              </span>
                              <h4 className="text-base sm:text-lg font-bold text-white">
                                {curPage?.title}
                              </h4>
                            </div>
                            <span className="text-xs font-mono bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg text-slate-300 font-bold">
                              หน้า {activeCatalogPage} / {activeCatalog.totalPages || 4}
                            </span>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                            {curPage?.summary}
                          </p>

                          <div className="grid grid-cols-1 gap-2 text-xs">
                            {curPage?.items.map((row: any, rIdx: number) => (
                              <div key={rIdx} className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80 flex items-center justify-between gap-3">
                                <span className="text-slate-400 text-[11px] font-medium">{row.label}:</span>
                                <span className="text-white font-semibold text-[11px] text-right">{row.val}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    {/* Flip Controllers Bar */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveCatalogPage(prev => Math.max(1, prev - 1))}
                        disabled={activeCatalogPage <= 1}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 disabled:opacity-40 text-xs font-semibold text-slate-200 transition"
                      >
                        <ChevronLeft className="w-4 h-4 text-amber-400" />
                        <span>หน้าก่อนหน้า</span>
                      </button>

                      {/* Page Pill Indicators */}
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4].map((pNum) => (
                          <button
                            key={pNum}
                            onClick={() => setActiveCatalogPage(pNum)}
                            className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition ${
                              activeCatalogPage === pNum
                                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                            }`}
                          >
                            {pNum}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveCatalogPage(prev => Math.min(activeCatalog.totalPages || 4, prev + 1))}
                        disabled={activeCatalogPage >= (activeCatalog.totalPages || 4)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 disabled:opacity-40 text-xs font-semibold text-slate-200 transition"
                      >
                        <span>หน้าถัดไป</span>
                        <ChevronRight className="w-4 h-4 text-amber-400" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>

              {/* In-Book Direct Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/80">
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  💡 กำลังดู: <strong className="text-amber-400">{activeCatalog.title}</strong> (฿{activeCatalog.price.toLocaleString()} /{activeCatalog.unit})
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={lineUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      navigator.clipboard.writeText(`สนใจสอบถามสเปกแคตตาล็อก: ${activeCatalog.title} (${activeCatalog.code}) ราคาประเมิน ฿${activeCatalog.price.toLocaleString()}/${activeCatalog.unit}`);
                      showToast('คัดลอกชื่อสเปกแล้ว พร้อมแชทคุยกับคุณแอลใน LINE');
                    }}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-bold text-xs transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>สอบถามสเปกนี้ผ่าน LINE</span>
                  </a>

                  <button
                    onClick={() => {
                      const matchProd = products.find(p => p.id === activeCatalog.productId);
                      if (matchProd) addToCart(matchProd, 1);
                    }}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>ใส่ตะกร้าสินค้านี้</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. INTERACTIVE AREA & BUDGET ESTIMATOR */}
      <section id="estimator" className="py-16 md:py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full mb-2">
                  <Calculator className="w-3.5 h-3.5" /> B2B Project Estimator
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  เครื่องคำนวณพื้นที่และงบประมาณเบื้องต้น
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  กรอกพื้นที่หน้างานเพื่อประเมินปริมาณวัสดุและงบประมาณ ก่อนส่งให้ทีมงาน Fameline ถอดแบบ BOQ ทางการ
                </p>
              </div>

              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-right shrink-0">
                <span className="text-[11px] text-slate-400 block">งบประมาณประเมินคร่าวๆ</span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400">
                  ฿{estimatorResult.estimatedCost.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500 block">*(ยังไม่รวม VAT และค่าติดตั้ง)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              
              {/* Select Product */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">1. เลือกประเภทวัสดุที่ต้องการ</label>
                <select
                  value={estimatorProduct}
                  onChange={(e) => setEstimatorProduct(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                >
                  <option value="veneer-mcm">หินวีเนียร์ Veneer & MCM (฿1,450/ตร.ม.)</option>
                  <option value="wpc">ไม้สังเคราะห์ WPC (฿1,250/ตร.ม.)</option>
                  <option value="ceiling-85c">ฝ้าอลูมิเนียม 85 C (฿980/ตร.ม.)</option>
                  <option value="ceiling-85f">ฝ้าอลูมิเนียม 85 F (฿1,050/ตร.ม.)</option>
                  <option value="louver">ระแนงอลูมิเนียม Louver (฿1,850/ตร.ม.)</option>
                  <option value="deco-roof">คอมโพสิต DECO หลังคา (฿1,100/ตร.ม.)</option>
                  <option value="deco-facade">คอมโพสิต DECO ผนัง (฿950/ตร.ม.)</option>
                  <option value="altex">คอมโพสิต ALTEX FR (฿1,650/ตร.ม.)</option>
                  <option value="nichiha">ไฟเบอร์ซีเมนต์ NICHIHA (฿2,150/ตร.ม.)</option>
                </select>
              </div>

              {/* Area Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">2. พื้นที่หน้างานโดยประมาณ (ตร.ม.)</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={estimatorArea}
                    onChange={(e) => setEstimatorArea(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full p-3 pr-12 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-bold focus:outline-none focus:border-amber-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">ตร.ม.</span>
                </div>
              </div>

              {/* Waste margin */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">3. เผื่อเศษสูญเสียหน้างาน (Waste)</label>
                <div className="flex gap-2">
                  {[5, 10, 15].map((val) => (
                    <button
                      key={val}
                      onClick={() => setEstimatorWaste(val)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition ${
                        estimatorWaste === val
                          ? 'bg-amber-500 text-slate-950 border-amber-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      +{val}%
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300">
                รวมปริมาณที่แนะนำสั่งซื้อ: <strong className="text-white text-sm">{estimatorResult.effectiveArea} ตร.ม.</strong> (รวมเศษเผื่อ {estimatorWaste}%)
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => addToCart(estimatorResult.product, estimatorResult.effectiveArea)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow transition"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>ใส่ตะกร้าตามผลคำนวณนี้</span>
                </button>
                
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    navigator.clipboard.writeText(`สวัสดีค่ะคุณแอล สนใจประเมินราคา ${estimatorResult.product.name} พื้นที่ประมาณ ${estimatorArea} ตร.ม. (รวมเผื่อเป็น ${estimatorResult.effectiveArea} ตร.ม.) ยอดประมาณ ฿${estimatorResult.estimatedCost.toLocaleString()} ขอใบเสนอราคาและคำแนะนำค่ะ`);
                    showToast('คัดลอกผลคำนวณแล้ว พร้อมส่งเข้า LINE คุณแอล');
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs sm:text-sm transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ส่งผลคำนวณเข้า LINE คุณแอล</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. SEO ARTICLES & ARCHITECTURAL KNOWLEDGE HUB SECTION */}
      <section id="articles" className="py-16 md:py-24 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                <BookOpen className="w-3.5 h-3.5" /> Architectural SEO Hub
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                คลังความรู้วัสดุปิดผิวสถาปัตยกรรม & เทคนิควิศวกรรม
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                บทความเจาะลึกมาตรฐานวัสดุเปลือกอาคาร หินวีเนียร์ MCM, คอมโพสิตไส้ทนไฟ FR Class A2, ฝ้าเพดาน 85C/85F และแผ่นผนัง NICHIHA ญี่ปุ่น
              </p>
            </div>

            <Link
              href="/supper-surface/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition"
            >
              <span>ดูบทความทั้งหมดในคลังความรู้</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getAllSupperSurfacePosts().map((post) => (
              <article
                key={post.id}
                className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  <Link href={`/supper-surface/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={post.featuredImage}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-slate-950/80 border border-amber-500/30 text-amber-400 text-[10px] px-2 py-0.5 rounded font-bold backdrop-blur-md">
                      {post.categoryName}
                    </div>
                  </Link>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" /> {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>

                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition leading-snug line-clamp-2">
                      <Link href={`/supper-surface/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {post.metaDescription}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href={`/supper-surface/blog/${post.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-amber-400 hover:text-white transition"
                  >
                    <span>อ่านบทความเจาะลึก</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SALE EXECUTIVE & PREMIUM ARCHITECTURAL MASTERPIECE */}
      <section id="contact-sales" className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Premium Architectural Showcase Photo */}
              <div className="lg:col-span-5 space-y-4 text-center">
                <div className="relative aspect-[16/11] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                  <img
                    src="/images/suppersurface/hero-facade.jpg"
                    alt="งานติดตั้งวัสดุปิดผิวสถาปัตยกรรมระดับพรีเมียม Fameline Products"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-slate-950/85 border border-amber-500/40 text-amber-300 px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-md">
                    FAMELINE MASTERPIECE
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="text-sm font-bold text-white">มาตรฐานเปลือกอาคารระดับสากล</div>
                    <div className="text-[11px] text-slate-300">ส่งมอบผลงานโครงการคุณภาพกว่า 2,500+ โปรเจกต์ทั่วประเทศ</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-1">
                  <button
                    onClick={() => setShowQrModal(true)}
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30"
                  >
                    <QrCode className="w-3.5 h-3.5" /> สแกน LINE QR Code คุณแอล
                  </button>
                </div>
              </div>

              {/* Right Column: Contact Details */}
              <div className="lg:col-span-7 space-y-5">
                
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-3 py-0.5 rounded-full">
                    Official Contact Person
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {saleName}
                  </h3>
                  <p className="text-sm text-amber-400 font-medium">
                    {saleRole}
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white block">{companyNameTh} ({companyNameEn})</strong>
                      <span className="text-slate-400">{companyAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-slate-400">เบอร์โทรศัพท์สายตรง: </span>
                      <a href={salePhoneCallUrl} className="font-bold text-white hover:text-amber-400 transition text-base">
                        {salePhone}
                      </a>
                      <span className="text-slate-400 ml-3">โทรศัพท์บริษัท: </span>
                      <span className="text-slate-200">{officeTel}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-slate-400">อีเมลติดต่อ: </span>
                      <a href={`mailto:${saleEmail}`} className="text-white hover:underline">{saleEmail}</a>
                      <span className="text-slate-400 ml-3">เว็บไซต์: </span>
                      <a href={`https://${website}`} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">{website}</a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={salePhoneCallUrl}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow transition active:scale-95"
                  >
                    <PhoneCall className="w-4 h-4 text-slate-950" />
                    <span>โทร. {salePhone} (คุณแอล)</span>
                  </a>

                  <a
                    href={lineUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm shadow transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>แอดไลน์คุณแอลโดยตรง</span>
                  </a>

                  <a
                    href={facebookPageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition"
                  >
                    <Share2 className="w-4 h-4 text-blue-400" />
                    <span>Facebook: Supper Surface</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. MINIMALL CART & CHECKOUT SLIDE-OUT DRAWER (Full Working Quotation & Lead Dispatch) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer Container */}
          <div className="relative w-full max-w-xl bg-slate-900 border-l border-slate-800 shadow-2xl h-full flex flex-col z-10 overflow-hidden">
            
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white text-base">
                  {checkoutStep === 'cart' && `ตะกร้าสินค้า MiniMall (${totalItemCount} รายการ)`}
                  {checkoutStep === 'quote' && 'ขอใบเสนอราคาทางการ (Formal Quotation)'}
                  {checkoutStep === 'payment' && 'ช่องทางการชำระเงินในนามบริษัท'}
                  {checkoutStep === 'success' && 'ดำเนินการสำเร็จ'}
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Tabs */}
            <div className="grid grid-cols-3 bg-slate-950 text-xs font-semibold border-b border-slate-800 text-center">
              <button
                onClick={() => setCheckoutStep('cart')}
                className={`py-2.5 transition border-b-2 ${
                  checkoutStep === 'cart'
                    ? 'border-amber-500 text-amber-400 bg-amber-500/5'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                1. ตะกร้าสินค้า
              </button>
              <button
                onClick={() => setCheckoutStep('quote')}
                className={`py-2.5 transition border-b-2 ${
                  checkoutStep === 'quote'
                    ? 'border-amber-500 text-amber-400 bg-amber-500/5'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                2. ขอใบเสนอราคา
              </button>
              <button
                onClick={() => setCheckoutStep('payment')}
                className={`py-2.5 transition border-b-2 ${
                  checkoutStep === 'payment'
                    ? 'border-amber-500 text-amber-400 bg-amber-500/5'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                3. ชำระเงินบริษัท
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              
              {/* STEP 1: CART ITEMS */}
              {checkoutStep === 'cart' && (
                <>
                  {cart.length === 0 ? (
                    <div className="text-center py-16 space-y-3">
                      <ShoppingCart className="w-12 h-12 text-slate-700 mx-auto" />
                      <p className="text-sm font-semibold text-slate-400">ยังไม่มีรายการสินค้าในตะกร้า</p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                      >
                        กลับไปเลือกสินค้า
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-3 shadow"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 rounded-lg object-cover shrink-0 border border-slate-800"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs sm:text-sm font-bold text-white truncate">{item.name}</h4>
                            <div className="text-[11px] text-slate-400 font-mono mt-0.5">{item.code}</div>
                            <div className="text-xs font-bold text-amber-400 mt-1">
                              ฿{item.unitPrice.toLocaleString()} /{item.unit}
                            </div>
                          </div>

                          {/* Quantity control */}
                          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 text-slate-400 hover:text-white"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-7 text-center font-bold text-xs text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 text-slate-400 hover:text-white"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Delete */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-500 hover:text-rose-400 p-1"
                            title="ลบรายการ"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}

                      {/* Total Breakdown */}
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs shadow-inner">
                        <div className="flex justify-between text-slate-400">
                          <span>ยอดรวมก่อนภาษี:</span>
                          <span className="font-semibold text-white">฿{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>ภาษีมูลค่าเพิ่ม (VAT 7%):</span>
                          <span className="font-semibold text-white">฿{vat.toLocaleString()}</span>
                        </div>
                        <div className="border-t border-slate-800 pt-2 flex justify-between text-sm font-bold">
                          <span className="text-amber-400">ยอดรวมสุทธิทั้งสิ้น:</span>
                          <span className="text-amber-400 text-base">฿{grandTotal.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* STEP 2: FORMAL QUOTATION GENERATOR */}
              {checkoutStep === 'quote' && (
                <div className="space-y-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">ข้อมูลผู้ขอใบเสนอราคา</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">ชื่อผู้ติดต่อ *</label>
                        <input
                          type="text"
                          placeholder="คุณสมชาย สถาปนิก"
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                          className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">เบอร์โทรศัพท์ *</label>
                        <input
                          type="tel"
                          placeholder="081-xxx-xxxx"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">ชื่อบริษัท / นิติบุคคล</label>
                        <input
                          type="text"
                          placeholder="บจก. ดีไซน์ แอนด์ บิลด์ จำกัด"
                          value={customerInfo.businessName}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, businessName: e.target.value })}
                          className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">เลขประจำตัวผู้เสียภาษี (Tax ID)</label>
                        <input
                          type="text"
                          placeholder="01055xxxxxxxx"
                          value={customerInfo.taxId}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, taxId: e.target.value })}
                          className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">สถานที่จัดส่ง / โครงการ</label>
                      <input
                        type="text"
                        placeholder="โครงการอาคารสำนักงาน ถ.สุขุมวิท กรุงเทพฯ"
                        value={customerInfo.projectLocation}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, projectLocation: e.target.value })}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                      />
                    </div>
                  </div>

                  {/* Quotation Preview Card */}
                  <div className="bg-slate-950 border border-amber-500/30 rounded-xl p-4 space-y-3 font-mono text-[11px]">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <div>
                        <div className="font-bold text-white text-xs">ใบเสนอราคา (QUOTATION)</div>
                        <div className="text-slate-400 text-[10px]">บจก. เฟมไลน์ โปร์ดักส์</div>
                      </div>
                      <div className="text-right">
                        <div className="text-amber-400 font-bold">{quoteRef}</div>
                        <div className="text-slate-400 text-[10px]">วันที่: {new Date().toLocaleDateString('th-TH')}</div>
                      </div>
                    </div>

                    <div className="space-y-1 text-slate-300">
                      <div>เรียน: {customerInfo.businessName || customerInfo.name || 'ลูกค้าโครงการ (กรุณากรอกชื่อ)'}</div>
                      <div>โทร: {customerInfo.phone || '-'}</div>
                    </div>

                    {/* Items table */}
                    <table className="w-full text-left border-t border-slate-800 pt-2 text-[10px]">
                      <thead>
                        <tr className="text-slate-400 border-b border-slate-800/60">
                          <th className="py-1">รายการ</th>
                          <th className="py-1 text-center">จน.</th>
                          <th className="py-1 text-right">ยอดเงิน</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/40 text-slate-300">
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td className="py-1">{item.name}</td>
                            <td className="py-1 text-center">{item.quantity}</td>
                            <td className="py-1 text-right font-bold text-white">฿{(item.unitPrice * item.quantity).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="border-t border-slate-800 pt-2 space-y-1 text-right">
                      <div className="text-slate-400">รวมก่อน VAT: ฿{subtotal.toLocaleString()}</div>
                      <div className="text-slate-400">VAT 7%: ฿{vat.toLocaleString()}</div>
                      <div className="text-amber-400 font-bold text-xs">ยอดสุทธิ: ฿{grandTotal.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: COMPANY PAYMENT & SLIP UPLOAD */}
              {checkoutStep === 'payment' && (
                <div className="space-y-4">
                  {/* CRITICAL WARNING BANNER */}
                  <div className="bg-rose-950/40 border-2 border-rose-500/80 rounded-xl p-3.5 text-xs text-rose-300 space-y-1.5 shadow-md">
                    <div className="font-bold flex items-center gap-1.5 text-rose-200 text-xs sm:text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" /> คำเตือนและข้อกำหนดสำคัญสำหรับการสั่งซื้อ
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      ***กรณีโอนเงินชำระค่าสินค้าแล้วไม่สามารถเปลี่ยนแปลงหรือคืนสินค้าได้ ดังนั้น ตรวจสอบความถูกต้องของสเปก ขนาด สี และปริมาณ ก่อนสั่งซื้อสินค้าทุกครั้ง***
                    </p>
                    <div className="text-[10px] text-rose-400 font-bold">
                      ❗️โอนเข้าบัญชี บจก. เฟมไลน์ โปร์ดักส์ เท่านั้น (ไม่รับโอนเข้าบัญชีบุคคลธรรมดา)
                    </div>
                  </div>

                  {/* Bank Accounts */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300">ช่องทางโอนเงินเข้าบัญชีบริษัท:</label>
                    
                    {/* SCB */}
                    <div className="bg-gradient-to-br from-slate-950 to-purple-950/30 border border-purple-500/40 rounded-xl p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-purple-900/60 border border-purple-500/50 flex items-center justify-center text-white font-extrabold text-xs">
                            SCB
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">ธนาคารไทยพาณิชย์</div>
                            <div className="text-[10px] text-purple-300">บจก. เฟมไลน์ โปร์ดักส์</div>
                          </div>
                        </div>
                        <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-mono">B2B Account</span>
                      </div>

                      <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                        <span className="font-mono text-base font-black text-amber-400 tracking-wider">
                          {scbAccount.number}
                        </span>
                        <button
                          onClick={() => handleCopy(scbAccount.number, 'scb-cart')}
                          className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition font-semibold"
                        >
                          {copiedBank === 'scb-cart' ? 'คัดลอกแล้ว' : 'คัดลอก'}
                        </button>
                      </div>
                    </div>

                    {/* KBANK */}
                    <div className="bg-gradient-to-br from-slate-950 to-emerald-950/30 border border-emerald-500/40 rounded-xl p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-900/60 border border-emerald-500/50 flex items-center justify-center text-white font-extrabold text-xs">
                            KBANK
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">ธนาคารกสิกรไทย</div>
                            <div className="text-[10px] text-emerald-300">บจก. เฟมไลน์ โปร์ดักส์</div>
                          </div>
                        </div>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">B2B Account</span>
                      </div>

                      <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                        <span className="font-mono text-base font-black text-amber-400 tracking-wider">
                          {kbankAccount.number}
                        </span>
                        <button
                          onClick={() => handleCopy(kbankAccount.number, 'kbank-cart')}
                          className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition font-semibold"
                        >
                          {copiedBank === 'kbank-cart' ? 'คัดลอกแล้ว' : 'คัดลอก'}
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Total to Pay */}
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center shadow-inner">
                    <span className="text-xs text-slate-400">ยอดที่ต้องชำระสุทธิ (รวม VAT 7%):</span>
                    <span className="text-xl font-black text-amber-400">฿{grandTotal.toLocaleString()}</span>
                  </div>

                  {/* Slip Upload Mock */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300">แนบสลิปหลักฐานการโอนเงิน</label>
                    <div className="border-2 border-dashed border-slate-700 hover:border-amber-500 rounded-xl p-4 text-center cursor-pointer bg-slate-950 transition">
                      <UploadCloud className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                      <div className="text-xs text-slate-300 font-semibold">คลิกเพื่ออัปโหลดไฟล์รูปสลิป</div>
                      <div className="text-[10px] text-slate-500 mt-1">รองรับไฟล์ JPG, PNG หรือส่งยืนยันทาง LINE ภายหลังได้</div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: SUCCESS */}
              {checkoutStep === 'success' && (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">บันทึกข้อมูลเรียบร้อยแล้ว!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    ระบบได้ส่งข้อมูลใบเสนอราคาและคำสั่งซื้อไปยัง <strong>คุณแอล (เสาวลักษณ์ นุ่นหนู)</strong> เรียบร้อยแล้ว ทีมงานจะติดต่อกลับเพื่อยืนยันสต็อกและแผนจัดส่งภายใน 15-30 นาที
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={lineUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs"
                    >
                      <MessageCircle className="w-4 h-4" /> แชทคุยกับคุณแอลใน LINE ทันที
                    </a>

                    <a
                      href={salePhoneCallUrl}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                    >
                      <PhoneCall className="w-4 h-4 text-amber-400" /> โทรสายตรงคุณแอล: {salePhone}
                    </a>

                    <button
                      onClick={() => {
                        setCart([]);
                        setIsCartOpen(false);
                        setCheckoutStep('cart');
                      }}
                      className="text-xs text-slate-400 hover:text-white py-2"
                    >
                      เสร็จสิ้นและปิดหน้านี้
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Actions Bar */}
            {checkoutStep !== 'success' && (
              <div className="p-4 border-t border-slate-800 bg-slate-950 space-y-2">
                {checkoutStep === 'cart' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCheckoutStep('quote')}
                      disabled={cart.length === 0}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white font-bold text-xs transition"
                    >
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span>ขอใบเสนอราคา</span>
                    </button>
                    <button
                      onClick={() => setCheckoutStep('payment')}
                      disabled={cart.length === 0}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition shadow"
                    >
                      <CreditCard className="w-4 h-4 text-slate-950" />
                      <span>ชำระเงินบริษัท</span>
                    </button>
                  </div>
                )}

                {checkoutStep === 'quote' && (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.print()}
                        className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                        title="พิมพ์ใบเสนอราคา"
                      >
                        <Printer className="w-4 h-4" />
                      </button>

                      <button
                        onClick={handleSendQuotationToLine}
                        disabled={isSubmittingLead}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-slate-950 font-bold text-xs transition shadow"
                      >
                        {isSubmittingLead ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <MessageCircle className="w-4 h-4" />
                        )}
                        <span>ส่งใบเสนอราคานี้เข้า LINE คุณแอล</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-center text-slate-400">
                      * ระบบจะบันทึกข้อมูลเข้าฐานข้อมูลและคัดลอกสรุปใบเสนอราคาเข้า Clipboard ให้คุณกดวางใน LINE ได้ทันที
                    </p>
                  </div>
                )}

                {checkoutStep === 'payment' && (
                  <div className="space-y-2">
                    <button
                      onClick={handleConfirmPayment}
                      disabled={isSubmittingLead}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition"
                    >
                      {isSubmittingLead ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4" />
                      )}
                      <span>ยืนยันการแจ้งชำระเงิน & แจ้งคุณแอล</span>
                    </button>

                    <p className="text-[10px] text-center text-slate-400">
                      * ยืนยันข้อมูลไปยังระบบของบริษัท และนำส่งหลักฐานต่อไปยัง LINE ฝ่ายขาย
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* 10. IN-PAGE SPEC PREVIEW MODAL (Zero External Redirects) */}
      {activeModalCatalog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalCatalog(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">{activeModalCatalog.categoryName}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">{activeModalCatalog.title}</h3>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <img
                src={activeModalCatalog.image}
                alt={activeModalCatalog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded text-xs font-mono text-amber-400 font-bold border border-slate-800">
                {activeModalCatalog.code}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeModalCatalog.desc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">รายละเอียดสเปกทางวิศวกรรม:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeModalCatalog.specs.map((sp: string, idx: number) => (
                  <div key={idx} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-slate-200">{sp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-slate-400 block">ราคาประเมินโครงการ</span>
                <span className="text-xl font-black text-amber-400">฿{activeModalCatalog.price.toLocaleString()} /{activeModalCatalog.unit}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const matchProd = products.find(p => p.id === activeModalCatalog.productId);
                    if (matchProd) addToCart(matchProd, 1);
                    setActiveModalCatalog(null);
                  }}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
                >
                  <Plus className="w-3.5 h-3.5" /> ใส่ตะกร้าสินค้านี้
                </button>
                <button
                  onClick={() => setActiveModalCatalog(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 11. VERIFIED LINE QR CODE MODAL */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full p-6 text-center space-y-4 relative shadow-2xl">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="text-base font-bold text-white">LINE Official ฝ่ายขายโครงการ</h4>
            <p className="text-xs text-amber-400 font-medium">คุณแอล (เสาวลักษณ์ นุ่นหนู) โทร. 066-168-5157</p>

            {/* Official LINE QR Code with High-Quality Framing */}
            <div className="bg-white p-3 rounded-2xl inline-block shadow-xl border-4 border-amber-500/30">
              <img
                src="/images/suppersurface/line-qr.jpg"
                alt="LINE QR Code คุณแอล Fameline (https://line.me/ti/p/8LzX_47dFe)"
                className="w-56 h-56 object-contain"
              />
            </div>

            <p className="text-[11px] text-slate-400">
              เปิดแอป LINE แล้วสแกน หรือกดปุ่มด้านล่างเพื่อแอดเพื่อนได้ทันที
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={lineUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-lg active:scale-95 transition"
              >
                <MessageCircle className="w-4 h-4" /> แอด LINE คุณแอล (เปิดผ่านแอป)
              </a>

              <a
                href={salePhoneCallUrl}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" /> โทรหาคุณแอล: {salePhone}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 12. FIXED MOBILE ACTION BAR (High Conversion Bottom Bar) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 border-t border-slate-800 backdrop-blur-lg p-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={salePhoneCallUrl}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs active:scale-95 transition"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>โทรหาคุณแอล</span>
        </a>

        <a
          href={lineUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs active:scale-95 transition"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>แอดไลน์</span>
        </a>

        <button
          onClick={() => {
            setIsCartOpen(true);
            setCheckoutStep('cart');
          }}
          className="relative inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs active:scale-95 transition"
        >
          <ShoppingCart className="w-4 h-4 text-slate-950" />
          <span>ตะกร้า</span>
          {totalItemCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-slate-950 text-amber-400 text-[10px] font-extrabold flex items-center justify-center">
              {totalItemCount}
            </span>
          )}
        </button>
      </div>

      {/* 13. FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-bold text-slate-300">
              SUPPER SURFACE BY FAMELINE PRODUCTS CO., LTD.
            </div>
            <p>
              35/11 ถนนกาญจนาภิเษก แขวงดอกไม้ เขตประเวศ กรุงเทพฯ 10250 | โทร. 02-365-5899 | แฟกซ์ 02-365-5890
            </p>
          </div>
          <div className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} Fameline Products Co., Ltd. All rights reserved. Designed with SalesDesk AI Standard.
          </div>
        </div>
      </footer>

    </div>
  );
}
