import React from "react";
import main1 from "../../assets/main/main1.svg";
import MainCta from "./components/MainCta.jsx";
import Footer from "../../layout/footer/Footer.jsx";

export default function MainPage() {
  return (
    // 화면 전체 폭 사용 + 가로 스크롤 방지
    <main className="w-screen overflow-x-hidden bg-white">
      {/* 좌우 여백 없이 꽉 차게 */}
      <section className="w-screen">
        <img
          src={main1}
          alt="Care View hero"
          width={1440}
          height={900}
          className="block w-screen h-[900px] object-cover select-none"
          draggable="false"
        />
      </section>

      {/* 내부 컨텐츠는 1440 중앙 정렬 유지 */}
      <section className="w-screen">
        <div className="mx-auto" style={{ width: 1440 }}>
          <MainCta />
        </div>
      </section>

      <div className="h-[8vw]" /> 
      <Footer />
    </main>
  );
}
