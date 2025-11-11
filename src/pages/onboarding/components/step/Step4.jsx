import React from "react";
import stuIcon  from "../../../../assets/onboarding/ob8.svg";
import workIcon from "../../../../assets/onboarding/ob9.svg";

// 1페이지와 동일한 카드 베이스
const cardBase =
  "w-full text-left bg-white border-2 transition hover:shadow-md " +
  "flex items-center gap-[clamp(14px,2vmin,18px)]";

export default function Step4({ value, onChange }) {
  const Card = ({ role, icon, title, desc }) => {
    const active = value.role === role;
    return (
      <button
        type="button"
        onClick={() => onChange({ role })}
        className={[
          cardBase,
          active ? "border-[#009689]" : "border-[#E5E7EB]",
        ].join(" ")}
        style={{
          padding: "clamp(30px,5vmin,60px)",          // ✓ 1페이지와 동일
          minHeight: "clamp(110px,18vmin,160px)",     // ✓ 1페이지와 동일
        }}
      >
        <img
          src={icon}
          alt=""
          className="w-[clamp(22px,3.7vmin,40px)] h-auto mt-[1px]" // ✓ 1페이지와 동일
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
  };

  return (
    // ✓ 1페이지 컨테이너와 동일한 폭/여백/간격
    <div className="mx-auto w-full max-w-[720px] mt-[clamp(24px,10vh,120px)] grid gap-[clamp(40px,4vmin,65px)]">
      <Card role="student" icon={stuIcon}  title="학생"   desc="시험 기간과 학업 일정을 고려한 맞춤 관리" />
      <Card role="worker"  icon={workIcon} title="직장인" desc="업무 스케줄에 최적화된 건강 관리" />
    </div>
  );
}
