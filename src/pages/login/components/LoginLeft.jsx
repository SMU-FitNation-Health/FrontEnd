
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBtn from "../../../assets/login/login5.svg";
import googleBtn from "../../../assets/login/login6.svg";
import { loginUser } from "../../../api/login";

const W = "clamp(240px, 62vw, 382px)"; // 인풋/버튼 가로
const H = "clamp(40px, 7.2vh, 48px)"; // 인풋/버튼 높이
const CARD_W = "clamp(280px, 68vw, 448px)"; // 카드 가로
const CARD_H = "clamp(340px, 66vh, 505px)"; // 카드 최소 높이
const VPAD = "clamp(16px, 11dvh, 190px)"; // 상·하 여백
const BOTPAD = "max(env(safe-area-inset-bottom), 0)";

const GAP_LOGIN_TO_OR = "clamp(24px, 6vh, 44px)";
const GAP_OR_TO_GOOGLE = "clamp(18px, 5vh, 36px)";

// 공통 SVG 버튼
function ClickableSvg({ src, alt, onClick, style = {}, disabled = false }) {
  return (
    <img
      src={src}
      alt={alt}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={alt}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
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
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto",
        ...style,
      }}
    />
  );
}

export default function LoginLeft() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogin, setKeepLogin] = useState(false); // UI 유지
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const canSubmit = email.trim() && password;

  const handleLogin = async () => {
    if (!canSubmit || loading) return;

    try {
      setLoading(true);
      setError("");

      const data = await loginUser({ email: email.trim(), password });

      // 백엔드 응답: { access_token, token_type }
      localStorage.setItem(
        "cv-auth",
        JSON.stringify({
          accessToken: data.access_token,
          tokenType: data.token_type,
          keepLogin,
        })
      );

      // TODO: 필요에 따라 경로 변경 (/onboarding 등)
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "로그인에 실패했어요. 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    // TODO: 구글 로그인 붙이면 여기 구현
    console.log("Google 로그인은 아직 준비 중입니다.");
  };

  return (
    <aside
      className="w-full min-h-dvh lg:min-h-dvh lg:box-border flex items-start justify-center bg-[#F8FAFC] min-h-0 lg:overflow-hidden"
      style={{
        paddingTop: `calc(${VPAD} + env(safe-area-inset-top))`,
        paddingBottom: BOTPAD,
      }}
    >
      <div className="w-full max-w-[720px] px-[clamp(12px,3vw,24px)]">
        {/* 상단 타이틀 */}
        <div className="flex flex-col items-center">
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
                  handleLogin();
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
            <ClickableSvg
              src={loginBtn}
              alt="로그인하기"
              onClick={handleLogin}
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
            <ClickableSvg
              src={googleBtn}
              alt="Google로 계속하기"
              onClick={handleGoogle}
              disabled={loading}
            />
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
          <a href="/sign" className="text-[#0F172A] hover:underline">
            회원가입하기
          </a>
        </div>
      </div>
    </aside>
  );
}
