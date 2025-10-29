import React from "react";
import main2 from "../../../assets/main/main2.svg";
import MainLoginButton from "./MainLoginButton.jsx";
import MainSignupButton from "./MainSignupButton.jsx";

/** 하단 698px 영역 */
export default function MainCta({
  loginHref = "/login",
  signupHref = "/signup",
}) {
  return (
    <div className="w-full flex items-center">
      <div className="w-full grid grid-cols-2 gap-x-24 items-center">
        {/* 왼쪽 이미지: 525×395 */}
        <div className="flex justify-center">
          <img
            src={main2}
            alt="메인 섹션 이미지"
            className="w-[525px] h-[395px] rounded-2xl shadow-xl object-cover"
            draggable="false"
          />
        </div>

        {/* 오른쪽 텍스트 + 버튼들 */}
        <div className="flex flex-col items-center text-center">
          {/* 제목 */}
          <h3 className="text-[40px] leading-[60px] font-bold text-gray-800 mb-3">
            시작하기
          </h3>

          {/* 문구를 위로: 유틸 대신 '인라인'으로 아래 여백 8px 고정 */}
          <p
            className="text-[18px] leading-[27px] text-[#4A5565] opacity-90"
            style={{ marginBottom: 8 }}
          >
            Care View와 함께 건강한 삶을 관리하세요
          </p>

          {/* 버튼 간격 강제: '랩퍼 + padding-bottom'을 인라인으로 부여 */}
          <div className="flex flex-col items-center">
            {/* 로그인 버튼: 아래 간격 32px 확정 */}
            <div style={{ paddingBottom: 32, lineHeight: 0 }}>
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
