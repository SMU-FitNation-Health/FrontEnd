import React from "react";

export default function SiteFooter({ year = new Date().getFullYear() }) {
  return (
    <footer className="bg-white text-gray-800 border-t border-black/10" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-4 gap-x-12 py-12 items-start">
          <div>
            <h3 className="text-base font-semibold leading-none tracking-tight">회사 정보</h3>
            <div className="mt-4 space-y-2 text-sm leading-7">
              <p><span className="text-gray-500">회사명:</span> Care View Inc.</p>
              <p><span className="text-gray-500">대표자:</span> 홍길동</p>
              <p><span className="text-gray-500">사업자등록번호:</span> 123-45-67890</p>
              <p><span className="text-gray-500">주소:</span> 서울특별시 강남구</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold leading-none tracking-tight">약관 및 정책</h3>
            <div className="mt-4 space-y-2 text-sm leading-7">
              <p>이용약관</p>
              <p>개인정보 수집 및 이용 동의</p>
              <p>개인정보 처리방침</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold leading-none tracking-tight">인증서</h3>
            <div className="mt-4 space-y-2 text-sm leading-7">
              <p>의료기기 인증서</p>
              <p>정보보호 인증서</p>
              <p>ISO 9001</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold leading-none tracking-tight">고객 지원</h3>
            <div className="mt-4 space-y-2 text-sm leading-7">
              <p>이메일: support@careview.com</p>
              <p>전화: 1588-1234</p>
              <p>운영시간: 평일 09:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/15 py-6">
          <p className="text-center text-xs text-gray-500">
            © {year} Care View Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}