//기록을 추가하는 필드

import React from "react";
import { S, METRIC_CONFIG } from "./style/recordDayStyles";
import RecordInput from "./RecordInput";

export default function RecordDayEdit({
  weight,
  sleep,
  exercise,
  onChangeWeight,
  onChangeSleep,
  onChangeExercise,
  saving,
  onSave,
}) {
  const stop = (e) => e.stopPropagation();

  const editBindings = {
    weight: {
      value: weight,
      onChange: onChangeWeight,
      min: 0,
      step: 0.1,
      placeholder: "예: 72.5",
    },
    sleep: {
      value: sleep,
      onChange: onChangeSleep,
      min: 0,
      step: 0.5,
      placeholder: "예: 7.5",
    },
    exercise: {
      value: exercise,
      onChange: onChangeExercise,
      min: 0,
      step: 0.5,
      placeholder: "예: 1",
    },
  };

  return (
    <div
      className="flex flex-col"
      style={{ gap: S.cardGap }}
      onClick={stop}
    >
      {METRIC_CONFIG.map((cfg) => {
        const bind = editBindings[cfg.key] || {};
        return (
          <RecordInput
            key={cfg.key}
            label={cfg.label}
            value={bind.value}
            onChange={bind.onChange}
            unit={cfg.unit}
            placeholder={bind.placeholder}
            min={bind.min}
            step={bind.step}
            pillPy={S.pillPy}
            pillPx={S.pillPx}
            pillFs={S.pillFs}
          />
        );
      })}

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
  );
}
