// page/main/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import MainSlider from "./component/Slider";
import Footer from "../../layout/footer/footer";

const Main = () => {
  return (
    <>
      {/* 슬라이더가 클릭을 가로채지 않도록 레이어 낮춤 */}
      <div className="mainslider relative z-0">
        <MainSlider />
      </div>

      {/* 로그인 버튼: 반드시 슬라이더보다 높은 레이어 */}
      <div className="flex justify-center py-8 relative z-10">
        <Link
          to="/login"
          className="rounded-lg bg-gradient-to-r from-[#00D492] to-[#009966] px-6 py-3 text-white font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#00D492] active:scale-[0.99] transition"
          role="button"
        >
          로그인
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Main;
