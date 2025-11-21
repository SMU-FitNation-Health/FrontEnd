import React from "react";

export const MOCK_RECIPES = [
  {
    id: 1,
    title: "채소 볶음밥",
    calories: 420,
    summary: "냉장고 속 재료로 만드는 영양 만점 볶음밥입니다.",
    keywords: ["계란", "토마토", "닭가슴살", "양파", "밥"],
    ingredients: [
      { name: "현미밥", amount: "200g" },
      { name: "계란", amount: "1개" },
      { name: "닭가슴살", amount: "100g" },
      { name: "토마토", amount: "1개" },
      { name: "양파", amount: "1/2개" },
      { name: "간장", amount: "1T" },
      { name: "올리브오일", amount: "1t" },
    ],
    steps: [
      "양파와 토마토를 잘게 썰어주세요.",
      "달군 팬에 오일을 두르고 닭가슴살을 먼저 볶습니다.",
      "양파, 토마토를 넣고 중불에서 볶아주세요.",
      "현미밥과 간장을 넣고 빠르게 섞어 볶습니다.",
      "마지막으로 계란을 넣어 스크램블하듯 마무리합니다.",
    ],
  },
  {
    id: 2,
    title: "닭가슴살 토마토 샐러드",
    calories: 280,
    summary: "단백질과 비타민을 동시에 챙기는 가벼운 한 끼.",
    keywords: ["닭가슴살", "토마토", "양상추", "오이"],
    ingredients: [
      { name: "닭가슴살", amount: "120g" },
      { name: "토마토", amount: "1개" },
      { name: "양상추", amount: "한 줌" },
      { name: "오이", amount: "1/2개" },
      { name: "발사믹", amount: "1T" },
    ],
    steps: [
      "채소를 먹기 좋게 썰어주세요.",
      "닭가슴살은 찢어서 준비합니다.",
      "볼에 채소와 닭가슴살을 담습니다.",
      "발사믹을 뿌려 가볍게 섞어 완성합니다.",
    ],
  },
  {
    id: 3,
    title: "계란 토마토 수프",
    calories: 190,
    summary: "따뜻하게 속을 달래주는 간단 수프.",
    keywords: ["계란", "토마토", "양파"],
    ingredients: [
      { name: "토마토", amount: "2개" },
      { name: "계란", amount: "1개" },
      { name: "양파", amount: "1/4개" },
      { name: "소금", amount: "약간" },
      { name: "후추", amount: "약간" },
    ],
    steps: [
      "토마토와 양파를 잘게 썰어 냄비에 넣습니다.",
      "약불에서 토마토가 무를 때까지 끓여주세요.",
      "간을 맞춘 뒤 계란을 풀어 넣고 저어줍니다.",
      "1~2분 더 끓여 마무리합니다.",
    ],
  },
];

const S = {
  cardPad: "clamp(14px, 2.2vmin, 20px)",
  titleFS: "clamp(14px, 1.8vmin, 18px)",
  bodyFS: "clamp(12px, 1.5vmin, 15px)",
};

export default function RecipeResultsSection({ searched, results }) {
  if (!searched) return null;

  return (
    <section className="space-y-[clamp(10px,2vmin,14px)]">
      <div className="flex items-center gap-[clamp(6px,1vmin,8px)]">
        <div className="text-[#1E2939] font-semibold" style={{ fontSize: S.titleFS }}>
          추천 레시피
        </div>
        <div className="text-[clamp(11px,1.3vmin,13px)] text-[#4A5565] border border-[#D1D5DC] bg-white/70 rounded-full px-[8px] py-[2px]">
          {results.length}개 발견
        </div>
      </div>

      {results.length === 0 ? (
        <div className="bg-white/70 border border-[#D1D5DC] rounded-2xl p-[clamp(14px,2vmin,18px)] text-[#4A5565] text-[clamp(12px,1.5vmin,14px)]">
          해당 재료로 만들 수 있는 레시피가 아직 없어요. 재료를 더 추가해보세요!
        </div>
      ) : (
        results.map((r) => (
          <article
            key={r.id}
            className="bg-white/70 border border-[#D1D5DC] rounded-2xl"
            style={{ padding: S.cardPad }}
          >
            <div className="flex items-center justify-between">
              <div className="text-[#111827] font-semibold" style={{ fontSize: S.titleFS }}>
                {r.title}
              </div>
              <div className="text-[#1E2939] font-medium text-[clamp(12px,1.5vmin,14px)]">
                {r.calories} kcal
              </div>
            </div>

            <p
              className="mt-[clamp(6px,1.2vmin,8px)] text-[#4A5565] leading-relaxed"
              style={{ fontSize: S.bodyFS }}
            >
              {r.summary}
            </p>

            <div className="mt-[clamp(12px,2vmin,16px)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(10px,2vmin,14px)]">
              <div>
                <div className="text-[#1E2939] font-semibold text-[clamp(12px,1.5vmin,14px)] mb-[clamp(6px,1vmin,8px)]">
                  필요한 재료
                </div>
                <ul className="space-y-[clamp(4px,0.8vmin,6px)] text-[#111827] text-[clamp(12px,1.5vmin,14px)]">
                  {r.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex gap-[6px]">
                      <span>•</span>
                      <span>
                        {ing.name} {ing.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-[#1E2939] font-semibold text-[clamp(12px,1.5vmin,14px)] mb-[clamp(6px,1vmin,8px)]">
                  조리 방법
                </div>
                <ol className="space-y-[clamp(4px,0.8vmin,6px)] text-[#111827] text-[clamp(12px,1.5vmin,14px)] list-decimal pl-[18px]">
                  {r.steps.map((st, idx) => (
                    <li key={idx}>{st}</li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))
      )}
    </section>
  );
}
