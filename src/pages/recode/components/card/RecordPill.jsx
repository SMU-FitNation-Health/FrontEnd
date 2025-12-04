//읽기용 컴포넌트
import React from "react";

export default function RecordPill({
  label,
  value,
  pillPy,
  pillPx,
  pillFs,
}) {
  return (
    <div
      className="rounded-xl bg-[#F9FAFB] text-[#111827] flex items-center justify-between"
      style={{ padding: `${pillPy} ${pillPx}`, fontSize: pillFs }}
    >
      <span className="text-[#6B7280]">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
