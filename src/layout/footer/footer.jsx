import React from "react";
import { global } from "../../utils/global";

export default function Footer({ year = new Date().getFullYear() }) {
  return (
    <footer className="bg-[#F9FAFB] text-[#1E2939]" role="contentinfo">
      <div className="border-t border-[#D1D5DB] pb-[0.4vw]"></div>

      {/* 전역 스타일 적용 (1440px 고정 + 중앙 정렬) */}
      <div {...global()}>

        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-x-[8vw] py-[3.5vw] pb-[1vw] items-start">
            
            {/* 회사 정보 */}
            <div>
              <div className="text-[clamp(16px,1vw,22px)] pb-[2vw] font-semibold">
                회사 정보
              </div>
              <div className="space-y-[0.7vw] text-[clamp(14px,0.9vw,18px)] leading-relaxed">
                <p>회사명: Care View Inc.</p>
                <p>대표자: 이원준</p>
                <p>사업자등록번호: 123-45-67890</p>
                <p>주소: 충청남도 천안시 상명대학교</p>
              </div>
            </div>

            {/* 약관 및 정책 */}
            <div>
              <div className="text-[clamp(16px,1vw,22px)] pb-[2vw] font-semibold">
                약관 및 정책
              </div>
              <div className="space-y-[0.7vw] text-[clamp(14px,0.9vw,18px)] leading-relaxed">
                <p>이용 약관</p>
                <p>개인정보 수집 및 이용 동의</p>
                <p>개인정보 처리방침</p>
              </div>
            </div>

            {/* 인증서 */}
            <div>
              <div className="text-[clamp(16px,1vw,22px)] pb-[2vw] font-semibold">
                인증서
              </div>
              <div className="space-y-[0.7vw] text-[clamp(14px,0.9vw,18px)] leading-relaxed">
                <p>의료기기 인증서</p>
                <p>정보보호 인증서</p>
                <p>ISO 9001</p>
              </div>
            </div>

            {/* 고객 지원 */}
            <div>
              <div className="text-[clamp(16px,1vw,22px)] pb-[2vw] font-semibold">
                고객 지원
              </div>
              <div className="space-y-[0.7vw] text-[clamp(14px,0.9vw,18px)] leading-relaxed">
                <p>이메일: support@careview.com</p>
                <p>전화: 1588-1234</p>
                <p>운영시간: 평일 09:00-18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="border-t-[0.8px] border-[#1E2939] w-[82%] mx-auto"></div>
          <p className="text-center text-[clamp(13px,0.8vw,15px)] pb-[1.5vw]">
            © {year} Care View Inc. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
