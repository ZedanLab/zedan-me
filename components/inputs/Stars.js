import React, { useState } from 'react';
import StarIcon from '../icons/StarIcon';
import SelectableStarIcon from '../icons/SelectableStarIcon';

export default function Stars({ value, handleChange = null }) {
  const words = ['Good 😊', 'Skillful 🤹🏻', 'Excellent 🔥', 'Perfect 💯', 'Superior 😎'];
  const [selectedStar, setSelectedStar] = useState(value);

  function handleOnMouseEnter(index) {
    setSelectedStar(index);
  }

  function handleOnMouseLeave() {
    setSelectedStar(value);
  }

  return (
    <>
      <div className="flex justify-center">
        {words.map((word, index) =>
          handleChange === null ? (
            <StarIcon key={index} selected={index + 1 <= selectedStar} />
          ) : (
            <SelectableStarIcon
              key={index}
              number={index + 1}
              selected={index + 1 <= selectedStar}
              handleChange={handleChange}
              handleOnMouseEnter={handleOnMouseEnter}
              handleOnMouseLeave={handleOnMouseLeave}
            />
          )
        )}
      </div>
      <div className="mt-2 text-blue-600 text-xl">{words[selectedStar - 1]}</div>
    </>
  );
}
