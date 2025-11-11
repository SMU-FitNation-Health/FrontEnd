import React from "react";
import OnboardingLeft from "./components/OnboardingLeft";

export default function OnboardingPage() {
  return (
    <div className="min-h-dvh grid grid-cols-[4fr_6fr] bg-white">
      <OnboardingLeft currentStep={1} />
      <section className="bg-white p-[clamp(16px,3vw,40px)]">{/* 우측 영역 */}</section>
    </div>
  );
}
