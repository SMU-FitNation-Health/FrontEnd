import React from "react";
import BodySummaryCard from "./BodySummaryCard.jsx";
import MetricCard from "./MetricCard.jsx";

export default function MetricsRow({ weightSeries, bodyFatSeries, sleepSeries }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(10px,2vmin,20px)]">
      {/* 1. 온보딩 기반 신체 요약 + BMI */}
      <BodySummaryCard />

      {/* 2. 몸무게 */}
      <MetricCard
        title="몸무게"
        value={weightSeries?.at(-1)}
        unit="kg"
        series={weightSeries}
        hint="입력 페이지 연결 예정"
      />

      {/* 3. 체지방률 */}
      <MetricCard
        title="체지방률"
        value={bodyFatSeries?.at(-1)}
        unit="%"
        series={bodyFatSeries}
        hint="입력 페이지 연결 예정"
      />

      {/* 4. 수면 시간 */}
      <MetricCard
        title="수면 시간"
        value={sleepSeries?.at(-1)}
        unit="h"
        series={sleepSeries}
        hint="입력 페이지 연결 예정"
      />
    </section>
  );
}
