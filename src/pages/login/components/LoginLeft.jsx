import React from "react";
import topLogo from "../../../assets/login/login1.svg";
import loginBtn from "../../../assets/login/login5.svg";   // 382×48 SVG
import googleBtn from "../../../assets/login/login6.svg";  // 382×48 SVG

// 반응형 치수
const W      = "clamp(240px, 62vw, 382px)";
const H      = "clamp(40px, 7.2vh, 48px)";
const CARD_W = "clamp(280px, 68vw, 448px)";
const CARD_H = "clamp(420px, 78vh, 505px)";
const LOGO   = "clamp(40px, 10vmin, 60px)";
const VPAD   = "clamp(16px, 6vh, 80px)";

const GAP_LOGIN_TO_OR  = "clamp(24px, 6vh, 44px)";
const GAP_OR_TO_GOOGLE = "clamp(18px, 5vh, 36px)";

// 공통 SVG 버튼
function ClickableSvg({ src, alt, onClick, style = {} }) {
  return (
    <img
      src={src}
      alt={alt}
      role="button"
      tabIndex={0}
      aria-label={alt}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(e);
        }
      }}
      draggable="false"
      className="block select-none outline-none focus:ring-2 focus:ring-[#D1E4FF] cursor-pointer"
      style={{
        width: W,
        height: H,
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        objectFit: "contain",
        ...style,
      }}
    />
  );
}

export default function LoginLeft() {
  const handleLogin = () => {};
  const handleGoogle = () => {};

  return (
    // 핵심 변경:
    // 1) items-start (모바일 상단 정렬) + lg:items-center
    // 2) overflow-y-auto 유지 + min-h-0 (그리드 자식 내부 스크롤 허용)
    // 3) 상단 safe-area까지 고려한 paddingTop
    <aside
      className="w-full min-h-dvh lg:h-dvh lg:box-border flex items-start lg:items-center justify-center bg-[#F8FAFC]
                 overflow-y-auto lg:overflow-visible min-h-0"
      style={{
        paddingTop: `calc(${VPAD} + env(safe-area-inset-top))`,
        paddingBottom: VPAD,
      }}
    >
      <div className="w-full max-w-[720px] px-[clamp(12px,3vw,24px)]">
        {/* 상단 로고/타이틀 */}
        <div className="flex flex-col items-center">
          <img
            src={topLogo}
            alt="Care View"
            className="select-none block"
            style={{ width: LOGO, height: LOGO }}
            draggable="false"
          />
          <h1
            className="mt-2 text-center font-semibold text-[#0F172A]"
            style={{ fontSize: "clamp(16px, 3.2vmin, 28px)" }}
          >
            반가워요!
          </h1>
          <p
            className="text-center text-[#6B7280]"
            style={{
              marginTop: "clamp(6px, 1.4vmin, 10px)",
              fontSize: "clamp(12px, 2.4vmin, 16px)",
            }}
          >
            상쾌한 하루를 시작해볼까요?
          </p>
        </div>

        {/* 카드 */}
        <div
          className="mx-auto mt-6 rounded-[16px] bg-white shadow-[0_8px_24px_rgba(2,6,23,0.06)] border border-[#E5E7EB] flex flex-col items-center"
          style={{
            width: CARD_W,
            minHeight: CARD_H,
            padding: "clamp(16px, 3.5vmin, 28px)",
            boxSizing: "border-box",
          }}
        >
          {/* 이메일 */}
          <label
            className="self-center text-[#364153]"
            style={{ width: W, fontSize: "clamp(12px, 2.3vmin, 14px)" }}
          >
            이메일
          </label>

          <div
            className="relative self-center"
            style={{ width: W, height: H, marginTop: "clamp(6px, 1.6vmin, 8px)" }}
          >
            <svg
              aria-hidden="true"
              className="absolute block text-[#9CA3AF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              style={{
                left: "clamp(10px, 2.2vmin, 16px)",
                top: "50%",
                transform: "translateY(-50%)",
                width: "clamp(18px, 2.6vmin, 22px)",
                height: "clamp(18px, 2.6vmin, 22px)",
              }}
            >
              <path d="M4 6h16v12H4z" />
              <path d="m22 6-10 7L2 6" />
            </svg>

            <input
              type="email"
              placeholder="hello@example.com"
              className="block rounded-[12px] border border-[#E5E7EB] outline-none focus:ring-2 focus:ring-[#D1E4FF] placeholder-[#717182]"
              style={{
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                paddingLeft: "clamp(40px, 5.5vmin, 52px)",
                paddingRight: "clamp(12px, 2.2vmin, 16px)",
                fontSize: "clamp(12px, 2.2vmin, 16px)",
              }}
            />
          </div>

          {/* 비밀번호 */}
          <label
            className="self-center text-[#364153]"
            style={{
              width: W,
              marginTop: "clamp(12px, 2.8vmin, 18px)",
              fontSize: "clamp(12px, 2.3vmin, 14px)",
            }}
          >
            비밀번호
          </label>

          <div
            className="relative self-center"
            style={{ width: W, height: H, marginTop: "clamp(6px, 1.6vmin, 8px)" }}
          >
            <svg
              aria-hidden="true"
              className="absolute block text-[#9CA3AF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              style={{
                left: "clamp(10px, 2.2vmin, 16px)",
                top: "50%",
                transform: "translateY(-50%)",
                width: "clamp(18px, 2.6vmin, 22px)",
                height: "clamp(18px, 2.6vmin, 22px)",
              }}
            >
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 1 1 8 0v3" />
            </svg>

            <input
              type="password"
              className="block rounded-[12px] border border-[#E5E7EB] outline-none focus:ring-2 focus:ring-[#D1E4FF] placeholder-[#717182]"
              style={{
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                paddingLeft: "clamp(40px, 5.5vmin, 52px)",
                paddingRight: "clamp(12px, 2.2vmin, 16px)",
                fontSize: "clamp(12px, 2.2vmin, 16px)",
              }}
              placeholder="••••••"
            />
          </div>

          {/* 옵션 라인 */}
          <div
            className="self-center flex items-center justify-between"
            style={{ width: W, marginTop: "clamp(10px, 2.4vmin, 14px)" }}
          >
            <label
              className="flex items-center text-[#4A5565]"
              style={{
                gap: "clamp(8px, 2.2vmin, 11px)",
                fontSize: "clamp(12px, 2.3vmin, 14px)",
              }}
            >
              <input
                type="checkbox"
                className="accent-[#111827]"
                style={{
                  width: "clamp(13px, 2.2vmin, 15px)",
                  height: "clamp(13px, 2.2vmin, 15px)",
                }}
              />
              로그인 상태 유지
            </label>
            <a
              className="text-[#4A5565] hover:text-[#111827]"
              style={{ fontSize: "clamp(12px, 2.3vmin, 14px)" }}
              href="#"
            >
              비밀번호 찾기
            </a>
          </div>

          {/* 로그인 버튼 */}
          <div className="self-center" style={{ width: W, marginTop: "clamp(14px, 3vmin, 20px)" }}>
            <ClickableSvg src={loginBtn} alt="로그인하기" onClick={handleLogin} />
          </div>

          {/* 구분선/문구 */}
          <div
            className="relative self-center"
            style={{
              width: W,
              marginTop: GAP_LOGIN_TO_OR,
              marginBottom: GAP_OR_TO_GOOGLE,
            }}
          >
            <div className="h-px bg-[#E5E7EB]" />
            <span
              className="absolute left-1/2 -translate-x-1/2 bg-white text-[#9CA3AF]"
              style={{
                top: "clamp(-8px, -1.8vmin, -10px)",
                padding: "0 clamp(8px, 2.1vmin, 11px)",
                fontSize: "clamp(11px, 2.1vmin, 13px)",
              }}
            >
              또는
            </span>
          </div>

          {/* Google 버튼 */}
          <div className="self-center" style={{ width: W }}>
            <ClickableSvg src={googleBtn} alt="Google로 계속하기" onClick={handleGoogle} />
          </div>
        </div>

        {/* 하단 문구 */}
        <div
          className="text-center text-[#6B7280]"
          style={{
            marginTop: "clamp(18px, 3.2vmin, 30px)",
            fontSize: "clamp(12px, 2.3vmin, 14px)",
          }}
        >
          아직 회원이 아니신가요?{" "}
          <a href="/signup" className="text-[#0F172A] hover:underline">
            회원가입하기
          </a>
        </div>
      </div>
    </aside>
  );
}
