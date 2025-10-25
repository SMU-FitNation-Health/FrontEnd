import React from "react";
import main1 from "../../assets/main/main1.svg";
import Footer from "../../layout/footer/Footer.jsx";
import { global } from "../../utils/global";

export default function MainPage() {
  return (
    <>
      {/* 상단 1024*/}
      <section className="relative h-[1024px]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[900px] bg-center bg-cover"
          style={{ backgroundImage: `url(${main1})` }}
          aria-hidden="true"
        />

        {/* 1440 고정 콘텐츠 */}
        <div {...global({ className: "relative h-full flex flex-col" })}>
          {/* 이미지 박스: 1440×900 (가로 여백 없이 채움은 cover, 전체 보기는 contain) */}
          <div className="w-full h-[900px]">
            <img
              src={main1}
              alt="main visual"
              className="w-full h-full object-cover" // 여백 없이 채우기(크롭 약간 허용). 전체 보길 원하면 object-contain
              draggable="false"
            />
          </div>

          {/* 아래 여백: 1024 - 900 = 124설정 */}
          <div className="flex-1" />
        </div>
      </section>

      {/* footer 326 고정*/}
      <main {...global({ className: "flex flex-col" })}>
        <section className="h-[1024px] bg-white flex flex-col">
          <div className="flex-1" />
          <div className="w-full h-[326px]">
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}
