import React from "react";
import fatIcon  from "../../../../assets/onboarding/ob6.svg";
import musIcon  from "../../../../assets/onboarding/ob7.svg";

/** 사각형 카드 + 포커스 아웃라인 제거(녹색만 보이게) */
const cardBase =
  "w-full text-left bg-white border transition hover:shadow-md rounded-none " +
  "flex items-center gap-[clamp(14px,2vmin,18px)] " + // 가운데 정렬
  "outline-none focus:outline-none focus:ring-0 focus-visible:ring-0"; // 검정/파란 포커스 제거

export default function Step1({ value, onChange }) {
  const Card = ({ active, icon, title, desc, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={[
        cardBase,
        active ? "border-[#0B5D51] ring-2 ring-[#0B5D51]/30" : "border-[#E5E7EB]",
      ].join(" ")}
      style={{
        padding: "clamp(18px,3.2vmin,28px)",
        minHeight: "clamp(110px,18vmin,160px)", //높이
      }}
    >
      <img
        src={icon}
        alt=""
        className="w-[clamp(22px,3.7vmin,40px)] h-auto mt-[1px]"
        draggable="false"
      />
      <div className="min-w-0">
        <div className="font-semibold text-[#111827] text-[clamp(18px,2.3vmin,24px)]">
          {title}
        </div>
        <div className="text-[#6B7280] mt-[6px] text-[clamp(15px,1.9vmin,20px)]">
          {desc}
        </div>
      </div>
    </button>
  );

  return (
    // 전체를 아래로 내리고, 너비를 줄여서 가운데 배치
    <div className="mx-auto w-full max-w-[720px] mt-[clamp(24px,10vh,120px)] grid gap-[clamp(40px,4vmin,65px)]">
      <Card
        active={value === "fat"}
        icon={fatIcon}
        title="체지방률 감소"
        desc="건강한 체중 관리를 위해 체지방 감소를 목표로 합니다."
        onClick={() => onChange("fat")}
      />
      <Card
        active={value === "muscle"}
        icon={musIcon}
        title="근육량 증가"
        desc="체계적인 근력 운동과 근육 성장을 목표로 합니다."
        onClick={() => onChange("muscle")}
      />
    </div>
  );
}
