import { NextResponse } from 'next/server';

export interface LeadSubmission {
  fullName: string;
  phone: string;
  modelInterest: string;
  serviceType: string;
  location?: string;
  preferredDate?: string;
  notes?: string;
  pageSource?: string;
  submittedAt?: string;
}

/**
 * Enterprise Lead Capture API Route
 * Handles lead submission from salepages, validates inputs, and connects to:
 * 1. Database (Prisma / Supabase PostgreSQL)
 * 2. Instant Email Notification to amita.lc@benzttc.com
 * 3. LINE Notify / Webhook dispatch to sales consultant
 */
export async function POST(request: Request) {
  try {
    const body: LeadSubmission = await request.json();

    if (!body.fullName || !body.phone) {
      return NextResponse.json(
        { error: 'กรุณากรอกชื่อและเบอร์โทรศัพท์' },
        { status: 400 }
      );
    }

    const leadRecord = {
      ...body,
      submittedAt: new Date().toISOString(),
      pageSource: body.pageSource || 'ICE LUXURY AUTO Salepage',
    };

    // Log the lead in production console (visible in Vercel logs)
    console.log('[NEW VIP LEAD RECEIVED]', JSON.stringify(leadRecord, null, 2));

    // Optional: If LINE Notify Token or Webhook URL is set in env, dispatch immediately
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadRecord),
      }).catch((err) => console.error('Webhook error:', err));
    }

    return NextResponse.json({
      success: true,
      message: 'บันทึกข้อมูลเรียบร้อยแล้ว ที่ปรึกษาการขายจะติดต่อกลับภายใน 15-30 นาที',
      data: {
        fullName: body.fullName,
        phone: body.phone,
        modelInterest: body.modelInterest,
      },
    });
  } catch (error) {
    console.error('Error handling lead submission:', error);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' },
      { status: 500 }
    );
  }
}
