// src/pages/login/Login.jsx
import React, { useState } from "react";

export default function Login() {
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#D0FAE5] to-[#FFFFFF]">
      {/* 상단/하단 글로우 (에메랄드) */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[#00D492]/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#009966]/22 blur-[120px]" />

      {/* 상단 아이콘 + 타이틀 */}
      <div className="pt-16 flex flex-col items-center">
        <div className="h-16 w-16 rounded-full bg-white/60 backdrop-blur ring-1 ring-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-center">
          {/* 심박 아이콘 */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 12h4l2.2-4.4L12 16l2.5-6 1.5 4h5"
              stroke="#00D492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="mt-4 text-[28px] font-bold text-[#00D492]">반가워요!</h1>
        <p className="mt-1 text-sm text-[#717182]">상쾌한 하루를 시작해볼까요?</p>
      </div>

      {/* 카드 래퍼 (폭 고정 + 중앙) */}
      <div className="w-full max-w-md px-4 sm:px-0">
        {/* 카드: 화이트 60% + 글래스 + 소프트 그림자 + 살짝 외곽 글로우 */}
        <div className="mt-6 rounded-2xl bg-white/60 backdrop-blur-md ring-1 ring-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_0_40px_rgba(0,212,146,0.12)]">
          <div className="p-6 sm:p-8">
            {/* 이메일 */}
            <label className="block text-[13px] font-medium text-[#4A5565]">이메일</label>
            <div className="mt-2 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 6h16v12H4z" stroke="#00D492" strokeWidth="1.8"/>
                  <path d="m4 7 8 6 8-6" stroke="#00D492" strokeWidth="1.8" fill="none"/>
                </svg>
              </span>
              <input
                type="email"
                placeholder="hello@example.com"
                required
                className="block w-full rounded-lg border border-[#717182]/30 bg-white/80 pl-10 pr-3 py-2.5 text-[#364153] placeholder-[#717182]/60 outline-none focus:ring-2 focus:ring-[#00D492] focus:border-transparent"
              />
            </div>

            {/* 비밀번호 */}
            <div className="mt-5">
              <label className="block text-[13px] font-medium text-[#4A5565]">비밀번호</label>
              <div className="mt-2 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="10" width="18" height="11" rx="2" stroke="#00D492" strokeWidth="1.8"/>
                    <path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="#00D492" strokeWidth="1.8"/>
                  </svg>
                </span>
                <input
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="block w-full rounded-lg border border-[#717182]/30 bg-white/80 pl-10 pr-10 py-2.5 text-[#364153] placeholder-[#717182]/60 outline-none focus:ring-2 focus:ring-[#00D492] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#717182]"
                  aria-label="비밀번호 표시"
                >
                  {/* 눈 아이콘 */}
                  {showPw ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" stroke="#4A5565" strokeWidth="1.8"/>
                      <circle cx="12" cy="12" r="3" stroke="#4A5565" strokeWidth="1.8"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M3 3l18 18" stroke="#4A5565" strokeWidth="1.8"/>
                      <path d="M1 12s4-7 11-7c2.2 0 4.1.7 5.7 1.7M22.9 12.6C21.4 14.9 17.8 19 12 19a12.6 12.6 0 0 1-4.3-.8" stroke="#4A5565" strokeWidth="1.8" fill="none"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* 옵션/링크 */}
            <div className="mt-4 flex items-center justify-between">
              <label className="inline-flex items-center gap-2 select-none">
                <input type="checkbox" className="h-4 w-4 accent-[#00D492]" />
                <span className="text-sm text-[#717182]">로그인 상태 유지</span>
              </label>
              <a href="#" className="text-sm font-medium text-[#009966] hover:underline">
                비밀번호 찾기
              </a>
            </div>

            {/* 로그인 버튼: 00D492 → 009966 */}
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#00D492] to-[#009966] px-4 py-3 text-white font-semibold shadow-[0_8px_20px_rgba(0,212,146,0.35)] hover:shadow-[0_10px_24px_rgba(0,212,146,0.45)] active:scale-[0.99] transition flex items-center justify-center gap-2"
            >
              로그인하기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* 구글 버튼 */}
            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-white px-4 py-3 text-[#364153] font-medium border border-[#717182]/25 hover:bg-white/95 transition flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.6 29.3 36 24 36 16.8 36 11 30.2 11 23s5.8-13 13-13c3.3 0 6.2 1.2 8.4 3.2l5.7-5.7C34.8 4.1 29.7 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c12.1 0 21-9.1 21-22 0-1.3-.1-2.2-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.3 0 6.2 1.2 8.4 3.2l5.7-5.7C34.8 4.1 29.7 2 24 2 15 2 7.6 6.6 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 46c5.2 0 10-2 13.6-5.3l-6.3-5.1C29.2 37.2 26.7 38 24 38c-5.3 0-9.8-3.4-11.6-8.1l-6.5 5C8.7 41.3 15.7 46 24 46z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.4 3.2-4.3 5.5-7.3 6.6l.1.1 6.3 5.1C37.8 41 42 37 43.6 31c.7-2.1 1-4.3 1-7 0-1.3-.1-2.2-.4-3.5z"/>
              </svg>
              Google로 계속하기
            </button>
          </div>

          {/* 카드 하단 안내 + 구분선 */}
          <div className="px-6 sm:px-8 text-center">
            <p className="text-sm text-[#717182] pb-4">
              아직 회원이 아니신가요?{" "}
              <a href="#" className="text-[#009966] font-medium hover:underline">회원가입하기</a>
            </p>
            <div className="border-t border-black/10 pt-3 pb-2">
              <p className="text-center text-xs text-[#717182]">
                © 2025 Care View Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* 하단 문구 */}
        <div className="mt-6 mb-12 flex items-center justify-center gap-2 text-[#717182] text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10Z" stroke="#00D492" strokeWidth="1.8"/>
          </svg>
          건강한 삶을 위한 첫 걸음
        </div>
      </div>
    </div>
  );
}
