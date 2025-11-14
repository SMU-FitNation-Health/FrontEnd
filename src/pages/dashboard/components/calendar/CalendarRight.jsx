import React from "react";
import { fmt } from "../../utils/dateUtils";
import AddBox from "./AddBox";

export default function CalendarRight({
  selected,
  tasks,
  addTask,
  toggleTask,
  removeTask,
}) {
  const selKey = fmt(selected);
  const selList = tasks[selKey] || [];

  return (
    <div
      className="
        mx-auto
        bg-white
        rounded-[clamp(12px,1.7vmin,18px)]
        shadow-[0_14px_40px_rgba(15,23,42,0.12)]
        ring-3 ring-black/7
        px-[clamp(2px,2vmin,10px)]
        py-[clamp(16px,2.8vmin,24px)]
        w-[clamp(350px,85vmin,1000px)]
        min-h-[clamp(450px,75vmin,1400px)]
        flex flex-col
      "
    >
      {/* 상단 날짜 + 추가 버튼 */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[clamp(30px, 10vmin,100px)] font-semibold tracking-tight">
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

      {/* 리스트/플레이스홀더 영역 */}
      <div className="mt-5 flex-1 overflow-auto max-h-[clamp(180px,28vmin,320px)] pr-1">
        {/* 일정이 없을 때: 가운데 정렬 + 폰트 키우기 */}
        {selList.length === 0 ? (
          <div className="w-full h-full flex items-center justify-center text-center">
            <p className="text-[clamp(30px, 6vmin,70px)] text-gray-400">
              일정을 추가해보세요.
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {selList.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 bg-gray-50 rounded-md px-3 py-2"
              >
                <label className="flex items-center gap-2 text-[clamp(12px,1.6vmin,16px)]">
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => toggleTask(selKey, item.id)}
                    className="accent-[#009689]"
                  />
                  <span
                    className={
                      item.done
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }
                  >
                    {item.text}
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => removeTask(selKey, item.id)}
                  className="text-[clamp(10px,1.3vmin,13px)] text-gray-500 hover:text-red-600"
                  aria-label="삭제"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
