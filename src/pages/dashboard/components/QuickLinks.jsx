import React from "react";
import { useNavigate } from "react-router-dom";
import Das2 from "../../../assets/dashboard/das2.svg?react";
import Das3 from "../../../assets/dashboard/das3.svg?react";
import Das4 from "../../../assets/dashboard/das4.svg?react";

const S = {
  width: "clamp(400px, 90vw, 1400px)",
  scaleY: 0.9,
  gap:     "clamp(4px, 4vmin, 100px)",   // SVG들 사이 간격
  marginY: "clamp(30px, 20vmin, 200px)", // 위·아래 다른 컴포넌트와 간격
};

function SvgButton({ Svg, to = "#", label }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!to || to === "#") return;
    navigate(to);
  };

  return (
    <div
      className="w-full flex justify-center"
      style={{ padding: 0, margin: 0 }}
    >
      <Svg
        role="button"
        aria-label={label}
        onClick={handleClick}   // ✅ svg 자체에만 클릭
        style={{
          width: S.width,        // 가로만 제어
          height: "auto",        // 세로는 원래 비율대로
          display: "block",
          pointerEvents: "visiblePainted", // 실제 그려진 부분만 클릭되도록 시도
          transform: `scaleY(${S.scaleY})`,
          transformOrigin: "center",       // 가운데 기준으로 위아래로 늘어나게
        }}
        className="
          cursor-pointer
          hover:opacity-85
          transition
          select-none
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
      <SvgButton Svg={Das2} to="#"          label="Sports" />
      <SvgButton Svg={Das3} to="/dailyfood" label="Food" />
      <SvgButton Svg={Das4} to="#"          label="Record" />
    </section>
  );
}
