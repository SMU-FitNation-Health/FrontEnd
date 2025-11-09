import React from "react";
import main2 from "../../../assets/main/main2.svg";
import MainLoginButton from "./MainLoginButton.jsx";
import MainSignupButton from "./MainSignupButton.jsx";

/** 하단 698px 영역 */
export default function MainCta({
  loginHref = "/login",
  signupHref = "/sign",
}) {
  return (
    <div className="w-full flex items-center">
      <div className="w-full grid grid-cols-2 gap-x-24 items-center">
        
        {/* 왼쪽 이미지: 525×395 (디자인 고정치 유지) */}
        <div className="flex justify-center">
          <img
            src={main2}
            alt="메인 섹션 이미지"
            className="w-[525px] h-[395px] rounded-2xl shadow-xl object-cover"
            draggable="false"
          />
        </div>

        {/* 오른쪽 텍스트 + 버튼들 */}
        <div className="flex flex-col items-center text-center -mt-[50px]">

          {/* 제목 */}
          <h3 className="text-[42px] leading-[60px] font-bold text-gray-800 mb-[clamp(8px,1.2vh,16px)]">
            시작하기
          </h3>

          {/* 문구: 제목과의 간격, 아래 버튼과의 간격도 반응형으로 */}
          <p className="text-[18px] leading-[27px] text-[#4A5565] opacity-90 mt-[clamp(8px,1.5vh,20px)] mb-[clamp(24px,4vh,40px)]">
            Care View와 함께 건강한 삶을 관리하세요
          </p>

          {/* 버튼  */}
          <div className="flex flex-col items-center">
            {/* 로그인 버튼: 아래 간격 반응형 */}
            <div className="mb-[clamp(20px,3vh,32px)]" style={{ lineHeight: 0 }}>
              <MainLoginButton href={loginHref} />
            </div>

            {/* 회원가입 버튼 */}
            <div style={{ lineHeight: 0 }}>
              <MainSignupButton href={signupHref} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
