export interface Post {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  focusKeyword?: string;
  content: string;
  featuredImage: string;
  imageAlt: string;
  author: string;
  authorRole: string;
  category: string;
  readTime: string;
  published: boolean;
  publishedAt: string;
  updatedAt: string;
}

export const posts: Post[] = [
  {
    id: '1',
    slug: 'why-salepage-converts-better-than-chat',
    title: 'ทำไมเซลเพจจิตวิทยา 16:9 ถึงปิดการขายได้ดีกว่าการยิงแอดเข้าแชตเพจ 300%?',
    metaDescription: 'เจาะลึกจิตวิทยาการปิดการขายออนไลน์ หยุดปัญหาลูกค้าทักแล้วเงียบหาย ด้วยสถาปัตยกรรมเซลเพจความเร็วสูง 0.8 วิ ปิดยอดขายอัตโนมัติ 24 ชม.',
    focusKeyword: 'เซลเพจจิตวิทยา 16:9 ปิดการขาย',
    content: `
      <h2>ปัญหาใหญ่ของคนยิงแอด: "ลูกค้าทักมาเยอะ แต่ปิดยอดแทบไม่ได้"</h2>
      <p>เจ้าของแบรนด์กว่า 90% ต้องเผชิญกับปัญหายิงแอดส่งคนเข้า Inbox แชต Facebook หรือ LINE แต่ลูกค้าทักมาเพียง "สนใจค่ะ" แล้วเงียบหาย พอแอดมินตอบช้าไปเพียง 3 นาที ลูกค้าก็เลื่อนฟีดหนีไปซื้อร้านคู่แข่งทันที นี่คือสาเหตุอันดับ 1 ที่ทำให้ค่าโฆษณาแพงขึ้นแต่กำไรหดตัว</p>
      
      <h3>3 มิติทางจิตวิทยาที่เซลเพจ High-Conversion เอาชนะแชตเพจ:</h3>
      <ul>
        <li><strong>1. สะกดสายตาด้วยภาพ Cinematic 16:9 ใน 3 วินาทีแรก:</strong> โครงสร้างที่ออกแบบให้สัดส่วนภาพไม่ถูกตัวหนังสือบดบังบนหน้าจอมือถือ ทำให้ลูกค้ารับรู้ถึงความน่าเชื่อถือและความพรีเมียมของแบรนด์ได้ในทันที</li>
        <li><strong>2. ร้อยเรียงอารมณ์จาก ปัญหา (Pain Point) สู่ ทางแก้ (Solution):</strong> ไม่ใช่แค่การขายของตรงๆ แต่เป็นการเปิดแผลปัญหาของลูกค้า ยื่นทางออกที่จับต้องได้ พร้อมตารางราคาที่โปร่งใส และหลักฐานรีวิวจากผู้ใช้จริงก่อนที่จะตัดสินใจ</li>
        <li><strong>3. ฟอร์มสั่งซื้อเก็บเงินปลายทาง (COD) หน้าเดียวจบ:</strong> ลูกค้าสามารถเลือกไซส์/แพ็กเกจ กรอกที่อยู่จัดส่ง และกดยืนยันออเดอร์ได้ด้วยตนเองใน 1 นาที โดยไม่ต้องรอแอดมินตอบข้อความตลอด 24 ชั่วโมง</li>
      </ul>

      <h2>การันตีผลลัพธ์ด้วยสถาปัตยกรรมโหลดเร็ว 0.8 วินาที</h2>
      <p>งานวิจัยด้าน E-Commerce ระดับโลกยืนยันว่า เว็บไซต์ที่โหลดช้าเกิน 3 วินาที จะสูญเสียลูกค้าไปมากกว่า 53% สตูดิโอ SalesDesk Sites พัฒนาด้วย Next.js และ Edge CDN สากล ทำให้หน้าเว็บเปิดได้ทันทีใน 0.8 วิ ส่งผลให้ลูกค้าไม่กดปิดหนี และดันอัตรา Conversion Rate สูงกว่าการยิงเข้าแชตถึง 3 เท่า</p>
    `,
    featuredImage: '/images/hero-desktop.png',
    imageAlt: 'SalesDesk Sites Psychological Salepage Strategy',
    author: 'ทีมสถาปัตยกรรม SalesDesk AI',
    authorRole: 'Conversion Rate Architect',
    category: 'กลยุทธ์เซลเพจ',
    readTime: '4 นาที',
    published: true,
    publishedAt: '2026-11-10T08:00:00.000Z',
    updatedAt: '2026-11-10T14:00:00.000Z',
  },
  {
    id: '2',
    slug: 'google-pagespeed-100-sales-conversion-secrets',
    title: 'ทำไมเว็บโหลดเร็ว 0.8 วิ ถึงลดค่าแอด Google Ads ได้สูงสุด 40% และดันติดหน้า 1 Google?',
    metaDescription: 'เคล็ดลับเพิ่มคะแนน Google Ads Quality Score และ Core Web Vitals 100/100 ด้วย Next.js สถาปัตยกรรมที่ช่วยลดต้นทุนค่าคลิก พร้อมดัน SEO ติดหน้าแรก',
    focusKeyword: 'วิธีทำให้เว็บโหลดเร็ว 0.8 วิ',
    content: `
      <h2>ความลับของอัลกอริทึม Google: ทำไมเว็บเร็วจึงจ่ายค่าแอดถูกกว่า?</h2>
      <p>นักการตลาดจำนวนมากเข้าใจผิดว่า การยิง Google Search Ads ให้ได้อันดับ 1 ต้องประมูลด้วยงบประมาณเงินที่สูงที่สุดเท่านั้น แต่ในความเป็นจริง Google ใช้สูตร <code>Ad Rank = Bid × Quality Score</code> ในการตัดสินอันดับ</p>
      
      <p>หนึ่งในปัจจัยหลักของคะแนนคุณภาพ (Quality Score) คือ <strong>Landing Page Experience</strong> หรือความเร็วและประสบการณ์ในการเปิดหน้าเว็บ หากหน้าเว็บโหลดช้า ผู้ใช้กดคลิกแล้วต้องรอนาน Google จะลดคะแนนคุณภาพลง ทำให้คุณต้องจ่ายค่าคลิก (CPC) แพงขึ้นเพื่อรักษาอันดับ</p>

      <h3>3 ประโยชน์หลักเมื่อเว็บไซต์ผ่านเกณฑ์ Core Web Vitals 100/100:</h3>
      <ul>
        <li><strong>ลดต้นทุนค่าคลิก Google Ads ทันที 20-40%:</strong> ด้วยหน้า Landing Page ที่โหลดขึ้นมาใน 0.8 วินาที Google จะให้คะแนน Landing Page Experience ในระดับ "Above Average" ทำให้คุณประมูลชนะคู่แข่งได้ในราคาที่ประหยัดกว่า</li>
        <li><strong>ดันอันดับผลการค้นหาธรรมชาติ (Organic SEO):</strong> ตั้งแต่ปี 2021 เป็นต้นมา Google ใช้ Page Experience Signals และความเร็วบนมือถือเป็นเกณฑ์หลักในการจัดอันดับเว็บไซต์ขึ้นหน้า 1</li>
        <li><strong>อัตราการเด้งออก (Bounce Rate) ลดลงต่ำที่สุด:</strong> ลูกค้าไม่ต้องรอการโหลดหน้าจอ สามารถรับสารและกดปุ่มสั่งซื้อหรือทักแชตได้ทันที</li>
      </ul>

      <h2>แก้ปัญหาเว็บ WordPress โหลดช้าด้วย Modern Web Architecture</h2>
      <p>เซลเพจที่สร้างจาก WordPress หรือ Page Builder มักมีปลั๊กอินและสคริปต์ส่วนเกินหนาแน่น ทำให้โหลดช้า 3-6 วินาที ในขณะที่ SalesDesk Sites พัฒนาด้วยสถาปัตยกรรม Next.js App Router ที่ตัดไฟล์ขยะออกทั้งหมด เหลือเพียงโค้ดที่จำเป็น ทำให้เบราว์เซอร์เรนเดอร์ได้รวดเร็วทันที</p>
    `,
    featuredImage: '/images/line-oa-cards/03-luxury-poolvilla.jpg',
    imageAlt: 'Google PageSpeed 100 Core Web Vitals Strategy',
    author: 'ทีมสถาปัตยกรรม SalesDesk AI',
    authorRole: 'Technical SEO Specialist',
    category: 'SEO & Performance',
    readTime: '5 นาที',
    published: true,
    publishedAt: '2026-11-09T09:00:00.000Z',
    updatedAt: '2026-11-10T15:00:00.000Z',
  },
  {
    id: '3',
    slug: 'how-to-setup-conversion-tracking-meta-capi',
    title: 'คู่มือติดตั้ง Meta Conversions API (CAPI) คู่กับ Pixel ให้แอดแม่นยำ ไม่ตกหล่นจาก iOS 2026',
    metaDescription: 'เจาะลึกวิธีติดตั้ง Meta Pixel + Server-Side CAPI และ Custom Event Tracking ทุกปุ่ม เพื่อส่งข้อมูลให้ AI โฆษณาเรียนรู้กลุ่มลูกค้าที่โอนเงินจริง',
    focusKeyword: 'วิธีติดตั้ง Meta Pixel CAPI',
    content: `
      <h2>ทำไมการติดตั้ง Meta Pixel แบบ Browser ธรรมดาถึงไม่เพียงพออีกต่อไป?</h2>
      <p>หลังจากมาตรการความเป็นส่วนตัวของ Apple iOS และการบล็อก Third-party Cookies ของเบราว์เซอร์สมัยใหม่ ข้อมูลการซื้อขายจาก Browser Pixel ปกติจะสูญหายไประหว่างทางมากกว่า 30-40% ส่งผลให้ระบบ AI ของ Facebook และ Instagram เรียนรู้กลุ่มเป้าหมายได้ไม่แม่นยำ และนำไปสู่ค่าแอดที่แพงขึ้นอย่างต่อเนื่อง</p>

      <h3>ทางรอดของนักยิงแอด: Meta Conversions API (CAPI) คืออะไร?</h3>
      <p>Conversions API (CAPI) คือระบบส่งสัญญาณ Conversion ตรงจากเซิร์ฟเวอร์ (Server-to-Server) ไปยังฐานข้อมูลของ Meta โดยตรง ไม่ผ่านเบราว์เซอร์ของมือถือ ทำให้ข้อมูลไม่ถูกบล็อกโดย Ad-blocker หรือมาตรการความเป็นส่วนตัวของ iOS</p>

      <h3>สูตรสำเร็จการติดตั้ง Data Tracking แบบ Full-Stack ของ SalesDesk Sites:</h3>
      <ul>
        <li><strong>Dual Tracking (Pixel + CAPI):</strong> ส่งข้อมูลทั้งสองช่องทางพร้อมระบบ Deduplication ป้องกันการนับข้อมูลซ้ำ ทำให้เก็บข้อมูลยอดขายได้ครบ 100%</li>
        <li><strong>Google Tag Manager (GTM) & GA4 เต็มระบบ:</strong> จัดการแท็กทั้งหมดในที่เดียว ควบคุมการทำงานร่วมกันระหว่าง Meta, Google, TikTok และ LINE Tag</li>
        <li><strong>Custom Event Tracking ทุกพฤติกรรม:</strong> บันทึกทุกเหตุการณ์สำคัญ เช่น ปุ่มกดโทรออก, ปุ่มคลิกแอดไลน์ (@fhu6688s), ฟอร์มลงทะเบียน Lead, และยอดสั่งซื้อ COD เพื่อใช้ทำ Smart Retargeting ดึงลูกค้าเก่ากลับมาซื้อซ้ำ</li>
      </ul>
    `,
    featuredImage: '/images/line-oa-cards/06-salesdesk-ai-closing.jpg',
    imageAlt: 'Meta Conversions API and Omnichannel Tracking Architecture',
    author: 'ทีมสถาปัตยกรรม SalesDesk AI',
    authorRole: 'Data Tracking Engineer',
    category: 'Ad Tech & Tracking',
    readTime: '6 นาที',
    published: true,
    publishedAt: '2026-11-08T10:00:00.000Z',
    updatedAt: '2026-11-10T16:00:00.000Z',
  },
  {
    id: '4',
    slug: 'mobile-first-salepage-design-psychology',
    title: 'จิตวิทยาดีไซน์เซลเพจบนมือถือ 100%: ทำไมสัดส่วน 16:9 ถึงหยุดนิ้วลูกค้าได้ใน 3 วินาทีแรก',
    metaDescription: 'เจาะลึกหลัก Visual Hierarchy และ Mobile-First Conversion Architecture ที่ทำให้ลูกค้ารู้สึกถึงความคุ้มค่าและความพรีเมียม เพิ่มยอดสั่งซื้อทันที',
    focusKeyword: 'เซลเพจพรีเมียม บนมือถือ',
    content: `
      <h2>ทำไม 85% ของยอดสั่งซื้อออนไลน์ในไทยจึงเกิดขึ้นบนหน้าจอมือถือ?</h2>
      <p>พฤติกรรมผู้บริโภคยุคใหม่ตัดสินใจสั่งซื้อสินค้าและบริการผ่านสมาร์ตโฟนเกือบทั้งหมด แต่เว็บไซต์แบบดั้งเดิมส่วนใหญ่ถูกออกแบบบนจอคอมพิวเตอร์ก่อน แล้วย่อส่วนลงมา ทำให้ตัวหนังสือทับรูปภาพ โหลดช้า และปุ่มสั่งซื้อกดได้ยากลำบาก</p>

      <h3>3 กฎเหล็กจิตวิทยาการออกแบบสไตล์ SalesDesk Sites:</h3>
      <ul>
        <li><strong>1. สัดส่วนภาพ Cinematic 16:9 ไร้ข้อความบดบัง:</strong> แยกส่วนรูปภาพสินค้าหรือบริการให้อยู่ด้านบนอย่างสง่างาม ไม่ใส่ตัวหนังสือบังจุดโฟกัส ทำให้สายตาลูกค้าซึมซับความสวยงามและอารมณ์ร่วมได้ใน 3 วินาทีแรก</li>
        <li><strong>2. Thumb-Zone Optimization:</strong> ทุกปุ่ม Call-to-Action เช่น ปุ่มโทรด่วน, ปุ่มแอดไลน์, หรือปุ่มสั่งซื้อ ถูกวางในตำแหน่งที่นิ้วโป้งเอื้อมถึงง่ายที่สุด ลดแรงต้าน (Friction) ในการกดสั่งซื้อ</li>
        <li><strong>3. โครงสร้างการเล่าเรื่องแบบ Problem-Agitate-Solve (PAS):</strong> เปิดแผลปัญหา ขยี้ความกังวลใจ แล้วมอบทางออกที่คุ้มค่า ปิดท้ายด้วยโปรโมชันจำกัดเวลาที่กระตุ้นการตัดสินใจทันที</li>
      </ul>
    `,
    featuredImage: '/images/line-oa-cards/02-fashion-ecommerce.jpg',
    imageAlt: 'Mobile-First Psychological Salepage Design Architecture',
    author: 'ทีมสถาปัตยกรรม SalesDesk AI',
    authorRole: 'Conversion UI/UX Designer',
    category: 'UI/UX จิตวิทยาการขาย',
    readTime: '5 นาที',
    published: true,
    publishedAt: '2026-11-07T08:30:00.000Z',
    updatedAt: '2026-11-10T16:30:00.000Z',
  },
  {
    id: '5',
    slug: 'google-ads-quality-score-conversion-rate',
    title: 'เจาะลึก 5 เทคนิคดัน Google Ads Quality Score ให้เต็ม 10 และลดต้นทุนค่าคลิกสูงสุด 40%',
    metaDescription: 'วิธีปรับแต่งความเร็วเว็บไซต์ Landing Page Experience และการจัดโครงสร้าง SEO On-Page ให้ Google มองว่าหน้าเว็บของคุณมีคุณภาพสูงสุดในหมวดธุรกิจ',
    focusKeyword: 'วิธีลดค่าคลิก Google Ads',
    content: `
      <h2>ความสัมพันธ์ระหว่าง Quality Score กับผลกำไรของธุรกิจ</h2>
      <p>หากคุณได้ Quality Score ระดับ 10/10 จาก Google คุณจะได้ส่วนลดค่าคลิก (CPC Discount) สูงสุดถึง 50% เมื่อเทียบกับค่าเฉลี่ยของตลาด ในทางตรงกันข้าม หากเว็บไซต์โหลดช้าหรือเนื้อหาไม่ตรงกับคำค้นหา คุณอาจต้องจ่ายค่าคลิกแพงขึ้นถึง 400% เพื่อให้อยู่อันดับเดียวกัน</p>

      <h3>5 เช็กลิสต์ปรับแต่งเซลเพจให้ได้คะแนนเต็ม 10:</h3>
      <ul>
        <li><strong>1. Largest Contentful Paint (LCP) ต่ำกว่า 1.2 วินาที:</strong> โหลดภาพและหัวข้อหลักขึ้นมาแทบจะในทันทีด้วย Next.js และ CDN สากล</li>
        <li><strong>2. ความสอดคล้องของ Keyword (Relevance):</strong> พาดหัวของเซลเพจต้องตรงกับข้อความโฆษณาใน Google Search Ads 100%</li>
        <li><strong>3. ติดตั้ง Advanced Schema (ProfessionalService + FAQPage):</strong> ให้ Googlebot เข้าใจบริบทของธุรกิจและดึง Rich Snippets ไปแสดงบนหน้าผลการค้นหา</li>
        <li><strong>4. ความปลอดภัยและความน่าเชื่อถือ (HTTPS & Privacy):</strong> มี SSL ใบรับรองความปลอดภัยและข้อมูลนโยบายความเป็นส่วนตัวที่โปร่งใส</li>
        <li><strong>5. ปราศจาก Pop-up กวนใจ (Zero Intrusive Interstitials):</strong> ประสบการณ์เปิดหน้าเว็บที่ราบรื่น ไม่มีป๊อปอัปบังสายตาลูกค้า</li>
      </ul>
    `,
    featuredImage: '/images/line-oa-cards/04-wealth-insurance.jpg',
    imageAlt: 'Google Ads Quality Score Optimization Guide',
    author: 'ทีมสถาปัตยกรรม SalesDesk AI',
    authorRole: 'Google Ads & SEO Strategist',
    category: 'Google Ads & SEO',
    readTime: '6 นาที',
    published: true,
    publishedAt: '2026-11-06T11:00:00.000Z',
    updatedAt: '2026-11-10T17:00:00.000Z',
  },
];

export function getAllPosts(): Post[] {
  return posts.filter((p) => p.published);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug && p.published);
}

export function getRelatedPosts(currentSlug: string, limit = 2): Post[] {
  return posts
    .filter((p) => p.slug !== currentSlug && p.published)
    .slice(0, limit);
}
