import className from 'classnames/bind';
import styles from './Search.module.scss';
import Button from '../../components/Button/Button';
import images_outstand from '../../assets/images/outstand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

const LIST_ITEMS_OUTSTAND = [
    {
        title: 'Transformers 7: Quái Thú Trỗi Dậy',
        img: images_outstand.tranformer_7,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },

    {
        title: 'Người Nhện: Du Hành Vũ Trụ Nhện',
        img: images_outstand.du_hanh_vu_tru_nhen,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },

    {
        title: 'The Flash',
        img: images_outstand.the_flash,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },

    {
        title: 'John Wick: Phần 4',
        img: images_outstand.john_wick_4,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },

    {
        title: ' Nàng Tiên Cá',
        img: images_outstand.nang_tien_ca,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },

    {
        title: 'Người Kiến Và Chiến Binh Ong',
        img: images_outstand.nguoi_kien_va_chien_binh_ong_the_gioi_luong_tu_1,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },

    {
        title: 'Vệ Binh Dải Ngân Hà 3',
        img: images_outstand.ve_binh_dai_ngan_ha_3,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },

    {
        title: 'Avatar: Dòng Chảy Của Nước',
        img: images_outstand.avatar_2,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },

    {
        title: 'Khắc Tinh Của Quỷ',
        img: images_outstand.khac_tinh_cua_quy,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },

    {
        title: 'Chiến Binh Báo Đen: Wakanda Bất Diệt',
        img: images_outstand.chien_binh_bao_den,
        derision:
            'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn (2023) nơi đây không có ma pháp, không có hơn thua, không có võ thuật, nhưng lại có võ hồn. Đường Môn suy thoái sau khi đã thành lập được vạn năm ở Đấu La ...',
        year: '2023',
    },
];

function Search() {
    return (
        <>
            <div className={cx('title')}>
                <h3 className={cx('title-list')}>Kết quả tiềm kiếm: </h3>
            </div>

            {LIST_ITEMS_OUTSTAND.map((item, index) => (
                <Button to={`/movie/${item.title}`} key={index} className={cx('items-list')}>
                    <div className={cx('image')}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className={cx('details')}>
                        <h3>{item.title}</h3>
                        <p>{item.year}</p>
                        <p>{item.derision}</p>
                    </div>
                </Button>
            ))}

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
export default Search;
