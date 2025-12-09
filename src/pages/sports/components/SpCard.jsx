//운동 카드 컴포넌트
import React from "react";

export default function SpCard({ slotLabel, data }) {
  const totalDuration = data?.total_duration_min ?? "-";
  const totalCalorie = data?.total_calorie_kcal ?? "-";
  const exercises = data?.exercises || [];

  return (
    <div className="flex flex-col rounded-[clamp(18px,2.2vmin,22px)] border border-[#009689] bg-white overflow-hidden shadow-sm">
      {/* 상단 이미지/배경 영역 */}
      <div className="relative h-[clamp(160px,24vmin,220px)] bg-[#E5F4F2]">
        {/* 아침/점심/저녁 라벨: 왼쪽 하단 + 흰 배경 + 검정 텍스트 */}
        <div className="absolute left-[clamp(12px,1.6vmin,16px)] bottom-[clamp(12px,1.6vmin,16px)] rounded-full bg-white text-[#101828] text-[clamp(11px,1.3vmin,13px)] px-[clamp(10px,1.6vmin,12px)] py-[clamp(4px,0.8vmin,6px)] border border-[#D0D5DD] shadow-sm">
          {slotLabel}
        </div>
      </div>

      <div className="flex flex-col gap-[clamp(8px,1.4vmin,12px)] px-[clamp(18px,2.4vmin,22px)] py-[clamp(14px,2vmin,18px)]">
        {/* 카드 상단 요약 */}
        <div className="flex flex-wrap items-center gap-[clamp(6px,1vmin,8px)] text-[clamp(12px,1.4vmin,14px)] text-[#475467]">
          <span className="text-[#667085]">총 운동시간</span>
          <span className="font-medium text-[#101828]">
            {totalDuration}분
          </span>
          <span className="h-[14px] w-px bg-[#D0D5DD]" />
          <span className="text-[#667085]">총 칼로리</span>
          <span className="font-medium text-[#101828]">
            {totalCalorie} kcal
          </span>
        </div>
        <div className="mt-[clamp(4px,0.8vmin,6px)] space-y-[clamp(8px,1.1vmin,10px)] text-[clamp(12px,1.5vmin,14px)] leading-relaxed">
          {exercises.length === 0 ? (
            <p className="text-[#98A2B3]">
              추천 운동 정보가 아직 제공되지 않았어요.
            </p>
          ) : (
            exercises.map((ex, idx) => (
              <div
                key={`${ex.movement_name}-${idx}`}
                className="space-y-[2px]"
              >
                {/* 1줄째: 준비운동 / 본운동 / 마무리운동 */}
                {ex.step_name && (
                  <p className="font-medium text-[#009689]">
                    {ex.step_name}
                  </p>
                )}

                {/* 2줄째: 운동이름(시간, 칼로리) */}
                <p className="text-[#475467]">
                  <span className="font-semibold text-[#101828]">
                    {ex.movement_name}
                  </span>
                  <span className="text-[#667085]">
                    {" "}
                    ({ex.duration_min}분, {ex.calorie_kcal}kcal)
                  </span>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
