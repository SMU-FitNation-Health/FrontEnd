import React, { useMemo, useState } from "react";
import { fmt, startOfMonth, buildMonthGrid } from "../../utils/dateUtils";
import { useCalendar } from "../../hooks/useCalendar";
import AddBox from "./AddBox";

export default function CalendarSection() {
  // 월 이동용 커서 & 선택된 날짜
  const [cursor, setCursor] = useState(startOfMonth(new Date()));
  const [selected, setSelected] = useState(new Date());

  // 전역(로컬) 일정 상태
  const { tasks, addTask, toggleTask, removeTask } = useCalendar();

  // 현재 cursor 기준 달력 그리드
  const days = useMemo(() => buildMonthGrid(cursor), [cursor]);

  const selKey = fmt(selected);
  const selList = tasks[selKey] || [];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(12px,2vmin,20px)]">
      {/* 달력 패널 */}
      <div className="bg-white rounded-[14px] shadow-sm ring-1 ring-black/5 p-[clamp(12px,2vmin,18px)]">
        <div className="flex items-center justify-between">
          <h3 className="text-[clamp(14px,1.6vmin,18px)] font-semibold">
            {cursor.getFullYear()}년 {cursor.getMonth() + 1}월
          </h3>
          <div className="flex gap-2">
            <button
              type="button"
              className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
              onClick={() =>
                setCursor(
                  new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1)
                )
              }
              aria-label="이전 달"
            >
              이전
            </button>
            <button
              type="button"
              className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
              onClick={() =>
                setCursor(
                  new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1)
                )
              }
              aria-label="다음 달"
            >
              다음
            </button>
          </div>
        </div>

        {/* 요일 헤더 */}
        <div className="mt-3 grid grid-cols-7 text-center text-[clamp(10px,1.2vmin,12px)] text-gray-500">
          {["월", "화", "수", "목", "금", "토", "일"].map((d) => (
            <div key={d} className="py-1">
              {d}
            </div>
          ))}
        </div>

        {/* 날짜 그리드 */}
        <div className="grid grid-cols-7 gap-1 mt-1">
          {days.map((d, i) => {
            if (!d) {
              return (
                <div
                  key={i}
                  className="h-[clamp(40px,6.5vmin,70px)] rounded-lg bg-transparent"
                />
              );
            }

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
                  isSelected
                    ? "bg-indigo-50 border-indigo-300"
                    : "bg-white border-gray-200 hover:bg-gray-50",
                ].join(" ")}
              >
                <span
                  className={`leading-none ${
                    isToday ? "text-indigo-600 font-semibold" : ""
                  }`}
                >
                  {d.getDate()}
                </span>
                {hasTasks && (
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 선택일 할 일 패널 */}
      <div className="bg-white rounded-[14px] shadow-sm ring-1 ring-black/5 p-[clamp(12px,2vmin,18px)] flex flex-col">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[clamp(14px,1.6vmin,18px)] font-semibold">
            {selected.getFullYear()}-
            {String(selected.getMonth() + 1).padStart(2, "0")}-
            {String(selected.getDate()).padStart(2, "0")} 할 일
          </h3>
          <AddBox
            onAdd={(text) => {
              const key = fmt(selected);
              addTask(key, text);
            }}
          />
        </div>

        <ul className="mt-3 space-y-2 overflow-auto max-h-[clamp(180px,28vmin,320px)] pr-1">
          {selList.length === 0 && (
            <li className="text-sm text-gray-500">일정을 추가해보세요.</li>
          )}
          {selList.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 bg-gray-50 rounded-md px-3 py-2"
            >
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleTask(selKey, item.id)}
                  className="accent-indigo-600"
                />
                <span
                  className={item.done ? "line-through text-gray-400" : ""}
                >
                  {item.text}
                </span>
              </label>
              <button
                type="button"
                onClick={() => removeTask(selKey, item.id)}
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
