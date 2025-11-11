import React from "react";
import doneIcon from "../../../../assets/onboarding/ob5.svg";

export default function Step5() {
  return (
    <div className="grid place-items-center">
      <img src={doneIcon} alt="" className="w-[clamp(44px,6vmin,64px)] h-auto mb-[clamp(10px,1.6vmin,14px)]" />
      <div className="font-semibold text-[#111827]">모든 준비 완료</div>
      <p className="text-[#6B7280] mt-[6px] text-center">
        이제 AI 기반 맞춤형 건강 관리를 시작할 수 있습니다
      </p>
    </div>
  );
}
