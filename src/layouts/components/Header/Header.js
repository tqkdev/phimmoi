import className from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button';
import BtnTheLoai from './BtnTheLoai/BtnTheLoai';
import BtnQuocGia from './BtnQuocGia/BtnQuocGia';
import BtnQuocGiaReposive from './BtnQuocGia/BtnQuocGiaReposive';
import BtnTheLoaiReposive from './BtnTheLoai/BtnTheLoaiReposive';
import Search from './Search/Search';
import { Link } from 'react-router-dom';
import images from '../../../assets/images';

const cx = className.bind(styles);

const THELOAI_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Chiếu Rạp',
        to: '/the-loai/phim-chieu-rap',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Tình Cảm',
        to: '/the-loai/phim-tinh-cam',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Hành Động',
        to: '/the-loai/phim-hanh-dong',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Chiến Tranh',
        to: '/the-loai/phim-chien-tranh',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim BL',
        to: '/the-loai/phim-bl',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Gia Đình',
        to: '/the-loai/phim-gia-dinh',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Nexflix',
        to: '/the-loai/phim-nextflix',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Hoạt Hình',
        to: '/the-loai/phim-hoat-hinh',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Cổ Trang',
        to: '/the-loai/phim-co-trang',
    },
];

const QUOCGIA_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Âu Mỹ',
        to: '/quoc-gia/phim-au-my',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Hàn Quốc',
        to: '/quoc-gia/phim-han-quoc',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Trung Quốc',
        to: '/quoc-gia/phim-trung-quoc',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Nhật Bản',
        to: '/quoc-gia/phim-nhat-ban',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Đài Loan',
        to: '/quoc-gia/phim-dai-loan',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Hồng Kông',
        to: '/quoc-gia/phim-hong-kong',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Thái Lan',
        to: '/quoc-gia/phim-thai-lan',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Ấn Độ',
        to: '/quoc-gia/phim-an-do',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Philipines',
        to: '/quoc-gia/phim-philippines',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Việt Nam',
        to: '/quoc-gia/phim-viet-nam',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Indonesia',
        to: '/quoc-gia/phim-indonesia',
    },
    {
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        title: 'Phim Singapore',
        to: '/quoc-gia/phim-singapore',
    },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* reponsive */}

                <label htmlFor="menu-checkbox-reponsive" className={cx('btn-menu-reponsive')}>
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </label>
                <label htmlFor="menu-checkbox-reponsive" className={cx('btn-menu-xmark-reponsive')}>
                    <FontAwesomeIcon icon={faXmark} />
                </label>

                {/* reponsive */}

                <Link to={'/'} className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </Link>

                <input type="checkbox" hidden className={cx('menu-checknox')} id="menu-checkbox-reponsive" />

                <div className={cx('nav-main')}>
                    <Button className={cx('btn-link')} to={'/'}>
                        Phimmoi
                    </Button>
                    <Button className={cx('btn-link')} to={'/phim-le'}>
                        Phim lẻ
                    </Button>
                    <Button className={cx('btn-link')} to={'/phim-bo'}>
                        Phim bộ
                    </Button>
                    <BtnTheLoai items={THELOAI_ITEM} />
                    <BtnQuocGia items={QUOCGIA_ITEM} />
                    <BtnTheLoaiReposive items={THELOAI_ITEM} />
                    <BtnQuocGiaReposive items={QUOCGIA_ITEM} />
                </div>

                <Search />
            </div>
        </div>
    );
}

export default Header;
