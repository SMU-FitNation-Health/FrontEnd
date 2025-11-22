// 냉장고 재료 검색 유틸 및 훅
import { useCallback, useState } from "react";

export default function useReFoodSearch(recipes = []) {
  const [items, setItems] = useState([]);
  const [results, setResults] = useState(null); // null = 아직 검색 안함

  const normalize = useCallback((s = "") => s.trim().toLowerCase(), []);

  const addItem = useCallback(
    (value) => {
      const v = normalize(value);
      if (!v) return;

      setItems((prev) => {
        if (prev.includes(v)) return prev; // 중복 방지
        return [...prev, v];
      });
    },
    [normalize]
  );

  const removeItem = useCallback(
    (value) => {
      const v = normalize(value);
      setItems((prev) => prev.filter((x) => x !== v));
    },
    [normalize]
  );

  const search = useCallback(() => {
    if (!items.length) {
      setResults([]);
      return;
    }

    const lower = items.map(normalize);

    const matched = recipes.filter((r) =>
      lower.every((it) =>
        (r.keywords || []).some((k) => normalize(k).includes(it))
      )
    );

    setResults(matched);
  }, [items, recipes, normalize]);

  const searched = results !== null;

  return {
    items,
    results: results || [],
    searched,
    addItem,
    removeItem,
    search,
  };
}
