import { NextResponse } from 'next/server';

export interface LeadSubmission {
  fullName: string;
  phone: string;
  modelInterest?: string;
  serviceType?: string;
  location?: string;
  preferredDate?: string;
  notes?: string;
  pageSource?: string;
  submittedAt?: string;
}

/**
 * Helper to construct luxury LINE Flex Message for new VIP Leads
 */
function buildLineLeadFlexMessage(data: LeadSubmission) {
  const cleanPhone = (data.phone || '').replace(/[^0-9]/g, '');
  const timestamp = new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });
  const sourceName = data.pageSource || 'SalesDesk Sites';
  const interestText = data.modelInterest || data.serviceType || 'บริการทั่วไป / สอบถามข้อมูล';

  return {
    type: 'flex',
    altText: `🎯 ลีดใหม่จากเว็บ: คุณ ${data.fullName} (${data.phone})`,
    contents: {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#0F172A',
        paddingAll: '18px',
        contents: [
          {
            type: 'text',
            text: 'SALESDESK AI • VIP LEAD ALERT',
            color: '#14B8A6',
            weight: 'bold',
            size: 'xxs',
            letterSpacing: '1px',
          },
          {
            type: 'text',
            text: '🎯 มีผู้สนใจติดต่อใหม่เข้าระบบ!',
            color: '#FFFFFF',
            weight: 'bold',
            size: 'lg',
            margin: 'xs',
          },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'sm',
            contents: [
              {
                type: 'text',
                text: `แหล่งที่มา: ${sourceName}`,
                color: '#94A3B8',
                size: 'xs',
                flex: 8,
                wrap: true,
              },
              {
                type: 'text',
                text: 'VIP LEAD',
                color: '#FDE68A',
                size: 'xxs',
                weight: 'bold',
                align: 'end',
                flex: 4,
              },
            ],
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '18px',
        contents: [
          // Customer Profile Box
          {
            type: 'box',
            layout: 'vertical',
            backgroundColor: '#F8FAFC',
            cornerRadius: '12px',
            paddingAll: '12px',
            contents: [
              {
                type: 'text',
                text: 'ข้อมูลผู้ติดต่อ / ลูกค้า',
                size: 'xs',
                color: '#64748B',
                weight: 'bold',
              },
              {
                type: 'text',
                text: data.fullName,
                size: 'md',
                weight: 'bold',
                color: '#0F172A',
                margin: 'xs',
              },
              {
                type: 'text',
                text: `📞 เบอร์โทรศัพท์: ${data.phone}`,
                size: 'sm',
                color: '#0284C7',
                weight: 'bold',
                margin: 'xs',
              },
            ],
          },

          // Separator
          { type: 'separator', margin: 'md', color: '#E2E8F0' },

          // Lead Details
          {
            type: 'box',
            layout: 'vertical',
            margin: 'md',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  { type: 'text', text: 'สิ่งที่สนใจ:', size: 'xs', color: '#64748B', flex: 4 },
                  { type: 'text', text: interestText, size: 'xs', color: '#0F172A', weight: 'bold', align: 'end', flex: 8, wrap: true },
                ],
              },
              data.serviceType && data.serviceType !== data.modelInterest ? {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  { type: 'text', text: 'ประเภทบริการ:', size: 'xs', color: '#64748B', flex: 4 },
                  { type: 'text', text: data.serviceType, size: 'xs', color: '#0F172A', align: 'end', flex: 8, wrap: true },
                ],
              } : null,
              data.preferredDate ? {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  { type: 'text', text: 'วันที่สะดวก/นัดหมาย:', size: 'xs', color: '#64748B', flex: 5 },
                  { type: 'text', text: data.preferredDate, size: 'xs', color: '#059669', weight: 'bold', align: 'end', flex: 7, wrap: true },
                ],
              } : null,
              data.location ? {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  { type: 'text', text: 'สถานที่ / จังหวัด:', size: 'xs', color: '#64748B', flex: 4 },
                  { type: 'text', text: data.location, size: 'xs', color: '#0F172A', align: 'end', flex: 8, wrap: true },
                ],
              } : null,
              data.notes ? {
                type: 'box',
                layout: 'vertical',
                margin: 'xs',
                contents: [
                  { type: 'text', text: 'ข้อความเพิ่มเติม / ความต้องการ:', size: 'xs', color: '#64748B' },
                  { type: 'text', text: data.notes, size: 'xs', color: '#334155', wrap: true, margin: 'xs' },
                ],
              } : null,
            ].filter(Boolean),
          },

          // Timestamp
          { type: 'separator', margin: 'md', color: '#E2E8F0' },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'sm',
            contents: [
              { type: 'text', text: 'เวลาที่ส่งข้อมูล:', size: 'xxs', color: '#94A3B8', flex: 5 },
              { type: 'text', text: timestamp, size: 'xxs', color: '#64748B', align: 'end', flex: 7 },
            ],
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        paddingAll: '16px',
        contents: [
          {
            type: 'button',
            style: 'primary',
            height: 'sm',
            color: '#059669',
            action: {
              type: 'uri',
              label: '📞 โทรหาลูกค้าทันที',
              uri: `tel:${cleanPhone}`,
            },
          },
        ],
      },
    },
  };
}

/**
 * Enterprise Lead Capture API Route
 * Handles lead submission from salepages, validates inputs, and connects to:
 * 1. LINE Messaging API Push Notification (Instant VIP alert to Boss/Admin)
 * 2. Fallback Webhook dispatch (LEAD_WEBHOOK_URL)
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

    const leadRecord: LeadSubmission = {
      ...body,
      submittedAt: new Date().toISOString(),
      pageSource: body.pageSource || 'SalesDesk Sites',
    };

    console.log('[NEW VIP LEAD RECEIVED]', JSON.stringify(leadRecord, null, 2));

    // 1. Dispatch LINE Messaging API Push Notification
    const lineChannelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    const lineTargetId = process.env.LINE_NOTIFY_TARGET_ID; // User ID or Group ID
    let lineNotified = false;

    if (lineChannelAccessToken && lineTargetId) {
      const flexMsg = buildLineLeadFlexMessage(leadRecord);
      try {
        const lineResponse = await fetch('https://api.line.me/v2/bot/message/push', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${lineChannelAccessToken}`,
          },
          body: JSON.stringify({
            to: lineTargetId,
            messages: [flexMsg],
          }),
        });

        const lineJson = await lineResponse.json().catch(() => ({}));
        lineNotified = lineResponse.ok;
        console.log('[LINE LEAD PUSH RESULT]', { status: lineResponse.status, data: lineJson });
      } catch (lineErr) {
        console.error('[LINE LEAD PUSH ERROR]', lineErr);
      }
    } else {
      console.log(
        '[LINE NOTIFICATION SKIPPED] LINE_CHANNEL_ACCESS_TOKEN or LINE_NOTIFY_TARGET_ID is not configured.'
      );
    }

    // 2. Dispatch to Fallback Webhook URL if configured
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
      message: 'บันทึกข้อมูลและส่งแจ้งเตือนเรียบร้อยแล้ว ที่ปรึกษาจะติดต่อกลับโดยเร็วที่สุด',
      data: {
        fullName: body.fullName,
        phone: body.phone,
        modelInterest: body.modelInterest,
        lineNotified,
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
