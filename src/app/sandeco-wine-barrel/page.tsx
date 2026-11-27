'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Wine,
  Sparkles,
  ShieldCheck,
  Truck,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  FileText,
  Printer,
  X,
  ExternalLink,
  ChevronRight,
  MapPin,
  Clock,
  Layers,
  Award,
  Flame,
  GlassWater,
  Building2,
  Compass,
  ArrowRight,
  HelpCircle,
  Copy,
  Check,
  Star,
  Maximize2,
  SlidersHorizontal,
  PackageCheck,
  Send,
  Info,
  Menu,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import { pushToDataLayer } from '@/lib/gtm';

// Brand & Contact Constants
const BRAND_NAME = 'บจก. ซันเดโก (ประเทศไทย)';
const BRAND_EN = 'Sandeco Thailand Co., Ltd.';
const PRODUCT_TITLE = 'ถังไวน์ไม้โอ๊คฝรั่งเศสมือสอง Bordeaux 225L';
const PHONE_1_DISPLAY = '086-026-6668';
const PHONE_1_RAW = '0860266668';
const PHONE_2_DISPLAY = '032-744-501';
const PHONE_2_RAW = '032744501';
const ADDRESS_TEXT = '23 หมู่ 2 ต.บ้านสิงห์ อ.โพธาราม จ.ราชบุรี 70120';
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/people/%E0%B8%96%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A7%E0%B8%99%E0%B9%8C%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%AD%E0%B9%8A%E0%B8%84%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A8%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%87/61579054171407/';
const LINE_OA_URL = 'https://line.me/R/ti/p/@fhu6688s?text=สนใจถังไวน์ไม้โอ๊คฝรั่งเศส225L_บจก.ซันเดโก';
const LINE_ID = ''; // เว้นว่างไว้ตามคำสั่งบอส (ไม่แสดง @fhu6688s ที่การ์ดจนกว่าจะได้รับอนุมัติ)

// Types
export interface CartItem {
  id: string;
  name: string;
  category: string;
  spec: string;
  unitPrice: number;
  quantity: number;
  unit: string;
  image: string;
}

export interface ProductCatalogItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number;
  originalPrice: number;
  unit: string;
  spec: string;
  features: string[];
  image: string;
  badge?: string;
  gradeBadge?: string;
  gradeComparison?: string;
  inStock: boolean;
}

interface ToastNotification {
  id: number;
  title: string;
  message: string;
}

function LineIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-14.92 2.482H6.625a.644.644 0 0 1-.644-.644V7.78a.644.644 0 1 1 1.288 0v3.72h1.811a.644.644 0 1 1 0 1.286zm2.478-.644a.644.644 0 1 1-1.288 0V7.78a.644.644 0 1 1 1.288 0v4.362zm5.792 0a.644.644 0 0 1-.443.612.636.636 0 0 1-.201.032.646.646 0 0 1-.517-.26l-2.238-3.046v2.662a.644.644 0 1 1-1.288 0V7.78a.644.644 0 0 1 .443-.612.64.64 0 0 1 .718.228l2.239 3.046V7.78a.644.644 0 1 1 1.287 0v4.362zm3.884-2.825a.644.644 0 1 1 0 1.288h-1.811v.895h1.811a.644.644 0 1 1 0 1.286h-2.455a.644.644 0 0 1-.644-.644V7.78c0-.355.289-.644.644-.644h2.455a.644.644 0 1 1 0 1.288h-1.811v.893h1.811z" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function SandecoWineBarrelPage() {
  // Cart & Ordering State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartTab, setCartTab] = useState<'cart' | 'checkout' | 'quote_success'>('cart');
  const [orderMode, setOrderMode] = useState<'purchase' | 'quotation'>('purchase');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState<ToastNotification | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = (title: string, message: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast({ id: Date.now(), title, message });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  // Customer Form State
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    address: '',
    purpose: 'บ่มไวน์ / แอลกอฮอล์คราฟต์',
    quantityNote: '1',
    notes: '',
  });
  const [checkoutPhoneError, setCheckoutPhoneError] = useState('');
  const [checkoutEmailError, setCheckoutEmailError] = useState('');
  const [checkoutApiError, setCheckoutApiError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteNumber, setQuoteNumber] = useState('');
  const [previewDate, setPreviewDate] = useState('28/11/2569');
  const [previewDocSuffix, setPreviewDocSuffix] = useState('8899');

  useEffect(() => {
    setPreviewDate(new Date().toLocaleDateString('th-TH'));
    setPreviewDocSuffix(Date.now().toString().slice(-4));
  }, []);

  // Standalone Quote Simulator State
  const [quoteSimItem, setQuoteSimItem] = useState('barrel-decor');
  const [quoteSimQty, setQuoteSimQty] = useState(2);
  const [quoteSimName, setQuoteSimName] = useState('');
  const [quoteSimPhone, setQuoteSimPhone] = useState('');
  const [quoteSimEmail, setQuoteSimEmail] = useState('');
  const [quoteSimCompany, setQuoteSimCompany] = useState('');
  const [quoteSimPurpose, setQuoteSimPurpose] = useState('ตกแต่งร้านอาหาร / คาเฟ่ / รีสอร์ท');
  const [quoteSimPhoneError, setQuoteSimPhoneError] = useState('');
  const [quoteSimApiError, setQuoteSimApiError] = useState('');
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteSimSuccess, setQuoteSimSuccess] = useState(false);

  // Products Catalog
  const products: ProductCatalogItem[] = useMemo(
    () => [
      {
        id: 'barrel-decor',
        name: 'ถังไวน์ไม้โอ๊คฝรั่งเศส Bordeaux 225L (เกรด A - สภาพสวย สำหรับตกแต่ง)',
        category: 'decor',
        categoryLabel: 'ตกแต่งสถานที่ / เฟอร์นิเจอร์',
        price: 9900,
        originalPrice: 14500,
        unit: 'ใบ',
        spec: 'ขนาด 225L • หนา 27mm • ปาก 57cm • พุง 69cm • สูง 95cm • สายรัดเหล็กกัลวาไนซ์ 6 วง',
        features: [
          'คัดเนื้อไม้โอ๊คฝรั่งเศสลายสวย คลาสสิก ไม่มีรอยแตกร้าวลึก',
          'เหมาะสำหรับแต่งร้านอาหาร, คาเฟ่, บาร์, โรงแรม, ไวน์เซลลาร์',
          'ขัดแต่งผิวภายนอกและเคลือบกันชื้นพร้อมจัดวางได้ทันที',
          'ผ่านการทำความสะอาดและอบแห้งเรียบร้อย ปราศจากมอดแมลง',
        ],
        image: '/images/sandeco/barrel-product-a.jpg',
        badge: 'ยอดนิยมอันดับ 1 สำหรับตกแต่ง',
        gradeBadge: 'เกรดตกแต่ง (Decor Grade)',
        gradeComparison: 'เน้นลวดลายไม้คลาสสิก ขัดเคลือบผิวสวยงาม (ไม่เหมาะกับการบ่มของเหลว)',
        inStock: true,
      },
      {
        id: 'barrel-aging',
        name: 'ถังไวน์ไม้โอ๊คฝรั่งเศส Bordeaux 225L (เกรดบ่มไวน์ & สุราคราฟต์)',
        category: 'aging',
        categoryLabel: 'หมักบ่มเครื่องดื่ม / โรงกลั่น',
        price: 11500,
        originalPrice: 16900,
        unit: 'ใบ',
        spec: 'ขนาด 225L • หนา 27mm • ปาก 57cm • พุง 69cm • สูง 95cm • พร้อมฝาและจุกอุดไม้/ซิลิโคน',
        features: [
          'ถังที่ผ่านการบ่มไวน์แดง Bordeaux ชั้นเลิศ เนื้อไม้ยังคงแทนนินและกลิ่นอายผลไม้สุก',
          'ผ่านการทดสอบแรงดันน้ำและกักเก็บของเหลว ไม่มีการรั่วซึม (Tight seal tested 100%)',
          'เหมาะสำหรับบ่มไวน์ท้องถิ่น, วิสกี้, รัม, เบียร์คราฟต์, เตกิลา',
          'ให้ไมโครออกซิเจน เติมมิติสีอำพันทองประกายแดงและวานิลลาลุ่มลึก',
        ],
        image: '/images/sandeco/barrel-craft-spirits.jpg',
        badge: 'เกรดช่างบ่มสุรามืออาชีพ',
        gradeBadge: 'เกรดหมักบ่ม (Watertight 100%)',
        gradeComparison: 'ผ่านการทดสอบกักเก็บของเหลวแน่นสนิท ปลอดสารเคมี กลิ่นหอมไวน์บอร์โดแท้',
        inStock: true,
      },
      {
        id: 'barrel-bistro-table',
        name: 'โต๊ะบาร์ถังไวน์ไม้โอ๊ค Bordeaux 225L (พร้อมท็อปโต๊ะบาร์ทรงสูง)',
        category: 'furniture',
        categoryLabel: 'เฟอร์นิเจอร์สั่งทำพิเศษ',
        price: 13900,
        originalPrice: 19500,
        unit: 'ชุด',
        spec: 'ความสูงบาร์ 98-102cm • ท็อปไม้โอ๊ค/กระจกนิรภัยเทมเปอร์ เส้นผ่านศูนย์กลาง 80cm',
        features: [
          'แปลงร่างถังไวน์บอร์โดแท้ให้เป็นโต๊ะค็อกเทลบาร์หรูหราระดับ 5 ดาว',
          'ท็อปโต๊ะกว้างขวาง วางแก้วไวน์ ขวดไวน์ จานชีส หรือเมนูได้อย่างลงตัว',
          'ฐานถังมั่นคง แข็งแรง ไม่โยกคลอน รองรับน้ำหนักได้เกิน 150 กก.',
          'สร้างมุมถ่ายรูป Signature ที่ดึงดูดลูกค้าและสร้างไวรัลให้กับร้าน',
        ],
        image: '/images/sandeco/barrel-decor-table.jpg',
        badge: 'Signature Cafe & Bar Decor',
        gradeBadge: 'ชุดโต๊ะบาร์สำเร็จรูป',
        gradeComparison: 'ประกอบพร้อมท็อปโต๊ะและแท่นเสริมความมั่นคง เหมาะกับคาเฟ่และร้านอาหาร',
        inStock: true,
      },
      {
        id: 'barrel-stand-cradle',
        name: 'แท่นวางถังไวน์ไม้โอ๊คแท้แบบคู่ (Solid French Oak Barrel Cradle)',
        category: 'accessory',
        categoryLabel: 'อุปกรณ์เสริม / ฐานรอง',
        price: 2400,
        originalPrice: 3500,
        unit: 'คู่',
        spec: 'ผลิตจากไม้โอ๊คฝรั่งเศสแท้ • โค้งรับพุงถังขนาด 225 ลิตรพอดี • มีแผ่นยางกันลื่น',
        features: [
          'สำหรับวางถังไวน์ในแนวนอนอย่างมั่นคง ป้องกันถังกลิ้งหรือเคลื่อนตัว',
          'ยกตัวถังลอยเหนือพื้น 8-12 ซม. ป้องกันความชื้นสะสมใต้พื้น',
          'เหมาะทั้งสำหรับวางบ่มไวน์ในห้องใต้ดิน และจัดวางโชว์ในร้านอาหาร',
          'เนื้อไม้โอ๊คแท้แมตช์สีเดียวกับถังไวน์ สวยงามกลมกลืนทุกมุมมอง',
        ],
        image: '/images/sandeco/barrel-product-a.jpg',
        badge: 'แนะนำซื้อคู่กับถัง',
        gradeBadge: 'ฐานรองไม้โอ๊คแท้',
        gradeComparison: 'ออกแบบให้โค้งรับสัดส่วน 225L โดยเฉพาะ แข็งแกร่ง รองรับน้ำหนักได้เต็มที่',
        inStock: true,
      },
    ],
    []
  );

  // Cart Calculations
  const totalItemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const grandTotal = useMemo(() => cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0), [cart]);

  // Validation Helper: Thai Phone (9-10 digits, e.g., 0812345678, 086-026-6668, 032744501)
  const validateThaiPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[^0-9]/g, '');
    return /^(0[689]\d{8}|0[2-57]\d{7,8})$/.test(cleaned);
  };

  // Validation Helper: Email (optional, but if filled must be valid)
  const validateEmail = (email: string): boolean => {
    if (!email) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Add to cart helper with Toast Notification
  const addToCart = (product: ProductCatalogItem, quantity = 1, openDrawer = false) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          category: product.categoryLabel,
          spec: product.spec,
          unitPrice: product.price,
          quantity,
          unit: product.unit,
          image: product.image,
        },
      ];
    });

    showToast(
      'เพิ่มสินค้าลงในตะกร้าแล้ว',
      `เพิ่ม "${product.name.length > 28 ? product.name.slice(0, 28) + '...' : product.name}" (${quantity} ${product.unit})`
    );

    if (openDrawer) {
      setIsCartOpen(true);
      setCartTab('cart');
    }
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

  // Submit Order / Quotation (Hardened with strict res.ok and error state)
  const handleSubmitCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutPhoneError('');
    setCheckoutEmailError('');
    setCheckoutApiError('');

    if (!customerData.name.trim()) {
      alert('กรุณากรอกชื่อและนามสกุลสำหรับติดต่อกลับ');
      return;
    }

    if (!validateThaiPhone(customerData.phone)) {
      setCheckoutPhoneError('กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง (9-10 หลัก เช่น 086-026-6668)');
      return;
    }

    if (customerData.email && !validateEmail(customerData.email)) {
      setCheckoutEmailError('กรุณากรอกรูปแบบอีเมลที่ถูกต้อง (เช่น yourname@domain.com)');
      return;
    }

    if (cart.length === 0) {
      alert('กรุณาเลือกสินค้าอย่างน้อย 1 รายการลงในตะกร้า');
      return;
    }

    setIsSubmitting(true);
    const generatedQuoteId = `SD-${Date.now().toString().slice(-6)}`;
    setQuoteNumber(generatedQuoteId);

    try {
      const payload = {
        orderType: orderMode,
        quotationNumber: generatedQuoteId,
        customerInfo: {
          name: customerData.name.trim(),
          phone: customerData.phone.trim(),
          businessName: customerData.company.trim(),
          email: customerData.email.trim() || undefined,
          address: customerData.address.trim(),
          notes: `วัตถุประสงค์: ${customerData.purpose} | หมายเหตุ: ${customerData.notes || '-'}`,
        },
        items: cart.map((c) => ({
          id: c.id,
          name: c.name,
          category: c.category,
          spec: c.spec,
          unitPrice: c.unitPrice,
          quantity: c.quantity,
          unit: c.unit,
          image: c.image,
        })),
        totalItemCount,
        grandTotal,
        pageSource: 'Sandeco French Oak Wine Barrel Salepage',
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || errorData.error || `HTTP error ${res.status}`);
      }

      // Track confirmed success in GTM dataLayer
      pushToDataLayer({
        event: orderMode === 'purchase' ? 'purchase' : 'generate_lead',
        lead_type: orderMode,
        button_name: orderMode === 'purchase' ? 'confirm_order' : 'request_quotation',
        page_location: window.location.href,
        value: grandTotal,
        currency: 'THB',
        quotation_id: generatedQuoteId,
      });

      setCartTab('quote_success');
    } catch (error: any) {
      console.error('Submit order failed:', error);
      setCheckoutApiError(
        'ระบบไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณากดลองใหม่อีกครั้ง หรือโทรติดต่อฝ่ายขาย 086-026-6668 โดยตรง'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Standalone Quote Simulator Submit (Hardened with strict res.ok and error state)
  const handleSimulateQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSimPhoneError('');
    setQuoteSimApiError('');

    if (!quoteSimName.trim()) {
      alert('กรุณากรอกชื่อผู้ติดต่อ');
      return;
    }

    if (!validateThaiPhone(quoteSimPhone)) {
      setQuoteSimPhoneError('กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง (9-10 หลัก เช่น 086-026-6668)');
      return;
    }

    setIsSubmittingQuote(true);

    const leadPayload = {
      fullName: quoteSimName.trim(),
      phone: quoteSimPhone.trim(),
      email: quoteSimEmail.trim() || undefined,
      modelInterest: `${quoteSimItem} (จำนวน ${quoteSimQty} ใบ)`,
      serviceType: `ขอใบเสนอราคาถังไวน์ไม้โอ๊ค Bordeaux - ${quoteSimPurpose}`,
      location: quoteSimCompany.trim() || 'บุคคลทั่วไป / ร้านค้า',
      notes: `วัตถุประสงค์: ${quoteSimPurpose} | จำนวน: ${quoteSimQty} ใบ`,
      pageSource: 'Sandeco Quote Simulator Form',
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || errorData.error || `HTTP error ${res.status}`);
      }

      // Track confirmed success in GTM dataLayer
      pushToDataLayer({
        event: 'generate_lead',
        lead_type: 'quote_simulator',
        button_name: 'calculate_quote_submit',
        page_location: window.location.href,
        value: (products.find((p) => p.id === quoteSimItem)?.price || 0) * quoteSimQty,
        currency: 'THB',
      });

      setQuoteSimSuccess(true);
    } catch (error: any) {
      console.error('Submit quote lead failed:', error);
      setQuoteSimApiError(
        'ระบบไม่สามารถส่งคำขอได้ในขณะนี้ กรุณากดลองใหม่อีกครั้ง หรือติดต่อผ่าน LINE / โทร 086-026-6668'
      );
    } finally {
      setIsSubmittingQuote(false);
    }
  };

  // Copy helper
  const copyToClipboard = (text: string, type: 'phone' | 'address') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } else {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  const selectedSimProduct = products.find((p) => p.id === quoteSimItem) || products[0];
  const simTotal = selectedSimProduct.price * quoteSimQty;

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans antialiased selection:bg-amber-600 selection:text-white overflow-x-hidden">
      {/* ------------------------------------------------------------- */}
      {/* 0. TOAST NOTIFICATION FLOATING PILL                           */}
      {/* ------------------------------------------------------------- */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-24 right-4 sm:right-6 z-50 max-w-sm w-full bg-stone-900/95 border border-amber-500/60 shadow-2xl shadow-black/80 rounded-2xl p-4 backdrop-blur-xl animate-in slide-in-from-top-4 duration-300 flex items-start gap-3"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white flex items-center justify-between">
              <span>{toast.title}</span>
              <button
                onClick={() => setToast(null)}
                className="text-stone-400 hover:text-white p-0.5 rounded transition"
                aria-label="ปิดการแจ้งเตือน"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-stone-300 mt-0.5 truncate">{toast.message}</p>
            <div className="mt-2.5 flex items-center gap-2">
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setCartTab('cart');
                  setToast(null);
                }}
                className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-[11px] font-bold transition flex items-center gap-1"
              >
                <ShoppingCart className="w-3 h-3" />
                <span>เปิดดูตะกร้า ({totalItemCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 1. ANNOUNCEMENT & STICKY LUXURY NAV HEADER                     */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-amber-200/90 text-xs py-2 sm:py-2.5 px-4 border-b border-amber-900/40 text-center tracking-wide font-medium relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 overflow-hidden text-ellipsis">
          <Wine className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="whitespace-nowrap truncate text-[11px] sm:text-xs">
            ล็อตพิเศษนำเข้าจากแคว้น Bordeaux ประเทศฝรั่งเศส • ขนาดมาตรฐาน 225L ไม้โอ๊คหนา 27mm พร้อมส่งทันที
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-md border-b border-stone-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Identity */}
          <Link href="#top" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-600 via-amber-800 to-stone-900 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-950/50 group-hover:scale-105 transition-transform shrink-0">
              <Wine className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200" />
            </div>
            <div className="shrink-0">
              <div className="text-xs sm:text-sm font-black tracking-wider text-amber-300 uppercase whitespace-nowrap">
                SANDECO THAILAND
              </div>
              <div className="text-[11px] text-stone-400 font-light flex items-center gap-1 whitespace-nowrap">
                <span>บจก. ซันเดโก</span>
                <span className="text-amber-500/70">•</span>
                <span className="text-stone-300">ถังไวน์บอร์โด 225L</span>
              </div>
            </div>
          </Link>

          {/* Consolidated Desktop Navigation Links (4-5 anchors to prevent 1024-1280px overflow) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs 2xl:text-sm font-medium text-stone-300 shrink-0">
            <a href="#applications" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              การใช้งาน & สเปก
            </a>
            <a href="#french-oak-advantage" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              ไม้โอ๊คบอร์โด
            </a>
            <a href="#catalog" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              แคตตาล็อกสินค้า
            </a>
            <a href="#quote-generator" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              ขอใบเสนอราคา
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              ติดต่อเรา
            </a>
          </nav>

          {/* Header Action Buttons (Enforced shrink-0, whitespace-nowrap, never line-wrapped) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone quick call */}
            <a
              href={`tel:${PHONE_1_RAW}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-stone-900 border border-stone-700/80 hover:border-amber-500/60 text-stone-200 text-xs font-semibold whitespace-nowrap shrink-0 transition"
              title="โทรสอบถามทันที"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap font-mono">{PHONE_1_DISPLAY}</span>
            </a>

            {/* LINE OA consultation */}
            <a
              href={LINE_OA_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#06C755]/15 border border-[#06C755]/40 hover:bg-[#06C755]/25 text-[#06C755] text-xs font-bold whitespace-nowrap shrink-0 transition"
            >
              <LineIcon className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">คุยไลน์</span>
            </a>

            {/* Persistent Shopping Cart Button with Dynamic Badge */}
            <button
              onClick={() => {
                setIsCartOpen(true);
                setCartTab('cart');
              }}
              className="relative p-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold shadow-lg shadow-amber-600/20 transition-all hover:scale-105 active:scale-95 shrink-0 flex items-center justify-center"
              aria-label={`ตะกร้าสินค้า (${totalItemCount} รายการ)`}
            >
              <ShoppingCart className="w-5 h-5 text-stone-950 shrink-0" />
              {totalItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-black min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center border-2 border-stone-950 animate-pulse">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Mobile / Tablet Menu Toggle (Visible below lg: 1024px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-300 hover:text-white hover:bg-stone-800 transition shrink-0"
              aria-label="เมนูนำทาง"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 shrink-0" /> : <Menu className="w-5 h-5 shrink-0" />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile/Tablet Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-stone-950/98 border-b border-stone-800 px-4 py-5 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2 text-sm font-semibold text-stone-200">
              <a
                href="#applications"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-900 hover:text-amber-400 transition"
              >
                การใช้งาน & สเปก (บ่มไวน์ • สุราคราฟต์ • ตกแต่ง)
              </a>
              <a
                href="#french-oak-advantage"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-900 hover:text-amber-400 transition"
              >
                ทำไมต้องไม้โอ๊คฝรั่งเศสแท้
              </a>
              <a
                href="#catalog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-900 hover:text-amber-400 transition"
              >
                แคตตาล็อกสินค้า & ราคาพิเศษ
              </a>
              <a
                href="#quote-generator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-900 hover:text-amber-400 transition"
              >
                ขอใบเสนอราคาด่วนสำหรับองค์กร/ร้านค้า
              </a>
              <a
                href="#faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-900 hover:text-amber-400 transition"
              >
                คำถามที่พบบ่อย (FAQ)
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-900 hover:text-amber-400 transition"
              >
                ติดต่อคลังสินค้า (โพธาราม จ.ราชบุรี)
              </a>
            </nav>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2">
              <a
                href={`tel:${PHONE_1_RAW}`}
                className="py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 text-xs font-bold flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono">{PHONE_1_DISPLAY}</span>
              </a>
              <a
                href={LINE_OA_URL}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl bg-[#06C755] text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <LineIcon className="w-3.5 h-3.5" />
                <span>แอดไลน์ปรึกษา</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 2. CINEMATIC HERO SECTION (SalesDesk Architect Master Standard) */}
      {/* ------------------------------------------------------------- */}
      <section id="top" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-stone-800">
        {/* Full-Bleed 16:9 Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sandeco/hero-bordeaux-cellar.jpg"
            alt="ถังไวน์ไม้โอ๊คฝรั่งเศส Bordeaux 225L ซันเดโก"
            className="w-full h-full object-cover object-[75%_center] lg:object-right brightness-105 contrast-[1.02] transition-all duration-700"
          />

          {/* Desktop Left Scrim: Darkens left 50% for 100% white text contrast */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 via-45% to-transparent" />

          {/* Mobile Multi-Layer Scrim */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-stone-950/95 via-stone-950/60 via-35% to-transparent" />
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-80 bg-gradient-to-t from-stone-950 via-stone-950/90 via-50% to-transparent" />

          {/* Desktop Bottom Edge Fade */}
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-stone-950 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full flex flex-col justify-between min-h-[85vh] lg:min-h-[88vh]">
          {/* Main Grid: Desktop 16:9 Left Negative Space vs Right Subject */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 sm:pt-6">
            {/* Left Column (Negative Space for Typography) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* Luxury Origin Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-black/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>นำเข้าแท้ 100% จากแคว้น Bordeaux ประเทศฝรั่งเศส</span>
              </div>

              {/* Master Thai Headline (Zero-Overlapping Standard) */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-tight sm:leading-[1.25] drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
                <span className="block">ถังไวน์ไม้โอ๊คฝรั่งเศสมือสอง</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200 block mt-1.5 sm:mt-2.5 pb-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  Bordeaux 225 Litres
                </span>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-medium text-stone-200 mt-1">
                  ไม้โอ๊คหนา 27 มม. สภาพคัดเกรดพรีเมียม
                </span>
              </h1>

              {/* Minimal Premium Subheadline */}
              <p className="text-xs sm:text-base md:text-lg text-amber-200/90 font-medium tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] max-w-xl mx-auto lg:mx-0">
                คัดเกรดพิเศษจากแหล่งผลิตไวน์บอร์โด พร้อมส่งมอบสู่ผู้ผลิตเครื่องดื่มและงานดีไซน์ทั่วไทย
              </p>

              {/* Micro Trust Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs sm:text-sm text-stone-200 font-medium max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 drop-shadow">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>French Barrique แท้ 225L</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5 drop-shadow">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ไม้โอ๊คหนาแน่น 27 มม.</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5 drop-shadow">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>สต็อกพร้อมส่งในไทย (ราชบุรี)</span>
                </div>
              </div>

              {/* Responsive Single-Source CTA Group (Eliminates DOM Duplication) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-3 w-full sm:w-auto">
                <a
                  href="#catalog"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>เลือกชมสินค้า & สั่งซื้อออนไลน์</span>
                </a>
                <a
                  href="#quote-generator"
                  className="px-6 py-3.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 hover:border-amber-400 text-stone-100 font-semibold text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>ขอใบเสนอราคาด่วน</span>
                </a>
              </div>
            </div>

            {/* Right Column (Kept visually unobstructed for Hero photography) */}
            <div className="lg:col-span-5 hidden lg:block" />
          </div>

          {/* Bottom Block: 4 Glassmorphic Feature Badges (Anchored at Bottom Edge) */}
          <div className="mt-8 lg:mt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-4 border-t border-white/10">
              <div className="bg-stone-900/80 backdrop-blur-md border border-stone-800 p-3 sm:p-4 rounded-xl hover:border-amber-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-950/80 border border-amber-600/40 flex items-center justify-center shrink-0">
                    <Wine className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-stone-400 font-light">ต้นกำเนิด</div>
                    <div className="text-xs sm:text-sm font-bold text-stone-100">Bordeaux แท้ 100%</div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900/80 backdrop-blur-md border border-stone-800 p-3 sm:p-4 rounded-xl hover:border-amber-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-950/80 border border-amber-600/40 flex items-center justify-center shrink-0">
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-stone-400 font-light">ขนาดบรรจุมาตรฐาน</div>
                    <div className="text-xs sm:text-sm font-bold text-stone-100">225 Litres (Barrique)</div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900/80 backdrop-blur-md border border-stone-800 p-3 sm:p-4 rounded-xl hover:border-amber-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-950/80 border border-amber-600/40 flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-stone-400 font-light">ความหนาเนื้อไม้</div>
                    <div className="text-xs sm:text-sm font-bold text-stone-100">ไม้โอ๊คหนา 27 มม.</div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900/80 backdrop-blur-md border border-stone-800 p-3 sm:p-4 rounded-xl hover:border-amber-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-950/80 border border-amber-600/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-stone-400 font-light">การใช้งาน</div>
                    <div className="text-xs sm:text-sm font-bold text-stone-100">3 มิติ: บ่มไวน์ • สุรา • ตกแต่ง</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2.5 BRAND INTRO & CURATION MISSION (พันธกิจการคัดสรรโดยซันเดโก)  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 sm:py-16 bg-stone-950 border-b border-stone-800 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-950/40 via-stone-900/90 to-stone-950 border border-amber-600/30 p-6 sm:p-10 shadow-2xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-amber-950/50 text-amber-400">
                <Wine className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="space-y-3.5 text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>พันธกิจและการคัดสรร • {BRAND_NAME}</span>
                </div>

                <p className="text-base sm:text-lg lg:text-xl font-normal text-stone-100 leading-relaxed drop-shadow-sm">
                  “บริษัท ซันเดโก ได้คัดสรรถังไวน์ที่ผ่านการบ่มไวน์ชั้นดีจากประเทศฝรั่งเศส เพื่อส่งต่อให้ผู้ผลิตไวน์ท้องถิ่น, โรงกลั่นสุราคราฟต์ วิสกี้ รัม และการตกแต่งร้านอาหาร รีสอร์ท สไตล์ชาโตว์ยุโรปชั้นสูง พร้อมจัดส่งตรงถึงหน้างานทั่วไทย”
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-stone-300 font-medium border-t border-stone-800/80 mt-4">
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>นำเข้าตรงจากแคว้น Bordeaux</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>คัดเกรดสภาพสมบูรณ์ทุกใบ</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>สต็อกพร้อมส่ง อ.โพธาราม จ.ราชบุรี</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. THE 3 VALUE PROPOSITIONS (จิตวิทยาการขาย: ตอบโจทย์ 3 กลุ่มเป้าหมาย) */}
      {/* ------------------------------------------------------------- */}
      <section id="applications" className="py-20 bg-stone-900/60 border-b border-stone-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              Versatile & High-Value Applications
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              ตอบโจทย์การใช้งาน <span className="text-amber-400">3 มิติหลัก</span> ที่คุ้มค่าที่สุด
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              ถังไวน์ไม้โอ๊คฝรั่งเศส Bordeaux 225L จากซันเดโกไม่ได้เป็นเพียงวัตถุโบราณ แต่คือเครื่องมือเพิ่มมูลค่าทางธุรกิจทั้งในเชิงคุณภาพเครื่องดื่มและสุนทรียศาสตร์
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Local Wine Aging */}
            <div className="bg-stone-950 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-amber-950/70 border border-amber-600/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Wine className="w-7 h-7" />
                </div>
                <div className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold">
                  1. หมักบ่มไวน์ท้องถิ่น (Local Winemaking)
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  แลกเปลี่ยนออกซิเจน พัฒนากลิ่น รสชาติ และสีของไวน์
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  เนื้อไม้โอ๊คฝรั่งเศสมีรูพรุนขนาดเล็กระดับไมโคร (Micro-oxygenation) ช่วยให้ออกซิเจนซึมผ่านอย่างช้าๆ ทำให้แทนนินในไวน์นุ่มลง ลดความฝาดกระด้าง และเติมโน้ตกลิ่นวานิลลา อบเชย และคาราเมลอย่างเป็นธรรมชาติ
                </p>
                <ul className="space-y-2 pt-2 text-xs text-stone-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ช่วยให้สีไวน์สดใสและคงตัวยาวนานขึ้น</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ถังใบหนึ่งสามารถนำมาหมักบ่มซ้ำได้หลายรอบ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ยกระดับไวน์ผลไม้ไทยสู่มาตรฐานสากล</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-stone-800/80 mt-6">
                <button
                  onClick={() => addToCart(products[1], 1, true)}
                  className="w-full py-2.5 rounded-lg bg-stone-900 hover:bg-amber-600 hover:text-stone-950 border border-stone-700 text-stone-200 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>เลือกถังสเปกบ่มไวน์ (฿11,500)</span>
                </button>
              </div>
            </div>

            {/* Card 2: Spirits & Craft Alcohol Aging */}
            <div className="bg-stone-950 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-amber-950/70 border border-amber-600/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Flame className="w-7 h-7" />
                </div>
                <div className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold">
                  2. บ่มสุราคราฟต์ & แอลกอฮอล์ (Spirits Aging)
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  วิสกี้, รัม, เบียร์, เตกิลา มิติรสชาติที่ลุ่มลึก
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  ในต่างประเทศนิยมนำถังไวน์แดง Bordeaux ใช้แล้วมาบ่มซ้ำกับ Whiskey, Rum, Barrel-aged Stout และ Tequila เพราะไวน์แดงที่ฝังลึกในเนื้อไม้จะทำปฏิกิริยากับสปิริต ก่อให้เกิดสีอำพันอมแดงประกายทับทิม และรสชาติที่หาจากถังใหม่ไม่ได้
                </p>
                <ul className="space-y-2 pt-2 text-xs text-stone-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Red Wine Cask Finish ที่นักดื่มทั่วโลกตามหา</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>เพิ่มมูลค่าราคาขายของสุราคราฟต์ได้ 2-3 เท่าตัว</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ได้รสสัมผัส Berry, Dark Chocolate, Oaky</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-stone-800/80 mt-6">
                <button
                  onClick={() => addToCart(products[1], 1, true)}
                  className="w-full py-2.5 rounded-lg bg-stone-900 hover:bg-amber-600 hover:text-stone-950 border border-stone-700 text-stone-200 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>เลือกถังสเปกบ่มสุรา (฿11,500)</span>
                </button>
              </div>
            </div>

            {/* Card 3: Luxury French Chateau Decor */}
            <div className="bg-stone-950 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-amber-950/70 border border-amber-600/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <div className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold">
                  3. ตกแต่งร้านอาหาร & รีสอร์ท (Luxury Decor)
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  กลิ่นอายชาโตว์ฝรั่งเศส มนต์เสน่ห์แห่งสวนองุ่นบอร์โด
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  สร้างความประทับใจระดับเวิลด์คลาสให้แก่ผู้มาเยือน นำไปจัดวางตกแต่งคาเฟ่, ไวน์บาร์, สเต็กเฮาส์, รีสอร์ทหรู หรือบ้านพักส่วนตัว ดัดแปลงเป็นโต๊ะค็อกเทลทรงสูง หรือมุมถ่ายภาพ Signature ที่เพิ่มยอดเช็กอินและสร้างภาพจำ
                </p>
                <ul className="space-y-2 pt-2 text-xs text-stone-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>สร้าง Vibe ชาโตว์ยุโรปแท้โดยไม่ต้องบินไปไกล</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ผิวไม้และสายรัดเหล็กมีเสน่ห์แห่งกาลเวลา</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ทนทาน แข็งแกร่ง อายุการใช้งานยาวนานนับสิบปี</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-stone-800/80 mt-6">
                <button
                  onClick={() => addToCart(products[0], 1, true)}
                  className="w-full py-2.5 rounded-lg bg-stone-900 hover:bg-amber-600 hover:text-stone-950 border border-stone-700 text-stone-200 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>เลือกถังสำหรับตกแต่ง (฿9,900)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. TECHNICAL SPECIFICATIONS & 3D BLUEPRINT                     */}
      {/* ------------------------------------------------------------- */}
      <section id="specifications" className="py-20 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Cooperage Blueprint Drawing (Distinct Visual Representation) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-amber-600/30 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 p-6 shadow-2xl">
                {/* Blueprint Header */}
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-mono tracking-widest uppercase text-amber-300">
                      TECHNICAL COOPERAGE BLUEPRINT
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-stone-500">STD: BARRIQUE 225L</span>
                </div>

                {/* SVG Blueprint Diagram with Exact Dimensions */}
                <div className="relative flex items-center justify-center py-4">
                  <svg viewBox="0 0 340 400" className="w-full max-w-[280px] sm:max-w-[320px] h-auto drop-shadow-2xl">
                    <defs>
                      <linearGradient id="barrelWoodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#291e17" />
                        <stop offset="25%" stopColor="#452f1e" />
                        <stop offset="50%" stopColor="#63452b" />
                        <stop offset="75%" stopColor="#452f1e" />
                        <stop offset="100%" stopColor="#291e17" />
                      </linearGradient>
                      <linearGradient id="steelHoopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#525252" />
                        <stop offset="50%" stopColor="#a3a3a3" />
                        <stop offset="100%" stopColor="#404040" />
                      </linearGradient>
                    </defs>

                    {/* Barrel Body Contour */}
                    <path
                      d="M 100 45 Q 60 200 100 355 L 240 355 Q 280 200 240 45 Z"
                      fill="url(#barrelWoodGrad)"
                      stroke="#d97706"
                      strokeWidth="2"
                    />

                    {/* Staves vertical curvature lines */}
                    <path d="M 125 45 Q 98 200 125 355" stroke="#78350f" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
                    <path d="M 150 45 Q 135 200 150 355" stroke="#78350f" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
                    <path d="M 170 45 Q 170 200 170 355" stroke="#b45309" strokeWidth="1" fill="none" opacity="0.5" />
                    <path d="M 190 45 Q 205 200 190 355" stroke="#78350f" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
                    <path d="M 215 45 Q 242 200 215 355" stroke="#78350f" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />

                    {/* Top & Bottom Chime Heads */}
                    <ellipse cx="170" cy="45" rx="70" ry="12" fill="#362217" stroke="#f59e0b" strokeWidth="1.5" />
                    <ellipse cx="170" cy="355" rx="70" ry="12" fill="#24150f" stroke="#d97706" strokeWidth="1.5" />

                    {/* Bunghole (Château bung at center) */}
                    <circle cx="170" cy="200" r="7" fill="#1c1917" stroke="#f59e0b" strokeWidth="1.5" />
                    <circle cx="170" cy="200" r="3" fill="#b45309" />

                    {/* 6 Galvanized Steel Hoops */}
                    <ellipse cx="170" cy="65" rx="73" ry="11" fill="none" stroke="url(#steelHoopGrad)" strokeWidth="6" />
                    <ellipse cx="170" cy="115" rx="83" ry="12" fill="none" stroke="url(#steelHoopGrad)" strokeWidth="5.5" />
                    <ellipse cx="170" cy="165" rx="88" ry="13" fill="none" stroke="url(#steelHoopGrad)" strokeWidth="5" />
                    <ellipse cx="170" cy="235" rx="88" ry="13" fill="none" stroke="url(#steelHoopGrad)" strokeWidth="5" />
                    <ellipse cx="170" cy="285" rx="83" ry="12" fill="none" stroke="url(#steelHoopGrad)" strokeWidth="5.5" />
                    <ellipse cx="170" cy="335" rx="73" ry="11" fill="none" stroke="url(#steelHoopGrad)" strokeWidth="6" />

                    {/* Top Dimension line: 57 cm */}
                    <line x1="100" y1="25" x2="240" y2="25" stroke="#fbbf24" strokeWidth="1.5" />
                    <line x1="100" y1="20" x2="100" y2="30" stroke="#fbbf24" strokeWidth="1.5" />
                    <line x1="240" y1="20" x2="240" y2="30" stroke="#fbbf24" strokeWidth="1.5" />
                    <text x="170" y="18" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      ผิวบน 57 cm
                    </text>

                    {/* Bilge Center Dimension line: 69 cm */}
                    <line x1="72" y1="200" x2="268" y2="200" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
                    <circle cx="72" cy="200" r="3" fill="#38bdf8" />
                    <circle cx="268" cy="200" r="3" fill="#38bdf8" />
                    <text x="75" y="190" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="monospace">
                      พุงถัง 69 cm
                    </text>

                    {/* Height Dimension line on Right: 95 cm */}
                    <line x1="295" y1="45" x2="295" y2="355" stroke="#34d399" strokeWidth="1.5" />
                    <line x1="290" y1="45" x2="300" y2="45" stroke="#34d399" strokeWidth="1.5" />
                    <line x1="290" y1="355" x2="300" y2="355" stroke="#34d399" strokeWidth="1.5" />
                    <text x="305" y="205" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="start" fontFamily="monospace">
                      สูง 95 cm
                    </text>
                  </svg>
                </div>

                {/* Blueprint Sub-badge */}
                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>ความหนาไม้โอ๊ค 27 mm</span>
                  </span>
                  <span className="text-stone-300">ความจุสุทธิ 225 ลิตร</span>
                </div>
              </div>
            </div>

            {/* Specifications Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
                  Technical Dimensions & Anatomy
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 leading-normal sm:leading-[1.25]">
                  เจาะลึกสเปกและสัดส่วน <span className="text-amber-400">มาตรฐานบอร์โด</span>
                </h2>
                <p className="text-stone-300 text-sm sm:text-base mt-2 leading-relaxed">
                  ถังไวน์ทุกใบที่ {BRAND_NAME} นำเข้ามา เป็นถัง Barrique มาตรฐานจากแหล่งผลิตไวน์บอร์โด ประเทศฝรั่งเศส ที่ขึ้นชื่อเรื่องงานช่างฝีมือประกอบถัง (Cooperage) ที่ประณีตที่สุดในโลก
                </p>
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                    225L
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">ความจุ (Capacity)</div>
                    <div className="text-base font-bold text-stone-100">225 Litres (59.4 US Gal)</div>
                    <div className="text-xs text-stone-500 mt-0.5">ขนาดมาตรฐานสากลแห่งแคว้นบอร์โด</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                    27mm
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">ความหนาไม้โอ๊ค (Stave Thickness)</div>
                    <div className="text-base font-bold text-stone-100">27 มิลลิเมตร (27 mm)</div>
                    <div className="text-xs text-stone-500 mt-0.5">ไม้หนาแน่นพิเศษ แข็งแกร่ง ทนแรงดัน</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                    57cm
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">ความกว้างส่วนบน (Head Diameter)</div>
                    <div className="text-base font-bold text-stone-100">57 เซนติเมตร (57 cm)</div>
                    <div className="text-xs text-stone-500 mt-0.5">ผิวหน้ากว้าง เหมาะวางท็อปโต๊ะ</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                    69cm
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">ความกว้างส่วนกลาง (Bilge Diameter)</div>
                    <div className="text-base font-bold text-stone-100">69 เซนติเมตร (69 cm)</div>
                    <div className="text-xs text-stone-500 mt-0.5">ส่วนพุงถังโค้งเว้าทรงบาร์เรลแท้</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                    95cm
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">ความสูงรวม (Total Height)</div>
                    <div className="text-base font-bold text-stone-100">95 เซนติเมตร (95 cm)</div>
                    <div className="text-xs text-stone-500 mt-0.5">ความสูงระดับเคาน์เตอร์บาร์มาตรฐาน</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                    6x
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">สายรัดเหล็ก (Galvanized Steel Hoops)</div>
                    <div className="text-base font-bold text-stone-100">สายรัดเหล็กกัลวาไนซ์ 6 วง</div>
                    <div className="text-xs text-stone-500 mt-0.5">ชุบกันสนิม ยึดตรึงตัวถังแน่นหนา</div>
                  </div>
                </div>
              </div>

              {/* Quality Guarantee Callout Box */}
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/30 text-xs sm:text-sm text-stone-300 flex items-center gap-3">
                <Info className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>การรับประกันสภาพ:</strong> ถังทุกใบผ่านการคัดสภาพโดยช่างผู้เชี่ยวชาญของซันเดโก ตรวจสอบโครงสร้างไม้ สายรัดเหล็ก และกลิ่นอย่างละเอียดก่อนส่งมอบ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. WHY FRENCH OAK (ทำไมต้องไม้โอ๊คฝรั่งเศสแท้จาก Bordeaux)        */}
      {/* ------------------------------------------------------------- */}
      <section id="french-oak-advantage" className="py-20 bg-stone-900/40 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              The Sovereign of Wood
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              ทำไมช่างบ่มไวน์และนักตกแต่งระดับโลกจึงเลือก <span className="text-amber-400">ไม้โอ๊คฝรั่งเศส</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              เปรียบเทียบความแตกต่างที่ทำให้ไม้โอ๊คจากประเทศฝรั่งเศสครองความเป็นที่หนึ่งในวงการไวน์และงานออกแบบระดับพรีเมียม
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: French Oak (Superior) */}
            <div className="bg-gradient-to-b from-amber-950/40 via-stone-950 to-stone-950 border-2 border-amber-500/60 rounded-3xl p-6 sm:p-8 relative shadow-2xl">
              <div className="absolute -top-3.5 left-8 bg-amber-500 text-stone-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                คัดเกรดโดยซันเดโก
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-300">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">ไม้โอ๊คฝรั่งเศส (French Oak - Bordeaux)</h3>
                  <div className="text-xs text-amber-300 font-medium">Quercus robur & Quercus petraea</div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">วงปีแน่นและเนื้อไม้ละเอียด (Tight Grain):</strong>
                    <p className="text-xs text-stone-400 mt-0.5">ต้นโอ๊คเติบโตอย่างช้าๆ ในป่ายุโรป ส่งผลให้เสี้ยนไม้เรียบเนียน ถ่ายเทออกซิเจนอย่างละมุน ไม่ทำให้เครื่องดื่มมีกลิ่นไม้โอ๊คฉุนกระด้าง</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">กลิ่นอายความหอมซับซ้อน (Subtle Elegance):</strong>
                    <p className="text-xs text-stone-400 mt-0.5">มอบกลิ่นวานิลลาเบาบาง เครื่องเทศสไปซ์อ่อนๆ และกลิ่นคั่วทอฟฟี่ ไม่กลบรสชาติดั้งเดิมของเครื่องดื่ม</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">สุนทรียภาพและความคลาสสิก:</strong>
                    <p className="text-xs text-stone-400 mt-0.5">ผิวสัมผัสสีอำพันเข้มเมื่อผ่านเวลา ยิ่งเก่ายิ่งสวยงาม มีลวดลายของคราบไวน์แดงธรรมชาติที่เพิ่มเรื่องราวอันทรงคุณค่า</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Other Oak Types */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 relative opacity-90">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-300">ไม้โอ๊คชนิดอื่นทั่วไป (Other Oak / Commercial)</h3>
                  <div className="text-xs text-stone-500 font-medium">American Oak หรือ ไม้สังเคราะห์</div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-400">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-800 text-stone-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    •
                  </div>
                  <div>
                    <strong className="text-stone-300">วงปีกว้าง เนื้อไม้หยาบกว่า:</strong>
                    <p className="text-xs text-stone-500 mt-0.5">การแลกเปลี่ยนอากาศรวดเร็วเกินไป อาจทำให้ไวน์เกิดออกซิเดชันเร็ว และแทนนินมีความกระด้าง</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-800 text-stone-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    •
                  </div>
                  <div>
                    <strong className="text-stone-300">กลิ่นมะพร้าวและไม้โอ๊คที่เด่นเกินไป:</strong>
                    <p className="text-xs text-stone-500 mt-0.5">มีสารแลกโทนสูง ทำให้มีกลิ่นไม้ฉุนชัดเจนเกินไป ซึ่งอาจไม่เหมาะกับไวน์และสปิริตที่ต้องการความละเอียดอ่อน</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-800 text-stone-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    •
                  </div>
                  <div>
                    <strong className="text-stone-300">ขาดเสน่ห์ทางประวัติศาสตร์ของชาโตว์:</strong>
                    <p className="text-xs text-stone-500 mt-0.5">ไม่มีเรื่องราวของแหล่งกำเนิดไวน์แคว้น Bordeaux ซึ่งเป็นแหล่งผลิตไวน์ระดับโลกอันดับหนึ่งของฝรั่งเศส</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. PRODUCT CATALOG & E-COMMERCE CART SECTION                   */}
      {/* ------------------------------------------------------------- */}
      <section id="catalog" className="py-20 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
                Online Catalog & Direct Order
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 leading-normal sm:leading-[1.25]">
                รายการสินค้า & สั่งซื้อออนไลน์ <span className="text-amber-400">ส่งตรงถึงที่</span>
              </h2>
              <p className="text-stone-300 text-sm sm:text-base mt-2">
                กดเลือกสินค้าลงตะกร้าเพื่อคำนวณราคา หรือกด{' '}
                <a
                  href="#quote-generator"
                  className="text-amber-400 font-semibold underline hover:text-amber-300 transition"
                >
                  ขอใบเสนอราคา
                </a>{' '}
                ได้ทันที รองรับทั้งบุคคลและองค์กร
              </p>
            </div>

            {/* Quick Filter / Cart toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setCartTab('cart');
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs flex items-center gap-2 shadow-lg transition"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>เปิดตะกร้าสินค้า ({totalItemCount} รายการ)</span>
              </button>
            </div>
          </div>

          {/* Pricing & VAT / Shipping Policy Callout */}
          <div className="mb-10 p-4 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>นโยบายราคา:</strong> ราคาสินค้ารวม VAT 7% แล้ว (ออกใบกำกับภาษีได้) • บริการจัดส่งทั่วประเทศ ออกจากคลัง อ.โพธาราม จ.ราชบุรี หรือนัดรับสินค้าฟรี
              </span>
            </div>
            <a
              href={`tel:${PHONE_1_RAW}`}
              className="text-amber-400 hover:text-amber-300 font-semibold underline whitespace-nowrap shrink-0"
            >
              สอบถามค่าส่งเหมาคัน โทร {PHONE_1_DISPLAY}
            </a>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black group"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-stone-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-amber-600/90 text-stone-950 font-black text-[11px] px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm">
                        {product.badge}
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-stone-950/80 text-stone-300 text-[11px] px-2 py-0.5 rounded backdrop-blur-md">
                      {product.categoryLabel}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-white text-base leading-snug line-clamp-2 min-h-[44px]">
                      {product.name}
                    </h3>
                    <div className="text-xs text-stone-400 font-mono">
                      {product.spec}
                    </div>

                    {/* Grade Distinction Badge */}
                    {product.gradeBadge && (
                      <div className="p-2.5 rounded-lg bg-stone-950/70 border border-amber-600/30 text-[11px] space-y-1">
                        <div className="font-bold text-amber-300">{product.gradeBadge}</div>
                        <div className="text-stone-400 leading-relaxed">{product.gradeComparison}</div>
                      </div>
                    )}

                    <ul className="space-y-1.5 pt-1 text-xs text-stone-300">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & Add to Cart */}
                <div className="p-5 pt-0 border-t border-stone-800/80 mt-4 space-y-3">
                  <div className="flex items-baseline justify-between pt-3">
                    <div>
                      <span className="text-xs text-stone-500 line-through mr-1.5">
                        ฿{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-xl font-extrabold text-amber-400">
                        ฿{product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-stone-400 ml-1">/{product.unit}</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium">มีของพร้อมส่ง</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => addToCart(product, 1, false)}
                      className="w-full py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>ใส่ตะกร้า</span>
                    </button>
                    <button
                      onClick={() => {
                        addToCart(product, 1, true);
                        setCartTab('checkout');
                      }}
                      className="w-full py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <span>สั่งซื้อทันที</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. INSTANT QUOTATION REQUEST GENERATOR (สำหรับ B2B & องค์กร)   */}
      {/* ------------------------------------------------------------- */}
      <section id="quote-generator" className="py-20 bg-stone-900/70 border-b border-stone-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              B2B & Commercial Quotation
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              ขอใบเสนอราคาด่วน <span className="text-amber-400">สำหรับร้านค้าและองค์กร</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              เหมาะสำหรับผู้รับเหมาตกแต่ง, สถาปนิก, โรงแรม, รีสอร์ท, โรงบ่มไวน์ หรือธุรกิจที่ต้องการสั่งซื้อจำนวนมาก สามารถออกเอกสารเพื่อตั้งเบิกงบประมาณได้ทันที
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-stone-950 border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <span>กรอกข้อมูลเพื่อคำนวณและออกใบเสนอราคา</span>
              </h3>

              <form onSubmit={handleSimulateQuote} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quoteSimName" className="block text-xs font-medium text-stone-300 mb-1">
                      ชื่อ-นามสกุล / ผู้ติดต่อ <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="quoteSimName"
                      name="fullName"
                      autoComplete="name"
                      type="text"
                      required
                      value={quoteSimName}
                      onChange={(e) => setQuoteSimName(e.target.value)}
                      placeholder="เช่น คุณวิทวัส แสนสุข"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="quoteSimPhone" className="block text-xs font-medium text-stone-300 mb-1">
                      เบอร์โทรศัพท์ติดต่อ <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="quoteSimPhone"
                      name="phone"
                      autoComplete="tel"
                      type="tel"
                      required
                      value={quoteSimPhone}
                      onChange={(e) => {
                        setQuoteSimPhone(e.target.value);
                        setQuoteSimPhoneError('');
                      }}
                      placeholder="เช่น 086-026-6668"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border text-white placeholder-stone-500 text-sm focus:outline-none ${
                        quoteSimPhoneError ? 'border-red-500 focus:border-red-500' : 'border-stone-700 focus:border-amber-500'
                      }`}
                    />
                    {quoteSimPhoneError && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{quoteSimPhoneError}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quoteSimCompany" className="block text-xs font-medium text-stone-300 mb-1">
                      ชื่อบริษัท / ร้านค้า / โปรเจกต์
                    </label>
                    <input
                      id="quoteSimCompany"
                      name="organization"
                      autoComplete="organization"
                      type="text"
                      value={quoteSimCompany}
                      onChange={(e) => setQuoteSimCompany(e.target.value)}
                      placeholder="เช่น Château Cafe & Bistro"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="quoteSimPurpose" className="block text-xs font-medium text-stone-300 mb-1">
                      วัตถุประสงค์การใช้งาน
                    </label>
                    <select
                      id="quoteSimPurpose"
                      name="purpose"
                      value={quoteSimPurpose}
                      onChange={(e) => setQuoteSimPurpose(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    >
                      <option value="ตกแต่งร้านอาหาร / คาเฟ่ / รีสอร์ท">ตกแต่งร้านอาหาร / คาเฟ่ / รีสอร์ท</option>
                      <option value="หมักบ่มไวน์ท้องถิ่น">หมักบ่มไวน์ท้องถิ่น</option>
                      <option value="หมักบ่มสุราคราฟต์ / วิสกี้ / รัม">หมักบ่มสุราคราฟต์ / วิสกี้ / รัม</option>
                      <option value="ทำโต๊ะบาร์ / เฟอร์นิเจอร์สั่งทำ">ทำโต๊ะบาร์ / เฟอร์นิเจอร์สั่งทำ</option>
                      <option value="สะสมส่วนตัว / ของขวัญพรีเมียม">สะสมส่วนตัว / ของขวัญพรีเมียม</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="quoteSimItem" className="block text-xs font-medium text-stone-300 mb-1">
                      เลือกประเภทถังไวน์
                    </label>
                    <select
                      id="quoteSimItem"
                      name="productItem"
                      value={quoteSimItem}
                      onChange={(e) => setQuoteSimItem(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} (฿{p.price.toLocaleString()})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quoteSimQty" className="block text-xs font-medium text-stone-300 mb-1">
                      จำนวนที่ต้องการ
                    </label>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setQuoteSimQty((prev) => Math.max(1, prev - 1))}
                        className="px-3 py-2.5 bg-stone-800 hover:bg-stone-700 rounded-l-xl text-stone-200 border border-stone-700"
                        aria-label="ลดจำนวน"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <input
                        id="quoteSimQty"
                        name="quantity"
                        type="number"
                        min="1"
                        max="100"
                        value={quoteSimQty}
                        onChange={(e) => setQuoteSimQty(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full text-center py-2.5 bg-stone-900 border-y border-stone-700 text-white text-sm focus:outline-none font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => setQuoteSimQty((prev) => prev + 1)}
                        className="px-3 py-2.5 bg-stone-800 hover:bg-stone-700 rounded-r-xl text-stone-200 border border-stone-700"
                        aria-label="เพิ่มจำนวน"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {quoteSimApiError && (
                  <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-red-300 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span>{quoteSimApiError}</span>
                      <div className="mt-2 flex gap-2">
                        <button
                          type="submit"
                          className="px-3 py-1 bg-red-800 hover:bg-red-700 text-white rounded text-[11px] font-semibold"
                        >
                          ลองใหม่อีกครั้ง
                        </button>
                        <a
                          href={`tel:${PHONE_1_RAW}`}
                          className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-[11px] font-semibold"
                        >
                          โทร {PHONE_1_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmittingQuote}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-950/60 transition flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmittingQuote ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>กำลังประมวลผลข้อมูล...</span>
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4" />
                        <span>คำนวณและแสดงใบเสนอราคาทันที</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Live Instant Quotation Document Preview */}
            <div className="lg:col-span-5 bg-stone-900 border border-amber-600/40 rounded-3xl p-6 sm:p-7 shadow-2xl relative text-stone-100">
              <div className="border-b border-stone-800 pb-4 mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                    OFFICIAL QUOTATION PREVIEW
                  </div>
                  <div className="text-base font-extrabold text-white mt-0.5">
                    {BRAND_NAME}
                  </div>
                  <div className="text-[11px] text-stone-400">เลขประจำตัวผู้เสียภาษี / สำนักงานโพธาราม จ.ราชบุรี</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-amber-300">
                    QT-2026-{previewDocSuffix}
                  </div>
                  <div className="text-[10px] text-stone-400">
                    วันที่: {previewDate}
                  </div>
                </div>
              </div>

              {/* Customer summary */}
              <div className="bg-stone-950/70 p-3 rounded-xl border border-stone-800 text-xs space-y-1 mb-4">
                <div>
                  <span className="text-stone-400">เรียน: </span>
                  <span className="font-semibold text-white">
                    {quoteSimName || 'ท่านผู้มีอุปการคุณ'}
                  </span>
                  {quoteSimCompany && <span className="text-amber-400"> ({quoteSimCompany})</span>}
                </div>
                <div>
                  <span className="text-stone-400">โทรศัพท์: </span>
                  <span className="font-mono text-stone-300">{quoteSimPhone || '08x-xxx-xxxx'}</span>
                </div>
                <div>
                  <span className="text-stone-400">การนำไปใช้: </span>
                  <span className="text-stone-300">{quoteSimPurpose}</span>
                </div>
              </div>

              {/* Items table */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs text-stone-400 border-b border-stone-800 pb-1">
                  <span>รายการสินค้า</span>
                  <span>รวมเป็นเงิน</span>
                </div>
                <div className="flex justify-between text-xs text-stone-200">
                  <div className="max-w-[70%]">
                    <div className="font-medium text-white">{selectedSimProduct.name}</div>
                    <div className="text-[11px] text-stone-400">
                      {quoteSimQty} x ฿{selectedSimProduct.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="font-mono font-bold text-amber-300">
                    ฿{simTotal.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Total Summary */}
              <div className="border-t border-stone-800 pt-3 space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-400">
                  <span>ยอดรวมสินค้า (รวม VAT 7%)</span>
                  <span className="font-mono">฿{simTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>ค่าบริการจัดส่ง (ราชบุรี/กทม./ปริมณฑล)</span>
                  <span className="text-emerald-400 font-semibold">ตามระยะทาง / นัดรับฟรี</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white border-t border-stone-800 pt-2">
                  <span>ยอดสุทธิโดยประมาณ</span>
                  <span className="font-mono text-amber-400 text-base">฿{simTotal.toLocaleString()}.-</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-5 grid grid-cols-2 gap-2">
                <a
                  href={`https://line.me/R/ti/p/@fhu6688s?text=${encodeURIComponent(
                    `สนใจขอใบเสนอราคาถังไวน์ไม้โอ๊ค:\nรายการ: ${selectedSimProduct.name}\nจำนวน: ${quoteSimQty} ใบ\nยอดประมาณ: ฿${simTotal.toLocaleString()}\nผู้ติดต่อ: ${quoteSimName || '-'} เบอร์ ${quoteSimPhone || '-'}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <LineIcon className="w-3.5 h-3.5" />
                  <span>ส่งไลน์ขอใบเสนอราคา</span>
                </a>
                <button
                  onClick={() => window.print()}
                  className="py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition flex items-center justify-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>พิมพ์เอกสารหน้านี้</span>
                </button>
              </div>

              {quoteSimSuccess && (
                <div className="mt-3 p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs text-center animate-fade-in flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ส่งข้อมูลให้ฝ่ายขายเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับภายใน 15 นาที</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. SOCIAL PROOF & TESTIMONIALS (หลักฐานทางสังคม)                 */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              Real Experiences & Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              เสียงตอบรับจาก <span className="text-amber-400">ลูกค้าผู้ใช้งานจริง</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              ทั้งโรงกลั่นสุราคราฟต์ ผู้ผลิตไวน์ และเจ้าของธุรกิจร้านอาหารชั้นนำทั่วประเทศ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-stone-900 border border-stone-800 p-6 sm:p-7 rounded-2xl flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-stone-300 leading-relaxed italic">
                  “เราสั่งถังไวน์ Bordeaux 225L จากซันเดโกไป 4 ใบเพื่อนำไปบ่ม Rum Cask Finish สปิริตออกมาได้สีอำพันทองประกายแดงที่สวยมาก รสสัมผัสมีความหอมของผลไม้สุกและวานิลลาชัดเจน ลูกค้าชมทุกคน คุ้มค่าการลงทุนครับ”
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800/80 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-950 border border-amber-600/40 flex items-center justify-center font-bold text-amber-300 text-sm">
                  ธ
                </div>
                <div>
                  <div className="text-sm font-bold text-white">คุณธีรภัทร์ ร.</div>
                  <div className="text-xs text-stone-400">Master Distiller, Craft Spirits Bar</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-stone-900 border border-stone-800 p-6 sm:p-7 rounded-2xl flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-stone-300 leading-relaxed italic">
                  “เปิดร้านอาหารสไตล์ฝรั่งเศสในทองหล่อ สั่งถังไวน์มาทำโต๊ะบาร์ค็อกเทลหน้าร้าน 6 ใบ ลูกค้าชอบมาก มายืนถ่ายรูปลงไอจีกันเพียบ สภาพไม้โอ๊คสวยเนียน มีเสน่ห์แบบชาโตว์ยุโรปแท้ๆ ประทับใจการบริการของซันเดโกมากครับ”
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800/80 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-950 border border-amber-600/40 flex items-center justify-center font-bold text-amber-300 text-sm">
                  ม
                </div>
                <div>
                  <div className="text-sm font-bold text-white">คุณมนัสวี ว.</div>
                  <div className="text-xs text-stone-400">เจ้าของร้านอาหาร & French Wine Lounge</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-stone-900 border border-stone-800 p-6 sm:p-7 rounded-2xl flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-stone-300 leading-relaxed italic">
                  “เราทำไวน์ผลไม้ท้องถิ่นอยู่ราชบุรี เลยแวะไปดูถังจริงที่โกดังโพธาราม ถังไม้โอ๊คหนา 27 มม. แน่นหนามาก นำมาบ่มช่วยให้แทนนินนุ่มลง ลดความเปรี้ยวโดดได้อย่างดี แถมได้อุดหนุนบริษัทในพื้นที่ด้วย แนะนำเลยครับ”
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800/80 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-950 border border-amber-600/40 flex items-center justify-center font-bold text-amber-300 text-sm">
                  ก
                </div>
                <div>
                  <div className="text-sm font-bold text-white">คุณกฤติน ภ.</div>
                  <div className="text-xs text-stone-400">ผู้ผลิตไวน์ผลไม้ท้องถิ่น จ.ราชบุรี</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. FAQ ACCORDION SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <section id="faq" className="py-20 bg-stone-900/50 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal sm:leading-[1.25]">
              คำถามที่พบบ่อย <span className="text-amber-400">(FAQ)</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base">
              ข้อควรรู้เกี่ยวกับการดูแลรักษา การเตรียมถัง และการจัดส่งถังไวน์ไม้โอ๊ค
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>1. ถังไวน์มือสองมีกลิ่นไวน์ติดอยู่หรือไม่?</span>
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed pl-6">
                มีกลิ่นอายของไวน์แดงบอร์โดจางๆ ที่ซึมลึกในเนื้อไม้โอ๊คฝรั่งเศส ซึ่งถือเป็นคุณสมบัติเด่นและเอกลักษณ์ที่ช่างบ่มสุราและผู้รักการตกแต่งต้องการ โดยไม่มีกลิ่นบูดเสียหรือเชื้อรา เนื่องจากผ่านการล้างและอบแห้งอย่างถูกวิธี
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>2. หากต้องการนำไปบ่มไวน์หรือสุราคราฟต์ ต้องเตรียมถังอย่างไรก่อนใช้งาน?</span>
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed pl-6">
                สำหรับการบ่มของเหลว แนะนำให้ทำการบวมน้ำ (Hydration) โดยเติมน้ำสะอาดหรือน้ำอุ่นทิ้งไว้ 24-48 ชั่วโมง เพื่อให้เนื้อไม้โอ๊คดูดซับความชื้นและขยายตัวประสานกันจนปิดสนิท 100% (Tight seal) ก่อนจะถ่ายน้ำออกแล้วใส่เครื่องดื่มที่ต้องการบ่มลงไป
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>3. หากนำไปตั้งตกแต่งกลางแจ้ง ไม้จะแห้งหรือแตกร้าวหรือไม่?</span>
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed pl-6">
                หากวางในร่มหรือกึ่งกลางแจ้ง (Semi-outdoor) ถังสามารถอยู่ได้นานนับสิบปี หากวางกลางแจ้งแดดจัด แนะนำให้ทาเคลือบน้ำมันรักษาเนื้อไม้ (Teak Oil หรือ Wood Sealant) ปีละ 1-2 ครั้ง เพื่อคงความชุ่มชื้นและสีสันที่สวยงาม
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>4. สั่งซื้อจำนวนมาก มีราคาส่งและใบกำกับภาษีหรือไม่?</span>
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed pl-6">
                บริษัท ซันเดโก (ประเทศไทย) จำกัด จดทะเบียนนิติบุคคลถูกต้อง สามารถออกใบเสนอราคา ใบกำกับภาษี และเอกสารทางการค้าได้ครบถ้วน สำหรับคำสั่งซื้อ 4 ใบขึ้นไป มีส่วนลดพิเศษและค่าจัดส่งเหมาคัน
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>5. บริการจัดส่งไปต่างจังหวัดอย่างไร?</span>
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed pl-6">
                เรามีบริการจัดส่งผ่านขนส่งเอกชนชั้นนำที่เชี่ยวชาญสินค้าชิ้นใหญ่ พร้อมแพ็กห่อกันกระแทกอย่างหนาแน่น จัดส่งถึงหน้าบ้านทั่วประเทศไทยภายใน 2-4 วันทำการ หรือนัดรับสินค้าด้วยตนเองที่โกดัง จ.ราชบุรี ได้ฟรี
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10. LOCATION, WAREHOUSE & DIRECT CONTACT                       */}
      {/* ------------------------------------------------------------- */}
      <section id="contact" className="py-20 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Company Info */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
                  Direct Contact & Warehouse
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 leading-normal sm:leading-[1.25]">
                  ติดต่อ {BRAND_NAME}
                </h2>
                <p className="text-stone-300 text-sm sm:text-base mt-2 leading-relaxed">
                  ยินดีต้อนรับผู้ประกอบการและลูกค้าทุกท่านเข้าชมถังไวน์ของจริงที่โกดังคัดแยก จ.ราชบุรี หรือโทรสอบถามทีมงานฝ่ายขายได้ทุกวัน
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-stone-400">ที่ตั้งสำนักงานและคลังสินค้า</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{ADDRESS_TEXT}</div>
                    <button
                      onClick={() => copyToClipboard(ADDRESS_TEXT, 'address')}
                      className="mt-2 text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium"
                    >
                      {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAddress ? 'คัดลอกที่อยู่แล้ว' : 'คัดลอกที่อยู่'}</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center text-amber-400 shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-stone-400">เบอร์โทรศัพท์สายด่วน / สำนักงาน</div>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <a href={`tel:${PHONE_1_RAW}`} className="text-sm font-bold text-amber-300 hover:underline">
                        {PHONE_1_DISPLAY} (ฝ่ายขาย)
                      </a>
                      <span className="text-stone-600">•</span>
                      <a href={`tel:${PHONE_2_RAW}`} className="text-sm font-bold text-stone-300 hover:underline">
                        {PHONE_2_DISPLAY} (ออฟฟิศ)
                      </a>
                    </div>
                  </div>
                </div>

                {/* LINE OA Card: Respects Boss's Instruction to leave Line ID blank without ugly 'ID: ' text */}
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#06C755]/20 border border-[#06C755]/40 flex items-center justify-center text-[#06C755] shrink-0">
                    <LineIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-stone-400">LINE Official Account</div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {LINE_ID ? `ID: ${LINE_ID}` : 'ติดต่อเจ้าหน้าที่ฝ่ายบริการลูกค้า'}
                    </div>
                    <a
                      href={LINE_OA_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs text-[#06C755] hover:underline font-semibold"
                    >
                      <span>คลิกแอดไลน์คุยทันที</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/70 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-stone-400">Facebook Page ทางการ</div>
                    <div className="text-sm font-semibold text-white mt-0.5">ถังไวน์ไม้โอ๊คฝรั่งเศสมือสอง</div>
                    <a
                      href={FACEBOOK_PAGE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs text-blue-400 hover:underline font-semibold"
                    >
                      <span>เข้าชมเพจ Facebook</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Warehouse Visual & Map Card */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-stone-800 bg-stone-900 p-2 shadow-2xl">
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden relative">
                  <img
                    src="/images/sandeco/hero-bordeaux-cellar.jpg"
                    alt="คลังสินค้าถังไวน์ ซันเดโก โพธาราม ราชบุรี"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex items-end p-6">
                    <div>
                      <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                        Warehouse & Showroom
                      </div>
                      <div className="text-lg font-bold text-white mt-0.5">
                        คลังสินค้าและจุดรับของ อ.โพธาราม จ.ราชบุรี
                      </div>
                      <div className="text-xs text-stone-300 mt-1 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>เปิดทำการ: จันทร์ - เสาร์ 08:30 - 17:30 น. (กรุณานัดหมายล่วงหน้า)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE_1_RAW}`}
                  className="flex-1 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs text-center flex items-center justify-center gap-2 transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>โทรนัดชมสินค้า: {PHONE_1_DISPLAY}</span>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('23 หมู่ 2 ต.บ้านสิงห์ อ.โพธาราม จ.ราชบุรี 70120')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-xs text-center flex items-center justify-center gap-2 transition"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>เปิด Google Maps นำทาง</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 11. FOOTER WITH SALESDESK AI BRANDING (Mandatory Standard)     */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-stone-950 text-stone-400 text-xs py-12 border-t border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-stone-800/60 pb-8 text-center md:text-left">
            <div>
              <div className="text-base font-bold text-amber-400 tracking-wider">
                SANDECO THAILAND CO., LTD.
              </div>
              <div className="text-xs text-stone-400 mt-1">
                ผู้นำเข้าถังไวน์ไม้โอ๊คฝรั่งเศส Bordeaux 225L คุณภาพคัดเกรดพรีเมียม
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-300">
              <a href="#applications" className="hover:text-amber-400 transition">การใช้งาน & สเปก</a>
              <a href="#french-oak-advantage" className="hover:text-amber-400 transition">ไม้โอ๊คบอร์โด</a>
              <a href="#catalog" className="hover:text-amber-400 transition">แคตตาล็อกสินค้า</a>
              <a href="#quote-generator" className="hover:text-amber-400 transition">ขอใบเสนอราคา</a>
              <a href="#contact" className="hover:text-amber-400 transition">ติดต่อเรา</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-stone-500 text-xs text-center sm:text-left">
              © 2026 {BRAND_NAME}. All rights reserved.
            </div>

            {/* SalesDesk AI Official Standard Attribution */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 text-xs text-stone-400">
              <a
                href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center hover:opacity-90 transition shrink-0"
              >
                <img
                  src="/images/salesdesk-ai-logo.png"
                  alt="SalesDesk AI"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </a>
              <span>
                ออกแบบและพัฒนาโดย{' '}
                <a
                  href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 font-semibold underline hover:text-amber-300"
                >
                  SalesDesk AI
                </a>{' '}
                (ผู้เชี่ยวชาญด้านเว็บไซต์ & AI การตลาด)
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* 12. FIXED MOBILE ACTION BAR (High-Conversion Sticky Bar)       */}
      {/* ------------------------------------------------------------- */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-stone-950/95 backdrop-blur-lg border-t border-stone-800 p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl">
        <div className="grid grid-cols-12 gap-2">
          {/* Cart quick trigger */}
          <button
            onClick={() => {
              setIsCartOpen(true);
              setCartTab('cart');
            }}
            className="col-span-3 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 flex flex-col items-center justify-center relative active:scale-95 transition"
            aria-label="เปิดตะกร้าสินค้า"
          >
            <ShoppingCart className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] mt-0.5 font-medium">ตะกร้า</span>
            {totalItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center">
                {totalItemCount}
              </span>
            )}
          </button>

          {/* Call direct */}
          <a
            href={`tel:${PHONE_1_RAW}`}
            className="col-span-4 py-2.5 rounded-xl bg-stone-900 border border-amber-500/50 text-stone-100 flex items-center justify-center gap-1.5 text-xs font-bold active:scale-95 transition"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>โทรด่วน</span>
          </a>

          {/* LINE OA Direct consultation */}
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noreferrer"
            className="col-span-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 flex items-center justify-center gap-1.5 text-xs font-black shadow-lg shadow-amber-950/60 active:scale-95 transition"
          >
            <LineIcon className="w-4 h-4 text-stone-950" />
            <span>สั่งซื้อ / แอดไลน์</span>
          </a>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 13. SLIDE-OVER LUXURY SHOPPING CART & CHECKOUT DRAWER          */}
      {/* ------------------------------------------------------------- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="cartDrawerTitle">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-stone-950 border-l border-stone-800 text-stone-100 flex flex-col shadow-2xl">
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-amber-400" />
                  <h3 id="cartDrawerTitle" className="font-bold text-base text-white">ตะกร้าสินค้า & ขอใบเสนอราคา</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-900 transition"
                  aria-label="ปิดตะกร้าสินค้า"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs Switcher */}
              <div className="grid grid-cols-2 border-b border-stone-800 text-xs font-semibold">
                <button
                  onClick={() => setCartTab('cart')}
                  className={`py-3 text-center border-b-2 transition ${
                    cartTab === 'cart'
                      ? 'border-amber-400 text-amber-300 bg-amber-950/20'
                      : 'border-transparent text-stone-400 hover:text-stone-200'
                  }`}
                >
                  รายการในตะกร้า ({totalItemCount})
                </button>
                <button
                  onClick={() => setCartTab('checkout')}
                  disabled={cart.length === 0}
                  className={`py-3 text-center border-b-2 transition disabled:opacity-40 ${
                    cartTab === 'checkout'
                      ? 'border-amber-400 text-amber-300 bg-amber-950/20'
                      : 'border-transparent text-stone-400 hover:text-stone-200'
                  }`}
                >
                  กรอกข้อมูลสั่งซื้อ / ขอใบเสนอราคา
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5">
                {cartTab === 'cart' && (
                  <div>
                    {cart.length === 0 ? (
                      <div className="py-16 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mx-auto text-stone-600">
                          <ShoppingCart className="w-8 h-8" />
                        </div>
                        <div className="text-stone-300 font-semibold text-sm">ยังไม่มีสินค้าในตะกร้า</div>
                        <p className="text-xs text-stone-500 max-w-xs mx-auto">
                          เลือกถังไวน์ไม้โอ๊ค Bordeaux 225L หรืออุปกรณ์เสริมจากรายการสินค้าเพื่อเริ่มสั่งซื้อ
                        </p>
                        <button
                          onClick={() => setIsCartOpen(false)}
                          className="px-5 py-2.5 rounded-xl bg-amber-600 text-stone-950 text-xs font-bold"
                        >
                          เลือกสินค้าเลย
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            className="p-3.5 rounded-2xl bg-stone-900 border border-stone-800 flex gap-3 items-center"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-xl shrink-0 bg-stone-950"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white text-xs truncate">{item.name}</h4>
                              <div className="text-[11px] text-stone-400 truncate">{item.category}</div>
                              <div className="text-sm font-bold text-amber-400 mt-1 font-mono">
                                ฿{item.unitPrice.toLocaleString()}{' '}
                                <span className="text-xs text-stone-500 font-normal">/{item.unit}</span>
                              </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex flex-col items-end gap-2">
                              <div className="flex items-center border border-stone-700 rounded-lg bg-stone-950 overflow-hidden">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="p-1 hover:bg-stone-800 text-stone-400"
                                  aria-label="ลดจำนวน"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="px-2.5 text-xs font-mono font-bold text-white">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="p-1 hover:bg-stone-800 text-stone-400"
                                  aria-label="เพิ่มจำนวน"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-[10px] text-red-400 hover:text-red-300 flex items-center gap-1"
                              >
                                <Trash2 className="w-3 h-3" />
                                <span>ลบ</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {cartTab === 'checkout' && (
                  <form onSubmit={handleSubmitCheckout} className="space-y-4">
                    {/* Order Mode Selector */}
                    <div className="grid grid-cols-2 gap-2 p-1 bg-stone-900 rounded-xl border border-stone-800">
                      <button
                        type="button"
                        onClick={() => setOrderMode('purchase')}
                        className={`py-2 rounded-lg text-xs font-bold transition ${
                          orderMode === 'purchase'
                            ? 'bg-amber-600 text-stone-950'
                            : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        สั่งซื้อสินค้าทันที
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderMode('quotation')}
                        className={`py-2 rounded-lg text-xs font-bold transition ${
                          orderMode === 'quotation'
                            ? 'bg-amber-600 text-stone-950'
                            : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        ขอใบเสนอราคา (B2B)
                      </button>
                    </div>

                    <div>
                      <label htmlFor="customerName" className="block text-xs font-medium text-stone-300 mb-1">
                        ชื่อ-นามสกุล / ผู้ติดต่อ <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="customerName"
                        name="fullName"
                        autoComplete="name"
                        type="text"
                        required
                        value={customerData.name}
                        onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                        placeholder="คุณวิทวัส แสนสุข"
                        className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="customerPhone" className="block text-xs font-medium text-stone-300 mb-1">
                        เบอร์โทรศัพท์ <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="customerPhone"
                        name="phone"
                        autoComplete="tel"
                        type="tel"
                        required
                        value={customerData.phone}
                        onChange={(e) => {
                          setCustomerData({ ...customerData, phone: e.target.value });
                          setCheckoutPhoneError('');
                        }}
                        placeholder="086-026-6668"
                        className={`w-full px-3 py-2 rounded-xl bg-stone-900 border text-white text-xs focus:outline-none ${
                          checkoutPhoneError ? 'border-red-500 focus:border-red-500' : 'border-stone-700 focus:border-amber-500'
                        }`}
                      />
                      {checkoutPhoneError && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{checkoutPhoneError}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="customerEmail" className="block text-xs font-medium text-stone-300 mb-1">
                        อีเมล (สำหรับรับใบเสนอราคา/ใบเสร็จ)
                      </label>
                      <input
                        id="customerEmail"
                        name="email"
                        autoComplete="email"
                        type="email"
                        value={customerData.email}
                        onChange={(e) => {
                          setCustomerData({ ...customerData, email: e.target.value });
                          setCheckoutEmailError('');
                        }}
                        placeholder="customer@domain.com"
                        className={`w-full px-3 py-2 rounded-xl bg-stone-900 border text-white text-xs focus:outline-none ${
                          checkoutEmailError ? 'border-red-500 focus:border-red-500' : 'border-stone-700 focus:border-amber-500'
                        }`}
                      />
                      {checkoutEmailError && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{checkoutEmailError}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="customerCompany" className="block text-xs font-medium text-stone-300 mb-1">
                        ชื่อบริษัท / ร้านค้า (ถ้ามี)
                      </label>
                      <input
                        id="customerCompany"
                        name="organization"
                        autoComplete="organization"
                        type="text"
                        value={customerData.company}
                        onChange={(e) => setCustomerData({ ...customerData, company: e.target.value })}
                        placeholder="Château Cafe & Bistro"
                        className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="customerAddress" className="block text-xs font-medium text-stone-300 mb-1">
                        ที่อยู่จัดส่ง / หน้างาน
                      </label>
                      <textarea
                        id="customerAddress"
                        name="streetAddress"
                        autoComplete="street-address"
                        rows={2}
                        value={customerData.address}
                        onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                        placeholder="บ้านเลขที่, ถนน, ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์"
                        className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="customerPurpose" className="block text-xs font-medium text-stone-300 mb-1">
                        วัตถุประสงค์การใช้งาน
                      </label>
                      <select
                        id="customerPurpose"
                        name="purpose"
                        value={customerData.purpose}
                        onChange={(e) => setCustomerData({ ...customerData, purpose: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-500 focus:outline-none"
                      >
                        <option value="บ่มไวน์ / แอลกอฮอล์คราฟต์">บ่มไวน์ / แอลกอฮอล์คราฟต์</option>
                        <option value="ตกแต่งร้านอาหาร / คาเฟ่ / รีสอร์ท">ตกแต่งร้านอาหาร / คาเฟ่ / รีสอร์ท</option>
                        <option value="ทำโต๊ะบาร์ / เฟอร์นิเจอร์สั่งทำ">ทำโต๊ะบาร์ / เฟอร์นิเจอร์สั่งทำ</option>
                        <option value="สะสมส่วนตัว / อื่นๆ">สะสมส่วนตัว / อื่นๆ</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="customerNotes" className="block text-xs font-medium text-stone-300 mb-1">
                        หมายเหตุเพิ่มเติม
                      </label>
                      <input
                        id="customerNotes"
                        name="notes"
                        type="text"
                        value={customerData.notes}
                        onChange={(e) => setCustomerData({ ...customerData, notes: e.target.value })}
                        placeholder="เช่น ต้องการให้ออกใบกำกับภาษี หรือจัดส่งวันเสาร์"
                        className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    {/* Summary in checkout */}
                    <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-xs space-y-1">
                      <div className="flex justify-between text-stone-400">
                        <span>จำนวนสินค้ารวม</span>
                        <span>{totalItemCount} รายการ</span>
                      </div>
                      <div className="flex justify-between text-stone-100 font-bold">
                        <span>ยอดชำระโดยประมาณ (รวม VAT 7%)</span>
                        <span className="text-amber-400 font-mono text-sm">฿{grandTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    {checkoutApiError && (
                      <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-red-300 text-xs flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <span>{checkoutApiError}</span>
                          <div className="mt-2 flex gap-2">
                            <button
                              type="submit"
                              className="px-3 py-1 bg-red-800 hover:bg-red-700 text-white rounded text-[11px] font-semibold"
                            >
                              ลองใหม่อีกครั้ง
                            </button>
                            <a
                              href={`tel:${PHONE_1_RAW}`}
                              className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-[11px] font-semibold"
                            >
                              โทร {PHONE_1_DISPLAY}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold text-xs tracking-wide shadow-lg disabled:opacity-50 transition flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>กำลังประมวลผลคำสั่งซื้อ...</span>
                        </>
                      ) : orderMode === 'purchase' ? (
                        'ยืนยันการสั่งซื้อสินค้า'
                      ) : (
                        'ยืนยันขอใบเสนอราคาอย่างเป็นทางการ'
                      )}
                    </button>
                  </form>
                )}

                {cartTab === 'quote_success' && (
                  <div className="py-8 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 shadow-xl">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-xs text-amber-400 font-mono font-bold">
                        เลขที่เอกสาร: {quoteNumber}
                      </div>
                      <h4 className="text-lg font-bold text-white mt-1">
                        {orderMode === 'purchase' ? 'บันทึกคำสั่งซื้อเรียบร้อยแล้ว' : 'สร้างใบเสนอราคาสำเร็จ'}
                      </h4>
                      <p className="text-xs text-stone-400 max-w-xs mx-auto mt-2 leading-relaxed">
                        เจ้าหน้าที่ {BRAND_NAME} ได้รับข้อมูลเรียบร้อยแล้ว และจะติดต่อกลับเพื่อยืนยันรายการจัดส่งทันที
                      </p>
                    </div>

                    <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800 text-left text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="text-stone-400">ผู้สั่งซื้อ:</span>
                        <span className="text-white font-medium">{customerData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">เบอร์โทร:</span>
                        <span className="text-white font-mono">{customerData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">ยอดรวม:</span>
                        <span className="text-amber-400 font-bold font-mono">฿{grandTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <a
                        href={`https://line.me/R/ti/p/@fhu6688s?text=${encodeURIComponent(
                          `สวัสดีครับ แจ้งคำสั่งซื้อถังไวน์ไม้โอ๊คฝรั่งเศส (เลขที่ ${quoteNumber})\nผู้สั่ง: ${customerData.name} เบอร์ ${customerData.phone}\nยอดรวม: ฿${grandTotal.toLocaleString()} (${totalItemCount} รายการ)`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white text-xs font-bold transition flex items-center justify-center gap-2"
                      >
                        <LineIcon className="w-4 h-4" />
                        <span>เปิดคุย LINE ส่งออเดอร์ให้เจ้าหน้าที่</span>
                      </a>

                      <button
                        onClick={() => window.print()}
                        className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-xs font-semibold transition flex items-center justify-center gap-1.5"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>พิมพ์ใบเสร็จ / ใบเสนอราคานี้</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer (When viewing cart items) */}
              {cartTab === 'cart' && cart.length > 0 && (
                <div className="p-4 sm:p-5 border-t border-stone-800 bg-stone-900/60 space-y-3">
                  <div className="flex justify-between text-xs text-stone-400">
                    <span>ยอดรวมสินค้า ({totalItemCount} รายการ)</span>
                    <span className="text-stone-200 font-mono">฿{grandTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white border-t border-stone-800 pt-2">
                    <span>ยอดสุทธิ (รวม VAT 7%)</span>
                    <span className="text-amber-400 font-mono text-lg">฿{grandTotal.toLocaleString()}.-</span>
                  </div>

                  <button
                    onClick={() => setCartTab('checkout')}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-950/60 transition flex items-center justify-center gap-2"
                  >
                    <span>ดำเนินการสั่งซื้อ / ขอใบเสนอราคา</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
