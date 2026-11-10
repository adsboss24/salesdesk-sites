'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  TrendingUp, 
  CheckCircle2, 
  PhoneCall,
  AlertTriangle,
  XCircle,
  Star,
  ChevronDown,
  RotateCcw,
  Check,
  Award,
  Layers,
  HeartHandshake,
  Target,
  BarChart3,
  Flame,
  Activity,
  Cpu
} from 'lucide-react';
import PremiumFooter from '@/components/Footer';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'service' | 'shop' | 'property' | 'insurance' | 'course'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const projects = [
    {
      id: 'benz-ttc-ubon',
      category: 'service',
      tag: 'Luxury Automotive & AMG Specialist',
      badgeColor: 'border-amber-400/40 text-amber-300',
      title: 'ICE LUXURY AUTO',
      subtitle: 'Certified Mercedes-Benz & AMG Performance Specialist',
      desc: 'เซลเพจมาตรฐาน SalesDesk Salepage Architect ระดับ Ultra Luxury สำหรับที่ปรึกษายนตรกรรม Mercedes-Benz, Mercedes-AMG และ smart EV ถ่ายทอดความสง่างามด้วยภาพ 16:9 ดาร์กโหมดไร้ข้อความบดบังตัวรถ พร้อมระบบจองสิทธิ์ทดลองขับ Test Drive ถึงหน้าบ้าน แคตตาล็อกโมเดลยอดนิยม และแคมเปญข้อเสนอสุด Exclusive',
      image: '/images/benz/hero-benz.jpg',
      url: '/ice-benz-ttc-ubon',
      accentColor: 'hover:border-amber-400/50',
      btnBg: 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-bold',
      features: [
        'สถาปัตยกรรม Cinematic 16:9 ไร้ข้อความบดบังตัวรถ Mercedes-Benz & AMG บนมือถือ',
        'ระบบลงทะเบียนจองสิทธิ์ Test Drive ส่งรถถึงหน้าบ้าน และประเมิน Trade-in รถเก่า',
        'แคมเปญดอกเบี้ยพิเศษ 0% ฟรี MBSP นาน 5 ปี และเชื่อมต่อแชต Facebook Page โดยตรง',
      ],
    },
    {
      id: 'ambulance',
      category: 'service',
      tag: 'Emergency Medical & Ambulance 24H',
      badgeColor: 'border-red-500/40 text-red-300',
      title: 'ศูนย์บริการรถพยาบาล 24 ชั่วโมง',
      subtitle: 'บริการรถพยาบาลเอกชน รับ-ส่ง เคลื่อนย้ายผู้ป่วยทั่วไทย',
      desc: 'เซลเพจมาตรฐาน SalesDesk Salepage Architect สำหรับศูนย์บริการรถพยาบาลเอกชน 24 ชม. ถ่ายทอดความน่าเชื่อถือระดับ Mobile ICU ด้วยภาพ Cinematic 16:9 ไร้ข้อความบดบังบนมือถือ พร้อมระบบประเมินค่าเดินทาง ฟอร์มจองรถด่วน และปุ่มโทรสายด่วนฉุกเฉิน 24 ชม.',
      image: '/images/ambulance/ambulance-hero-bright.jpg',
      url: '/ambulance-24hr',
      accentColor: 'hover:border-red-500/50',
      btnBg: 'bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 hover:from-red-500 hover:to-emerald-400 text-slate-950 font-bold',
      features: [
        'สถาปัตยกรรม Cinematic 16:9 ไร้ข้อความบดบังรถพยาบาลและทีมแพทย์บนมือถือ',
        'ระบบประเมินค่าเดินทาง 6 รูปแบบ (กทม., ฟอกไต, ต่างจังหวัด, Air Ambulance)',
        'ปุ่มโทรฉุกเฉินด่วน 24 ชม. และเชื่อมต่อ LINE OA ประเมินราคาใน 5 นาที',
      ],
    },
    {
      id: 'tandj',
      category: 'shop',
      tag: 'B2B Hospitality & Hotel Bedding',
      badgeColor: 'border-amber-500/40 text-amber-300',
      title: 'T&J BEDDING',
      subtitle: 'ชุดเครื่องนอนโรงแรม รีสอร์ท ส่งตรงจากโรงงาน',
      desc: 'เซลเพจมาตรฐาน SalesDesk Salepage Architect สำหรับโรงงานสิ่งทอและผู้นำเข้าเครื่องนอนโรงแรมกว่า 30 ปี ชูสโลแกน "งบจำกัด จัดให้ได้" พร้อมสเปกหมอนไมโครเจล ผ้าปูริ้วซาติน Topper ผ้าขนหนู และระบบขอใบเสนอราคาส่งด่วน',
      image: '/images/tandj-hero.jpg',
      url: '/tandj-bedding',
      accentColor: 'hover:border-amber-500/50',
      btnBg: 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950',
      features: [
        'สถาปัตยกรรม Cinematic 16:9 ไร้ข้อความบดบังภาพหมอนและเตียงบนมือถือ',
        'ระบบขอใบเสนอราคา & สั่งตัวอย่างผ้าฟรี ภายใน 30 นาที',
        'ตารางเปรียบเทียบ 5 หมวดสินค้า และ 3 แพ็กเกจเซ็ตเปิดโรงแรม',
      ],
    },
    {
      id: 'nattanan',
      category: 'service',
      tag: 'Healthcare & Senior Living',
      badgeColor: 'border-teal-500/40 text-teal-300',
      title: 'ณัฐนันท์ เนอสซิ่งแคร์',
      subtitle: 'บ้านพักผู้สูงอายุ & ศูนย์ฟื้นฟูผู้ป่วยพักฟื้น',
      desc: 'เซลเพจมาตรฐานสากล ถ่ายทอดความอบอุ่น ร่มรื่น และความน่าเชื่อถือด้วยภาพสไตล์ Cinematic สวนญี่ปุ่น พร้อมระบบเลือกแพ็กเกจ ฟอร์มนัดหมายเยี่ยมชม และปุ่มปิดการขายผ่าน LINE',
      image: '/images/nattanan-hero.jpg',
      url: '/nattanan-nursingcare',
      accentColor: 'hover:border-teal-500/50',
      btnBg: 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950',
      features: [
        'โครงสร้าง 16:9 Hero ไม่บังภาพบนมือถือ (Unobstructed View)',
        'ระบบ Lead Capture นัดหมายเข้าชมสถานที่พร้อมบันทึกประวัติ',
        'เชื่อมต่อ LINE OA ทักตรงหาแอดมินปิดการขายได้ทันที',
      ],
    },
    {
      id: 'flower',
      category: 'shop',
      tag: 'Luxury Floral & E-Commerce',
      badgeColor: 'border-rose-500/40 text-rose-300',
      title: 'Flower.com',
      subtitle: 'บูทีกดอกไม้พรีเมียม & บริการจัดส่งด่วน 2 ชม.',
      desc: 'เซลเพจระดับ World-Class โชว์ศิลปะการจัดดอกไม้หรูหรา 16:9 ไม่บังภาพบนมือถือ ผสานระบบฟิลเตอร์คอลเลกชัน ตารางราคาโปร่งใส และฟอร์มสั่งจัดดอกไม้ด่วนพร้อมปิดการขายผ่าน LINE OA',
      image: '/images/flower-hero.jpg',
      url: '/flower',
      accentColor: 'hover:border-rose-500/50',
      btnBg: 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white',
      features: [
        'สถาปัตยกรรม Cinematic 16:9 โชว์ผลงานดอกไม้ 100% บนมือถือ',
        'ระบบฟิลเตอร์แกลเลอรีช่อดอกไม้ & ตารางราคาโปร่งใส 3 ระดับ',
        'ฟอร์มสั่งจัดด่วนและระบบคำนวณราคา ตอบกลับภายใน 10 นาที',
      ],
    },
    {
      id: 'fashion',
      category: 'shop',
      tag: 'Fashion & E-Commerce',
      badgeColor: 'border-amber-500/40 text-amber-300',
      title: 'DADA Lady Jeans',
      subtitle: 'กางเกงยีนส์พรีเมียมทรงสวย เก็บทรงเป๊ะ',
      desc: 'เซลเพจสั่งซื้อสินค้าหน้าเดียว (One-Page Shop) ตอบโจทย์แม่ค้าออนไลน์ มีตารางเทียบไซส์ เอว/สะโพก ระบบเลือกสี และฟอร์มสั่งซื้อเก็บเงินปลายทาง ไม่ต้องตอบไซส์ซ้ำๆ',
      image: '/images/fashion-hero.jpg',
      url: '/fashion-jeans',
      accentColor: 'hover:border-amber-500/50',
      btnBg: 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950',
      features: [
        'ตารางขนาดกางเกงยีนส์เทียบไซส์ S ถึง 2XL ชัดเจน',
        'แพ็กเกจโปรโมชัน 1 ตัว, 2 ตัวสุดคุ้ม และ 3 ตัวแถมเข็มขัด',
        'ฟอร์มสั่งซื้อด่วนแบบเก็บเงินปลายทาง (COD) ปิดการขายทันที',
      ],
    },
    {
      id: 'property',
      category: 'property',
      tag: 'Luxury Real Estate',
      badgeColor: 'border-emerald-500/40 text-emerald-300',
      title: 'The Grand Residence',
      subtitle: 'Ultra Luxury Modern Tropical Pool Villa',
      desc: 'เว็บไซต์สำหรับโครงการบ้านหรูและพูลวิลล่าระดับมาสเตอร์พีซ โชว์ภาพสถาปัตยกรรมสุดอลังการ รายละเอียดพื้นที่ 680 ตร.ม. พร้อมระบบลงทะเบียนจอง Private Viewing VIP',
      image: '/images/property-hero.jpg',
      url: '/property-luxury',
      accentColor: 'hover:border-emerald-500/50',
      btnBg: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950',
      features: [
        'โชว์ฟังก์ชัน 5 ห้องนอน 6 ห้องน้ำ และสระว่ายน้ำส่วนตัว',
        'ขอรับ E-Brochure และ Floor Plan รายละเอียดโครงการ',
        'ระบบนัดหมายเข้าชมโครงการแบบไพรเวทเฉพาะบุคคล',
      ],
    },
    {
      id: 'insurance',
      category: 'insurance',
      tag: 'Financial & Wealth Protection',
      badgeColor: 'border-sky-500/40 text-sky-300',
      title: 'คุณปรียาพร (MDRT Advisor)',
      subtitle: 'ที่ปรึกษาการเงินและวางแผนประกันชีวิตเฉพาะบุคคล',
      desc: 'เซลเพจสร้างความน่าเชื่อถือระดับมืออาชีพสำหรับตัวแทนประกันชีวิต ชูคุณวุฒิระดับสากล MDRT ตารางเปรียบเทียบแผนประกันสุขภาพเหมาจ่าย 5-30 ล้าน และฟอร์มคำนวณเบี้ยเฉพาะบุคคล',
      image: '/images/insurance-hero.jpg',
      url: '/insurance-advisor',
      accentColor: 'hover:border-sky-500/50',
      btnBg: 'bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white',
      features: [
        'ชูประวัติและความเชี่ยวชาญดูแลกว่า 850 ครอบครัว',
        'ตารางเปรียบเทียบ 3 แผนความคุ้มครองที่ตอบโจทย์',
        'ฟอร์มขอตารางเบี้ยประกันเฉพาะบุคคล ส่งตรงเข้า LINE ทันที',
      ],
    },
    {
      id: 'course',
      category: 'course',
      tag: 'Online Course & Education',
      badgeColor: 'border-purple-500/40 text-purple-300',
      title: 'AI Business Masterclass',
      subtitle: 'ปลดล็อกยอดขาย 10 เท่า ด้วยระบบ AI อัตโนมัติ',
      desc: 'เซลเพจขายคอร์สเรียนออนไลน์สไตล์ High-Conversion จัดเต็มโครงสร้าง 6 โมดูล สารบัญบทเรียน รีวิวผลลัพธ์นักเรียนจริง และฟอร์มสมัครสิทธิ์ Early Bird ลด 60%',
      image: '/images/course-hero.jpg',
      url: '/online-course',
      accentColor: 'hover:border-purple-500/50',
      btnBg: 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white',
      features: [
        'โครงสร้างสารบัญ 6 โมดูล 12 ชั่วโมงเต็ม',
        'ชูข้อเสนอพิเศษ Early Bird นับถอยหลังสิทธิ์ราคาพิเศษ',
        'ฟอร์มลงทะเบียนสมัครเรียนพร้อมดึงเข้ากลุ่ม VIP ทันที',
      ],
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const reviews = [
    {
      name: 'คุณนพวรรณ เจริญสุข',
      role: 'เจ้าของแบรนด์แฟชั่น DADA Jeans',
      rating: 5,
      comment: 'เมื่อก่อนยิงแอดเข้าอินบ็อกซ์ ตอบไซส์ลูกค้าจนหมดวัน ปิดได้วันละไม่กี่ตัว พอเปลี่ยนมาใช้เซลเพจสั่งซื้อหน้าเดียวของ SalesDesk AI ลูกค้ากดเลือกไซส์ กรอกชื่อที่อยู่ แล้วเลือก COD จบเองเลย ยอดขายโตขึ้น 3 เท่าในเดือนเดียว คุ้มค่ามากค่ะ!',
      metric: 'ยอดขายเพิ่มขึ้น +340%',
    },
    {
      name: 'นพ. วิศรุต สิริวัฒนา',
      role: 'ผู้อำนวยการ ณัฐนันท์ เนอสซิ่งแคร์',
      rating: 5,
      comment: 'ธุรกิจศูนย์ดูแลผู้สูงอายุต้องการความน่าเชื่อถือสูงมาก ดีไซน์แบบ Cinematic สวนญี่ปุ่นทำให้ญาติผู้ป่วยประทับใจตั้งแต่ 3 วินาทีแรก ฟอร์มนัดหมายเข้าชมทำงานดีมาก ลีดเข้ามามีคุณภาพและพร้อมตัดสินใจจริง',
      metric: 'ยอดนัดเข้าชมสถานที่ +500%',
    },
    {
      name: 'คุณปรียาพร ภักดีชน',
      role: 'Top MDRT Financial Advisor',
      rating: 5,
      comment: 'ในฐานะตัวแทนประกัน ภาพลักษณ์คือทุกอย่าง เซลเพจช่วยคัดกรองลูกค้าที่มีกำลังซื้อสูง เครื่องมือคำนวณเบี้ยทำให้ลูกค้าทักเข้ามาพร้อมข้อมูลครบถ้วน ปิดเคสเบี้ยหลักแสนได้ง่ายขึ้นเยอะเลยค่ะ',
      metric: 'อัตราการปิดเคสสำเร็จ 78%',
    },
    {
      name: 'คุณธีรภัทร อัครเดชากุล',
      role: 'เจ้าของโครงการ The Grand Villa',
      rating: 5,
      comment: 'บ้านราคา 30-40 ล้าน ยิงแอดแบบเดิมยากมาก พอได้เซลเพจที่ถ่ายทอดความลักชัวรีและฟอร์มนัดหมายแบบ Private Viewing ลูกค้าระดับ VIP ทักเข้ามานัดตรวจบ้านสม่ำเสมอ ทีมงานแก้ไขงานได้รวดเร็วจนพอใจ 100%',
      metric: 'ปิดการขายวิลล่า 2 หลังใน 45 วัน',
    },
  ];

  const faqs = [
    {
      q: 'ทำไมเซลเพจของ SalesDesk AI ถึงสร้างยอดขายได้ดีกว่าการยิงแอดเข้าแชตเพจโดยตรง?',
      a: 'การยิงแอดเข้าแชต ลูกค้ามักทักมาด้วยคำสั้นๆ เช่น "สนใจค่ะ" แล้วหายไปหากแอดมินตอบช้า แต่เซลเพจ High-Conversion ของเราเรียงลำดับจิตวิทยาครบ: สะดุดตาด้วยภาพ Cinematic 16:9 -> ขยี้ปัญหา -> มอบทางแก้ -> ตารางราคาชัดเจน -> รีวิวสร้างความมั่นใจ -> และฟอร์มสั่งซื้อ/นัดหมาย ลูกค้าจึงตัดสินใจซื้อได้ด้วยตัวเองทันทีตลอด 24 ชม. ไม่ต้องรอแอดมินตอบ',
    },
    {
      q: 'เงื่อนไข "การันตีแก้ไขได้จนกว่าจะพอใจ" มีรายละเอียดอย่างไร?',
      a: 'ในแพ็กเกจ Professional Business ทางทีมงานยินดีปรับแก้ดีไซน์ โทนสี รูปภาพ ข้อความ และแบบฟอร์ม ได้อย่างไม่จำกัดรอบ (Unlimited Revisions) จนกว่าคุณจะพึงพอใจ 100% ก่อนจะทำการเผยแพร่ (Go-Live) สู่โดเมนจริง เพื่อให้มั่นใจได้ว่าคุณได้รับผลงานที่ตรงใจและดีที่สุดสำหรับธุรกิจครับ',
    },
    {
      q: 'ไม่มีรูปภาพสวยๆ หรือเนื้อหามาก่อนเลย ทาง SalesDesk AI จัดการให้ได้ไหม?',
      a: 'ได้แน่นอนครับ! เพียงคุณส่งลิงก์เพจ Facebook, ภาพถ่ายสินค้าจากมือถือ หรือบอกไอเดียธุรกิจของคุณมา ทีมงานและระบบ AI จะช่วยสร้างภาพกราฟิกความละเอียดสูงระดับ Cinematic 16:9 เขียนข้อความพาดหัวขาย และวางโครงสร้างให้เสร็จสมบูรณ์ตั้งแต่ต้นจนจบ',
    },
    {
      q: 'สามารถติดตั้ง Tracking สำหรับยิงแอด (Meta Pixel, TikTok Pixel, Google Analytics, LINE Tag) ได้หรือไม่?',
      a: 'รองรับครบวงจร 100% ครับ! เราติดตั้ง Google Tag Manager (GTM), Google Analytics 4 (GA4), Meta Pixel พร้อม Conversions API (CAPI), TikTok Pixel, และ LINE Tag ให้ครบทุกแพลตฟอร์ม พร้อมตั้งค่า Custom Events เช่น ปุ่มกดแอดไลน์, ปุ่มโทรออก, ฟอร์มส่ง Lead, หยิบใส่ตะกร้า, และยอดสั่งซื้อ COD เพื่อให้ระบบ AI โฆษณานำส่งแอดได้อย่างแม่นยำ และรองรับการทำ Retargeting ตามลูกค้าเก่าได้เต็มประสิทธิภาพครับ',
    },
    {
      q: 'ใช้เวลาจัดทำกี่วันถึงจะเสร็จพร้อมใช้งาน?',
      a: 'รวดเร็วเป็นพิเศษครับ! โครงสร้างเวอร์ชันแรกจะส่งมอบให้คุณตรวจสอบภายใน 24-48 ชั่วโมง และหลังจากการปรับแก้ตามที่คุณต้องการ ก็สามารถเชื่อมต่อโดเมนและเปิดใช้งานเพื่อยิงแอดสร้างยอดขายได้ทันทีครับ',
    },
    {
      q: 'มีค่าบริการแอบแฝงรายเดือน หรือค่าธรรมเนียมอื่นเพิ่มเติมหรือไม่?',
      a: 'ไม่มีค่าบริการแอบแฝงใดๆ ทั้งสิ้นครับ! ค่าบริการเป็นแบบจ่ายครั้งเดียวจบ รวมบริการโฮสติ้งความเร็วสูงมาตรฐานระดับสากลและใบรับรองความปลอดภัย SSL ฟรี 1 ปีเต็ม สบายใจได้ 100% ครับ',
    },
  ];

  const siteUrl = 'https://salesdesk-sites.vercel.app';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#organization`,
        name: 'SalesDesk Sites',
        alternateName: 'SalesDesk AI',
        url: siteUrl,
        logo: `${siteUrl}/images/salesdesk-logo-square.png`,
        image: `${siteUrl}/images/hero-desktop.png`,
        description: 'สตูดิโอออกแบบเว็บไซต์และเซลเพจพรีเมียมด้วย AI โครงสร้างจิตวิทยาปิดการขาย Cinematic Hero โหลดเร็ว 0.8 วิ รองรับมือถือ 100% พร้อมระบบ Conversion Tracking ครบวงจร',
        telephone: '+66817726444',
        priceRange: '฿2,990 - ฿9,900',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'อาคาร SalesDesk AI Headquarters (สาขาหลัก)',
          addressLocality: 'อำเภอเมืองศรีสะเกษ',
          addressRegion: 'จังหวัดศรีสะเกษ',
          postalCode: '33000',
          addressCountry: 'TH',
        },
        department: [
          {
            '@type': 'ProfessionalService',
            name: 'SalesDesk Sites Creative & AI Studio (สาขากรุงเทพฯ)',
            telephone: '+66817726444',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'อาคาร SalesDesk AI Tower ชั้น 18 เลขที่ 88/1 ถนนรัชดาภิเษก',
              addressLocality: 'แขวงดินแดง เขตดินแดง',
              addressRegion: 'กรุงเทพมหานคร',
              postalCode: '10400',
              addressCountry: 'TH',
            },
          },
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 13.765,
          longitude: 100.57,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
        sameAs: ['https://line.me/R/ti/p/@fhu6688s'],
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">
      
      {/* Advanced JSON-LD Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-900 text-teal-100 text-xs py-2 px-4 border-b border-teal-800/40 text-center font-medium">
        <span>🚀 ขับเคลื่อนด้วย SalesDesk AI Engine • เซลเพจปิดการขายระดับพรีเมียม โครงสร้าง SEO ดันติดหน้า 1 Google • ส่งงานใน 24-48 ชม.</span>
      </div>

      {/* 2. HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          
          {/* Logo SalesDesk AI */}
          <div className="flex items-center gap-3">
            <Image 
              src="/images/salesdesk-logo-square.png" 
              alt="SalesDesk AI Logo" 
              width={40}
              height={40}
              priority
              className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-teal-500/20 bg-slate-900 border border-slate-700/60 p-1 shrink-0" 
            />
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-white block leading-tight">
                SalesDesk <span className="text-teal-400">Sites</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
                Psychological Salepage Studio
              </span>
            </div>
          </div>

          {/* Nav Links & CTA */}
          <div className="flex items-center gap-3">
            <a 
              href="#pricing"
              className="hidden md:inline-block text-xs font-semibold text-slate-300 hover:text-white transition px-3 py-2"
            >
              แพ็กเกจราคา
            </a>
            <Link 
              href="/blog"
              className="hidden sm:inline-block text-xs font-semibold text-teal-300 hover:text-white transition px-3 py-2"
            >
              บทความ & ความรู้
            </Link>
            <a 
              href="#tracking"
              className="hidden lg:inline-block text-xs font-semibold text-slate-300 hover:text-white transition px-3 py-2"
            >
              ระบบ Tracking & แอด
            </a>
            <a 
              href="#faqs"
              className="hidden sm:inline-block text-xs font-semibold text-slate-300 hover:text-white transition px-3 py-2"
            >
              คำถามที่พบบ่อย
            </a>
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-teal-500/20 transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>ขอตัวอย่างฟรีใน LINE</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SHOWCASE: SALESDESK SALEPAGE ARCHITECT (40-50% Left Text, Zero Obstruction on Right) */}
      <section className="relative min-h-[92vh] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-between sm:justify-center overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed 16:9 Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-desktop.png"
            alt="SalesDesk Sites Hero — สตูดิโอออกแบบเว็บไซต์และเซลเพจปิดการขายสไตล์ Cinematic"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[78%_center] lg:object-right brightness-105 contrast-[1.02] transition-all duration-700"
          />
          
          {/* Desktop Left Scrim: Darkens left 48% for 100% white text contrast, leaving right 52% completely bright */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 via-48% to-transparent pointer-events-none" />
          
          {/* Mobile Multi-Layer Scrim: Top scrim for headline, crystal clear middle, bottom scrim for buttons */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/50 via-25% to-transparent pointer-events-none" />
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/90 via-50% to-transparent pointer-events-none" />
          
          {/* Desktop Bottom Edge Fade */}
          <div className="hidden lg:block absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-16 pb-4 sm:pb-8 lg:py-24 relative z-10 w-full flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column (Strictly 40-50% on Desktop, Text Left) */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-3.5 sm:space-y-6 text-center lg:text-left">
              
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-950/85 border border-teal-500/40 text-teal-300 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md shadow-md shadow-slate-950/50">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
                <span>High-Converting Psychological Salepage Architecture</span>
              </div>

              {/* Main Headline (Multi-tier drop shadows, perfect natural wrap) */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.2] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                เปลี่ยนคนเห็นแอด <br />
                ให้เป็นลูกค้าโอนเงินทันที <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300 inline-block mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  ด้วยเซลเพจปิดการขายตามหลักจิตวิทยาขั้นสูง
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                หยุดเสียเงินยิงแอดเข้าแชตที่ทักแล้วเงียบหาย! ยกระดับธุรกิจด้วยเซลเพจโหลดเร็ว <strong className="text-teal-300 font-bold">0.8 วิ</strong> โครงสร้างร้อยเรียงอารมณ์เพื่อปิดการขายอัตโนมัติ <strong className="text-amber-300 font-bold">24 ชม.</strong> พร้อมการันตีแก้ไขได้จนกว่าจะพอใจ
              </p>

              {/* Desktop-only CTAs (Rendered directly under subheadline on desktop) */}
              <div className="hidden lg:flex flex-row items-center justify-start gap-3 pt-2">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/25 transition active:scale-95 cursor-pointer"
                >
                  <span>ดูแพ็กเกจราคาเริ่มต้น ฿2,990</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 backdrop-blur-md transition cursor-pointer"
                >
                  <span>ชมตัวอย่างจริง 5 หมวดหมู่</span>
                </a>
              </div>

              {/* Micro Trust Indicators (Desktop) */}
              <div className="hidden lg:flex items-center gap-5 text-xs text-slate-200 pt-1 font-medium">
                <div className="flex items-center gap-1.5 drop-shadow">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>การันตีแก้ไขจนกว่าจะพอใจ</span>
                </div>
                <div className="flex items-center gap-1.5 drop-shadow">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>จัดทำตัวอย่างฟรีให้ชมก่อน</span>
                </div>
                <div className="flex items-center gap-1.5 drop-shadow">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ส่งมอบงานใน 24-48 ชม.</span>
                </div>
              </div>

            </div>

            {/* Right Column: Kept completely empty on Desktop so the characters, robot, and AI holograms shine 100% unobstructed! */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

          </div>

          {/* Bottom Block: Mobile Action CTAs + 4 Glassmorphic Feature Badges */}
          <div className="mt-4 sm:mt-12">
            
            {/* Mobile-only CTAs (Rendered at bottom of hero, keeping middle photo 100% open) */}
            <div className="lg:hidden space-y-2 mb-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="#pricing"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-slate-950 font-black text-sm shadow-lg shadow-teal-500/25 active:scale-95"
                >
                  <span>ดูแพ็กเกจราคาเริ่มต้น ฿2,990</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 text-white font-medium text-sm border border-white/20 backdrop-blur-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-teal-400" /> ขอตัวอย่างฟรีใน LINE
                </a>
              </div>

              {/* Micro Trust (Mobile) */}
              <div className="flex items-center justify-center gap-3 text-[11px] text-slate-200 pt-1 font-medium">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> แก้ไขจนพอใจ</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-amber-400" /> ชมตัวอย่างฟรีก่อน</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-teal-400" /> ส่งงานใน 24-48 ชม.</span>
              </div>
            </div>

            {/* 4 Glassmorphic Feature Badges (Desktop & Mobile) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10">
              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-2.5 sm:p-4 backdrop-blur-md hover:border-teal-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-teal-500/20 text-teal-300 shrink-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">ด้วยเทคโนโลยี่ AI</h4>
                    <p className="text-[10px] sm:text-xs text-slate-300">โหลดไว 0.8 วิ</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-2.5 sm:p-4 backdrop-blur-md hover:border-teal-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
                    <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Cinematic 16:9</h4>
                    <p className="text-[10px] sm:text-xs text-slate-300">ไม่บังภาพบนมือถือ 100%</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-2.5 sm:p-4 backdrop-blur-md hover:border-teal-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">SEO & Full Tracking</h4>
                    <p className="text-[10px] sm:text-xs text-slate-300">ติดหน้า 1 Google • GTM & CAPI</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-2.5 sm:p-4 backdrop-blur-md hover:border-teal-500/40 transition">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/20 text-purple-300 shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">การันตีพอใจ</h4>
                    <p className="text-[10px] sm:text-xs text-slate-300">ปรับแก้ไม่อั้นก่อนขึ้นจริง</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 4. THE PAIN POINTS VS THE SOLUTION (จิตวิทยาขยี้ปัญหาและทางแก้) */}
      <section className="py-16 md:py-24 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest bg-rose-950/80 px-3 py-1 rounded-full border border-rose-500/30">
              The Reality of Online Sales
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              ทำไมธุรกิจ 90% ยิงแอดแล้ว "ขาดทุน" หรือ "กำไรหด"?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              หากคุณยังพึ่งพาการยิงแอดส่งคนเข้าแชต Facebook หรือ LINE ตรงๆ นี่คือต้นเหตุที่เงินค่าโฆษณาของคุณรั่วไหลทุกวัน
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* The Old Painful Way */}
            <div className="bg-gradient-to-b from-rose-950/30 to-slate-950 border border-rose-900/40 rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">วิธีเดิม: ยิงแอดเข้าแชตโดยตรง</h3>
                  <p className="text-xs text-rose-300">ค่าแอดแพง ปิดการขายยาก แอดมินเหนื่อยล้า</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>คนทัก 100 ตอบ 10 ปิดได้ 1:</strong> ลูกค้าทักมาแล้วเงียบหาย แอดมินตอบช้า 3 นาที ลูกค้าเปลี่ยนใจไปซื้อร้านอื่น</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>ต้องตอบคำถามเดิมซ้ำๆ ทั้งวัน:</strong> "มีไซส์ไหม", "ราคาเท่าไหร่", "ส่งของกี่วัน" เสียเวลาและพลังงานมหาศาล</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>ขาดความน่าเชื่อถือ:</strong> ร้านค้าไม่มีเว็บไซต์อย่างเป็นทางการ ดูไม่มั่นคง ลูกค้าไม่กล้าโอนยอดใหญ่</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>จ้างทำเว็บทั่วไปราคาแพงเกินจริง:</strong> เอเจนซีคิด 30,000 - 50,000 บาท ใช้เวลาทำ 2 เดือน ได้เว็บโหลดช้า ใช้งานจริงไม่ได้</span>
                </li>
              </ul>
            </div>

            {/* The SalesDesk AI Solution */}
            <div className="bg-gradient-to-b from-teal-950/30 to-slate-950 border border-teal-500/40 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl shadow-teal-500/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">ทางออกใหม่: SalesDesk AI Salepage</h3>
                  <p className="text-xs text-teal-300">ระบบปิดการขายอัตโนมัติ โหลดไวระดับ 0.8 วินาที</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>ลูกค้ากดสั่งซื้อหรือจองเองใน 1 นาที:</strong> ดูรูป เช็คไซส์ เลือกโปรโมชั่น กรอกที่อยู่ และเลือกเก็บเงินปลายทางได้จบในหน้าเดียว</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>ดีไซน์ระดับสากล ไม่บังภาพบนมือถือ:</strong> สถาปัตยกรรม Cinematic 16:9 สวยหรู เพิ่มมูลค่าแบรนด์ขึ้นทันที 3-5 เท่า</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>เชื่อมต่อแชต LINE OA & แจ้งเตือนออเดอร์ทันที:</strong> ทันทีที่ลูกค้ากรอกข้อมูล ข้อมูลส่งตรงเข้ามือถือแอดมินพร้อมปิดยอด</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>หมัดเด็ด Technical SEO & Schema เต็มระบบ:</strong> สถาปัตยกรรม Next.js โหลดไว 0.8 วิ พร้อม JSON-LD Schema ดันอันดับติดหน้าแรก Google และลดค่าคลิก Google Ads สูงสุด 40%</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>ราคาจับต้องได้ เริ่มต้นเพียง ฿2,990:</strong> จัดทำตัวอย่างให้ชมฟรีก่อนตัดสินใจ และการันตีแก้ไขได้จนกว่าจะพอใจ 100%</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-16 md:py-24 bg-slate-950 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30">
              Live Showcase Demos
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              ตัวอย่างเว็บไซต์และเซลเพจ 5 หมวดหมู่ยอดนิยม
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              คลิกเปิดชมหน้าเว็บจริงบนมือถือเพื่อสัมผัสความเร็วและการจัดวางตามหลักจิตวิทยาปิดการขาย
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { key: 'all', label: 'ทั้งหมด' },
              { key: 'service', label: '🏥 ธุรกิจบริการ' },
              { key: 'shop', label: '🛍️ สั่งซื้อสินค้าหน้าเดียว' },
              { key: 'property', label: '🏡 อสังหาริมทรัพย์' },
              { key: 'insurance', label: '🛡️ ตัวแทนประกันชีวิต' },
              { key: 'course', label: '🎓 คอร์สออนไลน์' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === tab.key
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-lg shadow-teal-500/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className={`bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl ${project.accentColor} transition-all duration-500 group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Image Preview */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px] overflow-hidden bg-slate-900">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-[78%_center] group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:hidden" />
                    <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border ${project.badgeColor} text-xs px-3 py-1 rounded-full font-semibold`}>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{project.tag}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-teal-400">
                        <Sparkles className="w-4 h-4" />
                        <span>{project.subtitle}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-teal-300 transition">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {project.desc}
                      </p>

                      <ul className="space-y-2 pt-2 text-xs text-slate-300">
                        {project.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl ${project.btnBg} font-bold text-sm shadow-lg transition transform active:scale-95`}
                      >
                        <span>เปิดชมหน้าเว็บตัวอย่างจริง ({project.title})</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CONVERSION TRACKING & AD TECH HIGHLIGHT SECTION (โฟกัสระบบวัดผลโฆษณา & Retargeting) */}
      <section id="tracking" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
              ⚡ Dual-Engine Growth: Advanced Technical SEO + Full-Stack Ad Tech
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              หมัดเด็ด 2 ต่อ: ยิงแอดวันนี้ได้ยอดทันที + โครงสร้าง SEO ติดหน้า 1 Google
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              เซลเพจของเราไม่ได้มีดีแค่ดีไซน์สวย แต่มาพร้อมกับสถาปัตยกรรมระดับ Masterpiece ผสาน <strong>Technical SEO & JSON-LD Schema</strong> ดันอันดับผลการค้นหาธรรมชาติ ควบคู่กับ <strong>Conversion Tracking & CAPI ครบทุกแพลตฟอร์ม</strong> เพื่อให้ยิงแอดแม่นยำ ค่าแอดถูกลง 2-3 เท่า
            </p>
          </div>

          {/* 5 Tech Architecture Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            <div className="bg-gradient-to-b from-emerald-950/40 to-slate-950 border-2 border-emerald-500/40 rounded-2xl p-6 space-y-3 shadow-xl shadow-emerald-500/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="inline-block bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Knockout SEO Feature
              </div>
              <h3 className="text-base font-bold text-white">Technical SEO & Schema JSON-LD</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                ติดตั้งโครงสร้าง <strong>ProfessionalService & FAQPage Schema</strong> ผ่าน <code>@graph</code> เต็มระบบ พร้อม Core Web Vitals 100/100 โหลดไว 0.8 วิ ดันติดหน้าแรก Google และลดค่าคลิก Google Ads ลง 20-40%
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-teal-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">GTM & GA4 เต็มระบบ</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ติดตั้ง <strong>Google Tag Manager (GTM)</strong> ควบคุมทุกแท็กโดยไม่ต้องแก้โค้ดเว็บซ้ำ พร้อม <strong>Google Analytics 4 (GA4)</strong> วิเคราะห์ Customer Journey เชิงลึก
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-teal-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Pixel ครบทุกแพลตฟอร์ม</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ติดตั้ง <strong>Meta Pixel + CAPI</strong> (Server-side API ไม่ตกหล่นจาก iOS), <strong>TikTok Pixel</strong>, และ <strong>LINE Tag</strong> สมบูรณ์แบบทุกแคมเปญ
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-teal-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Custom Event Tracking</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ฝัง Event ละเอียดทุกการคลิก: <strong>คลิกแอดไลน์</strong>, <strong>กดโทร</strong>, <strong>ส่งฟอร์ม Lead</strong>, <strong>สั่งซื้อ COD</strong>, Scroll Depth 50%/100%, และการดูวิดีโอ
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-teal-500/40 transition md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Smart Retargeting 100% & Local SEO</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ส่งข้อมูลสร้าง <strong>Custom Audience & Lookalike</strong> อัตโนมัติ ยิงแอดบรอดแคสต์ซ้ำหาคนที่เกือบซื้อ ดึงยอดขายกลับมาปิดได้ทันที ค่าแอดถูกลง 2-3 เท่า พร้อมรองรับ <strong>Local SEO (NAP Consistency)</strong> ดันขึ้นอันดับแผนที่ Google Maps
              </p>
            </div>

          </div>

          {/* Ad Tech & SEO Integration Badges */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Technical SEO & Schema JSON-LD</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Google Tag Manager (GTM)</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Google Analytics 4 (GA4)</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Meta Pixel & Conversions API (CAPI)</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> TikTok Pixel & Events Builder</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> LINE Tag & Rich Menu Tracking</span>
          </div>

        </div>
      </section>

      {/* 7. PRICING & SERVICE TERMS (แพ็กเกจราคาจับต้องได้ & เน้น Tracking ชัดเจน) */}
      <section id="pricing" className="py-16 md:py-24 bg-slate-900/70 border-y border-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
              Transparent Pricing & Guarantees
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              แพ็กเกจจัดทำเซลเพจในราคาที่จับต้องได้
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              จ่ายครั้งเดียวจบ ไม่มีค่าบริการแอบแฝง พร้อมการันตีความพึงพอใจและเงื่อนไขการแก้ไขงานที่โปร่งใส 100%
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Tier 1: Starter */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition">
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Starter Salepage</span>
                <h3 className="text-xl font-bold text-white">หน้าเดียวจบ เริ่มต้นง่าย</h3>
                <p className="text-xs text-slate-400">เหมาะสำหรับสินค้าเดี่ยว ร้านค้าขนาดเล็ก หรือผู้ที่เริ่มต้นยิงแอด</p>
                
                <div className="pt-2">
                  <span className="text-3xl font-black text-white">฿2,990</span>
                  <span className="text-xs text-slate-400 line-through ml-2">฿5,900</span>
                  <span className="block text-[11px] text-teal-400 font-medium mt-1">ประหยัดทันที 50%</span>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>1 หน้าเซลเพจ Responsive รองรับมือถือ 100%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ฟอร์มสั่งซื้อเก็บเงินปลายทาง (COD) / ติดต่อ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>ติดตั้ง Meta Pixel หรือ LINE Tag สำหรับวัดผล</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>แก้ไขปรับแต่งงานได้ 3 ครั้งเต็ม</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ส่งมอบงานรวดเร็วใน 48 ชม.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ฟรี! โฮสติ้งความเร็วสูงและ SSL 1 ปีเต็ม</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://line.me/R/ti/p/@fhu6688s?text=สนใจแพ็กเกจStarterSalepageครับ" 
                target="_blank" 
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 transition active:scale-95 cursor-pointer"
              >
                <span>เลือกแพ็กเกจ Starter</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Tier 2: Professional (HOT / RECOMMENDED) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-teal-500 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative shadow-2xl shadow-teal-500/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-400 text-slate-950 font-black text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                🔥 แนะนำ ยอดนิยม 85%
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">Professional Business</span>
                <h3 className="text-xl font-bold text-white">Cinematic High-Conversion</h3>
                <p className="text-xs text-slate-300">เหมาะสำหรับแบรนด์ที่ยิงแอดจริงจัง ต้องการปิดการขายสูงสุด</p>
                
                <div className="pt-2">
                  <span className="text-4xl font-black text-white">฿4,990</span>
                  <span className="text-xs text-slate-400 line-through ml-2">฿9,900</span>
                  <span className="block text-[11px] text-emerald-400 font-semibold mt-1">คุ้มค่าที่สุด คืนทุนไวใน 1-2 ออเดอร์</span>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-200">
                  <div className="bg-teal-950/60 p-2.5 rounded-lg border border-teal-500/30 text-teal-200 font-bold text-center">
                    แก้ไขได้จนกว่าจะพอใจ (Unlimited) ก่อนขึ้นจริง
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-emerald-500/30 text-emerald-300 font-bold text-center">
                    Full Tracking: GTM, GA4, Meta Pixel + CAPI, TikTok Pixel, LINE Tag
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-300 font-bold">โครงสร้าง Technical SEO & Schema ติดหน้าแรก Google</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>ด้วยเทคโนโลยี่ AI โหลดไว 0.8 วิ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Google Tag Manager & GA4 เต็มระบบ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Meta Pixel + Conversions API (CAPI)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>TikTok Pixel & LINE Tag Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Custom Events ดัก Retargeting ทุกปุ่ม</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>โครงสร้างจิตวิทยาปิดการขายครบ 8 มิติ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>เชื่อมต่อแชต LINE OA พร้อมข้อความดัก Lead ออโต้</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>ส่งมอบงานรวดเร็วใน 24-48 ชม. ฟรีโฮสติ้ง & SSL 1 ปี</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://line.me/R/ti/p/@fhu6688s?text=สนใจแพ็กเกจProfessionalBusinessครับ" 
                target="_blank" 
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/25 transition active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>เลือกแพ็กเกจ Professional</span>
              </a>
            </div>

            {/* Tier 3: Enterprise */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition">
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Enterprise Platform</span>
                <h3 className="text-xl font-bold text-white">ระบบสั่งทำเฉพาะทาง</h3>
                <p className="text-xs text-slate-400">สำหรับโชว์รูมรถยนต์, พูลวิลล่าหลายยูนิต, แคตตาล็อกขนาดใหญ่</p>
                
                <div className="pt-2">
                  <span className="text-3xl font-black text-white">฿9,900+</span>
                  <span className="text-xs text-slate-400 line-through ml-2">฿19,900</span>
                  <span className="block text-[11px] text-slate-400 mt-1">ประเมินตามขอบเขตงานจริง</span>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-300 font-bold">Full Enterprise SEO Architecture + Multi-Location Schema + Search Console</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ด้วยเทคโนโลยี่ AI โหลดไว 0.8 วิ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Google Tag Manager & GA4 เต็มระบบ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Meta Pixel + Conversions API (CAPI)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>TikTok Pixel & LINE Tag Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Custom Events ดัก Retargeting ทุกปุ่ม</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Server-Side Tracking ขั้นสูง + Custom CRM Webhooks</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ระบบค้นหา / แคตตาล็อกสินค้าหลายหมวดหมู่</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ระบบคำนวณค่างวดไฟแนนซ์ / แบบฟอร์มสัญญาจอง</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ระบบนามบัตรดิจิทัลสำหรับพนักงานขายทุกคน</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>แก้ไขได้ไม่จำกัด พร้อมทีมโปรแกรมเมอร์ดูแลส่วนตัว</strong></span>
                  </div>
                </div>
              </div>

              <a 
                href="https://line.me/R/ti/p/@fhu6688s?text=สนใจแพ็กเกจEnterpriseครับ" 
                target="_blank" 
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 transition active:scale-95 cursor-pointer"
              >
                <span>ปรึกษาประเมินโครงการ</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Risk Reversal Callout */}
          <div className="mt-12 bg-gradient-to-r from-teal-950/60 via-slate-900 to-emerald-950/60 border border-teal-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ทดลองจัดทำตัวอย่างหน้าเว็บจริงให้ชมฟรีก่อนตัดสินใจ!</h4>
                <p className="text-xs text-slate-300">
                  ส่งรูปสินค้าหรือลิงก์เพจของคุณมาในแชต LINE เราจะขึ้นโครงสร้างหน้าเว็บจริงให้คุณตรวจสอบก่อน ไม่ถูกใจไม่ต้องจ่ายเงิน
                </p>
              </div>
            </div>
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=ต้องการให้ทีมงานจัดทำตัวอย่างหน้าเว็บร้านค้าของผมให้ชมฟรีก่อนครับ" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-md cursor-pointer"
            >
              รับสิทธิ์ทำตัวอย่างฟรี
            </a>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER REVIEWS & SOCIAL PROOF */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30">
              Verified Case Studies
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              เสียงยืนยันจากธุรกิจที่เปลี่ยนมาใช้ SalesDesk Sites
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              ผลลัพธ์จริงจากเจ้าของธุรกิจที่เพิ่มยอดขายและลดค่าแอดได้สำเร็จ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-500/30">
                    {rev.metric}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                    <p className="text-xs text-slate-400">{rev.role}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQS */}
      <section id="faqs" className="py-16 md:py-24 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              คำถามที่พบบ่อย (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              ตอบทุกข้อสงสัยอย่างโปร่งใส เพื่อให้คุณตัดสินใจได้อย่างมั่นใจที่สุด
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-teal-300 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-teal-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="py-20 bg-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
          <Image 
            src="/images/salesdesk-logo-square.png" 
            alt="SalesDesk AI Logo" 
            width={56}
            height={56}
            className="w-14 h-14 rounded-2xl object-contain mx-auto shadow-lg shadow-teal-500/20 bg-slate-900 border border-slate-700/60 p-1.5" 
          />
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            พร้อมเปลี่ยนเงินค่าแอด ให้เป็นยอดขายเข้าบัญชีหรือยังครับ?
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            ส่งข้อมูลร้านค้าของคุณมาใน LINE เพื่อรับสิทธิ์จัดทำโครงสร้างตัวอย่างฟรี <br className="hidden sm:inline" />
            ทีมงานและระบบ SalesDesk AI พร้อมส่งมอบงานคุณภาพสูงภายใน 24-48 ชม.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-black text-base shadow-xl shadow-teal-500/25 transition transform active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>แอดไลน์ปรึกษา & ขอตัวอย่างฟรี (@fhu6688s)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. LUXURY MASTER FOOTER */}
      <PremiumFooter />

    </div>
  );
}
