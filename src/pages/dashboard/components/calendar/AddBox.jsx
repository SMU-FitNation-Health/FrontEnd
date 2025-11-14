// src/.../AddBox.jsx
import React, { useState } from "react";

export default function AddBox({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
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
        className="
          h-8 px-2 rounded-md border border-gray-300 text-sm 
          focus:outline-none focus:ring-2 focus:ring-[#009689]
        "
      />
      {/* 🔹 저장 버튼: #009689 */}
      <button
        type="submit"
        className="
          px-3 py-1 rounded-md 
          bg-[#009689] hover:bg-[#008378] 
          text-white text-sm 
          focus:outline-none focus:ring-2 focus:ring-[#009689]/70
        "
      >
        저장
      </button>
      {/* 취소 버튼은 그레이 톤 유지 */}
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="
          px-2 py-1 rounded-md 
          bg-gray-100 hover:bg-gray-200 
          text-sm 
          focus:outline-none focus:ring-1 focus:ring-gray-300
        "
      >
        취소
      </button>
    </form>
  );
}
