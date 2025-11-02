import React from "react";
import ViewportLock from "../../styles/ViewportLock.jsx";
import LoginLeft from "./components/LoginLeft.jsx";
import LoginRight from "./components/LoginRight.jsx";

export default function LoginPage() {
  return (
    <ViewportLock>
      {/* 좁은 화면에서는 고정 최소폭을 유지해 수평 스크롤로 보게 함.
         예) 1280px 기준 레이아웃 → 필요 시 값 조정 */}
      <div className="min-h-dvh w-full lg:min-w-0 min-w-[1280px]">
        <div className="grid grid-cols-2 min-h-dvh w-full">
          <LoginLeft />
          <LoginRight />
        </div>
      </div>
    </ViewportLock>
  );
}
