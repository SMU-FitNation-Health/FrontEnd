import React from "react";

const S = {
  bodyPad: "clamp(12px, 2.2vmin, 18px)",
  titleFS: "clamp(13px, 1.8vmin, 16px)",
  kcalFS: "clamp(11px, 1.5vmin, 13px)",
  itemFS: "clamp(11px, 1.45vmin, 13px)",
  macroFS: "clamp(10px, 1.3vmin, 12px)",
};

function MacroPill({ label, value }) {
  return (
    <div className="flex flex-col items-center px-[clamp(8px,1.6vmin,12px)] py-[clamp(6px,1.2vmin,8px)] bg-white rounded-xl border border-[#E5E7EB]">
      <div className="text-[#4A5565]" style={{ fontSize: S.macroFS }}>
        {label}
      </div>
      <div className="text-[#101828] font-semibold" style={{ fontSize: S.macroFS }}>
        {value}g
      </div>
    </div>
  );
}

export default function MkCard({ set }) {
  const { title, calories, items = [], macros, image } = set;

  return (
    <article className="bg-white/70 border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm">
      <div className="w-full aspect-[16/9] bg-[#EEF2F6]">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#9AA4B2] text-[clamp(11px,1.4vmin,13px)]">
            이미지 준비중
          </div>
        )}
      </div>

      <div style={{ padding: S.bodyPad }} className="space-y-[clamp(8px,1.6vmin,12px)]">
        <div className="font-semibold text-[#101828]" style={{ fontSize: S.titleFS }}>
          {title}
        </div>

        <div className="text-[#4A5565] flex items-center gap-[6px]" style={{ fontSize: S.kcalFS }}>
          🔥 {calories} kcal
        </div>

        <div className="space-y-[clamp(4px,1vmin,6px)]">
          <div className="text-[#101828] font-medium" style={{ fontSize: S.itemFS }}>
            포함 상품
          </div>
          <ul className="list-disc pl-[clamp(14px,2vmin,18px)] text-[#4A5565]" style={{ fontSize: S.itemFS }}>
            {items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>

        {macros && (
          <div className="flex items-center gap-[clamp(6px,1.2vmin,10px)] pt-[clamp(4px,1vmin,6px)]">
            <MacroPill label="탄수화물" value={macros.carbs} />
            <MacroPill label="단백질" value={macros.protein} />
            <MacroPill label="지방" value={macros.fat} />
          </div>
        )}
      </div>
    </article>
  );
}
