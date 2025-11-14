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
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[clamp(14px,1.6vmin,18px)] font-semibold">
          {selected.getFullYear()}-
          {String(selected.getMonth() + 1).padStart(2, "0")}-{" "}
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
                className="accent-[#009689]"
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
  );
}
