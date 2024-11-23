import { FaStar } from 'react-icons/fa';
import React, { useState } from 'react';
import style from './style.css';

export default function StarRating({ starCount = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setRating(index);
    }

    function handleMouseEnter(index) {
        setHover(index);

    }

    function handleMouseLeave() {
        setHover(rating);

    }
    return <div className="star-rating">
        {
            [...Array(starCount)].map((_, index) => {
                index += 1

                return <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                />
            })
        }
        <span style={{display: 'flex', alignContent:'center', justifyContent:'center'}}>ratings: {rating}</span>
    </div>
}