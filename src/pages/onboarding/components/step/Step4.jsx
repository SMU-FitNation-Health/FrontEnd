import React from "react";
import stuIcon  from "../../../../assets/onboarding/ob8.svg";
import workIcon from "../../../../assets/onboarding/ob9.svg";

const base =
  "w-full text-left bg-white border transition hover:shadow-md rounded-none flex items-start gap-[clamp(12px,2vmin,16px)]";

export default function Step4({ value, onChange }) {
  const Card = ({ role, icon, title, desc }) => {
    const active = value.role === role;
    return (
      <button
        type="button"
        onClick={() => onChange({ role })}
        className={[base, active ? "border-[#0B5D51] ring-2 ring-[#0B5D51]/30" : "border-[#E5E7EB]"].join(" ")}
        style={{ padding: "clamp(16px,2.6vmin,22px)" }}
      >
        <img src={icon} alt="" className="w-[clamp(22px,2.8vmin,26px)] h-auto mt-[2px]" />
        <div className="min-w-0">
          <div className="font-semibold text-[#111827] text-[clamp(15px,2vmin,18px)]">{title}</div>
          <div className="text-[#6B7280] mt-[6px] text-[clamp(13px,1.7vmin,16px)]">{desc}</div>
        </div>
      </button>
    );
  };

  return (
    <div className="grid gap-[clamp(14px,2.2vmin,18px)]">
      <Card role="student" icon={stuIcon}  title="학생"   desc="시험 기간과 학업 일정을 고려한 맞춤 관리" />
      <Card role="worker"  icon={workIcon} title="직장인" desc="업무 스케줄에 최적화된 건강 관리" />
    </div>
  );
}
