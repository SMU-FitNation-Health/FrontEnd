import React from "react";
import bg from "../../../assets/login/login2.svg";
import logo from "../../../assets/login/login3.svg";
import wordmark from "../../../assets/login/login4.svg";

export default function LoginRight() {
  return (
    <aside
      className="relative w-full overflow-hidden border-l border-[#E5E7EB]"
      style={{ minHeight: "inherit" }}  // 부모(min-h-dvh) 상속
    >
      <img
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center select-none pointer-events-none"
        draggable="false"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" aria-hidden="true" />

      <div className="relative z-10 flex w-full flex-col min-h-full">
        <div className="mt-[6vh] ml-[6vw] inline-flex items-center gap-3 rounded-2xl bg-white/30 backdrop-blur px-4 py-3">
          <img src={logo} alt="Care View" className="h-10 w-10 rounded-xl" />
          <span className="text-white text-[22px] font-semibold drop-shadow">Care View</span>
        </div>

        <div className="flex grow items-center justify-center px-[6vw]">
          {wordmark ? (
            <img
              src={wordmark}
              alt="Care View 안내"
              className="w-[min(560px,86%)] h-auto select-none pointer-events-none"
              draggable="false"
            />
          ) : (
            <div className="text-center text-white">
              <h2 className="text-xl md:text-2xl font-medium">당신의 건강한 일상</h2>
              <p className="mt-2 text-sm md:text-base opacity-90">
                생활혜택을 모아 보고, 개인 데이터와 연계해
                <br className="hidden md:block" /> 나에게 맞는 서비스를 제안해요
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
