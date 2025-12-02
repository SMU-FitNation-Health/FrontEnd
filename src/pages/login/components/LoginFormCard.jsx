// src/pages/login/components/LoginFormCard.jsx
import React from "react";
import loginBtn from "../../../assets/login/login5.svg";
import googleBtn from "../../../assets/login/login6.svg";
import useLoginForm from "../hooks/useLoginForm";
import SignButton from "../../sign/components/SignButton";

import {
  LOGIN_INPUT_WIDTH as W,
  LOGIN_INPUT_HEIGHT as H,
  LOGIN_CARD_WIDTH as CARD_W,
  LOGIN_CARD_MIN_HEIGHT as CARD_H,
  LOGIN_GAP_LOGIN_TO_OR as GAP_LOGIN_TO_OR,
  LOGIN_GAP_OR_TO_GOOGLE as GAP_OR_TO_GOOGLE,
} from "../constants/loginLayout";

export default function LoginFormCard({ onGoToMain, onGoToOnboarding }) {
  const {
    email,
    password,
    keepLogin,
    loading,
    error,
    canSubmit,
    setEmail,
    setPassword,
    setKeepLogin,
    handleSubmit,
  } = useLoginForm({ onGoToMain, onGoToOnboarding });

  const handleGoogle = () => {
    console.log("Google 로그인은 아직 준비 중입니다.");
  };

  return (
    <div
      className="mx-auto mt-4 rounded-[16px] bg-white shadow-[0_8px_24px_rgba(2,6,23,0.06)] border border-[#E5E7EB] flex flex-col items-center"
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
        style={{
          width: W,
          fontSize: "clamp(12px, 2.3vmin, 14px)",
        }}
      >
        이메일
      </label>

      <div
        className="relative self-center"
        style={{ width: W, height: H, marginTop: "clamp(6px, 1.6vmin, 8px)" }}
      >
        {/* 왼쪽 아이콘 */}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        {/* 자물쇠 아이콘 */}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
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
            checked={keepLogin}
            onChange={(e) => setKeepLogin(e.target.checked)}
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

      {/* 에러 메시지 */}
      {error && (
        <p
          className="self-center text-center text-[#DC2626]"
          style={{
            width: W,
            marginTop: "clamp(10px, 2.4vmin, 16px)",
            fontSize: "clamp(12px, 2.3vmin, 14px)",
          }}
        >
          {error}
        </p>
      )}

      {/* 로그인 버튼 */}
      <div
        className="self-center"
        style={{ width: W, marginTop: "clamp(14px, 3vmin, 20px)" }}
      >
        <SignButton
          src={loginBtn}
          alt="로그인하기"
          onClick={handleSubmit}
          disabled={!canSubmit || loading}
        />
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
        <SignButton
          src={googleBtn}
          alt="Google로 계속하기"
          onClick={handleGoogle}
          disabled={loading}
        />
      </div>
    </div>
  );
}
