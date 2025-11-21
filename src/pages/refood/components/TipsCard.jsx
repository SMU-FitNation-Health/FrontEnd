import React from "react";
import iconRe1 from "../../../assets/refood/re1.svg";

const S = {
  cardPad: "clamp(14px, 2.4vmin, 22px)",
  titleFS: "clamp(14px, 1.9vmin, 18px)",
  bodyFS: "clamp(12px, 1.5vmin, 15px)",
};

export default function TipsCard() {
  return (
    <section
      className="bg-white/70 border border-[#D1D5DC] rounded-2xl"
      style={{ padding: S.cardPad }}
    >
      <div className="flex items-center gap-[clamp(8px,1.2vmin,10px)]">
        <img src={iconRe1} alt="" className="w-[clamp(18px,2.2vmin,22px)] h-auto select-none" />
        <div
          className="text-[#1E2939] font-semibold"
          style={{ fontSize: S.titleFS }}
        >
          건강한 요리 팁
        </div>
      </div>

      <p
        className="text-[#4A5565] mt-[clamp(8px,1.4vmin,12px)] leading-relaxed"
        style={{ fontSize: S.bodyFS }}
      >
        신선한 재료를 사용하고, 조리 시 기름은 최소화해요. 채소는 다양한 색상으로 구성하면
        더 많은 영양소를 섭취할 수 있습니다. 소금 대신 허브나 향신료로 풍미를 더해보세요!
      </p>
    </section>
  );
}
