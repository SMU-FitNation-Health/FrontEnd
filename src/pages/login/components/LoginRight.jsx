import React from "react";
import bg from "../../../assets/login/login2.svg";
import logo from "../../../assets/login/login3.svg";
import text from "../../../assets/login/login4.svg";

//조절
const LIFT   = "clamp(64px, 22vh, 300px)";   //높이
const LOGO_H = "clamp(100px, 12vh, 220px)";  //로고
const TEXT_W = "clamp(260px, 30vw, 500px)";  //텍스트
const GAP    = "clamp(24px, 15vw, 120px)";   //간격

export default function LoginRight({
  logoClass = "",
  textClass = "",
  containerClass = "",
}) {
  return (
    <aside
      className="
        relative w-full min-h-dvh border-l border-[#E5E7EB]
        bg-no-repeat bg-center bg-cover
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* 중앙 기준에서 위로 LIFT 만큼 끌어올림 */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          px-[clamp(12px,2vw,32px)]
        "
        style={{ marginTop: `calc(-1 * ${LIFT})` }}
      >
        <div
          className={`
            inline-flex flex-col items-center min-w-0
            px-[clamp(12px,2vw,32px)] py-[clamp(10px,2vw,28px)]
            w-fit max-w-[96vw]
            ${containerClass}
          `}

          //간격
          style={{ gap: GAP }}
        >

          {/* 로고 */}
          <img
            src={logo}
            alt="Care View 로고"
            className={`w-auto shrink-0 ${logoClass}`}
            style={{ height: LOGO_H }}
            draggable="false"
          />

          {/* 텍스트*/}
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
