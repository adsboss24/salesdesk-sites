import { NextResponse } from 'next/server';
import { stripe, STRIPE_PLANS } from '@/lib/stripe';

async function createCheckoutSession(
  planId: string,
  origin: string,
  customerName?: string,
  customerEmail?: string
) {
  const plan = STRIPE_PLANS[planId];
  if (!plan) {
    return { error: 'ไม่พบแพ็กเกจที่เลือก กรุณาตรวจสอบ planId อีกครั้ง', status: 400 };
  }

  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes('placeholder')) {
    if (plan.paymentLinkUrl) {
      return {
        url: plan.paymentLinkUrl,
        sessionId: `plink_${plan.id}`,
        status: 200,
      };
    }
    return {
      error: 'Stripe API Key ยังไม่ได้ถูกตั้งค่าในระบบ',
      message: 'กรุณาตั้งค่า STRIPE_SECRET_KEY ใน Vercel Environment Variables',
      isConfigured: false,
      status: 503,
    };
  }

  const lineItem: any = {
    price_data: {
      currency: plan.currency,
      product_data: {
        name: plan.name,
        description: plan.description,
        images: [`${origin}/images/pricing/starter-monthly.jpg`],
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
    payment_method_types: plan.mode === 'subscription' ? ['card'] : ['card', 'promptpay'],
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
  return { url: session.url, sessionId: session.id, status: 200 };
}

export async function GET(request: Request) {
  try {
    const urlObj = new URL(request.url);
    const planId = urlObj.searchParams.get('plan') || urlObj.searchParams.get('planId') || 'starter';
    const customerName = urlObj.searchParams.get('name') || urlObj.searchParams.get('customerName') || undefined;
    const customerEmail = urlObj.searchParams.get('email') || urlObj.searchParams.get('customerEmail') || undefined;
    const origin = urlObj.origin || 'https://salesdesk-sites.vercel.app';

    const result = await createCheckoutSession(planId, origin, customerName, customerEmail);
    if (result.url) {
      return NextResponse.redirect(result.url, 303);
    }

    return NextResponse.redirect(`${origin}/#pricing`, 302);
  } catch (err: any) {
    console.error('Stripe GET Checkout Error:', err);
    return NextResponse.redirect('https://salesdesk-sites.vercel.app/#pricing', 302);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { planId = 'pro', customerEmail, customerName } = body;
    const origin = request.headers.get('origin') || 'https://salesdesk-sites.vercel.app';

    const result = await createCheckoutSession(planId, origin, customerName, customerEmail);
    if (result.error) {
      return NextResponse.json(result, { status: result.status });
    }

    return NextResponse.json({
      url: result.url,
      sessionId: result.sessionId,
    });
  } catch (err: any) {
    console.error('Stripe Checkout Error:', err);
    return NextResponse.json(
      { error: err.message || 'เกิดข้อผิดพลาดในการสร้างเซสชันชำระเงิน' },
      { status: 500 }
    );
  }
}
