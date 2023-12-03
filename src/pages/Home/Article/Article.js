import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import className from 'classnames/bind';
import styles from './Article.module.scss';
import { Link } from 'react-router-dom';

const Article = ({ items }) => {
    const cx = className.bind(styles);
    const slideshowRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const containerWidth = slideshowRef.current.clientWidth;
            let newSlidesToShow = 2;

            if (containerWidth < 380) {
                newSlidesToShow = 1;
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
        arrows: false,
        appendDots: (dots) => (
            <div>
                <ul className={cx('custom-dots')}>{dots}</ul>
            </div>
        ),
    };

    return (
        <div ref={slideshowRef} className={cx('slideshow-container')}>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div to={`/movie/${item.title}`} key={index} className={cx('poster')}>
                        <div className={cx('image')}>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <Link className={cx('data')}>
                            <h3>{item.title}</h3>
                            <p>{item.year}</p>
                        </Link>
                        <div className={cx('trangthai')}>
                            <h5>HD VIETSUB</h5>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Article;
