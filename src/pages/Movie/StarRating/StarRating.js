import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function StarRating() {
    const [hoveredStars, setHoveredStars] = useState(0);
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarHover = (index) => {
        setHoveredStars(index + 1);
    };

    const handleStarClick = (index) => {
        setSelectedStars(index + 1);
    };

    return (
        <div className={cx('star-container')}>
            {[...Array(10)].map((_, index) => (
                <span
                    key={index}
                    className={cx('star', { hovered: index < hoveredStars, selected: index < selectedStars })}
                    onMouseEnter={() => handleStarHover(index)}
                    onMouseLeave={() => setHoveredStars(0)}
                    onClick={() => handleStarClick(index)}
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
            ))}
        </div>
    );
}

export default StarRating;
