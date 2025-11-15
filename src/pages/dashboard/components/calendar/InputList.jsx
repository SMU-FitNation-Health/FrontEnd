import React from "react";

export default function InputList({ items, onToggle, onRemove }) {
  if (!items || items.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-center">
        <p className="text-[clamp(14px,2vmin,20px)] text-gray-400">
          일정을 추가해보세요.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between gap-3 bg-gray-50 rounded-md px-3 py-2"
        >
          <label className="flex items-center gap-[clamp(8px,1.5vmin,14px)] text-[clamp(14px,2vmin,20px)]">
            {/* 체크박스 크기 + 색 */}
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => onToggle(item.id)}
              className="
                accent-[#009689]
                w-[clamp(18px,2.4vmin,22px)]
                h-[clamp(18px,2.4vmin,22px)]
              "
            />
            {/* "시작 ~ 종료. 제목" */}
            <span
              className={
                item.done ? "line-through text-gray-400" : "text-gray-800"
              }
            >
              {item.text}
            </span>
          </label>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="text-[clamp(11px,1.5vmin,14px)] text-gray-500 hover:text-red-600"
            aria-label="삭제"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
