// 오늘의 식단 + 합계 계산 + 식단 변경 훅

import { useMemo, useState, useCallback } from "react";
import { dailyFoodsMock } from "../../../data/dailyFoodMock";

export const TARGET_CALORIES = 2000;

const MEAL_TYPES = ["아침", "점심", "저녁"];

// 처음 화면에 쓸 기본 식단 (각 끼니 첫 번째 항목)
function pickInitialMeals() {
  const result = {};
  MEAL_TYPES.forEach((type) => {
    const found = dailyFoodsMock.find((m) => m.mealType === type);
    if (found) result[type] = found;
  });
  return result;
}

// 현재 끼니(id)와 다른 랜덤 식단 하나 뽑기
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

  // "새로운 식단 추천 받기" 눌렀을 때 뜨는 후보 식단
  const [candidates, setCandidates] = useState(null);

  // 현재 화면에 표시할 식단 리스트
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

  // "새로운 식단 추천 받기" → 각 끼니별로 새로운 후보 1개씩 뽑기
  const refreshCandidates = useCallback(() => {
    setCandidates(() => {
      const next = {};
      MEAL_TYPES.forEach((type) => {
        const currentId = currentMeals[type]?.id;
        next[type] = getRandomMeal(type, currentId) || null;
      });
      return next;
    });
  }, [currentMeals]);

  // 특정 끼니(type)에만 후보 적용
  const applyCandidate = useCallback(
    (type) => {
      const candidate = candidates?.[type];
      if (!candidate) return;

      setCurrentMeals((prev) => ({
        ...prev,
        [type]: candidate,
      }));

      // 적용한 끼니 후보는 비우기
      setCandidates((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          [type]: null,
        };
      });
    },
    [candidates]
  );

  // 🔥 후보 전체 닫기
  const clearCandidates = useCallback(() => {
    setCandidates(null);
  }, []);

  return {
    meals,
    totals,
    candidates,
    refreshCandidates,
    applyCandidate,
    clearCandidates,
  };
}