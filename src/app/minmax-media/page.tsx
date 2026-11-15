'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
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
  Layers,
  Menu,
  X,
  Calendar,
  BookOpen,
  Clock,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import TrackableLineButton from '@/components/TrackableLineButton';
import { getAllMinMaxPosts } from '@/lib/minmax-posts';
import { MINMAX_COPY, MinMaxLang } from '@/lib/minmax-i18n';

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

  const [lang, setLang] = useState<MinMaxLang>('th');
  const t = MINMAX_COPY[lang];

  // Interactive Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessName: '',
    serviceInterest: MINMAX_COPY.th.formSection.serviceOptions[0],
    monthlyBudget: MINMAX_COPY.th.formSection.budgetOptions[1],
    notes: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    const saved = localStorage.getItem('minmax_lang');
    const initial: MinMaxLang =
      urlLang === 'en' || urlLang === 'th'
        ? urlLang
        : saved === 'en' || saved === 'th'
          ? saved
          : 'th';
    if (initial !== 'th') {
      setLang(initial);
      setFormData((prev) => ({
        ...prev,
        serviceInterest: MINMAX_COPY[initial].formSection.serviceOptions[0],
        monthlyBudget: MINMAX_COPY[initial].formSection.budgetOptions[1],
      }));
    }
  }, []);

  const switchLang = (next: MinMaxLang) => {
    setLang(next);
    localStorage.setItem('minmax_lang', next);
    setFormData((prev) => ({
      ...prev,
      serviceInterest: MINMAX_COPY[next].formSection.serviceOptions[0],
      monthlyBudget: MINMAX_COPY[next].formSection.budgetOptions[1],
    }));
  };

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
      alert(t.formSection.alertMissing);
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
          pageSource: `MinMax Media Agency Salepage (${lang.toUpperCase()})`,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert(t.formSection.alertError);
      }
    } catch (err) {
      console.error(err);
      alert(t.formSection.alertNetwork);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceIcons = [Target, Video, PenTool, Users, Share2, Megaphone];
  const pillarIcons = [Target, Video, Users, TrendingUp];
  const coreServices = t.servicesSection.services.map((s, idx) => ({
    ...s,
    icon: serviceIcons[idx] || Target,
  }));
  const executionSteps = t.workflowSection.steps;
  const industryCases = t.casesSection.cases;
  const faqs = t.faqSection.items;

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
                  {t.header.badge}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate hidden sm:block">
                {t.header.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold text-slate-300">
            <a href="#services" className="hover:text-emerald-400 transition">
              {t.header.navServices}
            </a>
            <a href="#workflow" className="hover:text-emerald-400 transition">
              {t.header.navWorkflow}
            </a>
            <a href="#cases" className="hover:text-emerald-400 transition">
              {t.header.navCases}
            </a>
            <a href="#articles" className="hover:text-emerald-400 transition">
              {t.header.navArticles}
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition">
              {t.header.navFaq}
            </a>
          </nav>

          {/* Desktop Direct Contact Action & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill (TH / EN) */}
            <div
              className="inline-flex items-center p-0.5 rounded-xl bg-slate-900/90 border border-emerald-500/25 text-[11px] font-bold"
              role="group"
              aria-label="Language Switcher"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400 ml-2 mr-1 hidden sm:block" />
              <button
                type="button"
                onClick={() => switchLang('th')}
                className={`px-2 py-1 rounded-lg transition cursor-pointer ${
                  lang === 'th'
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                TH
              </button>
              <button
                type="button"
                onClick={() => switchLang('en')}
                className={`px-2 py-1 rounded-lg transition cursor-pointer ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

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
              <span>{t.header.ctaBook}</span>
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
              • {t.header.navServices}
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold border-b border-slate-900"
            >
              • {t.header.navWorkflow}
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold border-b border-slate-900"
            >
              • {t.header.navCases}
            </a>
            <a
              href="#articles"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold border-b border-slate-900"
            >
              {t.header.mobileArticles}
            </a>
            <a
              href="#consult-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold border-b border-slate-900"
            >
              {t.header.mobileConsult}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-200 font-semibold"
            >
              {t.header.mobileFaq}
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <TrackableLineButton
                href={lineUrl}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black text-center text-xs flex items-center justify-center gap-1.5"
              >
                <LineIcon className="w-4 h-4 fill-slate-950" />
                {t.header.mobileLineCta}
              </TrackableLineButton>
              <a
                href={fbPageUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-center text-xs flex items-center justify-center gap-1.5"
              >
                <FacebookIcon className="w-3.5 h-3.5 fill-blue-400" />
                {t.header.mobileFbCta}
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
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline: Punchy, zero overlapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.2] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              <span className="block">MINMAX MEDIA</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 block text-lg sm:text-2xl lg:text-3xl xl:text-4xl mt-1.5 font-extrabold">
                {t.hero.headlineSub}
              </span>
            </h1>

            {/* Focused Value Proposition */}
            <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)] max-w-lg mx-auto lg:mx-0">
              {t.hero.description}
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
                {t.hero.ctaPrimary}
              </a>
              <a
                href={fbMessengerUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-emerald-400/40 font-semibold text-sm sm:text-base text-center backdrop-blur-md active:scale-95 transition whitespace-nowrap flex items-center justify-center gap-2"
              >
                <FacebookIcon className="w-4 h-4 fill-blue-500 shrink-0" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* 3 Concise Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-5 gap-y-1.5 text-xs text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              {t.hero.trustSignals.map((signal, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. FOUR PILLARS OF MINIMAL PREMIUM SERVICE (DECOUPLED CARDS) */}
      <section id="pillars" className="py-8 sm:py-12 bg-[#060d12] border-y border-emerald-500/15 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {t.pillars.map((pillar, idx) => {
              const PillarIcon = pillarIcons[idx] || Target;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/50 p-4 sm:p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-400/40 transition"
                >
                  <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                    <PillarIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">{pillar.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS VS MINMAX ADVANTAGE */}
      <section className="py-14 sm:py-20 bg-[#04090d] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              {t.painVsSolution.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
              {t.painVsSolution.title}
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              {t.painVsSolution.subtitlePrefix}
              <strong>{t.painVsSolution.subtitleHighlight}</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-rose-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <h3 className="text-lg font-bold text-white">{t.painVsSolution.oldTitle}</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {t.painVsSolution.oldItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold mt-0.5">•</span>
                    <span>
                      <strong>{item.bold}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/15 border border-emerald-500/30 space-y-4 shadow-xl shadow-emerald-950/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white">{t.painVsSolution.newTitle}</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {t.painVsSolution.newItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span>
                      <strong>{item.bold}</strong> {item.text}
                    </span>
                  </li>
                ))}
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
              <span>{t.servicesSection.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {t.servicesSection.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {t.servicesSection.subtitle}
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
                      <span>{t.servicesSection.ctaButton}</span>
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
              {t.workflowSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
              {t.workflowSection.title}
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              {t.workflowSection.subtitle}
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
              {t.casesSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
              {t.casesSection.title}
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              {t.casesSection.subtitle}
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
                <span>{t.articlesSection.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {t.articlesSection.title}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                {t.articlesSection.subtitle}
              </p>
            </div>
            <Link
              href="/minmax-media/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-emerald-300 font-bold text-xs sm:text-sm transition self-start md:self-auto shrink-0"
            >
              <span>{t.articlesSection.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((post) => {
              const enOverride = lang === 'en' ? t.articlesSection.enOverrides[post.slug] : undefined;
              const displayTitle = enOverride?.title || post.title;
              const displayDesc = enOverride?.metaDescription || post.metaDescription;
              const displayCat = enOverride?.category || post.category;
              const displayAuthor = enOverride?.author || post.author;
              const displayReadTime = enOverride?.readTime || post.readTime;
              return (
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
                        {displayCat}
                      </div>
                    </div>
                    <div className="p-6 space-y-2.5">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>
                          {t.articlesSection.readTimeLabel} {displayReadTime}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition line-clamp-2 leading-snug">
                        {displayTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                        {displayDesc}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">{displayAuthor}</span>
                    <span className="text-emerald-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition">
                      {t.articlesSection.readMore} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
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
                {t.formSection.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {t.formSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {t.formSection.subtitle}
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{t.formSection.successTitle}</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  {t.formSection.successDesc}
                </p>
                <div className="pt-2">
                  <TrackableLineButton
                    href={lineUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/30"
                  >
                    <LineIcon className="w-4 h-4 fill-slate-950" />
                    <span>{t.formSection.successLineCta}</span>
                  </TrackableLineButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.formSection.fullNameLabel} <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.formSection.fullNamePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.formSection.phoneLabel} <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.formSection.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.formSection.businessLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.formSection.businessPlaceholder}
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.formSection.serviceLabel}
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                    >
                      {t.formSection.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.formSection.budgetLabel}
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#04090d] border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                  >
                    {t.formSection.budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.formSection.notesLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.formSection.notesPlaceholder}
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
                  <span>{isSubmitting ? t.formSection.submittingButton : t.formSection.submitButton}</span>
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
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              {t.faqSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              {t.faqSection.title}
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {t.faqSection.subtitle}
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
                    {t.header.badge}
                  </div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                {t.footer.desc}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-semibold text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5" /> {t.footer.verifiedBadge}
                </span>
              </div>
            </div>

            {/* Col 2: Core Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {t.footer.servicesTitle}
              </h4>
              <ul className="space-y-2 text-xs">
                {t.footer.serviceLinks.map((svcLabel, idx) => (
                  <li key={idx}>
                    <a href="#services" className="hover:text-emerald-400 transition">
                      {svcLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: SEO Knowledge Hub & Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {t.footer.articlesTitle}
              </h4>
              <ul className="space-y-2.5 text-xs">
                {articles.map((post) => {
                  const enTitle =
                    lang === 'en' ? t.articlesSection.enOverrides[post.slug]?.title : undefined;
                  return (
                    <li key={post.id}>
                      <Link
                        href={`/minmax-media/blog/${post.slug}`}
                        className="hover:text-emerald-400 transition line-clamp-1"
                      >
                        &rarr; {enTitle || post.title}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-1">
                  <Link href="/minmax-media/blog" className="text-emerald-400 font-bold hover:underline">
                    {t.footer.viewAllArticles}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Official Contact Channels */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {t.footer.contactTitle}
              </h4>
              <div className="space-y-2.5 text-xs">
                <TrackableLineButton
                  href={lineUrl}
                  buttonName="footer_line_official"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 transition w-full"
                >
                  <LineIcon className="w-4 h-4 fill-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-emerald-200/80">{t.footer.lineSub}</div>
                    <div className="font-bold text-white">
                      {lineId} ({t.footer.lineAction})
                    </div>
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
                    <div className="text-[10px] text-slate-400">{t.footer.fbSub}</div>
                    <div className="font-bold text-white truncate">MinMax Media Event Agency</div>
                  </div>
                </a>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{t.footer.hours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} MinMax Media Event Agency. All rights reserved.
            </div>
            <div>
              {t.footer.engineeredBy}{' '}
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
            <span>{t.mobileBar.chatPage}</span>
          </a>

          <TrackableLineButton
            href={lineUrl}
            buttonName="mobile_sticky_line"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/30 transition active:scale-95"
          >
            <LineIcon className="w-4 h-4 fill-slate-950" />
            <span>{t.mobileBar.addLine}</span>
          </TrackableLineButton>
        </div>
      </div>
    </div>
  );
}
