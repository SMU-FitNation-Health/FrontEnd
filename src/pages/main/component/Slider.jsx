import React, { useState } from 'react';
import Weekly_Left from "../../../assets/main/Weekly_Left.svg?react";
import Weekly_Right from "../../../assets/main/Weekly_Right.svg?react";
import Card from '../../../components/Card';

const recipes = [
    {
      id: 1,
      title: "간단한\n김치볶음밥",
      difficulty: "하",
      countResponse: { likeCount: 12 },
      tagResponse: {
        occasion: "혼밥",
        purpose: "든든하게",
        foodType: "한식"
      }
    },
    {
      id: 2,
      title: "맛있는\n된장찌개",
      difficulty: "중",
      countResponse: { likeCount: 23 },
      tagResponse: {
        occasion: "가족식사",
        purpose: "따뜻하게",
        foodType: "한식"
      }
    },
    {
      id: 3,
      title: "매콤한\n떡볶이",
      difficulty: "중",
      countResponse: { likeCount: 45 },
      tagResponse: {
        occasion: "간식",
        purpose: "매콤하게",
        foodType: "분식"
      }
    }
  ];

const MainSlider = () => {
  const [Slide, setSlide] = useState(0);

  const handleNext = () => {
    setSlide((prev) => (prev + 1) % 3);
  };

  const handlePrev = () => {
    setSlide((prev) => (prev - 1 + 3) % 3);
  };

  const getSlideClass = (index) => {
    const position = (index - Slide + 3) % 3;
    switch (position) {
      case 0:
        return 'w-[640px] h-[300px] transition-all duration-500';
      case 1:
        return 'w-[200px] h-[300px] opacity-60 transition-all duration-500';
      case 2:
        return 'w-[200px] h-[300px] opacity-60 transition-all duration-500';
      default:
        return '';
    }
  };

  return (
    <div className="w-full px-64 pt-20">
      <h2 className="text-7xl text-red-500 mb-6">Weekly Picks Top3</h2>

      <div className="relative flex justify-center items-end gap-4 pt-6 pr-12">
        {recipes.map((recipe, index) => (
          <Card
            key={recipe.id}
            recipe={recipe}
            index={index}
            slide={Slide}
            getSlideClass={getSlideClass}
          />
        ))}

        {/* 슬라이드 버튼 */}
        <div className="absolute right-0 bottom-4 mb-80 mr-10 flex gap-3 z-10">
          <button onClick={handlePrev} className="w-8 h-8 text-red-500">
            <Weekly_Left />
          </button>
          <button onClick={handleNext} className="w-8 h-8 text-red-500">
            <Weekly_Right />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
