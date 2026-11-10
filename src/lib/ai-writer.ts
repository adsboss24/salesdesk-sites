import { GoogleGenAI } from "@google/genai";

export interface GeneratedArticle {
  slug: string;
  title: string;
  metaDescription: string;
  focusKeyword: string;
  category: string;
  readTime: string;
  featuredImage: string;
  imageAlt: string;
  author: string;
  authorRole: string;
  content: string;
}

export interface GenerateArticleOptions {
  topic: string;
  targetKeyword?: string;
  category?: string;
  targetAudience?: string;
}

/**
 * Generates high-converting, SEO-optimized articles tailored specifically
 * for SalesDesk Sites Knowledge Hub.
 */
export async function generateSeoArticle(
  options: GenerateArticleOptions
): Promise<GeneratedArticle> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not defined in environment variables. Please provide a valid Gemini API Key."
    );
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
You are the Chief Conversion Rate Architect & Technical SEO Strategist for "SalesDesk Sites" (https://salesdesk-sites.vercel.app).
SalesDesk Sites creates premium 16:9 Psychological Salepages and High-Speed Web Applications that load in 0.8s, eliminating the problem of "chat leads going silent" and maximizing conversion rates for Facebook Ads & Google Ads.

Your task is to write a comprehensive, high-ranking SEO article based on:
- Topic: "${options.topic}"
- Target Keyword: "${options.targetKeyword || options.topic}"
- Category: "${options.category || "กลยุทธ์เซลเพจ"}"
- Target Audience: "${options.targetAudience || "ผู้ประกอบการ เจ้าของแบรนด์ออนไลน์ และผู้ยิงแอดในไทย"}"

Strict Copywriting & SEO Guidelines:
1. Language: Professional, persuasive Thai with high authority (ภาษาไทยระดับมืออาชีพ ชัดเจน น่าเชื่อถือ นำเสนอจิตวิทยาการขายและเทคโนโลยีความเร็วสูง).
2. Title: Compelling headline incorporating target keyword with high CTR.
3. Meta Description: Exactly 140 - 155 characters that triggers curiosity and clicks.
4. Slug: English kebab-case (e.g. "psychological-salepage-converts-better").
5. Length: In-depth 1,200 - 1,800+ words.
6. Semantic HTML Markup:
   - Use <h2> and <h3>.
   - Use <ul> / <ol> bullet points.
   - Highlight key ideas with <strong>.
   - Include comparison or structural breakdown.
   - Include "คำถามที่พบบ่อย (FAQ)" with 3 relevant questions and answers.
   - Seamlessly connect the problem back to how SalesDesk Sites' 0.8s high-converting architecture solves it.
7. Return ONLY valid JSON:
{
  "slug": "english-kebab-slug",
  "title": "พาดหัวภาษาไทยที่ดึงดูดใจและตรงคีย์เวิร์ด",
  "metaDescription": "คำอธิบายสรุป 140-155 ตัวอักษรที่ชวนคลิก",
  "focusKeyword": "คีย์เวิร์ดเป้าหมาย",
  "category": "กลยุทธ์เซลเพจ",
  "readTime": "5 นาที",
  "featuredImage": "/images/line-oa-cards/04-wealth-insurance.jpg",
  "imageAlt": "ภาพประกอบพร้อมคีย์เวิร์ด",
  "author": "ทีมสถาปัตยกรรม SalesDesk AI",
  "authorRole": "Conversion Rate Architect",
  "content": "<p>เปิดเรื่องด้วยปัญหา...</p><h2>หัวข้อ 1</h2><p>...</p>"
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      temperature: 0.7,
    },
  });

  const responseText = response.text?.trim() || "";

  try {
    return JSON.parse(responseText);
  } catch (err) {
    console.error("Gemini JSON parse failed:", responseText);
    throw new Error(`Invalid JSON returned from Gemini: ${err instanceof Error ? err.message : String(err)}`);
  }
}
