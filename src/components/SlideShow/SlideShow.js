import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
// import '../../../node_modules/';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button/Button';

import className from 'classnames/bind';
import styles from './SlideShow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const CustomPrevArrow = (props) => (
    <div className="custom-prev-arrow" onClick={props.onClick}>
        <FontAwesomeIcon icon={faCaretLeft} />
    </div>
);

const CustomNextArrow = (props) => (
    <div className="custom-next-arrow" onClick={props.onClick}>
        <FontAwesomeIcon icon={faCaretRight} />
    </div>
);

const Slideshow = ({ items }) => {
    const cx = className.bind(styles);
    const slideshowRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const containerWidth = slideshowRef.current.clientWidth;
            let newSlidesToShow = 4;

            if (containerWidth < 380) {
                newSlidesToShow = 2;
            } else if (containerWidth < 664) {
                newSlidesToShow = 3;
            } else {
                newSlidesToShow = 5;
            }

            setSlidesToShow(newSlidesToShow);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,

        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div ref={slideshowRef} className={cx('slideshow-container')}>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <Button key={index} className={cx('poster')}>
                        <div className={cx('noibat')}>
                            <h5>NỔI BẬT</h5>
                        </div>
                        <div className={cx('image')}>
                            <img src={item.img} alt={item.title} />

                            <div className={cx('trangthai')}>
                                <h5>HD VIETSUB</h5>
                            </div>
                        </div>
                        <div className={cx('data')}>
                            <h3>{item.title}</h3>
                            <p>{item.derision}</p>
                        </div>
                    </Button>
                ))}
            </Slider>
        </div>
    );
};

export default Slideshow;
