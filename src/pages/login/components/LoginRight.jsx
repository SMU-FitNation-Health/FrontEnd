// src/pages/login/components/LoginRight.jsx
import React from "react";
import bg from "../../../assets/login/login2.svg";    // 배경
import logo from "../../../assets/login/login3.svg";  // 로고
import text from "../../../assets/login/login4.svg";  // 텍스트

export default function LoginRight() {
  return (
    <aside
      className="relative w-full min-h-dvh overflow-hidden border-l border-[#E5E7EB]"
      style={{ background: `url(${bg}) center / cover no-repeat` }}
    >
      {/* (옵션) 살짝 딤 */}
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      {/*
        포지션 포인트:
        - left-[62%] : 중앙에서 '오른쪽'으로 밀기(숫자 키우면 더 오른쪽)
        - -translate-x-1/2 : 자기 자신 너비의 절반만큼 왼쪽 보정 → 정확한 앵커
      */}
      <div className="absolute top-1/2 left-[62%] -translate-x-1/2 -translate-y-1/2 px-[6vw]">
        <div
          className="flex items-center rounded-2xl backdrop-blur-md bg-white/30"
          style={{
            /* 간격/패딩: 여기 수치만 조절하면 됨 */
            columnGap: "clamp(20px,3.4vw,44px)",   // 로고↔텍스트 간격 (더 띄우고 싶으면 증가)
            padding: "clamp(10px,1.4vw,14px) clamp(18px,2.4vw,26px)",
          }}
        >
          <img
            src={logo}
            alt="Care View 로고"
            className="h-[clamp(40px,3.6vw,56px)] w-auto"
            draggable="false"
          />
          <img
            src={text}
            alt="Care View"
            className="h-[clamp(26px,2.4vw,34px)] w-auto max-w-[min(56vw,560px)]"
            draggable="false"
          />
        </div>
      </div>
    </aside>
  );
}
