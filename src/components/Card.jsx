import React from 'react';
import img1 from "../assets/main/img1.png";

const Card = ({ recipe, index, slide, getSlideClass }) => {
  const getDisplayTags = () => {
    const tags = [];
    if (recipe.tagResponse?.occasion) tags.push(recipe.tagResponse.occasion);
    if (recipe.tagResponse?.purpose) tags.push(recipe.tagResponse.purpose);
    if (recipe.tagResponse?.foodType) tags.push(recipe.tagResponse.foodType);
    return tags;
  };

  return (
    <div
      className={`${getSlideClass(index)} rounded-xl overflow-hidden bg-white shadow-md relative`}
    >
      <img
        src={img1}
        alt="레시피 썸네일"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-30 p-4 text-white flex flex-col justify-end">
        <span className="text-xl font-bold">0{index + 1}</span>

        {recipe.title.split('\n').map((line, i) => (
          <h3 key={i} className="text-lg font-semibold leading-snug">{line}</h3>
        ))}

        <p className="text-sm opacity-90">난이도: {recipe.difficulty}</p>

        <p className="text-sm">{getDisplayTags().join(' · ')}</p>

        <p className="text-sm mt-1">❤️ {recipe.countResponse?.likeCount}</p>
      </div>
    </div>
  );
};

export default Card;
