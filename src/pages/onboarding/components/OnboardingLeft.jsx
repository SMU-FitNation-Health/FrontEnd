import React from "react";
import bg from "../../../assets/onboarding/ob1.svg";
import logo from "../../../assets/onboarding/ob3.svg";

export const ONBOARDING_STEP_LABELS = [
  "목표 설정",
  "운동 스케줄",
  "기본 정보",
  "직업 정보",
  "완료",
];

export default function OnboardingLeft({ currentStep = 1 }) { //페이지는 완료까지 5개임
  return (
    <aside className="relative min-h-dvh text-white overflow-hidden">
      {/* 배경 */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />
      {/* 녹색 오버레이 */}
      <div className="absolute inset-0 bg-[rgba(9,55,45,0.58)]" />

      <div className="relative flex flex-col h-full">
        {/* 상단 로고 */}
        <div className="px-[clamp(16px,2.5vw,32px)] pt-[clamp(16px,2.5vw,32px)]">
          <img
            src={logo}
            alt="Care View"
            className="h-[clamp(26px,3vmin,40px)]"
            draggable="false"
          />
          <p className="mt-[clamp(6px,1vmin,10px)] text-[clamp(12px,1.1vmin,14px)] opacity-85">
            당신의 건강 파트너
          </p>
        </div>

        {/* 단계 네비게이션 */}
        <ol className="mt-[clamp(16px,4vh,40px)] grow px-[clamp(16px,2.5vw,32px)] space-y-[clamp(14px,2.3vh,24px)]">
          {ONBOARDING_STEP_LABELS.map((label, idx) => {
            const step = idx + 1;               // 1~5
            const active = step === currentStep;
            const done = step < currentStep && step !== ONBOARDING_STEP_LABELS.length;

            return (
              <li key={label} className="flex items-center gap-[clamp(10px,1.5vw,16px)]">
                <span
                  className={[
                    "grid place-items-center rounded-full border select-none",
                    active
                      ? "bg-white text-[#0B5D51] border-white"
                      : done
                      ? "bg-white/25 text-white border-white/50"
                      : "text-white/90 border-white/35",
                  ].join(" ")}
                  style={{
                    width: "clamp(24px,3vmin,32px)",
                    height: "clamp(24px,3vmin,32px)",
                    fontSize: "clamp(12px,1.2vmin,14px)",
                    fontWeight: 600,
                  }}
                >
                  {step}
                </span>
                <span
                  className={[
                    "text-[clamp(13px,1.2vmin,16px)]",
                    active ? "font-semibold" : "opacity-90",
                  ].join(" ")}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ol>

        {/* 하단 카피 */}
        <div className="px-[clamp(16px,2.5vw,32px)] pb-[clamp(20px,3vh,36px)] text-[clamp(12px,1.1vmin,14px)] leading-relaxed opacity-95">
          <p>건강한 삶의 시작, 목표를 설정하세요.</p>
          <p className="opacity-85">AI 분석으로 개인화된 플랜을 추천해드립니다.</p>
        </div>
      </div>
    </aside>
  );
}
