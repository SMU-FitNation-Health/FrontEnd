import React from "react";
import bg from "../../../assets/login/login2.svg";
import logo from "../../../assets/login/login3.svg";
import text from "../../../assets/login/login4.svg"; // 요청대로 텍스트는 login4.svg

export default function LoginRight() {
  return (
    <aside
      className="relative w-full overflow-hidden border-l border-[#E5E7EB]"
      style={{ minHeight: "inherit" }}
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
          <img
            src={text}
            alt="Care View 소개"
            className="w-[min(560px,86%)] h-auto select-none pointer-events-none"
            draggable="false"
          />
        </div>
      </div>
    </aside>
  );
}
