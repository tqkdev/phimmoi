import images from '../../assets/images';
import className from 'classnames/bind';
import styles from './Movie.module.scss';
import StarRating from './StarRating/StarRating';
import React, { useState } from 'react';
import Comment from './Comments/Comments';
import SlideShow from '../../components/SlideShow/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images_newrap from '../../assets/images/newrap';

import { faFacebook, faPinterest, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';

const cx = className.bind(styles);

const LIST_ITEMS_RAPMOICAPNHAT = [
    {
        title: 'Tà Chú Cấm',
        img: images_newrap.ta_chu_cam,
        derision: 'Home for Rent 2023 ',
    },

    {
        title: 'Xứ Sở Các Nguyên Tố',
        img: images_newrap.elemental,
        derision: 'Elemental 2023 ',
    },

    {
        title: 'The Flash',
        img: images_newrap.the_flash,
        derision: 'The Flash 2023 ',
    },

    {
        title: 'Nàng Tiên Cá',
        img: images_newrap.nang_tien_ca,
        derision: 'The Little Mermaid 2023 ',
    },

    {
        title: 'Transformers 7: Quái Thú Trỗi Dậy',
        img: images_newrap.transformer_7,
        derision: 'Transformers: Rise of the Beasts 2023 ',
    },

    {
        title: 'Người Nhện: Du Hành Vũ Trụ Nhện',
        img: images_newrap.nguoi_nhen,
        derision: '2023',
    },

    {
        title: 'Người Kiến Và Chiến Binh Ong',
        img: images_newrap.nguoi_nhen,
        derision: 'Spider-Man: Across the Spider-Verse 2023 ',
    },

    {
        title: 'Quái Vật Đen',
        img: images_newrap.quai_vat_den,
        derision: 'The Black Demon 2023 ',
    },

    {
        title: 'Vây Hãm: Không Lối Thoát',
        img: images_newrap.vay_ham_khong_loai_thoat,
        derision: 'The Roundup: No Way Out 2023 ',
    },

    {
        title: 'Bùa Hình Nhân',
        img: images_newrap.bua_hinh_nhan,
        derision: 'Hoon Payon 2023 ',
    },

    {
        title: 'Cá Mập Siêu Bạo Chúa 2: Vực Sâu',
        img: images_newrap.meg_2,
        derision: 'Meg 2: The Trench 2023 ',
    },
];

function Movie() {
    const [showThongTin, setShowThongTin] = useState(true);
    const [showDaoDien, setShowDaoDien] = useState(false);

    const params = useParams();
    const nameMovie = params.xyz;

    const handleThongTinClick = () => {
        setShowThongTin(true);
        setShowDaoDien(false);
    };

    const handleDaoDienClick = () => {
        setShowThongTin(false);
        setShowDaoDien(true);
    };

    return (
        <>
            <div className={cx('image-warning')}>
                <img src={images.warning} alt="warning" />
            </div>

            <div className={cx('information')}>
                <div className={cx('poster')}>
                    <img src="" alt={nameMovie} />
                </div>

                <div className={cx('data')}>
                    <div className={cx('times')}>
                        <h1>{nameMovie}</h1>
                        <p>{nameMovie} 2023</p>
                        <div>
                            <span>Jun. 15, 2023</span>
                            <span>144 phút</span>
                            <span>USA</span>
                            <span>PG-13</span>
                        </div>
                    </div>

                    <div className={cx('reating')}>
                        <h3>6.5</h3>
                        <div>
                            <StarRating />
                        </div>
                        <p>Đánh giá của bạn</p>
                    </div>

                    <div className={cx('theloai')}>
                        <h5>Phim Chiếu Rạp</h5>
                        <h5>Phim Hành Động</h5>
                        <h5>Phim Khoa Học</h5>
                        <h5>Phim Phiêu Lưu</h5>
                        <h5>Phim Viễn Tưởng</h5>
                    </div>
                </div>
            </div>

            <div className={cx('tab-item')}>
                {/* <button onClick={handleThongTinClick}>Thông Tin</button>
                <button onClick={handleDaoDienClick}>Đạo diễn</button> */}

                <div className={cx('btn')}>
                    <button className={cx({ active: showThongTin })} onClick={handleThongTinClick}>
                        Thông Tin
                    </button>
                    <button className={cx({ active: showDaoDien })} onClick={handleDaoDienClick}>
                        Đạo diễn
                    </button>
                </div>
            </div>

            <div className={cx('tab-content')}>
                {showThongTin && (
                    <div className={cx('thongtin')}>
                        <h4>Tóm tắt</h4>
                        <p>
                            Người Nhện: Du Hành Vũ Trụ Nhện - Spider-Man: Across the Spider-Verse 2023 Miles Morales tái
                            xuất trong phần tiếp theo của bom tấn hoạt hình từng đoạt giải Oscar - Spider-Man: Across
                            the Spider-Verse. Sau khi gặp lại Gwen Stacy, chàng Spider-Man thân thiện đến từ Brooklyn
                            phải du hành qua đa vũ trụ và gặp một nhóm Người Nhện chịu trách nhiệm bảo vệ các thế giới
                            song song. Nhưng khi nhóm siêu anh hùng xung đột về cách xử lý một mối đe dọa mới, Miles
                            buộc phải đọ sức với các Người Nhện khác và phải xác định lại ý nghĩa của việc trở thành một
                            người hùng để có thể cứu những người cậu yêu thương nhất.
                        </p>
                    </div>
                )}

                {showDaoDien && (
                    <div className={cx('daodien')}>
                        <h4>Đạo diễn</h4>
                        <div className={cx('person')}>
                            <img src={images.avatar} alt="test" />
                            <div>
                                <h4>nguyenvana</h4>
                                <p>nickname</p>
                            </div>
                        </div>

                        <h4>Diễn viên</h4>

                        <div className={cx('member')}>
                            <div className={cx('person')}>
                                <img src={images.avatar} alt="test" />
                                <div>
                                    <h4>nguyenvana</h4>
                                    <p>nickname</p>
                                </div>
                            </div>
                            <div className={cx('person')}>
                                <img src={images.avatar} alt="test" />
                                <div>
                                    <h4>nguyenvana</h4>
                                    <p>nickname</p>
                                </div>
                            </div>
                            <div className={cx('person')}>
                                <img src={images.avatar} alt="test" />
                                <div>
                                    <h4>nguyenvana</h4>
                                    <p>nickname</p>
                                </div>
                            </div>
                            <div className={cx('person')}>
                                <img src={images.avatar} alt="test" />
                                <div>
                                    <h4>nguyenvana</h4>
                                    <p>nickname</p>
                                </div>
                            </div>
                            <div className={cx('person')}>
                                <img src={images.avatar} alt="test" />
                                <div>
                                    <h4>nguyenvana</h4>
                                    <p>nickname</p>
                                </div>
                            </div>
                            <div className={cx('person')}>
                                <img src={images.avatar} alt="test" />
                                <div>
                                    <h4>nguyenvana</h4>
                                    <p>nickname</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={cx('share')}>
                <div className={cx('share-number')}>
                    <p>Chia sẻ</p>
                    <h4>22</h4>
                </div>
                <div className={cx('iconshare')}>
                    <button className={cx('iconfa')}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>
                    <button className={cx('icontwi')}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button className={cx('iconpin')}>
                        <FontAwesomeIcon icon={faPinterest} />
                    </button>
                    <button className={cx('iconwhat')}>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </button>
                </div>
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title')}>
                    <h3 className={cx('title-list')}>Phim mới</h3>
                </div>
                <SlideShow items={LIST_ITEMS_RAPMOICAPNHAT} />
            </div>

            <Comment />
        </>
    );
}

export default Movie;
