import React, { useMemo, useState } from "react";

import nextIcon  from "../../../assets/onboarding/ob2.svg";
import startIcon from "../../../assets/onboarding/ob4.svg";
import fatIcon   from "../../../assets/onboarding/ob6.svg";
import musIcon   from "../../../assets/onboarding/ob7.svg";
import stuIcon   from "../../../assets/onboarding/ob8.svg";
import workIcon  from "../../../assets/onboarding/ob9.svg";
import doneIcon  from "../../../assets/onboarding/ob5.svg";

const TK = {
  outer: "clamp(18px,4vw,72px)",
  title: "clamp(18px,2.6vmin,22px)",
  lead:  "clamp(16px,2.3vmin,20px)",
  gap:   "clamp(16px,3vh,28px)",
  card:  "clamp(16px,2.6vmin,22px)",
};

const initState = {
  goal: null,
  schedule: {
    mon:{enabled:false,start:"",end:""}, tue:{enabled:false,start:"",end:""},
    wed:{enabled:false,start:"",end:""}, thu:{enabled:false,start:"",end:""},
    fri:{enabled:false,start:"",end:""}, sat:{enabled:false,start:"",end:""},
    sun:{enabled:false,start:"",end:""},
  },
  basic: { age:"", heightCm:"", weightKg:"" },
  job: { role:"" },
};

const timeOptions = (() => {
  const list=[]; for(let m=0;m<=1440;m+=30){
    const hh=String(Math.floor(m/60)).padStart(2,"0");
    const mm=String(m%60).padStart(2,"0"); list.push(`${hh}:${mm}`);
  } return list;
})();
const toMin = (t)=>{const [h,m]=t.split(":").map(Number);return h*60+m;};

const ok = (s, step) => {
  switch (step) {
    case 1: return !!s.goal;
    case 2: {
      const picked = Object.values(s.schedule).filter(d=>d.enabled);
      return picked.length>0 && picked.every(d=>d.start && d.end && toMin(d.start)<toMin(d.end));
    }
    case 3: {
      const {age,heightCm,weightKg}=s.basic;
      return Number(age)>0 && Number(heightCm)>0 && Number(weightKg)>0;
    }
    case 4: return !!s.job.role;
    case 5: return true;
    default: return false;
  }
};

export default function OnboardingRight({ step:stepProp, onStepChange, onComplete, initialState }) {
  const [innerStep, setInnerStep] = useState(1);
  const step = stepProp ?? innerStep;

  const [state, setState] = useState(initialState || initState);
  const setS = (fn)=>setState(prev => (typeof fn==="function"?fn(prev):fn));
  const nextDisabled = useMemo(()=>!ok(state, step), [state, step]);

  const goPrev = ()=> (onStepChange ?? setInnerStep)(Math.max(1, step-1));
  const goNext = ()=> (onStepChange ?? setInnerStep)(Math.min(5, step+1));

  return (
    <section className="min-w-0 overflow-y-auto" style={{ padding: TK.outer }}>
      {/* 헤더 */}
      <header className="mb-[clamp(12px,3vh,24px)]">
        <div className="text-[#111827] font-semibold" style={{ fontSize: TK.title }}>
          {["건강 목표 선택","운동 가능 시간","기본 정보","직업 선택","모든 준비 완료"][step-1]}
        </div>
        <p className="text-[#4B5563] mt-[6px]" style={{ fontSize: TK.lead }}>
          {step===1 && "당신의 목표에 맞춘 개인화된 플랜을 제공합니다"}
          {step===2 && "운동 가능한 요일과 시간을 선택해주세요"}
          {step===3 && "정확한 분석을 위해 나이·신장·체중을 입력하세요"}
          {step===4 && "라이프스타일에 맞는 건강 관리를 제공합니다"}
          {step===5 && "이제 AI 기반 맞춤형 건강 관리를 시작할 수 있습니다"}
        </p>
      </header>

      {/* 본문 */}
      <div className="space-y-[clamp(16px,3vh,28px)]">
        {step===1 && <Step1 value={state.goal} onChange={(v)=>setS(s=>({...s,goal:v}))} />}
        {step===2 && <Step2 value={state.schedule} onChange={(v)=>setS(s=>({...s,schedule:v}))} />}
        {step===3 && <Step3 value={state.basic} onChange={(v)=>setS(s=>({...s,basic:v}))} />}
        {step===4 && <Step4 value={state.job} onChange={(v)=>setS(s=>({...s,job:v}))} />}
        {step===5 && <Step5 />}
      </div>

      {/* 하단 고정 바 */}
      <footer className="sticky bottom-0 left-0 right-0 bg-white mt-[clamp(22px,5vh,44px)]">
        <div className="border-t" style={{ borderColor: "#E5E7EB" }} />
        <div className="py-[clamp(10px,2vh,14px)] flex items-center justify-between">
          <button
            type="button"
            onClick={goPrev}
            disabled={step===1}
            className={["text-[#6B7280]", step===1?"opacity-40 cursor-not-allowed":"hover:opacity-80"].join(" ")}
          >
            이전
          </button>

          <ProgressBar current={step} />

          {step<5 ? (
            <img
              src={nextIcon}
              alt="다음"
              onClick={!nextDisabled ? goNext : undefined}
              className={[
                "select-none",
                nextDisabled ? "opacity-40 pointer-events-none" : "cursor-pointer hover:opacity-90"
              ].join(" ")}
              style={{ width: "clamp(72px,8vmin,96px)" }}
            />
          ) : (
            <img
              src={startIcon}
              alt="시작하기"
              onClick={()=> onComplete ? onComplete(state) : (window.location.href="/")}
              className="select-none cursor-pointer hover:opacity-90"
              style={{ width: "clamp(96px,10vmin,120px)" }}
            />
          )}
        </div>
      </footer>
    </section>
  );
}

/* --------------------------- Pages --------------------------- */

// 1) 목표 선택 — 모서리 둥근 처리 제거(사각형)
function Step1({ value, onChange }) {
  const Card = ({ active, icon, title, desc, onClick }) => (
    <button
      type="button" onClick={onClick}
      className={[
        "w-full text-left bg-white border transition hover:shadow-md rounded-none",
        active ? "border-[#0B5D51] ring-2 ring-[#0B5D51]/30" : "border-[#E5E7EB]",
        "flex items-start gap-[clamp(14px,2vmin,18px)]"
      ].join(" ")}
      style={{ padding: TK.card }}
    >
      <img src={icon} alt="" className="w-[clamp(18px,2.4vmin,22px)] h-auto mt-[2px]" />
      <div className="min-w-0">
        <div className="font-semibold text-[#111827] text-[clamp(15px,2vmin,18px)]">{title}</div>
        <div className="text-[#6B7280] mt-[6px] text-[clamp(13px,1.7vmin,16px)]">{desc}</div>
      </div>
    </button>
  );
  return (
    <div className="grid gap-[clamp(14px,2.2vmin,18px)]">
      <Card active={value==="fat"} icon={fatIcon} title="체지방률 감소"
            desc="건강한 체중 관리를 위해 체지방 감소를 목표로 합니다."
            onClick={()=>onChange("fat")} />
      <Card active={value==="muscle"} icon={musIcon} title="근육량 증가"
            desc="체계적인 근력 운동과 근육 성장을 목표로 합니다."
            onClick={()=>onChange("muscle")} />
    </div>
  );
}

// 2) 운동 가능 시간 — 컨테이너 제거 + 체크 시에만 드롭다운 표시
function Step2({ value, onChange }) {
  const days = [["mon","월요일"],["tue","화요일"],["wed","수요일"],["thu","목요일"],["fri","금요일"],["sat","토요일"],["sun","일요일"]];
  const setRow = (k, patch) => onChange({ ...value, [k]: { ...value[k], ...patch } });

  const Row = ({ k, label }) => {
    const r = value[k];
    return (
      <div className="py-[clamp(10px,1.6vmin,14px)] border-b border-[#F3F4F6]">
        <label className="flex items-center gap-[clamp(12px,2vmin,16px)]">
          <input
            type="checkbox"
            checked={r.enabled}
            onChange={e=>setRow(k,{enabled:e.target.checked, ...(e.target.checked?{}:{start:"",end:""})})}
            className="w-[18px] h-[18px] rounded-[5px] border-gray-400"
          />
          <span className="min-w-[5.2em] text-[clamp(14px,1.8vmin,16px)] text-[#111827]">{label}</span>

          {/* 체크됐을 때만 드롭다운 노출 */}
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

// 3) 기본 정보 (나이/신장/체중)
function Step3({ value, onChange }) {
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

// 4) 직업 선택 — 모서리 둥근 처리 제거
function Step4({ value, onChange }) {
  const Card = ({ role, icon, title, desc }) => {
    const active = value.role===role;
    return (
      <button
        type="button" onClick={()=>onChange({role})}
        className={[
          "w-full text-left bg-white border transition hover:shadow-md rounded-none",
          active ? "border-[#0B5D51] ring-2 ring-[#0B5D51]/30" : "border-[#E5E7EB]",
          "flex items-start gap-[clamp(12px,2vmin,16px)]"
        ].join(" ")}
        style={{ padding: TK.card }}
      >
        <img src={icon} alt="" className="w-[clamp(22px,2.8vmin,26px)] h-auto mt-[2px]" />
        <div className="min-w-0">
          <div className="font-semibold text-[#111827] text-[clamp(15px,2vmin,18px)]">{title}</div>
          <div className="text-[#6B7280] mt-[6px] text-[clamp(13px,1.7vmin,16px)]">{desc}</div>
        </div>
      </button>
    );
  };
  return (
    <div className="grid gap-[clamp(14px,2.2vmin,18px)]">
      <Card role="student" icon={stuIcon} title="학생"   desc="시험 기간과 학업 일정을 고려한 맞춤 관리" />
      <Card role="worker"  icon={workIcon} title="직장인" desc="업무 스케줄에 최적화된 건강 관리" />
    </div>
  );
}

// 5) 완료 (상단 아이콘 유지)
function Step5() {
  return (
    <div className="grid place-items-center">
      <img src={doneIcon} alt="" className="w-[clamp(44px,6vmin,64px)] h-auto mb-[clamp(10px,1.6vmin,14px)]" />
      <div className="font-semibold text-[#111827]">모든 준비 완료</div>
      <p className="text-[#6B7280] mt-[6px] text-center">
        이제 AI 기반 맞춤형 건강 관리를 시작할 수 있습니다
      </p>
    </div>
  );
}

// 진행바
function ProgressBar({ current }) {
  const w="clamp(24px,5vmin,46px)", h="clamp(6px,0.9vmin,8px)";
  return (
    <div className="flex items-center gap-[clamp(8px,1.4vmin,14px)]">
      {Array.from({length:5}).map((_,i)=>(
        <span key={i}
          className={["rounded-full", i<current?"bg-[#0B5D51]":"bg-gray-300"].join(" ")}
          style={{ width:w, height:h }}
        />
      ))}
    </div>
  );
}
