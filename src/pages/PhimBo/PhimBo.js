import SlideShow from '../../components/SlideShow/';
import Article from '../Home/Article';
import Button from '../../components/Button';
import images_article from '../../assets/images/article';
import images_phimbo from '../../assets/images/newbo';
import images_outstand from '../../assets/images/outstand';

import className from 'classnames/bind';
import styles from './PhimBo.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

const LIST_ITEM_POSTER = [
    {
        title: 'Transformers 7: Quái Thú Trỗi Dậy',
        img: images_article.quai_vat_noi_day,
        year: '2023',
    },
    {
        title: 'Quá Nhanh Quá Nguy Hiểm 10',
        img: images_article.qua_nhanh_qua_nguy_hiem,
        year: '2023',
    },
    {
        title: 'Khoái Cảm',
        img: images_article.khoai_cam,
        year: '2021',
    },
    {
        title: '99 Moons',
        img: images_article.moons,
        year: '2023',
    },
    {
        title: 'Người Nhện: Du Hành Vũ Trụ Nhện',
        img: images_article.du_hanh_vu_tru_nhen,
        year: '2023',
    },
    {
        title: 'Dạ Điểu',
        img: images_article.da_dieu,
        year: '2022',
    },
    {
        title: 'Qua Ô Cửa Sổ: Phần 2',
        img: images_article.qua_o_cua_so_p2,
        year: '2023',
    },
    {
        title: 'Sơn Thôn Lữ Điếm',
        img: images_article.son_thon_lu_diem,
        year: '2023',
    },
    {
        title: 'Rèm Hồng',
        img: images_article.rem_hong,
        year: '1982',
    },
    {
        title: 'Trò Chơi Tình Dục',
        img: images_article.tro_choi_tinh_duc,
        year: '2023',
    },
];

const LIST_ITEMS_OUTSTAND = [
    {
        title: 'Transformers 7: Quái Thú Trỗi Dậy',
        img: images_outstand.tranformer_7,
        derision: '2023',
    },

    {
        title: 'Người Nhện: Du Hành Vũ Trụ Nhện',
        img: images_outstand.du_hanh_vu_tru_nhen,
        derision: '2023',
    },

    {
        title: 'The Flash',
        img: images_outstand.the_flash,
        derision: '2023',
    },

    {
        title: 'John Wick: Phần 4',
        img: images_outstand.john_wick_4,
        derision: '2023',
    },

    {
        title: ' Nàng Tiên Cá',
        img: images_outstand.nang_tien_ca,
        derision: '2023',
    },

    {
        title: 'Người Kiến Và Chiến Binh Ong',
        img: images_outstand.nguoi_kien_va_chien_binh_ong_the_gioi_luong_tu_1,
        derision: '2023',
    },

    {
        title: 'Vệ Binh Dải Ngân Hà 3',
        img: images_outstand.ve_binh_dai_ngan_ha_3,
        derision: '2023',
    },

    {
        title: 'Avatar: Dòng Chảy Của Nước',
        img: images_outstand.avatar_2,
        derision: '2023',
    },

    {
        title: 'Khắc Tinh Của Quỷ',
        img: images_outstand.khac_tinh_cua_quy,
        derision: '2023',
    },

    {
        title: 'Chiến Binh Báo Đen: Wakanda Bất Diệt',
        img: images_outstand.chien_binh_bao_den,
        derision: '2023',
    },
];

const LIST_ITEMS_PHIMBOMOICAPNHAT = [
    {
        title: 'Khi Anh Chạy Về Phía Em',
        img: images_phimbo.khi_anh_chay_ve_phia_em,
        derision: 'When I Fly Towards You 2023 ',
    },

    {
        title: 'Trường Phong Độ',
        img: images_phimbo.truong_phong_do,
        derision: 'Destined 2023 ',
    },

    {
        title: 'La Pluie: Cơn Mưa Khi Ấy, Em Yêu Anh',
        img: images_phimbo.la_pluie,
        derision: 'La Pluie The Series 2023 ',
    },

    {
        title: 'Tuyết Ưng Lĩnh Chủ',
        img: images_phimbo.tuyet_ung_linh_chu,
        derision: 'Snow Eagle Lord 2023 ',
    },

    {
        title: 'Xác Sống: Thành Phố Chết',
        img: images_phimbo.thanh_pho_chet,
        derision: 'The Walking Dead: Dead City 2023 ',
    },

    {
        title: 'Thị Trấn Ác Mộng (Phần 2)',
        img: images_phimbo.from_season,
        derision: 'From Season 2 2023 ',
    },

    {
        title: 'Vụng Trộm Không Thể Giấu',
        img: images_phimbo.vung_trom_khong_the_giau,
        derision: 'Hidden Love 2023 ',
    },

    {
        title: 'Khách Sạn Vương Giả',
        img: images_phimbo.khach_san_vuong_gia,
        derision: 'King the Land 2023 ',
    },

    {
        title: 'Hẹn Gặp Anh Ở Kiếp Thứ 19',
        img: images_phimbo.hen_gap_anh_o_kiep_thu_19,
        derision: 'See You in My 19th Life 2023 ',
    },

    {
        title: 'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn',
        img: images_phimbo.dau_la_dai_luc_2,
        derision: 'Soul Land 2: The Peerless Tang Clan 2023 ',
    },
    {
        title: 'Khi Anh Chạy Về Phía Em',
        img: images_phimbo.khi_anh_chay_ve_phia_em,
        derision: 'When I Fly Towards You 2023 ',
    },

    {
        title: 'Trường Phong Độ',
        img: images_phimbo.truong_phong_do,
        derision: 'Destined 2023 ',
    },

    {
        title: 'La Pluie: Cơn Mưa Khi Ấy, Em Yêu Anh',
        img: images_phimbo.la_pluie,
        derision: 'La Pluie The Series 2023 ',
    },

    {
        title: 'Tuyết Ưng Lĩnh Chủ',
        img: images_phimbo.tuyet_ung_linh_chu,
        derision: 'Snow Eagle Lord 2023 ',
    },

    {
        title: 'Xác Sống: Thành Phố Chết',
        img: images_phimbo.thanh_pho_chet,
        derision: 'The Walking Dead: Dead City 2023 ',
    },

    {
        title: 'Thị Trấn Ác Mộng (Phần 2)',
        img: images_phimbo.from_season,
        derision: 'From Season 2 2023 ',
    },

    {
        title: 'Vụng Trộm Không Thể Giấu',
        img: images_phimbo.vung_trom_khong_the_giau,
        derision: 'Hidden Love 2023 ',
    },

    {
        title: 'Khách Sạn Vương Giả',
        img: images_phimbo.khach_san_vuong_gia,
        derision: 'King the Land 2023 ',
    },

    {
        title: 'Hẹn Gặp Anh Ở Kiếp Thứ 19',
        img: images_phimbo.hen_gap_anh_o_kiep_thu_19,
        derision: 'See You in My 19th Life 2023 ',
    },

    {
        title: 'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn',
        img: images_phimbo.dau_la_dai_luc_2,
        derision: 'Soul Land 2: The Peerless Tang Clan 2023 ',
    },
];

function PhimLe() {
    return (
        <>
            <div className={cx('title-film')}>
                <h1>Phim bộ</h1>
            </div>

            <div>
                <Article items={LIST_ITEM_POSTER} />
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title')}>
                    <h3 className={cx('title-list')}>Phim bộ nổi bật</h3>
                </div>

                <SlideShow items={LIST_ITEMS_OUTSTAND} />
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title')}>
                    <h3 className={cx('title-list')}>Phim bộ mới cập nhật</h3>
                </div>

                {LIST_ITEMS_PHIMBOMOICAPNHAT.map((item, index) => (
                    <Button key={index} className={cx('poster')}>
                        <div className={cx('image')}>
                            <img src={item.img} alt={item.derision} />

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
            </div>

            <div className={cx('btn-page')}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>
                    <FontAwesomeIcon icon={faCaretRight} />
                </button>
            </div>
        </>
    );
}
export default PhimLe;
