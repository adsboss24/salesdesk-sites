export type MinMaxLang = 'th' | 'en';

export interface MinMaxServiceCopy {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  highlights: string[];
}

export interface MinMaxCopy {
  header: {
    badge: string;
    tagline: string;
    navServices: string;
    navWorkflow: string;
    navCases: string;
    navArticles: string;
    navFaq: string;
    ctaBook: string;
    mobileArticles: string;
    mobileConsult: string;
    mobileFaq: string;
    mobileLineCta: string;
    mobileFbCta: string;
  };
  hero: {
    badge: string;
    headlineSub: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustSignals: string[];
  };
  pillars: { title: string; desc: string }[];
  painVsSolution: {
    eyebrow: string;
    title: string;
    subtitlePrefix: string;
    subtitleHighlight: string;
    oldTitle: string;
    oldItems: { bold: string; text: string }[];
    newTitle: string;
    newItems: { bold: string; text: string }[];
  };
  servicesSection: {
    badge: string;
    title: string;
    subtitle: string;
    ctaButton: string;
    services: MinMaxServiceCopy[];
  };
  workflowSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { step: string; title: string; desc: string }[];
  };
  casesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cases: { name: string; result: string; desc: string; tag: string }[];
  };
  articlesSection: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    readTimeLabel: string;
    readMore: string;
    enOverrides: Record<
      string,
      {
        title: string;
        metaDescription: string;
        category: string;
        author: string;
        readTime: string;
      }
    >;
  };
  formSection: {
    badge: string;
    title: string;
    subtitle: string;
    successTitle: string;
    successDesc: string;
    successLineCta: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    businessLabel: string;
    businessPlaceholder: string;
    serviceLabel: string;
    serviceOptions: string[];
    budgetLabel: string;
    budgetOptions: string[];
    notesLabel: string;
    notesPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    alertMissing: string;
    alertError: string;
    alertNetwork: string;
  };
  faqSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  footer: {
    desc: string;
    verifiedBadge: string;
    servicesTitle: string;
    serviceLinks: string[];
    articlesTitle: string;
    viewAllArticles: string;
    contactTitle: string;
    lineSub: string;
    lineAction: string;
    fbSub: string;
    hours: string;
    engineeredBy: string;
  };
  mobileBar: {
    chatPage: string;
    addLine: string;
  };
}

export const MINMAX_COPY: Record<MinMaxLang, MinMaxCopy> = {
  th: {
    header: {
      badge: 'Event & Marketing Agency',
      tagline: 'รับทำการตลาดครบวงจร • พร้อมปั้นแบรนด์',
      navServices: '6 บริการหลัก',
      navWorkflow: 'ขั้นตอนทำงาน',
      navCases: 'ผลงาน',
      navArticles: 'บทความกลยุทธ์',
      navFaq: 'คำถามที่พบบ่อย',
      ctaBook: 'นัดหมายปรึกษากลยุทธ์',
      mobileArticles: '• บทความกลยุทธ์การตลาด (SEO Hub)',
      mobileConsult: '• ลงทะเบียนปรึกษาทีมกลยุทธ์',
      mobileFaq: '• คำถามที่พบบ่อย (FAQ)',
      mobileLineCta: 'แอดไลน์ MINMAX MEDIA ปรึกษาฟรี',
      mobileFbCta: 'เยี่ยมชมแฟนเพจ MinMax Media',
    },
    hero: {
      badge: 'Certified Full-Service Marketing & Event Agency',
      headlineSub: 'รับทำการตลาดครบวงจร • พร้อมปั้นแบรนด์',
      description:
        'ยกระดับแบรนด์สู่ยอดขาย 8 หลักด้วยระบบ One-Stop Marketing House วางกลยุทธ์ ผลิตสื่อโปรดักชั่น ถ่ายทำ ตัดต่อ ดีล KOL/KOC ดูแลเพจ และยิงแอดวัดผล ROI จริง',
      ctaPrimary: 'ขอรับคำปรึกษากลยุทธ์ / ขอใบเสนอราคา →',
      ctaSecondary: 'ทักแชต Facebook',
      trustSignals: [
        'วางกลยุทธ์ตรงกลุ่มเป้าหมาย',
        'โปรดักชั่นระดับพรีเมียม',
        'ยิงแอดวัดผล ROI จริง',
      ],
    },
    pillars: [
      {
        title: 'Strategic Marketing',
        desc: 'วางแผนกลยุทธ์เจาะลึกตลาด และสร้าง Funnel ปิดการขาย',
      },
      {
        title: 'Creative Production',
        desc: 'วิดีโอสั้น กราฟิก และ Motion Graphic ระดับสตูดิโอ',
      },
      {
        title: 'Influencer Network',
        desc: 'คัดสรร KOL/KOC รีวิวจริง ตรงกลุ่มเป้าหมาย ดันยอดขาย',
      },
      {
        title: 'Performance Ads ROI',
        desc: 'ยิงแอดแม่นยำ ไม่เผางบ โฟกัส Conversion สูงสุด',
      },
    ],
    painVsSolution: {
      eyebrow: 'WHY 90% OF BRANDS BURN MONEY ON ADS',
      title: 'ทำไมยิงแอดตั้งเยอะ แต่ยอดขายกลับไม่โต?',
      subtitlePrefix: 'ปัญหาไม่ได้อยู่ที่ตัวระบบแอด แต่อยู่ที่ ',
      subtitleHighlight: '“ขาดกลยุทธ์ที่เชื่อมโยงกันอย่างเป็นระบบ”',
      oldTitle: 'ปัญหาการตลาดออนไลน์แบบเดิมๆ',
      oldItems: [
        {
          bold: 'จ้างแยกคนละทาง:',
          text: 'จ้างกราฟิกเจ้าหนึ่ง คนยิงแอดเจ้าหนึ่ง คอนเทนต์คนละทิศทาง งานไม่สอดคล้องกัน',
        },
        {
          bold: 'คอนเทนต์ไม่ดึงดูด:',
          text: 'งานภาพนิ่งแบบเดิมๆ คนเลื่อนผ่านใน 1 วินาที ไม่สร้างอารมณ์อยากซื้อ',
        },
        {
          bold: 'ยิงแอดแบบเผางบ:',
          text: 'อัดงบไปเรื่อยๆ โดยไม่มีการเซ็ต Conversion Funnel และไม่รู้ว่าเม็ดเงินหายไปไหน',
        },
        {
          bold: 'แอดมินตอบช้า ตอบไม่เป็น:',
          text: 'ทราฟฟิกเข้ามาแต่ไม่มีคนปิดการขาย เสียโอกาสทองของธุรกิจ',
        },
      ],
      newTitle: 'ทางแก้ที่สมบูรณ์แบบด้วย MinMax Media',
      newItems: [
        {
          bold: 'One-Stop House:',
          text: 'มีทีมงานประจำครบทุกฟังก์ชัน ประชุมวางแผนเป็นอันหนึ่งอันเดียวกัน',
        },
        {
          bold: 'High-Converting Production:',
          text: 'วิดีโอสั้นและงาน Key Visual ระดับไฮเอนด์ หยุดนิ้วโป้งคนดูทันที',
        },
        {
          bold: 'Data-Driven Performance Ads:',
          text: 'ยิงแอดแบบวัดผล ROAS จริง ไม่ใช่แค่ยอดไลก์ แต่เน้นยอดเงินในบัญชี',
        },
        {
          bold: 'Professional Care:',
          text: 'บริหารจัดการเพจ สรุปรายงานรายสัปดาห์ พร้อมเป็นพาร์ทเนอร์เคียงข้างเจ้าของแบรนด์',
        },
      ],
    },
    servicesSection: {
      badge: 'ครบวงจร 360 องศา',
      title: '6 บริการหลัก เสาหลักความสำเร็จของแบรนด์',
      subtitle:
        'มาตรฐานบริการจาก MinMax Media Event Agency ที่ออกแบบเพื่อสร้างการเติบโตอย่างยั่งยืน',
      ctaButton: 'ขอคำแนะนำบริการนี้',
      services: [
        {
          id: 'marketing-strategy',
          title: 'Marketing Strategy',
          subtitle: 'วางกลยุทธ์การตลาดรอบด้าน',
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
      ],
    },
    workflowSection: {
      eyebrow: 'STRUCTURED WORKFLOW',
      title: '4 ขั้นตอนการทำงานที่เป็นระบบ มั่นใจในทุกผลงาน',
      subtitle: 'ทำงานรวดเร็ว โปร่งใส และพร้อมรายงานความคืบหน้าในทุกสเตป',
      steps: [
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
      ],
    },
    casesSection: {
      eyebrow: 'PROVEN TRACK RECORD',
      title: 'ตัวอย่างความสำเร็จในหลากหลายกลุ่มธุรกิจ',
      subtitle:
        'ไม่ว่าธุรกิจของคุณจะอยู่ในอุตสาหกรรมใด เราพร้อมวิเคราะห์และสร้างสูตรสำเร็จเฉพาะคุณ',
      cases: [
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
      ],
    },
    articlesSection: {
      badge: 'MINMAX KNOWLEDGE HUB',
      title: 'บทความเจาะลึกกลยุทธ์การตลาด & ปั้นแบรนด์',
      subtitle:
        'คลังความรู้ด้าน Full-Funnel Marketing, Video Production และ Performance Ads ที่นำไปใช้เพิ่มยอดขายได้จริง',
      viewAll: 'ดูบทความทั้งหมด',
      readTimeLabel: 'เวลาอ่าน',
      readMore: 'อ่านบทความ',
      enOverrides: {},
    },
    formSection: {
      badge: 'FREE BRAND CONSULTATION',
      title: 'ขอรับคำปรึกษากลยุทธ์แบรนด์ & ใบเสนอราคาฟรี',
      subtitle:
        'กรอกข้อมูลเบื้องต้นเพื่อให้ทีมกลยุทธ์ของ MinMax Media ทำการบ้านและติดต่อกลับภายใน 24 ชม.',
      successTitle: 'ได้รับข้อมูลของคุณเรียบร้อยแล้วครับ',
      successDesc:
        'ทีมที่ปรึกษากลยุทธ์ MinMax Media กำลังวิเคราะห์ข้อมูลและจะติดต่อกลับโดยเร็วที่สุด หรือสามารถแอด LINE เพื่อทักคุยได้ทันที',
      successLineCta: 'ทัก LINE MINMAX MEDIA ด่วน',
      fullNameLabel: 'ชื่อ-นามสกุล / ผู้ติดต่อ',
      fullNamePlaceholder: 'เช่น คุณสมชาย มุ่งมั่น',
      phoneLabel: 'เบอร์โทรศัพท์ติดต่อ',
      phonePlaceholder: 'เช่น 081-xxx-xxxx',
      businessLabel: 'ชื่อแบรนด์ / เพจธุรกิจ หรือลิงก์เพจ',
      businessPlaceholder: 'เช่น แบรนด์ครีม A / เพจร้านอาหาร B',
      serviceLabel: 'บริการที่สนใจเป็นพิเศษ',
      serviceOptions: [
        'รับทำการตลาดครบวงจร (Full-Service 360°)',
        'ยิงแอดวัดผล ROI (Performance Ads)',
        'โปรดักชั่นวิดีโอ & กราฟิก (Production)',
        'คอนเทนต์ครีเอเตอร์ & ดูแลเพจ',
        'ดีลอินฟลูเอนเซอร์ KOL / KOC',
        'จัดงาน Event & การตลาดเปิดตัว',
      ],
      budgetLabel: 'งบประมาณการตลาดโดยประมาณต่อเดือน',
      budgetOptions: [
        '30,000 - 50,000 บาท/เดือน',
        '50,000 - 100,000 บาท/เดือน',
        '100,000 - 300,000 บาท/เดือน',
        '300,000+ บาท/เดือน (Enterprise)',
      ],
      notesLabel: 'เป้าหมายที่ต้องการให้ MinMax Media ช่วยเหลือ',
      notesPlaceholder:
        'เช่น ต้องการเพิ่มยอดขายจากเดิม 2 เท่า, ต้องการยกระดับภาพลักษณ์แบรนด์ให้พรีเมียม ฯลฯ',
      submitButton: 'ส่งข้อมูลเพื่อรับการวิเคราะห์กลยุทธ์ฟรี',
      submittingButton: 'กำลังส่งข้อมูล...',
      alertMissing: 'กรุณากรอกชื่อและเบอร์โทรศัพท์ติดต่อกลับครับ',
      alertError: 'เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาติดต่อทาง LINE MINMAX MEDIA โดยตรงครับ',
      alertNetwork: 'เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้งครับ',
    },
    faqSection: {
      eyebrow: 'FAQ',
      title: 'คำถามที่พบบ่อย',
      subtitle: 'ข้อสงสัยทั่วไปก่อนเริ่มต้นร่วมงานกับ MinMax Media',
      items: [
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
      ],
    },
    footer: {
      desc: 'เอเจนซี่รับทำการตลาดครบวงจร พร้อมปั้นแบรนด์ให้เติบโตอย่างก้าวกระโดด วางกลยุทธ์ ผลิตสื่อโปรดักชั่น อินฟลูเอนเซอร์ KOL/KOC ดูแลโซเชียล และยิงแอดวัดผล ROI จริง',
      verifiedBadge: 'Official Verified Agency',
      servicesTitle: 'บริการหลักครบวงจร',
      serviceLinks: [
        '• Marketing Strategy (วางกลยุทธ์)',
        '• Production (ออกแบบกราฟิก/ตัดต่อ)',
        '• Content Creation (ผลิตสื่อคอนเทนต์)',
        '• Influencer / KOL / KOC Network',
        '• Social Media Management (ดูแลเพจ)',
        '• Performance ADS (กลยุทธ์แอดโฆษณา)',
      ],
      articlesTitle: 'คลังความรู้ & บทความ SEO',
      viewAllArticles: 'ดูบทความทั้งหมด →',
      contactTitle: 'ช่องทางติดต่อ MinMax Media',
      lineSub: 'LINE Official Account',
      lineAction: 'คลิกแอดไลน์',
      fbSub: 'Facebook Official Page',
      hours: 'เปิดตลอดเวลา • ทีมงานพร้อมให้คำปรึกษาทุกวัน',
      engineeredBy: 'Engineered with Minimal Premium Standard by',
    },
    mobileBar: {
      chatPage: 'ทักแชตเพจ',
      addLine: 'แอด LINE MINMAX MEDIA',
    },
  },
  en: {
    header: {
      badge: 'Event & Marketing Agency',
      tagline: 'Full-Service Marketing • Brand Building',
      navServices: '6 Core Services',
      navWorkflow: 'Workflow',
      navCases: 'Case Studies',
      navArticles: 'Insights',
      navFaq: 'FAQ',
      ctaBook: 'Book Strategy Call',
      mobileArticles: '• Marketing Strategy Insights (SEO Hub)',
      mobileConsult: '• Request Free Brand Consultation',
      mobileFaq: '• Frequently Asked Questions (FAQ)',
      mobileLineCta: 'Add LINE MINMAX MEDIA for Free Consult',
      mobileFbCta: 'Visit MinMax Media Facebook Page',
    },
    hero: {
      badge: 'Certified Full-Service Marketing & Event Agency',
      headlineSub: 'Full-Service Marketing • Brand Building',
      description:
        'Scale your brand to 8-figure revenue with our One-Stop Marketing House: Strategy, Studio Production, Content Creation, KOL/KOC Network, Social Management & ROI-Driven Performance Ads.',
      ctaPrimary: 'Get Free Strategy & Proposal →',
      ctaSecondary: 'Chat on Facebook',
      trustSignals: [
        'Targeted Growth Strategy',
        'Studio-Grade Production',
        'Measurable ROI Performance',
      ],
    },
    pillars: [
      {
        title: 'Strategic Marketing',
        desc: 'Deep market research & high-converting full-funnel architecture.',
      },
      {
        title: 'Creative Production',
        desc: 'Studio-grade short-form video, key visuals & motion graphics.',
      },
      {
        title: 'Influencer Network',
        desc: 'Curated KOL/KOC creators driving authentic trust & conversions.',
      },
      {
        title: 'Performance Ads ROI',
        desc: 'Precision media buying focused on real revenue, never wasted spend.',
      },
    ],
    painVsSolution: {
      eyebrow: 'WHY 90% OF BRANDS BURN MONEY ON ADS',
      title: 'Why Are High Ad Budgets Failing to Scale Sales?',
      subtitlePrefix: 'The problem is rarely the ad platform—it is ',
      subtitleHighlight: '“A Disconnected Strategy Without a Unified Funnel.”',
      oldTitle: 'Traditional Fragmented Marketing',
      oldItems: [
        {
          bold: 'Disconnected Vendors:',
          text: 'Hiring separate graphic, video, and ad freelancers with zero unified brand direction.',
        },
        {
          bold: 'Low-Impact Creatives:',
          text: 'Generic static posts that users scroll past in 1 second without purchase intent.',
        },
        {
          bold: 'Wasted Ad Spend:',
          text: 'Boosting posts without proper conversion funnels, pixel/CAPI tracking, or ROAS attribution.',
        },
        {
          bold: 'Slow Lead Response:',
          text: 'Traffic arrives in your inbox, but slow or untrained replies kill high-intent sales.',
        },
      ],
      newTitle: 'The Complete Solution with MinMax Media',
      newItems: [
        {
          bold: 'One-Stop Marketing House:',
          text: 'An integrated in-house team of strategists, creatives, and media buyers working in sync.',
        },
        {
          bold: 'High-Converting Production:',
          text: 'Scroll-stopping short-form videos and luxury key visuals engineered to convert.',
        },
        {
          bold: 'Data-Driven Performance Ads:',
          text: 'Every baht tracked via ROAS & Conversion API—focused on real revenue, not vanity likes.',
        },
        {
          bold: 'Dedicated Brand Partnership:',
          text: 'Full-service page management, weekly executive dashboards, and proactive growth reviews.',
        },
      ],
    },
    servicesSection: {
      badge: '360° FULL-SERVICE',
      title: '6 Core Pillars of Brand Growth',
      subtitle:
        'Enterprise-standard agency services by MinMax Media Event Agency, engineered for sustainable market expansion.',
      ctaButton: 'Inquire About This Service',
      services: [
        {
          id: 'marketing-strategy',
          title: 'Marketing Strategy',
          subtitle: 'End-to-End Growth & Funnel Architecture',
          tag: '01',
          description:
            'Deep market & competitor intelligence, sharp USP positioning, ideal customer profiling, and full-funnel revenue mapping from awareness to repeat purchase.',
          highlights: [
            'Competitor Audit & Brand Positioning',
            'High-Converting Customer Journey Design',
            'ROI-Focused Budget Allocation',
            'Transparent Weekly KPI Benchmarks',
          ],
        },
        {
          id: 'production',
          title: 'Production',
          subtitle: 'Graphic Design & Studio Video Editing',
          tag: '02',
          description:
            'Studio-grade commercial filming, high-retention Reels / TikTok / Shorts editing that hooks viewers in 3 seconds, and elevated Key Visuals.',
          highlights: [
            'Conversion-First Short-Form Video',
            'Luxury Key Visuals & Infographics',
            'Premium Motion Graphics',
            'Strict Brand Guidelines Consistency',
          ],
        },
        {
          id: 'content-creation',
          title: 'Content Creation',
          subtitle: 'Sales-Driven Storytelling & Copywriting',
          tag: '03',
          description:
            'Strategic content that turns followers into loyal buyers—combining emotional storytelling with persuasive sales copywriting.',
          highlights: [
            'Monthly Strategic Content Calendar',
            'Scroll-Stopping Sales Copywriting',
            'Pain-Point & Social Proof Angles',
            'Executive & Brand Video Scripting',
          ],
        },
        {
          id: 'influencer',
          title: 'Influencer / KOL / KOC',
          subtitle: 'High-Impact Creator Network',
          tag: '04',
          description:
            'End-to-end sourcing and management of Mega, Macro, Micro, and Nano KOCs to build authentic social proof and accelerate sales velocity.',
          highlights: [
            '100% Real Engagement Vetting',
            'Detailed Creative Briefs & QA',
            'Ad Whitelisting Rights Negotiation',
            'Maximum Cost-Per-Acquisition Value',
          ],
        },
        {
          id: 'social-media',
          title: 'Social Media Management',
          subtitle: 'Complete Channel & Inbox Operations',
          tag: '05',
          description:
            'Daily management across Facebook, TikTok, Instagram, Lemon8, and LINE OA with responsive, conversion-trained chat specialists.',
          highlights: [
            'Consistent Scheduled Publishing',
            'Fast, High-Closing Admin Support',
            'Chatbot & Quick-Reply Automation',
            'Reputation & Community Monitoring',
          ],
        },
        {
          id: 'ads-optimization',
          title: 'Performance ADS',
          subtitle: 'Precision Media Buying & ROI Scaling',
          tag: '06',
          description:
            'Data-led campaign management across Meta, TikTok, and Google Ads focused strictly on qualified leads, conversions, and ROAS.',
          highlights: [
            '100% Accurate Conversion API Setup',
            'Continuous Creative A/B Testing',
            'Dynamic Retargeting Funnels',
            'Clear Weekly Executive Dashboards',
          ],
        },
      ],
    },
    workflowSection: {
      eyebrow: 'STRUCTURED WORKFLOW',
      title: '4-Step Proven Execution Blueprint',
      subtitle: 'Fast, transparent, and milestone-driven delivery at every stage.',
      steps: [
        {
          step: '01',
          title: 'Discovery & Brand Audit',
          desc: 'Audit your product, USP, competitors, and target audience to build a rock-solid strategic foundation.',
        },
        {
          step: '02',
          title: 'Strategy & Content Blueprint',
          desc: 'Deliver a comprehensive growth roadmap, monthly content calendar, budget plan, and clear KPI targets.',
        },
        {
          step: '03',
          title: 'Production & Campaign Launch',
          desc: 'Our studio shoots, edits, designs key visuals, and launches precision-targeted ad campaigns.',
        },
        {
          step: '04',
          title: 'Optimize & Scale Up',
          desc: 'Monitor real-time metrics, lower acquisition costs, and scale winning creatives for sustained growth.',
        },
      ],
    },
    casesSection: {
      eyebrow: 'PROVEN TRACK RECORD',
      title: 'Cross-Industry Growth Results',
      subtitle:
        'Whatever your sector—domestic or international—we engineer a tailored growth playbook for your brand.',
      cases: [
        {
          name: 'Beauty & Aesthetic Clinics',
          result: '6.8x ROAS • +320% Sales Growth',
          desc: 'Viral TikTok production paired with 50+ vetted KOCs, driving a full product sell-out within 2 weeks.',
          tag: 'Case Study 01',
        },
        {
          name: 'Food, Beverage & Lifestyle Cafes (F&B)',
          result: '4.2M+ Organic Views • Packed Venues',
          desc: 'Story-driven reels and hyper-local targeting that boosted both dine-in footfall and delivery orders.',
          tag: 'Case Study 02',
        },
        {
          name: 'Automotive & Luxury Real Estate',
          result: '140+ Qualified High-Ticket Leads',
          desc: '16:9 luxury media production paired with multi-step lead qualification funnels for executive buyers.',
          tag: 'Case Study 03',
        },
        {
          name: 'Fashion & Lifestyle E-Commerce',
          result: '+48% Repeat Purchase • 2.5x Follower Growth',
          desc: 'International-grade brand mood & tone with Dynamic Catalog Retargeting for consistent daily orders.',
          tag: 'Case Study 04',
        },
      ],
    },
    articlesSection: {
      badge: 'MINMAX KNOWLEDGE HUB',
      title: 'Marketing Strategy & Brand Growth Insights',
      subtitle:
        'Actionable playbooks on Full-Funnel Marketing, Short-Form Video Production, and Performance Ads ROI.',
      viewAll: 'View All Insights',
      readTimeLabel: 'Read time',
      readMore: 'Read Article',
      enOverrides: {
        'full-funnel-marketing-strategy-2026-scale-brand-8-figures': {
          title: 'Full-Funnel Marketing Strategy 2026: How to Scale Your Brand to 8 Figures',
          metaDescription:
            'Discover the 3-stage Full-Funnel Marketing framework used by MinMax Media to lower CPA, maximize ROAS, and build sustainable brand equity.',
          category: 'Marketing Strategy',
          author: 'MinMax Media Strategy Team',
          readTime: '6 min',
        },
        'short-form-video-production-reels-tiktok-conversion-secret': {
          title: 'Short-Form Video Production Secrets: Hook Viewers in 3 Seconds on Reels & TikTok',
          metaDescription:
            'Learn how studio-grade 3-second hooks, pacing, and storytelling turn short-form videos into high-converting sales assets.',
          category: 'Creative Production',
          author: 'MinMax Production Studio',
          readTime: '5 min',
        },
        'influencer-kol-koc-performance-ads-roas-optimization': {
          title: 'Combining Influencer (KOL/KOC) Trust with Performance Ads to Multiply ROAS',
          metaDescription:
            'How whitelisting authentic KOC reviews inside Meta & TikTok Ads outperforms traditional studio ads and scales conversions.',
          category: 'Influencer & Performance Ads',
          author: 'MinMax Performance Team',
          readTime: '6 min',
        },
      },
    },
    formSection: {
      badge: 'FREE BRAND CONSULTATION',
      title: 'Request a Free Brand Strategy & Proposal',
      subtitle:
        'Share your project details below—our senior strategists will prepare a tailored plan and reach out within 24 hours.',
      successTitle: 'Thank You! Your Inquiry Has Been Received',
      successDesc:
        'Our MinMax Media strategy team is reviewing your brief and will contact you shortly. For immediate assistance, connect with us directly on LINE.',
      successLineCta: 'Chat on LINE MINMAX MEDIA Now',
      fullNameLabel: 'Full Name / Contact Person',
      fullNamePlaceholder: 'e.g., Alex Morgan',
      phoneLabel: 'Phone Number / WhatsApp',
      phonePlaceholder: 'e.g., +66 81-xxx-xxxx',
      businessLabel: 'Brand Name / Website or Page URL',
      businessPlaceholder: 'e.g., Brand X / facebook.com/brandx',
      serviceLabel: 'Primary Service of Interest',
      serviceOptions: [
        'Full-Service 360° Marketing',
        'Performance Ads (ROI & Lead Gen)',
        'Video & Graphic Production',
        'Content Creation & Social Management',
        'Influencer / KOL / KOC Campaigns',
        'Event Marketing & Brand Launch',
      ],
      budgetLabel: 'Estimated Monthly Marketing Budget',
      budgetOptions: [
        '30,000 - 50,000 THB / month (~$900 - $1,500)',
        '50,000 - 100,000 THB / month (~$1,500 - $3,000)',
        '100,000 - 300,000 THB / month (~$3,000 - $9,000)',
        '300,000+ THB / month (Enterprise / Global)',
      ],
      notesLabel: 'Business Goals & Project Brief',
      notesPlaceholder:
        'e.g., Expanding into Thailand/SEA, scaling e-commerce ROAS 2x, launching a new flagship product...',
      submitButton: 'Submit for Free Strategy Analysis',
      submittingButton: 'Submitting...',
      alertMissing: 'Please enter your name and contact phone number.',
      alertError: 'Submission failed. Please contact us directly via LINE MINMAX MEDIA.',
      alertNetwork: 'Network error. Please try again.',
    },
    faqSection: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Common questions before partnering with MinMax Media',
      items: [
        {
          q: 'What does MinMax Media handle? Do we need an internal marketing team?',
          a: 'We operate as a complete One-Stop Agency covering strategy, graphic/video production, KOL/KOC management, social media operations, and performance ads. You do not need to hire in-house designers or editors—saving overhead while gaining a senior multidisciplinary team immediately.',
        },
        {
          q: 'Can startups or international brands entering Thailand work with you?',
          a: 'Absolutely. We specialize in both brand launches from zero and market-entry campaigns for international brands expanding into Thailand and Southeast Asia, building Brand DNA, localized content, and conversion funnels from day one.',
        },
        {
          q: 'How is running ads with MinMax Media different from doing it in-house?',
          a: 'We unite high-converting creative production with data-driven funnel engineering. Instead of burning budget on stale creatives, we run continuous A/B creative testing backed by Conversion API tracking to lower CPA and scale profitable ROAS.',
        },
        {
          q: 'How quickly can we launch after onboarding?',
          a: 'Once the brief and strategy are approved, our team delivers the initial Content Plan within 3–5 business days and launches your first live campaign within week one.',
        },
        {
          q: 'How often do you provide performance reports?',
          a: 'We deliver clear weekly Performance Dashboards and hold monthly 1-on-1 executive strategy reviews to optimize results and plan next-month scaling.',
        },
      ],
    },
    footer: {
      desc: 'Full-service marketing & event agency empowering domestic and international brands with strategy, studio production, KOL/KOC networks, social management, and ROI-focused performance ads.',
      verifiedBadge: 'Official Verified Agency',
      servicesTitle: '6 Core Services',
      serviceLinks: [
        '• Marketing Strategy',
        '• Creative Production (Video & Design)',
        '• Content Creation',
        '• Influencer / KOL / KOC Network',
        '• Social Media Management',
        '• Performance ADS & ROI',
      ],
      articlesTitle: 'Knowledge Hub & SEO Insights',
      viewAllArticles: 'View All Articles →',
      contactTitle: 'Contact MinMax Media',
      lineSub: 'LINE Official Account',
      lineAction: 'Click to Add LINE',
      fbSub: 'Facebook Official Page',
      hours: 'Open Daily • Dedicated Team Ready for Consultation',
      engineeredBy: 'Engineered with Minimal Premium Standard by',
    },
    mobileBar: {
      chatPage: 'Facebook Chat',
      addLine: 'LINE MINMAX MEDIA',
    },
  },
};
