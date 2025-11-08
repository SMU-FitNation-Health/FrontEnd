import React from "react";
import LoginLeft from "./components/LoginLeft.jsx";
import LoginRight from "./components/LoginRight.jsx";

export default function LoginPage() {
  return (
    //가로 스크롤 방지 + 화면 채우기
    <div className="w-screen min-h-screen overflow-x-hidden bg-white">
      {/* 1440×1024 기준 1:1 레이아웃, 작은 화면에서는 세로 스택 */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <LoginLeft />
        <LoginRight />
      </div>
    </div>
  );
}
