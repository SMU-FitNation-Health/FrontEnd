import React from "react";

function MainPage() {
  return (
    <div className="flex flex-col w-[1024px] mx-auto">
      {/* 상단 섹션 (이미지) */}
      <section
        className="w-full h-[1440px] bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/main/main1.svg')" }}
      />

      {/* 하단 섹션 (하얀색 영역) */}
      <section className="w-full h-[1440px] bg-white" />
    </div>
  );
}

export default MainPage;
