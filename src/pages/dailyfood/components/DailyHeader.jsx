//상단 버튼 두개

import React from "react";
import logo from "../../../assets/login/login1.svg";

export default function DailyHeader() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-[clamp(8px,1.4vmin,10px)]">
        <img
          src={logo}
          alt="Care View 로고"
          className="w-[clamp(28px,3vmin,36px)] h-auto"
          draggable="false"
        />
        <span className="text-[clamp(18px,2.1vmin,22px)] font-semibold text-[#111827]">
          Care View
        </span>
      </div>

      <div className="flex items-center gap-[clamp(8px,1.3vmin,12px)]">
        <button
          type="button"
          className="px-[clamp(16px,2vmin,20px)] py-[clamp(8px,1.4vmin,10px)] rounded-full text-[clamp(12px,1.4vmin,14px)] font-medium bg-[#1E2939] text-white shadow-sm"
        >
          금일 추천 식단
        </button>
        <a
          href="#"
          className="px-[clamp(16px,2vmin,20px)] py-[clamp(8px,1.4vmin,10px)] rounded-full text-[clamp(12px,1.4vmin,14px)] font-medium border border-[#D1D5DB] text-[#4B5563] bg-white/70 hover:bg-white transition-colors"
        >
          맞춤형 식단
        </a>
      </div>
    </header>
  );
}
