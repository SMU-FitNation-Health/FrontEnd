import React from "react";
import ViewportLock from "../../styles/ViewportLock.jsx";
import LoginLeft from "./components/LoginLeft.jsx";
import LoginRight from "./components/LoginRight.jsx";

export default function LoginPage() {
  return (
    <ViewportLock>
      <div className="grid grid-cols-2 w-full">
        <LoginLeft />
        <LoginRight />
      </div>
    </ViewportLock>
  );
}
