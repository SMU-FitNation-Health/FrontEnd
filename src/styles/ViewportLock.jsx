import React from "react";

/** 전체화면엔 가로 스크롤 제거, 작아지면 허용 */
export default function ViewportLock({ className = "", children }) {
  return (
    <div
      className={[
        "isolate relative",
        "w-full max-w-[100vw]",        // w-screen 대신: 스크롤바 폭으로 인한 가로 오버플로우 방지
        "min-h-dvh",
        "lg:overflow-x-hidden",        // 큰 화면: 가로 스크롤 제거
        "overflow-x-auto",             // 작은 화면: 가로 스크롤 허용
        "overflow-y-auto",             // 세로 스크롤 허용
      ].join(" ")}
      style={{ touchAction: "pan-y" }} // 모바일 수평 스와이프 억제
    >
      <div className={className}>{children}</div>
    </div>
  );
}
