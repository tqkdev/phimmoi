import className from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faStar } from '@fortawesome/free-solid-svg-icons';
import ButtonAside from '../../../components/ButtonAside';
import images from '../../../assets/images';
import images_aside from '../../../assets/images/images_aside';

const cx = className.bind(styles);

const RELEASE_YEAR = [
    { title: '2023' },
    { title: '2022' },
    { title: '2021' },
    { title: '2020' },
    { title: '2019' },
    { title: '2018' },
    { title: '2017' },
    { title: '2016' },
    { title: '2015' },
    { title: '2014' },
    { title: '2013' },
    { title: '2012' },
    { title: '2011' },
    { title: '2010' },
    { title: '2009' },
    { title: '2008' },
    { title: '2007' },
    { title: '2006' },
    { title: '2005' },
    { title: '2004' },
    { title: '2003' },
    { title: '2002' },
    { title: '2001' },
    { title: '2000' },
    { title: '1999' },
    { title: '1998' },
    { title: '1997' },
    { title: '1996' },
    { title: '1995' },
    { title: '1994' },
    { title: '1993' },
    { title: '1992' },
    { title: '1991' },
    { title: '1990' },
    { title: '1989' },
    { title: '1988' },
    { title: '1987' },
    { title: '1986' },
    { title: '1985' },
    { title: '1984' },
    { title: '1983' },
    { title: '1982' },
    { title: '1981' },
    { title: '1980' },
    { title: '1979' },
    { title: '1978' },
    { title: '1977' },
    { title: '1976' },
    { title: '1975' },
    { title: '1974' },
    { title: '1973' },
    { title: '1972' },
];

const LIST_ITEM_ASIDE = [
    {
        title: 'Cuộc Xâm Lăng Bí Mật',
        img: images_aside.am_luong_huy_diet,
        marks: '8.7',
        year: '2023',
    },
    {
        title: 'Khu Vườn Dối Trá',
        img: images_aside.khu_vuon_doi_tra,
        marks: '9',
        year: '2023',
    },
    {
        title: 'Vụng Trộm Không Thể Giấu',
        img: images_aside.vung_trom_khong_thr_giau,
        marks: '8.8',
        year: '2023',
    },
    {
        title: 'Nam Vương Nữ Nhi Tình',
        img: images_aside.nam_duong_nu_nhi_tinh,
        marks: '10',
        year: '2023',
    },
    {
        title: 'The Idol',
        img: images_aside.the_idol,
        marks: '6.9',
        year: '2023',
    },
    {
        title: 'Cơn Thịnh Nộ Của Becky',
        img: images_aside.con_thinh_no_cua_becky,
        marks: '8',
        year: '2023',
    },
    {
        title: 'Âm Lượng Hủy Diệt',
        img: images_aside.am_luong_huy_diet,
        marks: '7',
        year: '2022',
    },
    {
        title: 'Quái Vật Biển Sâu',
        img: images_aside.quai_vat_bien_sau,
        marks: '4',
        year: '2023',
    },
    {
        title: 'Cạm bẫy Tình Dục',
        img: images_aside.cam_bay_tinh_duc,
        marks: '5.5',
        year: '2023',
    },
    {
        title: 'Kỳ Môn Độn Giáp 2',
        img: images_aside.ky_mon_don_giap_2,
        marks: '10',
        year: '2023',
    },
];

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('main-aside')}>
                <div className={cx('release-year')}>
                    <div className={cx('title')}>
                        <h4>Năm phát hành</h4>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className={cx('btn-year')}>
                        {RELEASE_YEAR.map((year, index) => (
                            <ButtonAside key={index} to={`/nam-phat-hanh/${year.title}`}>
                                {year.title}
                            </ButtonAside>
                        ))}
                    </div>
                </div>

                <div className={cx('article-aside')}>
                    <div className={cx('thamnail')}>
                        <img src={images.article_aside} alt="thamnail" />
                    </div>
                    <div className={cx('desription')}>
                        <h4>Tiếng gọi nơi hoang dã</h4>
                        <span>2020</span>
                    </div>
                </div>

                <div className={cx('list-item-aside')}>
                    {LIST_ITEM_ASIDE.map((item, index) => (
                        <ButtonAside key={index} className={cx('box')} to={'/'}>
                            <div className={cx('box-img')}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className={cx('box-content')}>
                                <h5>{item.title}</h5>
                                <div className={cx('wextra')}>
                                    <div className={cx('marks-star')}>
                                        <FontAwesomeIcon icon={faStar} />
                                        <div>{item.marks}</div>
                                    </div>
                                    <p className={cx('box-year')}>{item.year}</p>
                                </div>
                            </div>
                        </ButtonAside>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
