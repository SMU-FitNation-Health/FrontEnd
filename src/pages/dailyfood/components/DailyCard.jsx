// 아침 점심 저녁 카드

import React from "react";
import refreshIcon from "../../../assets/dailyfood/df1.svg";

function MacroPill({ label, value, unit }) {
  return (
    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-[clamp(8px,1.2vmin,10px)] px-[clamp(10px,1.4vmin,12px)] text-center space-y-[3px]">
      <div className="text-[clamp(11px,1.3vmin,12px)] text-[#6B7280]">
        {label}
      </div>
      <div className="text-[clamp(13px,1.6vmin,14px)] font-medium text-[#111827]">
        {value}
        {unit}
      </div>
    </div>
  );
}

export default function DailyCard({ meal, onRefresh }) {
  return (
    <article className="rounded-2xl border border-[#E5E7EB] bg-white/70 overflow-hidden flex flex-col h-full">
      {/* 이미지 영역*/}
      <div className="relative h-[clamp(180px,22vmin,220px)] bg-slate-200">
        {meal.image && (
          <img
            src={meal.image}
            alt={`${meal.mealType} 식단`}
            className="w-full h-full object-cover"
          />
        )}

        {/* 왼쪽 하단: 새로고침 아이콘, 끼니 로고 */}
        <div className="absolute left-[clamp(10px,1.6vmin,14px)] bottom-[clamp(10px,1.6vmin,14px)] flex flex-col gap-[clamp(6px,0.9vmin,8px)] items-start">
          {/* svg */}
          <img
            src={refreshIcon}
            alt={`${meal.mealType} 식단 새로 추천`}
            className="w-[clamp(10px,4vmin,30px)] h-auto cursor-pointer select-none"
            onClick={onRefresh}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onRefresh?.();
              }
            }}
          />

          {/*아침/점심/저녁 로고*/}
          <div className="px-3 py-1 rounded-full bg-white/90 text-[#111827] text-[clamp(11px,1.3vmin,12px)]">
            {meal.mealType}
          </div>
        </div>
      </div>

      <div className="p-[clamp(16px,2.4vmin,20px)] flex flex-col gap-[clamp(12px,1.8vmin,16px)] flex-1">
        {/* 칼로리 */}
        <div className="flex items-center justify-between">
          <div className="text-[clamp(13px,2vmin,40px)] font-semibold">
            칼로리
          </div>
          <div className="text-[clamp(16px,1.8vmin,40px)] font-semibold text-[#111827]">
            {meal.calories} kcal
          </div>
        </div>

        {/* 영양성분 */}
        <div className="space-y-[6px]">
          <div className="text-[clamp(13px,1.5vmin,40px)] font-semibold text-[#6B7280]">
            영양성분
          </div>
          <div className="grid grid-cols-3 gap-[clamp(6px,1vmin,10px)]">
            <MacroPill label="탄수화물" value={meal.carbs} unit="g" />
            <MacroPill label="단백질" value={meal.protein} unit="g" />
            <MacroPill label="지방" value={meal.fat} unit="g" />
          </div>
        </div>

        {/* 식단 구성 */}
        <div>
          <div className="text-[clamp(13px,1.5vmin,14px)] text-[#6B7280] mb-[4px]">
            식단 구성
          </div>
          <ul className="list-disc pl-5 space-y-[2px] text-[clamp(12px,1.4vmin,14px)] text-[#374151]">
            {meal.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* 추천 이유 */}
        <div className="mt-auto">
          <div className="text-[clamp(13px,1.5vmin,14px)] text-[#6B7280] mb-[4px]">
            추천 이유
          </div>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-[clamp(12px,1.8vmin,14px)] text-[clamp(12px,1.4vmin,14px)] leading-relaxed text-[#4B5563]">
            {meal.reason}
          </div>
        </div>
      </div>
    </article>
  );
}
