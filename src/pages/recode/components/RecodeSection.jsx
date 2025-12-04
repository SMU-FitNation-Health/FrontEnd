//3번째 섹션
import React from "react";
import encourageIcon from "../../../assets/recode/re2.svg";

const S = {
  boxPy:   "clamp(24px, 2vmin, 32px)",
  boxPx:   "clamp(20px, 3vmin, 32px)",
  titleFs: "clamp(15px, 1.8vmin, 17px)",
  descFs:  "clamp(13px, 1.5vmin, 14px)",
  btnPy:   "clamp(7px, 1vmin, 9px)",
  btnPx:   "clamp(18px, 2.5vmin, 24px)",
  btnFs:   "clamp(13px, 1.5vmin, 14px)",
};

export default function RecodeSection() {
  return (
    <section className="mt-[clamp(32px,4vmin,44px)]">
      <div
        className="flex flex-col items-center justify-center rounded-2xl bg-[#F9FAFB] text-center"
        style={{ padding: `${S.boxPy} ${S.boxPx}` }}
      >
        <div className="flex h-[clamp(46px,4.4vmin,52px)] w-[clamp(46px,4.4vmin,52px)] items-center justify-center rounded-full bg-[#009689]/10 mb-[clamp(12px,1.6vmin,16px)]">
          <img src={encourageIcon} alt="" className="h-[60%] w-[60%]" />
        </div>

        <p
          className=" text-[#111827]"
          style={{ fontSize: S.titleFs }}
        >
          훌륭해요! 꾸준히 기록하고 있어요
        </p>

        <a
          href="#"
          className="mt-[clamp(20px,15vmin,120px)] inline-flex items-center justify-center border border-[#009689] bg-white text-[#009689] hover:bg-[#00968908] transition-colors"
          style={{ padding: `${S.btnPy} ${S.btnPx}`, fontSize: S.btnFs }}
        >
          자세한 분석 보기
        </a>
      </div>
    </section>
  );
}
