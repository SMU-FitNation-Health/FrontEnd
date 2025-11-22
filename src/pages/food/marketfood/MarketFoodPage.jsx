// food/marketfood/MarketFoodPage.jsx
import React from "react";
import ConvenienceIntroCard from "./components/ConvenienceIntroCard";
import ConvenienceSetGrid from "./components/ConvenienceSetGrid";
import ConvenienceGuideCard from "./components/ConvenienceGuideCard";
import { MOCK_CONVENIENCE_SETS } from "./data/mockConvenienceSets";

export default function MarketFoodPage() {
  return (
    <div className="space-y-[clamp(14px,3vmin,24px)]">
      <ConvenienceIntroCard />
      <ConvenienceSetGrid sets={MOCK_CONVENIENCE_SETS} />
      <ConvenienceGuideCard />
    </div>
  );
}
