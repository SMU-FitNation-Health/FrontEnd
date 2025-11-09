import React from "react";
import topLogo from "../../../assets/login/login1.svg";
import loginBtn from "../../../assets/login/login5.svg";
import googleBtn from "../../../assets/login/login6.svg";

export default function SignLeft() {
  return (
    <aside className="w-full min-h-dvh flex items-center justify-center bg-[#F8FAFC]">
      {/* 래퍼는 칼럼폭(=컨테이너의 절반) 내에서 가운데 정렬 */}
      <div className="px-[calc(24px*var(--k,1))] w-full max-w-[720px]">  
        {/* 상단 로고/텍스트 */}
        <div className="flex flex-col items-center">
          {/* 로고: 60×60 @1440×1024 */}
          <img
            src={topLogo}
            alt="Care View"
            className="select-none"
            style={{
              width: "calc(60px * var(--k,1))",
              height: "calc(60px * var(--k,1))",
            }}
            draggable="false"
          />
          <h1
            className="mt-2 text-center font-semibold text-[#0F172A]"
            style={{ fontSize: "clamp(18px, calc(28px*var(--k,1)), 28px)" }}
          >
            환영합니다!
          </h1>
          <p
            className="text-center text-[#6B7280]"
            style={{
              marginTop: "calc(10px * var(--k,1))",
              fontSize: "clamp(12px, calc(16px*var(--k,1)), 16px)",
            }}
          >
            건강한 삶의 시작, 지금 함께해요
          </p>
        </div>

        {/* 로그인 카드: 448×505 @1440×1024 */}
        <div
          className="mx-auto mt-6 rounded-[16px] bg-white shadow-[0_8px_24px_rgba(2,6,23,0.06)] ring-1 ring-black/5 flex flex-col items-center"
          style={{
            width: "calc(448px * var(--k,1))",
            height: "calc(505px * var(--k,1))",
            padding: "calc(28px * var(--k,1))",
          }}
        >
          {/* 공통 사이즈: 382×48 @1440×1024  */}
          {/* 이메일 */}
          <label
            className="self-start text-[#111827]"
            style={{ fontSize: "clamp(12px, calc(14px*var(--k,1)), 14px)" }}
          >
            이메일
          </label>
          <div className="relative" style={{ marginTop: "calc(8px*var(--k,1))" }}>
            {/* 메일 아이콘 */}
            <svg
              className="text-[#9CA3AF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              style={{
                position: "absolute",
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
              className="rounded-[12px] border border-[#E5E7EB] outline-none focus:ring-2 focus:ring-[#D1E4FF] max-w-none"
              style={{
                width: "calc(382px * var(--k,1))",   // ← 정확히 382
                height: "calc(48px * var(--k,1))",    // ← 정확히 48
                paddingLeft: "calc(52px*var(--k,1))",
                paddingRight: "calc(16px*var(--k,1))",
                fontSize: "clamp(13px, calc(16px*var(--k,1)), 16px)",
              }}
            />
          </div>

          {/* 비밀번호 */}
          <label
            className="self-start text-[#111827]"
            style={{ marginTop: "calc(18px*var(--k,1))", fontSize: "clamp(12px, calc(14px*var(--k,1)), 14px)" }}
          >
            비밀번호
          </label>
          <div className="relative" style={{ marginTop: "calc(8px*var(--k,1))" }}>
            {/* 자물쇠 아이콘 */}
            <svg
              className="text-[#9CA3AF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              style={{
                position: "absolute",
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

            {/* 눈 아이콘 버튼 */}
            <button
              type="button"
              aria-label="비밀번호 보기"
              style={{
                position: "absolute",
                right: "calc(16px*var(--k,1))",
                top: "50%",
                transform: "translateY(-50%)",
                width: "calc(22px*var(--k,1))",
                height: "calc(22px*var(--k,1))",
                color: "#9CA3AF",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="100%" height="100%">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>

            <input
              type="password"
              defaultValue="••••••"
              className="rounded-[12px] border border-[#E5E7EB] outline-none focus:ring-2 focus:ring-[#D1E4FF] max-w-none"
              style={{
                width: "calc(382px * var(--k,1))",   // ← 정확히 382
                height: "calc(48px * var(--k,1))",    // ← 정확히 48
                paddingLeft: "calc(52px*var(--k,1))",
                paddingRight: "calc(52px*var(--k,1))",
                fontSize: "clamp(13px, calc(16px*var(--k,1)), 16px)",
              }}
            />
          </div>

          {/* 옵션 라인 */}
          <div
            className="flex items-center justify-between w-full"
            style={{
              width: "calc(382px * var(--k,1))",
              marginTop: "calc(14px*var(--k,1))",
            }}
          >
            <label
              className="flex items-center text-[#4B5563]"
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
              className="text-[#4B5563] hover:text-[#111827]"
              style={{ fontSize: "clamp(12px, calc(14px*var(--k,1)), 14px)" }}
              href="#"
            >
              비밀번호 찾기
            </a>
          </div>

          {/* 로그인 버튼(이미지) 382×48 */}
          <button
            className="overflow-hidden ring-1 ring-black/10 rounded-[12px] bg-[#111827]"
            style={{
              width: "calc(382px * var(--k,1))",
              height: "calc(48px * var(--k,1))",
              marginTop: "calc(20px*var(--k,1))",
            }}
          >
            <img
              src={loginBtn}
              alt="로그인하기"
              className="w-full h-full object-contain select-none"
              draggable="false"
            />
          </button>

          {/* 구분선 */}
          <div
            className="relative"
            style={{ width: "calc(382px * var(--k,1))", margin: "calc(18px*var(--k,1)) 0" }}
          >
            <div className="h-px bg-[#E5E7EB]" />
            <span
              className="absolute left-1/2 -translate-x-1/2 bg-white text-[#9CA3AF]"
              style={{
                top: "calc(-10px*var(--k,1))",
                padding: "0 calc(11px*var(--k,1))",
                fontSize: "clamp(11px, calc(13px*var(--k,1)), 13px)",
              }}
            >
              또는
            </span>
          </div>

          {/* Google 버튼(이미지) 382×48 */}
          <button
            className="rounded-[12px] overflow-hidden ring-1 ring-black/10 bg-white"
            style={{
              width: "calc(382px * var(--k,1))",
              height: "calc(48px * var(--k,1))",
            }}
          >
            <img
              src={googleBtn}
              alt="Google로 계속하기"
              className="w-full h-full object-contain select-none"
              draggable="false"
            />
          </button>
        </div>

        {/* 하단 문구 */}
        <div
          className="text-center text-[#6B7280]"
          style={{
            marginTop: "calc(30px*var(--k,1))",
            fontSize: "clamp(12px, calc(14px*var(--k,1)), 14px)",
          }}
        >
          이미 계정이 있으신가요?{" "}
          <a href="/login" className="text-[#0F172A] hover:underline">
            로그인하기
          </a>
        </div>
      </div>
    </aside>
  );
}
