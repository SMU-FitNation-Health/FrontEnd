import React from "react";

/**
 * 규칙
 * - ≥1200px: 가로 스크롤 불가, 세로 스크롤 동작(스크롤바 숨김)
 * - <1200px : 가로·세로 스크롤 모두 가능(두 바 모두 보임)
 * ※ LoginPage.jsx에는 추가 overflow/min-w 클래스 넣지 말 것.
 */
export default function ViewportLock({ className = "", children }) {
  return (
    <>
      <style>{`
        /* 바깥: 세로 스크롤 담당 (가로는 항상 차단) */
        .vl-outer {
          position: relative;
          isolation: isolate;
          width: 100%;
          max-width: 100vw;           /* 유령 가로 스크롤 방지 */
          min-height: 100dvh;
          overflow-y: auto;           /* 세로 스크롤 동작 */
          overflow-x: hidden;         /* 가로는 기본 차단 */
          box-sizing: border-box;
          touch-action: pan-y;
          overscroll-behavior-y: contain;
        }

        /* 안쪽: 가로 스크롤 담당 (작을 때만 필요) */
        .vl-hscroll {
          width: 100%;
          min-height: 100dvh;
          overflow-x: auto;           /* <1200px에서 가로 바/스크롤 */
          overflow-y: visible;        /* 세로는 바깥이 담당 */
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
          box-sizing: border-box;
        }

        /* 콘텐츠: <1200px에서 가로 오버플로우를 실제로 만들어주는 주체 */
        .vl-content {
          min-width: 1200px;          /* <1200px에서만 의미있음 */
          min-height: 100dvh;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        /* ≥1200px 규칙: 세로 바 숨김, 가로 스크롤/바 완전 차단 */
        @media (min-width: 1200px) {
          .vl-outer {
            /* 세로 스크롤바 숨김 (동작은 유지) */
            scrollbar-width: none;        /* Firefox */
            -ms-overflow-style: none;     /* IE/Edge Legacy */
          }
          .vl-outer::-webkit-scrollbar {  /* Chrome/Safari/Edge */
            width: 0; height: 0; display: none;
          }
          .vl-hscroll {
            overflow-x: hidden;           /* 가로 스크롤 자체 차단 */
          }
          .vl-content {
            min-width: 0;                 /* 오버플로우 원인 제거 */
          }
        }
      `}</style>

      <div className="vl-outer">
        <div className="vl-hscroll">
          <div className={`vl-content ${className}`}>{children}</div>
        </div>
      </div>
    </>
  );
}
