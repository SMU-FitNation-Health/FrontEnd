import React from "react";
import bg from "../../../assets/login/login2.svg";
import logo from "../../../assets/login/login3.svg";
import text from "../../../assets/login/login4.svg";

// 조절 노브
const LIFT   = "clamp(50px, 10vh, 200px)";   // 위로 올리는 정도
const LOGO_H = "clamp(100px, 12vh, 220px)";  // 로고 높이
const TEXT_W = "clamp(260px, 30vw, 500px)";  // 텍스트 폭
const GAP    = "clamp(24px, 15vw, 120px)";   // 로고↔텍스트 간격
const VPAD   = "clamp(40px, 8vh, 120px)";    // 상·하 숨쉴 공간

export default function LoginRight({
  logoClass = "",
  textClass = "",
  containerClass = "",
}) {
  return (
    <aside
      className="
        w-full border-l border-[#E5E7EB]
        bg-no-repeat bg-center bg-cover
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* ✅ absolute 대신 flex + 정상 흐름 참여 */}
      <div
        className="min-h-dvh flex items-center justify-center"
        style={{
          paddingTop: VPAD,
          paddingBottom: VPAD,
          // 기준점 위로 끌어올림(원하면 0으로)
          marginTop: `calc(-1 * ${LIFT})`,
        }}
      >
        <div
          className={`inline-flex flex-col items-center w-fit max-w-[96vw] ${containerClass}`}
          style={{ gap: GAP, padding: "clamp(12px,2vw,32px)" }}
        >
          {/* 로고 */}
          <img
            src={logo}
            alt="Care View 로고"
            className={`w-auto shrink-0 ${logoClass}`}
            style={{ height: LOGO_H }}
            draggable="false"
          />
          {/* 텍스트 */}
          <img
            src={text}
            alt="Care View 텍스트"
            className={`max-w-none h-auto shrink-0 ${textClass}`}
            style={{ width: TEXT_W }}
            draggable="false"
          />
        </div>
      </div>
    </aside>
  );
}
