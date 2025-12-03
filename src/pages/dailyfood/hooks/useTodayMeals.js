// 오늘의 식단 + 합계 계산 + 백엔드 연동 훅

import {
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";
import { api } from "../../../api/client.js";

export const TARGET_CALORIES = 2000;

// 백엔드 키
const MEAL_KEYS = ["breakfast", "lunch", "dinner"];

// 프론트에서 보여줄 한글 라벨
const MEAL_LABELS = {
  breakfast: "아침",
  lunch: "점심",
  dinner: "저녁",
};

// API에서 받은 한 끼 식단을 UI에서 쓰는 형태로 변환
function mapApiMealToUi(mealKey, apiMeal) {
  if (!apiMeal) return null;

  const {
    recipe_id,
    name,
    description,
    meal_type,
    image_url,
    nutrition,
    composition,
  } = apiMeal;

  const label = MEAL_LABELS[mealKey] || meal_type || mealKey;

  // 구성 재료 → 문자열 배열로 변환
  const items = Array.isArray(composition)
    ? composition.map((c) => {
        const itemName = c?.item?.name ?? "";
        const amount = c?.amount;
        const unit = c?.unit ?? "";

        const amountPart =
          typeof amount === "number" && !Number.isNaN(amount)
            ? `${amount}${unit}`.trim()
            : unit;

        // 예: "현미밥 · 200g"
        return [itemName, amountPart].filter(Boolean).join(" · ");
      })
    : [];

  return {
    id: recipe_id ?? `${mealKey}-${name ?? ""}`,
    mealType: label,
    name: name ?? "",
    description: description ?? "",
    image: image_url ?? "",
    calories: nutrition?.calories ?? 0,
    carbs: nutrition?.carbohydrates ?? 0,
    protein: nutrition?.protein ?? 0,
    fat: nutrition?.fat ?? 0,
    items,
    // API에 별도 추천 이유 필드가 없다면, description을 그대로 사용
    reason: description ?? "",
  };
}

// 현재 meals 배열 기준으로 합계 계산
function calcTotals(meals) {
  return meals.reduce(
    (acc, meal) => {
      if (!meal) return acc;
      acc.calories += meal.calories || 0;
      acc.carbs += meal.carbs || 0;
      acc.protein += meal.protein || 0;
      acc.fat += meal.fat || 0;
      return acc;
    },
    { calories: 0, carbs: 0, protein: 0, fat: 0 }
  );
}

export function useTodayMeals() {
  const [mealsByKey, setMealsByKey] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 전체(아침/점심/저녁) 한 번에 불러오기
  const loadAllMeals = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.get("/api/meals/recommendations/main");
      const data = res?.data || {};

      const next = {};
      MEAL_KEYS.forEach((key) => {
        const uiMeal = mapApiMealToUi(key, data[key]);
        if (uiMeal) next[key] = uiMeal;
      });

      setMealsByKey(next);
    } catch (err) {
      console.error("오늘의 식단 불러오기 실패:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 첫 렌더 시 한번 호출
  useEffect(() => {
    loadAllMeals();
  }, [loadAllMeals]);

  // 객체(mealsByKey)를 화면에서 쓰기 좋은 배열로 변환
  const meals = useMemo(
    () => MEAL_KEYS.map((key) => mealsByKey[key]).filter(Boolean),
    [mealsByKey]
  );

  const totals = useMemo(() => calcTotals(meals), [meals]);

  // 한 끼만 새로고침 (아침/점심/저녁 중 하나)
  const refreshMeal = useCallback(
    async (mealTypeLabel) => {
      // "아침" → "breakfast" 같은 역매핑
      const key =
        Object.entries(MEAL_LABELS).find(
          ([, label]) => label === mealTypeLabel
        )?.[0] ?? null;

      if (!key) return;

      setLoading(true);
      try {
        // 현재는 타입별 API가 없으므로, 전체를 다시 불러와서
        // 해당 끼니만 교체한다.
        const res = await api.get("/api/meals/recommendations/main");
        const data = res?.data || {};
        const updated = mapApiMealToUi(key, data[key]);
        if (!updated) return;

        setMealsByKey((prev) => ({
          ...prev,
          [key]: updated,
        }));
      } catch (err) {
        console.error("식단 새로고침 실패:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    meals,
    totals,
    refreshMeal,

    // 필요하면 나중에 페이지에서 사용 가능
    loading,
    error,
    reload: loadAllMeals,
  };
}
