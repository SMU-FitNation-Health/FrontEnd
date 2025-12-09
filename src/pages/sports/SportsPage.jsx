import React from "react";
import DailyHeader from "../dailyfood/components/DailyHeader";
import timeIcon from "../../assets/sports/sp1.svg";
import calorieIcon from "../../assets/sports/sp2.svg";
import SpHeader from "./components/SpHeader";
import SpCard from "./components/SpCard";
import useSports from "./hooks/useSports";

const S = {
  containerPx: "clamp(16px,4vw,40px)",
  heroMarginTop: "clamp(40px,8vmin,72px)",
  heroGap: "clamp(10px,2.4vmin,18px)",
  sectionGap: "clamp(28px,6vmin,44px)",
  gridGap: "clamp(14px,3vmin,24px)",
  buttonPx: "clamp(20px,3.6vmin,30px)",
  buttonPy: "clamp(10px,1.9vmin,14px)",
  buttonFs: "clamp(14px,1.8vmin,16px)",
};

export default function SportsPage() {
  const {
    loading,
    errorMsg,
    reload,
    morning,
    lunch,
    dinner,
    totalDuration,
    totalCalorie,
  } = useSports();

  return (
    <div className="w-full min-h-dvh bg-[#F9FAFB]">
      <DailyHeader />

      <main
        className={`max-w-[1440px] mx-auto px-[${S.containerPx}] pb-[clamp(40px,8vmin,80px)]`}
      >
        {/* 타이틀 + 설명 + 버튼 */}
        <section
          className={`mt-[${S.heroMarginTop}] text-center space-y-[${S.heroGap}]`}
        >
          <h1 className="text-[clamp(20px,2.4vmin,24px)] font-semibold text-[#101828]">
            오늘의 맞춤 운동
          </h1>
          <p className="text-[clamp(13px,1.6vmin,15px)] text-[#667085]">
            당신의 건강 목표 달성을 위해 분석한 최적의 운동입니다.
          </p>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={reload}
              disabled={loading}
              className={`inline-flex items-center justify-center rounded-full bg-[#101828] text-white text-[${S.buttonFs}] px-[${S.buttonPx}] py-[${S.buttonPy}] shadow-sm hover:opacity-90 active:scale-[0.99] transition disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {loading ? "추천 불러오는 중..." : "새로운 운동 추천받기"}
            </button>
          </div>

          {errorMsg && (
            <p className="mt-[clamp(6px,1.2vmin,10px)] text-[clamp(12px,1.4vmin,14px)] text-[#B42318]">
              {errorMsg}
            </p>
          )}
        </section>

        {/* 상단 요약 카드: 운동시간 / 칼로리 소모 */}
        <section
          className={`mt-[${S.sectionGap}] grid grid-cols-1 md:grid-cols-2 gap-[${S.gridGap}]`}
        >
          <SpHeader
            icon={timeIcon}
            label="운동시간"
            value={totalDuration}
            unit="분"
          />
          <SpHeader
            icon={calorieIcon}
            label="칼로리 소모"
            value={totalCalorie}
            unit="kcal"
          />
        </section>

        {/* 아침 / 점심 / 저녁 카드 */}
        <section
          className={`mt-[${S.sectionGap}] grid grid-cols-1 md:grid-cols-3 gap-[${S.gridGap}]`}
        >
          <SpCard slotLabel="아침" data={morning} />
          <SpCard slotLabel="점심" data={lunch} />
          <SpCard slotLabel="저녁" data={dinner} />
        </section>
      </main>
    </div>
  );
}
