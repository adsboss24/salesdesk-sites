"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

interface SocialShareProps {
  url?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SocialShare({
  url,
  title,
  className = "",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  // Fallback to window.location.href in browser if url not passed
  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.warn("Failed to copy link:", err);
    }
  };

  const handleFacebookShare = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(fbUrl, "_blank", "width=600,height=500");
  };

  const handleLineShare = () => {
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(lineUrl, "_blank", "width=600,height=500");
  };

  const handleTwitterShare = () => {
    const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(title)}`;
    window.open(xUrl, "_blank", "width=600,height=500");
  };

  return (
    <div
      className={`p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-sm ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Title / Label */}
        <div className="flex items-center gap-2 text-slate-300">
          <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <Share2 className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">
              แชร์บทความนี้ให้เพื่อนร่วมธุรกิจ
            </span>
            <span className="text-[11px] text-slate-400 block">
              ส่งต่อทางรอดการตลาดยุค AI และปลดล็อกทราฟฟิกหน้า 1 Google
            </span>
          </div>
        </div>

        {/* Action Share Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Facebook */}
          <button
            type="button"
            onClick={handleFacebookShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2]/25 text-[#1877F2] border border-[#1877F2]/40 text-xs font-bold transition active:scale-95 cursor-pointer shadow-sm"
            title="แชร์ลง Facebook"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </button>

          {/* LINE */}
          <button
            type="button"
            onClick={handleLineShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#06C755]/15 hover:bg-[#06C755]/25 text-[#06C755] border border-[#06C755]/40 text-xs font-bold transition active:scale-95 cursor-pointer shadow-sm"
            title="แชร์เข้า LINE"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 5.82 2 10.53c0 4.22 3.59 7.74 8.44 8.38.33.07.78.22.89.51.1.26.07.67.03.93l-.15.93c-.05.28-.22 1.1 1 .6 1.22-.5 6.58-3.95 8.98-6.76C22.61 13.56 22 12.08 22 10.53 22 5.82 17.52 2 12 2zm-3.66 11.23H6.52c-.28 0-.5-.22-.5-.5v-4.9c0-.28.22-.5.5-.5s.5.22.5.5v4.4h1.32c.28 0 .5.22.5.5s-.22.5-.5.5zm2.14-.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4.9c0-.28.22-.5.5-.5s.5.22.5.5v4.9zm4.64 0c0 .28-.22.5-.5.5-.18 0-.34-.1-.42-.25l-2.07-2.92v2.67c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4.9c0-.28.22-.5.5-.5.18 0 .34.1.42.25l2.07 2.92V8.33c0-.28.22-.5.5-.5s.5.22.5.5v4.4zm3.08-3.08h-1.32v.88h1.32c.28 0 .5.22.5.5s-.22.5-.5.5h-1.82c-.28 0-.5-.22-.5-.5v-4.9c0-.28.22-.5.5-.5h1.82c.28 0 .5.22.5.5s-.22.5-.5.5h-1.32v.88h1.32c.28 0 .5.22.5.5s-.22.5-.5.5z" />
            </svg>
            <span>LINE</span>
          </button>

          {/* X / Twitter */}
          <button
            type="button"
            onClick={handleTwitterShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition active:scale-95 cursor-pointer shadow-sm"
            title="แชร์ลง X"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X</span>
          </button>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition active:scale-95 cursor-pointer shadow-sm ${
              copied
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700 hover:text-white"
            }`}
            title="คัดลอกลิงก์"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>คัดลอกแล้ว!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>คัดลอกลิงก์</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
