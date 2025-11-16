// src/pages/dashboard/components/QuickLinks.jsx
import React from "react";
import Das2 from "../../../assets/dashboard/das2.svg?react";
import Das3 from "../../../assets/dashboard/das3.svg?react";
import Das4 from "../../../assets/dashboard/das4.svg?react";

const S = {
  width:  "clamp(300px, 80vw, 1500px)",   // SVG 가로
  height: "clamp(130px, 25vmin, 300px)",  // SVG 세로

  gap:     "clamp(4px, 1.5vmin, 20px)",   // SVG들 사이 간격
  marginY: "clamp(30px, 14vmin, 200px)",  // 위·아래 다른 컴포넌트와 간격
};

function SvgButton({ Svg, to = "#", label }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = to;
  };

  return (
    <div
      // 래퍼는 클릭 이벤트 절대 없음
      className="flex justify-center"
      style={{ padding: 0, margin: 0 }}
    >
      <Svg
        aria-label={label}
        role="button"
        onClick={handleClick}          // ✅ 오직 여기만 클릭 처리
        style={{
          width: S.width,
          height: S.height,
          maxWidth: "100vw",
          display: "block",
          // 디버깅용: 클릭 영역 눈으로 보고 싶으면 잠깐 주석 해제
          // outline: "2px solid red",
        }}
        className="
          cursor-pointer
          hover:opacity-85
          transition
        "
      />
    </div>
  );
}

export default function QuickLinks() {
  return (
    <section
      className="w-full flex flex-col items-center"
      style={{
        rowGap: S.gap,
        marginTop: S.marginY,
        marginBottom: S.marginY,
      }}
    >
      <SvgButton Svg={Das2} to="#" label="Sports" />
      <SvgButton Svg={Das3} to="/dailyfood" label="Food" />
      <SvgButton Svg={Das4} to="#" label="Record" />
    </section>
  );
}
