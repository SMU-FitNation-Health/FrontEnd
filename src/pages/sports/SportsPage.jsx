// src/pages/sport/sportspage.jsx
import React, { useState, useEffect, useCallback } from "react";
import DailyHeader from "../dailyfood/components/DailyHeader";

// 아이콘
import timeIcon from "../../assets/sports/sp1.svg";
import calorieIcon from "../../assets/sports/sp2.svg";

// axios 공통 클라이언트
import {
  api,
  withAuth,
  getErrorMessage,
} from "../../api/client";

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

// 하루 전체 시간/칼로리 안전하게 계산
function getTotalDuration(data) {
  if (!data) return null;
  if (typeof data.total_duration_min === "number") {
    return data.total_duration_min;
  }
  let sum = 0;
  ["morning", "lunch", "dinner"].forEach((key) => {
    sum += data?.[key]?.total_duration_min || 0;
  });
  return sum;
}

function getTotalCalorie(data) {
  if (!data) return null;
  if (typeof data.total_calorie_kcal === "number") {
    return data.total_calorie_kcal;
  }
  let sum = 0;
  ["morning", "lunch", "dinner"].forEach((key) => {
    sum += data?.[key]?.total_calorie_kcal || 0;
  });
  return sum;
}

// 상단 요약 카드 (운동시간 / 칼로리 소모)
function StatCard({ icon, label, value, unit }) {
  return (
    <div className="flex items-center gap-[clamp(12px,2vmin,18px)] rounded-[clamp(18px,2vmin,22px)] border border-[#E5E7EB] bg-white px-[clamp(18px,3vmin,28px)] py-[clamp(18px,3vmin,24px)] shadow-sm">
      <div className="flex items-center justify-center rounded-xl bg-[#0096890D] w-[clamp(40px,4vmin,48px)] h-[clamp(40px,4vmin,48px)]">
        <img
          src={icon}
          alt=""
          className="w-[clamp(22px,2.7vmin,28px)] h-auto"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[clamp(12px,1.4vmin,14px)] text-[#98A2B3]">
          {label}
        </span>
        <div className="flex items-baseline gap-[4px]">
          <span className="text-[clamp(20px,2.7vmin,26px)] font-semibold text-[#101828]">
            {value ?? "-"}
          </span>
          {unit && (
            <span className="text-[clamp(14px,1.6vmin,16px)] text-[#475467]">
              {unit}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// 아침 / 점심 / 저녁 카드
function ExerciseCard({ slotLabel, data }) {
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

        {/* 세부 운동 목록:
            준비운동
            아쿠아로빅-엉덩관절 회전하기 (10분, 200kcal)
        */}
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

export default function SportsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const loadExercises = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMsg("");

      const res = await api.get(
        "/api/exercise/recommend",
        withAuth()
      );

      setData(res.data);
    } catch (err) {
      setErrorMsg(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // 첫 진입 시 한 번 호출
    loadExercises();
  }, [loadExercises]);

  const totalDuration = getTotalDuration(data);
  const totalCalorie = getTotalCalorie(data);

  const morning = data?.morning;
  const lunch = data?.lunch;
  const dinner = data?.dinner;

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
              onClick={loadExercises}
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
          <StatCard
            icon={timeIcon}
            label="운동시간"
            value={totalDuration}
            unit="분"
          />
          <StatCard
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
          <ExerciseCard slotLabel="아침" data={morning} />
          <ExerciseCard slotLabel="점심" data={lunch} />
          <ExerciseCard slotLabel="저녁" data={dinner} />
        </section>
      </main>
    </div>
  );
}
