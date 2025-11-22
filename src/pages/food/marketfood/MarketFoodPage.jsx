import React from "react";
import MkTipCard from "./components/MkTipCard";
import MkGrid from "./components/MkGrid";
import MkGuideCard from "./components/MkGuideCard";
import { MOCK_CONVENIENCE_SETS } from "./data/mockConvenienceSets";

export default function MarketFoodPage() {
  return (
    <div className="space-y-[clamp(14px,3vmin,24px)]">
      <MkTipCard />
      <MkGrid sets={MOCK_CONVENIENCE_SETS} />
      <MkGuideCard />
    </div>
  );
}
