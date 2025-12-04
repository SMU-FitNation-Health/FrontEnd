//기록이 없는 카드

import React from "react";

export default function RecordDayEmpty() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1 text-[#9CA3AF]">
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D1D5DC] text-xl leading-none">
        +
      </div>
      <div className="text-[clamp(11px,1.3vmin,12px)]">
        기록 없음
      </div>
    </div>
  );
}
