//axios 공통 클라이언트

import axios from "axios";

const rawBaseURL = import.meta.env.VITE_API_BASE_URL || "";
export const API_BASE_URL = rawBaseURL.replace(/\/+$/, "");

if (!API_BASE_URL) {
  console.warn(
    "VITE_API_BASE_URL가 설정되어 있지 않습니다. .env.development 파일을 확인해 주세요."
  );
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//FastAPI 스타일 에러(detail) 공통 파싱 유틸
export function getErrorMessage(error, fallback = "요청 중 오류가 발생했어요.") {
  const data = error?.response?.data;

  if (!data) return fallback;

  // detail이 문자열
  if (typeof data.detail === "string") {
    return data.detail;
  }

  // detail이 배열인 경우: [{ loc, msg, type }]
  if (Array.isArray(data.detail) && data.detail[0]?.msg) {
    return data.detail[0].msg;
  }

  return fallback;
}
