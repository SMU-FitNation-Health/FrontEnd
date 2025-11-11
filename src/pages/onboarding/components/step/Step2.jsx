import React from "react";

//30분 간격
const timeOptions = (() => {
  const a = [];
  for (let m = 0; m <= 1440; m += 30) {
    const hh = String(Math.floor(m / 60)).padStart(2, "0");
    const mm = String(m % 60).padStart(2, "0");
    a.push(`${hh}:${mm}`);
  }
  return a;
})();

export default function Step2({ value, onChange }) {
  const days = [
    ["mon","월요일"],["tue","화요일"],["wed","수요일"],
    ["thu","목요일"],["fri","금요일"],["sat","토요일"],["sun","일요일"],
  ];

  const setRow = (k, patch) => onChange({ ...value, [k]: { ...value[k], ...patch } });

  const Row = ({ k, label }) => {
    const r = value[k];
    return (
      <div className="py-[clamp(10px,1.6vmin,14px)] border-b border-[#F3F4F6]">
        <label className="flex items-center gap-[clamp(12px,2vmin,16px)]">
          <input
            type="checkbox"
            checked={r.enabled}
            onChange={(e) =>
              setRow(k, { enabled: e.target.checked, ...(e.target.checked ? {} : { start: "", end: "" }) })
            }
            className="w-[18px] h-[18px] rounded-[5px] border-gray-400"
          />
          <span className="min-w-[5.2em] text-[clamp(14px,1.8vmin,16px)] text-[#111827]">{label}</span>

          {r.enabled && (
            <div className="grid grid-cols-2 gap-[clamp(10px,1.6vmin,14px)] flex-1">
              <select
                value={r.start}
                onChange={(e)=>setRow(k,{start:e.target.value})}
                className="w-full px-3 py-2 rounded-[12px] border border-[#E5E7EB] text-[clamp(13px,1.6vmin,16px)]"
              >
                <option value="">시작</option>
                {timeOptions.map(t => <option key={`s-${k}-${t}`} value={t}>{t}</option>)}
              </select>
              <select
                value={r.end}
                onChange={(e)=>setRow(k,{end:e.target.value})}
                className="w-full px-3 py-2 rounded-[12px] border border-[#E5E7EB] text-[clamp(13px,1.6vmin,16px)]"
              >
                <option value="">종료</option>
                {timeOptions.map(t => <option key={`e-${k}-${t}`} value={t}>{t}</option>)}
              </select>
            </div>
          )}
        </label>
      </div>
    );
  };

  return <div>{days.map(([k, label]) => <Row key={k} k={k} label={label} />)}</div>;
}
