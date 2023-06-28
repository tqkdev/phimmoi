import SlideShow from '../../components/SlideShow/';
import Article from '../Home/Article';
import Button from '../../components/Button';
import images_article from '../../assets/images/article';
import images_phimle from '../../assets/images/newle';
import images_outstand from '../../assets/images/outstand';

import className from 'classnames/bind';
import styles from './PhimLe.module.scss';
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

const LIST_ITEMS_PHIMLEMOICAPNHAT = [
    {
        title: 'Transformers 7: Quái Thú Trỗi Dậy',
        img: images_phimle.transformer_7,
        derision: 'Transformers: Rise of the Beasts 2023 ',
    },

    {
        title: 'Quá Nhanh Quá Nguy Hiểm 10',
        img: images_phimle.qua_nhanh_qua_nguy_hiem,
        derision: 'Fast And Furious 10 2023 ',
    },

    {
        title: 'Khoái Cảm',
        img: images_phimle.khoai_cam,
        derision: 'Pleasure 2021 ',
    },

    {
        title: '99 Moons',
        img: images_phimle.moons,
        derision: '99 Moons 2023 ',
    },

    {
        title: 'Người Nhện: Du Hành Vũ Trụ Nhện',
        img: images_phimle.du_hanh_vu_tru_nhen,
        derision: 'Spider-Man: Across the Spider-Verse 2023 ',
    },

    {
        title: 'Dạ Điểu',
        img: images_phimle.da_dieu,
        derision: 'The Night Owl 2022 ',
    },

    {
        title: 'Qua Ô Cửa Sổ: Phần 2',
        img: images_phimle.qua_o_cua_so_p2,
        derision: 'Through My Window: Across the Sea (2023) ',
    },

    {
        title: 'Sơn Thôn Lữ Điếm',
        img: images_phimle.son_thon_lu_diem,
        derision: 'The Haunting 3 2023 ',
    },

    {
        title: 'Rèm Hồng',
        img: images_phimle.rem_hong,
        derision: 'Pink Curtain 1982 ',
    },

    {
        title: 'Trò Chơi Tình Dục',
        img: images_phimle.tro_choi_tinh_duc,
        derision: 'Sex Games 2023 ',
    },
    {
        title: 'Transformers 7: Quái Thú Trỗi Dậy',
        img: images_phimle.transformer_7,
        derision: 'Transformers: Rise of the Beasts 2023 ',
    },

    {
        title: 'Quá Nhanh Quá Nguy Hiểm 10',
        img: images_phimle.qua_nhanh_qua_nguy_hiem,
        derision: 'Fast And Furious 10 2023 ',
    },

    {
        title: 'Khoái Cảm',
        img: images_phimle.khoai_cam,
        derision: 'Pleasure 2021 ',
    },

    {
        title: '99 Moons',
        img: images_phimle.moons,
        derision: '99 Moons 2023 ',
    },

    {
        title: 'Người Nhện: Du Hành Vũ Trụ Nhện',
        img: images_phimle.du_hanh_vu_tru_nhen,
        derision: 'Spider-Man: Across the Spider-Verse 2023 ',
    },

    {
        title: 'Dạ Điểu',
        img: images_phimle.da_dieu,
        derision: 'The Night Owl 2022 ',
    },

    {
        title: 'Qua Ô Cửa Sổ: Phần 2',
        img: images_phimle.qua_o_cua_so_p2,
        derision: 'Through My Window: Across the Sea (2023) ',
    },

    {
        title: 'Sơn Thôn Lữ Điếm',
        img: images_phimle.son_thon_lu_diem,
        derision: 'The Haunting 3 2023 ',
    },

    {
        title: 'Rèm Hồng',
        img: images_phimle.rem_hong,
        derision: 'Pink Curtain 1982 ',
    },

    {
        title: 'Trò Chơi Tình Dục',
        img: images_phimle.tro_choi_tinh_duc,
        derision: 'Sex Games 2023 ',
    },
];

function PhimLe() {
    return (
        <>
            <div className={cx('title-film')}>
                <h1>Phim lẻ</h1>
            </div>

            <div>
                <Article items={LIST_ITEM_POSTER} />
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title')}>
                    <h3 className={cx('title-list')}>Phim lẻ nổi bật</h3>
                </div>

                <SlideShow items={LIST_ITEMS_OUTSTAND} />
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title')}>
                    <h3 className={cx('title-list')}>Phim lẻ mới cập nhật</h3>
                </div>

                {LIST_ITEMS_PHIMLEMOICAPNHAT.map((item, index) => (
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
