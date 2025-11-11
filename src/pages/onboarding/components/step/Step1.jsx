import React from "react";
import fatIcon  from "../../../../assets/onboarding/ob6.svg";
import musIcon  from "../../../../assets/onboarding/ob7.svg";

const cardBase =
  "w-full text-left bg-white border transition hover:shadow-md rounded-none flex items-start gap-[clamp(14px,2vmin,18px)]";

export default function Step1({ value, onChange }) {
  const Card = ({ active, icon, title, desc, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={[cardBase, active ? "border-[#0B5D51] ring-2 ring-[#0B5D51]/30" : "border-[#E5E7EB]"].join(" ")}
      style={{ padding: "clamp(16px,2.6vmin,22px)" }}
    >
      <img src={icon} alt="" className="w-[clamp(18px,2.4vmin,22px)] h-auto mt-[2px]" />
      <div className="min-w-0">
        <div className="font-semibold text-[#111827] text-[clamp(15px,2vmin,18px)]">{title}</div>
        <div className="text-[#6B7280] mt-[6px] text-[clamp(13px,1.7vmin,16px)]">{desc}</div>
      </div>
    </button>
  );

  return (
    <div className="grid gap-[clamp(14px,2.2vmin,18px)]">
      <Card
        active={value==="fat"}
        icon={fatIcon}
        title="체지방률 감소"
        desc="건강한 체중 관리를 위해 체지방 감소를 목표로 합니다."
        onClick={()=>onChange("fat")}
      />
      <Card
        active={value==="muscle"}
        icon={musIcon}
        title="근육량 증가"
        desc="체계적인 근력 운동과 근육 성장을 목표로 합니다."
        onClick={()=>onChange("muscle")}
      />
    </div>
  );
}
