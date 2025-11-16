// 오늘의 식단 + 합계 계산 유틸

import { useMemo } from "react";
import { dailyFoodsMock } from "../../../data/dailyFoodMock";

// 나중에 백엔드 값으로 교체할 기본 목표 칼로리
export const TARGET_CALORIES = 2000;

export function useTodayMeals() {
  return useMemo(() => {
    // 오늘 화면은 일단 목업의 앞 3개(아침/점심/저녁)만 사용
    const meals = dailyFoodsMock.slice(0, 3);

    const totals = meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.calories,
        carbs: acc.carbs + meal.carbs,
        protein: acc.protein + meal.protein,
        fat: acc.fat + meal.fat,
      }),
      { calories: 0, carbs: 0, protein: 0, fat: 0 }
    );

    return { meals, totals };
  }, []);
}
