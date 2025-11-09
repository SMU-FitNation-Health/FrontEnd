import React from "react";
import LoginLeft from "./components/LoginLeft.jsx";
import LoginRight from "./components/LoginRight.jsx";

export default function LoginPage() {
  return (
    // 큰 화면: 2열 / 작은 화면: 세로 스택
    <div className="w-full min-h-dvh bg-white overflow-x-hidden">
      <div className="min-h-dvh grid grid-cols-1 lg:grid-cols-2">
        <LoginLeft />
        <LoginRight />
      </div>
    </div>
  );
}
