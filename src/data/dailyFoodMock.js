// src/data/dailyFoodMock.js

// 오늘 화면에 쓸 아침/점심/저녁 3개 + 예비 데이터
export const dailyFoodsMock = [
  // ===== 오늘 화면에 쓸 3개 =====
  {
    id: 1,
    mealType: "아침",
    calories: 450,
    carbs: 55,
    protein: 25,
    fat: 20,
    items: [
      "귀리 오트밀 (200g)",
      "블루베리 (50g)",
      "아몬드 (15g)",
      "그릭 요거트 (100g)",
    ],
    reason:
      "아침에는 에너지를 급하게 올려주는 탄수화물과 단백질의 균형이 중요합니다. 귀리와 요거트 조합은 포만감을 오래 유지해주고, 블루베리는 하루를 상쾌하게 시작하는 데 도움을 줍니다.",
  },
  {
    id: 2,
    mealType: "점심",
    calories: 650,
    carbs: 60,
    protein: 35,
    fat: 25,
    items: [
      "현미밥 (150g)",
      "닭가슴살 구이 (120g)",
      "브로콜리 (100g)",
      "방울토마토 (80g)",
      "아보카도 (50g)",
    ],
    reason:
      "점심은 오후 활동량을 버티기 위한 시간이기 때문에 단백질과 복합 탄수화물 비율이 중요합니다. 닭가슴살과 현미 조합으로 포만감을 유지하면서도 무겁지 않게 설계했습니다.",
  },
  {
    id: 3,
    mealType: "저녁",
    calories: 550,
    carbs: 45,
    protein: 40,
    fat: 25,
    items: [
      "연어 구이 (150g)",
      "퀴노아 (100g)",
      "시금치 샐러드 (100g)",
      "고구마 (150g)",
    ],
    reason:
      "저녁은 과하지 않게, 하지만 회복에 필요한 단백질을 충분히 채우는 것이 핵심입니다. 연어와 퀴노아 조합으로 단백질과 오메가-3를 채우면서, 고구마로 과한 혈당 상승 없이 포만감을 유지합니다.",
  },

  // ===== 예비 목업 데이터 (총 9개 맞추기) =====
  {
    id: 4,
    mealType: "아침",
    calories: 430,
    carbs: 50,
    protein: 23,
    fat: 18,
    items: ["통밀 토스트", "스크램블 에그", "토마토"],
    reason: "가볍지만 단백질이 포함된 아침 식단입니다.",
  },
  {
    id: 5,
    mealType: "점심",
    calories: 620,
    carbs: 65,
    protein: 32,
    fat: 22,
    items: ["잡곡밥", "소고기 장조림", "나물 2종"],
    reason: "탄수화물과 단백질 비율을 안정적으로 맞춘 점심 식단입니다.",
  },
  {
    id: 6,
    mealType: "저녁",
    calories: 520,
    carbs: 40,
    protein: 38,
    fat: 20,
    items: ["두부 스테이크", "샐러드", "방울토마토"],
    reason: "저녁에 부담 없는 식단으로 구성했습니다.",
  },
  {
    id: 7,
    mealType: "아침",
    calories: 410,
    carbs: 48,
    protein: 20,
    fat: 17,
    items: ["그릭 요거트", "그래놀라", "바나나"],
    reason: "바쁜 아침에 빠르게 먹을 수 있는 조합입니다.",
  },
  {
    id: 8,
    mealType: "점심",
    calories: 640,
    carbs: 70,
    protein: 30,
    fat: 23,
    items: ["연어 덮밥", "미소된장국"],
    reason: "탄수화물과 단백질을 한 그릇으로 간단히 채울 수 있습니다.",
  },
  {
    id: 9,
    mealType: "저녁",
    calories: 500,
    carbs: 42,
    protein: 35,
    fat: 18,
    items: ["닭가슴살 샐러드", "구운 단호박"],
    reason: "야식 부담 없이 먹을 수 있는 저녁 식단입니다.",
  },
];
