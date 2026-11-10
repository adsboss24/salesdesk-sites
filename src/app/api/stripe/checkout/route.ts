import { NextResponse } from 'next/server';
import { stripe, STRIPE_PLANS } from '@/lib/stripe';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { planId = 'pro', customerEmail, customerName } = body;

    const plan = STRIPE_PLANS[planId];
    if (!plan) {
      return NextResponse.json(
        { error: 'ไม่พบแพ็กเกจที่เลือก กรุณาตรวจสอบ planId อีกครั้ง' },
        { status: 400 }
      );
    }

    // Check if Stripe API Key is configured
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes('placeholder')) {
      return NextResponse.json(
        { 
          error: 'Stripe API Key ยังไม่ได้ถูกตั้งค่าในระบบ',
          message: 'กรุณาตั้งค่า STRIPE_SECRET_KEY ใน Vercel Environment Variables',
          isConfigured: false
        },
        { status: 503 }
      );
    }

    const origin = request.headers.get('origin') || 'https://salesdesk-sites.vercel.app';

    // Construct Line Items
    const lineItem: any = {
      price_data: {
        currency: plan.currency,
        product_data: {
          name: plan.name,
          description: plan.description,
          images: [`${origin}/images/hero-desktop.png`],
        },
        unit_amount: plan.price * 100, // Satang (1 THB = 100 Satang)
      },
      quantity: 1,
    };

    if (plan.mode === 'subscription') {
      lineItem.price_data.recurring = {
        interval: plan.interval || 'month',
      };
    }

    const sessionConfig: any = {
      payment_method_types: ['card', 'promptpay'],
      line_items: [lineItem],
      mode: plan.mode,
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan.id}`,
      cancel_url: `${origin}/payment/cancel?plan=${plan.id}`,
      metadata: {
        planId: plan.id,
        planName: plan.name,
        customerName: customerName || '',
      },
      allow_promotion_codes: true,
    };

    if (customerEmail) {
      sessionConfig.customer_email = customerEmail;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    });
  } catch (err: any) {
    console.error('Stripe Checkout Error:', err);
    return NextResponse.json(
      { error: err.message || 'เกิดข้อผิดพลาดในการสร้างเซสชันชำระเงิน' },
      { status: 500 }
    );
  }
}
