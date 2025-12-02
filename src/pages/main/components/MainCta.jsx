import React from "react";
import main2 from "../../../assets/main/main2.svg";
import MainLoginButton from "./MainLoginButton.jsx";
import MainSignupButton from "./MainSignupButton.jsx";
import MainStartButton from "./MainStartButton.jsx";

/** 하단 698px 영역 */
export default function MainCta({
  loginHref = "/login",
  signupHref = "/sign",
}) {
  //로컬스토리지 기반 로그인 여부 확인
  const isLoggedIn = (() => {
    if (typeof window === "undefined") return false;
    try {
      const raw = window.localStorage.getItem("cv-auth");
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      return !!parsed?.accessToken;
    } catch {
      return false;
    }
  })();

  return (
    <div className="w-full flex items-center">
      <div className="w-full grid grid-cols-2 gap-x-24 items-center">
        
        {/* 왼쪽 이미지: 525×395 (디자인 고정치 유지) */}
        <div className="flex justify-center">
          <img
            src={main2}
            alt="Care View 메인"
            className="max-w-[525px] w-full h-auto"
            draggable="false"
          />
        </div>

        {/* 오른쪽 텍스트 + 버튼 */}
        <div className="flex justify-center">
          <div className="w-full max-w-[480px]">
            <h2
              className="font-semibold text-[#111827] mb-[clamp(12px,2vh,20px)]"
              style={{ fontSize: "clamp(20px, 6vmin, 70px)" }}
            >
              시작하기
            </h2>

            <p
              className="text-[#4B5563] mb-[clamp(12px,4vh,40px)]"
              style={{ fontSize: "clamp(13px, 3vmin, 35px)", lineHeight: 1.6 }}
            >
              Care View와 함께 건강한 삶을 관리하세요.
            </p>

            {/*여기부터 버튼 영역 */}
            {isLoggedIn ? (
              //이미 로그인 한 사람은 대시보드 이동버튼만
              <div style={{ lineHeight: 0 }}>
                <MainStartButton href="/dashboard" />
              </div>
            ) : (
              <>
                {/* 로그인 버튼*/}
                <div
                  className="mb-[clamp(20px,3vh,32px)]"
                  style={{ lineHeight: 0 }}
                >
                  <MainLoginButton href={loginHref} />
                </div>

                {/*회원가입 버튼*/}
                <div style={{ lineHeight: 0 }}>
                  <MainSignupButton href={signupHref} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
