// src/pages/main/MainPage.jsx
import React from "react";
import main1 from "../../assets/main/main1.svg";
import MainCta from "./components/MainCta.jsx";
import Footer from "../../layout/footer/Footer.jsx";

export default function MainPage() {
  return (
    <main className="w-screen overflow-x-hidden bg-white">
      {/* HERO: 풀블리드 1440×900 */}
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

      {/* 1440 컨테이너 + 위로 124px 여백 */}
      <section className="w-screen">
        <div className="mx-auto mt-[124px]" style={{ width: 1440 }}>
          <MainCta />
        </div>
      </section>

      <div className="h-[8vw]" />
      <Footer />
    </main>
  );
}