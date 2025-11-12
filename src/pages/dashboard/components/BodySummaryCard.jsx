import React, { useMemo } from "react";

/** BMI 계산 (cm, kg) */
function computeBMI(heightCm, weightKg) {
  if (!heightCm || !weightKg) return null;
  const h = Number(heightCm) / 100;
  if (!h || !Number(weightKg)) return null;
  const bmi = Number(weightKg) / (h * h);
  return Number.isFinite(bmi) ? Number(bmi.toFixed(1)) : null;
}

/** WHO 기준 간단 분류 */
function bmiLabel(bmi) {
  if (bmi == null) return "—";
  if (bmi < 18.5) return "저체중";
  if (bmi < 23)   return "정상";
  if (bmi < 25)   return "과체중";
  return "비만";
}

export default function BodySummaryCard() {
  // 온보딩 저장 키 (필요시 여기 키 이름만 프로젝트에 맞게 바꿔줘)
  const age    = localStorage.getItem("onboardingAge");
  const height = localStorage.getItem("onboardingHeightCm");
  const weight = localStorage.getItem("onboardingWeightKg");

  const bmi = useMemo(() => computeBMI(height, weight), [height, weight]);

  return (
    <article className="bg-white rounded-[14px] shadow-sm ring-1 ring-black/5 p-[clamp(12px,2vmin,18px)]">
      <h3 className="text-[clamp(13px,1.5vmin,16px)] font-semibold text-[#0B1220]">
        내 신체 데이터
      </h3>

      <div className="grid grid-cols-2 gap-x-[clamp(8px,1.5vmin,12px)] gap-y-[clamp(10px,1.8vmin,14px)] mt-[clamp(8px,1.5vmin,12px)]">
        <Row label="나이"    value={age ? `${age} 세` : "—"} />
        <Row label="신장"    value={height ? `${height} cm` : "—"} />
        <Row label="체중"    value={weight ? `${weight} kg` : "—"} />
        <Row label="BMI"     value={bmi != null ? `${bmi} (${bmiLabel(bmi)})` : "—"} highlight />
      </div>

      {!age && !height && !weight && (
        <p className="mt-[10px] text-[clamp(11px,1.3vmin,13px)] text-[#6B7280]">
          온보딩에서 나이/신장/체중을 입력하면 자동 계산됩니다.
        </p>
      )}
    </article>
  );
}

function Row({ label, value, highlight = false }) {
  return (
    <div className="flex flex-col">
      <span className="text-[#6B7280] text-[clamp(11px,1.3vmin,13px)]">{label}</span>
      <span className={`text-[clamp(15px,2vmin,20px)] leading-tight ${highlight ? "font-semibold text-[#111827]" : "text-[#111827]"}`}>
        {value}
      </span>
    </div>
  );
}
