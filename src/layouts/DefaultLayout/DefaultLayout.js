import className from 'classnames/bind';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer/Footer';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('content')}>{children}</div>
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
