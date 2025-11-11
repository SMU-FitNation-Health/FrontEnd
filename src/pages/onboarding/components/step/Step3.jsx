import React from "react";

export default function Step3({ value, onChange }) {
  const input = (k, ph) => (
    <input
      type="number" min="0" placeholder={ph} value={value[k] ?? ""}
      onChange={(e)=>onChange({ ...value, [k]: e.target.value })}
      className="w-full px-3 py-2 rounded-[12px] border border-[#E5E7EB] bg-white"
    />
  );

  return (
    <div className="grid grid-cols-3 gap-[clamp(12px,2vmin,16px)]">
      <div><div className="text-[#6B7280] mb-2">나이</div>{input("age","25")}</div>
      <div><div className="text-[#6B7280] mb-2">신장 (cm)</div>{input("heightCm","170")}</div>
      <div><div className="text-[#6B7280] mb-2">체중 (kg)</div>{input("weightKg","65")}</div>
    </div>
  );
}
