import React from "react";
import SummaryCard from "./components/SummaryCard.jsx";
import DailyCard from "./components/DailyCard.jsx";
import DailyHeader from "./components/DailyHeader.jsx";
import DailyHero from "./components/DailyHero.jsx";

import {
  useTodayMeals,
  TARGET_CALORIES,
} from "./hooks/useTodayMeals.js";
import { DailyDate } from "./utils/DailyDate.js";

export default function DailyFoodPage() {
  const { meals, totals, refreshMeal } = useTodayMeals();

  const dateLabel = DailyDate();

  const calorieRatio =
    TARGET_CALORIES > 0 ? totals.calories / TARGET_CALORIES : 0;

  return (
    <div className="min-h-dvh bg-[#F9FAFB] flex justify-center px-[clamp(16px,4vw,40px)]">
      <div className="w-full max-w-[1440px] py-[clamp(24px,4vh,40px)] space-y-[clamp(24px,4vh,36px)]">
        {/* 상단 헤더 */}
        <DailyHeader />

        {/* 날짜/타이틀 (버튼 없음) */}
        <DailyHero dateLabel={dateLabel} />

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

        {/* 현재 적용된 아침/점심/저녁 카드 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[clamp(16px,2.4vmin,22px)] pb-[clamp(24px,4vh,40px)]">
          {meals.map((meal) => (
            <DailyCard
              key={meal.id}
              meal={meal}
              onRefresh={() => refreshMeal(meal.mealType)}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
