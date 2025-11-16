import React from "react";
import logo from "../../assets/login/login1.svg";
import SummaryCard from "./components/SummaryCard.jsx";
import DailyCard from "./components/DailyCard.jsx";
import { useTodayMeals, TARGET_CALORIES } from "./hooks/useTodayMeals.js";
import { DailyDate } from "./utils/DailyDate.js";

export default function DailyFoodPage() {
  const { meals, totals } = useTodayMeals();
  const dateLabel = DailyDate();

  const calorieRatio =
    TARGET_CALORIES > 0 ? totals.calories / TARGET_CALORIES : 0;

  return (
    <div className="min-h-dvh bg-[#F9FAFB] flex justify-center px-[clamp(16px,4vw,40px)]">
      {/* 여기서만 폭/패딩 제어 – 나중에 페이지별로 마음대로 조정 가능 */}
      <div className="w-full max-w-[1440px] py-[clamp(24px,4vh,40px)] space-y-[clamp(24px,4vh,36px)]">
        {/* 상단 로고 + 우측 버튼들 */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-[clamp(8px,1.4vmin,10px)]">
            <img
              src={logo}
              alt="Care View 로고"
              className="w-[clamp(28px,3vmin,36px)] h-auto"
              draggable="false"
            />
            <span className="text-[clamp(18px,2.1vmin,22px)] font-semibold text-[#111827]">
              Care View
            </span>
          </div>

          <div className="flex items-center gap-[clamp(8px,1.3vmin,12px)]">
            <button
              type="button"
              className="px-[clamp(16px,2vmin,20px)] py-[clamp(8px,1.4vmin,10px)] rounded-full text-[clamp(12px,1.4vmin,14px)] font-medium bg-[#1E2939] text-white shadow-sm"
            >
              금일 추천 식단
            </button>
            <a
              href="#"
              className="px-[clamp(16px,2vmin,20px)] py-[clamp(8px,1.4vmin,10px)] rounded-full text-[clamp(12px,1.4vmin,14px)] font-medium border border-[#D1D5DB] text-[#4B5563] bg-white/70 hover:bg-white transition-colors"
            >
              맞춤형 식단
            </a>
          </div>
        </header>

        {/* 날짜 + 타이틀 + 설명 + CTA */}
        <section className="text-center space-y-[clamp(10px,1.8vmin,14px)]">
          <div className="text-[clamp(13px,1.5vmin,14px)] text-[#6B7280]">
            {dateLabel}
          </div>
          <h1 className="text-[clamp(22px,2.7vmin,28px)] font-semibold text-[#111827]">
            오늘의 맞춤 식단
          </h1>
          <p className="text-[clamp(13px,1.6vmin,15px)] text-[#6B7280]">
            당신의 건강을 위해 분석된 최적의 식단입니다.
          </p>

          <div className="pt-[clamp(8px,1.5vmin,10px)]">
            <button
              type="button"
              className="px-[clamp(20px,2.8vmin,26px)] py-[clamp(10px,1.8vmin,12px)] rounded-full bg-[#1E2939] text-white text-[clamp(13px,1.6vmin,14px)] font-medium shadow-sm"
            >
              새로운 식단 추천 받기
            </button>
          </div>
        </section>

        {/* 상단 4개 요약 카드 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[clamp(10px,2vmin,18px)]">
          <SummaryCard
            label="총 칼로리"
            value={`${totals.calories} / ${TARGET_CALORIES}`}
            unit="kcal"
            showBar
            ratio={calorieRatio}
          />
          <SummaryCard label="탄수화물" value={totals.carbs} unit="g" />
          <SummaryCard label="단백질" value={totals.protein} unit="g" />
          <SummaryCard label="지방" value={totals.fat} unit="g" />
        </section>

        {/* 아침 / 점심 / 저녁 카드 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[clamp(16px,2.4vmin,22px)] pb-[clamp(24px,4vh,40px)]">
          {meals.map((meal) => (
            <DailyCard key={meal.id} meal={meal} />
          ))}
        </section>
      </div>
    </div>
  );
}
