import React, { useState } from "react";
import DailyHeader from "../dailyfood/components/DailyHeader";
import ReFoodTabs from "./components/ReFoodTabs";
import IngredientInputCard from "./components/IngredientInputCard";
import TipsCard from "./components/TipsCard";
import Footer from "../../layout/footer/Footer.jsx";

export default function ReFoodPage() {
  const [tab, setTab] = useState("fridge"); // fridge | convenience
  const [items, setItems] = useState([]);

  const addItem = (value) => {
    const v = value.trim();
    if (!v) return;
    if (items.some((x) => x.toLowerCase() === v.toLowerCase())) return;
    setItems((prev) => [...prev, v]);
  };

  const removeItem = (value) => {
    setItems((prev) => prev.filter((x) => x !== value));
  };

  return (
    // ✅ DailyFoodPage와 동일한 최상단 래퍼
    <div className="min-h-dvh bg-[#F9FAFB] flex justify-center px-[clamp(16px,4vw,40px)]">
      {/* ✅ DailyFoodPage와 동일한 내부 컨테이너 (폭/상단 여백/세로 간격) */}
      <div className="w-full max-w-[1440px] py-[clamp(24px,4vh,40px)] space-y-[clamp(24px,4vh,36px)]">
        {/* 상단 헤더 (위치 동일) */}
        <DailyHeader />

        {/* 중앙 타이틀 */}
        <div className="w-full flex flex-col items-center text-center gap-[clamp(6px,1.2vmin,10px)]">
          <h1 className="text-black font-semibold text-[clamp(18px,2.4vmin,28px)] leading-tight">
            맞춤형 식단 추천
          </h1>
          <p className="text-[#4A5565] text-[clamp(12px,1.6vmin,16px)] leading-relaxed">
            냉장고 재료로 만들수 있는 ~조합을 찾아보세요
          </p>
        </div>

        {/* 탭 */}
        <ReFoodTabs value={tab} onChange={setTab} />

        {/* 메인 컨텐츠 */}
        {tab === "fridge" ? (
          <IngredientInputCard
            items={items}
            onAdd={addItem}
            onRemove={removeItem}
          />
        ) : (
          <div className="bg-white/70 border border-[#D1D5DC] rounded-2xl p-[clamp(14px,2.2vmin,20px)]">
            <div className="text-[clamp(14px,1.8vmin,18px)] text-[#1E2939] font-semibold">
              편의점 조합 추천
            </div>
            <p className="mt-[clamp(6px,1.2vmin,10px)] text-[#4A5565] text-[clamp(12px,1.5vmin,15px)]">
              이 영역에 편의점 건강 조합 추천 UI가 들어갈 예정입니다.
            </p>
          </div>
        )}
        <TipsCard />
        <Footer />
      </div>
    </div>
  );
}