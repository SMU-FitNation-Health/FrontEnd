import React from "react";
import { Link } from "react-router-dom";
import main1 from "../../assets/main/main1.svg";
import MainCta from "./components/MainCta.jsx";
import Footer from "../../layout/footer/Footer.jsx";

export default function MainPage() {
  const heroGap = "clamp(64px, 12.11vh, 160px)";

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* 임시: 온보딩 바로가기 (로그인/회원가입 API 연결 전 테스트용) */}
      <Link
        to="/onboarding"
        className="
          fixed z-50
          bottom-[clamp(16px,3vh,28px)]
          right-[clamp(16px,3vh,28px)]
          px-[clamp(14px,2.4vmin,18px)]
          py-[clamp(10px,1.8vmin,12px)]
          rounded-full shadow-lg border border-[#0B5D51]/15
          bg-[#0B5D51] text-white
          text-[clamp(13px,1.3vmin,15px)] font-semibold
          hover:opacity-95 active:scale-[0.98] transition
        "
      >
        온보딩 테스트 이동
      </Link>
      <section className="w-screen" style={{ "--hero-gap": heroGap }}>
        <div className="w-screen h-[calc(100vh-var(--hero-gap))] select-none">
          <img
            src={main1}
            alt="main visual"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
        <div style={{ height: "var(--hero-gap)" }} />
      </section>

      {/* 이후 섹션들 */}
      <main className="w-screen">
        <section className="px-[clamp(16px,4vw,72px)] pt-[clamp(48px,8vh,96px)] pb-[clamp(130px,12vh,150px)]">
          <MainCta />
        </section>
      </main>

      <Footer />
    </div>
  );
}
