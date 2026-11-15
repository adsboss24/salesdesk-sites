export interface SupperSurfacePost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  content: string;
  featuredImage: string;
  imageAlt: string;
  author: string;
  authorRole: string;
  category: string;
  categoryName: string;
  readTime: string;
  published: boolean;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
}

export const supperSurfacePosts: SupperSurfacePost[] = [
  {
    id: '1',
    slug: 'mcm-flexible-stone-veneer-architectural-guide',
    title: 'เจาะลึกหินวีเนียร์ Veneer & MCM: นวัตกรรมหินแผ่นบางยืดหยุ่นดัดโค้งได้ น้ำหนักเบา ทางเลือกใหม่แทนหินธรรมชาติในงานสถาปัตยกรรม',
    metaDescription: 'คู่มือนวัตกรรมหินวีเนียร์ Veneer & MCM (Modified Clay Material) หินแผ่นบางดัดโค้งได้ น้ำหนักเบากว่าหินจริง 80% ไม่ลามไฟ ติดตั้งง่าย ไร้ภาระโครงสร้าง ตอบโจทย์งานตกแต่งเสากลมและ Facade โมเดิร์น',
    featuredImage: '/images/suppersurface/mcm-stone.jpg',
    imageAlt: 'หินวีเนียร์ Veneer & MCM Flexible Stone นวัตกรรมหินแผ่นบางดัดโค้งได้ Fameline Products',
    author: 'เสาวลักษณ์ นุ่นหนู (คุณแอล)',
    authorRole: 'ผู้เชี่ยวชาญวัสดุปิดผิวสถาปัตยกรรม Fameline Group',
    category: 'mcm-stone',
    categoryName: 'หินวีเนียร์ & MCM',
    readTime: '6 นาที',
    published: true,
    publishedAt: '2026-11-15T08:00:00.000Z',
    updatedAt: '2026-11-15T09:00:00.000Z',
    keywords: ['หินวีเนียร์', 'หิน MCM', 'Flexible Stone Veneer', 'หินดัดโค้งได้', 'วัสดุปิดผิวผนัง', 'หินเทียมน้ำหนักเบา', 'Fameline Products'],
    content: `
      <h2>1. จุดเริ่มต้นและนิยามของนวัตกรรมหิน MCM (Modified Clay Material)</h2>
      <p>ในงานออกแบบสถาปัตยกรรมยุคใหม่ ความสวยงามสง่างามของ <strong>"หินธรรมชาติ"</strong> ยังคงเป็นเสน่ห์อมตะที่เจ้าของโครงการและสถาปนิกต้องการ แต่ข้อจำกัดดั้งเดิมของหินแผ่นใหญ่คือ <em>น้ำหนักที่มหาศาล (Heavy Dead Load)</em>, ความเปราะบางแตกร้าวง่าย, ความหนาที่กินพื้นที่ใช้สอยภายใน และความยากลำบากในการนำไปปิดผิวทรงกระบอกหรือผนังโค้ง</p>
      
      <p>นวัตกรรม <strong>หินวีเนียร์ MCM (Modified Clay Material)</strong> และ <strong>Flexible Stone Veneer</strong> จึงถูกคิดค้นขึ้นเพื่อทลายทุกขีดจำกัด โดยการนำแร่ดินเหนียวธรรมชาติที่ผ่านการดัดแปลงโมเลกุลด้วยอุณหภูมิและกระบวนการทางวิทยาศาสตร์ขั้นสูง ผสานพื้นผิวสัมผัสจริงของหินธรรมชาติ ทำให้ได้แผ่นปิดผิวที่มีความยืดหยุ่นสูง มีความหนาเพียง <strong>2 - 4 มิลลิเมตร</strong> และมีน้ำหนักเบากว่าหินแกรนิตหรือหินอ่อนทั่วไปถึง <strong>75% - 85%</strong></p>

      <h2>2. ตารางเปรียบเทียบ: หินธรรมชาติแท้ vs หินวีเนียร์ MCM</h2>
      <table class="w-full my-6 text-left border-collapse border border-slate-700 text-sm">
        <thead>
          <tr class="bg-slate-900 text-amber-400">
            <th class="p-3 border border-slate-700">คุณสมบัติ</th>
            <th class="p-3 border border-slate-700">หินธรรมชาติแบบดั้งเดิม</th>
            <th class="p-3 border border-slate-700">หินวีเนียร์ MCM (Supper Surface)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800 text-slate-300">
          <tr>
            <td class="p-3 font-semibold">น้ำหนักเฉลี่ย</td>
            <td class="p-3 text-rose-400">45 - 60 กก./ตร.ม. (เป็นภาระโครงสร้างสูง)</td>
            <td class="p-3 text-emerald-400">3.5 - 5.5 กก./ตร.ม. (เบากว่าเดิม 80%)</td>
          </tr>
          <tr>
            <td class="p-3 font-semibold">ความยืดหยุ่น (Flexibility)</td>
            <td class="p-3 text-rose-400">แข็งกรอบ ดัดโค้งไม่ได้ เสี่ยงแตกร้าว</td>
            <td class="p-3 text-emerald-400">ดัดโค้งได้รัศมีแคบ (เสากลม, ผนัง Wave)</td>
          </tr>
          <tr>
            <td class="p-3 font-semibold">ความหนาของวัสดุ</td>
            <td class="p-3">20 - 30 มม. (เปลืองพื้นที่ภายใน)</td>
            <td class="p-3 text-emerald-400">เพียง 2 - 4 มม. (ประหยัดพื้นที่ 100%)</td>
          </tr>
          <tr>
            <td class="p-3 font-semibold">ระบบการติดตั้ง</td>
            <td class="p-3">ต้องใช้เหล็กแห้ง (Dry Hanging) ต้นทุนสูง</td>
            <td class="p-3 text-emerald-400">ติดตั้งด้วยกาวโพลียูรีเทน รวดเร็ว ปลอดภัย</td>
          </tr>
          <tr>
            <td class="p-3 font-semibold">ความปลอดภัยอาคารสูง</td>
            <td class="p-3 text-rose-400">อันตรายเมื่อเกิดแผ่นดินไหว/หลุดร่วง</td>
            <td class="p-3 text-emerald-400">ปลอดภัยสูง ไม่แตกเป็นเสี่ยงคม ทนไฟ</td>
          </tr>
        </tbody>
      </table>

      <h2>3. การประยุกต์ใช้งานในโครงการสถาปัตยกรรมระดับไฮเอนด์</h2>
      <ul>
        <li><strong>การปิดผิวเสากลม (Circular Columns):</strong> งานเสากลมในโรงแรม คอนโดมิเนียม และศูนย์การค้า สามารถห่อหุ้มด้วยหิน MCM ได้อย่างไร้รอยต่อหนาเตอะ ดัดตามรัศมีเสาได้อย่างแนบสนิท</li>
        <li><strong>ผนัง Facade ภายนอกอาคาร:</strong> ทนทานต่อรังสี UV, ทนกรด-ด่างจากฝนกรด และไม่ดูดซึมน้ำ ป้องกันการเกิดคราบเชื้อราและตะไคร่น้ำ</li>
        <li><strong>งานรีโนเวทอาคารเก่า (Renovation):</strong> สามารถติดตั้งทับผนังกระเบื้องเดิมหรือผนังปูนฉาบเดิมได้ทันที โดยไม่ต้องทุบรื้อโครงสร้างเดิม ช่วยลดระยะเวลาก่อสร้างและลดเศษฝุ่นมลภาวะ</li>
      </ul>

      <h2>4. วิธีการสั่งซื้อและขอใบเสนอราคาจาก Fameline</h2>
      <p>หินวีเนียร์ MCM ของ <strong>Supper Surface โดย บจก. เฟมไลน์ โปร์ดักส์</strong> มีสต็อกพร้อมจัดส่งหลากหลายลวดลาย เช่น หินทราเวอร์ทีน (Travertine), หินแกรนิตพ่นไฟ, หินชนวน (Slate) และลายหินธรรมชาติสไตล์โมเดิร์น สถาปนิกและผู้รับเหมาสามารถสั่งซื้อและขอตัวอย่างชิ้นงานจริง (Sample Box) ได้ผ่านระบบ <a href="/supper-surface#minimall-catalog" class="text-amber-400 font-bold underline hover:text-amber-300">MiniMall ของ Supper Surface</a> หรือติดต่อคุณแอลได้โดยตรงที่เบอร์ 066-168-5157</p>
    `,
  },
  {
    id: '2',
    slug: 'aluminum-composite-deco-vs-altex-fr-guide',
    title: 'คู่มือเลือกอลูมิเนียมคอมโพสิต DECO vs ALTEX: เปรียบเทียบสเปกไส้ทนไฟ FR Class A2 ระบบสี PVDF สำหรับ Facade และงานหลังคา',
    metaDescription: 'เจาะลึกความแตกต่างระหว่างแผ่นอลูมิเนียมคอมโพสิต DECO และ ALTEX จาก Fameline แนะนำการเลือกไส้กันไฟลาม FR Class A2 มาตรฐานอาคารสูง ระบบเคลือบสี PVDF Kynar 500 ทนทาน 20 ปี และงานหลังคา DECO Canopy',
    featuredImage: '/images/suppersurface/composite-altex.jpg',
    imageAlt: 'แผ่นอลูมิเนียมคอมโพสิต DECO และ ALTEX สเปกไส้ทนไฟ FR Fameline Products',
    author: 'เสาวลักษณ์ นุ่นหนู (คุณแอล)',
    authorRole: 'ผู้เชี่ยวชาญวัสดุปิดผิวสถาปัตยกรรม Fameline Group',
    category: 'composite-panel',
    categoryName: 'อลูมิเนียมคอมโพสิต',
    readTime: '7 นาที',
    published: true,
    publishedAt: '2026-11-15T09:00:00.000Z',
    updatedAt: '2026-11-15T09:30:00.000Z',
    keywords: ['อลูมิเนียมคอมโพสิต', 'คอมโพสิต DECO', 'คอมโพสิต ALTEX', 'ไส้ทนไฟ FR Class A2', 'PVDF Kynar 500', 'Facade อาคารสูง', 'Fameline Products'],
    content: `
      <h2>1. ความสำคัญของมาตรฐานแผ่นอลูมิเนียมคอมโพสิตในงานอาคาร</h2>
      <p>แผ่นอลูมิเนียมคอมโพสิต (Aluminum Composite Panel - ACP) เป็นวัสดุเปลือกอาคาร (Building Envelope) ที่ได้รับความนิยมสูงสุดในประเทศไทยมากว่า 3 ทศวรรษ ด้วยคุณสมบัติที่ให้น้ำหนักเบา ผิวสัมผัสเรียบตึงทันสมัย และสามารถตัด พับ เซาะร่อง ดัดโค้ง ได้อย่างอิสระตามจินตนาการของผู้ออกแบบ</p>
      
      <p>อย่างไรก็ตาม ปัจจัยสำคัญที่สุดที่สถาปนิกและวิศวกรต้องพิจารณาในปัจจุบัน คือ <strong>"ความปลอดภัยด้านอัคคีภัย (Fire Safety)"</strong> และ <strong>"ความทนทานของชั้นเคลือบสีต่อรังสี UV"</strong> เพื่อป้องกันปัญหาสีซีดจางและแผ่นโก่งงอเป็นคลื่น (Oil Canning)</p>

      <h2>2. เปรียบเทียบสเปกระหว่าง DECO และ ALTEX</h2>
      <ul>
        <li><strong>อลูมิเนียมคอมโพสิต DECO (Standard & Roof Canopy):</strong> เหมาะสำหรับงานตกแต่งอาคารทั่วไป โชว์รูม ป้ายสัญลักษณ์ และงานหลังคากันสาด (DECO Roof) ผิวเคลือบสีทนทาน มีให้เลือกกว่า 50 เฉดสี คุ้มค่าด้านงบประมาณ</li>
        <li><strong>อลูมิเนียมคอมโพสิต ALTEX (Premium Architectural FR):</strong> สเปกระดับเมกะโปรเจกต์และอาคารสูง (High-Rise Building) มาพร้อมไส้กลางทนไฟชนิดพิเศษ <em>Fire-Retardant (FR) Class A2 / B1</em> ตามมาตรฐานสากล ASTM E84 และ EN 13501-1 เคลือบผิวด้วยสี <strong>PVDF Kynar 500</strong> แท้ 100% รับประกันความทนทานของฟิล์มสียาวนาน 15-20 ปี</li>
      </ul>

      <h2>3. นวัตกรรม DECO งานหลังคาและกันสาด (Canopy & Roofing System)</h2>
      <p>ปัญหาที่พบบ่อยในการใช้คอมโพสิตทำหลังคากันสาด คือการรั่วซึมบริเวณรอยต่อและการเกิดเสียงดังเมื่อฝนตก แต่ด้วยระบบ <strong>DECO Roof System ของ Fameline</strong> ตัวแผ่นถูกออกแบบให้พับขึ้นรูปขอบกล่องพร้อมระบบรางระบายน้ำซ่อนภายใน (Concealed Gutter) ช่วยแก้ปัญหาน้ำขังและน้ำรั่วได้อย่างเบ็ดเสร็จเด็ดขาด</p>

      <h2>4. กฎหมายควบคุมอาคารกับการเลือกใช้ไส้ทนไฟ</h2>
      <p>ตามกฎกระทรวงและมาตรฐานความปลอดภัยด้านอัคคีภัยของสมาคมวิศวกรรมสถานแห่งประเทศไทย (วสท.) อาคารสาธารณะ โรงพยาบาล สถานศึกษา และอาคารสูงเกิน 23 เมตร จำเป็นต้องใช้เปลือกอาคารที่มีคุณสมบัติไม่ลามไฟ แผ่นคอมโพสิต <strong>ALTEX FR</strong> จึงเป็นคำตอบที่ผ่านการทดสอบและมีใบรับรองผลแล็บจากสถาบันที่น่าเชื่อถือ พร้อมสำหรับการยื่นตรวจแบบอนุมัติงานราชการและโครงการ B2B ทุกประเภท</p>
    `,
  },
  {
    id: '3',
    slug: 'aluminum-linear-ceiling-85c-vs-85f-comparison',
    title: 'เปรียบเทียบระบบฝ้าอลูมิเนียม 85C vs 85F: นวัตกรรมฝ้าเพดานเส้นยาว ไร้สนิม ป้องกันความชื้น สำหรับโถงอาคารและงานภายนอก',
    metaDescription: 'คู่มือเลือกสเปกระบบฝ้าอลูมิเนียมเส้นยาว Fameline Linear Ceiling รุ่น 85 C (รอยต่อชิด) และ 85 F (ร่อง Reveal Joint 15 มม.) ปลอดสนิมตลอดอายุการใช้งาน ทนลม ทนชื้น เหมาะสำหรับชายคาภายนอกและล็อบบี้หรู',
    featuredImage: '/images/suppersurface/ceiling-85c.jpg',
    imageAlt: 'ระบบฝ้าอลูมิเนียมเส้นยาว Linear Ceiling 85C และ 85F Fameline Products',
    author: 'เสาวลักษณ์ นุ่นหนู (คุณแอล)',
    authorRole: 'ผู้เชี่ยวชาญวัสดุปิดผิวสถาปัตยกรรม Fameline Group',
    category: 'linear-ceiling',
    categoryName: 'ฝ้าอลูมิเนียม 85C & 85F',
    readTime: '5 นาที',
    published: true,
    publishedAt: '2026-11-15T10:00:00.000Z',
    updatedAt: '2026-11-15T10:15:00.000Z',
    keywords: ['ฝ้า 85C', 'ฝ้า 85F', 'ฝ้าอลูมิเนียมเส้นยาว', 'Linear Ceiling', 'ฝ้าเพดานภายนอก', 'ฝ้ากันสนิม', 'Fameline Products'],
    content: `
      <h2>1. ปัญหาของฝ้าเพดานแบบเดิมในงานภายนอกและกึ่งภายนอก</h2>
      <p>ฝ้ายิปซั่มบอร์ดและฝ้าสมาร์ทบอร์ดทั่วไป มักเจอปัญหาคราบเชื้อรา บวมน้ำ ปลวกกิน และแตกร้าวตามแนวรอยต่อเมื่อสัมผัสกับความชื้นสะสมและแรงลมภายนอกอาคาร ระบบ <strong>Linear Ceiling (ฝ้าอลูมิเนียมเส้นยาว) ของ Fameline</strong> จึงถูกพัฒนาขึ้นเพื่อเป็นมาตรฐานถาวรสำหรับอาคารสมัยใหม่</p>

      <h2>2. สเปกเด่นของฝ้าอลูมิเนียม 85 C (Closed Joint System)</h2>
      <p><strong>ฝ้าอลูมิเนียม 85 C</strong> มีหน้ากว้างแผ่น 85 มิลลิเมตร ผลิตจากอลูมิเนียมอัลลอยด์เกรดพรีเมียม ติดตั้งเข้ากับโครงสร้าง Carrier ด้วยระบบ <em>Snap-in</em> ล็อคแน่น รอยต่อระหว่างแผ่นชิดสนิทเป็นระนาบเดียวกัน ให้ความรู้สึกเรียบหรู คลีนตา เหมาะสำหรับโถงทางเดิน ปั๊มน้ำมัน ชายคาบ้านหรู และอาคารจอดรถ</p>

      <h2>3. สเปกเด่นของฝ้าอลูมิเนียม 85 F (Reveal Recessed Joint System)</h2>
      <p><strong>ฝ้าอลูมิเนียม 85 F</strong> เพิ่มลูกเล่นทางสถาปัตยกรรมด้วยการเว้นร่องรอยต่อ (Reveal Joint) กว้าง 15 มิลลิเมตร สร้างมิติเส้นสายของเงา (Shadow Line) สีดำเฉียบคม ทำให้ฝ้าเพดานดูมีเลเยอร์ลึกขึ้น นิยมนำมาจับคู่กับโคมไฟเส้นตรง <em>Linear LED</em> ในล็อบบี้โรงแรม อาคารสำนักงานเกรด A และศูนย์ประชุมระดับสากล</p>

      <h2>4. จุดเด่นด้านความคุ้มค่าเชิงวิศวกรรมของ Fameline</h2>
      <ul>
        <li><strong>สั่งผลิตความยาวตามขนาดจริง (Custom Cut-to-Length):</strong> ช่วยลดเศษตัดทิ้งหน้างานได้เกือบ 100% ประหยัดงบประมาณโครงการได้อย่างชัดเจน</li>
        <li><strong>โครงสร้าง Carrier ป้องกันแรงลม (Wind-Resistance):</strong> ผ่านการคำนวณวิศวกรรมทนต่อแรงยกตัวจากพายุลมแรงภายนอกอาคารสูง</li>
        <li><strong>ปลอดสนิมตลอดชีพ:</strong> อลูมิเนียมไม่ทำปฏิกิริยากับความชื้นและไอเกลือทะเล เหมาะสมอย่างยิ่งสำหรับโครงการริมทะเลและสระว่ายน้ำ</li>
      </ul>
    `,
  },
  {
    id: '4',
    slug: 'nichiha-japan-fiber-cement-microguard-guide',
    title: 'ทำความรู้จักแผ่นไฟเบอร์ซีเมนต์นิชิฮะ (NICHIHA Japan): นวัตกรรมผนังสำเร็จรูป ระบบคลิปล็อค ไร้รอยสกรู ทำความสะอาดตัวเองได้',
    metaDescription: 'รีวิวแผ่นผนังไฟเบอร์ซีเมนต์ NICHIHA นำเข้าจากประเทศญี่ปุ่น มาตรฐานความพรีเมียมระดับโลก เทคโนโลยี Platinum Coating สะท้อนความร้อน ระบบ MicroGuard ทำความสะอาดตัวเองด้วยน้ำฝน และระบบคลิปล็อคซ่อนหัวสกรู 100%',
    featuredImage: '/images/suppersurface/nichiha-cement.jpg',
    imageAlt: 'แผ่นไฟเบอร์ซีเมนต์นิชิฮะ NICHIHA Japan ผนังสำเร็จรูประบบคลิปล็อค Fameline',
    author: 'เสาวลักษณ์ นุ่นหนู (คุณแอล)',
    authorRole: 'ผู้เชี่ยวชาญวัสดุปิดผิวสถาปัตยกรรม Fameline Group',
    category: 'nichiha-japan',
    categoryName: 'แผ่นผนัง NICHIHA ญี่ปุ่น',
    readTime: '6 นาที',
    published: true,
    publishedAt: '2026-11-15T11:00:00.000Z',
    updatedAt: '2026-11-15T11:20:00.000Z',
    keywords: ['แผ่นไฟเบอร์ซีเมนต์นิชิฮะ', 'NICHIHA Japan', 'MicroGuard', 'ผนังคลิปล็อค', 'ผนังลายไม้ลายหิน 3D', 'ผนังกันความร้อน', 'Fameline Products'],
    content: `
      <h2>1. มาตรฐานระดับโลกจากประเทศญี่ปุ่น: แบรนด์ NICHIHA</h2>
      <p>ในประเทศญี่ปุ่นที่ให้ความสำคัญสูงสุดกับความทนทานต่อแผ่นดินไหว ฉนวนกันความร้อน และความสวยงามประณีต <strong>NICHIHA (นิชิฮะ)</strong> คือแบรนด์ผู้ผลิตแผ่นผนังไฟเบอร์ซีเมนต์ตกแต่งอันดับ 1 ที่ครองใจสถาปนิกมาอย่างยาวนาน โดยในประเทศไทย <strong>Fameline Products</strong> เป็นตัวแทนจัดจำหน่ายและให้บริการด้านวิศวกรรมติดตั้งอย่างเป็นทางการ</p>

      <h2>2. เทคโนโลยี MicroGuard: ผนังทำความสะอาดตัวเองได้ (Self-Cleaning)</h2>
      <p>หัวใจสำคัญของแผ่นผนัง NICHIHA คือชั้นเคลือบนาโนโมเลกุล <strong>MicroGuard</strong> ซึ่งมีคุณสมบัติพิเศษ 2 ประการ:</p>
      <ul>
        <li><strong>ปฏิกิริยากับแสงแดด (Photocatalytic Breakdown):</strong> เมื่อแสงแดดสัมผัสผิวหน้าแผ่น จะช่วยย่อยสลายคราบอินทรียวัตถุ ฝุ่นละออง และคราบเขม่าควันรถให้หลุดร่อนออกอย่างง่ายดาย</li>
        <li><strong>ความสามารถในการดูดซับฟิล์มน้ำ (Hydrophilic Sheet):</strong> เมื่อมีฝนตก ละอองน้ำจะแทรกตัวเข้าไปใต้คราบสกปรกแล้วชะล้างคราบฝุ่นออกไปเองตามธรรมชาติ ทำให้ตัวบ้านดูใหม่ สะอาด สดใสอยู่เสมอ โดยไม่ต้องเสียค่าใช้จ่ายในการจ้างทีมล้างผนังอาคาร</li>
      </ul>

      <h2>3. ระบบคลิปล็อค ไร้รอยเจาะหัวสกรู (Concealed Clip Installation)</h2>
      <p>การติดตั้งแผ่นผนังไฟเบอร์ซีเมนต์ทั่วไป มักต้องยิงสกรูทะลุหน้าแผ่นแล้วโป๊วสีเก็บงาน ซึ่งเมื่อเวลาผ่านไปจะเกิดรอยด่างและน้ำซึมตามรอยเจาะ แต่แผ่น NICHIHA หนา 16 มิลลิเมตร ใช้ระบบ <strong>Dry Joint Clip Lock</strong> ยึดจากด้านหลัง ทำให้พื้นผิวหน้างานเรียบเนียน 100% สวยสมบูรณ์แบบเสมือนงานประติมากรรมหินแท้</p>

      <h2>4. ลวดลาย 3 มิตินูนลึก สมจริงทุกมุมมอง</h2>
      <p>ด้วยเทคโนโลยีการกดอัดไฮดรอลิกแรงดันสูง แผ่น NICHIHA มีลวดลายให้เลือกหลากหลาย ทั้งลายหินผาธรรมชาติ (Castle Rock), ลายอิฐคอนกรีตโมเดิร์น, ลายไม้ธรรมชาติ (Wood Grain) และลายระแนงมินิมอล พร้อมรับประกันความคงทนของสีสูงสุด เหมาะสำหรับบ้านเดี่ยวระดับ Ultra Luxury, วิลล่าตากอากาศ และอาคารสำนักงานที่ต้องการความโดดเด่นไม่เหมือนใคร</p>
    `,
  },
];

export function getAllSupperSurfacePosts(): SupperSurfacePost[] {
  return supperSurfacePosts.filter((post) => post.published);
}

export function getSupperSurfacePostBySlug(slug: string): SupperSurfacePost | undefined {
  return supperSurfacePosts.find((post) => post.slug === slug && post.published);
}
