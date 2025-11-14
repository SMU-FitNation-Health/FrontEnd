import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "cv-dash-tasks"; // { "YYYY-MM-DD": [{id, text, done}] }

function fmt(d) {
  return d.toISOString().slice(0,10);
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export default function CalendarSection() {
  const [cursor, setCursor] = useState(startOfMonth(new Date())); // 월 이동용
  const [selected, setSelected] = useState(new Date());
  const [tasks, setTasks] = useState({});

  // load / persist
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTasks(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {}
  }, [tasks]);

  const days = useMemo(() => {
    const first = startOfMonth(cursor);
    const last = endOfMonth(cursor);

    const firstWeekPad = (first.getDay() + 6) % 7; // 월(0)~일(6) 기준
    const total = firstWeekPad + last.getDate();
    const rows = Math.ceil(total / 7);
    const grid = [];

    // 앞쪽 패딩
    for (let i=0; i<firstWeekPad; i++) grid.push(null);

    // 해당 월 날짜
    for (let d=1; d<=last.getDate(); d++) {
      grid.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
    }

    // 뒤쪽 패딩 (행 맞춤)
    while (grid.length < rows * 7) grid.push(null);

    return grid;
  }, [cursor]);

  const selKey = fmt(selected);
  const selList = tasks[selKey] || [];

  function addTask(text) {
    if (!text.trim()) return;
    const id = Math.random().toString(36).slice(2,9);
    setTasks(prev => ({
      ...prev,
      [selKey]: [...(prev[selKey] || []), { id, text, done: false }],
    }));
  }
  function toggleTask(id) {
    setTasks(prev => ({
      ...prev,
      [selKey]: (prev[selKey] || []).map(t => t.id === id ? { ...t, done: !t.done } : t),
    }));
  }
  function removeTask(id) {
    setTasks(prev => ({
      ...prev,
      [selKey]: (prev[selKey] || []).filter(t => t.id !== id),
    }));
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(12px,2vmin,20px)]">
      {/* 달력 */}
      <div className="bg-white rounded-[14px] shadow-sm ring-1 ring-black/5 p-[clamp(12px,2vmin,18px)]">
        <div className="flex items-center justify-between">
          <h3 className="text-[clamp(14px,1.6vmin,18px)] font-semibold">
            {cursor.getFullYear()}년 {cursor.getMonth()+1}월
          </h3>
          <div className="flex gap-2">
            <button
              type="button"
              className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
              onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth()-1, 1))}
              aria-label="이전 달"
            >이전</button>
            <button
              type="button"
              className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
              onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth()+1, 1))}
              aria-label="다음 달"
            >다음</button>
          </div>
        </div>

        {/* 요일 헤더 */}
        <div className="mt-3 grid grid-cols-7 text-center text-[clamp(10px,1.2vmin,12px)] text-gray-500">
          {["월","화","수","목","금","토","일"].map(d => <div key={d} className="py-1">{d}</div>)}
        </div>

        {/* 날짜 그리드 */}
        <div className="grid grid-cols-7 gap-1 mt-1">
          {days.map((d, i) => {
            if (!d) return <div key={i} className="h-[clamp(40px,6.5vmin,70px)] rounded-lg bg-transparent" />;
            const key = fmt(d);
            const isToday = fmt(new Date()) === key;
            const isSelected = fmt(selected) === key;
            const hasTasks = (tasks[key]?.length ?? 0) > 0;

            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(d)}
                className={[
                  "h-[clamp(40px,6.5vmin,70px)] rounded-lg border text-sm flex flex-col items-center justify-center",
                  isSelected ? "bg-indigo-50 border-indigo-300" : "bg-white border-gray-200 hover:bg-gray-50",
                ].join(" ")}
              >
                <span className={`leading-none ${isToday ? "text-indigo-600 font-semibold" : ""}`}>
                  {d.getDate()}
                </span>
                {hasTasks && <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 선택일 할 일 패널 */}
      <div className="bg-white rounded-[14px] shadow-sm ring-1 ring-black/5 p-[clamp(12px,2vmin,18px)] flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-[clamp(14px,1.6vmin,18px)] font-semibold">
            {selected.getFullYear()}-{String(selected.getMonth()+1).padStart(2,"0")}-{String(selected.getDate()).padStart(2,"0")} 할 일
          </h3>
          <AddBox onAdd={addTask} />
        </div>

        <ul className="mt-3 space-y-2 overflow-auto max-h-[clamp(180px,28vmin,320px)] pr-1">
          {selList.length === 0 && (
            <li className="text-sm text-gray-500">일정을 추가해보세요.</li>
          )}
          {selList.map(item => (
            <li key={item.id} className="flex items-center justify-between gap-3 bg-gray-50 rounded-md px-3 py-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleTask(item.id)}
                  className="accent-indigo-600"
                />
                <span className={item.done ? "line-through text-gray-400" : ""}>{item.text}</span>
              </label>
              <button
                type="button"
                onClick={() => removeTask(item.id)}
                className="text-xs text-gray-500 hover:text-red-600"
                aria-label="삭제"
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AddBox({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700"
      >
        + 추가
      </button>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
        setOpen(false);
      }}
      className="flex items-center gap-2"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="일정 내용"
        className="h-8 px-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button type="submit" className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">저장</button>
      <button type="button" onClick={() => setOpen(false)} className="px-2 py-1 rounded-md bg-gray-100 text-sm hover:bg-gray-200">취소</button>
    </form>
  );
}
