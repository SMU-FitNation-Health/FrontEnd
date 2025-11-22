import React from "react";
import ReInputCard from "./components/ReInputCard.jsx";
import ReTipCard from "./components/ReTipCard.jsx";
import ReResults from "./components/ReResults.jsx";
import { MOCK_RECIPES } from "./data/mockRecipes.js";
import useReFoodSearch from "./hooks/useReFoodSearch.js";

export default function ReFoodPage() {
  const {
    items,
    results,
    searched,
    addItem,
    removeItem,
    search,
  } = useReFoodSearch(MOCK_RECIPES);

  return (
    <div className="space-y-[clamp(14px,3vmin,24px)]">
      <ReInputCard
        items={items}
        onAdd={addItem}
        onRemove={removeItem}
        onSearch={search}
      />
      <ReResults searched={searched} results={results} />
      <ReTipCard />
    </div>
  );
}
