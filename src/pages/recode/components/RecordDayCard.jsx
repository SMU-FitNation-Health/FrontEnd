// src/pages/recode/components/RecordDayCard.jsx

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
  // 편집 모드 관련 props (선택된 + 비어있는 날에만 사용)
  editing = false,
  weight,
  sleep,
  exercise,
  onChangeWeight,
  onChangeSleep,
  onChangeExercise,
  onSave,
  saving = false,
}) {
  const day = formatDateLabel(date);

  const hasMetric =
    metric &&
    (metric.weight_kg != null ||
      metric.sleep_duration_hours != null ||
      metric.exercise_duration_hours != null);

  const handleCardClick = () => {
    if (onClick) onClick();
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div
      onClick={handleCardClick}
      className={`relative flex flex-col justify-between rounded-2xl border bg-white transition-colors duration-150 text-left cursor-pointer
      ${
        isSelected
          ? "border-[#009689CC] shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          : "border-[#D1D5DC]"
      }`}
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

      {/* 1) 기록 있음 → 기존처럼 표시 */}
      {hasMetric && !editing && (
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
      )}

      {/* 2) 기록 없음 + 아직 선택 안 됨 → + 기록 없음 상태 */}
      {!hasMetric && !editing && (
        <div className="flex flex-1 flex-col items-center justify-center gap-1 text-[#9CA3AF]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D1D5DC] text-xl leading-none">
            +
          </div>
          <div className="text-[clamp(11px,1.3vmin,12px)]">
            기록 없음
          </div>
        </div>
      )}

      {/* 3) 기록 없음 + 선택됨 → 카드 내부에 입력 필드 + 작은 저장 버튼 */}
      {!hasMetric && editing && (
        <div
          className="flex flex-col"
          style={{ gap: S.cardGap }}
          onClick={stop} // 내부 클릭 시 카드 재선택 방지
        >
          {/* 체중 입력 */}
          <div
            className="rounded-xl bg-[#F9FAFB] flex items-center justify-between"
            style={{ padding: `${S.pillPy} ${S.pillPx}`, fontSize: S.pillFs }}
          >
            <span className="text-[#6B7280]">체중</span>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                step="0.1"
                value={weight}
                onChange={(e) => onChangeWeight?.(e.target.value)}
                placeholder="예: 72.5"
                className="w-[70px] bg-transparent text-right outline-none text-[inherit] text-[#111827] placeholder:text-[#D1D5DC]"
              />
              <span className="text-[#6B7280]">kg</span>
            </div>
          </div>

          {/* 수면 시간 입력 */}
          <div
            className="rounded-xl bg-[#F9FAFB] flex items-center justify-between"
            style={{ padding: `${S.pillPy} ${S.pillPx}`, fontSize: S.pillFs }}
          >
            <span className="text-[#6B7280]">수면시간</span>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                step="0.5"
                value={sleep}
                onChange={(e) => onChangeSleep?.(e.target.value)}
                placeholder="예: 7.5"
                className="w-[70px] bg-transparent text-right outline-none text-[inherit] text-[#111827] placeholder:text-[#D1D5DC]"
              />
              <span className="text-[#6B7280]">시간</span>
            </div>
          </div>

          {/* 운동 시간 입력 */}
          <div
            className="rounded-xl bg-[#F9FAFB] flex items-center justify-between"
            style={{ padding: `${S.pillPy} ${S.pillPx}`, fontSize: S.pillFs }}
          >
            <span className="text-[#6B7280]">운동시간</span>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                step="0.5"
                value={exercise}
                onChange={(e) => onChangeExercise?.(e.target.value)}
                placeholder="예: 1"
                className="w-[70px] bg-transparent text-right outline-none text-[inherit] text-[#111827] placeholder:text-[#D1D5DC]"
              />
              <span className="text-[#6B7280]">시간</span>
            </div>
          </div>

          {/* 작은 저장 버튼 – 카드 내부, 운동시간 아래 우측 정렬 */}
          <div className="flex justify-end mt-[2px]">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSave?.();
              }}
              disabled={saving}
              className="rounded-full border border-[#009689] text-[#009689] text-[clamp(11px,1.3vmin,12px)] px-[10px] py-[3px] hover:bg-[#0096890A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {saving ? "저장 중..." : "저장"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
