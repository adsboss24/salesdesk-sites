import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps

# Base Paths
TANDJ_DIR = '/Users/manopluechutakul/Projects/salesdesk-sites/public/images/tandj'
OUT_PNG = os.path.join(TANDJ_DIR, 'rich-menu-2500x1686.png')
OUT_JPG = os.path.join(TANDJ_DIR, 'rich-menu-2500x1686.jpg')
OUT_PREVIEW = os.path.join(TANDJ_DIR, 'rich-menu-preview.png')

# Canvas Dimensions (LINE Standard Large Rich Menu)
WIDTH = 2500
HEIGHT = 1686
COL_W = WIDTH // 3  # 833
ROW_H = HEIGHT // 2 # 843

# Fonts
FONT_PATH = '/System/Library/Fonts/Supplemental/SukhumvitSet.ttc'
FONT_TITLE_LG = ImageFont.truetype(FONT_PATH, 54, index=5)   # Bold
FONT_TITLE = ImageFont.truetype(FONT_PATH, 48, index=5)      # Bold
FONT_TITLE_SM = ImageFont.truetype(FONT_PATH, 42, index=5)   # Bold
FONT_SUB = ImageFont.truetype(FONT_PATH, 30, index=3)        # Medium
FONT_BADGE = ImageFont.truetype(FONT_PATH, 24, index=5)      # Bold
FONT_CTA = ImageFont.truetype(FONT_PATH, 32, index=5)        # Bold
FONT_MICRO = ImageFont.truetype(FONT_PATH, 24, index=3)      # Medium
FONT_STEP_NUM = ImageFont.truetype(FONT_PATH, 28, index=5)   # Bold
FONT_STEP_TXT = ImageFont.truetype(FONT_PATH, 25, index=4)   # SemiBold
FONT_HOTLINE = ImageFont.truetype(FONT_PATH, 34, index=5)    # Bold
FONT_COMPANY = ImageFont.truetype(FONT_PATH, 22, index=4)    # SemiBold

# Colors
COLOR_CANVAS_BG = (10, 22, 38, 255)       # Deep Luxury Navy #0a1626
COLOR_GOLD = (218, 178, 85, 255)          # Luxury Gold
COLOR_GOLD_BRIGHT = (250, 225, 140, 255)  # Bright Gold
COLOR_GOLD_DARK = (165, 128, 48, 255)     # Deep Gold
COLOR_WHITE = (255, 255, 255, 255)
COLOR_TEXT_MUTED = (165, 185, 210, 255)
COLOR_LINE_GREEN = (6, 199, 85, 255)
COLOR_EMERALD = (16, 185, 129, 255)
COLOR_CORAL = (225, 29, 72, 255)          # Rose/Coral Red

canvas = Image.new("RGBA", (WIDTH, HEIGHT), COLOR_CANVAS_BG)

# 1. Subtle luxury background gradient
bg_gradient = Image.new("RGBA", (WIDTH, HEIGHT))
bg_draw = ImageDraw.Draw(bg_gradient)
for y in range(HEIGHT):
    fac = y / HEIGHT
    r = int(8 + fac * 8)
    g = int(18 + fac * 12)
    b = int(32 + fac * 18)
    bg_draw.line([(0, y), (WIDTH, y)], fill=(r, g, b, 255))

# Radial spotlight at center
spotlight = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
spot_draw = ImageDraw.Draw(spotlight)
cx, cy = WIDTH // 2, HEIGHT // 3
max_r = 1300
for r in range(max_r, 0, -15):
    alpha = int(35 * (1 - r / max_r))
    spot_draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(30, 65, 110, alpha))

canvas = Image.alpha_composite(bg_gradient, spotlight)

# Helper: Create Card Base
def create_card(w, h, radius=26, border_color=(218, 178, 85, 175), border_w=3):
    card = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    cdraw = ImageDraw.Draw(card)
    
    # Inner gradient
    for y in range(h):
        fac = y / h
        cr = int(14 + fac * 7)
        cg = int(28 + fac * 12)
        cb = int(48 + fac * 20)
        cdraw.line([(0, y), (w, y)], fill=(cr, cg, cb, 252))
    
    # Mask to rounded rect
    mask = Image.new("L", (w * 2, h * 2), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle([0, 0, w * 2 - 1, h * 2 - 1], radius=radius * 2, fill=255)
    mask = mask.resize((w, h), Image.Resampling.LANCZOS)
    card.putalpha(mask)
    
    # Draw border on high-res overlay
    border_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(border_layer)
    bdraw.rounded_rectangle([1, 1, w - 2, h - 2], radius=radius, outline=border_color, width=border_w)
    
    # Top highlight sheen
    bdraw.line([radius + 15, 3, w - radius - 15, 3], fill=(255, 255, 255, 65), width=2)
    
    return Image.alpha_composite(card, border_layer)

# Helper: Crop image to rounded rect
def crop_to_rounded_rect(img, target_w, target_h, radius=18):
    img = ImageOps.fit(img, (target_w, target_h), Image.Resampling.LANCZOS)
    mask = Image.new("L", (target_w * 2, target_h * 2), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle([0, 0, target_w * 2 - 1, target_h * 2 - 1], radius=radius * 2, fill=255)
    mask = mask.resize((target_w, target_h), Image.Resampling.LANCZOS)
    res = img.convert("RGBA")
    res.putalpha(mask)
    return res

# Helper: Draw Badge (without emojis, formal and crisp)
def draw_badge(draw, text, cx, cy, bg_color=COLOR_GOLD, text_color=(10, 22, 38, 255), border_color=None):
    bbox = draw.textbbox((0, 0), text, font=FONT_BADGE)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pad_x = 24
    pad_y = 9
    rx0 = cx - tw // 2 - pad_x
    ry0 = cy - th // 2 - pad_y
    rx1 = cx + tw // 2 + pad_x
    ry1 = cy + th // 2 + pad_y
    draw.rounded_rectangle([rx0, ry0, rx1, ry1], radius=16, fill=bg_color, outline=border_color, width=2 if border_color else 0)
    draw.text((cx - tw // 2, ry0 + pad_y - 2), text, font=FONT_BADGE, fill=text_color)

# Helper: Draw CTA Pill
def draw_cta_pill(draw, text, cx, cy, w=480, h=72, bg_color=(20, 42, 70, 250), border_color=COLOR_GOLD, text_color=COLOR_WHITE):
    rx0 = cx - w // 2
    ry0 = cy - h // 2
    rx1 = cx + w // 2
    ry1 = cy + h // 2
    draw.rounded_rectangle([rx0, ry0, rx1, ry1], radius=h//2, fill=bg_color, outline=border_color, width=2)
    bbox = draw.textbbox((0, 0), text, font=FONT_CTA)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((cx - tw // 2, cy - th // 2 - 3), text, font=FONT_CTA, fill=text_color)

# Helper: Draw Vector 5-pointed Star
def draw_star(draw, cx, cy, r_outer=18, r_inner=8, fill=COLOR_GOLD_BRIGHT):
    points = []
    for i in range(10):
        angle = i * math.pi / 5 - math.pi / 2
        r = r_outer if i % 2 == 0 else r_inner
        x = cx + r * math.cos(angle)
        y = cy + r * math.sin(angle)
        points.append((x, y))
    draw.polygon(points, fill=fill)

PAD_X = 14
PAD_Y = 14
CARD_W = COL_W - PAD_X * 2 # 805
CARD_H = ROW_H - PAD_Y * 2 # 815

print("Rendering 6 luxury cards...")

# ==========================================
# CARD 1: แคตาล็อกผ้าปูที่นอน / สินค้าเด่น
# ==========================================
card1 = create_card(CARD_W, CARD_H)
c1_draw = ImageDraw.Draw(card1)

# Photo Header (bedsheet-sateen.jpg)
img1_path = os.path.join(TANDJ_DIR, 'bedsheet-sateen.jpg')
if os.path.exists(img1_path):
    raw_img1 = Image.open(img1_path)
    photo1 = crop_to_rounded_rect(raw_img1, CARD_W - 48, 410, radius=20)
    card1.paste(photo1, (24, 24), photo1)

# Luxury Badge over photo (formal text, no missing glyphs)
draw_badge(c1_draw, "BEST SELLER • มาตรฐานโรงแรม 5 ดาว", CARD_W // 2, 54, bg_color=(218, 178, 85, 245), text_color=(10, 22, 38, 255))

# Title & Subtitle
bbox = c1_draw.textbbox((0, 0), "แคตาล็อกผ้าปูที่นอน", font=FONT_TITLE_LG)
tw = bbox[2] - bbox[0]
c1_draw.text(((CARD_W - tw) // 2, 470), "แคตาล็อกผ้าปูที่นอน", font=FONT_TITLE_LG, fill=COLOR_WHITE)

bbox = c1_draw.textbbox((0, 0), "ผ้าปูที่นอน • ปลอกผ้านวม • ท็อปเปอร์", font=FONT_SUB)
tw = bbox[2] - bbox[0]
c1_draw.text(((CARD_W - tw) // 2, 540), "ผ้าปูที่นอน • ปลอกผ้านวม • ท็อปเปอร์", font=FONT_SUB, fill=COLOR_GOLD_BRIGHT)

bbox = c1_draw.textbbox((0, 0), "เกรดพรีเมียม สัมผัสนุ่ม ทนทานซักกว่า 200 ครั้ง", font=FONT_MICRO)
tw = bbox[2] - bbox[0]
c1_draw.text(((CARD_W - tw) // 2, 595), "เกรดพรีเมียม สัมผัสนุ่ม ทนทานซักกว่า 200 ครั้ง", font=FONT_MICRO, fill=COLOR_TEXT_MUTED)

# CTA Button
draw_cta_pill(c1_draw, "เลือกดูแคตาล็อกทั้งหมด ›", CARD_W // 2, 700, w=500, h=72, bg_color=(16, 36, 62, 255), border_color=COLOR_GOLD, text_color=COLOR_WHITE)


# ==========================================
# CARD 2: โปรโมชั่นพิเศษ (Centerpiece)
# ==========================================
card2 = create_card(CARD_W, CARD_H, border_color=(250, 225, 140, 225), border_w=3)
c2_draw = ImageDraw.Draw(card2)

# Central Emblem with Radiant Halo
emblem_path = os.path.join(TANDJ_DIR, 'success-emblem.png')
if os.path.exists(emblem_path):
    emblem = Image.open(emblem_path)
    emblem_size = 320
    emblem = emblem.resize((emblem_size, emblem_size), Image.Resampling.LANCZOS)
    
    # Outer gold ring & shadow behind emblem
    halo = Image.new("RGBA", (CARD_W, CARD_H), (0, 0, 0, 0))
    hdraw = ImageDraw.Draw(halo)
    
    # Concentric gold glow rings
    ecx, ecy = CARD_W // 2, 195
    for r in range(200, 150, -8):
        alpha = int(35 * (1 - (r - 150) / 50))
        hdraw.ellipse([ecx - r, ecy - r, ecx + r, ecy + r], fill=(218, 178, 85, alpha))
    
    # Metallic gold border around the emblem
    hdraw.ellipse([ecx - 164, ecy - 164, ecx + 164, ecy + 164], outline=(250, 225, 140, 255), width=4)
    hdraw.ellipse([ecx - 168, ecy - 168, ecx + 168, ecy + 168], outline=(165, 128, 48, 180), width=2)
    
    card2 = Image.alpha_composite(card2, halo)
    c2_draw = ImageDraw.Draw(card2)
    
    # Paste circular emblem
    card2.paste(emblem, (ecx - emblem_size // 2, ecy - emblem_size // 2), emblem)

# Badge overlapping bottom of emblem area
draw_badge(c2_draw, "SPECIAL OFFER • ส่วนลดโครงการ B2B", CARD_W // 2, 395, bg_color=COLOR_CORAL, text_color=COLOR_WHITE)

# Title & Subtitle
bbox = c2_draw.textbbox((0, 0), "โปรโมชั่นพิเศษ", font=FONT_TITLE_LG)
tw = bbox[2] - bbox[0]
c2_draw.text(((CARD_W - tw) // 2, 470), "โปรโมชั่นพิเศษ", font=FONT_TITLE_LG, fill=COLOR_WHITE)

bbox = c2_draw.textbbox((0, 0), "เซ็ตสุดคุ้ม • สั่งผลิตราคาส่งเริ่มต้น 5 ชุด", font=FONT_SUB)
tw = bbox[2] - bbox[0]
c2_draw.text(((CARD_W - tw) // 2, 540), "เซ็ตสุดคุ้ม • สั่งผลิตราคาส่งเริ่มต้น 5 ชุด", font=FONT_SUB, fill=COLOR_GOLD_BRIGHT)

bbox = c2_draw.textbbox((0, 0), "บริการเช่าซักครบวงจร เริ่มต้นเพียง 499.-/เดือน", font=FONT_MICRO)
tw = bbox[2] - bbox[0]
c2_draw.text(((CARD_W - tw) // 2, 595), "บริการเช่าซักครบวงจร เริ่มต้นเพียง 499.-/เดือน", font=FONT_MICRO, fill=COLOR_TEXT_MUTED)

# CTA Button (Bright Gold Gradient Fill for Maximum Clickability)
draw_cta_pill(c2_draw, "รับสิทธิ์โปรโมชั่นทันที ›", CARD_W // 2, 700, w=500, h=74, bg_color=(218, 178, 85, 255), border_color=COLOR_WHITE, text_color=(10, 22, 38, 255))


# ==========================================
# CARD 3: รีวิวผลงาน / หน้าร้าน
# ==========================================
card3 = create_card(CARD_W, CARD_H)
c3_draw = ImageDraw.Draw(card3)

# Photo Header (room-slider.jpeg)
img3_path = os.path.join(TANDJ_DIR, 'room-slider.jpeg')
if os.path.exists(img3_path):
    raw_img3 = Image.open(img3_path)
    photo3 = crop_to_rounded_rect(raw_img3, CARD_W - 48, 410, radius=20)
    card3.paste(photo3, (24, 24), photo3)

# Badge over photo
draw_badge(c3_draw, "HOTEL SHOWCASE • รีวิวจริง 100%", CARD_W // 2, 54, bg_color=(218, 178, 85, 245), text_color=(10, 22, 38, 255))

# 5 Vector Gold Stars Overlay (Genuine crisp vector stars!)
pill_w = 260
pill_h = 56
pill_x0 = (CARD_W - pill_w) // 2
pill_y0 = 360
c3_draw.rounded_rectangle([pill_x0, pill_y0, pill_x0 + pill_w, pill_y0 + pill_h], radius=14, fill=(10, 22, 38, 225), outline=COLOR_GOLD, width=2)

star_start_x = pill_x0 + 35
star_spacing = 48
for i in range(5):
    draw_star(c3_draw, star_start_x + i * star_spacing, pill_y0 + pill_h // 2, r_outer=16, r_inner=7, fill=COLOR_GOLD_BRIGHT)

# Title & Subtitle
bbox = c3_draw.textbbox((0, 0), "รีวิวผลงาน / หน้าร้าน", font=FONT_TITLE_LG)
tw = bbox[2] - bbox[0]
c3_draw.text(((CARD_W - tw) // 2, 470), "รีวิวผลงาน / หน้าร้าน", font=FONT_TITLE_LG, fill=COLOR_WHITE)

bbox = c3_draw.textbbox((0, 0), "โรงแรม รีสอร์ต & พูลวิลล่าชั้นนำทั่วไทย", font=FONT_SUB)
tw = bbox[2] - bbox[0]
c3_draw.text(((CARD_W - tw) // 2, 540), "โรงแรม รีสอร์ต & พูลวิลล่าชั้นนำทั่วไทย", font=FONT_SUB, fill=COLOR_GOLD_BRIGHT)

bbox = c3_draw.textbbox((0, 0), "รีวิวจากผู้ประกอบการจริง พร้อมภาพส่งมอบหน้างาน", font=FONT_MICRO)
tw = bbox[2] - bbox[0]
c3_draw.text(((CARD_W - tw) // 2, 595), "รีวิวจากผู้ประกอบการจริง พร้อมภาพส่งมอบหน้างาน", font=FONT_MICRO, fill=COLOR_TEXT_MUTED)

# CTA Button
draw_cta_pill(c3_draw, "ชมภาพผลงานส่งมอบจริง ›", CARD_W // 2, 700, w=500, h=72, bg_color=(16, 36, 62, 255), border_color=COLOR_GOLD, text_color=COLOR_WHITE)


# ==========================================
# CARD 4: วิธีการสั่งซื้อ / บัญชีโอนเงิน
# ==========================================
card4 = create_card(CARD_W, CARD_H)
c4_draw = ImageDraw.Draw(card4)

# 3 Visual Process Steps with connecting line
c4_draw.rounded_rectangle([24, 24, CARD_W - 24, 434], radius=20, fill=(12, 25, 44, 240), outline=(218, 178, 85, 120), width=2)
draw_badge(c4_draw, "ORDER GUIDE • 3 ขั้นตอนง่าย", CARD_W // 2, 54, bg_color=(218, 178, 85, 245), text_color=(10, 22, 38, 255))

# Vertical connecting line behind step nodes
c4_draw.line([(76, 140), (76, 370)], fill=(218, 178, 85, 160), width=4)

steps = [
    ("1", "เลือกสินค้า / แจ้งสเปกที่ต้องการ", "เลือกไซส์ผ้าปู ท็อปเปอร์ ปลอกผ้านวม หรือแพ็กเกจเช่า"),
    ("2", "ยืนยันใบเสนอราคา & ชำระเงิน", "โอนเข้าบัญชี บจก.ซัคเซสฯ ออกใบกำกับภาษีได้"),
    ("3", "แพ็กสินค้าและจัดส่งด่วนทั่วไทย", "มีบริการส่งถึงโรงแรม พร้อมรับประกันคุณภาพสินค้า")
]

step_y_start = 105
for i, (num, title, desc) in enumerate(steps):
    sy = step_y_start + i * 105
    # Step Circle
    c4_draw.ellipse([48, sy + 4, 104, sy + 60], fill=COLOR_GOLD, outline=COLOR_WHITE, width=2)
    bbox = c4_draw.textbbox((0, 0), num, font=FONT_STEP_NUM)
    nw = bbox[2] - bbox[0]
    c4_draw.text((76 - nw // 2, sy + 13), num, font=FONT_STEP_NUM, fill=(10, 22, 38, 255))
    
    # Step Text
    c4_draw.text((122, sy + 6), title, font=FONT_STEP_TXT, fill=COLOR_WHITE)
    c4_draw.text((122, sy + 38), desc, font=FONT_MICRO, fill=COLOR_TEXT_MUTED)

# Title & Subtitle
bbox = c4_draw.textbbox((0, 0), "วิธีการสั่งซื้อ / บัญชีโอนเงิน", font=FONT_TITLE)
tw = bbox[2] - bbox[0]
c4_draw.text(((CARD_W - tw) // 2, 470), "วิธีการสั่งซื้อ / บัญชีโอนเงิน", font=FONT_TITLE, fill=COLOR_WHITE)

bbox = c4_draw.textbbox((0, 0), "ขั้นตอนสั่งซื้อ • เลขบัญชีบริษัท ซัคเซสฯ", font=FONT_SUB)
tw = bbox[2] - bbox[0]
c4_draw.text(((CARD_W - tw) // 2, 540), "ขั้นตอนสั่งซื้อ • เลขบัญชีบริษัท ซัคเซสฯ", font=FONT_SUB, fill=COLOR_GOLD_BRIGHT)

bbox = c4_draw.textbbox((0, 0), "รองรับชำระผ่านธนาคาร ออกใบเสร็จรับเงินถูกต้อง", font=FONT_MICRO)
tw = bbox[2] - bbox[0]
c4_draw.text(((CARD_W - tw) // 2, 595), "รองรับชำระผ่านธนาคาร ออกใบเสร็จรับเงินถูกต้อง", font=FONT_MICRO, fill=COLOR_TEXT_MUTED)

# CTA Button
draw_cta_pill(c4_draw, "ดูวิธีสั่งซื้อ & เลขบัญชี ›", CARD_W // 2, 700, w=500, h=72, bg_color=(16, 36, 62, 255), border_color=COLOR_GOLD, text_color=COLOR_WHITE)


# ==========================================
# CARD 5: แจ้งชำระเงิน (Payment Slip Graphic)
# ==========================================
card5 = create_card(CARD_W, CARD_H)
c5_draw = ImageDraw.Draw(card5)

# Visual Graphic Area
c5_draw.rounded_rectangle([24, 24, CARD_W - 24, 434], radius=20, fill=(12, 25, 44, 240), outline=(16, 185, 129, 140), width=2)
draw_badge(c5_draw, "FAST CONFIRM • อนุมัติไว", CARD_W // 2, 54, bg_color=COLOR_EMERALD, text_color=COLOR_WHITE)

# Draw Payment Verification Graphic: Illustrated Slip & Shield
slip_cx = CARD_W // 2
slip_cy = 230

# Glowing backdrop behind slip
for r in range(140, 70, -8):
    alpha = int(30 * (1 - (r - 70) / 70))
    c5_draw.ellipse([slip_cx - r, slip_cy - r, slip_cx + r, slip_cy + r], fill=(16, 185, 129, alpha))

# Illustrated Bank Slip Card
slip_w = 260
slip_h = 190
sx0 = slip_cx - slip_w // 2
sy0 = slip_cy - slip_h // 2 - 10
c5_draw.rounded_rectangle([sx0, sy0, sx0 + slip_w, sy0 + slip_h], radius=16, fill=(245, 248, 252, 250), outline=COLOR_EMERALD, width=2)

# Slip header ribbon
c5_draw.rounded_rectangle([sx0 + 2, sy0 + 2, sx0 + slip_w - 2, sy0 + 38], radius=14, fill=(16, 36, 62, 255))
c5_draw.text((sx0 + 16, sy0 + 8), "PAYMENT SLIP", font=FONT_MICRO, fill=COLOR_GOLD_BRIGHT)

# Slip mock lines
for line_i, lw in enumerate([180, 140, 200, 110]):
    ly = sy0 + 55 + line_i * 22
    c5_draw.line([(sx0 + 18, ly), (sx0 + 18 + lw, ly)], fill=(200, 215, 230, 255), width=4)

# Overlaid Glowing Green Verified Shield
scx = sx0 + slip_w - 20
scy = sy0 + slip_h - 20
c5_draw.ellipse([scx - 45, scy - 45, scx + 45, scy + 45], fill=COLOR_EMERALD, outline=COLOR_WHITE, width=4)
# Checkmark
c5_draw.line([(scx - 20, scy - 2), (scx - 6, scy + 14)], fill=COLOR_WHITE, width=6)
c5_draw.line([(scx - 6, scy + 14), (scx + 22, scy - 16)], fill=COLOR_WHITE, width=6)

# Sub-cue text inside graphic box
slip_cue = "แนบสลิปผ่าน LINE OA • เจ้าหน้าที่อัปเดตสถานะทันที"
bbox = c5_draw.textbbox((0, 0), slip_cue, font=FONT_MICRO)
tw = bbox[2] - bbox[0]
c5_draw.text(((CARD_W - tw) // 2, 380), slip_cue, font=FONT_MICRO, fill=COLOR_GOLD_BRIGHT)

# Title & Subtitle
bbox = c5_draw.textbbox((0, 0), "แจ้งชำระเงิน", font=FONT_TITLE_LG)
tw = bbox[2] - bbox[0]
c5_draw.text(((CARD_W - tw) // 2, 470), "แจ้งชำระเงิน", font=FONT_TITLE_LG, fill=COLOR_WHITE)

bbox = c5_draw.textbbox((0, 0), "แนบสลิปเพื่อยืนยันคำสั่งซื้อทันที", font=FONT_SUB)
tw = bbox[2] - bbox[0]
c5_draw.text(((CARD_W - tw) // 2, 540), "แนบสลิปเพื่อยืนยันคำสั่งซื้อทันที", font=FONT_SUB, fill=(110, 231, 183, 255))

bbox = c5_draw.textbbox((0, 0), "ระบบตรวจสอบสลิป รวดเร็ว ถูกต้อง ปลอดภัย 100%", font=FONT_MICRO)
tw = bbox[2] - bbox[0]
c5_draw.text(((CARD_W - tw) // 2, 595), "ระบบตรวจสอบสลิป รวดเร็ว ถูกต้อง ปลอดภัย 100%", font=FONT_MICRO, fill=COLOR_TEXT_MUTED)

# CTA Button (Emerald Green Pill)
draw_cta_pill(c5_draw, "คลิกแจ้งสลิปโอนเงิน ›", CARD_W // 2, 700, w=500, h=74, bg_color=COLOR_EMERALD, border_color=COLOR_WHITE, text_color=COLOR_WHITE)


# ==========================================
# CARD 6: ติดต่อฝ่ายขาย / แอดมิน
# ==========================================
card6 = create_card(CARD_W, CARD_H)
c6_draw = ImageDraw.Draw(card6)

# Visual Graphic Area
c6_draw.rounded_rectangle([24, 24, CARD_W - 24, 434], radius=20, fill=(12, 25, 44, 240), outline=(6, 199, 85, 140), width=2)
draw_badge(c6_draw, "24/7 SUPPORT • ปรึกษาฟรี", CARD_W // 2, 54, bg_color=COLOR_LINE_GREEN, text_color=COLOR_WHITE)

# Draw LINE Chat Bubble / Hotline Box
box_cx = CARD_W // 2
box_cy = 215

# Chat bubble shape
c6_draw.ellipse([box_cx - 75, box_cy - 75, box_cx + 75, box_cy + 75], fill=COLOR_LINE_GREEN, outline=COLOR_WHITE, width=4)
# Tail for speech bubble
bubble_tail = [
    (box_cx - 35, box_cy + 45),
    (box_cx - 60, box_cy + 85),
    (box_cx - 15, box_cy + 65)
]
c6_draw.polygon(bubble_tail, fill=COLOR_LINE_GREEN)
c6_draw.line([(box_cx - 35, box_cy + 45), (box_cx - 60, box_cy + 85)], fill=COLOR_WHITE, width=3)
c6_draw.line([(box_cx - 60, box_cy + 85), (box_cx - 15, box_cy + 65)], fill=COLOR_WHITE, width=3)

# Chat text "LINE"
bbox = c6_draw.textbbox((0, 0), "LINE", font=FONT_TITLE_SM)
tw = bbox[2] - bbox[0]
c6_draw.text(((CARD_W - tw) // 2, box_cy - 24), "LINE", font=FONT_TITLE_SM, fill=COLOR_WHITE)

# Hotline display inside gold pill
hl_str = "HOTLINE: 086-461-4614"
bbox = c6_draw.textbbox((0, 0), hl_str, font=FONT_HOTLINE)
tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]
c6_draw.rounded_rectangle([CARD_W // 2 - tw // 2 - 24, 345, CARD_W // 2 + tw // 2 + 24, 405], radius=14, fill=(16, 36, 62, 240), outline=COLOR_GOLD, width=2)
c6_draw.text(((CARD_W - tw) // 2, 355), hl_str, font=FONT_HOTLINE, fill=COLOR_GOLD_BRIGHT)

# Title & Subtitle
bbox = c6_draw.textbbox((0, 0), "ติดต่อฝ่ายขาย / แอดมิน", font=FONT_TITLE)
tw = bbox[2] - bbox[0]
c6_draw.text(((CARD_W - tw) // 2, 470), "ติดต่อฝ่ายขาย / แอดมิน", font=FONT_TITLE, fill=COLOR_WHITE)

bbox = c6_draw.textbbox((0, 0), "สอบถามราคา • ขอใบเสนอราคาด่วน", font=FONT_SUB)
tw = bbox[2] - bbox[0]
c6_draw.text(((CARD_W - tw) // 2, 540), "สอบถามราคา • ขอใบเสนอราคาด่วน", font=FONT_SUB, fill=COLOR_GOLD_BRIGHT)

bbox = c6_draw.textbbox((0, 0), "ทีมงานพร้อมดูแลและให้คำปรึกษาตลอดเวลา", font=FONT_MICRO)
tw = bbox[2] - bbox[0]
c6_draw.text(((CARD_W - tw) // 2, 595), "ทีมงานพร้อมดูแลและให้คำปรึกษาตลอดเวลา", font=FONT_MICRO, fill=COLOR_TEXT_MUTED)

# CTA Button (Official LINE Green Pill)
draw_cta_pill(c6_draw, "ทักแชทคุยกับแอดมิน ›", CARD_W // 2, 700, w=500, h=74, bg_color=COLOR_LINE_GREEN, border_color=COLOR_WHITE, text_color=COLOR_WHITE)


# ==========================================
# PASTE ALL 6 CARDS ONTO CANVAS
# ==========================================
# Row 0
canvas.paste(card1, (0 * COL_W + PAD_X, 0 * ROW_H + PAD_Y), card1)
canvas.paste(card2, (1 * COL_W + PAD_X, 0 * ROW_H + PAD_Y), card2)
canvas.paste(card3, (2 * COL_W + PAD_X, 0 * ROW_H + PAD_Y), card3)

# Row 1
canvas.paste(card4, (0 * COL_W + PAD_X, 1 * ROW_H + PAD_Y), card4)
canvas.paste(card5, (1 * COL_W + PAD_X, 1 * ROW_H + PAD_Y), card5)
canvas.paste(card6, (2 * COL_W + PAD_X, 1 * ROW_H + PAD_Y), card6)

# Save Master PNG
canvas.save(OUT_PNG, format="PNG")
print("Saved master PNG:", OUT_PNG)

# Save Optimized JPEG (< 1MB for LINE OA upload)
rgb_canvas = Image.new("RGB", (WIDTH, HEIGHT), (10, 22, 38))
rgb_canvas.paste(canvas, mask=canvas.split()[3])

quality = 90
rgb_canvas.save(OUT_JPG, format="JPEG", quality=quality, optimize=True)
size_mb = os.path.getsize(OUT_JPG) / (1024 * 1024)
print(f"Saved JPEG: {OUT_JPG} ({size_mb:.2f} MB, quality={quality})")

while size_mb > 0.95 and quality > 70:
    quality -= 5
    rgb_canvas.save(OUT_JPG, format="JPEG", quality=quality, optimize=True)
    size_mb = os.path.getsize(OUT_JPG) / (1024 * 1024)
    print(f"Re-compressed JPEG to quality={quality} ({size_mb:.2f} MB)")

# Save Web Preview (1200 x 809)
preview = rgb_canvas.resize((1200, int(1200 * HEIGHT / WIDTH)), Image.Resampling.LANCZOS)
preview.save(OUT_PREVIEW, format="PNG")
print("Saved Preview PNG:", OUT_PREVIEW)

print("ALL RICH MENU ASSETS RE-GENERATED SUCCESSFULLY!")
