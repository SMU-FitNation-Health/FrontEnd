import React, { useState } from "react";
import DailyHeader from "../dailyfood/components/DailyHeader";
import ReFoodTabs from "./components/ReFoodTabs";
import IngredientInputCard from "./components/IngredientInputCard";
import TipsCard from "./components/TipsCard";
import RecipeResultsSection, { MOCK_RECIPES } from "./components/RecipeResultsSection";
import ReFoodTitle from "./components/ReFoodTitle";
import ConveniencePlaceholder from "./components/ConveniencePlaceholder";
import Footer from "../../layout/footer/Footer.jsx";

export default function ReFoodPage() {
  const [tab, setTab] = useState("fridge");
  const [items, setItems] = useState([]);
  const [results, setResults] = useState(null); // null = 아직 검색 안함

  const normalize = (s = "") => s.trim().toLowerCase();

  const addItem = (value) => {
    const raw = value.trim();
    const v = normalize(value);
    if (!v) return;
    if (items.some((x) => normalize(x) === v)) return;
    setItems((prev) => [...prev, raw]);
  };

  const removeItem = (value) => {
    setItems((prev) => prev.filter((x) => x !== value));
  };

  const handleSearch = () => {
    const lower = items.map(normalize);

    const filtered = MOCK_RECIPES.filter((r) =>
      lower.every((it) =>
        r.keywords.some((k) => normalize(k).includes(it))
      )
    );

    setResults(filtered);
  };

  const fridgeContent = (
    <>
      <IngredientInputCard
        items={items}
        onAdd={addItem}
        onRemove={removeItem}
        onSearch={handleSearch}
      />

      <RecipeResultsSection
        searched={results !== null}
        results={results || []}
      />

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
