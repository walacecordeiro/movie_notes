import { Container } from "./styles";
import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export function Rating({ rating, onChange, hoverEnabled }) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (hoveredRating) => {
    if (hoverEnabled) {
      setHoverRating(hoveredRating);
    }
  };

  const handleMouseLeave = () => {
    if (hoverEnabled) {
      setHoverRating(0);
    }
  };

  const handleClick = (selectedRating) => {
    setHoverRating(0);
    onChange(selectedRating);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= (hoverRating || rating);
      stars.push(
        <span
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        >
          {isFilled ? <FaStar /> : <FaRegStar />}
        </span>
      );
    }
    return stars;
  };

  return (
    <Container>
        {renderStars()}
    </Container>
  )
}