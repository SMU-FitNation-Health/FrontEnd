import React from "react";
import topLogo from "../../../assets/login/login1.svg";
import loginBtn from "../../../assets/login/login5.svg";   // 382×48 SVG
import googleBtn from "../../../assets/login/login6.svg";  // 382×48 SVG

// 고정 규격 + 반응형 확대용 스케일 변수 사용(var(--k,1) 기본 1배)
const W = "calc(382px * var(--k,1))";
const H = "calc(48px * var(--k,1))";
const CARD_W = "calc(448px * var(--k,1))";
const CARD_H = "calc(506px * var(--k,1))";

// 위/아래 여백: 화면이 작으면 40px, 보통 8vh, 커져도 120px까지만
const VPAD = "clamp(40px, 8vh, 120px)";

// 간격(원하면 숫자만 바꿔도 됨)
const GAP_LOGIN_TO_OR  = "calc(44px * var(--k,1))"; // 로그인 버튼 ↔ “또는”
const GAP_OR_TO_GOOGLE = "calc(36px * var(--k,1))"; // “또는” ↔ Google

/** SVG 자체를 버튼처럼 동작시키는 공통 컴포넌트 (여백 0, 클릭/키보드 가능) */
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
    <aside
      className="w-full min-h-dvh flex items-center justify-center bg-[#F8FAFC]"
      style={{ paddingTop: VPAD, paddingBottom: VPAD }}  // 상·하 여백 추가
    >
      <div className="w-full max-w-[720px] px-[calc(24px*var(--k,1))]">
        {/* 상단 로고/텍스트 */}
        <div className="flex flex-col items-center">
          <img
            src={topLogo}
            alt="Care View"
            className="select-none block"
            style={{ width: "calc(60px*var(--k,1))", height: "calc(60px*var(--k,1))" }}
            draggable="false"
          />
          <h1
            className="mt-2 text-center font-semibold text-[#0F172A]"
            style={{ fontSize: "clamp(18px, calc(28px*var(--k,1)), 28px)" }}
          >
            반가워요!
          </h1>
          <p
            className="text-center text-[#6B7280]"
            style={{ marginTop: "calc(10px*var(--k,1))", fontSize: "clamp(12px, calc(16px*var(--k,1)), 16px)" }}
          >
            상쾌한 하루를 시작해볼까요?
          </p>
        </div>

        {/* ===== 카드: 448×506 정확히 ===== */}
        <div
          className="mx-auto mt-6 rounded-[16px] bg-white shadow-[0_8px_24px_rgba(2,6,23,0.06)] border border-[#E5E7EB] flex flex-col items-center"
          style={{ width: CARD_W, height: CARD_H, padding: "calc(28px*var(--k,1))", boxSizing: "border-box" }}
        >
          {/* 이메일 */}
          <label
            className="self-center text-[#364153]"
            style={{ width: W, fontSize: "clamp(12px, calc(14px*var(--k,1)), 14px)" }}
          >
            이메일
          </label>

          {/* 입력 래퍼(382×48) → input 100%로 채움 (테두리 포함 정확히 맞춤) */}
          <div className="relative self-center" style={{ width: W, height: H, marginTop: "calc(8px*var(--k,1))" }}>
            {/* 왼쪽 아이콘 */}
            <svg
              aria-hidden="true"
              className="absolute block text-[#9CA3AF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              style={{
                left: "calc(16px*var(--k,1))",
                top: "50%",
                transform: "translateY(-50%)",
                width: "calc(22px*var(--k,1))",
                height: "calc(22px*var(--k,1))",
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
                paddingLeft: "calc(52px*var(--k,1))",
                paddingRight: "calc(16px*var(--k,1))",
                fontSize: "clamp(13px, calc(16px*var(--k,1)), 16px)",
              }}
            />
          </div>

          {/* 비밀번호 */}
          <label
            className="self-center text-[#364153]"
            style={{ width: W, marginTop: "calc(18px*var(--k,1))", fontSize: "clamp(12px, calc(14px*var(--k,1)), 14px)" }}
          >
            비밀번호
          </label>

          <div className="relative self-center" style={{ width: W, height: H, marginTop: "calc(8px*var(--k,1))" }}>
            {/* 왼쪽 자물쇠 아이콘 */}
            <svg
              aria-hidden="true"
              className="absolute block text-[#9CA3AF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              style={{
                left: "calc(16px*var(--k,1))",
                top: "50%",
                transform: "translateY(-50%)",
                width: "calc(22px*var(--k,1))",
                height: "calc(22px*var(--k,1))",
              }}
            >
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 1 1 8 0v3" />
            </svg>

            {/* 커스텀 '눈' 버튼 제거 → 브라우저 기본 표시/동작만 유지 */}
            <input
              type="password"
              defaultValue="••••••"
              className="block rounded-[12px] border border-[#E5E7EB] outline-none focus:ring-2 focus:ring-[#D1E4FF] placeholder-[#717182]"
              style={{
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                paddingLeft: "calc(52px*var(--k,1))",
                paddingRight: "calc(16px*var(--k,1))",
                fontSize: "clamp(13px, calc(16px*var(--k,1)), 16px)",
              }}
            />
          </div>

          {/* 옵션 라인 */}
          <div
            className="self-center flex items-center justify-between"
            style={{ width: W, marginTop: "calc(14px*var(--k,1))" }}
          >
            <label
              className="flex items-center text-[#4A5565]"
              style={{ gap: "calc(11px*var(--k,1))", fontSize: "clamp(12px, calc(14px*var(--k,1)), 14px)" }}
            >
              <input
                type="checkbox"
                className="accent-[#111827]"
                style={{ width: "calc(15px*var(--k,1))", height: "calc(15px*var(--k,1))" }}
              />
              로그인 상태 유지
            </label>
            <a
              className="text-[#4A5565] hover:text-[#111827]"
              style={{ fontSize: "clamp(12px, calc(14px*var(--k,1)), 14px)" }}
              href="#"
            >
              비밀번호 찾기
            </a>
          </div>

          {/* 로그인 SVG (382×48) */}
          <div className="self-center" style={{ width: W, marginTop: "calc(20px*var(--k,1))" }}>
            <ClickableSvg src={loginBtn} alt="로그인하기" onClick={handleLogin} />
          </div>

          {/* —— 간격: 로그인 ↔ “또는”, “또는” ↔ Google —— */}
          <div
            className="relative self-center"
            style={{ width: W, marginTop: GAP_LOGIN_TO_OR, marginBottom: GAP_OR_TO_GOOGLE }}
          >
            <div className="h-px bg-[#E5E7EB]" />
            <span
              className="absolute left-1/2 -translate-x-1/2 bg-white text-[#9CA3AF]"
              style={{ top: "calc(-10px*var(--k,1))", padding: "0 calc(11px*var(--k,1))", fontSize: "clamp(11px, calc(13px*var(--k,1)), 13px)" }}
            >
              또는
            </span>
          </div>

          {/* Google SVG (382×48) */}
          <div className="self-center" style={{ width: W }}>
            <ClickableSvg src={googleBtn} alt="Google로 계속하기" onClick={handleGoogle} />
          </div>
        </div>

        {/* 하단 문구 */}
        <div
          className="text-center text-[#6B7280]"
          style={{ marginTop: "calc(30px*var(--k,1))", fontSize: "clamp(12px, calc(14px*var(--k,1)), 14px)" }}
        >
          아직 회원이 아니신가요?{" "}
          <a href="#" className="text-[#0F172A] hover:underline">
            회원가입하기
          </a>
        </div>
      </div>
    </aside>
  );
}
