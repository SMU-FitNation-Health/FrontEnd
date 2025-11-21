import React, { useState } from "react";
import DailyHeader from "../dailyfood/components/DailyHeader";
import ReFoodTabs from "./components/common/ReFoodTabs";
import IngredientInputCard from "./components/IngredientInputCard";
import TipsCard from "./components/TipsCard";
import RecipeResultsSection, { MOCK_RECIPES } from "./components/RecipeResultsSection";
import ReFoodTitle from "./components/common/ReFoodTitle";
import ConveniencePlaceholder from "./components/market/ConveniencePlaceholder";
import Footer from "../../layout/footer/Footer.jsx";
import useReFoodSearch from "./hooks/useReFoodSearch";

export default function ReFoodPage() {
  const [tab, setTab] = useState("fridge");

  //재료/검색 로직 전부 훅
  const {
    items,
    results,
    searched,
    addItem,
    removeItem,
    search,
  } = useReFoodSearch(MOCK_RECIPES);

  const fridgeContent = (
    <>
      <IngredientInputCard
        items={items}
        onAdd={addItem}
        onRemove={removeItem}
        onSearch={search}
      />

      <RecipeResultsSection searched={searched} results={results} />

      <TipsCard />
    </>
  );

  const convenienceContent = (
    <>
      <ConveniencePlaceholder />
      <TipsCard />
    </>
  );

  return (
    <div className="min-h-dvh bg-[#F9FAFB] flex justify-center px-[clamp(16px,4vw,40px)]">
      <div className="w-full max-w-[1440px] py-[clamp(24px,4vh,40px)] space-y-[clamp(24px,4vh,36px)]">
        <DailyHeader />
        <ReFoodTitle />
        <ReFoodTabs value={tab} onChange={setTab} />

        {tab === "fridge" ? fridgeContent : convenienceContent}

        <Footer />
      </div>
    </div>
  );
}
