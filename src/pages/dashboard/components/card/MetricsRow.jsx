import React from "react";
import BodySummaryCard from "./BodySummaryCard.jsx";
import MetricCard from "./MetricCard.jsx";

export default function MetricsRow({ weightSeries, bodyFatSeries, sleepSeries }) {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto                    /* 화면 기준 중앙 정렬 */
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-x-[clamp(4px,1vmin,18px)]  /* 좌우 카드 간격 */
          gap-y-[clamp(8px,1.6vmin,20px)]  /* 위아래 카드 간격 */
          justify-items-center             /* 각 카드 셀 안에서 중앙 */
        "
      >
        {/* 1. 내 신체 데이터 카드 */}
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
      </div>
    </section>
  );
}
