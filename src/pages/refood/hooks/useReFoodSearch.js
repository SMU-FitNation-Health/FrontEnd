import { useCallback, useMemo, useState } from "react";

export default function useReFoodSearch(recipes = []) {
  const [items, setItems] = useState([]);
  const [results, setResults] = useState(null); // null = 아직 검색 안함

  const normalize = useCallback((s = "") => s.trim().toLowerCase(), []);

  const addItem = useCallback(
    (value) => {
      const raw = value.trim();
      const v = normalize(value);
      if (!v) return;

      setItems((prev) => {
        if (prev.some((x) => normalize(x) === v)) return prev; // 중복 방지
        return [...prev, raw];
      });
    },
    [normalize]
  );

  const removeItem = useCallback((value) => {
    setItems((prev) => prev.filter((x) => x !== value));
  }, []);

  const search = useCallback(() => {
    const lower = items.map(normalize);

    const filtered = recipes.filter((r) =>
      lower.every((it) =>
        r.keywords.some((k) => normalize(k).includes(it))
      )
    );

    setResults(filtered);
  }, [items, normalize, recipes]);

  const searched = results !== null;

  return {
    items,
    results: results || [],
    searched,
    addItem,
    removeItem,
    search,
    setItems,   // 필요하면 외부에서 초기화/세팅 가능
    setResults, // 필요하면 외부에서 초기화/세팅 가능
  };
}
