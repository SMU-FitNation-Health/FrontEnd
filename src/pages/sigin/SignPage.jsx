import React from "react";
import ViewportLock from "../../styles/ViewportLock.jsx";
import LoginLeft from "../login/components/LoginLeft.jsx";
import LoginRight from "../login/components/LoginRight.jsx";

export default function SignPage() {
  return (
    <ViewportLock>
      <div className="grid grid-cols-2 min-h-dvh w-full">
        <LoginLeft />
        <LoginRight />
      </div>
    </ViewportLock>
  );
}
