import React from "react";
import MainLogin from "../../../assets/main/main_login.svg";

console.log("[login-btn] loaded");

export default function MainLoginButton({ href = "/login" }) {
  return (
    <a href={href} className="block drop-shadow-lg">
      <img
        src={MainLogin}
        alt="로그인"
        className="w-[447.99px] h-[55.99px]"
        draggable="false"
      />
    </a>
  );
}
