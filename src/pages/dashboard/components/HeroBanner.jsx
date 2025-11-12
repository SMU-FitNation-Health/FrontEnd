import React from "react";
import das1 from "../../../assets/dashboard/das1.svg";

export default function HeroBanner() {
  return (
    <section aria-label="대시보드 상단 배너" className="w-full">
      <div className="relative w-full h-[clamp(160px,28vmin,280px)]">
        <img
          src={das1}
          alt="매일의 컨디션에 최적화된 움직임, 당신을 위한 AI 트레이너"
          className="w-full h-full object-cover rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
          draggable="false"
        />
      </div>
    </section>
  );
}
