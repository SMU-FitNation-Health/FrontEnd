import React, { useState } from "react";
import { fmt } from "../../utils/dateUtils";

const TIME_OPTIONS = Array.from({ length: 48 }, (_, i) => {
  const h = String(Math.floor(i / 2)).padStart(2, "0");
  const m = i % 2 === 0 ? "00" : "30";
  return `${h}:${m}`;
});

export default function CalendarRight({
  selected,
  tasks,
  addTask,
  toggleTask,
  removeTask,
}) {
  const selKey = fmt(selected);
  const selList = tasks[selKey] || [];

  const [isAdding, setIsAdding] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("09:30");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function resetForm() {
    setStartTime("09:00");
    setEndTime("09:30");
    setTitle("");
    setContent("");
  }

  function handleSave(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const label = `${startTime} ~ ${endTime}. ${title.trim()}`;
    addTask(selKey, label);

    setIsAdding(false);
    resetForm();
  }

  function handleCancel() {
    setIsAdding(false);
    resetForm();
  }

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
        <h3 className="ml-[clamp(10px,4vmin,40px)] text-[clamp(18px,3vmin,26px)] font-semibold tracking-tight">
          {selected.getFullYear()}-
          {String(selected.getMonth() + 1).padStart(2, "0")}-
          {String(selected.getDate()).padStart(2, "0")} 할 일
        </h3>

        {!isAdding && (
          <button
            type="button"
            onClick={() => setIsAdding(true)}
            className="
              px-3 py-1 rounded-md 
              bg-[#009689] hover:bg-[#008378] 
              text-white text-sm 
              focus:outline-none focus:ring-2 focus:ring-[#009689]/70
              whitespace-nowrap
            "
          >
            + 추가
          </button>
        )}
      </div>

      {/* 리스트/플레이스홀더 영역 */}
      <div className="mt-5 flex-1 overflow-auto max-h-[clamp(180px,28vmin,320px)] pr-1">
        {selList.length === 0 ? (
          <div className="w-full h-full flex items-center justify-center text-center">
            <p className="text-[clamp(14px,2vmin,20px)] text-gray-400">
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
                <label className="flex items-center gap-[clamp(8px,1.5vmin,14px)] text-[clamp(14px,2vmin,20px)]">
                  {/* ✅ 체크박스 크기 키움 */}
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => toggleTask(selKey, item.id)}
                    className="
                      accent-[#009689]
                      w-[clamp(18px,2.4vmin,22px)]
                      h-[clamp(18px,2.4vmin,22px)]
                    "
                  />
                  {/* ✅ 시간~제목 폰트도 더 크게 */}
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
                  className="text-[clamp(11px,1.5vmin,14px)] text-gray-500 hover:text-red-600"
                  aria-label="삭제"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 하단 중앙에 추가 폼 */}
      {isAdding && (
        <div className="mt-4 flex justify-center">
          <form
            onSubmit={handleSave}
            className="w-full max-w-[460px] flex flex-col gap-3"
          >
            {/* 시간 선택 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[clamp(12px,1.5vmin,14px)] text-gray-700">
                  시작 시간
                </label>
                <select
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="
                    h-9 rounded-md border border-gray-300 
                    text-[clamp(12px,1.6vmin,14px)]
                    px-2
                    focus:outline-none focus:ring-2 focus:ring-[#009689]
                  "
                >
                  {TIME_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[clamp(12px,1.5vmin,14px)] text-gray-700">
                  종료 시간
                </label>
                <select
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="
                    h-9 rounded-md border border-gray-300 
                    text-[clamp(12px,1.6vmin,14px)]
                    px-2
                    focus:outline-none focus:ring-2 focus:ring-[#009689]
                  "
                >
                  {TIME_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 제목 */}
            <div className="flex flex-col gap-1">
              <label className="text-[clamp(12px,1.5vmin,14px)] text-gray-700">
                제목
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="예: 아침 운동, 식단 준비 등"
                className="
                  h-9 rounded-md border border-gray-300 
                  text-[clamp(12px,1.6vmin,14px)]
                  px-2
                  focus:outline-none focus:ring-2 focus:ring-[#009689]
                "
              />
            </div>

            {/* 내용 */}
            <div className="flex flex-col gap-1">
              <label className="text-[clamp(12px,1.5vmin,14px)] text-gray-700">
                내용
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="상세 내용을 적어주세요 (선택)"
                rows={3}
                className="
                  rounded-md border border-gray-300 
                  text-[clamp(12px,1.6vmin,14px)]
                  px-2 py-1
                  resize-none
                  focus:outline-none focus:ring-2 focus:ring-[#009689]
                "
              />
            </div>

            {/* 버튼 영역 */}
            <div className="flex justify-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleCancel}
                className="
                  px-3 py-1.5 rounded-md 
                  bg-gray-100 hover:bg-gray-200 
                  text-[clamp(12px,1.6vmin,14px)]
                  text-gray-700
                  focus:outline-none focus:ring-1 focus:ring-gray-300
                "
              >
                취소
              </button>
              <button
                type="submit"
                className="
                  px-3 py-1.5 rounded-md 
                  bg-[#009689] hover:bg-[#008378] 
                  text-white
                  text-[clamp(12px,1.6vmin,14px)]
                  focus:outline-none focus:ring-2 focus:ring-[#009689]/70
                "
              >
                저장
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
