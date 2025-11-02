import React from "react";

export default function LoginLeft() {
  return (
    <section className="w-full min-h-dvh bg-[#F9FAFB] flex items-center justify-center">
      {/* 좌측 컨텐츠 폭: 데스크톱 기준 520px, 작아지면 clamp로 부드럽게 축소 */}
      <div className="w-[clamp(320px,42vw,520px)]">
        {/* 상단 인사/아이콘 */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 rounded-2xl bg-[#18C2B5] flex items-center justify-center text-white text-xl font-bold shadow-sm">
            ✓
          </div>
          <h1 className="mt-6 text-[22px] font-semibold text-[#111827]">반가워요!</h1>
          <p className="mt-2 text-sm text-[#6B7280]">상쾌한 하루를 시작해볼까요?</p>
        </div>

        {/* 카드 */}
        <div className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6">
          {/* 이메일 */}
          <label className="block text-sm font-medium text-[#374151]">이메일</label>
          <input
            type="email"
            placeholder="hello@example.com"
            className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]/10"
          />

          {/* 비밀번호 */}
          <label className="mt-5 block text-sm font-medium text-[#374151]">비밀번호</label>
          <div className="mt-2">
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]/10"
            />
          </div>

          {/* 옵션 */}
          <div className="mt-4 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#4B5563]">
              <input type="checkbox" className="h-4 w-4 rounded border-[#D1D5DB]" />
              로그인 상태 유지
            </label>
            <a href="/forgot" className="text-[#4B5563] hover:underline">
              비밀번호 찾기
            </a>
          </div>

          {/* 로그인 버튼 */}
          <button
            className="mt-5 w-full rounded-xl bg-[#0F172A] py-3 text-white font-medium shadow-md hover:opacity-95 active:scale-[0.995] transition"
          >
            로그인하기 →
          </button>

          {/* 구분선 */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px w-full bg-[#E5E7EB]" />
            <span className="text-xs text-[#6B7280]">또는</span>
            <div className="h-px w-full bg-[#E5E7EB]" />
          </div>

          {/* 구글 로그인 (아이콘 자산 없으면 텍스트로) */}
          <button
            className="w-full rounded-xl border border-[#E5E7EB] bg-white py-3 text-[#111827] font-medium hover:bg-[#F9FAFB] transition"
          >
            Google로 계속하기
          </button>
        </div>

        {/* 하단 링크 */}
        <p className="mt-6 text-center text-sm text-[#6B7280]">
          아직 회원이 아니신가요?{" "}
          <a href="/signup" className="font-medium text-[#0F172A] hover:underline">
            회원가입하기 →
          </a>
        </p>
      </div>
    </section>
  );
}
