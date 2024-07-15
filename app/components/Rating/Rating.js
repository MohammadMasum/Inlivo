// Rating.js
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <>
    {Array.from({ length: totalStars }, (v, i) => (
        <span className='text-[#FFB800] text-[16px]' key={i}>
            { i < rating ? <FaStar /> : <FaRegStar /> }
        </span>
      ))}
    </>
  );
};

export default Rating;
