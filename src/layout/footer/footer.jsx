import React from "react";

export default function Footer({ year = new Date().getFullYear() }) {
    return (
        <footer className="bg-[#F9FAFB] text-[#1E2939]" role="contentinfo">
            <div className="border-t border-[#D1D5DB]"></div>
            <div className="mx-auto max-w-[1200px]">
                {/* 4열 그리드 영역 */}
                <div className="grid grid-cols-4 gap-x-12 py-16 items-start">

                    <div>
                        <div className="text-[18px] leading-none tracking-tight">회사 정보</div>
                        <div className="mt-4 space-y-2 text-sm leading-7 text-[14px]">
                            <p>회사명: Care View Inc.</p>
                            <p>대표자: 이원준</p>
                            <p>사업자등록번호: 123-45-67890</p>
                            <p>주소: 충청남도 천안시 상명대학교</p>
                        </div>
                    </div>

                    <div>
                        <div className="text-[18px] leading-none tracking-tight">약관 및 정책</div>
                        <div className="mt-4 space-y-2 text-sm leading-7 text-[14px]">
                            <p>이용 약관</p>
                            <p>개인정보 수집 및 이용 동의</p>
                            <p>개인정보 처리방침</p>
                        </div>
                    </div>

                    <div>
                        <div className="text-[18px] leading-none tracking-tight">인증서</div>
                        <div className="mt-4 space-y-2 text-sm leading-7 text-[14px]">
                            <p>의료기기 인증서</p>
                            <p>정보보호 인증서</p>
                            <p>ISO 9001</p>
                        </div>
                    </div>

                    <div>
                        <div className="text-[18px] leading-none tracking-tight">고객 지원</div>
                        <div className="mt-4 space-y-2 text-sm leading-7 text-[14px]">
                            <p>이메일: support@careview.com</p>
                            <p>전화: 1588-1234</p>
                            <p>운영시간: 평일 09:00-18:00</p>
                        </div>
                    </div>
                </div>

                {/* 저작권 영역 */}
                <div className="border-t border-[#D1D5DB]"></div>
                    <p className="text-center text-[13px] leading-none m-0">
                        © {year} Care View Inc. All rights reserved.
                    </p>
            </div>
        </footer>
    );
}