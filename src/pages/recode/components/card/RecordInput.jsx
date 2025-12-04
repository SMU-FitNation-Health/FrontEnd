//입력용 컴포넌트
import React from "react";

export default function RecordInput({
  label,
  value,
  onChange,
  unit,
  placeholder,
  min = 0,
  step = 0.5,
  pillPy,
  pillPx,
  pillFs,
}) {
  return (
    <div
      className="rounded-xl bg-[#F9FAFB] flex items-center justify-between"
      style={{ padding: `${pillPy} ${pillPx}`, fontSize: pillFs }}
    >
      <span className="text-[#6B7280]">{label}</span>
      <div className="flex items-center gap-1">
        <input
          type="number"
          min={min}
          step={step}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="w-[70px] bg-transparent text-right outline-none text-[inherit] text-[#111827] placeholder:text-[#D1D5DC]"
        />
        <span className="text-[#6B7280]">{unit}</span>
      </div>
    </div>
  );
}
