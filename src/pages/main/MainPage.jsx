import React from "react";
import main1 from "../../assets/main/main1.svg";
import Footer from "../../layout/footer/Footer.jsx";
import { global } from "../../utils/global";
import MainCta from "./components/MainCta.jsx";

export default function MainPage() {
  return (
    // ★ body 기본 여백(8px)만 상쇄: 전역 CSS 필요 없음
    <div className="-mx-[8px] overflow-x-hidden">
      <main {...global({ className: "flex flex-col" })}>
        {/* 상단: 1440×1024 (이미지 1440×900 + 아래 여백 124) */}
        <div className="h-[1024px] bg-white flex flex-col">
          <div className="w-full h-[900px]">
            <img
              src={main1}
              alt="main visual"
              className="w-full h-full object-cover object-center"
              draggable="false"
            />
          </div>
          <div className="flex-1" />
        </div>

        {/* 하단: 698(컨텐츠) + 326(푸터) = 1024 */}
        <section className="h-[1024px] bg-white flex flex-col">
          <MainCta loginHref="/login" signupHref="/signup" />
          <div className="w-full h-[326px]">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
