import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  typescript: true,
});

export interface PlanConfig {
  id: string;
  name: string;
  price: number;
  currency: string;
  mode: 'payment' | 'subscription';
  interval?: 'month' | 'year';
  description: string;
}

export const STRIPE_PLANS: Record<string, PlanConfig> = {
  starter: {
    id: 'starter',
    name: 'Starter Salepage (จ่ายครั้งเดียวจบ)',
    price: 2990,
    currency: 'thb',
    mode: 'payment',
    description: '1 หน้า Responsive เซลเพจ โหลดเร็ว 0.8 วิ ฟอร์มสั่งซื้อ COD ติดตั้ง Pixel ฟรีโฮสติ้งและ SSL 1 ปี',
  },
  pro: {
    id: 'pro',
    name: 'Professional Business Salepage (จ่ายครั้งเดียวจบ)',
    price: 4990,
    currency: 'thb',
    mode: 'payment',
    description: 'เซลเพจ Cinematic High-Conversion แก้ไขได้จนกว่าจะพอใจ ติดตั้ง Full Tracking GTM, GA4, CAPI, TikTok, LINE Tag และ Technical SEO',
  },
  starter_monthly: {
    id: 'starter_monthly',
    name: 'Starter Salepage (แผนทดลองใช้รายเดือน)',
    price: 490,
    currency: 'thb',
    mode: 'subscription',
    interval: 'month',
    description: 'เริ่มต้นทดลองใช้เซลเพจพรีเมียมแบบรายเดือน จ่ายสบาย ดูแลระบบให้ตลอดอายุการใช้งาน ยกเลิกได้ตลอดเวลา',
  },
  pro_monthly: {
    id: 'pro_monthly',
    name: 'Professional Business Salepage (แผนรายเดือน)',
    price: 990,
    currency: 'thb',
    mode: 'subscription',
    interval: 'month',
    description: 'ฟังก์ชันครบวงจรแบบมืออาชีพ ทั้ง Full Tracking และ SEO ในรูปแบบสมาชิกรายเดือน',
  },
};
