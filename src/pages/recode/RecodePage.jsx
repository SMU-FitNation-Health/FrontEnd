// src/pages/recode/RecodePage.jsx (파일 경로는 실제 프로젝트에 맞춰 사용)

import React, { useEffect, useMemo, useState } from "react";
import DailyHeader from "../dailyfood/components/DailyHeader.jsx";
import Footer from "../../layout/footer/Footer.jsx";

import RecordDayCard from "./components/RecordDayCard.jsx";
import WeeklySummary from "./components/WeeklySummary.jsx";
import EncouragementSection from "./components/EncouragementSection.jsx";
import { getRecordPage } from "../../api/recode/recode.js"; // 파일명에 맞게 수정

const S = {
  weekGap:     "clamp(10px, 1.4vmin, 16px)",
  titleGap:    "clamp(6px, 1vmin, 10px)",
  weekCtrlGap: "clamp(10px, 1.4vmin, 14px)",
  titleFs:     "clamp(18px, 2.2vmin, 22px)",
  subFs:       "clamp(13px, 1.5vmin, 14px)",
};

const WEEK_LABEL = ["일", "월", "화", "수", "목", "금", "토"];

function toDate(dateStr) {
  return new Date(dateStr + "T00:00:00");
}

function addDays(dateStr, diff) {
  const d = toDate(dateStr);
  d.setDate(d.getDate() + diff);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function getWeekTitle(startDate) {
  if (!startDate) return "";
  const d = toDate(startDate);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const weekOfMonth = Math.floor((d.getDate() - 1) / 7) + 1; // 1주차, 2주차...

  return `${year}년 ${month}월 ${weekOfMonth}주차`;
}

export default function RecodePage() {
  const [weeklyRecords, setWeeklyRecords] = useState(null);
  const [weeklySummary, setWeeklySummary] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadWeek(targetDate) {
    try {
      setLoading(true);
      setError("");
      const data = await getRecordPage(targetDate);
      const wr = data.weekly_records;
      const ws = data.weekly_summary;

      setWeeklyRecords(wr);
      setWeeklySummary(ws);

      // 선택된 날짜 기본값: metric 있는 날짜 중 첫 번째 → 없으면 start_date
      const firstWithMetric = wr?.daily_records?.find(
        (d) =>
          d.metric &&
          (d.metric.weight_kg != null ||
            d.metric.sleep_duration_hours != null ||
            d.metric.exercise_duration_hours != null)
      );
      setSelectedDate(firstWithMetric?.date || wr?.start_date || null);
    } catch (e) {
      console.error(e);
      if (e?.response?.status === 401) {
        setError("로그인이 필요한 기능입니다. 다시 로그인해 주세요.");
      } else {
        setError("기록 정보를 불러오는 중 오류가 발생했어요.");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // target_date 미입력 시 오늘 기준
    loadWeek(undefined);
  }, []);

  const weekTitle = useMemo(
    () => getWeekTitle(weeklyRecords?.start_date),
    [weeklyRecords?.start_date]
  );

  const days = weeklyRecords?.daily_records || [];

  const handlePrevWeek = () => {
    if (!weeklyRecords?.start_date) return;
    const prev = addDays(weeklyRecords.start_date, -1);
    loadWeek(prev);
  };

  const handleNextWeek = () => {
    if (!weeklyRecords?.end_date) return;
    const next = addDays(weeklyRecords.end_date, 1);
    loadWeek(next);
  };

  return (
    <div className="min-h-dvh bg-[#F9FAFB] flex justify-center px-[clamp(16px,4vw,40px)]">
      {/* DailyFoodPage와 동일한 1440px 중앙 레이아웃 */}
      <div className="w-full max-w-[1440px] py-[clamp(24px,4vh,40px)] space-y-[clamp(24px,4vh,36px)]">
        {/* 상단 공통 헤더 */}
        <DailyHeader />

        {/* 기록실 메인 콘텐츠: 흰색 카드 느낌 */}
        <main className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(15,23,42,0.06)] px-[clamp(18px,3vw,32px)] py-[clamp(20px,3vh,32px)] space-y-[clamp(24px,3vh,32px)]">
          {/* 상단 타이틀 + 주간 네비게이션 */}
          <section className="flex flex-col items-center text-center">
            <div
              className="flex flex-col items-center"
              style={{ gap: S.titleGap }}
            >
              <h1
                className="font-semibold text-[#111827]"
                style={{ fontSize: S.titleFs }}
              >
                건강 기록실
              </h1>
              <p
                className="text-[#6B7280]"
                style={{ fontSize: S.subFs }}
              >
                나의 건강 여정을 기록하고 분석해요
              </p>
            </div>

            <div
              className="mt-[clamp(16px,2.2vmin,20px)] flex items-center text-[#6B7280]"
              style={{ gap: S.weekCtrlGap, fontSize: S.subFs }}
            >
              <button
                type="button"
                onClick={handlePrevWeek}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E7EB] hover:bg-[#F3F4F6] transition-colors"
              >
                ‹
              </button>

              <div className="flex items-center gap-2">
                <span className="text-[#111827]">{weekTitle}</span>
              </div>

              <button
                type="button"
                onClick={handleNextWeek}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E7EB] hover:bg-[#F3F4F6] transition-colors"
              >
                ›
              </button>
            </div>
          </section>

          {/* 주간 카드 영역 */}
          <section>
            {loading ? (
              <div className="flex min-h-[120px] items-center justify-center text-[#9CA3AF] text-sm">
                불러오는 중...
              </div>
            ) : error ? (
              <div className="flex min-h-[120px] items-center justify-center text-sm text-red-500">
                {error}
              </div>
            ) : (
              <div className="overflow-x-auto pb-[clamp(8px,1vmin,12px)]">
                <div
                  className="grid min-w-[720px] grid-cols-7 lg:min-w-0"
                  style={{ gap: S.weekGap }}
                >
                  {days.map((d, idx) => {
                    const dateStr = d.date;
                    const day = toDate(dateStr);
                    const weekday = WEEK_LABEL[day.getDay()];

                    return (
                      <RecordDayCard
                        key={dateStr || idx}
                        date={dateStr}
                        metric={d.metric}
                        weekdayLabel={weekday}
                        isSelected={selectedDate === dateStr}
                        onClick={() => setSelectedDate(dateStr)}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* 이번 주 요약 카드 */}
          <WeeklySummary summary={weeklySummary} />

          {/* “훌륭해요! 꾸준히 기록하고 있어요” 섹션 */}
          <EncouragementSection />
        </main>

        {/* 공통 푸터 */}
        <Footer />
      </div>
    </div>
  );
}
