// src/pages/record/components/WeeklySummary.jsx
import React from "react";
import summaryIcon from "../../../assets/recode/re1.svg"; // 경로는 프로젝트 구조에 맞게 조정

const S = {
  wrapGap: "clamp(10px, 1.8vmin, 18px)",
  cardPy:  "clamp(14px, 1.8vmin, 18px)",
  cardPx:  "clamp(16px, 2.2vmin, 22px)",
  titleFs: "clamp(13px, 1.5vmin, 15px)",
  valueFs: "clamp(16px, 1.9vmin, 18px)",
};

function SummaryCard({ label, value }) {
  return (
    <div
      className="flex items-center rounded-2xl bg-[#009689CC] text-white"
      style={{ padding: `${S.cardPy} ${S.cardPx}`, gap: "clamp(10px,1.4vmin,14px)" }}
    >
      <div className="flex h-[clamp(34px,3.4vmin,40px)] w-[clamp(34px,3.4vmin,40px)] items-center justify-center rounded-xl bg-white/10">
        <img src={summaryIcon} alt="" className="h-[60%] w-[60%]" />
      </div>
      <div className="flex flex-col">
        <span
          className="opacity-90"
          style={{ fontSize: S.titleFs }}
        >
          {label}
        </span>
        <span
          className="font-semibold"
          style={{ fontSize: S.valueFs }}
        >
          {value ?? "-"}
        </span>
      </div>
    </div>
  );
}

export default function WeeklySummary({ summary }) {
  const latestWeight =
    summary?.latest_weight_kg != null
      ? `${summary.latest_weight_kg.toFixed(1)} kg`
      : "-";

  const totalExercise =
    summary?.total_exercise_hours != null
      ? `${summary.total_exercise_hours} 시간`
      : "-";

  const totalSleep =
    summary?.total_sleep_hours != null
      ? `${summary.total_sleep_hours} 시간`
      : "-";

  return (
    <section className="mt-[clamp(26px,3.2vmin,34px)]">
      <h2 className="mb-[clamp(10px,1.5vmin,14px)] text-[clamp(15px,1.7vmin,17px)] font-semibold text-[#111827]">
        이번 주 요약
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: S.wrapGap }}
      >
        <SummaryCard label="체중" value={latestWeight} />
        <SummaryCard label="운동시간" value={totalExercise} />
        <SummaryCard label="수면시간" value={totalSleep} />
      </div>
    </section>
  );
}
