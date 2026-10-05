import React, { useState } from "react";
import OnboardingLeft from "./components/OnboardingLeft.jsx";
import OnboardingRight from "./components/OnboardingRight.jsx";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-dvh grid grid-cols-[4fr_6fr] bg-white">
      <OnboardingLeft currentStep={step} />
      <OnboardingRight step={step} onStepChange={setStep} />
    </div>
  );
}

// 온보딩 페이지 기능 구현 및 개발 완료하였습니다