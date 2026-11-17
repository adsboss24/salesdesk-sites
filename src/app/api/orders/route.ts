import { NextResponse } from 'next/server';

export interface OrderItem {
  id: string;
  name: string;
  category: string;
  spec?: string;
  size?: string;
  fabric?: string;
  unitPrice: number;
  quantity: number;
  unit?: string;
  image?: string;
}

export interface RentalDetails {
  contractTier: string;
  twinRooms: number;
  queenRooms: number;
  kingRooms: number;
  totalBeds: number;
  monthlyTotal: number;
  depositTotal: number;
  buyEquivalentTotal: number;
}

export interface OrderSubmissionPayload {
  orderType: 'purchase' | 'quotation' | 'rental';
  quotationNumber: string;
  customerInfo: {
    name: string;
    phone: string;
    businessName?: string;
    taxId?: string;
    address?: string;
    notes?: string;
  };
  items?: OrderItem[];
  rentalDetails?: RentalDetails;
  totalItemCount: number;
  grandTotal: number;
  pageSource?: string;
  submittedAt?: string;
}

/**
 * Helper to build LINE Flex Message Bubble Container
 */
function buildLineFlexMessage(data: OrderSubmissionPayload) {
  const { customerInfo, quotationNumber, grandTotal, totalItemCount, orderType, items, rentalDetails } = data;
  const cleanPhone = customerInfo.phone.replace(/[^0-9]/g, '');

  const typeLabel = 
    orderType === 'rental' 
      ? '🌟 บริการเช่าชุดเครื่องนอนโรงแรม' 
      : orderType === 'quotation' 
        ? '📑 ขอใบเสนอราคาทางการ (B2B)' 
        : '🛒 สั่งซื้อสินค้า & แจ้งชำระเงิน';

  // Construct item rows (up to 5 items shown, then a +X more items row)
  const itemRows: any[] = [];
  if (items && items.length > 0) {
    const displayItems = items.slice(0, 5);
    displayItems.forEach((item) => {
      itemRows.push({
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'text',
            text: `• ${item.name} (${item.fabric || item.size || ''})`,
            size: 'xs',
            color: '#334155',
            flex: 6,
            wrap: true,
          },
          {
            type: 'text',
            text: `x${item.quantity}`,
            size: 'xs',
            color: '#64748B',
            align: 'center',
            flex: 2,
          },
          {
            type: 'text',
            text: `฿${(item.unitPrice * item.quantity).toLocaleString()}`,
            size: 'xs',
            color: '#0F172A',
            align: 'end',
            weight: 'bold',
            flex: 3,
          },
        ],
        margin: 'sm',
      });
    });

    if (items.length > 5) {
      itemRows.push({
        type: 'text',
        text: `และสินค้าอื่นอีก +${items.length - 5} รายการ`,
        size: 'xxs',
        color: '#94A3B8',
        margin: 'xs',
      });
    }
  }

  // Construct rental rows if applicable
  const rentalRows: any[] = [];
  if (orderType === 'rental' && rentalDetails) {
    rentalRows.push(
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          { type: 'text', text: 'แพ็กเกจระยะสัญญา:', size: 'xs', color: '#64748B', flex: 5 },
          { type: 'text', text: rentalDetails.contractTier, size: 'xs', color: '#0F172A', weight: 'bold', align: 'end', flex: 6 },
        ],
        margin: 'xs',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          { type: 'text', text: 'จำนวนเตียงรวม:', size: 'xs', color: '#64748B', flex: 5 },
          { type: 'text', text: `${rentalDetails.totalBeds} เตียง (3.5': ${rentalDetails.twinRooms} | 5': ${rentalDetails.queenRooms} | 6': ${rentalDetails.kingRooms})`, size: 'xs', color: '#0F172A', weight: 'bold', align: 'end', flex: 6, wrap: true },
        ],
        margin: 'xs',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          { type: 'text', text: 'ค่าเช่ารายเดือน:', size: 'xs', color: '#64748B', flex: 5 },
          { type: 'text', text: `฿${rentalDetails.monthlyTotal.toLocaleString()} บ./เดือน`, size: 'xs', color: '#D97706', weight: 'bold', align: 'end', flex: 6 },
        ],
        margin: 'xs',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          { type: 'text', text: 'เงินมัดจำ (ได้คืน):', size: 'xs', color: '#64748B', flex: 5 },
          { type: 'text', text: `฿${rentalDetails.depositTotal.toLocaleString()} บ.`, size: 'xs', color: '#10B981', weight: 'bold', align: 'end', flex: 6 },
        ],
        margin: 'xs',
      }
    );
  }

  return {
    type: 'flex',
    altText: `🔔 แจ้งเตือนใหม่ (${typeLabel}): ${quotationNumber} ยอด ฿${grandTotal.toLocaleString()} บาท`,
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
            text: 'SUCCESS LAUNDRY & HOTEL SUPPLY',
            color: '#FBBF24',
            weight: 'bold',
            size: 'xxs',
            letterSpacing: '1px',
          },
          {
            type: 'text',
            text: '🔔 มีออเดอร์ใหม่เข้าระบบ!',
            color: '#FFFFFF',
            weight: 'bold',
            size: 'lg',
            margin: 'xs',
          },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'md',
            contents: [
              {
                type: 'text',
                text: `เลขที่: ${quotationNumber}`,
                color: '#94A3B8',
                size: 'xs',
                flex: 6,
              },
              {
                type: 'text',
                text: typeLabel,
                color: '#FDE68A',
                size: 'xs',
                weight: 'bold',
                align: 'end',
                flex: 6,
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
          // Customer Details Box
          {
            type: 'box',
            layout: 'vertical',
            backgroundColor: '#F8FAFC',
            cornerRadius: '12px',
            paddingAll: '12px',
            contents: [
              {
                type: 'text',
                text: 'ข้อมูลลูกค้า / ผู้ติดต่อ',
                size: 'xs',
                color: '#64748B',
                weight: 'bold',
              },
              {
                type: 'text',
                text: customerInfo.name || 'ไม่ระบุชื่อ',
                size: 'sm',
                weight: 'bold',
                color: '#0F172A',
                margin: 'xs',
              },
              customerInfo.businessName ? {
                type: 'text',
                text: `โรงแรม/กิจการ: ${customerInfo.businessName}`,
                size: 'xs',
                color: '#334155',
                margin: 'xs',
              } : null,
              {
                type: 'text',
                text: `เบอร์โทร: ${customerInfo.phone}`,
                size: 'xs',
                color: '#0284C7',
                weight: 'bold',
                margin: 'xs',
              },
              customerInfo.address ? {
                type: 'text',
                text: `ที่อยู่จัดส่ง: ${customerInfo.address}`,
                size: 'xxs',
                color: '#64748B',
                wrap: true,
                margin: 'xs',
              } : null,
            ].filter(Boolean),
          },

          // Separator
          { type: 'separator', margin: 'md', color: '#E2E8F0' },

          // Order / Rental Breakdown
          {
            type: 'text',
            text: orderType === 'rental' ? 'รายละเอียดสัญญาเช่า' : `รายการสินค้า (${totalItemCount} ชิ้น)`,
            size: 'xs',
            weight: 'bold',
            color: '#64748B',
            margin: 'md',
          },

          ...(orderType === 'rental' ? rentalRows : itemRows),

          // Total Summary Box
          { type: 'separator', margin: 'md', color: '#E2E8F0' },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'md',
            contents: [
              {
                type: 'text',
                text: orderType === 'rental' ? 'ค่าเช่าเฉลี่ยรายเดือน' : 'ยอดรวมทั้งสิ้น',
                size: 'sm',
                weight: 'bold',
                color: '#0F172A',
                flex: 6,
              },
              {
                type: 'text',
                text: `฿${grandTotal.toLocaleString()} บ.`,
                size: 'lg',
                weight: 'bold',
                color: '#059669',
                align: 'end',
                flex: 6,
              },
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
          {
            type: 'button',
            style: 'secondary',
            height: 'sm',
            action: {
              type: 'uri',
              label: '🌐 เปิดดูหน้าเว็บไซต์',
              uri: 'https://sites.salesdesk-ai.com/tandj-bedding',
            },
          },
        ],
      },
    },
  };
}

export async function POST(request: Request) {
  try {
    const payload: OrderSubmissionPayload = await request.json();

    if (!payload.customerInfo?.name || !payload.customerInfo?.phone) {
      return NextResponse.json(
        { error: 'กรุณากรอกชื่อและเบอร์โทรศัพท์ของผู้ติดต่อ' },
        { status: 400 }
      );
    }

    const orderRecord = {
      ...payload,
      submittedAt: new Date().toISOString(),
      pageSource: payload.pageSource || 'tandj-bedding',
    };

    console.log('[NEW B2B ORDER RECEIVED]', JSON.stringify(orderRecord, null, 2));

    // 1. Dispatch LINE Messaging API Push Notification
    const lineChannelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    const lineTargetId = process.env.LINE_NOTIFY_TARGET_ID; // User ID or Group ID
    let linePushResult: any = null;

    if (lineChannelAccessToken && lineTargetId) {
      const flexMsg = buildLineFlexMessage(orderRecord);
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
        linePushResult = { status: lineResponse.status, data: lineJson };
        console.log('[LINE PUSH RESULT]', linePushResult);
      } catch (lineErr) {
        console.error('[LINE PUSH ERROR]', lineErr);
      }
    } else {
      console.log(
        '[LINE NOTIFICATION SKIPPED] LINE_CHANNEL_ACCESS_TOKEN or LINE_NOTIFY_TARGET_ID is not set in environment.'
      );
    }

    // 2. Dispatch to Fallback Webhook (Discord / Slack / Telegram / Zapier / Google Sheets) if set
    const fallbackWebhook = process.env.LEAD_WEBHOOK_URL || process.env.ORDER_WEBHOOK_URL;
    if (fallbackWebhook) {
      try {
        await fetch(fallbackWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderRecord),
        });
      } catch (webhookErr) {
        console.error('[FALLBACK WEBHOOK ERROR]', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'บันทึกคำสั่งซื้อและส่งการแจ้งเตือนเรียบร้อยแล้ว',
      data: {
        quotationNumber: payload.quotationNumber,
        grandTotal: payload.grandTotal,
        customerName: payload.customerInfo.name,
        lineNotified: Boolean(lineChannelAccessToken && lineTargetId),
      },
    });
  } catch (error) {
    console.error('Error handling order submission:', error);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการบันทึกคำสั่งซื้อ กรุณาลองใหม่อีกครั้ง' },
      { status: 500 }
    );
  }
}
