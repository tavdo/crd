import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars).fill().map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ))}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      {Array(emptyStars).fill().map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStarRegular} />
      ))}
    </div>
  );
};

export default Rating;
