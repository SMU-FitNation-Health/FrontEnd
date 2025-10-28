import React from "react";

export default function Footer({ year = new Date().getFullYear() }) {
  return (
    <footer className="bg-[#F9FAFB] text-[#4A5565] border-t border-[#D1D5DB]" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-4 gap-x-12 py-16 items-start"> {/* ✅ 상단 기준선과의 간격을 늘리기 위해 py-12를 py-16으로 변경 (Top and bottom padding for the main content) */}

          <div>
            <h3 className="text-base font-semibold leading-none tracking-tight text-[#1E2939]">회사 정보</h3>
            <div className="mt-4 space-y-2 text-sm leading-7 text-[14px]">
              <p>회사명: Care View Inc.</p>
              <p>대표자: 이원준</p>
              <p>사업자등록번호: 123-45-67890</p>
              <p>주소: 충청남도 천안시 상명대학교</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold leading-none tracking-tight text-[#1E2939]">약관 및 정책</h3>
            <div className="mt-4 space-y-2 text-sm leading-7 text-[14px]">
              <p>이용약관</p>
              <p>개인정보 수집 및 이용 동의</p>
              <p>개인정보 처리방침</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold leading-none tracking-tight text-[#1E2939]">인증서</h3>
            <div className="mt-4 space-y-2 text-sm leading-7 text-[14px]">
              <p>의료기기 인증서</p>
              <p>정보보호 인증서</p>
              <p>ISO 9001</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold leading-none tracking-tight text-[#1E2939]">고객 지원</h3>
            <div className="mt-4 space-y-2 text-sm leading-7 text-[14px]">
              <p>이메일: support@careview.com</p>
              <p>전화: 1588-1234</p>
              <p>운영시간: 평일 09:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D1D5DB] pt-16 pb-[20px]"> {/* ✅ 중간 기준선과 텍스트 간격을 늘리기 위해 pt-14(또는 pt-[14px])를 pt-16으로 변경 (Padding Top for copyright section) */}
          <p className="text-center text-[13px] leading-none m-0 text-[#6A7282]">
            © {year} Care View Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}