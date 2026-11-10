import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") || "SalesDesk Sites | นวัตกรรมเซลเพจจิตวิทยา 16:9";
    const category = searchParams.get("category") || "High-Converting Salepage";
    const brand = searchParams.get("brand") || "SalesDesk AI";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#09090b",
            padding: "80px",
            fontFamily: "sans-serif",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #18181b 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#2563eb",
                  boxShadow: "0 0 20px #3b82f6",
                }}
              />
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.5px",
                }}
              >
                {brand}
              </span>
            </div>

            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#60a5fa",
                textTransform: "uppercase",
                letterSpacing: "1px",
                backgroundColor: "rgba(37, 99, 235, 0.15)",
                padding: "8px 18px",
                borderRadius: "9999px",
                border: "1px solid rgba(59, 130, 246, 0.4)",
              }}
            >
              {category}
            </span>
          </div>

          {/* Title Banner */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "1050px",
            }}
          >
            <div
              style={{
                fontSize: title.length > 55 ? "50px" : "62px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
                letterSpacing: "-1.5px",
              }}
            >
              {title}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #27272a",
              paddingTop: "28px",
              width: "100%",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                color: "#a1a1aa",
                fontWeight: 500,
              }}
            >
              สถาปัตยกรรมความเร็วสูง 0.8 วิ • ติดหน้าแรก Google ไวขึ้น
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#3b82f6",
                fontWeight: 700,
              }}
            >
              salesdesk-sites.vercel.app
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("OG generation error:", error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
