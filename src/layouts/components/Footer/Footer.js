import className from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import images from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('primary')}>
                    <div className={cx('fotlogo')}>
                        <div>
                            <img src={images.logo} alt="logo" />
                        </div>
                        <p>
                            <Link>Phimmoi</Link> - Trang xem phim Online với giao diện mới được bố trí và thiết kế thân
                            thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim
                            và thể loại vô cùng phong phú.
                        </p>
                    </div>
                    <div className={cx('columenu')}>
                        <div className={cx('item')}>
                            <h3>Phim mới</h3>
                            <ul>
                                <li>
                                    <Link>Phim Khoa Học</Link>
                                </li>
                                <li>
                                    <Link>Phim Kinh Dị</Link>
                                </li>
                                <li>
                                    <Link>Phim Chiếu Rạp</Link>
                                </li>
                                <li>
                                    <Link>Phim Hình Sự</Link>
                                </li>
                                <li>
                                    <Link>Phim Hành Động</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('item')}>
                            <h3>Phim hay</h3>
                            <ul>
                                <li>
                                    <Link>Phim Âu Mỹ</Link>
                                </li>
                                <li>
                                    <Link>Phim Hàn Quốc</Link>
                                </li>
                                <li>
                                    <Link>Phim Trung Quốc</Link>
                                </li>
                                <li>
                                    <Link>Phim Nhật Bản</Link>
                                </li>
                                <li>
                                    <Link>Phim Thái Lan</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('item')}>
                            <h3>Thông tin</h3>
                            <ul>
                                <li>
                                    <Link>Giới thiệu</Link>
                                </li>
                                <li>
                                    <Link>Liên hệ chúng tôi</Link>
                                </li>
                                <li>
                                    <Link>Điều khoản sử dụng</Link>
                                </li>
                                <li>
                                    <Link>Chính sách riêng tư</Link>
                                </li>
                                <li>
                                    <Link>Khiếu nại bản quyền</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('footer')}>
                    <p>© Phimmoi</p>
                    <div className={cx('iconright')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                        <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                        <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                        <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                        <div onClick={handleScrollToTop} className={cx('icon-angleUp')}>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
