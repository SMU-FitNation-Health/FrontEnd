//새로운 식단 추천 카드

import React from "react";

const MEAL_TYPES = ["아침", "점심", "저녁"];

export default function DailyNewCard({
  candidates,
  applyCandidate,
  clearCandidates,
}) {
  if (!candidates) return null; // 후보 없으면 렌더 X

  return (
    <section className="space-y-[clamp(8px,1.5vmin,12px)]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[clamp(16px,2vmin,18px)] font-semibold text-[#111827]">
            새로 추천된 식단
          </h2>
          <p className="text-[clamp(11px,1.4vmin,12px)] text-[#6B7280] mt-[2px]">
            적용하고 싶은 식단만 선택해서 변경할 수 있어요.
          </p>
        </div>

        {/* 닫기 버튼 */}
        <button
          type="button"
          onClick={clearCandidates}
          className="w-[clamp(60px,8vmin,120px)] h-[clamp(30px,4vmin,60px)]
                     rounded-full border border-[#E5E7EB] flex items-center justify-center
                     text-[clamp(13px,2vmin,40px)] text-semibold
                     hover:bg-[#F3F4F6] hover:text-[#6B7280] transition-colors"
          aria-label="새로 추천된 식단 닫기"
        >
          닫기
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(10px,2vmin,16px)]">
        {MEAL_TYPES.map((type) => {
          const meal = candidates[type];

          if (!meal) {
            return (
              <div
                key={type}
                className="bg-white/40 border border-dashed border-[#E5E7EB] rounded-2xl p-[clamp(14px,2vmin,18px)] flex items-center justify-center text-[clamp(12px,1.5vmin,13px)] text-[#9CA3AF]"
              >
                {type} 식단은 이미 적용되었어요.
              </div>
            );
          }

          return (
            <div
              key={type}
              className="bg-white/70 border border-[#E5E7EB] rounded-2xl p-[clamp(14px,2vmin,18px)] flex flex-col gap-[6px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[clamp(13px,1.6vmin,14px)] font-medium text-[#111827]">
                  {type} 추천
                </span>
                <span className="text-[clamp(12px,1.4vmin,13px)] text-[#6B7280]">
                  {meal.calories} kcal
                </span>
              </div>

              <ul className="list-disc pl-4 space-y-[2px] text-[clamp(11px,1.4vmin,13px)] text-[#4B5563]">
                {meal.items.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => applyCandidate(type)}
                className="mt-[8px] w-full rounded-full bg-[#1E2939] text-white text-[clamp(12px,1.4vmin,13px)] py-[clamp(6px,1.2vmin,8px)] font-medium"
              >
                {type} 식단에 적용
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
