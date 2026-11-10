'use client';

import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  PhoneCall,
  HeartHandshake
} from 'lucide-react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'service' | 'shop' | 'property' | 'insurance' | 'course'>('all');

  const projects = [
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
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-900 text-teal-100 text-xs py-2 px-4 border-b border-teal-800/40 text-center font-medium">
        <span>🚀 ขับเคลื่อนด้วย SalesDesk AI Engine • สร้างเซลเพจปิดการขายระดับพรีเมียม ส่งมอบงานรวดเร็วใน 24 ชม.</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-teal-500/20">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white block leading-tight">
                SalesDesk <span className="text-teal-400">Sites</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
                AI Salepage Studio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-teal-500/20 transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>แอดไลน์ปรึกษาฟรี</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SHOWCASE */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-teal-500/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>AI-Driven Cinematic Salepage Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
            เปลี่ยนผู้เข้าชม ให้เป็นลูกค้าตัวจริง <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300">
              ด้วยเว็บไซต์ & เซลเพจสไตล์ Cinematic
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            ผสานเทคโนโลยี AI สร้างสรรค์ภาพพรีเมียม 16:9 ดีไซน์ระดับสากล ไม่บังภาพบนมือถือ 
            โครงสร้างปิดการขาย 8 มิติ พร้อมเชื่อมต่อระบบ LINE OA อัตโนมัติ 24 ชม.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-teal-500/25 transition active:scale-95"
            >
              <span>ชมผลงานจริงล่าสุด</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm sm:text-base border border-slate-700 transition"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              <span>ปรึกษาประเมินโครงการฟรี</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-16 md:py-24 bg-slate-900/60 border-y border-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30">
              Showcase Directory
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              ตัวอย่างเว็บไซต์และเซลเพจ 5 หมวดหมู่ธุรกิจ
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              สร้างขึ้นด้วยมาตรฐาน SalesDesk Salepage Architect สวยหรู สไตล์ Cinematic Hero 16:9 ไม่บังภาพบนมือถือ
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === tab.key
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-lg shadow-teal-500/20'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
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
                className={`bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl ${project.accentColor} transition-all duration-500 group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Image Preview */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-[78%_center] group-hover:scale-105 transition-transform duration-700"
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

      {/* 5. THE 4 PILLARS */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30">
              Why SalesDesk Sites
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              4 เสาหลักที่ทำให้เซลเพจของเราปิดการขายได้จริง
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Cinematic Hero 16:9</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ดีไซน์แบบ Auto Dealer Reference ฝั่งซ้ายวาง Negative Space สำหรับตัวหนังสือ ฝั่งขวาโชว์ภาพสินค้าหรือบริการอย่างคมชัด
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Mobile-First 100%</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                จัดวางเลย์เอาต์พิเศษบนมือถือ เปิดพื้นที่ภาพตรงกลางโล่ง 100% ไม่ถูกปุ่มหรือตัวหนังสือบังใบหน้าหรือตัวสินค้า
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">8-Section Conversion</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                โครงสร้างร้อยเรียงอารมณ์ลูกค้าตั้งแต่สะดุดตา จุดเด่น ตารางราคา รีวิวความไว้วางใจ สู่ฟอร์มนัดหมายปิดการขาย
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Integrated with LINE OA</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                เชื่อมต่อระบบแชตและบอทอัตโนมัติ ส่งลูกค้าตรงสู่ LINE OA ของธุรกิจ พร้อมข้อความระบุเจาะจงความต้องการทันที
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FOOTER */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center mx-auto text-slate-950 font-black shadow-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            พร้อมยกระดับเว็บไซต์ธุรกิจของคุณแล้วหรือยัง?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            ส่งข้อมูลธุรกิจหรือลิงก์เพจของคุณมาให้เรา ทีมงาน SalesDesk AI พร้อมเนรมิตเซลเพจระดับพรีเมียมให้คุณภายใน 24 ชม.
          </p>
          <div className="pt-2">
            <a 
              href="https://line.me/R/ti/p/@fhu6688s?text=สนใจบริการสร้างเว็บไซต์เซลเพจครับ" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-base shadow-xl shadow-teal-500/25 transition transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>ปรึกษาทีมงานผ่าน LINE OA (@fhu6688s)</span>
            </a>
          </div>
          <p className="text-[11px] text-slate-500 pt-6">
            © 2026 SalesDesk Sites • ออกแบบและพัฒนาโดย SalesDesk AI (ผู้เชี่ยวชาญด้านเว็บไซต์ & AI การตลาด)
          </p>
        </div>
      </footer>
    </div>
  );
}
