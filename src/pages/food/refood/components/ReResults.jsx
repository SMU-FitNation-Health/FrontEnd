const S = {
  cardPad: "clamp(14px, 2.2vmin, 20px)",
  titleFS: "clamp(14px, 1.8vmin, 18px)",
  bodyFS: "clamp(12px, 1.5vmin, 15px)",
};

function SectionHeader({ count }) {
  return (
    <div className="flex items-center gap-[clamp(6px,1vmin,8px)]">
      <div className="text-[#1E2939] font-semibold" style={{ fontSize: S.titleFS }}>
        추천 레시피
      </div>
      <div className="text-[clamp(11px,1.3vmin,13px)] text-[#4A5565] border border-[#D1D5DC] bg-white/70 rounded-full px-[8px] py-[2px]">
        {count}개 발견
      </div>
    </div>
  );
}

function ListBlock({ title, children }) {
  return (
    <div>
      <div className="text-[#1E2939] font-semibold text-[clamp(12px,1.5vmin,14px)] mb-[clamp(6px,1vmin,8px)]">
        {title}
      </div>
      {children}
    </div>
  );
}

function RecipeCard({ r }) {
  return (
    <article
      className="bg-white/70 border-2 border-[#D1D5DC] rounded-2xl"
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
        <ListBlock title="필요한 재료">
          <ul className="space-y-[clamp(4px,0.8vmin,6px)] text-[#111827] text-[clamp(12px,1.5vmin,14px)]">
            {r.ingredients.map((ing, idx) => (
              <li key={idx} className="flex gap-[6px]">
                <span>•</span>
                <span>{ing.name} {ing.amount}</span>
              </li>
            ))}
          </ul>
        </ListBlock>

        <ListBlock title="조리 방법">
          <ol className="space-y-[clamp(4px,0.8vmin,6px)] text-[#111827] text-[clamp(12px,1.5vmin,14px)] list-decimal pl-[18px]">
            {r.steps.map((st, idx) => (
              <li key={idx}>{st}</li>
            ))}
          </ol>
        </ListBlock>
      </div>
    </article>
  );
}

export default function ReResults({ searched, results }) {
  if (!searched) return null;

  return (
    <section className="space-y-[clamp(10px,2vmin,14px)]">
      <SectionHeader count={results.length} />

      {results.length === 0 ? (
        <div className="bg-white/70 border border-[#D1D5DC] rounded-2xl p-[clamp(14px,2vmin,18px)] text-[#4A5565] text-[clamp(12px,1.5vmin,14px)]">
          해당 재료로 만들 수 있는 레시피가 아직 없어요. 재료를 더 추가해보세요!
        </div>
      ) : (
        results.map((r) => <RecipeCard key={r.id} r={r} />)
      )}
    </section>
  );
}
