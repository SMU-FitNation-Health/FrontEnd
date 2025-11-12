import React, { useMemo } from "react";

/** 간단 스파크라인(SVG). series가 없으면 점선 가이드 표시 */
function Sparkline({ series = [], height = 42 }) {
  const path = useMemo(() => {
    if (!series?.length) return "";
    const w = 160; // 카드 내부 폭 기준(뷰박스)
    const h = height;
    const min = Math.min(...series);
    const max = Math.max(...series);
    const span = max - min || 1;

    const pts = series.map((v, i) => {
      const x = (i / (series.length - 1)) * w;
      const y = h - ((v - min) / span) * h;
      return `${x},${y}`;
    });

    return `M ${pts.join(" L ")}`;
  }, [series, height]);

  return (
    <svg viewBox={`0 0 160 ${height}`} className="w-full h-[42px]">
      {!series?.length ? (
        <path d={`M 0 ${height/2} L 160 ${height/2}`} stroke="currentColor" opacity="0.2" strokeDasharray="4 4" fill="none"/>
      ) : (
        <path d={path} stroke="currentColor" fill="none" strokeWidth="2" opacity="0.8" />
      )}
    </svg>
  );
}

export default function MetricCard({ title, value, unit, series, hint }) {
  const valText = value != null && !Number.isNaN(value) ? Number(value).toFixed(1) : "—";
  return (
    <article className="bg-white rounded-[14px] shadow-sm ring-1 ring-black/5 p-[clamp(12px,2vmin,18px)] flex flex-col">
      <h3 className="text-[clamp(13px,1.5vmin,16px)] font-semibold text-[#0B1220]">{title}</h3>

      <div className="mt-[clamp(6px,1.2vmin,10px)] flex items-end gap-[8px]">
        <div className="text-[clamp(22px,3vmin,28px)] leading-none font-semibold">{valText}</div>
        <div className="text-[clamp(11px,1.3vmin,13px)] text-[#6B7280] pb-[2px]">{unit}</div>
      </div>

      <div className="mt-[clamp(8px,1.4vmin,12px)] text-[#4B5563]">
        <Sparkline series={series} />
      </div>

      {hint && (
        <div className="mt-auto pt-[6px] text-[clamp(10px,1.2vmin,12px)] text-[#9CA3AF]">
          {hint}
        </div>
      )}
    </article>
  );
}
