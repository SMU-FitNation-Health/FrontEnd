// food/refood/ReFoodPage.jsx
import React from "react";
import IngredientInputCard from "./components/IngredientInputCard.jsx";
import TipsCard from "./components/TipsCard.jsx";
import RecipeResultsSection from "./components/RecipeResultsSection.jsx";
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
      <IngredientInputCard
        items={items}
        onAdd={addItem}
        onRemove={removeItem}
        onSearch={search}
      />
      <RecipeResultsSection searched={searched} results={results} />
      <TipsCard />
    </div>
  );
}
