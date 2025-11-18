// 오늘의 식단 + 합계 계산 + 식단 변경 훅

import { useMemo, useState, useCallback } from "react";
import { dailyFoodsMock } from "../../../data/dailyFoodMock";

export const TARGET_CALORIES = 2000;

const MEAL_TYPES = ["아침", "점심", "저녁"];

// 처음 화면에 쓸 기본 식단
function pickInitialMeals() {
  const result = {};
  MEAL_TYPES.forEach((type) => {
    const found = dailyFoodsMock.find((m) => m.mealType === type);
    if (found) result[type] = found;
  });
  return result;
}

//다른 식단 하나 뽑기
function getRandomMeal(type, excludeId) {
  const pool = dailyFoodsMock.filter(
    (m) => m.mealType === type && m.id !== excludeId
  );
  if (pool.length === 0) return null;
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}

export function useTodayMeals() {
  // 화면에 실제로 적용 중인 식단 (아침/점심/저녁)
  const [currentMeals, setCurrentMeals] = useState(() => pickInitialMeals());

  // 카드에 적용할 리스트
  const meals = useMemo(
    () => MEAL_TYPES.map((type) => currentMeals[type]).filter(Boolean),
    [currentMeals]
  );

  // 상단 요약 카드용 합계
  const totals = useMemo(
    () =>
      meals.reduce(
        (acc, meal) => ({
          calories: acc.calories + (meal?.calories ?? 0),
          carbs: acc.carbs + (meal?.carbs ?? 0),
          protein: acc.protein + (meal?.protein ?? 0),
          fat: acc.fat + (meal?.fat ?? 0),
        }),
        { calories: 0, carbs: 0, protein: 0, fat: 0 }
      ),
    [meals]
  );

  // 특정 끼니(type: "아침" | "점심" | "저녁")만 새로운 식단으로 교체
  const refreshMeal = useCallback((type) => {
    setCurrentMeals((prev) => {
      const current = prev[type];
      const next = getRandomMeal(type, current?.id);
      if (!next) return prev;
      return {
        ...prev,
        [type]: next,
      };
    });
  }, []);

  return {
    meals,
    totals,
    refreshMeal,
  };
}