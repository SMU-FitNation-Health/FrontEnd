// src/pages/sign/components/SignLeft.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signBtn from "../../../assets/sign/sign.svg";
import googleBtn from "../../../assets/login/login6.svg";
import { signUpUser } from "../../../api/sign";

const W = "clamp(240px, 62vw, 382px)";
const H = "clamp(40px, 7.2vh, 48px)";
const CARD_W = "clamp(280px, 68vw, 448px)";
const CARD_H = "clamp(480px, 72vh, 660px)";
const VPAD = "clamp(16px, 10dvh, 140px)";
const BOTPAD = "max(env(safe-area-inset-bottom), 0)";
const GAP_LOGIN_TO_OR = "clamp(24px, 6vh, 44px)";
const GAP_OR_TO_GOOGLE = "clamp(18px, 5vh, 36px)";

function ClickableSvg({ src, alt, onClick, disabled = false, style = {} }) {
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

export default function SignLeft() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const passwordsMatch = pw && pw2 && pw === pw2;
  const requiredOK =
    name.trim() && email.trim() && passwordsMatch && agreeTerms && agreePrivacy;

  const handleSign = async () => {
    if (!requiredOK || loading) return;

    try {
      setLoading(true);
      setError("");

      await signUpUser({
        name: name.trim(),
        email: email.trim(),
        password: pw,
        agreeTerms,
        agreePrivacy,
      });

      // 마케팅 동의는 백엔드 스키마에 없으니 지금은 프론트에서만 사용
      console.log("마케팅 동의 여부:", agreeMarketing);

      // 회원가입 성공 시 로그인 페이지로 이동
      navigate("/login");
    } catch (err) {
      setError(
        err.message ||
          "회원가입에 실패했어요. 입력값을 다시 확인하거나 잠시 후 다시 시도해 주세요."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    console.log("Google 회원가입은 아직 준비 중입니다.");
  };

  return (
    <aside
      className="w-full min-h-dvh box-border flex items-start justify-center bg-[#F8FAFC] overflow-x-hidden overflow-y-visible"
      style={{
        paddingTop: `calc(${VPAD} + env(safe-area-inset-top))`,
        paddingBottom: BOTPAD,
      }}
    >
      <div className="w-full max-w-[720px] px-[clamp(12px,3vw,24px)]">
        {/* 상단 타이틀 */}
        <div className="flex flex-col items-center">
          <h1
            className="mt-3 text-center font-semibold text-[#0F172A]"
            style={{ fontSize: "clamp(18px, 3.2vmin, 28px)" }}
          >
            환영합니다!
          </h1>
          <p
            className="text-center text-[#6B7280]"
            style={{
              marginTop: "clamp(6px, 1.4vmin, 10px)",
              fontSize: "clamp(12px, 2.4vmin, 16px)",
            }}
          >
            건강한 삶의 시작, 지금 함께해요
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
          {/* 이름 */}
          <label
            className="self-center text-[#364153]"
            style={{ width: W, fontSize: "clamp(12px, 2.3vmin, 14px)" }}
          >
            이름
          </label>
          <div
            className="relative self-center"
            style={{
              width: W,
              height: H,
              marginTop: "clamp(6px, 1.6vmin, 8px)",
            }}
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
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
              <path d="M3 20a9 9 0 0 1 18 0" />
            </svg>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
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

          {/* 이메일 */}
          <label
            className="self-center text-[#364153]"
            style={{
              width: W,
              marginTop: "clamp(10px, 2.6vmin, 14px)",
              fontSize: "clamp(12px, 2.3vmin, 14px)",
            }}
          >
            이메일
          </label>
          <div
            className="relative self-center"
            style={{
              width: W,
              height: H,
              marginTop: "clamp(6px, 1.6vmin, 8px)",
            }}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            style={{
              width: W,
              height: H,
              marginTop: "clamp(6px, 1.6vmin, 8px)",
            }}
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
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="숫자·문자 포함 8자 이상"
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

          {/* 비밀번호 확인 */}
          <label
            className="self-center text-[#364153]"
            style={{
              width: W,
              marginTop: "clamp(12px, 2.8vmin, 18px)",
              fontSize: "clamp(12px, 2.3vmin, 14px)",
            }}
          >
            비밀번호 확인
          </label>
          <div
            className="relative self-center"
            style={{
              width: W,
              height: H,
              marginTop: "clamp(6px, 1.6vmin, 8px)",
            }}
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
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
              placeholder="다시 입력해주세요"
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

          {/* 비밀번호 불일치 안내 */}
          {pw2 && !passwordsMatch && (
            <p
              className="self-center text-center text-[#DC2626]"
              style={{
                width: W,
                marginTop: "clamp(6px, 1.6vmin, 8px)",
                fontSize: "clamp(12px, 2.1vmin, 13px)",
              }}
            >
              비밀번호가 일치하지 않습니다.
            </p>
          )}

          {/* 체크박스들 */}
          <div
            className="self-center"
            style={{ width: W, marginTop: "clamp(12px, 2.8vmin, 18px)" }}
          >
            <label
              className="flex items-center text-[#4A5565]"
              style={{
                gap: "clamp(8px, 2.2vmin, 12px)",
                fontSize: "clamp(12px, 2.3vmin, 14px)",
                marginTop: "clamp(4px, 1.2vmin, 6px)",
              }}
            >
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="accent-[#111827]"
                style={{
                  width: "clamp(14px, 2.2vmin, 16px)",
                  height: "clamp(14px, 2.2vmin, 16px)",
                }}
              />
              <span className="inline-flex items-center">
                <span
                  className="rounded-[8px] bg-[#F3F4F6] text-[#6B7280] mr-2 px-2 py-[2px]"
                  style={{ fontSize: "clamp(10px, 1.9vmin, 12px)" }}
                >
                  필수
                </span>
                이용약관 동의
              </span>
            </label>

            <label
              className="flex items-center text-[#4A5565]"
              style={{
                gap: "clamp(8px, 2.2vmin, 12px)",
                fontSize: "clamp(12px, 2.3vmin, 14px)",
                marginTop: "clamp(6px, 1.4vmin, 8px)",
              }}
            >
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={(e) => setAgreePrivacy(e.target.checked)}
                className="accent-[#111827]"
                style={{
                  width: "clamp(14px, 2.2vmin, 16px)",
                  height: "clamp(14px, 2.2vmin, 16px)",
                }}
              />
              <span className="inline-flex items-center">
                <span
                  className="rounded-[8px] bg-[#F3F4F6] text-[#6B7280] mr-2 px-2 py-[2px]"
                  style={{ fontSize: "clamp(10px, 1.9vmin, 12px)" }}
                >
                  필수
                </span>
                개인정보 처리방침 동의
              </span>
            </label>

            <label
              className="flex items-center text-[#4A5565]"
              style={{
                gap: "clamp(8px, 2.2vmin, 12px)",
                fontSize: "clamp(12px, 2.3vmin, 14px)",
                marginTop: "clamp(6px, 1.4vmin, 8px)",
              }}
            >
              <input
                type="checkbox"
                checked={agreeMarketing}
                onChange={(e) => setAgreeMarketing(e.target.checked)}
                className="accent-[#111827]"
                style={{
                  width: "clamp(14px, 2.2vmin, 16px)",
                  height: "clamp(14px, 2.2vmin, 16px)",
                }}
              />
              <span className="inline-flex items-center">
                <span
                  className="rounded-[8px] bg-[#F3F4F6] text-[#6B7280] mr-2 px-2 py-[2px]"
                  style={{ fontSize: "clamp(10px, 1.9vmin, 12px)" }}
                >
                  선택
                </span>
                마케팅 정보 수신 동의
              </span>
            </label>
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

          {/* 회원가입 버튼 */}
          <div
            className="self-center"
            style={{ width: W, marginTop: "clamp(14px, 3vmin, 20px)" }}
          >
            <ClickableSvg
              src={signBtn}
              alt="회원가입하기"
              onClick={handleSign}
              disabled={!requiredOK || loading}
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
          이미 계정이 있으신가요?{" "}
          <Link to="/login" className="text-[#0F172A] hover:underline">
            로그인하기
          </Link>
        </div>
      </div>
    </aside>
  );
}
