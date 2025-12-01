import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

//allergies 의 id 순서
const ALLERGY_NAMES = [
  "우유","대두","메밀","땅콩","밀","생선","게","새우","돼지고기","복숭아",
  "토마토","아황산염","호두","닭고기","쇠고기","오징어","조개류","잣","키위","달걀",
  "아몬드","캐슈넛","피스타치오","마카다미아","헤이즐넛","브라질너트","해바라기씨","참깨","양귀비씨","호박씨",
  "옥수수","쌀","귀리","보리","호밀","콩(강낭콩)","렌틸콩","병아리콩","녹두","밀가루",
  "사과","바나나","포도","오렌지","레몬","딸기","파인애플","아보카도","망고","멜론",
  "배","자두","체리","블루베리","라즈베리","감자","당근","샐러리","양파","마늘",
  "생강","아스파라거스","버섯","파","시금치","양배추","브로콜리","파프리카","고추","가지",
  "효모","식용 색소(타르트라진)","MSG (L-글루탐산나트륨)","아질산염","젤라틴","코코아","바닐라","커피","차(카페인)","술/주정",
  "카라멜 색소","인공 감미료","방부제","유화제","팜유","후추","계피","올리브","무","배추",
  "호박","허브(딜)","허브(바질)","허브(오레가노)","허브(파슬리)","허브(로즈마리)","오리알","메추리알","염소고기","오리고기",
  "메추리고기","아티초크","케이퍼","피클","밤",
];

const ALLERGY_NAME_TO_ID = ALLERGY_NAMES.reduce((acc, name, idx) => {
  acc[name] = idx + 1; // id는 1부터 시작
  return acc;
}, {});

// 공통 Authorization 헤더 생성 (cv-auth 로컬스토리지 사용)
function getAuthHeader() {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem("cv-auth");
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const token = parsed?.accessToken;
    const type = parsed?.tokenType || "Bearer";
    if (!token) return {};
    return { Authorization: `${type} ${token}` };
  } catch {
    return {};
  }
}

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

//요청마다 토큰을 붙이기 위한 헬퍼
function withAuth(config = {}) {
  return {
    ...config,
    headers: {
      ...(config.headers || {}),
      ...getAuthHeader(),
    },
  };
}

//현재 온보딩 상태 조회
export async function getOnboardingStatus() {
  const res = await client.get("/api/onboarding/status", withAuth());
  return res.data;
}

//Step 1: 목표 설정
export async function saveOnboardingStep1(goal) {
  // 백엔드가 "fat_loss" / "muscle_gain" 을 기대한다면 여기서 매핑해도 됨
  const body = { goal }; 
  const res = await client.post("/api/onboarding/step1", body, withAuth());
  return res.data;
}

// Step 2: 요일별 운동 스케줄 저장
export async function saveOnboardingStep2(schedule) {
  // 내부 상태 -> 백엔드 형식으로 변환
  const payload = {};

  const mapDay = (key, value) => {
    if (!value?.enabled || !value.start || !value.end) {
      payload[key] = {};
      return;
    }
    payload[key] = {
      start_time: value.start,
      end_time: value.end,
    };
  };

  mapDay("monday", schedule.mon);
  mapDay("tuesday", schedule.tue);
  mapDay("wednesday", schedule.wed);
  mapDay("thursday", schedule.thu);
  mapDay("friday", schedule.fri);
  mapDay("saturday", schedule.sat);
  mapDay("sunday", schedule.sun);

  const res = await client.post("/api/onboarding/step2", payload, withAuth());
  return res.data;
}

// Step 3: 나이 / 키 / 몸무게 / 알레르기
export async function saveOnboardingStep3(basic) {
  const age = Number(basic.age);
  const height = Number(basic.heightCm);
  const weight = Number(basic.weightKg);

  const allergy = basic.allergy || {};
  const hasAllergy = !!allergy.has;
  const names = Array.isArray(allergy.items) ? allergy.items : [];

  const allergyIds = hasAllergy
    ? names
        .map((name) => ALLERGY_NAME_TO_ID[name])
        .filter((id) => typeof id === "number")
    : [];

  const body = {
    age,
    height_cm: height,
    current_weight_kg: weight,
    allergy_ids: allergyIds,
  };

  const res = await client.post("/api/onboarding/step3", body, withAuth());
  return res.data;
}

// Step 4: 직업 유형 (student | worker)
export async function saveOnboardingStep4(jobType) {
  const body = { job_type: jobType };
  const res = await client.post("/api/onboarding/step4", body, withAuth());
  return res.data;
}

// Step 5: 온보딩 완료 처리
export async function completeOnboarding() {
  const body = { is_onboarding_complete: true };
  const res = await client.post("/api/onboarding/step5", body, withAuth());
  return res.data;
}

// 알레르기 전체 목록 조회 (필요 시 사용)
export async function fetchAllergies() {
  const res = await client.get("/api/onboarding/allergies", withAuth());
  return res.data?.allergies ?? [];
}
