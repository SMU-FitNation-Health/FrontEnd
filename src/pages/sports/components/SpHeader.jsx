//상단 요약 카드 두개
import React from "react";

const S = {
  gap: "clamp(12px,2vmin,18px)",
  radius: "clamp(18px,2vmin,22px)",
  padX: "clamp(18px,3vmin,28px)",
  padY: "clamp(18px,3vmin,24px)",
  iconBox: "clamp(40px,4vmin,48px)",
  iconSize: "clamp(22px,2.7vmin,28px)",
};

export default function SpHeader({ icon, label, value, unit }) {
  return (
    <div
      className={`flex items-center gap-[${S.gap}] rounded-[${S.radius}] border border-[#E5E7EB] bg-white px-[${S.padX}] py-[${S.padY}] shadow-sm`}
    >
      <div
        className={`flex items-center justify-center rounded-xl bg-[#0096890D] w-[${S.iconBox}] h-[${S.iconBox}]`}
      >
        <img
          src={icon}
          alt=""
          className={`w-[${S.iconSize}] h-auto`}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[clamp(12px,1.4vmin,14px)] text-[#98A2B3]">
          {label}
        </span>
        <div className="flex items-baseline gap-[4px]">
          <span className="text-[clamp(20px,2.7vmin,26px)] font-semibold text-[#101828]">
            {value ?? "-"}
          </span>
          {unit && (
            <span className="text-[clamp(14px,1.6vmin,16px)] text-[#475467]">
              {unit}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
