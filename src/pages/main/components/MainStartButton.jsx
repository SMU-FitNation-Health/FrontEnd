import React from "react";
import MainDash from "../../../assets/main/main3.svg";

export default function MainStartButton({ href = "/dashboard" }) {
  return (
    <a href={href} className="block drop-shadow-lg">
      <img
        src={MainDash}
        alt="대시보드로 이동"
        className="w-[447.99px] h-[55.99px]"
        draggable="false"
      />
    </a>
  );
}
