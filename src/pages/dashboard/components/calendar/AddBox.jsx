import React, { useState } from "react";

export default function AddkBox({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 whitespace-nowrap"
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
      <button
        type="submit"
        className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700"
      >
        저장
      </button>
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="px-2 py-1 rounded-md bg-gray-100 text-sm hover:bg-gray-200"
      >
        취소
      </button>
    </form>
  );
}
