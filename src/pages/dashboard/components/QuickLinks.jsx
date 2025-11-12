import React from "react";
import das2 from "../../../assets/dashboard/das2.svg";
import das3 from "../../../assets/dashboard/das3.svg";
import das4 from "../../../assets/dashboard/das4.svg";

function LinkCard({ href="#", img, title, desc }) {
  return (
    <a
      href={href}
      className="group block w-full rounded-[14px] overflow-hidden shadow-sm ring-1 ring-black/5 hover:shadow-md transition"
    >
      <div className="relative w-full h-[clamp(80px,15vmin,140px)]">
        <img src={img} alt={title} className="w-full h-full object-cover" draggable="false" />
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/30 transition" />
        <div className="absolute inset-0 px-6 py-4 flex flex-col justify-center">
          <div className="text-white text-[clamp(16px,2.2vmin,22px)] font-semibold">{title}</div>
          {desc && <div className="text-white/90 text-[clamp(11px,1.4vmin,13px)] mt-1">{desc}</div>}
        </div>
      </div>
    </a>
  );
}

export default function QuickLinks() {
  return (
    <section className="grid grid-cols-1 gap-[clamp(10px,2vmin,16px)]">
      <LinkCard href="#" img={das2} title="Sports" desc="오늘의 운동 계획을 확인하세요." />
      <LinkCard href="#" img={das3} title="Food" desc="맞춤 식단과 영양을 확인하세요." />
      <LinkCard href="#" img={das4} title="Record" desc="나의 기록을 한눈에 정리하세요." />
    </section>
  );
}
