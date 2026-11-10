import fs from "fs";
import path from "path";
import { generateSeoArticle } from "../src/lib/ai-writer";
import { requestGoogleIndexing } from "../src/lib/google-indexing";

async function main() {
  const topic = process.argv[2];
  const targetKeyword = process.argv[3];

  if (!topic) {
    console.error("\n❌ ข้อผิดพลาด: กรุณาระบุหัวข้อบทความที่ต้องการเขียน");
    console.log('รูปแบบคำสั่ง: npm run generate-article -- "<หัวข้อบทความ>" "<คีย์เวิร์ดเป้าหมาย>"\n');
    process.exit(1);
  }

  console.log(`\n🚀 กำลังสั่ง AI ให้เขียนบทความ SEO สำหรับ: "${topic}"...`);
  if (targetKeyword) {
    console.log(`🎯 Focus Keyword: "${targetKeyword}"`);
  }

  try {
    const article = await generateSeoArticle({
      topic,
      targetKeyword,
    });

    console.log("\n✅ AI ร่างบทความสำเร็จเรียบร้อย!");
    console.log(`📌 ชื่อเรื่อง: ${article.title}`);
    console.log(`🔗 URL Slug: /blog/${article.slug}`);
    console.log(`📝 คำอธิบาย: ${article.metaDescription}`);
    console.log(`⏱️ เวลาอ่าน: ${article.readTime}`);

    // บันทึกเข้า src/lib/posts.ts อัตโนมัติ
    const postsFilePath = path.join(process.cwd(), "src/lib/posts.ts");
    const postsFileContent = fs.readFileSync(postsFilePath, "utf-8");

    const newPostObject = `  {
    id: '${Date.now()}',
    slug: '${article.slug}',
    title: ${JSON.stringify(article.title)},
    metaDescription: ${JSON.stringify(article.metaDescription)},
    focusKeyword: ${JSON.stringify(article.focusKeyword)},
    content: ${JSON.stringify(article.content)},
    featuredImage: '${article.featuredImage || "/images/line-oa-cards/04-wealth-insurance.jpg"}',
    imageAlt: ${JSON.stringify(article.imageAlt || article.title)},
    author: '${article.author || "ทีมสถาปัตยกรรม SalesDesk AI"}',
    authorRole: '${article.authorRole || "Conversion Rate Architect"}',
    category: '${article.category || "กลยุทธ์เซลเพจ"}',
    readTime: '${article.readTime || "5 นาที"}',
    published: true,
    publishedAt: '${new Date().toISOString()}',
    updatedAt: '${new Date().toISOString()}',
  },
`;

    const marker = "export const posts: Post[] = [\n";
    if (postsFileContent.includes(marker)) {
      const updatedContent = postsFileContent.replace(marker, marker + newPostObject);
      fs.writeFileSync(postsFilePath, updatedContent, "utf-8");
      console.log(`\n💾 เพิ่มบทความลงใน src/lib/posts.ts เรียบร้อยแล้ว!`);
      console.log(`🗺️ ระบบ Sitemap จะเพิ่ม /blog/${article.slug} ให้อัตโนมัติในการ build รอบถัดไป`);
    } else {
      console.warn("⚠️ ไม่พบตำแหน่ง marker ใน src/lib/posts.ts");
    }

    // ส่งสัญญาณเตือน Google Indexing API
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salesdesk-sites.vercel.app";
    const fullArticleUrl = `${siteUrl}/blog/${article.slug}`;

    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      console.log(`\n⚡ กำลังส่งสัญญาณแจ้ง Google Indexing API สำหรับ: ${fullArticleUrl}...`);
      const indexRes = await requestGoogleIndexing(fullArticleUrl);
      if (indexRes.success) {
        console.log("🎉 Googlebot รับทราบแล้ว! รอการเข้ามาตรวจหน้าเว็บใน 5-15 นาที");
      } else {
        console.warn(`⚠️ การแจ้ง Google Indexing: ${indexRes.error}`);
      }
    } else {
      console.log(`\nℹ️ ยังไม่ได้ตั้งค่า GOOGLE_SERVICE_ACCOUNT_EMAIL ใน .env (ข้ามการยิง Googlebot)`);
    }

    console.log(`\n🎉 เสร็จสิ้นกระบวนการ! บอสสามารถรันคำสั่ง git commit & push เพื่อให้ Vercel deploy ขึ้นเว็บจริงได้ทันทีครับ!\n`);
  } catch (error) {
    console.error("\n❌ เกิดข้อผิดพลาดในการสร้างบทความ:", error);
    process.exit(1);
  }
}

main();
