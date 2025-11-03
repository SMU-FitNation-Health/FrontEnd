// src/pages/login/components/LoginRight.jsx
import React from "react";
import bg from "../../../assets/login/login2.svg";
import logo from "../../../assets/login/login3.svg";
import text from "../../../assets/login/login4.svg";

export default function LoginRight({
  logoClass = "",
  textClass = "",
  containerClass = "",
}) {
  return (
    <aside
      className="
        relative w-full min-h-dvh overflow-hidden border-l border-[#E5E7EB]
        bg-no-repeat bg-center bg-cover lg:bg-contain
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-[3vmin] -mt-[12vmin]">
        <div
          className={`
            inline-flex flex-col items-center min-w-0
            gap-[clamp(10vmin,14vmin,18vmin)]
            px-[4vmin] py-[3vmin] w-fit max-w-[96vw]
            ${containerClass}
          `}
        >
          {/* 로고: 크기는 그대로, shrink 방지만 추가(선택) */}
          <img
            src={logo}
            alt="Care View 로고"
            className={`h-[clamp(11.5vmin,12.5vmin,19.5vmin)] w-auto shrink-0 ${logoClass}`}
            draggable="false"
          />
          {/* 텍스트: 커지지 않던 원인을 제거 (핵심: shrink-0 max-w-none) */}
          <img
            src={text}
            alt="Care View 텍스트"
            className={`w-[clamp(40vmin,43vmin,59vmin)] max-w-none h-auto shrink-0 ${textClass}`}
            draggable="false"
          />
        </div>
      </div>
    </aside>
  );
}
