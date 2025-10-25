import React from "react";
import main1 from "../../assets/main/main1.svg";
import Footer from "../../layout/footer/Footer.jsx";
import { global } from "../../utils/global";

export default function MainPage() {
  return (
    <main {...global({ className: "flex flex-col" })}>
      {/* 상단: 1440 × 1024 (이미지 전체 보이게) */}
      <div className="h-[1024px] flex items-center justify-center bg-white">
        <img
          src={main1}
          alt="main visual"
          className="w-full h-full object-contain"
          draggable="false"
        />
      </div>

      {/* 하단: 총 1440 × 1024, 하단에 footer 326 고정 */}
      <section className="h-[1024px] bg-white flex flex-col">
        <div className="flex-1" />
        <div className="w-full h-[326px]">
          <Footer />
        </div>
      </section>
    </main>
  );
}
