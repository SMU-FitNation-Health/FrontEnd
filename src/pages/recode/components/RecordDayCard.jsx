//기록 카드 컴포넌트
import React from "react";

const S = {
  cardGap: "clamp(6px, 1.1vmin, 10px)",
  pillPy:  "clamp(6px, 0.9vmin, 9px)",
  pillPx:  "clamp(8px, 1.1vmin, 12px)",
  pillFs:  "clamp(11px, 1.3vmin, 13px)",
  dayFs:   "clamp(13px, 1.5vmin, 15px)",
  dateFs:  "clamp(12px, 1.3vmin, 13px)",
};

function formatDateLabel(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.getDate();
}

export default function RecordDayCard({
  date,
  metric,
  weekdayLabel,
  isSelected,
  onClick,
}) {
  const day = formatDateLabel(date);
  const hasMetric =
    metric &&
    (metric.weight_kg != null ||
      metric.sleep_duration_hours != null ||
      metric.exercise_duration_hours != null);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col justify-between rounded-2xl border bg-white transition-colors duration-150 text-left
      ${isSelected ? "border-[#009689CC] shadow-[0_8px_20px_rgba(15,23,42,0.08)]" : "border-[#D1D5DC]"}`}
      style={{ padding: S.pillPx, gap: S.cardGap }}
    >
      {/* 상단: 요일 + 날짜 */}
      <div className="flex items-baseline justify-between">
        <div
          className="font-medium text-[#111827]"
          style={{ fontSize: S.dayFs }}
        >
          {weekdayLabel}
        </div>
        <div
          className="text-[#9CA3AF]"
          style={{ fontSize: S.dateFs }}
        >
          {day}일
        </div>
      </div>

      {/* 기록 내용 / 없을 때 + 아이콘 */}
      {hasMetric ? (
        <div className="flex flex-col" style={{ gap: S.cardGap }}>
          <div
            className="rounded-xl bg-[#F9FAFB] text-[#111827] flex items-center justify-between"
            style={{ padding: `${S.pillPy} ${S.pillPx}`, fontSize: S.pillFs }}
          >
            <span className="text-[#6B7280]">체중</span>
            <span className="font-semibold">
              {metric.weight_kg != null ? `${metric.weight_kg.toFixed(1)} kg` : "-"}
            </span>
          </div>

          <div
            className="rounded-xl bg-[#F9FAFB] text-[#111827] flex items-center justify-between"
            style={{ padding: `${S.pillPy} ${S.pillPx}`, fontSize: S.pillFs }}
          >
            <span className="text-[#6B7280]">수면시간</span>
            <span className="font-semibold">
              {metric.sleep_duration_hours != null
                ? `${metric.sleep_duration_hours} 시간`
                : "-"}
            </span>
          </div>

          <div
            className="rounded-xl bg-[#F9FAFB] text-[#111827] flex items-center justify-between"
            style={{ padding: `${S.pillPy} ${S.pillPx}`, fontSize: S.pillFs }}
          >
            <span className="text-[#6B7280]">운동시간</span>
            <span className="font-semibold">
              {metric.exercise_duration_hours != null
                ? `${metric.exercise_duration_hours} 시간`
                : "-"}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-1 text-[#9CA3AF]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D1D5DC] text-xl leading-none">
            +
          </div>
          <div className="text-[clamp(11px,1.3vmin,12px)]">
            기록이 없어요
          </div>
        </div>
      )}
    </button>
  );
}
