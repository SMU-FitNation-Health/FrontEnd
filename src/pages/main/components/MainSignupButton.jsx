import React from "react";
import MainSign from "../../../assets/main/main_sign.svg";

export default function MainSignupButton({ href = "/sign" }) {
  return (
    <a href={href} className="block drop-shadow-lg">
      <img
        src={MainSign}
        alt="회원가입"
        className="w-[447.99px] h-[55.99px]"
        draggable="false"
      />
    </a>
  );
}
