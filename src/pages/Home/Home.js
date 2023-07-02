import SlideShow from '../../components/SlideShow/';
import Button from '../../components/Button';
import Article from './Article/';
import images_article from '../../assets/images/article';
import images_newrap from '../../assets/images/newrap';
import images_outstand from '../../assets/images/outstand';
import images_phimbo from '../../assets/images/newbo';
import images_phimle from '../../assets/images/newle';
import images_title_news from '../../assets/images/';

import className from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

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
];

const LIST_ITEMS_NEWS = [
    {
        title: 'Top 12 phim ngôn tình Trung Quốc hay không nên bỏ qua',
        img: images_title_news.title_news,
        derision:
            'List những bộ phim ngôn tình Trung Quốc lãng mạn sẽ khiến tâm hồn bạn trở nên ngọt ngào. Tham khảo ngay top phim tình cảm Trung Quốc đã được phimmoi liệt kê bên dưới nhé!',
        time: '5 MARCH, 2023',
    },

    {
        title: 'Top 10 bộ phim hay nhất mà bạn nên xem một lần trong đời',
        img: images_title_news.title_news,
        derision:
            'Phim truyện là một lĩnh vực rộng lớn, có rất nhiều thể loại phim với nhưng nội dung và ý nghĩa khác nhau. Xem phim không chỉ để giải trí, mà mỗi bộ phim còn đem lại những ý nghĩa, những bài học hoặc những động lực cho chúng ta. Hãy cùng phimmoi điểm qua 10 bộ phim hay nên xem một lần trong đời để thấy được nó ý nghĩa như thế nào nhé!',
        time: '5 MARCH, 2023',
    },

    {
        title: 'Top phim và chương trình ăn khách nhất trên Netflix từ trước đến nay',
        img: images_title_news.title_news,
        derision:
            'Netflix vừa công bố số liệu thống kê hàng tuần cho bộ phim và chương trình truyền hình ăn khách nhất trên nền tảng này. Những năm trước, Netflix thường không chia sẻ số lượng người xem của mình cho đại chúng. Nhưng sau một vài năm giảm số liệu thống kê cho một số chương trình của mình, Netflix đã ra mắt một trang web vào giữa tháng 11 cho phép đăng bảng xếp hạng các chương trình và bộ phim được yêu thích nhất trong tuần. Đồng thời, trang web này cũng công bố bảng xếp hạng các bộ phim được xem nhiều nhất mọi thời đại trên toàn cầu.',
        time: '5 MARCH, 2023',
    },

    {
        title: 'Top 15 phim Nhật hay và ý nghĩa mà các bạn không nên bỏ lỡ',
        img: images_title_news.title_news,
        derision:
            'Khi nhắc đến nền điện ảnh Nhật Bản, hẳn ai cũng sẽ nghĩ đến những bộ anime nổi tiếng trên toàn thế giới. Nhưng bên cạnh đó, các tác phẩm điện ảnh và phim truyền hình của Nhật Bản cũng có chất lượng và sức hấp dẫn không hề kém. Cùng phimmoi điểm qua top các bộ phim Nhật hay nhất không thể bỏ lỡ ngay trong bài viết sau!',
        time: '5 MARCH, 2023',
    },

    {
        title: 'Top 10+ Phim bách hợp Hàn, Trung, Âu Mỹ hay và táo bạo nhất',
        img: images_title_news.title_news,
        derision:
            'Phim bách hợp tuy còn khá mới mẻ nhưng lại được rất nhiều mọt phim ưa thích, đặc biệt là các bạn trẻ. Không chỉ thành công trong việc xây dựng tình huống phim, cách dẫn dắt câu chuyện, lột tả cảm xúc nhân vật của dòng phim này cũng có những chất riêng tạo nên điểm nhấn ấn tượng. Cùng phimmoi khám phá 20+ phim bách hợp Hàn – Trung – Âu hay và táo bạo dưới đây để kiểm chứng!',
        time: '5 MARCH, 2023',
    },

    {
        title: 'Top 10 phim bộ Trung Quốc, Hàn Quốc hay nhất thế giới',
        img: images_title_news.title_news,
        derision:
            'Một bộ phim dài tập sẽ giúp những giây phút nghỉ ngơi, thư giãn của bạn trở nên thú vị, cũng như giải tỏa căng thẳng sau một ngày làm việc, học tập căng thẳng. Trong đó, phim bộ Trung Quốc và Hàn Quốc là thể loại được các mọt phim yêu thích hơn hết. Cùng phimmoi điểm qua top 20 phim bộ hay nhất hiện nay mà dân ghiền phim không nên bỏ lỡ ngay trong bài viết sau đây!',
        time: '5 MARCH, 2023',
    },
];

function Home() {
    return (
        <>
            <div>
                <Article items={LIST_ITEM_POSTER} />
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title')}>
                    <h3 className={cx('title-list')}>Phim mới nổi bật</h3>
                    <Button className={cx('viewmore')}>XEM THÊM</Button>
                </div>

                <SlideShow items={LIST_ITEMS_OUTSTAND} />
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title')}>
                    <h3 className={cx('title-list')}>Phim chiếu rạp mới cập nhật</h3>
                    <Button className={cx('viewmore')}>XEM THÊM</Button>
                </div>
                <SlideShow items={LIST_ITEMS_RAPMOICAPNHAT} />
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title')}>
                    <h3 className={cx('title-list')}>Phim bộ mới cập nhật</h3>
                    <Button className={cx('viewmore')}>XEM THÊM</Button>
                </div>
                <SlideShow items={LIST_ITEMS_PHIMBOMOICAPNHAT} />
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title')}>
                    <h3 className={cx('title-list')}>Phim lẻ mới cập nhật</h3>
                    <Button className={cx('viewmore')}>XEM THÊM</Button>
                </div>
                <SlideShow items={LIST_ITEMS_PHIMLEMOICAPNHAT} />
            </div>

            <div className={cx('list-content')}>
                <div className={cx('title-new')}>
                    <h3 className={cx('title-list')}>Tin Tức</h3>
                    <Link className={cx('viewmore')} to={'/'}>
                        Xem Thêm
                    </Link>
                </div>
                {LIST_ITEMS_NEWS.map((item, index) => (
                    <div key={index} className={cx('post-entry')}>
                        <div className={cx('entry-day')}>
                            <h3>5</h3>
                            <p>MARCH</p>
                        </div>

                        <div className={cx('entry-details')}>
                            <Link to={'/'} className={cx('detail-title')}>
                                {item.title}
                            </Link>
                            <p>{item.derision}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Home;
